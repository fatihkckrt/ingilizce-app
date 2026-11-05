import React, { useMemo } from 'react';
import { getWordRelations } from '../wordRelations';

interface WordTranslationModalProps {
  selectedTranslation: {
    phrase?: { original: string; translated: string };
    word: { original: string; translated: string };
    context?: any;
  } | null;
  onClose: () => void;
  selectedLevelTag: string;
  setSelectedLevelTag: (lvl: string) => void;
  speak: (text: string) => void;
  toggleSaveWord: (wordObj: any, chosenLevel: string, contextData?: any) => void;
  isWordSaved: (wordStr: string) => boolean;
  getSavedWordInfo: (wordStr: string) => any;
  isSearchingOnline: boolean;
  customWordInput: string;
  setCustomWordInput: (val: string) => void;
  onSaveCustomWord: (cleanTr: string) => void;
}

export const WordTranslationModal: React.FC<WordTranslationModalProps> = ({
  selectedTranslation,
  onClose,
  selectedLevelTag,
  setSelectedLevelTag,
  speak,
  toggleSaveWord,
  isWordSaved,
  getSavedWordInfo,
  isSearchingOnline,
  customWordInput,
  setCustomWordInput,
  onSaveCustomWord,
}) => {
  if (!selectedTranslation) return null;

  const relations = useMemo(() => {
    return getWordRelations(selectedTranslation?.word?.original);
  }, [selectedTranslation?.word?.original]);

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-slate-700 text-white relative"
        style={{ backgroundColor: '#0f172a' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition"
        >
          ✕
        </button>

        <div className="mb-4 flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase text-slate-400">Seviye Etiketi:</span>
          <div className="flex gap-1.5">
            {['A1', 'A2', 'B1', 'B2'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevelTag(lvl)}
                className={`text-xs font-black px-2.5 py-1 rounded-lg border transition ${selectedLevelTag === lvl ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'}`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {selectedTranslation.phrase && (
          <div className="mb-3.5 pb-3.5 border-b border-slate-800 pr-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] text-indigo-400 font-extrabold uppercase tracking-wider">Kelime Grubu</span>
              <button onClick={() => speak(selectedTranslation.phrase!.original)} className="text-xs text-indigo-300">🔊</button>
            </div>
            <div className="text-lg font-bold text-white leading-snug">{selectedTranslation.phrase.original}</div>
            <div className="text-sm text-indigo-200 mt-0.5 mb-2.5 font-medium">{selectedTranslation.phrase.translated}</div>
            <button
              onClick={() => toggleSaveWord(selectedTranslation.phrase, selectedLevelTag, selectedTranslation.context)}
              className={`text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition ${isWordSaved(selectedTranslation.phrase.original) ? 'bg-emerald-600 text-white shadow' : 'bg-indigo-700 hover:bg-indigo-600 text-white'}`}
            >
              {isWordSaved(selectedTranslation.phrase.original) 
                ? `⭐ [Kutu ${getSavedWordInfo(selectedTranslation.phrase.original)?.box || 1}] Defterde Kayıtlı` 
                : `🔖 ${selectedLevelTag} Olarak Deftere Ekle`}
            </button>
          </div>
        )}

        <div className="pr-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
              {selectedTranslation.phrase ? "Tıkladığınız Kelime" : "Kelime Çevirisi"}
            </span>
            <button onClick={() => speak(selectedTranslation.word.original)} className="text-xs text-slate-300">🔊</button>
          </div>
          <div className="text-base font-bold text-slate-100">{selectedTranslation.word.original}</div>
          
          {selectedTranslation.word.translated ? (
            <>
              <div className="text-sm text-slate-300 mt-0.5 mb-2.5 font-medium">
                {selectedTranslation.word.translated}
              </div>
              <button
                onClick={() => toggleSaveWord(selectedTranslation.word, selectedLevelTag, selectedTranslation.context)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition ${isWordSaved(selectedTranslation.word.original) ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200'}`}
              >
                {isWordSaved(selectedTranslation.word.original) 
                  ? `⭐ [Kutu ${getSavedWordInfo(selectedTranslation.word.original)?.box || 1}] Defterde Kayıtlı` 
                  : `🔖 ${selectedLevelTag} Olarak Deftere Ekle`}
              </button>

              {/* SYNONYMS & ANTONYMS SECTION */}
              {relations && (relations.synonyms.length > 0 || relations.antonyms.length > 0) && (
                <div className="mt-3.5 pt-3 border-t border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-indigo-400 font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <span>🔄 Eş & ⚡ Zıt Anlamlar</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold bg-slate-800 px-2 py-0.5 rounded">
                      {relations.category}
                    </span>
                  </div>

                  {relations.synonyms.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] text-emerald-400 font-black tracking-wide block">
                        🔄 Eş Anlamlılar (Synonyms):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {relations.synonyms.map((syn, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-xl text-xs"
                          >
                            <span className="font-bold text-emerald-200">{syn.word}</span>
                            <span className="text-[10px] text-emerald-400/80">({syn.tr})</span>
                            <button 
                              onClick={() => speak(syn.word)} 
                              className="text-emerald-300 hover:text-white p-0.5" 
                              title="Dinle"
                            >
                              🔊
                            </button>
                            <button 
                              onClick={() => toggleSaveWord({ original: syn.word, translated: syn.tr }, syn.level || selectedLevelTag)}
                              className="text-emerald-300 hover:text-white p-0.5"
                              title={isWordSaved(syn.word) ? "Defterde Kayıtlı" : "Deftere Ekle"}
                            >
                              {isWordSaved(syn.word) ? "⭐" : "🔖"}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {relations.antonyms.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] text-amber-400 font-black tracking-wide block">
                        ⚡ Zıt Anlamlılar (Antonyms):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {relations.antonyms.map((ant, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-1.5 bg-amber-950/60 border border-amber-800/60 px-2.5 py-1 rounded-xl text-xs"
                          >
                            <span className="font-bold text-amber-200">{ant.word}</span>
                            <span className="text-[10px] text-amber-400/80">({ant.tr})</span>
                            <button 
                              onClick={() => speak(ant.word)} 
                              className="text-amber-300 hover:text-white p-0.5" 
                              title="Dinle"
                            >
                              🔊
                            </button>
                            <button 
                              onClick={() => toggleSaveWord({ original: ant.word, translated: ant.tr }, ant.level || selectedLevelTag)}
                              className="text-amber-300 hover:text-white p-0.5"
                              title={isWordSaved(ant.word) ? "Defterde Kayıtlı" : "Deftere Ekle"}
                            >
                              {isWordSaved(ant.word) ? "⭐" : "🔖"}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : isSearchingOnline ? (
            <div className="mt-3 flex items-center gap-2.5 py-2 px-3 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <span className="inline-block w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></span>
              <span>Çevrimiçi sözlük taranıyor...</span>
            </div>
          ) : (
            <div className="mt-2.5 space-y-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
              <p className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
                <span>💡</span> Yerel sözlükte bulunamadı. Anlamını girip deftere ekleyebilirsiniz:
              </p>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="Kelimenin Türkçe karşılığı..."
                  value={customWordInput}
                  onChange={(e) => setCustomWordInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customWordInput.trim()) {
                      onSaveCustomWord(customWordInput.trim().toLowerCase());
                    }
                  }}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
                />
                <button
                  onClick={() => {
                    if (customWordInput.trim()) {
                      onSaveCustomWord(customWordInput.trim().toLowerCase());
                    }
                  }}
                  disabled={!customWordInput.trim()}
                  className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-xl text-xs font-bold shrink-0 shadow transition"
                >
                  💾 Kaydet
                </button>
              </div>
              <div className="flex gap-2 pt-1 border-t border-slate-700/60">
                <a
                  href={`https://translate.google.com/?sl=en&tl=tr&text=${encodeURIComponent(selectedTranslation.word.original)}&op=translate`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-slate-900 hover:bg-slate-700 border border-slate-700 text-indigo-300 px-3 py-1.5 rounded-lg flex items-center gap-1 font-bold transition"
                >
                  🌐 Google Çeviri
                </a>
                <a
                  href={`https://tureng.com/tr/turkce-ingilizce/${encodeURIComponent(selectedTranslation.word.original)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-slate-900 hover:bg-slate-700 border border-slate-700 text-amber-300 px-3 py-1.5 rounded-lg flex items-center gap-1 font-bold transition"
                >
                  📖 Tureng
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
