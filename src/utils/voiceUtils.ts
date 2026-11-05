// Akıllı Ses Cinsiyeti ve Karakter Analiz Motoru
export const isMaleVoice = (v: SpeechSynthesisVoice | { name?: string; voiceURI?: string } | null | undefined): boolean => {
  if (!v) return false;
  const s = `${v.name || ''} ${v.voiceURI || ''}`.toLowerCase();

  // Kesin Kadın Anahtar Kelimeleri & Personaları
  const femaleMatches = [
    'female', 'woman', 'zira', 'jenny', 'samantha', 'victoria', 'karen',
    'moira', 'tessa', 'fiona', 'serena', 'ava', 'kate', 'nicky', 'allison',
    'catherine', 'elizabeth', 'sarah', 'mary', 'linda', 'susan', 'jessica',
    'emily', 'chloe', 'sophie', 'emma', 'olivia', 'mia', 'amelia', 'claire',
    'aria', 'hazel', 'ayanda', 'stephanie', 'joanna', 'ivy', 'kendra', 'kimberly',
    'salli', 'nicole', 'google us english', 'google uk english female', 
    'en-us-x-sfg#female', 'en-gb-x-rjs#female', 'en-au-x-aub#female'
  ];
  if (femaleMatches.some(f => s.includes(f))) return false;

  // Kesin Erkek Anahtar Kelimeleri & Personaları
  const maleMatches = [
    'male', 'man', 'david', 'mark', 'daniel', 'alex', 'george', 'guy', 'fred',
    'oliver', 'arthur', 'gordon', 'aaron', 'lee', 'rishi', 'james', 'ryan',
    'tom', 'brian', 'richard', 'thomas', 'william', 'jack', 'charles', 'henry',
    'edward', 'jacob', 'michael', 'paul', 'john', 'peter', 'luke', 'steve',
    'stephen', 'diego', 'jorge', 'steffan', 'christopher', 'matthew', 'justin',
    'joey', 'geraint', 'alva', 'rjs', '#male', '-male', 'uk english male', 'us english male',
    'en-gb-x-rjs', 'en-us-x-sfg#male', 'en-us-x-iog', 'en-us-x-tpd'
  ];
  return maleMatches.some(m => s.includes(m));
};

export const isFemaleVoice = (v: SpeechSynthesisVoice | { name?: string; voiceURI?: string } | null | undefined): boolean => {
  return !isMaleVoice(v);
};

export const getVoiceDisplayInfo = (v: SpeechSynthesisVoice) => {
  const name = v.name || '';
  const lang = (v.lang || '').toLowerCase();
  const isMale = isMaleVoice(v);

  let flag = '🌐';
  let accent = 'İngilizce';
  if (lang.includes('us')) {
    flag = '🇺🇸';
    accent = 'Amerikan';
  } else if (lang.includes('gb') || lang.includes('uk')) {
    flag = '🇬🇧';
    accent = 'İngiliz';
  } else if (lang.includes('au')) {
    flag = '🇦🇺';
    accent = 'Avustralya';
  } else if (lang.includes('ca')) {
    flag = '🇨🇦';
    accent = 'Kanada';
  } else if (lang.includes('ie')) {
    flag = '🇮🇪';
    accent = 'İrlanda';
  } else if (lang.includes('in')) {
    flag = '🇮🇳';
    accent = 'Hindistan';
  }

  const cleanName = name
    .replace(/^microsoft\s+/i, '')
    .replace(/\s*-\s*english\s*\([^)]+\)/i, '')
    .replace(/\s*\(united states\)/i, '')
    .replace(/\s*\(united kingdom\)/i, '')
    .replace(/\s*\(australia\)/i, '')
    .replace(/\s*\(natural\)/i, '')
    .replace(/\s*online/i, '')
    .trim();

  return {
    displayName: cleanName || name,
    flag,
    accent,
    genderLabel: isMale ? '👨 Erkek' : '👩 Kadın',
    isMale
  };
};

export interface VoicePreset {
  id: string;
  name: string;
  desc: string;
  category: 'male' | 'female' | 'hd';
  flag: string;
  badge: string;
}

export const VOICE_PRESETS: VoicePreset[] = [
  {
    id: 'device_us_male',
    name: 'Amerikan Erkek',
    desc: 'David / Alex / Sistem Erkek Sesi',
    category: 'male',
    flag: '🇺🇸',
    badge: '👨 Erkek'
  },
  {
    id: 'device_uk_male',
    name: 'İngiliz Erkek',
    desc: 'Daniel / George / British Erkek',
    category: 'male',
    flag: '🇬🇧',
    badge: '👨 Erkek'
  },
  {
    id: 'hd_us',
    name: 'Amerikan Kadın (Stüdyo)',
    desc: 'Doğal Stüdyo Kaydı • İnsan Telaffuzu',
    category: 'hd',
    flag: '🇺🇸',
    badge: '🌟 Stüdyo HD'
  },
  {
    id: 'hd_uk',
    name: 'İngiliz Kadın (Stüdyo)',
    desc: 'Doğal British Aksanı • Kadın Sesi',
    category: 'hd',
    flag: '🇬🇧',
    badge: '🌟 Stüdyo HD'
  },
  {
    id: 'device_us_female',
    name: 'Amerikan Kadın (Cihaz)',
    desc: 'Zira / Samantha / Canlı Sentez',
    category: 'female',
    flag: '🇺🇸',
    badge: '👩 Kadın'
  },
  {
    id: 'device_uk_female',
    name: 'İngiliz Kadın (Cihaz)',
    desc: 'Hazel / Serena / British Sentez',
    category: 'female',
    flag: '🇬🇧',
    badge: '👩 Kadın'
  }
];

export const getHdAudioUrl = (text: string, voiceId: string): string => {
  let lang = 'en';
  if (voiceId === 'hd_uk') lang = 'en-gb';
  else if (voiceId === 'hd_au') lang = 'en-au';
  else lang = 'en';

  const clean = encodeURIComponent(text.trim().slice(0, 180));
  return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${clean}`;
};
