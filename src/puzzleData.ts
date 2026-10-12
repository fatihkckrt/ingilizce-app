// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App

export interface PuzzleClue {
  id: string; // e.g., '1-across', '2-down'
  number: number;
  direction: 'across' | 'down';
  word: string; // UPPERCASE
  clue: string; // Turkish clue
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

export const PUZZLES: PuzzleDefinition[] = [
  {
    "id": "a1-5x5-1",
    "title": "Ev & Günlük Yaşam",
    "level": "A1",
    "size": 5,
    "description": "Evde ve günlük hayatta sık kullanılan temel kelimeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HOME",
        "clue": "Ailenin yaşadığı yuva veya ev",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HAT",
        "clue": "Güneşten korunmak için başa takılan şapka",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "APPLE",
        "clue": "Kırmızı veya yeşil lezzetli meyve",
        "row": 1,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "TEN",
        "clue": "Dokuzdan sonra gelen çift basamaklı sayı (10)",
        "row": 2,
        "col": 0,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "OPEN",
        "clue": "Kapalı karşıtı, açık veya açmak",
        "row": 0,
        "col": 1,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "EGG",
        "clue": "Kahvaltıda yenen taze yumurta",
        "row": 1,
        "col": 4,
        "length": 3
      }
    ]
  },
  {
    "id": "a1-5x5-2",
    "title": "Doğa & Çevre",
    "level": "A1",
    "size": 5,
    "description": "Balık, çiftlik, yağmur ve harita gibi temel çevre sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FISH",
        "clue": "Suda yaşayan pullu canlı (Balık)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FARM",
        "clue": "Hayvanların beslendiği ekin alanı (Çiftlik)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SHIP",
        "clue": "Denizde yol alan büyük deniz taşıtı (Gemi)",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "RAIN",
        "clue": "Bulutlardan düşen su damlaları (Yağmur)",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "MAP",
        "clue": "Şehir ve ülkeleri gösteren çizim (Harita)",
        "row": 3,
        "col": 0,
        "length": 3
      }
    ]
  },
  {
    "id": "a1-5x5-3",
    "title": "Renkler & Eşyalar",
    "level": "A1",
    "size": 5,
    "description": "Mavi renk, kitap, açık olmak ve not almak gibi günlük kavramlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "BLUE",
        "clue": "Gökyüzünün ve berrak denizlerin rengi (Mavi)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BOOK",
        "clue": "Okumak için sayfaları çevrilen nesne (Kitap)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "USER",
        "clue": "Bir sistemi veya telefonu kullanan kişi (Kullanıcı)",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "OPEN",
        "clue": "Kapalı olmayan, giriş yapılabilen (Açık)",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEW",
        "clue": "Eski olmayan, yepyeni ve taze",
        "row": 2,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "a1-6x6-1",
    "title": "Sınıf & Okul Dünyası",
    "level": "A1",
    "size": 6,
    "description": "Okul, gülümseme, ışık ve hayvanlarla ilgili zengin bulmaca.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SCHOOL",
        "clue": "Öğrencilerin eğitim aldığı kurum (Okul)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SMILE",
        "clue": "Mutluyken yüzdeki tebessüm (Gülümsemek)",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OPEN",
        "clue": "Kapalı olmayan, aralık veya açık",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "LIGHT",
        "clue": "Karanlığı aydınlatan parlaklık (Işık)",
        "row": 0,
        "col": 5,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ICE",
        "clue": "Suyun donmuş soğuk katı hali (Buz)",
        "row": 2,
        "col": 0,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LION",
        "clue": "Ormanların kralı yeleli yırtıcı (Aslan)",
        "row": 3,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "EASY",
        "clue": "Zor olmayan, rahatça yapılan (Kolay)",
        "row": 4,
        "col": 0,
        "length": 4
      }
    ]
  },
  {
    "id": "a1-6x6-2",
    "title": "Yiyecek & Kahvaltı",
    "level": "A1",
    "size": 6,
    "description": "Ekmek, muz, yumurta ve gece gibi lezzetli ve temel sözcükler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "BREAD",
        "clue": "Un ve sudan yapılan temel gıda (Ekmek)",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BANANA",
        "clue": "Sarı kabuklu tatlı tropikal meyve (Muz)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EGG",
        "clue": "Kahvaltıda haşlanan veya kızartılan yumurta",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DATE",
        "clue": "Günün takvim bilgisi veya tatlı hurma",
        "row": 0,
        "col": 4,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NIGHT",
        "clue": "Güneş battıktan sonraki karanlık zaman (Gece)",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "NEW",
        "clue": "Eski olmayan, taze ve gıcır gıcır (Yeni)",
        "row": 4,
        "col": 0,
        "length": 3
      }
    ]
  },
  {
    "id": "a1-7x7-1",
    "title": "Büyük Doğa Gezisi",
    "level": "A1",
    "size": 7,
    "description": "Çiftçi, orman, nehir ve dünya gibi doğanın büyüleyici unsurları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FARMER",
        "clue": "Tarlada ekin ekip hayvan besleyen çiftçi",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FOREST",
        "clue": "Ağaçlarla ve canlılarla kaplı ulu orman",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EARTH",
        "clue": "Üzerinde yaşadığımız mavi gezegen (Dünya)",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "RIVER",
        "clue": "Denize veya göle akan tatlı su akarsuyu (Nehir)",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "SUN",
        "clue": "Gökyüzündeki parlak yaşam kaynağı (Güneş)",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TEA",
        "clue": "Sıcak demlenen keyifli içecek (Çay)",
        "row": 5,
        "col": 0,
        "length": 3
      }
    ]
  },
  {
    "id": "a1-7x7-2",
    "title": "Aile & Şehir Yaşamı",
    "level": "A1",
    "size": 7,
    "description": "Anne, sabah, oda, ev ve bahçe gibi sıcacık aile kavramları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MOTHER",
        "clue": "Bizi sevgiyle büyüten anne",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MORNING",
        "clue": "Günün erken başlangıç vakti (Sabah)",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "HOME",
        "clue": "Sıcak aile yuvası (Ev)",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ROOM",
        "clue": "Evin bölümlerinden her biri (Oda)",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ICE",
        "clue": "Donmuş soğuk su kalıbı (Buz)",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "GARDEN",
        "clue": "Çiçek ve ağaçların olduğu yeşil bahçe",
        "row": 6,
        "col": 0,
        "length": 6
      }
    ]
  },
  {
    "id": "a2-5x5-1",
    "title": "Seyahat & Ulaşım",
    "level": "A2",
    "size": 5,
    "description": "Planlama, yol, park, uzaklaşma ve anahtar gibi seyahat terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PLAN",
        "clue": "Geziden önce yapılan hazırlık tasarımı (Plan)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PARK",
        "clue": "Araç bırakılan alan veya dinlenme bahçesi",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "AWAY",
        "clue": "Burada olmayan, uzakta ve mesafeli",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ROAD",
        "clue": "Araçların seyahat ettiği kara yolu",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "KEY",
        "clue": "Otel odasını veya kapıyı açan anahtar",
        "row": 3,
        "col": 0,
        "length": 3
      }
    ]
  },
  {
    "id": "a2-5x5-2",
    "title": "Hava Durumu & Deniz",
    "level": "A2",
    "size": 5,
    "description": "Yüzmek, göl, tuzlu su ve buluşma gibi tatil kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SWIM",
        "clue": "Denizde veya havuzda kulaç atmak (Yüzmek)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SALT",
        "clue": "Deniz suyuna tadını veren beyaz mineral (Tuz)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "WHAT",
        "clue": "Soru sormaya yarayan kelime (Ne / Hangisi)",
        "row": 0,
        "col": 1,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "MEET",
        "clue": "Sahilde arkadaşlarla buluşmak / tanışmak",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LAKE",
        "clue": "Karalarla çevrili durgun tatlı su kütlesi (Göl)",
        "row": 2,
        "col": 0,
        "length": 4
      }
    ]
  },
  {
    "id": "a2-5x5-3",
    "title": "Alışveriş & Giyim",
    "level": "A2",
    "size": 5,
    "description": "Fiyat, madeni para, mağaza ve ütü gibi alışveriş kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "COST",
        "clue": "Bir ürünün bedeli veya maliyeti",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COIN",
        "clue": "Cüzdandaki metal bozuk para",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SHOP",
        "clue": "Kıyafet ve eşya satılan mağaza / dükkân",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TINY",
        "clue": "Oldukça küçük, minik ve ufak",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "IRON",
        "clue": "Kıyafetlerin kırışıklığını açan alet (Ütü)",
        "row": 2,
        "col": 0,
        "length": 4
      }
    ]
  },
  {
    "id": "a2-6x6-1",
    "title": "Meslekler & Kariyer",
    "level": "A2",
    "size": 6,
    "description": "Pilot, telefon, ofis ve emek karşılığı kazanç elde etme.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PILOT",
        "clue": "Uçağı gökyüzünde yöneten kaptan",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PHONE",
        "clue": "İletişim kurduğumuz akıllı telefon",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ONION",
        "clue": "Yemeklere lezzet katan kat kat sebze (Soğan)",
        "row": 0,
        "col": 3,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "OFFICE",
        "clue": "Masa başı işlerin yürütüldüğü çalışma yeri (Ofis)",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "EARN",
        "clue": "Emek vererek para ve hak kazanmak",
        "row": 4,
        "col": 0,
        "length": 4
      }
    ]
  },
  {
    "id": "a2-6x6-2",
    "title": "Sağlık & Dinlenme",
    "level": "A2",
    "size": 6,
    "description": "Uyku, gülümseme, ağrı ve şifalı limon gibi sağlık sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SLEEP",
        "clue": "Yorgunluğu atmak için yatağa yatıp uyumak",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SMILE",
        "clue": "Neşeli olunduğunda yüzün aydınlanması",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "PAIN",
        "clue": "Hastalık anında hissedilen bedensel sızı (Ağrı)",
        "row": 0,
        "col": 4,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ILL",
        "clue": "Sağlığı bozulmuş, yatağa düşmüş (Hasta)",
        "row": 2,
        "col": 0,
        "length": 3
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LEMON",
        "clue": "C vitamini deposu sarı ekşi narenciye (Limon)",
        "row": 3,
        "col": 0,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EYE",
        "clue": "Çevreyi görmemizi sağlayan duyu organımız (Göz)",
        "row": 4,
        "col": 0,
        "length": 3
      }
    ]
  },
  {
    "id": "a2-7x7-1",
    "title": "Kültür & Şehirler",
    "level": "A2",
    "size": 7,
    "description": "Müze, modern mimari, araba sürme ve dünya gezisi.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MUSEUM",
        "clue": "Eski eserlerin korunduğu tarihi sergi mekânı (Müze)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MODERN",
        "clue": "Çağdaş, yenilikçi ve günümüze uygun",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SHIP",
        "clue": "Kıtalar arası seyahat eden büyük deniz gemisi",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "DRIVE",
        "clue": "Direksiyon başına geçip araç kullanmak",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EARTH",
        "clue": "Gezegenimiz, yerküre ve tabiat",
        "row": 2,
        "col": 4,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ROAD",
        "clue": "Şehirleri birbirine bağlayan geniş asfalt yol",
        "row": 4,
        "col": 0,
        "length": 4
      }
    ]
  },
  {
    "id": "a2-7x7-2",
    "title": "Spor & Başarı",
    "level": "A2",
    "size": 7,
    "description": "Tenis, seyahat, ödül kazanma ve pusulada kuzey yönü.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TENNIS",
        "clue": "Raket ve topla oynanan kort sporu (Tenis)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TRAVEL",
        "clue": "Yeni ülkeler keşfetmek için yolculuğa çıkmak",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NORTH",
        "clue": "Pusulanın gösterdiği ana yön (Kuzey)",
        "row": 0,
        "col": 3,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "AWARD",
        "clue": "Yarışmayı kazanan şampiyona verilen kupa / ödül",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "EACH",
        "clue": "Gruptaki bireylerin her biri / tek tek",
        "row": 4,
        "col": 0,
        "length": 4
      }
    ]
  },
  {
    "id": "b1-5x5-1",
    "title": "Zihin & Odaklanma",
    "level": "B1",
    "size": 5,
    "description": "Odaklanma, somut gerçekler, net düşünce ve temiz zihin.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FOCUS",
        "clue": "Tüm dikkati tek bir noktaya toplamak (Odaklanmak)",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACT",
        "clue": "Doğruluğu kanıtlanmış somut bilgi (Gerçek)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CLEAN",
        "clue": "Kirden ve karmaşadan arınmış (Temiz)",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SORRY",
        "clue": "Hata yapıldığında duyulan pişmanlık (Üzgün)",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "CLEAR",
        "clue": "Şüpheden uzak, anlaşılır ve net",
        "row": 2,
        "col": 0,
        "length": 5
      }
    ]
  },
  {
    "id": "b1-5x5-2",
    "title": "Girişim & Hedefler",
    "level": "A1",
    "size": 5,
    "description": "Alışkanlık edinme, umut, ana hedef ve toplam başarı.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HABIT",
        "clue": "Tekrar edilerek kazanılan davranış biçimi (Alışkanlık)",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HOPE",
        "clue": "Geleceğe dair beslenen iyimser duygu (Umut)",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "BRING",
        "clue": "Bir şeyi yanına alıp ulaştırmak (Getirmek)",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TOTAL",
        "clue": "Tüm parçaların toplamı veya eksiksiz yekûn",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "POINT",
        "clue": "Ulaşılmak istenen ana fikir veya amaç (Nokta)",
        "row": 2,
        "col": 0,
        "length": 5
      }
    ]
  },
  {
    "id": "b1-5x5-3",
    "title": "Yaratıcılık & Akıl",
    "level": "B1",
    "size": 5,
    "description": "Zeka, beceri, yaratıcı fikirler ve ileriye dönük görevler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SMART",
        "clue": "Hızlı kavrayan, açıkgöz ve zeki",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SKILL",
        "clue": "Ustalıkla yapılan hüner ve el becerisi",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "AHEAD",
        "clue": "Gelecekte veya önde olan (İleride)",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TASKS",
        "clue": "Tamamlanması gereken işler ve vazifeler",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "IDEAS",
        "clue": "Zihinde parlayan yenilikçi düşünceler (Fikirler)",
        "row": 2,
        "col": 0,
        "length": 5
      }
    ]
  },
  {
    "id": "b1-6x6-1",
    "title": "Toplum & İletişim",
    "level": "B1",
    "size": 6,
    "description": "Kamuoyu, insanlar, ortak inançlar ve dijital ağlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PUBLIC",
        "clue": "Toplumu oluşturan halk veya kamusal alan",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PEOPLE",
        "clue": "Bir arada yaşayan fertler (İnsanlar)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "BELIEF",
        "clue": "Kalpten duyulan güven ve inanç",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CHECKS",
        "clue": "Düzenli yapılan incelemeler ve denetimler",
        "row": 0,
        "col": 5,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ONLINE",
        "clue": "İnternet ağına bağlı ve çevrim içi",
        "row": 2,
        "col": 0,
        "length": 6
      }
    ]
  },
  {
    "id": "b1-6x6-2",
    "title": "Çevre & Doğa Koruma",
    "level": "B1",
    "size": 6,
    "description": "Temiz enerji, yerküre, tüketimi azaltma ve yeniden kullanma.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ENERGY",
        "clue": "Güneş ve rüzgardan elde edilen temiz güç",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "EARTH",
        "clue": "Korumamız gereken evimiz olan yerküre",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ELDER",
        "clue": "Toplumda tecrübe sahibi saygıdeğer büyükler",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "REUSE",
        "clue": "Atık üretmemek için bir eşyayı tekrar kullanmak",
        "row": 0,
        "col": 3,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "REDUCE",
        "clue": "Gereksiz israfı ve tüketimi kısmak / azaltmak",
        "row": 2,
        "col": 0,
        "length": 6
      }
    ]
  },
  {
    "id": "b1-7x7-1",
    "title": "Bilim & Keşifler",
    "level": "B1",
    "size": 7,
    "description": "Bilim, öğrenci, başlangıç adımları, kimyager ve benzersiz buluşlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SCIENCE",
        "clue": "Gözlem ve deneylere dayanan sistematik bilgi (Bilim)",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "STUDENT",
        "clue": "Bilgi peşinde koşan üniversite öğrencisi",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "INITIAL",
        "clue": "Bir sürecin en başındaki ilk safha",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CHEMIST",
        "clue": "Maddelerin yapısını laboratuvarda inceleyen kimyager",
        "row": 0,
        "col": 5,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "UNIQUE",
        "clue": "Eşi benzeri olmayan, tek ve nev-i şahsına münhasır",
        "row": 2,
        "col": 0,
        "length": 6
      }
    ]
  },
  {
    "id": "b1-7x7-2",
    "title": "Girişim & Projeler",
    "level": "B1",
    "size": 7,
    "description": "Kapsamlı proje, iş ortağı, gözlem yapma ve nihai sonuç.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PROJECT",
        "clue": "Planlı hedeflere ulaşmak için yürütülen çalışma (Proje)",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PARTNER",
        "clue": "İş veya girişim yolculuğundaki ortak",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OBSERVE",
        "clue": "Gelişmeleri dikkatle takip edip gözlemlemek",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "RESULT",
        "clue": "Bir çabanın sonucunda elde edilen nihai netice",
        "row": 2,
        "col": 0,
        "length": 6
      }
    ]
  },
  {
    "id": "b2-5x5-1",
    "title": "Psikoloji & Mantık",
    "level": "B2",
    "size": 5,
    "description": "Mantık, derin öğrenme, farkındalık, zarafet ve netlik.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "LOGIC",
        "clue": "Doğru düşünme ve tutarlı muhakeme (Mantık)",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "LEARN",
        "clue": "Deneyim ve sorgulamayla yeni kabiliyet kazanmak",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GRACE",
        "clue": "Davranışlardaki incelik, asalet ve zarafet",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CLEAR",
        "clue": "Kuşkudan uzak, apaçık ve duru",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AWARE",
        "clue": "İçinde bulunduğu halin bilincinde ve farkında olan",
        "row": 2,
        "col": 0,
        "length": 5
      }
    ]
  },
  {
    "id": "b2-5x5-2",
    "title": "Strateji & Analiz",
    "level": "B2",
    "size": 5,
    "description": "Kapsam, büyüme ölçeği, iç düzen, denetim ve pazara giriş.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SCOPE",
        "clue": "Bir projenin sınırları ve etki alanı (Kapsam)",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SCALE",
        "clue": "Girişimin büyüme ve genişleme kapasitesi (Ölçek)",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ORDER",
        "clue": "Sistemli işleyiş, nizam ve intizam",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ENTER",
        "clue": "Yeni bir sektöre veya pazara adım atmak",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AUDIT",
        "clue": "Finansal kayıtların bağımsız uzmanlarca denetimi",
        "row": 2,
        "col": 0,
        "length": 5
      }
    ]
  },
  {
    "id": "b2-5x5-3",
    "title": "Karar Alma & İrade",
    "level": "B2",
    "size": 5,
    "description": "Kalıcı güven, küresel akımlar, kullanıcılar ve somut olaylar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TRUST",
        "clue": "Bir kimseye veya ilkeye sarsılmaz bağlılık (Güven)",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TREND",
        "clue": "Piyasadaki ve toplumdaki genel yönelim / akım",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "USERS",
        "clue": "Platformu aktif deneyimleyen kitle (Kullanıcılar)",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TOTAL",
        "clue": "Bütün bileşenlerin eksiksiz yekûnu",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "EVENT",
        "clue": "Önemli dönüm noktası teşkil eden vaka / olay",
        "row": 2,
        "col": 0,
        "length": 5
      }
    ]
  },
  {
    "id": "b2-6x6-1",
    "title": "Liderlik & Vizyon",
    "level": "B2",
    "size": 6,
    "description": "Kalıcı etki bırakma, stratejik yatırım, ilkeler ve kurumsal değerler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "IMPACT",
        "clue": "Derin iz bırakan dönüştürücü tesir (Etki)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INVEST",
        "clue": "Geleceğe kaynak ve sermaye aktarmak (Yatırım)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "POLICY",
        "clue": "Karar alma süreçlerini belirleyen resmi ilke (Politika)",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CLEVER",
        "clue": "Karmaşık engelleri ustalıkla aşan (Akıllı)",
        "row": 0,
        "col": 4,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "VALUES",
        "clue": "Kurumun ve bireyin pusulası olan ahlaki değerler",
        "row": 2,
        "col": 0,
        "length": 6
      }
    ]
  },
  {
    "id": "b2-6x6-2",
    "title": "Bilişsel Esneklik",
    "level": "B2",
    "size": 6,
    "description": "Mantık yürütme, hafızayı tazeleme, eyleme geçme ve sistematik metot.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REASON",
        "clue": "Mantıklı düşünme gücü veya bir olayın gerekçesi (Akıl)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REMIND",
        "clue": "Unutulan bir hakikati akla getirmek (Hatırlatmak)",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ACTION",
        "clue": "Kararları fiiliyata dökme hamlesi (Eylem)",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SCHOOL",
        "clue": "Düşünce ekolü veya kurumsal akademi",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "METHOD",
        "clue": "Bir amaca ulaşmak için izlenen bilimsel yol (Metot)",
        "row": 2,
        "col": 0,
        "length": 6
      }
    ]
  },
  {
    "id": "b2-7x7-1",
    "title": "Küresel Ekonomi & İklim",
    "level": "B2",
    "size": 7,
    "description": "İklim dinamikleri, küresel sermaye, yetenek yönetimi ve kurumsal profil.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CLIMATE",
        "clue": "Gezegenin uzun vadeli atmosferik dengesi (İklim)",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CAPITAL",
        "clue": "Girişimleri büyüten finansal ana sermaye",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "IRONIC",
        "clue": "Beklenenin tersi bir tezat barındıran durum (İronik)",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ABILITY",
        "clue": "Bir işi yüksek başarıyla tamamlama kabiliyeti (Yetenek)",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "PROFILE",
        "clue": "Bir kurumun veya bireyin uzmanlık özeti (Profil)",
        "row": 2,
        "col": 0,
        "length": 7
      }
    ]
  },
  {
    "id": "b2-7x7-2",
    "title": "Felsefe & Adalet",
    "level": "B2",
    "size": 7,
    "description": "Kültür mirası, soyut kavramlar, uluslar ve en güncel ilkeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CULTURE",
        "clue": "Toplumun asırlar boyu biriktirdiği sanat ve ahlak mirası",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CONCEPT",
        "clue": "Zihinde şekillenen soyut fikir veya temel kavram",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LATEST",
        "clue": "Zaman olarak en yeni ve güncel olan",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RUNNER",
        "clue": "Hedeften sapmadan koşan atlet / öncü",
        "row": 0,
        "col": 5,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NATIONS",
        "clue": "Dünya sahnesindeki egemen toplumlar (Uluslar)",
        "row": 2,
        "col": 0,
        "length": 7
      }
    ]
  }
];

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
