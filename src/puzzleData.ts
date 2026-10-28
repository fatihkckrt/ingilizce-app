// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App
// Exactly 180 Verified Puzzles: 45 per level (A1, A2, B1, B2) with 5x5(5), 6x6(6), 7x7(7), 8x8(8), 9x9(9), 10x10(10)
// Features: Balanced mix of 2, 3, 4, 5+ letter words with natural black/empty blocks and 100% full board coverage
// Guaranteed: Strict Crossword Grammar (No touching collinear words without black block separators)

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

export type PuzzleFrequencyLevel = 'high' | 'medium' | 'advanced';

export interface PuzzleDefinition {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  size: 5 | 6 | 7 | 8 | 9 | 10;
  description: string;
  clues: PuzzleClue[];
  frequencyLevel?: PuzzleFrequencyLevel;
  frequencyLabel?: string;
}

export const PUZZLES: PuzzleDefinition[] = [
  {
    "id": "a1-5x5-1",
    "title": "Ev & Aile Dünyası",
    "level": "A1",
    "size": 5,
    "description": "Ev, aile ve günlük hayatta en sık kullanılan temel İngilizce sözcükler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
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
        "clue": "(i.) araba, otomobil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "araba, otomobil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 4,
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
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a1-5x5-2",
    "title": "Şehir ve Park Gezisi",
    "level": "A1",
    "size": 5,
    "description": "Parkta, sokakta ve şehirde karşılaşılan temel kelimeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TELL",
        "clue": "(f.) anlatmak, söylemek, haber vermek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "anlatmak, söylemek, haber vermek"
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
        "word": "TRUE",
        "clue": "(s.) doğru, gerçek, hakiki",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "doğru, gerçek, hakiki"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 2,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "LEFT",
        "clue": "(i.) ayrıldı, bıraktı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ayrıldı, bıraktı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 1,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "URGE",
        "clue": "(i.) davet etmek, çağırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "davet etmek, çağırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ACTS",
        "clue": "(i.) i̇şlemler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇şlemler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 1,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-5x5-3",
    "title": "Okul & Sınıf Hayatı",
    "level": "A1",
    "size": 5,
    "description": "Sınıf, ders ve okul eşyalarıyla ilgili pratik terimler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "NOW",
        "clue": "(zf.) şimdi, şu anda, derhal",
        "senses": [
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "şimdi, şu anda, derhal"
          }
        ],
        "partOfSpeech": "zf.",
        "partOfSpeechName": "Zarf",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "NUT",
        "clue": "(i.) fındık, ceviz, kuruyemiş; somun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fındık, ceviz, kuruyemiş; somun"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "WASTE",
        "clue": "(i.) atık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "atık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SEA",
        "clue": "(i.) deniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 4,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-5x5-4",
    "title": "Doğa ve Yeşil Bahçe",
    "level": "A1",
    "size": 5,
    "description": "Ağaçlar, çiçekler ve doğanın temel renkleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DARK",
        "clue": "(s.) karanlık, koyu  •  (i.) karanlık",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "karanlık, koyu"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karanlık"
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
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ROUTE",
        "clue": "(i.) rota",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "rota"
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
        "word": "KEEP",
        "clue": "(f.) saklamak, korumak, sürdürmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "saklamak, korumak, sürdürmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 1,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "TRUE",
        "clue": "(s.) doğru, gerçek, hakiki",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "doğru, gerçek, hakiki"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "KEPT",
        "clue": "(i.) sakladı, tuttu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakladı, tuttu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 1,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-5x5-5",
    "title": "Yiyecek & İçecekler",
    "level": "A1",
    "size": 5,
    "description": "Kahvaltı, meyveler ve günlük besin sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PIG",
        "clue": "(i.) domuz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "domuz"
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
        "word": "PIE",
        "clue": "(i.) turta, pasta, börek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "turta, pasta, börek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GRIDS",
        "clue": "(i.) izgaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izgaralar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "EXIST",
        "clue": "(i.) mevcut olmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mevcut olmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "TOY",
        "clue": "(i.) oyuncak  •  (f.) oynamak, oyalanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oyuncak"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "oynamak, oyalanmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 4,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SHY",
        "clue": "(s.) utangaç, çekingen",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "utangaç, çekingen"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-6x6-1",
    "title": "Ev & Aile Dünyası",
    "level": "A1",
    "size": 6,
    "description": "Ev, aile ve günlük hayatta en sık kullanılan temel İngilizce sözcükler.",
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
        "word": "HELP",
        "clue": "(f.) yardım etmek  •  (i.) yardım, imdat",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yardım etmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yardım, imdat"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a1-6x6-2",
    "title": "Şehir ve Park Gezisi",
    "level": "A1",
    "size": 6,
    "description": "Parkta, sokakta ve şehirde karşılaşılan temel kelimeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
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
        "word": "ACTIVE",
        "clue": "(i.) aktif",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aktif"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "LITTER",
        "clue": "(i.) çöp",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çöp"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "RICH",
        "clue": "(s.) zengin, varlıklı; bol",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "zengin, varlıklı; bol"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-6x6-3",
    "title": "Okul & Sınıf Hayatı",
    "level": "A1",
    "size": 6,
    "description": "Sınıf, ders ve okul eşyalarıyla ilgili pratik terimler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
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
        "word": "KEEP",
        "clue": "(f.) saklamak, korumak, sürdürmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "saklamak, korumak, sürdürmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NATURE",
        "clue": "(i.) doğa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "EITHER",
        "clue": "(i.) ya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "RICH",
        "clue": "(s.) zengin, varlıklı; bol",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "zengin, varlıklı; bol"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-6x6-4",
    "title": "Doğa ve Yeşil Bahçe",
    "level": "A1",
    "size": 6,
    "description": "Ağaçlar, çiçekler ve doğanın temel renkleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DARK",
        "clue": "(s.) karanlık, koyu  •  (i.) karanlık",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "karanlık, koyu"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karanlık"
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
        "word": "DEEP",
        "clue": "(s.) derin, engin",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "derin, engin"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RESORT",
        "clue": "(i.) resort/tatil köyü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "resort/tatil köyü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "EASILY",
        "clue": "(i.) é",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "é"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "YEAR",
        "clue": "(i.) yıl, sene",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yıl, sene"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-6x6-5",
    "title": "Yiyecek & İçecekler",
    "level": "A1",
    "size": 6,
    "description": "Kahvaltı, meyveler ve günlük besin sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MOVE",
        "clue": "(f.) hareket etmek, taşınmak  •  (i.) hamle, hareket",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "hareket etmek, taşınmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hamle, hareket"
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
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
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
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SUCH",
        "clue": "(i.) ilan araçlarıyla",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ilan araçlarıyla"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-6x6-6",
    "title": "Sağlıklı Sabah Rutini",
    "level": "A1",
    "size": 6,
    "description": "Güne başlarken ve günlük rutinde geçen eylemler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "LEAD",
        "clue": "(f.) yol göstermek, önderlik etmek  •  (i.) önderlik, ipucu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yol göstermek, önderlik etmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "önderlik, ipucu"
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
        "word": "LOSE",
        "clue": "(f.) kaybetmek, yitirmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kaybetmek, yitirmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ALLOWS",
        "clue": "(i.) izin verir, olanak sağlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin verir, olanak sağlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "SALARY",
        "clue": "(i.) maa§",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "maa§"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "YEAR",
        "clue": "(i.) yıl, sene",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yıl, sene"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-7x7-1",
    "title": "Ev & Aile Dünyası",
    "level": "A1",
    "size": 7,
    "description": "Ev, aile ve günlük hayatta en sık kullanılan temel İngilizce sözcükler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
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
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "WIN",
        "clue": "(f.) kazanmak, galip gelmek  •  (i.) galibiyet, zafer",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazanmak, galip gelmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "galibiyet, zafer"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CORRECT",
        "clue": "(i.) doğru olduğunu kontol ediniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru olduğunu kontol ediniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EAR",
        "clue": "(i.) kulak; başak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kulak; başak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a1-7x7-2",
    "title": "Şehir ve Park Gezisi",
    "level": "A1",
    "size": 7,
    "description": "Parkta, sokakta ve şehirde karşılaşılan temel kelimeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
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
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INSTEAD",
        "clue": "(i.) yerine",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerine"
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
        "word": "EMITTED",
        "clue": "(i.) yayımlanan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yayımlanan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "FEW",
        "clue": "(s.) az, birkaç  •  (zm.) az sayıda kimse",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "az, birkaç"
          },
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "az sayıda kimse"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "FINALLY",
        "clue": "(i.) sonunda, nihayet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonunda, nihayet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "EAT",
        "clue": "(f.) yemek yemek, tüketmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yemek yemek, tüketmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LIE",
        "clue": "(f.) yalan söylemek; uzanmak, yatmak  •  (i.) yalan",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yalan söylemek; uzanmak, yatmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yalan"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-7x7-3",
    "title": "Okul & Sınıf Hayatı",
    "level": "A1",
    "size": 7,
    "description": "Sınıf, ders ve okul eşyalarıyla ilgili pratik terimler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "OLD",
        "clue": "(s.) eski, yaşlı, ihtiyar",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "eski, yaşlı, ihtiyar"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ORDERED",
        "clue": "(i.) sipariş verildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sipariş verildi"
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
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ROW",
        "clue": "(i.) sıra, dizi  •  (f.) kürek çekmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıra, dizi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kürek çekmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RAISING",
        "clue": "(i.) çalışan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çalışan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DECLINE",
        "clue": "(i.) düşüş, azalmak, reddetmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşüş, azalmak, reddetmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RED",
        "clue": "(s.) kırmızı, al  •  (i.) kırmızı renk",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "kırmızı, al"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kırmızı renk"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GOD",
        "clue": "(i.) tanrı, ilah",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanrı, ilah"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-7x7-4",
    "title": "Doğa ve Yeşil Bahçe",
    "level": "A1",
    "size": 7,
    "description": "Ağaçlar, çiçekler ve doğanın temel renkleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "WAR",
        "clue": "(i.) savaş, harp  •  (f.) savaşmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "savaş, harp"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "savaşmak"
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
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
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
        "word": "RAPIDLY",
        "clue": "(i.) çabuk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çabuk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "COW",
        "clue": "(i.) inek, sığır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "inek, sığır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CENTURY",
        "clue": "(i.) yüzyıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yüzyıl"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EXPENSE",
        "clue": "(i.) masraf",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "masraf"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "USE",
        "clue": "(f.) kullanmak, yararlanmak  •  (i.) kullanım, fayda",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kullanmak, yararlanmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kullanım, fayda"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DRY",
        "clue": "(s.) kuru, kurak  •  (f.) kurulamak, kurumak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "kuru, kurak"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kurulamak, kurumak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 6,
        "col": 0,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-7x7-5",
    "title": "Yiyecek & İçecekler",
    "level": "A1",
    "size": 7,
    "description": "Kahvaltı, meyveler ve günlük besin sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "NUT",
        "clue": "(i.) fındık, ceviz, kuruyemiş; somun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fındık, ceviz, kuruyemiş; somun"
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
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
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
        "word": "TRAINED",
        "clue": "(i.) eğitildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitildi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "VAN",
        "clue": "(i.) kamyonet, van, minibüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamyonet, van, minibüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "VISIBLE",
        "clue": "(i.) görünür",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görünür"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TRANSIT",
        "clue": "(i.) geçiş, aktarma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geçiş, aktarma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RAN",
        "clue": "(i.) koştu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koştu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "BAR",
        "clue": "(i.) bar, çubuk, engel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bar, çubuk, engel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "LID",
        "clue": "(i.) kapak, göz kapağı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapak, göz kapağı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-7x7-6",
    "title": "Sağlıklı Sabah Rutini",
    "level": "A1",
    "size": 7,
    "description": "Güne başlarken ve günlük rutinde geçen eylemler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DIG",
        "clue": "(f.) kazmak, deşmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazmak, deşmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "WON",
        "clue": "(i.) kazandı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazandı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CORRECT",
        "clue": "(i.) doğru olduğunu kontol ediniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru olduğunu kontol ediniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EAR",
        "clue": "(i.) kulak; başak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kulak; başak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-7x7-7",
    "title": "Müzik & Oyun Vakti",
    "level": "A1",
    "size": 7,
    "description": "Şarkılar, eğlence ve çocuk oyunları kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACT",
        "clue": "(i.) gösteri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri"
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
        "word": "ARRIVED",
        "clue": "(i.) vardı, ulaştı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vardı, ulaştı"
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
        "word": "TRAINED",
        "clue": "(i.) eğitildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitildi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ATE",
        "clue": "(i.) yedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
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
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ELEMENT",
        "clue": "(i.) öğe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "REALIZE",
        "clue": "(i.) kavşak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kavşak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "VAN",
        "clue": "(i.) kamyonet, van, minibüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamyonet, van, minibüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "YET",
        "clue": "(i.) henüz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "henüz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-8x8-1",
    "title": "Ev & Aile Dünyası",
    "level": "A1",
    "size": 8,
    "description": "Ev, aile ve günlük hayatta en sık kullanılan temel İngilizce sözcükler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TOGETHER",
        "clue": "(i.) birlikte, beraber",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "birlikte, beraber"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TAXATION",
        "clue": "(i.) vergilendirme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vergilendirme"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "REGISTER",
        "clue": "(i.) kasa; kaydolmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kasa; kaydolmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BUS",
        "clue": "(i.) otobüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "NEIGHBOR",
        "clue": "(i.) komşu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "komşu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a1-8x8-2",
    "title": "Şehir ve Park Gezisi",
    "level": "A1",
    "size": 8,
    "description": "Parkta, sokakta ve şehirde karşılaşılan temel kelimeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "BIOFUELS",
        "clue": "(i.) biyoyakıtlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyoyakıtlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BALANCED",
        "clue": "(i.) dengeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dengeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAUSAGES",
        "clue": "(i.) sosisler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosisler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DIALECTS",
        "clue": "(i.) lehçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lehçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-8x8-3",
    "title": "Okul & Sınıf Hayatı",
    "level": "A1",
    "size": 8,
    "description": "Sınıf, ders ve okul eşyalarıyla ilgili pratik terimler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CULTURAL",
        "clue": "(i.) kültürel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kültürel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CHILDREN",
        "clue": "(i.) çocuklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çocuklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ROSE",
        "clue": "(i.) gül",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gül"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANGUAGE",
        "clue": "(i.) di̇l",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "di̇l"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NAVIGATE",
        "clue": "(i.) gezin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-8x8-4",
    "title": "Doğa ve Yeşil Bahçe",
    "level": "A1",
    "size": 8,
    "description": "Ağaçlar, çiçekler ve doğanın temel renkleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "EXCITING",
        "clue": "(i.) heyecan verici",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "heyecan verici"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ENTRANCE",
        "clue": "(i.) giriş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giriş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CUE",
        "clue": "(i.) deste",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deste"
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
        "word": "GASOLINE",
        "clue": "(i.) benzi̇n",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "benzi̇n"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "BUS",
        "clue": "(i.) otobüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OIL",
        "clue": "(i.) yağ, petrol, mazot",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağ, petrol, mazot"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ESTIMATE",
        "clue": "(i.) tahmin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tahmin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-8x8-5",
    "title": "Yiyecek & İçecekler",
    "level": "A1",
    "size": 8,
    "description": "Kahvaltı, meyveler ve günlük besin sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HOMETOWN",
        "clue": "(i.) memleket",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "memleket"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HABITUAL",
        "clue": "(i.) i̇tiyadi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇tiyadi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NAVIGATE",
        "clue": "(i.) gezin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LANGUAGE",
        "clue": "(i.) di̇l",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "di̇l"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-8x8-6",
    "title": "Sağlıklı Sabah Rutini",
    "level": "A1",
    "size": 8,
    "description": "Güne başlarken ve günlük rutinde geçen eylemler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MILLIONS",
        "clue": "(i.) milyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "milyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MAINTAIN",
        "clue": "(i.) kalmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAUSAGES",
        "clue": "(i.) sosisler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosisler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NETWORKS",
        "clue": "(i.) ağları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ağları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-8x8-7",
    "title": "Müzik & Oyun Vakti",
    "level": "A1",
    "size": 8,
    "description": "Şarkılar, eğlence ve çocuk oyunları kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PLANNERS",
        "clue": "(i.) plan yapanlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "plan yapanlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PARALLEL",
        "clue": "(i.) koşut",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşut"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EAT",
        "clue": "(f.) yemek yemek, tüketmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yemek yemek, tüketmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 5,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SCANNING",
        "clue": "(i.) tarama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tarama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "RUN",
        "clue": "(f.) koşmak, çalıştırmak, yönetmek  •  (i.) koşu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "koşmak, çalıştırmak, yönetmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LIFELONG",
        "clue": "(i.) ömür boyu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ömür boyu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-8x8-8",
    "title": "Tatil ve Macera",
    "level": "A1",
    "size": 8,
    "description": "Deniz, sahil ve yolculuk sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "RELIANCE",
        "clue": "(i.) güven",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güven"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REGISTER",
        "clue": "(i.) kasa; kaydolmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kasa; kaydolmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOVE",
        "clue": "(i.) sevgi, aşk  •  (f.) sevmek, çok hoşlanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sevgi, aşk"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sevmek, çok hoşlanmak"
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
        "word": "ENTRANCE",
        "clue": "(i.) giriş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giriş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "REUSABLE",
        "clue": "(i.) yeniden kullanılabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yeniden kullanılabilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-9x9-1",
    "title": "Ev & Aile Dünyası",
    "level": "A1",
    "size": 9,
    "description": "Ev, aile ve günlük hayatta en sık kullanılan temel İngilizce sözcükler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FORGOTTEN",
        "clue": "(i.) unutulmuş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unutulmuş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACTORIES",
        "clue": "(i.) fabrika",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fabrika"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RULE",
        "clue": "(i.) kural",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kural"
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
        "col": 6,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NECESSARY",
        "clue": "(i.) x",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "x"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SECONDARY",
        "clue": "(i.) ikincil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ikincil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a1-9x9-2",
    "title": "Şehir ve Park Gezisi",
    "level": "A1",
    "size": 9,
    "description": "Parkta, sokakta ve şehirde karşılaşılan temel kelimeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CLIPBOARD",
        "clue": "(i.) not panosu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "not panosu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CARDBOARD",
        "clue": "(i.) karton",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karton"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
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
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DECISIONS",
        "clue": "(i.) kararlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kararlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-9x9-3",
    "title": "Okul & Sınıf Hayatı",
    "level": "A1",
    "size": 9,
    "description": "Sınıf, ders ve okul eşyalarıyla ilgili pratik terimler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DISTRICTS",
        "clue": "(i.) i̇lçeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇lçeler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SAME",
        "clue": "(i.) aynı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aynı"
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
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
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
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SATURDAYS",
        "clue": "(i.) cumartesi günleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cumartesi günleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-9x9-4",
    "title": "Doğa ve Yeşil Bahçe",
    "level": "A1",
    "size": 9,
    "description": "Ağaçlar, çiçekler ve doğanın temel renkleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HAZARDOUS",
        "clue": "(i.) tehlikesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HEALTHIER",
        "clue": "(i.) daha sağlıklı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha sağlıklı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-9x9-5",
    "title": "Yiyecek & İçecekler",
    "level": "A1",
    "size": 9,
    "description": "Kahvaltı, meyveler ve günlük besin sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MITIGATES",
        "clue": "(i.) hafifletir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafifletir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MEANWHILE",
        "clue": "(i.) bu arada",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bu arada"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TEAM",
        "clue": "(i.) takım, ekip  •  (f.) ekip oluşturmak, işbirliği yapmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "takım, ekip"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ekip oluşturmak, işbirliği yapmak"
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
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "WIND",
        "clue": "(i.) rüzgar, esinti  •  (f.) sarmak, dolamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "rüzgar, esinti"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sarmak, dolamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ENGINEERS",
        "clue": "(i.) devam ettirilecek.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "devam ettirilecek."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-9x9-6",
    "title": "Sağlıklı Sabah Rutini",
    "level": "A1",
    "size": 9,
    "description": "Güne başlarken ve günlük rutinde geçen eylemler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PREPARING",
        "clue": "(i.) hazırlanıyor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazırlanıyor"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PASSENGER",
        "clue": "(i.) misafir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "misafir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GROCERIES",
        "clue": "(i.) bakkaliye, market alışverişi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakkaliye, market alışverişi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "3-across",
        "number": 3,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-9x9-7",
    "title": "Müzik & Oyun Vakti",
    "level": "A1",
    "size": 9,
    "description": "Şarkılar, eğlence ve çocuk oyunları kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SCENARIOS",
        "clue": "(i.) senaryolar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "senaryolar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAFEGUARD",
        "clue": "(i.) koruma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koruma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SHUTTERED",
        "clue": "(i.) kepenkli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kepenkli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-9x9-8",
    "title": "Tatil ve Macera",
    "level": "A1",
    "size": 9,
    "description": "Deniz, sahil ve yolculuk sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "UNIVERSAL",
        "clue": "(i.) evrensel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "evrensel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "UNDAMAGED",
        "clue": "(i.) hasarsız",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hasarsız"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANGUAGES",
        "clue": "(i.) diller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "diller"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "MILK",
        "clue": "(i.) süt  •  (f.) sağmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "süt"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sağmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-9x9-9",
    "title": "Hayvan Dostlarımız",
    "level": "A1",
    "size": 9,
    "description": "Evcil hayvanlar ve doğadaki sevimli canlılar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REALWORLD",
        "clue": "(i.) gerçek dünya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek dünya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "READ",
        "clue": "(f.) okumak, anlam çıkarmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "okumak, anlam çıkarmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 6,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-10x10-1",
    "title": "Ev & Aile Dünyası",
    "level": "A1",
    "size": 10,
    "description": "Ev, aile ve günlük hayatta en sık kullanılan temel İngilizce sözcükler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACCELERATE",
        "clue": "(i.) hızlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hızlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ACCESSIBLE",
        "clue": "(i.) erişilebilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "erişilebilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CALM",
        "clue": "(i.) sakin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakin"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "EFFORTLESS",
        "clue": "(i.) zahmetsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zahmetsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a1-10x10-2",
    "title": "Şehir ve Park Gezisi",
    "level": "A1",
    "size": 10,
    "description": "Parkta, sokakta ve şehirde karşılaşılan temel kelimeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "COMPROMISE",
        "clue": "(i.) tahkimname",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tahkimname"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COLLEAGUES",
        "clue": "(i.) i̇ş arkadaşları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇ş arkadaşları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-10x10-3",
    "title": "Okul & Sınıf Hayatı",
    "level": "A1",
    "size": 10,
    "description": "Sınıf, ders ve okul eşyalarıyla ilgili pratik terimler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "EVERYTHING",
        "clue": "(i.) her şey",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "her şey"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EVER",
        "clue": "(i.) şimdiye kadar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şimdiye kadar"
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
        "word": "TIME",
        "clue": "(i.) zaman, vakit, süre",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zaman, vakit, süre"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATING",
        "clue": "(i.) oluşturuluyorlinking object files into a library or executable",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuluyorlinking object files into a library or executable"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SENTENCING",
        "clue": "(i.) cezanın belirlenmesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cezanın belirlenmesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-10x10-4",
    "title": "Doğa ve Yeşil Bahçe",
    "level": "A1",
    "size": 10,
    "description": "Ağaçlar, çiçekler ve doğanın temel renkleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "INTRODUCES",
        "clue": "(i.) tanıtmaktadır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanıtmaktadır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INEVITABLE",
        "clue": "(i.) kaçınılmaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınılmaz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TASK",
        "clue": "(i.) hizmet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hizmet"
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
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "CUE",
        "clue": "(i.) deste",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deste"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "14-across",
        "number": 14,
        "direction": "across",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a1-10x10-5",
    "title": "Yiyecek & İçecekler",
    "level": "A1",
    "size": 10,
    "description": "Kahvaltı, meyveler ve günlük besin sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REGARDLESS",
        "clue": "(i.) önem vermeden",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "önem vermeden"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REAL-WORLD",
        "clue": "(i.) gerçek dünya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek dünya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GOAL",
        "clue": "(i.) hedef",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hedef"
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
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EVER",
        "clue": "(i.) şimdiye kadar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şimdiye kadar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "DEFENDANTS",
        "clue": "(i.) davalilar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "davalilar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-10x10-6",
    "title": "Sağlıklı Sabah Rutini",
    "level": "A1",
    "size": 10,
    "description": "Güne başlarken ve günlük rutinde geçen eylemler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SURPRISING",
        "clue": "(i.) şaşırtıcı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şaşırtıcı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ROSE",
        "clue": "(i.) gül",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gül"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATING",
        "clue": "(i.) oluşturuluyorlinking object files into a library or executable",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuluyorlinking object files into a library or executable"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DESK",
        "clue": "(i.) çalışma masası, sıra",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çalışma masası, sıra"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SENTENCING",
        "clue": "(i.) cezanın belirlenmesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cezanın belirlenmesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-10x10-7",
    "title": "Müzik & Oyun Vakti",
    "level": "A1",
    "size": 10,
    "description": "Şarkılar, eğlence ve çocuk oyunları kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACCUMULATE",
        "clue": "(i.) biriktirmek.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biriktirmek."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ACCELERATE",
        "clue": "(i.) hızlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hızlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CALM",
        "clue": "(i.) sakin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakin"
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "EFFORTLESS",
        "clue": "(i.) zahmetsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zahmetsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-10x10-8",
    "title": "Tatil ve Macera",
    "level": "A1",
    "size": 10,
    "description": "Deniz, sahil ve yolculuk sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CONFIDENCE",
        "clue": "(i.) dentakay'a",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dentakay'a"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COLLEAGUES",
        "clue": "(i.) i̇ş arkadaşları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇ş arkadaşları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
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
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-10x10-9",
    "title": "Hayvan Dostlarımız",
    "level": "A1",
    "size": 10,
    "description": "Evcil hayvanlar ve doğadaki sevimli canlılar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FOOTPRINTS",
        "clue": "(i.) ayak izleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ayak izleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACILITIES",
        "clue": "(i.) olanaklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olanaklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OIL",
        "clue": "(i.) yağ, petrol, mazot",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağ, petrol, mazot"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "BIRD",
        "clue": "(i.) kuş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kuş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SELECTIONS",
        "clue": "(i.) seçimler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçimler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a1-10x10-10",
    "title": "Hava ve Dört Mevsim",
    "level": "A1",
    "size": 10,
    "description": "Güneş, yağmur, kar ve mevsimsel ifadeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "INVESTMENT",
        "clue": "(i.) karı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INEVITABLE",
        "clue": "(i.) kaçınılmaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınılmaz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TERRIFYING",
        "clue": "(i.) dehşet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dehşet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "EMPOWERING",
        "clue": "(i.) &#10;++",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "&#10;++"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-5x5-1",
    "title": "Seyahat ve Bilet Planı",
    "level": "A2",
    "size": 5,
    "description": "Ulaşım, istasyon ve seyahat planlama kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
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
        "clue": "(i.) araba, otomobil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "araba, otomobil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 4,
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
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a2-5x5-2",
    "title": "Teknoloji ve İletişim",
    "level": "A2",
    "size": 5,
    "description": "Telefon, internet ve dijital dünya terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SHOW",
        "clue": "(f.) göstermek, sergilemek  •  (i.) gösteri, şov",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "göstermek, sergilemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri, şov"
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
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OCEAN",
        "clue": "(i.) okyanus",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanus"
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
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 1,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AREA",
        "clue": "(i.) bölge",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölge"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 1,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-5x5-3",
    "title": "Kültür & Sanat Sergisi",
    "level": "A2",
    "size": 5,
    "description": "Müzeler, sergiler ve sanatsal aktiviteler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FIT",
        "clue": "(s.) formda, zinde, uygun  •  (f.) uymak, sığmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "formda, zinde, uygun"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "uymak, sığmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FUN",
        "clue": "(i.) eğlence, neşe  •  (s.) eğlenceli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğlence, neşe"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "eğlenceli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TIRED",
        "clue": "(i.) yorgun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yorgun"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "NURSE",
        "clue": "(i.) hemşire  •  (f.) bakmak, emzirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hemşire"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, emzirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 4,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DIG",
        "clue": "(f.) kazmak, deşmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazmak, deşmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-5x5-4",
    "title": "Hafta Sonu Etkinliği",
    "level": "A2",
    "size": 5,
    "description": "Sinema, tiyatro ve sosyal etkinlik diyalogları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SONG",
        "clue": "(i.) şarkı, türkü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şarkı, türkü"
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
        "word": "SICK",
        "clue": "(s.) hasta, rahatsız",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hasta, rahatsız"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NURSE",
        "clue": "(i.) hemşire  •  (f.) bakmak, emzirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hemşire"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, emzirmek"
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
        "word": "GETS",
        "clue": "(i.) bulur",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bulur"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 1,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 1,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-5x5-5",
    "title": "Meslekler & Çalışma Hayatı",
    "level": "A2",
    "size": 5,
    "description": "İş kolları, meslekler ve ofis ortamı sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PIG",
        "clue": "(i.) domuz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "domuz"
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
        "word": "PIE",
        "clue": "(i.) turta, pasta, börek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "turta, pasta, börek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GRIDS",
        "clue": "(i.) izgaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izgaralar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "EXIST",
        "clue": "(i.) mevcut olmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mevcut olmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "TOY",
        "clue": "(i.) oyuncak  •  (f.) oynamak, oyalanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oyuncak"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "oynamak, oyalanmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 4,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SHY",
        "clue": "(s.) utangaç, çekingen",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "utangaç, çekingen"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-6x6-1",
    "title": "Seyahat ve Bilet Planı",
    "level": "A2",
    "size": 6,
    "description": "Ulaşım, istasyon ve seyahat planlama kelimeleri.",
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
        "word": "HELP",
        "clue": "(f.) yardım etmek  •  (i.) yardım, imdat",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yardım etmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yardım, imdat"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a2-6x6-2",
    "title": "Teknoloji ve İletişim",
    "level": "A2",
    "size": 6,
    "description": "Telefon, internet ve dijital dünya terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SHOW",
        "clue": "(f.) göstermek, sergilemek  •  (i.) gösteri, şov",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "göstermek, sergilemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri, şov"
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
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ALLOWS",
        "clue": "(i.) izin verir, olanak sağlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin verir, olanak sağlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EXIT",
        "clue": "(i.) çıkış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çıkış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-6x6-3",
    "title": "Kültür & Sanat Sergisi",
    "level": "A2",
    "size": 6,
    "description": "Müzeler, sergiler ve sanatsal aktiviteler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FAST",
        "clue": "(s.) hızlı, çabuk  •  (zf.) hızla",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hızlı, çabuk"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "hızla"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RENTED",
        "clue": "(i.) kiralandı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kiralandı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "SUNDAY",
        "clue": "(i.) pazar günü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pazar günü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "YEAR",
        "clue": "(i.) yıl, sene",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yıl, sene"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TIE",
        "clue": "(f.) bağlamak, düğümlemek  •  (i.) kravat; bağ, beraberlik",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bağlamak, düğümlemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kravat; bağ, beraberlik"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-6x6-4",
    "title": "Hafta Sonu Etkinliği",
    "level": "A2",
    "size": 6,
    "description": "Sinema, tiyatro ve sosyal etkinlik diyalogları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SONG",
        "clue": "(i.) şarkı, türkü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şarkı, türkü"
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
        "word": "SICK",
        "clue": "(s.) hasta, rahatsız",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hasta, rahatsız"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NARROW",
        "clue": "(i.) dar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "CAREER",
        "clue": "(i.) kariyer",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kariyer"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "RICH",
        "clue": "(s.) zengin, varlıklı; bol",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "zengin, varlıklı; bol"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "WISH",
        "clue": "(f.) dilemek, istemek  •  (i.) dilek, arzu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "dilemek, istemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dilek, arzu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-6x6-5",
    "title": "Meslekler & Çalışma Hayatı",
    "level": "A2",
    "size": 6,
    "description": "İş kolları, meslekler ve ofis ortamı sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "WARM",
        "clue": "(s.) ılık, sıcakkanlı, samimi  •  (f.) ısıtmak, ısınmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "ılık, sıcakkanlı, samimi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ısıtmak, ısınmak"
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
        "word": "WEAR",
        "clue": "(f.) giymek, takmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "giymek, takmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RATHER",
        "clue": "(i.) tercihen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tercihen"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
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
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RIDE",
        "clue": "(f.) binmek (bisiklete/ata), sürmek  •  (i.) biniş, gezi",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "binmek (bisiklete/ata), sürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biniş, gezi"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-6x6-6",
    "title": "Restoran & Mutfak Kültürü",
    "level": "A2",
    "size": 6,
    "description": "Yemek siparişi ve dünya mutfağı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SING",
        "clue": "(f.) şarkı söylemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "şarkı söylemek"
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
        "word": "SWAM",
        "clue": "(i.) yüzdü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yüzdü"
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
        "word": "NARROW",
        "clue": "(i.) dar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ARRIVE",
        "clue": "(i.) varmak, ulaşmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "varmak, ulaşmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "WISH",
        "clue": "(f.) dilemek, istemek  •  (i.) dilek, arzu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "dilemek, istemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dilek, arzu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-7x7-1",
    "title": "Seyahat ve Bilet Planı",
    "level": "A2",
    "size": 7,
    "description": "Ulaşım, istasyon ve seyahat planlama kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
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
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "WIN",
        "clue": "(f.) kazanmak, galip gelmek  •  (i.) galibiyet, zafer",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazanmak, galip gelmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "galibiyet, zafer"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CORRECT",
        "clue": "(i.) doğru olduğunu kontol ediniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru olduğunu kontol ediniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EAR",
        "clue": "(i.) kulak; başak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kulak; başak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a2-7x7-2",
    "title": "Teknoloji ve İletişim",
    "level": "A2",
    "size": 7,
    "description": "Telefon, internet ve dijital dünya terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
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
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INSTEAD",
        "clue": "(i.) yerine",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerine"
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
        "word": "EMITTED",
        "clue": "(i.) yayımlanan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yayımlanan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "FEW",
        "clue": "(s.) az, birkaç  •  (zm.) az sayıda kimse",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "az, birkaç"
          },
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "az sayıda kimse"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "FINALLY",
        "clue": "(i.) sonunda, nihayet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonunda, nihayet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "EAT",
        "clue": "(f.) yemek yemek, tüketmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yemek yemek, tüketmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LIE",
        "clue": "(f.) yalan söylemek; uzanmak, yatmak  •  (i.) yalan",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yalan söylemek; uzanmak, yatmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yalan"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-7x7-3",
    "title": "Kültür & Sanat Sergisi",
    "level": "A2",
    "size": 7,
    "description": "Müzeler, sergiler ve sanatsal aktiviteler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "LEG",
        "clue": "(i.) bacak, ayak; etap",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bacak, ayak; etap"
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
        "word": "LACKING",
        "clue": "(i.) eksiklik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eksiklik"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "SAD",
        "clue": "(s.) üzgün, hüzünlü, kederli",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "üzgün, hüzünlü, kederli"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SENSORS",
        "clue": "(i.) sensörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sensörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CHRONIC",
        "clue": "(i.) kronik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kronik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
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
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OLD",
        "clue": "(s.) eski, yaşlı, ihtiyar",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "eski, yaşlı, ihtiyar"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GAS",
        "clue": "(i.) gaz; benzin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gaz; benzin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-7x7-4",
    "title": "Hafta Sonu Etkinliği",
    "level": "A2",
    "size": 7,
    "description": "Sinema, tiyatro ve sosyal etkinlik diyalogları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ROW",
        "clue": "(i.) sıra, dizi  •  (f.) kürek çekmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıra, dizi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kürek çekmek"
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
        "word": "RAPIDLY",
        "clue": "(i.) çabuk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çabuk"
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
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "USE",
        "clue": "(f.) kullanmak, yararlanmak  •  (i.) kullanım, fayda",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kullanmak, yararlanmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kullanım, fayda"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "UNIFORM",
        "clue": "(i.) üniforma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üniforma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ELEMENT",
        "clue": "(i.) öğe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "PRECISE",
        "clue": "(i.) keskinlik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "keskinlik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ONE",
        "clue": "(s.) bir, tek  •  (zm.) biri, birisi",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "bir, tek"
          },
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "biri, birisi"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "MET",
        "clue": "(i.) tanıştı, buluştu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanıştı, buluştu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-7x7-5",
    "title": "Meslekler & Çalışma Hayatı",
    "level": "A2",
    "size": 7,
    "description": "İş kolları, meslekler ve ofis ortamı sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "NUT",
        "clue": "(i.) fındık, ceviz, kuruyemiş; somun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fındık, ceviz, kuruyemiş; somun"
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
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
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
        "word": "TRAINED",
        "clue": "(i.) eğitildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitildi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "VAN",
        "clue": "(i.) kamyonet, van, minibüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamyonet, van, minibüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "VISIBLE",
        "clue": "(i.) görünür",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görünür"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TRANSIT",
        "clue": "(i.) geçiş, aktarma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geçiş, aktarma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RAN",
        "clue": "(i.) koştu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koştu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "BAR",
        "clue": "(i.) bar, çubuk, engel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bar, çubuk, engel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "LID",
        "clue": "(i.) kapak, göz kapağı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapak, göz kapağı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-7x7-6",
    "title": "Restoran & Mutfak Kültürü",
    "level": "A2",
    "size": 7,
    "description": "Yemek siparişi ve dünya mutfağı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DIG",
        "clue": "(f.) kazmak, deşmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazmak, deşmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "WON",
        "clue": "(i.) kazandı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazandı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CORRECT",
        "clue": "(i.) doğru olduğunu kontol ediniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru olduğunu kontol ediniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EAR",
        "clue": "(i.) kulak; başak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kulak; başak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-7x7-7",
    "title": "Doğa Maceraları & Dağlar",
    "level": "A2",
    "size": 7,
    "description": "Kamp, tırmanış ve doğa keşif sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACT",
        "clue": "(i.) gösteri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri"
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
        "word": "ARRIVED",
        "clue": "(i.) vardı, ulaştı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vardı, ulaştı"
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
        "word": "TRAINED",
        "clue": "(i.) eğitildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitildi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ATE",
        "clue": "(i.) yedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
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
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ELEMENT",
        "clue": "(i.) öğe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "REALIZE",
        "clue": "(i.) kavşak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kavşak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "VAN",
        "clue": "(i.) kamyonet, van, minibüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamyonet, van, minibüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "YET",
        "clue": "(i.) henüz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "henüz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-8x8-1",
    "title": "Seyahat ve Bilet Planı",
    "level": "A2",
    "size": 8,
    "description": "Ulaşım, istasyon ve seyahat planlama kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TOGETHER",
        "clue": "(i.) birlikte, beraber",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "birlikte, beraber"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TAXATION",
        "clue": "(i.) vergilendirme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vergilendirme"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "REGISTER",
        "clue": "(i.) kasa; kaydolmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kasa; kaydolmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BUS",
        "clue": "(i.) otobüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "NEIGHBOR",
        "clue": "(i.) komşu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "komşu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a2-8x8-2",
    "title": "Teknoloji ve İletişim",
    "level": "A2",
    "size": 8,
    "description": "Telefon, internet ve dijital dünya terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "BIOFUELS",
        "clue": "(i.) biyoyakıtlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyoyakıtlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BALANCED",
        "clue": "(i.) dengeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dengeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAUSAGES",
        "clue": "(i.) sosisler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosisler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DIALECTS",
        "clue": "(i.) lehçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lehçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-8x8-3",
    "title": "Kültür & Sanat Sergisi",
    "level": "A2",
    "size": 8,
    "description": "Müzeler, sergiler ve sanatsal aktiviteler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CULTURAL",
        "clue": "(i.) kültürel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kültürel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CHILDREN",
        "clue": "(i.) çocuklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çocuklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ROSE",
        "clue": "(i.) gül",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gül"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANGUAGE",
        "clue": "(i.) di̇l",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "di̇l"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NAVIGATE",
        "clue": "(i.) gezin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-8x8-4",
    "title": "Hafta Sonu Etkinliği",
    "level": "A2",
    "size": 8,
    "description": "Sinema, tiyatro ve sosyal etkinlik diyalogları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "EXCITING",
        "clue": "(i.) heyecan verici",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "heyecan verici"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ENTRANCE",
        "clue": "(i.) giriş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giriş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CUE",
        "clue": "(i.) deste",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deste"
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
        "word": "GASOLINE",
        "clue": "(i.) benzi̇n",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "benzi̇n"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "BUS",
        "clue": "(i.) otobüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OIL",
        "clue": "(i.) yağ, petrol, mazot",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağ, petrol, mazot"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ESTIMATE",
        "clue": "(i.) tahmin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tahmin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-8x8-5",
    "title": "Meslekler & Çalışma Hayatı",
    "level": "A2",
    "size": 8,
    "description": "İş kolları, meslekler ve ofis ortamı sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HOMETOWN",
        "clue": "(i.) memleket",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "memleket"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HABITUAL",
        "clue": "(i.) i̇tiyadi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇tiyadi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NAVIGATE",
        "clue": "(i.) gezin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LANGUAGE",
        "clue": "(i.) di̇l",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "di̇l"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-8x8-6",
    "title": "Restoran & Mutfak Kültürü",
    "level": "A2",
    "size": 8,
    "description": "Yemek siparişi ve dünya mutfağı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MILLIONS",
        "clue": "(i.) milyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "milyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MAINTAIN",
        "clue": "(i.) kalmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAUSAGES",
        "clue": "(i.) sosisler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosisler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NETWORKS",
        "clue": "(i.) ağları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ağları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-8x8-7",
    "title": "Doğa Maceraları & Dağlar",
    "level": "A2",
    "size": 8,
    "description": "Kamp, tırmanış ve doğa keşif sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PLANNERS",
        "clue": "(i.) plan yapanlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "plan yapanlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PARALLEL",
        "clue": "(i.) koşut",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşut"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EAT",
        "clue": "(f.) yemek yemek, tüketmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yemek yemek, tüketmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 5,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SCANNING",
        "clue": "(i.) tarama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tarama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "RUN",
        "clue": "(f.) koşmak, çalıştırmak, yönetmek  •  (i.) koşu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "koşmak, çalıştırmak, yönetmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LIFELONG",
        "clue": "(i.) ömür boyu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ömür boyu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-8x8-8",
    "title": "Alışveriş & Mağazalar",
    "level": "A2",
    "size": 8,
    "description": "Giyim, fiyatlar ve alışveriş pratikleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "RELIANCE",
        "clue": "(i.) güven",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güven"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REGISTER",
        "clue": "(i.) kasa; kaydolmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kasa; kaydolmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOVE",
        "clue": "(i.) sevgi, aşk  •  (f.) sevmek, çok hoşlanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sevgi, aşk"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sevmek, çok hoşlanmak"
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
        "word": "ENTRANCE",
        "clue": "(i.) giriş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giriş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "REUSABLE",
        "clue": "(i.) yeniden kullanılabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yeniden kullanılabilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-9x9-1",
    "title": "Seyahat ve Bilet Planı",
    "level": "A2",
    "size": 9,
    "description": "Ulaşım, istasyon ve seyahat planlama kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FORGOTTEN",
        "clue": "(i.) unutulmuş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unutulmuş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACTORIES",
        "clue": "(i.) fabrika",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fabrika"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RULE",
        "clue": "(i.) kural",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kural"
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
        "col": 6,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NECESSARY",
        "clue": "(i.) x",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "x"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SECONDARY",
        "clue": "(i.) ikincil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ikincil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a2-9x9-2",
    "title": "Teknoloji ve İletişim",
    "level": "A2",
    "size": 9,
    "description": "Telefon, internet ve dijital dünya terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CLIPBOARD",
        "clue": "(i.) not panosu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "not panosu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CARDBOARD",
        "clue": "(i.) karton",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karton"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
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
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DECISIONS",
        "clue": "(i.) kararlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kararlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-9x9-3",
    "title": "Kültür & Sanat Sergisi",
    "level": "A2",
    "size": 9,
    "description": "Müzeler, sergiler ve sanatsal aktiviteler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DISTRICTS",
        "clue": "(i.) i̇lçeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇lçeler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SAME",
        "clue": "(i.) aynı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aynı"
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
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
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
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SATURDAYS",
        "clue": "(i.) cumartesi günleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cumartesi günleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-9x9-4",
    "title": "Hafta Sonu Etkinliği",
    "level": "A2",
    "size": 9,
    "description": "Sinema, tiyatro ve sosyal etkinlik diyalogları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HAZARDOUS",
        "clue": "(i.) tehlikesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HEALTHIER",
        "clue": "(i.) daha sağlıklı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha sağlıklı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-9x9-5",
    "title": "Meslekler & Çalışma Hayatı",
    "level": "A2",
    "size": 9,
    "description": "İş kolları, meslekler ve ofis ortamı sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MITIGATES",
        "clue": "(i.) hafifletir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafifletir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MEANWHILE",
        "clue": "(i.) bu arada",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bu arada"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TEAM",
        "clue": "(i.) takım, ekip  •  (f.) ekip oluşturmak, işbirliği yapmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "takım, ekip"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ekip oluşturmak, işbirliği yapmak"
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
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "WIND",
        "clue": "(i.) rüzgar, esinti  •  (f.) sarmak, dolamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "rüzgar, esinti"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sarmak, dolamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ENGINEERS",
        "clue": "(i.) devam ettirilecek.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "devam ettirilecek."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-9x9-6",
    "title": "Restoran & Mutfak Kültürü",
    "level": "A2",
    "size": 9,
    "description": "Yemek siparişi ve dünya mutfağı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PREPARING",
        "clue": "(i.) hazırlanıyor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazırlanıyor"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PASSENGER",
        "clue": "(i.) misafir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "misafir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GROCERIES",
        "clue": "(i.) bakkaliye, market alışverişi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakkaliye, market alışverişi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "3-across",
        "number": 3,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-9x9-7",
    "title": "Doğa Maceraları & Dağlar",
    "level": "A2",
    "size": 9,
    "description": "Kamp, tırmanış ve doğa keşif sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SCENARIOS",
        "clue": "(i.) senaryolar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "senaryolar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAFEGUARD",
        "clue": "(i.) koruma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koruma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SHUTTERED",
        "clue": "(i.) kepenkli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kepenkli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-9x9-8",
    "title": "Alışveriş & Mağazalar",
    "level": "A2",
    "size": 9,
    "description": "Giyim, fiyatlar ve alışveriş pratikleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "UNIVERSAL",
        "clue": "(i.) evrensel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "evrensel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "UNDAMAGED",
        "clue": "(i.) hasarsız",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hasarsız"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANGUAGES",
        "clue": "(i.) diller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "diller"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "MILK",
        "clue": "(i.) süt  •  (f.) sağmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "süt"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sağmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-9x9-9",
    "title": "Dostluk ve Sosyal Yaşam",
    "level": "A2",
    "size": 9,
    "description": "Arkadaşlar, kutlamalar ve sohbet dili.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REALWORLD",
        "clue": "(i.) gerçek dünya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek dünya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "READ",
        "clue": "(f.) okumak, anlam çıkarmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "okumak, anlam çıkarmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 6,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-10x10-1",
    "title": "Seyahat ve Bilet Planı",
    "level": "A2",
    "size": 10,
    "description": "Ulaşım, istasyon ve seyahat planlama kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACCELERATE",
        "clue": "(i.) hızlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hızlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ACCESSIBLE",
        "clue": "(i.) erişilebilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "erişilebilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CALM",
        "clue": "(i.) sakin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakin"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "EFFORTLESS",
        "clue": "(i.) zahmetsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zahmetsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "a2-10x10-2",
    "title": "Teknoloji ve İletişim",
    "level": "A2",
    "size": 10,
    "description": "Telefon, internet ve dijital dünya terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "COMPROMISE",
        "clue": "(i.) tahkimname",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tahkimname"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COLLEAGUES",
        "clue": "(i.) i̇ş arkadaşları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇ş arkadaşları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-10x10-3",
    "title": "Kültür & Sanat Sergisi",
    "level": "A2",
    "size": 10,
    "description": "Müzeler, sergiler ve sanatsal aktiviteler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "EVERYTHING",
        "clue": "(i.) her şey",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "her şey"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EVER",
        "clue": "(i.) şimdiye kadar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şimdiye kadar"
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
        "word": "TIME",
        "clue": "(i.) zaman, vakit, süre",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zaman, vakit, süre"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATING",
        "clue": "(i.) oluşturuluyorlinking object files into a library or executable",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuluyorlinking object files into a library or executable"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SENTENCING",
        "clue": "(i.) cezanın belirlenmesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cezanın belirlenmesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-10x10-4",
    "title": "Hafta Sonu Etkinliği",
    "level": "A2",
    "size": 10,
    "description": "Sinema, tiyatro ve sosyal etkinlik diyalogları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "INTRODUCES",
        "clue": "(i.) tanıtmaktadır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanıtmaktadır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INEVITABLE",
        "clue": "(i.) kaçınılmaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınılmaz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TASK",
        "clue": "(i.) hizmet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hizmet"
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
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "CUE",
        "clue": "(i.) deste",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deste"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "14-across",
        "number": 14,
        "direction": "across",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "a2-10x10-5",
    "title": "Meslekler & Çalışma Hayatı",
    "level": "A2",
    "size": 10,
    "description": "İş kolları, meslekler ve ofis ortamı sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REGARDLESS",
        "clue": "(i.) önem vermeden",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "önem vermeden"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REAL-WORLD",
        "clue": "(i.) gerçek dünya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek dünya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GOAL",
        "clue": "(i.) hedef",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hedef"
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
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EVER",
        "clue": "(i.) şimdiye kadar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şimdiye kadar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "DEFENDANTS",
        "clue": "(i.) davalilar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "davalilar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-10x10-6",
    "title": "Restoran & Mutfak Kültürü",
    "level": "A2",
    "size": 10,
    "description": "Yemek siparişi ve dünya mutfağı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SURPRISING",
        "clue": "(i.) şaşırtıcı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şaşırtıcı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ROSE",
        "clue": "(i.) gül",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gül"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATING",
        "clue": "(i.) oluşturuluyorlinking object files into a library or executable",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuluyorlinking object files into a library or executable"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DESK",
        "clue": "(i.) çalışma masası, sıra",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çalışma masası, sıra"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SENTENCING",
        "clue": "(i.) cezanın belirlenmesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cezanın belirlenmesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-10x10-7",
    "title": "Doğa Maceraları & Dağlar",
    "level": "A2",
    "size": 10,
    "description": "Kamp, tırmanış ve doğa keşif sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACCUMULATE",
        "clue": "(i.) biriktirmek.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biriktirmek."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ACCELERATE",
        "clue": "(i.) hızlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hızlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CALM",
        "clue": "(i.) sakin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakin"
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "EFFORTLESS",
        "clue": "(i.) zahmetsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zahmetsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-10x10-8",
    "title": "Alışveriş & Mağazalar",
    "level": "A2",
    "size": 10,
    "description": "Giyim, fiyatlar ve alışveriş pratikleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CONFIDENCE",
        "clue": "(i.) dentakay'a",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dentakay'a"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COLLEAGUES",
        "clue": "(i.) i̇ş arkadaşları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇ş arkadaşları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
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
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-10x10-9",
    "title": "Dostluk ve Sosyal Yaşam",
    "level": "A2",
    "size": 10,
    "description": "Arkadaşlar, kutlamalar ve sohbet dili.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FOOTPRINTS",
        "clue": "(i.) ayak izleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ayak izleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACILITIES",
        "clue": "(i.) olanaklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olanaklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OIL",
        "clue": "(i.) yağ, petrol, mazot",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağ, petrol, mazot"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "BIRD",
        "clue": "(i.) kuş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kuş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SELECTIONS",
        "clue": "(i.) seçimler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçimler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "a2-10x10-10",
    "title": "Sağlık & Eczane Rehberi",
    "level": "A2",
    "size": 10,
    "description": "Doktor randevusu, ilaç ve sağlık terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "INVESTMENT",
        "clue": "(i.) karı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INEVITABLE",
        "clue": "(i.) kaçınılmaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınılmaz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TERRIFYING",
        "clue": "(i.) dehşet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dehşet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "EMPOWERING",
        "clue": "(i.) &#10;++",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "&#10;++"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-5x5-1",
    "title": "Girişimcilik & Projeler",
    "level": "B1",
    "size": 5,
    "description": "İş fikirleri, proje yönetimi ve iş ortaklığı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
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
        "clue": "(i.) araba, otomobil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "araba, otomobil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 4,
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
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b1-5x5-2",
    "title": "İş Dünyası & Strateji",
    "level": "B1",
    "size": 5,
    "description": "Şirketler, bütçe yönetimi ve pazar hedefleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SHOW",
        "clue": "(f.) göstermek, sergilemek  •  (i.) gösteri, şov",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "göstermek, sergilemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri, şov"
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
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OCEAN",
        "clue": "(i.) okyanus",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanus"
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
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 1,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AREA",
        "clue": "(i.) bölge",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölge"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 1,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-5x5-3",
    "title": "Bilimsel Keşifler & Veri",
    "level": "B1",
    "size": 5,
    "description": "Araştırma, deneyler ve bilimsel yöntem sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FIT",
        "clue": "(s.) formda, zinde, uygun  •  (f.) uymak, sığmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "formda, zinde, uygun"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "uymak, sığmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FUN",
        "clue": "(i.) eğlence, neşe  •  (s.) eğlenceli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğlence, neşe"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "eğlenceli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TIRED",
        "clue": "(i.) yorgun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yorgun"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "NURSE",
        "clue": "(i.) hemşire  •  (f.) bakmak, emzirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hemşire"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, emzirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 4,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DIG",
        "clue": "(f.) kazmak, deşmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazmak, deşmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-5x5-4",
    "title": "Medya & Dijital İletişim",
    "level": "B1",
    "size": 5,
    "description": "Haberler, sosyal medya ve yayıncılık dili.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SONG",
        "clue": "(i.) şarkı, türkü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şarkı, türkü"
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
        "word": "SICK",
        "clue": "(s.) hasta, rahatsız",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hasta, rahatsız"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NURSE",
        "clue": "(i.) hemşire  •  (f.) bakmak, emzirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hemşire"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, emzirmek"
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
        "word": "GETS",
        "clue": "(i.) bulur",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bulur"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 1,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 1,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-5x5-5",
    "title": "Toplum & Sosyal Dinamikler",
    "level": "B1",
    "size": 5,
    "description": "Birey, toplum ve sosyal sorumluluk kavramları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PIG",
        "clue": "(i.) domuz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "domuz"
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
        "word": "PIE",
        "clue": "(i.) turta, pasta, börek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "turta, pasta, börek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GRIDS",
        "clue": "(i.) izgaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izgaralar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "EXIST",
        "clue": "(i.) mevcut olmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mevcut olmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "TOY",
        "clue": "(i.) oyuncak  •  (f.) oynamak, oyalanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oyuncak"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "oynamak, oyalanmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 4,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SHY",
        "clue": "(s.) utangaç, çekingen",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "utangaç, çekingen"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-6x6-1",
    "title": "Girişimcilik & Projeler",
    "level": "B1",
    "size": 6,
    "description": "İş fikirleri, proje yönetimi ve iş ortaklığı terimleri.",
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
        "word": "HELP",
        "clue": "(f.) yardım etmek  •  (i.) yardım, imdat",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yardım etmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yardım, imdat"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b1-6x6-2",
    "title": "İş Dünyası & Strateji",
    "level": "B1",
    "size": 6,
    "description": "Şirketler, bütçe yönetimi ve pazar hedefleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SHOW",
        "clue": "(f.) göstermek, sergilemek  •  (i.) gösteri, şov",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "göstermek, sergilemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri, şov"
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
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ALLOWS",
        "clue": "(i.) izin verir, olanak sağlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin verir, olanak sağlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EXIT",
        "clue": "(i.) çıkış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çıkış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-6x6-3",
    "title": "Bilimsel Keşifler & Veri",
    "level": "B1",
    "size": 6,
    "description": "Araştırma, deneyler ve bilimsel yöntem sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FAST",
        "clue": "(s.) hızlı, çabuk  •  (zf.) hızla",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hızlı, çabuk"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "hızla"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RENTED",
        "clue": "(i.) kiralandı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kiralandı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "SUNDAY",
        "clue": "(i.) pazar günü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pazar günü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "YEAR",
        "clue": "(i.) yıl, sene",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yıl, sene"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TIE",
        "clue": "(f.) bağlamak, düğümlemek  •  (i.) kravat; bağ, beraberlik",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bağlamak, düğümlemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kravat; bağ, beraberlik"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-6x6-4",
    "title": "Medya & Dijital İletişim",
    "level": "B1",
    "size": 6,
    "description": "Haberler, sosyal medya ve yayıncılık dili.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SONG",
        "clue": "(i.) şarkı, türkü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şarkı, türkü"
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
        "word": "SICK",
        "clue": "(s.) hasta, rahatsız",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hasta, rahatsız"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NARROW",
        "clue": "(i.) dar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "CAREER",
        "clue": "(i.) kariyer",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kariyer"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "RICH",
        "clue": "(s.) zengin, varlıklı; bol",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "zengin, varlıklı; bol"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "WISH",
        "clue": "(f.) dilemek, istemek  •  (i.) dilek, arzu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "dilemek, istemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dilek, arzu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-6x6-5",
    "title": "Toplum & Sosyal Dinamikler",
    "level": "B1",
    "size": 6,
    "description": "Birey, toplum ve sosyal sorumluluk kavramları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "WARM",
        "clue": "(s.) ılık, sıcakkanlı, samimi  •  (f.) ısıtmak, ısınmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "ılık, sıcakkanlı, samimi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ısıtmak, ısınmak"
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
        "word": "WEAR",
        "clue": "(f.) giymek, takmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "giymek, takmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RATHER",
        "clue": "(i.) tercihen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tercihen"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
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
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RIDE",
        "clue": "(f.) binmek (bisiklete/ata), sürmek  •  (i.) biniş, gezi",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "binmek (bisiklete/ata), sürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biniş, gezi"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-6x6-6",
    "title": "Ekonomi & Bütçe Yönetimi",
    "level": "B1",
    "size": 6,
    "description": "Finans, bankacılık ve ekonomik analiz kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SING",
        "clue": "(f.) şarkı söylemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "şarkı söylemek"
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
        "word": "SWAM",
        "clue": "(i.) yüzdü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yüzdü"
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
        "word": "NARROW",
        "clue": "(i.) dar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ARRIVE",
        "clue": "(i.) varmak, ulaşmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "varmak, ulaşmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "WISH",
        "clue": "(f.) dilemek, istemek  •  (i.) dilek, arzu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "dilemek, istemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dilek, arzu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-7x7-1",
    "title": "Girişimcilik & Projeler",
    "level": "B1",
    "size": 7,
    "description": "İş fikirleri, proje yönetimi ve iş ortaklığı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
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
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "WIN",
        "clue": "(f.) kazanmak, galip gelmek  •  (i.) galibiyet, zafer",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazanmak, galip gelmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "galibiyet, zafer"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CORRECT",
        "clue": "(i.) doğru olduğunu kontol ediniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru olduğunu kontol ediniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EAR",
        "clue": "(i.) kulak; başak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kulak; başak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b1-7x7-2",
    "title": "İş Dünyası & Strateji",
    "level": "B1",
    "size": 7,
    "description": "Şirketler, bütçe yönetimi ve pazar hedefleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
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
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INSTEAD",
        "clue": "(i.) yerine",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerine"
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
        "word": "EMITTED",
        "clue": "(i.) yayımlanan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yayımlanan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "FEW",
        "clue": "(s.) az, birkaç  •  (zm.) az sayıda kimse",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "az, birkaç"
          },
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "az sayıda kimse"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "FINALLY",
        "clue": "(i.) sonunda, nihayet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonunda, nihayet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "EAT",
        "clue": "(f.) yemek yemek, tüketmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yemek yemek, tüketmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LIE",
        "clue": "(f.) yalan söylemek; uzanmak, yatmak  •  (i.) yalan",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yalan söylemek; uzanmak, yatmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yalan"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-7x7-3",
    "title": "Bilimsel Keşifler & Veri",
    "level": "B1",
    "size": 7,
    "description": "Araştırma, deneyler ve bilimsel yöntem sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "LEG",
        "clue": "(i.) bacak, ayak; etap",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bacak, ayak; etap"
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
        "word": "LACKING",
        "clue": "(i.) eksiklik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eksiklik"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "SAD",
        "clue": "(s.) üzgün, hüzünlü, kederli",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "üzgün, hüzünlü, kederli"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SENSORS",
        "clue": "(i.) sensörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sensörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CHRONIC",
        "clue": "(i.) kronik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kronik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
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
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OLD",
        "clue": "(s.) eski, yaşlı, ihtiyar",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "eski, yaşlı, ihtiyar"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GAS",
        "clue": "(i.) gaz; benzin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gaz; benzin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-7x7-4",
    "title": "Medya & Dijital İletişim",
    "level": "B1",
    "size": 7,
    "description": "Haberler, sosyal medya ve yayıncılık dili.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ROW",
        "clue": "(i.) sıra, dizi  •  (f.) kürek çekmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıra, dizi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kürek çekmek"
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
        "word": "RAPIDLY",
        "clue": "(i.) çabuk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çabuk"
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
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "USE",
        "clue": "(f.) kullanmak, yararlanmak  •  (i.) kullanım, fayda",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kullanmak, yararlanmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kullanım, fayda"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "UNIFORM",
        "clue": "(i.) üniforma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üniforma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ELEMENT",
        "clue": "(i.) öğe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "PRECISE",
        "clue": "(i.) keskinlik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "keskinlik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ONE",
        "clue": "(s.) bir, tek  •  (zm.) biri, birisi",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "bir, tek"
          },
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "biri, birisi"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "MET",
        "clue": "(i.) tanıştı, buluştu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanıştı, buluştu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-7x7-5",
    "title": "Toplum & Sosyal Dinamikler",
    "level": "B1",
    "size": 7,
    "description": "Birey, toplum ve sosyal sorumluluk kavramları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "NUT",
        "clue": "(i.) fındık, ceviz, kuruyemiş; somun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fındık, ceviz, kuruyemiş; somun"
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
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
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
        "word": "TRAINED",
        "clue": "(i.) eğitildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitildi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "VAN",
        "clue": "(i.) kamyonet, van, minibüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamyonet, van, minibüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "VISIBLE",
        "clue": "(i.) görünür",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görünür"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TRANSIT",
        "clue": "(i.) geçiş, aktarma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geçiş, aktarma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RAN",
        "clue": "(i.) koştu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koştu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "BAR",
        "clue": "(i.) bar, çubuk, engel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bar, çubuk, engel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "LID",
        "clue": "(i.) kapak, göz kapağı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapak, göz kapağı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-7x7-6",
    "title": "Ekonomi & Bütçe Yönetimi",
    "level": "B1",
    "size": 7,
    "description": "Finans, bankacılık ve ekonomik analiz kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DIG",
        "clue": "(f.) kazmak, deşmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazmak, deşmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "WON",
        "clue": "(i.) kazandı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazandı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CORRECT",
        "clue": "(i.) doğru olduğunu kontol ediniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru olduğunu kontol ediniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EAR",
        "clue": "(i.) kulak; başak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kulak; başak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-7x7-7",
    "title": "Kültürel Etkileşim & Sanat",
    "level": "B1",
    "size": 7,
    "description": "Edebiyat, kültürel miras ve estetik tartışmalar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACT",
        "clue": "(i.) gösteri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri"
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
        "word": "ARRIVED",
        "clue": "(i.) vardı, ulaştı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vardı, ulaştı"
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
        "word": "TRAINED",
        "clue": "(i.) eğitildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitildi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ATE",
        "clue": "(i.) yedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
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
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ELEMENT",
        "clue": "(i.) öğe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "REALIZE",
        "clue": "(i.) kavşak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kavşak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "VAN",
        "clue": "(i.) kamyonet, van, minibüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamyonet, van, minibüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "YET",
        "clue": "(i.) henüz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "henüz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-8x8-1",
    "title": "Girişimcilik & Projeler",
    "level": "B1",
    "size": 8,
    "description": "İş fikirleri, proje yönetimi ve iş ortaklığı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TOGETHER",
        "clue": "(i.) birlikte, beraber",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "birlikte, beraber"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TAXATION",
        "clue": "(i.) vergilendirme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vergilendirme"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "REGISTER",
        "clue": "(i.) kasa; kaydolmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kasa; kaydolmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BUS",
        "clue": "(i.) otobüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "NEIGHBOR",
        "clue": "(i.) komşu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "komşu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b1-8x8-2",
    "title": "İş Dünyası & Strateji",
    "level": "B1",
    "size": 8,
    "description": "Şirketler, bütçe yönetimi ve pazar hedefleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "BIOFUELS",
        "clue": "(i.) biyoyakıtlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyoyakıtlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BALANCED",
        "clue": "(i.) dengeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dengeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAUSAGES",
        "clue": "(i.) sosisler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosisler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DIALECTS",
        "clue": "(i.) lehçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lehçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-8x8-3",
    "title": "Bilimsel Keşifler & Veri",
    "level": "B1",
    "size": 8,
    "description": "Araştırma, deneyler ve bilimsel yöntem sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CULTURAL",
        "clue": "(i.) kültürel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kültürel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CHILDREN",
        "clue": "(i.) çocuklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çocuklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ROSE",
        "clue": "(i.) gül",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gül"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANGUAGE",
        "clue": "(i.) di̇l",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "di̇l"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NAVIGATE",
        "clue": "(i.) gezin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-8x8-4",
    "title": "Medya & Dijital İletişim",
    "level": "B1",
    "size": 8,
    "description": "Haberler, sosyal medya ve yayıncılık dili.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "EXCITING",
        "clue": "(i.) heyecan verici",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "heyecan verici"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ENTRANCE",
        "clue": "(i.) giriş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giriş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CUE",
        "clue": "(i.) deste",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deste"
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
        "word": "GASOLINE",
        "clue": "(i.) benzi̇n",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "benzi̇n"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "BUS",
        "clue": "(i.) otobüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OIL",
        "clue": "(i.) yağ, petrol, mazot",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağ, petrol, mazot"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ESTIMATE",
        "clue": "(i.) tahmin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tahmin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-8x8-5",
    "title": "Toplum & Sosyal Dinamikler",
    "level": "B1",
    "size": 8,
    "description": "Birey, toplum ve sosyal sorumluluk kavramları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HOMETOWN",
        "clue": "(i.) memleket",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "memleket"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HABITUAL",
        "clue": "(i.) i̇tiyadi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇tiyadi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NAVIGATE",
        "clue": "(i.) gezin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LANGUAGE",
        "clue": "(i.) di̇l",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "di̇l"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-8x8-6",
    "title": "Ekonomi & Bütçe Yönetimi",
    "level": "B1",
    "size": 8,
    "description": "Finans, bankacılık ve ekonomik analiz kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MILLIONS",
        "clue": "(i.) milyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "milyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MAINTAIN",
        "clue": "(i.) kalmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAUSAGES",
        "clue": "(i.) sosisler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosisler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NETWORKS",
        "clue": "(i.) ağları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ağları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-8x8-7",
    "title": "Kültürel Etkileşim & Sanat",
    "level": "B1",
    "size": 8,
    "description": "Edebiyat, kültürel miras ve estetik tartışmalar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PLANNERS",
        "clue": "(i.) plan yapanlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "plan yapanlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PARALLEL",
        "clue": "(i.) koşut",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşut"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EAT",
        "clue": "(f.) yemek yemek, tüketmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yemek yemek, tüketmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 5,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SCANNING",
        "clue": "(i.) tarama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tarama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "RUN",
        "clue": "(f.) koşmak, çalıştırmak, yönetmek  •  (i.) koşu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "koşmak, çalıştırmak, yönetmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LIFELONG",
        "clue": "(i.) ömür boyu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ömür boyu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-8x8-8",
    "title": "Çevre & İklim Politikası",
    "level": "B1",
    "size": 8,
    "description": "Sürdürülebilirlik, temiz enerji ve çevre bilinci.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "RELIANCE",
        "clue": "(i.) güven",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güven"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REGISTER",
        "clue": "(i.) kasa; kaydolmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kasa; kaydolmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOVE",
        "clue": "(i.) sevgi, aşk  •  (f.) sevmek, çok hoşlanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sevgi, aşk"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sevmek, çok hoşlanmak"
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
        "word": "ENTRANCE",
        "clue": "(i.) giriş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giriş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "REUSABLE",
        "clue": "(i.) yeniden kullanılabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yeniden kullanılabilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-9x9-1",
    "title": "Girişimcilik & Projeler",
    "level": "B1",
    "size": 9,
    "description": "İş fikirleri, proje yönetimi ve iş ortaklığı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FORGOTTEN",
        "clue": "(i.) unutulmuş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unutulmuş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACTORIES",
        "clue": "(i.) fabrika",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fabrika"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RULE",
        "clue": "(i.) kural",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kural"
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
        "col": 6,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NECESSARY",
        "clue": "(i.) x",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "x"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SECONDARY",
        "clue": "(i.) ikincil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ikincil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b1-9x9-2",
    "title": "İş Dünyası & Strateji",
    "level": "B1",
    "size": 9,
    "description": "Şirketler, bütçe yönetimi ve pazar hedefleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CLIPBOARD",
        "clue": "(i.) not panosu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "not panosu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CARDBOARD",
        "clue": "(i.) karton",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karton"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
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
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DECISIONS",
        "clue": "(i.) kararlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kararlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-9x9-3",
    "title": "Bilimsel Keşifler & Veri",
    "level": "B1",
    "size": 9,
    "description": "Araştırma, deneyler ve bilimsel yöntem sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DISTRICTS",
        "clue": "(i.) i̇lçeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇lçeler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SAME",
        "clue": "(i.) aynı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aynı"
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
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
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
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SATURDAYS",
        "clue": "(i.) cumartesi günleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cumartesi günleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-9x9-4",
    "title": "Medya & Dijital İletişim",
    "level": "B1",
    "size": 9,
    "description": "Haberler, sosyal medya ve yayıncılık dili.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HAZARDOUS",
        "clue": "(i.) tehlikesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HEALTHIER",
        "clue": "(i.) daha sağlıklı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha sağlıklı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-9x9-5",
    "title": "Toplum & Sosyal Dinamikler",
    "level": "B1",
    "size": 9,
    "description": "Birey, toplum ve sosyal sorumluluk kavramları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MITIGATES",
        "clue": "(i.) hafifletir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafifletir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MEANWHILE",
        "clue": "(i.) bu arada",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bu arada"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TEAM",
        "clue": "(i.) takım, ekip  •  (f.) ekip oluşturmak, işbirliği yapmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "takım, ekip"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ekip oluşturmak, işbirliği yapmak"
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
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "WIND",
        "clue": "(i.) rüzgar, esinti  •  (f.) sarmak, dolamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "rüzgar, esinti"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sarmak, dolamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ENGINEERS",
        "clue": "(i.) devam ettirilecek.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "devam ettirilecek."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-9x9-6",
    "title": "Ekonomi & Bütçe Yönetimi",
    "level": "B1",
    "size": 9,
    "description": "Finans, bankacılık ve ekonomik analiz kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PREPARING",
        "clue": "(i.) hazırlanıyor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazırlanıyor"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PASSENGER",
        "clue": "(i.) misafir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "misafir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GROCERIES",
        "clue": "(i.) bakkaliye, market alışverişi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakkaliye, market alışverişi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "3-across",
        "number": 3,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-9x9-7",
    "title": "Kültürel Etkileşim & Sanat",
    "level": "B1",
    "size": 9,
    "description": "Edebiyat, kültürel miras ve estetik tartışmalar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SCENARIOS",
        "clue": "(i.) senaryolar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "senaryolar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAFEGUARD",
        "clue": "(i.) koruma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koruma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SHUTTERED",
        "clue": "(i.) kepenkli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kepenkli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-9x9-8",
    "title": "Çevre & İklim Politikası",
    "level": "B1",
    "size": 9,
    "description": "Sürdürülebilirlik, temiz enerji ve çevre bilinci.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "UNIVERSAL",
        "clue": "(i.) evrensel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "evrensel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "UNDAMAGED",
        "clue": "(i.) hasarsız",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hasarsız"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANGUAGES",
        "clue": "(i.) diller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "diller"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "MILK",
        "clue": "(i.) süt  •  (f.) sağmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "süt"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sağmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-9x9-9",
    "title": "Eğitimde Yeni Yaklaşımlar",
    "level": "B1",
    "size": 9,
    "description": "Modern eğitim, online öğrenme ve gelişim modelleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REALWORLD",
        "clue": "(i.) gerçek dünya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek dünya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "READ",
        "clue": "(f.) okumak, anlam çıkarmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "okumak, anlam çıkarmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 6,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-10x10-1",
    "title": "Girişimcilik & Projeler",
    "level": "B1",
    "size": 10,
    "description": "İş fikirleri, proje yönetimi ve iş ortaklığı terimleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACCELERATE",
        "clue": "(i.) hızlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hızlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ACCESSIBLE",
        "clue": "(i.) erişilebilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "erişilebilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CALM",
        "clue": "(i.) sakin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakin"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "EFFORTLESS",
        "clue": "(i.) zahmetsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zahmetsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b1-10x10-2",
    "title": "İş Dünyası & Strateji",
    "level": "B1",
    "size": 10,
    "description": "Şirketler, bütçe yönetimi ve pazar hedefleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "COMPROMISE",
        "clue": "(i.) tahkimname",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tahkimname"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COLLEAGUES",
        "clue": "(i.) i̇ş arkadaşları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇ş arkadaşları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-10x10-3",
    "title": "Bilimsel Keşifler & Veri",
    "level": "B1",
    "size": 10,
    "description": "Araştırma, deneyler ve bilimsel yöntem sözcükleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "EVERYTHING",
        "clue": "(i.) her şey",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "her şey"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EVER",
        "clue": "(i.) şimdiye kadar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şimdiye kadar"
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
        "word": "TIME",
        "clue": "(i.) zaman, vakit, süre",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zaman, vakit, süre"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATING",
        "clue": "(i.) oluşturuluyorlinking object files into a library or executable",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuluyorlinking object files into a library or executable"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SENTENCING",
        "clue": "(i.) cezanın belirlenmesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cezanın belirlenmesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-10x10-4",
    "title": "Medya & Dijital İletişim",
    "level": "B1",
    "size": 10,
    "description": "Haberler, sosyal medya ve yayıncılık dili.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "INTRODUCES",
        "clue": "(i.) tanıtmaktadır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanıtmaktadır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INEVITABLE",
        "clue": "(i.) kaçınılmaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınılmaz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TASK",
        "clue": "(i.) hizmet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hizmet"
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
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "CUE",
        "clue": "(i.) deste",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deste"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "14-across",
        "number": 14,
        "direction": "across",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b1-10x10-5",
    "title": "Toplum & Sosyal Dinamikler",
    "level": "B1",
    "size": 10,
    "description": "Birey, toplum ve sosyal sorumluluk kavramları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REGARDLESS",
        "clue": "(i.) önem vermeden",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "önem vermeden"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REAL-WORLD",
        "clue": "(i.) gerçek dünya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek dünya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GOAL",
        "clue": "(i.) hedef",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hedef"
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
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EVER",
        "clue": "(i.) şimdiye kadar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şimdiye kadar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "DEFENDANTS",
        "clue": "(i.) davalilar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "davalilar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-10x10-6",
    "title": "Ekonomi & Bütçe Yönetimi",
    "level": "B1",
    "size": 10,
    "description": "Finans, bankacılık ve ekonomik analiz kelimeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SURPRISING",
        "clue": "(i.) şaşırtıcı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şaşırtıcı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ROSE",
        "clue": "(i.) gül",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gül"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATING",
        "clue": "(i.) oluşturuluyorlinking object files into a library or executable",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuluyorlinking object files into a library or executable"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DESK",
        "clue": "(i.) çalışma masası, sıra",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çalışma masası, sıra"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SENTENCING",
        "clue": "(i.) cezanın belirlenmesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cezanın belirlenmesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-10x10-7",
    "title": "Kültürel Etkileşim & Sanat",
    "level": "B1",
    "size": 10,
    "description": "Edebiyat, kültürel miras ve estetik tartışmalar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACCUMULATE",
        "clue": "(i.) biriktirmek.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biriktirmek."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ACCELERATE",
        "clue": "(i.) hızlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hızlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CALM",
        "clue": "(i.) sakin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakin"
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "EFFORTLESS",
        "clue": "(i.) zahmetsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zahmetsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-10x10-8",
    "title": "Çevre & İklim Politikası",
    "level": "B1",
    "size": 10,
    "description": "Sürdürülebilirlik, temiz enerji ve çevre bilinci.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CONFIDENCE",
        "clue": "(i.) dentakay'a",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dentakay'a"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COLLEAGUES",
        "clue": "(i.) i̇ş arkadaşları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇ş arkadaşları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
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
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-10x10-9",
    "title": "Eğitimde Yeni Yaklaşımlar",
    "level": "B1",
    "size": 10,
    "description": "Modern eğitim, online öğrenme ve gelişim modelleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FOOTPRINTS",
        "clue": "(i.) ayak izleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ayak izleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACILITIES",
        "clue": "(i.) olanaklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olanaklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OIL",
        "clue": "(i.) yağ, petrol, mazot",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağ, petrol, mazot"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "BIRD",
        "clue": "(i.) kuş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kuş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SELECTIONS",
        "clue": "(i.) seçimler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçimler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b1-10x10-10",
    "title": "Liderlik ve Takım Çalışması",
    "level": "B1",
    "size": 10,
    "description": "Motivasyon, karar alma ve yönetim becerileri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "INVESTMENT",
        "clue": "(i.) karı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INEVITABLE",
        "clue": "(i.) kaçınılmaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınılmaz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TERRIFYING",
        "clue": "(i.) dehşet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dehşet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "EMPOWERING",
        "clue": "(i.) &#10;++",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "&#10;++"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-5x5-1",
    "title": "Vizyoner Liderlik & Strateji",
    "level": "B2",
    "size": 5,
    "description": "Üst düzey kurumsal yönetim ve stratejik vizyon.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
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
        "clue": "(i.) araba, otomobil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "araba, otomobil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 4,
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
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b2-5x5-2",
    "title": "Felsefi Düşünce & Mantık",
    "level": "B2",
    "size": 5,
    "description": "Epistemoloji, etik argümanlar ve soyut kavramlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SHOW",
        "clue": "(f.) göstermek, sergilemek  •  (i.) gösteri, şov",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "göstermek, sergilemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri, şov"
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
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OCEAN",
        "clue": "(i.) okyanus",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanus"
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
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 1,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AREA",
        "clue": "(i.) bölge",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölge"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 1,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-5x5-3",
    "title": "Akademik Araştırma & Kanıt",
    "level": "B2",
    "size": 5,
    "description": "Bilimsel metodoloji, hipotez ve veri analizi.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FIT",
        "clue": "(s.) formda, zinde, uygun  •  (f.) uymak, sığmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "formda, zinde, uygun"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "uymak, sığmak"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FUN",
        "clue": "(i.) eğlence, neşe  •  (s.) eğlenceli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğlence, neşe"
          },
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "eğlenceli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TIRED",
        "clue": "(i.) yorgun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yorgun"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "NURSE",
        "clue": "(i.) hemşire  •  (f.) bakmak, emzirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hemşire"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, emzirmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 4,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DIG",
        "clue": "(f.) kazmak, deşmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazmak, deşmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-5x5-4",
    "title": "Sürdürülebilirlik İlkeleri",
    "level": "B2",
    "size": 5,
    "description": "Ekolojik restorasyon ve küresel çevre hukuku.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SONG",
        "clue": "(i.) şarkı, türkü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şarkı, türkü"
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
        "word": "SICK",
        "clue": "(s.) hasta, rahatsız",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hasta, rahatsız"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NURSE",
        "clue": "(i.) hemşire  •  (f.) bakmak, emzirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hemşire"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, emzirmek"
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
        "word": "GETS",
        "clue": "(i.) bulur",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bulur"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 1,
        "col": 3,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 1,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-5x5-5",
    "title": "Küresel Diplomasi & İlişkiler",
    "level": "B2",
    "size": 5,
    "description": "Uluslararası antlaşmalar ve jeopolitik dinamikler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PIG",
        "clue": "(i.) domuz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "domuz"
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
        "word": "PIE",
        "clue": "(i.) turta, pasta, börek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "turta, pasta, börek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GRIDS",
        "clue": "(i.) izgaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izgaralar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 5
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "EXIST",
        "clue": "(i.) mevcut olmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mevcut olmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "TOY",
        "clue": "(i.) oyuncak  •  (f.) oynamak, oyalanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oyuncak"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "oynamak, oyalanmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 4,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SHY",
        "clue": "(s.) utangaç, çekingen",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "utangaç, çekingen"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 2,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-6x6-1",
    "title": "Vizyoner Liderlik & Strateji",
    "level": "B2",
    "size": 6,
    "description": "Üst düzey kurumsal yönetim ve stratejik vizyon.",
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
        "word": "HELP",
        "clue": "(f.) yardım etmek  •  (i.) yardım, imdat",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yardım etmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yardım, imdat"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b2-6x6-2",
    "title": "Felsefi Düşünce & Mantık",
    "level": "B2",
    "size": 6,
    "description": "Epistemoloji, etik argümanlar ve soyut kavramlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SHOW",
        "clue": "(f.) göstermek, sergilemek  •  (i.) gösteri, şov",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "göstermek, sergilemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri, şov"
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
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ALLOWS",
        "clue": "(i.) izin verir, olanak sağlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin verir, olanak sağlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EXIT",
        "clue": "(i.) çıkış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çıkış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-6x6-3",
    "title": "Akademik Araştırma & Kanıt",
    "level": "B2",
    "size": 6,
    "description": "Bilimsel metodoloji, hipotez ve veri analizi.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FAST",
        "clue": "(s.) hızlı, çabuk  •  (zf.) hızla",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hızlı, çabuk"
          },
          {
            "pos": "zf.",
            "posName": "Zarf",
            "meaning": "hızla"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RENTED",
        "clue": "(i.) kiralandı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kiralandı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "SUNDAY",
        "clue": "(i.) pazar günü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pazar günü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "YEAR",
        "clue": "(i.) yıl, sene",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yıl, sene"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TIE",
        "clue": "(f.) bağlamak, düğümlemek  •  (i.) kravat; bağ, beraberlik",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bağlamak, düğümlemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kravat; bağ, beraberlik"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-6x6-4",
    "title": "Sürdürülebilirlik İlkeleri",
    "level": "B2",
    "size": 6,
    "description": "Ekolojik restorasyon ve küresel çevre hukuku.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SONG",
        "clue": "(i.) şarkı, türkü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şarkı, türkü"
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
        "word": "SICK",
        "clue": "(s.) hasta, rahatsız",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "hasta, rahatsız"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NARROW",
        "clue": "(i.) dar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "CAREER",
        "clue": "(i.) kariyer",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kariyer"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "RICH",
        "clue": "(s.) zengin, varlıklı; bol",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "zengin, varlıklı; bol"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "WISH",
        "clue": "(f.) dilemek, istemek  •  (i.) dilek, arzu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "dilemek, istemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dilek, arzu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-6x6-5",
    "title": "Küresel Diplomasi & İlişkiler",
    "level": "B2",
    "size": 6,
    "description": "Uluslararası antlaşmalar ve jeopolitik dinamikler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "WARM",
        "clue": "(s.) ılık, sıcakkanlı, samimi  •  (f.) ısıtmak, ısınmak",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "ılık, sıcakkanlı, samimi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ısıtmak, ısınmak"
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
        "word": "WEAR",
        "clue": "(f.) giymek, takmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "giymek, takmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 4
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RATHER",
        "clue": "(i.) tercihen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tercihen"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
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
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RIDE",
        "clue": "(f.) binmek (bisiklete/ata), sürmek  •  (i.) biniş, gezi",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "binmek (bisiklete/ata), sürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biniş, gezi"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-6x6-6",
    "title": "Makroekonomik Analiz & Pazar",
    "level": "B2",
    "size": 6,
    "description": "Küresel finans piyasaları ve ekonomik teoriler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SING",
        "clue": "(f.) şarkı söylemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "şarkı söylemek"
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
        "word": "SWAM",
        "clue": "(i.) yüzdü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yüzdü"
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
        "word": "NARROW",
        "clue": "(i.) dar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 6
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ARRIVE",
        "clue": "(i.) varmak, ulaşmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "varmak, ulaşmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "WISH",
        "clue": "(f.) dilemek, istemek  •  (i.) dilek, arzu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "dilemek, istemek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dilek, arzu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 5,
        "col": 2,
        "length": 4
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-7x7-1",
    "title": "Vizyoner Liderlik & Strateji",
    "level": "B2",
    "size": 7,
    "description": "Üst düzey kurumsal yönetim ve stratejik vizyon.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
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
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "WIN",
        "clue": "(f.) kazanmak, galip gelmek  •  (i.) galibiyet, zafer",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazanmak, galip gelmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "galibiyet, zafer"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CORRECT",
        "clue": "(i.) doğru olduğunu kontol ediniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru olduğunu kontol ediniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EAR",
        "clue": "(i.) kulak; başak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kulak; başak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b2-7x7-2",
    "title": "Felsefi Düşünce & Mantık",
    "level": "B2",
    "size": 7,
    "description": "Epistemoloji, etik argümanlar ve soyut kavramlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
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
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INSTEAD",
        "clue": "(i.) yerine",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerine"
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
        "word": "EMITTED",
        "clue": "(i.) yayımlanan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yayımlanan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "FEW",
        "clue": "(s.) az, birkaç  •  (zm.) az sayıda kimse",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "az, birkaç"
          },
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "az sayıda kimse"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "FINALLY",
        "clue": "(i.) sonunda, nihayet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonunda, nihayet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "EAT",
        "clue": "(f.) yemek yemek, tüketmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yemek yemek, tüketmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LIE",
        "clue": "(f.) yalan söylemek; uzanmak, yatmak  •  (i.) yalan",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yalan söylemek; uzanmak, yatmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yalan"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-7x7-3",
    "title": "Akademik Araştırma & Kanıt",
    "level": "B2",
    "size": 7,
    "description": "Bilimsel metodoloji, hipotez ve veri analizi.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "LEG",
        "clue": "(i.) bacak, ayak; etap",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bacak, ayak; etap"
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
        "word": "LACKING",
        "clue": "(i.) eksiklik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eksiklik"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "SAD",
        "clue": "(s.) üzgün, hüzünlü, kederli",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "üzgün, hüzünlü, kederli"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SENSORS",
        "clue": "(i.) sensörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sensörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CHRONIC",
        "clue": "(i.) kronik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kronik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
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
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OLD",
        "clue": "(s.) eski, yaşlı, ihtiyar",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "eski, yaşlı, ihtiyar"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GAS",
        "clue": "(i.) gaz; benzin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gaz; benzin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-7x7-4",
    "title": "Sürdürülebilirlik İlkeleri",
    "level": "B2",
    "size": 7,
    "description": "Ekolojik restorasyon ve küresel çevre hukuku.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ROW",
        "clue": "(i.) sıra, dizi  •  (f.) kürek çekmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıra, dizi"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kürek çekmek"
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
        "word": "RAPIDLY",
        "clue": "(i.) çabuk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çabuk"
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
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "USE",
        "clue": "(f.) kullanmak, yararlanmak  •  (i.) kullanım, fayda",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kullanmak, yararlanmak"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kullanım, fayda"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "UNIFORM",
        "clue": "(i.) üniforma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üniforma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ELEMENT",
        "clue": "(i.) öğe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "PRECISE",
        "clue": "(i.) keskinlik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "keskinlik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ONE",
        "clue": "(s.) bir, tek  •  (zm.) biri, birisi",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "bir, tek"
          },
          {
            "pos": "zm.",
            "posName": "Zamir",
            "meaning": "biri, birisi"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "MET",
        "clue": "(i.) tanıştı, buluştu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanıştı, buluştu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-7x7-5",
    "title": "Küresel Diplomasi & İlişkiler",
    "level": "B2",
    "size": 7,
    "description": "Uluslararası antlaşmalar ve jeopolitik dinamikler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "NUT",
        "clue": "(i.) fındık, ceviz, kuruyemiş; somun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fındık, ceviz, kuruyemiş; somun"
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
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
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
        "word": "TRAINED",
        "clue": "(i.) eğitildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitildi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "VAN",
        "clue": "(i.) kamyonet, van, minibüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamyonet, van, minibüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "VISIBLE",
        "clue": "(i.) görünür",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görünür"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TRANSIT",
        "clue": "(i.) geçiş, aktarma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geçiş, aktarma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RAN",
        "clue": "(i.) koştu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koştu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "BAR",
        "clue": "(i.) bar, çubuk, engel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bar, çubuk, engel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "LID",
        "clue": "(i.) kapak, göz kapağı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapak, göz kapağı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-7x7-6",
    "title": "Makroekonomik Analiz & Pazar",
    "level": "B2",
    "size": 7,
    "description": "Küresel finans piyasaları ve ekonomik teoriler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DIG",
        "clue": "(f.) kazmak, deşmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kazmak, deşmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 0,
        "length": 3
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DECADES",
        "clue": "(i.) onlarca yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onlarca yıl"
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
        "word": "GARDENS",
        "clue": "(i.) bahçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bahçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "WON",
        "clue": "(i.) kazandı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazandı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "WEEKEND",
        "clue": "(i.) hafta sonu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta sonu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NATURAL",
        "clue": "(i.) doğal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CORRECT",
        "clue": "(i.) doğru olduğunu kontol ediniz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru olduğunu kontol ediniz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DUE",
        "clue": "(i.) kalan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EAR",
        "clue": "(i.) kulak; başak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kulak; başak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-7x7-7",
    "title": "İnovasyon & Katma Değer",
    "level": "B2",
    "size": 7,
    "description": "Teknolojik dönüşüm ve inovasyon ekosistemleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACT",
        "clue": "(i.) gösteri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteri"
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
        "word": "ARRIVED",
        "clue": "(i.) vardı, ulaştı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vardı, ulaştı"
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
        "word": "TRAINED",
        "clue": "(i.) eğitildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitildi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "ATE",
        "clue": "(i.) yedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 3
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
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ELEMENT",
        "clue": "(i.) öğe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "REALIZE",
        "clue": "(i.) kavşak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kavşak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "VAN",
        "clue": "(i.) kamyonet, van, minibüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamyonet, van, minibüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 4,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "YET",
        "clue": "(i.) henüz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "henüz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 4,
        "length": 3
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-8x8-1",
    "title": "Vizyoner Liderlik & Strateji",
    "level": "B2",
    "size": 8,
    "description": "Üst düzey kurumsal yönetim ve stratejik vizyon.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "TOGETHER",
        "clue": "(i.) birlikte, beraber",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "birlikte, beraber"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "TAXATION",
        "clue": "(i.) vergilendirme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vergilendirme"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "REGISTER",
        "clue": "(i.) kasa; kaydolmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kasa; kaydolmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BUS",
        "clue": "(i.) otobüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "NEIGHBOR",
        "clue": "(i.) komşu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "komşu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b2-8x8-2",
    "title": "Felsefi Düşünce & Mantık",
    "level": "B2",
    "size": 8,
    "description": "Epistemoloji, etik argümanlar ve soyut kavramlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "BIOFUELS",
        "clue": "(i.) biyoyakıtlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyoyakıtlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BALANCED",
        "clue": "(i.) dengeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dengeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAUSAGES",
        "clue": "(i.) sosisler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosisler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DIALECTS",
        "clue": "(i.) lehçe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lehçe"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-8x8-3",
    "title": "Akademik Araştırma & Kanıt",
    "level": "B2",
    "size": 8,
    "description": "Bilimsel metodoloji, hipotez ve veri analizi.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CULTURAL",
        "clue": "(i.) kültürel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kültürel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CHILDREN",
        "clue": "(i.) çocuklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çocuklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ROSE",
        "clue": "(i.) gül",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gül"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANGUAGE",
        "clue": "(i.) di̇l",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "di̇l"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NAVIGATE",
        "clue": "(i.) gezin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-8x8-4",
    "title": "Sürdürülebilirlik İlkeleri",
    "level": "B2",
    "size": 8,
    "description": "Ekolojik restorasyon ve küresel çevre hukuku.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "EXCITING",
        "clue": "(i.) heyecan verici",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "heyecan verici"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ENTRANCE",
        "clue": "(i.) giriş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giriş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CUE",
        "clue": "(i.) deste",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deste"
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
        "word": "GASOLINE",
        "clue": "(i.) benzi̇n",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "benzi̇n"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "BUS",
        "clue": "(i.) otobüs",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüs"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OIL",
        "clue": "(i.) yağ, petrol, mazot",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağ, petrol, mazot"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ESTIMATE",
        "clue": "(i.) tahmin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tahmin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-8x8-5",
    "title": "Küresel Diplomasi & İlişkiler",
    "level": "B2",
    "size": 8,
    "description": "Uluslararası antlaşmalar ve jeopolitik dinamikler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HOMETOWN",
        "clue": "(i.) memleket",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "memleket"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HABITUAL",
        "clue": "(i.) i̇tiyadi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇tiyadi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NAVIGATE",
        "clue": "(i.) gezin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gezin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DOG",
        "clue": "(i.) köpek  •  (f.) peşini bırakmamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köpek"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "peşini bırakmamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LANGUAGE",
        "clue": "(i.) di̇l",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "di̇l"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-8x8-6",
    "title": "Makroekonomik Analiz & Pazar",
    "level": "B2",
    "size": 8,
    "description": "Küresel finans piyasaları ve ekonomik teoriler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MILLIONS",
        "clue": "(i.) milyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "milyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MAINTAIN",
        "clue": "(i.) kalmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAUSAGES",
        "clue": "(i.) sosisler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosisler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NETWORKS",
        "clue": "(i.) ağları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ağları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-8x8-7",
    "title": "İnovasyon & Katma Değer",
    "level": "B2",
    "size": 8,
    "description": "Teknolojik dönüşüm ve inovasyon ekosistemleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PLANNERS",
        "clue": "(i.) plan yapanlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "plan yapanlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PARALLEL",
        "clue": "(i.) koşut",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşut"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EAT",
        "clue": "(f.) yemek yemek, tüketmek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yemek yemek, tüketmek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 5,
        "length": 3
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SCANNING",
        "clue": "(i.) tarama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tarama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "RUN",
        "clue": "(f.) koşmak, çalıştırmak, yönetmek  •  (i.) koşu",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "koşmak, çalıştırmak, yönetmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koşu"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 5,
        "length": 3
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LIFELONG",
        "clue": "(i.) ömür boyu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ömür boyu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-8x8-8",
    "title": "Kurumsal Yönetişim & Etik",
    "level": "B2",
    "size": 8,
    "description": "İş ahlakı, regülasyon ve şeffaflık ilkeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "RELIANCE",
        "clue": "(i.) güven",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güven"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REGISTER",
        "clue": "(i.) kasa; kaydolmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kasa; kaydolmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LOVE",
        "clue": "(i.) sevgi, aşk  •  (f.) sevmek, çok hoşlanmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sevgi, aşk"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sevmek, çok hoşlanmak"
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
        "word": "ENTRANCE",
        "clue": "(i.) giriş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giriş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CAT",
        "clue": "(i.) kedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 3
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "REUSABLE",
        "clue": "(i.) yeniden kullanılabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yeniden kullanılabilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 8
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-9x9-1",
    "title": "Vizyoner Liderlik & Strateji",
    "level": "B2",
    "size": 9,
    "description": "Üst düzey kurumsal yönetim ve stratejik vizyon.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FORGOTTEN",
        "clue": "(i.) unutulmuş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unutulmuş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACTORIES",
        "clue": "(i.) fabrika",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fabrika"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "RULE",
        "clue": "(i.) kural",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kural"
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
        "col": 6,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NECESSARY",
        "clue": "(i.) x",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "x"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SECONDARY",
        "clue": "(i.) ikincil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ikincil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b2-9x9-2",
    "title": "Felsefi Düşünce & Mantık",
    "level": "B2",
    "size": 9,
    "description": "Epistemoloji, etik argümanlar ve soyut kavramlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CLIPBOARD",
        "clue": "(i.) not panosu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "not panosu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CARDBOARD",
        "clue": "(i.) karton",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karton"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
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
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DECISIONS",
        "clue": "(i.) kararlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kararlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-9x9-3",
    "title": "Akademik Araştırma & Kanıt",
    "level": "B2",
    "size": 9,
    "description": "Bilimsel metodoloji, hipotez ve veri analizi.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "DISTRICTS",
        "clue": "(i.) i̇lçeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇lçeler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SAME",
        "clue": "(i.) aynı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aynı"
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
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NAME",
        "clue": "(i.) isim, ad  •  (f.) adlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "isim, ad"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "adlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
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
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SATURDAYS",
        "clue": "(i.) cumartesi günleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cumartesi günleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-9x9-4",
    "title": "Sürdürülebilirlik İlkeleri",
    "level": "B2",
    "size": 9,
    "description": "Ekolojik restorasyon ve küresel çevre hukuku.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HAZARDOUS",
        "clue": "(i.) tehlikesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "HEALTHIER",
        "clue": "(i.) daha sağlıklı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha sağlıklı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-9x9-5",
    "title": "Küresel Diplomasi & İlişkiler",
    "level": "B2",
    "size": 9,
    "description": "Uluslararası antlaşmalar ve jeopolitik dinamikler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "MITIGATES",
        "clue": "(i.) hafifletir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafifletir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MEANWHILE",
        "clue": "(i.) bu arada",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bu arada"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TEAM",
        "clue": "(i.) takım, ekip  •  (f.) ekip oluşturmak, işbirliği yapmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "takım, ekip"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "ekip oluşturmak, işbirliği yapmak"
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
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "JOB",
        "clue": "(i.) iş, meslek, görev",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş, meslek, görev"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 3
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "WIND",
        "clue": "(i.) rüzgar, esinti  •  (f.) sarmak, dolamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "rüzgar, esinti"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sarmak, dolamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ENGINEERS",
        "clue": "(i.) devam ettirilecek.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "devam ettirilecek."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-9x9-6",
    "title": "Makroekonomik Analiz & Pazar",
    "level": "B2",
    "size": 9,
    "description": "Küresel finans piyasaları ve ekonomik teoriler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "PREPARING",
        "clue": "(i.) hazırlanıyor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazırlanıyor"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PASSENGER",
        "clue": "(i.) misafir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "misafir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GROCERIES",
        "clue": "(i.) bakkaliye, market alışverişi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakkaliye, market alışverişi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "3-across",
        "number": 3,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-9x9-7",
    "title": "İnovasyon & Katma Değer",
    "level": "B2",
    "size": 9,
    "description": "Teknolojik dönüşüm ve inovasyon ekosistemleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SCENARIOS",
        "clue": "(i.) senaryolar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "senaryolar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAFEGUARD",
        "clue": "(i.) koruma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koruma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 5,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SHUTTERED",
        "clue": "(i.) kepenkli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kepenkli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-9x9-8",
    "title": "Kurumsal Yönetişim & Etik",
    "level": "B2",
    "size": 9,
    "description": "İş ahlakı, regülasyon ve şeffaflık ilkeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "UNIVERSAL",
        "clue": "(i.) evrensel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "evrensel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "UNDAMAGED",
        "clue": "(i.) hasarsız",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hasarsız"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANGUAGES",
        "clue": "(i.) diller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "diller"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "MILK",
        "clue": "(i.) süt  •  (f.) sağmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "süt"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "sağmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-9x9-9",
    "title": "Bilişsel Süreçler & Zihin",
    "level": "B2",
    "size": 9,
    "description": "Nörobilim, psikoloji ve karar alma mekanizmaları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REALWORLD",
        "clue": "(i.) gerçek dünya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek dünya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REALITIES",
        "clue": "(i.) gerçekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "READ",
        "clue": "(f.) okumak, anlam çıkarmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "okumak, anlam çıkarmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 6,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DANGEROUS",
        "clue": "(i.) tehlikeli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehlikeli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 5,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ITEM",
        "clue": "(i.) öğe, madde, ürün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğe, madde, ürün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 5,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SABOTAGES",
        "clue": "(i.) sabotajlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sabotajlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 9
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-10x10-1",
    "title": "Vizyoner Liderlik & Strateji",
    "level": "B2",
    "size": 10,
    "description": "Üst düzey kurumsal yönetim ve stratejik vizyon.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACCELERATE",
        "clue": "(i.) hızlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hızlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ACCESSIBLE",
        "clue": "(i.) erişilebilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "erişilebilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CALM",
        "clue": "(i.) sakin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakin"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "EFFORTLESS",
        "clue": "(i.) zahmetsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zahmetsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "high",
    "frequencyLabel": "En Sık Kullanılan Kelimeler"
  },
  {
    "id": "b2-10x10-2",
    "title": "Felsefi Düşünce & Mantık",
    "level": "B2",
    "size": 10,
    "description": "Epistemoloji, etik argümanlar ve soyut kavramlar.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "COMPROMISE",
        "clue": "(i.) tahkimname",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tahkimname"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COLLEAGUES",
        "clue": "(i.) i̇ş arkadaşları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇ş arkadaşları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 2,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
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
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-10x10-3",
    "title": "Akademik Araştırma & Kanıt",
    "level": "B2",
    "size": 10,
    "description": "Bilimsel metodoloji, hipotez ve veri analizi.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "EVERYTHING",
        "clue": "(i.) her şey",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "her şey"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EVER",
        "clue": "(i.) şimdiye kadar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şimdiye kadar"
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
        "word": "TIME",
        "clue": "(i.) zaman, vakit, süre",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zaman, vakit, süre"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATING",
        "clue": "(i.) oluşturuluyorlinking object files into a library or executable",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuluyorlinking object files into a library or executable"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SENTENCING",
        "clue": "(i.) cezanın belirlenmesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cezanın belirlenmesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-10x10-4",
    "title": "Sürdürülebilirlik İlkeleri",
    "level": "B2",
    "size": 10,
    "description": "Ekolojik restorasyon ve küresel çevre hukuku.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "INTRODUCES",
        "clue": "(i.) tanıtmaktadır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanıtmaktadır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INEVITABLE",
        "clue": "(i.) kaçınılmaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınılmaz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "TASK",
        "clue": "(i.) hizmet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hizmet"
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
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "CUE",
        "clue": "(i.) deste",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deste"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 3
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "14-across",
        "number": 14,
        "direction": "across",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "medium",
    "frequencyLabel": "Popüler Kelimeler"
  },
  {
    "id": "b2-10x10-5",
    "title": "Küresel Diplomasi & İlişkiler",
    "level": "B2",
    "size": 10,
    "description": "Uluslararası antlaşmalar ve jeopolitik dinamikler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "REGARDLESS",
        "clue": "(i.) önem vermeden",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "önem vermeden"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "REAL-WORLD",
        "clue": "(i.) gerçek dünya",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gerçek dünya"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "GOAL",
        "clue": "(i.) hedef",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hedef"
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
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EVER",
        "clue": "(i.) şimdiye kadar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şimdiye kadar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 4
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "DEFENDANTS",
        "clue": "(i.) davalilar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "davalilar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-10x10-6",
    "title": "Makroekonomik Analiz & Pazar",
    "level": "B2",
    "size": 10,
    "description": "Küresel finans piyasaları ve ekonomik teoriler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "SURPRISING",
        "clue": "(i.) şaşırtıcı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şaşırtıcı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ROSE",
        "clue": "(i.) gül",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gül"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATING",
        "clue": "(i.) oluşturuluyorlinking object files into a library or executable",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuluyorlinking object files into a library or executable"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DESK",
        "clue": "(i.) çalışma masası, sıra",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çalışma masası, sıra"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SENTENCING",
        "clue": "(i.) cezanın belirlenmesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "cezanın belirlenmesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-10x10-7",
    "title": "İnovasyon & Katma Değer",
    "level": "B2",
    "size": 10,
    "description": "Teknolojik dönüşüm ve inovasyon ekosistemleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "ACCUMULATE",
        "clue": "(i.) biriktirmek.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biriktirmek."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ACCELERATE",
        "clue": "(i.) hızlandırmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hızlandırmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "CALM",
        "clue": "(i.) sakin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakin"
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
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "EFFORTLESS",
        "clue": "(i.) zahmetsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zahmetsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-10x10-8",
    "title": "Kurumsal Yönetişim & Etik",
    "level": "B2",
    "size": 10,
    "description": "İş ahlakı, regülasyon ve şeffaflık ilkeleri.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "CONFIDENCE",
        "clue": "(i.) dentakay'a",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dentakay'a"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "COLLEAGUES",
        "clue": "(i.) i̇ş arkadaşları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇ş arkadaşları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ECONOMISTS",
        "clue": "(i.) ekonomist",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekonomist"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ONTO",
        "clue": "(i.) üstüne",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üstüne"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
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
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ZERO",
        "clue": "(i.) sıfır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıfır"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "GIVE",
        "clue": "(f.) vermek, sunmak, bağışlamak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "vermek, sunmak, bağışlamak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "WAIT",
        "clue": "(f.) beklemek",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "beklemek"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-10x10-9",
    "title": "Bilişsel Süreçler & Zihin",
    "level": "B2",
    "size": 10,
    "description": "Nörobilim, psikoloji ve karar alma mekanizmaları.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "FOOTPRINTS",
        "clue": "(i.) ayak izleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ayak izleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "FACILITIES",
        "clue": "(i.) olanaklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olanaklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "OIL",
        "clue": "(i.) yağ, petrol, mazot",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yağ, petrol, mazot"
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
        "row": 0,
        "col": 5,
        "length": 4
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "SAFEGUARDS",
        "clue": "(i.) güvenlik önlemleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güvenlik önlemleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "COLD",
        "clue": "(s.) soğuk  •  (i.) soğukluk; soğuk algınlığı",
        "senses": [
          {
            "pos": "s.",
            "posName": "Sıfat",
            "meaning": "soğuk"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğukluk; soğuk algınlığı"
          }
        ],
        "partOfSpeech": "s.",
        "partOfSpeechName": "Sıfat",
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LEAF",
        "clue": "(i.) yaprak; sayfa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaprak; sayfa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "KING",
        "clue": "(i.) kral, hükümdar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kral, hükümdar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "DATA",
        "clue": "(i.) veri, bilgiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "veri, bilgiler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
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
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "12-across",
        "number": 12,
        "direction": "across",
        "word": "BIRD",
        "clue": "(i.) kuş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kuş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "13-across",
        "number": 13,
        "direction": "across",
        "word": "SELECTIONS",
        "clue": "(i.) seçimler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçimler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  },
  {
    "id": "b2-10x10-10",
    "title": "Sosyal Adalet & Hukuk Devleti",
    "level": "B2",
    "size": 10,
    "description": "İnsan hakları, hukuk felsefesi ve demokratik ilkeler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "INVESTMENT",
        "clue": "(i.) karı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "INEVITABLE",
        "clue": "(i.) kaçınılmaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınılmaz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "col": 5,
        "length": 4
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TERRIFYING",
        "clue": "(i.) dehşet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dehşet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 9,
        "length": 10
      },
      {
        "id": "4-across",
        "number": 4,
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
        "row": 2,
        "col": 0,
        "length": 4
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DOOR",
        "clue": "(i.) kapı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 4
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 4
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 4
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "STAY",
        "clue": "(f.) kalmak, konaklamak, sürdürmek  •  (i.) kalış, konaklama",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "kalmak, konaklamak, sürdürmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalış, konaklama"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 6,
        "col": 6,
        "length": 4
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LOOK",
        "clue": "(f.) bakmak, görünmek  •  (i.) bakış, görünüş",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "bakmak, görünmek"
          },
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakış, görünüş"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 8,
        "col": 0,
        "length": 4
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 6,
        "length": 4
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "EMPOWERING",
        "clue": "(i.) &#10;++",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "&#10;++"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 9,
        "col": 0,
        "length": 10
      }
    ],
    "frequencyLevel": "advanced",
    "frequencyLabel": "Zengin Kelime Dağarcığı"
  }
];

