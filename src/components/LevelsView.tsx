import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';

interface LevelsViewProps {
  themeStyle: ThemeClasses;
  selectedLevel: string;
  filteredTexts: any[];
  completedTexts: string[];
  startReading: (text: any) => void;
}

export const LevelsView: React.FC<LevelsViewProps> = ({
  themeStyle,
  selectedLevel,
  filteredTexts,
  completedTexts,
  startReading,
}) => {
  return (
    <div className="flex-1 p-5 space-y-3 overflow-y-auto">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">{selectedLevel} Seviyesi Metinleri</h2>
        <p className="text-xs opacity-60 font-medium">Okumak istediğiniz metni seçin</p>
      </div>
      {filteredTexts.map(text => {
        const isCompleted = completedTexts.includes(text.id);
        return (
          <button 
            key={text.id} 
            onClick={() => startReading(text)}
            className={`w-full ${themeStyle.card} border p-4 rounded-2xl flex items-center justify-between hover:border-indigo-400 hover:shadow-md transition text-left relative overflow-hidden active:scale-[0.99]`}
          >
            {isCompleted && (
              <div className="absolute top-0 right-0 bg-green-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">
                TAMAMLANDI ✓
              </div>
            )}
            <div>
              <h3 className="font-bold text-base">{text.title}</h3>
              <p className="text-xs opacity-60 mt-0.5 font-medium">{text.sentences.length} Cümle • {text.questions?.length || 0} Soru</p>
            </div>
            <span className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-extrabold group-hover:translate-x-0.5 transition">Oku ➔</span>
          </button>
        );
      })}
    </div>
  );
};
