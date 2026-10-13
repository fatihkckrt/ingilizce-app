// scripts/append_12_puzzles.cjs
const fs = require('fs');

const EXTRA_PUZZLES = [
  // ================= A1 LEVEL (3 new puzzles) =================
  {
    id: 'a1-5x5-6',
    title: 'Yoğun Gün & Otobüs',
    level: 'A1',
    size: 5,
    description: 'Meşgul bir gün, otobüs koltuğu ve deniz.',
    clues: [
      { number: 1, direction: 'across', word: 'BUSY', clue: 'Çok işi olan, meşgul veya yoğun', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'SEAT', clue: 'Oturacak yer, sandalye veya koltuk', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'BUS', clue: 'Şehir içi toplu taşıma otobüsü', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'USE', clue: 'Bir eşyayı veya aleti kullanmak', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'SEA', clue: 'Geniş tuzlu su kütlesi, mavi deniz', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'YET', clue: 'Henüz, şimdiye kadar veya buna rağmen', row: 0, col: 3 }
    ]
  },
  {
    id: 'a1-5x5-7',
    title: 'Çiftlik & Kamp Çadırı',
    level: 'A1',
    size: 5,
    description: 'Kedi, çadır, kamp ateşi ve yemek.',
    clues: [
      { number: 1, direction: 'across', word: 'CAME', clue: 'Geldi (come eyleminin geçmiş hali)', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'TENT', clue: 'Doğada barınmak için kurulan kamp çadırı', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'CAT', clue: 'Miyavlayan sevimli evcil kedi', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ATE', clue: 'Yemek yedi (eat eyleminin geçmiş hali)', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'MAN', clue: 'Yetişkin erkek, insan', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'EAT', clue: 'Yiyecek tüketmek, karnını doyurmak', row: 0, col: 3 }
    ]
  },
  {
    id: 'a1-6x6-5',
    title: 'Açık Hava & Dağ Zirvesi',
    level: 'A1',
    size: 6,
    description: 'Konuşmak, dağ doruğu, kolay hedefler ve ferahlık.',
    clues: [
      { number: 1, direction: 'across', word: 'SPOKE', clue: 'Söz söyledi, konuştu (speak geçmiş hali)', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'DATES', clue: 'Takvim günleri veya tatlı hurmalar', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'SODA', clue: 'Gazlı ferahlatıcı içecek, soda', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'PEAK', clue: 'Dağın en yüksek sivri zirvesi, doruk', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'ONTO', clue: 'Bir şeyin üstüne doğru, üzerine', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'KEEP', clue: 'Korumak, muhafaza etmek, saklamak', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'EASY', clue: 'Zahmetsiz, basit, gayet kolay', row: 0, col: 4 }
    ]
  },

  // ================= A2 LEVEL (3 new puzzles) =================
  {
    id: 'a2-5x5-6',
    title: 'Oyun Alanı & Mesaj',
    level: 'A2',
    size: 5,
    description: 'Oyun, mesaj göndermek, enerji ve son.',
    clues: [
      { number: 1, direction: 'across', word: 'GAME', clue: 'Eğlenceli oyun, takım maçı veya yarışma', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'SEND', clue: 'Posta, mektup veya mesaj yollamak', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'GAS', clue: 'Havadar yakıt, gaz veya benzin', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ATE', clue: 'Gıdayı tüketti (eat geçmişi)', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'MAN', clue: 'Yetişkin birey veya insan', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'END', clue: 'Bir sürecin veya yolun sonu, bitiş', row: 0, col: 3 }
    ]
  },
  {
    id: 'a2-5x5-7',
    title: 'Doğa Yürüyüşü & Patika',
    level: 'A2',
    size: 5,
    description: 'Orman patikası, metin okuma ve sıcak hava.',
    clues: [
      { number: 1, direction: 'across', word: 'PATH', clue: 'Orman içi yürüyüş patikası, dar keçi yolu', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'TEXT', clue: 'Yazılı metin, ders parçası veya mesaj', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'PUT', clue: 'Bir nesneyi masaya veya rafa koymak', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ATE', clue: 'Öğün yedi (eat geçmiş zamanı)', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'TAX', clue: 'Kamu hizmetleri için ödenen vergi harcı', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'HOT', clue: 'Yüksek sıcaklıkta, kaynar veya çok sıcak', row: 0, col: 3 }
    ]
  },
  {
    id: 'a2-6x6-5',
    title: 'Gece Dinlenmesi & Ziyafet',
    level: 'A2',
    size: 6,
    description: 'Ayakta beklemek, lezzetli yemek ve açık kapılar.',
    clues: [
      { number: 1, direction: 'across', word: 'STOOD', clue: 'Ayakta dikildi (stand eyleminin geçmiş hali)', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'EATEN', clue: 'Tüketilmiş, yenmiş (eat fiili 3. hali)', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'SEEN', clue: 'Fark edilmiş, görülmüş (see 3. hali)', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'THAT', clue: 'Şu, o veya işaret edilen nesne', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'ONTO', clue: 'Yüzeyin üzerine doğru yönelme', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'OPEN', clue: 'Aralık, kilitli olmayan, açık', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'DINE', clue: 'Restoranda akşam yemeği ziyafeti çekmek', row: 0, col: 4 }
    ]
  },

  // ================= B1 LEVEL (3 new puzzles) =================
  {
    id: 'b1-5x5-6',
    title: 'Yalın Gerçekler & Gönderim',
    level: 'B1',
    size: 5,
    description: 'Yalın gerçek, mektup göndermek ve koşu.',
    clues: [
      { number: 1, direction: 'across', word: 'BARE', clue: 'Yalın, örtüsüz, çıplak veya sade', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'SEND', clue: 'Belge veya paketi hedefe göndermek', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'BUS', clue: 'Yolcu taşıyan şehirlerarası otobüs', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ATE', clue: 'Besin aldı (eat geçmişi)', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'RAN', clue: 'Hızla koştu (run eyleminin geçmiş hali)', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'END', clue: 'Nihai sonuca ulaşmak veya bitiş', row: 0, col: 3 }
    ]
  },
  {
    id: 'b1-6x6-5',
    title: 'Edebi Yazı & Ağaç Gölgesi',
    level: 'B1',
    size: 6,
    description: 'Mektup yazmak, giyinmek, oranlar ve ulu ağaçlar.',
    clues: [
      { number: 1, direction: 'across', word: 'WROTE', clue: 'Kalemle kağıda döktü, yazdı (write geçmişi)', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'RATES', clue: 'İstatistiksel oranlar veya döviz kurları', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'WORE', clue: 'Kıyafet giyindi (wear eyleminin geçmişi)', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'READ', clue: 'Metni gözle takip ederek okumak', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'ONTO', clue: 'Bir zemin üzerine intikal etmek', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'TREE', clue: 'Kökleri derinde ulu yeşil ağaç', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'EASY', clue: 'Sıkıntısız, rahatça başarılabilir', row: 0, col: 4 }
    ]
  },
  {
    id: 'b1-7x7-4',
    title: 'Doğa Kanunları & Seçkin Bilgeler',
    level: 'B1',
    size: 7,
    description: 'Doğanın dengesi, araştırma yapmak ve dış dünya.',
    clues: [
      { number: 1, direction: 'across', word: 'CHOSEN', clue: 'Özel yeteneklerle seçilmiş, seçkin kişi', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'NATURE', clue: 'Yaban hayatı, ekosistem ve ulu doğa', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'CANAL', clue: 'İnsan eliyle açılan yapay su kanalı', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'HEARD', clue: 'Kulağına çalındı, duydu (hear geçmişi)', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'OUTER', clue: 'Merkezin dışındaki, harici veya dışsal', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'STUDY', clue: 'Derinlemesine ders çalışmak ve inceleme', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'ERROR', clue: 'Hesaplamada ortaya çıkan hata veya yanılgı', row: 0, col: 4 },
      { number: 7, direction: 'down', word: 'NEEDS', clue: 'Zorunlu ihtiyaçlar ve temel gereksinimler', row: 0, col: 5 }
    ]
  },

  // ================= B2 LEVEL (3 new puzzles) =================
  {
    id: 'b2-5x5-6',
    title: 'Strateji Merkezi & Test',
    level: 'B2',
    size: 5,
    description: 'Merkez üsler, kritik test ve dikkatli kullanım.',
    clues: [
      { number: 1, direction: 'across', word: 'HUBS', clue: 'Büyük ağ bağlantı merkezleri, odaklar', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'TEST', clue: 'Kapsamlı dayanıklılık veya bilgi sınavı', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'HOT', clue: 'Kızgın, hararetli veya yüksek sıcaklıkta', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'USE', clue: 'Bir kaynak veya yeteneği değerlendirmek', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'BUS', clue: 'Büyük yolcu aktarma taşıtı', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'SAT', clue: 'Oturdu (sit eyleminin geçmiş hali)', row: 0, col: 3 }
    ]
  },
  {
    id: 'b2-6x6-5',
    title: 'Maliyet Analizi & Görev Dağılımı',
    level: 'B2',
    size: 6,
    description: 'Proje görevleri, bütçe maliyeti ve analiz.',
    clues: [
      { number: 1, direction: 'across', word: 'SLEPT', clue: 'Uykudaydı, dinlendi (sleep geçmişi)', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'COSTS', clue: 'İşletme masrafları ve finansal maliyetler', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'SUCH', clue: 'Öylesine çarpıcı veya bu türden', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'LOOK', clue: 'Dikkatle gözlemlemek veya dış görünüş', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'EASY', clue: 'Akıcı, karmaşık olmayan, sade', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'PUTS', clue: 'Yerleştirir, öne sürer', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'TASK', clue: 'Sorumluluk gerektiren önemli görev', row: 0, col: 4 }
    ]
  },
  {
    id: 'b2-7x7-4',
    title: 'Birey & Yaratıcı Tasarım',
    level: 'B2',
    size: 7,
    description: 'Bireysel potansiyel, yeni tasarım üretmek ve resifler.',
    clues: [
      { number: 1, direction: 'across', word: 'PERSON', clue: 'Toplumu oluşturan bağımsız fert, birey', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'CREATE', clue: 'Özgün bir eser veya çözüm yaratmak', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'PACKS', clue: 'Ekipman çantalarını ve paketleri hazırlar', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ERROR', clue: 'Sistemdeki kritik aksaklık veya hata', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'REEFS', clue: 'Deniz tabanındaki zengin mercan kayalıkları', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'SMALL', clue: 'Boyutça ufak, mütevazı veya küçük', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'OUTER', clue: 'Harici katman, dış çevre', row: 0, col: 4 },
      { number: 7, direction: 'down', word: 'NEEDS', clue: 'Hayati gereksinimler ve talepler', row: 0, col: 5 }
    ]
  }
];

// Enrich WORD_SENSES for any words in EXTRA_PUZZLES
const { WORD_SENSES } = require('./word_senses.cjs');
const additionalSenses = {
  BUSY: [{ pos: 's.', posName: 'Sıfat', meaning: 'meşgul, yoğun, hareketli' }],
  SEAT: [{ pos: 'i.', posName: 'İsim', meaning: 'oturacak yer, koltuk, sandalye' }],
  BUS: [{ pos: 'i.', posName: 'İsim', meaning: 'otobüs' }],
  USE: [{ pos: 'f.', posName: 'Fiil', meaning: 'kullanmak, faydalanmak' }],
  SEA: [{ pos: 'i.', posName: 'İsim', meaning: 'deniz' }],
  YET: [{ pos: 'zf.', posName: 'Zarf', meaning: 'henüz, hâlâ; ama' }],
  CAME: [{ pos: 'f.', posName: 'Fiil', meaning: 'geldi (come geçmiş zamanı)' }],
  TENT: [{ pos: 'i.', posName: 'İsim', meaning: 'kamp çadırı' }],
  CAT: [{ pos: 'i.', posName: 'İsim', meaning: 'kedi' }],
  ATE: [{ pos: 'f.', posName: 'Fiil', meaning: 'yedi (eat geçmiş zamanı)' }],
  MAN: [{ pos: 'i.', posName: 'İsim', meaning: 'adam, insan, erkek' }],
  EAT: [{ pos: 'f.', posName: 'Fiil', meaning: 'yemek yemek' }],
  SPOKE: [{ pos: 'f.', posName: 'Fiil', meaning: 'konuştu (speak geçmiş zamanı)' }],
  DATES: [{ pos: 'i.', posName: 'İsim', meaning: 'tarihler; hurmalar' }],
  SODA: [{ pos: 'i.', posName: 'İsim', meaning: 'soda, gazoz' }],
  PEAK: [{ pos: 'i.', posName: 'İsim', meaning: 'dağ zirvesi, doruk' }],
  ONTO: [{ pos: 'e.', posName: 'Edat', meaning: 'üzerine, üstüne doğru' }],
  KEEP: [{ pos: 'f.', posName: 'Fiil', meaning: 'tutmak, saklamak, korumak' }],
  EASY: [{ pos: 's.', posName: 'Sıfat', meaning: 'kolay, zahmetsiz, rahat' }],
  GAME: [{ pos: 'i.', posName: 'İsim', meaning: 'oyun, maç, müsabaka' }],
  SEND: [{ pos: 'f.', posName: 'Fiil', meaning: 'göndermek, yollamak' }],
  GAS: [{ pos: 'i.', posName: 'İsim', meaning: 'gaz, benzin' }],
  END: [{ pos: 'i.', posName: 'İsim', meaning: 'son, uç, bitiş' }],
  PATH: [{ pos: 'i.', posName: 'İsim', meaning: 'patika, keçi yolu' }],
  TEXT: [{ pos: 'i.', posName: 'İsim', meaning: 'metin, yazı parçası' }],
  PUT: [{ pos: 'f.', posName: 'Fiil', meaning: 'koymak, yerleştirmek' }],
  TAX: [{ pos: 'i.', posName: 'İsim', meaning: 'vergi, harç' }],
  HOT: [{ pos: 's.', posName: 'Sıfat', meaning: 'sıcak, acı, hararetli' }],
  STOOD: [{ pos: 'f.', posName: 'Fiil', meaning: 'ayakta durdu (stand geçmişi)' }],
  EATEN: [{ pos: 'f.', posName: 'Fiil', meaning: 'yenmiş (eat 3. hali)' }],
  SEEN: [{ pos: 'f.', posName: 'Fiil', meaning: 'görülmüş (see 3. hali)' }],
  THAT: [{ pos: 'zm.', posName: 'Zamir', meaning: 'şu, o' }],
  OPEN: [{ pos: 's.', posName: 'Sıfat', meaning: 'açık, aralık' }],
  DINE: [{ pos: 'f.', posName: 'Fiil', meaning: 'akşam yemeği yemek' }],
  BARE: [{ pos: 's.', posName: 'Sıfat', meaning: 'yalın, çıplak, örtüsüz' }],
  RAN: [{ pos: 'f.', posName: 'Fiil', meaning: 'koştu (run geçmişi)' }],
  WROTE: [{ pos: 'f.', posName: 'Fiil', meaning: 'yazdı (write geçmişi)' }],
  RATES: [{ pos: 'i.', posName: 'İsim', meaning: 'oranlar, tarifeler' }],
  WORE: [{ pos: 'f.', posName: 'Fiil', meaning: 'giydi (wear geçmişi)' }],
  READ: [{ pos: 'f.', posName: 'Fiil', meaning: 'okumak' }],
  TREE: [{ pos: 'i.', posName: 'İsim', meaning: 'ağaç' }],
  CHOSEN: [{ pos: 's.', posName: 'Sıfat', meaning: 'seçilmiş, seçkin' }],
  NATURE: [{ pos: 'i.', posName: 'İsim', meaning: 'doğa, tabiat' }],
  CANAL: [{ pos: 'i.', posName: 'İsim', meaning: 'kanal, su yolu' }],
  HEARD: [{ pos: 'f.', posName: 'Fiil', meaning: 'duydu, işitti (hear geçmişi)' }],
  OUTER: [{ pos: 's.', posName: 'Sıfat', meaning: 'dış, dıştaki, harici' }],
  STUDY: [{ pos: 'f.', posName: 'Fiil', meaning: 'ders çalışmak, incelemek' }],
  ERROR: [{ pos: 'i.', posName: 'İsim', meaning: 'hata, yanılgı, arıza' }],
  NEEDS: [{ pos: 'i.', posName: 'İsim', meaning: 'ihtiyaçlar, gereksinimler' }],
  HUBS: [{ pos: 'i.', posName: 'İsim', meaning: 'bağlantı merkezleri, odaklar' }],
  TEST: [{ pos: 'i.', posName: 'İsim', meaning: 'sınav, test, deneme' }],
  SAT: [{ pos: 'f.', posName: 'Fiil', meaning: 'oturdu (sit geçmişi)' }],
  SLEPT: [{ pos: 'f.', posName: 'Fiil', meaning: 'uyudu (sleep geçmişi)' }],
  COSTS: [{ pos: 'i.', posName: 'İsim', meaning: 'maliyetler, harcamalar' }],
  SUCH: [{ pos: 's.', posName: 'Sıfat', meaning: 'böyle, böylesi, bunun gibi' }],
  LOOK: [{ pos: 'f.', posName: 'Fiil', meaning: 'bakmak, görünmek' }],
  PUTS: [{ pos: 'f.', posName: 'Fiil', meaning: 'koyar, yerleştirir' }],
  TASK: [{ pos: 'i.', posName: 'İsim', meaning: 'görev, iş, ödev' }],
  PERSON: [{ pos: 'i.', posName: 'İsim', meaning: 'kişi, birey, şahıs' }],
  CREATE: [{ pos: 'f.', posName: 'Fiil', meaning: 'yaratmak, üretmek, oluşturmak' }],
  PACKS: [{ pos: 'f.', posName: 'Fiil', meaning: 'paketler, toplar, valiz yapar' }],
  REEFS: [{ pos: 'i.', posName: 'İsim', meaning: 'mercan resifleri, kayalıklar' }],
  SMALL: [{ pos: 's.', posName: 'Sıfat', meaning: 'küçük, ufak' }]
};

Object.assign(WORD_SENSES, additionalSenses);

// Append to scripts/new_puzzles_data.cjs
const newPuzzlesFilePath = 'scripts/new_puzzles_data.cjs';
let content = fs.readFileSync(newPuzzlesFilePath, 'utf8');

// Append additional word senses at the top if needed
// And append to NEW_PUZZLES array
const closingArrayIdx = content.lastIndexOf('];');
if (closingArrayIdx !== -1) {
  const puzzleSnippet = EXTRA_PUZZLES.map(p => `  ${JSON.stringify(p, null, 2)},`).join('\n');
  const updatedContent = content.slice(0, closingArrayIdx) + puzzleSnippet + '\n' + content.slice(closingArrayIdx);
  fs.writeFileSync(newPuzzlesFilePath, updatedContent, 'utf8');
  console.log(`Appended ${EXTRA_PUZZLES.length} new puzzles to ${newPuzzlesFilePath}!`);
} else {
  console.error("Could not find closing ]; in new_puzzles_data.cjs");
  process.exit(1);
}
