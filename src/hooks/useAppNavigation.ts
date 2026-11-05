import { useState, useEffect, useRef, useCallback } from 'react';
import { CEFRLevel, ReadingText } from '../types';
import { defaultTexts } from '../data';

export function useAppNavigation(
  customTexts: ReadingText[],
  stopKaraoke: () => void,
  setActiveHighlight: (val: any) => void
) {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | null>(null);
  const [activeText, setActiveText] = useState<ReadingText | null>(null);

  const [revealedSentences, setRevealedSentences] = useState<Record<number, boolean>>({});
  const [showFullTranslation, setShowFullTranslation] = useState<boolean>(false);

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const [selectedTranslation, setSelectedTranslation] = useState<any>(null);
  const [showTypeSettings, setShowTypeSettings] = useState<boolean>(false);
  const [showBackupModal, setShowBackupModal] = useState<boolean>(false);
  const [showStatsModal, setShowStatsModal] = useState<boolean>(false);
  const [showPhraseCardsModal, setShowPhraseCardsModal] = useState<boolean>(false);
  const [showWordRelationsModal, setShowWordRelationsModal] = useState<boolean>(false);

  const homeScrollRef = useRef<HTMLDivElement | null>(null);
  const settingsPanelRef = useRef<HTMLDivElement | null>(null);

  // Popstate senkronizasyonu için güncel ref'ler
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

  // Tarayıcı ve telefon Geri tuşu (popstate) dinleyicisi
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (!window.history.state || !window.history.state.view) {
      window.history.replaceState({ view: 'home' }, '');
    }

    const handlePopState = (event: PopStateEvent) => {
      stopKaraoke();

      const state = event.state;

      // 1. Açık olan modalleri kapat
      if (selectedTranslationRef.current && (!state || state.modal !== 'translation')) {
        setSelectedTranslation(null);
        setActiveHighlight(null);
      }
      if (showTypeSettingsRef.current && (!state || state.modal !== 'typeSettings')) {
        setShowTypeSettings(false);
      }
      if (showBackupModalRef.current && (!state || state.modal !== 'backup')) {
        setShowBackupModal(false);
      }
      if (showStatsModalRef.current && (!state || state.modal !== 'stats')) {
        setShowStatsModal(false);
      }

      // 2. Ana ekrana dönüş veya state yokluğu
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
  }, [stopKaraoke, setActiveHighlight]);

  const navigateTo = useCallback((view: string, options: { level?: CEFRLevel | null; text?: ReadingText | null } = {}) => {
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
  }, [stopKaraoke, setActiveHighlight]);

  const openTranslationModal = useCallback((data: any) => {
    setSelectedTranslation(data);
    if (window.history.state && window.history.state.modal === 'translation') {
      window.history.replaceState({ ...window.history.state, modal: 'translation' }, '');
    } else {
      window.history.pushState({ ...(window.history.state || { view: currentViewRef.current }), modal: 'translation' }, '');
    }
  }, []);

  const closeTranslationModal = useCallback(() => {
    setSelectedTranslation(null);
    setActiveHighlight(null);
    if (window.history.state && window.history.state.modal === 'translation') {
      window.history.back();
    }
  }, [setActiveHighlight]);

  const openBackupModal = useCallback(() => {
    setShowBackupModal(true);
    if (!window.history.state || window.history.state.modal !== 'backup') {
      window.history.pushState({ ...(window.history.state || { view: currentViewRef.current }), modal: 'backup' }, '');
    }
  }, []);

  const closeBackupModal = useCallback(() => {
    setShowBackupModal(false);
    if (window.history.state && window.history.state.modal === 'backup') {
      window.history.back();
    }
  }, []);

  const openStatsModal = useCallback(() => {
    setShowStatsModal(true);
    if (!window.history.state || window.history.state.modal !== 'stats') {
      window.history.pushState({ ...(window.history.state || { view: currentViewRef.current }), modal: 'stats' }, '');
    }
  }, []);

  const closeStatsModal = useCallback(() => {
    setShowStatsModal(false);
    if (window.history.state && window.history.state.modal === 'stats') {
      window.history.back();
    }
  }, []);

  const closeTypeSettings = useCallback(() => {
    setShowTypeSettings(false);
    if (window.history.state && window.history.state.modal === 'typeSettings') {
      window.history.back();
    }
  }, []);

  const toggleTypeSettings = useCallback(() => {
    if (showTypeSettings) {
      closeTypeSettings();
    } else {
      setShowTypeSettings(true);
      setTimeout(() => {
        homeScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        settingsPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [showTypeSettings, closeTypeSettings]);

  const handleHeaderBack = useCallback(() => {
    stopKaraoke();

    // 1. Önce açık modalleri kapat
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

    // 2. Hiyerarşik görünüm geri dönüşü
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

    if (cv === 'levels' || cv === 'addText' || cv === 'customList' || cv === 'aiGenerate') {
      navigateTo('sentenceTranslate');
      return;
    }

    if (cv === 'savedWords' || cv === 'vocabTest') {
      navigateTo('vocabHub');
      return;
    }

    navigateTo('home');
  }, [stopKaraoke, closeTranslationModal, closeTypeSettings, closeBackupModal, closeStatsModal, navigateTo]);

  const startReading = useCallback((text: ReadingText) => {
    stopKaraoke();
    setRevealedSentences({});
    setShowFullTranslation(false);
    setSelectedTranslation(null);
    setActiveHighlight(null);
    setShowTypeSettings(false);
    navigateTo('reading', { text, level: selectedLevelRef.current || text.level });
  }, [stopKaraoke, setActiveHighlight, navigateTo]);

  return {
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
  };
}
