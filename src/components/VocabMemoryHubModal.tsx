import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { Bookmark, Sparkles, ArrowLeftRight, ArrowRight, X, Brain } from 'lucide-react';

interface VocabMemoryHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedWordsCount: number;
  dueCount: number;
  onOpenSavedWords: () => void;
  onOpenPhraseCards: () => void;
  onOpenWordRelations: () => void;
  themeStyle: ThemeClasses;
}

export const VocabMemoryHubModal: React.FC<VocabMemoryHubModalProps> = ({
  isOpen,
  onClose,
  savedWordsCount,
  dueCount,
  onOpenSavedWords,
  onOpenPhraseCards,
  onOpenWordRelations,
  themeStyle,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-100 max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-orange-950/30 to-slate-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-xl text-orange-400">
              <Brain className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-1.5">
                <span>Kelime & Hafıza Merkezi</span>
              </h2>
              <p className="text-xs text-slate-400">Kalıcı öğrenme & hafıza pekiştirme araçları</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* 3 CORE VOCABULARY TOOLS */}
        <div className="p-4 space-y-3 overflow-y-auto">
          {/* 1. KELİME DEFTERİM (LEITNER SRS) */}
          <button
            onClick={() => {
              onClose();
              onOpenSavedWords();
            }}
            className="w-full text-left p-4 rounded-2xl bg-gradient-to-br from-orange-950/40 via-slate-950/80 to-slate-900 border-2 border-orange-500/50 hover:border-orange-400 transition shadow-md active:scale-[0.98] group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 bg-orange-500/20 rounded-2xl border border-orange-500/30 shrink-0">
                  🧠
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-base text-white group-hover:text-orange-300 transition">
                      Kelime Defterim
                    </span>
                    <span className="bg-orange-500/20 text-orange-300 border border-orange-500/40 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                      Leitner SRS
                    </span>
                    {dueCount > 0 && (
                      <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse">
                        {dueCount} TEKRAR!
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-medium leading-snug">
                    5 aşamalı aralıklı tekrar algoritması ve dinlemeli kelime testleri
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-extrabold text-orange-400">
                    {savedWordsCount} Kayıtlı Kelime ➔
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* 2. KALIP VE DEYİM KARTLARI */}
          <button
            onClick={() => {
              onClose();
              onOpenPhraseCards();
            }}
            className="w-full text-left p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-950/80 to-slate-900 border-2 border-amber-500/50 hover:border-amber-400 transition shadow-md active:scale-[0.98] group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 bg-amber-500/20 rounded-2xl border border-amber-500/30 shrink-0">
                  🎯
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-base text-white group-hover:text-amber-300 transition">
                      Kalıp & Deyim Kartları
                    </span>
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                      Phrasal Verbs
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-medium leading-snug">
                    Sık kullanılan İngilizce deyimler, phrasal verb'ler ve akademik ifadeler
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-extrabold text-amber-400">
                    Kartları Çevir & İncele ➔
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* 3. EŞ & ZIT ANLAMLILAR (SYNONYMS & ANTONYMS) */}
          <button
            onClick={() => {
              onClose();
              onOpenWordRelations();
            }}
            className="w-full text-left p-4 rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-950/80 to-slate-900 border-2 border-teal-500/50 hover:border-teal-400 transition shadow-md active:scale-[0.98] group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 bg-teal-500/20 rounded-2xl border border-teal-500/30 shrink-0">
                  🔄
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-base text-white group-hover:text-teal-300 transition">
                      Eş & Zıt Anlamlar
                    </span>
                    <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                      Synonyms & Antonyms
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-medium leading-snug">
                    İkili bağlantılarla kelime hazinesini 2 kat hızlı genişletin ve test çözün
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-extrabold text-teal-400">
                    Sözlüğü Aç & Test Çöz ➔
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* BOTTOM NOTE */}
        <div className="p-3 bg-slate-950/70 border-t border-slate-800 text-center text-[11px] text-slate-400">
          💡 Metin okurken kelimelere tıklayarak da doğrudan deftere ekleyebilirsiniz.
        </div>
      </div>
    </div>
  );
};
