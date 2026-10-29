import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { Sparkles, Plus, BookOpen, Layers, ArrowRight, ArrowLeft } from 'lucide-react';

interface SentenceTranslateHubViewProps {
  themeStyle: ThemeClasses;
  levels: string[];
  allAvailableTexts: any[];
  onSelectLevel: (level: string) => void;
  navigateTo: (view: string, options?: any) => void;
  customTextsCount: number;
  getBadgeStyle: (lvl: string) => string;
  onBackToHome: () => void;
}

export const SentenceTranslateHubView: React.FC<SentenceTranslateHubViewProps> = ({
  themeStyle,
  levels,
  allAvailableTexts,
  onSelectLevel,
  navigateTo,
  customTextsCount,
  getBadgeStyle,
  onBackToHome,
}) => {
  return (
    <div className="flex-1 p-4 sm:p-5 flex flex-col space-y-4 overflow-y-auto">
      {/* ÜST BAŞLIK & GERİ DÖNÜŞ */}
      <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/5">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition py-1 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Menü</span>
        </button>

        <div className="text-right">
          <span className="text-[10px] uppercase font-black tracking-wider text-indigo-700 dark:text-indigo-400">
            Metin & Cümle Havuzu
          </span>
          <span className="text-xs text-slate-400 font-semibold block">
            {allAvailableTexts.length} Çift Dilli Metin
          </span>
        </div>
      </div>

      {/* KARŞILAMA VE BİLGİ KARTI */}
      <div className="text-center my-1">
        <div className="bg-indigo-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 border border-indigo-500/20 shadow-inner">
          <span className="text-3xl">📖</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black">Cümle Çeviri & Okuma</h2>
        <p className="text-xs opacity-70 mt-0.5 font-medium max-w-xs mx-auto">
          Cümle cümle Türkçe karşılıkları ve sesli karaoke eşliğinde okuyun
        </p>
      </div>

      {/* SEVİYE BUTONLARI (A1, A2, B1, B2) */}
      <div className="space-y-2">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1 block">
          CEFR Seviyeleri:
        </span>
        {levels.map(level => {
          const count = allAvailableTexts.filter(t => t.level === level).length;
          return (
            <button
              key={level}
              onClick={() => onSelectLevel(level)}
              className={`w-full ${themeStyle.card} border p-3.5 sm:p-4 rounded-2xl flex items-center justify-between hover:shadow-md transition active:scale-[0.99] group cursor-pointer`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-9 h-9 rounded-xl font-bold flex items-center justify-center text-sm border shadow-sm ${getBadgeStyle(level)}`}>
                  {level}
                </span>
                <div className="text-left">
                  <span className="font-bold text-base block">{level} Seviyesi Cümle Çevirileri</span>
                  <span className="text-xs opacity-60 font-medium">{count} Hazır Metin Mevcut</span>
                </div>
              </div>
              <span className="text-lg opacity-40 group-hover:translate-x-1 transition">➔</span>
            </button>
          );
        })}
      </div>

      {/* ÜRETİM & ÖZEL METİN ARAÇLARI */}
      <div className="pt-2 space-y-2.5">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1 block">
          Özel Metin & Üretim Stüdyosu:
        </span>

        {/* AI Metin Stüdyosu */}
        <button
          onClick={() => navigateTo('aiGenerate')}
          className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-700 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg hover:from-purple-800 hover:to-sky-800 transition active:scale-[0.98] cursor-pointer"
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

        {/* Kendi Metnini Ekle */}
        <button
          onClick={() => navigateTo('addText')}
          className="w-full bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg hover:from-indigo-800 hover:to-purple-900 transition active:scale-[0.98] cursor-pointer"
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

        {/* Eklediğim Metinler (Varsa) */}
        {customTextsCount > 0 && (
          <button
            onClick={() => navigateTo('customList')}
            className={`w-full ${themeStyle.card} border border-purple-300 dark:border-purple-800 p-4 rounded-2xl flex items-center justify-between hover:border-purple-500 shadow-sm transition active:scale-[0.99] cursor-pointer`}
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
      </div>
    </div>
  );
};
