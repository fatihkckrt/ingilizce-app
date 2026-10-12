// scripts/build_puzzles.cjs
const fs = require('fs');
const path = require('path');

const puzzles = [
  // ==========================================
  // LEVEL A1 - 5x5 PUZZLES
  // ==========================================
  {
    id: 'a1-5x5-1',
    title: 'Günlük Yaşam & Ev',
    level: 'A1',
    size: 5,
    description: 'Ev, kitap ve doğa ile ilgili temel İngilizce sözcükler.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'BOOK', clue: 'Okunan, sayfaları olan nesne', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'MILK', clue: 'İneklerden elde edilen beyaz içecek', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'PARK', clue: 'Ağaçlıklı çocuk ve yürüyüş alanı', row: 4, col: 1 },
      { id: '1-down', number: 1, direction: 'down', word: 'BUMP', clue: 'Tümsek veya çarpmak', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'OIL', clue: 'Sıvı yağ / yakıt', row: 0, col: 1 },
      { id: '4-down', number: 4, direction: 'down', word: 'LIKE', clue: 'Hoşlanmak, beğenmek', row: 1, col: 3 }
    ]
  },
  {
    id: 'a1-5x5-2',
    title: 'Hayvanlar & Doğa',
    level: 'A1',
    size: 5,
    description: 'Doğadaki dostlarımız ve çevre.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'CAT', clue: 'Miyavlayan sevimli evcil hayvan', row: 0, col: 0 },
      { id: '2-across', number: 2, direction: 'across', word: 'SUN', clue: 'Dünyamızı ısıtan ve aydınlatan yıldız', row: 2, col: 2 },
      { id: '4-across', number: 4, direction: 'across', word: 'DOG', clue: 'Sadık, havlayan evcil hayvan', row: 4, col: 1 },
      { id: '1-down', number: 1, direction: 'down', word: 'COLD', clue: 'Sıcak karşıtı, üşütücü hava', row: 0, col: 0 },
      { id: '3-down', number: 3, direction: 'down', word: 'SONG', clue: 'Şarkı, ezgi', row: 1, col: 2 }
    ]
  },
  {
    id: 'a1-5x5-3',
    title: 'Renkler & Şehir',
    level: 'A1',
    size: 5,
    description: 'Gündelik nesneler ve temel kelimeler.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'BLUE', clue: 'Gökyüzü ve denizin rengi (Mavi)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'TREE', clue: 'Gövdesi ve dalları olan yeşil bitki (Ağaç)', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'RED', clue: 'Elmanın, çileğin rengi (Kırmızı)', row: 4, col: 2 },
      { id: '1-down', number: 1, direction: 'down', word: 'BUS', clue: 'Toplu taşıma aracı (Otobüs)', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'LATE', clue: 'Gecikmiş, vaktinden sonra', row: 0, col: 1 },
      { id: '4-down', number: 4, direction: 'down', word: 'EAR', clue: 'Sesleri duymaya yarayan organımız (Kulak)', row: 2, col: 3 }
    ]
  },

  // ==========================================
  // LEVEL A1 - 6x6 PUZZLES
  // ==========================================
  {
    id: 'a1-6x6-1',
    title: 'Okul & Sınıf',
    level: 'A1',
    size: 6,
    description: 'Sınıf, arkadaşlar ve okul gereçleri.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'DESK', clue: 'Öğrencinin ders çalıştığı masa / sıra', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'DOOR', clue: 'Odaya girip çıkılan kapı', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'READ', clue: 'Kitap veya yazı okumak', row: 4, col: 1 },
      { id: '1-down', number: 1, direction: 'down', word: 'DATE', clue: 'Tarih / Gün belirten bilgi', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'SLOW', clue: 'Hızlı olmayan, yavaş', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'ROAD', clue: 'Araçların gittiği yol / cadde', row: 2, col: 3 }
    ]
  },
  {
    id: 'a1-6x6-2',
    title: 'Meyveler & Kahvaltı',
    level: 'A1',
    size: 6,
    description: 'Sağlıklı besinler ve mutfak temel kelimeleri.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'APPLE', clue: 'Kırmızı veya yeşil tatlı meyve (Elma)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'TEA', clue: 'Sıcak içilen geleneksel çay', row: 2, col: 2 },
      { id: '4-across', number: 4, direction: 'across', word: 'EGG', clue: 'Tavuktan elde edilen protein deposu (Yumurta)', row: 4, col: 3 },
      { id: '1-down', number: 1, direction: 'down', word: 'ARM', clue: 'Omzumuz ile elimiz arasındaki uzuv (Kol)', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'LATE', clue: 'Geç kalmış', row: 0, col: 3 },
      { id: '3-down', number: 3, direction: 'down', word: 'TAXI', clue: 'Sarı renkli yolcu taşıma aracı', row: 2, col: 2 }
    ]
  },

  // ==========================================
  // LEVEL A1 - 7x7 PUZZLES
  // ==========================================
  {
    id: 'a1-7x7-1',
    title: 'Çiftlik & Doğa Gezisi',
    level: 'A1',
    size: 7,
    description: 'Huzurlu kır hayatı ve hayvanlar.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'FARM', clue: 'Hayvanların ve ekinlerin yetiştiği çiftlik', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'RIVER', clue: 'Denize doğru akan büyük akarsu (Nehir)', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'HORSE', clue: 'Hızlı koşan, binilen soylu hayvan (At)', row: 4, col: 2 },
      { id: '1-down', number: 1, direction: 'down', word: 'FISH', clue: 'Suda yüzen pullu canlı (Balık)', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'RAIN', clue: 'Bulutlardan düşen su damlaları (Yağmur)', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'TREE', clue: 'Ormanları oluşturan gövdeli bitki (Ağaç)', row: 3, col: 5 }
    ]
  },
  {
    id: 'a1-7x7-2',
    title: 'Aile & Zaman',
    level: 'A1',
    size: 7,
    description: 'Zaman dilimleri, saatler ve aile.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'WEEK', clue: 'Yedi günden oluşan süre (Hafta)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'HOME', clue: 'Ailenin yaşadığı sıcak yuva / ev', row: 2, col: 2 },
      { id: '5-across', number: 5, direction: 'across', word: 'YEAR', clue: 'On iki aylık takvim süresi (Yıl)', row: 4, col: 1 },
      { id: '1-down', number: 1, direction: 'down', word: 'WARM', clue: 'Soğuk olmayan, ılık ve sevecen', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'EASY', clue: 'Zor olmayan, basit ve kolay', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'MOON', clue: 'Geceleri parlayan uydumuz (Ay)', row: 2, col: 4 }
    ]
  },

  // ==========================================
  // LEVEL A2 - 5x5 PUZZLES
  // ==========================================
  {
    id: 'a2-5x5-1',
    title: 'Tatil & Seyahat',
    level: 'A2',
    size: 5,
    description: 'Yolculuk, bilet ve konaklama kavramları.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'TRIP', clue: 'Kısa süreli gezi / seyahat', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'CAMP', clue: 'Çadır kurarak doğada konaklama', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'OPEN', clue: 'Kapalı karşıtı, açık / açmak', row: 4, col: 1 },
      { id: '1-down', number: 1, direction: 'down', word: 'TAXI', clue: 'Ücret karşılığı yolcu taşıyan ticari otomobil', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'ROAD', clue: 'Ulaşımın sağlandığı kara yolu', row: 0, col: 1 },
      { id: '4-down', number: 4, direction: 'down', word: 'PLAN', clue: 'Önceden hazırlanan program / tasarım', row: 1, col: 4 }
    ]
  },
  {
    id: 'a2-5x5-2',
    title: 'Hava & Mevsimler',
    level: 'A2',
    size: 5,
    description: 'Hava durumu ve doğal çevre terimleri.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'SNOW', clue: 'Kışın yağan beyaz kristal yağış (Kar)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'WIND', clue: 'Havanın hızlı esintisi (Rüzgar)', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'DARK', clue: 'Aydınlık olmayan, karanlık', row: 4, col: 1 },
      { id: '1-down', number: 1, direction: 'down', word: 'SWIM', clue: 'Suda kulaç atarak ilerlemek (Yüzmek)', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'NICE', clue: 'Hoş, sevimli ve güzel', row: 0, col: 1 },
      { id: '4-down', number: 4, direction: 'down', word: 'DEEP', clue: 'Sığ olmayan, derinde bulunan', row: 1, col: 4 }
    ]
  },
  {
    id: 'a2-5x5-3',
    title: 'Şehir & Mağaza',
    level: 'A2',
    size: 5,
    description: 'Alışveriş, fiyatlar ve mağazalar.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'SHOP', clue: 'Ürün satılan dükkân / mağaza', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'COST', clue: 'Bir şeyin tutarı veya maliyeti', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'SALE', clue: 'İndirimli satış / ucuzluk', row: 4, col: 1 },
      { id: '1-down', number: 1, direction: 'down', word: 'SUIT', clue: 'Takım elbise veya uygun olmak', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'COIN', clue: 'Madeni bozuk para', row: 1, col: 1 },
      { id: '4-down', number: 4, direction: 'down', word: 'TALL', clue: 'Kısa olmayan, yüksek boylu', row: 1, col: 4 }
    ]
  },

  // ==========================================
  // LEVEL A2 - 6x6 PUZZLES
  // ==========================================
  {
    id: 'a2-6x6-1',
    title: 'Meslekler & İş Hayatı',
    level: 'A2',
    size: 6,
    description: 'Günlük meslekler ve çalışma ortamı.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'PILOT', clue: 'Uçak veya hava aracı kullanan kaptan', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'LEAVE', clue: 'Ayrılmak, işten çıkmak veya terk etmek', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'TEAM', clue: 'Birlikte çalışan iş veya spor ekibi', row: 4, col: 2 },
      { id: '1-down', number: 1, direction: 'down', word: 'POOR', clue: 'Zengin olmayan, yoksul veya yetersiz', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'LATE', clue: 'Vaktinde yetişemeyen, gecikmiş', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'MEET', clue: 'Buluşmak, tanışmak veya toplantı yapmak', row: 1, col: 5 }
    ]
  },
  {
    id: 'a2-6x6-2',
    title: 'Sağlık & Vücut',
    level: 'A2',
    size: 6,
    description: 'Hastalıklar, bakım ve beden organları.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'HEART', clue: 'Vücuda kan pompalayan hayati organ (Kalp)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'SLEEP', clue: 'Gece dinlenmek için uyumak', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'WALK', clue: 'Ayaklarla adım atarak yürümek', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'HEAD', clue: 'Beynimizin ve yüzümüzün olduğu bölüm (Baş / Kafa)', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'ALERT', clue: 'Uyanık, tetikte veya uyarı', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'PAIN', clue: 'Vücuttaki acı, sızı veya ağrı', row: 2, col: 5 }
    ]
  },

  // ==========================================
  // LEVEL A2 - 7x7 PUZZLES
  // ==========================================
  {
    id: 'a2-7x7-1',
    title: 'Kültür & Şehirler',
    level: 'A2',
    size: 7,
    description: 'Tarihi binalar, müzeler ve geziler.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'MUSEUM', clue: 'Tarihi ve sanat eserlerinin sergilendiği müze', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'TRAVEL', clue: 'Farklı yerleri görmek için seyahat etmek', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'CASTLE', clue: 'Eski zaman krallarının taş kalesi / hisar', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'MUSIC', clue: 'Ruhun gıdası sayılan ses sanatı (Müzik)', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'SMART', clue: 'Zeki, açıkgöz veya akıllı', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'EARTH', clue: 'Üzerinde yaşadığımız gezegen (Dünya)', row: 2, col: 5 }
    ]
  },
  {
    id: 'a2-7x7-2',
    title: 'Spor & Macera',
    level: 'A2',
    size: 7,
    description: 'Hareketli yaşam ve açık hava sporları.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'PLAYER', clue: 'Takımda veya oyunda yer alan oyuncu', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'RUNNER', clue: 'Yarışta koşan atlet / koşucu', row: 2, col: 1 },
      { id: '5-across', number: 5, direction: 'across', word: 'ENERGY', clue: 'Hareket ve yaşam için gereken güç (Enerji)', row: 4, col: 1 },
      { id: '1-down', number: 1, direction: 'down', word: 'POWER', clue: 'Fiziksel veya manevi kudret, güç', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'ALONE', clue: 'Yanında kimse olmayan, yalnız / tek başına', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'GREAT', clue: 'Muhteşem, harika ve ulu', row: 1, col: 6 }
    ]
  },

  // ==========================================
  // LEVEL B1 - 5x5 PUZZLES
  // ==========================================
  {
    id: 'b1-5x5-1',
    title: 'Zihin & Kararlar',
    level: 'B1',
    size: 5,
    description: 'Düşünce biçimleri ve odaklanma.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'FOCUS', clue: 'Bir konuya tüm dikkati vermek (Odaklanmak)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'HABIT', clue: 'Tekrar edilerek kazanılan alışkanlık', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'TREND', clue: 'Toplumdaki genel eğilim / akım', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'FIGHT', clue: 'Zorluklarla mücadele etmek / savaşmak', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'CABLE', clue: 'Elektrik veya veri aktaran kalın tel (Kablo)', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'STAND', clue: 'Ayakta durmak veya tahammül etmek', row: 0, col: 4 }
    ]
  },
  {
    id: 'b1-5x5-2',
    title: 'Toplum & Paylaşım',
    level: 'B1',
    size: 5,
    description: 'İlişkiler ve ortak değerler.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'SHARE', clue: 'Birlikte kullanmak, bölüşmek (Paylaşmak)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'TRUST', clue: 'Birine veya bir şeye duyulan güven', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'EVENT', clue: 'Önemli olay, etkinlik veya organizasyon', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'STATE', clue: 'Durum, vaziyet veya resmi devlet', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'ADULT', clue: 'Çocukluk evresini geçmiş yetişkin insan', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'ENTER', clue: 'Bir mekana veya sisteme giriş yapmak', row: 0, col: 4 }
    ]
  },
  {
    id: 'b1-5x5-3',
    title: 'Yaratıcılık & Fikirler',
    level: 'B1',
    size: 5,
    description: 'Zihinsel üretim ve yenilik.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'BRAIN', clue: 'Düşünme ve sinir sisteminin merkezi (Beyin)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'SKILL', clue: 'Eğitimle kazanılan ustalık / beceri', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'SOLVE', clue: 'Sorunu veya bulmacayı çözüme kavuşturmak', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'BASIS', clue: 'Bir fikrin dayanağı, kökü (Temel)', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'ALIVE', clue: 'Ölü karşıtı, nefes alan ve canlı', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'NOVEL', clue: 'Uzun edebi anlatı (Roman) veya özgün', row: 0, col: 4 }
    ]
  },

  // ==========================================
  // LEVEL B1 - 6x6 PUZZLES
  // ==========================================
  {
    id: 'b1-6x6-1',
    title: 'Doğa & İklim Çözümleri',
    level: 'B1',
    size: 6,
    description: 'Gezegenimizi korumak için sürdürülebilir kavramlar.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'NATURE', clue: 'İnsan eli değmemiş tüm canlı varlıklar (Doğa)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'FOREST', clue: 'Gür ağaçlarla kaplı geniş yaban alanı (Orman)', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'ENERGY', clue: 'Güneş ve rüzgardan sağlanan temiz güç', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'NOTICE', clue: 'Farkına varmak veya resmi duyuru', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'TARGET', clue: 'Ulaşılmak istenen amaç / hedef tahtası', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'REDUCE', clue: 'Atıkları veya tüketimi azaltmak / kısmak', row: 0, col: 4 }
    ]
  },
  {
    id: 'b1-6x6-2',
    title: 'Dijital İletişim',
    level: 'B1',
    size: 6,
    description: 'Modern ağlar ve bilgi çağının terimleri.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'SEARCH', clue: 'Arama motorunda bilgi veya kaynak aramak', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'DEVICE', clue: 'Telefon, tablet gibi elektronik aygıt / cihaz', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'SECURE', clue: 'Tehlikelerden uzak, emniyetli ve güvenli', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'SYSTEM', clue: 'Birlikte çalışan bileşenler düzeni (Sistem)', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'ACTIVE', clue: 'Durağan olmayan, faal ve etkin', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'CHANGE', clue: 'Dönüşmek, başkalaşmak veya değiştirmek', row: 0, col: 4 }
    ]
  },

  // ==========================================
  // LEVEL B1 - 7x7 PUZZLES
  // ==========================================
  {
    id: 'b1-7x7-1',
    title: 'Girişim & Başarı',
    level: 'B1',
    size: 7,
    description: 'Planlama, liderlik ve geleceğe yatırım.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'PROJECT', clue: 'Belli bir amaca yönelik kapsamlı çalışma (Proje)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'BALANCE', clue: 'İş ve yaşam arasındaki uyum / denge', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'NETWORK', clue: 'İş bağlantıları ve insan iletişim ağı', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'PARTNER', clue: 'Birlikte iş yapılan ortak / refakatçi', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'OPINION', clue: 'Bir konudaki kişisel görüş veya fikir', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'ECONOMY', clue: 'Üretim, ticaret ve para yönetimi (Ekonomi)', row: 0, col: 4 }
    ]
  },
  {
    id: 'b1-7x7-2',
    title: 'Bilim & Keşif',
    level: 'B1',
    size: 7,
    description: 'Araştırma, kanıtlar ve yeni buluşlar.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'SCIENCE', clue: 'Deney ve gözleme dayalı sistematik bilgi (Bilim)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'STUDENT', clue: 'Akademi veya okulda eğitim alan öğrenci', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'JOURNEY', clue: 'Uzak diyarlara yapılan uzun yolculuk / seyahat', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'SUBJECT', clue: 'İncelenen konu veya okul dersi', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'INCLUDE', clue: 'Kapsamak, bünyesine dahil etmek', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'CONTENT', clue: 'Bir eserin veya sayfanın barındırdığı içerik', row: 0, col: 4 }
    ]
  },

  // ==========================================
  // LEVEL B2 - 5x5 PUZZLES
  // ==========================================
  {
    id: 'b2-5x5-1',
    title: 'Psikoloji & Zihin',
    level: 'B2',
    size: 5,
    description: 'Bilişsel derinlik ve zihinsel direnç.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'LOGIC', clue: 'Akla ve tutarlılığa dayalı düşünce (Mantık)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'AWARE', clue: 'Etrafında olup bitenin farkında olan / sezgili', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'RESET', clue: 'Sıfırlamak, baştan başlatmak', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'LEARN', clue: 'Deneyim ve pratikle yeni bilgi edinmek', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'GRACE', clue: 'Zarafet, incelik ve hoşgörü', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'CLEAR', clue: 'Net, berrak, şüpheden uzak ve anlaşılır', row: 0, col: 4 }
    ]
  },
  {
    id: 'b2-5x5-2',
    title: 'Strateji & Analiz',
    level: 'B2',
    size: 5,
    description: 'Problem çözme ve analitik kavramlar.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'SCOPE', clue: 'Bir çalışmanın kapsamı ve etki alanı', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'PROVE', clue: 'Kanıtlarla doğruluğunu ispatlamak', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'YIELD', clue: 'Ürün vermek, kazanç sağlamak ya da yol vermek', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'SPICY', clue: 'Baharatlı, acı veya heyecan verici', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'ORDER', clue: 'Düzen, intizam veya verilen sipariş', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'EXACT', clue: 'Tam, eksiksiz ve kesin', row: 0, col: 4 }
    ]
  },

  // ==========================================
  // LEVEL B2 - 6x6 PUZZLES
  // ==========================================
  {
    id: 'b2-6x6-1',
    title: 'Gelişmiş Liderlik & Vizyon',
    level: 'B2',
    size: 6,
    description: 'Etki, yetki ve organizasyonel başarı.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'IMPACT', clue: 'Güçlü tesir veya derin iz bırakan etki', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'EXPAND', clue: 'Sınırlarını genişletmek / büyütmek', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'STABLE', clue: 'Sarsılmaz, dengeli ve istikrarlı', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'INVEST', clue: 'Geleceğe sermaye veya emek yatırmak', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'POLICY', clue: 'Belirlenen resmi ilke ve hareket tarzı (Politika)', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'TALENT', clue: 'Doğuştan gelen üstün kabiliyet / yetenek', row: 0, col: 4 }
    ]
  },
  {
    id: 'b2-6x6-2',
    title: 'Biliş & Karar Alma',
    level: 'B2',
    size: 6,
    description: 'Kritik düşünme ve zihinsel esneklik.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'REASON', clue: 'Bir olayın gerekçesi, sebebi veya akıl', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'METHOD', clue: 'Bilimsel yol, usul veya yöntem (Metot)', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'DOMAIN', clue: 'Uzmanlık alanı veya hakimiyet sahası', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'REMIND', clue: 'Unutulanı hatırlatmak / akla getirmek', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'ACTION', clue: 'Düşünceyi uygulamaya geçirme eylemi', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'OUTPUT', clue: 'Süreç sonunda elde edilen çıktı / verim', row: 0, col: 4 }
    ]
  },

  // ==========================================
  // LEVEL B2 - 7x7 PUZZLES
  // ==========================================
  {
    id: 'b2-7x7-1',
    title: 'Ekonomi & Küresel Vizyon',
    level: 'B2',
    size: 7,
    description: 'Uluslararası dinamikler ve stratejik gelişim.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'CLIMATE', clue: 'Gezegenin uzun vadeli hava ve atmosfer dengesi (İklim)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'FINANCE', clue: 'Para, yatırım ve bütçe yönetimi (Finans)', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'DIGITAL', clue: 'Sayısal ve bilgisayar tabanlı yeni dünya', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'CAPITAL', clue: 'İş kurmaya yarayan ana sermaye veya başkent', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'INNOVAT', clue: 'Yenilikçi adımlar tasarlamak', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'ABILITY', clue: 'Bir işi başarma gücü ve yetenek', row: 0, col: 4 }
    ]
  },
  {
    id: 'b2-7x7-2',
    title: 'Felsefe & Sosyal Bilimler',
    level: 'B2',
    size: 7,
    description: 'Etik, toplum bilinci ve kuramlar.',
    clues: [
      { id: '1-across', number: 1, direction: 'across', word: 'CULTURE', clue: 'Toplumun birikimi, gelenek ve sanat mirası (Kültür)', row: 0, col: 0 },
      { id: '3-across', number: 3, direction: 'across', word: 'JUSTICE', clue: 'Hakkı gözetme, doğruluk ve hakkaniyet (Adalet)', row: 2, col: 0 },
      { id: '5-across', number: 5, direction: 'across', word: 'FREEDOM', clue: 'Baskı altında olmama durumu (Özgürlük)', row: 4, col: 0 },
      { id: '1-down', number: 1, direction: 'down', word: 'CONCEPT', clue: 'Zihinde şekillenen soyut fikir veya kavram', row: 0, col: 0 },
      { id: '2-down', number: 2, direction: 'down', word: 'LOGICAL', clue: 'Tutarlı, mantığa ve akla uygun', row: 0, col: 2 },
      { id: '4-down', number: 4, direction: 'down', word: 'RESPECT', clue: 'Başkalarının hakkına duyulan hürmet ve saygı', row: 0, col: 4 }
    ]
  }
];

