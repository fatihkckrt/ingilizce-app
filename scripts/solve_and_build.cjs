// scripts/solve_and_build.cjs
const fs = require('fs');
const path = require('path');

// Load full dictionary
const rawDict = require('../src/generated_dictionary.json');

// Helper to clean definition
function getClue(w, customClue) {
  if (customClue) return customClue;
  const raw = rawDict[w.toLowerCase()];
  if (raw) return raw.replace(/\s*\([^)]*\)/g, '').trim();
  return 'İngilizce kelime';
}

// Function to find a valid crossword layout given a grid size and candidate words
function buildGridPuzzle({ id, title, level, size, description, targetWordsWithClues }) {
  // Let's attempt standard interlocking patterns:
  // For 5x5:
  // Pattern A:
  // Horizontal H1 at row 0 (or 1), H2 at row 2, H3 at row 4 (or 3)
  // Vertical V1 at col 0 (or 1), V2 at col 2 (or 3), V3 at col 4
  
  // Let's create candidate crossword configs:
  const words = targetWordsWithClues.map(item => ({
    word: item.word.toUpperCase(),
    clue: item.clue || getClue(item.word)
  }));

  // We can test layout candidates:
  const clues = [];
  const grid = Array.from({ length: size }, () => Array(size).fill(null));

  for (const item of targetWordsWithClues) {
    const w = item.word.toUpperCase();
    const len = w.length;
    let placed = false;

    if (item.dir === 'across') {
      const r = item.row;
      const c = item.col;
      let ok = true;
      if (c + len > size || r >= size) ok = false;
      if (ok) {
        for (let i = 0; i < len; i++) {
          if (grid[r][c + i] && grid[r][c + i] !== w[i]) {
            ok = false;
            break;
          }
        }
      }
      if (ok) {
        for (let i = 0; i < len; i++) grid[r][c + i] = w[i];
        clues.push({
          id: `${item.num}-across`,
          number: item.num,
          direction: 'across',
          word: w,
          clue: item.clue,
          row: r,
          col: c,
          length: len
        });
        placed = true;
      }
    } else {
      const r = item.row;
      const c = item.col;
      let ok = true;
      if (r + len > size || c >= size) ok = false;
      if (ok) {
        for (let i = 0; i < len; i++) {
          if (grid[r + i][c] && grid[r + i][c] !== w[i]) {
            ok = false;
            break;
          }
        }
      }
      if (ok) {
        for (let i = 0; i < len; i++) grid[r + i][c] = w[i];
        clues.push({
          id: `${item.num}-down`,
          number: item.num,
          direction: 'down',
          word: w,
          clue: item.clue,
          row: r,
          col: c,
          length: len
        });
        placed = true;
      }
    }

    if (!placed) {
      throw new Error(`Failed to place ${item.word} at ${item.dir} (${item.row},${item.col}) in puzzle ${id}`);
    }
  }

  // Sort clues by number
  clues.sort((a, b) => a.number - b.number || (a.direction === 'across' ? -1 : 1));

  return {
    id,
    title,
    level,
    size,
    description,
    clues
  };
}

console.log('Grid builder helper defined');
