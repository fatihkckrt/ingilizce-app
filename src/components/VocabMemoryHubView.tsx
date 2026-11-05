import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { Brain, ArrowLeft, ArrowRight, Layers, Sparkles, BookMarked } from 'lucide-react';

interface VocabMemoryHubViewProps {
  themeStyle: ThemeClasses;
  savedWordsCount: number;
  dueCount: number;
  onOpenSavedWords: () => void;
  onOpenPhraseCards: () => void;
  onOpenWordRelations: () => void;
  onBackToHome: () => void;
}

export const VocabMemoryHubView: React.FC<VocabMemoryHubViewProps> = ({
  themeStyle,
  savedWordsCount,
  dueCount,
  onOpenSavedWords,
  onOpenPhraseCards,
  onOpenWordRelations,
  onBackToHome,
}) => {
  return (
    <div className="flex-1 p-4 sm:p-5 flex flex-col space-y-4 overflow-y-auto">
      {/* ÜST BAŞLIK & GERİ DÖNÜŞ */}
      <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/5">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition py-1 px-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Menü</span>
        </button>

        <div className="text-right">
          <span className="text-[10px] uppercase font-black tracking-wider text-orange-600 dark:text-orange-400">
            Hafıza & Kelime
          </span>
          <span className="text-xs text-slate-400 font-semibold block">
            {savedWordsCount} Kayıtlı Kelime
          </span>
        </div>
      </div>

      {/* KARŞILAMA VE BİLGİ KARTI */}
      <div className="text-center my-2">
        <div className="bg-orange-500/15 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 border border-orange-500/25 shadow-inner">
          <span className="text-3xl">🧠</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black">Kelime & Hafıza Merkezi</h2>
        <p className="text-xs opacity-70 mt-0.5 font-medium max-w-xs mx-auto">
          Kalıcı öğrenme, aralıklı tekrar ve kelime dağarcığını zenginleştirme araçları
        </p>
      </div>

      {/* 3 TEMEL ÖZELLİK KARTI */}
      <div className="space-y-3.5 my-auto">
        {/* 1. KELİME DEFTERİM (LEITNER SRS) */}
        <button
          onClick={onOpenSavedWords}
          className={`w-full ${themeStyle.card} border-2 border-orange-500/60 dark:border-orange-500/70 p-4 sm:p-5 rounded-3xl flex items-center justify-between hover:border-orange-400 shadow-md hover:shadow-lg transition active:scale-[0.98] group cursor-pointer text-left`}
        >
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            <span className="text-3xl p-3 bg-orange-500/15 dark:bg-orange-500/25 rounded-2xl border border-orange-500/30 shrink-0">
              🧠
            </span>
            <div className="min-w-0 flex-1 pr-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-base sm:text-lg block group-hover:text-orange-600 dark:group-hover:text-orange-400 transition truncate">
                  Kelime Defterim
                </span>
                <span className="bg-orange-500/20 text-orange-700 dark:text-orange-300 text-[10px] font-black px-2 py-0.5 rounded-full uppercase whitespace-nowrap">
                  Leitner SRS
                </span>
                {dueCount > 0 && (
                  <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse whitespace-nowrap">
                    {dueCount} TEKRAR!
                  </span>
                )}
              </div>
              <p className="text-xs opacity-75 font-medium mt-1 leading-snug">
                5 aşamalı aralıklı tekrar sistemi, dinleme sınavları ve kutu ilerlemesi
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-orange-600 dark:text-orange-400">
                <span>{savedWordsCount} Kelime Kayıtlı</span>
                <span>•</span>
                <span>Hafıza İlerlemesi</span>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* 2. KALIP VE DEYİM KARTLARI */}
        <button
          onClick={onOpenPhraseCards}
          className={`w-full ${themeStyle.card} border-2 border-sky-500/60 dark:border-sky-500/70 p-4 sm:p-5 rounded-3xl flex items-center justify-between hover:border-sky-400 shadow-md hover:shadow-lg transition active:scale-[0.98] group cursor-pointer text-left`}
        >
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            <span className="text-3xl p-3 bg-sky-500/15 dark:bg-sky-500/25 rounded-2xl border border-sky-500/30 shrink-0">
              🎯
            </span>
            <div className="min-w-0 flex-1 pr-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-base sm:text-lg block group-hover:text-sky-600 dark:group-hover:text-sky-400 transition truncate">
                  Kalıp & Deyim Kartları
                </span>
                <span className="bg-sky-500/20 text-sky-700 dark:text-sky-300 text-[10px] font-black px-2 py-0.5 rounded-full uppercase whitespace-nowrap">
                  100+ Kalıp
                </span>
              </div>
              <p className="text-xs opacity-75 font-medium mt-1 leading-snug">
                A1-B2 seviyeli günlük konuşma kalıpları, phrasal verbs ve telaffuz kartları
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-sky-600 dark:text-sky-400">
                <span>Pratik Kartlar</span>
                <span>•</span>
                <span>Sesli Dinleme</span>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* 3. EŞ & ZIT ANLAMLAR */}
        <button
          onClick={onOpenWordRelations}
          className={`w-full ${themeStyle.card} border-2 border-violet-500/60 dark:border-violet-500/70 p-4 sm:p-5 rounded-3xl flex items-center justify-between hover:border-violet-400 shadow-md hover:shadow-lg transition active:scale-[0.98] group cursor-pointer text-left`}
        >
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            <span className="text-3xl p-3 bg-violet-500/15 dark:bg-violet-500/25 rounded-2xl border border-violet-500/30 shrink-0">
              🔄
            </span>
            <div className="min-w-0 flex-1 pr-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-base sm:text-lg block group-hover:text-violet-600 dark:group-hover:text-violet-400 transition truncate">
                  Eş & Zıt Anlamlar
                </span>
                <span className="bg-violet-500/20 text-violet-700 dark:text-violet-300 text-[10px] font-black px-2 py-0.5 rounded-full uppercase whitespace-nowrap">
                  Zıt & Eş
                </span>
              </div>
              <p className="text-xs opacity-75 font-medium mt-1 leading-snug">
                Akıllı zıt ve eş anlam ilişkileri, bağlam cümleleri ve karşılaştırmalı hafıza
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-violet-600 dark:text-violet-400">
                <span>İlişkisel Hafıza</span>
                <span>•</span>
                <span>Örnek Cümleler</span>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-violet-500/15 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:text-white transition shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* ALT BİLGİ / MOTİVASYON */}
      <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 text-center mt-auto border border-black/5 dark:border-white/5">
        <span className="text-xs font-semibold opacity-70">
          💡 Bir kelimeyi kalıcı öğrenmek için onu 5 kez farklı aralıklarla tekrar edin.
        </span>
      </div>
    </div>
  );
};
