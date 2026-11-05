import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';

interface SavedWordsViewProps {
  themeStyle: ThemeClasses;
  filteredSavedWords: any[];
  savedWords: any[];
  dueCount: number;
  openBackupModal: () => void;
  startVocabTest: (onlyDue?: boolean) => void;
  wordFilterBox: string;
  setWordFilterBox: (box: string) => void;
  wordFilterLevel: string;
  setWordFilterLevel: (lvl: string) => void;
  getBoxStyle: (b?: number) => string;
  getBadgeStyle: (lvl?: string) => string;
  isDue: (w: any) => boolean;
  formatReviewTime: (nextReview?: number) => string;
  speak: (text: string) => void;
  toggleSaveWord: (wordObj: any, chosenLevel?: string) => void;
}

export const SavedWordsView: React.FC<SavedWordsViewProps> = ({
  themeStyle,
  filteredSavedWords,
  savedWords,
  dueCount,
  openBackupModal,
  startVocabTest,
  wordFilterBox,
  setWordFilterBox,
  wordFilterLevel,
  setWordFilterLevel,
  getBoxStyle,
  getBadgeStyle,
  isDue,
  formatReviewTime,
  speak,
  toggleSaveWord,
}) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className={`p-4 ${themeStyle.card} border-b shrink-0 space-y-3`}>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold flex items-center gap-1.5">
              <span>Leitner Kelime Sistemi</span>
              <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-md">SRS</span>
            </h3>
            <p className="text-xs opacity-60 font-medium">{filteredSavedWords.length} kelime listeleniyor</p>
          </div>
          <div className="flex gap-1.5">
            <button 
              onClick={openBackupModal}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl font-bold text-xs bg-slate-800 text-white shadow"
              title="Veri Yedekleme & Geri Yükleme"
            >
              💾 Yedek
            </button>
            <button 
              onClick={() => startVocabTest(false)} 
              disabled={savedWords.length === 0}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs ${savedWords.length === 0 ? 'bg-slate-200 text-slate-400' : 'bg-indigo-700 text-white shadow'}`}
            >
              <span>🎲</span> Test
            </button>
          </div>
        </div>

        <button
          onClick={() => startVocabTest(true)}
          disabled={dueCount === 0}
          className={`w-full py-3 rounded-2xl font-black text-xs flex items-center justify-between px-4 transition shadow-md active:scale-[0.98] ${dueCount > 0 ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white ring-2 ring-emerald-400 ring-offset-1' : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'}`}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{dueCount > 0 ? '⚡' : '☕'}</span>
            <span>{dueCount > 0 ? "Vakti Gelenleri Tekrar Et" : "Bugün İçin Tüm Tekrarlar Tamam"}</span>
          </div>
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${dueCount > 0 ? 'bg-white text-emerald-800' : 'bg-slate-200 text-slate-500'}`}>
            {dueCount} Kelime
          </span>
        </button>

        <div>
          <span className="text-[10px] font-bold opacity-60 uppercase tracking-wider block mb-1">Aşama Filtresi (Kutu)</span>
          <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setWordFilterBox('ALL')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 transition ${wordFilterBox === 'ALL' ? 'bg-indigo-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
              Tümü ({savedWords.length})
            </button>
            {[1, 2, 3, 4, 5].map(b => {
              const count = savedWords.filter(w => w.box === b).length;
              return (
                <button
                  key={b}
                  onClick={() => setWordFilterBox(String(b))}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 border transition flex items-center gap-1 ${wordFilterBox === String(b) ? 'border-slate-800 ring-1 ring-slate-800 ' + getBoxStyle(b) : 'bg-white text-slate-600 border-slate-200'}`}
                >
                  <span>Kutu {b}</span>
                  <span className="text-[10px] opacity-75 font-normal">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pt-1">
          {['ALL', 'A1', 'A2', 'B1', 'B2'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setWordFilterLevel(lvl)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 transition ${wordFilterLevel === lvl ? 'bg-indigo-700 text-white shadow-sm' : 'bg-white text-slate-500 border border-slate-200'}`}
            >
              {lvl === 'ALL' ? 'Tüm Seviyeler' : lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4 space-y-2.5 overflow-y-auto">
        {filteredSavedWords.length === 0 ? (
          <div className="text-center opacity-50 mt-12">
            <p className="text-4xl mb-2">🏷️</p>
            <p className="text-sm font-medium">Bu filtreye uygun kayıtlı kelime bulunamadı.</p>
            <p className="text-xs opacity-75 mt-1">Metin okurken kelimelerin üzerine tıklayarak deftere ekleyebilirsin.</p>
          </div>
        ) : (
          filteredSavedWords.map((wordObj, idx) => {
            const due = isDue(wordObj);
            return (
              <div key={idx} className={`${themeStyle.card} p-3.5 rounded-2xl shadow-sm border transition flex justify-between items-center ${due ? 'border-rose-300 bg-rose-50/40' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-0.5">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border shadow-2xs ${getBoxStyle(wordObj.box || 1)}`}>
                      Kutu {wordObj.box || 1}
                    </span>
                    <span className={`text-[9px] font-bold px-1.5 rounded ${due ? 'text-rose-700 bg-rose-100 animate-pulse' : 'opacity-50'}`}>
                      {formatReviewTime(wordObj.nextReview)}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border ${getBadgeStyle(wordObj.level)}`}>
                        {wordObj.level || 'B1'}
                      </span>
                      <h4 className="font-bold text-base">{wordObj.original}</h4>
                      <button onClick={() => speak(wordObj.original)} className="text-xs text-indigo-600">🔊</button>
                    </div>
                    <p className="text-xs opacity-70 font-medium">{wordObj.translated || "(Çeviri yok)"}</p>
                    {wordObj.contextEng && (
                      <div className="mt-1 text-[11px] text-indigo-800 bg-indigo-50/70 rounded px-2 py-0.5 border border-indigo-100 font-serif italic">
                        "{wordObj.contextEng}"
                      </div>
                    )}
                  </div>
                </div>
                <button onClick={() => toggleSaveWord(wordObj, wordObj.level)} className="p-2 opacity-40 hover:text-red-500 text-sm">✕</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
