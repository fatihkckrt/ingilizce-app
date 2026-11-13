import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Video,
  Image as ImageIcon,
  Download,
  Copy,
  Check,
  ArrowRight,
  Smartphone,
  Clock,
  Share2,
} from 'lucide-react';
import guideHeroImg from '../assets/images/guide_hero_showcase_1794572891268.jpg';

export type GuideFeatureTarget =
  | 'sentenceTranslate'
  | 'vocabMemory'
  | 'grammar'
  | 'puzzle'
  | 'aiGenerate';

interface AppGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateFeature?: (target: GuideFeatureTarget) => void;
}

const GUIDE_CARDS = [
  {
    id: '1',
    file: './guide/rehber-1-genel.png',
    downloadName: '1-ingilizce-ogren-genel-bakis.png',
    title: '1. Genel Bakış & Modüller',
    summary: '4 ana bölümün tek bakışta özeti',
  },
  {
    id: '2',
    file: './guide/rehber-2-okuma.png',
    downloadName: '2-cumle-ceviri-karaoke.png',
    title: '2. Cümle Çeviri & Karaoke',
    summary: 'Sesli takip, kelime tıklama ve testler',
  },
  {
    id: '3',
    file: './guide/rehber-3-kelime.png',
    downloadName: '3-kelime-leitner-hafiza.png',
    title: '3. Kelime & Hafıza (Leitner)',
    summary: '5 kutulu aralıklı tekrar sistemi',
  },
  {
    id: '4',
    file: './guide/rehber-4-gramer.png',
    downloadName: '4-gramer-atolyesi.png',
    title: '4. Gramer & Cümle Kurma',
    summary: '30 konu, 211 test, Hata Avı & Final',
  },
  {
    id: '5',
    file: './guide/rehber-5-bulmaca-ai.png',
    downloadName: '5-kare-bulmaca-ai.png',
    title: '5. Kare Bulmaca & AI Stüdyo',
    summary: '180 bulmaca ve yapay zeka metinleri',
  },
  {
    id: '6',
    file: './guide/rehber-6-kurulum.png',
    downloadName: '6-telefona-kurulum-ve-plan.png',
    title: '6. Telefona Kurulum & 15 Dk Plan',
    summary: 'Android/iOS PWA kurulumu ve günlük rutin',
  },
];

const APP_LIVE_URL = 'https://fatihkckrt.github.io/ingilizce-app/';
const VIDEO_FILE = './guide/ingilizce-ogren-tanitim.mp4';

const WHATSAPP_SHARE_TEXT = `🌲 *İngilizce Öğren — Ücretsiz Kişisel Çalışma Uygulaması*

Seviyene göre (A1-B2) İngilizceyi okuyarak, dinleyerek ve çözerek öğrenebileceğin kapsamlı web uygulaması:

📘 *1. Cümle Çeviri & Karaoke Okuma*
• Cümleleri sesli dinlerken kelime bazlı anlık takip
• Bilmediğin kelimeye dokunup Türkçe anlamını gör ve deftere kaydet
• Okuma sonu anlama testleri + *AI Metin Stüdyosu* + kendi metnini ekleme

🧠 *2. Kelime & Hafıza Merkezi (Leitner Sistemi)*
• 5 kutulu bilimsel tekrar sistemiyle unutmayı önle
• Dinleme & şıklı kelime testleri, Kalıp/Deyim kartları ve Eş/Zıt anlamlar

📐 *3. Gramer & Cümle Kurma Atölyesi*
• 30 detaylı konu anlatımı + gizle/göster örnek çevirileri
• 211+ boşluk doldurma (şıklı veya klavyeyle yazarak)
• 60 Cümle Kurma, 28 Hata Avı sorusu, 101 Düzensiz Fiil ve Karışık Final Sınavı

🧩 *4. 180 Kare Bulmaca*
• A1'den B2'ye 5x5'ten 10x10'a kadar seviyeli kelime bulmacaları

📱 *Telefona Uygulama Gibi Kurulur (Giriş / Ücret Yok):*
• Android (Chrome): Sağ üst 3 nokta → "Ana ekrana ekle"
• iPhone (Safari): Paylaş (↑) → "Ana Ekrana Ekle"

👉 *Hemen Başla:* ${APP_LIVE_URL}`;

