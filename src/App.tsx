// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { 
  dictionary, 
  levels, 
  defaultTexts, 
  phrasalVerbs, 
  findPhrasalVerbsInText, 
  logStudyActivity,
  getTextBgImage,
  LEITNER_INTERVALS,
  idbSet
} from "./data";
import { StatsModal } from "./components/StatsModal";
import { AITextGenerator } from "./components/AITextGenerator";
import { PhraseCardsModal } from "./components/PhraseCardsModal";
import { WordRelationsModal } from "./components/WordRelationsModal";
import { VocabMemoryHubView } from "./components/VocabMemoryHubView";
import { SettingsDrawer } from "./components/SettingsDrawer";
import { HomeView } from "./components/HomeView";
import { SentenceTranslateHubView } from "./components/SentenceTranslateHubView";
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

import { useStorageData } from "./hooks/useStorageData";
import { useAppSettings } from "./hooks/useAppSettings";
import { useSpeechAudio } from "./hooks/useSpeechAudio";
import { useAppNavigation } from "./hooks/useAppNavigation";

import { cleanWord, lookupWordTranslation, getWordLevel } from "./utils/wordUtils";
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
  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // 1. VERİ & DEPOLAMA HOOK'U (IndexedDB + LocalStorage)
  const {
    completedTexts,
    setCompletedTexts,
    savedWords,
    setSavedWords,
    customTexts,
    setCustomTexts,
    isDue,
    formatReviewTime,
    isWordSaved,
    getSavedWordInfo,
    toggleSaveWord,
    markTextCompleted,
    deleteCustomText,
    handleExportJSON,
    handleExportAnkiTSV,
    handleImportJSON
  } = useStorageData(setToastMessage);

  // 2. AYARLAR HOOK'U (Tema, Yazı Tipi, Doğal Ses Motoru)
  const {
    readerTheme,
    setReaderTheme,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    speechRate,
    setSpeechRate,
    speechPitch,
    setSpeechPitch,
    phraseHunterActive,
    setPhraseHunterActive,
    selectedVoice,
    setSelectedVoice
  } = useAppSettings();

  // 3. DOĞAL SES & KARAOKE HOOK'U (Anti-Robotic Engine)
  const {
    voices,
    karaokeState,
    activeHighlight,
    setActiveHighlight,
    stopKaraoke,
    speak,
    testVoice,
    speakSentenceWithKaraoke
  } = useSpeechAudio(selectedVoice, speechRate, speechPitch);

  // 4. SAYFA GEZİNTİSİ & POPSTATE GERİ TUŞU HOOK'U
  const {
    currentView,
    setCurrentView,
    selectedLevel,
    setSelectedLevel,
    activeText,
    setActiveText,
    revealedSentences,
    setRevealedSentences,
    showFullTranslation,
    setShowFullTranslation,
    quizAnswers,
    setQuizAnswers,
    quizScore,
    setQuizScore,
    selectedTranslation,
    setSelectedTranslation,
    showTypeSettings,
    setShowTypeSettings,
    showBackupModal,
    setShowBackupModal,
    showStatsModal,
    setShowStatsModal,
    showPhraseCardsModal,
    setShowPhraseCardsModal,
    showWordRelationsModal,
    setShowWordRelationsModal,
    homeScrollRef,
    settingsPanelRef,
    navigateTo,
    openTranslationModal,
    closeTranslationModal,
    openBackupModal,
    closeBackupModal,
    openStatsModal,
    closeStatsModal,
    toggleTypeSettings,
    closeTypeSettings,
    handleHeaderBack,
    startReading
  } = useAppNavigation(customTexts, stopKaraoke, setActiveHighlight);

  // Çeviri Modalı Özel Durumları
  const [selectedLevelTag, setSelectedLevelTag] = useState('B1');
  const [customWordInput, setCustomWordInput] = useState('');
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);

  // Özel Metin Ekleme Durumları
  const [newTitle, setNewTitle] = useState('');
  const [newLevel, setNewLevel] = useState('B1');
  const [newEngText, setNewEngText] = useState('');
  const [newTrText, setNewTrText] = useState('');

  // Kelime Testi & Sınav Durumları
  const [vocabQuestions, setVocabQuestions] = useState([]);
  const [currentVocabIdx, setCurrentVocabIdx] = useState(0);
  const [vocabScore, setVocabScore] = useState(0);
  const [vocabTestFinished, setVocabTestFinished] = useState(false);
  const [selectedVocabOption, setSelectedVocabOption] = useState(null);
  const [vocabHistory, setVocabHistory] = useState([]);
  const [isListeningMode, setIsListeningMode] = useState(false);
  const [wordFilterLevel, setWordFilterLevel] = useState('ALL');
  const [wordFilterBox, setWordFilterBox] = useState('ALL');

  const fileInputRef = useRef(null);

  // Kelime Dinleme Sınavı Otomatik Telaffuz
  useEffect(() => {
    if (currentView === 'vocabTest' && isListeningMode && !vocabTestFinished && vocabQuestions[currentVocabIdx]) {
      const timer = setTimeout(() => {
        speak(vocabQuestions[currentVocabIdx].word);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentVocabIdx, isListeningMode, currentView, vocabTestFinished, vocabQuestions, speak]);

  // Metin İçi Kelimeye Tıklama Mantığı
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

  // Okuma Bitişi ve Quiz Yönlendirmesi
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
      markTextCompleted(activeText.id);
    }
    showToast("Tebrikler! Metin tamamlandı. 🎉");
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

  const returnToLevelList = () => {
    stopKaraoke();
    if (activeText && !completedTexts.includes(activeText.id)) {
      markTextCompleted(activeText.id);
    }
    if (activeText?.isCustom) {
      navigateTo('customList');
    } else if (selectedLevel || activeText?.level) {
      navigateTo('levels', { level: selectedLevel || activeText?.level });
    } else {
      navigateTo('home');
    }
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
      markTextCompleted(activeText.id);
    }
  };

  // Özel Metin Kaydetme
  const handleSaveCustomText = () => {
    if (!newEngText.trim()) {
      showToast("Lütfen İngilizce metin girin.");
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
    showToast("Özel metin eklendi! 📖");
    startReading(textItem);
  };

  // Kelime Sınavı Başlatma & Cevaplama
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
      showToast(onlyDue ? "Harika! Tekrar edilecek kelime kalmadı 🎉" : "Bu filtrede kelime yok.");
      return;
    }

    const allTranslations = Array.from(new Set(Object.values(dictionary).filter(v => v)));
    const questions = listToUse.map(word => {
      const correct = word.translated || word.translation || "belirtilmemiş";
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
        word: word.original || word.word, 
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
      const match = (w.original || w.word || '').toLowerCase() === currentQ.word.toLowerCase();
      if (match) {
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

  // Filtrelenmiş Liste Hesaplamaları
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
          {currentView !== 'home' && (
            <div className="flex items-center gap-1 mr-1">
              <button 
                onClick={handleHeaderBack} 
                className="p-1.5 sm:p-2 hover:opacity-80 rounded-xl transition text-base flex items-center justify-center active:scale-95 cursor-pointer" 
                title="Geri"
              >
                ⬅️
              </button>
              <button 
                onClick={() => navigateTo('home')} 
                className="p-1.5 sm:p-2 hover:bg-white/20 rounded-xl transition text-base flex items-center justify-center active:scale-95 cursor-pointer" 
                title="Ana Ekran"
              >
                🏠
              </button>
            </div>
          )}

          <h1 
            onClick={() => currentView !== 'home' && navigateTo('home')}
            className={`text-base sm:text-lg font-bold flex-1 text-center truncate tracking-wide ${currentView !== 'home' ? 'cursor-pointer hover:opacity-90' : ''}`}
            title={currentView !== 'home' ? "Ana Ekrana Dönmek İçin Dokunun" : undefined}
          >
            {currentView === 'home' && "İngilizce Öğren"}
            {currentView === 'sentenceTranslate' && "Cümle Çeviri"}
            {currentView === 'vocabHub' && "Kelime & Hafıza Merkezi"}
            {currentView === 'levels' && `${selectedLevel} Seviye Metinleri`}
            {currentView === 'reading' && (activeText ? activeText.title : 'Okuma')}
            {currentView === 'textQuiz' && "Okuma Sınavı"}
            {currentView === 'savedWords' && "Kelime Defterim & Leitner"}
            {currentView === 'vocabTest' && "Aralıklı Tekrar Testi"}
            {currentView === 'addText' && "Kendi Metnini Ekle"}
            {currentView === 'customList' && "Özel Metinlerim"}
            {currentView === 'aiGenerate' && "AI Metin Stüdyosu"}
            {currentView === 'puzzle' && "Kare Bulmaca"}
          </h1>

          <div className="flex items-center gap-1.5 ml-1">
            {(currentView === 'home' || currentView === 'reading' || currentView === 'puzzle') && (
              <button 
                onClick={toggleTypeSettings} 
                className={`p-2 rounded-xl transition flex items-center justify-center shadow-xs active:scale-95 cursor-pointer ${
                  showTypeSettings ? 'bg-indigo-600 text-white shadow-md ring-1 ring-white/50' : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                title="Okuma, Tema ve Doğal Ses Ayarları"
              >
                <Settings className="w-4 h-4" />
              </button>
            )}

            {currentView === 'home' && (
              <button 
                onClick={openBackupModal} 
                className="p-2 text-xs bg-white/20 hover:bg-white/30 rounded-xl transition flex items-center justify-center font-bold active:scale-95 cursor-pointer"
                title="Yedekleme & İçe Aktarma"
              >
                💾
              </button>
            )}
          </div>
        </div>

        {/* Tipografi, Tema & Doğal Ses Ayar Paneli */}
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

        {/* Toast Bildirimleri */}
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
            allAvailableTextsCount={allAvailableTexts.length}
            savedWordsCount={savedWords.length}
            dueCount={dueCount}
            onOpenSentenceTranslate={() => navigateTo('sentenceTranslate')}
            onOpenVocabMemoryHub={() => navigateTo('vocabHub')}
            onOpenPuzzle={() => navigateTo('puzzle')}
            handleOpenSettingsFromBottom={toggleTypeSettings}
            showTypeSettings={showTypeSettings}
            readerTheme={readerTheme}
            speechRate={speechRate}
            fontSize={fontSize}
            fontFamily={fontFamily}
          />
        )}

        {/* KELİME & HAFIZA MERKEZİ (LEITNER SRS, KALIP & DEYİMLER, EŞ & ZIT ANLAMLAR) */}
        {currentView === "vocabHub" && (
          <VocabMemoryHubView
            themeStyle={themeStyle}
            savedWordsCount={savedWords.length}
            dueCount={dueCount}
            onOpenSavedWords={() => navigateTo('savedWords')}
            onOpenPhraseCards={() => setShowPhraseCardsModal(true)}
            onOpenWordRelations={() => setShowWordRelationsModal(true)}
            onBackToHome={() => navigateTo('home')}
          />
        )}

        {/* CÜMLE ÇEVİRİ MERKEZİ (A1, A2, B1, B2, AI STÜDYOSU & ÖZEL METİN EKLE) */}
        {currentView === "sentenceTranslate" && (
          <SentenceTranslateHubView
            themeStyle={themeStyle}
            levels={levels}
            allAvailableTexts={allAvailableTexts}
            onSelectLevel={(level) => {
              setSelectedLevel(level);
              navigateTo("levels", { level });
            }}
            navigateTo={navigateTo}
            customTextsCount={customTexts.length}
            getBadgeStyle={getBadgeStyle}
            onBackToHome={() => navigateTo('home')}
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
              showToast("✨ Yapay zekâ metniniz hazır! Keyifli okumalar.");
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
            onOpenSettings={() => setShowTypeSettings(true)}
            onSaveWord={(word, translation, level) => {
              const clean = (word || '').toLowerCase().trim();
              const exists = savedWords.some(w => (w.word || w.original || '').toLowerCase() === clean);
              if (exists) {
                showToast(`"${word}" zaten kelime defterinizde kayıtlı.`);
                return;
              }
              const newWord = {
                id: Date.now().toString(),
                word: clean,
                original: clean,
                translation: translation,
                translated: translation,
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
            isWordSaved={(word) => isWordSaved(word)}
          />
        )}
      </div>

      {/* VERİ & YEDEKLEME MODALI */}
      <BackupModal
        isOpen={showBackupModal}
        onClose={closeBackupModal}
        handleExportJSON={handleExportJSON}
        handleExportAnkiTSV={handleExportAnkiTSV}
        handleImportJSON={(e) => handleImportJSON(e, closeBackupModal)}
        fileInputRef={fileInputRef}
        savedWordsCount={savedWords.length}
        customTextsCount={customTexts.length}
      />

      {/* KELİME & KALIP ÇEVİRİ MODALI */}
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
        savedPhrasesSet={new Set(savedWords.map(w => (w.word || w.original || '').toLowerCase()))}
        onSavePhrase={(phrase, info) => {
          const exists = savedWords.some(w => (w.word || w.original || '').toLowerCase() === phrase.toLowerCase());
          if (exists) {
            showToast(`"${phrase}" zaten kelime defterinizde kayıtlı.`);
            return;
          }
          const newWord = {
            id: Date.now().toString(),
            word: phrase,
            original: phrase,
            translation: info.tr,
            translated: info.tr,
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
        onSpeak={(text) => speak(text)}
      />

      {/* EŞ & ZIT ANLAMLILAR MODALI */}
      <WordRelationsModal
        isOpen={showWordRelationsModal}
        onClose={() => setShowWordRelationsModal(false)}
        speak={speak}
        toggleSaveWord={(wordObj, chosenLevel) => {
          toggleSaveWord(wordObj, chosenLevel || 'A1');
        }}
        isWordSaved={isWordSaved}
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
