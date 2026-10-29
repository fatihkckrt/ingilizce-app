import React from 'react';
import { InstallPromptBanner } from './InstallPromptBanner';
import { ThemeClasses } from '../utils/themeUtils';

interface HomeViewProps {
  homeScrollRef: React.RefObject<HTMLDivElement>;
  themeStyle: ThemeClasses;
  levels: string[];
  allAvailableTexts: any[];
  onSelectLevel: (level: string) => void;
  navigateTo: (view: string, options?: any) => void;
  customTextsCount: number;
  savedWordsCount: number;
  dueCount: number;
  openStatsModal: () => void;
  setShowPhraseCardsModal: (val: boolean) => void;
  setShowWordRelationsModal?: (val: boolean) => void;
  handleOpenSettingsFromBottom: () => void;
  showTypeSettings: boolean;
  readerTheme: string;
  speechRate: number;
  fontSize: string;
  fontFamily: string;
  getBadgeStyle: (lvl: string) => string;
}

export const HomeView: React.FC<HomeViewProps> = ({
  homeScrollRef,
  themeStyle,
  levels,
  allAvailableTexts,
  onSelectLevel,
  navigateTo,
  customTextsCount,
  savedWordsCount,
  dueCount,
  openStatsModal,
  setShowPhraseCardsModal,
  setShowWordRelationsModal,
  handleOpenSettingsFromBottom,
  showTypeSettings,
  readerTheme,
  speechRate,
  fontSize,
  fontFamily,
  getBadgeStyle,
}) => {
  return (
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
            <button
              key={level}
              onClick={() => onSelectLevel(level)}
              className={`w-full ${themeStyle.card} border p-4 rounded-2xl flex items-center justify-between hover:shadow-md transition active:scale-[0.99] group`}
            >
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
        <button
          onClick={() => navigateTo('aiGenerate')}
          className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-700 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg hover:from-purple-800 hover:to-sky-800 transition active:scale-[0.98]"
        >
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
        <button
          onClick={() => navigateTo('addText')}
          className="w-full bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg hover:from-indigo-800 hover:to-purple-900 transition active:scale-[0.98]"
        >
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

      {customTextsCount > 0 && (
        <button
          onClick={() => navigateTo('customList')}
          className={`w-full ${themeStyle.card} border border-purple-300 dark:border-purple-800 p-4 rounded-2xl flex items-center justify-between hover:border-purple-500 shadow-sm transition active:scale-[0.99]`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📑</span>
            <div className="text-left">
              <span className="font-extrabold text-base block">Eklediğim Metinler</span>
              <span className="text-xs opacity-75 font-medium">{customTextsCount} özel metin</span>
            </div>
          </div>
          <span className="bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">{customTextsCount}</span>
        </button>
      )}

      <button
        onClick={() => navigateTo('savedWords')}
        className={`w-full ${themeStyle.card} border-2 border-orange-400 dark:border-orange-800 p-4 rounded-2xl flex items-center justify-between hover:border-orange-500 shadow-md transition active:scale-[0.99]`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🧠</span>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base block">Kelime Defterim</span>
              {dueCount > 0 && (
                <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse">
                  {dueCount} TEKRAR!
                </span>
              )}
            </div>
            <span className="text-xs opacity-80 font-medium">5 Aşamalı Leitner Aralıklı Tekrar</span>
          </div>
        </div>
        <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow">{savedWordsCount}</div>
      </button>

      {/* Kalıp & Deyim Kartları Stüdyosu */}
      <button
        onClick={() => setShowPhraseCardsModal(true)}
        className={`w-full ${themeStyle.card} border-2 border-amber-400 dark:border-amber-800 p-4 rounded-2xl flex items-center justify-between hover:border-amber-500 shadow-md transition active:scale-[0.98]`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl p-1 bg-amber-400/20 rounded-xl">🎯</span>
          <div className="text-left">
            <span className="font-extrabold text-base block">Kalıp & Deyim Kartları</span>
            <span className="text-xs opacity-80 font-medium">Phrasal Verb'ler, Deyimler & Akademik Kalıplar</span>
          </div>
        </div>
        <span className="bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-full shadow-xs">Kartlar ➔</span>
      </button>

      {/* Eş & Zıt Anlamlar (Synonyms & Antonyms) */}
      <button
        onClick={() => setShowWordRelationsModal && setShowWordRelationsModal(true)}
        className={`w-full ${themeStyle.card} border-2 border-teal-500 dark:border-teal-700 p-4 rounded-2xl flex items-center justify-between hover:border-teal-400 shadow-md transition active:scale-[0.98]`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl p-1 bg-teal-500/20 rounded-xl">🔄</span>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base block">Eş & Zıt Anlamlar</span>
              <span className="bg-teal-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase">Synonyms & Antonyms</span>
            </div>
            <span className="text-xs opacity-80 font-medium">Zıt ve Eş Anlamlı Çiftlerle Kelime Dağarcığını Pekiştir</span>
          </div>
        </div>
        <span className="bg-teal-600 text-white font-black text-xs px-2.5 py-1 rounded-full shadow-xs">Keşfet ➔</span>
      </button>

      {/* İngilizce Kare & Çengel Bulmaca */}
      <button
        onClick={() => navigateTo('puzzle')}
        className={`w-full ${themeStyle.card} border-2 border-indigo-400 dark:border-indigo-800 p-4 rounded-2xl flex items-center justify-between hover:border-indigo-500 shadow-md transition active:scale-[0.98]`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl p-1 bg-indigo-500/20 rounded-xl">🧩</span>
          <div className="text-left">
            <span className="font-extrabold text-base block">İngilizce Kare Bulmaca</span>
            <span className="text-xs opacity-80 font-medium">A1-B2 Seviyeli 5x5, 6x6, 7x7 Çengel Bulmacalar</span>
          </div>
        </div>
        <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-xs">Çöz ➔</span>
      </button>

      {/* Gelişim ve İstatistikler */}
      <button
        onClick={openStatsModal}
        className={`w-full ${themeStyle.card} border-2 border-emerald-400 dark:border-emerald-800 p-4 rounded-2xl flex items-center justify-between hover:border-emerald-500 shadow-md transition active:scale-[0.98]`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">📊</span>
          <div className="text-left">
            <span className="font-extrabold text-base block">Gelişim & İstatistiklerim</span>
            <span className="text-xs opacity-80 font-medium">Günlük Seri, Okuma Hacmi ve Leitner Dağılımı</span>
          </div>
        </div>
        <span className="text-lg opacity-60">➔</span>
      </button>

      {/* Uygulama & Okuma Ayarları Hızlı Kartı */}
      <button
        onClick={handleOpenSettingsFromBottom}
        className={`w-full ${themeStyle.card} border p-4 rounded-2xl flex items-center justify-between hover:shadow-md transition active:scale-[0.98] ${
          showTypeSettings ? 'ring-2 ring-indigo-500 border-indigo-400' : ''
        }`}
      >
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
            <span className="text-xs opacity-60 font-medium">
              Tema ({readerTheme === 'sepia' ? 'Kitap' : readerTheme === 'oled' ? 'OLED' : readerTheme === 'forest' ? 'Orman' : 'Ferah'}), Hız ({speechRate}x), Yazı ({fontSize.toUpperCase()} / {fontFamily})
            </span>
          </div>
        </div>
        <span className="text-lg opacity-60 font-bold">{showTypeSettings ? '▲' : '➔'}</span>
      </button>
    </div>
  );
};
