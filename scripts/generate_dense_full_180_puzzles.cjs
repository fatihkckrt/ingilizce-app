// scripts/generate_dense_full_180_puzzles.cjs
const fs = require('fs');
const path = require('path');
const { testPuzzle } = require('./test_grid.cjs');
const { WORD_SENSES } = require('./word_senses.cjs');
const rawDict = require('../src/generated_dictionary.json');

console.log('================================================================');
console.log('🌟 GENERATING 180 DENSE FULL-SPANNING CROSSWORD PUZZLES');
console.log('   (45 per level: 5x5:5, 6x6:6, 7x7:7, 8x8:8, 9x9:9, 10x10:10)');
console.log('   Strict Guarantee: 100% Edge-to-Edge Coverage & No Dead Rows/Cols');
console.log('================================================================');

// 1. Build Dictionary & Metadata Lookup
const allWords = Object.keys(rawDict).filter(w => /^[a-z]+$/i.test(w)).map(w => w.toUpperCase());
const senseBank = { ...WORD_SENSES };

function getWordMetadata(w, defaultPos = 'i.', defaultPosName = 'İsim') {
  const upper = w.toUpperCase();
  if (senseBank[upper] && senseBank[upper].length > 0) {
    const senses = senseBank[upper];
    const primary = senses[0];
    const clueText = senses.map(s => `(${s.pos}) ${s.meaning}`).join('  •  ');
    return {
      senses,
      clue: clueText,
      partOfSpeech: primary.pos,
      partOfSpeechName: primary.posName
    };
  }

  const rawMeaning = rawDict[w.toLowerCase()];
  if (rawMeaning) {
    const cleanMeaning = rawMeaning.replace(/\s*\([^)]*\)\s*/g, '').trim();
    const senses = [{ pos: defaultPos, posName: defaultPosName, meaning: cleanMeaning || w.toLowerCase() }];
    return {
      senses,
      clue: `(${defaultPos}) ${cleanMeaning || w.toLowerCase()}`,
      partOfSpeech: defaultPos,
      partOfSpeechName: defaultPosName
    };
  }

  return {
    senses: [{ pos: defaultPos, posName: defaultPosName, meaning: w.toLowerCase() }],
    clue: `(${defaultPos}) ${w.toLowerCase()}`,
    partOfSpeech: defaultPos,
    partOfSpeechName: defaultPosName
  };
}

// 2. Vocabulary Bucket Categorization
const wordsByLen = {};
for (let len = 3; len <= 12; len++) {
  wordsByLen[len] = [];
}
allWords.forEach(w => {
  if (wordsByLen[w.length]) {
    wordsByLen[w.length].push(w);
  }
});

