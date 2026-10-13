import React, { useState, useEffect } from 'react';
import { 
  PUZZLES, 
  PUZZLE_LEVELS, 
  PuzzleDefinition, 
  CompletedPuzzleRecord, 
  getPuzzlesByLevelAndSize,
  getPosBadgeClasses
} from '../puzzleData';
import { PuzzleBoard } from './PuzzleBoard';
import { ThemeClasses } from '../utils/themeUtils';
import { 
  Trophy, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Clock, 
  ArrowLeft,
  Grid,
  Zap,
  Bookmark,
  Settings
} from 'lucide-react';
import { idbGet, idbSet } from '../data';

interface PuzzleViewProps {
  themeStyle: ThemeClasses;
  onBackToHome: () => void;
  onSaveWord: (word: string, translation: string, level: string) => void;
  speak: (text: string) => void;
  isWordSaved: (word: string) => boolean;
  onOpenSettings?: () => void;
}

export const PuzzleView: React.FC<PuzzleViewProps> = ({
  themeStyle,
  onBackToHome,
  onSaveWord,
  speak,
  isWordSaved,
  onOpenSettings
}) => {
  const [selectedLevel, setSelectedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>('A1');
  const [selectedSize, setSelectedSize] = useState<number | 'ALL'>('ALL');
  const [activePuzzle, setActivePuzzle] = useState<PuzzleDefinition | null>(null);

  // Completed records map: puzzleId -> record
  const [completedRecords, setCompletedRecords] = useState<Record<string, CompletedPuzzleRecord>>(() => {
    try {
      const raw = localStorage.getItem('completed_puzzles');
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // Sync with IndexedDB
  useEffect(() => {
    (async () => {
      const idbData = await idbGet<Record<string, CompletedPuzzleRecord>>('completed_puzzles');
      if (idbData && typeof idbData === 'object') {
        setCompletedRecords(prev => ({ ...prev, ...idbData }));
      }
    })();
  }, []);

  const handlePuzzleComplete = async (record: CompletedPuzzleRecord) => {
    const updated = {
      ...completedRecords,
      [record.puzzleId]: record
    };
    setCompletedRecords(updated);
    try {
      localStorage.setItem('completed_puzzles', JSON.stringify(updated));
      await idbSet('completed_puzzles', updated);
    } catch (e) {}
  };

  // Filtered puzzle list
  const filteredPuzzles = getPuzzlesByLevelAndSize(
    selectedLevel, 
    selectedSize === 'ALL' ? undefined : (selectedSize as 5 | 6 | 7)
  );

  // Handle Next Puzzle
  const handleNextPuzzle = () => {
    if (!activePuzzle) return;

    // 1. Try next puzzle in current level
    const allInLevel = PUZZLES.filter(p => p.level === activePuzzle.level);
    const currentLevelIdx = allInLevel.findIndex(p => p.id === activePuzzle.id);

    let nextPuzzle: PuzzleDefinition | null = null;
    if (currentLevelIdx >= 0 && currentLevelIdx < allInLevel.length - 1) {
      nextPuzzle = allInLevel[currentLevelIdx + 1];
    } else {
      // 2. Next level in sequence (A1 -> A2 -> B1 -> B2 -> loop)
      const levelsOrder: ('A1' | 'A2' | 'B1' | 'B2')[] = ['A1', 'A2', 'B1', 'B2'];
      const currentLevelPos = levelsOrder.indexOf(activePuzzle.level);
      const nextLevel = levelsOrder[(currentLevelPos + 1) % levelsOrder.length];
      const nextLevelPuzzles = PUZZLES.filter(p => p.level === nextLevel);
      if (nextLevelPuzzles.length > 0) {
        nextPuzzle = nextLevelPuzzles[0];
      } else {
        // 3. Fallback to any uncompleted puzzle or first puzzle
        const uncompleted = PUZZLES.find(p => !completedRecords[p.id]);
        nextPuzzle = uncompleted || PUZZLES[0] || null;
      }
    }

    if (nextPuzzle) {
      setSelectedLevel(nextPuzzle.level);
      setActivePuzzle(nextPuzzle);
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {}
    } else {
      setActivePuzzle(null);
    }
  };

  const hasNextPuzzle = (): boolean => {
    return PUZZLES.length > 1;
  };

  // Compute Overall Stats
  const totalCompleted = Object.keys(completedRecords).length;
  const totalScore = (Object.values(completedRecords) as CompletedPuzzleRecord[]).reduce((acc: number, r) => acc + (r.score || 0), 0);

  // If a puzzle is currently active, render the board with key to ensure clean remount
  if (activePuzzle) {
    return (
      <PuzzleBoard
        key={activePuzzle.id}
        puzzle={activePuzzle}
        themeStyle={themeStyle}
        onBack={() => setActivePuzzle(null)}
        onPuzzleComplete={handlePuzzleComplete}
        onNextPuzzle={handleNextPuzzle}
        hasNextPuzzle={hasNextPuzzle()}
        onSaveWord={onSaveWord}
        speak={speak}
        isWordSaved={isWordSaved}
        onOpenSettings={onOpenSettings}
      />
    );
  }

  return (
    <div className="flex-1 p-4 sm:p-5 flex flex-col space-y-4 overflow-y-auto max-w-2xl mx-auto w-full">
      
      {/* HEADER CARD */}
      <div className={`${themeStyle.card} p-5 rounded-3xl border border-indigo-200 dark:border-indigo-900 shadow-md relative overflow-hidden`}>
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBackToHome}
            className="p-2 -ml-2 text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 rounded-2xl transition flex items-center gap-1 active:scale-95 cursor-pointer"
            title="Ana Ekrana Dön"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-xs font-bold">Ana Sayfa</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-indigo-600 text-white shadow-xs">
              🧩 Kare & Çengel Bulmaca
            </span>
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                className="p-2 text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 rounded-2xl transition flex items-center justify-center cursor-pointer active:scale-95 border border-slate-200 dark:border-slate-700"
                title="Ayarlar (Tema, Ses, Yazı)"
              >
                <Settings className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              İngilizce Bulmaca Dünyası
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium leading-relaxed">
              Türkçe anlam ipuçlarıyla harfleri doldurun, seviyenize uygun İngilizce kelime haznenizi eğlenerek pekiştirin.
            </p>
          </div>

          <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 items-center justify-center text-3xl shadow-inner border border-indigo-200/50">
            🧩
          </div>
        </div>

        {/* Global Stats Bar */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Tamamlanan</span>
              <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                {totalCompleted} / {PUZZLES.length} Bulmaca
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded-xl">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Toplam Skor</span>
              <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                {totalScore.toLocaleString()} Puan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* LEVEL TABS (A1, A2, B1, B2) */}
      <div className="space-y-1.5">
        <label className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">
          Seviye Seçimi
        </label>
        <div className="grid grid-cols-4 gap-2">
          {PUZZLE_LEVELS.map(lvl => {
            const countInLevel = PUZZLES.filter(p => p.level === lvl).length;
            const completedInLevel = PUZZLES.filter(p => p.level === lvl && completedRecords[p.id]).length;
            const isSelected = selectedLevel === lvl;

            return (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`py-3 px-2 rounded-2xl font-black text-center transition flex flex-col items-center justify-center gap-0.5 shadow-sm active:scale-95 border cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-md ring-2 ring-indigo-400'
                    : `${themeStyle.card} border-slate-200 dark:border-slate-700 hover:border-indigo-400`
                }`}
              >
                <span className="text-base tracking-wide font-black">{lvl}</span>
                <span className={`text-[11px] font-bold ${isSelected ? 'text-indigo-100' : 'opacity-70'}`}>
                  {completedInLevel}/{countInLevel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SIZE FILTER TABS (5x5, 6x6, 7x7) */}
      <div className="space-y-1.5">
        <label className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 px-1">
          Izgara Boyutu
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedSize('ALL')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-black transition active:scale-95 border cursor-pointer ${
              selectedSize === 'ALL'
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                : `${themeStyle.card} border-slate-200 dark:border-slate-700 hover:border-indigo-300`
            }`}
          >
            Tümü
          </button>
          {[5, 6, 7].map(sz => (
            <button
              key={sz}
              onClick={() => setSelectedSize(sz)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black transition active:scale-95 border cursor-pointer ${
                selectedSize === sz
                  ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                  : `${themeStyle.card} border-slate-200 dark:border-slate-700 hover:border-indigo-300`
              }`}
            >
              {sz}x{sz}
            </button>
          ))}
        </div>
      </div>

      {/* PUZZLE LIST CARDS */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
            {selectedLevel} Bulmacaları ({filteredPuzzles.length})
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Serbestçe seçim yapabilirsiniz
          </span>
        </div>

        {filteredPuzzles.map((p, index) => {
          const record = completedRecords[p.id];
          const isDone = !!record;

          return (
            <div
              key={p.id}
              onClick={() => setActivePuzzle(p)}
              className={`p-4 rounded-2xl border transition shadow-xs hover:shadow-md cursor-pointer flex items-center justify-between gap-3 group active:scale-[0.99] ${
                isDone
                  ? 'bg-emerald-500/10 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                  : `${themeStyle.card} border-slate-200 dark:border-slate-700 hover:border-indigo-400`
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 border ${
                  isDone
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300'
                }`}>
                  {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-extrabold text-sm sm:text-base text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {p.title}
                    </span>
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                      {p.size}x{p.size}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium line-clamp-1">
                    {p.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">{p.clues.length} Kelime</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    {Array.from(new Set(p.clues.map(c => c.partOfSpeech))).slice(0, 3).map(pos => {
                      const b = getPosBadgeClasses(pos);
                      return (
                        <span key={pos} className={`text-[10px] font-black px-1.5 py-0.2 rounded border ${b.bg} ${b.text} ${b.border}`}>
                          ({b.label.replace(/[().]/g, '')}.)
                        </span>
                      );
                    })}
                    {isDone && (
                      <>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-black flex items-center gap-1 text-[11px]">
                          <Trophy className="w-3 h-3" />
                          {record.score} Puan
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className={`text-xs font-black px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  isDone
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                }`}>
                  {isDone ? 'Tekrar Çöz' : 'Başla ➔'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
