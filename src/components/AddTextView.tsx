import React from 'react';
import { ThemeClasses } from '../utils/themeUtils';

interface AddTextViewProps {
  themeStyle: ThemeClasses;
  newTitle: string;
  setNewTitle: (val: string) => void;
  newLevel: string;
  setNewLevel: (val: string) => void;
  newEngText: string;
  setNewEngText: (val: string) => void;
  newTrText: string;
  setNewTrText: (val: string) => void;
  handleSaveCustomText: () => void;
}

export const AddTextView: React.FC<AddTextViewProps> = ({
  themeStyle,
  newTitle,
  setNewTitle,
  newLevel,
  setNewLevel,
  newEngText,
  setNewEngText,
  newTrText,
  setNewTrText,
  handleSaveCustomText,
}) => {
  return (
    <div className="flex-1 p-5 overflow-y-auto space-y-4">
      <div>
        <h2 className="text-xl font-bold">Yeni Okuma Metni Ekle</h2>
        <p className="text-xs opacity-60 font-medium">Metni ve isteğe bağlı çevirisini yapıştırın</p>
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="text-xs font-bold block mb-1">Başlık</label>
          <input 
            type="text" 
            value={newTitle} 
            onChange={e => setNewTitle(e.target.value)} 
            placeholder="Örn: My Morning Routine"
            className={`w-full p-3 rounded-xl border text-sm ${themeStyle.card}`} 
          />
        </div>

        <div>
          <label className="text-xs font-bold block mb-1">Seviye</label>
          <select 
            value={newLevel} 
            onChange={e => setNewLevel(e.target.value)}
            className={`w-full p-3 rounded-xl border text-sm ${themeStyle.card}`}
          >
            <option value="A1">A1 - Başlangıç</option>
            <option value="A2">A2 - Temel</option>
            <option value="B1">B1 - Orta</option>
            <option value="B2">B2 - İleri Orta</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-bold block mb-1">İngilizce Metin</label>
          <textarea 
            rows={6}
            value={newEngText} 
            onChange={e => setNewEngText(e.target.value)} 
            placeholder="İngilizce paragrafı buraya yapıştırın. Noktalama işaretlerine göre otomatik cümlelere ayrılacaktır."
            className={`w-full p-3 rounded-xl border text-sm leading-relaxed ${themeStyle.card}`} 
          />
        </div>

        <div>
          <label className="text-xs font-bold block mb-1">Türkçe Çevirisi (İsteğe Bağlı)</label>
          <textarea 
            rows={4}
            value={newTrText} 
            onChange={e => setNewTrText(e.target.value)} 
            placeholder="Cümle cümle Türkçe karşılıklarını yazabilirsiniz. Boş bırakırsanız sadece İngilizce olarak çalışabilirsiniz."
            className={`w-full p-3 rounded-xl border text-sm leading-relaxed ${themeStyle.card}`} 
          />
        </div>

        <button 
          onClick={handleSaveCustomText}
          disabled={!newTitle.trim() || !newEngText.trim()}
          className={`w-full py-4 rounded-xl font-bold text-sm text-white shadow-lg transition active:scale-[0.99] ${!newTitle.trim() || !newEngText.trim() ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-700 hover:bg-indigo-800'}`}
        >
          Metni Kaydet ve Oku
        </button>
      </div>
    </div>
  );
};
