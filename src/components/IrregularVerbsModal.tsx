import React, { useState, useMemo } from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { IRREGULAR_VERBS } from '../grammarData';
import { X, Search, Volume2, BookMarked } from 'lucide-react';

interface IrregularVerbsModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeStyle: ThemeClasses;
  speak: (text: string) => void;
  initialLevel?: 'ALL' | 'A1' | 'A2' | 'B1' | 'B2';
}

export const IrregularVerbsModal: React.FC<IrregularVerbsModalProps> = ({
  isOpen,
  onClose,
  themeStyle,
  speak,
  initialLevel = 'ALL',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<'ALL' | 'A1' | 'A2' | 'B1' | 'B2'>(initialLevel);
  const [expandedVerb, setExpandedVerb] = useState<string | null>(null);

  const filteredVerbs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return IRREGULAR_VERBS.filter((verb) => {
      if (levelFilter !== 'ALL' && verb.level !== levelFilter) return false;
      if (!q) return true;
      return (
        verb.v1.toLowerCase().includes(q) ||
        verb.v2.toLowerCase().includes(q) ||
        verb.v3.toLowerCase().includes(q) ||
        verb.tr.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, levelFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className={`w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl ${themeStyle.card} border border-teal-500/30 shadow-2xl overflow-hidden`}
      >
        {/* Başlık */}
        <div className="p-4 sm:p-5 border-b border-black/10 dark:border-white/10 flex items-center justify-between bg-gradient-to-r from-teal-500/15 via-emerald-500/10 to-transparent">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-sm">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                Düzensiz Fiiller Sözlüğü (V1 • V2 • V3)
              </h3>
              <p className="text-[11px] font-medium opacity-75">
                {IRREGULAR_VERBS.length} temel düzensiz fiil, Türkçe anlamları ve sesli telaffuz
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-rose-500/20 hover:text-rose-600 transition cursor-pointer"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Arama ve Seviye Filtresi */}
        <div className="p-3 sm:p-4 border-b border-black/5 dark:border-white/5 space-y-2.5 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Fiil veya Türkçe anlam ara (ör: go, went, gitmek)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {(['ALL', 'A1', 'A2', 'B1', 'B2'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`px-3 py-1 rounded-xl text-[11px] font-black transition cursor-pointer border ${
                    levelFilter === lvl
                      ? 'bg-teal-600 text-white border-teal-700 shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-teal-400'
                  }`}
                >
                  {lvl === 'ALL' ? `Tümü (${IRREGULAR_VERBS.length})` : lvl}
                </button>
              ))}
            </div>
            <span className="text-[11px] font-bold opacity-60">
              {filteredVerbs.length} fiil listeleniyor
            </span>
          </div>
        </div>

        {/* Fiil Listesi */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
          {filteredVerbs.length === 0 ? (
            <div className="text-center py-10 opacity-60 space-y-1">
              <p className="text-sm font-bold">Aramanızla eşleşen düzensiz fiil bulunamadı.</p>
              <p className="text-xs">Farklı bir kelime veya seviye deneyin.</p>
            </div>
          ) : (
            filteredVerbs.map((verb) => {
              const isExpanded = expandedVerb === verb.v1;
              const cleanSpeech = `${verb.v1.replace(/\([^)]*\)/g, '')}, ${verb.v2.replace(/\([^)]*\)/g, '')}, ${verb.v3.replace(/\([^)]*\)/g, '')}`;
              return (
                <div
                  key={verb.v1}
                  className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-slate-900/50 hover:border-teal-500/40 transition overflow-hidden"
                >
                  <div
                    onClick={() => setExpandedVerb(isExpanded ? null : verb.v1)}
                    className="p-3 flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-teal-500/15 text-teal-700 dark:text-teal-300">
                          {verb.level}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                          {verb.v1}
                        </span>
                        <span className="text-slate-400 text-xs">➔</span>
                        <span className="text-xs sm:text-sm font-extrabold text-amber-700 dark:text-amber-300">
                          {verb.v2}
                        </span>
                        <span className="text-slate-400 text-xs">➔</span>
                        <span className="text-xs sm:text-sm font-extrabold text-indigo-700 dark:text-indigo-300">
                          {verb.v3}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {verb.tr}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono opacity-65">
                          {verb.pattern}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(cleanSpeech);
                      }}
                      className="p-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-700 dark:text-teal-300 transition shrink-0 cursor-pointer"
                      title="V1, V2, V3 Telaffuzunu Dinle"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="px-3 pb-3 pt-2 border-t border-black/5 dark:border-white/5 bg-teal-500/5 flex items-center justify-between gap-2 animate-fadeIn">
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                          "{verb.example}"
                        </p>
                        <p className="text-[11px] font-medium text-teal-700 dark:text-teal-300">
                          {verb.exampleTr}
                        </p>
                      </div>
                      <button
                        onClick={() => speak(verb.example)}
                        className="p-1.5 rounded-lg bg-white/80 dark:bg-slate-800 border border-black/10 dark:border-white/10 text-teal-600 shrink-0 cursor-pointer"
                        title="Örnek Cümleyi Dinle"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
