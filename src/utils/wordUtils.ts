import { dictionary, wordLevelMap } from '../data';

export const cleanWord = (word: string): string => {
  if (!word) return '';
  return word.replace(/[^a-zA-Z0-9'-]/g, '').trim().toLowerCase();
};

export const lookupWordTranslation = (clean: string): string | null => {
  if (!clean) return null;
  // 1. Doğrudan tam eşleşme
  if (dictionary[clean]) return dictionary[clean];

  // Tireli veya bitişik halleri kontrol et
  const noHyphen = clean.replace(/[-']/g, '');
  if (dictionary[noHyphen]) return dictionary[noHyphen];
  const spaced = clean.replace(/[-_]/g, ' ');
  if (dictionary[spaced]) return dictionary[spaced];

  // 2. Düzensiz Fiiller (Past Simple & Past Participle)
  const irregulars: Record<string, string> = {
    "went": "go", "came": "come", "saw": "see", "took": "take", "made": "make",
    "got": "get", "found": "find", "gave": "give", "told": "tell", "thought": "think",
    "felt": "feel", "left": "leave", "knew": "know", "began": "begin", "became": "become",
    "brought": "bring", "built": "build", "bought": "buy", "spoke": "speak", "spent": "spend",
    "stood": "stand", "swam": "swim", "ran": "run", "read": "read", "wrote": "write",
    "wore": "wear", "won": "win", "woke": "wake", "slept": "sleep", "paid": "pay",
    "met": "meet", "lost": "lose", "kept": "keep", "held": "hold", "heard": "hear",
    "grew": "grow", "drew": "draw", "drove": "drive", "drank": "drink", "ate": "eat",
    "fell": "fall", "flew": "fly", "forgot": "forget", "chose": "choose", "broken": "break",
    "chosen": "choose", "driven": "drive", "eaten": "eat", "fallen": "fall", "flown": "fly",
    "forgotten": "forget", "given": "give", "grown": "grow", "known": "know", "seen": "see",
    "spoken": "speak", "taken": "take", "written": "write", "taught": "teach", "caught": "catch",
    "fought": "fight", "hid": "hide", "hidden": "hide", "bit": "bite", "bitten": "bite"
  };

  if (irregulars[clean] && dictionary[irregulars[clean]]) {
    return dictionary[irregulars[clean]];
  }

  // 3. Ek Morfolojisi Kuralları
  const rules = [
    ["'s", ""], ["s", ""], ["es", ""], ["ed", ""], ["d", ""],
    ["ing", ""], ["ing", "e"], ["ly", ""], ["er", ""], ["est", ""],
    ["ied", "y"], ["ies", "y"], ["ier", "y"], ["iest", "y"], ["ily", "y"],
    ["al", ""], ["ic", ""], ["ical", ""], ["ical", "y"], ["able", ""], ["able", "e"],
    ["ment", ""], ["ness", ""], ["ful", ""], ["less", ""], ["tion", ""], ["tion", "te"]
  ];

  for (const [suffix, replace] of rules) {
    if (clean.endsWith(suffix) && clean.length > suffix.length + 2) {
      const stem = clean.slice(0, -suffix.length) + replace;
      if (dictionary[stem]) return dictionary[stem];
    }
  }

  // 4. Çift sessiz harf düşürme (örneğin: running -> run, planning -> plan)
  if (clean.endsWith("ing") && clean.length > 5) {
    const base = clean.slice(0, -3);
    if (base[base.length - 1] === base[base.length - 2]) {
      const single = base.slice(0, -1);
      if (dictionary[single]) return dictionary[single];
    }
  }

  // 5. Olumsuzluk ve yön ön ekleri (un-, dis-, re-, in-, im-, non-)
  const prefixes = ["un", "dis", "re", "non", "mis", "in", "im", "il", "ir"];
  for (const pre of prefixes) {
    if (clean.startsWith(pre) && clean.length > pre.length + 3) {
      const base = clean.slice(pre.length);
      if (dictionary[base]) {
        return `${pre === 'un' || pre === 'dis' || pre === 'non' ? 'olumsuz: ' : ''}${dictionary[base]}`;
      }
    }
  }

  return null;
};

export const getWordLevel = (wordStr: string, currentTextLevel?: string): string => {
  const clean = cleanWord(wordStr);
  if (wordLevelMap[clean]) return wordLevelMap[clean];
  if (currentTextLevel && ['A1', 'A2', 'B1', 'B2'].includes(currentTextLevel)) {
    return currentTextLevel;
  }
  return 'B1';
};
