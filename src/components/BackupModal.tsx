import React from 'react';

interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleExportJSON: () => void;
  handleExportAnkiTSV: () => void;
  handleImportJSON: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  savedWordsCount: number;
  customTextsCount: number;
}

export const BackupModal: React.FC<BackupModalProps> = ({
  isOpen,
  onClose,
  handleExportJSON,
  handleExportAnkiTSV,
  handleImportJSON,
  fileInputRef,
  savedWordsCount,
  customTextsCount,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-55 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-slate-700 text-white relative"
        style={{ backgroundColor: '#0f172a' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-black text-base flex items-center gap-2">
            <span>💾</span> Veri Yönetimi & Yedek
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-sm font-bold">✕</button>
        </div>

        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
          Verileriniz cihazınızda <strong>IndexedDB</strong> ile güvenle saklanır. Telefon değiştirirken veya verilerinizi kaybetmemek için düzenli yedek alabilirsiniz.
        </p>

        <div className="space-y-2.5">
          <button 
            onClick={handleExportJSON}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2 transition active:scale-[0.98]"
          >
            <span>📥</span> JSON Yedeği İndir (Tüm Veriler)
          </button>

          <button 
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2 transition active:scale-[0.98]"
          >
            <span>📤</span> JSON Yedeği Geri Yükle
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImportJSON} 
            accept=".json" 
            className="hidden" 
          />

          <button 
            onClick={handleExportAnkiTSV}
            className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2 transition active:scale-[0.98]"
          >
            <span>📇</span> Anki Kart Destesi İndir (.tsv)
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between">
          <span>Depolanan Kelime: {savedWordsCount}</span>
          <span>Özel Metin: {customTextsCount}</span>
        </div>
      </div>
    </div>
  );
};
