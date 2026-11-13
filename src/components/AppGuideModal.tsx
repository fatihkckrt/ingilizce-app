import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Video,
  Download,
  Copy,
  Check,
  ArrowRight,
  Smartphone,
  SlidersHorizontal,
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
  const [activeTab, setActiveTab] = useState<'guide' | 'video'>('guide');
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
                Detaylı Uygulama Rehberi & Video
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

        {/* 2 Segmented Tab Controls */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl">
            <button
              onClick={() => setActiveTab('guide')}
              className={`min-h-[42px] px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'guide'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="truncate">Detaylı Rehber</span>
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`min-h-[42px] px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Video className="w-4 h-4 shrink-0" />
              <span className="truncate">Tanıtım Videosu</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Quick WhatsApp Copy Strip */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Arkadaşlarınla paylaşmaya hazır
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Uygulama linkini veya tanıtım özetini kopyalayıp doğrudan WhatsApp’tan gönderebilirsin.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => handleCopy(WHATSAPP_SHARE_TEXT, 'wa_text')}
                className="min-h-[42px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedId === 'wa_text' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
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

          {/* TAB 1: DETAYLI REHBER (BUTON & MEKANİK REHBERİ) */}
          {activeTab === 'guide' && (
            <div className="space-y-6">
              {/* Hero Overview */}
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
                    Tüm Modüller · Adım Adım Mekanik & Buton Rehberi
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Hangi buton ne işe yarar, nasıl çalışılır?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Uygulamadaki okuma, kelime ezberi, gramer ve bulmaca ekranları birbirine bağlı çalışır.
                    Okurken veya bulmaca çözerken öğrendiğin her kelimeyi tek dokunuşla Leitner hafıza
                    defterine aktarabilir, sesli tekrarlarla kalıcı hale getirebilirsin.
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-slate-700 dark:text-slate-200 tabular-nums pt-1">
                    <span>4 Seviye (A1–B2)</span>
                    <span>·</span>
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

              {/* 1. CÜMLE ÇEVİRİ & OKUMA EKRANI */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      01 · CÜMLE ÇEVİRİ & OKUMA EKRANI
                    </div>
                    <h4 className="text-base sm:text-lg font-bold mt-0.5">
                      Karaoke Dinleme, Anlık Sözlük, Kalıp Avcısı & Okuma Sınavı
                    </h4>
                  </div>
                  {onNavigateFeature && (
                    <button
                      onClick={() => handleTryFeature('sentenceTranslate')}
                      className="min-h-[40px] px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
                    >
                      <span>Bölüme Git</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">🔊 Karaoke Sesli Takip</p>
                    <p>
                      Her cümlenin sağındaki <strong>🔊</strong> butonuna bastığında cümle seslendirilir ve o an okunan
                      kelime sarı karaoke vurgusuyla canlı takip edilir. Konuşma hızını ve ses tonunu ayarlardan
                      değiştirebilirsin.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">🌐 Tekli & Tam Çeviri Kontrolü</p>
                    <p>
                      Sadece tek bir cümlenin Türkçesini görmek için cümle yanındaki <strong>🌐</strong> ikonuna bas.
                      Tüm metnin çevirisini aynı anda açıp kapatmak için ekranın altındaki <strong>🌐 Tam Çeviri / Gizle</strong> butonunu kullan.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">👆 Kelimeye Dokunma & Deftere Ekleme</p>
                    <p>
                      Metindeki herhangi bir İngilizce kelimeye dokunduğunda çeviri penceresi açılır. Buradan kelimenin
                      seviyesini (<strong>A1–B2</strong>) seçebilir, istersen kendi özel Türkçe notunu yazabilir ve cümle
                      bağlamıyla birlikte tek tıkla <strong>Leitner 1. Kutuya</strong> kaydedebilirsin.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">⚡ Kalıp Avcısı & Okuma Sonu Sınavı</p>
                    <p>
                      Ayarlardan <strong>Kalıp Avcısı</strong> açıkken deyimler ve <em>phrasal verb</em>’ler cümle içinde
                      vurgulanır, altlarında rozet çıkar ve üstteki <strong>⚡ Kalıp / Deyim</strong> kartına tıklayarak tüm
                      kalıpları inceleyebilirsin. Okuma bitince <strong>✅ Sınava Geç</strong> ile 3 soruluk anlama testini çöz.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. KELİME & HAFIZA MERKEZİ (LEİTNER SİSTEMİ) */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-xs font-bold text-orange-600 dark:text-orange-400">
                      02 · KELİME & HAFIZA MERKEZİ (LEITNER SRS)
                    </div>
                    <h4 className="text-base sm:text-lg font-bold mt-0.5">
                      5 Kutulu Akıllı Tekrar, Dinleme Testi, Kalıp Kartları & Yedekleme
                    </h4>
                  </div>
                  {onNavigateFeature && (
                    <button
                      onClick={() => handleTryFeature('vocabMemory')}
                      className="min-h-[40px] px-3.5 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/60 text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
                    >
                      <span>Bölüme Git</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">📦 1’den 5’e Leitner Kutu Mantığı</p>
                    <p>
                      Eklenen her kelime <strong>1. Kutudan</strong> başlar. Testte doğru bildikçe kelime bir üst kutuya
                      (2 → 3 → 4 → 5) geçer ve tekrar süresi uzar; yanlış cevap verdiğin kelime daha sık çalışman için
                      yeniden <strong>1. Kutuya</strong> döner.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">⚡ Vakti Gelenler vs 🎲 Tümünden Test</p>
                    <p>
                      <strong>Vakti Gelenleri Tekrar Et</strong> butonu sadece tekrar saati dolmuş kelimeleri karşına
                      getirir. <strong>🎲 Test</strong> butonu ise kutu ayrımı yapmadan tüm kayıtlı kelimelerinden karma
                      sınav başlatır. Kutu ve A1–B2 filtreleriyle listeni süzebilirsin.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">🎧 Dinleme Modu & Kart Koleksiyonları</p>
                    <p>
                      Kelime testi ekranında <strong>Dinleme (Listening)</strong> modunu açarak yazıyı görmeden sadece
                      telaffuzu duyarak kelimeyi tahmin edebilirsin. Merkezdeki <strong>Kalıp & Deyimler</strong> ve
                      <strong>Eş / Zıt Anlamlar</strong> pencerelerinden de tek tıkla defterine kelime ekleyebilirsin.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">💾 JSON Yedek & Anki (.tsv) Aktarımı</p>
                    <p>
                      Verilerin tarayıcındaki <strong>IndexedDB</strong> veritabanında saklanır. Kelime listendeki
                      <strong>💾 Yedek</strong> butonundan tüm kelimelerini ve özel metinlerini <strong>JSON</strong> olarak
                      indirebilir, başka cihaza geri yükleyebilir veya <strong>Anki (.tsv)</strong> destesi çıkarabilirsin.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. GRAMER & CÜMLE KURMA ATÖLYESİ */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-xs font-bold text-teal-600 dark:text-teal-400">
                      03 · GRAMER & CÜMLE KURMA ATÖLYESİ
                    </div>
                    <h4 className="text-base sm:text-lg font-bold mt-0.5">
                      Konu Anlatımı, Şıklı/Yazmalı Test, Cümle Kurma, Hata Avı & Final Sınavı
                    </h4>
                  </div>
                  {onNavigateFeature && (
                    <button
                      onClick={() => handleTryFeature('grammar')}
                      className="min-h-[40px] px-3.5 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
                    >
                      <span>Bölüme Git</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">📖 Gizle/Göster Örnekler & Boşluk Doldurma</p>
                    <p>
                      30 gramer konusunun altında örnek cümleleri <strong>🔊</strong> ile dinleyebilir, Türkçelerini
                      <strong>Çeviriyi Göster / Gizle</strong> butonlarıyla gizleyip kendini test edebilirsin. Konu sonundaki
                      butondan <strong>Boşluk Doldurma</strong> testini açıp <strong>Şıklı Mod ↔ Yazarak Çöz</strong> arasında geçebilirsin.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">🎯 İlerleme Takibi & Hatalarım Filtresi</p>
                    <p>
                      Çözdüğün sorular otomatik kaydedilir; konular <strong>Tamamlandı</strong> olarak işaretlenir ve
                      yanlış yaptığın soruları <strong>Hatalarım</strong> filtresiyle ayırıp tekrar çözebilirsin.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">🧩 Cümle Kurma & 🔍 Hata Avı</p>
                    <p>
                      <strong>Cümle Kurma</strong> sekmesinde karışık verilen kelime kutucuklarına sırayla dokunarak anlamlı
                      cümle kurarsın (konu içinden doğrudan ilgili cümle pratiğine atlayabilirsin). <strong>Hata Avı</strong>
                      sekmesinde ise cümledeki hatalı sözcüğe tıklayarak hatayı bulup açıklamasını okursun.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">📚 101 Düzensiz Fiil & 🎓 Final Sınavı</p>
                    <p>
                      Üstteki sözlük butonundan <strong>101 Düzensiz Fiilin</strong> V1-V2-V3 hallerini arayıp sesli
                      dinleyebilirsin. Hazır hissettiğinde <strong>Final Sınavı</strong> sekmesinden %70 geçme barajlı 15
                      soruluk karışık değerlendirmeye girip en yüksek skorunu kaydedebilirsin.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. KARE BULMACA & AI METİN STÜDYOSU */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      04 · KARE BULMACA & AI METİN STÜDYOSU
                    </div>
                    <h4 className="text-base sm:text-lg font-bold mt-0.5">
                      180 Seviyeli Bulmaca Mekanikleri, Yapay Zekâ Metni & Kendi Metnin
                    </h4>
                  </div>
                  {onNavigateFeature && (
                    <button
                      onClick={() => handleTryFeature('puzzle')}
                      className="min-h-[40px] px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
                    >
                      <span>Bulmacaya Git</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">🟩 Bulmaca Filtreleri & Oynanış</p>
                    <p>
                      Bulmacaları <strong>Seviye (A1–B2)</strong>, <strong>Boyut (5×5 – 10×10)</strong> ve <strong>Kelime Sıklığı</strong>na
                      göre filtrele. Oynarken kutucuğa dokunup harf yazabilir, ipucuna dokunarak yatay/dikey yönü
                      değiştirebilir, takıldığında harf veya kelime ipucu alabilirsin.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">🔖 Bulmacadan Deftere Aktarım</p>
                    <p>
                      Çözdüğün veya önizlediğin bulmacadaki kelimeleri <strong>🔊</strong> ile dinleyip yanındaki kaydet
                      butonuyla doğrudan <strong>Leitner Kelime Defterine</strong> gönderebilirsin.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">✨ AI Metin Stüdyosu</p>
                    <p>
                      Cümle Çeviri içindeki <strong>AI Metin Stüdyosu</strong>, seçtiğin seviye ve konuya ek olarak
                      defterindeki zayıf/tekrar bekleyen kelimeleri otomatik içine yerleştirerek sana özel okuma parçası ve
                      3 soruluk test üretir.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">✍️ Kendi Metnini Ekle</p>
                    <p>
                      Dışarıdan beğendiğin bir İngilizce makaleyi, haberi veya hikâyeyi Türkçe karşılığıyla yapıştırarak
                      uygulama içinde Karaoke, sözlük ve tekrar özellikleriyle çalışabileceğin kendi dersini oluşturabilirsin.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. AYARLAR, TEMA & TELEFONA KURULUM (PWA) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <SlidersHorizontal className="w-4 h-4 text-indigo-500" />
                    <span>Okuma, Ses & Tema Ayarları (⚙️)</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                    <li><strong>Tema:</strong> Doğa/Glass, Sepya (Kitap), Orman veya karanlık OLED Gece teması seçilebilir.</li>
                    <li><strong>Ses Motoru:</strong> Erkek/kadın cihaz sesleri veya HD Doğal Sesler seçilir; hız <strong>0.5x–1.5x</strong> ayarlanır.</li>
                    <li><strong>Yazı & Kalıp Avcısı:</strong> Yazı boyutu, font tipi (Sans/Serif/Mono) ve Kalıp Avcısı buradan yönetilir.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Smartphone className="w-4 h-4 text-emerald-500" />
                    <span>Telefona Uygulama Gibi Kurma (PWA)</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                    <p><strong>Android (Chrome):</strong> Sağ üstteki 3 nokta menüsü → <em>Uygulamayı yükle / Ana ekrana ekle</em>.</p>
                    <p><strong>iPhone (Safari):</strong> Alt ortadaki Paylaş (↑) ikonu → <em>Ana Ekrana Ekle</em>.</p>
                    <p>Kurulduktan sonra uygulama mağazasına gerek duymadan tam ekran ve çevrimdışı önbellekle açılır.</p>
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
        </div>
      </div>
    </div>
  );
};
