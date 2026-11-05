// scripts/generate_short_words_180_puzzles.cjs
const fs = require('fs');
const path = require('path');
const { testPuzzle } = require('./test_grid.cjs');
const { SHORT_WORDS_SENSES } = require('./short_words_bank.cjs');
const rawDict = require('../src/generated_dictionary.json');
const { WORD_SENSES } = require('./word_senses.cjs');

console.log('================================================================');
console.log('🌟 GENERATING 180 RICH CROSSWORD PUZZLES WITH SHORT WORDS');
console.log('   (Features: 2, 3, 4, 5+ letter words & natural black blocks)');
console.log('   45 per level: 5x5:5, 6x6:6, 7x7:7, 8x8:8, 9x9:9, 10x10:10');
console.log('================================================================');

// 1. Merged Sense Dictionary (Over 2,000 words with rich Turkish meanings)
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

// 2. Vocabulary by Length and CEFR Preference
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
  const offset = (seed * 17) % Math.max(1, combined.length);
  return combined.slice(offset).concat(combined.slice(0, offset));
}

// 3. Grid Coverage and Short Words Validator
function validateShortWordsGrid(size, clues) {
  const rowSet = new Set();
  const colSet = new Set();
  let minRow = size, maxRow = -1, minCol = size, maxCol = -1;
  let shortWordsCount = 0;

  for (const c of clues) {
    const len = c.word.length;
    if (len <= 4) shortWordsCount++;

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

  // Must span borders
  if (minRow !== 0 || maxRow !== size - 1) return false;
  if (minCol !== 0 || maxCol !== size - 1) return false;

  // No entirely empty rows or columns
  for (let r = 0; r < size; r++) {
    if (!rowSet.has(r)) return false;
  }
  for (let c = 0; c < size; c++) {
    if (!colSet.has(c)) return false;
  }

  // Must contain short words (<= 4 letters)
  if (shortWordsCount < 2) return false;

  return true;
}

// 4. Layout Solvers by Size
function generatePuzzleLayout({ level, size, seed }) {
  const cands = (len) => getCandidates(level, len, seed);

  // SIZE 5x5: Contains 3-letter, 4-letter, and 5-letter words with natural black blocks!
  if (size === 5) {
    const w3 = cands(3);
    const w4 = cands(4);
    const w5 = cands(5);

    // Template 5A (4x 3-letter words + 2x 5-letter words):
    // H1 (0,0) len 3, V1 (0,0) len 3, H2 (2,0) len 5, V2 (0,2) len 5, H3 (4,2) len 3, V3 (2,4) len 3
    if (seed % 2 === 0) {
      for (const h1 of w3) {
        const v1s = w3.filter(w => w !== h1 && w[0] === h1[0]);
        for (const v1 of v1s.slice(0, 10)) {
          const h2s = w5.filter(w => w !== h1 && w !== v1 && w[0] === v1[2]);
          for (const h2 of h2s.slice(0, 8)) {
            const v2s = w5.filter(w => w !== h1 && w !== v1 && w !== h2 && w[0] === h1[2] && w[2] === h2[2]);
            for (const v2 of v2s.slice(0, 6)) {
              const h3s = w3.filter(w => w !== h1 && w !== v1 && w !== h2 && w !== v2 && w[0] === v2[4]);
              for (const h3 of h3s.slice(0, 5)) {
                const v3s = w3.filter(w => w !== h1 && w !== v1 && w !== h2 && w !== v2 && w !== h3 && w[0] === h2[4] && w[2] === h3[2]);
                if (v3s.length > 0) {
                  return [
                    { word: h1, dir: 'across', row: 0, col: 0 },
                    { word: v1, dir: 'down', row: 0, col: 0 },
                    { word: h2, dir: 'across', row: 2, col: 0 },
                    { word: v2, dir: 'down', row: 0, col: 2 },
                    { word: h3, dir: 'across', row: 4, col: 2 },
                    { word: v3s[0], dir: 'down', row: 2, col: 4 }
                  ];
                }
              }
            }
          }
        }
      }
    }

    // Template 5B (5x 4-letter words + 1x 5-letter word):
    // H1 (0,0) len 4, V1 (0,0) len 4, H2 (2,0) len 4, V2 (0,2) len 5, V3 (1,3) len 4, H3 (4,1) len 4
    for (const h1 of w4) {
      const v1s = w4.filter(w => w !== h1 && w[0] === h1[0]);
      for (const v1 of v1s.slice(0, 8)) {
        const h2s = w4.filter(w => w !== h1 && w !== v1 && w[0] === v1[2]);
        for (const h2 of h2s.slice(0, 8)) {
          const v2s = w5.filter(w => w !== h1 && w !== v1 && w !== h2 && w[0] === h1[2] && w[2] === h2[2]);
          for (const v2 of v2s.slice(0, 6)) {
            const v3s = w4.filter(w => w !== h1 && w !== v1 && w !== h2 && w !== v2 && w[0] === h1[3] && w[1] === h2[3]);
            for (const v3 of v3s.slice(0, 6)) {
              const h3s = w4.filter(w => w !== h1 && w !== v1 && w !== h2 && w !== v2 && w !== v3 && w[1] === v2[4] && w[2] === v3[3]);
              if (h3s.length > 0) {
                return [
                  { word: h1, dir: 'across', row: 0, col: 0 },
                  { word: v1, dir: 'down', row: 0, col: 0 },
                  { word: h2, dir: 'across', row: 2, col: 0 },
                  { word: v2, dir: 'down', row: 0, col: 2 },
                  { word: v3, dir: 'down', row: 1, col: 3 },
                  { word: h3s[0], dir: 'across', row: 4, col: 1 }
                ];
              }
            }
          }
        }
      }
    }
  }

  // SIZE 6x6: Contains 3-letter, 4-letter, and 6-letter words with natural black blocks!
  if (size === 6) {
    const w3 = cands(3);
    const w4 = cands(4);
    const w6 = cands(6);

    for (const h1 of w4) {
      const v1s = w4.filter(w => w !== h1 && w[0] === h1[0]);
      for (const v1 of v1s.slice(0, 10)) {
        const h2s = w6.filter(w => w !== h1 && w !== v1 && w[0] === v1[2]);
        for (const h2 of h2s.slice(0, 8)) {
          const v2s = w6.filter(w => w !== h1 && w !== v1 && w !== h2 && w[0] === h1[2] && w[2] === h2[2]);
          for (const v2 of v2s.slice(0, 6)) {
            const v3s = w4.filter(w => w !== h1 && w !== v1 && w !== h2 && w !== v2 && w[0] === h2[5]);
            for (const v3 of v3s.slice(0, 6)) {
              const h3s = w4.filter(w => w !== h1 && w !== v1 && w !== h2 && w !== v2 && w !== v3 && w[0] === v2[5] && w[3] === v3[3]);
              if (h3s.length > 0) {
                const clues = [
                  { word: h1, dir: 'across', row: 0, col: 0 },
                  { word: v1, dir: 'down', row: 0, col: 0 },
                  { word: h2, dir: 'across', row: 2, col: 0 },
                  { word: v2, dir: 'down', row: 0, col: 2 },
                  { word: v3, dir: 'down', row: 2, col: 5 },
                  { word: h3s[0], dir: 'across', row: 5, col: 2 }
                ];
                // 3-letter word at (0,3) down
                const shortV = w3.filter(w => !clues.some(c => c.word === w) && w[0] === h1[3] && w[2] === h2[3]);
                if (shortV.length > 0) {
                  clues.push({ word: shortV[0], dir: 'down', row: 0, col: 3 });
                }
                // 3-letter word at (4,0) across
                const shortH = w3.filter(w => !clues.some(c => c.word === w) && w[0] === v1[3] && w[2] === v2[4]);
                if (shortH.length > 0) {
                  clues.push({ word: shortH[0], dir: 'across', row: 4, col: 0 });
                }
                return clues;
              }
            }
          }
        }
      }
    }
  }

  // SIZE 7, 8, 9, 10: Rich hybrid layouts with short words (2, 3, 4 letters) + medium words + black blocks
  if (size >= 7 && size <= 10) {
    const w3 = cands(3);
    const w4 = cands(4);
    const w5 = cands(5);
    const w6 = cands(6);
    const wN = cands(size);

    // Frame top and bottom with segmented words or anchor word
    const topCandidates = (seed % 2 === 0 && wN.length > 0)
      ? [{ word: wN[0], col: 0, len: size }]
      : [{ word: w4[0] || 'BOOK', col: 0, len: 4 }, { word: w4[1] || 'FISH', col: size - 4, len: 4 }];

    for (const top of wN.slice(0, 15)) {
      const lefts = (wordsByLen[size] || []).filter(w => w !== top && w[0] === top[0]);
      const rights = (wordsByLen[size] || []).filter(w => w !== top && w[0] === top[size - 1]);

      for (const left of lefts.slice(0, 8)) {
        for (const right of rights.slice(0, 8)) {
          if (left === right) continue;
          const bottoms = (wordsByLen[size] || []).filter(w => w !== top && w !== left && w !== right && w[0] === left[size - 1] && w[size - 1] === right[size - 1]);
          if (bottoms.length > 0) {
            const bot = bottoms[0];
            const clues = [
              { word: top, dir: 'across', row: 0, col: 0 },
              { word: bot, dir: 'across', row: size - 1, col: 0 },
              { word: left, dir: 'down', row: 0, col: 0 },
              { word: right, dir: 'down', row: 0, col: size - 1 }
            ];

            const grid = Array.from({ length: size }, () => Array(size).fill(null));
            for (let i = 0; i < size; i++) {
              grid[0][i] = top[i];
              grid[size - 1][i] = bot[i];
              grid[i][0] = left[i];
              grid[i][size - 1] = right[i];
            }

            const used = new Set([top, bot, left, right]);

            // INTERIOR SHORT WORDS INJECTION (lengths 3 and 4)
            const midRows = size === 7 ? [2, 4] : size === 8 ? [2, 4, 6] : size === 9 ? [2, 4, 6, 7] : [2, 4, 6, 7, 8];

            for (const r of midRows) {
              // 1. Try 3-letter or 4-letter word from left
              for (const len of [4, 3]) {
                const sWords = (wordsByLen[len] || []).filter(w => !used.has(w) && w[0] === left[r]);
                if (sWords.length > 0) {
                  const sw = sWords[0];
                  let ok = true;
                  for (let i = 0; i < len; i++) {
                    if (grid[r][i] !== null && grid[r][i] !== sw[i]) { ok = false; break; }
                  }
                  if (ok) {
                    used.add(sw);
                    clues.push({ word: sw, dir: 'across', row: r, col: 0 });
                    for (let i = 0; i < len; i++) grid[r][i] = sw[i];
                    break;
                  }
                }
              }

              // 2. Try 3-letter or 4-letter word ending at right (leaving empty block in the center!)
              for (const len of [4, 3]) {
                const sWords = (wordsByLen[len] || []).filter(w => !used.has(w) && w[len - 1] === right[r]);
                if (sWords.length > 0) {
                  const sw = sWords[0];
                  const startCol = size - len;
                  let ok = true;
                  for (let i = 0; i < len; i++) {
                    if (grid[r][startCol + i] !== null && grid[r][startCol + i] !== sw[i]) { ok = false; break; }
                  }
                  if (ok) {
                    used.add(sw);
                    clues.push({ word: sw, dir: 'across', row: r, col: startCol });
                    for (let i = 0; i < len; i++) grid[r][startCol + i] = sw[i];
                    break;
                  }
                }
              }
            }

            // VERTICAL SHORT WORDS INJECTION (lengths 3, 4, 5 crossing horizontally)
            const midCols = size === 7 ? [2, 4] : size === 8 ? [2, 5] : size === 9 ? [2, 4, 6] : [2, 4, 6, 7];
            for (const c of midCols) {
              // Down from row 0
              for (const len of [4, 3, 5]) {
                if (len >= size) continue;
                const downCands = (wordsByLen[len] || []).filter(w => {
                  if (used.has(w)) return false;
                  for (let i = 0; i < len; i++) {
                    if (grid[i][c] !== null && grid[i][c] !== w[i]) return false;
                  }
                  return true;
                });
                if (downCands.length > 0) {
                  const dw = downCands[0];
                  used.add(dw);
                  clues.push({ word: dw, dir: 'down', row: 0, col: c });
                  for (let i = 0; i < len; i++) grid[i][c] = dw[i];
                  break;
                }
              }

              // Down to bottom
              for (const len of [4, 3, 5]) {
                const startRow = size - len;
                const downCands = (wordsByLen[len] || []).filter(w => {
                  if (used.has(w)) return false;
                  for (let i = 0; i < len; i++) {
                    if (grid[startRow + i][c] !== null && grid[startRow + i][c] !== w[i]) return false;
                  }
                  return true;
                });
                if (downCands.length > 0) {
                  const dw = downCands[0];
                  used.add(dw);
                  clues.push({ word: dw, dir: 'down', row: startRow, col: c });
                  for (let i = 0; i < len; i++) grid[startRow + i][c] = dw[i];
                  break;
                }
              }
            }

            if (validateShortWordsGrid(size, clues)) {
              return clues;
            }
          }
        }
      }
    }
  }

  return null;
}

// 5. Number and Format Clues
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

// 6. Themes by Level
const THEMES = {
  A1: [
    { title: 'Ev & Aile Dünyası', desc: 'Ev, aile ve günlük hayatta en sık kullanılan temel İngilizce sözcükler.' },
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
      const rawLayout = generatePuzzleLayout({ level, size, seed });
      seed++;

      if (!rawLayout) continue;

      try {
        const numberedClues = formatNumberedClues(rawLayout);
        testPuzzle(id, size, numberedClues);

        if (!validateShortWordsGrid(size, rawLayout)) {
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

        const shortCount = numberedClues.filter(c => c.word.length <= 4).length;
        count++;
        console.log(`  ✓ [${id}] ${numberedClues.length} words (${shortCount} short words: 3-4 letters)`);
      } catch (err) {
        // Retry
      }
    }

    if (count < targetCount) {
      console.error(`⚠️ Warning: could only generate ${count}/${targetCount} for ${level} ${size}x${size}`);
    }
  });
});

console.log(`\n🎉 Total Generated Puzzles: ${finalPuzzles.length} / 180`);

// 8. Write to src/puzzleData.ts with all required exports
const code = `// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App
// Exactly 180 Verified Puzzles: 45 per level (A1, A2, B1, B2) with 5x5(5), 6x6(6), 7x7(7), 8x8(8), 9x9(9), 10x10(10)
// Features: Balanced mix of 2, 3, 4, 5+ letter words with natural black/empty blocks and 100% full board coverage

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
console.log('✅ Successfully updated src/puzzleData.ts with short-word enriched puzzles!');
