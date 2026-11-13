import React, { useState, useMemo, useEffect } from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { ERROR_SPOTTING_DATA, ErrorSpottingItem } from '../grammarData';
import {
  CheckCircle2,
  AlertCircle,
  Volume2,
  ChevronRight,
  RotateCcw,
  Target,
  ShieldAlert,
} from 'lucide-react';

interface ErrorSpottingViewProps {
  selectedLevel: 'A1' | 'A2' | 'B1' | 'B2';
  themeStyle: ThemeClasses;
  speak: (text: string) => void;
  solvedErrorIds: string[];
  wrongErrorIds: string[];
  onSolveError: (id: string) => void;
  onMistakeError: (id: string) => void;
}

export const ErrorSpottingView: React.FC<ErrorSpottingViewProps> = ({
  selectedLevel,
  themeStyle,
  speak,
  solvedErrorIds,
  wrongErrorIds,
  onSolveError,
  onMistakeError,
}) => {
  const [mistakesOnly, setMistakesOnly] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSegmentIdx, setSelectedSegmentIdx] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const levelItems: ErrorSpottingItem[] = useMemo(() => {
    const allForLevel = ERROR_SPOTTING_DATA.filter((item) => item.level === selectedLevel);
    if (mistakesOnly) {
      const filtered = allForLevel.filter((item) => wrongErrorIds.includes(item.id));
      return filtered.length > 0 ? filtered : allForLevel;
    }
    return allForLevel;
  }, [selectedLevel, mistakesOnly, wrongErrorIds]);

  const currentItem = levelItems[activeIdx] || levelItems[0];

  useEffect(() => {
    setActiveIdx(0);
    setSelectedSegmentIdx(null);
    setStatus('idle');
  }, [selectedLevel, mistakesOnly]);

  const handleSelectSegment = (idx: number) => {
    if (!currentItem || status === 'correct') return;
    setSelectedSegmentIdx(idx);
    if (idx === currentItem.wrongIndex) {
      setStatus('correct');
      onSolveError(currentItem.id);
      speak(currentItem.correctedSentence);
    } else {
      setStatus('wrong');
      onMistakeError(currentItem.id);
    }
  };

  const handleNext = () => {
    const nextIdx = activeIdx < levelItems.length - 1 ? activeIdx + 1 : 0;
    setActiveIdx(nextIdx);
    setSelectedSegmentIdx(null);
    setStatus('idle');
  };

  const handleResetCurrent = () => {
    setSelectedSegmentIdx(null);
    setStatus('idle');
  };

  if (!currentItem) return null;

  const wrongForLevelCount = ERROR_SPOTTING_DATA.filter(
    (item) => item.level === selectedLevel && wrongErrorIds.includes(item.id)
  ).length;
  const solvedForLevelCount = ERROR_SPOTTING_DATA.filter(
    (item) => item.level === selectedLevel && solvedErrorIds.includes(item.id)
  ).length;

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Üst Bilgi ve Yanlışları Tekrar Et Filtresi */}
      <div className="flex items-center justify-between flex-wrap gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-slate-600 dark:text-slate-300">
            Hata Avı {activeIdx + 1} / {levelItems.length} ({selectedLevel})
          </span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
            ✓ {solvedForLevelCount} Çözüldü
          </span>
        </div>

        <div className="flex items-center gap-2">
          {wrongForLevelCount > 0 && (
            <button
              onClick={() => setMistakesOnly(!mistakesOnly)}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-black border transition cursor-pointer flex items-center gap-1 ${
                mistakesOnly
                  ? 'bg-rose-600 text-white border-rose-700 shadow-xs'
                  : 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30 hover:bg-rose-500/20'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>
                {mistakesOnly ? 'Tüm Sorulara Dön' : `Hatalarım (${wrongForLevelCount})`}
              </span>
            </button>
          )}
          <button
            onClick={handleResetCurrent}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition cursor-pointer"
            title="Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Soru Numara Çubuğu */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-0.5">
        {levelItems.map((item, idx) => {
          const isSolved = solvedErrorIds.includes(item.id);
          const isWrong = wrongErrorIds.includes(item.id);
          const isCurrent = idx === activeIdx;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveIdx(idx);
                setSelectedSegmentIdx(null);
                setStatus('idle');
              }}
              className={`h-7 min-w-[28px] px-2 shrink-0 rounded-lg text-xs font-black transition cursor-pointer flex items-center justify-center gap-1 ${
                isCurrent
                  ? 'bg-teal-600 text-white shadow-sm ring-2 ring-teal-400/40'
                  : isSolved
                  ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/40'
                  : isWrong
                  ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-400/40'
                  : 'bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-black/10'
              }`}
            >
              {isSolved && !isCurrent && <span className="text-[10px]">✓</span>}
              <span>{idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Görev Kartı */}
      <div
        className={`p-4 sm:p-5 rounded-3xl ${themeStyle.card} border-2 border-amber-500/40 shadow-md space-y-4`}
      >
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
            <Target className="w-3 h-3" />
            <span>Konu: {currentItem.topicName}</span>
          </span>
          <span className="text-[11px] font-bold opacity-70">
            Cümledeki dilbilgisi hatasına dokunun 👇
          </span>
        </div>

        {/* Tıklanabilir Cümle Parçaları */}
        <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex flex-wrap items-center justify-center gap-2">
          {currentItem.segments.map((seg, idx) => {
            const isCorrectTarget = idx === currentItem.wrongIndex;
            const isSelected = selectedSegmentIdx === idx;
            let btnStyle =
              'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-2 border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:bg-amber-500/10';

            if (status === 'correct' && isCorrectTarget) {
              btnStyle =
                'bg-emerald-600 text-white border-2 border-emerald-700 shadow-md ring-2 ring-emerald-400/40';
            } else if (status === 'wrong' && isSelected) {
              btnStyle =
                'bg-rose-500/20 text-rose-800 dark:text-rose-200 border-2 border-rose-500 animate-shake';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectSegment(idx)}
                disabled={status === 'correct'}
                className={`px-3.5 py-2 rounded-xl font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer ${btnStyle}`}
              >
                {status === 'correct' && isCorrectTarget ? (
                  <span className="flex items-center gap-1.5">
                    <span className="line-through opacity-75 text-xs">{seg}</span>
                    <span>➔ {currentItem.correction}</span>
                  </span>
                ) : (
                  seg
                )}
              </button>
            );
          })}
        </div>

        {/* Geri Bildirim */}
        {status === 'wrong' && (
          <div className="p-3 rounded-2xl bg-rose-500/15 border border-rose-400/50 text-rose-800 dark:text-rose-200 text-xs font-bold flex items-center gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>Bu bölüm dilbilgisi açısından doğru. Hatalı kelimeyi bulmak için diğer parçalara bakın!</span>
          </div>
        )}

        {status === 'correct' && (
          <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/50 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 font-black text-sm text-emerald-800 dark:text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tebrikler! Hatayı Yakaladınız</span>
              </div>
              <button
                onClick={() => speak(currentItem.correctedSentence)}
                className="p-1.5 rounded-xl bg-white/70 dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 hover:scale-105 transition cursor-pointer"
                title="Doğru Cümleyi Dinle"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-emerald-500/20">
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                ✓ {currentItem.correctedSentence}
              </p>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                {currentItem.tr}
              </p>
            </div>

            <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-200">
              💡 Kural: {currentItem.explanation}
            </p>

            <button
              onClick={handleNext}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer mt-1"
            >
              <span>Sonraki Hata Avı</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
