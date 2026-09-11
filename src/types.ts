// TypeScript Types for English Learning App (İngilizce Öğren)

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2';

export type PhraseCategory = 'phrasal' | 'idiom' | 'collocation' | 'academic';

export interface Sentence {
  id: number;
  eng: string;
  tr: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
}

export interface ReadingText {
  id: number | string;
  level: CEFRLevel;
  title: string;
  bgImage?: string;
  sentences: Sentence[];
  questions?: QuizQuestion[];
  isCustom?: boolean;
}

export interface PhraseInfo {
  tr: string;
  level: CEFRLevel;
  type: PhraseCategory;
  ex: string;
  variants?: string[];
  canonical?: string;
  isVariant?: boolean;
}

export interface PhraseMatch {
  phrase: string;
  matchedText: string;
  index: number;
  length: number;
  info: PhraseInfo;
}

export interface VocabWord {
  id: string;
  word: string;
  translation: string;
  level?: string;
  box: number; // 1 to 5 (Leitner boxes)
  nextReview: number; // timestamp
  reviewCount: number;
  createdAt?: number;
  history?: Array<{
    date: number;
    correct: boolean;
    boxBefore: number;
    boxAfter: number;
  }>;
  sourceText?: string;
  example?: string;
  contextEng?: string;
  contextTr?: string;
  isPhrase?: boolean;
  phraseType?: PhraseCategory;
}

export interface StudyStats {
  dailyStreak: number;
  lastActiveDate: string;
  totalSentencesRead: number;
  totalTextsCompleted: number;
  totalQuizQuestionsAnswered: number;
  totalQuizCorrect: number;
  totalVocabReviews: number;
  dailyActivity?: Record<string, number>;
}

export interface ReaderSettings {
  fontSize: number;
  lineSpacing: number;
  fontFamily: string;
  theme: 'dark' | 'nature' | 'night' | 'classic' | 'warm';
  speechSpeed: number;
  autoScroll: boolean;
  phraseHunterActive: boolean;
  selectedVoiceURI?: string;
}

export interface VoiceOption {
  id: string;
  name: string;
  lang: string;
  voiceURI: string;
  isGoogle: boolean;
  isMale: boolean;
  description?: string;
}
