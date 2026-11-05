// scripts/generate_all_180_puzzles.cjs
const fs = require('fs');
const path = require('path');
const { testPuzzle } = require('./test_grid.cjs');
const { WORD_SENSES } = require('./word_senses.cjs');
const rawDict = require('../src/generated_dictionary.json');

console.log('=====================================================');
console.log('🚀 GENERATING 180 FULLY VERIFIED CROSSWORD PUZZLES');
console.log('   (45 per level: 5x5:5, 6x6:6, 7x7:7, 8x8:8, 9x9:9, 10x10:10)');
console.log('=====================================================');

// 1. Sense & Clue Bank from all available sources
const senseBank = { ...WORD_SENSES };

// Helper to get senses and formatted clue for any word
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

  // Lookup in rawDict
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

// 2. Vocab Lists by Level
const A1_WORDS = new Set([
  'HOME', 'BOOK', 'MILK', 'PARK', 'LIKE', 'TREE', 'BLUE', 'COLD', 'DOG', 'CAT', 'SUN', 'RED',
  'SEA', 'DAY', 'TIME', 'FISH', 'FOOD', 'WATER', 'BREAD', 'APPLE', 'HOUSE', 'CHAIR', 'TABLE',
  'MUSIC', 'NIGHT', 'LIGHT', 'HEART', 'SMILE', 'HAPPY', 'GREEN', 'WHITE', 'BLACK', 'MONEY',
  'BABY', 'BIRD', 'DOOR', 'ROAD', 'RAIN', 'SNOW', 'RIVER', 'EARTH', 'PLANT', 'WORLD',
  'FAMILY', 'FATHER', 'MOTHER', 'SISTER', 'BROTHER', 'FRIEND', 'SCHOOL', 'SUMMER', 'WINTER',
  'SPRING', 'AUTUMN', 'GARDEN', 'DOCTOR', 'TRAVEL', 'FLOWER', 'COFFEE', 'ORANGE', 'BANANA',
  'YELLOW', 'PURPLE', 'WINDOW', 'STREET', 'MARKET', 'TICKET', 'STATION', 'MORNING', 'EVENING',
  'WEATHER', 'STUDENT', 'TEACHER', 'PICTURE', 'HOLIDAY', 'AIRPORT', 'HOSPITAL', 'FOOTBALL',
  'KITCHEN', 'BEDROOM', 'LIBRARY', 'COUNTRY', 'SUNSHINE', 'CLASSROOM', 'NOTEBOOK', 'WEEKEND',
  'PLAYGROUND', 'BREAKFAST', 'BEAUTIFUL', 'YESTERDAY', 'TOMORROW', 'AFTERNOON', 'DICTIONARY',
  'CHOCOLATE', 'BASKETBALL', 'TELEVISION', 'EVERYBODY', 'ANYWHERE', 'SANDWICH', 'SUPERMARKET'
]);

const A2_WORDS = new Set([
  'WORK', 'CITY', 'DESK', 'ROOM', 'TALK', 'WALK', 'HELP', 'LOOK', 'FIND', 'GIVE', 'KNOW',
  'LEAVE', 'MEET', 'MOVE', 'PLAN', 'READ', 'SEND', 'SHOW', 'STAY', 'TAKE', 'TELL', 'WAIT',
  'WISH', 'YEAR', 'WEEK', 'MONTH', 'HOTEL', 'PLANE', 'TRAIN', 'BUSES', 'SHOPS', 'PRICE',
  'STORE', 'MOVIE', 'PARTY', 'BEACH', 'FOREST', 'MOUNTAIN', 'ISLAND', 'ANIMAL', 'NATURE',
  'PERSON', 'PEOPLE', 'FUTURE', 'HEALTH', 'DINNER', 'LUNCH', 'SNACK', 'SWEET', 'CLEAN',
  'DRIVE', 'DRIVER', 'OFFICE', 'REPORT', 'SCREEN', 'SYSTEM', 'LESSON', 'METHOD', 'NUMBER',
  'PROBLEM', 'REASON', 'RESULT', 'SEASON', 'SIMPLE', 'SPEECH', 'STRONG', 'TALENT', 'TROUBLE',
  'VICTOR', 'WINDOW', 'WORKER', 'WRITER', 'BOTTLE', 'POLICE', 'LETTER', 'MEMBER', 'MEMORY',
  'MINUTE', 'MOMENT', 'OFFICE', 'PATIENT', 'SAFETY', 'SECRET', 'SHADOW', 'SILVER', 'SOCIETY',
  'COMPUTER', 'BUILDING', 'CUSTOMER', 'EXERCISE', 'DOCUMENT', 'ENGINEER', 'FESTIVAL', 'HOMEWORK',
  'INTERNET', 'LANGUAGE', 'MEDICINE', 'MOUNTAIN', 'NOTEBOOK', 'PAINTING', 'QUESTION', 'REMEMBER',
  'SURPRISE', 'TOGETHER', 'VACATION', 'APARTMENT', 'CHALLENGE', 'EDUCATION', 'IMPORTANT',
  'NEWSPAPER', 'TELEPHONE', 'DIFFICULT', 'EXPENSIVE', 'DANGEROUS', 'INTERESTING', 'CELEBRATION',
  'RESTAURANT', 'COLLEAGUE', 'ACTIVITIES', 'EXPERIENCE', 'DISCOVERY', 'GOVERNMENT', 'POPULATION'
]);

