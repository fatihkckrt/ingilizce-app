import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';

interface TextQuizViewProps {
  activeText: any;
  themeStyle: ThemeClasses;
  quizAnswers: Record<number, number>;
  setQuizAnswers: React.Dispatch<React.SetStateAction<Record<number, number>>>;
  quizScore: number | null;
  checkTextQuiz: () => void;
  returnToLevelList: () => void;
}

export const TextQuizView: React.FC<TextQuizViewProps> = ({
  activeText,
  themeStyle,
  quizAnswers,
  setQuizAnswers,
  quizScore,
  checkTextQuiz,
  returnToLevelList,
}) => {
  if (!activeText?.questions) return null;

  return (
    <div className="flex-1 p-5 overflow-y-auto pb-10">
      <div className="text-center mb-5">
        <h2 className="text-lg font-bold">Okuduğunu Anlama Sınavı</h2>
        <p className="text-xs opacity-60 font-medium">Metne göre soruları cevaplayın</p>
      </div>
      <div className="space-y-4">
        {activeText.questions.map((q: any, qIdx: number) => (
          <div key={qIdx} className={`${themeStyle.card} p-4 rounded-2xl shadow-sm border`}>
            <p className="font-bold text-sm mb-3">{qIdx + 1}. {q.q}</p>
            <div className="space-y-2">
              {q.options.map((opt: string, oIdx: number) => {
                const isSelected = quizAnswers[qIdx] === oIdx;
                const showResult = quizScore !== null;
                const isCorrect = q.answer === oIdx;
                let btnClass = "w-full text-left p-3 rounded-xl border text-sm font-medium transition ";
                if (!showResult) {
                  btnClass += isSelected ? "border-indigo-600 bg-indigo-50 text-indigo-900 font-bold" : "border-slate-200 bg-white text-slate-700";
                } else {
                  if (isCorrect) btnClass += "border-green-500 bg-green-50 text-green-900 font-bold";
                  else if (isSelected && !isCorrect) btnClass += "border-red-500 bg-red-50 text-red-900";
                  else btnClass += "border-slate-200 opacity-40";
                }
                return (
                  <button 
                    key={oIdx} 
                    disabled={showResult}
                    onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }))}
                    className={btnClass}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {quizScore === null ? (
        <button 
          onClick={checkTextQuiz}
          disabled={Object.keys(quizAnswers).length < activeText.questions.length}
          className={`w-full mt-6 py-3.5 rounded-xl font-bold text-sm text-white transition shadow-md ${Object.keys(quizAnswers).length < activeText.questions.length ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-700 hover:bg-indigo-800'}`}
        >
          Cevapları Kontrol Et
        </button>
      ) : (
        <div className={`mt-6 ${themeStyle.card} p-5 rounded-2xl shadow border-t-4 border-indigo-600 text-center`}>
          <h3 className="text-xl font-black mb-1">Skorun: {quizScore} / {activeText.questions.length}</h3>
          <p className="text-xs opacity-60 mb-4">{quizScore === activeText.questions.length ? "Mükemmel! Hepsini doğru cevapladın." : "Biraz daha tekrar yapabilirsin."}</p>
          <button onClick={returnToLevelList} className="w-full py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl font-bold text-sm shadow">
            Menüye Dön
          </button>
        </div>
      )}
    </div>
  );
};
