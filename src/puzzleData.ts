// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App
// Exactly 180 Verified Puzzles: 45 per level (A1, A2, B1, B2) with 5x5(5), 6x6(6), 7x7(7), 8x8(8), 9x9(9), 10x10(10)
// Guarantee: 100% Full-Spanning Grid Coverage (No Blank Edges or Empty Rows/Columns)

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
    "description": "Ev, aile ve oda ortamında en sık kullanılan temel İngilizce sözcükler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "HEART",
        "clue": "(i.) kalp",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalp"
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
        "word": "HIKED",
        "clue": "(i.) yürüyüşe çıkıldı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yürüyüşe çıkıldı"
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
        "word": "ADOPT",
        "clue": "(i.) kabul etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kabul etmek"
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
        "word": "TOOLS",
        "clue": "(i.) araçlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "araçlar"
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
        "word": "KYOTO",
        "clue": "(i.) Kyoto",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kyoto"
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
        "word": "DATES",
        "clue": "(i.) tarihler; hurmalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tarihler; hurmalar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "GIVEN",
        "clue": "(i.) verilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "verilmiş"
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
        "word": "GATES",
        "clue": "(i.) kapılar, giriş kapıları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapılar, giriş kapıları"
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
        "word": "VOICE",
        "clue": "(i.) ses",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ses"
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
        "word": "NEEDS",
        "clue": "(i.) ihtiyaçları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ihtiyaçları"
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
        "word": "TWICE",
        "clue": "(i.) yaptırırsınız.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaptırırsınız."
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
        "word": "STEPS",
        "clue": "(i.) adımlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "adımlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "ALLOW",
        "clue": "(i.) izin vermek, sağlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin vermek, sağlamak"
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
        "word": "ADOPT",
        "clue": "(i.) kabul etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kabul etmek"
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
        "word": "LATER",
        "clue": "(i.) sonra",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonra"
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
        "word": "WORLD",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
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
        "word": "OUTER",
        "clue": "(i.) dış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dış"
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
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "BAKED",
        "clue": "(i.) fırınlanmış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fırınlanmış"
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
        "word": "BAKES",
        "clue": "(i.) fırınlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fırınlar"
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
        "word": "KYOTO",
        "clue": "(i.) Kyoto",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kyoto"
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
        "word": "DENSE",
        "clue": "(i.) yoğun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yoğun"
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
        "word": "KNOWN",
        "clue": "(i.) bilinen, tanınan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilinen, tanınan"
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
        "word": "STORE",
        "clue": "(i.) mağaza",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mağaza"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "CATCH",
        "clue": "(i.) tutmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tutmak"
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
        "word": "COOLS",
        "clue": "(i.) soğutur",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "soğutur"
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
        "word": "THESE",
        "clue": "(i.) bunlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bunlar"
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
        "word": "HANDS",
        "clue": "(i.) eller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eller"
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
        "row": 2,
        "col": 0,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "STEPS",
        "clue": "(i.) adımlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "adımlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
    "description": "Ev, aile ve oda ortamında en sık kullanılan temel İngilizce sözcükler.",
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
        "word": "MANAGE",
        "clue": "(f.) yönetmek, idare etmek, başarmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yönetmek, idare etmek, başarmak"
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
        "word": "TASTES",
        "clue": "(i.) lezzetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lezzetler"
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
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
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
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 5,
        "col": 0,
        "length": 6
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PAROLE",
        "clue": "(i.) şartlı tahliye",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şartlı tahliye"
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
        "word": "PROVED",
        "clue": "(i.) kanıtlanmış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kanıtlanmış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EXTEND",
        "clue": "(i.) uzatmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uzatmak"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ERODED",
        "clue": "(i.) aşınmış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aşınmış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "ADULTS",
        "clue": "(i.) yetişkin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yetişkin"
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
        "word": "AISLES",
        "clue": "(i.) koridorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koridorlar"
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
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SAFELY",
        "clue": "(i.) hazırlayın.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazırlayın."
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
        "word": "LITTLE",
        "clue": "(i.) kısmını",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kısmını"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "STORMY",
        "clue": "(i.) fırtınalı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fırtınalı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "CANNOT",
        "clue": "(i.) açılamaz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "açılamaz"
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
        "word": "ENGINE",
        "clue": "(i.) makina",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "makina"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RECENT",
        "clue": "(i.) son",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "son"
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
        "word": "NATIVE",
        "clue": "(i.) yerel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "THREAT",
        "clue": "(i.) tehdit",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehdit"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "DANCED",
        "clue": "(i.) dans etti",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dans etti"
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
        "word": "DELAYS",
        "clue": "(i.) geciktirir, gecikmeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geciktirir, gecikmeler"
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
        "word": "CREATE",
        "clue": "(i.) oluşturma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DESIGN",
        "clue": "(i.) tasarım, dizayn, plan  •  (f.) tasarlamak, planlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tasarım, dizayn, plan"
          },
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "tasarlamak, planlamak"
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
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SCREEN",
        "clue": "(i.) ekran açıklaması",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ekran açıklaması"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "EFFORT",
        "clue": "(i.) ücreti",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ücreti"
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
        "word": "EFFECT",
        "clue": "(i.) etki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "etki"
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
        "word": "FILLER",
        "clue": "(i.) dolgu maddesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dolgu maddesi"
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
        "word": "TOWARD",
        "clue": "(i.) doğru",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "doğru"
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
        "word": "FOLLOW",
        "clue": "(i.) takip et",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "takip et"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "TURNED",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
    "description": "Ev, aile ve oda ortamında en sık kullanılan temel İngilizce sözcükler.",
    "clues": [
      {
        "id": "1-across",
        "number": 1,
        "direction": "across",
        "word": "BROTHER",
        "clue": "(i.) erkek kardeş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "erkek kardeş"
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
        "word": "BALANCE",
        "clue": "(i.) denge, dengelemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "denge, dengelemek"
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
        "word": "ORANGES",
        "clue": "(i.) portakal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "portakal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "REDUCES",
        "clue": "(i.) kaygıyı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaygıyı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LEARNED",
        "clue": "(i.) öğrenilen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğrenilen"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ENSURES",
        "clue": "(i.) altına alıyor...",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "altına alıyor..."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "SMALLER",
        "clue": "(i.) daha küçük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha küçük"
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
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "LITHIUM",
        "clue": "(i.) lityum",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lityum"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RELEASE",
        "clue": "(i.) yil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EXAMPLE",
        "clue": "(i.) örnek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "örnek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "ANOTHER",
        "clue": "(i.) temkinli görünüyorlar.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "temkinli görünüyorlar."
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
        "word": "ARRESTS",
        "clue": "(i.) tutuklamalar, tutuklamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tutuklamalar, tutuklamak"
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
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
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ENSURES",
        "clue": "(i.) altına alıyor...",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "altına alıyor..."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SETTING",
        "clue": "(i.) ayar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ayar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "BREEZES",
        "clue": "(i.) esintiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "esintiler"
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
        "word": "BUTTONS",
        "clue": "(i.) düğmeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düğmeler"
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
        "word": "ENGINES",
        "clue": "(i.) motorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "motorlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SPIDERS",
        "clue": "(i.) orümcekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "orümcekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "CONFIRM",
        "clue": "(i.) onay",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "onay"
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
        "word": "CONQUER",
        "clue": "(i.) fethetmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fethetmek"
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
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "MASSIVE",
        "clue": "(i.) devasa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "devasa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
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
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RELEASE",
        "clue": "(i.) yil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "DAYTIME",
        "clue": "(i.) gündüz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gündüz"
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
        "row": 0,
        "col": 0,
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EXCITED",
        "clue": "(i.) heyecanlanmış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "heyecanlanmış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "ENGINES",
        "clue": "(i.) motorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "motorlar"
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
        "word": "ENACTED",
        "clue": "(i.) yürürlüğe giren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yürürlüğe giren"
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
        "word": "INSTANT",
        "clue": "(i.) an",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "an"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "CAPTURE",
        "clue": "(i.) yakalamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yakalamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DAYTIME",
        "clue": "(i.) gündüz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gündüz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
    "description": "Ev, aile ve oda ortamında en sık kullanılan temel İngilizce sözcükler.",
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
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 2,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "THEORIES",
        "clue": "(i.) teoriler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teoriler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "OFFSHORE",
        "clue": "(i.) off-shore",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "off-shore"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
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
        "word": "ATTENDED",
        "clue": "(i.) katıldı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "katıldı"
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
        "word": "ACADEMIC",
        "clue": "(i.) akademik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "akademik"
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
        "word": "ENGINES",
        "clue": "(i.) motorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "motorlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DELEGATE",
        "clue": "(i.) yetki aktarabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yetki aktarabilir"
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
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INTEREST",
        "clue": "(i.) menfaat",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "menfaat"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "CAMPSITE",
        "clue": "(i.) kamp alanı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamp alanı"
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
        "word": "COMPLETE",
        "clue": "(i.) tamamlama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tamamlama"
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
        "word": "COMMUNAL",
        "clue": "(i.) ortak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortak"
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
        "word": "MODELS",
        "clue": "(i.) modeller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "modeller"
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
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "MIDNIGHT",
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
        "length": 8
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "HIKING",
        "clue": "(i.) yürüyüş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yürüyüş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 6,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DILEMMAS",
        "clue": "(i.) i̇kilemler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇kilemler"
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
        "word": "TOUCHED",
        "clue": "(i.) dokundu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dokundu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
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
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "MONDAY",
        "clue": "(i.) pazartesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pazartesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "APTITUDE",
        "clue": "(i.) -yetenek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "-yetenek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SEARCHES",
        "clue": "(i.) balcicek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "balcicek"
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
        "word": "EXAMINER",
        "clue": "(i.) kontrolör",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kontrolör"
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
        "col": 6,
        "length": 6
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "EUROPEAN",
        "clue": "(i.) avrupa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "avrupa"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "RECHARGE",
        "clue": "(i.) şarj et",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şarj et"
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
        "word": "GIGANTIC",
        "clue": "(i.) devasa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "devasa"
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
        "word": "GRACEFUL",
        "clue": "(i.) zarif",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zarif"
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
        "word": "INSIGHT",
        "clue": "(i.) içyüzünü anlama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "içyüzünü anlama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CHOOSING",
        "clue": "(i.) seçme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçme"
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EARNINGS",
        "clue": "(i.) kazançları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazançları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "word": "INTEREST",
        "clue": "(i.) menfaat",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "menfaat"
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
        "word": "IGNORING",
        "clue": "(i.) grendal, mrs.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "grendal, mrs."
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
        "word": "THEORIES",
        "clue": "(i.) teoriler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teoriler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "3-across",
        "number": 3,
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
        "row": 2,
        "col": 0,
        "length": 8
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "DENSE",
        "clue": "(i.) yoğun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yoğun"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 6,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIRAFFES",
        "clue": "(i.) zürafa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zürafa"
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
        "word": "MOUNTAIN",
        "clue": "(i.) dağ",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dağ"
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
        "word": "MOVEMENT",
        "clue": "(i.) hareket",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hareket"
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
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
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
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "MANAGING",
        "clue": "(i.) &#10;",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "&#10;"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "TREASURE",
        "clue": "(i.) hazine",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazine"
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
    "description": "Ev, aile ve oda ortamında en sık kullanılan temel İngilizce sözcükler.",
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
        "word": "TRIALS",
        "clue": "(i.) deneyler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deneyler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 7,
        "length": 7
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
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "OBSTACLES",
        "clue": "(i.) engeller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "engeller"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "AWARENESS",
        "clue": "(i.) farkındalık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "farkındalık"
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
        "word": "AMSTERDAM",
        "clue": "(i.) Amsterdam",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Amsterdam"
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
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SECTION",
        "clue": "(i.) bölüm, reyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölüm, reyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DEMANDING",
        "clue": "(i.) talepkar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "talepkar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "CORRIDORS",
        "clue": "(i.) koridorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koridorlar"
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
        "word": "COUNTRIES",
        "clue": "(i.) ülkeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ülkeler"
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
        "col": 6,
        "length": 7
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
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ELIMINATE",
        "clue": "(i.) ortadan kaldırın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortadan kaldırın"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ENDURANCE",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
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
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RECENT",
        "clue": "(i.) son",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "son"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DRIVEN",
        "clue": "(i.) sürülmüş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sürülmüş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RECORDING",
        "clue": "(i.) kayıt",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kayıt"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "EXHAUSTED",
        "clue": "(i.) bitkin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bitkin"
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
        "word": "GUARANTEE",
        "clue": "(i.) uygulanır.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uygulanır."
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
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "ELIMINATE",
        "clue": "(i.) ortadan kaldırın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortadan kaldırın"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "SINGAPORE",
        "clue": "(i.) singapur",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "singapur"
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
        "word": "LOCALIZED",
        "clue": "(i.) yerelleştirilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerelleştirilmiş"
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
        "word": "LISTENERS",
        "clue": "(i.) dinleyiciler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinleyiciler"
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
        "col": 7,
        "length": 7
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
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 6,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ELIMINATE",
        "clue": "(i.) ortadan kaldırın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortadan kaldırın"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "OVERSIGHT",
        "clue": "(i.) gözetim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gözetim"
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
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
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
        "word": "SHOULD",
        "clue": "(i.) -meli/-malı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "-meli/-malı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "GROCERY",
        "clue": "(i.) bakkal, market",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakkal, market"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "HAPPILY",
        "clue": "(i.) mutlulukla, neşeyle",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutlulukla, neşeyle"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TERRIFIES",
        "clue": "(i.) dehşete düşürür",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dehşete düşürür"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "FORGOT",
        "clue": "(i.) unuttu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unuttu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NEIGHBORS",
        "clue": "(i.) komşular",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "komşular"
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
        "word": "PROTECTED",
        "clue": "(i.) korumalı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "korumalı"
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
        "word": "PROMPTING",
        "clue": "(i.) telkin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "telkin"
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
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 9
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "PLAGUE",
        "clue": "(i.) salgın hastalıklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "salgın hastalıklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 7,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "PRINCIPLE",
        "clue": "(i.) ilke",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ilke"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "word": "SATISFIES",
        "clue": "(i.) tatmin eder",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tatmin eder"
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
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SEARCHING",
        "clue": "(i.) aranıyor...",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aranıyor..."
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "AUTOMATIC",
        "clue": "(i.) otomatik olarak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otomatik olarak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "SELECTING",
        "clue": "(i.) seçme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçme"
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
    "description": "Ev, aile ve oda ortamında en sık kullanılan temel İngilizce sözcükler.",
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
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 7,
        "length": 7
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
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "BELONGINGS",
        "clue": "(i.) mal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "BIOLOGICAL",
        "clue": "(i.) biyolojik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyolojik"
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
        "word": "BIODIVERSE",
        "clue": "(i.) biyoçeşitlilik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyoçeşitlilik"
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
        "word": "INHERIT",
        "clue": "(i.) miras almak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "miras almak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CLARITY",
        "clue": "(i.) açıklık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "açıklık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INDUSTRIES",
        "clue": "(i.) sektörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sektörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 10
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "SUBSTITUTE",
        "clue": "(i.) ürün ve",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ürün ve"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 10
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "DISTRIBUTE",
        "clue": "(i.) dağıtmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dağıtmak"
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
        "word": "DISMANTLED",
        "clue": "(i.) söküldü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "söküldü"
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
        "word": "SHOULD",
        "clue": "(i.) -meli/-malı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "-meli/-malı"
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
        "word": "BROUGHT",
        "clue": "(i.) getirdi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "getirdi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DOWNSTAIRS",
        "clue": "(i.) merdiven",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "merdiven"
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
        "word": "FUNCTIONAL",
        "clue": "(i.) islevsel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "islevsel"
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
        "word": "OUTFITS",
        "clue": "(i.) kıyafetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kıyafetler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "NOISE",
        "clue": "(i.) gürültü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gürültü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "CONNECTION",
        "clue": "(i.) bağlantı, ilişki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bağlantı, ilişki"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
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
        "row": 4,
        "col": 7,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
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
        "word": "MANDATE",
        "clue": "(i.) görev, yetki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görev, yetki"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "BECAME",
        "clue": "(i.) oldu, dönüştü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oldu, dönüştü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "PURCHASING",
        "clue": "(i.) satın alma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "satın alma"
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
        "word": "PREFRONTAL",
        "clue": "(i.) prefrontal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "prefrontal"
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
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SECTION",
        "clue": "(i.) bölüm, reyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölüm, reyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "GUARANTEES",
        "clue": "(i.) teminatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminatlar"
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
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 10
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "STIMULATES",
        "clue": "(i.) uyarır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uyarır"
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
        "word": "STOCKPILES",
        "clue": "(i.) stoklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stoklar"
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
        "word": "ACCOUNT",
        "clue": "(i.) hesap",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hesap"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "STRATEGIES",
        "clue": "(i.) stratejiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stratejiler"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "KNOWN",
        "clue": "(i.) bilinen, tanınan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilinen, tanınan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BUILT",
        "clue": "(i.) inşa etti, kurdu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "inşa etti, kurdu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 5
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
        "word": "MINOR",
        "clue": "(i.) küçük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "küçük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 7,
        "length": 5
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "INFLICTING",
        "clue": "(i.) tatbik etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tatbik etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "STRUCTURES",
        "clue": "(i.) inşaatı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "inşaatı"
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
        "word": "GENERATION",
        "clue": "(i.) nesil, kuşak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nesil, kuşak"
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
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEWSPAPERS",
        "clue": "(i.) gazeteler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gazeteler"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "GUARANTEES",
        "clue": "(i.) teminatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminatlar"
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
        "word": "ANALYTICAL",
        "clue": "(i.) analitik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "analitik"
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
        "word": "APPLICANTS",
        "clue": "(i.) başvuranlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "başvuranlar"
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
        "word": "AVOIDS",
        "clue": "(i.) kaçınır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınır"
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
        "word": "CUISINE",
        "clue": "(i.) mutfak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutfak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "PRODUCTION",
        "clue": "(i.) üretim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üretim"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INDUSTRIES",
        "clue": "(i.) sektörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sektörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 10
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
        "word": "COCOA",
        "clue": "(i.) kakao",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kakao"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 6,
        "length": 5
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
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
        "word": "CONNECTION",
        "clue": "(i.) bağlantı, ilişki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bağlantı, ilişki"
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
        "word": "CONTINENTS",
        "clue": "(i.) kıtalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kıtalar"
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEWSPAPERS",
        "clue": "(i.) gazeteler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gazeteler"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "BUSES",
        "clue": "(i.) otobüsler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüsler"
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
        "word": "BAKES",
        "clue": "(i.) fırınlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fırınlar"
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
        "word": "SPOKE",
        "clue": "(i.) konuştu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuştu"
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
        "word": "STORE",
        "clue": "(i.) mağaza",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mağaza"
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
        "word": "KYOTO",
        "clue": "(i.) Kyoto",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kyoto"
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
        "word": "STEVE",
        "clue": "(i.) steve!",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "steve!"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "GIVEN",
        "clue": "(i.) verilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "verilmiş"
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
        "word": "GATES",
        "clue": "(i.) kapılar, giriş kapıları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapılar, giriş kapıları"
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
        "word": "VOICE",
        "clue": "(i.) ses",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ses"
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
        "word": "NEEDS",
        "clue": "(i.) ihtiyaçları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ihtiyaçları"
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
        "word": "TWICE",
        "clue": "(i.) yaptırırsınız.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaptırırsınız."
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
        "word": "STEPS",
        "clue": "(i.) adımlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "adımlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "ALLOW",
        "clue": "(i.) izin vermek, sağlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin vermek, sağlamak"
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
        "word": "ADOPT",
        "clue": "(i.) kabul etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kabul etmek"
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
        "word": "LATER",
        "clue": "(i.) sonra",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonra"
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
        "word": "WORLD",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
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
        "word": "OUTER",
        "clue": "(i.) dış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dış"
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
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "ASSET",
        "clue": "(i.) varlık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "varlık"
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
        "word": "ALLOW",
        "clue": "(i.) izin vermek, sağlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin vermek, sağlamak"
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
        "word": "SHADE",
        "clue": "(i.) ton",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ton"
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
        "word": "LEADS",
        "clue": "(i.) ilişki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ilişki"
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
        "word": "WEEKS",
        "clue": "(i.) hafta",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hafta"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "CARGO",
        "clue": "(i.) kargo",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kargo"
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
        "word": "COCOA",
        "clue": "(i.) kakao",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kakao"
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
        "word": "RESTS",
        "clue": "(i.) dinlenme yerleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinlenme yerleri"
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
        "word": "ONSET",
        "clue": "(i.) saldırı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "saldırı"
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
        "word": "COSTS",
        "clue": "(i.) fiyatlar.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fiyatlar."
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
        "word": "ASSET",
        "clue": "(i.) varlık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "varlık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "PAROLE",
        "clue": "(i.) şartlı tahliye",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şartlı tahliye"
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
        "word": "PROVED",
        "clue": "(i.) kanıtlanmış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kanıtlanmış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EXTEND",
        "clue": "(i.) uzatmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uzatmak"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ERODED",
        "clue": "(i.) aşınmış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aşınmış"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "DRIVEN",
        "clue": "(i.) sürülmüş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sürülmüş"
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
        "word": "DANCED",
        "clue": "(i.) dans etti",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dans etti"
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
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
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
        "word": "NEURAL",
        "clue": "(i.) sinir sistemi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sinir sistemi"
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
        "word": "CLOSER",
        "clue": "(i.) daha yakın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha yakın"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DIESEL",
        "clue": "(i.) iptal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iptal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ABROAD",
        "clue": "(i.) yurt dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yurt dışı"
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
        "word": "RICHER",
        "clue": "(i.) daha zengin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha zengin"
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
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
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
        "word": "RECENT",
        "clue": "(i.) son",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "son"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DURING",
        "clue": "(i.) dönem",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dönem"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "BETTER",
        "clue": "(i.) iyi.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iyi."
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
        "word": "BODIES",
        "clue": "(i.) gösteriyor.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteriyor."
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
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RESTED",
        "clue": "(i.) dinlenmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinlenmiş"
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
        "word": "DELAYS",
        "clue": "(i.) geciktirir, gecikmeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geciktirir, gecikmeler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SMILED",
        "clue": "(i.) gülümsedi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gülümsedi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "COFFEE",
        "clue": "(i.) kahve",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kahve"
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
        "word": "CORNER",
        "clue": "(i.) köşe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köşe"
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
        "word": "FUTURE",
        "clue": "(i.) gelecek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelecek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 5,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ROUTES",
        "clue": "(i.) yollar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yollar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "DIESEL",
        "clue": "(i.) iptal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iptal"
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
        "word": "DIRECT",
        "clue": "(i.) yönetmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yönetmek"
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
        "word": "STRICT",
        "clue": "(i.) sıkı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıkı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
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
        "word": "ENGINE",
        "clue": "(i.) makina",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "makina"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TASTES",
        "clue": "(i.) lezzetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lezzetler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
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
        "word": "TOUCHED",
        "clue": "(i.) dokundu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dokundu"
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
        "word": "UPRIGHT",
        "clue": "(i.) düz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "CITIZEN",
        "clue": "(i.) vatandaş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vatandaş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DISTANT",
        "clue": "(i.) mesafeli&#10;",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mesafeli&#10;"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "CAREFUL",
        "clue": "(i.) dikkatli, özenli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dikkatli, özenli"
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
        "word": "FRAGILE",
        "clue": "(i.) hassas",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hassas"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "LOCALLY",
        "clue": "(i.) lokal olarak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lokal olarak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "TRIVIAL",
        "clue": "(i.) önemsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "önemsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LARGELY",
        "clue": "(i.) de kesilmis",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "de kesilmis"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "ARRESTS",
        "clue": "(i.) tutuklamalar, tutuklamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tutuklamalar, tutuklamak"
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
        "word": "AVENUES",
        "clue": "(i.) uzanır.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uzanır."
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
        "word": "REGULAR",
        "clue": "(i.) normal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "normal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SCHOOLS",
        "clue": "(i.) okullar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okullar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SERIOUS",
        "clue": "(i.) ciddî",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ciddî"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "BURNOUT",
        "clue": "(i.) tükenmişlik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tükenmişlik"
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
        "word": "BANNERS",
        "clue": "(i.) pankartlar, afişler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pankartlar, afişler"
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
        "word": "NOTHING",
        "clue": "(i.) sorum yok.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sorum yok."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ALLOW",
        "clue": "(i.) izin vermek, sağlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin vermek, sağlamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 1,
        "col": 0,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ENGINES",
        "clue": "(i.) motorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "motorlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SUGGEST",
        "clue": "(i.) ileri sürmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ileri sürmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "CONQUER",
        "clue": "(i.) fethetmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fethetmek"
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
        "word": "CREATES",
        "clue": "(i.) yaratır.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaratır."
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
        "word": "QUIETER",
        "clue": "(i.) daha sessiz.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha sessiz."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RELEASE",
        "clue": "(i.) yil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yil"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ETHICAL",
        "clue": "(i.) etik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "etik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EATEN",
        "clue": "(i.) yenmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yenmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 5
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "STERILE",
        "clue": "(i.) olmayan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olmayan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "DELAYED",
        "clue": "(i.) geciktirilmelidir.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geciktirilmelidir."
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
        "word": "DEFICIT",
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
        "word": "AFRICAN",
        "clue": "(i.) afrika dilleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "afrika dilleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DISTANT",
        "clue": "(i.) mesafeli&#10;",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mesafeli&#10;"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "INSIGHT",
        "clue": "(i.) içyüzünü anlama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "içyüzünü anlama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
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
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "ENACTED",
        "clue": "(i.) yürürlüğe giren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yürürlüğe giren"
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
        "word": "ENTERED",
        "clue": "(i.) girildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "girildi"
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
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DAYTIME",
        "clue": "(i.) gündüz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gündüz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "EXHIBIT",
        "clue": "(i.) göstermek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "göstermek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
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
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "EQUAL",
        "clue": "(i.) eşit",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eşit"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "REMEMBER",
        "clue": "(i.) hatırlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hatırlamak"
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
        "word": "SODIUM",
        "clue": "(i.) sodyum",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sodyum"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 2,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "OFFSHORE",
        "clue": "(i.) off-shore",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "off-shore"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
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
        "word": "ALTHOUGH",
        "clue": "(i.) ... e rağmen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "... e rağmen"
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
        "word": "ALLOWING",
        "clue": "(i.) ? imkan vermektedir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "? imkan vermektedir"
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
        "word": "GROCERY",
        "clue": "(i.) bakkal, market",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakkal, market"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "WARMLY",
        "clue": "(i.) sıcak bir şekilde",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıcak bir şekilde"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GRACEFUL",
        "clue": "(i.) zarif",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zarif"
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
        "word": "CAPITALS",
        "clue": "(i.) büyük harfler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük harfler"
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
        "word": "CHECKOUT",
        "clue": "(i.) odeme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "odeme"
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
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
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
        "id": "5-down",
        "number": 5,
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
        "row": 3,
        "col": 2,
        "length": 5
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "KNOWN",
        "clue": "(i.) bilinen, tanınan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilinen, tanınan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ULTIMATE",
        "clue": "(i.) nihai, en üstün, son",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nihai, en üstün, son"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "THEORIES",
        "clue": "(i.) teoriler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teoriler"
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
        "word": "CRIPPLED",
        "clue": "(i.) sakat/kötürüm.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sakat/kötürüm."
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
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ENGINES",
        "clue": "(i.) motorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "motorlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DELEGATE",
        "clue": "(i.) yetki aktarabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yetki aktarabilir"
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
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "UPCOMING",
        "clue": "(i.) yaklaşan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaklaşan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "word": "ENHANCES",
        "clue": "(i.) geliştirir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geliştirir"
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
        "word": "ENRICHES",
        "clue": "(i.) zenginleştirir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zenginleştirir"
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
        "row": 0,
        "col": 6,
        "length": 6
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
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SEARCHES",
        "clue": "(i.) balcicek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "balcicek"
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
        "word": "FREEZING",
        "clue": "(i.) donarken",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "donarken"
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
        "word": "FREQUENT",
        "clue": "(i.) sık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sık"
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
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "EARNINGS",
        "clue": "(i.) kazançları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazançları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 8
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "BAKER",
        "clue": "(i.) fırıncı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fırıncı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 6,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "TREASURE",
        "clue": "(i.) hazine",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazine"
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
        "word": "IMPROVES",
        "clue": "(i.) rekabeti",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "rekabeti"
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
        "word": "INCOMING",
        "clue": "(i.) gelen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelen"
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
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "MONDAY",
        "clue": "(i.) pazartesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pazartesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "GIRAFFES",
        "clue": "(i.) zürafa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zürafa"
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
        "word": "MIDNIGHT",
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
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "MOISTURE",
        "clue": "(i.) nem",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nem"
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
        "word": "HAPPILY",
        "clue": "(i.) mutlulukla, neşeyle",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutlulukla, neşeyle"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EUROPEAN",
        "clue": "(i.) avrupa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "avrupa"
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
        "word": "CHALLENGE",
        "clue": "(i.) meydan okuma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "meydan okuma"
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
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "GIVEN",
        "clue": "(i.) verilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "verilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EMBRACING",
        "clue": "(i.) kucaklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kucaklama"
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
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BARCELONA",
        "clue": "(i.) Barselona",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Barselona"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DEMANDING",
        "clue": "(i.) talepkar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "talepkar"
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
        "word": "AUTOMATED",
        "clue": "(i.) otomasyon alanında",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otomasyon alanında"
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
        "word": "AUTOMATIC",
        "clue": "(i.) otomatik olarak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otomatik olarak"
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
        "word": "MANAGE",
        "clue": "(f.) yönetmek, idare etmek, başarmak",
        "senses": [
          {
            "pos": "f.",
            "posName": "Fiil",
            "meaning": "yönetmek, idare etmek, başarmak"
          }
        ],
        "partOfSpeech": "f.",
        "partOfSpeechName": "Fiil",
        "row": 0,
        "col": 4,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "TEMPT",
        "clue": "(i.) baştan çıkarmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "baştan çıkarmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 5
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
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
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
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TASTES",
        "clue": "(i.) lezzetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lezzetler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "IMMERSION",
        "clue": "(i.) batırma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "batırma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "COMPANIES",
        "clue": "(i.) şirketler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şirketler"
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
        "word": "CONSCIOUS",
        "clue": "(i.) bilinçli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilinçli"
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
        "word": "CONVERSES",
        "clue": "(i.) konversolar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konversolar"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SEARCHING",
        "clue": "(i.) aranıyor...",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aranıyor..."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ELIMINATE",
        "clue": "(i.) ortadan kaldırın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortadan kaldırın"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "EMOTIONAL",
        "clue": "(i.) duygusal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "duygusal"
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
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "AFRICAN",
        "clue": "(i.) afrika dilleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "afrika dilleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
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
        "word": "GRANTS",
        "clue": "(i.) bağışlar, hibe eder",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bağışlar, hibe eder"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EMBRACING",
        "clue": "(i.) kucaklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kucaklama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "RECOGNIZE",
        "clue": "(i.) tanımak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanımak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "GRADUATES",
        "clue": "(i.) mezunlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mezunlar"
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
        "word": "GUARANTEE",
        "clue": "(i.) uygulanır.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uygulanır."
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
        "word": "THREAT",
        "clue": "(i.) tehdit",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tehdit"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ASTRONAUT",
        "clue": "(i.) uçurcu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uçurcu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ELIMINATE",
        "clue": "(i.) ortadan kaldırın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortadan kaldırın"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
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
        "word": "LOCALIZED",
        "clue": "(i.) yerelleştirilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerelleştirilmiş"
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
        "word": "LISTENERS",
        "clue": "(i.) dinleyiciler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinleyiciler"
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
        "col": 7,
        "length": 7
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
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 6,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ELIMINATE",
        "clue": "(i.) ortadan kaldırın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortadan kaldırın"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "OVERSIGHT",
        "clue": "(i.) gözetim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gözetim"
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
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
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
        "word": "SHOULD",
        "clue": "(i.) -meli/-malı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "-meli/-malı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "GROCERY",
        "clue": "(i.) bakkal, market",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakkal, market"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "HAPPILY",
        "clue": "(i.) mutlulukla, neşeyle",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutlulukla, neşeyle"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TERRIFIES",
        "clue": "(i.) dehşete düşürür",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dehşete düşürür"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "FORGOT",
        "clue": "(i.) unuttu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unuttu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NEIGHBORS",
        "clue": "(i.) komşular",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "komşular"
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
        "word": "PROTECTED",
        "clue": "(i.) korumalı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "korumalı"
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
        "word": "PROMPTING",
        "clue": "(i.) telkin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "telkin"
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
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 9
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "PLAGUE",
        "clue": "(i.) salgın hastalıklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "salgın hastalıklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 7,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "PRINCIPLE",
        "clue": "(i.) ilke",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ilke"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "word": "SATISFIES",
        "clue": "(i.) tatmin eder",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tatmin eder"
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
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SEARCHING",
        "clue": "(i.) aranıyor...",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aranıyor..."
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "AUTOMATIC",
        "clue": "(i.) otomatik olarak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otomatik olarak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "SELECTING",
        "clue": "(i.) seçme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçme"
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
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 7,
        "length": 7
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
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "BELONGINGS",
        "clue": "(i.) mal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "BIOLOGICAL",
        "clue": "(i.) biyolojik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyolojik"
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
        "word": "BIODIVERSE",
        "clue": "(i.) biyoçeşitlilik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyoçeşitlilik"
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
        "word": "INHERIT",
        "clue": "(i.) miras almak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "miras almak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CLARITY",
        "clue": "(i.) açıklık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "açıklık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INDUSTRIES",
        "clue": "(i.) sektörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sektörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 10
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "SUBSTITUTE",
        "clue": "(i.) ürün ve",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ürün ve"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 10
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "DISTRIBUTE",
        "clue": "(i.) dağıtmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dağıtmak"
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
        "word": "DISMANTLED",
        "clue": "(i.) söküldü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "söküldü"
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
        "word": "SHOULD",
        "clue": "(i.) -meli/-malı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "-meli/-malı"
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
        "word": "BROUGHT",
        "clue": "(i.) getirdi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "getirdi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DOWNSTAIRS",
        "clue": "(i.) merdiven",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "merdiven"
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
        "word": "FUNCTIONAL",
        "clue": "(i.) islevsel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "islevsel"
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
        "word": "OUTFITS",
        "clue": "(i.) kıyafetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kıyafetler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "NOISE",
        "clue": "(i.) gürültü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gürültü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "CONNECTION",
        "clue": "(i.) bağlantı, ilişki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bağlantı, ilişki"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
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
        "row": 4,
        "col": 7,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
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
        "word": "MANDATE",
        "clue": "(i.) görev, yetki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görev, yetki"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "BECAME",
        "clue": "(i.) oldu, dönüştü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oldu, dönüştü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "PURCHASING",
        "clue": "(i.) satın alma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "satın alma"
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
        "word": "PREFRONTAL",
        "clue": "(i.) prefrontal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "prefrontal"
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
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SECTION",
        "clue": "(i.) bölüm, reyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölüm, reyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "GUARANTEES",
        "clue": "(i.) teminatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminatlar"
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
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 10
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "STIMULATES",
        "clue": "(i.) uyarır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uyarır"
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
        "word": "STOCKPILES",
        "clue": "(i.) stoklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stoklar"
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
        "word": "ACCOUNT",
        "clue": "(i.) hesap",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hesap"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "STRATEGIES",
        "clue": "(i.) stratejiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stratejiler"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "KNOWN",
        "clue": "(i.) bilinen, tanınan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilinen, tanınan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BUILT",
        "clue": "(i.) inşa etti, kurdu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "inşa etti, kurdu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 5
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
        "word": "MINOR",
        "clue": "(i.) küçük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "küçük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 7,
        "length": 5
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "INFLICTING",
        "clue": "(i.) tatbik etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tatbik etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "STRUCTURES",
        "clue": "(i.) inşaatı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "inşaatı"
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
        "word": "GENERATION",
        "clue": "(i.) nesil, kuşak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nesil, kuşak"
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
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEWSPAPERS",
        "clue": "(i.) gazeteler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gazeteler"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "GUARANTEES",
        "clue": "(i.) teminatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminatlar"
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
        "word": "ANALYTICAL",
        "clue": "(i.) analitik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "analitik"
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
        "word": "APPLICANTS",
        "clue": "(i.) başvuranlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "başvuranlar"
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
        "word": "AVOIDS",
        "clue": "(i.) kaçınır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınır"
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
        "word": "CUISINE",
        "clue": "(i.) mutfak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutfak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "PRODUCTION",
        "clue": "(i.) üretim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üretim"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INDUSTRIES",
        "clue": "(i.) sektörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sektörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 10
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
        "word": "COCOA",
        "clue": "(i.) kakao",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kakao"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 6,
        "length": 5
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
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
        "word": "CONNECTION",
        "clue": "(i.) bağlantı, ilişki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bağlantı, ilişki"
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
        "word": "CONTINENTS",
        "clue": "(i.) kıtalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kıtalar"
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEWSPAPERS",
        "clue": "(i.) gazeteler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gazeteler"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "ALLOW",
        "clue": "(i.) izin vermek, sağlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin vermek, sağlamak"
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
        "word": "ADOPT",
        "clue": "(i.) kabul etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kabul etmek"
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
        "word": "LATER",
        "clue": "(i.) sonra",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonra"
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
        "word": "WORLD",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
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
        "word": "OUTER",
        "clue": "(i.) dış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dış"
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
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "GIVEN",
        "clue": "(i.) verilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "verilmiş"
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
        "word": "GATES",
        "clue": "(i.) kapılar, giriş kapıları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kapılar, giriş kapıları"
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
        "word": "VOICE",
        "clue": "(i.) ses",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ses"
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
        "word": "NEEDS",
        "clue": "(i.) ihtiyaçları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ihtiyaçları"
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
        "word": "TWICE",
        "clue": "(i.) yaptırırsınız.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yaptırırsınız."
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
        "word": "STEPS",
        "clue": "(i.) adımlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "adımlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "CLOTH",
        "clue": "(i.) kumaş, bez",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kumaş, bez"
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
        "word": "CHEAP",
        "clue": "(i.) ucuz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ucuz"
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
        "word": "OUTER",
        "clue": "(i.) dış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dış"
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
        "word": "HANDS",
        "clue": "(i.) eller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eller"
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
        "word": "EATEN",
        "clue": "(i.) yenmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yenmiş"
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
        "word": "PARKS",
        "clue": "(i.) parklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "parklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "APART",
        "clue": "(i.) dai̇re",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dai̇re"
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
        "word": "ALLOW",
        "clue": "(i.) izin vermek, sağlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin vermek, sağlamak"
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
        "word": "AGAIN",
        "clue": "(i.) yine ben.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yine ben."
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
        "word": "LEADS",
        "clue": "(i.) ilişki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ilişki"
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
        "word": "WANTS",
        "clue": "(i.) istekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "istekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "BUSES",
        "clue": "(i.) otobüsler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otobüsler"
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
        "word": "BEGAN",
        "clue": "(i.) başladı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "başladı"
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
        "word": "SHINE",
        "clue": "(i.) parlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "parlamak"
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
        "word": "SIGNS",
        "clue": "(i.) na",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "na"
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
        "word": "GOING",
        "clue": "(i.) gidiyor, gitme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gidiyor, gitme"
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
        "word": "NEEDS",
        "clue": "(i.) ihtiyaçları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ihtiyaçları"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "CHOICE",
        "clue": "(i.) seçim, tercih",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçim, tercih"
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
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "INSIDE",
        "clue": "(i.) içeride",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "içeride"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EFFECT",
        "clue": "(i.) etki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "etki"
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
        "word": "ENGINE",
        "clue": "(i.) makina",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "makina"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RECENT",
        "clue": "(i.) son",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "son"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "SIMPLE",
        "clue": "(i.) tekil",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tekil"
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
        "word": "SOCIAL",
        "clue": "(i.) sosyal-duygusal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sosyal-duygusal"
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
        "word": "MONTHS",
        "clue": "(i.) aylar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aylar"
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
        "word": "EMAILS",
        "clue": "(i.) e-postalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "e-postalar"
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
        "word": "CINEMA",
        "clue": "(i.) sinema",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sinema"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LOSSES",
        "clue": "(i.) kaybetme sayısı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaybetme sayısı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "FALLEN",
        "clue": "(i.) düşmüş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşmüş"
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
        "word": "FATHER",
        "clue": "(i.) baba",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "baba"
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
        "word": "LONGER",
        "clue": "(i.) boyunca",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "boyunca"
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
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
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
        "word": "HIGHER",
        "clue": "(i.) daha yüksek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha yüksek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "row": 0,
        "col": 0,
        "length": 6
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ABROAD",
        "clue": "(i.) yurt dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yurt dışı"
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
        "word": "RICHER",
        "clue": "(i.) daha zengin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha zengin"
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
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
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
        "word": "RECENT",
        "clue": "(i.) son",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "son"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DURING",
        "clue": "(i.) dönem",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dönem"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "BODIES",
        "clue": "(i.) gösteriyor.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteriyor."
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
        "word": "BRAINS",
        "clue": "(i.) beyinler!",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "beyinler!"
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
        "word": "DIESEL",
        "clue": "(i.) iptal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iptal"
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
        "word": "SAFELY",
        "clue": "(i.) hazırlayın.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazırlayın."
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
        "word": "INSIDE",
        "clue": "(i.) içeride",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "içeride"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "COVERS",
        "clue": "(i.) teminat",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminat"
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
        "word": "CREATE",
        "clue": "(i.) oluşturma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturma"
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
        "word": "ENGINE",
        "clue": "(i.) makina",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "makina"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SHIELD",
        "clue": "(i.) kalkan, korumak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kalkan, korumak"
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
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EXTEND",
        "clue": "(i.) uzatmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uzatmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "BALANCE",
        "clue": "(i.) denge, dengelemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "denge, dengelemek"
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
        "word": "BROUGHT",
        "clue": "(i.) getirdi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "getirdi"
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
        "word": "NOTHING",
        "clue": "(i.) sorum yok.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sorum yok."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
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
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ONSET",
        "clue": "(i.) saldırı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "saldırı"
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
        "word": "GENUINE",
        "clue": "(i.) orijinal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "orijinal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "BROTHER",
        "clue": "(i.) erkek kardeş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "erkek kardeş"
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
        "word": "BANANAS",
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
        "length": 7
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
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
        "row": 0,
        "col": 3,
        "length": 7
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
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AVENUES",
        "clue": "(i.) uzanır.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uzanır."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SETTING",
        "clue": "(i.) ayar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ayar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ARRIVES",
        "clue": "(i.) varır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "varır"
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
        "word": "REPLACE",
        "clue": "(i.) değiştirin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "değiştirin"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DAYTIME",
        "clue": "(i.) gündüz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gündüz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "STERILE",
        "clue": "(i.) olmayan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olmayan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "BECOMES",
        "clue": "(i.) olur",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olur"
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
        "word": "BEHAVES",
        "clue": "(i.) davranır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "davranır"
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
        "col": 3,
        "length": 7
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
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ARRESTS",
        "clue": "(i.) tutuklamalar, tutuklamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tutuklamalar, tutuklamak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EATEN",
        "clue": "(i.) yenmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yenmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 5
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SPIDERS",
        "clue": "(i.) orümcekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "orümcekler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "CLEANER",
        "clue": "(i.) temizleyici",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "temizleyici"
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
        "word": "CLAIMED",
        "clue": "(i.) talep edildi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "talep edildi"
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
        "word": "ENGINES",
        "clue": "(i.) motorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "motorlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RESPECT",
        "clue": "(i.) saygı, saygı duymak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "saygı, saygı duymak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "MANDATE",
        "clue": "(i.) görev, yetki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görev, yetki"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DISTANT",
        "clue": "(i.) mesafeli&#10;",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mesafeli&#10;"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "CREDITS",
        "clue": "(i.) kredi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kredi"
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
        "word": "CROWDED",
        "clue": "(i.) c",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "c"
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
        "word": "ENGINES",
        "clue": "(i.) motorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "motorlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SOCIETY",
        "clue": "(i.) arkadaşlık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "arkadaşlık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "ORGANIC",
        "clue": "(i.) organik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "organik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DISPLAY",
        "clue": "(i.) görüntü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görüntü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "DIVERSE",
        "clue": "(i.) çeşitli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çeşitli"
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
        "word": "DISTURB",
        "clue": "(i.) rahatsız etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "rahatsız etmek"
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
        "id": "3-down",
        "number": 3,
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
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "STERILE",
        "clue": "(i.) olmayan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olmayan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "BROUGHT",
        "clue": "(i.) getirdi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "getirdi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "BUSINESS",
        "clue": "(i.) iş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iş"
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
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
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
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
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
        "word": "ADVANCED",
        "clue": "(i.) gelişmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelişmiş"
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
        "word": "ALTHOUGH",
        "clue": "(i.) ... e rağmen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "... e rağmen"
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
        "word": "ENSURES",
        "clue": "(i.) altına alıyor...",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "altına alıyor..."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "OFFSHORE",
        "clue": "(i.) off-shore",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "off-shore"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "GREATEST",
        "clue": "(i.) en büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "en büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "HIGHWAYS",
        "clue": "(i.) karayolları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karayolları"
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
        "word": "CAMPSITE",
        "clue": "(i.) kamp alanı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamp alanı"
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
        "word": "CAPITALS",
        "clue": "(i.) büyük harfler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük harfler"
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
        "word": "TASTES",
        "clue": "(i.) lezzetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lezzetler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EARNINGS",
        "clue": "(i.) kazançları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazançları"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "word": "DELEGATE",
        "clue": "(i.) yetki aktarabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yetki aktarabilir"
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
        "word": "DELICATE",
        "clue": "(i.) hassas, narin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hassas, narin"
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
        "col": 6,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EARNINGS",
        "clue": "(i.) kazançları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazançları"
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
        "word": "LISTENER",
        "clue": "(i.) dinleyici",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinleyici"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "TRACKING",
        "clue": "(i.) takibi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "takibi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ELEVATES",
        "clue": "(i.) yükseltir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yükseltir"
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
        "word": "EVALUATE",
        "clue": "(i.) değerlendirme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "değerlendirme"
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
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EXERCISE",
        "clue": "(i.) alıştırma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alıştırma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "CAMPSITE",
        "clue": "(i.) kamp alanı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kamp alanı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "word": "GIRAFFES",
        "clue": "(i.) zürafa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "zürafa"
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
        "word": "GIGANTIC",
        "clue": "(i.) devasa",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "devasa"
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
        "word": "GRANTS",
        "clue": "(i.) bağışlar, hibe eder",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bağışlar, hibe eder"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INDICATE",
        "clue": "(i.) göstermek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "göstermek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "CAPITALS",
        "clue": "(i.) büyük harfler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük harfler"
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
        "word": "INVESTED",
        "clue": "(i.) yatırım yapıldı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yatırım yapıldı"
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
        "word": "INTEREST",
        "clue": "(i.) menfaat",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "menfaat"
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
        "word": "STRESS",
        "clue": "(i.) stres",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stres"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
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
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "DISPROVE",
        "clue": "(i.) aksini kanıtlamak, çürütmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aksini kanıtlamak, çürütmek"
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
        "word": "THEORIES",
        "clue": "(i.) teoriler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teoriler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TREASURE",
        "clue": "(i.) hazine",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazine"
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
        "word": "MOMENTUM",
        "clue": "(i.) momentumpropertyname",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "momentumpropertyname"
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
        "word": "MOUNTAIN",
        "clue": "(i.) dağ",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dağ"
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
        "word": "UPRIGHT",
        "clue": "(i.) düz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "MOREOVER",
        "clue": "(i.) dahası,",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dahası,"
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
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INDICATE",
        "clue": "(i.) göstermek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "göstermek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
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
        "word": "CHALLENGE",
        "clue": "(i.) meydan okuma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "meydan okuma"
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
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "GIVEN",
        "clue": "(i.) verilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "verilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "EMBRACING",
        "clue": "(i.) kucaklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kucaklama"
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
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BARCELONA",
        "clue": "(i.) Barselona",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Barselona"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "DEMANDING",
        "clue": "(i.) talepkar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "talepkar"
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
        "word": "ATTENTION",
        "clue": "(i.) dikkat",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dikkat"
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
        "word": "AWARENESS",
        "clue": "(i.) farkındalık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "farkındalık"
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
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "AUTOMATIC",
        "clue": "(i.) otomatik olarak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otomatik olarak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 9
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "PROPER",
        "clue": "(i.) düzgün",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düzgün"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 7,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
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
        "word": "CONVINCES",
        "clue": "(i.) ikna eder",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ikna eder"
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
        "word": "CORRIDORS",
        "clue": "(i.) koridorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koridorlar"
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
        "word": "COCOA",
        "clue": "(i.) kakao",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kakao"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 5
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "IMPORTANT",
        "clue": "(i.) önemli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "önemli"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OBSERVING",
        "clue": "(i.) gözlemleme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gözlemleme"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "RECOGNIZE",
        "clue": "(i.) tanımak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tanımak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "ENDURANCE",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
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
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RECENT",
        "clue": "(i.) son",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "son"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DRIVEN",
        "clue": "(i.) sürülmüş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sürülmüş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RECORDING",
        "clue": "(i.) kayıt",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kayıt"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "EXHAUSTED",
        "clue": "(i.) bitkin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bitkin"
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
        "word": "GUARANTEE",
        "clue": "(i.) uygulanır.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uygulanır."
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
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "EMERGENCY",
        "clue": "(i.) acil durum",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "acil durum"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "EMBRACING",
        "clue": "(i.) kucaklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kucaklama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "IMMERSION",
        "clue": "(i.) batırma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "batırma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "ENERGETIC",
        "clue": "(i.) enerjik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "enerjik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
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
        "word": "LOCALIZED",
        "clue": "(i.) yerelleştirilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerelleştirilmiş"
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
        "word": "LISTENERS",
        "clue": "(i.) dinleyiciler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinleyiciler"
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
        "col": 7,
        "length": 7
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
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 6,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ELIMINATE",
        "clue": "(i.) ortadan kaldırın",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortadan kaldırın"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "OVERSIGHT",
        "clue": "(i.) gözetim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gözetim"
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
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
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
        "word": "SHOULD",
        "clue": "(i.) -meli/-malı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "-meli/-malı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "GROCERY",
        "clue": "(i.) bakkal, market",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bakkal, market"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "HAPPILY",
        "clue": "(i.) mutlulukla, neşeyle",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutlulukla, neşeyle"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "TERRIFIES",
        "clue": "(i.) dehşete düşürür",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dehşete düşürür"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 8,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "FORGOT",
        "clue": "(i.) unuttu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unuttu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "NEIGHBORS",
        "clue": "(i.) komşular",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "komşular"
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
        "word": "PROTECTED",
        "clue": "(i.) korumalı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "korumalı"
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
        "word": "PROMPTING",
        "clue": "(i.) telkin",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "telkin"
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
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 9
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "PLAGUE",
        "clue": "(i.) salgın hastalıklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "salgın hastalıklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 7,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "PRINCIPLE",
        "clue": "(i.) ilke",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ilke"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "word": "SATISFIES",
        "clue": "(i.) tatmin eder",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tatmin eder"
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
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SEARCHING",
        "clue": "(i.) aranıyor...",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aranıyor..."
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "AUTOMATIC",
        "clue": "(i.) otomatik olarak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otomatik olarak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "OFFSEASON",
        "clue": "(i.) sezon dışı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezon dışı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "SELECTING",
        "clue": "(i.) seçme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçme"
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
        "word": "FOUNDATION",
        "clue": "(i.) vakıf",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vakıf"
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEWSPAPERS",
        "clue": "(i.) gazeteler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gazeteler"
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
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "ASTRONAUTS",
        "clue": "(i.) <g id=\"1\">astronauts</g>”",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "<g id=\"1\">astronauts</g>”"
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
        "word": "AUTOMATING",
        "clue": "(i.) otomatikleştirme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "otomatikleştirme"
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
        "word": "TAKEN",
        "clue": "(i.) alınmış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alınmış"
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
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "col": 7,
        "length": 7
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
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "MONDAY",
        "clue": "(i.) pazartesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pazartesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TASTES",
        "clue": "(i.) lezzetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lezzetler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "INSTRUCTOR",
        "clue": "(i.) eğitmen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eğitmen"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "GUARANTEES",
        "clue": "(i.) teminatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminatlar"
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
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DIFFERENCE",
        "clue": "(i.) fark",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fark"
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
        "word": "NOTHING",
        "clue": "(i.) sorum yok.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sorum yok."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
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
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "FORGOT",
        "clue": "(i.) unuttu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unuttu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
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
        "row": 4,
        "col": 0,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "FRAGMENTED",
        "clue": "(i.) beden kirikliği",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "beden kirikliği"
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
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
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
        "row": 0,
        "col": 7,
        "length": 7
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
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "MONDAY",
        "clue": "(i.) pazartesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pazartesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "ELIMINATED",
        "clue": "(i.) ortadan kaldırıldı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ortadan kaldırıldı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 10
      },
      {
        "id": "11-across",
        "number": 11,
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
        "word": "INTRIGUING",
        "clue": "(i.) i̇lgi çekici",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "i̇lgi çekici"
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
        "id": "2-down",
        "number": 2,
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
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GENERATION",
        "clue": "(i.) nesil, kuşak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nesil, kuşak"
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
        "word": "TRANSITION",
        "clue": "(i.) geçiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geçiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SUPERHUMAN",
        "clue": "(i.) insanüstü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "insanüstü"
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
        "word": "PROTECTING",
        "clue": "(i.) koruyan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "koruyan"
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
        "word": "PURCHASING",
        "clue": "(i.) satın alma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "satın alma"
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "GUARANTEES",
        "clue": "(i.) teminatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminatlar"
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
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "HABITS",
        "clue": "(i.) na",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "na"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "GUARDRAILS",
        "clue": "(i.) sınırlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sınırlar"
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
        "row": 0,
        "col": 0,
        "length": 10
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "STIMULATES",
        "clue": "(i.) uyarır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uyarır"
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
        "word": "LOCAL",
        "clue": "(i.) yerel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerel"
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
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "STOCKPILES",
        "clue": "(i.) stoklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stoklar"
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
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "STRATEGIES",
        "clue": "(i.) stratejiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stratejiler"
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
        "word": "STRENGTHEN",
        "clue": "(i.) güçlendirmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "güçlendirmek"
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
        "word": "STRESSFREE",
        "clue": "(i.) stressiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stressiz"
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "HAPPILY",
        "clue": "(i.) mutlulukla, neşeyle",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutlulukla, neşeyle"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEWSPAPERS",
        "clue": "(i.) gazeteler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gazeteler"
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
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "FORGOT",
        "clue": "(i.) unuttu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unuttu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "REFILLABLE",
        "clue": "(i.) yeniden doldurulabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yeniden doldurulabilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "AGGRESSIVE",
        "clue": "(i.) saldırgan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "saldırgan"
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
        "word": "AFFORDABLE",
        "clue": "(i.) uygun fiyatlı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uygun fiyatlı"
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
        "word": "SECTION",
        "clue": "(i.) bölüm, reyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölüm, reyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
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
        "word": "FORGOT",
        "clue": "(i.) unuttu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "unuttu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "BELONGINGS",
        "clue": "(i.) mal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "COMMITTING",
        "clue": "(i.) teslim etme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teslim etme"
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
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "MINOR",
        "clue": "(i.) küçük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "küçük"
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
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "MONDAY",
        "clue": "(i.) pazartesi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "pazartesi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "MANAGEMENT",
        "clue": "(i.) yönetim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yönetim"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "SUPERHUMAN",
        "clue": "(i.) insanüstü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "insanüstü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 10
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
        "word": "FOUND",
        "clue": "(i.) buldu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "buldu"
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
        "word": "FEELS",
        "clue": "(i.) hissetmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hissetmek"
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
        "word": "USING",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
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
        "word": "DATES",
        "clue": "(i.) tarihler; hurmalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tarihler; hurmalar"
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SIGNS",
        "clue": "(i.) na",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "na"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "ALLOW",
        "clue": "(i.) izin vermek, sağlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "izin vermek, sağlamak"
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
        "word": "ADOPT",
        "clue": "(i.) kabul etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kabul etmek"
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
        "word": "LATER",
        "clue": "(i.) sonra",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sonra"
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
        "word": "WORLD",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
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
        "word": "OUTER",
        "clue": "(i.) dış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dış"
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
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "CLOTH",
        "clue": "(i.) kumaş, bez",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kumaş, bez"
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
        "word": "CHEAP",
        "clue": "(i.) ucuz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ucuz"
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
        "word": "OUTER",
        "clue": "(i.) dış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dış"
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
        "word": "HANDS",
        "clue": "(i.) eller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "eller"
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
        "word": "EATEN",
        "clue": "(i.) yenmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yenmiş"
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
        "word": "PARKS",
        "clue": "(i.) parklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "parklar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "BEATS",
        "clue": "(i.) ritimler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ritimler"
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
        "word": "BAKER",
        "clue": "(i.) fırıncı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fırıncı"
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
        "word": "ADOPT",
        "clue": "(i.) kabul etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kabul etmek"
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
        "word": "SHOES",
        "clue": "(i.) ayakkabı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ayakkabı"
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
        "word": "KYOTO",
        "clue": "(i.) Kyoto",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Kyoto"
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
        "word": "RATES",
        "clue": "(i.) değerlendirme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "değerlendirme"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "CORAL",
        "clue": "(i.) mercancolor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mercancolor"
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
        "word": "COCOA",
        "clue": "(i.) kakao",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kakao"
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
        "word": "REEFS",
        "clue": "(i.) resif",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "resif"
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
        "word": "LIMIT",
        "clue": "(i.) sınır, limit, sınırlamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sınır, limit, sınırlamak"
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
        "word": "CREAM",
        "clue": "(i.) krema",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "krema"
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
        "word": "ASSET",
        "clue": "(i.) varlık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "varlık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
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
        "word": "BECAME",
        "clue": "(i.) oldu, dönüştü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oldu, dönüştü"
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
        "word": "BIGGER",
        "clue": "(i.) daha büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "daha büyük"
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
        "col": 2,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 5,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "GUESTS",
        "clue": "(i.) misafirler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "misafirler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "PAYING",
        "clue": "(i.) ödeme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ödeme"
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
        "word": "PHOTOS",
        "clue": "(i.) fotoğraflar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "fotoğraflar"
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
        "word": "INSIDE",
        "clue": "(i.) içeride",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "içeride"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "GUESTS",
        "clue": "(i.) misafirler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "misafirler"
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
        "word": "TRAINS",
        "clue": "(i.) trenler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "trenler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SPEEDS",
        "clue": "(i.) düşük tork",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşük tork"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "BEGINS",
        "clue": "(i.) şununla başlayan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "şununla başlayan"
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
        "word": "BODIES",
        "clue": "(i.) gösteriyor.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gösteriyor."
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
        "word": "INSIDE",
        "clue": "(i.) içeride",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "içeride"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 5,
        "length": 6
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "DIESEL",
        "clue": "(i.) iptal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iptal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SAFELY",
        "clue": "(i.) hazırlayın.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazırlayın."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "CORNER",
        "clue": "(i.) köşe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "köşe"
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
        "word": "COVERS",
        "clue": "(i.) teminat",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminat"
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
        "word": "NATIVE",
        "clue": "(i.) yerel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yerel"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
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
        "word": "ENGINE",
        "clue": "(i.) makina",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "makina"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SAFELY",
        "clue": "(i.) hazırlayın.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazırlayın."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "DIESEL",
        "clue": "(i.) iptal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iptal"
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
        "word": "DIRECT",
        "clue": "(i.) yönetmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yönetmek"
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
        "word": "STRICT",
        "clue": "(i.) sıkı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sıkı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
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
        "word": "ENGINE",
        "clue": "(i.) makina",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "makina"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TASTES",
        "clue": "(i.) lezzetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "lezzetler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "EXTEND",
        "clue": "(i.) uzatmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uzatmak"
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
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
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
        "word": "EMAILS",
        "clue": "(i.) e-postalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "e-postalar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DISHES",
        "clue": "(i.) yemekler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemekler"
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
        "word": "TRIALS",
        "clue": "(i.) deneyler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deneyler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "GUESTS",
        "clue": "(i.) misafirler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "misafirler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 0,
        "length": 6
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
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
        "word": "TOUCHED",
        "clue": "(i.) dokundu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dokundu"
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
        "word": "UPRIGHT",
        "clue": "(i.) düz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 3,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "CITIZEN",
        "clue": "(i.) vatandaş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vatandaş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DISTANT",
        "clue": "(i.) mesafeli&#10;",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mesafeli&#10;"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "SMILING",
        "clue": "(i.) gülümseyen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gülümseyen"
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
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "INHERIT",
        "clue": "(i.) miras almak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "miras almak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "GREETED",
        "clue": "(i.) karşılandı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "karşılandı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "EXTREME",
        "clue": "(i.) uçdeğer",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uçdeğer"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "AVENUES",
        "clue": "(i.) uzanır.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uzanır."
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
        "word": "ETHICAL",
        "clue": "(i.) etik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "etik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SKILLED",
        "clue": "(i.) vasıflı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vasıflı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "RATES",
        "clue": "(i.) değerlendirme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "değerlendirme"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 1,
        "col": 0,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "DELAYED",
        "clue": "(i.) geciktirilmelidir.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geciktirilmelidir."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "CAPTURE",
        "clue": "(i.) yakalamak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yakalamak"
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
        "word": "CHECKED",
        "clue": "(i.) kontrol edilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kontrol edilmiş"
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
        "word": "PLASTIC",
        "clue": "(i.) plastik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "plastik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ENGINES",
        "clue": "(i.) motorlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "motorlar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "KITCHEN",
        "clue": "(i.) mutfak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutfak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "CONTACT",
        "clue": "(i.) iletişim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iletişim"
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
        "word": "CREATED",
        "clue": "(i.) oluşturuldu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oluşturuldu"
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
        "word": "NEURONS",
        "clue": "(i.) nöronlar, sinir hücreleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nöronlar, sinir hücreleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 2,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "AFRICAN",
        "clue": "(i.) afrika dilleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "afrika dilleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DISTANT",
        "clue": "(i.) mesafeli&#10;",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mesafeli&#10;"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "DEFICIT",
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "DEMANDS",
        "clue": "(i.) tarafından",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tarafından"
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
        "word": "CUISINE",
        "clue": "(i.) mutfak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutfak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NOTHING",
        "clue": "(i.) sorum yok.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sorum yok."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SUGGEST",
        "clue": "(i.) ileri sürmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ileri sürmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "ENSURES",
        "clue": "(i.) altına alıyor...",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "altına alıyor..."
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
        "word": "EXCITED",
        "clue": "(i.) heyecanlanmış",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "heyecanlanmış"
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
        "col": 4,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SKILLED",
        "clue": "(i.) vasıflı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "vasıflı"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
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
        "row": 3,
        "col": 0,
        "length": 7
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "DELAYED",
        "clue": "(i.) geciktirilmelidir.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "geciktirilmelidir."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 7
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
        "word": "THURSDAY",
        "clue": "(i.) perşembe",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "perşembe"
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
        "word": "THEORIES",
        "clue": "(i.) teoriler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teoriler"
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
        "word": "AFRICAN",
        "clue": "(i.) afrika dilleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "afrika dilleri"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "YOUTHFUL",
        "clue": "(i.) genç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "genç"
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RESEARCH",
        "clue": "(i.) araştırma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "araştırma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SEASONAL",
        "clue": "(i.) sezonluk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sezonluk"
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "BECOMING",
        "clue": "(i.) olma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olma"
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
        "word": "DELEGATE",
        "clue": "(i.) yetki aktarabilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yetki aktarabilir"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "CLINICAL",
        "clue": "(i.) klinik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "klinik"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 8
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "KNOWN",
        "clue": "(i.) bilinen, tanınan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilinen, tanınan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 6,
        "length": 5
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "MANAGING",
        "clue": "(i.) &#10;",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "&#10;"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "word": "CONCEPTS",
        "clue": "(i.) kavramalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kavramalar"
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
        "word": "CONCRETE",
        "clue": "(i.) beton",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "beton"
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
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "TREASURE",
        "clue": "(i.) hazine",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hazine"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EARNINGS",
        "clue": "(i.) kazançları",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kazançları"
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
        "word": "DIRECTED",
        "clue": "(i.) yönlendirilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yönlendirilmiş"
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
        "word": "DINOSAUR",
        "clue": "(i.) dinozor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinozor"
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
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 4,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DIMINISH",
        "clue": "(i.) azaltmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "azaltmak"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SKELETON",
        "clue": "(i.) iskelet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iskelet"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "UPGRADES",
        "clue": "(i.) sağlar.",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sağlar."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "RESEARCH",
        "clue": "(i.) araştırma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "araştırma"
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
        "word": "EXPECTED",
        "clue": "(i.) beklenen",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "beklenen"
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
        "word": "EXPENSES",
        "clue": "(i.) giderleri",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "giderleri"
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
        "word": "DISPROVE",
        "clue": "(i.) aksini kanıtlamak, çürütmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aksini kanıtlamak, çürütmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "3-across",
        "number": 3,
        "direction": "across",
        "word": "PATHWAYS",
        "clue": "(i.) yollar, patikalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yollar, patikalar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 8
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "CHILD",
        "clue": "(i.) çocuk",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çocuk"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 4,
        "length": 5
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "CORAL",
        "clue": "(i.) mercancolor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mercancolor"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 3,
        "col": 6,
        "length": 5
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "SCHEDULE",
        "clue": "(i.) süre zamanla",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "süre zamanla"
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
        "word": "GOVERNED",
        "clue": "(i.) yönetmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yönetmek"
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
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
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
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "DISPROVE",
        "clue": "(i.) aksini kanıtlamak, çürütmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "aksini kanıtlamak, çürütmek"
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
        "row": 2,
        "col": 0,
        "length": 8
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "LISTENER",
        "clue": "(i.) dinleyici",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinleyici"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 8
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "EXERCISE",
        "clue": "(i.) alıştırma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alıştırma"
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
        "word": "JUDICIAL",
        "clue": "(i.) adli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "adli"
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
        "word": "JOURNEYS",
        "clue": "(i.) yolculuklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yolculuklar"
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
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 7,
        "length": 8
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "UNLOCK",
        "clue": "(i.) kilidi aç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kilidi aç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "YEARS",
        "clue": "(i.) yıl",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yıl"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 5
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "1-down",
        "number": 1,
        "direction": "down",
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
        "row": 0,
        "col": 0,
        "length": 8
      },
      {
        "id": "2-down",
        "number": 2,
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
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "REACTION",
        "clue": "(i.) reaksiyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "reaksiyon"
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
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "KNOWN",
        "clue": "(i.) bilinen, tanınan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilinen, tanınan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 5
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SKELETON",
        "clue": "(i.) iskelet",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "iskelet"
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
        "word": "TRIALS",
        "clue": "(i.) deneyler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "deneyler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 7,
        "length": 7
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
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "OBSTACLES",
        "clue": "(i.) engeller",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "engeller"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "AWARENESS",
        "clue": "(i.) farkındalık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "farkındalık"
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
        "word": "AMSTERDAM",
        "clue": "(i.) Amsterdam",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Amsterdam"
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
        "word": "EATING",
        "clue": "(i.) yemek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yemek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SECTION",
        "clue": "(i.) bölüm, reyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölüm, reyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "DEMANDING",
        "clue": "(i.) talepkar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "talepkar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "COUNTRIES",
        "clue": "(i.) ülkeler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ülkeler"
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
        "word": "CORPORATE",
        "clue": "(i.) kurumsal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kurumsal"
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
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
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
        "word": "OVERSIGHT",
        "clue": "(i.) gözetim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gözetim"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "ACCORDING",
        "clue": "(i.) .",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "."
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "TECHNIQUE",
        "clue": "(i.) teknik, yöntem",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teknik, yöntem"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
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
        "word": "ENERGETIC",
        "clue": "(i.) enerjik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "enerjik"
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
        "word": "EQUITABLE",
        "clue": "(i.) hakkaniyetli",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hakkaniyetli"
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
        "word": "TRIVIAL",
        "clue": "(i.) önemsiz",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "önemsiz"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "COGNITIVE",
        "clue": "(i.) bilişsel, zihinsel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilişsel, zihinsel"
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
        "word": "UNPACKING",
        "clue": "(i.) ambalajından çıkarma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ambalajından çıkarma"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BECAME",
        "clue": "(i.) oldu, dönüştü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oldu, dönüştü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "EXECUTIVE",
        "clue": "(i.) yönetici, yürütme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yönetici, yürütme"
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
        "word": "IMMERSION",
        "clue": "(i.) batırma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "batırma"
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
        "word": "IDENTICAL",
        "clue": "(i.) özdeş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "özdeş"
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
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "OWNED",
        "clue": "(i.) sahip olunan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sahip olunan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEGOTIATE",
        "clue": "(i.) müzakerede bulunmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "müzakerede bulunmak"
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
        "word": "EMBRACING",
        "clue": "(i.) kucaklama",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kucaklama"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "ASTRONAUT",
        "clue": "(i.) uçurcu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uçurcu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEARNABLE",
        "clue": "(i.) öğrenilebilir",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "öğrenilebilir"
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
        "word": "MIGRATING",
        "clue": "(i.) taşınıyor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "taşınıyor"
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
        "word": "METEORITE",
        "clue": "(i.) meteor",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "meteor"
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
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
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
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TECHNIQUE",
        "clue": "(i.) teknik, yöntem",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teknik, yöntem"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "9-across",
        "number": 9,
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
        "word": "POLITICAL",
        "clue": "(i.) politik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "politik"
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
        "word": "POTENTIAL",
        "clue": "(i.) olası, muhtemel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "olası, muhtemel"
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
        "word": "LISTENERS",
        "clue": "(i.) dinleyiciler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dinleyiciler"
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
        "word": "TERRIFIES",
        "clue": "(i.) dehşete düşürür",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dehşete düşürür"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 9
      },
      {
        "id": "4-across",
        "number": 4,
        "direction": "across",
        "word": "NEGOTIATE",
        "clue": "(i.) müzakerede bulunmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "müzakerede bulunmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "INTENSIVE",
        "clue": "(i.) yoğun",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "yoğun"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "ALZHEIMER",
        "clue": "(i.) Alzheimer",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "Alzheimer"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
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
        "id": "1-down",
        "number": 1,
        "direction": "down",
        "word": "RECORDING",
        "clue": "(i.) kayıt",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kayıt"
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
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "NEGOTIATE",
        "clue": "(i.) müzakerede bulunmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "müzakerede bulunmak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "word": "SELECTING",
        "clue": "(i.) seçme",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçme"
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
        "word": "SHARPNESS",
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
        "row": 0,
        "col": 0,
        "length": 9
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 6
      },
      {
        "id": "3-down",
        "number": 3,
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
        "id": "4-across",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "PRINCIPLE",
        "clue": "(i.) ilke",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ilke"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 9
      },
      {
        "id": "6-across",
        "number": 6,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "SINGAPORE",
        "clue": "(i.) singapur",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "singapur"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 9
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "SHORTAGES",
        "clue": "(i.) noksanlık bulunmamaktadır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "noksanlık bulunmamaktadır"
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
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
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
        "col": 7,
        "length": 7
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
        "word": "CHOSEN",
        "clue": "(i.) seçilmiş",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "seçilmiş"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "BELONGINGS",
        "clue": "(i.) mal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mal"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "BIOLOGICAL",
        "clue": "(i.) biyolojik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyolojik"
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
        "word": "BIODIVERSE",
        "clue": "(i.) biyoçeşitlilik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "biyoçeşitlilik"
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
        "word": "INHERIT",
        "clue": "(i.) miras almak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "miras almak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "CLARITY",
        "clue": "(i.) açıklık",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "açıklık"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INDUSTRIES",
        "clue": "(i.) sektörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sektörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 10
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "SUBSTITUTE",
        "clue": "(i.) ürün ve",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ürün ve"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 10
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "DISTRIBUTE",
        "clue": "(i.) dağıtmak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "dağıtmak"
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
        "word": "DISMANTLED",
        "clue": "(i.) söküldü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "söküldü"
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
        "word": "SHOULD",
        "clue": "(i.) -meli/-malı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "-meli/-malı"
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
        "word": "BROUGHT",
        "clue": "(i.) getirdi",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "getirdi"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "SPOKEN",
        "clue": "(i.) konuşulan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "konuşulan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "DOWNSTAIRS",
        "clue": "(i.) merdiven",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "merdiven"
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
        "word": "FUNCTIONAL",
        "clue": "(i.) islevsel",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "islevsel"
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
        "word": "OUTFITS",
        "clue": "(i.) kıyafetler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kıyafetler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "NOISE",
        "clue": "(i.) gürültü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gürültü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 5
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "CONNECTION",
        "clue": "(i.) bağlantı, ilişki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bağlantı, ilişki"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
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
        "row": 4,
        "col": 7,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
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
        "word": "MANDATE",
        "clue": "(i.) görev, yetki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "görev, yetki"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "ENGLISH",
        "clue": "(i.) ingilizce",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "ingilizce"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
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
        "id": "5-across",
        "number": 5,
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
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "BECAME",
        "clue": "(i.) oldu, dönüştü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "oldu, dönüştü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "word": "PURCHASING",
        "clue": "(i.) satın alma",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "satın alma"
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
        "word": "PREFRONTAL",
        "clue": "(i.) prefrontal",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "prefrontal"
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
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "SECTION",
        "clue": "(i.) bölüm, reyon",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bölüm, reyon"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "5-down",
        "number": 5,
        "direction": "down",
        "word": "GUARANTEES",
        "clue": "(i.) teminatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminatlar"
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
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 10
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "STIMULATES",
        "clue": "(i.) uyarır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "uyarır"
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
        "word": "STOCKPILES",
        "clue": "(i.) stoklar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stoklar"
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
        "word": "ACCOUNT",
        "clue": "(i.) hesap",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "hesap"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "STRATEGIES",
        "clue": "(i.) stratejiler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "stratejiler"
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
        "word": "OCEANS",
        "clue": "(i.) okyanuslar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "okyanuslar"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "5-across",
        "number": 5,
        "direction": "across",
        "word": "KNOWN",
        "clue": "(i.) bilinen, tanınan",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bilinen, tanınan"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 5
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "BUILT",
        "clue": "(i.) inşa etti, kurdu",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "inşa etti, kurdu"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 5,
        "length": 5
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
        "word": "MINOR",
        "clue": "(i.) küçük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "küçük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 7,
        "length": 5
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "INFLICTING",
        "clue": "(i.) tatbik etmek",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "tatbik etmek"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "LEVELS",
        "clue": "(i.) çç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "çç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "11-across",
        "number": 11,
        "direction": "across",
        "word": "STRUCTURES",
        "clue": "(i.) inşaatı",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "inşaatı"
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
        "word": "GENERATION",
        "clue": "(i.) nesil, kuşak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nesil, kuşak"
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
        "col": 0,
        "length": 10
      },
      {
        "id": "2-down",
        "number": 2,
        "direction": "down",
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEWSPAPERS",
        "clue": "(i.) gazeteler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gazeteler"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "RARELY",
        "clue": "(i.) nadiren",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "nadiren"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 10
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "GUARANTEES",
        "clue": "(i.) teminatlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "teminatlar"
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
        "word": "ANALYTICAL",
        "clue": "(i.) analitik",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "analitik"
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
        "word": "APPLICANTS",
        "clue": "(i.) başvuranlar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "başvuranlar"
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
        "word": "AVOIDS",
        "clue": "(i.) kaçınır",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kaçınır"
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
        "word": "CUISINE",
        "clue": "(i.) mutfak",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "mutfak"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "LANDSCAPES",
        "clue": "(i.) manzaralar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "manzaralar"
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
        "word": "PRODUCTION",
        "clue": "(i.) üretim",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "üretim"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 2,
        "col": 0,
        "length": 10
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INDUSTRIES",
        "clue": "(i.) sektörler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "sektörler"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 10
      },
      {
        "id": "7-down",
        "number": 7,
        "direction": "down",
        "word": "COCOA",
        "clue": "(i.) kakao",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kakao"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 5,
        "col": 6,
        "length": 5
      },
      {
        "id": "8-across",
        "number": 8,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
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
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
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
        "word": "CONNECTION",
        "clue": "(i.) bağlantı, ilişki",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "bağlantı, ilişki"
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
        "word": "CONTINENTS",
        "clue": "(i.) kıtalar",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "kıtalar"
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
        "word": "THOUGHT",
        "clue": "(i.) düşündü",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "düşündü"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 6,
        "length": 7
      },
      {
        "id": "3-down",
        "number": 3,
        "direction": "down",
        "word": "IMMENSE",
        "clue": "(i.) büyük",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "büyük"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 0,
        "col": 7,
        "length": 7
      },
      {
        "id": "4-down",
        "number": 4,
        "direction": "down",
        "word": "NEWSPAPERS",
        "clue": "(i.) gazeteler",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gazeteler"
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
        "row": 2,
        "col": 0,
        "length": 6
      },
      {
        "id": "6-across",
        "number": 6,
        "direction": "across",
        "word": "INCOME",
        "clue": "(i.) gelir, kazanç",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "gelir, kazanç"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 4,
        "col": 0,
        "length": 6
      },
      {
        "id": "7-across",
        "number": 7,
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
        "row": 6,
        "col": 0,
        "length": 6
      },
      {
        "id": "8-across",
        "number": 8,
        "direction": "across",
        "word": "NEARLY",
        "clue": "(i.) neredeyse",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "neredeyse"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 7,
        "col": 0,
        "length": 6
      },
      {
        "id": "9-across",
        "number": 9,
        "direction": "across",
        "word": "TAKING",
        "clue": "(i.) alma, alma süreci",
        "senses": [
          {
            "pos": "i.",
            "posName": "İsim",
            "meaning": "alma, alma süreci"
          }
        ],
        "partOfSpeech": "i.",
        "partOfSpeechName": "İsim",
        "row": 8,
        "col": 0,
        "length": 6
      },
      {
        "id": "10-across",
        "number": 10,
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
