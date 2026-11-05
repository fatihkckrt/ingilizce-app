import { useState, useEffect } from 'react';

export function useAppSettings() {
  const [readerTheme, setReaderTheme] = useState<string>(() => {
    return localStorage.getItem('app_theme') || 'sepia';
  });

  const [fontSize, setFontSize] = useState<string>(() => {
    return localStorage.getItem('app_fontsize') || 'base';
  });

  const [fontFamily, setFontFamily] = useState<string>(() => {
    return localStorage.getItem('app_fontfamily') || 'sans';
  });

  const [speechRate, setSpeechRate] = useState<number>(() => {
    const saved = localStorage.getItem('app_speech_rate');
    return saved ? parseFloat(saved) : 1.0;
  });

  const [speechPitch, setSpeechPitch] = useState<number>(() => {
    const saved = localStorage.getItem('app_speech_pitch');
    return saved ? parseFloat(saved) : 1.0;
  });

  const [phraseHunterActive, setPhraseHunterActive] = useState<boolean>(() => {
    return localStorage.getItem('app_phrase_hunter') === 'true';
  });

  // Default to Natural Studio HD voice (hd_us) instead of robotic legacy voices!
  const [selectedVoice, setSelectedVoice] = useState<string>(() => {
    const saved = localStorage.getItem('app_selected_voice');
    if (!saved || saved === 'device_us_male' || saved === 'male_us') {
      return 'hd_us';
    }
    return saved;
  });

  // Dark mode class sync
  useEffect(() => {
    if (readerTheme === 'oled' || readerTheme === 'forest') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('app_theme', readerTheme);
  }, [readerTheme]);

  useEffect(() => {
    localStorage.setItem('app_fontsize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('app_fontfamily', fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    localStorage.setItem('app_speech_rate', speechRate.toString());
  }, [speechRate]);

  useEffect(() => {
    localStorage.setItem('app_speech_pitch', speechPitch.toString());
  }, [speechPitch]);

  useEffect(() => {
    localStorage.setItem('app_phrase_hunter', phraseHunterActive.toString());
  }, [phraseHunterActive]);

  useEffect(() => {
    localStorage.setItem('app_selected_voice', selectedVoice);
  }, [selectedVoice]);

  return {
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
  };
}
