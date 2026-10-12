import React, { useState } from 'react';
import { isMaleVoice, isFemaleVoice, getVoiceDisplayInfo, VOICE_PRESETS } from '../utils/voiceUtils';

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
  const [voiceFilterTab, setVoiceFilterTab] = useState<'all' | 'male' | 'female' | 'hd'>('all');

  if (!isOpen) return null;

  return (
    <div ref={panelRef} className="p-4 bg-slate-900 text-white border-b border-slate-700 shadow-xl z-35 animate-fadeIn">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-black uppercase text-slate-400">Okuma & Ses Ayarları</span>
        <button onClick={onClose} className="text-slate-400 hover:text-white text-xs font-bold">✕ Kapat</button>
      </div>

      {/* Kalıp Avcısı Hızlı Ayarı */}
      <div className="mb-3 p-2.5 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🎯</span>
          <div>
            <span className="text-xs font-bold text-slate-200 block">Kalıp Avcısı</span>
            <span className="text-[10px] text-slate-400">Deyim ve phrasal verb'leri sarı renkle vurgula</span>
          </div>
        </div>
        <button
          onClick={() => setPhraseHunterActive(!phraseHunterActive)}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition ${
            phraseHunterActive 
              ? 'bg-amber-400 border-amber-300 text-amber-950 shadow-sm' 
              : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {phraseHunterActive ? 'Açık ✓' : 'Kapalı'}
        </button>
      </div>

      {/* Doğal ve Gerçekçi Ses Seçim Stüdyosu */}
      <div className="mb-3.5 p-3 rounded-xl bg-slate-800 border border-slate-700">
        <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-700/70">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-200">Telaffuz & Ses Motoru</span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Erkek / Kadın Seçimi
            </span>
          </div>
          <button 
            onClick={() => testVoice(selectedVoice)}
            className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold flex items-center gap-1 shadow-xs transition active:scale-95"
            title="Seçili Sesi Dinle"
          >
            <span>🔊</span> Dinle
          </button>
        </div>

        {/* Sistem Ses Teşhis ve Bilgi Rozeti */}
        <div className="mb-2.5 p-2 rounded-lg bg-slate-900/90 border border-slate-700/60 text-[10px]">
          {voices.filter(isMaleVoice).length > 0 ? (
            <div className="flex items-center gap-1.5 text-emerald-300">
              <span>✅</span>
              <span>Cihazınızda <strong>{voices.filter(isMaleVoice).length} adet gerçek erkek sesi</strong> ve {voices.filter(isFemaleVoice).length} kadın sesi aktif.</span>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex items-start gap-1.5 text-amber-300">
                <span className="shrink-0 text-xs">⚠️</span>
                <span>Cihazınızda doğrudan tanımlı erkek ses dosyası bulunamadı (Yalnızca kadın sesi yüklü). Erkek seçildiğinde yapay derin ton verilir.</span>
              </div>
              <div className="text-[9px] text-slate-400 pl-4">
                💡 <em>Gerçek erkek sesi için: Telefon Ayarları &gt; Erişilebilirlik &gt; Metin Okuma (TTS) &gt; Google TTS &gt; Ses Verilerini İndir menüsünden 'İngilizce Erkek' paketini indirebilirsiniz.</em>
              </div>
            </div>
          )}
        </div>

        {/* Filtreleme Sekmeleri: Tümü / Erkek / Kadın / Stüdyo */}
        <div className="grid grid-cols-4 gap-1 mb-2.5 p-0.5 bg-slate-900 rounded-lg border border-slate-700/80">
          <button
            type="button"
            onClick={() => setVoiceFilterTab('all')}
            className={`py-1 text-[10px] font-bold rounded transition ${
              voiceFilterTab === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🌟 Tümü
          </button>
          <button
            type="button"
            onClick={() => setVoiceFilterTab('male')}
            className={`py-1 text-[10px] font-bold rounded transition flex items-center justify-center gap-0.5 ${
              voiceFilterTab === 'male'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>👨</span> Erkek
          </button>
          <button
            type="button"
            onClick={() => setVoiceFilterTab('female')}
            className={`py-1 text-[10px] font-bold rounded transition flex items-center justify-center gap-0.5 ${
              voiceFilterTab === 'female'
                ? 'bg-pink-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>👩</span> Kadın
          </button>
          <button
            type="button"
            onClick={() => setVoiceFilterTab('hd')}
            className={`py-1 text-[10px] font-bold rounded transition flex items-center justify-center gap-0.5 ${
              voiceFilterTab === 'hd'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🎙️</span> Stüdyo
          </button>
        </div>

        {/* Ön Tanımlı Hızlı Seçim Kartları */}
        <div className="space-y-1.5 mb-2.5">
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
                className={`p-2 rounded-lg border transition cursor-pointer flex items-center justify-between gap-2 ${
                  isSelected
                    ? isMale
                      ? 'bg-sky-950/80 border-sky-400 text-white shadow-xs ring-1 ring-sky-400/50'
                      : 'bg-indigo-950/80 border-indigo-400 text-white shadow-xs ring-1 ring-indigo-400/50'
                    : 'bg-slate-900/80 border-slate-700/80 text-slate-300 hover:bg-slate-800/80 hover:border-slate-600'
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
                  className={`px-2 py-1 text-[10px] font-bold rounded-md flex items-center gap-1 transition shrink-0 ${
                    isSelected
                      ? isMale ? 'bg-sky-600 text-white' : 'bg-indigo-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>▶</span> Dinle
                </button>
              </div>
            );
          })}
        </div>

        {/* Cihazınızda Tespit Edilen Gerçek Sesler Listesi */}
        {voices.length > 0 && (voiceFilterTab === 'male' || voiceFilterTab === 'all' || voiceFilterTab === 'female') && (
          <div>
            <div className="flex items-center justify-between mb-1.5 mt-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                📱 Cihazınızdaki Donanım Sesleri ({voices.filter(v => {
                  if (voiceFilterTab === 'male') return isMaleVoice(v);
                  if (voiceFilterTab === 'female') return isFemaleVoice(v);
                  return true;
                }).length} adet)
              </span>
            </div>

            <div className="max-h-44 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
              {voices
                .filter(v => {
                  if (voiceFilterTab === 'male') return isMaleVoice(v);
                  if (voiceFilterTab === 'female') return isFemaleVoice(v);
                  return true;
                })
                .map(voice => {
                  const isSelected = selectedVoice === voice.name || selectedVoice === voice.voiceURI;
                  const info = getVoiceDisplayInfo(voice);
                  return (
                    <div
                      key={voice.name}
                      onClick={() => {
                        setSelectedVoice(voice.name);
                        testVoice(voice.name);
                      }}
                      className={`p-1.5 px-2 rounded-lg border transition cursor-pointer flex items-center justify-between gap-1.5 text-xs ${
                        isSelected
                          ? info.isMale
                            ? 'bg-sky-950/80 border-sky-400 text-white ring-1 ring-sky-400/50'
                            : 'bg-pink-950/80 border-pink-400 text-white ring-1 ring-pink-400/50'
                          : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-sm">{info.flag}</span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-semibold truncate">{info.displayName}</span>
                            <span className={`text-[8px] px-1 py-0.2 rounded font-bold ${
                              info.isMale ? 'bg-sky-500/20 text-sky-300' : 'bg-pink-500/20 text-pink-300'
                            }`}>
                              {info.genderLabel}
                            </span>
                          </div>
                          <span className="text-[9px] text-slate-500 block truncate">{info.accent} • {voice.lang}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVoice(voice.name);
                          testVoice(voice.name);
                        }}
                        className={`px-1.5 py-0.5 text-[9px] font-bold rounded shrink-0 transition ${
                          isSelected 
                            ? info.isMale ? 'bg-sky-600 text-white' : 'bg-pink-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        ▶ Dinle
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>

      <div className="mb-3">
        <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Telaffuz Hızı</span>
        <div className="grid grid-cols-4 gap-1.5">
          {[0.75, 0.9, 1.0, 1.25].map(rate => (
            <button
              key={rate}
              onClick={() => setSpeechRate(rate)}
              className={`py-1.5 text-xs font-bold rounded-lg border transition ${speechRate === rate ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
            >
              {rate}x
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Okuma Teması</span>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setReaderTheme('glass')}
            className={`py-1.5 text-xs font-bold rounded-lg border flex items-center justify-center gap-1 ${readerTheme === 'glass' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
          >
            🌿 Doğa
          </button>
          <button
            onClick={() => setReaderTheme('sepia')}
            className={`py-1.5 text-xs font-bold rounded-lg border flex items-center justify-center gap-1 ${readerTheme === 'sepia' ? 'bg-[#ede2cb] border-amber-600 text-[#433422]' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
          >
            📜 Kitap
          </button>
          <button
            onClick={() => setReaderTheme('oled')}
            className={`py-1.5 text-xs font-bold rounded-lg border flex items-center justify-center gap-1 ${readerTheme === 'oled' ? 'bg-black border-slate-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
          >
            🌙 OLED
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Yazı Boyutu</span>
          <div className="flex gap-1">
            {['sm', 'base', 'lg', 'xl'].map(sz => (
              <button
                key={sz}
                onClick={() => setFontSize(sz)}
                className={`flex-1 py-1 text-xs font-bold rounded border uppercase ${fontSize === sz ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
              >
                {sz === 'base' ? 'MD' : sz}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 font-bold block mb-1.5">Yazı Tipi</span>
          <div className="flex gap-1">
            <button
              onClick={() => setFontFamily('sans')}
              className={`flex-1 py-1 text-xs font-bold rounded border ${fontFamily === 'sans' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
            >
              Sans
            </button>
            <button
              onClick={() => setFontFamily('serif')}
              className={`flex-1 py-1 text-xs font-bold rounded border font-serif ${fontFamily === 'serif' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
            >
              Serif
            </button>
          </div>
        </div>
      </div>

      {/* Güncelleme & Önbellek Yenileme */}
      <div className="pt-3 mt-3 border-t border-slate-800 flex justify-between items-center">
        <span className="text-[10px] text-slate-400 font-medium">Sözlük: <b className="text-emerald-400">Genişletilmiş (v2.6)</b></span>
        <button
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
          className="px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-[10px] font-bold transition flex items-center gap-1"
          title="Yeni kelimeleri ve en son güncellemeleri yüklemek için önbelleği sıfırla"
        >
          🔄 Önbelleği Yenile
        </button>
      </div>
    </div>
  );
};
