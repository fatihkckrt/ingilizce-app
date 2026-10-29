// scripts/generate_flawless_180.cjs
const fs = require('fs');
const path = require('path');
const { SHORT_WORDS_SENSES } = require('./short_words_bank.cjs');
const rawDict = require('../src/generated_dictionary.json');
const { WORD_SENSES } = require('./word_senses.cjs');

console.log('================================================================');
console.log('🌟 GENERATING 180 FLAWLESS AUTHENTIC CROSSWORD PUZZLES');
console.log('   - STRICT RULE: 0 boundary violations, 0 accidental runs');
console.log('   - 0 collinear touching without black block');
console.log('   - Every single puzzle strictly verified');
console.log('================================================================');

// 1. Build rich sense dictionary
const allSenses = { ...SHORT_WORDS_SENSES, ...WORD_SENSES };
for (const [k, v] of Object.entries(rawDict)) {
  const upper = k.toUpperCase();
  if (!allSenses[upper]) {
    const cleanMeaning = v.replace(/\s*\([^)]*\)\s*/g, '').trim();
    allSenses[upper] = [{ pos: 'i.', posName: 'İsim', meaning: cleanMeaning || k.toLowerCase() }];
  }
}

function getWordMetadata(w, defaultPos = 'i.', defaultPosName = 'İsim') {
  const upper = w.toUpperCase();
  if (allSenses[upper] && allSenses[upper].length > 0) {
    const senses = allSenses[upper];
    const primary = senses[0];
    const clueText = senses.map(s => `(${s.pos}) ${s.meaning}`).join('  •  ');
    return {
      senses,
      clue: clueText,
      partOfSpeech: primary.pos,
      partOfSpeechName: primary.posName
    };
  }

  return {
    senses: [{ pos: defaultPos, posName: defaultPosName, meaning: w.toLowerCase() }],
    clue: `(${defaultPos}) ${w.toLowerCase()}`,
    partOfSpeech: defaultPos,
    partOfSpeechName: defaultPosName
  };
}

// 2. Vocabulary Pools by Length
const wordsByLen = {};
for (let len = 2; len <= 12; len++) {
  wordsByLen[len] = [];
}
Object.keys(allSenses).forEach(w => {
  const len = w.length;
  if (wordsByLen[len]) {
    wordsByLen[len].push(w);
  }
});

const A1_WORDS = new Set([
  'CAT', 'DOG', 'SUN', 'TEA', 'RED', 'DAY', 'SEA', 'CAR', 'RUN', 'BOY', 'SKY', 'AIR', 'PEN', 'EGG', 'BOX', 'ARM', 'BED', 'BUS', 'CUP', 'KEY', 'MAP', 'JOY', 'WIN', 'HOT', 'ICE', 'BAG', 'FLY', 'JOB', 'TOP', 'ZOO', 'BIG', 'BAD', 'MAD', 'HAT', 'EYE', 'EAR', 'EAT', 'END', 'FAR', 'FEW', 'FIT', 'FUN', 'LEG', 'LIP', 'LOW', 'MAN', 'MAY', 'NEW', 'NOT', 'NOW', 'OLD', 'ONE', 'OUT', 'PAY', 'ROW', 'SAD', 'SAY', 'SEE', 'SET', 'SIT', 'SON', 'TOY', 'TRY', 'TWO', 'USE', 'WAY', 'YES',
  'HOME', 'BOOK', 'MILK', 'PARK', 'LIKE', 'TREE', 'BLUE', 'COLD', 'FISH', 'TIME', 'BIRD', 'DOOR', 'RAIN', 'SNOW', 'STAR', 'FOOD', 'WALK', 'HELP', 'LOOK', 'FIND', 'GIVE', 'KNOW', 'READ', 'SEND', 'SHOW', 'STAY', 'TAKE', 'TELL', 'WAIT', 'WISH', 'YEAR', 'WEEK', 'CITY', 'DESK', 'ROOM', 'TALK', 'ROAD', 'BABY', 'BALL', 'CAKE', 'COAT', 'FARM', 'GAME', 'GOLD', 'HAIR', 'HAND', 'HEAD', 'HILL', 'KING', 'LAKE', 'LAND', 'LEAF', 'LIFE', 'LOVE', 'MEAT', 'NAME', 'NEWS', 'NOSE', 'PAGE', 'RING', 'ROSE', 'SALT', 'SAND', 'SHOP', 'SONG', 'SOUP', 'TOWN', 'WALL', 'WIFE', 'WOOD', 'WORD', 'DARK', 'DEEP', 'EASY', 'FAST', 'FREE', 'FULL', 'GOOD', 'HARD', 'HIGH', 'LONG', 'POOR', 'RICH', 'SAFE', 'TRUE', 'WARM', 'COME', 'FALL', 'FEEL', 'GROW', 'HEAR', 'HOLD', 'KEEP', 'LIVE', 'MAKE', 'MOVE', 'OPEN', 'PASS', 'PULL', 'PUSH', 'RIDE', 'RISE', 'SAVE', 'SING', 'STOP', 'WEAR',
  'APPLE', 'WATER', 'BREAD', 'HOUSE', 'TABLE', 'CHAIR', 'MUSIC', 'NIGHT', 'LIGHT', 'GREEN', 'WHITE', 'BLACK', 'MONEY', 'HAPPY', 'SMILE', 'EARTH', 'PLANT', 'TRAIN', 'RIVER', 'CLEAN', 'DRIVE', 'DRINK', 'SLEEP', 'STAND', 'LEARN', 'WRITE', 'HEART', 'STORY', 'WATCH', 'BEACH', 'SWEET', 'LUNCH', 'HOTEL', 'PRICE', 'STORE', 'MOVIE', 'PARTY'
]);