export const AppGuideModal: React.FC<AppGuideModalProps> = ({
  isOpen,
  onClose,
  onNavigateFeature,
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'video' | 'images'>('guide');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [heroError, setHeroError] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2200);
    }
  };

  const handleTryFeature = (target: GuideFeatureTarget) => {
    onClose();
    if (onNavigateFeature) {
      onNavigateFeature(target);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
    >
      <div className="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2
                id="guide-modal-title"
                className="text-base sm:text-lg font-bold tracking-tight truncate"
              >
                Uygulama Rehberi & WhatsApp Paylaşım Paketi
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                A1–B2 Okuma · Leitner Hafıza · 30 Gramer Konusu · 180 Bulmaca
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Rehberi kapat"
            className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Segmented Tab Controls */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl">
            <button
              onClick={() => setActiveTab('guide')}
              className={`min-h-[40px] px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'guide'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="truncate">Kullanım Rehberi</span>
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`min-h-[40px] px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Video className="w-4 h-4 shrink-0" />
              <span className="truncate">Tanıtım Videosu</span>
            </button>
            <button
              onClick={() => setActiveTab('images')}
              className={`min-h-[40px] px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'images'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ImageIcon className="w-4 h-4 shrink-0" />
              <span className="truncate">6 Rehber Görseli</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Quick WhatsApp Copy Strip */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                WhatsApp üzerinden paylaşmaya hazır paket
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Tanıtım metnini kopyala, videoyu veya 6 görsel rehber kartını indirip arkadaşlarına ilet.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => handleCopy(WHATSAPP_SHARE_TEXT, 'wa_text')}
                className="min-h-[42px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedId === 'wa_text' ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedId === 'wa_text' ? 'Mesaj Kopyalandı' : 'WhatsApp Metnini Kopyala'}</span>
              </button>
              <button
                onClick={() => handleCopy(APP_LIVE_URL, 'app_url')}
                className="min-h-[42px] px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedId === 'app_url' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === 'app_url' ? 'Link Kopyalandı' : 'Linki Kopyala'}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: TAM REHBER */}
          {activeTab === 'guide' && (
            <div className="space-y-6">
              {/* Hero Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
                <div className="md:col-span-5 min-h-[190px] bg-slate-200 dark:bg-slate-800 relative">
                  {!heroError ? (
                    <img
                      src={guideHeroImg}
                      alt="İngilizce Öğren çalışma alanı"
                      referrerPolicy="no-referrer"
                      onError={() => setHeroError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 dark:bg-slate-800">
                      <BookOpen className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-2" />
                      <span className="text-sm font-bold">İngilizce Öğren</span>
                    </div>
                  )}
                </div>
                <div className="md:col-span-7 p-5 flex flex-col justify-center space-y-3">
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    4 Seviye (A1–B2) · Çevrimdışı PWA · Ücretsiz
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Her şey tek çatı altında nasıl kullanılır?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Uygulama; okuma, dinleme, aralıklı kelime tekrarı, gramer alıştırmaları ve bulmacaları
                    birbirine bağlı şekilde çalıştırır. Metinde öğrendiğin kelimeyi tek dokunuşla deftere
                    ekleyip her gün tekrar edebilirsin.
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-slate-700 dark:text-slate-200 tabular-nums pt-1">
                    <span>30 Gramer Konusu</span>
                    <span>·</span>
                    <span>211+ Boşluk Doldurma</span>
                    <span>·</span>
                    <span>180 Kare Bulmaca</span>
                    <span>·</span>
                    <span>101 Düzensiz Fiil</span>
                  </div>
                </div>
              </div>

              {/* 4 Modules Detailed Walkthrough */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1 */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      01 · OKUMA & DİNLEME
                    </div>
                    <h4 className="text-base font-bold">Cümle Çeviri & Karaoke Okuma</h4>
                    <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                      <li>• A1–B2 seviyesinden bir metin seç veya AI Metin Stüdyosu ile yeni metin üret.</li>
                      <li>• Oynat tuşuyla cümle ve kelime bazlı anlık karaoke takibiyle dinle; hız ve ses seç.</li>
                      <li>• Bilmediğin kelimeye dokun, anlamını gör ve tek tıkla Leitner defterine kaydet.</li>
                      <li>• Kalıp Avcısı ile deyimleri vurgula, okuma bitiminde anlama testini çöz.</li>
                    </ul>
                  </div>
                  {onNavigateFeature && (
                    <button
                      onClick={() => handleTryFeature('sentenceTranslate')}
                      className="min-h-[42px] px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>Cümle Çeviriyi Aç</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* 2 */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-orange-600 dark:text-orange-400">
                      02 · KELİME & HAFIZA
                    </div>
                    <h4 className="text-base font-bold">Leitner 5 Kutulu Hafıza Merkezi</h4>
                    <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                      <li>• Kaydettiğin kelimeler 1. Kutudan başlar; doğru bildikçe 5. Kutuya (kalıcı hafıza) yükselir.</li>
                      <li>• Tekrar zamanı gelen kelimeler ana ekranda kırmızı uyarıyla hatırlatılır.</li>
                      <li>• Testleri ister şıklı ister sadece telaffuzu dinleyerek (Listening) çözebilirsin.</li>
                      <li>• Kalıp/Deyim kartları ve Eş/Zıt anlamlı sözcük bağlantılarıyla kelime dağarcığını geliştir.</li>
                    </ul>
                  </div>
                  {onNavigateFeature && (
                    <button
                      onClick={() => handleTryFeature('vocabMemory')}
                      className="min-h-[42px] px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/60 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>Kelime Merkezini Aç</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* 3 */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-teal-600 dark:text-teal-400">
                      03 · GRAMER ATÖLYESİ
                    </div>
                    <h4 className="text-base font-bold">Gramer, Cümle Kurma & Final Sınavı</h4>
                    <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                      <li>• 30 konu anlatımı; cümlelerin Türkçesini tek tıkla gizleyip gösterme imkânı.</li>
                      <li>• 211+ boşluk doldurma sorusu (hem şıklı mod hem klavyeyle yazma modu).</li>
                      <li>• Kur sonlarında 60 Cümle Kurma (seviye başı 15) ve 28 Hata Avı sorusu.</li>
                      <li>• Sesli 101 Düzensiz Fiil sözlüğü, Hatalarım filtresi ve %70 barajlı Karışık Final Sınavı.</li>
                    </ul>
                  </div>
                  {onNavigateFeature && (
                    <button
                      onClick={() => handleTryFeature('grammar')}
                      className="min-h-[42px] px-4 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>Gramer Merkezini Aç</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* 4 */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      04 · BULMACA & KİŞİSELLEŞTİRME
                    </div>
                    <h4 className="text-base font-bold">180 Kare Bulmaca & Ayarlar</h4>
                    <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                      <li>• A1–B2 seviyelerinde 5×5’ten 10×10’a kadar 180 çengel bulmaca; bilmediğin kelimeyi deftere ekle.</li>
                      <li>• Kendi metnini ekle veya yapay zekâ ile seviyene göre özgün metinler oluştur.</li>
                      <li>• Okuma & Ses Ayarlarından Sepya, Orman veya OLED temasını ve konuşma hızını ayarla.</li>
                      <li>• JSON Dışa Aktar özelliğiyle kelime defterini dilediğin zaman yedekle.</li>
                    </ul>
                  </div>
                  {onNavigateFeature && (
                    <button
                      onClick={() => handleTryFeature('puzzle')}
                      className="min-h-[42px] px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>Kare Bulmacayı Aç</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* 15 Min Routine & Phone Install */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>Örnek 15 Dakikalık Günlük Rutin</span>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed list-decimal list-inside">
                    <li><strong>5 dk:</strong> Kelime Merkezinde günü gelen Leitner tekrarlarını çöz.</li>
                    <li><strong>5 dk:</strong> Seviyenden 1 metni Karaoke ile dinle, yeni kelimeleri kaydet.</li>
                    <li><strong>5 dk:</strong> 1 Gramer konusu testi veya 1 Kare Bulmaca tamamla.</li>
                  </ol>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Smartphone className="w-4 h-4 text-indigo-500" />
                    <span>Telefona Uygulama Gibi Kurma (PWA)</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                    <p><strong>Android (Chrome):</strong> Sağ üstteki 3 nokta menüsü → <em>Uygulamayı yükle / Ana ekrana ekle</em>.</p>
                    <p><strong>iPhone (Safari):</strong> Alt ortadaki Paylaş (↑) ikonu → <em>Ana Ekrana Ekle</em>.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TANITIM VİDEOSU (.MP4) */}
          {activeTab === 'video' && (
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 flex items-center justify-center">
                <video
                  src={VIDEO_FILE}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[540px] object-contain"
                />
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold">WhatsApp Uyumlu HD Tanıtım Videosu (MP4)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Videoyu telefonuna veya bilgisayarına indirip doğrudan WhatsApp sohbetlerinde ve durumlarda paylaşabilirsin.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <a
                    href={VIDEO_FILE}
                    download="ingilizce-ogren-tanitim-rehberi.mp4"
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Videoyu İndir (.mp4)</span>
                  </a>
                  <button
                    onClick={() => handleCopy(`${APP_LIVE_URL}guide/ingilizce-ogren-tanitim.mp4`, 'video_url')}
                    className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copiedId === 'video_url' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'video_url' ? 'Link Kopyalandı' : 'Video Linkini Kopyala'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 6 REHBER GÖRSELİ */}
          {activeTab === 'images' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Her modülü adım adım anlatan 6 adet WhatsApp uyumlu yüksek çözünürlüklü görsel kartı aşağıdan tek tek indirebilirsin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GUIDE_CARDS.map((card) => (
                  <div
                    key={card.id}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden flex flex-col justify-between"
                  >
                    <a
                      href={card.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-slate-950 aspect-[4/5] overflow-hidden"
                    >
                      <img
                        src={card.file}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-200"
                      />
                    </a>
                    <div className="p-3.5 space-y-2.5">
                      <div>
                        <h4 className="text-sm font-bold truncate">{card.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          {card.summary}
                        </p>
                      </div>
                      <a
                        href={card.file}
                        download={card.downloadName}
                        className="w-full min-h-[42px] px-3 py-2 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                      >
                        <Download className="w-4 h-4" />
                        <span>Görseli İndir (PNG)</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
