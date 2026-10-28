// scripts/update_puzzle_data_with_frequency.cjs
const fs = require('fs');
const path = require('path');
const { PUZZLES } = require('../src/puzzleData.ts');
const { testPuzzle } = require('./test_grid.cjs');

console.log("Reading existing puzzles:", PUZZLES.length);

// 1. Prepare b1-7x7-2 replacement
const b1_7x7_2_replacement = {
  id: "b1-7x7-2",
  title: "Aile, Yaşam & Çevre",
  level: "B1",
  size: 7,
  frequencyLevel: "medium",
  frequencyLabel: "Günlük Pratik",
  description: "Ebeveynler, giysiler, aşırı durumlar, sistemler ve giriş yapma üzerine 7 kelimeli zengin çengel bulmaca.",
  clues: [
    {
      id: "1-across",
      number: 1,
      direction: "across",
      word: "PARENTS",
      clue: "(i.) ebeveyn, ana baba, veli",
      senses: [
        { pos: "i.", posName: "İsim", meaning: "ebeveyn, ana baba, veli" }
      ],
      partOfSpeech: "i.",
      partOfSpeechName: "İsim",
      row: 0,
      col: 0,
      length: 7
    },
    {
      id: "1-down",
      number: 1,
      direction: "down",
      word: "POCKETS",
      clue: "(i.) cep; torba, kese  •  (f.) cebe atmak",
      senses: [
        { pos: "i.", posName: "İsim", meaning: "cep; torba, kese" },
        { pos: "f.", posName: "Fiil", meaning: "cebe atmak" }
      ],
      partOfSpeech: "i.",
      partOfSpeechName: "İsim",
      row: 0,
      col: 0,
      length: 7
    },
    {
      id: "2-down",
      number: 2,
      direction: "down",
      word: "ENTERED",
      clue: "(f.) girdi, içeri girdi, katıldı",
      senses: [
        { pos: "f.", posName: "Fiil", meaning: "girdi, içeri girdi, katıldı" }
      ],
      partOfSpeech: "f.",
      partOfSpeechName: "Fiil",
      row: 0,
      col: 3,
      length: 7
    },
    {
      id: "3-down",
      number: 3,
      direction: "down",
      word: "SYSTEMS",
      clue: "(i.) sistemler, düzenler, yöntemler, mekanizmalar",
      senses: [
        { pos: "i.", posName: "İsim", meaning: "sistemler, düzenler, yöntemler, mekanizmalar" }
      ],
      partOfSpeech: "i.",
      partOfSpeechName: "İsim",
      row: 0,
      col: 6,
      length: 7
    },
    {
      id: "4-across",
      number: 4,
      direction: "across",
      word: "CLOTHES",
      clue: "(i.) giysi, elbise, kıyafet, çamaşır",
      senses: [
        { pos: "i.", posName: "İsim", meaning: "giysi, elbise, kıyafet, çamaşır" }
      ],
      partOfSpeech: "i.",
      partOfSpeechName: "İsim",
      row: 2,
      col: 0,
      length: 7
    },
    {
      id: "5-across",
      number: 5,
      direction: "across",
      word: "EXTREME",
      clue: "(s.) aşırı, uç, radikal, fevkalade  •  (i.) aşırılık, uç nokta",
      senses: [
        { pos: "s.", posName: "Sıfat", meaning: "aşırı, uç, radikal, fevkalade" },
        { pos: "i.", posName: "İsim", meaning: "aşırılık, uç nokta" }
      ],
      partOfSpeech: "s.",
      partOfSpeechName: "Sıfat",
      row: 4,
      col: 0,
      length: 7
    },
    {
      id: "6-across",
      number: 6,
      direction: "across",
      word: "SPIDERS",
      clue: "(i.) örümcekler",
      senses: [
        { pos: "i.", posName: "İsim", meaning: "örümcekler" }
      ],
      partOfSpeech: "i.",
      partOfSpeechName: "İsim",
      row: 6,
      col: 0,
      length: 7
    }
  ]
};

// Verify replacement
testPuzzle(b1_7x7_2_replacement.id, b1_7x7_2_replacement.size, b1_7x7_2_replacement.clues);
console.log("b1-7x7-2 replacement verified!");