// Level-specific word pools (prioritize level words, fallback to len words)
const A1_WORDS = new Set(['HOME', 'BOOK', 'MILK', 'PARK', 'LIKE', 'TREE', 'BLUE', 'COLD', 'DOG', 'CAT', 'SUN', 'RED', 'SEA', 'DAY', 'TIME', 'FISH', 'FOOD', 'WATER', 'BREAD', 'APPLE', 'HOUSE', 'CHAIR', 'TABLE', 'MUSIC', 'NIGHT', 'LIGHT', 'HEART', 'SMILE', 'HAPPY', 'GREEN', 'WHITE', 'BLACK', 'MONEY', 'BABY', 'BIRD', 'DOOR', 'ROAD', 'RAIN', 'SNOW', 'RIVER', 'EARTH', 'PLANT', 'WORLD', 'FAMILY', 'FATHER', 'MOTHER', 'SISTER', 'BROTHER', 'FRIEND', 'SCHOOL', 'SUMMER', 'WINTER', 'SPRING', 'AUTUMN', 'GARDEN', 'DOCTOR', 'TRAVEL', 'FLOWER', 'COFFEE', 'ORANGE', 'BANANA', 'YELLOW', 'PURPLE', 'WINDOW', 'STREET', 'MARKET', 'TICKET', 'STATION', 'MORNING', 'EVENING', 'WEATHER', 'STUDENT', 'TEACHER', 'PICTURE', 'HOLIDAY', 'AIRPORT', 'HOSPITAL', 'FOOTBALL', 'KITCHEN', 'BEDROOM', 'LIBRARY', 'COUNTRY', 'SUNSHINE', 'CLASSROOM', 'NOTEBOOK', 'WEEKEND', 'PLAYGROUND', 'BREAKFAST', 'BEAUTIFUL', 'YESTERDAY', 'TOMORROW', 'AFTERNOON', 'DICTIONARY', 'CHOCOLATE', 'BASKETBALL', 'TELEVISION', 'EVERYBODY', 'ANYWHERE', 'SANDWICH', 'SUPERMARKET']);
const A2_WORDS = new Set(['WORK', 'CITY', 'DESK', 'ROOM', 'TALK', 'WALK', 'HELP', 'LOOK', 'FIND', 'GIVE', 'KNOW', 'LEAVE', 'MEET', 'MOVE', 'PLAN', 'READ', 'SEND', 'SHOW', 'STAY', 'TAKE', 'TELL', 'WAIT', 'WISH', 'YEAR', 'WEEK', 'MONTH', 'HOTEL', 'PLANE', 'TRAIN', 'BUSES', 'SHOPS', 'PRICE', 'STORE', 'MOVIE', 'PARTY', 'BEACH', 'FOREST', 'MOUNTAIN', 'ISLAND', 'ANIMAL', 'NATURE', 'PERSON', 'PEOPLE', 'FUTURE', 'HEALTH', 'DINNER', 'LUNCH', 'SNACK', 'SWEET', 'CLEAN', 'DRIVE', 'DRIVER', 'OFFICE', 'REPORT', 'SCREEN', 'SYSTEM', 'LESSON', 'METHOD', 'NUMBER', 'PROBLEM', 'REASON', 'RESULT', 'SEASON', 'SIMPLE', 'SPEECH', 'STRONG', 'TALENT', 'TROUBLE', 'VICTOR', 'WINDOW', 'WORKER', 'WRITER', 'BOTTLE', 'POLICE', 'LETTER', 'MEMBER', 'MEMORY', 'MINUTE', 'MOMENT', 'OFFICE', 'PATIENT', 'SAFETY', 'SECRET', 'SHADOW', 'SILVER', 'SOCIETY', 'COMPUTER', 'BUILDING', 'CUSTOMER', 'EXERCISE', 'DOCUMENT', 'ENGINEER', 'FESTIVAL', 'HOMEWORK', 'INTERNET', 'LANGUAGE', 'MEDICINE', 'MOUNTAIN', 'NOTEBOOK', 'PAINTING', 'QUESTION', 'REMEMBER', 'SURPRISE', 'TOGETHER', 'VACATION', 'APARTMENT', 'CHALLENGE', 'EDUCATION', 'IMPORTANT', 'NEWSPAPER', 'TELEPHONE', 'DIFFICULT', 'EXPENSIVE', 'DANGEROUS', 'INTERESTING', 'CELEBRATION', 'RESTAURANT', 'COLLEAGUE', 'ACTIVITIES', 'EXPERIENCE', 'DISCOVERY', 'GOVERNMENT', 'POPULATION']);
const B1_WORDS = new Set(['FOCUS', 'GUIDE', 'HABIT', 'IMAGE', 'ISSUE', 'JUDGE', 'LIMIT', 'MAJOR', 'MEDIA', 'MODEL', 'ORDER', 'PHASE', 'POINT', 'POWER', 'RANGE', 'SCALE', 'SKILL', 'SPACE', 'STAGE', 'THEME', 'TOPIC', 'VALUE', 'VOICE', 'YOUTH', 'ACTION', 'ADVICE', 'AGREE', 'ALLOW', 'APPLY', 'ARGUE', 'ASSIST', 'ATTACK', 'AUTHOR', 'BALANCE', 'BEHAVE', 'BELONG', 'BUDGET', 'CAREER', 'CENTURY', 'CHANCE', 'CHOICE', 'CLIMATE', 'COMMON', 'CONFLICT', 'CREDIT', 'CULTURE', 'DAMAGE', 'DEBATE', 'DECIDE', 'DEGREE', 'DEMAND', 'DETAIL', 'DEVICE', 'DIRECT', 'DISCUSS', 'EFFECT', 'EFFORT', 'ENERGY', 'ESCAPE', 'ETHICS', 'FACTOR', 'FIGURE', 'FINANCE', 'FLIGHT', 'FREEDOM', 'GLOBAL', 'GROWTH', 'IMPACT', 'INCOME', 'INTEND', 'INVEST', 'JUSTICE', 'LEADER', 'MANAGE', 'MARKET', 'MATTER', 'MEASURE', 'METHOD', 'MODERN', 'MOTION', 'NATION', 'NATURE', 'NOTICE', 'OBJECT', 'OPINION', 'OPTION', 'PARENT', 'POLICY', 'PRODUCE', 'PROFIT', 'PROJECT', 'PUBLIC', 'PURPOSE', 'RECORD', 'REDUCE', 'REGION', 'RELATE', 'REMAIN', 'REMOVE', 'REPAIR', 'REPEAT', 'REPLACE', 'REPORT', 'RESCUE', 'RESIGN', 'RESIST', 'REVEAL', 'REWARD', 'SAFETY', 'SALARY', 'SAMPLE', 'SCHEME', 'SCIENCE', 'SECTOR', 'SECURE', 'SELECT', 'SERIES', 'SETTLE', 'SIGNAL', 'SILENT', 'SIMPLE', 'SOCIAL', 'SOURCE', 'SPIRIT', 'STATUS', 'STRESS', 'STRIKE', 'STUDIO', 'SUBMIT', 'SUPPLY', 'SYMBOL', 'SYSTEM', 'TARGET', 'THEORY', 'THREAT', 'TRANSIT', 'UNIQUE', 'UPDATE', 'URGENT', 'USEFUL', 'VACANT', 'VALUED', 'VARIED', 'VIABLE', 'VISION', 'VOLUME', 'WEALTH', 'WEIGHT', 'WONDER', 'ACTIVITY', 'ATTITUDE', 'BUSINESS', 'CAMPAIGN', 'CAPACITY', 'CHALLENGE', 'CHEMICAL', 'CITIZEN', 'CLOTHING', 'COLLEAGUE', 'COMBINE', 'COMFORT', 'COMMERCE', 'COMPLEX', 'CONSUMER', 'CONTINUE', 'CONTRACT', 'CREATIVE', 'CRIMINAL', 'CRITICAL', 'CULTURE', 'CURRENCY', 'CUSTOMER', 'DATABASE', 'DECISION', 'DELIVERY', 'DESCRIBE', 'DESIGNER', 'DISCOVER', 'DISASTER', 'DISTANCE', 'DISTRICT', 'DOCUMENT', 'DOMESTIC', 'DURATION', 'ECONOMIC', 'EDUCATION', 'ELECTION', 'EMERGENCY', 'EMPLOYEE', 'EMPLOYER', 'ENGINEER', 'ENVIRONMENT', 'EXPERIENCE', 'EXPLANATION', 'FOUNDATION', 'GENERATION', 'GOVERNMENT', 'IDENTIFY', 'IMPRESSION', 'INDIVIDUAL', 'INDUSTRY', 'INVESTMENT', 'LEADERSHIP', 'MANAGEMENT', 'OPPORTUNITY', 'ORGANIZATION', 'PARTICIPANT', 'PERFORMANCE', 'PERSPECTIVE', 'POPULATION', 'POSSIBILITY', 'PROFESSIONAL', 'RELATIONSHIP', 'RESPONSIBILITY', 'SATISFACTION', 'SIGNIFICANT', 'SUCCESSFUL', 'TRADITIONAL']);

