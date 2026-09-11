import React, { useState, useMemo } from 'react';
import type { PhraseInfo, CEFRLevel, PhraseCategory } from '../types';
import { getAllPhrasesList } from '../data';
import { Volume2, BookmarkPlus, Check, Search, Sparkles, RefreshCw, Trophy } from 'lucide-react';

interface PhraseCardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSavePhrase: (phrase: string, info: PhraseInfo) => void;
  savedPhrasesSet: Set<string>;
  onSpeak: (text: string) => void;
}

interface QuizQuestion {
  target: { phrase: string; info: PhraseInfo };
  options: string[];
  correctAnswer: string;
}

export const PhraseCardsModal: React.FC<PhraseCardsModalProps> = ({
  isOpen,
  onClose,
  onSavePhrase,
  savedPhrasesSet,
  onSpeak,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'ALL'>('ALL');
  const [selectedType, setSelectedType] = useState<PhraseCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'cards' | 'saved' | 'quiz'>('cards');

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const allPhrases = useMemo(() => {
    return getAllPhrasesList();
  }, []);

  const filteredPhrases = useMemo(() => {
    return allPhrases.filter(p => {
      if (selectedLevel !== 'ALL' && p.level !== selectedLevel) return false;
      if (selectedType !== 'ALL' && p.type !== selectedType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchPhrase = p.phrase.toLowerCase().includes(q);
        const matchTr = p.tr.toLowerCase().includes(q);
        const matchEx = p.ex?.toLowerCase().includes(q);
        if (!matchPhrase && !matchTr && !matchEx) return false;
      }
      if (activeTab === 'saved') {
        return savedPhrasesSet.has(p.phrase.toLowerCase());
      }
      return true;
    });
  }, [allPhrases, selectedLevel, selectedType, searchQuery, activeTab, savedPhrasesSet]);

  // Generate 10 random quiz questions from pool
  const quizQuestions = useMemo<QuizQuestion[]>(() => {
    if (allPhrases.length < 4) return [];
    
    // Pool depending on selected level
    const pool = selectedLevel === 'ALL' 
      ? allPhrases 
      : (allPhrases.filter(p => p.level === selectedLevel).length >= 4 
          ? allPhrases.filter(p => p.level === selectedLevel) 
          : allPhrases);
    
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const selected10 = shuffledPool.slice(0, Math.min(10, shuffledPool.length));

    return selected10.map(target => {
      const wrongPool = allPhrases.filter(p => p.phrase !== target.phrase);
      const shuffledWrong = [...wrongPool].sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [target.tr, ...shuffledWrong.map(w => w.tr)].sort(() => 0.5 - Math.random());

      return {
        target,
        options,
        correctAnswer: target.tr
      };
    });
  }, [allPhrases, selectedLevel, quizFinished]);

  const restartQuiz = () => {
    setQuizIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setQuizFinished(false);
  };

  const handleSelectOption = (opt: string) => {
    if (isAnswerChecked) return;
    setSelectedAnswer(opt);
    setIsAnswerChecked(true);

    const currentQ = quizQuestions[quizIndex];
    if (currentQ && opt === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (!isOpen) return null;

  const getTypeBadge = (type: PhraseCategory) => {
    switch (type) {
      case 'phrasal':
        return { label: 'Deyimsel Fiil (Phrasal)', bg: 'bg-amber-100 text-amber-900 border-amber-300' };
      case 'idiom':
        return { label: 'Deyim (Idiom)', bg: 'bg-purple-100 text-purple-900 border-purple-300' };
      case 'collocation':
        return { label: 'Kalıp (Collocation)', bg: 'bg-blue-100 text-blue-900 border-blue-300' };
      case 'academic':
        return { label: 'Akademik İfade', bg: 'bg-emerald-100 text-emerald-900 border-emerald-300' };
      default:
        return { label: 'Kalıp', bg: 'bg-slate-100 text-slate-800 border-slate-300' };
    }
  };

  const getLevelBadge = (lvl: CEFRLevel) => {
    switch (lvl) {
      case 'A1': return 'bg-emerald-500 text-white';
      case 'A2': return 'bg-sky-500 text-white';
      case 'B1': return 'bg-amber-500 text-white';
      case 'B2': return 'bg-rose-500 text-white';
      default: return 'bg-indigo-500 text-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 animate-fadeIn">
      <div className="bg-slate-900 text-slate-100 w-full max-w-2xl max-h-[90vh] rounded-3xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl p-2 bg-amber-400/10 border border-amber-400/20 rounded-2xl">🎯</span>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">Kalıp & Deyim Kartları Stüdyosu</h3>
              <p className="text-xs text-slate-400">Metinlerde geçen tüm phrasal verb, deyim ve kalıplar</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm transition"
          >
            ✕
          </button>
        </div>

        {/* Tab Selector */}
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('cards')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${
                activeTab === 'cards'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📚 Tüm Kalıplar ({allPhrases.length})
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${
                activeTab === 'saved'
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ⭐ Kaydettiklerim ({savedPhrasesSet.size})
            </button>
            <button
              onClick={() => {
                setActiveTab('quiz');
                restartQuiz();
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1 ${
                activeTab === 'quiz'
                  ? 'bg-indigo-600 text-white border border-indigo-400 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Kalıp Sınavı</span>
            </button>
          </div>

          {activeTab !== 'quiz' && (
            <>
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Kalıp veya Türkçe anlam ara... (örn: give up, decision fatigue)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-800 text-xs text-white rounded-xl border border-slate-700 focus:outline-none focus:border-amber-400 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs">
                {/* Level Selector */}
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase mr-1">Seviye:</span>
                  {(['ALL', 'A1', 'A2', 'B1', 'B2'] as const).map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-2 py-0.5 rounded-lg text-[11px] font-bold border transition ${
                        selectedLevel === lvl
                          ? 'bg-amber-400 border-amber-300 text-amber-950 shadow-xs'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      {lvl === 'ALL' ? 'Tümü' : lvl}
                    </button>
                  ))}
                </div>

                {/* Type Selector */}
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase mr-1">Tür:</span>
                  {(['ALL', 'phrasal', 'idiom', 'collocation', 'academic'] as const).map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedType(t)}
                      className={`px-2 py-0.5 rounded-lg text-[11px] font-bold border transition ${
                        selectedType === t
                          ? 'bg-indigo-600 border-indigo-500 text-white shadow-xs'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      {t === 'ALL' ? 'Tümü' : t === 'phrasal' ? 'Phrasal' : t === 'idiom' ? 'Deyim' : t === 'collocation' ? 'Kalıp' : 'Akademik'}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Content Body */}
        {activeTab === 'quiz' ? (
          <div className="flex-1 overflow-y-auto p-5 flex flex-col justify-center items-center">
            {quizFinished ? (
              <div className="w-full max-w-md bg-slate-800/90 border border-slate-700 p-6 rounded-3xl text-center shadow-xl space-y-4">
                <div className="w-16 h-16 mx-auto bg-amber-400/20 text-amber-300 rounded-full flex items-center justify-center text-3xl shadow-inner">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">Tebrikler! Test Tamamlandı</h4>
                  <p className="text-xs text-slate-400 mt-1">10 soru içerisinden başarı sonucunuz:</p>
                </div>
                <div className="text-4xl font-extrabold text-amber-400">
                  {score} / {quizQuestions.length}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {score >= 8 
                    ? "🌟 Harika! Deyim ve kalıp bilginiz üst seviyede!" 
                    : score >= 5 
                    ? "👍 Güzel performans! Eksik kalıpları defterinize ekleyerek tekrar edebilirsiniz." 
                    : "📖 Düzenli okuma yaparak ve kalıpları defterinize kaydederek pekiştirebilirsiniz."}
                </p>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={restartQuiz}
                    className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-bold text-xs text-white transition flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <RefreshCw className="w-4 h-4" /> Yeniden Başla
                  </button>
                  <button
                    onClick={() => setActiveTab('cards')}
                    className="flex-1 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 font-bold text-xs text-white transition"
                  >
                    Kalıplara Dön
                  </button>
                </div>
              </div>
            ) : quizQuestions.length > 0 ? (
              <div className="w-full max-w-lg bg-slate-800/90 border border-slate-700 p-5 rounded-3xl shadow-xl flex flex-col gap-4">
                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-700">
                  <span className="font-bold text-amber-400">Soru {quizIndex + 1} / {quizQuestions.length}</span>
                  <span className="bg-slate-700 px-2.5 py-0.5 rounded-full text-white font-bold">Skor: {score}</span>
                </div>

                {/* Target Phrase */}
                <div className="text-center py-3 bg-slate-900/80 rounded-2xl border border-slate-750">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${getLevelBadge(quizQuestions[quizIndex].target.info.level)}`}>
                      {quizQuestions[quizIndex].target.info.level}
                    </span>
                    <span className="text-[10px] text-slate-400">Bu ifadenin Türkçe anlamı nedir?</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center gap-2">
                    {quizQuestions[quizIndex].target.phrase}
                    <button
                      onClick={() => onSpeak(quizQuestions[quizIndex].target.phrase)}
                      className="text-amber-400 hover:text-amber-300 p-1"
                      title="Dinle"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </h3>
                  {quizQuestions[quizIndex].target.info.ex && (
                    <p className="text-xs text-slate-400 italic mt-1.5 px-3">
                      "{quizQuestions[quizIndex].target.info.ex}"
                    </p>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {quizQuestions[quizIndex].options.map((opt, oIdx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrect = opt === quizQuestions[quizIndex].correctAnswer;
                    
                    let btnStyle = "bg-slate-900/60 hover:bg-slate-750 border-slate-700 text-slate-200";
                    if (isAnswerChecked) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-600/30 border-emerald-500 text-emerald-300 font-bold";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-600/30 border-rose-500 text-rose-300 font-bold";
                      } else {
                        btnStyle = "bg-slate-900/30 border-slate-800 text-slate-500 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isAnswerChecked}
                        onClick={() => handleSelectOption(opt)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isAnswerChecked && isCorrect && <span className="text-emerald-400 font-bold">✓ Doğru</span>}
                        {isAnswerChecked && isSelected && !isCorrect && <span className="text-rose-400 font-bold">✕ Yanlış</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback and next button */}
                {isAnswerChecked && (
                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-700">
                    <button
                      onClick={() => onSavePhrase(quizQuestions[quizIndex].target.phrase, quizQuestions[quizIndex].target.info)}
                      className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1"
                    >
                      <BookmarkPlus className="w-3.5 h-3.5" /> Deftere Kaydet
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow transition"
                    >
                      {quizIndex + 1 < quizQuestions.length ? "Sonraki Soru ➔" : "Sonucu Gör ➔"}
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ) : (
          /* Phrases List Container */
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredPhrases.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-xs">
                <p className="text-3xl mb-2">🔍</p>
                <p className="font-semibold">Seçilen kriterlere uygun kalıp bulunamadı.</p>
              </div>
            ) : (
              filteredPhrases.map((item) => {
                const isSaved = savedPhrasesSet.has(item.phrase.toLowerCase());
                const typeBadge = getTypeBadge(item.type);
                const levelBadge = getLevelBadge(item.level);

                return (
                  <div
                    key={item.phrase}
                    className="bg-slate-800/90 border border-slate-700 hover:border-amber-400/60 p-3.5 rounded-2xl shadow-sm transition flex flex-col gap-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${levelBadge}`}>
                            {item.level}
                          </span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${typeBadge.bg}`}>
                            {typeBadge.label}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                          {item.phrase}
                          <button
                            onClick={() => onSpeak(item.phrase)}
                            className="text-amber-400 hover:text-amber-300 p-1 rounded-md hover:bg-slate-700 transition"
                            title="Telaffuz et"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </h4>
                      </div>

                      <button
                        onClick={() => onSavePhrase(item.phrase, item)}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 shrink-0 ${
                          isSaved
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-400 hover:bg-amber-300 text-amber-950 shadow-xs'
                        }`}
                        title={isSaved ? "Zaten Leitner Defterinizde" : "Leitner Kelime Defterine Ekle"}
                      >
                        {isSaved ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Eklendi</span>
                          </>
                        ) : (
                          <>
                            <BookmarkPlus className="w-3.5 h-3.5" />
                            <span>Deftere Ekle</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Türkçe Karşılık */}
                    <div className="text-xs font-semibold text-amber-300/90 bg-slate-900/60 p-2 rounded-xl border border-slate-750">
                      🇹🇷 {item.tr}
                    </div>

                    {/* Örnek Cümle */}
                    {item.ex && (
                      <div className="text-[11px] text-slate-300 italic bg-slate-900/40 p-2 rounded-xl border border-slate-800 flex items-start justify-between gap-2">
                        <span>"{item.ex}"</span>
                        <button
                          onClick={() => onSpeak(item.ex)}
                          className="text-slate-400 hover:text-white shrink-0"
                          title="Cümleyi dinle"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 text-center text-slate-400 text-[11px] flex justify-between items-center px-5">
          <span>{activeTab === 'quiz' ? '10 soruluk interaktif kalıp testi' : `Toplam ${filteredPhrases.length} kalıp listeleniyor`}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xs transition"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
