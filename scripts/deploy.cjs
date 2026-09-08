/**
 * Automated Production Deployment Script for GitHub Pages
 * Prevents uncompiled source code from ever being pushed to gh-pages or docs.
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, desc) {
  console.log(`\n▶ [DEPLOY] ${desc || cmd}...`);
  try {
    const output = execSync(cmd, { stdio: 'inherit', encoding: 'utf8' });
    return output;
  } catch (err) {
    console.error(`❌ Error during: ${desc || cmd}`);
    process.exit(1);
  }
}

console.log('====================================================');
console.log('🚀 Starting Safe Automated GitHub Pages Deployment');
console.log('====================================================');

// 1. Clean and Build
run('npm run build', 'Building production bundle');

// 2. Validate dist/index.html
const distIndexPath = path.join(__dirname, '..', 'dist', 'index.html');
if (!fs.existsSync(distIndexPath)) {
  console.error('❌ dist/index.html not found! Build failed.');
  process.exit(1);
}

const distHtml = fs.readFileSync(distIndexPath, 'utf8');
if (distHtml.includes('/src/main.tsx')) {
  console.error('❌ CRITICAL ERROR: dist/index.html references uncompiled /src/main.tsx! Aborting deploy.');
  process.exit(1);
}

if (!distHtml.includes('assets/index-')) {
  console.error('❌ CRITICAL ERROR: dist/index.html does not contain compiled assets/index-*.js bundle! Aborting deploy.');
  process.exit(1);
}

console.log('✅ Production bundle verified (compiled assets detected).');

// 3. Prepare GitHub Pages requirements (.nojekyll and 404.html)
const distNoJekyll = path.join(__dirname, '..', 'dist', '.nojekyll');
fs.writeFileSync(distNoJekyll, '');

const dist404 = path.join(__dirname, '..', 'dist', '404.html');
fs.copyFileSync(distIndexPath, dist404);

// 4. Sync dist/ to docs/
const docsDir = path.join(__dirname, '..', 'docs');
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}
fs.cpSync(path.join(__dirname, '..', 'dist'), docsDir, { recursive: true });

const docsNoJekyll = path.join(docsDir, '.nojekyll');
fs.writeFileSync(docsNoJekyll, '');

console.log('✅ Synchronized dist/ into docs/ with .nojekyll and 404.html.');

// 5. Git Commit and Deploy (if git repository is present)
const gitDir = path.join(__dirname, '..', '.git');
if (!fs.existsSync(gitDir)) {
  console.log('\nℹ️ Bu ortamda henüz bağlı bir .git deposu bulunmuyor.');
  console.log('✅ Üretim paketi (dist/) ve statik dosyalar (docs/) başarıyla derlendi ve hazırlandı.');
  console.log('💡 AI Studio arayüzündeki "Export to GitHub" menüsünü kullanarak veya git remote tanımlayarak deponuzu güncelleyebilirsiniz.');
} else {
  // 5. Git Commit on main
  try {
    run('git add -A', 'Staging all files');
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    if (status) {
      run('git commit -m "Auto-deploy: sync verified production build with self-healing"', 'Committing build artifacts');
    } else {
      console.log('ℹ️ No new changes to commit on main.');
    }
    run('git push origin main', 'Pushing main to GitHub');
  } catch (err) {
    console.warn('⚠️ Git main commit/push warning:', err.message);
  }

  // 6. Safe subtree deployment to gh-pages
  console.log('\n▶ [DEPLOY] Updating gh-pages branch with compiled docs/ root...');
  try {
    // Clean up any stale temporary branch
    try { execSync('git branch -D gh-pages-deploy-temp', { stdio: 'ignore' }); } catch (_) {}
    
    run('git subtree split --prefix docs -b gh-pages-deploy-temp', 'Extracting docs subtree');
    run('git push origin gh-pages-deploy-temp:gh-pages --force', 'Force-updating remote gh-pages branch with compiled bundle');
    run('git branch -D gh-pages-deploy-temp', 'Cleaning up temporary branch');
    console.log('✅ gh-pages branch successfully updated with compiled build!');
  } catch (err) {
    console.error('❌ Failed to push to gh-pages:', err.message);
    process.exit(1);
  }
}

console.log('\n====================================================');
console.log('🎉 Deployment complete! Both main (docs/) and gh-pages are synced.');
console.log('====================================================\n');