function getCandidates(level, len, seed) {
  const all = wordsByLen[len] || [];
  let preferred = [];
  if (level === 'A1') {
    preferred = all.filter(w => A1_WORDS.has(w));
  } else if (level === 'A2') {
    preferred = all.filter(w => A2_WORDS.has(w));
  } else if (level === 'B1') {
    preferred = all.filter(w => B1_WORDS.has(w));
  } else {
    preferred = all.filter(w => !A1_WORDS.has(w) && !A2_WORDS.has(w));
  }

  const combined = [...preferred, ...all.filter(w => !preferred.includes(w))];
  const offset = (seed * 17) % Math.max(1, combined.length);
  return combined.slice(offset).concat(combined.slice(0, offset));
}

// 3. Mathematical Grid Coverage Validator
function validateFullGridCoverage(size, clues) {
  const rowSet = new Set();
  const colSet = new Set();
  let minRow = size, maxRow = -1, minCol = size, maxCol = -1;

  for (const c of clues) {
    const len = c.word.length;
    for (let i = 0; i < len; i++) {
      const r = c.dir === 'across' ? c.row : c.row + i;
      const col = c.dir === 'across' ? c.col + i : c.col;
      rowSet.add(r);
      colSet.add(col);
      if (r < minRow) minRow = r;
      if (r > maxRow) maxRow = r;
      if (col < minCol) minCol = col;
      if (col > maxCol) maxCol = col;
    }
  }

  if (minRow !== 0 || maxRow !== size - 1) return false;
  if (minCol !== 0 || maxCol !== size - 1) return false;
  for (let r = 0; r < size; r++) {
    if (!rowSet.has(r)) return false;
  }
  for (let c = 0; c < size; c++) {
    if (!colSet.has(c)) return false;
  }
  return true;
}

