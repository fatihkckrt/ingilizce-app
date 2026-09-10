import React, { useState, useMemo } from 'react';
import type { PhraseInfo, CEFRLevel, PhraseCategory } from '../types';
import { getAllPhrasesList } from '../data';
import { Volume2, BookmarkPlus, Check, Search, Filter } from 'lucide-react';

interface PhraseCardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSavePhrase: (phrase: string, info: PhraseInfo) => void;
  savedPhrasesSet: Set<string>;
  onSpeak: (text: string) => void;
}

export const PhraseCardsModal: React.FC<PhraseCardsModalProps> = ({
  isOpen,
  onClose,
  onSavePhrase,
  savedPhrasesSet,
  onSpeak,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'ALL'>('ALL');
  const [selectedType, setSelectedType] = useState<PhraseCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'cards' | 'saved'>('cards');

  const allPhrases = useMemo(() => {
    return getAllPhrasesList();
  }, []);

  const filteredPhrases = useMemo(() => {
    return allPhrases.filter(p => {
      if (selectedLevel !== 'ALL' && p.level !== selectedLevel) return false;
      if (selectedType !== 'ALL' && p.type !== selectedType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchPhrase = p.phrase.toLowerCase().includes(q);
        const matchTr = p.tr.toLowerCase().includes(q);
        const matchEx = p.ex?.toLowerCase().includes(q);
        if (!matchPhrase && !matchTr && !matchEx) return false;
      }
      if (activeTab === 'saved') {
        return savedPhrasesSet.has(p.phrase.toLowerCase());
      }
      return true;
    });
  }, [allPhrases, selectedLevel, selectedType, searchQuery, activeTab, savedPhrasesSet]);

  if (!isOpen) return null;

  const getTypeBadge = (type: PhraseCategory) => {
    switch (type) {
      case 'phrasal':
        return { label: 'Deyimsel Fiil (Phrasal)', bg: 'bg-amber-100 text-amber-900 border-amber-300' };
      case 'idiom':
        return { label: 'Deyim (Idiom)', bg: 'bg-purple-100 text-purple-900 border-purple-300' };
      case 'collocation':
        return { label: 'Kalıp (Collocation)', bg: 'bg-blue-100 text-blue-900 border-blue-300' };
      case 'academic':
        return { label: 'Akademik İfade', bg: 'bg-emerald-100 text-emerald-900 border-emerald-300' };
      default:
        return { label: 'Kalıp', bg: 'bg-slate-100 text-slate-800 border-slate-300' };
    }
  };

  const getLevelBadge = (lvl: CEFRLevel) => {
    switch (lvl) {
      case 'A1': return 'bg-emerald-500 text-white';
      case 'A2': return 'bg-sky-500 text-white';
      case 'B1': return 'bg-amber-500 text-white';
      case 'B2': return 'bg-rose-500 text-white';
      default: return 'bg-indigo-500 text-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 animate-fadeIn">
      <div className="bg-slate-900 text-slate-100 w-full max-w-2xl max-h-[90vh] rounded-3xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl p-2 bg-amber-400/10 border border-amber-400/20 rounded-2xl">🎯</span>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">Kalıp & Deyim Kartları Stüdyosu</h3>
              <p className="text-xs text-slate-400">Metinlerde geçen tüm phrasal verb, deyim ve kalıplar</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm transition"
          >
            ✕
          </button>
        </div>

        {/* Filter Controls */}
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex flex-col gap-2.5">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Kalıp veya Türkçe anlam ara... (örn: give up, decision fatigue)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-800 text-xs text-white rounded-xl border border-slate-700 focus:outline-none focus:border-amber-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs">
            {/* Level Selector */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase mr-1">Seviye:</span>
              {(['ALL', 'A1', 'A2', 'B1', 'B2'] as const).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-bold border transition ${
                    selectedLevel === lvl
                      ? 'bg-amber-400 border-amber-300 text-amber-950 shadow-xs'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  {lvl === 'ALL' ? 'Tümü' : lvl}
                </button>
              ))}
            </div>

            {/* Type Selector */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase mr-1">Tür:</span>
              {(['ALL', 'phrasal', 'idiom', 'collocation', 'academic'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-bold border transition ${
                    selectedType === t
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-xs'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  {t === 'ALL' ? 'Tümü' : t === 'phrasal' ? 'Phrasal' : t === 'idiom' ? 'Deyim' : t === 'collocation' ? 'Kalıp' : 'Akademik'}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 pt-1 border-t border-slate-800">
            <button
              onClick={() => setActiveTab('cards')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${
                activeTab === 'cards'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📚 Tüm Kalıplar ({allPhrases.length})
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${
                activeTab === 'saved'
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ⭐ Kaydettiklerim ({savedPhrasesSet.size})
            </button>
          </div>
        </div>

        {/* Phrases List Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredPhrases.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs">
              <p className="text-3xl mb-2">🔍</p>
              <p className="font-semibold">Seçilen kriterlere uygun kalıp bulunamadı.</p>
            </div>
          ) : (
            filteredPhrases.map((item) => {
              const isSaved = savedPhrasesSet.has(item.phrase.toLowerCase());
              const typeBadge = getTypeBadge(item.type);
              const levelBadge = getLevelBadge(item.level);

              return (
                <div
                  key={item.phrase}
                  className="bg-slate-800/90 border border-slate-700 hover:border-amber-400/60 p-3.5 rounded-2xl shadow-sm transition flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${levelBadge}`}>
                          {item.level}
                        </span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${typeBadge.bg}`}>
                          {typeBadge.label}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                        {item.phrase}
                        <button
                          onClick={() => onSpeak(item.phrase)}
                          className="text-amber-400 hover:text-amber-300 p-1 rounded-md hover:bg-slate-700 transition"
                          title="Telaffuz et"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </h4>
                    </div>

                    <button
                      onClick={() => onSavePhrase(item.phrase, item)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 shrink-0 ${
                        isSaved
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-400 hover:bg-amber-300 text-amber-950 shadow-xs'
                      }`}
                      title={isSaved ? "Zaten Leitner Defterinizde" : "Leitner Kelime Defterine Ekle"}
                    >
                      {isSaved ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Eklendi</span>
                        </>
                      ) : (
                        <>
                          <BookmarkPlus className="w-3.5 h-3.5" />
                          <span>Deftere Ekle</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Türkçe Karşılık */}
                  <div className="text-xs font-semibold text-amber-300/90 bg-slate-900/60 p-2 rounded-xl border border-slate-750">
                    🇹🇷 {item.tr}
                  </div>

                  {/* Örnek Cümle */}
                  {item.ex && (
                    <div className="text-[11px] text-slate-300 italic bg-slate-900/40 p-2 rounded-xl border border-slate-800 flex items-start justify-between gap-2">
                      <span>"{item.ex}"</span>
                      <button
                        onClick={() => onSpeak(item.ex)}
                        className="text-slate-400 hover:text-white shrink-0"
                        title="Cümleyi dinle"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 text-center text-slate-400 text-[11px] flex justify-between items-center px-5">
          <span>Toplam {filteredPhrases.length} kalıp listeleniyor</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xs transition"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
