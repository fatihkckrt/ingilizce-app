# Project Context & Agent Guidelines

## Application Overview: İngilizce Öğren (English Learning App)
This application is a comprehensive English learning platform combining:
1. **Multi-level Reading Texts:** CEFR levels (A1, A2, B1, B2) with paired sentence-by-sentence English & Turkish translations and reading comprehension quizzes.
2. **Karaoke & Speech Synthesis (TTS):** Synchronized speech playback using `window.speechSynthesis` with real-time sentence and word-level karaoke highlights.
3. **Leitner Spaced Repetition System (SRS):** 5-box spaced repetition system for saved vocabulary with review scheduling (`LEITNER_INTERVALS`), review counts, mastery tracking, and streak calculations.
4. **Interactive Dictionary & Phrase Hunter:** Instant translation tooltips, quick-add to vocabulary notebook, and external dictionary links (Google Translate, Tureng).
5. **Robust Local Persistence:** Hybrid storage using `localStorage` for user preferences/completed items and `IndexedDB` (`EnglishLearnAppDB`, store `app_store`) for scalable vocabulary state.

## Codebase Architecture
- `src/App.tsx`: Main React component managing application views, karaoke audio player, Leitner SRS study sessions, text readers, quizzes, and vocabulary lists.
- `src/data.ts`: Core data storage including `dictionary` lookup, `wordLevelMap`, `LEITNER_INTERVALS`, `levels`, `defaultTexts`, and `IndexedDB` helper functions (`idbGet`, `idbSet`, `initDB`).
- `src/index.css`: Tailwind configuration and custom styling for `.karaoke-highlight`, `.word-highlight`, `.phrase-hunter-highlight`, glassmorphism, and scrollbars.

## Critical Development Rules
- **Base Baseline:** All future user requests must be built on top of this existing codebase.
- **Preserve Existing Features:** Do not remove or regress the Leitner SRS engine, the Web Speech karaoke synchronization, the vocabulary storage, or the reading texts.
- **Incremental Modifications:** When modifying or adding features, ensure compatibility with `src/data.ts` and `src/App.tsx` data structures.
- **GitHub Repository & Deployment Setup:**
  - **Remote Repository:** `https://github.com/fatihkckrt/ingilizce-app`
  - **User:** `fatihkckrt` (fatihkckrt@gmail.com)
  - **Credentials:** Securely stored in `.env` (`GITHUB_TOKEN`, `GITHUB_REPO`, `GITHUB_USERNAME`, `GITHUB_EMAIL`). The `.env` file is gitignored to protect the token from GitHub Secret Scanners.
  - **Automated Git Setup:** `scripts/deploy.cjs` is configured to auto-initialize `.git` and configure authenticated git remotes using `.env` whenever needed.
- **Continuous GitHub Sync & Safe Deployment (CRITICAL):**
  - To deploy updates safely, **ALWAYS run `npm run deploy`**.
  - The `npm run deploy` command (`scripts/deploy.cjs`) automatically builds the production bundle, verifies compiled assets in `dist/index.html`, copies with `.nojekyll` and `404.html` to `docs/`, commits and pushes to `main`, and uses `git subtree split` to safely update the root of `gh-pages` with the compiled files.
  - **CRITICAL WARNING:** NEVER run `git push origin main:gh-pages --force`! Doing so pushes raw uncompiled TypeScript source code (`/src/main.tsx`) to GitHub Pages, which immediately causes a fatal JavaScript syntax error and a blank white screen on mobile devices. Always use `npm run deploy`.
