import React, { useState } from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { GRAMMAR_TOPICS, GrammarPracticeItem } from '../grammarData';
import {
  Trophy,
  Play,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Volume2,
  ChevronRight,
  Award,
  Sparkles,
} from 'lucide-react';

interface ExamQuestion extends GrammarPracticeItem {
  topicTitle: string;
}

interface GrammarFinalExamProps {
  selectedLevel: 'A1' | 'A2' | 'B1' | 'B2';
  themeStyle: ThemeClasses;
  speak: (text: string) => void;
  bestScorePercent?: number;
  onExamCompleted: (level: 'A1' | 'A2' | 'B1' | 'B2', scorePercent: number) => void;
}

export const GrammarFinalExam: React.FC<GrammarFinalExamProps> = ({
  selectedLevel,
  themeStyle,
  speak,
  bestScorePercent,
  onExamCompleted,
}) => {
  const [phase, setPhase] = useState<'intro' | 'active' | 'results'>('intro');
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const levelTopicsCount = GRAMMAR_TOPICS.filter((t) => t.level === selectedLevel).length;

  const startNewExam = () => {
    const pool: ExamQuestion[] = [];
    GRAMMAR_TOPICS.filter((t) => t.level === selectedLevel).forEach((topic) => {
      (topic.practices || []).forEach((p) => {
        pool.push({ ...p, topicTitle: topic.title });
      });
    });

    // Karıştır ve en fazla 15 soru seç
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 15);
    setQuestions(shuffled);
    setCurrentIdx(0);
    setAnswers({});
    setPhase('active');
  };

  const handleSelectOption = (opt: string) => {
    setAnswers((prev) => ({ ...prev, [currentIdx]: opt }));
  };

  const handleFinishExam = () => {
    if (questions.length === 0) return;
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if ((answers[idx] || '').trim().toLowerCase() === q.blankAnswer.trim().toLowerCase()) {
        correctCount++;
      }
    });
    const pct = Math.round((correctCount / questions.length) * 100);
    onExamCompleted(selectedLevel, pct);
    setPhase('results');
  };

  const renderSentenceWithChoice = (sentence: string, choice?: string) => {
    const parts = sentence.split(/___(?:\s*\([^)]*\))?/);
    if (parts.length < 2) return <span>{sentence}</span>;
    const match = sentence.match(/___\s*(\([^)]*\))/);
    const verbHint = match ? match[1] : '';
    return (
      <span className="leading-relaxed">
        {parts[0]}
        <span
          className={`inline-flex items-center px-2.5 py-0.5 mx-1 rounded-lg border-b-2 font-black ${
            choice
              ? 'bg-teal-500/20 text-teal-800 dark:text-teal-200 border-teal-600'
              : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500'
          }`}
        >
          {choice || '_______'}
        </span>
        {verbHint && !choice && (
          <span className="text-xs opacity-50 mr-1">{verbHint}</span>
        )}
        {parts[1]}
      </span>
    );
  };

  if (phase === 'intro') {
    return (
      <div className={`p-5 sm:p-6 rounded-3xl ${themeStyle.card} border-2 border-indigo-500/40 shadow-md text-center space-y-4 animate-fadeIn`}>
        <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-500 text-white flex items-center justify-center shadow-lg">
          <Trophy className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
            {selectedLevel} Seviyesi Karışık Değerlendirme
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white pt-1">
            {selectedLevel} Kuru Bitirme Final Sınavı
          </h3>
          <p className="text-xs sm:text-sm opacity-75 max-w-md mx-auto font-medium">
            {selectedLevel} kurundaki tüm {levelTopicsCount} konudan rastgele seçilen <strong>15 karışık soru</strong> ile seviyenizi ölçün. Geçme barajı %70 (11 doğru)!
          </p>
        </div>

        {typeof bestScorePercent === 'number' && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs font-black">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>En Yüksek {selectedLevel} Başarınız: %{bestScorePercent}</span>
          </div>
        )}

        <div>
          <button
            onClick={startNewExam}
            className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-500 hover:to-teal-500 text-white font-black text-sm shadow-lg transition active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>15 Soruluk Final Sınavını Başlat</span>
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'active' && questions.length > 0) {
    const q = questions[currentIdx];
    const answeredCount = Object.keys(answers).length;
    const isLast = currentIdx === questions.length - 1;

    return (
      <div className="space-y-4 animate-fadeIn">
        {/* İlerleme Çubuğu */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-black">
            <span className="text-indigo-700 dark:text-indigo-300">
              {selectedLevel} Final • Soru {currentIdx + 1} / {questions.length}
            </span>
            <span className="opacity-70">{answeredCount} / {questions.length} Yanıtlandı</span>
          </div>
          <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-teal-500 transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Hızlı Soru Geçiş Çubuğu */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {questions.map((_, idx) => {
            const hasAns = Boolean(answers[idx]);
            return (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-7 h-7 shrink-0 rounded-lg text-xs font-black transition cursor-pointer ${
                  currentIdx === idx
                    ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400/40'
                    : hasAns
                    ? 'bg-teal-500/20 text-teal-800 dark:text-teal-200 border border-teal-500/40'
                    : 'bg-black/5 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Soru Kartı */}
        <div className={`p-4 sm:p-5 rounded-3xl ${themeStyle.card} border-2 border-indigo-500/40 shadow-md space-y-4`}>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
              {q.topicTitle}
            </span>
            <span className="text-[11px] font-medium opacity-60 italic">Sınav Modu (Anlık İpucu Kapalı)</span>
          </div>

          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {renderSentenceWithChoice(q.sentence, answers[currentIdx])}
          </div>

          <p className="text-xs font-medium opacity-70">{q.tr}</p>

          {/* Şıklar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            {q.options.map((opt) => {
              const selected = answers[currentIdx] === opt;
              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(opt)}
                  className={`py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black border-2 transition cursor-pointer ${
                    selected
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Alt Kontroller */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5 dark:border-white/5">
            <button
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              disabled={currentIdx === 0}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-black/5 dark:bg-white/10 disabled:opacity-40 cursor-pointer"
            >
              Önceki
            </button>

            {!isLast ? (
              <button
                onClick={() => setCurrentIdx((i) => i + 1)}
                className="px-5 py-2 rounded-xl text-xs sm:text-sm font-black bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Sonraki Soru</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinishExam}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Sınavı Bitir ve Puanla ({answeredCount}/{questions.length})</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Sonuç Karnesi
  const correctTotal = questions.filter(
    (q, idx) => (answers[idx] || '').trim().toLowerCase() === q.blankAnswer.trim().toLowerCase()
  ).length;
  const percent = questions.length > 0 ? Math.round((correctTotal / questions.length) * 100) : 0;
  const passed = percent >= 70;

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Özet Karne */}
      <div
        className={`p-5 rounded-3xl ${themeStyle.card} border-2 ${
          passed ? 'border-emerald-500/60' : 'border-amber-500/60'
        } shadow-lg text-center space-y-3`}
      >
        <div
          className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-white shadow-md ${
            passed ? 'bg-emerald-600' : 'bg-amber-600'
          }`}
        >
          <Trophy className="w-7 h-7" />
        </div>
        <div>
          <span
            className={`text-[11px] font-black px-3 py-1 rounded-full ${
              passed
                ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                : 'bg-amber-500/20 text-amber-800 dark:text-amber-200'
            }`}
          >
            {passed ? `🎉 ${selectedLevel} Kuru Başarıyla Tamamlandı!` : `📚 ${selectedLevel} Kuru Tekrar Önerilir`}
          </span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">
            %{percent} Başarı ({correctTotal} / {questions.length} Doğru)
          </h3>
        </div>

        <button
          onClick={startNewExam}
          className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-black shadow-md transition inline-flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Yeni Karışık Sınav Başlat</span>
        </button>
      </div>

      {/* Soru Bazlı Detaylı İnceleme */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-black uppercase tracking-wider opacity-70 px-1">
          Soru Bazlı Sonuç ve Açıklamalar
        </h4>
        {questions.map((q, idx) => {
          const userAns = answers[idx] || '(Boş bırakıldı)';
          const isOk = (answers[idx] || '').trim().toLowerCase() === q.blankAnswer.trim().toLowerCase();
          const fullCorrectSentence = q.sentence.replace(/___(?:\s*\([^)]*\))?/, q.blankAnswer);

          return (
            <div
              key={`${q.id}-${idx}`}
              className={`p-3.5 rounded-2xl border ${
                isOk
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-rose-500/10 border-rose-500/30'
              } space-y-1.5`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  {isOk ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span className="text-[11px] font-black opacity-75">
                    {idx + 1}. {q.topicTitle}
                  </span>
                </div>
                <button
                  onClick={() => speak(fullCorrectSentence)}
                  className="p-1 rounded-lg bg-white/70 dark:bg-slate-800 text-teal-600 cursor-pointer"
                  title="Doğru Cümleyi Dinle"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {fullCorrectSentence}
              </p>

              {!isOk && (
                <p className="text-xs font-bold text-rose-700 dark:text-rose-300">
                  Sizin cevabınız: <span className="line-through">{userAns}</span> ➔ Doğrusu:{' '}
                  <span className="text-emerald-700 dark:text-emerald-300">{q.blankAnswer}</span>
                </p>
              )}

              <p className="text-[11px] opacity-80 font-medium">💡 {q.explanation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