const B1_WORDS = new Set([
  'FOCUS', 'GUIDE', 'HABIT', 'IMAGE', 'ISSUE', 'JUDGE', 'LIMIT', 'MAJOR', 'MEDIA', 'MODEL',
  'ORDER', 'PHASE', 'POINT', 'POWER', 'RANGE', 'SCALE', 'SKILL', 'SPACE', 'STAGE', 'THEME',
  'TOPIC', 'VALUE', 'VOICE', 'YOUTH', 'ACTION', 'ADVICE', 'AGREE', 'ALLOW', 'APPLY', 'ARGUE',
  'ASSIST', 'ATTACK', 'AUTHOR', 'BALANCE', 'BEHAVE', 'BELONG', 'BUDGET', 'CAREER', 'CENTURY',
  'CHANCE', 'CHOICE', 'CLIMATE', 'COMMON', 'CONFLICT', 'CREDIT', 'CULTURE', 'DAMAGE', 'DEBATE',
  'DECIDE', 'DEGREE', 'DEMAND', 'DETAIL', 'DEVICE', 'DIRECT', 'DISCUSS', 'EFFECT', 'EFFORT',
  'ENERGY', 'ESCAPE', 'ETHICS', 'FACTOR', 'FIGURE', 'FINANCE', 'FLIGHT', 'FREEDOM', 'GLOBAL',
  'GROWTH', 'IMPACT', 'INCOME', 'INTEND', 'INVEST', 'JUSTICE', 'LEADER', 'MANAGE', 'MARKET',
  'MATTER', 'MEASURE', 'METHOD', 'MODERN', 'MOTION', 'NATION', 'NATURE', 'NOTICE', 'OBJECT',
  'OPINION', 'OPTION', 'PARENT', 'POLICY', 'PRODUCE', 'PROFIT', 'PROJECT', 'PUBLIC', 'PURPOSE',
  'RECORD', 'REDUCE', 'REGION', 'RELATE', 'REMAIN', 'REMOVE', 'REPAIR', 'REPEAT', 'REPLACE',
  'REPORT', 'RESCUE', 'RESIGN', 'RESIST', 'REVEAL', 'REWARD', 'SAFETY', 'SALARY', 'SAMPLE',
  'SCHEME', 'SCIENCE', 'SECTOR', 'SECURE', 'SELECT', 'SERIES', 'SETTLE', 'SIGNAL', 'SILENT',
  'SIMPLE', 'SOCIAL', 'SOURCE', 'SPIRIT', 'STATUS', 'STRESS', 'STRIKE', 'STUDIO', 'SUBMIT',
  'SUPPLY', 'SYMBOL', 'SYSTEM', 'TARGET', 'THEORY', 'THREAT', 'TRANSIT', 'UNIQUE', 'UPDATE',
  'URGENT', 'USEFUL', 'VACANT', 'VALUED', 'VARIED', 'VIABLE', 'VISION', 'VOLUME', 'WEALTH',
  'WEIGHT', 'WONDER', 'ACTIVITY', 'ATTITUDE', 'BUSINESS', 'CAMPAIGN', 'CAPACITY', 'CHALLENGE',
  'CHEMICAL', 'CITIZEN', 'CLOTHING', 'COLLEAGUE', 'COMBINE', 'COMFORT', 'COMMERCE', 'COMPLEX',
  'CONSUMER', 'CONTINUE', 'CONTRACT', 'CREATIVE', 'CRIMINAL', 'CRITICAL', 'CULTURE', 'CURRENCY',
  'CUSTOMER', 'DATABASE', 'DECISION', 'DELIVERY', 'DESCRIBE', 'DESIGNER', 'DISCOVER', 'DISASTER',
  'DISTANCE', 'DISTRICT', 'DOCUMENT', 'DOMESTIC', 'DURATION', 'ECONOMIC', 'EDUCATION', 'ELECTION',
  'EMERGENCY', 'EMPLOYEE', 'EMPLOYER', 'ENGINEER', 'ENVIRONMENT', 'EXPERIENCE', 'EXPLANATION',
  'FOUNDATION', 'GENERATION', 'GOVERNMENT', 'IDENTIFY', 'IMPRESSION', 'INDIVIDUAL', 'INDUSTRY',
  'INVESTMENT', 'LEADERSHIP', 'MANAGEMENT', 'OPPORTUNITY', 'ORGANIZATION', 'PARTICIPANT',
  'PERFORMANCE', 'PERSPECTIVE', 'POPULATION', 'POSSIBILITY', 'PROFESSIONAL', 'RELATIONSHIP',
  'RESPONSIBILITY', 'SATISFACTION', 'SIGNIFICANT', 'SUCCESSFUL', 'TRADITIONAL'
]);

