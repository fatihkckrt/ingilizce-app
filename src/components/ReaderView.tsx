import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';

interface ReaderViewProps {
  activeText: any;
  themeStyle: ThemeClasses;
  getTextBgImage: (text: any) => string;
  setShowPhraseCardsModal: (val: boolean) => void;
  findPhrasalVerbsInText: (text: string) => any[];
  phraseHunterActive: boolean;
  cleanWord: (word: string) => string;
  phrasalVerbs: Record<string, any>;
  dictionary: Record<string, string>;
  activeHighlight: { sentenceId: number; indices: number[] } | null;
  karaokeState: { isPlaying: boolean; sentenceId: number | null; wordIdx: number | null };
  fontSizeClass: string;
  handleWordClick: (word: string, idx: number, sentenceWords: string[], sentence: any) => void;
  speakSentenceWithKaraoke: (sentence: any) => void;
  revealedSentences: Record<number, boolean>;
  setRevealedSentences: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  readerTheme: string;
  handlePhrasalBadgeClick: (pm: any, sentence: any) => void;
  showFullTranslation: boolean;
  setShowFullTranslation: (val: boolean) => void;
  handleFinishReading: () => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({
  activeText,
  themeStyle,
  getTextBgImage,
  setShowPhraseCardsModal,
  findPhrasalVerbsInText,
  phraseHunterActive,
  cleanWord,
  phrasalVerbs,
  dictionary,
  activeHighlight,
  karaokeState,
  fontSizeClass,
  handleWordClick,
  speakSentenceWithKaraoke,
  revealedSentences,
  setRevealedSentences,
  readerTheme,
  handlePhrasalBadgeClick,
  showFullTranslation,
  setShowFullTranslation,
  handleFinishReading,
}) => {
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3.5 pb-36">
        {/* Metin Üst Görseli & Başlık Banner'ı */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-black/10 bg-slate-900 mb-2">
          <div className="h-44 sm:h-52 w-full relative">
            <img 
              src={getTextBgImage(activeText)} 
              alt={activeText.title} 
              referrerPolicy="no-referrer" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 text-white">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs ${
                    activeText.level === 'A1' ? 'bg-emerald-500 text-white' :
                    activeText.level === 'A2' ? 'bg-blue-500 text-white' :
                    activeText.level === 'B1' ? 'bg-indigo-500 text-white' : 'bg-purple-500 text-white'
                  }`}>
                    {activeText.level} Seviye
                  </span>
                  {activeText.isCustom && (
                    <span className="bg-amber-400 text-amber-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      ÖZEL METİN
                    </span>
                  )}
                  {/* Metindeki Toplam Kalıp & Deyim Sayısı Rozeti */}
                  {(() => {
                    const totalPhrases = activeText.sentences.reduce((sum: number, s: any) => sum + findPhrasalVerbsInText(s.eng).length, 0);
                    if (totalPhrases === 0) return null;
                    return (
                      <span 
                        onClick={() => setShowPhraseCardsModal(true)}
                        className="cursor-pointer bg-amber-400/90 hover:bg-amber-400 text-amber-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1 transition active:scale-95"
                        title="Bu metindeki deyim ve kalıpları kartlarda incelemek için tıklayın"
                      >
                        <span>⚡ {totalPhrases} Kalıp / Deyim</span>
                      </span>
                    );
                  })()}
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-black leading-tight drop-shadow-md text-white">
                {activeText.title}
              </h2>
            </div>
          </div>
        </div>

        {activeText.sentences.map((sentence: any) => {
          const sentenceWords: string[] = sentence.eng.split(' ');
          const cleanWords = sentenceWords.map(w => cleanWord(w));
          const isHighlighted = activeHighlight && activeHighlight.sentenceId === sentence.id;
          const isSpeakingThisSentence = karaokeState.sentenceId === sentence.id;

          const phrasalsInSentence = phraseHunterActive ? findPhrasalVerbsInText(sentence.eng) : [];

          // Performans Optimizasyonu: Kalıp indekslerini her kelime için tekrar hesaplamak yerine cümle bazında bir defa hesapla
          let phraseIndicesSet: Set<number> | null = null;
          if (phraseHunterActive) {
            phraseIndicesSet = new Set<number>();
            for (let start = 0; start < cleanWords.length; start++) {
              for (let len = 4; len >= 2; len--) {
                if (start + len <= cleanWords.length) {
                  const candidate = cleanWords.slice(start, start + len).join(' ');
                  if (phrasalVerbs[candidate] || dictionary[candidate]) {
                    for (let k = 0; k < len; k++) {
                      phraseIndicesSet.add(start + k);
                    }
                    break;
                  }
                }
              }
            }
          }

          return (
            <div key={sentence.id} className={`relative ${themeStyle.card} border p-4 rounded-2xl shadow-xs hover:shadow-sm transition`}>
              <div className={`${fontSizeClass} leading-relaxed flex flex-wrap items-center gap-y-2`}>
                <div className="flex-1">
                  {sentenceWords.map((word, idx) => {
                    const isWordHighlighted = isHighlighted && activeHighlight.indices.includes(idx);
                    const isKaraokeWord = isSpeakingThisSentence && karaokeState.wordIdx === idx;
                    const inPhrase = phraseIndicesSet ? phraseIndicesSet.has(idx) : false;

                    return (
                      <span key={idx}>
                        <button
                          onClick={() => handleWordClick(word, idx, sentenceWords, sentence)}
                          className={`rounded px-1 py-0.5 hover:opacity-75 transition font-medium ${isKaraokeWord ? 'karaoke-highlight' : ''} ${isWordHighlighted && !isKaraokeWord ? 'word-highlight font-bold' : ''} ${inPhrase && !isKaraokeWord && !isWordHighlighted ? 'phrase-hunter-highlight font-semibold' : ''}`}
                        >
                          {word}
                        </button>{' '}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    onClick={() => speakSentenceWithKaraoke(sentence)}
                    title="Cümleyi Karaoke ile Dinle"
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-sm transition ${isSpeakingThisSentence ? 'bg-amber-400 text-amber-950 animate-pulse' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                  >🔊</button>
                  <button
                    onClick={() => setRevealedSentences(prev => ({ ...prev, [sentence.id]: !prev[sentence.id] }))}
                    title="Çeviriyi Gör"
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-sm transition ${
                      readerTheme === 'oled' || readerTheme === 'forest' 
                        ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' 
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >🌐</button>
                </div>
              </div>

              {/* Kalıp Avcısı: Cümledeki Phrasal Verb & Deyim Rozetleri */}
              {phraseHunterActive && phrasalsInSentence.length > 0 && (
                <div className="mt-2.5 pt-2 border-t border-dashed border-amber-300/70 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-extrabold text-amber-800">⚡ Kalıplar:</span>
                  {phrasalsInSentence.map((pm, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => handlePhrasalBadgeClick(pm, sentence)}
                      className="text-[11px] font-bold bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 px-2.5 py-0.5 rounded-full transition flex items-center gap-1 shadow-2xs"
                    >
                      <span>{pm.phrase}</span>
                      <span className="opacity-70 font-normal">({pm.info.tr})</span>
                    </button>
                  ))}
                </div>
              )}

              {(revealedSentences[sentence.id] || showFullTranslation) && (
                <div className={`mt-2.5 p-2.5 rounded-r-lg text-xs leading-relaxed font-semibold shadow-inner border-l-4 ${
                  readerTheme === 'oled' || readerTheme === 'forest' 
                    ? 'bg-indigo-950/80 border-indigo-400 text-indigo-100' 
                    : readerTheme === 'sepia'
                      ? 'bg-[#e5d9bd] border-amber-700 text-[#3d2e1e]'
                      : 'bg-indigo-50 border-indigo-600 text-slate-700'
                }`}>
                  {sentence.tr}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={`absolute bottom-0 left-0 right-0 p-3.5 ${themeStyle.footer} border-t shadow-2xl flex gap-2.5 z-30 transition-colors duration-300`}>
        <button
          onClick={() => setShowFullTranslation(!showFullTranslation)}
          className={`flex-1 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
            showFullTranslation 
              ? 'bg-slate-300 text-slate-800 font-extrabold' 
              : readerTheme === 'oled' || readerTheme === 'forest' ? 'bg-slate-800 text-white' : 'bg-indigo-100 text-indigo-900 font-bold'
          }`}
        >
          <span>🌐</span> {showFullTranslation ? "Gizle" : "Tam Çeviri"}
        </button>
        <button 
          onClick={handleFinishReading} 
          className="flex-[1.4] py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition active:scale-95"
        >
          <span>✅</span> {activeText.questions?.length > 0 ? "Sınava Geç" : "Metni Bitir"}
        </button>
      </div>
    </div>
  );
};
