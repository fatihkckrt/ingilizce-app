import { useState, useEffect, useRef, useCallback } from 'react';
import { isMaleVoice, isFemaleVoice, getHdAudioUrl } from '../utils/voiceUtils';
import { Sentence } from '../types';

export function useSpeechAudio(
  selectedVoice: string,
  speechRate: number,
  speechPitch: number
) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [karaokeState, setKaraokeState] = useState<{
    isPlaying: boolean;
    sentenceId: number | null;
    wordIdx: number | null;
  }>({
    isPlaying: false,
    sentenceId: null,
    wordIdx: null
  });
  const [activeHighlight, setActiveHighlight] = useState<{
    sentenceId?: number;
    indices: number[];
  } | null>(null);

  const activeAudioRef = useRef<HTMLAudioElement | null>(null);
  const karaokeTimerRef = useRef<any>(null);

  // Sesleri tarayıcıdan yükle ve yenile
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const updateVoices = () => {
      const available = window.speechSynthesis.getVoices() || [];
      if (available.length > 0) {
        setVoices(available);
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const stopCurrentSpeech = useCallback(() => {
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
  }, []);

  const stopKaraoke = useCallback(() => {
    if (karaokeTimerRef.current) {
      clearTimeout(karaokeTimerRef.current);
      karaokeTimerRef.current = null;
    }
    stopCurrentSpeech();
    setKaraokeState({ isPlaying: false, sentenceId: null, wordIdx: null });
  }, [stopCurrentSpeech]);

  // Doğal ve temiz sistem TTS çağrısı (Robotik bozulma formülü tamamen kaldırıldı!)
  const speakWithDeviceTTS = useCallback((text: string, voiceKey?: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
    } catch (_) {}

    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      const key = voiceKey || selectedVoice || 'hd_us';

      const allVoices = window.speechSynthesis.getVoices() || [];
      const enVoices = allVoices.filter(v => (v.lang || '').toLowerCase().startsWith('en'));
      const voicePool = enVoices.length > 0 ? enVoices : allVoices;

      // Doğal sesleri önceliklendir (Google, Natural, Online)
      const naturalVoices = voicePool.filter(v => {
        const name = (v.name || '').toLowerCase();
        return name.includes('natural') || name.includes('online') || name.includes('google');
      });

      const malePool = voicePool.filter(isMaleVoice);
      const femalePool = voicePool.filter(isFemaleVoice);

      let matchedVoice: SpeechSynthesisVoice | null = null;
      let targetLang = 'en-US';

      // 1. Doğrudan sistem ses adı veya URI eşleşmesi
      matchedVoice = allVoices.find(v => v.name === key || v.voiceURI === key) || null;

      // 2. Akıllı Ön Tanımlı Eşleşme (Doğal ve kaliteli sesler öncelikli)
      if (!matchedVoice) {
        if (key.includes('natural') || key.startsWith('hd_')) {
          if (key.includes('uk') || key.includes('gb')) {
            matchedVoice = naturalVoices.find(v => (v.lang || '').toLowerCase().includes('gb') || (v.lang || '').toLowerCase().includes('uk')) ||
                           femalePool.find(v => (v.lang || '').toLowerCase().includes('gb')) ||
                           voicePool[0] || null;
            targetLang = 'en-GB';
          } else {
            matchedVoice = naturalVoices.find(v => (v.lang || '').toLowerCase().includes('us')) ||
                           naturalVoices[0] ||
                           femalePool.find(v => (v.lang || '').toLowerCase().includes('us')) ||
                           voicePool[0] || null;
            targetLang = 'en-US';
          }
        } else if (key.includes('male')) {
          if (key.includes('uk') || key.includes('gb')) {
            matchedVoice = malePool.find(v => (v.lang || '').toLowerCase().includes('gb') || (v.lang || '').toLowerCase().includes('uk')) ||
                           malePool[0] || null;
            targetLang = 'en-GB';
          } else {
            matchedVoice = malePool.find(v => (v.lang || '').toLowerCase().includes('us')) ||
                           malePool[0] || null;
            targetLang = 'en-US';
          }
        } else if (key.includes('female')) {
          if (key.includes('uk') || key.includes('gb')) {
            matchedVoice = femalePool.find(v => (v.lang || '').toLowerCase().includes('gb') || (v.lang || '').toLowerCase().includes('uk')) ||
                           femalePool[0] || null;
            targetLang = 'en-GB';
          } else {
            matchedVoice = femalePool.find(v => (v.lang || '').toLowerCase().includes('us')) ||
                           femalePool[0] || null;
            targetLang = 'en-US';
          }
        } else {
          matchedVoice = naturalVoices[0] || voicePool[0] || null;
        }
      }

      if (matchedVoice) {
        utterance.voice = matchedVoice;
        utterance.lang = matchedVoice.lang || targetLang;
      } else {
        utterance.lang = targetLang;
      }

      // DOĞAL PERDE: Sesi robotlaştıran 'Math.min(speechPitch, 0.62)' tamamen temizlendi!
      utterance.pitch = speechPitch;
      utterance.rate = speechRate;

      (window as any)._activeSpeechUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    }, 50);
  }, [selectedVoice, speechPitch, speechRate]);

  // Genel ses çalma fonksiyonu (Stüdyo HD öncelikli)
  const speak = useCallback((text: string, voiceKey?: string) => {
    if (!text) return;
    stopCurrentSpeech();

    const targetVoice = voiceKey || selectedVoice || 'hd_us';

    // Stüdyo HD Ses (Google Translate Neural insan sesi)
    if (targetVoice.startsWith('hd_')) {
      const url = getHdAudioUrl(text, targetVoice);
      const audio = new Audio(url);
      audio.playbackRate = speechRate;
      activeAudioRef.current = audio;
      audio.play().catch(() => {
        // Cihaz çevrimdışıysa veya ses engellendiyse sistem TTS'e güvenle düş
        speakWithDeviceTTS(text, targetVoice);
      });
      return;
    }

    speakWithDeviceTTS(text, targetVoice);
  }, [selectedVoice, speechRate, stopCurrentSpeech, speakWithDeviceTTS]);

  // Ses ayarını test etme
  const testVoice = useCallback((targetVoiceId?: string) => {
    const voiceKey = targetVoiceId || selectedVoice || 'hd_us';
    stopCurrentSpeech();

    let sampleText = "Hello! Keep up the great work practicing English.";
    if (voiceKey.includes('male')) {
      sampleText = voiceKey.includes('uk') || voiceKey.includes('gb')
        ? "Good day! I am your British male English assistant."
        : "Hello! I am your American male reading assistant.";
    } else if (voiceKey.includes('uk') || voiceKey.includes('gb')) {
      sampleText = "Good day! Welcome to your British English practice.";
    }

    speak(sampleText, voiceKey);
  }, [selectedVoice, stopCurrentSpeech, speak]);

  // Cümleyi Karaoke ile Senkronize Oynatma
  const speakSentenceWithKaraoke = useCallback((sentence: Sentence) => {
    stopKaraoke();

    const text = sentence.eng;
    const words = text.split(' ');

    const wordDurations = words.map(w => {
      const clean = w.replace(/[^a-zA-Z]/g, '');
      let duration = (Math.max(2, clean.length) * 65 + 130) / speechRate;
      if (/[.,!?;:]$/.test(w)) duration += 160 / speechRate;
      return Math.max(160, duration);
    });

    setKaraokeState({ isPlaying: true, sentenceId: sentence.id, wordIdx: 0 });

    const scheduleNext = (idx: number) => {
      if (idx < words.length - 1) {
        karaokeTimerRef.current = setTimeout(() => {
          setKaraokeState({ isPlaying: true, sentenceId: sentence.id, wordIdx: idx + 1 });
          scheduleNext(idx + 1);
        }, wordDurations[idx]);
      } else {
        karaokeTimerRef.current = setTimeout(() => {
          setKaraokeState({ isPlaying: false, sentenceId: null, wordIdx: null });
        }, wordDurations[idx] + 200);
      }
    };

    scheduleNext(0);

    // Stüdyo HD Doğal Sesi ile Karaoke
    if (selectedVoice.startsWith('hd_')) {
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
        setKaraokeState({ isPlaying: false, sentenceId: null, wordIdx: null });
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

    // Sistem Doğal TTS Sentezi ile Karaoke
    speakWithDeviceTTS(text, selectedVoice);
  }, [selectedVoice, speechRate, stopKaraoke, speakWithDeviceTTS]);

  return {
    voices,
    karaokeState,
    activeHighlight,
    setActiveHighlight,
    stopCurrentSpeech,
    stopKaraoke,
    speak,
    testVoice,
    speakSentenceWithKaraoke
  };
}
