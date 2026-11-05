// scripts/test_grid.cjs
const fs = require('fs');

function testPuzzle(id, size, clues) {
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  for (const c of clues) {
    const word = c.word.toUpperCase();
    const len = word.length;
    if (c.direction === 'across') {
      if (c.row < 0 || c.row >= size || c.col < 0 || c.col + len > size) {
        throw new Error(`${id} Across ${word} out of bounds`);
      }
      for (let i = 0; i < len; i++) {
        if (grid[c.row][c.col + i] !== null && grid[c.row][c.col + i] !== word[i]) {
          throw new Error(`${id} Across ${word} mismatch at (${c.row},${c.col+i}): expected ${word[i]} got ${grid[c.row][c.col+i]}`);
        }
        grid[c.row][c.col + i] = word[i];
      }
    } else {
      if (c.col < 0 || c.col >= size || c.row < 0 || c.row + len > size) {
        throw new Error(`${id} Down ${word} out of bounds`);
      }
      for (let i = 0; i < len; i++) {
        if (grid[c.row + i][c.col] !== null && grid[c.row + i][c.col] !== word[i]) {
          throw new Error(`${id} Down ${word} mismatch at (${c.row+i},${c.col}): expected ${word[i]} got ${grid[c.row+i][c.col]}`);
        }
        grid[c.row + i][c.col] = word[i];
      }
    }
  }
  return true;
}

module.exports = { testPuzzle };