const allDictWords = Object.keys(rawDict).filter(w => /^[a-z]+$/i.test(w)).map(w => w.toUpperCase());

function getWordCEFR(word) {
  if (A1_WORDS.has(word)) return 'A1';
  if (A2_WORDS.has(word)) return 'A2';
  if (B1_WORDS.has(word)) return 'B1';
  // Fallbacks by length
  if (word.length <= 5) return 'A1';
  if (word.length === 6) return 'A2';
  if (word.length <= 8) return 'B1';
  return 'B2';
}

// Group all words by length and prioritize by CEFR
const wordsByLengthAndLevel = {};
for (let len = 3; len <= 12; len++) {
  wordsByLengthAndLevel[len] = {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
    ALL: []
  };
}

allDictWords.forEach(w => {
  const len = w.length;
  if (len >= 3 && len <= 12) {
    const lvl = getWordCEFR(w);
    wordsByLengthAndLevel[len][lvl].push(w);
    wordsByLengthAndLevel[len].ALL.push(w);
  }
});

// Helper to get candidate words for a level and length
function getCandidates(level, len) {
  const bucket = wordsByLengthAndLevel[len];
  if (!bucket) return [];

  if (level === 'A1') {
    return [...bucket.A1, ...bucket.A2, ...bucket.ALL];
  } else if (level === 'A2') {
    return [...bucket.A2, ...bucket.A1, ...bucket.B1, ...bucket.ALL];
  } else if (level === 'B1') {
    return [...bucket.B1, ...bucket.A2, ...bucket.B2, ...bucket.ALL];
  } else {
    return [...bucket.B2, ...bucket.B1, ...bucket.ALL];
  }
}

