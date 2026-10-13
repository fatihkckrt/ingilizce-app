import React, { useState } from 'react';
import { isMaleVoice, isFemaleVoice, getVoiceDisplayInfo, VOICE_PRESETS } from '../utils/voiceUtils';
import { Volume2, Palette, Type, Sparkles, RefreshCw, X, Check } from 'lucide-react';

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  panelRef?: React.RefObject<HTMLDivElement>;
  phraseHunterActive: boolean;
  setPhraseHunterActive: (active: boolean) => void;
  voices: SpeechSynthesisVoice[];
  selectedVoice: string;
  setSelectedVoice: (voiceId: string) => void;
  testVoice: (targetVoiceId?: string) => void;
  speechRate: number;
  setSpeechRate: (rate: number) => void;
  readerTheme: string;
  setReaderTheme: (theme: string) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  fontFamily: string;
  setFontFamily: (family: string) => void;
}

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({
  isOpen,
  onClose,
  panelRef,
  phraseHunterActive,
  setPhraseHunterActive,
  voices,
  selectedVoice,
  setSelectedVoice,
  testVoice,
  speechRate,
  setSpeechRate,
  readerTheme,
  setReaderTheme,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
}) => {
  // Main settings categories: 'theme', 'voice', 'font'
  const [activeCategory, setActiveCategory] = useState<'theme' | 'voice' | 'font'>('theme');
  const [voiceFilterTab, setVoiceFilterTab] = useState<'all' | 'male' | 'female' | 'hd'>('all');

  if (!isOpen) return null;

  return (
    <div 
      ref={panelRef} 
      className="p-4 bg-slate-900 text-white border-b border-slate-700 shadow-2xl z-40 animate-fadeIn"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-base font-black text-white">⚙️ Ayarlar</span>
          <span className="text-[11px] text-slate-400 font-medium">Uygulama & Okuma Tercihleri</span>
        </div>
        <button 
          onClick={onClose} 
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition flex items-center gap-1 text-xs font-bold cursor-pointer"
        >
          <X className="w-4 h-4" />
          <span>Kapat</span>
        </button>
      </div>

      {/* SUBHEADER TABS: TEMA, SES, YAZI */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-2xl border border-slate-800 mb-4">
        <button
          type="button"
          onClick={() => setActiveCategory('theme')}
          className={`py-2 px-1 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition cursor-pointer ${
            activeCategory === 'theme'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Tema</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveCategory('voice')}
          className={`py-2 px-1 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition cursor-pointer ${
            activeCategory === 'voice'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Ses</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveCategory('font')}
          className={`py-2 px-1 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition cursor-pointer ${
            activeCategory === 'font'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Yazı</span>
        </button>
      </div>

      {/* ================= TAB 1: TEMA AYARLARI ================= */}
      {activeCategory === 'theme' && (
        <div className="space-y-3 animate-fadeIn">
          <div>
            <span className="text-xs font-bold text-slate-300 block mb-2">
              🎨 Okuma & Arayüz Teması Seçin
            </span>
            <div className="grid grid-cols-2 gap-2">
              {/* Doğa / Glass */}
              <button
                type="button"
                onClick={() => setReaderTheme('glass')}
                className={`p-3 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer ${
                  readerTheme === 'glass'
                    ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-400/50 text-white shadow-md'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">🌿</span>
                    <span className="text-xs font-black">Doğa (Açık)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Ferah & aydınlık kartlar</span>
                </div>
                {readerTheme === 'glass' && <Check className="w-4 h-4 text-indigo-400" />}
              </button>

              {/* Kitap / Sepia */}
              <button
                type="button"
                onClick={() => setReaderTheme('sepia')}
                className={`p-3 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer ${
                  readerTheme === 'sepia'
                    ? 'bg-[#3d2e1e] border-amber-500 ring-2 ring-amber-500/50 text-amber-100 shadow-md'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">📜</span>
                    <span className="text-xs font-black">Kitap (Sepya)</span>
                  </div>
                  <span className="text-[10px] text-amber-200/70 block mt-0.5">Göz yormayan sıcak kağıt</span>
                </div>
                {readerTheme === 'sepia' && <Check className="w-4 h-4 text-amber-400" />}
              </button>

              {/* OLED Siyah */}
              <button
                type="button"
                onClick={() => setReaderTheme('oled')}
                className={`p-3 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer ${
                  readerTheme === 'oled'
                    ? 'bg-black border-slate-400 ring-2 ring-slate-400/50 text-white shadow-md'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">🌙</span>
                    <span className="text-xs font-black">OLED (Siyah)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Pil dostu saf gece modu</span>
                </div>
                {readerTheme === 'oled' && <Check className="w-4 h-4 text-white" />}
              </button>

              {/* Orman / Forest */}
              <button
                type="button"
                onClick={() => setReaderTheme('forest')}
                className={`p-3 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer ${
                  readerTheme === 'forest'
                    ? 'bg-[#0e2719] border-emerald-400 ring-2 ring-emerald-400/50 text-emerald-100 shadow-md'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">🌲</span>
                    <span className="text-xs font-black">Orman (Yeşil)</span>
                  </div>
                  <span className="text-[10px] text-emerald-200/70 block mt-0.5">Huzurlu koyu zümrüt</span>
                </div>
                {readerTheme === 'forest' && <Check className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: SES AYARLARI ================= */}
      {activeCategory === 'voice' && (
        <div className="space-y-3 animate-fadeIn">
          {/* Telaffuz Hızı */}
          <div className="p-3 bg-slate-800/90 rounded-2xl border border-slate-700/80">
            <span className="text-xs font-bold text-slate-200 block mb-2">
              ⚡ Telaffuz Hızı
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {[0.75, 0.9, 1.0, 1.25].map(rate => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setSpeechRate(rate)}
                  className={`py-2 text-xs font-black rounded-xl border transition cursor-pointer ${
                    speechRate === rate 
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm' 
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {rate}x {rate === 1.0 ? '(Normal)' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Ses Motoru & Kişi Seçimi */}
          <div className="p-3 bg-slate-800/90 rounded-2xl border border-slate-700/80">
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-700/60">
              <span className="text-xs font-bold text-slate-200">
                🎙️ Konuşmacı Sesi
              </span>
              <button 
                type="button"
                onClick={() => testVoice(selectedVoice)}
                className="px-2.5 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black flex items-center gap-1 shadow-xs transition active:scale-95 cursor-pointer"
                title="Seçili Sesi Dinle"
              >
                <span>🔊</span> Dinle
              </button>
            </div>

            {/* Ses Filtresi */}
            <div className="grid grid-cols-4 gap-1 mb-2 p-0.5 bg-slate-900 rounded-xl border border-slate-700/80">
              <button
                type="button"
                onClick={() => setVoiceFilterTab('all')}
                className={`py-1 text-[10px] font-bold rounded-lg transition cursor-pointer ${
                  voiceFilterTab === 'all' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Tümü
              </button>
              <button
                type="button"
                onClick={() => setVoiceFilterTab('male')}
                className={`py-1 text-[10px] font-bold rounded-lg transition flex items-center justify-center gap-0.5 cursor-pointer ${
                  voiceFilterTab === 'male' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>👨</span> Erkek
              </button>
              <button
                type="button"
                onClick={() => setVoiceFilterTab('female')}
                className={`py-1 text-[10px] font-bold rounded-lg transition flex items-center justify-center gap-0.5 cursor-pointer ${
                  voiceFilterTab === 'female' ? 'bg-pink-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>👩</span> Kadın
              </button>
              <button
                type="button"
                onClick={() => setVoiceFilterTab('hd')}
                className={`py-1 text-[10px] font-bold rounded-lg transition flex items-center justify-center gap-0.5 cursor-pointer ${
                  voiceFilterTab === 'hd' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🎙️</span> Stüdyo
              </button>
            </div>

            {/* Hızlı Seçim Listesi */}
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
              {VOICE_PRESETS.filter(preset => {
                if (voiceFilterTab === 'male') return preset.category === 'male';
                if (voiceFilterTab === 'female') return preset.category === 'female' || preset.category === 'hd';
                if (voiceFilterTab === 'hd') return preset.category === 'hd';
                return true;
              }).map(preset => {
                const isSelected = selectedVoice === preset.id;
                const isMale = preset.badge.includes('Erkek');
                return (
                  <div
                    key={preset.id}
                    onClick={() => {
                      setSelectedVoice(preset.id);
                      testVoice(preset.id);
                    }}
                    className={`p-2 rounded-xl border transition cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? isMale
                          ? 'bg-sky-950/80 border-sky-400 text-white shadow-xs ring-1 ring-sky-400/50'
                          : 'bg-indigo-950/80 border-indigo-400 text-white shadow-xs ring-1 ring-indigo-400/50'
                        : 'bg-slate-900/80 border-slate-700/80 text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-base">{preset.flag}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold truncate">{preset.name}</span>
                          <span className={`text-[9px] px-1 py-0.2 rounded font-medium ${
                            isMale 
                              ? 'bg-sky-400/20 text-sky-300 border border-sky-400/30' 
                              : preset.category === 'hd' 
                                ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' 
                                : 'bg-pink-400/20 text-pink-300 border border-pink-400/30'
                          }`}>
                            {preset.badge}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 block truncate">{preset.desc}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVoice(preset.id);
                        testVoice(preset.id);
                      }}
                      className={`px-2 py-1 text-[10px] font-bold rounded-lg flex items-center gap-1 transition shrink-0 ${
                        isSelected
                          ? isMale ? 'bg-sky-600 text-white' : 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      ▶ Dinle
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: YAZI AYARLARI ================= */}
      {activeCategory === 'font' && (
        <div className="space-y-3 animate-fadeIn">
          {/* Yazı Boyutu */}
          <div className="p-3 bg-slate-800/90 rounded-2xl border border-slate-700/80">
            <span className="text-xs font-bold text-slate-200 block mb-2">
              🔤 Metin Yazı Boyutu
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { id: 'sm', label: 'Küçük' },
                { id: 'base', label: 'Standart' },
                { id: 'lg', label: 'Büyük' },
                { id: 'xl', label: 'Çok Büyük' }
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFontSize(item.id)}
                  className={`py-2 text-xs font-black rounded-xl border transition cursor-pointer ${
                    fontSize === item.id 
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm' 
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Yazı Tipi */}
          <div className="p-3 bg-slate-800/90 rounded-2xl border border-slate-700/80">
            <span className="text-xs font-bold text-slate-200 block mb-2">
              ✍️ Yazı Karakteri (Font)
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setFontFamily('sans')}
                className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  fontFamily === 'sans' 
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm' 
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                }`}
              >
                Sans (Modern)
              </button>
              <button
                type="button"
                onClick={() => setFontFamily('serif')}
                className={`py-2.5 px-2 rounded-xl text-xs font-bold font-serif border transition cursor-pointer ${
                  fontFamily === 'serif' 
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm' 
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                }`}
              >
                Serif (Kitap)
              </button>
              <button
                type="button"
                onClick={() => setFontFamily('mono')}
                className={`py-2.5 px-2 rounded-xl text-xs font-bold font-mono border transition cursor-pointer ${
                  fontFamily === 'mono' 
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm' 
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                }`}
              >
                Mono (Daktilo)
              </button>
            </div>
          </div>

          {/* Kalıp Avcısı Vurgusu */}
          <div className="p-3 bg-slate-800/90 rounded-2xl border border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🎯</span>
              <div>
                <span className="text-xs font-bold text-slate-200 block">Kalıp Avcısı</span>
                <span className="text-[10px] text-slate-400">Deyim ve phrasal verb'leri sarı renkle vurgula</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setPhraseHunterActive(!phraseHunterActive)}
              className={`px-3 py-1.5 text-xs font-black rounded-xl border transition cursor-pointer ${
                phraseHunterActive 
                  ? 'bg-amber-400 border-amber-300 text-amber-950 shadow-sm' 
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {phraseHunterActive ? 'Açık ✓' : 'Kapalı'}
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="pt-3 mt-3 border-t border-slate-800 flex justify-between items-center text-xs">
        <span className="text-[10px] text-slate-400 font-medium">
          Sözlük: <b className="text-emerald-400 font-bold">Genişletilmiş (70 Metin / 60 Bulmaca)</b>
        </span>
        <button
          type="button"
          onClick={async () => {
            try {
              if ('caches' in window) {
                const keys = await caches.keys();
                await Promise.all(keys.map(k => caches.delete(k)));
              }
              if ('serviceWorker' in navigator) {
                const regs = await navigator.serviceWorker.getRegistrations();
                await Promise.all(regs.map(r => r.unregister()));
              }
              window.location.reload();
            } catch {
              window.location.reload();
            }
          }}
          className="px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-[10px] font-bold transition flex items-center gap-1 cursor-pointer"
          title="Yeni kelimeleri ve en son güncellemeleri yüklemek için önbelleği sıfırla"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Önbelleği Yenile</span>
        </button>
      </div>
    </div>
  );
};