function getCandidates(level, len, seed = 0) {
  const pool = wordsByLen[len] || [];
  let preferred = [];
  if (level === 'A1') {
    preferred = pool.filter(w => A1_WORDS.has(w));
  } else if (level === 'A2') {
    preferred = pool.filter(w => A1_WORDS.has(w) || w.length <= 6);
  } else {
    preferred = pool;
  }

  const combined = preferred.length >= 8 ? [...preferred, ...pool.filter(w => !preferred.includes(w))] : pool;
  const offset = (seed * 17 + 7) % Math.max(1, combined.length);
  return combined.slice(offset).concat(combined.slice(0, offset));
}

// 3. Strict Crossword Validator
function validateFullCrossword(size, clues) {
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const errors = [];

  for (const c of clues) {
    const dir = c.direction || c.dir;
    const word = c.word.toUpperCase();
    const len = word.length;
    for (let i = 0; i < len; i++) {
      const r = dir === 'across' ? c.row : c.row + i;
      const col = dir === 'across' ? c.col + i : c.col;
      if (r < 0 || r >= size || col < 0 || col >= size) {
        errors.push(`Clue ${word} out of bounds at (${r},${col})`);
        continue;
      }
      if (grid[r][col] !== null && grid[r][col] !== word[i]) {
        errors.push(`Clue ${word} conflicts at (${r},${col})`);
      }
      grid[r][col] = word[i];
    }
  }

  // Check ends
  for (const c of clues) {
    const dir = c.direction || c.dir;
    const len = c.word.length;
    if (dir === 'across') {
      if (c.col > 0 && grid[c.row][c.col - 1] !== null) {
        errors.push(`Across ${c.word} touches cell before it at (${c.row},${c.col-1})`);
      }
      if (c.col + len < size && grid[c.row][c.col + len] !== null) {
        errors.push(`Across ${c.word} touches cell after it at (${c.row},${c.col+len})`);
      }
    } else {
      if (c.row > 0 && grid[c.row - 1][c.col] !== null) {
        errors.push(`Down ${c.word} touches cell above it at (${c.row-1},${c.col})`);
      }
      if (c.row + len < size && grid[c.row + len][c.col] !== null) {
        errors.push(`Down ${c.word} touches cell below it at (${c.row+len},${c.col})`);
      }
    }
  }

  // Check runs
  for (let r = 0; r < size; r++) {
    let run = 0, start = -1;
    for (let c = 0; c <= size; c++) {
      if (c < size && grid[r][c] !== null) {
        if (run === 0) start = c;
        run++;
      } else {
        if (run >= 2) {
          if (!clues.some(cl => (cl.direction === 'across' || cl.dir === 'across') && cl.row === r && cl.col === start && cl.word.length === run)) {
            errors.push(`Accidental across at row ${r}, col ${start}, len ${run}`);
          }
        }
        run = 0; start = -1;
      }
    }
  }

  for (let c = 0; c < size; c++) {
    let run = 0, start = -1;
    for (let r = 0; r <= size; r++) {
      if (r < size && grid[r][c] !== null) {
        if (run === 0) start = r;
        run++;
      } else {
        if (run >= 2) {
          if (!clues.some(cl => (cl.direction === 'down' || cl.dir === 'down') && cl.col === c && cl.row === start && cl.word.length === run)) {
            errors.push(`Accidental down at col ${c}, row ${start}, len ${run}`);
          }
        }
        run = 0; start = -1;
      }
    }
  }

  // Check connectivity & intersection
  for (const c of clues) {
    let intersects = 0;
    const dir = c.direction || c.dir;
    for (let i = 0; i < c.word.length; i++) {
      const r = dir === 'across' ? c.row : c.row + i;
      const col = dir === 'across' ? c.col + i : c.col;
      const otherDir = dir === 'across' ? 'down' : 'across';
      const hasOther = clues.some(o => (o.direction === otherDir || o.dir === otherDir) && (
        otherDir === 'down' ? (o.col === col && r >= o.row && r < o.row + o.word.length) : (o.row === r && col >= o.col && col < o.col + o.word.length)
      ));
      if (hasOther) intersects++;
    }
    if (intersects === 0) {
      errors.push(`Clue ${c.word} has no crossings`);
    }
  }

  return errors;
}