// 3. Robust Crossword Layout Solvers
function solveLayout({ level, size, puzzleSeed }) {
  const getCands = (len, cond, excludeSet) => {
    const pool = getCandidates(level, len);
    // Rotate pool slightly by seed for diversity
    const offset = (puzzleSeed * 7) % pool.length;
    const rotated = pool.slice(offset).concat(pool.slice(0, offset));
    return rotated.filter(w => {
      if (excludeSet && excludeSet.has(w)) return false;
      return cond ? cond(w) : true;
    });
  };

  const used = new Set();

  // SIZE 6
  if (size === 6) {
    for (const h1 of getCands(6, null, used)) {
      const v1s = getCands(6, w => w[0] === h1[0], new Set([...used, h1]));
      const v2s = getCands(6, w => w[0] === h1[3], new Set([...used, h1]));
      for (const v1 of v1s.slice(0, 8)) {
        for (const v2 of v2s.slice(0, 8)) {
          const h2s = getCands(6, w => w[0] === v1[2] && w[3] === v2[2], new Set([...used, h1, v1, v2]));
          for (const h2 of h2s.slice(0, 6)) {
            const h3s = getCands(6, w => w[0] === v1[4] && w[3] === v2[4], new Set([...used, h1, v1, v2, h2]));
            if (h3s.length > 0) {
              const h3 = h3s[0];
              const clues = [
                { word: h1, dir: 'across', row: 0, col: 0 },
                { word: v1, dir: 'down', row: 0, col: 0 },
                { word: v2, dir: 'down', row: 0, col: 3 },
                { word: h2, dir: 'across', row: 2, col: 0 },
                { word: h3, dir: 'across', row: 4, col: 0 }
              ];
              // Optional 6th word: Down at col 5
              const v3s = getCands(5, w => w[0] === h1[5] && w[2] === h2[5] && w[4] === h3[5], new Set([...used, h1, v1, v2, h2, h3]));
              if (v3s.length > 0) {
                clues.push({ word: v3s[0], dir: 'down', row: 0, col: 5 });
              }
              return clues;
            }
          }
        }
      }
    }
  }

  // SIZE 7
  if (size === 7) {
    for (const h1 of getCands(7, null, used)) {
      const v1s = getCands(7, w => w[0] === h1[0], new Set([...used, h1]));
      const v2s = getCands(7, w => w[0] === h1[3], new Set([...used, h1]));
      for (const v1 of v1s.slice(0, 8)) {
        for (const v2 of v2s.slice(0, 8)) {
          const h2s = getCands(6, w => w[0] === v1[2] && w[3] === v2[2], new Set([...used, h1, v1, v2]));
          for (const h2 of h2s.slice(0, 6)) {
            const h3s = getCands(6, w => w[0] === v1[4] && w[3] === v2[4], new Set([...used, h1, v1, v2, h2]));
            for (const h3 of h3s.slice(0, 6)) {
              // Down at col 6 starts with h1[6], len 5..7
              const v3s = getCands(6, w => w[0] === h1[6], new Set([...used, h1, v1, v2, h2, h3]));
              const v3 = v3s[0] || null;
              const clues = [
                { word: h1, dir: 'across', row: 0, col: 0 },
                { word: v1, dir: 'down', row: 0, col: 0 },
                { word: v2, dir: 'down', row: 0, col: 3 },
                { word: h2, dir: 'across', row: 2, col: 0 },
                { word: h3, dir: 'across', row: 4, col: 0 }
              ];
              if (v3) clues.push({ word: v3, dir: 'down', row: 0, col: 6 });
              return clues;
            }
          }
        }
      }
    }
  }

  // SIZE 8
  if (size === 8) {
    for (const h1 of getCands(8, null, used)) {
      const v1s = getCands(7, w => w[0] === h1[0], new Set([...used, h1]));
      const v2s = getCands(7, w => w[0] === h1[3], new Set([...used, h1]));
      for (const v1 of v1s.slice(0, 7)) {
        for (const v2 of v2s.slice(0, 7)) {
          const h2s = getCands(7, w => w[0] === v1[2] && w[3] === v2[2], new Set([...used, h1, v1, v2]));
          for (const h2 of h2s.slice(0, 5)) {
            const h3s = getCands(7, w => w[0] === v1[4] && w[3] === v2[4], new Set([...used, h1, v1, v2, h2]));
            for (const h3 of h3s.slice(0, 5)) {
              const v3s = getCands(6, w => w[0] === h1[7], new Set([...used, h1, v1, v2, h2, h3]));
              const v3 = v3s[0] || null;
              const h4s = getCands(6, w => w[0] === v1[6], new Set([...used, h1, v1, v2, h2, h3, v3]));
              const h4 = h4s[0] || null;

              const clues = [
                { word: h1, dir: 'across', row: 0, col: 0 },
                { word: v1, dir: 'down', row: 0, col: 0 },
                { word: v2, dir: 'down', row: 0, col: 3 },
                { word: h2, dir: 'across', row: 2, col: 0 },
                { word: h3, dir: 'across', row: 4, col: 0 }
              ];
              if (v3) clues.push({ word: v3, dir: 'down', row: 0, col: 7 });
              if (h4) clues.push({ word: h4, dir: 'across', row: 6, col: 0 });
              return clues;
            }
          }
        }
      }
    }
  }

  // SIZE 9
  if (size === 9) {
    for (const h1 of getCands(9, null, used)) {
      const v1s = getCands(7, w => w[0] === h1[0], new Set([...used, h1]));
      const v2s = getCands(7, w => w[0] === h1[4], new Set([...used, h1]));
      for (const v1 of v1s.slice(0, 6)) {
        for (const v2 of v2s.slice(0, 6)) {
          const h2s = getCands(7, w => w[0] === v1[2] && w[4] === v2[2], new Set([...used, h1, v1, v2]));
          for (const h2 of h2s.slice(0, 5)) {
            const h3s = getCands(7, w => w[0] === v1[4] && w[4] === v2[4], new Set([...used, h1, v1, v2, h2]));
            for (const h3 of h3s.slice(0, 5)) {
              const v3s = getCands(7, w => w[0] === h1[7], new Set([...used, h1, v1, v2, h2, h3]));
              const v3 = v3s[0] || null;
              const h4s = getCands(7, w => w[0] === v1[6], new Set([...used, h1, v1, v2, h2, h3, v3]));
              const h4 = h4s[0] || null;

              const clues = [
                { word: h1, dir: 'across', row: 0, col: 0 },
                { word: v1, dir: 'down', row: 0, col: 0 },
                { word: v2, dir: 'down', row: 0, col: 4 },
                { word: h2, dir: 'across', row: 2, col: 0 },
                { word: h3, dir: 'across', row: 4, col: 0 }
              ];
              if (v3) clues.push({ word: v3, dir: 'down', row: 0, col: 7 });
              if (h4) clues.push({ word: h4, dir: 'across', row: 6, col: 0 });
              return clues;
            }
          }
        }
      }
    }
  }

  // SIZE 10
  if (size === 10) {
    for (const h1 of getCands(10, null, used)) {
      const v1s = getCands(7, w => w[0] === h1[0], new Set([...used, h1]));
      const v2s = getCands(7, w => w[0] === h1[4], new Set([...used, h1]));
      for (const v1 of v1s.slice(0, 6)) {
        for (const v2 of v2s.slice(0, 6)) {
          const h2s = getCands(7, w => w[0] === v1[2] && w[4] === v2[2], new Set([...used, h1, v1, v2]));
          for (const h2 of h2s.slice(0, 5)) {
            const h3s = getCands(7, w => w[0] === v1[4] && w[4] === v2[4], new Set([...used, h1, v1, v2, h2]));
            for (const h3 of h3s.slice(0, 5)) {
              const v3s = getCands(7, w => w[0] === h1[8], new Set([...used, h1, v1, v2, h2, h3]));
              const v3 = v3s[0] || null;
              const h4s = getCands(7, w => w[0] === v1[6], new Set([...used, h1, v1, v2, h2, h3, v3]));
              const h4 = h4s[0] || null;

              const clues = [
                { word: h1, dir: 'across', row: 0, col: 0 },
                { word: v1, dir: 'down', row: 0, col: 0 },
                { word: v2, dir: 'down', row: 0, col: 4 },
                { word: h2, dir: 'across', row: 2, col: 0 },
                { word: h3, dir: 'across', row: 4, col: 0 }
              ];
              if (v3) clues.push({ word: v3, dir: 'down', row: 0, col: 8 });
              if (h4) clues.push({ word: h4, dir: 'across', row: 6, col: 0 });
              return clues;
            }
          }
        }
      }
    }
  }

  return null;
}

