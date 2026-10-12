import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';

interface CustomListViewProps {
  themeStyle: ThemeClasses;
  customTexts: any[];
  startReading: (text: any) => void;
  deleteCustomText: (e: React.MouseEvent, textId: string) => void;
}

export const CustomListView: React.FC<CustomListViewProps> = ({
  themeStyle,
  customTexts,
  startReading,
  deleteCustomText,
}) => {
  return (
    <div className="flex-1 p-5 space-y-3 overflow-y-auto">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">Eklediğim Özel Metinler</h2>
        <p className="text-xs opacity-60 font-medium">Kendi oluşturduğunuz okuma arşiviniz</p>
      </div>
      {customTexts.length === 0 ? (
        <div className="text-center opacity-60 mt-10">
          <p>Henüz özel bir metin eklemediniz.</p>
        </div>
      ) : (
        customTexts.map(text => (
          <div key={text.id} className={`${themeStyle.card} border p-4 rounded-2xl flex items-center justify-between shadow-sm relative group`}>
            <div onClick={() => startReading(text)} className="flex-1 cursor-pointer">
              <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-1.5 py-0.5 rounded mr-2">{text.level}</span>
              <h3 className="font-bold inline text-base">{text.title}</h3>
              <p className="text-xs opacity-60 mt-1 font-medium">{text.sentences.length} Cümle</p>
            </div>
            <button onClick={(e) => deleteCustomText(e, text.id)} className="text-red-500 p-2 opacity-60 hover:opacity-100 text-sm">
              🗑️
            </button>
          </div>
        ))
      )}
    </div>
  );
};