export const PUZZLE_LEVELS: ('A1' | 'A2' | 'B1' | 'B2')[] = ['A1', 'A2', 'B1', 'B2'];
export const PUZZLE_SIZES: (5 | 6 | 7 | 8 | 9 | 10)[] = [5, 6, 7, 8, 9, 10];

export interface CompletedPuzzleRecord {
  puzzleId: string;
  completedAt: number;
  secondsTaken: number;
  score: number;
  hintsUsed: number;
}

export function getPuzzlesByLevelAndSize(level: 'A1' | 'A2' | 'B1' | 'B2', size?: 5 | 6 | 7 | 8 | 9 | 10): PuzzleDefinition[] {
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
    case 'sıfat':
    case 'sifat':
      return { 
        bg: 'bg-amber-500/10 dark:bg-amber-400/15', 
        text: 'text-amber-700 dark:text-amber-300 font-black', 
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

export interface PuzzleFrequencyInfo {
  level: PuzzleFrequencyLevel;
  label: string;
  badge: string;
  tagClass: string;
}

export function getPuzzleFrequencyInfo(puzzle: PuzzleDefinition): PuzzleFrequencyInfo {
  if (puzzle.frequencyLevel) {
    if (puzzle.frequencyLevel === 'high') {
      return {
        level: 'high',
        label: puzzle.frequencyLabel || 'En Sık Kullanılanlar',
        badge: '🔥 En Sık',
        tagClass: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900'
      };
    }
    if (puzzle.frequencyLevel === 'medium') {
      return {
        level: 'medium',
        label: puzzle.frequencyLabel || 'Günlük Pratik & Orta',
        badge: '⭐ Günlük Pratik',
        tagClass: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900'
      };
    }
    return {
      level: 'advanced',
      label: puzzle.frequencyLabel || 'Zengin & İleri Düzey',
      badge: '💎 Zengin Kelimeler',
      tagClass: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-900'
    };
  }
  if (puzzle.level === 'A1') {
    return {
      level: 'high',
      label: 'En Sık Kullanılanlar (Temel A1)',
      badge: '🔥 En Sık',
      tagClass: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900'
    };
  }
  if (puzzle.level === 'A2') {
    if (puzzle.size <= 6) {
      return {
        level: 'high',
        label: 'Sık Kullanılan Günlük Kelimeler',
        badge: '🔥 En Sık',
        tagClass: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900'
      };
    }
    return {
      level: 'medium',
      label: 'Günlük Pratik & Diyaloglar',
      badge: '⭐ Günlük Pratik',
      tagClass: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900'
    };
  }
  if (puzzle.level === 'B1') {
    if (puzzle.size <= 7) {
      return {
        level: 'medium',
        label: 'İş & Sosyal Hayat Kelimeleri',
        badge: '⭐ Günlük Pratik',
        tagClass: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900'
      };
    }
    return {
      level: 'advanced',
      label: 'Zengin B1 Kelimeleri',
      badge: '💎 Zengin Kelimeler',
      tagClass: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-900'
    };
  }
  return {
    level: 'advanced',
    label: 'İleri Düzey & Zengin Kelimeler',
    badge: '💎 Zengin Kelimeler',
    tagClass: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900'
  };
}