// 4. Format and Number Clues with Mathematical Precision
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
    const currentNum = num;
    let usedNum = false;

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

// 5. Rich Thematic Titles & Descriptions
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

// 6. BUILD FINAL 180 PUZZLE SET
const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const SIZES = [5, 6, 7, 8, 9, 10];
const TARGET_COUNTS = { 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 };

// Load current puzzles
const { PUZZLES: currentExisting } = require('../src/puzzleData.ts');

const finalPuzzles = [];

LEVELS.forEach(level => {
  SIZES.forEach(size => {
    const targetCount = TARGET_COUNTS[size];
    
    // Pick existing puzzles for this bucket that pass testPuzzle
    const validExisting = currentExisting.filter(p => {
      if (p.level !== level || p.size !== size) return false;
      try {
        testPuzzle(p.id, p.size, p.clues);
        return true;
      } catch (e) {
        return false;
      }
    });

    const retained = validExisting.slice(0, targetCount);

    retained.forEach((p, idx) => {
      const standardId = `${level.toLowerCase()}-${size}x${size}-${idx + 1}`;
      p.id = standardId;
      finalPuzzles.push(p);
    });

    console.log(`[${level} ${size}x${size}] Retained ${retained.length}/${targetCount} existing puzzles.`);

    let needed = targetCount - retained.length;
    let newIdx = retained.length + 1;
    let seed = 1;

    while (needed > 0 && seed < 300) {
      seed++;
      const candidateClues = solveLayout({ level, size, puzzleSeed: seed + newIdx * 13 });
      if (!candidateClues) continue;

      const formattedClues = formatNumberedClues(candidateClues);
      const testId = `${level.toLowerCase()}-${size}x${size}-${newIdx}`;

      try {
        testPuzzle(testId, size, formattedClues);

        // Check if layout has duplicate words
        const wordsInPuzzle = new Set(formattedClues.map(c => c.word));
        if (wordsInPuzzle.size !== formattedClues.length) continue;

        const themeData = THEMES[level][(newIdx - 1) % THEMES[level].length];
        const title = `${themeData.title} (Bölüm ${newIdx})`;
        const description = themeData.desc;

        let frequencyLevel = 'medium';
        let frequencyLabel = 'Günlük Pratik & Orta';
        if (level === 'A1' || (level === 'A2' && size <= 6)) {
          frequencyLevel = 'high';
          frequencyLabel = 'En Sık Kullanılanlar';
        } else if (level === 'B2' || (level === 'B1' && size >= 8)) {
          frequencyLevel = 'advanced';
          frequencyLabel = 'Zengin & İleri Düzey';
        }

        const puzzle = {
          id: testId,
          title,
          level,
          size,
          description,
          frequencyLevel,
          frequencyLabel,
          clues: formattedClues
        };

        finalPuzzles.push(puzzle);
        needed--;
        newIdx++;
        console.log(`  + Created ${testId} with ${formattedClues.length} words: ${formattedClues.map(c => c.word).join(', ')}`);
      } catch (err) {
        // try next seed
      }
    }

    if (needed > 0) {
      throw new Error(`CRITICAL: Failed to create all ${targetCount} puzzles for ${level} ${size}x${size}`);
    }
  });
});

console.log('=====================================================');
console.log('🎉 TOTAL PUZZLES GENERATED:', finalPuzzles.length);
console.log('=====================================================');

// Final check: Every single puzzle passes testPuzzle
finalPuzzles.forEach(p => {
  testPuzzle(p.id, p.size, p.clues);
});
console.log('✅ 100% of 180 puzzles passed strict grid verification!');

// Write to src/puzzleData.ts
const code = `// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App
// Exactly 180 Verified Puzzles: 45 per level (A1, A2, B1, B2) with 5x5(5), 6x6(6), 7x7(7), 8x8(8), 9x9(9), 10x10(10)

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
    case 'sifat':
    case 'sıfat':
      return { 
        bg: 'bg-amber-500/10 dark:bg-amber-400/15', 
        text: 'text-amber-800 dark:text-amber-300 font-black', 
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

  // Fallback based on CEFR level and word complexity
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

fs.writeFileSync(path.join(__dirname, '../src/puzzleData.ts'), code, 'utf-8');
console.log('🎉 Successfully generated all 180 puzzles and wrote to src/puzzleData.ts!');