// 4. Guaranteed Solvers by Size
function solvePuzzle({ level, size, seed }) {
  const cands = (len) => getCandidates(level, len, seed);

  // SIZE 5x5:
  if (size === 5) {
    const w3 = cands(3);
    const w5 = cands(5);

    // Template 5A
    if (seed % 2 === 0) {
      for (const h1 of w3) {
        const v1s = w3.filter(w => w !== h1 && w[0] === h1[0]);
        for (const v1 of v1s.slice(0, 15)) {
          const v2s = w5.filter(w => w !== h1 && w !== v1 && w[0] === h1[2]);
          for (const v2 of v2s.slice(0, 12)) {
            const h2s = w5.filter(w => w !== h1 && w !== v1 && w !== v2 && w[0] === v1[2] && w[2] === v2[2]);
            for (const h2 of h2s.slice(0, 10)) {
              const v3s = w3.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w[0] === h2[4]);
              for (const v3 of v3s.slice(0, 8)) {
                const h3s = w3.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w[0] === v2[4] && w[2] === v3[2]);
                if (h3s.length > 0) {
                  const clues = [
                    { word: h1, dir: 'across', row: 0, col: 0 },
                    { word: v1, dir: 'down', row: 0, col: 0 },
                    { word: h2, dir: 'across', row: 2, col: 0 },
                    { word: v2, dir: 'down', row: 0, col: 2 },
                    { word: h3s[0], dir: 'across', row: 4, col: 2 },
                    { word: v3, dir: 'down', row: 2, col: 4 }
                  ];
                  if (validateFullCrossword(5, clues).length === 0) return clues;
                }
              }
            }
          }
        }
      }
    }

    // Template 5B (Mirrored)
    for (const h1 of w3) {
      const v1s = w3.filter(w => w !== h1 && w[0] === h1[2]);
      for (const v1 of v1s.slice(0, 15)) {
        const v2s = w5.filter(w => w !== h1 && w !== v1 && w[0] === h1[0]);
        for (const v2 of v2s.slice(0, 12)) {
          const h2s = w5.filter(w => w !== h1 && w !== v1 && w !== v2 && w[2] === v2[2] && w[4] === v1[2]);
          for (const h2 of h2s.slice(0, 10)) {
            const v3s = w3.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w[0] === h2[0]);
            for (const v3 of v3s.slice(0, 8)) {
              const h3s = w3.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w[0] === v3[2] && w[2] === v2[4]);
              if (h3s.length > 0) {
                const clues = [
                  { word: h1, dir: 'across', row: 0, col: 2 },
                  { word: v1, dir: 'down', row: 0, col: 4 },
                  { word: h2, dir: 'across', row: 2, col: 0 },
                  { word: v2, dir: 'down', row: 0, col: 2 },
                  { word: h3s[0], dir: 'across', row: 4, col: 0 },
                  { word: v3, dir: 'down', row: 2, col: 0 }
                ];
                if (validateFullCrossword(5, clues).length === 0) return clues;
              }
            }
          }
        }
      }
    }
  }

  // SIZE 6x6:
  if (size === 6) {
    const w3 = cands(3);
    const w4 = cands(4);
    const w6 = cands(6);

    for (const h1 of w4) {
      const v1s = w3.filter(w => w !== h1 && w[0] === h1[0]);
      for (const v1 of v1s.slice(0, 15)) {
        const v2s = w6.filter(w => w !== h1 && w !== v1 && w[0] === h1[2]);
        for (const v2 of v2s.slice(0, 12)) {
          const h2s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w[0] === v1[2] && w[2] === v2[2]);
          for (const h2 of h2s.slice(0, 10)) {
            const v3s = w4.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w[0] === h2[5]);
            for (const v3 of v3s.slice(0, 8)) {
              const h3s = w4.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w[0] === v2[5] && w[3] === v3[3]);
              if (h3s.length > 0) {
                const clues = [
                  { word: h1, dir: 'across', row: 0, col: 0 },
                  { word: v1, dir: 'down', row: 0, col: 0 },
                  { word: h2, dir: 'across', row: 2, col: 0 },
                  { word: v2, dir: 'down', row: 0, col: 2 },
                  { word: v3, dir: 'down', row: 2, col: 5 },
                  { word: h3s[0], dir: 'across', row: 5, col: 2 }
                ];
                if (validateFullCrossword(6, clues).length === 0) return clues;
              }
            }
          }
        }
      }
    }
  }

  // SIZE 7x7: Staircase Architecture (3, 4, 5, 6 letter words)
  if (size === 7) {
    const w3 = cands(3);
    const w4 = cands(4);
    const w5 = cands(5);
    const w6 = cands(6);

    for (const h1 of w4.slice(0, 30)) {
      const v1s = w3.filter(w => w !== h1 && w[0] === h1[0]);
      for (const v1 of v1s.slice(0, 6)) {
        const v2s = w5.filter(w => w !== h1 && w !== v1 && w[0] === h1[2]);
        for (const v2 of v2s.slice(0, 6)) {
          const h2s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w[0] === v1[2] && w[2] === v2[2]);
          for (const h2 of h2s.slice(0, 6)) {
            const v3s = w5.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w[0] === h2[4]);
            for (const v3 of v3s.slice(0, 6)) {
              const h3s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w[1] === v2[4] && w[3] === v3[2]);
              for (const h3 of h3s.slice(0, 6)) {
                const v4s = w3.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w[0] === h3[5]);
                for (const v4 of v4s.slice(0, 6)) {
                  const h4s = w4.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w !== v4 && w[1] === v3[4] && w[3] === v4[2]);
                  if (h4s.length > 0) {
                    const clues = [
                      { word: h1, dir: 'across', row: 0, col: 0 },
                      { word: h2, dir: 'across', row: 2, col: 0 },
                      { word: h3, dir: 'across', row: 4, col: 1 },
                      { word: h4s[0], dir: 'across', row: 6, col: 3 },
                      { word: v1, dir: 'down', row: 0, col: 0 },
                      { word: v2, dir: 'down', row: 0, col: 2 },
                      { word: v3, dir: 'down', row: 2, col: 4 },
                      { word: v4, dir: 'down', row: 4, col: 6 }
                    ];
                    if (validateFullCrossword(7, clues).length === 0) return clues;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // SIZE 8x8: Staircase Architecture (3, 5, 6 letter words)
  if (size === 8) {
    const w3 = cands(3);
    const w5 = cands(5);
    const w6 = cands(6);

    for (const h1 of w5.slice(0, 30)) {
      const v1s = w3.filter(w => w !== h1 && w[0] === h1[0]);
      for (const v1 of v1s.slice(0, 6)) {
        const v2s = w6.filter(w => w !== h1 && w !== v1 && w[0] === h1[3]);
        for (const v2 of v2s.slice(0, 6)) {
          const h2s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w[0] === v1[2] && w[3] === v2[2]);
          for (const h2 of h2s.slice(0, 6)) {
            const v3s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w[0] === h2[5]);
            for (const v3 of v3s.slice(0, 6)) {
              const h3s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w[1] === v2[5] && w[3] === v3[3]);
              for (const h3 of h3s.slice(0, 6)) {
                const v4s = w3.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w[0] === h3[5]);
                for (const v4 of v4s.slice(0, 6)) {
                  const h4s = w5.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w !== v4 && w[2] === v3[5] && w[4] === v4[2]);
                  if (h4s.length > 0) {
                    const clues = [
                      { word: h1, dir: 'across', row: 0, col: 0 },
                      { word: h2, dir: 'across', row: 2, col: 0 },
                      { word: h3, dir: 'across', row: 5, col: 2 },
                      { word: h4s[0], dir: 'across', row: 7, col: 3 },
                      { word: v1, dir: 'down', row: 0, col: 0 },
                      { word: v2, dir: 'down', row: 0, col: 3 },
                      { word: v3, dir: 'down', row: 2, col: 5 },
                      { word: v4, dir: 'down', row: 5, col: 7 }
                    ];
                    if (validateFullCrossword(8, clues).length === 0) return clues;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // SIZE 9x9: Staircase Architecture (3, 5, 6 letter words)
  if (size === 9) {
    const w3 = cands(3);
    const w5 = cands(5);
    const w6 = cands(6);

    for (const h1 of w5.slice(0, 25)) {
      const v1s = w3.filter(w => w !== h1 && w[0] === h1[0]);
      for (const v1 of v1s.slice(0, 5)) {
        const v2s = w5.filter(w => w !== h1 && w !== v1 && w[0] === h1[2]);
        for (const v2 of v2s.slice(0, 5)) {
          const h2s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w[0] === v1[2] && w[2] === v2[2]);
          for (const h2 of h2s.slice(0, 5)) {
            const v3s = w5.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w[0] === h2[4]);
            for (const v3 of v3s.slice(0, 5)) {
              const h3s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w[0] === v2[4] && w[2] === v3[2]);
              for (const h3 of h3s.slice(0, 5)) {
                const v4s = w5.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w[0] === h3[4]);
                for (const v4 of v4s.slice(0, 5)) {
                  const h4s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w !== v4 && w[1] === v3[4] && w[3] === v4[2]);
                  for (const h4 of h4s.slice(0, 5)) {
                    const v5s = w3.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w !== v4 && w !== h4 && w[0] === h4[5]);
                    for (const v5 of v5s.slice(0, 5)) {
                      const h5s = w5.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w !== v4 && w !== h4 && w !== v5 && w[2] === v4[4] && w[4] === v5[2]);
                      if (h5s.length > 0) {
                        const clues = [
                          { word: h1, dir: 'across', row: 0, col: 0 },
                          { word: h2, dir: 'across', row: 2, col: 0 },
                          { word: h3, dir: 'across', row: 4, col: 2 },
                          { word: h4, dir: 'across', row: 6, col: 3 },
                          { word: h5s[0], dir: 'across', row: 8, col: 4 },
                          { word: v1, dir: 'down', row: 0, col: 0 },
                          { word: v2, dir: 'down', row: 0, col: 2 },
                          { word: v3, dir: 'down', row: 2, col: 4 },
                          { word: v4, dir: 'down', row: 4, col: 6 },
                          { word: v5, dir: 'down', row: 6, col: 8 }
                        ];
                        if (validateFullCrossword(9, clues).length === 0) return clues;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // SIZE 10x10: Staircase Architecture (3, 6 letter words)
  if (size === 10) {
    const w3 = cands(3);
    const w6 = cands(6);

    for (const h1 of w6.slice(0, 25)) {
      const v1s = w3.filter(w => w !== h1 && w[0] === h1[0]);
      for (const v1 of v1s.slice(0, 5)) {
        const v2s = w6.filter(w => w !== h1 && w !== v1 && w[0] === h1[3]);
        for (const v2 of v2s.slice(0, 5)) {
          const h2s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w[0] === v1[2] && w[3] === v2[2]);
          for (const h2 of h2s.slice(0, 5)) {
            const v3s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w[0] === h2[5]);
            for (const v3 of v3s.slice(0, 5)) {
              const h3s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w[1] === v2[5] && w[3] === v3[3]);
              for (const h3 of h3s.slice(0, 5)) {
                const v4s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w[1] === h3[5]);
                for (const v4 of v4s.slice(0, 5)) {
                  const h4s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w !== v4 && w[1] === v3[5] && w[3] === v4[3]);
                  for (const h4 of h4s.slice(0, 5)) {
                    const v5s = w3.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w !== v4 && w !== h4 && w[0] === h4[5]);
                    for (const v5 of v5s.slice(0, 5)) {
                      const h5s = w6.filter(w => w !== h1 && w !== v1 && w !== v2 && w !== h2 && w !== v3 && w !== h3 && w !== v4 && w !== h4 && w !== v5 && w[3] === v4[5] && w[5] === v5[2]);
                      if (h5s.length > 0) {
                        const clues = [
                          { word: h1, dir: 'across', row: 0, col: 0 },
                          { word: h2, dir: 'across', row: 2, col: 0 },
                          { word: h3, dir: 'across', row: 5, col: 2 },
                          { word: h4, dir: 'across', row: 7, col: 4 },
                          { word: h5s[0], dir: 'across', row: 9, col: 4 },
                          { word: v1, dir: 'down', row: 0, col: 0 },
                          { word: v2, dir: 'down', row: 0, col: 3 },
                          { word: v3, dir: 'down', row: 2, col: 5 },
                          { word: v4, dir: 'down', row: 4, col: 7 },
                          { word: v5, dir: 'down', row: 7, col: 9 }
                        ];
                        if (validateFullCrossword(10, clues).length === 0) return clues;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return null;
}

// 5. Clue Numbering and Grid Construction
function formatNumberedClues(rawClues) {
  const cellMap = {};
  rawClues.forEach(c => {
    const key = `${c.row},${c.col}`;
    if (!cellMap[key]) cellMap[key] = [];
    cellMap[key].push(c);
  });

  const sortedKeys = Object.keys(cellMap).sort((a, b) => {
    const [r1, c1] = a.split(',').map(Number);
    const [r2, c2] = b.split(',').map(Number);
    return r1 !== r2 ? r1 - r2 : c1 - c2;
  });

  let num = 1;
  const clueNumMap = new Map();
  sortedKeys.forEach(k => {
    cellMap[k].forEach(c => {
      clueNumMap.set(c, num);
    });
    num++;
  });

  return rawClues.map(c => {
    const cNum = clueNumMap.get(c);
    const meta = getWordMetadata(c.word);
    return {
      id: `${cNum}-${c.dir}`,
      number: cNum,
      direction: c.dir,
      word: c.word.toUpperCase(),
      row: c.row,
      col: c.col,
      length: c.word.length,
      clue: meta.clue,
      partOfSpeech: meta.partOfSpeech,
      partOfSpeechName: meta.partOfSpeechName,
      senses: meta.senses
    };
  }).sort((a, b) => a.number - b.number || (a.direction === 'across' ? -1 : 1));
}

// 6. Theme and Title Mapping
const THEMES_BY_SIZE = {
  5: ['Temel Kelimeler', 'Giriş & Başlangıç', 'Mini Sözlük', 'Hızlı Pratik', 'Gündelik Yaşam', 'İlk Adım', 'Kelime Dünyası'],
  6: ['Doğa & Çevre', 'Ev & Yaşam', 'Duygular & İnsan', 'Şehir & Ulaşım', 'Sanat & Kültür', 'Yiyecek & İçecek', 'Hobiler & Oyun'],
  7: ['Eğitim & Okul', 'Teknoloji & Bilim', 'Seyahat & Gezi', 'İş & Meslekler', 'Zaman & Tarih', 'İletişim & Medya', 'Sağlık & Spor'],
  8: ['Karakter & Kişilik', 'Toplum & Kültür', 'Hava & Doğa Olayları', 'Gelişmiş İfadeler', 'Kariyer & Başarı', 'Düşünce & Mantık', 'Ticaret & Ekonomi'],
  9: ['Akademik & İleri Seviye', 'Bilim & Keşifler', 'Edebiyat & Fikirler', 'Hukuk & Adalet', 'Gezegen & Evren', 'Psikoloji & Zihin', 'Felsefe & Yaşam'],
  10: ['Ustalık & Zirve', 'Karmaşık Kavramlar', 'Zengin İfadeler', 'Büyük Bulmaca', 'Strateji & Vizyon', 'Global Dünya', 'Büyük Kelime Ustası']
};

// 7. Generate All 180 Puzzles
const PUZZLE_SIZES = [5, 6, 7, 8, 9, 10];
const LEVELS = ['A1', 'A2', 'B1', 'B2'];

const allPuzzles = [];
let totalSolved = 0;
let totalFailed = 0;

LEVELS.forEach(level => {
  console.log(`\n🧩 Solving puzzles for Level ${level}...`);
  let levelIdx = 1;

  PUZZLE_SIZES.forEach(size => {
    const countForSize = (size === 5 || size === 6 || size === 7) ? 8 : 7;
    const themes = THEMES_BY_SIZE[size];

    for (let i = 0; i < countForSize; i++) {
      const pid = `${level.toLowerCase()}-${size}x${size}-${i + 1}`;
      let solvedClues = null;

      // Try multiple seeds until verified
      for (let attempt = 0; attempt < 80; attempt++) {
        const seed = (level.charCodeAt(0) * 100) + (level.charCodeAt(1) || 0) + (size * 31) + (i * 13) + attempt;
        const res = solvePuzzle({ level, size, seed });
        if (res && res.length >= 6) {
          const errs = validateFullCrossword(size, res);
          if (errs.length === 0) {
            solvedClues = res;
            break;
          }
        }
      }

      if (solvedClues) {
        totalSolved++;
        const numberedClues = formatNumberedClues(solvedClues);
        const theme = themes[i % themes.length];
        allPuzzles.push({
          id: pid,
          title: `${theme} #${i + 1}`,
          level,
          size,
          description: `${level} seviyesinde ${size}x${size} çengel ve kare bulmaca`,
          theme,
          clues: numberedClues
        });
      } else {
        totalFailed++;
        console.error(`❌ FAILED TO SOLVE: ${pid} (${level} ${size}x${size})`);
      }
      levelIdx++;
    }
  });
});

console.log(`\n================================================================`);
console.log(`RESULTS: ${totalSolved} solved, ${totalFailed} failed.`);

if (totalSolved === 180) {
  // STRICT POST-VALIDATION OF ALL 180 PUZZLES
  console.log('🔍 Running final verification on all 180 puzzles...');
  let totalErrors = 0;
  allPuzzles.forEach(p => {
    const errs = validateFullCrossword(p.size, p.clues);
    if (errs.length > 0) {
      console.error(`ERROR in ${p.id}:`, errs);
      totalErrors += errs.length;
    }
  });

  if (totalErrors === 0) {
    console.log('✅ ALL 180 PUZZLES ARE 100% COMPLIANT WITH ZERO ERRORS!');

    // Write to src/puzzleData.ts
    const fileContent = `// src/puzzleData.ts
// 🌟 180 Fully Validated, Authentic Crossword Puzzles
// Strict Grammar: 0 boundary violations, 0 accidental runs, true black blocks!

export interface WordSense {
  pos: string;
  posName: string;
  meaning: string;
}

export type ClueSense = WordSense;

export interface PuzzleClue {
  id: string;
  number: number;
  direction: 'across' | 'down';
  word: string;
  clue: string;
  senses: WordSense[];
  partOfSpeech: string;
  partOfSpeechName: string;
  row: number;
  col: number;
  length: number;
}

export type PuzzleFrequencyLevel = 'high' | 'medium' | 'advanced';

export interface PuzzleDefinition {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  size: 5 | 6 | 7 | 8 | 9 | 10;
  description: string;
  theme?: string;
  clues: PuzzleClue[];
  frequencyLevel?: PuzzleFrequencyLevel;
  frequencyLabel?: string;
}

export type CrosswordPuzzle = PuzzleDefinition;

export const PUZZLES: PuzzleDefinition[] = ${JSON.stringify(allPuzzles, null, 2)};

export const PUZZLE_LEVELS: ('A1' | 'A2' | 'B1' | 'B2')[] = ['A1', 'A2', 'B1', 'B2'];
export const PUZZLE_SIZES: (5 | 6 | 7 | 8 | 9 | 10)[] = [5, 6, 7, 8, 9, 10];

export interface CompletedPuzzleRecord {
  puzzleId: string;
  completedAt: number;
  secondsTaken: number;
  score: number;
  hintsUsed: number;
}

export function getPuzzlesByLevelAndSize(level: 'A1' | 'A2' | 'B1' | 'B2', size?: 5 | 6 | 7 | 8 | 9 | 10): PuzzleDefinition[] {
  return PUZZLES.filter(p => p.level === level && (size ? p.size === size : true));
}

export function getPuzzleById(id: string): PuzzleDefinition | undefined {
  return PUZZLES.find(p => p.id === id);
}

export function getPosBadgeClasses(pos: string): { bg: string; text: string; border: string; label: string; fullName: string } {
  const normalized = (pos || '').toLowerCase().trim().replace(/[().]/g, '');
  switch (normalized) {
    case 'i':
    case 'isim':
      return { 
        bg: 'bg-blue-500/10 dark:bg-blue-400/15', 
        text: 'text-blue-700 dark:text-blue-300 font-black', 
        border: 'border-blue-300/80 dark:border-blue-600/70', 
        label: 'i.',
        fullName: 'İsim'
      };
    case 'f':
    case 'fiil':
      return { 
        bg: 'bg-emerald-500/10 dark:bg-emerald-400/15', 
        text: 'text-emerald-700 dark:text-emerald-300 font-black', 
        border: 'border-emerald-300/80 dark:border-emerald-600/70', 
        label: 'f.',
        fullName: 'Fiil'
      };
    case 's':
    case 'sıfat':
    case 'sifat':
      return { 
        bg: 'bg-amber-500/10 dark:bg-amber-400/15', 
        text: 'text-amber-700 dark:text-amber-300 font-black', 
        border: 'border-amber-300/80 dark:border-amber-600/70', 
        label: 's.',
        fullName: 'Sıfat'
      };
    case 'zf':
    case 'zarf':
      return { 
        bg: 'bg-indigo-500/10 dark:bg-indigo-400/15', 
        text: 'text-indigo-700 dark:text-indigo-300 font-black', 
        border: 'border-indigo-300/80 dark:border-indigo-600/70', 
        label: 'zf.',
        fullName: 'Zarf'
      };
    case 'zm':
    case 'zamir':
      return { 
        bg: 'bg-purple-500/10 dark:bg-purple-400/15', 
        text: 'text-purple-700 dark:text-purple-300 font-black', 
        border: 'border-purple-300/80 dark:border-purple-600/70', 
        label: 'zm.',
        fullName: 'Zamir'
      };
    case 'e':
    case 'edat':
      return { 
        bg: 'bg-rose-500/10 dark:bg-rose-400/15', 
        text: 'text-rose-700 dark:text-rose-300 font-black', 
        border: 'border-rose-300/80 dark:border-rose-600/70', 
        label: 'e.',
        fullName: 'Edat'
      };
    case 'b':
    case 'baglac':
    case 'bağlaç':
      return { 
        bg: 'bg-teal-500/10 dark:bg-teal-400/15', 
        text: 'text-teal-700 dark:text-teal-300 font-black', 
        border: 'border-teal-300/80 dark:border-teal-600/70', 
        label: 'b.',
        fullName: 'Bağlaç'
      };
    default:
      return { 
        bg: 'bg-slate-100 dark:bg-slate-800', 
        text: 'text-slate-700 dark:text-slate-300 font-bold', 
        border: 'border-slate-300 dark:border-slate-700', 
        label: pos || 'kelime',
        fullName: 'Kelime'
      };
  }
}

export interface PuzzleFrequencyInfo {
  level: PuzzleFrequencyLevel;
  label: string;
  badge: string;
  tagClass: string;
}

export function getPuzzleFrequencyInfo(puzzle: PuzzleDefinition): PuzzleFrequencyInfo {
  if (puzzle.frequencyLevel) {
    if (puzzle.frequencyLevel === 'high') {
      return {
        level: 'high',
        label: puzzle.frequencyLabel || 'En Sık Kullanılanlar',
        badge: '🔥 En Sık',
        tagClass: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900'
      };
    }
    if (puzzle.frequencyLevel === 'medium') {
      return {
        level: 'medium',
        label: puzzle.frequencyLabel || 'Günlük Pratik & Orta',
        badge: '⭐ Günlük Pratik',
        tagClass: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900'
      };
    }
    return {
      level: 'advanced',
      label: puzzle.frequencyLabel || 'Zengin & İleri Düzey',
      badge: '💎 Zengin Kelimeler',
      tagClass: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-900'
    };
  }
  if (puzzle.level === 'A1') {
    return {
      level: 'high',
      label: 'En Sık Kullanılanlar (Temel A1)',
      badge: '🔥 En Sık',
      tagClass: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900'
    };
  }
  if (puzzle.level === 'A2') {
    if (puzzle.size <= 6) {
      return {
        level: 'high',
        label: 'Sık Kullanılan Günlük Kelimeler',
        badge: '🔥 En Sık',
        tagClass: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900'
      };
    }
    return {
      level: 'medium',
      label: 'Günlük Pratik & Diyaloglar',
      badge: '⭐ Günlük Pratik',
      tagClass: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900'
    };
  }
  if (puzzle.level === 'B1') {
    if (puzzle.size <= 7) {
      return {
        level: 'medium',
        label: 'İş & Sosyal Hayat Kelimeleri',
        badge: '⭐ Günlük Pratik',
        tagClass: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900'
      };
    }
    return {
      level: 'advanced',
      label: 'Zengin B1 Kelimeleri',
      badge: '💎 Zengin Kelimeler',
      tagClass: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-900'
    };
  }
  return {
    level: 'advanced',
    label: 'İleri Düzey & Zengin Kelimeler',
    badge: '💎 Zengin Kelimeler',
    tagClass: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900'
  };
}
`;

    fs.writeFileSync(path.join(__dirname, '../src/puzzleData.ts'), fileContent, 'utf-8');
    console.log('🎉 Successfully saved all 180 puzzles to src/puzzleData.ts!');
  } else {
    console.error(`❌ Post-validation failed with ${totalErrors} errors.`);
    process.exit(1);
  }
} else {
  console.error(`❌ Did not solve all 180 puzzles.`);
  process.exit(1);
}


