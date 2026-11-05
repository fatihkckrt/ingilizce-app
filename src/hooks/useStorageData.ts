import { useState, useEffect, useCallback } from 'react';
import { idbGet, idbSet, LEITNER_INTERVALS, logStudyActivity } from '../data';
import { VocabWord, ReadingText } from '../types';

export function useStorageData(setToastMessage: (msg: string | null) => void) {
  const [completedTexts, setCompletedTexts] = useState<Array<string | number>>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem('completedTexts') || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  });

  const [savedWords, setSavedWords] = useState<VocabWord[]>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem('savedWords') || '[]');
      if (!Array.isArray(raw)) return [];
      return raw.map((w: any) => ({
        ...w,
        level: w.level || 'B1',
        box: typeof w.box === 'number' ? w.box : 1,
        nextReview: typeof w.nextReview === 'number' ? w.nextReview : Date.now(),
        lastReviewed: w.lastReviewed || null,
        contextEng: w.contextEng || null,
        contextTr: w.contextTr || null,
        sourceTitle: w.sourceTitle || null
      }));
    } catch {
      return [];
    }
  });

  const [customTexts, setCustomTexts] = useState<ReadingText[]>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem('customTexts') || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  });

  // IndexedDB ile ilk yükleme ve senkronizasyon
  useEffect(() => {
    (async () => {
      try {
        const idbWords = await idbGet('savedWords');
        const idbTexts = await idbGet('customTexts');
        const idbCompleted = await idbGet('completedTexts');

        if (idbWords && Array.isArray(idbWords)) setSavedWords(idbWords);
        else if (savedWords.length > 0) idbSet('savedWords', savedWords);

        if (idbTexts && Array.isArray(idbTexts)) setCustomTexts(idbTexts);
        else if (customTexts.length > 0) idbSet('customTexts', customTexts);

        if (idbCompleted && Array.isArray(idbCompleted)) setCompletedTexts(idbCompleted);
        else if (completedTexts.length > 0) idbSet('completedTexts', completedTexts);
      } catch (err) {
        console.warn('IndexedDB sync error:', err);
      }
    })();
  }, []);

  // Hem LocalStorage hem de IndexedDB'ye otomatik kayıt
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

  const isDue = useCallback((w: VocabWord) => (w.nextReview || 0) <= Date.now(), []);

  const formatReviewTime = useCallback((nextReview?: number) => {
    if (!nextReview) return 'Hemen';
    const diff = nextReview - Date.now();
    if (diff <= 0) return 'Vakti Geldi ⚡';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) return `${hours || 1} sa sonra`;
    const days = Math.floor(hours / 24);
    return `${days} gün sonra`;
  }, []);

  const isWordSaved = useCallback((wordStr: string) => {
    const clean = (wordStr || '').toLowerCase().trim();
    return savedWords.some(w => (w.original || w.word || '').toLowerCase().trim() === clean);
  }, [savedWords]);

  const getSavedWordInfo = useCallback((wordStr: string) => {
    const clean = (wordStr || '').toLowerCase().trim();
    return savedWords.find(w => (w.original || w.word || '').toLowerCase().trim() === clean);
  }, [savedWords]);

  const toggleSaveWord = useCallback((wordObj: any, chosenLevel?: string, contextData?: any) => {
    if (!wordObj || !wordObj.original) return;
    const clean = wordObj.original.toLowerCase().trim();
    setSavedWords(prev => {
      const isSaved = prev.some(w => (w.original || w.word || '').toLowerCase().trim() === clean);
      if (isSaved) {
        setToastMessage(`"${wordObj.original}" defterden kaldırıldı.`);
        return prev.filter(w => (w.original || w.word || '').toLowerCase().trim() !== clean);
      }
      setToastMessage(`"${wordObj.original}" Kutu 1'e eklendi! ⭐`);
      return [...prev, {
        ...wordObj,
        level: chosenLevel || wordObj.level || 'B1',
        box: 1,
        nextReview: Date.now(),
        lastReviewed: null,
        contextEng: contextData?.contextEng || wordObj.contextEng || null,
        contextTr: contextData?.contextTr || wordObj.contextTr || null,
        sourceTitle: contextData?.sourceTitle || wordObj.sourceTitle || null
      }];
    });
  }, [setToastMessage]);

  const markTextCompleted = useCallback((textId: string | number) => {
    setCompletedTexts(prev => {
      if (prev.includes(textId)) return prev;
      logStudyActivity('text_completed', { count: 1 });
      return [...prev, textId];
    });
  }, []);

  const deleteCustomText = useCallback((e: React.MouseEvent, textId: string | number) => {
    e.stopPropagation();
    if (window.confirm("Bu metni silmek istediğinize emin misiniz?")) {
      setCustomTexts(prev => prev.filter(t => t.id !== textId));
      setCompletedTexts(prev => prev.filter(id => id !== textId));
      setToastMessage("Metin silindi.");
    }
  }, [setToastMessage]);

  const handleExportJSON = useCallback(() => {
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
    a.download = `ingilizce_ogren_yedek_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setToastMessage("Yedek dosyası indirildi! 💾");
  }, [savedWords, customTexts, completedTexts, setToastMessage]);

  const handleExportAnkiTSV = useCallback(() => {
    if (savedWords.length === 0) {
      setToastMessage("Dışa aktarılacak kayıtlı kelime yok.");
      return;
    }
    let tsvContent = "Front\tBack\tTags\n";
    savedWords.forEach(w => {
      const front = w.original || w.word;
      let back = w.translated || w.translation || '';
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
    a.download = `anki_kelimeler_${new Date().toISOString().slice(0, 10)}.tsv`;
    a.click();
    URL.revokeObjectURL(url);
    setToastMessage("Anki kart destesi indirildi! 📇");
  }, [savedWords, setToastMessage]);

  const handleImportJSON = useCallback((e: React.ChangeEvent<HTMLInputElement>, onSuccess?: () => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
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
        onSuccess?.();
      } catch (err) {
        alert("Geçersiz yedek dosyası formatı!");
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }, [setToastMessage]);

  return {
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
  };
}
