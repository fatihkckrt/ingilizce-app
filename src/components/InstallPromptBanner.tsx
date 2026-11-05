import React, { useEffect, useState } from 'react';

export const InstallPromptBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      setIsInstalled(true);
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  if (isInstalled || !showBanner) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-3 rounded-2xl shadow-md border border-indigo-400/40 flex items-center justify-between gap-2 text-xs mb-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">📲</span>
        <div>
          <span className="font-bold block">Uygulama Olarak Yükle</span>
          <span className="text-[10px] text-indigo-100">Daha hızlı erişim ve internetsiz çalışma için</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={handleInstall}
          className="bg-white text-indigo-900 font-bold px-3 py-1.5 rounded-xl shadow text-xs hover:bg-indigo-50 active:scale-95"
        >
          Yükle
        </button>
        <button
          onClick={() => setShowBanner(false)}
          className="text-white/70 hover:text-white px-2 py-1 text-xs"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
