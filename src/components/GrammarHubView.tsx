import React, { useState, useMemo } from 'react';
import { ThemeClasses } from '../utils/themeUtils';
import { GRAMMAR_TOPICS, SENTENCE_SCRAMBLE_DATA, GrammarTopic, SentenceScrambleItem } from '../grammarData';
import { 
  ArrowLeft, 
  BookOpen, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Volume2, 
  RotateCcw, 
  ChevronRight, 
  AlertCircle, 
  BookMarked,
  Check,
  X
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

  // Rehberde seçili detay konusu (Modal veya detay görünümü)
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);

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
    // Karışık dizi
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
      // Başa dön
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

  const levelColor = {
    A1: 'from-emerald-500 to-teal-600 border-emerald-400 text-emerald-600 bg-emerald-500/10',
    A2: 'from-sky-500 to-blue-600 border-sky-400 text-sky-600 bg-sky-500/10',
    B1: 'from-amber-500 to-orange-600 border-amber-400 text-amber-600 bg-amber-500/10',
    B2: 'from-purple-500 to-indigo-600 border-purple-400 text-purple-600 bg-purple-500/10'
  }[selectedLevel];

  return (
    <div className="flex-1 p-4 sm:p-5 flex flex-col space-y-4 overflow-y-auto">
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
      <div className="text-center my-1">
        <div className="bg-teal-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 border border-teal-500/20 shadow-inner">
          <span className="text-3xl">📐</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black">Gramer & Cümle Kurma</h2>
        <p className="text-xs opacity-70 mt-0.5 font-medium max-w-xs mx-auto">
          Derinlemesine kurallar, formüller ve etkileşimli sözcük sıralama atölyesi
        </p>

        {/* 2 ANA SEKME: GRAMER REHBERİ VS. CÜMLE KURMA */}
        <div className="flex p-1 bg-black/5 dark:bg-white/10 rounded-2xl max-w-sm mx-auto mt-3.5 border border-black/5 dark:border-white/10">
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-2 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Gramer Rehberi</span>
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
      {/* 1. SEKME: SEVİYELİ KAPSAMLI GRAMER REHBERİ */}
      {/* ---------------------------------------------------------------- */}
      {activeTab === 'guide' && (
        <div className="space-y-3">
          {filteredTopics.map((topic) => {
            const isExpanded = selectedTopic?.id === topic.id;
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
                    <span className="w-9 h-9 rounded-xl font-bold flex items-center justify-center text-sm border shadow-xs bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20 shrink-0">
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
                      </div>
                      <p className="text-xs opacity-75 font-medium mt-0.5 line-clamp-1">
                        {topic.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 opacity-40 shrink-0 transition-transform ${isExpanded ? 'rotate-90 text-teal-600' : ''}`} />
                </button>

                {/* DETAYLI REHBER AÇILIR İÇERİĞİ */}
                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 space-y-4 border-t border-black/5 dark:border-white/5 animate-fadeIn">
                    {/* Giriş & Mantık */}
                    <div className="p-3 bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl">
                      <h4 className="text-xs font-black text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <span>💡 Temel Mantık & Anlam</span>
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {topic.introduction}
                      </p>
                    </div>

                    {/* Formüller */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1">
                        <span>📐 Formül & Yapı Düzeni</span>
                      </h4>
                      {topic.formulas.map((form, fIdx) => (
                        <div key={fIdx} className="p-3 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5">
                          <span className="text-xs font-bold text-teal-700 dark:text-teal-400 block mb-1">
                            {form.title}
                          </span>
                          <div className="bg-white/80 dark:bg-slate-900/80 p-2 rounded-lg font-mono text-xs text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 font-bold whitespace-pre-line">
                            {form.pattern}
                          </div>
                          <p className="text-[11px] opacity-75 mt-1 font-medium">
                            {form.explanation}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Püf Noktalar & Kurallar */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1">
                        <span>⚡ Önemli Kurallar & İpuçları</span>
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {topic.keyRules.map((rule, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5">
                            <span className="text-teal-500 font-bold">•</span>
                            <span className="leading-snug">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sık Yapılan Hatalar (Common Mistakes) */}
                    {topic.commonMistakes && topic.commonMistakes.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-black text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>En Sık Yapılan Hatalar (Tuzaklar!)</span>
                        </h4>
                        {topic.commonMistakes.map((mis, mIdx) => (
                          <div key={mIdx} className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-400/30 text-xs space-y-1">
                            <div className="flex items-center gap-1 text-rose-700 dark:text-rose-300 font-mono font-bold line-through">
                              <span>❌ {mis.wrong}</span>
                            </div>
                            <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-mono font-bold">
                              <span>✅ {mis.correct}</span>
                            </div>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">
                              Sebep: {mis.reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Örnek Cümleler & Sesli Dinleme */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1">
                        <span>🔊 Örnek Cümleler (Sesli Dinle)</span>
                      </h4>
                      <div className="space-y-1.5">
                        {topic.examples.map((ex, eIdx) => (
                          <div key={eIdx} className="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs font-bold text-slate-900 dark:text-white">
                                {ex.eng}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                                {ex.tr}
                              </p>
                            </div>
                            <button
                              onClick={() => speak(ex.eng)}
                              className="p-1.5 rounded-lg bg-teal-500/15 text-teal-700 dark:text-teal-300 hover:bg-teal-500/25 transition cursor-pointer shrink-0"
                              title="Cümleyi Dinle (TTS)"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tip */}
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-800 dark:text-amber-200 flex items-center gap-2">
                      <span className="text-base">🏆</span>
                      <span className="font-semibold">{topic.proTip}</span>
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
              Aşağıdaki İngilizce kelimeleri doğru sıraya dizerek cümleyi kurun
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
