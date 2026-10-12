# Uygulama Planı: Seviye ve Boyut Bazlı İngilizce Kare / Çengel Bulmaca Modülü

Bu plan, **İngilizce Öğren (English Learning App)** platformuna kullanıcı tercihlerine tam uygun olarak özgün, etkileşimli ve modern bir **Kare / Çengel Bulmaca (Crossword & Word Grid)** modülü kazandırmak için hazırlanmıştır.

---

## 1. Kullanıcı Tercihleri & Gereksinim Analizi
- **Bulmaca Türü:** Kare / Çengel Bulmaca mekaniği (Grid üzerinde kesişen ve numaralandırılmış kelimeler; Türkçe ipucu ve harf sayısına göre İngilizce kelimeleri harf harf doldurma).
- **İlerleme / Seçim:** Seviyeler (A1, A2, B1, B2) ve grid boyutları (5x5, 6x6, 7x7) serbestçe seçilebilir. Her seviye ve boyut kombinasyonu için zengin, özenle tasarlanmış tematik bulmacalar yer alacaktır.
- **İpuçları & Yardım:** Yalnızca **Türkçe anlamı** ve **harf sayısı** gösterilecek (örneğin: `Sabahları erken uyanmak (6 harf)`). Harf harf klavye/dokunmatik giriş veya isteğe bağlı tek harf açma joker hakkı sunulacak.
- **Ek Özellikler:**
  - Tamamlanan kelimelerde anında Web Speech TTS ile doğru telaffuz dinleme.
  - Bulmacadaki kelimeleri tek tıkla **Leitner 5 Aşamalı Kelime Defteri**ne ekleyebilme.
  - Bulmaca çözüldüğünde konfeti & Web Audio API başarı melodisi.
  - Yerel kayıt (LocalStorage / IndexedDB) ile tamamlanan bulmacaların ve skorların kalıcı olarak saklanması.

---

## 2. Kullanıcı Arayüzü & Tasarım Mimarisi (Frontend Design Standartları)
- **Ana Ekranda Bulmaca Butonu/Sekmesi:**
  - `HomeView.tsx` içerisine diğer özelliklerle (Kalıp Kartları, Leitner Defteri vb.) tam görsel uyum sağlayan modern **"🧩 İngilizce Kare Bulmaca"** erişim kartı.
  - Üst gezinme çubuğunda (Navbar) veya ana görünümde tek tıkla Bulmaca modülüne geçiş.
- **Bulmaca Ana Paneli (`PuzzleView.tsx`):**
  - **Seviye Seçim Sekmeleri (A1, A2, B1, B2):** Temiz segmented button tasarımı.
  - **Boyut Filtre Butonları (5x5, 6x6, 7x7):** Hızlı ve serbest boyut seçimi.
  - **Bulmaca Koleksiyonu Kartları:** Her boyut ve seviye için temalı bulmaca listesi (örneğin: A1 5x5: "Çiftlik ve Doğa", "Okul Günü", "Mutfak & Kahvaltı"; A2 6x6: "Kamp Macerası", "Şehir Hayatı"; B1/B2: "Geleceğin Enerjisi", "Psikoloji & Zihin").
- **İnteraktif Bulmaca Tahtası (`PuzzleBoard.tsx`):**
  - **Grid Hücreleri:** Dokunmatik ve klavye dostu (min. 44px mobil touch target, yüksek kontrast, seçili hücre ve aktif kelime vurgusu).
  - **Soru / İpucu Alanı:** Seçilen kelimenin yönü (Yatay / Dikey), başlangıç numarası, Türkçe ipucu ve harf sayısı (`(5 Harf)`).
  - **Sanal Klavye + Fiziksel Klavye Desteği:** Mobilde ekran klavyesiyle veya yerleşik özel harf paneli ile hızlı yazım, silme (`Backspace`) ve yön değiştirme (hücreye tekrar tıklandığında Yatay/Dikey geçiş).
  - **Yardımcı Kontroller:** "Harf İpucu İste (Joker)", "Temizle", "Kelimeyi Oku (TTS)" ve "Deftere Kaydet".
- **Başarı Ekranı:**
  - Tamamlanma süresi, puan ve tüm çözülen kelimelerin listesi (Türkçe karşılıkları + ses telaffuz butonları + Leitner SRS'e toplu ekleme seçeneği).

---

## 3. Veri Yapısı & Modeller (`src/puzzleData.ts`)

```typescript
export interface PuzzleClue {
  id: string; // örn: "H1", "V2"
  number: number; // Grid üzerindeki numara (1, 2, 3...)
  direction: 'across' | 'down';
  word: string; // Hedef İngilizce kelime (BÜYÜK HARFLERLE)
  clue: string; // Türkçe anlam / tanım
  row: number; // 0-tabanlı başlangıç satırı
  col: number; // 0-tabanlı başlangıç sütunu
  level: 'A1' | 'A2' | 'B1' | 'B2';
}

export interface PuzzleDefinition {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  size: 5 | 6 | 7; // 5x5, 6x6, 7x7
  description: string;
  clues: PuzzleClue[];
}
```
Mevcut `src/data.ts` içindeki zengin A1-B2 kelime haznesi (`dictionary`, `wordLevelMap`) ile tam uyumlu bulmaca setleri oluşturulacaktır.

---

## 4. Değiştirilecek ve Eklenecek Dosyalar
1. `src/puzzleData.ts` (Yeni):
   - A1, A2, B1, B2 seviyeleri için 5x5, 6x6, 7x7 ebatlarında dengeli, birbirini kesen çengel/kare bulmaca hazır şablonları ve dinamik ızgara matris oluşturucu fonksiyonlar.
2. `src/components/PuzzleView.tsx` (Yeni):
   - Bulmaca seçici, seviye ve boyut sekmeleri, tamamlanma rozetleri.
3. `src/components/PuzzleBoard.tsx` (Yeni):
   - Kare bulmaca ızgarası, hücre etkileşimleri, yön yönetimi, Türkçe ipucu paneli, sanal ve fiziksel klavye girdisi, kelime tamamlama animasyonları ve ses efektleri.
4. `src/components/HomeView.tsx` (Düzenleme):
   - Ana sayfaya modern "Bulmaca" kartı ekleme ve `onOpenPuzzle` yönlendirmesi.
5. `src/App.tsx` (Düzenleme):
   - `currentView === 'puzzle'` durumunun entegrasyonu.
   - Tarayıcı ve telefon geri tuşu (`history.pushState` / `popstate`) uyumu.
   - Bulmacadan Leitner kelime defterine ekleme akışının bağlanması.
6. `src/index.css` (Gerektiğinde):
   - Bulmaca ızgara hücreleri, aktif satır/sütun aydınlatması ve başarı animasyonları için özel sınıflar.

---

## 5. Doğrulama ve Güvenli Dağıtım
1. **Derleme & Hata Kontrolü:** `compile_applet` ve `lint_applet` ile sıfır TypeScript hatası doğrulama.
2. **Kural Kontrolü:** Leitner SRS, ses sentezi, metin okuma ve kelime haznesi özelliklerinin eksiksiz korunduğunu test etme.
3. **GitHub Dağıtımı:** Kullanıcı kuralı (`RULE[AGENTS_md]`) uyarınca `npm run deploy` komutu ile canlıya alma.
