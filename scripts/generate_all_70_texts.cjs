// scripts/generate_all_70_texts.cjs
// Script to assemble and export all 70 texts:
// 30 texts for A1 (ids 1..30)
// 30 texts for A2 (ids 31..60)
// 5 texts for B1 (ids 61..65)
// 5 texts for B2 (ids 66..70)

const fs = require('fs');

// Read original texts from src/data.ts
const dataContent = fs.readFileSync('src/data.ts', 'utf8');
const originalTextsMatch = dataContent.match(/const defaultTexts = \[([\s\S]*?)\];\s*\n\s*(const|export|let)/);

if (!originalTextsMatch) {
  console.error("Could not find defaultTexts in src/data.ts");
  process.exit(1);
}

const originalTexts = eval("[" + originalTextsMatch[1] + "]");
console.log(`Loaded ${originalTexts.length} original texts from src/data.ts`);

const originalA1 = originalTexts.filter(t => t.level === 'A1'); // IDs 1..5
const originalA2 = originalTexts.filter(t => t.level === 'A2'); // IDs 6..10
const originalB1 = originalTexts.filter(t => t.level === 'B1'); // IDs 11..15
const originalB2 = originalTexts.filter(t => t.level === 'B2'); // IDs 16..20

// Load our pre-written A1 texts (6..30)
const { newA1Part1 } = require('./texts_a1_part1.cjs');
const { newA1Part2 } = require('./texts_a1_part2.cjs');

// Load our pre-written A2 texts (36..60)
const { newA2Part1 } = require('./texts_a2_part1.cjs');
const { newA2Part2 } = require('./texts_a2_part2.cjs');

const fullA1 = [...originalA1, ...newA1Part1, ...newA1Part2];
const renumberedA2Original = originalA2.map((t, idx) => ({ ...t, id: 31 + idx }));
const fullA2 = [...renumberedA2Original, ...newA2Part1, ...newA2Part2];

const renumberedB1 = originalB1.map((t, idx) => ({ ...t, id: 61 + idx }));
const renumberedB2 = originalB2.map((t, idx) => ({ ...t, id: 66 + idx }));

const allTexts = [...fullA1, ...fullA2, ...renumberedB1, ...renumberedB2];

console.log(`Total A1 texts: ${fullA1.length}`);
console.log(`Total A2 texts: ${fullA2.length}`);
console.log(`Total B1 texts: ${renumberedB1.length}`);
console.log(`Total B2 texts: ${renumberedB2.length}`);
console.log(`Total assembled texts: ${allTexts.length}`);

// Write to src/defaultTextsData.ts
const fileOutput = `// src/defaultTextsData.ts
// Comprehensive Reading Texts Database: 30 A1, 30 A2, 5 B1, 5 B2 (70 total)

export interface SentenceItem {
  id: number;
  eng: string;
  tr: string;
}

export interface QuestionItem {
  q: string;
  options: string[];
  answer: number;
}

export interface ReadingText {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  title: string;
  bgImage: string;
  sentences: SentenceItem[];
  questions: QuestionItem[];
}

export const defaultTexts: ReadingText[] = ${JSON.stringify(allTexts, null, 2)};
`;

fs.writeFileSync('src/defaultTextsData.ts', fileOutput, 'utf8');
console.log('Successfully wrote src/defaultTextsData.ts!');