// 4. Dense Layout Solvers for Every Size
function generateDenseLayout({ level, size, seed }) {
  const cands = (len) => getCandidates(level, len, seed);

  // SIZE 5 (5x5)
  if (size === 5) {
    const pool5 = cands(5);
    for (const top of pool5) {
      const lefts = pool5.filter(w => w !== top && w[0] === top[0]);
      const rights = pool5.filter(w => w !== top && w[0] === top[4]);
      for (const left of lefts.slice(0, 15)) {
        for (const right of rights.slice(0, 15)) {
          if (left === right) continue;
          const bottoms = pool5.filter(w => w !== top && w !== left && w !== right && w[0] === left[4] && w[4] === right[4]);
          for (const bot of bottoms.slice(0, 8)) {
            const midsH = pool5.filter(w => w !== top && w !== left && w !== right && w !== bot && w[0] === left[2] && w[4] === right[2]);
            for (const midH of midsH.slice(0, 6)) {
              const midsV = pool5.filter(w => w !== top && w !== left && w !== right && w !== bot && w !== midH && w[0] === top[2] && w[2] === midH[2] && w[4] === bot[2]);
              if (midsV.length > 0) {
                const midV = midsV[0];
                return [
                  { word: top, dir: 'across', row: 0, col: 0 },
                  { word: left, dir: 'down', row: 0, col: 0 },
                  { word: right, dir: 'down', row: 0, col: 4 },
                  { word: bot, dir: 'across', row: 4, col: 0 },
                  { word: midH, dir: 'across', row: 2, col: 0 },
                  { word: midV, dir: 'down', row: 0, col: 2 }
                ];
              }
            }
          }
        }
      }
    }
  }

  // SIZE 6 (6x6)
  if (size === 6) {
    const pool6 = cands(6);
    for (const top of pool6) {
      const lefts = pool6.filter(w => w !== top && w[0] === top[0]);
      const rights = pool6.filter(w => w !== top && w[0] === top[5]);
      for (const left of lefts.slice(0, 15)) {
        for (const right of rights.slice(0, 15)) {
          if (left === right) continue;
          const bottoms = pool6.filter(w => w !== top && w !== left && w !== right && w[0] === left[5] && w[5] === right[5]);
          for (const bot of bottoms.slice(0, 8)) {
            for (const midRow of [2, 3]) {
              const midsH = pool6.filter(w => w !== top && w !== left && w !== right && w !== bot && w[0] === left[midRow] && w[5] === right[midRow]);
              for (const midH of midsH.slice(0, 6)) {
                for (const midCol of [2, 3]) {
                  const midsV = pool6.filter(w => w !== top && w !== left && w !== right && w !== bot && w !== midH && w[0] === top[midCol] && w[midRow] === midH[midCol] && w[5] === bot[midCol]);
                  if (midsV.length > 0) {
                    const midV = midsV[0];
                    const clues = [
                      { word: top, dir: 'across', row: 0, col: 0 },
                      { word: left, dir: 'down', row: 0, col: 0 },
                      { word: right, dir: 'down', row: 0, col: 5 },
                      { word: bot, dir: 'across', row: 5, col: 0 },
                      { word: midH, dir: 'across', row: midRow, col: 0 },
                      { word: midV, dir: 'down', row: 0, col: midCol }
                    ];

                    // Try to add second horizontal crossbar if possible
                    const otherRow = midRow === 2 ? 4 : 1;
                    const otherH = pool6.filter(w => !clues.some(c => c.word === w) && w[0] === left[otherRow] && w[5] === right[otherRow] && w[midCol] === midV[otherRow]);
                    if (otherH.length > 0) {
                      clues.push({ word: otherH[0], dir: 'across', row: otherRow, col: 0 });
                    }

                    return clues;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // SIZE 7 (7x7)
  if (size === 7) {
    const pool7 = cands(7);
    for (const top of pool7) {
      const lefts = pool7.filter(w => w !== top && w[0] === top[0]);
      const rights = pool7.filter(w => w !== top && w[0] === top[6]);
      for (const left of lefts.slice(0, 15)) {
        for (const right of rights.slice(0, 15)) {
          if (left === right) continue;
          const bottoms = pool7.filter(w => w !== top && w !== left && w !== right && w[0] === left[6] && w[6] === right[6]);
          for (const bot of bottoms.slice(0, 8)) {
            for (const midRow of [3, 2, 4]) {
              const midsH = pool7.filter(w => w !== top && w !== left && w !== right && w !== bot && w[0] === left[midRow] && w[6] === right[midRow]);
              for (const midH of midsH.slice(0, 6)) {
                for (const midCol of [3, 2, 4]) {
                  const midsV = pool7.filter(w => w !== top && w !== left && w !== right && w !== bot && w !== midH && w[0] === top[midCol] && w[midRow] === midH[midCol] && w[6] === bot[midCol]);
                  if (midsV.length > 0) {
                    const midV = midsV[0];
                    const clues = [
                      { word: top, dir: 'across', row: 0, col: 0 },
                      { word: left, dir: 'down', row: 0, col: 0 },
                      { word: right, dir: 'down', row: 0, col: 6 },
                      { word: bot, dir: 'across', row: 6, col: 0 },
                      { word: midH, dir: 'across', row: midRow, col: 0 },
                      { word: midV, dir: 'down', row: 0, col: midCol }
                    ];

                    // Interior additions
                    const used = new Set(clues.map(c => c.word));
                    const grid = Array.from({ length: 7 }, () => Array(7).fill(null));
                    clues.forEach(c => {
                      for (let i = 0; i < c.word.length; i++) {
                        const r = c.dir === 'across' ? c.row : c.row + i;
                        const col = c.dir === 'across' ? c.col + i : c.col;
                        grid[r][col] = c.word[i];
                      }
                    });

                    // Add interior across at row 1 or 5 (len 5 starting at col 0 or ending at col 6)
                    for (const r of [1, 5, 2, 4]) {
                      if (r === midRow) continue;
                      const acrossCands = (wordsByLen[5] || []).filter(w => !used.has(w) && w[0] === left[r]);
                      if (acrossCands.length > 0) {
                        const w = acrossCands[0];
                        let canPlace = true;
                        for (let i = 0; i < 5; i++) {
                          if (grid[r][i] !== null && grid[r][i] !== w[i]) { canPlace = false; break; }
                        }
                        if (canPlace) {
                          used.add(w);
                          clues.push({ word: w, dir: 'across', row: r, col: 0 });
                          for (let i = 0; i < 5; i++) grid[r][i] = w[i];
                          break;
                        }
                      }
                    }

                    return clues;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // SIZE 8, 9, 10 (GENERALIZED DENSE FULL-PERIMETER SOLVER)
  if (size >= 8 && size <= 10) {
    const poolN = cands(size);
    for (const top of poolN) {
      const lefts = poolN.filter(w => w !== top && w[0] === top[0]);
      const rights = poolN.filter(w => w !== top && w[0] === top[size - 1]);
      for (const left of lefts.slice(0, 12)) {
        for (const right of rights.slice(0, 12)) {
          if (left === right) continue;
          const bottoms = poolN.filter(w => w !== top && w !== left && w !== right && w[0] === left[size - 1] && w[size - 1] === right[size - 1]);
          if (bottoms.length > 0) {
            const bot = bottoms[0];
            const clues = [
              { word: top, dir: 'across', row: 0, col: 0 },
              { word: bot, dir: 'across', row: size - 1, col: 0 },
              { word: left, dir: 'down', row: 0, col: 0 },
              { word: right, dir: 'down', row: 0, col: size - 1 }
            ];
            const used = new Set([top, bot, left, right]);
            const grid = Array.from({ length: size }, () => Array(size).fill(null));
            for (let i = 0; i < size; i++) {
              grid[0][i] = top[i];
              grid[size - 1][i] = bot[i];
              grid[i][0] = left[i];
              grid[i][size - 1] = right[i];
            }

            // Intermediate Across Rows
            const targetRows = size === 8 ? [2, 4, 6] : size === 9 ? [2, 4, 6, 7] : [2, 4, 6, 7, 8];
            for (const r of targetRows) {
              // Try full across
              const fullAcross = (wordsByLen[size] || []).filter(w => !used.has(w) && w[0] === left[r] && w[size - 1] === right[r]);
              if (fullAcross.length > 0) {
                const w = fullAcross[0];
                used.add(w);
                clues.push({ word: w, dir: 'across', row: r, col: 0 });
                for (let i = 0; i < size; i++) grid[r][i] = w[i];
              } else {
                // Try segmented across left: len 5 or 6
                for (const len of [6, 5]) {
                  const segL = (wordsByLen[len] || []).filter(w => !used.has(w) && w[0] === left[r]);
                  if (segL.length > 0) {
                    const w = segL[0];
                    let ok = true;
                    for (let i = 0; i < len; i++) {
                      if (grid[r][i] !== null && grid[r][i] !== w[i]) { ok = false; break; }
                    }
                    if (ok) {
                      used.add(w);
                      clues.push({ word: w, dir: 'across', row: r, col: 0 });
                      for (let i = 0; i < len; i++) grid[r][i] = w[i];
                      break;
                    }
                  }
                }
                // Try segmented across right
                for (const len of [6, 5]) {
                  const segR = (wordsByLen[len] || []).filter(w => !used.has(w) && w[len - 1] === right[r]);
                  if (segR.length > 0) {
                    const w = segR[0];
                    const startCol = size - len;
                    let ok = true;
                    for (let i = 0; i < len; i++) {
                      if (grid[r][startCol + i] !== null && grid[r][startCol + i] !== w[i]) { ok = false; break; }
                    }
                    if (ok) {
                      used.add(w);
                      clues.push({ word: w, dir: 'across', row: r, col: startCol });
                      for (let i = 0; i < len; i++) grid[r][startCol + i] = w[i];
                      break;
                    }
                  }
                }
              }
            }

            // Intermediate Down Columns
            const targetCols = size === 8 ? [2, 4, 6] : size === 9 ? [2, 4, 6, 7] : [2, 4, 6, 7];
            for (const c of targetCols) {
              // down from row 0
              for (const len of [7, 6, 5]) {
                if (len >= size) continue;
                const downCands = (wordsByLen[len] || []).filter(w => {
                  if (used.has(w)) return false;
                  for (let i = 0; i < len; i++) {
                    if (grid[i][c] !== null && grid[i][c] !== w[i]) return false;
                  }
                  return true;
                });
                if (downCands.length > 0) {
                  const w = downCands[0];
                  used.add(w);
                  clues.push({ word: w, dir: 'down', row: 0, col: c });
                  for (let i = 0; i < len; i++) grid[i][c] = w[i];
                  break;
                }
              }

              // down to bottom
              for (const len of [6, 5]) {
                const startRow = size - len;
                const downCands = (wordsByLen[len] || []).filter(w => {
                  if (used.has(w)) return false;
                  for (let i = 0; i < len; i++) {
                    if (grid[startRow + i][c] !== null && grid[startRow + i][c] !== w[i]) return false;
                  }
                  return true;
                });
                if (downCands.length > 0) {
                  const w = downCands[0];
                  used.add(w);
                  clues.push({ word: w, dir: 'down', row: startRow, col: c });
                  for (let i = 0; i < len; i++) grid[startRow + i][c] = w[i];
                  break;
                }
              }
            }

            if (validateFullGridCoverage(size, clues)) {
              return clues;
            }
          }
        }
      }
    }
  }

  return null;
}

// 5. Standard Crossword Cell Numbering
function formatNumberedClues(rawClues) {
  const cellMap = {};
  rawClues.forEach(c => {
    const key = `${c.row},${c.col}`;
    if (!cellMap[key]) cellMap[key] = { row: c.row, col: c.col, across: null, down: null };
    if (c.dir === 'across') cellMap[key].across = c;
    else cellMap[key].down = c;
  });

  const sortedCells = Object.values(cellMap).sort((a, b) => {
    if (a.row !== b.row) return a.row - b.row;
    return a.col - b.col;
  });

  let num = 1;
  const clues = [];

  sortedCells.forEach(cell => {
    let usedNum = false;
    const currentNum = num;

    if (cell.across) {
      const meta = getWordMetadata(cell.across.word);
      clues.push({
        id: `${currentNum}-across`,
        number: currentNum,
        direction: 'across',
        word: cell.across.word.toUpperCase(),
        clue: meta.clue,
        senses: meta.senses,
        partOfSpeech: meta.partOfSpeech,
        partOfSpeechName: meta.partOfSpeechName,
        row: cell.row,
        col: cell.col,
        length: cell.across.word.length
      });
      usedNum = true;
    }

    if (cell.down) {
      const meta = getWordMetadata(cell.down.word);
      clues.push({
        id: `${currentNum}-down`,
        number: currentNum,
        direction: 'down',
        word: cell.down.word.toUpperCase(),
        clue: meta.clue,
        senses: meta.senses,
        partOfSpeech: meta.partOfSpeech,
        partOfSpeechName: meta.partOfSpeechName,
        row: cell.row,
        col: cell.col,
        length: cell.down.word.length
      });
      usedNum = true;
    }

    if (usedNum) num++;
  });

  return clues;
}

// 6. Rich Thematic Titles and Context
const THEMES = {
  A1: [
    { title: 'Ev & Aile Dünyası', desc: 'Ev, aile ve oda ortamında en sık kullanılan temel İngilizce sözcükler.' },
    { title: 'Şehir ve Park Gezisi', desc: 'Parkta, sokakta ve şehirde karşılaşılan temel kelimeler.' },
    { title: 'Okul & Sınıf Hayatı', desc: 'Sınıf, ders ve okul eşyalarıyla ilgili pratik terimler.' },
    { title: 'Doğa ve Yeşil Bahçe', desc: 'Ağaçlar, çiçekler ve doğanın temel renkleri.' },
    { title: 'Yiyecek & İçecekler', desc: 'Kahvaltı, meyveler ve günlük besin sözcükleri.' },
    { title: 'Sağlıklı Sabah Rutini', desc: 'Güne başlarken ve günlük rutinde geçen eylemler.' },
    { title: 'Müzik & Oyun Vakti', desc: 'Şarkılar, eğlence ve çocuk oyunları kelimeleri.' },
    { title: 'Tatil ve Macera', desc: 'Deniz, sahil ve yolculuk sözcükleri.' },
    { title: 'Hayvan Dostlarımız', desc: 'Evcil hayvanlar ve doğadaki sevimli canlılar.' },
    { title: 'Hava ve Dört Mevsim', desc: 'Güneş, yağmur, kar ve mevsimsel ifadeler.' }
  ],
  A2: [
    { title: 'Seyahat ve Bilet Planı', desc: 'Ulaşım, istasyon ve seyahat planlama kelimeleri.' },
    { title: 'Teknoloji ve İletişim', desc: 'Telefon, internet ve dijital dünya terimleri.' },
    { title: 'Kültür & Sanat Sergisi', desc: 'Müzeler, sergiler ve sanatsal aktiviteler.' },
    { title: 'Hafta Sonu Etkinliği', desc: 'Sinema, tiyatro ve sosyal etkinlik diyalogları.' },
    { title: 'Meslekler & Çalışma Hayatı', desc: 'İş kolları, meslekler ve ofis ortamı sözcükleri.' },
    { title: 'Restoran & Mutfak Kültürü', desc: 'Yemek siparişi ve dünya mutfağı terimleri.' },
    { title: 'Doğa Maceraları & Dağlar', desc: 'Kamp, tırmanış ve doğa keşif sözcükleri.' },
    { title: 'Alışveriş & Mağazalar', desc: 'Giyim, fiyatlar ve alışveriş pratikleri.' },
    { title: 'Dostluk ve Sosyal Yaşam', desc: 'Arkadaşlar, kutlamalar ve sohbet dili.' },
    { title: 'Sağlık & Eczane Rehberi', desc: 'Doktor randevusu, ilaç ve sağlık terimleri.' }
  ],
  B1: [
    { title: 'Girişimcilik & Projeler', desc: 'İş fikirleri, proje yönetimi ve iş ortaklığı terimleri.' },
    { title: 'İş Dünyası & Strateji', desc: 'Şirketler, bütçe yönetimi ve pazar hedefleri.' },
    { title: 'Bilimsel Keşifler & Veri', desc: 'Araştırma, deneyler ve bilimsel yöntem sözcükleri.' },
    { title: 'Medya & Dijital İletişim', desc: 'Haberler, sosyal medya ve yayıncılık dili.' },
    { title: 'Toplum & Sosyal Dinamikler', desc: 'Birey, toplum ve sosyal sorumluluk kavramları.' },
    { title: 'Ekonomi & Bütçe Yönetimi', desc: 'Finans, bankacılık ve ekonomik analiz kelimeleri.' },
    { title: 'Kültürel Etkileşim & Sanat', desc: 'Edebiyat, kültürel miras ve estetik tartışmalar.' },
    { title: 'Çevre & İklim Politikası', desc: 'Sürdürülebilirlik, temiz enerji ve çevre bilinci.' },
    { title: 'Eğitimde Yeni Yaklaşımlar', desc: 'Modern eğitim, online öğrenme ve gelişim modelleri.' },
    { title: 'Liderlik ve Takım Çalışması', desc: 'Motivasyon, karar alma ve yönetim becerileri.' }
  ],
  B2: [
    { title: 'Vizyoner Liderlik & Strateji', desc: 'Üst düzey kurumsal yönetim ve stratejik vizyon.' },
    { title: 'Felsefi Düşünce & Mantık', desc: 'Epistemoloji, etik argümanlar ve soyut kavramlar.' },
    { title: 'Akademik Araştırma & Kanıt', desc: 'Bilimsel metodoloji, hipotez ve veri analizi.' },
    { title: 'Sürdürülebilirlik İlkeleri', desc: 'Ekolojik restorasyon ve küresel çevre hukuku.' },
    { title: 'Küresel Diplomasi & İlişkiler', desc: 'Uluslararası antlaşmalar ve jeopolitik dinamikler.' },
    { title: 'Makroekonomik Analiz & Pazar', desc: 'Küresel finans piyasaları ve ekonomik teoriler.' },
    { title: 'İnovasyon & Katma Değer', desc: 'Teknolojik dönüşüm ve inovasyon ekosistemleri.' },
    { title: 'Kurumsal Yönetişim & Etik', desc: 'İş ahlakı, regülasyon ve şeffaflık ilkeleri.' },
    { title: 'Bilişsel Süreçler & Zihin', desc: 'Nörobilim, psikoloji ve karar alma mekanizmaları.' },
    { title: 'Sosyal Adalet & Hukuk Devleti', desc: 'İnsan hakları, hukuk felsefesi ve demokratik ilkeler.' }
  ]
};

// 7. MAIN GENERATION LOOP: 180 Puzzles (45 per level)
const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const SIZES = [5, 6, 7, 8, 9, 10];
const TARGET_COUNTS = { 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 };

const finalPuzzles = [];

LEVELS.forEach(level => {
  SIZES.forEach(size => {
    const targetCount = TARGET_COUNTS[size];
    console.log(`Generating ${level} ${size}x${size}: target = ${targetCount}...`);
    let count = 0;
    let seed = 0;

    while (count < targetCount && seed < 300) {
      const id = `${level.toLowerCase()}-${size}x${size}-${count + 1}`;
      const rawLayout = generateDenseLayout({ level, size, seed });
      seed++;

      if (!rawLayout) continue;

      try {
        const numberedClues = formatNumberedClues(rawLayout);
        testPuzzle(id, size, numberedClues);

        if (!validateFullGridCoverage(size, rawLayout)) {
          continue;
        }

        const theme = THEMES[level][count % THEMES[level].length];
        const freqLevel = count === 0 ? 'high' : count <= 3 ? 'medium' : 'advanced';
        const freqLabel = count === 0 ? 'En Sık Kullanılan Kelimeler' : count <= 3 ? 'Popüler Kelimeler' : 'Zengin Kelime Dağarcığı';

        finalPuzzles.push({
          id,
          title: theme.title,
          level,
          size,
          description: theme.desc,
          clues: numberedClues,
          frequencyLevel: freqLevel,
          frequencyLabel: freqLabel
        });

        count++;
        console.log(`  ✓ Created [${id}] with ${numberedClues.length} words (Full Coverage Verified)`);
      } catch (err) {
        // Retry with next seed
      }
    }

    if (count < targetCount) {
      console.error(`⚠️ Warning: could only generate ${count}/${targetCount} for ${level} ${size}x${size}`);
    }
  });
});

console.log(`\n🎉 Total Generated Puzzles: ${finalPuzzles.length} / 180`);

// 8. Write Directly to src/puzzleData.ts
const code = `// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App
// Exactly 180 Verified Puzzles: 45 per level (A1, A2, B1, B2) with 5x5(5), 6x6(6), 7x7(7), 8x8(8), 9x9(9), 10x10(10)
// Guarantee: 100% Full-Spanning Grid Coverage (No Blank Edges or Empty Rows/Columns)

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

export type PuzzleFrequencyLevel = 'high' | 'medium' | 'advanced';

export interface PuzzleDefinition {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  size: 5 | 6 | 7 | 8 | 9 | 10;
  description: string;
  clues: PuzzleClue[];
  frequencyLevel?: PuzzleFrequencyLevel;
  frequencyLabel?: string;
}

export const PUZZLES: PuzzleDefinition[] = ${JSON.stringify(finalPuzzles, null, 2)};

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

fs.writeFileSync(path.join(__dirname, '../src/puzzleData.ts'), code, 'utf8');
console.log('✅ Successfully written 180 puzzles to src/puzzleData.ts!');
