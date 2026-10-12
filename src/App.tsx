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
import { PhraseCardsModal } from "./components/PhraseCardsModal";
import { SettingsDrawer } from "./components/SettingsDrawer";
import { HomeView } from "./components/HomeView";
import { LevelsView } from "./components/LevelsView";
import { CustomListView } from "./components/CustomListView";
import { AddTextView } from "./components/AddTextView";
import { ReaderView } from "./components/ReaderView";
import { TextQuizView } from "./components/TextQuizView";
import { SavedWordsView } from "./components/SavedWordsView";
import { VocabTestView } from "./components/VocabTestView";
import { PuzzleView } from "./components/PuzzleView";
import { BackupModal } from "./components/BackupModal";
import { WordTranslationModal } from "./components/WordTranslationModal";
import { 
  isMaleVoice, 
  isFemaleVoice, 
  getVoiceDisplayInfo, 
  VOICE_PRESETS, 
  getHdAudioUrl 
} from "./utils/voiceUtils";
import { 
  getBadgeStyle, 
  getBoxStyle, 
  getThemeClasses, 
  getFontSizeClass, 
  getFontFamilyStyle 
} from "./utils/themeUtils";
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

  // Keep dark class synced with readerTheme for full-app dark mode support
  useEffect(() => {
    if (readerTheme === 'oled' || readerTheme === 'forest') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [readerTheme]);

  const [phraseHunterActive, setPhraseHunterActive] = useState(() => {
    return localStorage.getItem('app_phrase_hunter') === 'true';
  });
  const [showPhraseCardsModal, setShowPhraseCardsModal] = useState(false);
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

  // Aktif Ses Oynatıcı Ref (HTML5 Audio veya SpeechSynthesis)
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  // Doğal ve Gerçekçi Sesler Motoru
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState(() => {
    const saved = localStorage.getItem('app_selected_voice');
    return saved || 'device_us_male';
  });

  const stopCurrentSpeech = () => {
    if (activeAudioRef.current) {
      try {
        activeAudioRef.current.pause();
        activeAudioRef.current.currentTime = 0;
      } catch (_) {}
      activeAudioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (_) {}
    }
  };

  const speakWithDeviceTTS = (text: string, voiceKey?: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
    } catch (_) {}

    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      const key = voiceKey || selectedVoice || 'device_us_male';

      const allVoices = window.speechSynthesis.getVoices() || [];
      const enVoices = allVoices.filter(v => (v.lang || '').toLowerCase().startsWith('en'));
      const voicePool = enVoices.length > 0 ? enVoices : allVoices;

      const malePool = voicePool.filter(isMaleVoice);
      const femalePool = voicePool.filter(isFemaleVoice);

      const isRequestedMale = key.includes('male') || 
                              allVoices.some(v => (v.name === key || v.voiceURI === key) && isMaleVoice(v));

      let matchedVoice: SpeechSynthesisVoice | null = null;
      let targetLang = 'en-US';
      let targetPitch = speechPitch;

      // 1. Doğrudan sistem ses adı veya URI eşleşmesi
      matchedVoice = allVoices.find(v => v.name === key || v.voiceURI === key) || null;

      // 2. Akıllı Ön Tanımlı Eşleşme (Erkek sesi istendiğinde kesinlikle gerçek bir erkek sesi bul)
      if (!matchedVoice) {
        if (key === 'device_us_male' || key === 'male_us') {
          targetLang = 'en-US';
          // Amerikan erkek sesi ara, yoksa ilk erkek sesini al
          matchedVoice = malePool.find(v => (v.lang || '').toLowerCase().includes('us')) || malePool[0] || null;
        } else if (key === 'device_uk_male' || key === 'male_uk') {
          targetLang = 'en-GB';
          // İngiliz erkek sesi ara, yoksa ilk erkek sesini al
          matchedVoice = malePool.find(v => (v.lang || '').toLowerCase().includes('gb') || (v.lang || '').toLowerCase().includes('uk')) || malePool[0] || null;
        } else if (key === 'device_us_female' || key === 'female_us') {
          targetLang = 'en-US';
          matchedVoice = femalePool.find(v => (v.lang || '').toLowerCase().includes('us')) || femalePool[0] || null;
        } else if (key === 'device_uk_female' || key === 'female_uk') {
          targetLang = 'en-GB';
          matchedVoice = femalePool.find(v => (v.lang || '').toLowerCase().includes('gb') || (v.lang || '').toLowerCase().includes('uk')) || femalePool[0] || null;
        } else if (isRequestedMale) {
          matchedVoice = malePool[0] || null;
        } else {
          matchedVoice = voicePool[0] || null;
        }
      }

      if (matchedVoice) {
        utterance.voice = matchedVoice;
        utterance.lang = matchedVoice.lang || targetLang;
        // Gerçek bir erkek sesi bulunduysa doğal perdesini koru!
        if (isMaleVoice(matchedVoice)) {
          utterance.pitch = speechPitch;
        } else if (isRequestedMale) {
          // Cihazda hiç erkek ses dosyası yüklü değilse yapay olarak pesleştir
          utterance.pitch = Math.min(speechPitch, 0.62);
        } else {
          utterance.pitch = speechPitch;
        }
      } else {
        utterance.lang = targetLang;
        if (isRequestedMale) {
          utterance.pitch = Math.min(speechPitch, 0.62);
        } else {
          utterance.pitch = speechPitch;
        }
      }

      utterance.rate = speechRate;
      window._activeSpeechUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    }, 50);
  };

  const testVoice = (targetVoiceId?: string) => {
    const voiceKey = targetVoiceId || selectedVoice || 'device_us_male';
    stopCurrentSpeech();

    const isMale = voiceKey.includes('male') || 
                   voices.some(v => (v.name === voiceKey || v.voiceURI === voiceKey) && isMaleVoice(v));

    let sampleText = "Hello! Keep up the great work practicing English.";
    if (isMale) {
      if (voiceKey.includes('uk') || voiceKey.includes('gb')) {
        sampleText = "Good day! I am your British male English assistant.";
      } else {
        sampleText = "Hello! I am your American male reading assistant.";
      }
    } else if (voiceKey.includes('uk')) {
      sampleText = "Good day! Welcome to your British English practice.";
    } else if (voiceKey.includes('au')) {
      sampleText = "G'day mate! Practicing English with an Australian accent.";
    }

    if (voiceKey.startsWith('hd_') && !isMale) {
      const url = getHdAudioUrl(sampleText, voiceKey);
      const audio = new Audio(url);
      audio.playbackRate = speechRate;
      activeAudioRef.current = audio;
      audio.play().catch(() => {
        speakWithDeviceTTS(sampleText, voiceKey);
      });
      return;
    }

    speakWithDeviceTTS(sampleText, voiceKey);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const loadVoices = () => {
      const all = window.speechSynthesis.getVoices() || [];
      if (!all || all.length === 0) return;
      const enVoices = all.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
      setVoices(enVoices.length > 0 ? enVoices : all);
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
  const showToast = (msg) => setToastMessage(msg);
  
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
    if (!text) return;
    stopCurrentSpeech();

    const isMaleRequested = selectedVoice.includes('male') || 
      voices.some(v => (v.name === selectedVoice || v.voiceURI === selectedVoice) && isMaleVoice(v));

    if (!isMaleRequested && selectedVoice.startsWith('hd_')) {
      const url = getHdAudioUrl(text, selectedVoice);
      const audio = new Audio(url);
      audio.playbackRate = speechRate;
      activeAudioRef.current = audio;
      audio.play().catch(() => {
        speakWithDeviceTTS(text, selectedVoice);
      });
      return;
    }

    speakWithDeviceTTS(text, selectedVoice);
  };

  // KARAOKE SENKRONİZASYON MOTORU (HİBRİT + KESİNTİSİZ ZAMANLAYICI)
  const stopKaraoke = () => {
    if (karaokeTimerRef.current) {
      clearTimeout(karaokeTimerRef.current);
      karaokeTimerRef.current = null;
    }
    stopCurrentSpeech();
    setKaraokeState({ sentenceId: null, wordIdx: null });
  };

  const speakSentenceWithKaraoke = (sentence) => {
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

    const isMaleRequested = selectedVoice.includes('male') || 
      voices.some(v => (v.name === selectedVoice || v.voiceURI === selectedVoice) && isMaleVoice(v));

    // 1. HD Doğal Stüdyo Sesi (Yalnızca Kadın / Stüdyo seçiliyse)
    if (!isMaleRequested && selectedVoice.startsWith('hd_')) {
      const url = getHdAudioUrl(text, selectedVoice);
      const audio = new Audio(url);
      audio.playbackRate = speechRate;
      activeAudioRef.current = audio;

      audio.onloadedmetadata = () => {
        if (audio.duration && audio.duration > 0) {
          const totalMs = (audio.duration * 1000) / speechRate;
          const avgPerWord = totalMs / words.length;
          for (let i = 0; i < wordDurations.length; i++) {
            wordDurations[i] = avgPerWord;
          }
        }
      };

      audio.onended = () => {
        if (karaokeTimerRef.current) clearTimeout(karaokeTimerRef.current);
        setKaraokeState({ sentenceId: null, wordIdx: null });
        activeAudioRef.current = null;
      };

      audio.onerror = () => {
        speakWithDeviceTTS(text, selectedVoice);
      };

      audio.play().catch(() => {
        speakWithDeviceTTS(text, selectedVoice);
      });
      return;
    }

    // 2. Cihaz Sentezleyici (Erkek sesi dahil tüm cihaz sesleri)
    speakWithDeviceTTS(text, selectedVoice);
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

  const themeStyle = getThemeClasses(readerTheme);

  return (
    <div className="min-h-screen flex justify-center w-full px-0 sm:px-4 py-0 sm:py-6">
      <div 
        style={getFontFamilyStyle(fontFamily)}
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
            {currentView === 'puzzle' && "İngilizce Bulmaca"}
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
        <SettingsDrawer
          isOpen={showTypeSettings}
          onClose={closeTypeSettings}
          panelRef={settingsPanelRef}
          phraseHunterActive={phraseHunterActive}
          setPhraseHunterActive={setPhraseHunterActive}
          voices={voices}
          selectedVoice={selectedVoice}
          setSelectedVoice={setSelectedVoice}
          testVoice={testVoice}
          speechRate={speechRate}
          setSpeechRate={setSpeechRate}
          readerTheme={readerTheme}
          setReaderTheme={setReaderTheme}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
        />

        {/* Toast */}
        {toastMessage && (
          <div className="fixed top-16 left-4 right-4 max-w-md mx-auto bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl z-50 flex items-center gap-2 border border-slate-700 animate-bounce">
            <span className="text-lg">🌿</span>
            <p className="text-sm font-medium">{toastMessage}</p>
          </div>
        )}

        {/* HOME VIEW */}
        {currentView === "home" && (
          <HomeView
            homeScrollRef={homeScrollRef}
            themeStyle={themeStyle}
            levels={levels}
            allAvailableTexts={allAvailableTexts}
            onSelectLevel={(level) => {
              setSelectedLevel(level);
              navigateTo("levels", { level });
            }}
            navigateTo={navigateTo}
            customTextsCount={customTexts.length}
            savedWordsCount={savedWords.length}
            dueCount={dueCount}
            openStatsModal={openStatsModal}
            setShowPhraseCardsModal={setShowPhraseCardsModal}
            handleOpenSettingsFromBottom={handleOpenSettingsFromBottom}
            showTypeSettings={showTypeSettings}
            readerTheme={readerTheme}
            speechRate={speechRate}
            fontSize={fontSize}
            fontFamily={fontFamily}
            getBadgeStyle={getBadgeStyle}
          />
        )}

        {/* LEVEL TEXTS LIST VIEW */}
        {currentView === "levels" && (
          <LevelsView
            themeStyle={themeStyle}
            selectedLevel={selectedLevel}
            filteredTexts={filteredTexts}
            completedTexts={completedTexts}
            startReading={startReading}
          />
        )}

        {/* CUSTOM TEXTS LIST VIEW */}
        {currentView === "customList" && (
          <CustomListView
            themeStyle={themeStyle}
            customTexts={customTexts}
            startReading={startReading}
            deleteCustomText={deleteCustomText}
          />
        )}

        {/* ADD CUSTOM TEXT VIEW */}
        {currentView === "addText" && (
          <AddTextView
            themeStyle={themeStyle}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            newLevel={newLevel}
            setNewLevel={setNewLevel}
            newEngText={newEngText}
            setNewEngText={setNewEngText}
            newTrText={newTrText}
            setNewTrText={setNewTrText}
            handleSaveCustomText={handleSaveCustomText}
          />
        )}

        {/* READER VIEW */}
        {currentView === "reading" && activeText && (
          <ReaderView
            activeText={activeText}
            themeStyle={themeStyle}
            getTextBgImage={getTextBgImage}
            setShowPhraseCardsModal={setShowPhraseCardsModal}
            findPhrasalVerbsInText={findPhrasalVerbsInText}
            phraseHunterActive={phraseHunterActive}
            cleanWord={cleanWord}
            phrasalVerbs={phrasalVerbs}
            dictionary={dictionary}
            activeHighlight={activeHighlight}
            karaokeState={karaokeState}
            fontSizeClass={getFontSizeClass(fontSize)}
            handleWordClick={handleWordClick}
            speakSentenceWithKaraoke={speakSentenceWithKaraoke}
            revealedSentences={revealedSentences}
            setRevealedSentences={setRevealedSentences}
            readerTheme={readerTheme}
            handlePhrasalBadgeClick={handlePhrasalBadgeClick}
            showFullTranslation={showFullTranslation}
            setShowFullTranslation={setShowFullTranslation}
            handleFinishReading={handleFinishReading}
          />
        )}

        {/* READING QUIZ VIEW */}
        {currentView === "textQuiz" && activeText && activeText.questions && (
          <TextQuizView
            activeText={activeText}
            themeStyle={themeStyle}
            quizAnswers={quizAnswers}
            setQuizAnswers={setQuizAnswers}
            quizScore={quizScore}
            checkTextQuiz={checkTextQuiz}
            returnToLevelList={returnToLevelList}
          />
        )}

        {/* SAVED WORDS VIEW */}
        {currentView === "savedWords" && (
          <SavedWordsView
            themeStyle={themeStyle}
            filteredSavedWords={filteredSavedWords}
            savedWords={savedWords}
            dueCount={dueCount}
            openBackupModal={openBackupModal}
            startVocabTest={startVocabTest}
            wordFilterBox={wordFilterBox}
            setWordFilterBox={setWordFilterBox}
            wordFilterLevel={wordFilterLevel}
            setWordFilterLevel={setWordFilterLevel}
            getBoxStyle={getBoxStyle}
            getBadgeStyle={getBadgeStyle}
            isDue={isDue}
            formatReviewTime={formatReviewTime}
            speak={speak}
            toggleSaveWord={toggleSaveWord}
          />
        )}

        {/* VOCAB TEST VIEW */}
        {currentView === "vocabTest" && vocabQuestions.length > 0 && (
          <VocabTestView
            vocabQuestions={vocabQuestions}
            vocabTestFinished={vocabTestFinished}
            currentVocabIdx={currentVocabIdx}
            isListeningMode={isListeningMode}
            setIsListeningMode={setIsListeningMode}
            speak={speak}
            selectedVocabOption={selectedVocabOption}
            handleVocabAnswer={handleVocabAnswer}
            vocabScore={vocabScore}
            vocabHistory={vocabHistory}
            handleHeaderBack={handleHeaderBack}
            getBoxStyle={getBoxStyle}
            getBadgeStyle={getBadgeStyle}
            themeStyle={themeStyle}
          />
        )}

        {/* AI METİN STÜDYOSU VIEW */}
        {currentView === "aiGenerate" && (
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

        {/* PUZZLE VIEW */}
        {currentView === "puzzle" && (
          <PuzzleView
            themeStyle={themeStyle}
            onBackToHome={() => navigateTo('home')}
            onSaveWord={(word, translation, level) => {
              const cleanWord = (word || '').toLowerCase().trim();
              const exists = savedWords.some(w => (w.word || '').toLowerCase() === cleanWord);
              if (exists) {
                showToast(`"${word}" zaten kelime defterinizde kayıtlı.`);
                return;
              }
              const newWord = {
                id: Date.now().toString(),
                word: cleanWord,
                translation: translation,
                level: level || 'A1',
                box: 1,
                nextReview: Date.now() + LEITNER_INTERVALS[1],
                lastReviewed: null,
                contextEng: `Kare Bulmaca kelimesi: ${word}`,
                contextTr: translation,
                sourceTitle: 'Kare Bulmaca'
              };
              const updated = [...savedWords, newWord];
              setSavedWords(updated);
              localStorage.setItem('savedWords', JSON.stringify(updated));
              idbSet('savedWords', updated);
              showToast(`✨ "${word}" Leitner Defterinize 1. Kutuya eklendi!`);
            }}
            speak={speak}
            isWordSaved={(word) => savedWords.some(w => (w.word || '').toLowerCase() === (word || '').toLowerCase().trim())}
          />
        )}

      </div>

      {/* 3. AŞAMA: VERİ & YEDEKLEME MODALI */}
      <BackupModal
        isOpen={showBackupModal}
        onClose={closeBackupModal}
        handleExportJSON={handleExportJSON}
        handleExportAnkiTSV={handleExportAnkiTSV}
        handleImportJSON={handleImportJSON}
        fileInputRef={fileInputRef}
        savedWordsCount={savedWords.length}
        customTextsCount={customTexts.length}
      />

      {/* VIEWPORT-FIXED ÇEVİRİ MODALI */}
      <WordTranslationModal
        selectedTranslation={selectedTranslation}
        onClose={closeTranslationModal}
        selectedLevelTag={selectedLevelTag}
        setSelectedLevelTag={setSelectedLevelTag}
        speak={speak}
        toggleSaveWord={toggleSaveWord}
        isWordSaved={isWordSaved}
        getSavedWordInfo={getSavedWordInfo}
        isSearchingOnline={isSearchingOnline}
        customWordInput={customWordInput}
        setCustomWordInput={setCustomWordInput}
        onSaveCustomWord={(cleanTr) => {
          if (!selectedTranslation) return;
          const newWordData = { original: selectedTranslation.word.original, translated: cleanTr };
          dictionary[selectedTranslation.word.original] = cleanTr;
          toggleSaveWord(newWordData, selectedLevelTag, selectedTranslation.context);
          setSelectedTranslation(prev => prev ? { ...prev, word: newWordData } : null);
          setCustomWordInput("");
        }}
      />

      {/* İSTATİSTİKLER & GELİŞİM MODALI */}
      <StatsModal
        isOpen={showStatsModal}
        onClose={closeStatsModal}
        savedWords={savedWords}
        completedTextsCount={completedTexts.length}
      />

      {/* KALIP & DEYİM KARTLARI MODALI */}
      <PhraseCardsModal
        isOpen={showPhraseCardsModal}
        onClose={() => setShowPhraseCardsModal(false)}
        savedPhrasesSet={new Set(savedWords.map(w => (w.word || '').toLowerCase()))}
        onSavePhrase={(phrase, info) => {
          const exists = savedWords.some(w => w.word.toLowerCase() === phrase.toLowerCase());
          if (exists) {
            showToast(`"${phrase}" zaten kelime defterinizde kayıtlı.`);
            return;
          }
          const newWord = {
            id: Date.now().toString(),
            word: phrase,
            translation: info.tr,
            level: info.level || 'B1',
            box: 1,
            nextReview: Date.now() + LEITNER_INTERVALS[1],
            lastReviewed: null,
            contextEng: info.ex || null,
            contextTr: null,
            sourceTitle: 'Kalıp & Deyim Kartları'
          };
          const updated = [...savedWords, newWord];
          setSavedWords(updated);
          localStorage.setItem('savedWords', JSON.stringify(updated));
          idbSet('savedWords', updated);
          showToast(`🎯 "${phrase}" Leitner Defterinize 1. Kutuya eklendi!`);
        }}
        onSpeak={(text) => {
          if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utt = new SpeechSynthesisUtterance(text);
            utt.lang = 'en-US';
            utt.rate = speechRate;
            window.speechSynthesis.speak(utt);
          }
        }}
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
