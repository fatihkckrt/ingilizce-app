import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  PuzzleDefinition, 
  PuzzleClue, 
  CompletedPuzzleRecord,
  getPosBadgeClasses,
  getPuzzleFrequencyInfo
} from '../puzzleData';
import { ThemeClasses } from '../utils/themeUtils';
import { getExampleSentenceForWord } from '../data';
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
  ArrowRight,
  List,
  X,
  Settings
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
  onOpenSettings?: () => void;
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

function playWrongBuzzer() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.16);
    
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  } catch (e) {}
}

function playKeyTap() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
    
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
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
  isWordSaved,
  onOpenSettings
}) => {
  const size = puzzle.size;
  const freqInfo = useMemo(() => getPuzzleFrequencyInfo(puzzle), [puzzle]);

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

  // Stats & Error Feedback
  const [seconds, setSeconds] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedWordIds, setCompletedWordIds] = useState<Set<string>>(new Set());
  const [showVictory, setShowVictory] = useState(false);
  const [showCluesModal, setShowCluesModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [wrongCellKey, setWrongCellKey] = useState<string | null>(null);

  // Reset board state when puzzle changes
  useEffect(() => {
    setUserGrid(Array.from({ length: puzzle.size }, () => Array(puzzle.size).fill('')));
    setActiveRow(puzzle.clues[0]?.row ?? 0);
    setActiveCol(puzzle.clues[0]?.col ?? 0);
    setActiveDirection(puzzle.clues[0]?.direction ?? 'across');
    setSeconds(0);
    setHintsUsed(0);
    setIsCompleted(false);
    setCompletedWordIds(new Set());
    setShowVictory(false);
    setShowCluesModal(false);
    setFinalScore(0);
    setWrongCellKey(null);
  }, [puzzle.id, puzzle.size]);

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

  // Active example sentence for current clue
  const activeSentence = useMemo(() => {
    if (!activeClue) return null;
    return getExampleSentenceForWord(activeClue.word, activeClue.clue);
  }, [activeClue]);

  // Example sentence visibility controls (MUST BE CLOSED BY DEFAULT)
  const [showActiveSentence, setShowActiveSentence] = useState(false);
  const [expandedClueSentences, setExpandedClueSentences] = useState<Record<string, boolean>>({});

  // Reset active sentence hint when clue changes to avoid spoiling answers
  useEffect(() => {
    setShowActiveSentence(false);
  }, [activeClue?.id]);

  const toggleClueSentence = (clueId: string) => {
    setExpandedClueSentences(prev => ({
      ...prev,
      [clueId]: !prev[clueId]
    }));
  };

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

  // Keyboard navigation & Input handler with validation & auto-advance
  const handleKeyPress = (letter: string) => {
    if (isCompleted || !activeClue) return;

    const char = letter.toUpperCase();
    const expectedChar = targetGrid[activeRow][activeCol];

    if (!expectedChar) return;

    // 1. REJECT WRONG LETTER & PROVIDE IMMEDIATE FEEDBACK (CELL SHAKE + SOUND ONLY, NO LAYOUT SHIFT)
    if (char !== expectedChar) {
      const cellKey = `${activeRow},${activeCol}`;
      setWrongCellKey(cellKey);
      playWrongBuzzer();
      if ('vibrate' in navigator) {
        try { (navigator as any).vibrate(60); } catch (e) {}
      }
      setTimeout(() => {
        setWrongCellKey(prev => prev === cellKey ? null : prev);
      }, 350);
      return;
    }

    // 2. ACCEPT CORRECT LETTER
    playKeyTap();
    const newGrid = userGrid.map(row => [...row]);
    newGrid[activeRow][activeCol] = char;
    setUserGrid(newGrid);

    // 3. CHECK IF CURRENT ACTIVE CLUE IS COMPLETED
    let activeClueCompleted = true;
    for (let i = 0; i < activeClue.length; i++) {
      const cr = activeClue.direction === 'across' ? activeClue.row : activeClue.row + i;
      const cc = activeClue.direction === 'across' ? activeClue.col + i : activeClue.col;
      if (newGrid[cr][cc].toUpperCase() !== activeClue.word[i]) {
        activeClueCompleted = false;
        break;
      }
    }

    if (activeClueCompleted) {
      playWordDing();

      // Check if all clues are solved
      const allSolved = puzzle.clues.every(c => {
        for (let i = 0; i < c.length; i++) {
          const cr = c.direction === 'across' ? c.row : c.row + i;
          const cc = c.direction === 'across' ? c.col + i : c.col;
          if (newGrid[cr][cc].toUpperCase() !== c.word[i]) return false;
        }
        return true;
      });

      if (!allSolved) {
        // AUTO-ADVANCE TO NEXT INCOMPLETE CLUE
        const currentIdx = puzzle.clues.findIndex(c => c.id === activeClue.id);
        const remainingClues = puzzle.clues.filter(c => {
          for (let i = 0; i < c.length; i++) {
            const cr = c.direction === 'across' ? c.row : c.row + i;
            const cc = c.direction === 'across' ? c.col + i : c.col;
            if (newGrid[cr][cc].toUpperCase() !== c.word[i]) return true;
          }
          return false;
        });

        if (remainingClues.length > 0) {
          let nextClue = puzzle.clues.slice(currentIdx + 1).find(c => remainingClues.some(rc => rc.id === c.id));
          if (!nextClue) {
            nextClue = remainingClues[0];
          }
          if (nextClue) {
            // Find first empty cell in nextClue
            let targetR = nextClue.row;
            let targetC = nextClue.col;
            for (let i = 0; i < nextClue.length; i++) {
              const cr = nextClue.direction === 'across' ? nextClue.row : nextClue.row + i;
              const cc = nextClue.direction === 'across' ? nextClue.col + i : nextClue.col;
              if (newGrid[cr][cc] === '') {
                targetR = cr;
                targetC = cc;
                break;
              }
            }
            setActiveRow(targetR);
            setActiveCol(targetC);
            setActiveDirection(nextClue.direction);
          }
        }
      }
    } else {
      // Advance to next empty or next cell in current word
      advanceCursor(newGrid);
    }
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

  const advanceCursor = (grid?: string[][]) => {
    if (!activeClue) return;
    const g = grid || userGrid;

    if (activeDirection === 'across') {
      // Look for next empty cell first
      for (let c = activeCol + 1; c < activeClue.col + activeClue.length; c++) {
        if (g[activeRow][c] === '') {
          setActiveCol(c);
          return;
        }
      }
      // If none empty, move to next sequential cell
      const nextCol = activeCol + 1;
      if (nextCol < activeClue.col + activeClue.length) {
        setActiveCol(nextCol);
      }
    } else {
      // Look for next empty cell first
      for (let r = activeRow + 1; r < activeClue.row + activeClue.length; r++) {
        if (g[r][activeCol] === '') {
          setActiveRow(r);
          return;
        }
      }
      // If none empty, move to next sequential cell
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
        for (let c = activeCol + 1; c < size; c++) {
          if (targetGrid[activeRow][c] !== null) {
            setActiveCol(c);
            setActiveDirection('across');
            break;
          }
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        for (let c = activeCol - 1; c >= 0; c--) {
          if (targetGrid[activeRow][c] !== null) {
            setActiveCol(c);
            setActiveDirection('across');
            break;
          }
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        for (let r = activeRow + 1; r < size; r++) {
          if (targetGrid[r][activeCol] !== null) {
            setActiveRow(r);
            setActiveDirection('down');
            break;
          }
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        for (let r = activeRow - 1; r >= 0; r--) {
          if (targetGrid[r][activeCol] !== null) {
            setActiveRow(r);
            setActiveDirection('down');
            break;
          }
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
    <div className={`flex-1 flex flex-col h-full ${themeStyle.container} overflow-hidden relative select-none`}>
      <canvas
        ref={confettiCanvasRef}
        className="pointer-events-none fixed inset-0 z-50"
      />

      {/* TOP HEADER */}
      <div className={`px-4 py-3 ${themeStyle.header} border-b flex items-center justify-between shadow-xs z-10`}>
        <button
          onClick={onBack}
          className="p-2 -ml-1 text-inherit hover:opacity-80 rounded-xl transition flex items-center gap-1 active:scale-95 cursor-pointer"
          title="Geri"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xs font-bold hidden sm:inline">Bulmacalar</span>
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            <span className="text-xs font-black px-2 py-0.5 rounded-md bg-indigo-500/20 text-white border border-indigo-400/30">
              {puzzle.level}
            </span>
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-white/20 text-white">
              {freqInfo.badge}
            </span>
            <span className="text-xs font-bold px-1.5 py-0.5 rounded-md bg-white/15 text-white">
              {puzzle.size}x{puzzle.size} ({puzzle.clues.length} Kelime)
            </span>
            <h2 className="text-sm font-extrabold truncate max-w-[140px] sm:max-w-[200px]">
              {puzzle.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 text-xs font-mono font-bold bg-white/15 text-white px-2 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-indigo-200" />
            <span>{formatTime(seconds)}</span>
          </div>
        </div>
      </div>

      {/* PERSISTENT SUCCESS BANNER WHEN PUZZLE SOLVED */}
      {isCompleted && (
        <div className="bg-emerald-600 text-white px-4 py-2.5 flex items-center justify-between shadow-md z-20 shrink-0 animate-fadeIn">
          <div className="flex items-center gap-2 min-w-0">
            <Trophy className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="text-xs font-black truncate">Bulmaca Tamamlandı ({finalScore} Puan)!</span>
          </div>
          {hasNextPuzzle && onNextPuzzle ? (
            <button
              type="button"
              onClick={onNextPuzzle}
              className="px-3.5 py-1.5 bg-white text-emerald-900 hover:bg-emerald-100 rounded-xl text-xs font-black flex items-center gap-1 shadow-sm transition active:scale-95 cursor-pointer shrink-0 ml-2"
            >
              <span>Sonraki Bulmaca</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onBack}
              className="px-3.5 py-1.5 bg-white text-emerald-900 hover:bg-emerald-100 rounded-xl text-xs font-black transition active:scale-95 cursor-pointer shrink-0 ml-2"
            >
              Listeye Dön
            </button>
          )}
        </div>
      )}

      {/* SCROLLABLE MAIN CONTENT (GRID + CLUE + KEYBOARD) */}
      <div className="flex-1 flex flex-col justify-between overflow-y-auto p-2 sm:p-4 max-w-xl mx-auto w-full">
        
        {/* ACTIVE CLUE BANNER */}
        <div className={`${themeStyle.card} rounded-2xl border-2 border-indigo-300 dark:border-indigo-800 shadow-md p-3 mb-2 transition`}>
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-lg uppercase tracking-wider ${
                activeDirection === 'across'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-emerald-600 text-white shadow-xs'
              }`}>
                {activeDirection === 'across' ? 'Yatay ➔' : 'Dikey ⬇'}
              </span>
              <span className="text-xs font-black text-slate-900 dark:text-white">
                {activeClue?.number}. İpucu
              </span>
              <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {activeClue?.length} Harf
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowCluesModal(true)}
                className="px-2 py-1 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/70 dark:hover:bg-indigo-900/70 rounded-xl text-indigo-700 dark:text-indigo-300 transition text-[11px] font-black flex items-center gap-1"
                title="Tüm İpuçlarını Gör"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">İpuçları</span>
              </button>
              <button
                onClick={() => cycleClue(-1)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 transition"
                title="Önceki İpucu"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => cycleClue(1)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 transition"
                title="Sonraki İpucu"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SENSES DISPLAY (Kelime türü: i., f., s., e., vb. ve Türkçe anlamları) */}
          <div className="space-y-1.5">
            {activeClue?.senses && activeClue.senses.length > 0 ? (
              activeClue.senses.map((sense, idx) => {
                const badge = getPosBadgeClasses(sense.pos);
                return (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2 bg-black/5 dark:bg-white/5 px-2.5 py-1.5 rounded-xl border border-black/10 dark:border-white/10"
                  >
                    <span className={`text-[11px] font-black px-1.5 py-0.2 rounded-md border shrink-0 ${badge.bg} ${badge.text} ${badge.border}`}>
                      ({sense.pos.replace(/[().]/g, '')}.)
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold leading-snug">
                      {sense.meaning}
                    </span>
                  </div>
                );
              })
            ) : (
              <p className="text-sm font-extrabold">
                {activeClue?.clue}
              </p>
            )}
          </div>

          {/* ACTIVE CLUE EXAMPLE SENTENCE & TRANSLATION (BUTTON TRIGGERED - DEFAULT KAPALI) */}
          {activeSentence && (
            <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
              {!showActiveSentence ? (
                <button
                  type="button"
                  onClick={() => setShowActiveSentence(true)}
                  className="w-full py-1.5 px-3 rounded-xl bg-indigo-50/90 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-dashed border-indigo-300 dark:border-indigo-800 text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-98 cursor-pointer shadow-2xs"
                  title="Örnek Cümle ve Çeviri İpucu Al"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  <span>💡 Örnek Cümle & Çeviri İpucu</span>
                </button>
              ) : (
                <div className="flex items-start justify-between gap-2 bg-indigo-50/80 dark:bg-indigo-950/50 p-2.5 rounded-xl border border-indigo-200/70 dark:border-indigo-900/70 animate-fadeIn">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                        <Sparkles className="w-3 h-3 text-indigo-500" />
                        <span>Örnek Cümle & Çeviri İpucu</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowActiveSentence(false)}
                        className="text-[10px] font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 px-1.5 py-0.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
                        title="İpucunu Gizle"
                      >
                        Gizle ✕
                      </button>
                    </div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {activeSentence.eng}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-0.5 italic">
                      {activeSentence.tr}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(activeSentence.eng);
                    }}
                    className="p-1.5 rounded-lg bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/60 dark:hover:bg-indigo-800 text-indigo-700 dark:text-indigo-300 transition shrink-0 cursor-pointer active:scale-95"
                    title="Örnek Cümleyi Dinle (TTS)"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CROSSWORD BOARD GRID */}
        <div className="flex items-center justify-center my-auto py-1">
          <div 
            className={`grid ${
              size >= 9 ? 'gap-1 p-2' : size >= 7 ? 'gap-1 sm:gap-1.5 p-2 sm:p-2.5' : 'gap-1.5 p-2.5 sm:p-3'
            } ${
              themeStyle.container.includes('#f7f0e1')
                ? 'bg-[#ede2cb] border-2 border-[#dfd0b4] shadow-md'
                : themeStyle.container.includes('#07170e')
                ? 'bg-[#0e2719] border-2 border-[#18422b] shadow-md'
                : themeStyle.container.includes('#000000')
                ? 'bg-[#121212] border-2 border-[#262626] shadow-md'
                : 'bg-slate-200/90 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-800 shadow-md'
            } rounded-2xl`}
            style={{
              gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
              width: '100%',
              maxWidth: size === 5 ? '320px' : size === 6 ? '350px' : size === 7 ? '380px' : size === 8 ? '410px' : size === 9 ? '440px' : '460px',
              aspectRatio: '1 / 1'
            }}
          >
            {Array.from({ length: size }).map((_, r) => (
              Array.from({ length: size }).map((__, c) => {
                const isTargetCell = targetGrid[r][c] !== null;
                const cellKey = `${r},${c}`;
                const isSelectedCell = r === activeRow && c === activeCol;
                const inActiveClue = isCellInActiveClue(r, c);
                const isWrong = wrongCellKey === cellKey;
                const clueNum = startNumbers[r][c];
                const char = userGrid[r][c];

                if (!isTargetCell) {
                  return (
                    <div
                      key={cellKey}
                      className={`w-full h-full ${
                        size >= 9 ? 'rounded-md sm:rounded-lg' : size >= 7 ? 'rounded-lg sm:rounded-xl' : 'rounded-xl'
                      } ${
                        themeStyle.container.includes('#f7f0e1')
                          ? 'bg-[#3d2e1e] border border-[#2b2014]/60 shadow-inner'
                          : themeStyle.container.includes('#07170e')
                          ? 'bg-[#06180e] border border-[#0d331e] shadow-inner'
                          : themeStyle.container.includes('#000000')
                          ? 'bg-[#18181b] border border-[#27272a] shadow-inner'
                          : 'bg-slate-800 dark:bg-slate-950 border border-slate-700/80 dark:border-slate-800 shadow-inner'
                      } pointer-events-none select-none`}
                      aria-hidden="true"
                    />
                  );
                }

                return (
                  <button
                    key={cellKey}
                    onClick={() => handleCellClick(r, c)}
                    className={`relative w-full h-full ${
                      size >= 9 ? 'rounded-md sm:rounded-lg' : size >= 7 ? 'rounded-lg sm:rounded-xl' : 'rounded-xl'
                    } flex items-center justify-center font-black transition ${
                      size >= 9 ? 'text-xs sm:text-base' : size >= 7 ? 'text-sm sm:text-xl' : 'text-lg sm:text-2xl'
                    } active:scale-95 select-none cursor-pointer ${
                      isWrong
                        ? 'cell-shake bg-rose-500 text-white ring-4 ring-rose-400 z-20 shadow-lg'
                        : isSelectedCell
                        ? 'bg-amber-300 dark:bg-amber-400 text-slate-950 ring-4 ring-indigo-500 shadow-lg z-10 scale-105 border-2 border-amber-500'
                        : inActiveClue
                        ? 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-950 dark:text-indigo-100 border-2 border-indigo-400 dark:border-indigo-600 shadow-xs'
                        : themeStyle.container.includes('#f7f0e1')
                        ? 'bg-[#fffdfa] text-[#3d2e1e] border-2 border-[#d5c7ad] hover:border-amber-600 shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-600 hover:border-indigo-400 shadow-xs'
                    }`}
                  >
                    {/* Clue Number Badge */}
                    {clueNum && (
                      <span className={`absolute ${
                        size >= 8 ? 'top-0.5 left-0.5 text-[7px] sm:text-[8px]' : 'top-0.5 left-1 text-[9px] sm:text-[10px]'
                      } font-black text-slate-500 dark:text-slate-400 leading-none`}>
                        {clueNum}
                      </span>
                    )}
                    <span className="mt-1 leading-none font-mono">
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
            className="flex-1 py-2 px-2 bg-amber-500/15 hover:bg-amber-500/25 text-amber-800 dark:text-amber-200 border border-amber-400/50 rounded-xl text-xs font-black flex items-center justify-center gap-1 transition active:scale-95 shadow-xs"
            title="Seçili kutucuğun harfini açar"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>Harf Aç ({hintsUsed})</span>
          </button>

          {activeClue && (
            <button
              onClick={() => speak(activeClue.word)}
              className="flex-1 py-2 px-2 bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-800 dark:text-indigo-200 border border-indigo-400/50 rounded-xl text-xs font-black flex items-center justify-center gap-1 transition active:scale-95 shadow-xs"
              title="İngilizce kelimeyi sesli dinle"
            >
              <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Dinle</span>
            </button>
          )}

          {activeClue && (
            <button
              onClick={() => onSaveWord(activeClue.word, activeClue.clue, puzzle.level)}
              className={`flex-1 py-2 px-2 rounded-xl text-xs font-black flex items-center justify-center gap-1 transition active:scale-95 border shadow-xs ${
                isWordSaved(activeClue.word)
                  ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border-emerald-500/50'
                  : 'bg-orange-500/15 hover:bg-orange-500/25 text-orange-800 dark:text-orange-200 border-orange-400/50'
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
                  <Bookmark className="w-3.5 h-3.5 text-orange-500" />
                  <span>Kaydet</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={handleClearWord}
            className="py-2 px-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-black flex items-center justify-center gap-1 transition active:scale-95 shadow-xs border border-slate-300 dark:border-slate-700"
            title="Bu kelimedeki harfleri temizle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* TACTILE VIRTUAL KEYBOARD */}
        <div className="bg-slate-200/80 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-300/80 dark:border-slate-800 p-1.5 sm:p-2 shadow-md space-y-1.5 mt-1 select-none max-w-lg mx-auto w-full">
          {/* Row 1 */}
          <div className="flex gap-1 justify-center">
            {kbRows[0].map(k => (
              <button
                key={k}
                onClick={() => handleKeyPress(k)}
                className="flex-1 min-w-[28px] max-w-[42px] h-11 sm:h-12 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-950 dark:text-white font-black text-base sm:text-lg rounded-xl shadow-xs border-b-[3px] border-slate-300 dark:border-slate-950 active:translate-y-0.5 active:border-b-0 active:bg-indigo-50 dark:active:bg-indigo-950/40 transition flex items-center justify-center cursor-pointer"
              >
                {k}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-1 justify-center px-1.5">
            {kbRows[1].map(k => (
              <button
                key={k}
                onClick={() => handleKeyPress(k)}
                className="flex-1 min-w-[28px] max-w-[42px] h-11 sm:h-12 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-950 dark:text-white font-black text-base sm:text-lg rounded-xl shadow-xs border-b-[3px] border-slate-300 dark:border-slate-950 active:translate-y-0.5 active:border-b-0 active:bg-indigo-50 dark:active:bg-indigo-950/40 transition flex items-center justify-center cursor-pointer"
              >
                {k}
              </button>
            ))}
          </div>

          {/* Row 3 with Backspace and Next Clue */}
          <div className="flex gap-1 justify-center">
            <button
              onClick={handleBackspace}
              className="min-w-[46px] max-w-[56px] h-11 sm:h-12 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/70 text-rose-700 dark:text-rose-200 font-black text-base rounded-xl shadow-xs border-b-[3px] border-rose-200 dark:border-rose-900 active:translate-y-0.5 active:border-b-0 transition flex items-center justify-center cursor-pointer"
              title="Geri Sil"
            >
              ⌫
            </button>

            {kbRows[2].map(k => (
              <button
                key={k}
                onClick={() => handleKeyPress(k)}
                className="flex-1 min-w-[28px] max-w-[42px] h-11 sm:h-12 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-950 dark:text-white font-black text-base sm:text-lg rounded-xl shadow-xs border-b-[3px] border-slate-300 dark:border-slate-950 active:translate-y-0.5 active:border-b-0 active:bg-indigo-50 dark:active:bg-indigo-950/40 transition flex items-center justify-center cursor-pointer"
              >
                {k}
              </button>
            ))}

            <button
              onClick={() => cycleClue(1)}
              className="min-w-[46px] max-w-[56px] h-11 sm:h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-base rounded-xl shadow-xs border-b-[3px] border-indigo-800 active:translate-y-0.5 active:border-b-0 transition flex items-center justify-center gap-1 cursor-pointer"
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
          <div className={`${themeStyle.card} border rounded-3xl max-w-md w-full p-6 text-center shadow-2xl relative overflow-hidden`}>
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
                const badge = getPosBadgeClasses(c.partOfSpeech);
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
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-extrabold text-slate-900 dark:text-white tracking-wide">
                            {c.word}
                          </span>
                          {c.partOfSpeech && (
                            <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border ${badge.bg} ${badge.text} ${badge.border}`}>
                              ({c.partOfSpeech.replace(/[().]/g, '')}.)
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-bold block">
                          {c.clue}
                        </span>
                        {(() => {
                          const sent = getExampleSentenceForWord(c.word, c.clue);
                          return (
                            <div className="mt-1 text-[11px] text-indigo-700 dark:text-indigo-300 font-medium">
                              <span>&ldquo;{sent.eng}&rdquo;</span>
                              <span className="text-slate-500 dark:text-slate-400 block italic text-[10px]">{sent.tr}</span>
                            </div>
                          );
                        })()}
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
                  onClick={() => {
                    setShowVictory(false);
                    onNextPuzzle();
                  }}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm rounded-2xl shadow-lg transition flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <span>Sonraki Bulmacaya Geç</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => {
                  setShowVictory(false);
                  onBack();
                }}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-2xl transition cursor-pointer"
              >
                Bulmacalar Listesine Dön
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ALL CLUES MODAL */}
      {showCluesModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
          <div className={`${themeStyle.card} border rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden`}>
            {/* Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <List className="w-5 h-5 text-indigo-500" />
                  <span>Tüm Bulmaca İpuçları</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  İpucuna tıklayarak doğrudan o kelimeye gidebilirsiniz.
                </p>
              </div>
              <button
                onClick={() => setShowCluesModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Clues Content List */}
            <div className="p-4 overflow-y-auto space-y-4 flex-1">
              {/* Yatay (Across) */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Yatay İpuçları (➔)
                  </h4>
                </div>
                <div className="space-y-2">
                  {puzzle.clues.filter(c => c.direction === 'across').map(c => {
                    const isCompletedWord = completedWordIds.has(c.id);
                    const isCurrent = activeClue?.id === c.id;
                    const badge = getPosBadgeClasses(c.partOfSpeech);

                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          setActiveRow(c.row);
                          setActiveCol(c.col);
                          setActiveDirection('across');
                          setShowCluesModal(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-2xl border transition flex items-start justify-between gap-3 ${
                          isCurrent
                            ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-400 dark:border-blue-600 shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {c.number}
                          </span>
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="text-[11px] font-black text-slate-500 dark:text-slate-400">
                                ({c.length} harf)
                              </span>
                              {isCompletedWord && (
                                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 ml-auto">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>{c.word}</span>
                                </span>
                              )}
                            </div>
                            <div className="space-y-1">
                              {c.senses && c.senses.length > 0 ? (
                                c.senses.map((s, sIdx) => {
                                  const b = getPosBadgeClasses(s.pos);
                                  return (
                                    <div key={sIdx} className="flex items-start gap-1.5 text-xs">
                                      <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border shrink-0 ${b.bg} ${b.text} ${b.border}`}>
                                        ({s.pos.replace(/[().]/g, '')}.)
                                      </span>
                                      <span className="font-bold text-slate-800 dark:text-slate-200 leading-snug">
                                        {s.meaning}
                                      </span>
                                    </div>
                                  );
                                })
                              ) : (
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">
                                  {c.clue}
                                </p>
                              )}
                            </div>

                            {/* ÖRNEK CÜMLE & ÇEVİRİ (DEFAULT KAPALI - BUTONLA GÖZÜKÜR) */}
                            {(() => {
                              const sentence = getExampleSentenceForWord(c.word, c.clue);
                              const isExpanded = !!expandedClueSentences[c.id];

                              return (
                                <div className="mt-2 pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
                                  {!isExpanded ? (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleClueSentence(c.id);
                                      }}
                                      className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:underline flex items-center gap-1 cursor-pointer py-0.5"
                                    >
                                      <Sparkles className="w-3 h-3" />
                                      <span>Örnek Cümleyi Göster</span>
                                    </button>
                                  ) : (
                                    <div className="bg-white/70 dark:bg-slate-900/60 p-2 rounded-xl border border-indigo-100 dark:border-indigo-900/40">
                                      <div className="flex items-center justify-between gap-1 mb-0.5">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                                          <Sparkles className="w-2.5 h-2.5" />
                                          <span>Örnek Cümle:</span>
                                        </span>
                                        <div className="flex items-center gap-1">
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              speak(sentence.eng);
                                            }}
                                            className="p-1 rounded-md text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950 transition cursor-pointer active:scale-95"
                                            title="Cümleyi Dinle (TTS)"
                                          >
                                            <Volume2 className="w-3.5 h-3.5" />
                                          </button>
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              toggleClueSentence(c.id);
                                            }}
                                            className="text-[10px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-1 py-0.5"
                                          >
                                            Gizle
                                          </button>
                                        </div>
                                      </div>
                                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-snug">
                                        {sentence.eng}
                                      </p>
                                      <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-0.5 italic">
                                        {sentence.tr}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      </button>
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
                <div className="space-y-2">
                  {puzzle.clues.filter(c => c.direction === 'down').map(c => {
                    const isCompletedWord = completedWordIds.has(c.id);
                    const isCurrent = activeClue?.id === c.id;

                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          setActiveRow(c.row);
                          setActiveCol(c.col);
                          setActiveDirection('down');
                          setShowCluesModal(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-2xl border transition flex items-start justify-between gap-3 ${
                          isCurrent
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-600 shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-emerald-300'
                        }`}
                      >
                        <div className="flex items-start gap-2 w-full">
                          <span className="w-5 h-5 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {c.number}
                          </span>
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="text-[11px] font-black text-slate-500 dark:text-slate-400">
                                ({c.length} harf)
                              </span>
                              {isCompletedWord && (
                                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 ml-auto">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>{c.word}</span>
                                </span>
                              )}
                            </div>
                            <div className="space-y-1">
                              {c.senses && c.senses.length > 0 ? (
                                c.senses.map((s, sIdx) => {
                                  const b = getPosBadgeClasses(s.pos);
                                  return (
                                    <div key={sIdx} className="flex items-start gap-1.5 text-xs">
                                      <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border shrink-0 ${b.bg} ${b.text} ${b.border}`}>
                                        ({s.pos.replace(/[().]/g, '')}.)
                                      </span>
                                      <span className="font-bold text-slate-800 dark:text-slate-200 leading-snug">
                                        {s.meaning}
                                      </span>
                                    </div>
                                  );
                                })
                              ) : (
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">
                                  {c.clue}
                                </p>
                              )}
                            </div>

                            {/* ÖRNEK CÜMLE & ÇEVİRİ (DEFAULT KAPALI - BUTONLA GÖZÜKÜR) */}
                            {(() => {
                              const sentence = getExampleSentenceForWord(c.word, c.clue);
                              const isExpanded = !!expandedClueSentences[c.id];

                              return (
                                <div className="mt-2 pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
                                  {!isExpanded ? (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleClueSentence(c.id);
                                      }}
                                      className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:underline flex items-center gap-1 cursor-pointer py-0.5"
                                    >
                                      <Sparkles className="w-3 h-3" />
                                      <span>Örnek Cümleyi Göster</span>
                                    </button>
                                  ) : (
                                    <div className="bg-white/70 dark:bg-slate-900/60 p-2 rounded-xl border border-indigo-100 dark:border-indigo-900/40">
                                      <div className="flex items-center justify-between gap-1 mb-0.5">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                                          <Sparkles className="w-2.5 h-2.5" />
                                          <span>Örnek Cümle:</span>
                                        </span>
                                        <div className="flex items-center gap-1">
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              speak(sentence.eng);
                                            }}
                                            className="p-1 rounded-md text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950 transition cursor-pointer active:scale-95"
                                            title="Cümleyi Dinle (TTS)"
                                          >
                                            <Volume2 className="w-3.5 h-3.5" />
                                          </button>
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              toggleClueSentence(c.id);
                                            }}
                                            className="text-[10px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-1 py-0.5"
                                          >
                                            Gizle
                                          </button>
                                        </div>
                                      </div>
                                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-snug">
                                        {sentence.eng}
                                      </p>
                                      <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-0.5 italic">
                                        {sentence.tr}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
              <button
                onClick={() => setShowCluesModal(false)}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition"
              >
                Kapat ve Bulmacaya Dön
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
