import React, { useMemo } from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { getWordRelations } from '../wordRelations';

interface VocabTestViewProps {
  vocabQuestions: any[];
  vocabTestFinished: boolean;
  currentVocabIdx: number;
  isListeningMode: boolean;
  setIsListeningMode: (val: boolean) => void;
  speak: (text: string) => void;
  selectedVocabOption: number | null;
  handleVocabAnswer: (idx: number) => void;
  vocabScore: number;
  vocabHistory: any[];
  handleHeaderBack: () => void;
  getBoxStyle: (b?: number) => string;
  getBadgeStyle: (lvl?: string) => string;
  themeStyle: ThemeClasses;
}

export const VocabTestView: React.FC<VocabTestViewProps> = ({
  vocabQuestions,
  vocabTestFinished,
  currentVocabIdx,
  isListeningMode,
  setIsListeningMode,
  speak,
  selectedVocabOption,
  handleVocabAnswer,
  vocabScore,
  vocabHistory,
  handleHeaderBack,
  getBoxStyle,
  getBadgeStyle,
  themeStyle,
}) => {
  if (!vocabQuestions || vocabQuestions.length === 0) return null;

  const activeRelations = useMemo(() => {
    const qWord = vocabQuestions[currentVocabIdx]?.word;
    return qWord ? getWordRelations(qWord) : null;
  }, [vocabQuestions, currentVocabIdx]);

  return (
    <div className="flex-1 flex flex-col p-6">
      {!vocabTestFinished ? (
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold opacity-60">Soru {currentVocabIdx + 1} / {vocabQuestions.length}</span>
            
            <button
              onClick={() => {
                const next = !isListeningMode;
                setIsListeningMode(next);
                if (next && vocabQuestions[currentVocabIdx]) {
                  speak(vocabQuestions[currentVocabIdx].word);
                }
              }}
              className={`px-3 py-1 rounded-full text-xs font-bold transition flex items-center gap-1.5 shadow-sm ${isListeningMode ? 'bg-indigo-600 text-white ring-2 ring-indigo-400' : 'bg-black/15 text-slate-300 hover:bg-black/25'}`}
            >
              <span>🎧</span> Dinleme Modu: {isListeningMode ? 'Açık' : 'Kapalı'}
            </button>
          </div>

          <div className="flex justify-end gap-1.5 mb-2">
            <span className={`px-2 py-0.5 rounded border text-[10px] ${getBoxStyle(vocabQuestions[currentVocabIdx]?.currentBox)}`}>
              Mevcut: Kutu {vocabQuestions[currentVocabIdx]?.currentBox}
            </span>
            <span className={`px-1.5 py-0.5 rounded border text-[10px] ${getBadgeStyle(vocabQuestions[currentVocabIdx]?.level)}`}>
              {vocabQuestions[currentVocabIdx]?.level || 'B1'}
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center mb-6">
            <span className="text-xs text-indigo-700 font-bold uppercase tracking-wider mb-2">
              {isListeningMode ? "Duyduğunuz kelimenin anlamı nedir?" : "Bu kelimenin anlamı nedir?"}
            </span>

            {isListeningMode ? (
              <div className="text-center my-2">
                <button 
                  onClick={() => speak(vocabQuestions[currentVocabIdx]?.word)} 
                  className="w-20 h-20 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-full flex items-center justify-center text-3xl shadow-xl mx-auto mb-2.5 transition animate-pulse"
                  title="Tekrar Dinle"
                >
                  🔊
                </button>
                <span className="text-xs opacity-70 font-bold block">Dinlemek için dokunun</span>
                {selectedVocabOption !== null && (
                  <span className="text-2xl font-black mt-2 block text-indigo-400 tracking-wide">
                    {vocabQuestions[currentVocabIdx]?.word}
                  </span>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-black text-center flex items-center justify-center gap-2">
                  {vocabQuestions[currentVocabIdx]?.word || ''}
                  <button onClick={() => speak(vocabQuestions[currentVocabIdx]?.word)} className="text-lg text-indigo-600">🔊</button>
                </h2>
                {vocabQuestions[currentVocabIdx]?.wordObj?.contextEng && (
                  <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-indigo-50/90 border border-indigo-200/70 text-xs text-center max-w-xs mx-auto shadow-2xs">
                    <span className="text-[10px] font-bold text-indigo-700 block uppercase tracking-wider mb-0.5">
                      💡 Cümle İçi Bağlamı:
                    </span>
                    <p className="italic text-slate-700 font-serif leading-relaxed">
                      "{vocabQuestions[currentVocabIdx].wordObj.contextEng}"
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-2.5 mb-8">
            {(vocabQuestions[currentVocabIdx]?.options || []).map((opt: string, idx: number) => {
              const isSelected = selectedVocabOption === idx;
              const isCorrect = idx === vocabQuestions[currentVocabIdx].correctIndex;
              let btnClass = `w-full ${themeStyle.card} p-3.5 rounded-2xl border-2 text-base font-semibold text-center transition shadow-sm flex items-center justify-between px-4 `;

              if (selectedVocabOption === null) {
                btnClass += "border-indigo-100 hover:border-indigo-400 active:scale-[0.98]";
              } else {
                if (isCorrect) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                } else if (isSelected && !isCorrect) {
                  btnClass += "border-rose-500 bg-rose-50 text-rose-950 font-bold";
                } else {
                  btnClass += "border-slate-100 opacity-40";
                }
              }

              return (
                <button 
                  key={idx} 
                  disabled={selectedVocabOption !== null} 
                  onClick={() => handleVocabAnswer(idx)} 
                  className={btnClass}
                >
                  <span className="flex-1 text-center">{opt}</span>
                  {selectedVocabOption !== null && isCorrect && (
                    <span className="text-xs text-emerald-700 font-black shrink-0 ml-2">
                      {vocabQuestions[currentVocabIdx].currentBox < 5 ? `+1 Kutu 🚀` : `Usta ⭐`}
                    </span>
                  )}
                  {selectedVocabOption !== null && isSelected && !isCorrect && (
                    <span className="text-xs text-rose-700 font-black shrink-0 ml-2">1. Kutu ⚠️</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ACTIVE RELATIONS CALLOUT (EŞ & ZIT ANLAMLILAR) */}
          {selectedVocabOption !== null && activeRelations && (activeRelations.synonyms.length > 0 || activeRelations.antonyms.length > 0) && (
            <div className="p-3 rounded-2xl bg-indigo-50/90 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/80 text-left space-y-2 animate-fadeIn mb-4">
              <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                <span>🔄 Eş & ⚡ Zıt Anlam Bağlantıları</span>
                <span className="text-[10px] text-slate-500 font-semibold">{activeRelations.category}</span>
              </div>
              {activeRelations.synonyms.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap text-xs">
                  <span className="text-emerald-700 dark:text-emerald-400 font-black text-[11px]">Eş:</span>
                  {activeRelations.synonyms.map((s, idx) => (
                    <span key={idx} className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-950 dark:text-emerald-200 px-2 py-0.5 rounded-md font-bold text-[11px] border border-emerald-300/60 dark:border-emerald-800/60">
                      {s.word} <span className="opacity-75 font-normal">({s.tr})</span>
                    </span>
                  ))}
                </div>
              )}
              {activeRelations.antonyms.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap text-xs">
                  <span className="text-amber-700 dark:text-amber-400 font-black text-[11px]">Zıt:</span>
                  {activeRelations.antonyms.map((a, idx) => (
                    <span key={idx} className="bg-amber-100 dark:bg-amber-900/40 text-amber-950 dark:text-amber-200 px-2 py-0.5 rounded-md font-bold text-[11px] border border-amber-300/60 dark:border-amber-800/60">
                      {a.word} <span className="opacity-75 font-normal">({a.tr})</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex flex-col p-2 space-y-4 overflow-y-auto">
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center shadow-inner mx-auto mb-2">
              <span className="text-3xl">🎉</span>
            </div>
            <h2 className="text-xl font-black">Aralıklı Tekrar Tamamlandı!</h2>
            <p className="text-xs opacity-70 mt-0.5">
              Başarı: <strong className="text-indigo-700 font-bold text-sm">{vocabScore} / {vocabQuestions.length}</strong>
            </p>
          </div>

          <div className={`${themeStyle.card} p-3 rounded-2xl border space-y-2 max-h-64 overflow-y-auto`}>
            <span className="text-[10px] font-bold opacity-60 uppercase tracking-wider block border-b pb-1">
              Kelime Aşamaları Güncellendi:
            </span>
            {vocabHistory.map((item, hIdx) => (
              <div key={hIdx} className="flex justify-between items-center text-xs py-1 border-b border-black/5 last:border-0">
                <span className="font-bold">{item.word}</span>
                <div className="flex items-center gap-1.5 font-semibold">
                  <span className="text-[10px] opacity-60">Kutu {item.oldBox}</span>
                  <span>➔</span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${getBoxStyle(item.newBox)}`}>
                    Kutu {item.newBox}
                  </span>
                  <span>{item.isCorrect ? '✅' : '❌'}</span>
                </div>
              </div>
            ))}
          </div>

          <button onClick={handleHeaderBack} className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3.5 rounded-xl font-bold text-sm shadow-md">
            Kelime Defterine Dön
          </button>
        </div>
      )}
    </div>
  );
};
