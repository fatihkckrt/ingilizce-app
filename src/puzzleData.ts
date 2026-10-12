// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App

export interface WordSense {
  pos: string; // 'i.', 'f.', 's.', 'zf.', 'zm.', 'e.', 'b.'
  posName: string; // 'İsim', 'Fiil', 'Sıfat', etc.
  meaning: string;
}

export interface PuzzleClue {
  id: string; // e.g., '1-across', '2-down'
  number: number;
  direction: 'across' | 'down';
  word: string; // UPPERCASE
  clue: string; // Turkish dictionary entry
  senses: WordSense[];
  partOfSpeech: string; // 'i.', 'f.', 's.', 'zf.', 'zm.', 'e.', 'b.'
  partOfSpeechName: string; // 'İsim', 'Fiil', 'Sıfat'
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
        "clue": "(i.) ev, yuva, konut, yurt  •  (zf.) eve, evde  •  (s.) evdeki, iç saha",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ev, yuva, konut, yurt"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "eve, evde"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "evdeki, iç saha"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HAT",
        "clue": "(i.) şapka, başlık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şapka, başlık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "APPLE",
        "clue": "(i.) elma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "elma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 1,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "TEN",
        "clue": "(s.) on  •  (i.) on sayısı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "on"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "on sayısı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "OPEN",
        "clue": "(s.) açık, engelsiz; samimi  •  (f.) açmak, açılmak, başlatmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "açık, engelsiz; samimi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "açmak, açılmak, başlatmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 1,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "EGG",
        "clue": "(i.) yumurta  •  (f.) kışkırtmak, teşvik etmek (egg on)",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yumurta"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kışkırtmak, teşvik etmek (egg on)"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) balık  •  (f.) balık tutmak, avlamak; aramak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "balık"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "balık tutmak, avlamak; aramak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FARM",
        "clue": "(i.) çiftlik  •  (f.) çiftçilik yapmak, ekip biçmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çiftlik"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "çiftçilik yapmak, ekip biçmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SHIP",
        "clue": "(i.) gemi  •  (f.) sevk etmek, göndermek, nakletmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gemi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sevk etmek, göndermek, nakletmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "RAIN",
        "clue": "(i.) yağmur  •  (f.) yağmur yağmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağmur"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yağmur yağmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "MAP",
        "clue": "(i.) harita  •  (f.) haritasını çıkarmak, planlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "harita"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "haritasını çıkarmak, planlamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(s.) mavi renkli; kederli, hüzünlü  •  (i.) mavi renk, gökyüzü mavisi",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "mavi renkli; kederli, hüzünlü"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mavi renk, gökyüzü mavisi"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BOOK",
        "clue": "(i.) kitap  •  (f.) ayırtmak, rezervasyon yaptırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kitap"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ayırtmak, rezervasyon yaptırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "USER",
        "clue": "(i.) kullanıcı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kullanıcı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "OPEN",
        "clue": "(s.) açık, engelsiz; samimi  •  (f.) açmak, açılmak, başlatmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "açık, engelsiz; samimi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "açmak, açılmak, başlatmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEW",
        "clue": "(s.) yeni, taze, henüz çıkmış",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "yeni, taze, henüz çıkmış"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
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
        "clue": "(i.) okul, mektep; ekol; balık sürüsü  •  (f.) eğitmek, yetiştirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okul, mektep; ekol; balık sürüsü"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "eğitmek, yetiştirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SMILE",
        "clue": "(f.) gülümsemek, tebessüm etmek  •  (i.) tebessüm, gülümseme",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "gülümsemek, tebessüm etmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tebessüm, gülümseme"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OPEN",
        "clue": "(s.) açık, engelsiz; samimi  •  (f.) açmak, açılmak, başlatmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "açık, engelsiz; samimi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "açmak, açılmak, başlatmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "LIGHT",
        "clue": "(i.) ışık, aydınlık  •  (s.) hafif; açık renkli  •  (f.) yakmak, aydınlatmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ışık, aydınlık"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hafif; açık renkli"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yakmak, aydınlatmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ICE",
        "clue": "(i.) buz; dondurma  •  (f.) buzlanmak; buzla kaplamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "buz; dondurma"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "buzlanmak; buzla kaplamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LION",
        "clue": "(i.) aslan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aslan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "EASY",
        "clue": "(s.) kolay, zahmetsiz, rahat, uysal  •  (zf.) yavaşça, sakince",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "kolay, zahmetsiz, rahat, uysal"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "yavaşça, sakince"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
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
        "clue": "(i.) ekmek; geçim, nafaka",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekmek; geçim, nafaka"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BANANA",
        "clue": "(i.) muz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "muz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EGG",
        "clue": "(i.) yumurta  •  (f.) kışkırtmak, teşvik etmek (egg on)",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yumurta"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kışkırtmak, teşvik etmek (egg on)"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DATE",
        "clue": "(i.) tarih; randevu, buluşma; hurma  •  (f.) flört etmek, çıkmak; tarih atmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tarih; randevu, buluşma; hurma"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "flört etmek, çıkmak; tarih atmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NIGHT",
        "clue": "(i.) gece",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gece"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "NEW",
        "clue": "(s.) yeni, taze, henüz çıkmış",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "yeni, taze, henüz çıkmış"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
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
        "clue": "(i.) çiftçi, tarımcı, köylü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çiftçi, tarımcı, köylü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FOREST",
        "clue": "(i.) orman",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "orman"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EARTH",
        "clue": "(i.) dünya, yeryüzü; toprak; topraklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dünya, yeryüzü; toprak; topraklama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "RIVER",
        "clue": "(i.) nehir, ırmak, akarsu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nehir, ırmak, akarsu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "SUN",
        "clue": "(i.) güneş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güneş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TEA",
        "clue": "(i.) çay içeceği; ikindi çayı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çay içeceği; ikindi çayı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) anne, valide  •  (f.) annelik etmek, büyütmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "anne, valide"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "annelik etmek, büyütmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MORNING",
        "clue": "(i.) sabah, sabah vakti",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabah, sabah vakti"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "HOME",
        "clue": "(i.) ev, yuva, konut, yurt  •  (zf.) eve, evde  •  (s.) evdeki, iç saha",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ev, yuva, konut, yurt"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "eve, evde"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "evdeki, iç saha"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ROOM",
        "clue": "(i.) oda; yer, boşluk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oda; yer, boşluk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ICE",
        "clue": "(i.) buz; dondurma  •  (f.) buzlanmak; buzla kaplamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "buz; dondurma"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "buzlanmak; buzla kaplamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "GARDEN",
        "clue": "(i.) bahçe  •  (f.) bahçe işleriyle uğraşmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bahçe işleriyle uğraşmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) plan, tasarı, çizim  •  (f.) planlamak, tasarlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "plan, tasarı, çizim"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "planlamak, tasarlamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PARK",
        "clue": "(i.) park, yeşil alan  •  (f.) araba park etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "park, yeşil alan"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "araba park etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "AWAY",
        "clue": "(zf.) uzakta, uzağa, dışarıda  •  (s.) deplasmanda",
        "senses": [
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "uzakta, uzağa, dışarıda"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "deplasmanda"
          }
        ],
        "partOfSpeech": "zf.",
        "partOfSpeechName": "Zarf",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ROAD",
        "clue": "(i.) yol, kara yolu, güzergah",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yol, kara yolu, güzergah"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "KEY",
        "clue": "(i.) anahtar; klavye tuşu; kilit unsur  •  (s.) kilit, can alıcı, başlıca  •  (f.) tuşlamak, veri girmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "anahtar; klavye tuşu; kilit unsur"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "kilit, can alıcı, başlıca"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "tuşlamak, veri girmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(f.) yüzmek  •  (i.) yüzüş, yüzme",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yüzmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yüzüş, yüzme"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SALT",
        "clue": "(i.) tuz  •  (f.) tuzlamak  •  (s.) tuzlu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tuz"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "tuzlamak"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "tuzlu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "WHAT",
        "clue": "(zm.) ne, hangi şey  •  (s.) hangi, ne tür",
        "senses": [
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "ne, hangi şey"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hangi, ne tür"
          }
        ],
        "partOfSpeech": "zm.",
        "partOfSpeechName": "Zamir",
        "row": 0,
        "col": 1,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "MEET",
        "clue": "(f.) buluşmak, tanışmak; karşılamak  •  (i.) karşılaşma, spor müsabakası",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "buluşmak, tanışmak; karşılamak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karşılaşma, spor müsabakası"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LAKE",
        "clue": "(i.) göl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "göl"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) maliyet, fiyat, masraf  •  (f.) mal olmak, değerinde olmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "maliyet, fiyat, masraf"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "mal olmak, değerinde olmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COIN",
        "clue": "(i.) madeni para, bozukluk  •  (f.) yeni terim türetmek; para basmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "madeni para, bozukluk"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yeni terim türetmek; para basmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SHOP",
        "clue": "(i.) dükkan, mağaza; atölye  •  (f.) alışveriş yapmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dükkan, mağaza; atölye"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "alışveriş yapmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TINY",
        "clue": "(s.) küçücük, minik, ufak tefek",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "küçücük, minik, ufak tefek"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "IRON",
        "clue": "(i.) demir madeni; ütü  •  (f.) ütülemek  •  (s.) demirden, çok sert, katı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "demir madeni; ütü"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ütülemek"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "demirden, çok sert, katı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) pilot, uçak kaptanı; kılavuz kaptan  •  (s.) deneme niteliğinde (pilot uygulama)  •  (f.) pilotluk etmek, yönlendirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pilot, uçak kaptanı; kılavuz kaptan"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "deneme niteliğinde (pilot uygulama)"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "pilotluk etmek, yönlendirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PHONE",
        "clue": "(i.) telefon  •  (f.) telefon etmek, aramak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "telefon"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "telefon etmek, aramak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ONION",
        "clue": "(i.) soğan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "OFFICE",
        "clue": "(i.) ofis, büro, makam",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ofis, büro, makam"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "EARN",
        "clue": "(f.) para kazanmak; hak etmek, layık olmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "para kazanmak; hak etmek, layık olmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
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
        "clue": "(f.) uyumak  •  (i.) uyku",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "uyumak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uyku"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SMILE",
        "clue": "(f.) gülümsemek, tebessüm etmek  •  (i.) tebessüm, gülümseme",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "gülümsemek, tebessüm etmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tebessüm, gülümseme"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "PAIN",
        "clue": "(i.) ağrı, sızı, keder, acı  •  (f.) acı vermek, üzmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ağrı, sızı, keder, acı"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "acı vermek, üzmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ILL",
        "clue": "(s.) hasta, rahatsız; kötü, fena  •  (zf.) kötü biçimde, güçlükle",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hasta, rahatsız; kötü, fena"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "kötü biçimde, güçlükle"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 3
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LEMON",
        "clue": "(i.) limon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "limon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EYE",
        "clue": "(i.) göz; görme duyusu; bakış  •  (f.) göz dikmek, süzmek, dikkatle bakmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "göz; görme duyusu; bakış"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "göz dikmek, süzmek, dikkatle bakmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) müze",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "müze"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MODERN",
        "clue": "(s.) modern, çağdaş, yeni tarz",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "modern, çağdaş, yeni tarz"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SHIP",
        "clue": "(i.) gemi  •  (f.) sevk etmek, göndermek, nakletmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gemi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sevk etmek, göndermek, nakletmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "DRIVE",
        "clue": "(f.) araba sürmek, kullanmak; yöneltmek  •  (i.) sürüş, gezinti; heves, dürtü; sürücü",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "araba sürmek, kullanmak; yöneltmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sürüş, gezinti; heves, dürtü; sürücü"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EARTH",
        "clue": "(i.) dünya, yeryüzü; toprak; topraklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dünya, yeryüzü; toprak; topraklama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 4,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ROAD",
        "clue": "(i.) yol, kara yolu, güzergah",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yol, kara yolu, güzergah"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) tenis oyunu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tenis oyunu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TRAVEL",
        "clue": "(f.) seyahat etmek, gezmek, yolculuk etmek  •  (i.) seyahat, yolculuk, gezi",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "seyahat etmek, gezmek, yolculuk etmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seyahat, yolculuk, gezi"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NORTH",
        "clue": "(i.) kuzey yönü  •  (s.) kuzeydeki, kuzey  •  (zf.) kuzeye doğru",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kuzey yönü"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "kuzeydeki, kuzey"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "kuzeye doğru"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "AWARD",
        "clue": "(i.) ödül, mükafat  •  (f.) ödüllendirmek, layık görmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ödül, mükafat"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ödüllendirmek, layık görmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "EACH",
        "clue": "(zm.) her biri, teker teker  •  (s.) her, her bir",
        "senses": [
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "her biri, teker teker"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "her, her bir"
          }
        ],
        "partOfSpeech": "zm.",
        "partOfSpeechName": "Zamir",
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
        "clue": "(i.) odak noktası, ilgi merkezi  •  (f.) odaklanmak, odaklamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "odak noktası, ilgi merkezi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "odaklanmak, odaklamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACT",
        "clue": "(i.) gerçek, hakikat, somut olgu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek, hakikat, somut olgu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CLEAN",
        "clue": "(s.) temiz, pak, arı, saf  •  (f.) temizlemek, arındırmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "temiz, pak, arı, saf"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "temizlemek, arındırmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SORRY",
        "clue": "(s.) üzgün, pişman; affedersiniz",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "üzgün, pişman; affedersiniz"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "CLEAR",
        "clue": "(s.) berrak, açık, net, belirgin  •  (f.) temizlemek, açmak, aklamak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "berrak, açık, net, belirgin"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "temizlemek, açmak, aklamak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 5
      }
    ]
  },
  {
    "id": "b1-5x5-2",
    "title": "Girişim & Hedefler",
    "level": "B1",
    "size": 5,
    "description": "Alışkanlık edinme, umut, ana hedef ve toplam başarı.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HABIT",
        "clue": "(i.) alışkanlık, huy, itiyat",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alışkanlık, huy, itiyat"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HOPE",
        "clue": "(i.) umut, ümit  •  (f.) ummak, ümit etmek, beklemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "umut, ümit"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ummak, ümit etmek, beklemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "BRING",
        "clue": "(f.) getirmek, neden olmak, kazandırmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "getirmek, neden olmak, kazandırmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TOTAL",
        "clue": "(s.) toplam, bütün, eksiksiz  •  (i.) toplam tutar, genel yekun  •  (f.) toplamak, yekun tutmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "toplam, bütün, eksiksiz"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "toplam tutar, genel yekun"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "toplamak, yekun tutmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "POINT",
        "clue": "(i.) nokta; puan; uç; konu, ana fikir  •  (f.) işaret etmek, göstermek, doğrultmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nokta; puan; uç; konu, ana fikir"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "işaret etmek, göstermek, doğrultmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(s.) akıllı, zeki, şık",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "akıllı, zeki, şık"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SKILL",
        "clue": "(i.) beceri, maharet, uzmanlık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "beceri, maharet, uzmanlık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "AHEAD",
        "clue": "(zf.) ileride, önde, önceden  •  (e.) önünde, karşısında",
        "senses": [
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "ileride, önde, önceden"
          },
          {
            "pos": "e.",
            "posName": "Edat",
            "meaning": "önünde, karşısında"
          }
        ],
        "partOfSpeech": "zf.",
        "partOfSpeechName": "Zarf",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TASKS",
        "clue": "(i.) görevler, işler, vazifeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görevler, işler, vazifeler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "IDEAS",
        "clue": "(i.) fikirler, düşünceler, tasarılar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fikirler, düşünceler, tasarılar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(s.) kamusal, halka açık, genel  •  (i.) halk, kamu, ahali",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "kamusal, halka açık, genel"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "halk, kamu, ahali"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PEOPLE",
        "clue": "(i.) insanlar, kişiler, halk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "insanlar, kişiler, halk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "BELIEF",
        "clue": "(i.) inanç, inanış, güven",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "inanç, inanış, güven"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CHECKS",
        "clue": "(i.) kontroller, denetimler; banka çekleri  •  (f.) kontrol etmek, denetlemek, durdurmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kontroller, denetimler; banka çekleri"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kontrol etmek, denetlemek, durdurmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ONLINE",
        "clue": "(s.) çevrim içi, internete bağlı  •  (zf.) internetten, çevrim içi olarak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "çevrim içi, internete bağlı"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "internetten, çevrim içi olarak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
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
        "clue": "(i.) enerji, güç, derman, canlılık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "enerji, güç, derman, canlılık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "EARTH",
        "clue": "(i.) dünya, yeryüzü; toprak; topraklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dünya, yeryüzü; toprak; topraklama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ELDER",
        "clue": "(s.) yaşça büyük, kıdemli  •  (i.) aile büyüğü, ihtiyar",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "yaşça büyük, kıdemli"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aile büyüğü, ihtiyar"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "REUSE",
        "clue": "(f.) yeniden kullanmak  •  (i.) yeniden kullanım",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yeniden kullanmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yeniden kullanım"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 3,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "REDUCE",
        "clue": "(f.) azaltmak, indirmek, düşürmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "azaltmak, indirmek, düşürmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
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
        "clue": "(i.) bilim, fen, ilim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilim, fen, ilim"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "STUDENT",
        "clue": "(i.) öğrenci, talebe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğrenci, talebe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "INITIAL",
        "clue": "(s.) ilk, baştaki, başlangıçtaki  •  (i.) adın baş harfi  •  (f.) paraf atmak, baş harflerini yazmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "ilk, baştaki, başlangıçtaki"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "adın baş harfi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "paraf atmak, baş harflerini yazmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CHEMIST",
        "clue": "(i.) eczacı, kimyager",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eczacı, kimyager"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "UNIQUE",
        "clue": "(s.) benzersiz, eşsiz, tek, özgün",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "benzersiz, eşsiz, tek, özgün"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
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
        "clue": "(i.) proje, tasarı, girişim  •  (f.) yansıtmak; öngörmek; tasarlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "proje, tasarı, girişim"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yansıtmak; öngörmek; tasarlamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PARTNER",
        "clue": "(i.) ortak, eş, arkadaş, partner  •  (f.) ortaklık kurmak, eşleşmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortak, eş, arkadaş, partner"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ortaklık kurmak, eşleşmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OBSERVE",
        "clue": "(f.) gözlemlemek, incelemek; uymak (kurala)",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "gözlemlemek, incelemek; uymak (kurala)"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "RESULT",
        "clue": "(i.) sonuç, netice, akıbet  •  (f.) sonuçlanmak, -den kaynaklanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonuç, netice, akıbet"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sonuçlanmak, -den kaynaklanmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) mantık, muhakeme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mantık, muhakeme"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "LEARN",
        "clue": "(f.) öğrenmek, bilgi edinmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "öğrenmek, bilgi edinmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GRACE",
        "clue": "(i.) zarafet, incelik, lütuf, merhamet  •  (f.) şereflendirmek, güzelleştirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zarafet, incelik, lütuf, merhamet"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "şereflendirmek, güzelleştirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CLEAR",
        "clue": "(s.) berrak, açık, net, belirgin  •  (f.) temizlemek, açmak, aklamak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "berrak, açık, net, belirgin"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "temizlemek, açmak, aklamak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AWARE",
        "clue": "(s.) farkında, haberdar, bilinçli",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "farkında, haberdar, bilinçli"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
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
        "clue": "(i.) kapsam, faaliyet alanı; görüş alanı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapsam, faaliyet alanı; görüş alanı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SCALE",
        "clue": "(i.) ölçek; terazi, tartı; balık pulu  •  (f.) tırmanmak; ölçeklendirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ölçek; terazi, tartı; balık pulu"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "tırmanmak; ölçeklendirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ORDER",
        "clue": "(i.) sipariş; emir, buyruk; düzen, sıra  •  (f.) sipariş etmek; emretmek; düzenlemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sipariş; emir, buyruk; düzen, sıra"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sipariş etmek; emretmek; düzenlemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ENTER",
        "clue": "(f.) içeri girmek; katılmak; veri girmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "içeri girmek; katılmak; veri girmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AUDIT",
        "clue": "(i.) denetim, teftiş, hesap incelemesi  •  (f.) denetlemek, teftiş etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "denetim, teftiş, hesap incelemesi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "denetlemek, teftiş etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) güven, inanç, itimat; vakıf  •  (f.) güvenmek, itimat etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güven, inanç, itimat; vakıf"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "güvenmek, itimat etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TREND",
        "clue": "(i.) eğilim, yönelim, akım, trend  •  (f.) eğilim göstermek, trend olmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğilim, yönelim, akım, trend"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "eğilim göstermek, trend olmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "USERS",
        "clue": "(i.) kullanıcılar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kullanıcılar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TOTAL",
        "clue": "(s.) toplam, bütün, eksiksiz  •  (i.) toplam tutar, genel yekun  •  (f.) toplamak, yekun tutmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "toplam, bütün, eksiksiz"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "toplam tutar, genel yekun"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "toplamak, yekun tutmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 5
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "EVENT",
        "clue": "(i.) olay, etkinlik, hadise, müsabaka",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olay, etkinlik, hadise, müsabaka"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) etki, tesir; çarpma, vuruş  •  (f.) etkilemek; çarpmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "etki, tesir; çarpma, vuruş"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "etkilemek; çarpmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INVEST",
        "clue": "(f.) yatırım yapmak; emek/zaman ayırmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yatırım yapmak; emek/zaman ayırmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "POLICY",
        "clue": "(i.) politika, ilke, strateji; poliçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "politika, ilke, strateji; poliçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CLEVER",
        "clue": "(s.) akıllı, zeki, kurnaz, becerikli",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "akıllı, zeki, kurnaz, becerikli"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "VALUES",
        "clue": "(i.) değerler, kıymetler, ahlaki ilkeler  •  (f.) değer vermek, kıymet biçmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "değerler, kıymetler, ahlaki ilkeler"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "değer vermek, kıymet biçmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) sebep, neden; akıl, mantık  •  (f.) akıl yürütmek, mantık kurmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sebep, neden; akıl, mantık"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "akıl yürütmek, mantık kurmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REMIND",
        "clue": "(f.) hatırlatmak, anımsatmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "hatırlatmak, anımsatmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ACTION",
        "clue": "(i.) eylem, hareket, aksiyon  •  (f.) harekete geçirmek, işleme koymak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eylem, hareket, aksiyon"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "harekete geçirmek, işleme koymak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SCHOOL",
        "clue": "(i.) okul, mektep; ekol; balık sürüsü  •  (f.) eğitmek, yetiştirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okul, mektep; ekol; balık sürüsü"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "eğitmek, yetiştirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "METHOD",
        "clue": "(i.) yöntem, metot, usul, yol",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yöntem, metot, usul, yol"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) iklim, hava şartları, genel ortam",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iklim, hava şartları, genel ortam"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CAPITAL",
        "clue": "(i.) başkent; sermaye, anapara; büyük harf  •  (s.) başlıca, temel, büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "başkent; sermaye, anapara; büyük harf"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "başlıca, temel, büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "IRONIC",
        "clue": "(s.) alaylı, kinayeli, ironik",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "alaylı, kinayeli, ironik"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ABILITY",
        "clue": "(i.) yetenek, kabiliyet, beceri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yetenek, kabiliyet, beceri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "PROFILE",
        "clue": "(i.) profil, tanıtım, yan görünüş  •  (f.) profilini çıkarmak, tanıtmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "profil, tanıtım, yan görünüş"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "profilini çıkarmak, tanıtmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
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
        "clue": "(i.) kültür, ekin; tarım  •  (f.) kültüre almak, yetiştirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kültür, ekin; tarım"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kültüre almak, yetiştirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CONCEPT",
        "clue": "(i.) kavram, fikir, genel anlayış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kavram, fikir, genel anlayış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LATEST",
        "clue": "(s.) en son, en yeni, son çıkan  •  (zf.) en geç",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "en son, en yeni, son çıkan"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "en geç"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RUNNER",
        "clue": "(i.) koşucu; masa örtüsü (runner)",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşucu; masa örtüsü (runner)"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NATIONS",
        "clue": "(i.) uluslar, milletler, devletler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uluslar, milletler, devletler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      }
    ]
  },
  {
    "id": "a1-5x5-4",
    "title": "Masa & Okuma",
    "level": "A1",
    "size": 5,
    "description": "Çalışma masası, kitaplar, anlaşma ve dinlenme parkı.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DEAL",
        "clue": "(i.) anlaşma, uzlaşma, pazarlık  •  (f.) ilgilenmek, dağıtmak, ticaret yapmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "anlaşma, uzlaşma, pazarlık"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ilgilenmek, dağıtmak, ticaret yapmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DIP",
        "clue": "(f.) batırmak, daldırmak  •  (i.) düşüş, sos",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "batırmak, daldırmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşüş, sos"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "PARK",
        "clue": "(i.) park, yeşil alan  •  (f.) araba park etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "park, yeşil alan"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "araba park etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ERA",
        "clue": "(i.) çağ, devir, dönem",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çağ, devir, dönem"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LIKE",
        "clue": "(f.) beğenmek, hoşlanmak  •  (e.) gibi, benzer",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beğenmek, hoşlanmak"
          },
          {
            "pos": "e.",
            "posName": "Edat",
            "meaning": "gibi, benzer"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 3,
        "length": 4
      }
    ]
  },
  {
    "id": "a1-5x5-5",
    "title": "Şehir & Zaman",
    "level": "A1",
    "size": 5,
    "description": "Evcil hayvan kedi, araba, oda, geçmiş zaman ve sayılar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) Evcil sevimli kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Evcil sevimli kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CAR",
        "clue": "(i.) Ulaşımda kullanılan otomobil veya araba",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Ulaşımda kullanılan otomobil veya araba"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "ROOM",
        "clue": "(i.) oda; yer, boşluk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oda; yer, boşluk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "AGO",
        "clue": "(i.) Önce, geçmişte kalan zaman dilimi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Önce, geçmişte kalan zaman dilimi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "TWO",
        "clue": "(i.) Birden sonra gelen çift sayı (2)",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Birden sonra gelen çift sayı (2)"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      }
    ]
  },
  {
    "id": "a1-6x6-3",
    "title": "Gökyüzü & Ağaçlar",
    "level": "A1",
    "size": 6,
    "description": "Ağaç, gece parlayan ay, ev çatısı ve zaman kavramı.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TREE",
        "clue": "(i.) ağaç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ağaç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TIME",
        "clue": "(i.) Geçen saatler, vakit veya zaman",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Geçen saatler, vakit veya zaman"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "MOON",
        "clue": "(i.) ay",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ay"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ROOF",
        "clue": "(i.) çatı, tavan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çatı, tavan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EGO",
        "clue": "(i.) Benlik, gurur veya kişinin kendi bilinci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Benlik, gurur veya kişinin kendi bilinci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      }
    ]
  },
  {
    "id": "a1-6x6-4",
    "title": "Kış & Sanat",
    "level": "A1",
    "size": 6,
    "description": "Kışın yağan kar, parlayan yıldız, kuzey yönü ve sanat.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SNOW",
        "clue": "(i.) kar  •  (f.) kar yağmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kar"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kar yağmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "STAR",
        "clue": "(i.) yıldız  •  (f.) başrolde oynamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yıldız"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "başrolde oynamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "ART",
        "clue": "(i.) Resim, heykel ve yaratıcı güzel sanatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Resim, heykel ve yaratıcı güzel sanatlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "NORTH",
        "clue": "(i.) kuzey yönü  •  (s.) kuzeydeki, kuzey  •  (zf.) kuzeye doğru",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kuzey yönü"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "kuzeydeki, kuzey"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "kuzeye doğru"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "OUT",
        "clue": "(i.) Dışarı, hariç veya dışarıda",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Dışarı, hariç veya dışarıda"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      }
    ]
  },
  {
    "id": "a1-7x7-3",
    "title": "Gündüz & Gece Işığı",
    "level": "A1",
    "size": 7,
    "description": "Güneş ışığı, gece karanlığı, eylem, öğrenme ve sayılar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "LIGHT",
        "clue": "(i.) ışık, aydınlık  •  (s.) hafif; açık renkli  •  (f.) yakmak, aydınlatmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ışık, aydınlık"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hafif; açık renkli"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yakmak, aydınlatmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "LEARN",
        "clue": "(f.) öğrenmek, bilgi edinmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "öğrenmek, bilgi edinmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "ACTION",
        "clue": "(i.) eylem, hareket, aksiyon  •  (f.) harekete geçirmek, işleme koymak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eylem, hareket, aksiyon"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "harekete geçirmek, işleme koymak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "NIGHT",
        "clue": "(i.) gece",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gece"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GET",
        "clue": "(i.) Elde etmek, almak veya varmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Elde etmek, almak veya varmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TWO",
        "clue": "(i.) Birden sonraki çift sayı (2)",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Birden sonraki çift sayı (2)"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      }
    ]
  },
  {
    "id": "a2-5x5-4",
    "title": "Gezi & Seyahat Turu",
    "level": "A2",
    "size": 5,
    "description": "Tur, seyahat, bir kere deneyimleme ve buz.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TOUR",
        "clue": "(i.) tur, gezi  •  (f.) turlamak, gezmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tur, gezi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "turlamak, gezmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TRIP",
        "clue": "(i.) gezi, seyahat, yolculuk  •  (f.) tökezlemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezi, seyahat, yolculuk"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "tökezlemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "ICE",
        "clue": "(i.) buz; dondurma  •  (f.) buzlanmak; buzla kaplamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "buz; dondurma"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "buzlanmak; buzla kaplamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ONCE",
        "clue": "(i.) Bir zamanlar veya bir kere",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Bir zamanlar veya bir kere"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "USE",
        "clue": "(i.) Kullanmak, faydalanmak veya yararlanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kullanmak, faydalanmak veya yararlanmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      }
    ]
  },
  {
    "id": "a2-5x5-5",
    "title": "Otel Odası & Dinlenme",
    "level": "A2",
    "size": 5,
    "description": "Dinlenme, otel odası, sipariş vermek ve kulak.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REST",
        "clue": "(f.) dinlenmek, mola vermek  •  (i.) dinlenme, istirahat; geri kalan",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "dinlenmek, mola vermek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinlenme, istirahat; geri kalan"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ROOM",
        "clue": "(i.) oda; yer, boşluk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oda; yer, boşluk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "ORDER",
        "clue": "(i.) sipariş; emir, buyruk; düzen, sıra  •  (f.) sipariş etmek; emretmek; düzenlemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sipariş; emir, buyruk; düzen, sıra"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sipariş etmek; emretmek; düzenlemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EAR",
        "clue": "(i.) Sesleri duymaya yarayan kulak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Sesleri duymaya yarayan kulak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAD",
        "clue": "(i.) Hüzünlü, üzgün veya kederli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Hüzünlü, üzgün veya kederli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TIE",
        "clue": "(i.) Kravat veya bağlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kravat veya bağlamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "a2-6x6-3",
    "title": "Şifa & Bakım",
    "level": "A2",
    "size": 6,
    "description": "Özenle bakım gösterme, tedavi, oda ve beslenme.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CARE",
        "clue": "(f.) önemsemek, ilgilenmek  •  (i.) bakım, özen, dikkat",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "önemsemek, ilgilenmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakım, özen, dikkat"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CURE",
        "clue": "(i.) Hastalığı iyileştirmek, şifa veya tedavi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Hastalığı iyileştirmek, şifa veya tedavi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "ROOT",
        "clue": "(i.) Bitkinin topraktaki kökü veya köken",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Bitkinin topraktaki kökü veya köken"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "AGO",
        "clue": "(i.) Geçmişte veya önce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Geçmişte veya önce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ROOM",
        "clue": "(i.) oda; yer, boşluk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oda; yer, boşluk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "EAT",
        "clue": "(i.) Yemek yemek veya beslenmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Yemek yemek veya beslenmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "a2-6x6-4",
    "title": "Haber & Basın Medyası",
    "level": "A2",
    "size": 6,
    "description": "Güncel haberler, geniş medya organları, isim ve bakış.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "NEWS",
        "clue": "(i.) haberler, havadis",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "haberler, havadis"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "NAME",
        "clue": "(i.) Kişi veya kuruma verilen isim, ad",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kişi veya kuruma verilen isim, ad"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "MEDIA",
        "clue": "(i.) medya, basın-yayın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "medya, basın-yayın"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EYE",
        "clue": "(i.) göz; görme duyusu; bakış  •  (f.) göz dikmek, süzmek, dikkatle bakmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "göz; görme duyusu; bakış"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "göz dikmek, süzmek, dikkatle bakmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "WIDE",
        "clue": "(i.) Geniş, kapsamlı veya ferah",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Geniş, kapsamlı veya ferah"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SKI",
        "clue": "(i.) Karda yapılan kış sporu kayağı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Karda yapılan kış sporu kayağı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "a2-7x7-3",
    "title": "Orman Kampı & Doğa",
    "level": "A2",
    "size": 7,
    "description": "Büyük orman, kamp çadırı, kamp ateşi, gökte yıldızlar ve dinlenme.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FOREST",
        "clue": "(i.) orman",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "orman"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FIRE",
        "clue": "(i.) Isınmak için yakılan kamp ateşi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Isınmak için yakılan kamp ateşi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "REST",
        "clue": "(f.) dinlenmek, mola vermek  •  (i.) dinlenme, istirahat; geri kalan",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "dinlenmek, mola vermek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinlenme, istirahat; geri kalan"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ONE",
        "clue": "(i.) Tek veya bir sayısı (1)",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Tek veya bir sayısı (1)"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "RISE",
        "clue": "(i.) Güneşin doğması veya yükselmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Güneşin doğması veya yükselmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "EAT",
        "clue": "(i.) Kampta lezzetli yemek yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kampta lezzetli yemek yemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      },
      {
        "id": "6-down",
        "number": 6,
        "direction": "down",
        "word": "STAR",
        "clue": "(i.) yıldız  •  (f.) başrolde oynamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yıldız"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "başrolde oynamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 4
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
        "word": "TENT",
        "clue": "(i.) çadır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çadır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      }
    ]
  },
  {
    "id": "b1-5x5-4",
    "title": "Zeka & Yetenek Gelişimi",
    "level": "B1",
    "size": 5,
    "description": "Zeka, kişisel beceri, demir irade ve daha fazlası.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SMART",
        "clue": "(s.) akıllı, zeki, şık",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "akıllı, zeki, şık"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SKILL",
        "clue": "(i.) beceri, maharet, uzmanlık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "beceri, maharet, uzmanlık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "IRON",
        "clue": "(i.) demir madeni; ütü  •  (f.) ütülemek  •  (s.) demirden, çok sert, katı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "demir madeni; ütü"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ütülemek"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "demirden, çok sert, katı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "MORE",
        "clue": "(i.) Daha çok, daha fazla veya ziyade",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Daha çok, daha fazla veya ziyade"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "AGO",
        "clue": "(i.) Geçmişte kalan zaman veya önce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Geçmişte kalan zaman veya önce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "RUN",
        "clue": "(i.) Koşmak, yönetmek veya işletmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Koşmak, yönetmek veya işletmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "b1-5x5-5",
    "title": "Fiyat & Mal Varlığı",
    "level": "B1",
    "size": 5,
    "description": "Ürün fiyatı, ödenmiş bedel, madde ve piyasa kalemi.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PRICE",
        "clue": "(i.) fiyat, bedel, eder  •  (f.) fiyat belirlemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fiyat, bedel, eder"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "fiyat belirlemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PAID",
        "clue": "(i.) Ödemesi yapılmış, tahsil edilmiş borç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Ödemesi yapılmış, tahsil edilmiş borç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) Listelenen madde, mal kalemi veya eşya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Listelenen madde, mal kalemi veya eşya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RAT",
        "clue": "(i.) Kemirgen fare veya deneme hayvanı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kemirgen fare veya deneme hayvanı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ICE",
        "clue": "(i.) buz; dondurma  •  (f.) buzlanmak; buzla kaplamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "buz; dondurma"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "buzlanmak; buzla kaplamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "CAM",
        "clue": "(i.) Kamera veya mekanik mil parçası",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kamera veya mekanik mil parçası"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "b1-6x6-3",
    "title": "Sistem & Denetim",
    "level": "B1",
    "size": 6,
    "description": "Bilişim sistemi, ölçekleme, hesap denetimi ve süreçler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SYSTEM",
        "clue": "(i.) sistem, düzen, mekanizma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sistem, düzen, mekanizma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SCALE",
        "clue": "(i.) ölçek; terazi, tartı; balık pulu  •  (f.) tırmanmak; ölçeklendirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ölçek; terazi, tartı; balık pulu"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "tırmanmak; ölçeklendirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "AUDIT",
        "clue": "(i.) denetim, teftiş, hesap incelemesi  •  (f.) denetlemek, teftiş etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "denetim, teftiş, hesap incelemesi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "denetlemek, teftiş etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAD",
        "clue": "(i.) Üzüntülü veya kederli durum",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Üzüntülü veya kederli durum"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "TRIP",
        "clue": "(i.) gezi, seyahat, yolculuk  •  (f.) tökezlemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezi, seyahat, yolculuk"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "tökezlemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "EAT",
        "clue": "(i.) Tüketmek veya beslenmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Tüketmek veya beslenmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      }
    ]
  },
  {
    "id": "b1-6x6-4",
    "title": "Zanaat & Dünya Mirası",
    "level": "B1",
    "size": 6,
    "description": "El sanatı, zanaat, yerküre ve berrak zihin.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CRAFT",
        "clue": "(i.) zanaat, el sanatı, beceri; taşıt  •  (f.) özenle yapmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zanaat, el sanatı, beceri; taşıt"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "özenle yapmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CLEAR",
        "clue": "(s.) berrak, açık, net, belirgin  •  (f.) temizlemek, açmak, aklamak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "berrak, açık, net, belirgin"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "temizlemek, açmak, aklamak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "EARTH",
        "clue": "(i.) dünya, yeryüzü; toprak; topraklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dünya, yeryüzü; toprak; topraklama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "READ",
        "clue": "(i.) Kitap veya metin okuyarak anlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kitap veya metin okuyarak anlamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "AIR",
        "clue": "(i.) hava, atmosfer  •  (f.) havalandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hava, atmosfer"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "havalandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "FAT",
        "clue": "(i.) Şişman, dolgun veya vücut yağı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Şişman, dolgun veya vücut yağı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "b1-7x7-3",
    "title": "Liderlik & Çalışma",
    "level": "B1",
    "size": 7,
    "description": "Vizyoner lider, emek, kısa brifing ve dönüm ekseni.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "LEADER",
        "clue": "(i.) lider, önder, rehber",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lider, önder, rehber"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "LABOR",
        "clue": "(i.) Zihinsel veya bedensel emek, iş gücü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Zihinsel veya bedensel emek, iş gücü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "BRIEF",
        "clue": "(i.) Kısa, öz ve net bilgilendirme toplantısı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kısa, öz ve net bilgilendirme toplantısı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EAR",
        "clue": "(i.) Dinleme ve algı organı kulak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Dinleme ve algı organı kulak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "AXIS",
        "clue": "(i.) Dönme ekseni, mihver veya ana hat",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Dönme ekseni, mihver veya ana hat"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "DIE",
        "clue": "(i.) Zar veya sona ermek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Zar veya sona ermek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      },
      {
        "id": "6-down",
        "number": 6,
        "direction": "down",
        "word": "ELF",
        "clue": "(i.) Mitolojik peri veya minik varlık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Mitolojik peri veya minik varlık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      }
    ]
  },
  {
    "id": "b2-5x5-4",
    "title": "Ahlak & Hakkaniyet",
    "level": "B2",
    "size": 5,
    "description": "Ahlaki erdem, liyakat, adil haklar ve fikir beyanı.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MORAL",
        "clue": "(s.) ahlaki, manevi  •  (i.) çıkarılan ders, ana fikir",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "ahlaki, manevi"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çıkarılan ders, ana fikir"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MERIT",
        "clue": "(i.) Liyakat, hak edilen değer ve üstün başarı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Liyakat, hak edilen değer ve üstün başarı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "RIGHT",
        "clue": "(s.) doğru, haklı, sağ  •  (i.) hak, hukuk; sağ taraf  •  (zf.) hemen, tam olarak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "doğru, haklı, sağ"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hak, hukuk; sağ taraf"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "hemen, tam olarak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "OPINE",
        "clue": "(i.) Fikir beyan etmek, görüş bildirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Fikir beyan etmek, görüş bildirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "RUG",
        "clue": "(i.) Küçük halı, kilim veya örtü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Küçük halı, kilim veya örtü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "LOT",
        "clue": "(i.) Pay, hisse, nasip veya çokluk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Pay, hisse, nasip veya çokluk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      }
    ]
  },
  {
    "id": "b2-5x5-5",
    "title": "Kökenler & Menzil",
    "level": "B2",
    "size": 5,
    "description": "Kültürel kökler, menzil, maden cevheri ve ifade gücü.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ROOTS",
        "clue": "(i.) kökler, köken, asıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kökler, köken, asıl"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "RANGE",
        "clue": "(i.) Menzil, etki alanı veya çeşitlilik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Menzil, etki alanı veya çeşitlilik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "NEEDY",
        "clue": "(i.) Muhtaç, yoksul veya desteğe ihtiyaç duyan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Muhtaç, yoksul veya desteğe ihtiyaç duyan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ONE",
        "clue": "(i.) Birlik veya tek olan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Birlik veya tek olan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ORE",
        "clue": "(i.) Maden cevheri veya saf mineral",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Maden cevheri veya saf mineral"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TAD",
        "clue": "(i.) Bir parça, azıcık veya hafifçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Bir parça, azıcık veya hafifçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      },
      {
        "id": "6-down",
        "number": 6,
        "direction": "down",
        "word": "SAY",
        "clue": "(i.) Söylemek, fikir beyan etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Söylemek, fikir beyan etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      }
    ]
  },
  {
    "id": "b2-6x6-3",
    "title": "Kuram & Bilimsel Dizin",
    "level": "B2",
    "size": 6,
    "description": "Bilimsel teori, deneysel yargılama, dizin ve sonuç.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "THEORY",
        "clue": "(i.) teori, kuram",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teori, kuram"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TRIAL",
        "clue": "(i.) duruşma, mahkeme; deneme, sınav  •  (f.) denemek, test etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "duruşma, mahkeme; deneme, sınav"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "denemek, test etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "INDEX",
        "clue": "(i.) Dizin, gösterge veya referans endeksi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Dizin, gösterge veya referans endeksi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "HEN",
        "clue": "(i.) Dişi kümes kuşu, tavuk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Dişi kümes kuşu, tavuk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "END",
        "clue": "(i.) son, uç, bitiş  •  (f.) bitirmek, sona ermek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "son, uç, bitiş"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bitirmek, sona ermek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "ONE",
        "clue": "(i.) Teklik, birlik veya bütünlük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Teklik, birlik veya bütünlük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "b2-6x6-4",
    "title": "Barış & İktidar Gücü",
    "level": "B2",
    "size": 6,
    "description": "Küresel barış, kudretli güç, değer ve denge.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PEACE",
        "clue": "(i.) barış, huzur, sükunet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "barış, huzur, sükunet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "POWER",
        "clue": "(i.) güç, kudret, iktidar, enerji  •  (f.) güç vermek, çalıştırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güç, kudret, iktidar, enerji"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "güç vermek, çalıştırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "WORTH",
        "clue": "(i.) Kıymet, paha veya manevi değer",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kıymet, paha veya manevi değer"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EGO",
        "clue": "(i.) Bireysel benlik veya gurur",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Bireysel benlik veya gurur"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "AIR",
        "clue": "(i.) hava, atmosfer  •  (f.) havalandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hava, atmosfer"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "havalandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "CAT",
        "clue": "(i.) Uysal evcil kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Uysal evcil kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      }
    ]
  },
  {
    "id": "b2-7x7-3",
    "title": "Hukuk & Adli Karar",
    "level": "B2",
    "size": 7,
    "description": "Yüksek adalet, hakim yargısı, resmi kararname ve hakkaniyet.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "JUSTICE",
        "clue": "(i.) adalet, hakkaniyet, yargı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "adalet, hakkaniyet, yargı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "JUDGE",
        "clue": "(i.) yargıç, hakim  •  (f.) yargılamak, hüküm vermek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yargıç, hakim"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yargılamak, hüküm vermek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 5
      },
      {
        "id": "2-across",
        "number": 2,
        "direction": "across",
        "word": "DECREE",
        "clue": "(i.) Resmi mahkeme kararı, ferman veya emir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Resmi mahkeme kararı, ferman veya emir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "USE",
        "clue": "(i.) Yasal yetkiyi yerinde kullanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Yasal yetkiyi yerinde kullanmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 1,
        "length": 3
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SIC",
        "clue": "(i.) Metindeki aynen alıntı ibaresi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Metindeki aynen alıntı ibaresi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TAR",
        "clue": "(i.) Katran veya asfalt kaplama maddesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Katran veya asfalt kaplama maddesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 3
      },
      {
        "id": "6-down",
        "number": 6,
        "direction": "down",
        "word": "ICE",
        "clue": "(i.) buz; dondurma  •  (f.) buzlanmak; buzla kaplamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "buz; dondurma"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "buzlanmak; buzla kaplamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
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

export function getPosBadgeClasses(pos: string): { bg: string; text: string; border: string; label: string; fullName: string } {
  const normalized = (pos || '').toLowerCase().trim().replace(/[().]/g, '');
  switch (normalized) {
    case 'i':
    case 'isim':
      return { 
        bg: 'bg-blue-500/10 dark:bg-blue-400/15', 
        text: 'text-blue-700 dark:text-blue-300 font-black', 
        border: 'border-blue-300/80 dark:border-blue-600/70', 
        label: 'i.',
        fullName: 'İsim'
      };
    case 'f':
    case 'fiil':
      return { 
        bg: 'bg-emerald-500/10 dark:bg-emerald-400/15', 
        text: 'text-emerald-700 dark:text-emerald-300 font-black', 
        border: 'border-emerald-300/80 dark:border-emerald-600/70', 
        label: 'f.',
        fullName: 'Fiil'
      };
    case 's':
    case 'sifat':
    case 'sıfat':
      return { 
        bg: 'bg-amber-500/10 dark:bg-amber-400/15', 
        text: 'text-amber-800 dark:text-amber-300 font-black', 
        border: 'border-amber-300/80 dark:border-amber-600/70', 
        label: 's.',
        fullName: 'Sıfat'
      };
    case 'zf':
    case 'zarf':
      return { 
        bg: 'bg-indigo-500/10 dark:bg-indigo-400/15', 
        text: 'text-indigo-700 dark:text-indigo-300 font-black', 
        border: 'border-indigo-300/80 dark:border-indigo-600/70', 
        label: 'zf.',
        fullName: 'Zarf'
      };
    case 'zm':
    case 'zamir':
      return { 
        bg: 'bg-purple-500/10 dark:bg-purple-400/15', 
        text: 'text-purple-700 dark:text-purple-300 font-black', 
        border: 'border-purple-300/80 dark:border-purple-600/70', 
        label: 'zm.',
        fullName: 'Zamir'
      };
    case 'e':
    case 'edat':
      return { 
        bg: 'bg-rose-500/10 dark:bg-rose-400/15', 
        text: 'text-rose-700 dark:text-rose-300 font-black', 
        border: 'border-rose-300/80 dark:border-rose-600/70', 
        label: 'e.',
        fullName: 'Edat'
      };
    case 'b':
    case 'baglac':
    case 'bağlaç':
      return { 
        bg: 'bg-teal-500/10 dark:bg-teal-400/15', 
        text: 'text-teal-700 dark:text-teal-300 font-black', 
        border: 'border-teal-300/80 dark:border-teal-600/70', 
        label: 'b.',
        fullName: 'Bağlaç'
      };
    default:
      return { 
        bg: 'bg-slate-100 dark:bg-slate-800', 
        text: 'text-slate-700 dark:text-slate-300 font-bold', 
        border: 'border-slate-300 dark:border-slate-700', 
        label: pos || 'kelime',
        fullName: 'Kelime'
      };
  }
}