// VALIDATOR FUNCTION
function validatePuzzles(list) {
  let errors = 0;
  for (const p of list) {
    const grid = Array.from({ length: p.size }, () => Array(p.size).fill(null));
    for (const c of p.clues) {
      c.word = c.word.toUpperCase();
      c.length = c.word.length;
      if (c.direction === 'across') {
        if (c.row < 0 || c.row >= p.size || c.col < 0 || c.col + c.length > p.size) {
          console.error(`[ERROR] Out of bounds across: ${p.id} -> ${c.word} at (${c.row},${c.col}) size=${p.size}`);
          errors++;
          continue;
        }
        for (let i = 0; i < c.length; i++) {
          const letter = c.word[i];
          const curr = grid[c.row][c.col + i];
          if (curr && curr !== letter) {
            console.error(`[COLLISION] ${p.id} across ${c.word}[${i}]=${letter} conflicts with existing '${curr}' at (${c.row}, ${c.col + i})`);
            errors++;
          } else {
            grid[c.row][c.col + i] = letter;
          }
        }
      } else {
        if (c.col < 0 || c.col >= p.size || c.row < 0 || c.row + c.length > p.size) {
          console.error(`[ERROR] Out of bounds down: ${p.id} -> ${c.word} at (${c.row},${c.col}) size=${p.size}`);
          errors++;
          continue;
        }
        for (let i = 0; i < c.length; i++) {
          const letter = c.word[i];
          const curr = grid[c.row + i][c.col];
          if (curr && curr !== letter) {
            console.error(`[COLLISION] ${p.id} down ${c.word}[${i}]=${letter} conflicts with existing '${curr}' at (${c.row + i}, ${c.col})`);
            errors++;
          } else {
            grid[c.row + i][c.col] = letter;
          }
        }
      }
    }
  }
  return errors;
}

