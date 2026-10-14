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
  BookmarkCheck,
  Settings,
  Volume2,
  BookOpen,
  List,
  X
} from 'lucide-react';
import { idbGet, idbSet, getExampleSentenceForWord } from '../data';

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
  const [previewCluesPuzzle, setPreviewCluesPuzzle] = useState<PuzzleDefinition | null>(null);

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

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewCluesPuzzle(p);
                  }}
                  className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                  title="İpuçları ve Örnek Cümleleri Önizle"
                >
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="hidden sm:inline">İpuçları</span>
                </button>
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

      {/* BULMACA İPUÇLARI VE ÖRNEK CÜMLELER MODALI */}
      {previewCluesPuzzle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
          <div className={`${themeStyle.card} border rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden`}>
            {/* Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                    {previewCluesPuzzle.level} • {previewCluesPuzzle.size}x{previewCluesPuzzle.size}
                  </span>
                  <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    <span>{previewCluesPuzzle.title}</span>
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Bulmacadaki tüm kelimeler, Türkçe anlamlar ve bağlamsal örnek cümleler.
                </p>
              </div>
              <button
                onClick={() => setPreviewCluesPuzzle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="p-4 overflow-y-auto space-y-4 flex-1">
              {/* Yatay (Across) */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Yatay İpuçları (➔)
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {previewCluesPuzzle.clues.filter(c => c.direction === 'across').map(c => {
                    const badge = getPosBadgeClasses(c.partOfSpeech);
                    const sentence = getExampleSentenceForWord(c.word, c.clue);
                    const saved = isWordSaved(c.word);

                    return (
                      <div
                        key={c.id}
                        className="p-3 rounded-2xl border bg-slate-50/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 flex flex-col gap-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {c.number}
                            </span>
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                                  {c.word}
                                </span>
                                <span className="text-[10px] font-black px-1.5 py-0.2 rounded border bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
                                  ({c.length} harf)
                                </span>
                                {c.partOfSpeech && (
                                  <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border ${badge.bg} ${badge.text} ${badge.border}`}>
                                    ({c.partOfSpeech.replace(/[().]/g, '')}.)
                                  </span>
                                )}
                              </div>
                              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                                {c.clue}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => speak(c.word)}
                              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 transition cursor-pointer"
                              title="Kelimeyi Dinle"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => onSaveWord(c.word, c.clue, previewCluesPuzzle.level)}
                              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-indigo-600 transition cursor-pointer"
                              title="Deftere Kaydet"
                            >
                              {saved ? (
                                <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Bookmark className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Örnek Cümle Kutusu */}
                        <div className="mt-1 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/40">
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              <span>Örnek Cümle & Çeviri</span>
                            </span>
                            <button
                              type="button"
                              onClick={() => speak(sentence.eng)}
                              className="p-1 rounded-md text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950 transition cursor-pointer active:scale-95"
                              title="Cümleyi Dinle (TTS)"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-snug">
                            {sentence.eng}
                          </p>
                          <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-0.5 italic">
                            {sentence.tr}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dikey (Down) */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Dikey İpuçları (⬇)
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {previewCluesPuzzle.clues.filter(c => c.direction === 'down').map(c => {
                    const badge = getPosBadgeClasses(c.partOfSpeech);
                    const sentence = getExampleSentenceForWord(c.word, c.clue);
                    const saved = isWordSaved(c.word);

                    return (
                      <div
                        key={c.id}
                        className="p-3 rounded-2xl border bg-slate-50/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 flex flex-col gap-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {c.number}
                            </span>
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                                  {c.word}
                                </span>
                                <span className="text-[10px] font-black px-1.5 py-0.2 rounded border bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
                                  ({c.length} harf)
                                </span>
                                {c.partOfSpeech && (
                                  <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border ${badge.bg} ${badge.text} ${badge.border}`}>
                                    ({c.partOfSpeech.replace(/[().]/g, '')}.)
                                  </span>
                                )}
                              </div>
                              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                                {c.clue}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => speak(c.word)}
                              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 transition cursor-pointer"
                              title="Kelimeyi Dinle"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => onSaveWord(c.word, c.clue, previewCluesPuzzle.level)}
                              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-indigo-600 transition cursor-pointer"
                              title="Deftere Kaydet"
                            >
                              {saved ? (
                                <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Bookmark className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Örnek Cümle Kutusu */}
                        <div className="mt-1 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/40">
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              <span>Örnek Cümle & Çeviri</span>
                            </span>
                            <button
                              type="button"
                              onClick={() => speak(sentence.eng)}
                              className="p-1 rounded-md text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950 transition cursor-pointer active:scale-95"
                              title="Cümleyi Dinle (TTS)"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-snug">
                            {sentence.eng}
                          </p>
                          <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-0.5 italic">
                            {sentence.tr}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  const target = previewCluesPuzzle;
                  setPreviewCluesPuzzle(null);
                  setActivePuzzle(target);
                }}
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-2xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-md active:scale-95"
              >
                <span>Bu Bulmacayı Çöz</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setPreviewCluesPuzzle(null)}
                className="px-4 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold rounded-2xl text-xs transition cursor-pointer"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