// Frequency classification logic:
// We classify puzzles based on:
// 1) Level
// 2) The nature of vocabulary used in the puzzle
function getFrequencyClassification(puzzle) {
  const lvl = puzzle.level;
  const id = puzzle.id;
  const title = puzzle.title;

  if (lvl === 'A1') {
    // Basic daily items and home/family
    if (id.includes('5x5-1') || id.includes('5x5-2') || id.includes('5x5-3') || id.includes('5x5-5') || id.includes('6x6-1') || id.includes('6x6-2')) {
      return { level: 'high', label: 'En Sık Kullanılanlar' };
    }
    if (id.includes('7x7') || id.includes('8x8') || id.includes('9x9') || id.includes('10x10')) {
      return { level: 'medium', label: 'Günlük Pratik' };
    }
    return { level: 'high', label: 'En Sık Kullanılanlar' };
  }

  if (lvl === 'A2') {
    if (id.includes('5x5-1') || id.includes('5x5-2') || id.includes('5x5-3') || id.includes('6x6-1') || id.includes('6x6-2')) {
      return { level: 'high', label: 'En Sık Kullanılanlar' };
    }
    if (id.includes('9x9') || id.includes('10x10')) {
      return { level: 'advanced', label: 'Zengin Kelimeler' };
    }
    return { level: 'medium', label: 'Günlük Pratik' };
  }

  if (lvl === 'B1') {
    if (id.includes('5x5-1') || id.includes('5x5-2') || id.includes('6x6-1') || id.includes('6x6-2')) {
      return { level: 'medium', label: 'Günlük Pratik' };
    }
    if (id.includes('8x8') || id.includes('9x9') || id.includes('10x10') || id.includes('7x7')) {
      return { level: 'advanced', label: 'Zengin Kelimeler' };
    }
    return { level: 'medium', label: 'Günlük Pratik' };
  }

  if (lvl === 'B2') {
    if (id.includes('5x5-1') || id.includes('5x5-2') || id.includes('6x6-1')) {
      return { level: 'medium', label: 'Günlük Pratik' };
    }
    return { level: 'advanced', label: 'Zengin Kelimeler' };
  }

  return { level: 'medium', label: 'Günlük Pratik' };
}

const updatedPuzzles = PUZZLES.map(p => {
  let puzzle = p;
  if (p.id === 'b1-7x7-2') {
    puzzle = b1_7x7_2_replacement;
  }
  const freq = getFrequencyClassification(puzzle);
  return {
    ...puzzle,
    frequencyLevel: freq.level,
    frequencyLabel: freq.label
  };
});

// Verify all puzzles
updatedPuzzles.forEach(p => {
  testPuzzle(p.id, p.size, p.clues);
});
console.log("All updated puzzles successfully passed testPuzzle!");

// Read the beginning of puzzleData.ts up to PUZZLES definition
const originalContent = fs.readFileSync(path.join(__dirname, '../src/puzzleData.ts'), 'utf-8');
const puzzleStartMarker = 'export const PUZZLES: PuzzleDefinition[] = [';
const puzzleStartIndex = originalContent.indexOf(puzzleStartMarker);
if (puzzleStartIndex === -1) {
  throw new Error("Could not find PUZZLES start marker");
}

const helperFunctionsMarker = 'export const PUZZLE_LEVELS';
const helperIndex = originalContent.indexOf(helperFunctionsMarker);
if (helperIndex === -1) {
  throw new Error("Could not find helper functions marker");
}

const headerTypes = `// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App

export interface WordSense {
  pos: string; // 'i.', 'f.', 's.', 'zf.', 'zm.', 'e.', 'b.'
  posName: string; // 'İsim', 'Fiil', 'Sıfat', etc.
  meaning: string;
}

export interface PuzzleClue {
  id: string; // e.g., '1-across', '2-down'
  number: number;
  direction: 'across' | 'down';
  word: string; // UPPERCASE
  clue: string; // Turkish dictionary entry
  senses: WordSense[];
  partOfSpeech: string; // 'i.', 'f.', 's.', 'zf.', 'zm.', 'e.', 'b.'
  partOfSpeechName: string; // 'İsim', 'Fiil', 'Sıfat'
  row: number; // 0-based
  col: number; // 0-based
  length: number;
}

export type FrequencyLevel = 'high' | 'medium' | 'advanced';

export interface PuzzleDefinition {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  size: 5 | 6 | 7 | 8 | 9 | 10;
  frequencyLevel: FrequencyLevel;
  frequencyLabel: string;
  description: string;
  clues: PuzzleClue[];
}

export const PUZZLE_LEVELS: Array<'A1' | 'A2' | 'B1' | 'B2'> = ['A1', 'A2', 'B1', 'B2'];
export const PUZZLE_SIZES: Array<5 | 6 | 7 | 8 | 9 | 10> = [5, 6, 7, 8, 9, 10];

export const PUZZLES: PuzzleDefinition[] = `;

const helpersContent = originalContent.substring(helperIndex);

const fullNewContent = headerTypes + JSON.stringify(updatedPuzzles, null, 2) + ';\n\n' + helpersContent;

fs.writeFileSync(path.join(__dirname, '../src/puzzleData.ts'), fullNewContent, 'utf-8');
console.log("Successfully wrote updated puzzleData.ts with frequency levels and b1-7x7-2 fix!");