const errCount = validatePuzzles(puzzles);
console.log(`Validation completed. Errors: ${errCount}`);

if (errCount === 0) {
  const tsContent = `// src/puzzleData.ts
// Auto-validated Crossword / Kare Bulmaca dataset for English Learning App

export interface PuzzleClue {
  id: string; // e.g., '1-across', '2-down'
  number: number;
  direction: 'across' | 'down';
  word: string; // UPPERCASE
  clue: string; // Turkish definition
  row: number; // 0-based
  col: number; // 0-based
  length: number;
}

export interface PuzzleDefinition {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  size: 5 | 6 | 7;
  description: string;
  clues: PuzzleClue[];
}

export const PUZZLES: PuzzleDefinition[] = ${JSON.stringify(puzzles, null, 2)};

export const PUZZLE_LEVELS: ('A1' | 'A2' | 'B1' | 'B2')[] = ['A1', 'A2', 'B1', 'B2'];
export const PUZZLE_SIZES: (5 | 6 | 7)[] = [5, 6, 7];

export interface CompletedPuzzleRecord {
  puzzleId: string;
  completedAt: number;
  secondsTaken: number;
  score: number;
  hintsUsed: number;
}

export function getPuzzlesByLevelAndSize(level: 'A1' | 'A2' | 'B1' | 'B2', size?: 5 | 6 | 7): PuzzleDefinition[] {
  return PUZZLES.filter(p => p.level === level && (size ? p.size === size : true));
}

export function getPuzzleById(id: string): PuzzleDefinition | undefined {
  return PUZZLES.find(p => p.id === id);
}
`;

  fs.writeFileSync(path.join(__dirname, '../src/puzzleData.ts'), tsContent, 'utf8');
  console.log('Successfully wrote src/puzzleData.ts');
}
