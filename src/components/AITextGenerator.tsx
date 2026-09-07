import React, { useState } from 'react';

interface AITextGeneratorProps {
  savedWords: any[];
  onGenerated: (textItem: any) => void;
  onBack: () => void;
}

const PRESET_TOPICS = [
  { id: 'tech', label: 'Teknoloji & Yapay Zekâ', icon: '🤖' },
  { id: 'travel', label: 'Seyahat & Macera', icon: '✈️' },
  { id: 'career', label: 'İş Hayatı & Başarı', icon: '💼' },
  { id: 'coffee', label: 'Günlük Yaşam & Sohbet', icon: '☕' },
  { id: 'mystery', label: 'Gizem & Dedektiflik', icon: '🕵️' },
  { id: 'space', label: 'Uzay & Bilim Kurgu', icon: '🚀' },
  { id: 'nature', label: 'Doğa & Vahşi Yaşam', icon: '🌿' },
];

export const AITextGenerator: React.FC<AITextGeneratorProps> = ({
  savedWords,
  onGenerated,
  onBack,
}) => {
  const [level, setLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>('B1');
  const [selectedTopic, setSelectedTopic] = useState('Teknoloji & Yapay Zekâ');
  const [customTopic, setCustomTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Extract weak words from Box 1 and Box 2
  const weakWordsList = savedWords
    .filter(w => (w.box || 1) <= 2)
    .map(w => w.original)
    .slice(0, 15);

  const [includedWords, setIncludedWords] = useState<string[]>(weakWordsList);

  const toggleWordSelection = (word: string) => {
    setIncludedWords(prev => 
      prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
    );
  };

  const handleGenerate = async () => {
    const finalTopic = customTopic.trim() || selectedTopic;
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/generate-reading-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          level,
          topic: finalTopic,
          weakWords: includedWords
        })
      });

      const resData = await response.json();

      if (!response.ok || !resData.success || !resData.data) {
        throw new Error(resData.error || 'Yapay zeka metni oluştururken bir yanıt alınamadı.');
      }

      const generated = resData.data;

      const newText = {
        id: 'ai_' + Date.now(),
        level: generated.level || level,
        title: generated.title || `${finalTopic} (${level})`,
        sentences: generated.sentences.map((s: any, idx: number) => ({
          id: idx + 1,
          eng: s.eng,
          tr: s.tr
        })),
        questions: generated.questions || [],
        isCustom: true,
        isAIGenerated: true,
        targetedWordsUsed: generated.targetedWordsUsed || []
      };

      onGenerated(newText);
    } catch (err: any) {
      console.error('AI Generator Error:', err);
      let msg = err?.message || 'Metin üretimi sırasında bir sorun oluştu.';
      if (typeof msg === 'string' && (msg.includes('503') || msg.includes('high demand') || msg.includes('UNAVAILABLE'))) {
        msg = 'Gemini sunucularında anlık yoğunluk yaşanıyor (503). Lütfen birkaç saniye bekleyip tekrar deneyin veya aşağıdaki hazır taslakla devam edin.';
      }
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback generation when API key is not ready or offline
  const handleUseCuratedFallback = () => {
    const finalTopic = customTopic.trim() || selectedTopic;
    const fallbackText = {
      id: 'ai_curated_' + Date.now(),
      level: level,
      title: `${finalTopic} Insights`,
      sentences: [
        { id: 1, eng: `Exploring the depths of ${finalTopic} reveals fascinating perspectives.`, tr: `${finalTopic} konusunun derinliklerini keşfetmek büyüleyici bakış açıları sunar.` },
        { id: 2, eng: "Every learner encounters new challenges along the way.", tr: "Her öğrenici bu yolculukta yeni zorluklarla karşılaşır." },
        { id: 3, eng: "With consistent practice, complex concepts become completely natural.", tr: "Düzenli pratikle karmaşık kavramlar tamamen doğal hale gelir." },
        { id: 4, eng: "Paying attention to real sentences strengthens both vocabulary and fluency.", tr: "Gerçek cümlelere dikkat etmek hem kelime dağarcığını hem de akıcılığı güçlendirir." },
        { id: 5, eng: "Keep reading every day to expand your knowledge.", tr: "Bilgini genişletmek için her gün okumaya devam et." }
      ],
      questions: [
        { q: "Bu metnin ana fikri nedir?", options: ["Düzenli okuma ve pratik başarıyı getirir", "Diller zor öğrenilir", "Okumak gereksizdir"], answer: 0 }
      ],
      isCustom: true,
      isAIGenerated: true
    };
    onGenerated(fallbackText);
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto pb-12 max-w-2xl mx-auto w-full">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-5 text-white shadow-xl border border-indigo-500/30 mb-5 relative overflow-hidden">
        <div className="flex items-center gap-3 relative z-10">
          <span className="text-3xl bg-white/15 p-3 rounded-2xl backdrop-blur-xs">✨</span>
          <div>
            <h2 className="text-xl font-black">AI Kişisel Metin Stüdyosu</h2>
            <p className="text-xs text-indigo-200 mt-0.5">
              İlgi alanına, hedefine ve henüz ezberleyemediğin kelimelere özel taze okuma parçaları üret
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {/* 1. SEVİYE SEÇİMİ */}
        <div>
          <label className="text-xs font-black uppercase text-slate-500 block mb-2">1. Seviyeni Seç</label>
          <div className="grid grid-cols-4 gap-2">
            {(['A1', 'A2', 'B1', 'B2'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`py-3 rounded-2xl font-black text-sm border transition shadow-sm ${
                  level === lvl
                    ? 'bg-indigo-700 text-white border-indigo-500 shadow-md scale-102'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* 2. KONU SEÇİMİ */}
        <div>
          <label className="text-xs font-black uppercase text-slate-500 block mb-2">2. İlgi Alanı / Konu</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {PRESET_TOPICS.map(topic => (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(topic.label);
                  setCustomTopic('');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition ${
                  selectedTopic === topic.label && !customTopic
                    ? 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-200 border-indigo-400'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                <span>{topic.icon}</span>
                <span>{topic.label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Veya kendi konunu yaz (ör: Coffee culture, Formula 1, Rome...)"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            {customTopic && (
              <button 
                onClick={() => setCustomTopic('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Temizle
              </button>
            )}
          </div>
        </div>

        {/* 3. ZAYIF KELİMELERİ ENTEGRE ET */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-black uppercase text-slate-500">
              3. Hikayeye Katılacak Zayıf Kelimelerim (Kutu 1-2)
            </label>
            <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold">
              {includedWords.length} kelime seçili
            </span>
          </div>

          {weakWordsList.length === 0 ? (
            <div className="p-3 bg-slate-100 dark:bg-slate-800/60 rounded-2xl text-xs text-slate-500 text-center">
              Henüz Kutu 1 veya 2'de bekleyen kelimeniz yok. Yapay zekâ seviyene uygun zengin kelimeler seçecek.
            </div>
          ) : (
            <div className="flex flex-wrap gap-1.5 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700 max-h-36 overflow-y-auto">
              {weakWordsList.map(word => {
                const isSelected = includedWords.includes(word);
                return (
                  <button
                    key={word}
                    onClick={() => toggleWordSelection(word)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                      isSelected 
                        ? 'bg-purple-600 text-white border-purple-500 shadow-xs' 
                        : 'bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}{word}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Error Message with graceful fallback */}
        {errorMessage && (
          <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-2xl text-xs text-rose-800 dark:text-rose-200">
            <p className="font-bold mb-1">⚠️ Bilgilendirme:</p>
            <p className="mb-2 leading-relaxed">{errorMessage}</p>
            <button
              onClick={handleUseCuratedFallback}
              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs shadow-xs"
            >
              Yine de Örnek {level} Metni Oluştur
            </button>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-3">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className={`w-full py-4 rounded-2xl font-black text-sm text-white shadow-xl flex items-center justify-center gap-2 transition ${
              isLoading 
                ? 'bg-slate-600 cursor-wait' 
                : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-800 active:scale-[0.98]'
            }`}
          >
            {isLoading ? (
              <>
                <span className="animate-spin text-lg">⏳</span>
                <span>Yapay Zekâ Metni ve Soruları Hazırlıyor...</span>
              </>
            ) : (
              <>
                <span className="text-lg">✨</span>
                <span>Özel Okuma Parçasını Oluştur</span>
              </>
            )}
          </button>
        </div>

        <div className="text-center">
          <button onClick={onBack} className="text-xs text-slate-500 hover:text-slate-700 font-bold">
            ← Vazgeç ve Menüye Dön
          </button>
        </div>
      </div>
    </div>
  );
};
