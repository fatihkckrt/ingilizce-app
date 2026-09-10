// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { 
  idbGet, 
  idbSet, 
  dictionary, 
  wordLevelMap, 
  LEITNER_INTERVALS, 
  levels, 
  defaultTexts, 
  phrasalVerbs, 
  findPhrasalVerbsInText, 
  logStudyActivity,
  getTextBgImage
} from "./data";
import { StatsModal } from "./components/StatsModal";
import { AITextGenerator } from "./components/AITextGenerator";
import { InstallPromptBanner } from "./components/InstallPromptBanner";
import { Settings } from "lucide-react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uygulama hatası:", error, errorInfo);
  }
  handleReset = async () => {
    try {
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map(r => r.unregister()));
      }
    } catch (e) {
      console.warn(e);
    }
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="text-4xl mb-4">🌿</div>
          <h2 className="text-xl font-bold mb-2">Uygulama Yüklenirken Bir Sorun Oluştu</h2>
          <p className="text-sm text-slate-400 mb-6 max-w-sm">
            Eski önbellek kalıntısı temizlenerek en güncel sürüm yeniden yüklenebilir.
          </p>
          <button
            onClick={this.handleReset}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold rounded-xl text-white shadow-lg transition"
          >
            🔄 Önbelleği Temizle ve Yeniden Başlat
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainApp() {
  const [completedTexts, setCompletedTexts] = useState(() => {
    try { 
      const raw = JSON.parse(localStorage.getItem('completedTexts') || '[]'); 
      return Array.isArray(raw) ? raw : [];
    } catch { return []; }
  });

  const [savedWords, setSavedWords] = useState(() => {
    try { 
      const raw = JSON.parse(localStorage.getItem('savedWords') || '[]');
      if (!Array.isArray(raw)) return [];
      return raw.map(w => ({
        ...w,
        level: w.level || 'B1',
        box: typeof w.box === 'number' ? w.box : 1,
        nextReview: typeof w.nextReview === 'number' ? w.nextReview : Date.now(),
        lastReviewed: w.lastReviewed || null,
        contextEng: w.contextEng || null,
        contextTr: w.contextTr || null,
        sourceTitle: w.sourceTitle || null
      }));
    } catch { return []; }
  });

  const [customTexts, setCustomTexts] = useState(() => {
    try { 
      const raw = JSON.parse(localStorage.getItem('customTexts') || '[]'); 
      return Array.isArray(raw) ? raw : [];
    } catch { return []; }
  });

  // INDEXEDDB İLE İLK YÜKLEME VE SENKRONİZASYON
  useEffect(() => {
    (async () => {
      const idbWords = await idbGet('savedWords');
      const idbTexts = await idbGet('customTexts');
      const idbCompleted = await idbGet('completedTexts');

      if (idbWords && Array.isArray(idbWords)) setSavedWords(idbWords);
      else if (savedWords.length > 0) idbSet('savedWords', savedWords);

      if (idbTexts && Array.isArray(idbTexts)) setCustomTexts(idbTexts);
      else if (customTexts.length > 0) idbSet('customTexts', customTexts);

      if (idbCompleted && Array.isArray(idbCompleted)) setCompletedTexts(idbCompleted);
      else if (completedTexts.length > 0) idbSet('completedTexts', completedTexts);
    })();
  }, []);

  // DEFAULT UYGULAMA AYARLARI:
  // Telaffuz hızı: 1x (1.0)
  // Okuma teması: sepia (Kitap)
  // Yazı boyutu: base (MD)
  // Yazı tipi: sans
  const [readerTheme, setReaderTheme] = useState(() => {
    const initialized = localStorage.getItem('app_defaults_v3_applied');
    if (!initialized) return 'sepia';
    return localStorage.getItem('app_theme') || 'sepia';
  });
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('app_fontsize') || 'base';
  });
  const [fontFamily, setFontFamily] = useState(() => {
    return localStorage.getItem('app_fontfamily') || 'sans';
  });
  const [speechRate, setSpeechRate] = useState(() => {
    const initialized = localStorage.getItem('app_defaults_v3_applied');
    if (!initialized) return 1.0;
    const saved = localStorage.getItem('app_speech_rate');
    return saved ? parseFloat(saved) : 1.0;
  });
  const [speechPitch, setSpeechPitch] = useState(() => {
    const saved = localStorage.getItem('app_speech_pitch');
    return saved ? parseFloat(saved) : 1.0;
  });

  useEffect(() => {
    localStorage.setItem('app_speech_pitch', speechPitch.toString());
  }, [speechPitch]);

  const [phraseHunterActive, setPhraseHunterActive] = useState(() => {
    return localStorage.getItem('app_phrase_hunter') === 'true';
  });
  const [showTypeSettings, setShowTypeSettings] = useState(false);
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);

  // Eski/yeni tüm kullanıcılarda varsayılanların uygulanması (isteyen ayarlardan dilediğince değiştirebilir)
  useEffect(() => {
    if (!localStorage.getItem('app_defaults_v3_applied')) {
      localStorage.setItem('app_defaults_v3_applied', 'true');
      const oldTheme = localStorage.getItem('app_theme');
      if (!oldTheme || oldTheme === 'glass') {
        localStorage.setItem('app_theme', 'sepia');
        setReaderTheme('sepia');
      }
      const oldRate = localStorage.getItem('app_speech_rate');
      if (!oldRate || oldRate === '0.9') {
        localStorage.setItem('app_speech_rate', '1.0');
        setSpeechRate(1.0);
      }
      const oldFont = localStorage.getItem('app_fontfamily');
      if (!oldFont) {
        localStorage.setItem('app_fontfamily', 'sans');
        setFontFamily('sans');
      }
      const oldSize = localStorage.getItem('app_fontsize');
      if (!oldSize) {
        localStorage.setItem('app_fontsize', 'base');
        setFontSize('base');
      }
    }
  }, []);

  // Doğal ve Gerçekçi Sesler (TTS Voices Engine)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState(() => localStorage.getItem('app_selected_voice') || '');

  // Ses kalitesi ve gerçekçilik derecelendirmesi (En doğal ve neural sesler en üstte)
  const getVoiceScore = (v: SpeechSynthesisVoice): number => {
    let score = 0;
    const name = (v.name || '').toLowerCase();
    const uri = (v.voiceURI || '').toLowerCase();
    const lang = (v.lang || '').toLowerCase();

    // 1. Bulut / Neural / Doğal insan sesleri (En gerçekçi ses tonu)
    if (name.includes('natural') || uri.includes('natural')) score += 120;
    if (name.includes('online') || uri.includes('online')) score += 105;
    if (name.includes('neural') || uri.includes('neural')) score += 100;
    if (name.includes('enhanced') || uri.includes('enhanced')) score += 95;
    if (name.includes('premium') || uri.includes('premium')) score += 90;
    if (name.includes('studio') || name.includes('journey')) score += 90;
    if (name.includes('siri')) score += 85;
    if (name.includes('google') || uri.includes('google')) score += 80;
    if (name.includes('network') || uri.includes('network')) score += 75;
    if (!v.localService) score += 60;

    // 2. Yüksek kaliteli popüler yapay zeka modelleri
    if (name.includes('jenny') || name.includes('guy') || name.includes('aria') || name.includes('ryan')) score += 50;
    if (name.includes('samantha') || name.includes('daniel') || name.includes('karen') || name.includes('ava') || name.includes('serena')) score += 40;

    // 3. İngilizce varyant önceliği
    if (lang.startsWith('en-us')) score += 25;
    else if (lang.startsWith('en-gb')) score += 20;
    else if (lang.startsWith('en-au') || lang.startsWith('en-ca')) score += 15;
    else if (lang.startsWith('en')) score += 10;

    return score;
  };

  // Kullanıcı dostu anlaşılır ses etiketi (Bayrak + Kalite Rozeti + Temiz İsim)
  const formatVoiceLabel = (v: SpeechSynthesisVoice) => {
    const name = v.name || '';
    const lang = (v.lang || '').toLowerCase();
    
    let flag = '🌐';
    let accentName = 'İngilizce';
    if (lang.includes('us')) {
      flag = '🇺🇸';
      accentName = 'Amerikan';
    } else if (lang.includes('gb') || lang.includes('uk')) {
      flag = '🇬🇧';
      accentName = 'İngiliz';
    } else if (lang.includes('au')) {
      flag = '🇦🇺';
      accentName = 'Avustralya';
    } else if (lang.includes('ca')) {
      flag = '🇨🇦';
      accentName = 'Kanada';
    } else if (lang.includes('ie')) {
      flag = '🇮🇪';
      accentName = 'İrlanda';
    }

    const isNatural = name.toLowerCase().includes('natural') || name.toLowerCase().includes('online') || name.toLowerCase().includes('neural');
    const isGoogle = name.toLowerCase().includes('google');
    const isEnhanced = name.toLowerCase().includes('enhanced') || name.toLowerCase().includes('premium');
    const isSiri = name.toLowerCase().includes('siri');

    let badge = '🎙️';
    let cleanName = name
      .replace(/^microsoft\s+/i, '')
      .replace(/\s*-\s*english\s*\([^)]+\)/i, '')
      .replace(/\s*\(united states\)/i, '')
      .replace(/\s*\(united kingdom\)/i, '')
      .replace(/\s*\(australia\)/i, '')
      .replace(/\s*\(natural\)/i, '')
      .replace(/\s*online/i, '')
      .trim();

    if (isNatural) {
      badge = '🌟 [Doğal/HD]';
    } else if (isGoogle) {
      badge = '🌟 [Google HD]';
    } else if (isEnhanced || isSiri) {
      badge = '✨ [Gelişmiş]';
    }

    return `${badge} ${flag} ${cleanName || name} (${accentName})`;
  };

  const getLiveVoice = (voiceId?: string): SpeechSynthesisVoice | null => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    const currentVoices = window.speechSynthesis.getVoices();
    if (!currentVoices || currentVoices.length === 0) return null;
    
    if (voiceId) {
      const match = currentVoices.find(v => v.name === voiceId || v.voiceURI === voiceId);
      if (match) return match;
    }
    const en = currentVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
    const pool = en.length > 0 ? en : currentVoices;
    const sorted = [...pool].sort((a, b) => getVoiceScore(b) - getVoiceScore(a));
    return sorted[0] || null;
  };

  const applyVoiceToUtterance = (utterance: SpeechSynthesisUtterance, customRate?: number, customPitch?: number) => {
    const vObj = getLiveVoice(selectedVoice);
    if (vObj) {
      utterance.voice = vObj;
      // KRİTİK: utterance.lang ile sesin dili (en-GB, en-US vb.) tam senkronize edilmelidir,
      // aksi takdirde tarayıcılar (özellikle Chrome ve Android) seçili sesi görmezden gelip standart robota döner.
      utterance.lang = vObj.lang || 'en-US';
    } else {
      utterance.lang = 'en-US';
    }
    utterance.rate = customRate ?? speechRate;
    utterance.pitch = customPitch ?? speechPitch;
  };

  const testVoice = (voiceName?: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const sampleText = "Hello! Keep up the great work practicing English.";
    const utterance = new SpeechSynthesisUtterance(sampleText);
    const targetId = voiceName || selectedVoice;
    const vObj = getLiveVoice(targetId);
    if (vObj) {
      utterance.voice = vObj;
      utterance.lang = vObj.lang || 'en-US';
    } else {
      utterance.lang = 'en-US';
    }
    utterance.rate = speechRate;
    utterance.pitch = speechPitch;
    window._activeSpeechUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const loadVoices = () => {
      const all = window.speechSynthesis.getVoices();
      if (!all || all.length === 0) return;
      const enVoices = all.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
      const chosenList = enVoices.length > 0 ? enVoices : all;
      const sorted = [...chosenList].sort((a, b) => getVoiceScore(b) - getVoiceScore(a));
      setVoices(sorted);

      const saved = localStorage.getItem('app_selected_voice');
      const savedExists = saved && sorted.some(v => v.name === saved || v.voiceURI === saved);
      if (!savedExists && sorted.length > 0) {
        setSelectedVoice(sorted[0].name);
        localStorage.setItem('app_selected_voice', sorted[0].name);
      }
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  useEffect(() => {
    if (selectedVoice) localStorage.setItem('app_selected_voice', selectedVoice);
  }, [selectedVoice]);

  // Karaoke Senkronizasyonu
  const [karaokeState, setKaraokeState] = useState({ sentenceId: null, wordIdx: null });
  const karaokeTimerRef = useRef(null);

  // Dinleme Modu
  const [isListeningMode, setIsListeningMode] = useState(false);

  const [currentView, setCurrentView] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [activeText, setActiveText] = useState(null);
  const [selectedTranslation, setSelectedTranslation] = useState(null);
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);
  const [customWordInput, setCustomWordInput] = useState('');
  const [selectedLevelTag, setSelectedLevelTag] = useState('B1');
  const [activeHighlight, setActiveHighlight] = useState(null);
  const [showFullTranslation, setShowFullTranslation] = useState(false);
  const [revealedSentences, setRevealedSentences] = useState({});
  const [toastMessage, setToastMessage] = useState(null);
  
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);
  
  const [vocabQuestions, setVocabQuestions] = useState([]);
  const [currentVocabIdx, setCurrentVocabIdx] = useState(0);
  const [vocabScore, setVocabScore] = useState(0);
  const [vocabTestFinished, setVocabTestFinished] = useState(false);
  const [selectedVocabOption, setSelectedVocabOption] = useState(null);
  const [vocabHistory, setVocabHistory] = useState([]);
  
  const [wordFilterLevel, setWordFilterLevel] = useState('ALL');
  const [wordFilterBox, setWordFilterBox] = useState('ALL');

  const [newTitle, setNewTitle] = useState('');
  const [newLevel, setNewLevel] = useState('B1');
  const [newEngText, setNewEngText] = useState('');
  const [newTrText, setNewTrText] = useState('');

  const fileInputRef = useRef(null);
  const homeScrollRef = useRef(null);
  const settingsPanelRef = useRef(null);

  // Tarayıcı Geri Tuşu & Geçmiş (History) Senkronizasyonu için Ref'ler
  const currentViewRef = useRef(currentView);
  const selectedLevelRef = useRef(selectedLevel);
  const activeTextRef = useRef(activeText);
  const customTextsRef = useRef(customTexts);
  const selectedTranslationRef = useRef(selectedTranslation);
  const showTypeSettingsRef = useRef(showTypeSettings);
  const showBackupModalRef = useRef(showBackupModal);
  const showStatsModalRef = useRef(showStatsModal);

  useEffect(() => { currentViewRef.current = currentView; }, [currentView]);
  useEffect(() => { selectedLevelRef.current = selectedLevel; }, [selectedLevel]);
  useEffect(() => { activeTextRef.current = activeText; }, [activeText]);
  useEffect(() => { customTextsRef.current = customTexts; }, [customTexts]);
  useEffect(() => { selectedTranslationRef.current = selectedTranslation; }, [selectedTranslation]);
  useEffect(() => { showTypeSettingsRef.current = showTypeSettings; }, [showTypeSettings]);
  useEffect(() => { showBackupModalRef.current = showBackupModal; }, [showBackupModal]);
  useEffect(() => { showStatsModalRef.current = showStatsModal; }, [showStatsModal]);

  // TARAYICI & TELEFON GERİ TUŞU YÖNETİMİ (popstate)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (!window.history.state || !window.history.state.view) {
      window.history.replaceState({ view: 'home' }, '');
    }

    const handlePopState = (event) => {
      stopKaraoke();

      const state = event.state;

      // 1. Açık olan modalleri kapat
      if (selectedTranslationRef.current && (!state || state.modal !== 'translation')) {
        setSelectedTranslation(null);
        setActiveHighlight(null);
      }
      if (showTypeSettingsRef.current && (!state || state.modal !== 'typeSettings')) {
        setShowTypeSettings(false);
        requestAnimationFrame(() => {
          homeScrollRef.current?.scrollTo({ top: 0, behavior: 'instant' });
          window.scrollTo({ top: 0, behavior: 'instant' });
        });
      }
      if (showBackupModalRef.current && (!state || state.modal !== 'backup')) {
        setShowBackupModal(false);
      }
      if (showStatsModalRef.current && (!state || state.modal !== 'stats')) {
        setShowStatsModal(false);
      }

      // 2. Eğer ana ekrana dönüldüyse veya state yoksa
      if (!state || !state.view || state.view === 'home') {
        setCurrentView('home');
        setSelectedLevel(null);
        setActiveText(null);
        return;
      }

      // 3. İlgili görünüme dön
      setCurrentView(state.view);

      if (state.selectedLevel) {
        setSelectedLevel(state.selectedLevel);
      }

      if (state.activeTextId) {
        const allTexts = [...defaultTexts, ...(customTextsRef.current || [])];
        const found = allTexts.find(t => t.id === state.activeTextId);
        if (found) {
          setActiveText(found);
        }
      } else if (state.view !== 'reading' && state.view !== 'textQuiz') {
        setActiveText(null);
        setQuizScore(null);
        setQuizAnswers({});
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Hem LocalStorage hem de IndexedDB'ye Kayıt
  useEffect(() => {
    localStorage.setItem('completedTexts', JSON.stringify(completedTexts));
    idbSet('completedTexts', completedTexts);
  }, [completedTexts]);

  useEffect(() => {
    localStorage.setItem('savedWords', JSON.stringify(savedWords));
    idbSet('savedWords', savedWords);
  }, [savedWords]);

  useEffect(() => {
    localStorage.setItem('customTexts', JSON.stringify(customTexts));
    idbSet('customTexts', customTexts);
  }, [customTexts]);

  useEffect(() => { localStorage.setItem('app_theme', readerTheme); }, [readerTheme]);
  useEffect(() => { localStorage.setItem('app_fontsize', fontSize); }, [fontSize]);
  useEffect(() => { localStorage.setItem('app_fontfamily', fontFamily); }, [fontFamily]);
  useEffect(() => { localStorage.setItem('app_speech_rate', speechRate); }, [speechRate]);
  useEffect(() => { localStorage.setItem('app_phrase_hunter', phraseHunterActive.toString()); }, [phraseHunterActive]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  useEffect(() => {
    if (currentView === 'vocabTest' && isListeningMode && !vocabTestFinished && vocabQuestions[currentVocabIdx]) {
      const timer = setTimeout(() => {
        speak(vocabQuestions[currentVocabIdx].word);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentVocabIdx, isListeningMode, currentView, vocabTestFinished]);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      applyVoiceToUtterance(utterance);
      window._activeSpeechUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  // KARAOKE SENKRONİZASYON MOTORU (HİBRİT + KESİNTİSİZ ZAMANLAYICI)
  const stopKaraoke = () => {
    if (karaokeTimerRef.current) {
      clearTimeout(karaokeTimerRef.current);
      karaokeTimerRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setKaraokeState({ sentenceId: null, wordIdx: null });
  };

  const speakSentenceWithKaraoke = (sentence) => {
    if (!('speechSynthesis' in window)) return;
    stopKaraoke();

    const text = sentence.eng;
    const words = text.split(' ');
    
    // Her kelime için süre tahmini (kelime uzunluğu + noktalama + konuşma hızı)
    const wordDurations = words.map(w => {
      const clean = w.replace(/[^a-zA-Z]/g, '');
      let duration = (Math.max(2, clean.length) * 65 + 130) / speechRate;
      if (/[.,!?;:]$/.test(w)) duration += 160 / speechRate;
      return Math.max(160, duration);
    });

    let currentIdx = 0;
    setKaraokeState({ sentenceId: sentence.id, wordIdx: 0 });

    const scheduleNext = (idx) => {
      if (idx < words.length - 1) {
        karaokeTimerRef.current = setTimeout(() => {
          currentIdx = idx + 1;
          setKaraokeState({ sentenceId: sentence.id, wordIdx: currentIdx });
          scheduleNext(currentIdx);
        }, wordDurations[idx]);
      } else {
        karaokeTimerRef.current = setTimeout(() => {
          setKaraokeState({ sentenceId: null, wordIdx: null });
        }, wordDurations[idx] + 200);
      }
    };

    scheduleNext(0);

    const utterance = new SpeechSynthesisUtterance(text);
    applyVoiceToUtterance(utterance);
    window._activeSpeechUtterance = utterance;

    // Tarayıcı destekliyorsa onboundary ile senkronu kalibre et
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        let charAcc = 0;
        for (let i = 0; i < words.length; i++) {
          if (charAcc >= event.charIndex) {
            currentIdx = i;
            setKaraokeState({ sentenceId: sentence.id, wordIdx: i });
            break;
          }
          charAcc += words[i].length + 1;
        }
      }
    };

    utterance.onend = () => {
      if (karaokeTimerRef.current) clearTimeout(karaokeTimerRef.current);
      setKaraokeState({ sentenceId: null, wordIdx: null });
    };

    utterance.onerror = () => {
      if (karaokeTimerRef.current) clearTimeout(karaokeTimerRef.current);
      setKaraokeState({ sentenceId: null, wordIdx: null });
    };

    window.speechSynthesis.speak(utterance);
  };

  const cleanWord = (word) => {
    if (!word) return '';
    return word.replace(/[^a-zA-Z0-9'-]/g, '').trim().toLowerCase();
  };

  const lookupWordTranslation = (clean) => {
    if (!clean) return null;
    // 1. Doğrudan tam eşleşme
    if (dictionary[clean]) return dictionary[clean];

    // Tireli veya bitişik halleri kontrol et
    const noHyphen = clean.replace(/[-']/g, '');
    if (dictionary[noHyphen]) return dictionary[noHyphen];
    const spaced = clean.replace(/[-_]/g, ' ');
    if (dictionary[spaced]) return dictionary[spaced];

    // 2. Düzensiz Fiiller (Past Simple & Past Participle)
    const irregulars = {
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

  const getWordLevel = (wordStr, currentTextLevel) => {
    const clean = cleanWord(wordStr);
    if (wordLevelMap[clean]) return wordLevelMap[clean];
    if (currentTextLevel && ['A1', 'A2', 'B1', 'B2'].includes(currentTextLevel)) {
      return currentTextLevel;
    }
    return 'B1';
  };

  const formatReviewTime = (nextReview) => {
    if (!nextReview) return 'Hemen';
    const diff = nextReview - Date.now();
    if (diff <= 0) return 'Vakti Geldi ⚡';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) return `${hours || 1} sa sonra`;
    const days = Math.floor(hours / 24);
    return `${days} gün sonra`;
  };

  const isDue = (w) => (w.nextReview || 0) <= Date.now();

  const handleWordClick = (word, index, sentenceWords, sentence) => {
    const cleanWords = sentenceWords.map(w => cleanWord(w));
    const clickedCleanWord = cleanWords[index];

    const detectedLevel = getWordLevel(clickedCleanWord, activeText?.level);
    setSelectedLevelTag(detectedLevel);

    const foundSingleTr = lookupWordTranslation(clickedCleanWord);
    const singleWordData = {
      original: clickedCleanWord,
      translated: foundSingleTr || null
    };

    let foundPhraseData = null;
    let matchedIndices = [index];

    for (let len = 4; len >= 2; len--) {
      for (let start = Math.max(0, index - len + 1); start <= index; start++) {
        if (start + len <= cleanWords.length) {
          const phraseCandidate = cleanWords.slice(start, start + len).join(' ');
          if (phrasalVerbs[phraseCandidate]) {
            matchedIndices = Array.from({length: len}, (_, i) => start + i);
            foundPhraseData = {
              original: sentenceWords.slice(start, start + len).join(' '),
              translated: phrasalVerbs[phraseCandidate].tr,
              isPhrasal: true,
              level: phrasalVerbs[phraseCandidate].level,
              example: phrasalVerbs[phraseCandidate].ex
            };
            setSelectedLevelTag(phrasalVerbs[phraseCandidate].level);
            break;
          } else if (dictionary[phraseCandidate]) {
            matchedIndices = Array.from({length: len}, (_, i) => start + i);
            foundPhraseData = {
              original: sentenceWords.slice(start, start + len).join(' '),
              translated: dictionary[phraseCandidate],
              isPhrasal: false
            };
            break;
          }
        }
      }
      if (foundPhraseData) break;
    }

    const contextData = sentence ? {
      contextEng: sentence.eng,
      contextTr: sentence.tr,
      sourceTitle: activeText?.title || 'Okuma Parçası'
    } : null;

    openTranslationModal({ 
      word: singleWordData, 
      phrase: foundPhraseData,
      context: contextData
    });
    setActiveHighlight({ sentenceId: sentence?.id, indices: matchedIndices });
    speak(foundPhraseData ? foundPhraseData.original : singleWordData.original);

    // Çevrim içi dinamik arama (Eğer kelime yerel sözlükte bulunamadıysa)
    if (!foundSingleTr && clickedCleanWord && clickedCleanWord.length > 1) {
      setIsSearchingOnline(true);
      fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(clickedCleanWord)}&langpair=en|tr`)
        .then(res => res.json())
        .then(data => {
          const rawTr = data?.responseData?.translatedText;
          if (rawTr && rawTr.toLowerCase() !== clickedCleanWord.toLowerCase() && !rawTr.includes('MYMEMORY')) {
            const cleanTr = rawTr.toLowerCase().trim();
            dictionary[clickedCleanWord] = cleanTr;
            setSelectedTranslation(prev => {
              if (!prev || prev.word?.original !== clickedCleanWord) return prev;
              return {
                ...prev,
                word: {
                  ...prev.word,
                  translated: cleanTr
                }
              };
            });
          }
        })
        .catch(() => {})
        .finally(() => {
          setIsSearchingOnline(false);
        });
    }
  };

  const handlePhrasalBadgeClick = (phrasalMatch, sentence) => {
    const pInfo = phrasalMatch.info;
    const phraseData = {
      original: phrasalMatch.phrase,
      translated: pInfo.tr,
      isPhrasal: true,
      level: pInfo.level,
      example: pInfo.ex
    };
    setSelectedLevelTag(pInfo.level);

    const contextData = {
      contextEng: sentence.eng,
      contextTr: sentence.tr,
      sourceTitle: activeText?.title || 'Okuma Parçası'
    };

    openTranslationModal({
      word: null,
      phrase: phraseData,
      context: contextData
    });
    speak(phrasalMatch.phrase);
  };

  const isIndexInPhrase = (idx, cleanWords) => {
    for (let len = 4; len >= 2; len--) {
      for (let start = Math.max(0, idx - len + 1); start <= idx; start++) {
        if (start + len <= cleanWords.length) {
          const phraseCandidate = cleanWords.slice(start, start + len).join(' ');
          if (phrasalVerbs[phraseCandidate] || dictionary[phraseCandidate]) return true;
        }
      }
    }
    return false;
  };

  const navigateTo = (view, options = {}) => {
    stopKaraoke();
    setSelectedTranslation(null);
    setActiveHighlight(null);
    setShowTypeSettings(false);
    setShowBackupModal(false);
    setShowStatsModal(false);

    if (options.level !== undefined) setSelectedLevel(options.level);
    if (options.text !== undefined) setActiveText(options.text);

    setCurrentView(view);

    const targetLevel = options.level !== undefined ? options.level : (['levels', 'reading', 'textQuiz'].includes(view) ? selectedLevelRef.current : null);
    const targetText = options.text !== undefined ? options.text : (['reading', 'textQuiz'].includes(view) ? activeTextRef.current : null);

    const stateObj = {
      view,
      selectedLevel: targetLevel,
      activeTextId: targetText?.id || null,
      isCustom: targetText?.isCustom || false
    };

    if (view === 'home') {
      window.history.replaceState(stateObj, '');
    } else {
      window.history.pushState(stateObj, '');
    }
  };

  const openTranslationModal = (data) => {
    setSelectedTranslation(data);
    if (window.history.state && window.history.state.modal === 'translation') {
      window.history.replaceState({ ...window.history.state, modal: 'translation' }, '');
    } else {
      window.history.pushState({ ...(window.history.state || { view: currentViewRef.current }), modal: 'translation' }, '');
    }
  };

  const closeTranslationModal = () => {
    setCustomWordInput('');
    setIsSearchingOnline(false);
    setSelectedTranslation(null);
    setActiveHighlight(null);
    if (window.history.state && window.history.state.modal === 'translation') {
      window.history.back();
    }
  };

  const openBackupModal = () => {
    setShowBackupModal(true);
    if (!window.history.state || window.history.state.modal !== 'backup') {
      window.history.pushState({ ...(window.history.state || { view: currentViewRef.current }), modal: 'backup' }, '');
    }
  };

  const closeBackupModal = () => {
    setShowBackupModal(false);
    if (window.history.state && window.history.state.modal === 'backup') {
      window.history.back();
    }
  };

  const openStatsModal = () => {
    setShowStatsModal(true);
    if (!window.history.state || window.history.state.modal !== 'stats') {
      window.history.pushState({ ...(window.history.state || { view: currentViewRef.current }), modal: 'stats' }, '');
    }
  };

  const closeStatsModal = () => {
    setShowStatsModal(false);
    if (window.history.state && window.history.state.modal === 'stats') {
      window.history.back();
    }
  };

  const toggleTypeSettings = () => {
    if (showTypeSettings) {
      closeTypeSettings();
    } else {
      setShowTypeSettings(true);
      setTimeout(() => {
        homeScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        settingsPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const handleOpenSettingsFromBottom = () => {
    if (showTypeSettings) {
      closeTypeSettings();
    } else {
      setShowTypeSettings(true);
      setTimeout(() => {
        homeScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        settingsPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const closeTypeSettings = () => {
    setShowTypeSettings(false);
    if (window.history.state && window.history.state.modal === 'typeSettings') {
      window.history.back();
    }
    requestAnimationFrame(() => {
      homeScrollRef.current?.scrollTo({ top: 0, behavior: 'instant' });
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };

  const handleHeaderBack = () => {
    stopKaraoke();

    // 1. Önce açık olan modalleri kapat
    if (selectedTranslationRef.current) {
      closeTranslationModal();
      return;
    }
    if (showTypeSettingsRef.current) {
      closeTypeSettings();
      return;
    }
    if (showBackupModalRef.current) {
      closeBackupModal();
      return;
    }
    if (showStatsModalRef.current) {
      closeStatsModal();
      return;
    }

    // 2. Döngüleri kesin önleyen hiyerarşik geri dönüş
    const cv = currentViewRef.current;
    if (cv === 'textQuiz') {
      if (activeTextRef.current) {
        navigateTo('reading', { text: activeTextRef.current, level: selectedLevelRef.current || activeTextRef.current.level });
      } else if (selectedLevelRef.current) {
        navigateTo('levels', { level: selectedLevelRef.current });
      } else {
        navigateTo('home');
      }
      return;
    }

    if (cv === 'reading') {
      if (activeTextRef.current?.isCustom) {
        navigateTo('customList');
      } else if (selectedLevelRef.current || activeTextRef.current?.level) {
        navigateTo('levels', { level: selectedLevelRef.current || activeTextRef.current?.level });
      } else {
        navigateTo('home');
      }
      return;
    }

    // levels, savedWords, vocabTest, addText, customList, aiGenerate -> Kesinlikle Ana Ekran'a dön
    navigateTo('home');
  };

  const fallbackGoBack = () => {
    handleHeaderBack();
  };

  const returnToLevelList = () => {
    stopKaraoke();
    if (activeText && !completedTexts.includes(activeText.id)) {
      setCompletedTexts(prev => [...prev, activeText.id]);
      logStudyActivity('text_completed', { count: 1 });
    }
    if (activeText?.isCustom) {
      navigateTo('customList');
    } else if (selectedLevel || activeText?.level) {
      navigateTo('levels', { level: selectedLevel || activeText?.level });
    } else {
      navigateTo('home');
    }
  };

  const startReading = (text) => {
    stopKaraoke();
    setRevealedSentences({});
    setShowFullTranslation(false);
    setSelectedTranslation(null);
    setActiveHighlight(null);
    setShowTypeSettings(false);
    logStudyActivity('sentence_read', { count: text.sentences?.length || 1 });
    navigateTo('reading', { text, level: selectedLevel || text.level });
  };

  const handleFinishReading = () => {
    stopKaraoke();
    if (activeText && activeText.questions && activeText.questions.length > 0) {
      setQuizAnswers({});
      setQuizScore(null);
      setSelectedTranslation(null);
      navigateTo('textQuiz', { text: activeText, level: selectedLevel });
    } else {
      completeTextAndGoBack();
    }
  };

  const completeTextAndGoBack = () => {
    if (activeText && !completedTexts.includes(activeText.id)) {
      setCompletedTexts(prev => [...prev, activeText.id]);
      logStudyActivity('text_completed', { count: 1 });
    }
    setToastMessage("Tebrikler! Metin tamamlandı. 🎉");
    setTimeout(() => {
      if (activeText?.isCustom) {
        navigateTo('customList');
      } else if (selectedLevel || activeText?.level) {
        navigateTo('levels', { level: selectedLevel || activeText?.level });
      } else {
        navigateTo('home');
      }
    }, 350);
  };

  const checkTextQuiz = () => {
    if (!activeText || !activeText.questions) return;
    let score = 0;
    activeText.questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answer) score++;
    });
    setQuizScore(score);
    logStudyActivity('quiz_completed', { total: activeText.questions.length, correct: score });
    if (score === activeText.questions.length && !completedTexts.includes(activeText.id)) {
      setCompletedTexts(prev => [...prev, activeText.id]);
      logStudyActivity('text_completed', { count: 1 });
    }
  };

  const toggleSaveWord = (wordObj, chosenLevel, contextData = null) => {
    if (!wordObj || !wordObj.original) return;
    setSavedWords(prev => {
      const isSaved = prev.some(w => w.original.toLowerCase() === wordObj.original.toLowerCase());
      if (isSaved) {
        setToastMessage(`"${wordObj.original}" defterden kaldırıldı.`);
        return prev.filter(w => w.original.toLowerCase() !== wordObj.original.toLowerCase());
      }
      setToastMessage(`"${wordObj.original}" Kutu 1'e eklendi! ⭐`);
      return [...prev, { 
        ...wordObj, 
        level: chosenLevel || selectedLevelTag || 'B1',
        box: 1,
        nextReview: Date.now(),
        lastReviewed: null,
        contextEng: contextData?.contextEng || wordObj.contextEng || null,
        contextTr: contextData?.contextTr || wordObj.contextTr || null,
        sourceTitle: contextData?.sourceTitle || wordObj.sourceTitle || activeText?.title || null
      }];
    });
  };

  const isWordSaved = (wordStr) => savedWords.some(w => w.original.toLowerCase() === (wordStr || '').toLowerCase());
  const getSavedWordInfo = (wordStr) => savedWords.find(w => w.original.toLowerCase() === (wordStr || '').toLowerCase());

  const handleSaveCustomText = () => {
    if (!newEngText.trim()) {
      setToastMessage("Lütfen İngilizce metin girin.");
      return;
    }

    const engSentences = newEngText.split(/(?<=[.?!])\s+|\n+/).map(s => s.trim()).filter(s => s.length > 0);
    const trSentences = newTrText.trim() ? newTrText.split(/(?<=[.?!])\s+|\n+/).map(s => s.trim()).filter(s => s.length > 0) : [];

    const sentences = engSentences.map((eng, idx) => ({
      id: idx + 1,
      eng: eng,
      tr: trSentences[idx] || "Bu cümle için çeviri girilmedi."
    }));

    const textItem = {
      id: 'custom_' + Date.now(),
      level: newLevel,
      title: newTitle.trim() || 'Özel Metin #' + (customTexts.length + 1),
      sentences: sentences,
      isCustom: true,
      questions: []
    };

    setCustomTexts(prev => [textItem, ...prev]);
    setNewTitle('');
    setNewEngText('');
    setNewTrText('');
    setToastMessage("Özel metin eklendi! 📖");
    startReading(textItem);
  };

  const deleteCustomText = (e, textId) => {
    e.stopPropagation();
    if (confirm("Bu metni silmek istediğinize emin misiniz?")) {
      setCustomTexts(prev => prev.filter(t => t.id !== textId));
      setCompletedTexts(prev => prev.filter(id => id !== textId));
      setToastMessage("Metin silindi.");
    }
  };

  const startVocabTest = (onlyDue = false) => {
    stopKaraoke();
    let listToUse = savedWords;

    if (onlyDue) {
      listToUse = savedWords.filter(isDue);
    } else {
      if (wordFilterLevel !== 'ALL') listToUse = listToUse.filter(w => w.level === wordFilterLevel);
      if (wordFilterBox !== 'ALL') listToUse = listToUse.filter(w => w.box === Number(wordFilterBox));
    }

    if (listToUse.length === 0) {
      setToastMessage(onlyDue ? "Harika! Tekrar edilecek kelime kalmadı 🎉" : "Bu filtrede kelime yok.");
      return;
    }

    const allTranslations = Array.from(new Set(Object.values(dictionary).filter(v => v)));
    const questions = listToUse.map(word => {
      const correct = word.translated || "belirtilmemiş";
      let wrongOptions = [];
      let tries = 0;
      while (wrongOptions.length < 2 && tries < 50) {
        tries++;
        const randomTr = allTranslations[Math.floor(Math.random() * allTranslations.length)];
        if (randomTr && randomTr !== correct && !wrongOptions.includes(randomTr)) {
          wrongOptions.push(randomTr);
        }
      }
      if (wrongOptions.length < 2) wrongOptions.push("farklı durum", "diğer seçenek");

      const options = [correct, ...wrongOptions].sort(() => Math.random() - 0.5);
      return { 
        word: word.original, 
        options, 
        correctIndex: options.indexOf(correct), 
        level: word.level,
        currentBox: word.box || 1,
        wordObj: word
      };
    });

    setVocabQuestions(questions.sort(() => Math.random() - 0.5).slice(0, 15));
    setCurrentVocabIdx(0);
    setVocabScore(0);
    setVocabTestFinished(false);
    setSelectedVocabOption(null);
    setVocabHistory([]);
    navigateTo('vocabTest');
  };

  const handleVocabAnswer = (selectedIndex) => {
    if (selectedVocabOption !== null) return;
    
    const currentQ = vocabQuestions[currentVocabIdx];
    const isCorrect = selectedIndex === currentQ.correctIndex;
    setSelectedVocabOption(selectedIndex);

    const oldBox = currentQ.currentBox || 1;
    const newBox = isCorrect ? Math.min(5, oldBox + 1) : 1;
    const now = Date.now();
    const nextReview = now + LEITNER_INTERVALS[newBox];

    setSavedWords(prev => prev.map(w => {
      if (w.original.toLowerCase() === currentQ.word.toLowerCase()) {
        return {
          ...w,
          box: newBox,
          lastReviewed: now,
          nextReview: nextReview
        };
      }
      return w;
    }));

    setVocabHistory(prev => [...prev, {
      word: currentQ.word,
      isCorrect,
      oldBox,
      newBox
    }]);

    if (isCorrect) setVocabScore(prev => prev + 1);

    setTimeout(() => {
      setSelectedVocabOption(null);
      if (currentVocabIdx + 1 < vocabQuestions.length) {
        setCurrentVocabIdx(prev => prev + 1);
      } else {
        setVocabTestFinished(true);
        logStudyActivity('vocab_review', { count: vocabQuestions.length });
      }
    }, 750);
  };

  // 3. AŞAMA: JSON & ANKI YEDEKLEME FONKSİYONLARI
  const handleExportJSON = () => {
    const backupData = {
      version: 1,
      exportDate: new Date().toISOString(),
      savedWords,
      customTexts,
      completedTexts
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ingilizce_ogren_yedek_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setToastMessage("Yedek dosyası indirildi! 💾");
  };

  const handleExportAnkiTSV = () => {
    if (savedWords.length === 0) {
      setToastMessage("Dışa aktarılacak kayıtlı kelime yok.");
      return;
    }
    // Anki format: Ön Yüz \t Arka Yüz \t Etiket
    let tsvContent = "Front\tBack\tTags\n";
    savedWords.forEach(w => {
      const front = w.original;
      let back = w.translated || '';
      if (w.contextEng) {
        back += ` <br><br><i>"${w.contextEng}"</i>`;
        if (w.contextTr) back += `<br><small>(${w.contextTr})</small>`;
      }
      tsvContent += `${front}\t${back}\tLevel_${w.level || 'B1'} Box_${w.box || 1}\n`;
    });
    const blob = new Blob([tsvContent], { type: 'text/tab-separated-values;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `anki_kelimeler_${new Date().toISOString().slice(0,10)}.tsv`;
    a.click();
    URL.revokeObjectURL(url);
    setToastMessage("Anki kart destesi indirildi! 📇");
  };

  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.savedWords && Array.isArray(data.savedWords)) {
          setSavedWords(data.savedWords);
          await idbSet('savedWords', data.savedWords);
        }
        if (data.customTexts && Array.isArray(data.customTexts)) {
          setCustomTexts(data.customTexts);
          await idbSet('customTexts', data.customTexts);
        }
        if (data.completedTexts && Array.isArray(data.completedTexts)) {
          setCompletedTexts(data.completedTexts);
          await idbSet('completedTexts', data.completedTexts);
        }
        setToastMessage("Yedek başarıyla yüklendi! 🎉");
        setShowBackupModal(false);
      } catch (err) {
        alert("Geçersiz yedek dosyası formatı!");
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const allAvailableTexts = [...defaultTexts, ...customTexts];
  const filteredTexts = allAvailableTexts.filter(t => t.level === selectedLevel);
  const dueCount = savedWords.filter(isDue).length;

  const filteredSavedWords = savedWords.filter(w => {
    const levelMatch = wordFilterLevel === 'ALL' || w.level === wordFilterLevel;
    const boxMatch = wordFilterBox === 'ALL' || w.box === Number(wordFilterBox);
    return levelMatch && boxMatch;
  });

  const getBadgeStyle = (lvl) => {
    switch(lvl) {
      case 'A1': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'A2': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'B1': return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'B2': return 'bg-purple-100 text-purple-800 border-purple-300';
      default: return 'bg-amber-100 text-amber-800 border-amber-300';
    }
  };

  const getBoxStyle = (boxNum) => {
    switch(boxNum) {
      case 1: return 'bg-rose-100 text-rose-800 border-rose-300';
      case 2: return 'bg-orange-100 text-orange-800 border-orange-300';
      case 3: return 'bg-amber-100 text-amber-800 border-amber-300';
      case 4: return 'bg-blue-100 text-blue-800 border-blue-300';
      case 5: return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      default: return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  const getThemeClasses = () => {
    switch(readerTheme) {
      case 'sepia':
        return {
          container: 'bg-[#f7f0e1] text-[#433422]',
          card: 'bg-[#ede2cb] border-[#dfd0b4] text-[#3d2e1e]',
          header: 'bg-[#433422] text-[#f7f0e1] border-[#342718]',
          footer: 'bg-[#ede2cb] border-[#dfd0b4]'
        };
      case 'oled':
        return {
          container: 'bg-[#000000] text-[#e2e8f0]',
          card: 'bg-[#121212] border-[#262626] text-[#e2e8f0]',
          header: 'bg-[#0a0a0a] text-white border-[#1f1f1f]',
          footer: 'bg-[#121212] border-[#262626]'
        };
      case 'forest':
        return {
          container: 'bg-[#07170e] text-[#d1fae5]',
          card: 'bg-[#0e2719] border-[#18422b] text-[#ecfdf5]',
          header: 'bg-[#05100a] text-white border-[#103420]',
          footer: 'bg-[#0e2719] border-[#18422b]'
        };
      case 'glass':
      default:
        return {
          container: 'bg-slate-100 text-slate-800',
          card: 'bg-white border-slate-200 text-slate-800 shadow-sm',
          header: 'bg-indigo-950 text-white border-indigo-800/50',
          footer: 'bg-white border-slate-200'
        };
    }
  };

  const themeStyle = getThemeClasses();

  const getFontSizeClass = () => {
    switch(fontSize) {
      case 'sm': return 'text-sm';
      case 'lg': return 'text-lg';
      case 'xl': return 'text-xl';
      case 'base':
      default: return 'text-base';
    }
  };

  const getFontFamilyStyle = () => {
    return fontFamily === 'serif' 
      ? { fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' } 
      : { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
  };

  return (
    <div className="min-h-screen flex justify-center w-full px-0 sm:px-4 py-0 sm:py-6">
      <div 
        style={getFontFamilyStyle()}
        className={`w-full max-w-md shadow-2xl min-h-screen sm:min-h-[92vh] sm:rounded-3xl relative flex flex-col overflow-hidden border border-white/40 transition-colors duration-300 ${themeStyle.container}`}
      >

        {/* Header */}
        <div className={`p-3.5 sm:p-4 flex items-center shadow-md shrink-0 sticky top-0 z-40 border-b transition-colors duration-300 ${themeStyle.header}`}>
          {currentView !== 'home' ? (
            <div className="flex items-center gap-1 mr-1">
              <button 
                onClick={handleHeaderBack} 
                className="p-1.5 sm:p-2 hover:opacity-80 rounded-xl transition text-base flex items-center justify-center active:scale-95" 
                title="Geri"
              >
                ⬅️
              </button>
              <button 
                onClick={() => navigateTo('home')} 
                className="p-1.5 sm:p-2 hover:bg-white/20 rounded-xl transition text-base flex items-center justify-center active:scale-95" 
                title="Ana Ekran"
              >
                🏠
              </button>
            </div>
          ) : (
            <button 
              onClick={openStatsModal} 
              className="p-2 mr-1 hover:bg-white/20 rounded-xl transition text-base flex items-center justify-center active:scale-95"
              title="Gelişim ve İstatistikler"
            >
              📊
            </button>
          )}

          <h1 
            onClick={() => currentView !== 'home' && navigateTo('home')}
            className={`text-base sm:text-lg font-bold flex-1 text-center truncate tracking-wide ${currentView !== 'home' ? 'cursor-pointer hover:opacity-90' : ''}`}
            title={currentView !== 'home' ? "Ana Ekrana Dönmek İçin Dokunun" : undefined}
          >
            {currentView === 'home' && "İngilizce Öğren"}
            {currentView === 'levels' && `${selectedLevel} Seviye Metinleri`}
            {currentView === 'reading' && (activeText ? activeText.title : 'Okuma')}
            {currentView === 'textQuiz' && "Okuma Sınavı"}
            {currentView === 'savedWords' && "Kelime Defterim & Leitner"}
            {currentView === 'vocabTest' && "Aralıklı Tekrar Testi"}
            {currentView === 'addText' && "Kendi Metnini Ekle"}
            {currentView === 'customList' && "Özel Metinlerim"}
            {currentView === 'aiGenerate' && "AI Metin Stüdyosu"}
          </h1>

          <div className="flex items-center gap-1.5 ml-1">
            {/* Ayarlar Butonu (Giriş ekranında ve okuma ekranında gözükür) */}
            {(currentView === 'home' || currentView === 'reading') && (
              <button 
                onClick={toggleTypeSettings} 
                className={`p-2 rounded-xl transition flex items-center justify-center shadow-xs active:scale-95 ${
                  showTypeSettings ? 'bg-indigo-600 text-white shadow-md ring-1 ring-white/50' : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                title="Okuma, Tema ve Ses Ayarları"
              >
                <Settings className="w-4 h-4" />
              </button>
            )}

            {currentView === 'home' && (
              <button 
                onClick={openBackupModal} 
                className="p-2 text-xs bg-white/20 hover:bg-white/30 rounded-xl transition flex items-center justify-center font-bold active:scale-95"
                title="Yedekleme & İçe Aktarma"
              >
                💾
              </button>
            )}
          </div>
        </div>

        {/* Tipografi, Tema & Ses Hızı Ayar Paneli */}
        {showTypeSettings && (
          <div ref={settingsPanelRef} className="p-4 bg-slate-900 text-white border-b border-slate-700 shadow-xl z-35 animate-fadeIn">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black uppercase text-slate-400">Okuma & Ses Ayarları</span>
              <button onClick={closeTypeSettings} className="text-slate-400 hover:text-white text-xs">✕ Kapat</button>
            </div>

            {/* Kalıp Avcısı Hızlı Ayarı */}
            <div className="mb-3 p-2.5 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">🎯</span>
                <div>
                  <span className="text-xs font-bold text-slate-200 block">Kalıp Avcısı</span>
                  <span className="text-[10px] text-slate-400">Deyim ve phrasal verb'leri sarı renkle vurgula</span>
                </div>
              </div>
              <button
                onClick={() => setPhraseHunterActive(!phraseHunterActive)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition ${
                  phraseHunterActive 
                    ? 'bg-amber-400 border-amber-300 text-amber-950 shadow-sm' 
                    : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {phraseHunterActive ? 'Açık ✓' : 'Kapalı'}
              </button>
            </div>

            {/* Doğal ve Gerçekçi Ses Seçimi */}
            <div className="mb-3 p-3 rounded-xl bg-slate-800 border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-200">Telaffuz Sesi</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    HD & Gerçekçi
                  </span>
                </div>
                <button 
                  onClick={() => testVoice()}
                  className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold flex items-center gap-1 shadow-xs transition active:scale-95"
                  title="Seçili Sesi Dinle"
                >
                  <span>🔊</span> Dinle
                </button>
              </div>

              {voices.length > 0 ? (
                <>
                  <select
                    value={selectedVoice}
                    onChange={(e) => {
                      const newV = e.target.value;
                      setSelectedVoice(newV);
                      testVoice(newV);
                    }}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-lg p-2 text-xs focus:ring-2 focus:ring-indigo-500 outline-none truncate font-medium"
                  >
                    {/* 1. En Doğal / Neural Sesler */}
                    {voices.some(v => getVoiceScore(v) >= 60) && (
                      <optgroup label="🌟 En Gerçekçi / Doğal İnsan Sesleri (Önerilen)">
                        {voices.filter(v => getVoiceScore(v) >= 60).map((v, i) => (
                          <option key={`nat-${i}`} value={v.name}>
                            {formatVoiceLabel(v)}
                          </option>
                        ))}
                      </optgroup>
                    )}

                    {/* 2. Amerikan Aksanı */}
                    {voices.some(v => (v.lang || '').toLowerCase().includes('us') && getVoiceScore(v) < 60) && (
                      <optgroup label="🇺🇸 Amerikan Aksanı (US)">
                        {voices.filter(v => (v.lang || '').toLowerCase().includes('us') && getVoiceScore(v) < 60).map((v, i) => (
                          <option key={`us-${i}`} value={v.name}>
                            {formatVoiceLabel(v)}
                          </option>
                        ))}
                      </optgroup>
                    )}

                    {/* 3. İngiliz Aksanı */}
                    {voices.some(v => ((v.lang || '').toLowerCase().includes('gb') || (v.lang || '').toLowerCase().includes('uk')) && getVoiceScore(v) < 60) && (
                      <optgroup label="🇬🇧 İngiliz Aksanı (UK)">
                        {voices.filter(v => ((v.lang || '').toLowerCase().includes('gb') || (v.lang || '').toLowerCase().includes('uk')) && getVoiceScore(v) < 60).map((v, i) => (
                          <option key={`uk-${i}`} value={v.name}>
                            {formatVoiceLabel(v)}
                          </option>
                        ))}
                      </optgroup>
                    )}

                    {/* 4. Diğer / Sistem */}
                    {voices.some(v => !(v.lang || '').toLowerCase().includes('us') && !(v.lang || '').toLowerCase().includes('gb') && !(v.lang || '').toLowerCase().includes('uk') && getVoiceScore(v) < 60) && (
                      <optgroup label="🎙️ Diğer Sistem Sesleri">
                        {voices.filter(v => !(v.lang || '').toLowerCase().includes('us') && !(v.lang || '').toLowerCase().includes('gb') && !(v.lang || '').toLowerCase().includes('uk') && getVoiceScore(v) < 60).map((v, i) => (
                          <option key={`other-${i}`} value={v.name}>
                            {formatVoiceLabel(v)}
                          </option>
                        ))}
                      </optgroup>
                    )}
                  </select>

                  {/* Hızlı En İyi Ses Butonu & Bilgilendirme */}
                  <div className="mt-1.5 flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">
                      💡 <b>🌟 [Doğal/HD]</b> etiketliler en akıcı insan sesleridir.
                    </span>
                    {voices.length > 1 && (
                      <button
                        onClick={() => {
                          const best = voices[0];
                          if (best) {
                            setSelectedVoice(best.name);
                            testVoice(best.name);
                          }
                        }}
                        className="text-indigo-400 hover:text-indigo-300 font-bold whitespace-nowrap ml-2"
                      >
                        🌟 En İyiyi Seç
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-xs text-slate-400 p-2 bg-slate-900 rounded-lg">
                  Cihazınızın konuşma sesleri yükleniyor...
                </div>
              )}

              {/* Ses Tonu & İntonasyon (Pitch) */}
              <div className="mt-2.5 pt-2.5 border-t border-slate-700/60">
                <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Ses Tonu & İntonasyon</span>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: '🌿 Doğal', pitch: 1.0 },
                    { label: '💫 Canlı', pitch: 1.05 },
                    { label: '🎙️ Tok', pitch: 0.94 }
                  ].map(p => (
                    <button
                      key={p.label}
                      onClick={() => {
                        setSpeechPitch(p.pitch);
                        testVoice(selectedVoice);
                      }}
                      className={`py-1 text-[11px] font-bold rounded-lg border transition ${
                        Math.abs(speechPitch - p.pitch) < 0.02 
                          ? 'bg-indigo-600 border-indigo-400 text-white shadow-xs' 
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Telaffuz Hızı</span>
              <div className="grid grid-cols-4 gap-1.5">
                {[0.75, 0.9, 1.0, 1.25].map(rate => (
                  <button
                    key={rate}
                    onClick={() => setSpeechRate(rate)}
                    className={`py-1.5 text-xs font-bold rounded-lg border transition ${speechRate === rate ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Okuma Teması</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setReaderTheme('glass')}
                  className={`py-1.5 text-xs font-bold rounded-lg border flex items-center justify-center gap-1 ${readerTheme === 'glass' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
                >
                  🌿 Doğa
                </button>
                <button
                  onClick={() => setReaderTheme('sepia')}
                  className={`py-1.5 text-xs font-bold rounded-lg border flex items-center justify-center gap-1 ${readerTheme === 'sepia' ? 'bg-[#ede2cb] border-amber-600 text-[#433422]' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
                >
                  📜 Kitap
                </button>
                <button
                  onClick={() => setReaderTheme('oled')}
                  className={`py-1.5 text-xs font-bold rounded-lg border flex items-center justify-center gap-1 ${readerTheme === 'oled' ? 'bg-black border-slate-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
                >
                  🌙 OLED
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Yazı Boyutu</span>
                <div className="flex gap-1">
                  {['sm', 'base', 'lg', 'xl'].map(sz => (
                    <button
                      key={sz}
                      onClick={() => setFontSize(sz)}
                      className={`flex-1 py-1 text-xs font-bold rounded border uppercase ${fontSize === sz ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                    >
                      {sz === 'base' ? 'MD' : sz}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Yazı Tipi</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setFontFamily('sans')}
                    className={`flex-1 py-1 text-xs font-bold rounded border ${fontFamily === 'sans' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    Sans
                  </button>
                  <button
                    onClick={() => setFontFamily('serif')}
                    className={`flex-1 py-1 text-xs font-bold rounded border font-serif ${fontFamily === 'serif' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    Serif
                  </button>
                </div>
              </div>

              {/* Güncelleme & Önbellek Yenileme */}
              <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                <span className="text-[10px] text-slate-400 font-medium">Sözlük: <b className="text-emerald-400">Genişletilmiş (v2.6)</b></span>
                <button
                  onClick={async () => {
                    try {
                      if ('caches' in window) {
                        const keys = await caches.keys();
                        await Promise.all(keys.map(k => caches.delete(k)));
                      }
                      if ('serviceWorker' in navigator) {
                        const regs = await navigator.serviceWorker.getRegistrations();
                        await Promise.all(regs.map(r => r.unregister()));
                      }
                      window.location.reload();
                    } catch {
                      window.location.reload();
                    }
                  }}
                  className="px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-[10px] font-bold transition flex items-center gap-1"
                  title="Yeni kelimeleri ve en son güncellemeleri yüklemek için önbelleği sıfırla"
                >
                  🔄 Önbelleği Yenile
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast */}
        {toastMessage && (
          <div className="fixed top-16 left-4 right-4 max-w-md mx-auto bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl z-50 flex items-center gap-2 border border-slate-700 animate-bounce">
            <span className="text-lg">🌿</span>
            <p className="text-sm font-medium">{toastMessage}</p>
          </div>
        )}

        {/* HOME VIEW */}
        {currentView === 'home' && (
          <div ref={homeScrollRef} className="flex-1 p-5 flex flex-col space-y-4 overflow-y-auto">
            {/* PWA Kurulum Butonu */}
            <InstallPromptBanner />

            <div className="text-center my-2">
              <div className="bg-indigo-600/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 border border-indigo-500/20 shadow-inner">
                <span className="text-4xl">🌲</span>
              </div>
              <h2 className="text-2xl font-black">Seviyeni Seç</h2>
              <p className="text-xs opacity-70 mt-1 font-medium">Huzurlu ve kalıcı dil öğrenme alanı</p>
            </div>

            <div className="space-y-2.5">
              {levels.map(level => {
                const count = allAvailableTexts.filter(t => t.level === level).length;
                return (
                  <button key={level} onClick={() => { setSelectedLevel(level); navigateTo('levels', { level }); }}
                    className={`w-full ${themeStyle.card} border p-4 rounded-2xl flex items-center justify-between hover:shadow-md transition active:scale-[0.99] group`}>
                    <div className="flex items-center gap-3">
                      <span className={`w-9 h-9 rounded-xl font-bold flex items-center justify-center text-sm border shadow-sm ${getBadgeStyle(level)}`}>
                        {level}
                      </span>
                      <div className="text-left">
                        <span className="font-bold text-base block">{level} Seviyesi</span>
                        <span className="text-xs opacity-60 font-medium">{count} Metin Mevcut</span>
                      </div>
                    </div>
                    <span className="text-lg opacity-40 group-hover:translate-x-1 transition">➔</span>
                  </button>
                );
              })}
            </div>

            {/* AI Metin Stüdyosu */}
            <div className="pt-2">
              <button onClick={() => navigateTo('aiGenerate')}
                className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-700 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg hover:from-purple-800 hover:to-sky-800 transition active:scale-[0.98]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-white/20 p-2 rounded-xl">✨</span>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-base block">AI Metin Stüdyosu</span>
                      <span className="bg-amber-300 text-amber-950 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">Yeni</span>
                    </div>
                    <span className="text-xs text-indigo-100">İlgi alanına & seviyene özel metin üret</span>
                  </div>
                </div>
                <span className="text-xl">🚀</span>
              </button>
            </div>

            <div>
              <button onClick={() => navigateTo('addText')}
                className="w-full bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg hover:from-indigo-800 hover:to-purple-900 transition active:scale-[0.98]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-white/20 p-2 rounded-xl">✏️</span>
                  <div className="text-left">
                    <span className="font-bold text-base block">Kendi Metnini Ekle</span>
                    <span className="text-xs text-indigo-100">İnternetten metin veya haber yapıştır</span>
                  </div>
                </div>
                <span className="text-xl">➕</span>
              </button>
            </div>

            {customTexts.length > 0 && (
              <button onClick={() => navigateTo('customList')}
                className={`w-full ${themeStyle.card} border border-purple-300 p-4 rounded-2xl flex items-center justify-between hover:border-purple-400 text-purple-900 shadow-sm transition`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📑</span>
                  <div className="text-left">
                    <span className="font-bold text-base block">Eklediğim Metinler</span>
                    <span className="text-xs text-purple-600 font-medium">{customTexts.length} özel metin</span>
                  </div>
                </div>
                <span className="bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">{customTexts.length}</span>
              </button>
            )}

            <button onClick={() => navigateTo('savedWords')}
              className={`w-full ${themeStyle.card} border-2 border-orange-300 p-4 rounded-2xl flex items-center justify-between hover:border-orange-500 shadow-md text-orange-950 transition`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-base block">Kelime Defterim</span>
                    {dueCount > 0 && (
                      <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse">
                        {dueCount} TEKRAR!
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-orange-800 font-medium">5 Aşamalı Leitner Aralıklı Tekrar</span>
                </div>
              </div>
              <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow">{savedWords.length}</div>
            </button>

            {/* Gelişim ve İstatistikler */}
            <button onClick={openStatsModal}
              className={`w-full ${themeStyle.card} border-2 border-emerald-400 p-4 rounded-2xl flex items-center justify-between hover:border-emerald-600 shadow-md text-emerald-950 transition active:scale-[0.98]`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div className="text-left">
                  <span className="font-bold text-base block">Gelişim & İstatistiklerim</span>
                  <span className="text-xs text-emerald-800 font-medium">Günlük Seri, Okuma Hacmi ve Leitner Dağılımı</span>
                </div>
              </div>
              <span className="text-lg opacity-60">➔</span>
            </button>

            {/* Uygulama & Okuma Ayarları Hızlı Kartı */}
            <button onClick={handleOpenSettingsFromBottom}
              className={`w-full ${themeStyle.card} border p-4 rounded-2xl flex items-center justify-between hover:shadow-md transition active:scale-[0.98] ${
                showTypeSettings ? 'ring-2 ring-indigo-500 border-indigo-400' : ''
              }`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl p-1 bg-black/5 rounded-xl">⚙️</span>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base block">Okuma & Uygulama Ayarları</span>
                    {showTypeSettings && (
                      <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full animate-pulse">
                        YUKARIDA AÇIK ↑
                      </span>
                    )}
                  </div>
                  <span className="text-xs opacity-60 font-medium">Tema ({readerTheme === 'sepia' ? 'Kitap' : readerTheme === 'oled' ? 'OLED' : 'Doğa'}), Hız ({speechRate}x), Yazı ({fontSize.toUpperCase()} / {fontFamily})</span>
                </div>
              </div>
              <span className="text-lg opacity-60 font-bold">{showTypeSettings ? '▲' : '➔'}</span>
            </button>
          </div>
        )}

        {/* LEVELS VIEW */}
        {currentView === 'levels' && (
          <div className="flex-1 p-4 space-y-3 overflow-y-auto pb-6">
            {filteredTexts.length === 0 ? (
              <div className="text-center opacity-50 mt-12 font-medium">Bu seviyede henüz metin yok.</div>
            ) : (
              filteredTexts.map(text => {
                const isCompleted = completedTexts.includes(text.id);
                return (
                  <button key={text.id} onClick={() => startReading(text)}
                    className={`w-full text-left ${themeStyle.card} p-4 rounded-2xl shadow-sm border flex gap-3.5 items-center hover:shadow-md active:scale-[0.98] transition ${isCompleted ? 'border-green-300 bg-green-50/70' : ''}`}>
                    <div className={`${isCompleted ? 'bg-green-100 text-green-700' : 'bg-indigo-100 text-indigo-700'} p-3 rounded-xl shrink-0 flex items-center justify-center w-11 h-11 shadow-sm`}>
                      <span className="text-xl">{isCompleted ? '✅' : '📄'}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-bold text-base leading-tight ${isCompleted ? 'text-green-950' : ''}`}>{text.title}</h3>
                        {text.isCustom && <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-1.5 py-0.5 rounded">ÖZEL</span>}
                      </div>
                      <span className="text-xs opacity-60 font-semibold">{text.sentences.length} Cümle</span>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        )}

        {/* CUSTOM LIST VIEW */}
        {currentView === 'customList' && (
          <div className="flex-1 p-4 space-y-3 overflow-y-auto pb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold opacity-70">Kendi Eklediğin Metinler</span>
              <button onClick={() => navigateTo('addText')} className="text-xs bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-3 py-1.5 rounded-lg shadow">➕ Yeni Ekle</button>
            </div>
            {customTexts.map(text => {
              const isCompleted = completedTexts.includes(text.id);
              return (
                <div key={text.id} onClick={() => startReading(text)}
                  className={`w-full text-left ${themeStyle.card} p-4 rounded-2xl shadow-sm border flex justify-between items-center hover:border-indigo-400 cursor-pointer transition`}>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getBadgeStyle(text.level)}`}>{text.level}</span>
                      <h4 className="font-bold">{text.title}</h4>
                      {isCompleted && <span className="text-green-600 text-xs">✓</span>}
                    </div>
                    <p className="text-xs opacity-60 font-medium">{text.sentences.length} Cümle</p>
                  </div>
                  <button onClick={(e) => deleteCustomText(e, text.id)} className="p-2 opacity-40 hover:text-red-500 text-base">🗑️</button>
                </div>
              );
            })}
          </div>
        )}

        {/* ADD CUSTOM TEXT VIEW */}
        {currentView === 'addText' && (
          <div className="flex-1 p-5 space-y-4 overflow-y-auto pb-10">
            <div className={`${themeStyle.card} p-4 rounded-2xl border shadow-sm space-y-3`}>
              <div>
                <label className="block text-xs font-bold opacity-70 uppercase mb-1">Metin Başlığı</label>
                <input
                  type="text"
                  placeholder="Örn: A Calm Journey"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold opacity-70 uppercase mb-1">Hedef Seviye</label>
                <div className="grid grid-cols-4 gap-2">
                  {['A1', 'A2', 'B1', 'B2'].map(lvl => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setNewLevel(lvl)}
                      className={`py-2 text-xs font-bold rounded-lg border transition ${newLevel === lvl ? 'bg-indigo-700 text-white border-indigo-700 shadow' : 'bg-white text-slate-700 border-slate-200'}`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold opacity-70 uppercase mb-1">İngilizce Metin (Zorunlu)</label>
                <textarea
                  rows="6"
                  placeholder="İngilizce metninizi buraya yapıştırın..."
                  value={newEngText}
                  onChange={(e) => setNewEngText(e.target.value)}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-indigo-500 leading-relaxed"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold opacity-70 uppercase mb-1">Türkçe Çevirisi (İsteğe Bağlı)</label>
                <textarea
                  rows="3"
                  placeholder="Varsa Türkçe çeviriyi yapıştırın..."
                  value={newTrText}
                  onChange={(e) => setNewTrText(e.target.value)}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-indigo-500 leading-relaxed"
                ></textarea>
              </div>

              <button
                onClick={handleSaveCustomText}
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3.5 rounded-xl shadow-lg transition active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>📖</span> Metni Kaydet ve Oku
              </button>
            </div>
          </div>
        )}

        {/* READING VIEW (KARAOKE KESİNTİSİZ VE YÜKSEK PERFORMANSLI) */}
        {currentView === 'reading' && activeText && (
          <div className="flex-1 flex flex-col relative overflow-hidden">
            <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3.5 pb-36">
              {/* Metin Üst Görseli & Başlık Banner'ı */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-black/10 bg-slate-900 mb-2">
                <div className="h-44 sm:h-52 w-full relative">
                  <img 
                    src={getTextBgImage(activeText)} 
                    alt={activeText.title} 
                    referrerPolicy="no-referrer" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';
                    }}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs ${
                        activeText.level === 'A1' ? 'bg-emerald-500 text-white' :
                        activeText.level === 'A2' ? 'bg-blue-500 text-white' :
                        activeText.level === 'B1' ? 'bg-indigo-500 text-white' : 'bg-purple-500 text-white'
                      }`}>
                        {activeText.level} Seviye
                      </span>
                      {activeText.isCustom && (
                        <span className="bg-amber-400 text-amber-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                          ÖZEL METİN
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black leading-tight drop-shadow-md text-white">
                      {activeText.title}
                    </h2>
                  </div>
                </div>
              </div>

              {activeText.sentences.map((sentence) => {
                const sentenceWords = sentence.eng.split(' ');
                const cleanWords = sentenceWords.map(w => cleanWord(w));
                const isHighlighted = activeHighlight && activeHighlight.sentenceId === sentence.id;
                const isSpeakingThisSentence = karaokeState.sentenceId === sentence.id;

                const phrasalsInSentence = phraseHunterActive ? findPhrasalVerbsInText(sentence.eng) : [];

                // Performans Optimizasyonu: Kalıp indekslerini her kelime için tekrar hesaplamak yerine cümle bazında bir defa hesapla
                let phraseIndicesSet: Set<number> | null = null;
                if (phraseHunterActive) {
                  phraseIndicesSet = new Set<number>();
                  for (let start = 0; start < cleanWords.length; start++) {
                    for (let len = 4; len >= 2; len--) {
                      if (start + len <= cleanWords.length) {
                        const candidate = cleanWords.slice(start, start + len).join(' ');
                        if (phrasalVerbs[candidate] || dictionary[candidate]) {
                          for (let k = 0; k < len; k++) {
                            phraseIndicesSet.add(start + k);
                          }
                          break;
                        }
                      }
                    }
                  }
                }

                return (
                  <div key={sentence.id} className={`relative ${themeStyle.card} border p-4 rounded-2xl shadow-xs hover:shadow-sm transition`}>
                    <div className={`${getFontSizeClass()} leading-relaxed flex flex-wrap items-center gap-y-2`}>
                      <div className="flex-1">
                        {sentenceWords.map((word, idx) => {
                          const isWordHighlighted = isHighlighted && activeHighlight.indices.includes(idx);
                          const isKaraokeWord = isSpeakingThisSentence && karaokeState.wordIdx === idx;
                          const inPhrase = phraseIndicesSet ? phraseIndicesSet.has(idx) : false;

                          return (
                            <span key={idx}>
                              <button
                                onClick={() => handleWordClick(word, idx, sentenceWords, sentence)}
                                className={`rounded px-1 py-0.5 hover:opacity-75 transition font-medium ${isKaraokeWord ? 'karaoke-highlight' : ''} ${isWordHighlighted && !isKaraokeWord ? 'word-highlight font-bold' : ''} ${inPhrase && !isKaraokeWord && !isWordHighlighted ? 'phrase-hunter-highlight font-semibold' : ''}`}
                              >
                                {word}
                              </button>{' '}
                            </span>
                          );
                        })}
                      </div>
                      <div className="flex items-center gap-1.5 ml-2">
                        <button
                          onClick={() => speakSentenceWithKaraoke(sentence)}
                          title="Cümleyi Karaoke ile Dinle"
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-sm transition ${isSpeakingThisSentence ? 'bg-amber-400 text-amber-950 animate-pulse' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                        >🔊</button>
                        <button
                          onClick={() => setRevealedSentences(prev => ({ ...prev, [sentence.id]: !prev[sentence.id] }))}
                          title="Çeviriyi Gör"
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-sm transition ${
                            readerTheme === 'oled' || readerTheme === 'forest' 
                              ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' 
                              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                          }`}
                        >🌐</button>
                      </div>
                    </div>

                    {/* Kalıp Avcısı: Cümledeki Phrasal Verb & Deyim Rozetleri */}
                    {phraseHunterActive && phrasalsInSentence.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-dashed border-amber-300/70 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[10px] font-extrabold text-amber-800">⚡ Kalıplar:</span>
                        {phrasalsInSentence.map((pm, pIdx) => (
                          <button
                            key={pIdx}
                            onClick={() => handlePhrasalBadgeClick(pm, sentence)}
                            className="text-[11px] font-bold bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 px-2.5 py-0.5 rounded-full transition flex items-center gap-1 shadow-2xs"
                          >
                            <span>{pm.phrase}</span>
                            <span className="opacity-70 font-normal">({pm.info.tr})</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {(revealedSentences[sentence.id] || showFullTranslation) && (
                      <div className={`mt-2.5 p-2.5 rounded-r-lg text-xs leading-relaxed font-semibold shadow-inner border-l-4 ${
                        readerTheme === 'oled' || readerTheme === 'forest' 
                          ? 'bg-indigo-950/80 border-indigo-400 text-indigo-100' 
                          : readerTheme === 'sepia'
                            ? 'bg-[#e5d9bd] border-amber-700 text-[#3d2e1e]'
                            : 'bg-indigo-50 border-indigo-600 text-slate-700'
                      }`}>
                        {sentence.tr}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className={`absolute bottom-0 left-0 right-0 p-3.5 ${themeStyle.footer} border-t shadow-2xl flex gap-2.5 z-30 transition-colors duration-300`}>
              <button
                onClick={() => setShowFullTranslation(!showFullTranslation)}
                className={`flex-1 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                  showFullTranslation 
                    ? 'bg-slate-300 text-slate-800 font-extrabold' 
                    : readerTheme === 'oled' || readerTheme === 'forest' ? 'bg-slate-800 text-white' : 'bg-indigo-100 text-indigo-900 font-bold'
                }`}
              >
                <span>🌐</span> {showFullTranslation ? "Gizle" : "Tam Çeviri"}
              </button>
              <button 
                onClick={handleFinishReading} 
                className="flex-[1.4] py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition active:scale-95"
              >
                <span>✅</span> {activeText.questions?.length > 0 ? "Sınava Geç" : "Metni Bitir"}
              </button>
            </div>
          </div>
        )}

        {/* READING QUIZ VIEW */}
        {currentView === 'textQuiz' && activeText && activeText.questions && (
          <div className="flex-1 p-5 overflow-y-auto pb-10">
            <div className="text-center mb-5">
              <h2 className="text-lg font-bold">Okuduğunu Anlama Sınavı</h2>
              <p className="text-xs opacity-60 font-medium">Metne göre soruları cevaplayın</p>
            </div>
            <div className="space-y-4">
              {activeText.questions.map((q, qIdx) => (
                <div key={qIdx} className={`${themeStyle.card} p-4 rounded-2xl shadow-sm border`}>
                  <p className="font-bold text-sm mb-3">{qIdx + 1}. {q.q}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = quizAnswers[qIdx] === oIdx;
                      const showResult = quizScore !== null;
                      const isCorrect = q.answer === oIdx;
                      let btnClass = "w-full text-left p-3 rounded-xl border text-sm font-medium transition ";
                      if (!showResult) {
                        btnClass += isSelected ? "border-indigo-600 bg-indigo-50 text-indigo-900 font-bold" : "border-slate-200 bg-white text-slate-700";
                      } else {
                        if (isCorrect) btnClass += "border-green-500 bg-green-50 text-green-900 font-bold";
                        else if (isSelected && !isCorrect) btnClass += "border-red-500 bg-red-50 text-red-900";
                        else btnClass += "border-slate-200 opacity-40";
                      }
                      return (
                        <button key={oIdx} disabled={showResult}
                          onClick={() => setQuizAnswers(prev => ({...prev, [qIdx]: oIdx}))}
                          className={btnClass}>{opt}</button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            {quizScore === null ? (
              <button onClick={checkTextQuiz}
                disabled={Object.keys(quizAnswers).length < activeText.questions.length}
                className={`w-full mt-6 py-3.5 rounded-xl font-bold text-sm text-white transition shadow-md ${Object.keys(quizAnswers).length < activeText.questions.length ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-700 hover:bg-indigo-800'}`}>
                Cevapları Kontrol Et
              </button>
            ) : (
              <div className={`mt-6 ${themeStyle.card} p-5 rounded-2xl shadow border-t-4 border-indigo-600 text-center`}>
                <h3 className="text-xl font-black mb-1">Skorun: {quizScore} / {activeText.questions.length}</h3>
                <p className="text-xs opacity-60 mb-4">{quizScore === activeText.questions.length ? "Mükemmel! Hepsini doğru cevapladın." : "Biraz daha tekrar yapabilirsin."}</p>
                <button onClick={returnToLevelList} className="w-full py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl font-bold text-sm shadow">
                  Menüye Dön
                </button>
              </div>
            )}
          </div>
        )}

        {/* SAVED WORDS VIEW (YEDEKLLEME BUTONLU) */}
        {currentView === 'savedWords' && (
          <div className="flex-1 flex flex-col">
            <div className={`p-4 ${themeStyle.card} border-b shrink-0 space-y-3`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold flex items-center gap-1.5">
                    <span>Leitner Kelime Sistemi</span>
                    <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-md">SRS</span>
                  </h3>
                  <p className="text-xs opacity-60 font-medium">{filteredSavedWords.length} kelime listeleniyor</p>
                </div>
                <div className="flex gap-1.5">
                  <button onClick={openBackupModal}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl font-bold text-xs bg-slate-800 text-white shadow"
                    title="Veri Yedekleme & Geri Yükleme"
                  >
                    💾 Yedek
                  </button>
                  <button onClick={() => startVocabTest(false)} disabled={savedWords.length === 0}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs ${savedWords.length === 0 ? 'bg-slate-200 text-slate-400' : 'bg-indigo-700 text-white shadow'}`}>
                    <span>🎲</span> Test
                  </button>
                </div>
              </div>

              <button
                onClick={() => startVocabTest(true)}
                disabled={dueCount === 0}
                className={`w-full py-3 rounded-2xl font-black text-xs flex items-center justify-between px-4 transition shadow-md active:scale-[0.98] ${dueCount > 0 ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white ring-2 ring-emerald-400 ring-offset-1' : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{dueCount > 0 ? '⚡' : '☕'}</span>
                  <span>{dueCount > 0 ? "Vakti Gelenleri Tekrar Et" : "Bugün İçin Tüm Tekrarlar Tamam"}</span>
                </div>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${dueCount > 0 ? 'bg-white text-emerald-800' : 'bg-slate-200 text-slate-500'}`}>
                  {dueCount} Kelime
                </span>
              </button>

              <div>
                <span className="text-[10px] font-bold opacity-60 uppercase tracking-wider block mb-1">Aşama Filtresi (Kutu)</span>
                <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
                  <button
                    onClick={() => setWordFilterBox('ALL')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 transition ${wordFilterBox === 'ALL' ? 'bg-indigo-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                  >
                    Tümü ({savedWords.length})
                  </button>
                  {[1, 2, 3, 4, 5].map(b => {
                    const count = savedWords.filter(w => w.box === b).length;
                    return (
                      <button
                        key={b}
                        onClick={() => setWordFilterBox(String(b))}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 border transition flex items-center gap-1 ${wordFilterBox === String(b) ? 'border-slate-800 ring-1 ring-slate-800 ' + getBoxStyle(b) : 'bg-white text-slate-600 border-slate-200'}`}
                      >
                        <span>Kutu {b}</span>
                        <span className="text-[10px] opacity-75 font-normal">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pt-1">
                {['ALL', 'A1', 'A2', 'B1', 'B2'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setWordFilterLevel(lvl)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 transition ${wordFilterLevel === lvl ? 'bg-indigo-700 text-white shadow-sm' : 'bg-white text-slate-500 border border-slate-200'}`}
                  >
                    {lvl === 'ALL' ? 'Tüm Seviyeler' : lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 p-4 space-y-2.5 overflow-y-auto">
              {filteredSavedWords.length === 0 ? (
                <div className="text-center opacity-50 mt-12">
                  <p className="text-4xl mb-2">🏷️</p>
                  <p className="text-sm font-medium">Bu filtreye uygun kayıtlı kelime bulunamadı.</p>
                  <p className="text-xs opacity-75 mt-1">Metin okurken kelimelerin üzerine tıklayarak deftere ekleyebilirsin.</p>
                </div>
              ) : (
                filteredSavedWords.map((wordObj, idx) => {
                  const due = isDue(wordObj);
                  return (
                    <div key={idx} className={`${themeStyle.card} p-3.5 rounded-2xl shadow-sm border transition flex justify-between items-center ${due ? 'border-rose-300 bg-rose-50/40' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center gap-0.5">
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border shadow-2xs ${getBoxStyle(wordObj.box || 1)}`}>
                            Kutu {wordObj.box || 1}
                          </span>
                          <span className={`text-[9px] font-bold px-1.5 rounded ${due ? 'text-rose-700 bg-rose-100 animate-pulse' : 'opacity-50'}`}>
                            {formatReviewTime(wordObj.nextReview)}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border ${getBadgeStyle(wordObj.level)}`}>
                              {wordObj.level || 'B1'}
                            </span>
                            <h4 className="font-bold text-base">{wordObj.original}</h4>
                            <button onClick={() => speak(wordObj.original)} className="text-xs text-indigo-600">🔊</button>
                          </div>
                          <p className="text-xs opacity-70 font-medium">{wordObj.translated || "(Çeviri yok)"}</p>
                          {wordObj.contextEng && (
                            <div className="mt-1 text-[11px] text-indigo-800 bg-indigo-50/70 rounded px-2 py-0.5 border border-indigo-100 font-serif italic">
                              "{wordObj.contextEng}"
                            </div>
                          )}
                        </div>
                      </div>
                      <button onClick={() => toggleSaveWord(wordObj, wordObj.level)} className="p-2 opacity-40 hover:text-red-500 text-sm">✕</button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* VOCAB TEST VIEW */}
        {currentView === 'vocabTest' && vocabQuestions.length > 0 && (
          <div className="flex-1 flex flex-col p-6">
            {!vocabTestFinished ? (
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold opacity-60">Soru {currentVocabIdx + 1} / {vocabQuestions.length}</span>
                  
                  <button
                    onClick={() => {
                      const next = !isListeningMode;
                      setIsListeningMode(next);
                      if (next && vocabQuestions[currentVocabIdx]) {
                        speak(vocabQuestions[currentVocabIdx].word);
                      }
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition flex items-center gap-1.5 shadow-sm ${isListeningMode ? 'bg-indigo-600 text-white ring-2 ring-indigo-400' : 'bg-black/15 text-slate-300 hover:bg-black/25'}`}
                  >
                    <span>🎧</span> Dinleme Modu: {isListeningMode ? 'Açık' : 'Kapalı'}
                  </button>
                </div>

                <div className="flex justify-end gap-1.5 mb-2">
                  <span className={`px-2 py-0.5 rounded border text-[10px] ${getBoxStyle(vocabQuestions[currentVocabIdx]?.currentBox)}`}>
                    Mevcut: Kutu {vocabQuestions[currentVocabIdx]?.currentBox}
                  </span>
                  <span className={`px-1.5 py-0.5 rounded border text-[10px] ${getBadgeStyle(vocabQuestions[currentVocabIdx]?.level)}`}>
                    {vocabQuestions[currentVocabIdx]?.level || 'B1'}
                  </span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center mb-6">
                  <span className="text-xs text-indigo-700 font-bold uppercase tracking-wider mb-2">
                    {isListeningMode ? "Duyduğunuz kelimenin anlamı nedir?" : "Bu kelimenin anlamı nedir?"}
                  </span>

                  {isListeningMode ? (
                    <div className="text-center my-2">
                      <button 
                        onClick={() => speak(vocabQuestions[currentVocabIdx]?.word)} 
                        className="w-20 h-20 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-full flex items-center justify-center text-3xl shadow-xl mx-auto mb-2.5 transition animate-pulse"
                        title="Tekrar Dinle"
                      >
                        🔊
                      </button>
                      <span className="text-xs opacity-70 font-bold block">Dinlemek için dokunun</span>
                      {selectedVocabOption !== null && (
                        <span className="text-2xl font-black mt-2 block text-indigo-400 tracking-wide">
                          {vocabQuestions[currentVocabIdx]?.word}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-3xl font-black text-center flex items-center justify-center gap-2">
                        {vocabQuestions[currentVocabIdx]?.word || ''}
                        <button onClick={() => speak(vocabQuestions[currentVocabIdx]?.word)} className="text-lg text-indigo-600">🔊</button>
                      </h2>
                      {vocabQuestions[currentVocabIdx]?.wordObj?.contextEng && (
                        <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-indigo-50/90 border border-indigo-200/70 text-xs text-center max-w-xs mx-auto shadow-2xs">
                          <span className="text-[10px] font-bold text-indigo-700 block uppercase tracking-wider mb-0.5">
                            💡 Cümle İçi Bağlamı:
                          </span>
                          <p className="italic text-slate-700 font-serif leading-relaxed">
                            "{vocabQuestions[currentVocabIdx].wordObj.contextEng}"
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-2.5 mb-8">
                  {(vocabQuestions[currentVocabIdx]?.options || []).map((opt, idx) => {
                    const isSelected = selectedVocabOption === idx;
                    const isCorrect = idx === vocabQuestions[currentVocabIdx].correctIndex;
                    let btnClass = `w-full ${themeStyle.card} p-3.5 rounded-2xl border-2 text-base font-semibold text-center transition shadow-sm flex items-center justify-between px-4 `;

                    if (selectedVocabOption === null) {
                      btnClass += "border-indigo-100 hover:border-indigo-400 active:scale-[0.98]";
                    } else {
                      if (isCorrect) {
                        btnClass += "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                      } else if (isSelected && !isCorrect) {
                        btnClass += "border-rose-500 bg-rose-50 text-rose-950 font-bold";
                      } else {
                        btnClass += "border-slate-100 opacity-40";
                      }
                    }

                    return (
                      <button key={idx} disabled={selectedVocabOption !== null} onClick={() => handleVocabAnswer(idx)} className={btnClass}>
                        <span className="flex-1 text-center">{opt}</span>
                        {selectedVocabOption !== null && isCorrect && (
                          <span className="text-xs text-emerald-700 font-black shrink-0 ml-2">
                            {vocabQuestions[currentVocabIdx].currentBox < 5 ? `+1 Kutu 🚀` : `Usta ⭐`}
                          </span>
                        )}
                        {selectedVocabOption !== null && isSelected && !isCorrect && (
                          <span className="text-xs text-rose-700 font-black shrink-0 ml-2">1. Kutu ⚠️</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col p-2 space-y-4 overflow-y-auto">
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center shadow-inner mx-auto mb-2">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h2 className="text-xl font-black">Aralıklı Tekrar Tamamlandı!</h2>
                  <p className="text-xs opacity-70 mt-0.5">
                    Başarı: <strong className="text-indigo-700 font-bold text-sm">{vocabScore} / {vocabQuestions.length}</strong>
                  </p>
                </div>

                <div className={`${themeStyle.card} p-3 rounded-2xl border space-y-2 max-h-64 overflow-y-auto`}>
                  <span className="text-[10px] font-bold opacity-60 uppercase tracking-wider block border-b pb-1">
                    Kelime Aşamaları Güncellendi:
                  </span>
                  {vocabHistory.map((item, hIdx) => (
                    <div key={hIdx} className="flex justify-between items-center text-xs py-1 border-b border-black/5 last:border-0">
                      <span className="font-bold">{item.word}</span>
                      <div className="flex items-center gap-1.5 font-semibold">
                        <span className="text-[10px] opacity-60">Kutu {item.oldBox}</span>
                        <span>➔</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${getBoxStyle(item.newBox)}`}>
                          Kutu {item.newBox}
                        </span>
                        <span>{item.isCorrect ? '✅' : '❌'}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={handleHeaderBack} className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3.5 rounded-xl font-bold text-sm shadow-md">
                  Kelime Defterine Dön
                </button>
              </div>
            )}
          </div>
        )}

        {/* AI METİN STÜDYOSU VIEW */}
        {currentView === 'aiGenerate' && (
          <AITextGenerator
            savedWords={savedWords}
            onGenerated={(newText) => {
              setCustomTexts(prev => [newText, ...prev]);
              setToastMessage("✨ Yapay zekâ metniniz hazır! Keyifli okumalar.");
              startReading(newText);
            }}
            onBack={handleHeaderBack}
          />
        )}

      </div>

      {/* 3. AŞAMA: VERİ & YEDEKLEME MODALI */}
      {showBackupModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-55 flex items-center justify-center p-4"
          onClick={closeBackupModal}
        >
          <div 
            className="w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-slate-700 text-white relative"
            style={{ backgroundColor: '#0f172a' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-base flex items-center gap-2">
                <span>💾</span> Veri Yönetimi & Yedek
              </h3>
              <button onClick={closeBackupModal} className="text-slate-400 hover:text-white text-sm font-bold">✕</button>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Verileriniz cihazınızda <strong>IndexedDB</strong> ile güvenle saklanır. Telefon değiştirirken veya verilerinizi kaybetmemek için düzenli yedek alabilirsiniz.
            </p>

            <div className="space-y-2.5">
              <button 
                onClick={handleExportJSON}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
              >
                <span>📥</span> JSON Yedeği İndir (Tüm Veriler)
              </button>

              <button 
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
              >
                <span>📤</span> JSON Yedeği Geri Yükle
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImportJSON} 
                accept=".json" 
                className="hidden" 
              />

              <button 
                onClick={handleExportAnkiTSV}
                className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
              >
                <span>📇</span> Anki Kart Destesi İndir (.tsv)
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between">
              <span>Depolanan Kelime: {savedWords.length}</span>
              <span>Özel Metin: {customTexts.length}</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEWPORT-FIXED ÇEVİRİ MODALI */}
      {selectedTranslation && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={closeTranslationModal}
        >
          <div 
            className="w-full max-w-md rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-slate-700 text-white relative"
            style={{ backgroundColor: '#0f172a' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeTranslationModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition"
            >✕</button>

            <div className="mb-4 flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase text-slate-400">Seviye Etiketi:</span>
              <div className="flex gap-1.5">
                {['A1', 'A2', 'B1', 'B2'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevelTag(lvl)}
                    className={`text-xs font-black px-2.5 py-1 rounded-lg border transition ${selectedLevelTag === lvl ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {selectedTranslation.phrase && (
              <div className="mb-3.5 pb-3.5 border-b border-slate-800 pr-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] text-indigo-400 font-extrabold uppercase tracking-wider">Kelime Grubu</span>
                  <button onClick={() => speak(selectedTranslation.phrase.original)} className="text-xs text-indigo-300">🔊</button>
                </div>
                <div className="text-lg font-bold text-white leading-snug">{selectedTranslation.phrase.original}</div>
                <div className="text-sm text-indigo-200 mt-0.5 mb-2.5 font-medium">{selectedTranslation.phrase.translated}</div>
                <button
                  onClick={() => toggleSaveWord(selectedTranslation.phrase, selectedLevelTag, selectedTranslation.context)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition ${isWordSaved(selectedTranslation.phrase.original) ? 'bg-emerald-600 text-white shadow' : 'bg-indigo-700 hover:bg-indigo-600 text-white'}`}
                >
                  {isWordSaved(selectedTranslation.phrase.original) 
                    ? `⭐ [Kutu ${getSavedWordInfo(selectedTranslation.phrase.original)?.box || 1}] Defterde Kayıtlı` 
                    : `🔖 ${selectedLevelTag} Olarak Deftere Ekle`}
                </button>
              </div>
            )}

            <div className="pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                  {selectedTranslation.phrase ? "Tıkladığınız Kelime" : "Kelime Çevirisi"}
                </span>
                <button onClick={() => speak(selectedTranslation.word.original)} className="text-xs text-slate-300">🔊</button>
              </div>
              <div className="text-base font-bold text-slate-100">{selectedTranslation.word.original}</div>
              
              {selectedTranslation.word.translated ? (
                <>
                  <div className="text-sm text-slate-300 mt-0.5 mb-2.5 font-medium">
                    {selectedTranslation.word.translated}
                  </div>
                  <button
                    onClick={() => toggleSaveWord(selectedTranslation.word, selectedLevelTag, selectedTranslation.context)}
                    className={`text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition ${isWordSaved(selectedTranslation.word.original) ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200'}`}
                  >
                    {isWordSaved(selectedTranslation.word.original) 
                      ? `⭐ [Kutu ${getSavedWordInfo(selectedTranslation.word.original)?.box || 1}] Defterde Kayıtlı` 
                      : `🔖 ${selectedLevelTag} Olarak Deftere Ekle`}
                  </button>
                </>
              ) : isSearchingOnline ? (
                <div className="mt-3 flex items-center gap-2.5 py-2 px-3 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                  <span className="inline-block w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></span>
                  <span>Çevrimiçi sözlük taranıyor...</span>
                </div>
              ) : (
                <div className="mt-2.5 space-y-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                  <p className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
                    <span>💡</span> Yerel sözlükte bulunamadı. Anlamını girip deftere ekleyebilirsiniz:
                  </p>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      placeholder="Kelimenin Türkçe karşılığı..."
                      value={customWordInput}
                      onChange={(e) => setCustomWordInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && customWordInput.trim()) {
                          const cleanTr = customWordInput.trim().toLowerCase();
                          const newWordData = { original: selectedTranslation.word.original, translated: cleanTr };
                          dictionary[selectedTranslation.word.original] = cleanTr;
                          toggleSaveWord(newWordData, selectedLevelTag, selectedTranslation.context);
                          setSelectedTranslation(prev => prev ? { ...prev, word: newWordData } : null);
                          setCustomWordInput('');
                        }
                      }}
                      className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
                    />
                    <button
                      onClick={() => {
                        if (!customWordInput.trim()) return;
                        const cleanTr = customWordInput.trim().toLowerCase();
                        const newWordData = { original: selectedTranslation.word.original, translated: cleanTr };
                        dictionary[selectedTranslation.word.original] = cleanTr;
                        toggleSaveWord(newWordData, selectedLevelTag, selectedTranslation.context);
                        setSelectedTranslation(prev => prev ? { ...prev, word: newWordData } : null);
                        setCustomWordInput('');
                      }}
                      disabled={!customWordInput.trim()}
                      className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-xl text-xs font-bold shrink-0 shadow transition"
                    >
                      💾 Kaydet
                    </button>
                  </div>
                  <div className="flex gap-2 pt-1 border-t border-slate-700/60">
                    <a
                      href={`https://translate.google.com/?sl=en&tl=tr&text=${encodeURIComponent(selectedTranslation.word.original)}&op=translate`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-slate-900 hover:bg-slate-700 border border-slate-700 text-indigo-300 px-3 py-1.5 rounded-lg flex items-center gap-1 font-bold transition"
                    >
                      🌐 Google Çeviri
                    </a>
                    <a
                      href={`https://tureng.com/tr/turkce-ingilizce/${encodeURIComponent(selectedTranslation.word.original)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-slate-900 hover:bg-slate-700 border border-slate-700 text-amber-300 px-3 py-1.5 rounded-lg flex items-center gap-1 font-bold transition"
                    >
                      📖 Tureng
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* İSTATİSTİKLER & GELİŞİM MODALI */}
      <StatsModal
        isOpen={showStatsModal}
        onClose={closeStatsModal}
        savedWords={savedWords}
        completedTextsCount={completedTexts.length}
      />

    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}
