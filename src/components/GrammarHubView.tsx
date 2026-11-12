import React, { useState, useMemo } from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { GRAMMAR_TOPICS, SENTENCE_SCRAMBLE_DATA, GrammarTopic, SentenceScrambleItem, GrammarExample, GrammarPracticeItem } from '../grammarData';
import { 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Volume2, 
  RotateCcw, 
  ChevronRight, 
  AlertCircle, 
  Check, 
  X, 
  Clock, 
  Table, 
  Lightbulb, 
  Award,
  Filter,
  Eye,
  EyeOff,
  Edit3,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface GrammarHubViewProps {
  themeStyle: ThemeClasses;
  onBackToHome: () => void;
  speak: (text: string) => void;
}

export const GrammarHubView: React.FC<GrammarHubViewProps> = ({
  themeStyle,
  onBackToHome,
  speak,
}) => {
  // Aktif sekme: 'guide' (Gramer Rehberi) veya 'scramble' (Cümle Kurma & Sözcük Sıralama)
  const [activeTab, setActiveTab] = useState<'guide' | 'scramble'>('guide');
  // Seviye filtresi: 'A1' | 'A2' | 'B1' | 'B2'
  const [selectedLevel, setSelectedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>('A1');

  // Rehberde seçili detay konusu
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);

  // Örnek cümlelerde zamir filtresi: 'all' | 'I' | '3rd' | 'plurals' | 'question'
  const [pronounFilter, setPronounFilter] = useState<'all' | 'I' | '3rd' | 'plurals' | 'question'>('all');

  // Örnek cümle çevirileri: varsayılan gizli. Dokununca açılır.
  const [revealedTranslations, setRevealedTranslations] = useState<Record<string, boolean>>({});

  const toggleTranslation = (key: string) => {
    setRevealedTranslations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const setAllTranslationsForTopic = (topic: GrammarTopic, show: boolean) => {
    setRevealedTranslations(prev => {
      const updated = { ...prev };
      topic.examples.forEach((_, idx) => {
        updated[`${topic.id}-${idx}`] = show;
      });
      return updated;
    });
  };

  // Boşluk doldurma pratiği durumu (her konu için aktif soru ve çözümler)
  interface PracticeState {
    activeIdx: number;
    userSelection: string;
    isSubmitted: boolean;
    solved: Record<number, boolean>;
  }

  const [practiceStates, setPracticeStates] = useState<Record<string, PracticeState>>({});
  const [showPracticeHint, setShowPracticeHint] = useState<Record<string, boolean>>({});
  // Her konunun test bölümünün açık/kapalı durumu (varsayılan kapalı, butonla açılır)
  const [openedPractices, setOpenedPractices] = useState<Record<string, boolean>>({});

  const togglePracticeOpen = (topicId: string) => {
    setOpenedPractices(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const getPracticeState = (topicId: string): PracticeState => {
    return practiceStates[topicId] || {
      activeIdx: 0,
      userSelection: '',
      isSubmitted: false,
      solved: {}
    };
  };

  const updatePracticeState = (topicId: string, partial: Partial<PracticeState>) => {
    setPracticeStates(prev => {
      const current = prev[topicId] || {
        activeIdx: 0,
        userSelection: '',
        isSubmitted: false,
        solved: {}
      };
      return {
        ...prev,
        [topicId]: { ...current, ...partial }
      };
    });
  };

  const handleCheckPractice = (topicId: string, practice: GrammarPracticeItem, activeIdx: number) => {
    const currentState = getPracticeState(topicId);
    const isCorrect = currentState.userSelection.trim().toLowerCase() === practice.blankAnswer.trim().toLowerCase();
    
    updatePracticeState(topicId, {
      isSubmitted: true,
      solved: isCorrect ? { ...currentState.solved, [activeIdx]: true } : currentState.solved
    });
  };

  const renderSentenceWithBlank = (sentence: string, userValue: string) => {
    // Matches "___ (verb)" or "___"
    const parts = sentence.split(/___(?:\s*\([^)]*\))?/);
    if (parts.length < 2) return <span>{sentence}</span>;

    const match = sentence.match(/___\s*(\([^)]*\))/);
    const verbHint = match ? match[1] : '';

    return (
      <span className="inline leading-relaxed">
        {parts[0]}
        <span className={`inline-flex items-center px-2.5 py-0.5 mx-1 rounded-lg border-b-2 font-black transition ${
          userValue 
            ? 'bg-teal-500/20 text-teal-800 dark:text-teal-200 border-teal-600' 
            : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500 animate-pulse'
        }`}>
          {userValue || '_______'}
        </span>
        {verbHint && !userValue && (
          <span className="text-slate-400 dark:text-slate-500 font-medium text-xs mr-1">
            {verbHint}
          </span>
        )}
        {parts[1]}
      </span>
    );
  };

  // Cümle kurma durumu
  const levelScrambles = useMemo(() => {
    return SENTENCE_SCRAMBLE_DATA.filter(item => item.level === selectedLevel);
  }, [selectedLevel]);

  const [currentScrambleIdx, setCurrentScrambleIdx] = useState(0);
  const currentScramble = levelScrambles[currentScrambleIdx] || levelScrambles[0];

  // Kullanıcının sıraladığı kelimeler ve kalan kelimeler
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<{ id: string; text: string }[]>(() => {
    if (!currentScramble) return [];
    const shuffled = [...currentScramble.tokens].sort(() => Math.random() - 0.5);
    return shuffled.map((w, idx) => ({ id: `${idx}-${w}`, text: w }));
  });

  const [scrambleStatus, setScrambleStatus] = useState<'in_progress' | 'correct' | 'wrong'>('in_progress');
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  // Seviye veya soru değiştiğinde cümle kurma alanını sıfırla
  const resetScrambleQuestion = (item: SentenceScrambleItem) => {
    setSelectedWords([]);
    const shuffled = [...item.tokens].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled.map((w, idx) => ({ id: `${idx}-${w}`, text: w })));
    setScrambleStatus('in_progress');
    setShowHint(false);
  };

  const handleSelectLevel = (lvl: 'A1' | 'A2' | 'B1' | 'B2') => {
    setSelectedLevel(lvl);
    setSelectedTopic(null);
    setPronounFilter('all');
    setCurrentScrambleIdx(0);
    const newItems = SENTENCE_SCRAMBLE_DATA.filter(item => item.level === lvl);
    if (newItems.length > 0) {
      resetScrambleQuestion(newItems[0]);
    }
  };

  // Kelimeye tıklandığında seçilenlere ekle
  const handlePickWord = (wordObj: { id: string; text: string }) => {
    if (scrambleStatus === 'correct') return;
    setAvailableWords(prev => prev.filter(w => w.id !== wordObj.id));
    setSelectedWords(prev => [...prev, wordObj.text]);
  };

  // Seçilen kelimeden kaldırıp geri havuza at
  const handleRemoveWord = (index: number) => {
    if (scrambleStatus === 'correct') return;
    const removedText = selectedWords[index];
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
    setAvailableWords(prev => [...prev, { id: `${Date.now()}-${removedText}`, text: removedText }]);
    setScrambleStatus('in_progress');
  };

  // Sıralamayı Kontrol Et
  const handleCheckAnswer = () => {
    if (!currentScramble) return;
    const userSentence = selectedWords.join(' ').trim();
    const targetSentence = currentScramble.targetEng.trim();

    if (userSentence.toLowerCase() === targetSentence.toLowerCase()) {
      setScrambleStatus('correct');
      setScore(prev => prev + 10);
      speak(targetSentence);
    } else {
      setScrambleStatus('wrong');
    }
  };

  // Sonraki Cümleye Geç
  const handleNextScramble = () => {
    if (currentScrambleIdx < levelScrambles.length - 1) {
      const nextIdx = currentScrambleIdx + 1;
      setCurrentScrambleIdx(nextIdx);
      resetScrambleQuestion(levelScrambles[nextIdx]);
    } else {
      setCurrentScrambleIdx(0);
      resetScrambleQuestion(levelScrambles[0]);
    }
  };

  // Mevcut soruyu sıfırla
  const handleRestartQuestion = () => {
    if (currentScramble) {
      resetScrambleQuestion(currentScramble);
    }
  };

  const filteredTopics = useMemo(() => {
    return GRAMMAR_TOPICS.filter(t => t.level === selectedLevel);
  }, [selectedLevel]);

  // Zamir rozet stilleri
  const getPronounBadge = (pronoun: string) => {
    switch (pronoun) {
      case 'I':
        return { label: '👤 I', bg: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-400/40' };
      case 'He':
        return { label: '👨 He', bg: 'bg-sky-500/15 text-sky-800 dark:text-sky-300 border-sky-400/40' };
      case 'She':
        return { label: '👩 She', bg: 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-400/40' };
      case 'It':
        return { label: '📦 It', bg: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-400/40' };
      case 'You':
        return { label: '🫵 You', bg: 'bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border-indigo-400/40' };
      case 'We':
        return { label: '👥 We', bg: 'bg-teal-500/15 text-teal-800 dark:text-teal-300 border-teal-400/40' };
      case 'They':
        return { label: '👥 They', bg: 'bg-blue-500/15 text-blue-800 dark:text-blue-300 border-blue-400/40' };
      case 'Wh- / Soru':
        return { label: '❓ Soru', bg: 'bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-400/40' };
      default:
        return { label: '📌 Cümle', bg: 'bg-slate-500/15 text-slate-800 dark:text-slate-300 border-slate-400/40' };
    }
  };

  const getTypeBadge = (type: 'positive' | 'negative' | 'question') => {
    switch (type) {
      case 'positive':
        return { label: '+ Olumlu', bg: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800' };
      case 'negative':
        return { label: '- Olumsuz', bg: 'bg-rose-100/80 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300 dark:border-rose-800' };
      case 'question':
        return { label: '? Soru', bg: 'bg-sky-100/80 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border-sky-300 dark:border-sky-800' };
    }
  };

  // Örnek cümle filtresi
  const filterExamples = (examples: GrammarExample[]) => {
    if (pronounFilter === 'all') return examples;
    if (pronounFilter === 'I') return examples.filter(e => e.pronoun === 'I');
    if (pronounFilter === '3rd') return examples.filter(e => e.pronoun === 'He' || e.pronoun === 'She' || e.pronoun === 'It');
    if (pronounFilter === 'plurals') return examples.filter(e => e.pronoun === 'You' || e.pronoun === 'We' || e.pronoun === 'They');
    if (pronounFilter === 'question') return examples.filter(e => e.sentenceType === 'question' || e.pronoun === 'Wh- / Soru');
    return examples;
  };

  return (
    <div className="flex-1 p-3.5 sm:p-5 flex flex-col space-y-4 overflow-y-auto">
      {/* ÜST BAŞLIK & GERİ DÖNÜŞ */}
      <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/5">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition py-1 px-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Menü</span>
        </button>

        <div className="text-right">
          <span className="text-[10px] uppercase font-black tracking-wider text-teal-700 dark:text-teal-400">
            Gramer & Cümle Kurma
          </span>
          <span className="text-xs text-slate-400 font-semibold block">
            CEFR A1 • A2 • B1 • B2
          </span>
        </div>
      </div>

      {/* KARŞILAMA VE ANA SEKMELER */}
      <div className="text-center my-0.5">
        <div className="bg-teal-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 border border-teal-500/20 shadow-inner">
          <span className="text-3xl">📐</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black">Gramer & Cümle Kurma</h2>
        <p className="text-xs opacity-75 mt-0.5 font-medium max-w-sm mx-auto">
          Şematik zamir kutucukları, bol örnekler ve etkileşimli sözcük sıralama atölyesi
        </p>

        {/* 2 ANA SEKME: GRAMER REHBERİ VS. CÜMLE KURMA */}
        <div className="flex p-1 bg-black/5 dark:bg-white/10 rounded-2xl max-w-sm mx-auto mt-3 border border-black/5 dark:border-white/10">
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-2 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Gramer Rehberi ({filteredTopics.length} Konu)</span>
          </button>
          <button
            onClick={() => setActiveTab('scramble')}
            className={`flex-1 py-2 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'scramble'
                ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cümle Kurma ({levelScrambles.length})</span>
          </button>
        </div>
      </div>

      {/* SEVİYE SEÇİCİ ROZETLERİ (A1, A2, B1, B2) */}
      <div className="flex items-center justify-center gap-2">
        {(['A1', 'A2', 'B1', 'B2'] as const).map(lvl => (
          <button
            key={lvl}
            onClick={() => handleSelectLevel(lvl)}
            className={`px-3.5 py-1.5 rounded-xl font-black text-xs transition cursor-pointer border shadow-xs ${
              selectedLevel === lvl
                ? 'bg-teal-600 text-white border-teal-700 ring-2 ring-teal-400/40 shadow-sm'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-teal-400'
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 1. SEKME: SEVİYELİ VE ŞEMATİK GRAMER REHBERİ */}
      {/* ---------------------------------------------------------------- */}
      {activeTab === 'guide' && (
        <div className="space-y-3.5">
          {filteredTopics.map((topic) => {
            const isExpanded = selectedTopic?.id === topic.id;
            const displayedExamples = filterExamples(topic.examples || []);

            return (
              <div
                key={topic.id}
                className={`w-full ${themeStyle.card} border rounded-2xl overflow-hidden transition shadow-xs ${
                  isExpanded ? 'border-teal-500 shadow-md ring-1 ring-teal-400/30' : 'hover:border-teal-400/60'
                }`}
              >
                {/* Kart Başlığı */}
                <button
                  onClick={() => setSelectedTopic(isExpanded ? null : topic)}
                  className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span className="w-9 h-9 rounded-xl font-bold flex items-center justify-center text-base border shadow-xs bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20 shrink-0">
                      📖
                    </span>
                    <div className="min-w-0 flex-1 pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                          {topic.title}
                        </span>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-700 dark:text-teal-300 uppercase whitespace-nowrap">
                          {topic.badge}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {topic.examples?.length || 0} Örnek
                        </span>
                        {topic.practices && topic.practices.length > 0 && (
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <Edit3 className="w-2.5 h-2.5" />
                            <span>{topic.practices.length} Boşluk Doldurma</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs opacity-75 font-medium mt-0.5 line-clamp-1">
                        {topic.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 opacity-40 shrink-0 transition-transform ${isExpanded ? 'rotate-90 text-teal-600' : ''}`} />
                </button>

                {/* DETAYLI & ŞEMATİK REHBER AÇILIR İÇERİĞİ */}
                {isExpanded && (
                  <div className="px-3.5 sm:px-5 pb-5 pt-1 space-y-4 border-t border-black/5 dark:border-white/5 animate-fadeIn">
                    
                    {/* Hızlı Atlama: Konu Sonu Boşluk Doldurma Pratiğine Git */}
                    {topic.practices && topic.practices.length > 0 && (
                      <div className="pt-2 pb-1 flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setOpenedPractices(prev => ({ ...prev, [topic.id]: true }));
                            setTimeout(() => {
                              const el = document.getElementById(`practice-${topic.id}`);
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 50);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs shadow-xs transition active:scale-95 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>🎯 Boşluk Doldurma Testine Git ({topic.practices.length} Soru)</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* 1. Giriş & Temel Mantık */}
                    <div className="p-3.5 bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-2xl">
                      <h4 className="text-xs font-black text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Temel Mantık & Anlam</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {topic.introduction}
                      </p>
                    </div>

                    {/* 2. ŞEMATİK ALT ALTA ÖZNE VE ÇEKİM TABLOSU */}
                    {topic.subjectSchema && topic.subjectSchema.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                            <Table className="w-3.5 h-3.5 text-teal-600" />
                            <span>Şematik Özne & Çekim Tablosu</span>
                          </h4>
                          <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-md">
                            Alt Alta Dizilim
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          {topic.subjectSchema.map((row, rIdx) => (
                            <div
                              key={rIdx}
                              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-2"
                            >
                              {/* Özne Başlığı */}
                              <div className="flex items-center justify-between pb-1 border-b border-black/5 dark:border-white/5">
                                <div className="flex items-center gap-2">
                                  <span className="px-2.5 py-0.5 rounded-lg bg-teal-600 text-white font-mono font-black text-xs">
                                    {row.subject}
                                  </span>
                                  {row.subjectLabel && (
                                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                                      {row.subjectLabel}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* (+) Olumlu / (-) Olumsuz / (?) Soru Alt Alta Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs">
                                {/* Olumlu */}
                                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200 space-y-1">
                                  <div className="flex items-center gap-1 font-black text-[10px] uppercase text-emerald-700 dark:text-emerald-400">
                                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-black">+</span>
                                    <span>Olumlu</span>
                                  </div>
                                  <div className="font-bold">{row.positive}</div>
                                  {row.positiveTr && (
                                    <div className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium italic border-t border-emerald-500/15 pt-0.5">
                                      🇹🇷 {row.positiveTr}
                                    </div>
                                  )}
                                </div>

                                {/* Olumsuz */}
                                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-900 dark:text-rose-200 space-y-1">
                                  <div className="flex items-center gap-1 font-black text-[10px] uppercase text-rose-700 dark:text-rose-400">
                                    <span className="w-3.5 h-3.5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[9px] font-black">-</span>
                                    <span>Olumsuz</span>
                                  </div>
                                  <div className="font-bold">{row.negative}</div>
                                  {row.negativeTr && (
                                    <div className="text-[11px] text-rose-700 dark:text-rose-300 font-medium italic border-t border-rose-500/15 pt-0.5">
                                      🇹🇷 {row.negativeTr}
                                    </div>
                                  )}
                                </div>

                                {/* Soru */}
                                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-900 dark:text-sky-200 space-y-1">
                                  <div className="flex items-center gap-1 font-black text-[10px] uppercase text-sky-700 dark:text-sky-400">
                                    <span className="w-3.5 h-3.5 rounded-full bg-sky-500 text-white flex items-center justify-center text-[9px] font-black">?</span>
                                    <span>Soru</span>
                                  </div>
                                  <div className="font-bold">{row.question}</div>
                                  {row.questionTr && (
                                    <div className="text-[11px] text-sky-700 dark:text-sky-300 font-medium italic border-t border-sky-500/15 pt-0.5">
                                      🇹🇷 {row.questionTr}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Kritik Püf Noktası */}
                              {row.highlight && (
                                <div className="pt-0.5 flex items-center gap-1.5 text-[11px] text-teal-800 dark:text-teal-300 font-bold">
                                  <span className="text-amber-500 text-xs">⚡</span>
                                  <span>{row.highlight}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3. Karşılaştırma / Detay Tablosu (Varsa) */}
                    {topic.comparisonTable && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                          <span>📊 {topic.comparisonTable.title}</span>
                        </h4>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                                {topic.comparisonTable.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="p-2.5 font-black uppercase text-[10px] tracking-wider">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white/50 dark:bg-slate-950/40">
                              {topic.comparisonTable.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className={`p-2.5 font-medium ${cIdx === 0 ? 'font-bold text-teal-700 dark:text-teal-400' : ''}`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* 4. Formüller & Cümle Düzeni */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1">
                        <span>📐 Formül & Yapı Düzeni</span>
                      </h4>
                      {topic.formulas.map((form, fIdx) => (
                        <div key={fIdx} className="p-3 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 space-y-1.5">
                          <span className="text-xs font-bold text-teal-700 dark:text-teal-400 block">
                            {form.title}
                          </span>
                          <div className="bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-xl font-mono text-xs text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 font-bold whitespace-pre-line leading-relaxed">
                            {form.pattern}
                          </div>
                          <p className="text-[11px] opacity-75 font-medium">
                            {form.explanation}
                          </p>
                          {form.sample && (
                            <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs space-y-0.5">
                              <div className="font-bold text-teal-900 dark:text-teal-200 flex items-start gap-1">
                                <span className="text-teal-600">💡 Örnek:</span>
                                <span>{form.sample}</span>
                              </div>
                              {form.sampleTr && (
                                <div className="text-[11px] text-teal-800/80 dark:text-teal-300/90 font-medium pl-5 italic">
                                  🇹🇷 Çeviri: {form.sampleTr}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* 5. Zaman Belirteçleri (Varsa) */}
                    {topic.timeMarkers && topic.timeMarkers.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-teal-600" />
                          <span>Sık Kullanılan Zaman ve Sıklık Zarfları</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {topic.timeMarkers.map((tm, tIdx) => (
                            <div key={tIdx} className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-0.5">
                              <div className="flex items-center justify-between">
                                <span className="font-extrabold text-teal-700 dark:text-teal-300">
                                  {tm.term}
                                </span>
                                <span className="text-[10px] text-slate-400 font-bold">
                                  {tm.meaning}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">
                                "{tm.usage}"
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 6. Önemli Kurallar & İpuçları */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1">
                        <span>⚡ Altın Kurallar & Dikkat Edilecekler</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        {topic.keyRules.map((rule, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 bg-black/5 dark:bg-white/5 p-2.5 rounded-xl">
                            <span className="text-teal-500 font-extrabold mt-0.5">•</span>
                            <span className="leading-snug font-medium whitespace-pre-line">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 7. Sık Yapılan Hatalar (Common Mistakes) */}
                    {topic.commonMistakes && topic.commonMistakes.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-black text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>En Sık Yapılan Hatalar (Tuzaklar!)</span>
                        </h4>
                        {topic.commonMistakes.map((mis, mIdx) => (
                          <div key={mIdx} className="p-3 rounded-2xl bg-rose-500/10 border border-rose-400/30 text-xs space-y-1">
                            <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-300 font-mono font-bold line-through">
                              <span>❌ {mis.wrong}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-mono font-bold">
                              <span>✅ {mis.correct}</span>
                            </div>
                            {mis.correctTr && (
                              <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-medium italic">
                                🇹🇷 Doğru Anlam: "{mis.correctTr}"
                              </div>
                            )}
                            <p className="text-[11px] text-slate-600 dark:text-slate-300 italic pt-0.5">
                              Sebep: {mis.reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 8. ÖRNEK CÜMLELER & ZAMİR DAĞILIMI (GÖSTER / GİZLE TUŞLARI İLE) */}
                    <div className="space-y-3 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div>
                          <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                            <Volume2 className="w-3.5 h-3.5 text-teal-600" />
                            <span>Örnek Cümleler & Zamir Dağılımı ({topic.examples.length} Örnek)</span>
                          </h4>
                          <p className="text-[11px] text-slate-400 font-medium">
                            Cümlelerin altındaki <strong className="text-teal-600 dark:text-teal-400">"Çeviriyi Göster"</strong> tuşuyla çevirileri tek tek açabilir veya yukarıdaki butonlarla tümünü kontrol edebilirsiniz
                          </p>
                        </div>

                        {/* TÜMÜNÜ GÖSTER / GİZLE TUŞLARI */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => setAllTranslationsForTopic(topic, true)}
                            className="px-3 py-1.5 rounded-xl text-xs font-black bg-teal-600 hover:bg-teal-700 text-white shadow-xs transition flex items-center gap-1.5 cursor-pointer active:scale-95"
                            title="Bu konudaki tüm Türkçe çevirileri göster"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Tümünü Göster</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setAllTranslationsForTopic(topic, false)}
                            className="px-3 py-1.5 rounded-xl text-xs font-black bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition flex items-center gap-1.5 cursor-pointer active:scale-95"
                            title="Bu konudaki tüm Türkçe çevirileri gizle"
                          >
                            <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                            <span>Tümünü Gizle</span>
                          </button>
                        </div>
                      </div>

                      {/* Zamir Hızlı Filtresi */}
                      <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                        <button
                          onClick={() => setPronounFilter('all')}
                          className={`px-2 py-1 rounded-lg text-[10px] font-extrabold transition cursor-pointer shrink-0 ${
                            pronounFilter === 'all'
                              ? 'bg-teal-600 text-white shadow-xs'
                              : 'bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          Tümü ({topic.examples.length})
                        </button>
                        <button
                          onClick={() => setPronounFilter('I')}
                          className={`px-2 py-1 rounded-lg text-[10px] font-extrabold transition cursor-pointer shrink-0 ${
                            pronounFilter === 'I'
                              ? 'bg-teal-600 text-white shadow-xs'
                              : 'bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          👤 I
                        </button>
                        <button
                          onClick={() => setPronounFilter('3rd')}
                          className={`px-2 py-1 rounded-lg text-[10px] font-extrabold transition cursor-pointer shrink-0 ${
                            pronounFilter === '3rd'
                              ? 'bg-teal-600 text-white shadow-xs'
                              : 'bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          👨 He / 👩 She / 📦 It
                        </button>
                        <button
                          onClick={() => setPronounFilter('plurals')}
                          className={`px-2 py-1 rounded-lg text-[10px] font-extrabold transition cursor-pointer shrink-0 ${
                            pronounFilter === 'plurals'
                              ? 'bg-teal-600 text-white shadow-xs'
                              : 'bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          👥 We / They / You
                        </button>
                        <button
                          onClick={() => setPronounFilter('question')}
                          className={`px-2 py-1 rounded-lg text-[10px] font-extrabold transition cursor-pointer shrink-0 ${
                            pronounFilter === 'question'
                              ? 'bg-teal-600 text-white shadow-xs'
                              : 'bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          ❓ Soru
                        </button>
                      </div>

                      {/* Örnek Cümle Kartları */}
                      <div className="space-y-2.5">
                        {displayedExamples.map((ex, eIdx) => {
                          const pBadge = getPronounBadge(ex.pronoun);
                          const tBadge = getTypeBadge(ex.sentenceType);
                          const itemKey = `${topic.id}-${eIdx}`;
                          const isRevealed = !!revealedTranslations[itemKey];

                          return (
                            <div 
                              key={eIdx} 
                              className="p-3.5 bg-white/90 dark:bg-slate-900/80 rounded-2xl border border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row sm:items-start justify-between gap-3 shadow-2xs hover:border-teal-500/40 transition"
                            >
                              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                                {/* Satır Başı Şematik Zamir Kutucuğu */}
                                <div className="flex flex-col items-center gap-1 shrink-0 pt-0.5">
                                  <span className={`px-2.5 py-1 rounded-xl text-xs font-black border shadow-2xs whitespace-nowrap ${pBadge.bg}`}>
                                    {pBadge.label}
                                  </span>
                                  <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-bold border ${tBadge.bg}`}>
                                    {tBadge.label}
                                  </span>
                                </div>

                                {/* Cümle Metni ve Butonlu Çeviri */}
                                <div className="min-w-0 flex-1 pl-1">
                                  <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">
                                    {ex.eng}
                                  </p>

                                  {ex.note && (
                                    <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                                      💡 {ex.note}
                                    </span>
                                  )}

                                  {/* Çeviriyi Göster / Gizle Tuşu */}
                                  <div className="mt-2.5">
                                    <button
                                      type="button"
                                      onClick={() => toggleTranslation(itemKey)}
                                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95 ${
                                        isRevealed
                                          ? 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
                                          : 'bg-teal-500/15 hover:bg-teal-500/25 text-teal-700 dark:text-teal-300 border border-teal-500/30'
                                      }`}
                                    >
                                      {isRevealed ? (
                                        <>
                                          <EyeOff className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                                          <span>Çeviriyi Gizle</span>
                                        </>
                                      ) : (
                                        <>
                                          <Eye className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                                          <span>Çeviriyi Göster</span>
                                        </>
                                      )}
                                    </button>

                                    {/* Çeviri Açıldığında Görünen Alan */}
                                    {isRevealed && (
                                      <div className="mt-2 p-2.5 rounded-xl bg-teal-50/90 dark:bg-teal-950/40 border border-teal-300/80 dark:border-teal-800 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-2 animate-fadeIn shadow-2xs">
                                        <span className="font-black text-teal-600 dark:text-teal-400 shrink-0">🇹🇷 Türkçe:</span>
                                        <span className="font-semibold leading-relaxed">{ex.tr}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Sesli Okuma Butonu */}
                              <div className="flex justify-end sm:justify-center shrink-0 pt-0.5">
                                <button
                                  onClick={() => speak(ex.eng)}
                                  className="p-2 rounded-xl bg-teal-500/15 text-teal-700 dark:text-teal-300 hover:bg-teal-500/25 active:scale-95 transition cursor-pointer flex items-center gap-1 text-xs font-bold"
                                  title="Cümleyi Dinle (TTS)"
                                >
                                  <Volume2 className="w-4 h-4" />
                                  <span className="sm:hidden text-[11px]">Dinle</span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* 9. ÖRNEK CÜMLELERDEN SONRA: AÇILIR / KAPANIR BOŞLUK DOLDURMA TESTİ */}
                    {topic.practices && topic.practices.length > 0 && (() => {
                      const pState = getPracticeState(topic.id);
                      const currentPractice = topic.practices[pState.activeIdx] || topic.practices[0];
                      const isCorrect = pState.userSelection.trim().toLowerCase() === currentPractice.blankAnswer.trim().toLowerCase();
                      const completedCount = Object.keys(pState.solved).length;
                      const isOpen = !!openedPractices[topic.id];

                      if (!isOpen) {
                        return (
                          <div id={`practice-${topic.id}`} className="scroll-mt-4 pt-1">
                            <button
                              type="button"
                              onClick={() => togglePracticeOpen(topic.id)}
                              className="w-full p-4 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-800 text-white font-black text-sm sm:text-base flex items-center justify-between shadow-md transition active:scale-[0.99] cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl shadow-xs">
                                  ✍️
                                </span>
                                <div className="text-left">
                                  <div className="leading-tight flex items-center gap-2 flex-wrap">
                                    <span>Boşluk Doldurma Testini Aç</span>
                                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/25 text-white font-black">
                                      {topic.practices.length} Soru
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-teal-100 font-medium mt-0.5">
                                    Örnek cümleleri incelediniz! Şimdi testi açarak bilginizi sınayın ({completedCount}/{topic.practices.length} Tamamlandı)
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 text-xs font-black shrink-0">
                                <span>Testi Aç</span>
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </button>
                          </div>
                        );
                      }

                      return (
                        <div id={`practice-${topic.id}`} className="scroll-mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-teal-500/15 via-emerald-500/10 to-transparent border-2 border-teal-500/40 space-y-4 shadow-sm animate-fadeIn">
                          {/* Pratik Başlığı & Kapatma Butonu */}
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-500/20 pb-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                                <Edit3 className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-50 flex items-center gap-1.5">
                                    <span>✍️ Konu Sonu Boşluk Doldurma Testi</span>
                                  </h4>
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-teal-600 text-white uppercase">
                                    {topic.level} Seviye
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                                  Örnek cümlelerden sonra bilginizi test edin • Boşlukları doğru seçeneklerle doldurun
                                </p>
                              </div>
                            </div>

                            {/* Çözülen Soru Sayacı & Testi Kapat Butonu */}
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-black px-3 py-1 rounded-xl bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 border border-teal-500/30 shadow-2xs">
                                {completedCount === topic.practices.length ? '🎉 Hepsi Tamamlandı!' : `İlerleme: ${completedCount} / ${topic.practices.length}`}
                              </span>
                              <button
                                type="button"
                                onClick={() => togglePracticeOpen(topic.id)}
                                className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-black text-xs flex items-center gap-1.5 transition cursor-pointer"
                                title="Test bölümünü gizle"
                              >
                                <span>Testi Kapat</span>
                                <ChevronUp className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Soru Seçici Tab Butonları */}
                          <div className="flex items-center gap-2 overflow-x-auto pb-1">
                            {topic.practices.map((p, pIdx) => {
                              const isCurrent = pState.activeIdx === pIdx;
                              const isSolved = !!pState.solved[pIdx];
                              return (
                                <button
                                  key={p.id}
                                  onClick={() => {
                                    updatePracticeState(topic.id, {
                                      activeIdx: pIdx,
                                      userSelection: '',
                                      isSubmitted: false
                                    });
                                  }}
                                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
                                    isCurrent
                                      ? 'bg-teal-600 text-white shadow-xs ring-2 ring-teal-500/40'
                                      : isSolved
                                      ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40'
                                      : 'bg-white/90 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-teal-400'
                                  }`}
                                >
                                  {isSolved && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                                  <span>Soru {pIdx + 1}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Aktif Soru Kartı */}
                          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-teal-500/30 shadow-2xs space-y-4">
                            {/* Cümle ve Boşluk Görünümü */}
                            <div className="py-3 px-4 rounded-xl bg-teal-50/80 dark:bg-slate-800/80 border border-teal-500/20">
                              <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-relaxed">
                                {renderSentenceWithBlank(currentPractice.sentence, pState.userSelection)}
                              </p>
                            </div>

                            {/* Seçenek Butonları */}
                            <div>
                              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2">
                                Doğru seçeneğe tıklayarak boşluğu doldurun:
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {currentPractice.options.map((opt) => {
                                  const isSelected = pState.userSelection === opt;
                                  return (
                                    <button
                                      key={opt}
                                      onClick={() => {
                                        updatePracticeState(topic.id, {
                                          userSelection: opt,
                                          isSubmitted: false
                                        });
                                      }}
                                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black border transition cursor-pointer active:scale-95 ${
                                        isSelected
                                          ? 'bg-teal-600 text-white border-teal-600 shadow-md ring-2 ring-teal-500/40'
                                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-teal-400'
                                      }`}
                                    >
                                      {opt}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Kontrol & İpucu Butonları */}
                            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleCheckPractice(topic.id, currentPractice, pState.activeIdx)}
                                  disabled={!pState.userSelection}
                                  className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-xs ${
                                    pState.userSelection
                                      ? 'bg-teal-600 hover:bg-teal-700 text-white active:scale-95'
                                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                                  }`}
                                >
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Kontrol Et</span>
                                </button>

                                {currentPractice.hint && !pState.isSubmitted && (
                                  <button
                                    onClick={() => setShowPracticeHint(prev => ({ ...prev, [currentPractice.id]: !prev[currentPractice.id] }))}
                                    className="px-3 py-2 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition flex items-center gap-1 cursor-pointer"
                                  >
                                    <Lightbulb className="w-3.5 h-3.5" />
                                    <span>İpucu</span>
                                  </button>
                                )}
                              </div>

                              {pState.userSelection && (
                                <button
                                  onClick={() => {
                                    updatePracticeState(topic.id, {
                                      userSelection: '',
                                      isSubmitted: false
                                    });
                                  }}
                                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                                >
                                  <RotateCcw className="w-3 h-3" />
                                  <span>Temizle</span>
                                </button>
                              )}
                            </div>

                            {/* İpucu Kutusu */}
                            {showPracticeHint[currentPractice.id] && !pState.isSubmitted && (
                              <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-400/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2 animate-fadeIn">
                                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-black">İpucu:</span> {currentPractice.hint}
                                </div>
                              </div>
                            )}

                            {/* Kontrol Sonucu Bildirimi */}
                            {pState.isSubmitted && (
                              <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2.5 animate-fadeIn ${
                                isCorrect
                                  ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-950 dark:text-emerald-100'
                                  : 'bg-rose-500/15 border-rose-500/50 text-rose-950 dark:text-rose-100'
                              }`}>
                                <div className="flex items-center justify-between gap-2 font-black">
                                  <span className="flex items-center gap-1.5">
                                    {isCorrect ? (
                                      <>
                                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>🎉 Harika! Doğru Cevap: "{currentPractice.blankAnswer}"</span>
                                      </>
                                    ) : (
                                      <>
                                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                                        <span>❌ Henüz doğru değil, tekrar deneyin!</span>
                                      </>
                                    )}
                                  </span>
                                  {isCorrect && (
                                    <button
                                      onClick={() => speak(currentPractice.sentence.replace(/___\s*(?:\([^)]*\))?/, currentPractice.blankAnswer))}
                                      className="p-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition flex items-center gap-1 text-[11px] cursor-pointer"
                                      title="Sesli Dinle"
                                    >
                                      <Volume2 className="w-3.5 h-3.5" />
                                      <span className="hidden sm:inline">Dinle</span>
                                    </button>
                                  )}
                                </div>

                                {/* Açıklama & Çeviri */}
                                <div className="pt-1 text-xs space-y-1.5 leading-relaxed">
                                  <p><span className="font-black">💡 Dilbilgisi Açıklaması:</span> {currentPractice.explanation}</p>
                                  <p><span className="font-black">🇹🇷 Türkçe Çeviri:</span> {currentPractice.tr}</p>
                                </div>

                                {/* Sonraki Soru Butonu */}
                                {isCorrect && pState.activeIdx < topic.practices.length - 1 && (
                                  <div className="pt-1">
                                    <button
                                      onClick={() => {
                                        updatePracticeState(topic.id, {
                                          activeIdx: pState.activeIdx + 1,
                                          userSelection: '',
                                          isSubmitted: false
                                        });
                                      }}
                                      className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                                    >
                                      <span>Sonraki Soruya Geç ({pState.activeIdx + 2} / {topic.practices.length})</span>
                                      <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })()}

                    {/* 10. Pro Tip */}
                    <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-2.5">
                      <Award className="w-5 h-5 text-amber-600 shrink-0" />
                      <span className="font-bold">{topic.proTip}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 2. SEKME: CÜMLE KURMA & SÖZCÜK SIRALAMA (SENTENCE BUILDER) */}
      {/* ---------------------------------------------------------------- */}
      {activeTab === 'scramble' && currentScramble && (
        <div className="space-y-4 animate-fadeIn">
          {/* İlerleme ve Soru Sayacı */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-black text-slate-500 dark:text-slate-400">
              Soru {currentScrambleIdx + 1} / {levelScrambles.length} ({selectedLevel})
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-lg border border-teal-500/20">
                Puan: {score}
              </span>
              <button
                onClick={handleRestartQuestion}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                title="Yeniden Başlat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TÜRKÇE HEDEF CÜMLE KARTI */}
          <div className={`p-4 rounded-3xl ${themeStyle.card} border-2 border-teal-500/50 shadow-md text-center space-y-1 relative`}>
            <span className="text-[10px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full inline-block">
              Hedef Cümle ({currentScramble.topicName})
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white pt-1">
              "{currentScramble.tr}"
            </h3>
            <p className="text-xs opacity-65 font-medium">
              Aşağıdaki İngilizce kelimelere dokunarak doğru sıraya dizin
            </p>
          </div>

          {/* KULLANICININ OLUŞTURDUĞU CÜMLE ALANI (DROP ZONE) */}
          <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border-2 border-dashed border-teal-500/40 min-h-[75px] flex flex-wrap gap-2 items-center justify-center">
            {selectedWords.length === 0 ? (
              <span className="text-xs text-slate-400 font-medium italic">
                Aşağıdaki kelimelere dokunarak buraya yerleştirin...
              </span>
            ) : (
              selectedWords.map((word, index) => (
                <button
                  key={index}
                  onClick={() => handleRemoveWord(index)}
                  className="px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm bg-teal-600 text-white shadow-md hover:bg-rose-600 active:scale-95 transition cursor-pointer flex items-center gap-1 group"
                  title="Geri almak için dokunun"
                >
                  <span>{word}</span>
                  <X className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </button>
              ))
            )}
          </div>

          {/* KELİME PARÇALARI HAVUZU */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block px-1">
              Kullanılabilir Kelimeler:
            </span>
            <div className="flex flex-wrap gap-2 justify-center p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 min-h-[60px] items-center">
              {availableWords.map((w) => (
                <button
                  key={w.id}
                  onClick={() => handlePickWord(w)}
                  className="px-3.5 py-2 rounded-xl font-extrabold text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 shadow-sm active:scale-95 transition cursor-pointer"
                >
                  {w.text}
                </button>
              ))}
            </div>
          </div>

          {/* GERİ BİLDİRİM & KONTROL / DEVAM ET BUTONU */}
          <div className="pt-2">
            {scrambleStatus === 'correct' && (
              <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-400 text-emerald-800 dark:text-emerald-200 text-center space-y-1 animate-fadeIn mb-3">
                <div className="flex items-center justify-center gap-1.5 font-black text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Harika! Cümle Tamamen Doğru.</span>
                </div>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {currentScramble.targetEng}
                </p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium italic pt-1">
                  💡 Kural: {currentScramble.ruleExplanation}
                </p>
              </div>
            )}

            {scrambleStatus === 'wrong' && (
              <div className="p-3 rounded-2xl bg-rose-500/15 border border-rose-400 text-rose-800 dark:text-rose-200 text-center space-y-1 animate-shake mb-3">
                <div className="flex items-center justify-center gap-1.5 font-black text-xs">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  <span>Sıralama hatalı, tekrar deneyin!</span>
                </div>
                <p className="text-[11px] font-medium opacity-80">
                  {currentScramble.hint || 'Kelimelerin yerlerini değiştirmek için kutudaki kelimelere dokunun.'}
                </p>
              </div>
            )}

            <div className="flex gap-2">
              {scrambleStatus !== 'correct' ? (
                <>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="py-3 px-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 text-slate-600 dark:text-slate-300 text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>İpucu</span>
                  </button>
                  <button
                    onClick={handleCheckAnswer}
                    disabled={selectedWords.length === 0}
                    className={`flex-1 py-3 rounded-2xl font-black text-sm transition shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2 ${
                      selectedWords.length === 0
                        ? 'opacity-40 bg-slate-300 dark:bg-slate-700 cursor-not-allowed text-slate-500'
                        : 'bg-teal-600 hover:bg-teal-500 text-white'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>Kontrol Et</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={handleNextScramble}
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm transition shadow-lg flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <span>Sonraki Cümleye Geç</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {showHint && currentScramble.hint && (
              <div className="mt-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-800 dark:text-amber-200 text-xs font-medium animate-fadeIn">
                💡 <span className="font-bold">Gramer İpucu:</span> {currentScramble.hint}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
