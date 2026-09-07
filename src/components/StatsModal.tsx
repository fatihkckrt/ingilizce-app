import React, { useEffect, useState } from 'react';
import { idbGet } from '../data';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedWords: any[];
  completedTextsCount: number;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  savedWords,
  completedTextsCount,
}) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;
    (async () => {
      setLoading(true);
      const data = await idbGet('study_stats');
      if (isMounted) {
        setStats(data || {
          dailyStreak: 1,
          totalSentencesRead: 0,
          totalTextsCompleted: completedTextsCount || 0,
          totalQuizQuestionsAnswered: 0,
          totalQuizCorrect: 0,
          totalVocabReviews: 0,
          history: {}
        });
        setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, [isOpen, completedTextsCount]);

  if (!isOpen) return null;

  // Calculate box counts
  const boxCounts = [1, 2, 3, 4, 5].map(boxNum => ({
    box: boxNum,
    count: savedWords.filter(w => (w.box || 1) === boxNum).length
  }));

  const totalWords = savedWords.length || 1;
  const quizAccuracy = stats?.totalQuizQuestionsAnswered > 0
    ? Math.round((stats.totalQuizCorrect / stats.totalQuizQuestionsAnswered) * 100)
    : 100;

  // Last 7 days
  const last7Days: { dateStr: string; label: string; data: any }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const dateStr = d.toISOString().slice(0, 10);
    const dayName = d.toLocaleDateString('tr-TR', { weekday: 'short' });
    last7Days.push({
      dateStr,
      label: dayName,
      data: stats?.history?.[dateStr] || { sentences: 0, texts: 0, quiz: 0, vocab: 0 }
    });
  }

  const maxSentences = Math.max(...last7Days.map(d => d.data.sentences || 0), 10);

  return (
    <div 
      className="fixed inset-0 bg-black/75 z-55 flex items-center justify-center p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md rounded-3xl p-5 shadow-2xl border border-slate-700 text-white relative max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: '#0f172a' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">📊</span>
            <h3 className="font-black text-lg">Gelişim & İstatistikler</h3>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold"
          >
            ✕
          </button>
        </div>

        {loading ? (
          <div className="py-12 text-center text-slate-400 text-sm">İstatistikler yükleniyor...</div>
        ) : (
          <div className="space-y-4">
            {/* Quick KPI Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/70 text-center">
                <span className="text-2xl block mb-0.5">🔥</span>
                <span className="text-2xl font-black text-amber-400">{stats?.dailyStreak || 1} Gün</span>
                <span className="text-[11px] text-slate-400 block font-medium">Günlük Seri</span>
              </div>

              <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/70 text-center">
                <span className="text-2xl block mb-0.5">📖</span>
                <span className="text-2xl font-black text-sky-400">{stats?.totalSentencesRead || 0}</span>
                <span className="text-[11px] text-slate-400 block font-medium">Okunan Cümle</span>
              </div>

              <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/70 text-center">
                <span className="text-2xl block mb-0.5">🎯</span>
                <span className="text-2xl font-black text-emerald-400">%{quizAccuracy}</span>
                <span className="text-[11px] text-slate-400 block font-medium">Sınav Başarısı</span>
              </div>

              <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/70 text-center">
                <span className="text-2xl block mb-0.5">🧠</span>
                <span className="text-2xl font-black text-purple-400">{savedWords.length}</span>
                <span className="text-[11px] text-slate-400 block font-medium">Kayıtlı Kelime</span>
              </div>
            </div>

            {/* 7-Day Activity Mini Chart */}
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/70">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Son 7 Günlük Cümle Okuma Aktivitesi
              </span>
              <div className="flex items-end justify-between gap-1 h-28 pt-2">
                {last7Days.map((day, idx) => {
                  const sCount = day.data.sentences || 0;
                  const heightPct = Math.max(12, Math.round((sCount / maxSentences) * 100));
                  const isToday = idx === 6;
                  return (
                    <div key={day.dateStr} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <span className="text-[9px] text-slate-400 font-bold">{sCount > 0 ? sCount : ''}</span>
                      <div 
                        className={`w-full rounded-t-lg transition-all duration-300 ${
                          isToday ? 'bg-gradient-to-t from-indigo-600 to-sky-400' : (sCount > 0 ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-700/30')
                        }`}
                        style={{ height: `${heightPct}%` }}
                      />
                      <span className={`text-[10px] uppercase font-bold mt-1 ${isToday ? 'text-sky-300' : 'text-slate-400'}`}>
                        {day.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Leitner SRS Box Distribution */}
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/70">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Leitner Hafıza Kutuları Dağılımı
                </span>
                <span className="text-[11px] text-purple-300 font-bold">{savedWords.length} Kelime</span>
              </div>

              <div className="space-y-2">
                {boxCounts.map(({ box, count }) => {
                  const pct = Math.round((count / totalWords) * 100);
                  const colors = [
                    'bg-rose-500',    // Kutu 1 (Yeni)
                    'bg-amber-500',   // Kutu 2 (Gelişiyor)
                    'bg-yellow-500',  // Kutu 3 (Orta)
                    'bg-emerald-500', // Kutu 4 (Güçlü)
                    'bg-indigo-500'   // Kutu 5 (Kalıcı Hafıza)
                  ];
                  const labels = [
                    'Kutu 1 (Her Gün)',
                    'Kutu 2 (3 Günde Bir)',
                    'Kutu 3 (Haftada Bir)',
                    'Kutu 4 (2 Haftada Bir)',
                    'Kutu 5 (Ayda Bir - Usta)'
                  ];
                  return (
                    <div key={box} className="text-xs">
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>{labels[box - 1]}</span>
                        <span className="font-bold">{count} kelime ({pct}%)</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-700">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${colors[box - 1]}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Summary Footer */}
            <div className="pt-2 text-center text-xs text-slate-400">
              Düzenli tekrar yapmak hafızayı 4 kata kadar güçlendirir. Harika gidiyorsun! 🚀
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
