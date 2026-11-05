import React, { useState, useMemo } from 'react';
import { 
  searchWordRelations, 
  generateRelationQuiz, 
  WordRelationEntry,
  RelationQuizQuestion 
} from '../wordRelations';
import { 
  Volume2, 
  Search, 
  ArrowLeftRight, 
  Sparkles, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  HelpCircle,
  BookOpen
} from 'lucide-react';

interface WordRelationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  speak: (text: string) => void;
  toggleSaveWord: (wordObj: any, chosenLevel?: string) => void;
  isWordSaved: (wordStr: string) => boolean;
}

export const WordRelationsModal: React.FC<WordRelationsModalProps> = ({
  isOpen,
  onClose,
  speak,
  toggleSaveWord,
  isWordSaved,
}) => {
  const [activeTab, setActiveTab] = useState<'browse' | 'quiz'>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');

  // Quiz State
  const [quizLevel, setQuizLevel] = useState<string>('ALL');
  const [currentQuiz, setCurrentQuiz] = useState<RelationQuizQuestion | null>(() => generateRelationQuiz('ALL'));
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);

  // Filtered browse list
  const filteredRelations = useMemo(() => {
    return searchWordRelations(searchQuery, selectedLevel);
  }, [searchQuery, selectedLevel]);

  if (!isOpen) return null;

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setCurrentQuiz(generateRelationQuiz(quizLevel));
  };

  const handleSelectQuizOption = (optWord: string) => {
    if (selectedOption !== null || !currentQuiz) return;
    setSelectedOption(optWord);
    if (optWord === currentQuiz.correctAnswer) {
      setQuizScore(s => s + 10);
      setQuizStreak(st => st + 1);
    } else {
      setQuizStreak(0);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xl text-indigo-400">
                <ArrowLeftRight className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <span>Eş & Zıt Anlamlar</span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Synonyms & Antonyms
                  </span>
                </h2>
                <p className="text-xs text-slate-400">Kelime hazinenizi ikili bağlantılarla pekiştirin</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex gap-2 mt-3.5 bg-slate-950/60 p-1 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('browse')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition cursor-pointer ${
                activeTab === 'browse'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Sözlük & Kartlar ({filteredRelations.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('quiz');
                if (!currentQuiz) setCurrentQuiz(generateRelationQuiz(quizLevel));
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Hızlı Test & Alıştırma</span>
            </button>
          </div>
        </div>

        {/* TAB 1: BROWSE & LEARN */}
        {activeTab === 'browse' && (
          <div className="flex-1 flex flex-col min-h-0">
            {/* SEARCH & LEVEL FILTER BAR */}
            <div className="p-3 sm:p-4 border-b border-slate-800/80 bg-slate-900/60 space-y-2.5 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Kelime, Türkçe anlamı, eş veya zıt anlam ara..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* LEVEL FILTER CHIPS */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                {['ALL', 'A1', 'A2', 'B1', 'B2'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`text-xs font-black px-3 py-1 rounded-lg border transition cursor-pointer shrink-0 ${
                      selectedLevel === lvl
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                        : 'bg-slate-800/70 text-slate-400 border-slate-700/60 hover:bg-slate-700'
                    }`}
                  >
                    {lvl === 'ALL' ? 'Tüm Seviyeler' : lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* RELATIONS CARDS LIST */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3.5">
              {filteredRelations.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <p className="text-3xl mb-2">🔍</p>
                  <p className="text-sm font-bold">Aramanıza uygun eş/zıt anlamlı kelime bulunamadı.</p>
                  <p className="text-xs text-slate-500 mt-1">Farklı bir kelime veya seviye filtresi deneyin.</p>
                </div>
              ) : (
                filteredRelations.map((entry) => {
                  const isMainSaved = isWordSaved(entry.word);
                  return (
                    <div 
                      key={entry.id}
                      className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 transition hover:border-slate-700 shadow-sm space-y-3"
                    >
                      {/* CARD HEADER: WORD, TR, LEVEL, CATEGORY, AUDIO, SAVE */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-base sm:text-lg font-black text-white tracking-wide">
                              {entry.word}
                            </span>
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-indigo-900/60 text-indigo-300 border border-indigo-700/60">
                              {entry.level}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded-md">
                              {entry.category}
                            </span>
                            <button
                              onClick={() => speak(entry.word)}
                              className="p-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 transition cursor-pointer"
                              title="Telaffuz Dinle"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                            {entry.tr}
                          </p>
                        </div>

                        <button
                          onClick={() => toggleSaveWord({ original: entry.word, translated: entry.tr }, entry.level)}
                          className={`p-2 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer shrink-0 ${
                            isMainSaved
                              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                          }`}
                          title={isMainSaved ? "Defterden Kaldır" : "Deftere Ekle"}
                        >
                          {isMainSaved ? <BookmarkCheck className="w-4 h-4 text-emerald-400" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* EXAMPLE SENTENCE */}
                      {entry.exampleEng && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs">
                          <p className="font-semibold text-slate-200 italic">
                            "{entry.exampleEng}"
                          </p>
                          {entry.exampleTr && (
                            <p className="text-slate-400 mt-0.5 text-[11px]">
                              {entry.exampleTr}
                            </p>
                          )}
                        </div>
                      )}

                      {/* SYNONYMS & ANTONYMS GRID */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 border-t border-slate-800/70">
                        {/* SYNONYMS */}
                        <div className="bg-emerald-950/20 border border-emerald-900/30 p-2.5 rounded-xl space-y-1.5">
                          <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-emerald-400">
                            <span>🔄</span>
                            <span>Eş Anlamlılar (Synonyms)</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {entry.synonyms.map((syn, sIdx) => {
                              const isSynSaved = isWordSaved(syn.word);
                              return (
                                <div 
                                  key={sIdx}
                                  className="flex items-center gap-1 bg-emerald-900/40 border border-emerald-800/50 px-2 py-1 rounded-lg text-xs"
                                >
                                  <span className="font-extrabold text-emerald-200">{syn.word}</span>
                                  <span className="text-[10px] text-emerald-400/80">({syn.tr})</span>
                                  <button
                                    onClick={() => speak(syn.word)}
                                    className="p-0.5 hover:text-white text-emerald-300"
                                    title="Dinle"
                                  >
                                    <Volume2 className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => toggleSaveWord({ original: syn.word, translated: syn.tr }, syn.level || entry.level)}
                                    className="p-0.5 hover:text-white text-emerald-300"
                                    title={isSynSaved ? "Defterde Kayıtlı" : "Deftere Kaydet"}
                                  >
                                    {isSynSaved ? <BookmarkCheck className="w-3 h-3 text-emerald-400" /> : <Bookmark className="w-3 h-3" />}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* ANTONYMS */}
                        <div className="bg-amber-950/20 border border-amber-900/30 p-2.5 rounded-xl space-y-1.5">
                          <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-amber-400">
                            <span>⚡</span>
                            <span>Zıt Anlamlılar (Antonyms)</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {entry.antonyms.map((ant, aIdx) => {
                              const isAntSaved = isWordSaved(ant.word);
                              return (
                                <div 
                                  key={aIdx}
                                  className="flex items-center gap-1 bg-amber-900/40 border border-amber-800/50 px-2 py-1 rounded-lg text-xs"
                                >
                                  <span className="font-extrabold text-amber-200">{ant.word}</span>
                                  <span className="text-[10px] text-amber-400/80">({ant.tr})</span>
                                  <button
                                    onClick={() => speak(ant.word)}
                                    className="p-0.5 hover:text-white text-amber-300"
                                    title="Dinle"
                                  >
                                    <Volume2 className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => toggleSaveWord({ original: ant.word, translated: ant.tr }, ant.level || entry.level)}
                                    className="p-0.5 hover:text-white text-amber-300"
                                    title={isAntSaved ? "Defterde Kayıtlı" : "Deftere Kaydet"}
                                  >
                                    {isAntSaved ? <BookmarkCheck className="w-3 h-3 text-amber-400" /> : <Bookmark className="w-3 h-3" />}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* TAB 2: SPEED QUIZ / PRACTICE */}
        {activeTab === 'quiz' && (
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto flex flex-col justify-between">
            {/* QUIZ SCORE BAR & LEVEL SELECT */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="text-xs">
                  <span className="text-slate-400">Puan: </span>
                  <span className="font-black text-amber-400 text-sm">{quizScore}</span>
                </div>
                {quizStreak > 1 && (
                  <div className="text-xs font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60 animate-bounce">
                    🔥 {quizStreak} Seri!
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1">
                {['ALL', 'A1', 'A2', 'B1', 'B2'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setQuizLevel(lvl);
                      setSelectedOption(null);
                      setCurrentQuiz(generateRelationQuiz(lvl));
                    }}
                    className={`text-[10px] font-black px-2 py-0.5 rounded border transition cursor-pointer ${
                      quizLevel === lvl
                        ? 'bg-indigo-600 text-white border-indigo-400'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* QUIZ CARD */}
            {currentQuiz ? (
              <div className="flex-1 flex flex-col items-center justify-center my-4 space-y-6">
                <div className="text-center space-y-2 max-w-md">
                  <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-full border ${
                    currentQuiz.relationType === 'synonym'
                      ? 'bg-emerald-950/70 text-emerald-300 border-emerald-700/60'
                      : 'bg-amber-950/70 text-amber-300 border-amber-700/60'
                  }`}>
                    {currentQuiz.relationType === 'synonym' ? '🔄 Eş Anlamlısını Bul' : '⚡ Zıt Anlamlısını Bul'}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center justify-center gap-2 mt-2">
                    <span>{currentQuiz.targetWord}</span>
                    <button
                      onClick={() => speak(currentQuiz.targetWord)}
                      className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-indigo-400"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">({currentQuiz.targetTr})</p>
                  <p className="text-xs text-slate-400 mt-1">{currentQuiz.promptTr}</p>
                </div>

                {/* OPTIONS */}
                <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQuiz.options.map((opt, oIdx) => {
                    const isSelected = selectedOption === opt.word;
                    const isCorrect = opt.word === currentQuiz.correctAnswer;
                    let btnClass = "p-3.5 rounded-2xl border-2 text-left transition font-extrabold flex items-center justify-between cursor-pointer ";

                    if (selectedOption === null) {
                      btnClass += "bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white active:scale-98";
                    } else {
                      if (isCorrect) {
                        btnClass += "bg-emerald-950/80 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/50";
                      } else if (isSelected && !isCorrect) {
                        btnClass += "bg-rose-950/80 border-rose-500 text-rose-100";
                      } else {
                        btnClass += "bg-slate-900/60 border-slate-800 text-slate-500 opacity-40";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={selectedOption !== null}
                        onClick={() => handleSelectQuizOption(opt.word)}
                        className={btnClass}
                      >
                        <div>
                          <div className="text-sm font-black">{opt.word}</div>
                          <div className="text-[11px] opacity-75 font-normal">{opt.tr}</div>
                        </div>
                        {selectedOption !== null && (
                          <div>
                            {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                            {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400" />}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* FEEDBACK & NEXT BUTTON */}
                {selectedOption !== null && (
                  <div className="w-full max-w-md p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2.5 animate-fadeIn">
                    <div className="text-xs font-bold text-slate-200">
                      💡 {currentQuiz.explanation}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          toggleSaveWord({ 
                            original: currentQuiz.correctAnswer, 
                            translated: currentQuiz.correctAnswerTr 
                          }, currentQuiz.level);
                        }}
                        className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition"
                      >
                        <Bookmark className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Doğru Cevabı Deftere Kaydet</span>
                      </button>
                      <button
                        onClick={handleNextQuiz}
                        className="py-2 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-black text-white flex items-center justify-center gap-1 shadow transition cursor-pointer"
                      >
                        <span>Sonraki Soru ➔</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-sm text-slate-400">Bu seviyede soru üretilemedi.</p>
                <button
                  onClick={() => {
                    setQuizLevel('ALL');
                    setCurrentQuiz(generateRelationQuiz('ALL'));
                  }}
                  className="mt-3 px-4 py-2 bg-indigo-600 text-xs font-bold text-white rounded-xl"
                >
                  Tüm Seviyeleri Seç
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
