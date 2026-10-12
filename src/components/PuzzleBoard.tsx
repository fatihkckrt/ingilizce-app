import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  PuzzleDefinition, 
  PuzzleClue, 
  CompletedPuzzleRecord 
} from '../puzzleData';
import { ThemeClasses } from '../utils/themeUtils';
import { 
  ArrowLeft, 
  Volume2, 
  Lightbulb, 
  RotateCcw, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface PuzzleBoardProps {
  puzzle: PuzzleDefinition;
  themeStyle: ThemeClasses;
  onBack: () => void;
  onPuzzleComplete: (record: CompletedPuzzleRecord) => void;
  onNextPuzzle?: () => void;
  hasNextPuzzle?: boolean;
  onSaveWord: (word: string, translation: string, level: string) => void;
  speak: (text: string) => void;
  isWordSaved: (word: string) => boolean;
}

// Lightweight Audio Synthesis using Web Audio API
function playWordDing() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);
    
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  } catch (e) {}
}

function playSuccessChime() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.50];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      
      gain.gain.setValueAtTime(0.001, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.38);
    });
  } catch (e) {}
}

export const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
  puzzle,
  themeStyle,
  onBack,
  onPuzzleComplete,
  onNextPuzzle,
  hasNextPuzzle,
  onSaveWord,
  speak,
  isWordSaved
}) => {
  const size = puzzle.size;

  // Grid Solution Map and Start Numbers
  const { targetGrid, startNumbers, clueLookup } = useMemo(() => {
    const tg: (string | null)[][] = Array.from({ length: size }, () => Array(size).fill(null));
    const sn: (number | null)[][] = Array.from({ length: size }, () => Array(size).fill(null));
    const cl: { [key: string]: { across?: PuzzleClue; down?: PuzzleClue } } = {};

    for (const clue of puzzle.clues) {
      const r = clue.row;
      const c = clue.col;
      sn[r][c] = clue.number;

      for (let i = 0; i < clue.length; i++) {
        const cr = clue.direction === 'across' ? r : r + i;
        const cc = clue.direction === 'across' ? c + i : c;
        tg[cr][cc] = clue.word[i];

        const key = `${cr},${cc}`;
        if (!cl[key]) cl[key] = {};
        if (clue.direction === 'across') cl[key].across = clue;
        else cl[key].down = clue;
      }
    }

    return { targetGrid: tg, startNumbers: sn, clueLookup: cl };
  }, [puzzle, size]);

  // Initial user grid
  const [userGrid, setUserGrid] = useState<string[][]>(() => {
    return Array.from({ length: size }, () => Array(size).fill(''));
  });

  // Current Selection
  const [activeRow, setActiveRow] = useState<number>(() => puzzle.clues[0]?.row ?? 0);
  const [activeCol, setActiveCol] = useState<number>(() => puzzle.clues[0]?.col ?? 0);
  const [activeDirection, setActiveDirection] = useState<'across' | 'down'>(() => puzzle.clues[0]?.direction ?? 'across');

  // Stats
  const [seconds, setSeconds] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedWordIds, setCompletedWordIds] = useState<Set<string>>(new Set());
  const [showVictory, setShowVictory] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // Confetti particles container ref
  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Active Clue resolution
  const activeClue = useMemo<PuzzleClue | null>(() => {
    const key = `${activeRow},${activeCol}`;
    const cellClues = clueLookup[key];
    if (!cellClues) return puzzle.clues[0] || null;

    if (activeDirection === 'across' && cellClues.across) return cellClues.across;
    if (activeDirection === 'down' && cellClues.down) return cellClues.down;
    return cellClues.across || cellClues.down || puzzle.clues[0] || null;
  }, [activeRow, activeCol, activeDirection, clueLookup, puzzle.clues]);

  // Timer Effect
  useEffect(() => {
    if (isCompleted) return;
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCompleted]);

  // Check word and puzzle completion
  useEffect(() => {
    const newlySolved = new Set<string>();
    let allSolved = true;

    for (const clue of puzzle.clues) {
      let wordMatches = true;
      for (let i = 0; i < clue.length; i++) {
        const r = clue.direction === 'across' ? clue.row : clue.row + i;
        const c = clue.direction === 'across' ? clue.col + i : clue.col;
        if (userGrid[r][c].toUpperCase() !== clue.word[i]) {
          wordMatches = false;
          allSolved = false;
          break;
        }
      }
      if (wordMatches) {
        newlySolved.add(clue.id);
      }
    }

    // Play ding sound if a new word is completed
    if (newlySolved.size > completedWordIds.size && !isCompleted) {
      playWordDing();
    }
    setCompletedWordIds(newlySolved);

    // If all solved and not marked completed yet
    if (allSolved && !isCompleted && puzzle.clues.length > 0) {
      setIsCompleted(true);
      const computedScore = Math.max(100, Math.round(1000 - seconds * 2 - hintsUsed * 40));
      setFinalScore(computedScore);
      playSuccessChime();
      setShowVictory(true);

      const record: CompletedPuzzleRecord = {
        puzzleId: puzzle.id,
        completedAt: Date.now(),
        secondsTaken: seconds,
        score: computedScore,
        hintsUsed
      };
      onPuzzleComplete(record);
      triggerConfetti();
    }
  }, [userGrid, puzzle, seconds, hintsUsed, isCompleted, completedWordIds.size, onPuzzleComplete]);

  // Confetti Animation
  const triggerConfetti = () => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6'];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 3,
        r: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 1) * 14,
        gravity: 0.35,
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10
      });
    }

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vr;

        if (p.y < canvas.height) alive = true;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.5);
        ctx.restore();
      });

      if (alive) {
        animationId = requestAnimationFrame(render);
      }
    };
    render();
  };

  // Cell Click / Touch Handler
  const handleCellClick = (r: number, c: number) => {
    if (targetGrid[r][c] === null) return; // Inactive cell

    const key = `${r},${c}`;
    const cellClues = clueLookup[key];
    if (!cellClues) return;

    if (r === activeRow && c === activeCol) {
      // Toggle direction if both across and down exist on this cell
      if (cellClues.across && cellClues.down) {
        setActiveDirection(prev => prev === 'across' ? 'down' : 'across');
      }
    } else {
      setActiveRow(r);
      setActiveCol(c);
      // Retain direction if valid, else switch
      if (activeDirection === 'across' && !cellClues.across && cellClues.down) {
        setActiveDirection('down');
      } else if (activeDirection === 'down' && !cellClues.down && cellClues.across) {
        setActiveDirection('across');
      }
    }
  };

  // Keyboard navigation & Input handler
  const handleKeyPress = (letter: string) => {
    if (isCompleted || !activeClue) return;

    const char = letter.toUpperCase();
    const newGrid = userGrid.map(row => [...row]);
    newGrid[activeRow][activeCol] = char;
    setUserGrid(newGrid);

    // Advance to next cell in current clue
    advanceCursor();
  };

  const handleBackspace = () => {
    if (isCompleted || !activeClue) return;

    const newGrid = userGrid.map(row => [...row]);
    if (newGrid[activeRow][activeCol] !== '') {
      newGrid[activeRow][activeCol] = '';
      setUserGrid(newGrid);
    } else {
      // Move backwards and clear
      retreatCursor(newGrid);
    }
  };

  const advanceCursor = () => {
    if (!activeClue) return;
    if (activeDirection === 'across') {
      const nextCol = activeCol + 1;
      if (nextCol < activeClue.col + activeClue.length) {
        setActiveCol(nextCol);
      }
    } else {
      const nextRow = activeRow + 1;
      if (nextRow < activeClue.row + activeClue.length) {
        setActiveRow(nextRow);
      }
    }
  };

  const retreatCursor = (gridToUpdate?: string[][]) => {
    if (!activeClue) return;
    if (activeDirection === 'across') {
      const prevCol = activeCol - 1;
      if (prevCol >= activeClue.col) {
        setActiveCol(prevCol);
        if (gridToUpdate) {
          gridToUpdate[activeRow][prevCol] = '';
          setUserGrid([...gridToUpdate]);
        }
      }
    } else {
      const prevRow = activeRow - 1;
      if (prevRow >= activeClue.row) {
        setActiveRow(prevRow);
        if (gridToUpdate) {
          gridToUpdate[prevRow][activeCol] = '';
          setUserGrid([...gridToUpdate]);
        }
      }
    }
  };

  // Physical keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCompleted) return;

      if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeCol < size - 1 && targetGrid[activeRow][activeCol + 1] !== null) {
          setActiveCol(activeCol + 1);
          setActiveDirection('across');
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (activeCol > 0 && targetGrid[activeRow][activeCol - 1] !== null) {
          setActiveCol(activeCol - 1);
          setActiveDirection('across');
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeRow < size - 1 && targetGrid[activeRow + 1][activeCol] !== null) {
          setActiveRow(activeRow + 1);
          setActiveDirection('down');
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeRow > 0 && targetGrid[activeRow - 1][activeCol] !== null) {
          setActiveRow(activeRow - 1);
          setActiveDirection('down');
        }
      } else if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        cycleClue(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeRow, activeCol, activeDirection, activeClue, isCompleted, size, targetGrid]);

  // Clue Navigation
  const cycleClue = (delta: number) => {
    if (!puzzle.clues.length) return;
    const currentIndex = puzzle.clues.findIndex(c => c.id === activeClue?.id);
    let nextIndex = (currentIndex + delta + puzzle.clues.length) % puzzle.clues.length;
    const nextClue = puzzle.clues[nextIndex];
    setActiveRow(nextClue.row);
    setActiveCol(nextClue.col);
    setActiveDirection(nextClue.direction);
  };

  // Joker / Hint: reveal current cell letter
  const handleUseHint = () => {
    if (isCompleted) return;
    const correctLetter = targetGrid[activeRow][activeCol];
    if (!correctLetter) return;

    if (userGrid[activeRow][activeCol] !== correctLetter) {
      const newGrid = userGrid.map(row => [...row]);
      newGrid[activeRow][activeCol] = correctLetter;
      setUserGrid(newGrid);
      setHintsUsed(h => h + 1);
      advanceCursor();
    }
  };

  // Clear current active word
  const handleClearWord = () => {
    if (!activeClue) return;
    const newGrid = userGrid.map(row => [...row]);
    for (let i = 0; i < activeClue.length; i++) {
      const r = activeClue.direction === 'across' ? activeClue.row : activeClue.row + i;
      const c = activeClue.direction === 'across' ? activeClue.col + i : activeClue.col;
      newGrid[r][c] = '';
    }
    setUserGrid(newGrid);
    setActiveRow(activeClue.row);
    setActiveCol(activeClue.col);
  };

  // Check if cell is in active clue
  const isCellInActiveClue = (r: number, c: number): boolean => {
    if (!activeClue) return false;
    if (activeDirection === 'across') {
      return r === activeClue.row && c >= activeClue.col && c < activeClue.col + activeClue.length;
    } else {
      return c === activeClue.col && r >= activeClue.row && r < activeClue.row + activeClue.length;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Keyboard Rows
  const kbRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 dark:bg-slate-950 overflow-hidden relative select-none">
      <canvas
        ref={confettiCanvasRef}
        className="pointer-events-none fixed inset-0 z-50"
      />

      {/* TOP HEADER */}
      <div className="px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-xs z-10">
        <button
          onClick={onBack}
          className="p-2 -ml-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition flex items-center gap-1 active:scale-95"
          title="Geri"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xs font-bold hidden sm:inline">Bulmacalar</span>
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-xs font-black px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              {puzzle.level}
            </span>
            <span className="text-xs font-bold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {puzzle.size}x{puzzle.size}
            </span>
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white truncate max-w-[150px] sm:max-w-[220px]">
              {puzzle.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs font-mono font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-indigo-500" />
            <span>{formatTime(seconds)}</span>
          </div>
        </div>
      </div>

      {/* SCROLLABLE MAIN CONTENT (GRID + CLUE + KEYBOARD) */}
      <div className="flex-1 flex flex-col justify-between overflow-y-auto p-2 sm:p-4 max-w-xl mx-auto w-full">
        
        {/* ACTIVE CLUE BANNER */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-indigo-100 dark:border-indigo-950 shadow-sm p-3 mb-2 transition">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider ${
                activeDirection === 'across'
                  ? 'bg-blue-600 text-white'
                  : 'bg-emerald-600 text-white'
              }`}>
                {activeDirection === 'across' ? 'Yatay ➔' : 'Dikey ⬇'}
              </span>
              <span className="text-xs font-black text-slate-900 dark:text-white">
                {activeClue?.number}. İpucu
              </span>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                ({activeClue?.length} Harf)
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => cycleClue(-1)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 transition"
                title="Önceki İpucu"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => cycleClue(1)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 transition"
                title="Sonraki İpucu"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
            {activeClue?.clue}
          </p>
        </div>

        {/* CROSSWORD BOARD GRID */}
        <div className="flex items-center justify-center my-auto py-1">
          <div 
            className="grid gap-1 sm:gap-1.5 p-2 bg-slate-200 dark:bg-slate-800/80 rounded-2xl shadow-inner border border-slate-300 dark:border-slate-700/60"
            style={{
              gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
              width: '100%',
              maxWidth: size === 5 ? '320px' : size === 6 ? '360px' : '400px',
              aspectRatio: '1 / 1'
            }}
          >
            {Array.from({ length: size }).map((_, r) => (
              Array.from({ length: size }).map((__, c) => {
                const isTargetCell = targetGrid[r][c] !== null;
                const isSelectedCell = r === activeRow && c === activeCol;
                const inActiveClue = isCellInActiveClue(r, c);
                const clueNum = startNumbers[r][c];
                const char = userGrid[r][c];

                if (!isTargetCell) {
                  return (
                    <div
                      key={`${r}-${c}`}
                      className="w-full h-full rounded-xl bg-slate-300/60 dark:bg-slate-900/60 opacity-80"
                    />
                  );
                }

                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => handleCellClick(r, c)}
                    className={`relative w-full h-full rounded-xl flex items-center justify-center font-black transition text-lg sm:text-xl active:scale-95 select-none ${
                      isSelectedCell
                        ? 'bg-amber-300 dark:bg-amber-400 text-amber-950 ring-3 ring-indigo-500 shadow-md z-10 scale-105'
                        : inActiveClue
                        ? 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-950 dark:text-indigo-100 border border-indigo-300 dark:border-indigo-700'
                        : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                    }`}
                  >
                    {/* Clue Number Badge */}
                    {clueNum && (
                      <span className="absolute top-0.5 left-1 text-[9px] sm:text-[10px] font-bold text-slate-500 dark:text-slate-400 leading-none">
                        {clueNum}
                      </span>
                    )}
                    <span className="mt-1 leading-none">
                      {char}
                    </span>
                  </button>
                );
              })
            ))}
          </div>
        </div>

        {/* QUICK ACTION CONTROLS */}
        <div className="flex items-center justify-between gap-1.5 py-2 px-1 max-w-md mx-auto w-full">
          <button
            onClick={handleUseHint}
            className="flex-1 py-1.5 px-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300/40 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition active:scale-95"
            title="Seçili kutucuğun harfini açar"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Harf Aç ({hintsUsed})</span>
          </button>

          {activeClue && (
            <button
              onClick={() => speak(activeClue.word)}
              className="flex-1 py-1.5 px-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-300/40 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition active:scale-95"
              title="İngilizce kelimeyi sesli dinle"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Dinle</span>
            </button>
          )}

          {activeClue && (
            <button
              onClick={() => onSaveWord(activeClue.word, activeClue.clue, puzzle.level)}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition active:scale-95 border ${
                isWordSaved(activeClue.word)
                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-400/40'
                  : 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-300/40'
              }`}
              title="Leitner Defterine Ekle"
            >
              {isWordSaved(activeClue.word) ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kayıtlı</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Deftere Ekle</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={handleClearWord}
            className="py-1.5 px-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-slate-200 transition active:scale-95"
            title="Bu kelimedeki harfleri temizle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* VIRTUAL MOBILE KEYBOARD */}
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-2xl border border-slate-200 dark:border-slate-800 p-1.5 shadow-sm space-y-1 mt-1">
          {/* Row 1 */}
          <div className="flex gap-1 justify-center">
            {kbRows[0].map(k => (
              <button
                key={k}
                onClick={() => handleKeyPress(k)}
                className="flex-1 max-w-[38px] h-10 bg-slate-100 hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-900 dark:text-white font-extrabold text-sm rounded-lg shadow-xs transition active:scale-90 flex items-center justify-center"
              >
                {k}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-1 justify-center px-2">
            {kbRows[1].map(k => (
              <button
                key={k}
                onClick={() => handleKeyPress(k)}
                className="flex-1 max-w-[38px] h-10 bg-slate-100 hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-900 dark:text-white font-extrabold text-sm rounded-lg shadow-xs transition active:scale-90 flex items-center justify-center"
              >
                {k}
              </button>
            ))}
          </div>

          {/* Row 3 with Backspace and Next Clue */}
          <div className="flex gap-1 justify-center">
            <button
              onClick={handleBackspace}
              className="flex-1 max-w-[48px] h-10 bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-black text-xs rounded-lg shadow-xs transition active:scale-90 flex items-center justify-center"
              title="Geri Sil"
            >
              ⌫
            </button>

            {kbRows[2].map(k => (
              <button
                key={k}
                onClick={() => handleKeyPress(k)}
                className="flex-1 max-w-[38px] h-10 bg-slate-100 hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-900 dark:text-white font-extrabold text-sm rounded-lg shadow-xs transition active:scale-90 flex items-center justify-center"
              >
                {k}
              </button>
            ))}

            <button
              onClick={() => cycleClue(1)}
              className="flex-1 max-w-[48px] h-10 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-black text-xs rounded-lg shadow-xs transition active:scale-90 flex items-center justify-center"
              title="Sonraki Kelime"
            >
              ➔
            </button>
          </div>
        </div>

      </div>

      {/* VICTORY MODAL */}
      {showVictory && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 text-center shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300/40 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Trophy className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Tebrikler!
            </span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              Bulmaca Tamamlandı!
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              {puzzle.title} ({puzzle.level} • {puzzle.size}x{puzzle.size})
            </p>

            {/* Score & Stats Cards */}
            <div className="grid grid-cols-3 gap-2 my-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-2xl">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Süre</span>
                <span className="text-base font-black text-slate-900 dark:text-white font-mono">
                  {formatTime(seconds)}
                </span>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-950/50 p-2.5 rounded-2xl border border-indigo-200/50">
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase block">Puan</span>
                <span className="text-base font-black text-indigo-700 dark:text-indigo-300">
                  {finalScore}
                </span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-2xl">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Joker</span>
                <span className="text-base font-black text-slate-900 dark:text-white">
                  {hintsUsed}
                </span>
              </div>
            </div>

            {/* Solved Words Summary */}
            <div className="text-left max-h-48 overflow-y-auto space-y-1.5 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-800 mb-4">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-700 px-1">
                <span className="text-[11px] font-extrabold text-slate-600 dark:text-slate-300">
                  Çözülen Kelimeler ({puzzle.clues.length})
                </span>
                <button
                  onClick={() => {
                    puzzle.clues.forEach(c => onSaveWord(c.word, c.clue, puzzle.level));
                  }}
                  className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Tümünü Deftere Ekle ➔
                </button>
              </div>

              {puzzle.clues.map(c => {
                const saved = isWordSaved(c.word);
                return (
                  <div 
                    key={c.id}
                    className="flex items-center justify-between py-1 px-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => speak(c.word)}
                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-indigo-600"
                        title="Telaffuz"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <div>
                        <span className="font-extrabold text-slate-900 dark:text-white tracking-wide">
                          {c.word}
                        </span>
                        <span className="text-[11px] text-slate-500 ml-1.5 truncate max-w-[150px] inline-block align-bottom">
                          {c.clue}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSaveWord(c.word, c.clue, puzzle.level)}
                      className="p-1 text-slate-400 hover:text-indigo-600 transition"
                      title="Deftere Kaydet"
                    >
                      {saved ? (
                        <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              {hasNextPuzzle && onNextPuzzle && (
                <button
                  onClick={onNextPuzzle}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-2xl shadow-lg transition flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Sonraki Bulmacaya Geç</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onBack}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-2xl transition"
              >
                Bulmacalar Listesine Dön
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
