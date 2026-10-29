import React from 'react';
import { InstallPromptBanner } from './InstallPromptBanner';
import { ThemeClasses } from '../utils/themeUtils';
import { ArrowRight, Settings } from 'lucide-react';

interface HomeViewProps {
  homeScrollRef: React.RefObject<HTMLDivElement>;
  themeStyle: ThemeClasses;
  allAvailableTextsCount: number;
  savedWordsCount: number;
  dueCount: number;
  onOpenSentenceTranslate: () => void;
  onOpenVocabMemoryHub: () => void;
  onOpenPuzzle: () => void;
  handleOpenSettingsFromBottom: () => void;
  showTypeSettings: boolean;
  readerTheme: string;
  speechRate: number;
  fontSize: string;
  fontFamily: string;
}

export const HomeView: React.FC<HomeViewProps> = ({
  homeScrollRef,
  themeStyle,
  allAvailableTextsCount,
  savedWordsCount,
  dueCount,
  onOpenSentenceTranslate,
  onOpenVocabMemoryHub,
  onOpenPuzzle,
  handleOpenSettingsFromBottom,
  showTypeSettings,
}) => {
  return (
    <div ref={homeScrollRef} className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-y-auto space-y-4">
      {/* PWA Kurulum Butonu */}
      <InstallPromptBanner />

      {/* KARŞILAMA ALANI */}
      <div className="text-center my-2 sm:my-3">
        <div className="bg-indigo-600/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-2.5 border border-indigo-500/20 shadow-inner">
          <span className="text-4xl">🌲</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">İngilizce Öğren</h2>
        <p className="text-xs sm:text-sm opacity-70 mt-1 font-medium">Huzurlu ve kalıcı dil öğrenme alanı</p>
      </div>

      {/* 3 ANA ÖZELLİK MERKEZİ */}
      <div className="space-y-3.5 my-auto">
        {/* 1. CÜMLE ÇEVİRİ MERKEZİ */}
        <button
          onClick={onOpenSentenceTranslate}
          className={`w-full ${themeStyle.card} border-2 border-indigo-500/60 dark:border-indigo-600/80 p-4 sm:p-5 rounded-3xl flex items-center justify-between hover:border-indigo-400 shadow-md hover:shadow-lg transition active:scale-[0.98] group cursor-pointer text-left`}
        >
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            <span className="text-3xl p-3 bg-indigo-500/15 dark:bg-indigo-500/25 rounded-2xl border border-indigo-500/30 shrink-0">
              📘
            </span>
            <div className="min-w-0 flex-1 pr-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-base sm:text-lg block group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition truncate">
                  Cümle Çeviri
                </span>
                <span className="bg-indigo-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase whitespace-nowrap shadow-xs">
                  A1 - B2
                </span>
              </div>
              <p className="text-xs opacity-75 font-medium mt-1 leading-snug">
                Seviyeli çift dilli okumalar, AI Metin Stüdyosu & Kendi Metnini Ekle
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* 2. KELİME & HAFIZA MERKEZİ */}
        <button
          onClick={onOpenVocabMemoryHub}
          className={`w-full ${themeStyle.card} border-2 border-orange-500/60 dark:border-orange-600/80 p-4 sm:p-5 rounded-3xl flex items-center justify-between hover:border-orange-400 shadow-md hover:shadow-lg transition active:scale-[0.98] group cursor-pointer text-left`}
        >
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            <span className="text-3xl p-3 bg-orange-500/15 dark:bg-orange-500/25 rounded-2xl border border-orange-500/30 shrink-0">
              🧠
            </span>
            <div className="min-w-0 flex-1 pr-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-base sm:text-lg block group-hover:text-orange-600 dark:group-hover:text-orange-400 transition truncate">
                  Kelime & Hafıza Merkezi
                </span>
                {dueCount > 0 ? (
                  <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse whitespace-nowrap shadow-xs">
                    {dueCount} TEKRAR!
                  </span>
                ) : (
                  <span className="bg-orange-500/20 text-orange-700 dark:text-orange-300 text-[10px] font-black px-2 py-0.5 rounded-full whitespace-nowrap shadow-xs">
                    {savedWordsCount} Kelime
                  </span>
                )}
              </div>
              <p className="text-xs opacity-75 font-medium mt-1 leading-snug">
                Leitner SRS Defterim, Kalıp & Deyimler ve Eş / Zıt Anlamlar
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-orange-600/15 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* 3. KARE BULMACA */}
        <button
          onClick={onOpenPuzzle}
          className={`w-full ${themeStyle.card} border-2 border-emerald-500/60 dark:border-emerald-600/80 p-4 sm:p-5 rounded-3xl flex items-center justify-between hover:border-emerald-400 shadow-md hover:shadow-lg transition active:scale-[0.98] group cursor-pointer text-left`}
        >
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            <span className="text-3xl p-3 bg-emerald-500/15 dark:bg-emerald-500/25 rounded-2xl border border-emerald-500/30 shrink-0">
              🧩
            </span>
            <div className="min-w-0 flex-1 pr-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-base sm:text-lg block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition truncate">
                  Kare Bulmaca
                </span>
                <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase whitespace-nowrap shadow-xs">
                  180 Bulmaca
                </span>
              </div>
              <p className="text-xs opacity-75 font-medium mt-1 leading-snug">
                A1-B2 Seviyeli 5x5, 6x6, 7x7, 8x8, 9x9, 10x10 çengel & kare bulmacalar
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* UYGULAMA & OKUMA AYARLARI KARTI */}
      <button
        onClick={handleOpenSettingsFromBottom}
        className={`w-full ${themeStyle.card} border p-3.5 sm:p-4 rounded-2xl flex items-center justify-between hover:shadow-md transition active:scale-[0.98] cursor-pointer ${
          showTypeSettings ? 'ring-2 ring-indigo-500 border-indigo-400' : ''
        }`}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span className="text-2xl p-2 bg-black/5 dark:bg-white/5 rounded-xl shrink-0">⚙️</span>
          <div className="text-left min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base block truncate">Okuma & Ses Ayarları</span>
              {showTypeSettings && (
                <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full animate-pulse whitespace-nowrap">
                  AÇIK ↑
                </span>
              )}
            </div>
            <p className="text-xs opacity-60 font-medium truncate mt-0.5">
              Tema, Ses Hızı, Doğal Sesler ve Font Ayarları
            </p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 opacity-60">
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
};
