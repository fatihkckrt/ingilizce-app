// src/grammarData.ts
// Kapsamlı Seviyeli İngilizce Gramer Rehberi & Cümle Kurma / Sözcük Sıralama Veri Tabanı

export interface GrammarExample {
  pronoun: 'I' | 'You' | 'He' | 'She' | 'It' | 'We' | 'They' | 'Wh- / Soru' | 'Diğer';
  sentenceType: 'positive' | 'negative' | 'question';
  eng: string;
  tr: string;
  note?: string;
}

export interface GrammarFormula {
  title: string;
  pattern: string;
  explanation: string;
  sample?: string;
  sampleTr?: string; // Türkçe Çeviri
}

export interface SubjectSchemaRow {
  subject: string; // Özne: "I", "He / She / It", "You / We / They"
  subjectLabel?: string; // "1. Tekil Şahıs", "3. Tekil Şahıslar", "Çoğul & 2. Şahıs"
  positive: string; // Olumlu çekim / örnek
  positiveTr?: string; // Türkçe Çeviri
  negative: string; // Olumsuz çekim / örnek
  negativeTr?: string; // Türkçe Çeviri
  question: string; // Soru biçimi
  questionTr?: string; // Türkçe Çeviri
  highlight?: string; // Kritik not / püf nokta
}

export interface GrammarComparisonTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface TimeMarkerItem {
  term: string;
  meaning: string;
  usage: string;
}

export interface GrammarPracticeItem {
  id: string;
  sentence: string; // e.g., "She ___ (drink) coffee every morning."
  blankAnswer: string; // "drinks"
  options: string[]; // ["drink", "drinks", "drinking"]
  tr: string; // Türkçe çeviri
  hint?: string; // İpucu
  explanation: string; // Dilbilgisi kural açıklaması
}

export interface GrammarTopic {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  title: string;
  badge: string;
  summary: string;
  introduction: string;
  subjectSchema?: SubjectSchemaRow[]; // Şematik Alt Alta Özne Çekim Tablosu
  formulas: GrammarFormula[];
  keyRules: string[];
  comparisonTable?: GrammarComparisonTable; // Kural / Karşılaştırma Tablosu
  timeMarkers?: TimeMarkerItem[]; // Sık kullanılan zaman ve sıklık zarfları
  commonMistakes: { wrong: string; correct: string; correctTr?: string; reason: string }[];
  examples: GrammarExample[];
  proTip: string;
  practices?: GrammarPracticeItem[];
}

export interface SentenceScrambleItem {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  grammarTopicId: string;
  topicName: string;
  tr: string;
  targetEng: string;
  tokens: string[]; // karıştırılmış kelime parçaları
  hint?: string;
  ruleExplanation: string;
}

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    "id": "a1-to-be",
    "level": "A1",
    "title": "To Be Fiili (Am / Is / Are)",
    "badge": "Temel Yapıtaşı",
    "summary": "İngilizcenin en temel 'olmak', durum, kimlik, yaş ve niteleme fiili.",
    "introduction": "İngilizcede hareket bildiren bir ana eylem (koşmak, yemek, uyumak gibi) bulunmadığında; kişinin kim olduğunu, nerede bulunduğunu, nasıl hissettiğini, yaşını veya hava durumunu bildirmek için 'To Be' (am / is / are) fiili kullanılır. Türkçedeki '-dir, -dır' veya 'öğrenci-yim', 'mutlu-yuz' eklerinin tam karşılığıdır.",
    "subjectSchema": [
      {
        "subject": "I (Ben)",
        "subjectLabel": "1. Tekil Şahıs",
        "positive": "am ('m) ➔ I am a teacher.",
        "negative": "am not ('m not) ➔ I am not late.",
        "question": "Am I ...? ➔ Am I right?",
        "highlight": "Yalnızca 'I' öznesi ile 'am' eşleşir.",
        "positiveTr": "Ben bir öğretmenim.",
        "negativeTr": "Geç kalmadım.",
        "questionTr": "Haklı mıyım?"
      },
      {
        "subject": "He / She / It (O)",
        "subjectLabel": "3. Tekil Şahıslar",
        "positive": "is ('s) ➔ She is happy. / It is cold.",
        "negative": "is not (isn't) ➔ He isn't at work.",
        "question": "Is he / she / it ...? ➔ Is she ready?",
        "highlight": "Tüm tekil isimler (John, the cat) 'is' alır.",
        "positiveTr": "O mutludur. / Hava soğuktur.",
        "negativeTr": "O işte değil.",
        "questionTr": "O hazır mı?"
      },
      {
        "subject": "You / We / They (Sen/Siz, Biz, Onlar)",
        "subjectLabel": "Çoğullar & 2. Şahıs",
        "positive": "are ('re) ➔ We are students.",
        "negative": "are not (aren't) ➔ They aren't here.",
        "question": "Are you / we / they ...? ➔ Are they doctors?",
        "highlight": "Tüm çoğul özneler ve daima 'you' ile 'are' kullanılır.",
        "positiveTr": "Biz öğrenciyiz.",
        "negativeTr": "Onlar burada değiller.",
        "questionTr": "Onlar doktor mu?"
      }
    ],
    "formulas": [
      {
        "title": "Olumlu Yapı (+)",
        "pattern": "Özne (Subject) + am / is / are + Sıfat / İsim / Yer Belirteci",
        "explanation": "Kişinin durumunu, mesleğini veya konumunu belirtir.",
        "sample": "She is an architect. / We are in the city library.",
        "sampleTr": "O bir mimardır. / Biz şehir kütüphanesindeyiz."
      },
      {
        "title": "Olumsuz Yapı (-)",
        "pattern": "Özne (Subject) + am not / isn't / aren't + Tümleç",
        "explanation": "Olumsuzluk eki 'not' doğrudan to be fiiline eklenir.",
        "sample": "I am not tired. / He isn't at the meeting.",
        "sampleTr": "Yorgun değilim. / O toplantıda değil."
      },
      {
        "title": "Soru Yapısı (?)",
        "pattern": "Am / Is / Are + Özne + Tümleç + ?",
        "explanation": "Yardımcı fiil öznenin önüne geçer.",
        "sample": "Are you ready? (Kısa cevap: Yes, I am. / No, I'm not.)",
        "sampleTr": "Hazır mısın? (Evet, hazırım. / Hayır, değilim.)"
      }
    ],
    "keyRules": [
      "İngilizce bir cümlede yüklem asla boş bırakılamaz. Eylem yoksa 'am, is, are' şarttır: 'She doctor' DENMEZ ➔ 'She is a doctor' denir.",
      "Yaş söylerken 'have' değil, daima 'to be' kullanılır: 'I am 24 years old.'",
      "Hava durumu ve saatler için 'It is' kullanılır: 'It is 3 o'clock.', 'It is sunny today.'",
      "Soru kelimeleri (Who, What, Where, How, When) en başa gelir: 'Where are you from?', 'How is your mother?'"
    ],
    "comparisonTable": {
      "title": "To Be Kısaltmaları (Contractions) Rehberi",
      "headers": [
        "Uzun Biçim",
        "Olumlu Kısaltma",
        "Olumsuz Kısaltma",
        "Türkçe Anlamı"
      ],
      "rows": [
        [
          "I am",
          "I'm",
          "I'm not",
          "Ben ...yim"
        ],
        [
          "He is / She is / It is",
          "He's / She's / It's",
          "He isn't / She isn't",
          "O ...dır"
        ],
        [
          "You are",
          "You're",
          "You aren't",
          "Sen / Siz ...siniz"
        ],
        [
          "We are",
          "We're",
          "We aren't",
          "Biz ...yiz"
        ],
        [
          "They are",
          "They're",
          "They aren't",
          "Onlar ...dırlar"
        ]
      ]
    },
    "commonMistakes": [
      {
        "wrong": "I have 22 years old.",
        "correct": "I am 22 years old.",
        "reason": "İngilizcede yaş bir sahiplik değil, varoluş durumudur; 'to be' kullanılır.",
        "correctTr": "22 yaşındayım."
      },
      {
        "wrong": "He is work in a hospital.",
        "correct": "He works in a hospital.",
        "reason": "Eğer 'work' gibi ana bir hareket fiili varsa, geniş zamanda ayrıca 'is' eklenmez.",
        "correctTr": "O bir hastanede çalışır."
      },
      {
        "wrong": "Are you agree with me?",
        "correct": "Do you agree with me?",
        "reason": "'Agree' bir sıfat değil fiildir (katılmak); soru 'Do you' ile sorulur.",
        "correctTr": "Bana katılıyor musun?"
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I am a software engineer living in Istanbul.",
        "tr": "Ben İstanbul'da yaşayan bir yazılım mühendisiyim.",
        "note": "I + am"
      },
      {
        "pronoun": "I",
        "sentenceType": "negative",
        "eng": "I am not ready for the exam yet.",
        "tr": "Henüz sınav için hazır değilim.",
        "note": "I am not ('m not)"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He is very polite and hardworking.",
        "tr": "O çok kibar ve çalışkandır.",
        "note": "He + is"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He isn't at the office right now.",
        "tr": "O şu anda ofiste değil.",
        "note": "He + isn't"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She is a talented pianist from Vienna.",
        "tr": "O Viyanalı yetenekli bir piyanisttir.",
        "note": "She + is"
      },
      {
        "pronoun": "She",
        "sentenceType": "question",
        "eng": "Is she your elder sister?",
        "tr": "O senin ablan mı?",
        "note": "Is + she ...?"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "It is very cold and rainy outside today.",
        "tr": "Bugün dışarısı çok soğuk ve yağmurlu.",
        "note": "It + is (Hava)"
      },
      {
        "pronoun": "It",
        "sentenceType": "negative",
        "eng": "It isn't an expensive restaurant.",
        "tr": "Pahalı bir restoran değil.",
        "note": "It + isn't"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Are you excited about the upcoming concert?",
        "tr": "Yaklaşan konser için heyecanlı mısın?",
        "note": "Are + you ...?"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We are proud of your great achievements.",
        "tr": "Senin büyük başarılarınla gurur duyuyoruz.",
        "note": "We + are"
      },
      {
        "pronoun": "We",
        "sentenceType": "negative",
        "eng": "We aren't in a hurry today.",
        "tr": "Bugün hiç acelemiz yok.",
        "note": "We + aren't"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They are our neighbors from across the street.",
        "tr": "Onlar caddenin karşısındaki komşularımızdır.",
        "note": "They + are"
      }
    ],
    "proTip": "Kimlik, meslek, milliyet, konum ve hisleri belirtirken ilk başvuracağınız temel kural to be çekimidir.",
    "practices": [
      {
            "id": "a1-to-be-p1",
            "sentence": "My brother ___ (be) ten years old.",
            "blankAnswer": "is",
            "options": [
                  "am",
                  "is",
                  "are"
            ],
            "tr": "Erkek kardeşim on yaşındadır.",
            "hint": "Erkek kardeşim (He) tekil bir öznedir.",
            "explanation": "3. tekil şahıs özneleri (He, She, It, My brother) için 'is' kullanılır."
      },
      {
            "id": "a1-to-be-p2",
            "sentence": "We ___ (not / be) at home today.",
            "blankAnswer": "aren't",
            "options": [
                  "isn't",
                  "aren't",
                  "am not"
            ],
            "tr": "Biz bugün evde değiliz.",
            "hint": "'We' çoğul bir öznedir.",
            "explanation": "'We' öznesi için olumsuz çekim 'are not' yani kısaca 'aren't' olur."
      },
      {
            "id": "a1-to-be-p3",
            "sentence": "___ (be) you ready for breakfast?",
            "blankAnswer": "Are",
            "options": [
                  "Am",
                  "Is",
                  "Are"
            ],
            "tr": "Kahvaltı için hazır mısın?",
            "hint": "'You' öznesi ile soru yapısını düşünün.",
            "explanation": "'You' öznesiyle soru sorulurken cümlenin başına 'Are' getirilir."
      },
      {
            "id": "a1-to-be-p4",
            "sentence": "I ___ (be) a student at this school.",
            "blankAnswer": "am",
            "options": [
                  "am",
                  "is",
                  "are"
            ],
            "tr": "Ben bu okulda bir öğrenciyim.",
            "hint": "'I' zamiriyle eşleşen çekim.",
            "explanation": "İngilizcede yalnızca 'I' öznesi 'am' yardımcı fiilini alır."
      },
      {
            "id": "a1-to-be-p5",
            "sentence": "The weather ___ (be) very cold today.",
            "blankAnswer": "is",
            "options": [
                  "am",
                  "is",
                  "are"
            ],
            "tr": "Bugün hava çok soğuktur.",
            "hint": "Hava durumu (It) tekil kabul edilir.",
            "explanation": "Hava olayları ve tekil cansız durumlar için 'is' kullanılır."
      },
      {
            "id": "a1-to-be-p6",
            "sentence": "They ___ (not / be) tired after the long walk.",
            "blankAnswer": "aren't",
            "options": [
                  "isn't",
                  "aren't",
                  "not are"
            ],
            "tr": "Uzun yürüyüşten sonra yorgun değiller.",
            "hint": "'They' çoğul öznesidir.",
            "explanation": "'They' öznesinin olumsuz to be hali 'aren't'tır."
      },
      {
            "id": "a1-to-be-p7",
            "sentence": "___ he your new English teacher?",
            "blankAnswer": "Is",
            "options": [
                  "Is",
                  "Are",
                  "Am"
            ],
            "tr": "O senin yeni İngilizce öğretmenin mi?",
            "hint": "'He' öznesi için soru yapısı.",
            "explanation": "3. tekil şahısta (He/She/It) soru sorulurken cümle başına 'Is' gelir."
      }
    ]
  },
  {
    "id": "a1-present-simple",
    "level": "A1",
    "title": "Present Simple (Geniş Zaman)",
    "badge": "Rutinler & Gerçekler",
    "summary": "Günlük alışkanlıklar, tekrarlanan eylemler, bilimsel gerçekler ve doğa kanunları.",
    "introduction": "Her gün tekrarladığınız sabah kahvesi içmek, işe gitmek gibi rutinlerinizi, hobilerinizi veya değişmeyen doğa kanunlarını (su 100 derecede kaynar) anlatmak için Present Simple kullanılır. Türkçe'deki '-r, -ar, -er, -ır' eklerinin karşılığıdır.",
    "subjectSchema": [
      {
        "subject": "I / You / We / They",
        "subjectLabel": "Ben, Sen/Siz, Biz, Onlar & Çoğul İsimler",
        "positive": "V1 (Fiil Yalın) ➔ I play tennis. / They live in London.",
        "negative": "don't + V1 ➔ We don't eat meat.",
        "question": "Do + Özne + V1? ➔ Do you speak English?",
        "highlight": "Fiil hiçbir takı almaz, orijinal yalın halindedir.",
        "positiveTr": "Tenis oynarım. / Londra'da yaşarlar.",
        "negativeTr": "Biz et yemeyiz.",
        "questionTr": "İngilizce konuşur musun?"
      },
      {
        "subject": "He / She / It",
        "subjectLabel": "3. Tekil Şahıslar & Tekil İsimler",
        "positive": "V1 + (-s / -es / -ies) ➔ He works hard. / She watches TV.",
        "negative": "doesn't + V1 (Fiil YALIN) ➔ He doesn't smoke.",
        "question": "Does + Özne + V1? ➔ Does she live alone?",
        "highlight": "Olumsuzda ve soruda 'doesn't/does' geldiğinde fiildeki -s takısı DÜŞER!",
        "positiveTr": "O çok çalışır. / O televizyon izler.",
        "negativeTr": "O sigara içmez.",
        "questionTr": "O yalnız mı yaşıyor?"
      }
    ],
    "formulas": [
      {
        "title": "Olumlu Cümle Formülü (+)",
        "pattern": "Özne + V1 (veya He/She/It için V1 + -s/-es/-ies) + Nesne + Zaman",
        "explanation": "Üçüncü tekil şahıslarda fiile mutlaka -s takısı eklenir.",
        "sample": "I wake up at 7 AM. / She wakes up at 7 AM.",
        "sampleTr": "Sabah 7'de uyanırım. / O sabah 7'de uyanır."
      },
      {
        "title": "Olumsuz Cümle Formülü (-)",
        "pattern": "Özne + don't / doesn't + V1 (Fiil Daima YALIN)",
        "explanation": "Doesn't kullanıldığında fiildeki -s kalkar.",
        "sample": "We don't work on Sundays. / He doesn't eat fish.",
        "sampleTr": "Pazar günleri çalışmayız. / O balık yemez."
      },
      {
        "title": "Soru Cümlesi Formülü (?)",
        "pattern": "Do / Does + Özne + V1 (Fiil YALIN) + ?",
        "explanation": "Do veya Does başa gelir, fiil yalın kalır.",
        "sample": "Do you play chess? / Does he speak Turkish?",
        "sampleTr": "Satranç oynar mısın? / O Türkçe konuşur mu?"
      }
    ],
    "keyRules": [
      "He / She / It için fiil sonu yazım kuralları:\n• Genel kural: Çoğu fiil sadece -s alır (work ➔ works, read ➔ reads).\n• -ch, -sh, -ss, -x, -o ile biten fiiller -es alır (watch ➔ watches, wash ➔ washes, go ➔ goes).\n• Sessiz harf + y ile biten fiillerde 'y' düşer ve -ies gelir (study ➔ studies, fly ➔ flies). Dikkat: Sesli + y varsa sadece -s alır (play ➔ plays).",
      "Sıklık zarfları (Frequency Adverbs) ana fiilden ÖNCE gelir: 'She always wakes up early.' Ancak 'to be' fiilinden SONRA gelir: 'He is always late.'"
    ],
    "comparisonTable": {
      "title": "Sıklık Zarfları (Frequency Adverbs) ve Dereceleri",
      "headers": [
        "Zarf",
        "Türkçe Karşılık",
        "Sıklık Oranı",
        "Örnek Kullanım"
      ],
      "rows": [
        [
          "Always",
          "Her zaman / Daima",
          "%100",
          "I always brush my teeth before sleep."
        ],
        [
          "Usually / Normally",
          "Genellikle",
          "%80",
          "She usually drinks herbal tea."
        ],
        [
          "Often / Frequently",
          "Sık sık",
          "%60",
          "We often go hiking at the weekends."
        ],
        [
          "Sometimes",
          "Bazen / Ara sıra",
          "%40",
          "I sometimes read books in bed."
        ],
        [
          "Rarely / Seldom",
          "Nadiren",
          "%15",
          "He rarely eats fast food."
        ],
        [
          "Never",
          "Asla / Hiç",
          "%0",
          "They never arrive late for the meeting."
        ]
      ]
    },
    "commonMistakes": [
      {
        "wrong": "She doesn't likes apples.",
        "correct": "She doesn't like apples.",
        "reason": "'Doesn't' yardımcı fiili -s takısını üzerine almıştır; ana fiil yalın kalmalıdır.",
        "correctTr": "O elma sevmez."
      },
      {
        "wrong": "I am live in Izmir.",
        "correct": "I live in Izmir.",
        "reason": "Geniş zamanda ana fiil (live) varken 'am/is/are' asla eklenmez.",
        "correctTr": "İzmir'de yaşıyorum."
      },
      {
        "wrong": "He play football on Sundays.",
        "correct": "He plays football on Sundays.",
        "reason": "3. tekil şahıs 'he' olumlu cümlede fiile -s takısı getirilmesini zorunlu kılar.",
        "correctTr": "Pazar günleri futbol oynar."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I drink a cup of black coffee every morning.",
        "tr": "Her sabah bir fincan sade kahve içerim.",
        "note": "I + yalın fiil"
      },
      {
        "pronoun": "I",
        "sentenceType": "negative",
        "eng": "I don't like waking up early on weekends.",
        "tr": "Hafta sonları erken uyanmayı sevmem.",
        "note": "I + don't"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He works at an international architecture firm.",
        "tr": "O uluslararası bir mimarlık firmasında çalışır.",
        "note": "He + works (-s)"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He doesn't watch television on weekdays.",
        "tr": "O hafta içi televizyon izlemez.",
        "note": "doesn't + watch (yalın)"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She speaks three languages fluently.",
        "tr": "O üç dili akıcı bir şekilde konuşur.",
        "note": "She + speaks (-s)"
      },
      {
        "pronoun": "She",
        "sentenceType": "question",
        "eng": "Does she teach mathematics at the university?",
        "tr": "O üniversitede matematik mi öğretiyor?",
        "note": "Does she teach...?"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "The sun rises in the east and sets in the west.",
        "tr": "Güneş doğudan doğar ve batıdan batar.",
        "note": "It + rises (-s)"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Do you take public transport to get to work?",
        "tr": "İşe gitmek için toplu taşımayı mı kullanırsın?",
        "note": "Do you take...?"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We visit our grandparents every two weeks.",
        "tr": "Büyükanne ve büyükbabamızı iki haftada bir ziyaret ederiz.",
        "note": "We + visit (yalın)"
      },
      {
        "pronoun": "We",
        "sentenceType": "negative",
        "eng": "We don't eat dinner after eight o'clock.",
        "tr": "Saat sekizden sonra akşam yemeği yemeyiz.",
        "note": "We + don't eat"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They go swimming at the community pool on Saturdays.",
        "tr": "Cumartesi günleri mahalle havuzunda yüzmeye giderler.",
        "note": "They + go (yalın)"
      },
      {
        "pronoun": "They",
        "sentenceType": "negative",
        "eng": "They don't own a car; they prefer bicycles.",
        "tr": "Onların arabası yok; bisikletleri tercih ederler.",
        "note": "They + don't own"
      }
    ],
    "proTip": "Soru sorarken 'Do / Does' yardımcılarını cümle bekçisi olarak kodlayın; geldikleri an fiilin üzerindeki bütün ekleri silerler.",
    "practices": [
      {
            "id": "a1-present-simple-p1",
            "sentence": "She ___ (watch) TV in the evening.",
            "blankAnswer": "watches",
            "options": [
                  "watch",
                  "watches",
                  "watching"
            ],
            "tr": "O akşamları televizyon izler.",
            "hint": "-ch ile biten fiillere dikkat edin.",
            "explanation": "Geniş zamanda 3. tekil şahıslarda (He/She/It) -ch ile biten fiiller '-es' takısı alır."
      },
      {
            "id": "a1-present-simple-p2",
            "sentence": "My parents ___ (not / drink) coffee.",
            "blankAnswer": "don't drink",
            "options": [
                  "doesn't drink",
                  "don't drink",
                  "not drink"
            ],
            "tr": "Annem ve babam kahve içmezler.",
            "hint": "'My parents' çoğuldur (They).",
            "explanation": "Çoğul öznelerde geniş zaman olumsuzluk eki 'don't' + yalın fiildir."
      },
      {
            "id": "a1-present-simple-p3",
            "sentence": "Where ___ your brother work?",
            "blankAnswer": "does",
            "options": [
                  "do",
                  "does",
                  "is"
            ],
            "tr": "Kardeşin nerede çalışır?",
            "hint": "'Your brother' tekil 3. şahıstır (He).",
            "explanation": "Geniş zamanda He/She/It soru cümlelerinde yardımcı fiil 'does' olur."
      },
      {
            "id": "a1-present-simple-p4",
            "sentence": "I always ___ (walk) to school in the morning.",
            "blankAnswer": "walk",
            "options": [
                  "walk",
                  "walks",
                  "walking"
            ],
            "tr": "Sabahları okula her zaman yürürüm.",
            "hint": "'I' öznesi fiile -s takısı almaz.",
            "explanation": "I, you, we, they özneleriyle geniş zamanda fiil yalın (V1) kullanılır."
      },
      {
            "id": "a1-present-simple-p5",
            "sentence": "Tom ___ (play) football every Saturday.",
            "blankAnswer": "plays",
            "options": [
                  "play",
                  "plays",
                  "playing"
            ],
            "tr": "Tom her cumartesi futbol oynar.",
            "hint": "Tom (He) tekil bir öznedir.",
            "explanation": "Geniş zamanda 3. tekil şahıs fiiline '-s' eklenir (play -> plays)."
      },
      {
            "id": "a1-present-simple-p6",
            "sentence": "My sister ___ (not / like) cold milk.",
            "blankAnswer": "doesn't like",
            "options": [
                  "don't like",
                  "doesn't like",
                  "not likes"
            ],
            "tr": "Kız kardeşim soğuk sütü sevmez.",
            "hint": "My sister (She) için olumsuzluk.",
            "explanation": "3. tekil şahıs olumsuz cümlesinde 'doesn't + yalın fiil' kullanılır."
      },
      {
            "id": "a1-present-simple-p7",
            "sentence": "What time ___ they wake up on Sundays?",
            "blankAnswer": "do",
            "options": [
                  "do",
                  "does",
                  "are"
            ],
            "tr": "Pazar günleri saat kaçta uyanırlar?",
            "hint": "'They' çoğul öznesinin geniş zaman sorusu.",
            "explanation": "'They' öznesi ile geniş zaman soru cümlelerinde 'do' yardımcı fiili kullanılır."
      }
    ]
  },
  {
    "id": "a1-present-continuous",
    "level": "A1",
    "title": "Present Continuous (Şimdiki Zaman)",
    "badge": "Şu An & Süreç",
    "summary": "Konuşma anında gerçekleşen eylemler, geçici durumlar ve geleceğe yönelik kesin randevular.",
    "introduction": "Tam şu anda yapmakta olduğunuz eylemleri (konuşmak, dinlemek, yazmak), bu günlerde süregelen geçici durumları veya kesinleşmiş yakın gelecek randevularını ifade etmek için Present Continuous kullanılır. Türkçe'deki '-yor' ekinin tam karşılığıdır.",
    "subjectSchema": [
      {
        "subject": "I (Ben)",
        "subjectLabel": "1. Tekil Şahıs",
        "positive": "am + V-ing ➔ I am studying English right now.",
        "negative": "am not + V-ing ➔ I am not sleeping.",
        "question": "Am I + V-ing? ➔ Am I speaking too fast?",
        "highlight": "I am reading ➔ I'm reading",
        "positiveTr": "Şu anda İngilizce çalışıyorum.",
        "negativeTr": "Uyumuyorum.",
        "questionTr": "Çok mu hızlı konuşuyorum?"
      },
      {
        "subject": "He / She / It (O)",
        "subjectLabel": "3. Tekil Şahıslar",
        "positive": "is + V-ing ➔ He is driving. / It is raining.",
        "negative": "isn't + V-ing ➔ She isn't listening to music.",
        "question": "Is he/she/it + V-ing? ➔ Is the baby sleeping?",
        "highlight": "Tekillerle daima 'is + V-ing' eşleşir.",
        "positiveTr": "O araba sürüyor. / Yağmur yağıyor.",
        "negativeTr": "O müzik dinlemiyor.",
        "questionTr": "Bebek uyuyor mu?"
      },
      {
        "subject": "You / We / They (Sen/Siz, Biz, Onlar)",
        "subjectLabel": "Çoğullar & 2. Şahıs",
        "positive": "are + V-ing ➔ We are preparing dinner.",
        "negative": "aren't + V-ing ➔ They aren't working today.",
        "question": "Are you/we/they + V-ing? ➔ Are you watching TV?",
        "highlight": "Çoğullarla daima 'are + V-ing' kullanılır.",
        "positiveTr": "Akşam yemeği hazırlıyoruz.",
        "negativeTr": "Bugün çalışmıyorlar.",
        "questionTr": "Televizyon mu izliyorsunuz?"
      }
    ],
    "formulas": [
      {
        "title": "Olumlu Cümle (+)",
        "pattern": "Özne + am / is / are + Fiil-ing (V-ing) + Nesne",
        "explanation": "Şu an yapılmakta olan eylemi bildirir.",
        "sample": "I am writing an email. / They are playing tennis.",
        "sampleTr": "Bir e-posta yazıyorum. / Tenis oynuyorlar."
      },
      {
        "title": "Olumsuz Cümle (-)",
        "pattern": "Özne + am not / isn't / aren't + Fiil-ing",
        "explanation": "Şu an yapılmayan eylemleri anlatır.",
        "sample": "He isn't sleeping. / We aren't watching TV.",
        "sampleTr": "O uyumuyor. / Televizyon izlemiyoruz."
      },
      {
        "title": "Soru Cümlesi (?)",
        "pattern": "Am / Is / Are + Özne + Fiil-ing + ?",
        "explanation": "Şu an yapılan bir eylemi sorar.",
        "sample": "Are you listening to me? / Is it raining?",
        "sampleTr": "Beni dinliyor musun? / Yağmur yağıyor mu?"
      }
    ],
    "keyRules": [
      "-ing Ekleme Yazım Kuralları:\n• 'e' ile biten fiillerde 'e' düşer: make ➔ making, write ➔ writing.\n• Bir sesli + bir sessizle biten tek heceli fiillerde son sessiz harf çift yazılır: run ➔ running, swim ➔ swimming, sit ➔ sitting.\n• '-ie' ile biten fiillerde '-ie' yerine '-y' gelir: lie ➔ lying, die ➔ dying.",
      "DURUM FİİLLERİ (Stative Verbs) KURALI:\nZihinsel süreç, his ve duygu bildiren fiiller şimdiki zaman anlamında olsalar bile kural gereği -ing ALMAZLAR! (love, like, hate, want, need, know, understand, believe, remember, belong, seem). Bu fiiller yerine Geniş Zaman kullanılır: 'I am knowing you' YANLIŞ ➔ 'I know you' DOĞRU."
    ],
    "timeMarkers": [
      {
        "term": "Now / Right now",
        "meaning": "Şimdi / Tam şu anda",
        "usage": "I am typing a message right now."
      },
      {
        "term": "At the moment / Currently",
        "meaning": "Şu anda / Şu sıralar",
        "usage": "She is working on a new project at the moment."
      },
      {
        "term": "Look! / Listen!",
        "meaning": "Bak! / Dinle! (Dikkat çekme)",
        "usage": "Look! The bus is coming."
      },
      {
        "term": "These days / Nowadays",
        "meaning": "Bugünlerde (Geçici süreç)",
        "usage": "He is living with his uncle these days."
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I am wanting a cup of coffee.",
        "correct": "I want a cup of coffee.",
        "reason": "'Want' durum fiilidir (stative verb), istemek hissi -ing eki alamaz.",
        "correctTr": "Bir fincan kahve istiyorum."
      },
      {
        "wrong": "She watching television now.",
        "correct": "She is watching television now.",
        "reason": "'To be' (is) yardımcı fiili unutulmamalıdır; sadece -ing tek başına yüklem oluşturmaz.",
        "correctTr": "O şu an televizyon izliyor."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I am preparing a comprehensive report for the board.",
        "tr": "Yönetim kurulu için kapsamlı bir rapor hazırlıyorum.",
        "note": "am + V-ing"
      },
      {
        "pronoun": "I",
        "sentenceType": "negative",
        "eng": "I am not listening to the radio right now.",
        "tr": "Şu anda radyo dinlemiyorum.",
        "note": "am not + V-ing"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He is repairing his bicycle in the front garage.",
        "tr": "O ön garajda bisikletini tamir ediyor.",
        "note": "is + repairing"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He isn't answering his phone at the moment.",
        "tr": "O şu anda telefonuna cevap vermiyor.",
        "note": "isn't + answering"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She is learning French for her upcoming trip to Paris.",
        "tr": "Paris gezisi için Fransızca öğreniyor.",
        "note": "is + learning"
      },
      {
        "pronoun": "She",
        "sentenceType": "question",
        "eng": "Is she sleeping in her bedroom right now?",
        "tr": "O şu anda yatak odasında uyuyor mu?",
        "note": "Is she sleeping...?"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "Look outside! It is snowing heavily over the mountains.",
        "tr": "Dışarıya bak! Dağların üzerine lapa lapa kar yağıyor.",
        "note": "is + snowing"
      },
      {
        "pronoun": "It",
        "sentenceType": "negative",
        "eng": "The computer isn't working properly today.",
        "tr": "Bilgisayar bugün düzgün çalışmıyor.",
        "note": "isn't + working"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Why are you whispering so quietly in the hall?",
        "tr": "Koridorda neden bu kadar sessizce fısıldıyorsun?",
        "note": "are you whispering...?"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We are organizing an exciting charity event this weekend.",
        "tr": "Bu hafta sonu heyecan verici bir yardım etkinliği düzenliyoruz.",
        "note": "are + organizing"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They are discussing the new budget proposal in meeting room B.",
        "tr": "Toplantı odası B'de yeni bütçe teklifini tartışıyorlar.",
        "note": "are + discussing"
      },
      {
        "pronoun": "They",
        "sentenceType": "negative",
        "eng": "They aren't playing computer games; they are studying.",
        "tr": "Bilgisayar oyunu oynamıyorlar; ders çalışıyorlar.",
        "note": "aren't + playing"
      }
    ],
    "proTip": "Gözünüzün önünde cereyan eden bir eylemi aktarırken 'am/is/are + ing' refleksiniz olsun.",
    "practices": [
      {
            "id": "a1-present-continuous-p1",
            "sentence": "Look! The baby ___ (sleep) in the bed.",
            "blankAnswer": "is sleeping",
            "options": [
                  "sleeps",
                  "is sleeping",
                  "are sleeping"
            ],
            "tr": "Bak! Bebek yatakta uyuyor.",
            "hint": "'Look!' şu anda gerçekleşen bir eyleme işaret eder.",
            "explanation": "Şu anda devam eden eylemler için am/is/are + V-ing kalıbı kullanılır."
      },
      {
            "id": "a1-present-continuous-p2",
            "sentence": "I ___ (not / do) my homework right now.",
            "blankAnswer": "am not doing",
            "options": [
                  "am not doing",
                  "isn't doing",
                  "don't doing"
            ],
            "tr": "Şu anda ödevimi yapmıyorum.",
            "hint": "'I' öznesi için doğru yardımcı fiili seçin.",
            "explanation": "'I' öznesi için şimdiki zaman olumsuzu 'am not doing' şeklindedir."
      },
      {
            "id": "a1-present-continuous-p3",
            "sentence": "Why ___ they wearing warm coats?",
            "blankAnswer": "are",
            "options": [
                  "is",
                  "are",
                  "do"
            ],
            "tr": "Neden kalın kabanlar giyiyorlar?",
            "hint": "'They' çoğul bir öznedir.",
            "explanation": "Şimdiki zamanda 'they' öznesi ile soru sorulurken yardımcı fiil 'are' kullanılır."
      },
      {
            "id": "a1-present-continuous-p4",
            "sentence": "Listen! Someone ___ (knock) on the front door.",
            "blankAnswer": "is knocking",
            "options": [
                  "knocks",
                  "is knocking",
                  "are knocking"
            ],
            "tr": "Dinle! Biri ön kapıyı çalıyor.",
            "hint": "'Listen!' şu anki eylemi bildirir.",
            "explanation": "Tekil zamir 'someone' ile şu an gerçekleşen eylem için 'is knocking' kullanılır."
      },
      {
            "id": "a1-present-continuous-p5",
            "sentence": "We ___ (have) lunch in the kitchen at the moment.",
            "blankAnswer": "are having",
            "options": [
                  "have",
                  "are having",
                  "is having"
            ],
            "tr": "Şu anda mutfakta öğle yemeği yiyoruz.",
            "hint": "'at the moment' şimdiki zaman zarfıdır.",
            "explanation": "'We' çoğul öznesi ile şimdiki zamanda 'are having' yapısı kullanılır."
      },
      {
            "id": "a1-present-continuous-p6",
            "sentence": "He ___ (not / work) in the office today.",
            "blankAnswer": "isn't working",
            "options": [
                  "isn't working",
                  "aren't working",
                  "doesn't working"
            ],
            "tr": "O bugün ofiste çalışmıyor.",
            "hint": "'He' tekil şahıs olumsuzu.",
            "explanation": "3. tekil şahısta şimdiki zaman olumsuzu 'is not' (isn't) + V-ing'dir."
      },
      {
            "id": "a1-present-continuous-p7",
            "sentence": "___ you reading that English storybook now?",
            "blankAnswer": "Are",
            "options": [
                  "Do",
                  "Are",
                  "Is"
            ],
            "tr": "Şu an o İngilizce hikaye kitabını mı okuyorsun?",
            "hint": "'now' belirteci ve 'you' öznesi.",
            "explanation": "Şimdiki zaman 'you' sorularında cümlenin başına 'Are' gelir."
      }
    ]
  },
  {
    "id": "a1-have-got-has-got",
    "level": "A1",
    "title": "Have Got / Has Got (Sahip Olmak & Nitelikler)",
    "badge": "Sahiplik & Özellikler",
    "summary": "Eşyalarımız, aile fertlerimiz, fiziksel özelliklerimiz ve geçici sağlık durumları.",
    "introduction": "Bir nesneye sahip olduğumuzu (arabam var), aile üyelerimizi (iki kardeşim var), dış görünüş özelliklerimizi (yeşil gözleri var) veya sağlık şikayetlerimizi (baş ağrım var) ifade ederken kullanılır. Özellikle İngiliz İngilizcesinde temel seviyede en çok tercih edilen yapıdır.",
    "subjectSchema": [
      {
        "subject": "I / You / We / They",
        "subjectLabel": "Ben, Sen/Siz, Biz, Onlar",
        "positive": "have got ('ve got) ➔ I've got a laptop.",
        "negative": "haven't got ➔ We haven't got enough time.",
        "question": "Have + Özne + got? ➔ Have you got a pen?",
        "highlight": "Kısaltma: 've got (I've got, they've got)",
        "positiveTr": "Bir dizüstü bilgisayarım var.",
        "negativeTr": "Yeterli vaktimiz yok.",
        "questionTr": "Kalemin var mı?"
      },
      {
        "subject": "He / She / It",
        "subjectLabel": "3. Tekil Şahıslar",
        "positive": "has got ('s got) ➔ She's got blue eyes.",
        "negative": "hasn't got ➔ He hasn't got a car.",
        "question": "Has + Özne + got? ➔ Has she got a sister?",
        "highlight": "Kısaltma: 's got (He's got, she's got)",
        "positiveTr": "Onun mavi gözleri var.",
        "negativeTr": "Onun arabası yok.",
        "questionTr": "Onun kız kardeşi var mı?"
      }
    ],
    "formulas": [
      {
        "title": "Olumlu Cümle (+)",
        "pattern": "Özne + have got / has got + Nesne / Nitelik",
        "explanation": "Sahiplik, aile fertleri ve fiziksel özellikleri bildirir.",
        "sample": "I have got a bicycle. / She has got curly hair.",
        "sampleTr": "Bir bisikletim var. / Onun kıvırcık saçları var."
      },
      {
        "title": "Olumsuz Cümle (-)",
        "pattern": "Özne + haven't got / hasn't got + Nesne",
        "explanation": "Sahip olunmayan durumları anlatır.",
        "sample": "He hasn't got any money. / We haven't got time.",
        "sampleTr": "Onun hiç parası yok. / Vaktimiz yok."
      },
      {
        "title": "Soru Cümlesi (?)",
        "pattern": "Have / Has + Özne + got + Nesne + ?",
        "explanation": "Sahiplik sorgular.",
        "sample": "Have you got a car? / Has he got a sister?",
        "sampleTr": "Araban var mı? / Onun kız kardeşi var mı?"
      }
    ],
    "keyRules": [
      "Amerikan İngilizcesinde 'have / has' (Do you have a car? / She has a cat) tercih edilirken, İngiliz İngilizcesinde 'have got / has got' kullanılır. Her iki kullanım da tamamen doğrudur.",
      "Fiziksel özellikler söylenirken sıfat her zaman isimden önce gelir: 'She has got curly brown hair.'",
      "Hastalık ve ağrılarda yaygın kullanım: 'I have got a headache' (Başım ağrıyor), 'She has got a sore throat' (Boğazı ağrıyor)."
    ],
    "commonMistakes": [
      {
        "wrong": "He haven't got a passport.",
        "correct": "He hasn't got a passport.",
        "reason": "'He' öznesiyle daima 'hasn't got' kullanılır.",
        "correctTr": "Onun pasaportu yok."
      },
      {
        "wrong": "Do you have got a pencil?",
        "correct": "Have you got a pencil? / Do you have a pencil?",
        "reason": "'Do' ile 'got' aynı soru kalıbında karıştırılmamalıdır.",
        "correctTr": "Kalemin var mı?"
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I have got a fast laptop for my programming studies.",
        "tr": "Programlama çalışmalarım için hızlı bir dizüstü bilgisayarım var.",
        "note": "I have got"
      },
      {
        "pronoun": "I",
        "sentenceType": "negative",
        "eng": "I haven't got enough spare cash on me today.",
        "tr": "Bugün yanımda yeterli nakit param yok.",
        "note": "I haven't got"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He has got two energetic dogs and a lovely parrot.",
        "tr": "Onun iki enerjik köpeği ve sevimli bir papağanı var.",
        "note": "He has got"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He hasn't got a driving licence yet.",
        "tr": "Onun henüz bir sürücü ehliyeti yok.",
        "note": "He hasn't got"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She has got wavy blonde hair and radiant blue eyes.",
        "tr": "Onun dalgalı sarı saçları ve ışıldayan mavi gözleri var.",
        "note": "She has got"
      },
      {
        "pronoun": "She",
        "sentenceType": "question",
        "eng": "Has she got any brothers or sisters?",
        "tr": "Onun hiç erkek ya da kız kardeşi var mı?",
        "note": "Has she got...?"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "The hotel room has got a breathtaking sea view.",
        "tr": "Otel odasının nefes kesici bir deniz manzarası var.",
        "note": "It has got"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Have you got a minute to help me with this form?",
        "tr": "Bu formda bana yardımcı olmak için bir dakikan var mı?",
        "note": "Have you got...?"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We have got a big organic vegetable garden behind the house.",
        "tr": "Evin arkasında büyük bir organik sebze bahçemiz var.",
        "note": "We have got"
      },
      {
        "pronoun": "We",
        "sentenceType": "negative",
        "eng": "We haven't got any tickets left for tomorrow's game.",
        "tr": "Yarınki maç için elimizde hiç bilet kalmadı.",
        "note": "We haven't got"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They have got a modern apartment in the historic district.",
        "tr": "Tarihi semtte modern bir daireleri var.",
        "note": "They have got"
      },
      {
        "pronoun": "They",
        "sentenceType": "negative",
        "eng": "They haven't got any doubts about their decision.",
        "tr": "Kararları hakkında hiçbir şüpheleri yok.",
        "note": "They haven't got"
      }
    ],
    "proTip": "Kısa cevaplarda 'got' kelimesi tekrarlanmaz: 'Have you got a car?' ➔ 'Yes, I have.' (Yes, I have got denmez).",
    "practices": [
      {
            "id": "a1-have-got-has-got-p1",
            "sentence": "He ___ (have got) a new bicycle.",
            "blankAnswer": "has got",
            "options": [
                  "have got",
                  "has got",
                  "is got"
            ],
            "tr": "Onun yeni bir bisikleti var.",
            "hint": "'He' öznesi tekildir.",
            "explanation": "He, She, It özneleriyle sahiplik bildirirken 'has got' kullanılır."
      },
      {
            "id": "a1-have-got-has-got-p2",
            "sentence": "We ___ (not / have got) any milk in the fridge.",
            "blankAnswer": "haven't got",
            "options": [
                  "hasn't got",
                  "haven't got",
                  "don't got"
            ],
            "tr": "Buzdolabında hiç sütümüz yok.",
            "hint": "'We' çoğul öznedir.",
            "explanation": "'We' öznesi için olumsuz sahiplik 'haven't got' kalıbıdır."
      },
      {
            "id": "a1-have-got-has-got-p3",
            "sentence": "___ you got a blue pencil in your bag?",
            "blankAnswer": "Have",
            "options": [
                  "Has",
                  "Have",
                  "Do"
            ],
            "tr": "Çantanda mavi bir kurşun kalem var mı?",
            "hint": "'You' öznesi ile soru kalıbı.",
            "explanation": "'You' öznesi için sahiplik sorusu 'Have you got...?' ile başlar."
      },
      {
            "id": "a1-have-got-has-got-p4",
            "sentence": "My little cat ___ beautiful green eyes.",
            "blankAnswer": "has got",
            "options": [
                  "have got",
                  "has got",
                  "is got"
            ],
            "tr": "Küçük kedimin güzel yeşil gözleri var.",
            "hint": "'My little cat' tekildir (It).",
            "explanation": "Tekil hayvan/nesne öznelerinde 'has got' kullanılır."
      },
      {
            "id": "a1-have-got-has-got-p5",
            "sentence": "They ___ a car, so they take the bus.",
            "blankAnswer": "haven't got",
            "options": [
                  "haven't got",
                  "hasn't got",
                  "aren't got"
            ],
            "tr": "Arabaları yok, bu yüzden otobüse biniyorlar.",
            "hint": "'They' çoğul öznesinin olumsuz sahipliği.",
            "explanation": "'They' öznesi ile olumsuz sahiplik 'haven't got'tır."
      },
      {
            "id": "a1-have-got-has-got-p6",
            "sentence": "___ your sister got a computer in her bedroom?",
            "blankAnswer": "Has",
            "options": [
                  "Have",
                  "Has",
                  "Does"
            ],
            "tr": "Kız kardeşinin yatak odasında bir bilgisayarı var mı?",
            "hint": "'your sister' tekil 3. şahıstır (She).",
            "explanation": "3. tekil şahıs soru kalıbı 'Has ... got?' şeklindedir."
      },
      {
            "id": "a1-have-got-has-got-p7",
            "sentence": "I ___ two brothers and one younger sister.",
            "blankAnswer": "have got",
            "options": [
                  "have got",
                  "has got",
                  "am got"
            ],
            "tr": "İki erkek kardeşim ve bir küçük kız kardeşim var.",
            "hint": "'I' zamiri ile sahiplik.",
            "explanation": "'I' öznesi ile olumlu sahiplikte 'have got' kalıbı kullanılır."
      }
    ]
  },
  {
    "id": "a1-there-is-are",
    "level": "A1",
    "title": "There is / There are (Varlık Bildirme & Sayılabilirlik)",
    "badge": "Var & Yok",
    "summary": "Bir yerde bir şeyin var olduğunu ya da olmadığını bildirme; Some & Any kullanımı.",
    "introduction": "Bir odada, bir şehirde veya bir masada bir nesnenin ya da insanların var olduğunu ('Masanın üzerinde bir elma var', 'Sınıfta 20 öğrenci var') ifade etmek için 'There is / There are' kullanılır. Türkçedeki 'var' kelimesinin karşılığıdır.",
    "subjectSchema": [
      {
        "subject": "Tekil İsimler & Sayılamayanlar",
        "subjectLabel": "Singular & Uncountable Nouns",
        "positive": "There is (There's) ➔ There is a book on the desk. / There is milk.",
        "negative": "There isn't ➔ There isn't any milk in the fridge.",
        "question": "Is there ...? ➔ Is there a bank near here?",
        "highlight": "Sayılamayan sıvılar, para, zaman ile tekil muamelesi yapılır.",
        "positiveTr": "Masanın üzerinde bir kitap var. / Süt var.",
        "negativeTr": "Buzdolabında hiç süt yok.",
        "questionTr": "Buralarda yakın bir banka var mı?"
      },
      {
        "subject": "Çoğul İsimler",
        "subjectLabel": "Plural Countable Nouns",
        "positive": "There are ➔ There are three apples in the basket.",
        "negative": "There aren't ➔ There aren't any chairs in the room.",
        "question": "Are there ...? ➔ Are there any tickets left?",
        "highlight": "Çoğul sayılabilen nesnelerle daima 'There are' kullanılır.",
        "positiveTr": "Sepette üç elma var.",
        "negativeTr": "Odada hiç sandalye yok.",
        "questionTr": "Hiç bilet kaldı mı?"
      }
    ],
    "formulas": [
      {
        "title": "Some & Any Altın Kuralı",
        "pattern": "Olumlu Cümlelerde: SOME (Biraz / Birkaç)\nOlumsuz ve Sorularda: ANY (Hiç)",
        "explanation": "Some olumlu cümlelerde; Any ise olumsuz ve soru cümlelerinde yer alır.",
        "sample": "There is some cheese. / There isn't any water. / Are there any apples?",
        "sampleTr": "Biraz peynir var. / Hiç su yok. / Hiç elma var mı?"
      }
    ],
    "keyRules": [
      "'A / An' kuralı: Sessiz harfle başlayan tekil isimler 'a' (a car, a house), sesli harfle okunanlar 'an' (an apple, an hour) alır.",
      "Sayılamayan isimler (uncountable nouns) her zaman 'There is' ile kullanılır: water, bread, money, information, music, sugar."
    ],
    "commonMistakes": [
      {
        "wrong": "There are many waters in the bottle.",
        "correct": "There is a lot of water in the bottle.",
        "reason": "Su sayılamaz, çoğul yapılamaz ve 'There are' ile kullanılmaz.",
        "correctTr": "Şişede çok su var."
      },
      {
        "wrong": "Is there some chairs in the kitchen?",
        "correct": "Are there any chairs in the kitchen?",
        "reason": "Sandalyeler çoğul olduğu için 'Are there' ve sorularda 'any' gereklidir.",
        "correctTr": "Mutfakta hiç sandalye var mı?"
      }
    ],
    "examples": [
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "There is a cozy traditional cafe right around the corner.",
        "tr": "Köşeyi dönünce şirin, geleneksel bir kafe var.",
        "note": "There is + tekil isim"
      },
      {
        "pronoun": "It",
        "sentenceType": "negative",
        "eng": "There isn't any milk left in the refrigerator.",
        "tr": "Buzdolabında hiç süt kalmamış.",
        "note": "There isn't + any (sayılamayan)"
      },
      {
        "pronoun": "Wh- / Soru",
        "sentenceType": "question",
        "eng": "Is there a reliable pharmacy open at this hour?",
        "tr": "Bu saatte açık güvenilir bir eczane var mı?",
        "note": "Is there + tekil...?"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "There are thirty-five historic castles in this green valley.",
        "tr": "Bu yemyeşil vadide otuz beş tarihi kale var.",
        "note": "There are + çoğul isimler"
      },
      {
        "pronoun": "They",
        "sentenceType": "negative",
        "eng": "There aren't any empty seats on this crowded train.",
        "tr": "Bu kalabalık trende hiç boş koltuk yok.",
        "note": "There aren't + any + çoğul"
      },
      {
        "pronoun": "Wh- / Soru",
        "sentenceType": "question",
        "eng": "Are there any questions about the lecture today?",
        "tr": "Bugünkü ders hakkında herhangi bir soru var mı?",
        "note": "Are there + any...?"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "There is some fresh orange juice in the glass pitcher.",
        "tr": "Cam sürahide biraz taze portakal suyu var.",
        "note": "There is some + sayılamayan"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "There are several interesting museums worth visiting here.",
        "tr": "Burada ziyaret etmeye değer birkaç ilginç müze var.",
        "note": "There are several..."
      }
    ],
    "proTip": "Birisinden bir şey ikram veya rica ederken (soru olsa bile) nezaketen 'some' kullanılır: 'Would you like some coffee?'",
    "practices": [
      {
            "id": "a1-there-is-are-p1",
            "sentence": "There ___ a big red apple on the table.",
            "blankAnswer": "is",
            "options": [
                  "is",
                  "are",
                  "be"
            ],
            "tr": "Masanın üzerinde büyük kırmızı bir elma var.",
            "hint": "'a big red apple' tekil bir nesnedir.",
            "explanation": "Tekil nesneler için varlık bildiriminde 'There is' kullanılır."
      },
      {
            "id": "a1-there-is-are-p2",
            "sentence": "There ___ (not) any cars in the park.",
            "blankAnswer": "aren't",
            "options": [
                  "isn't",
                  "aren't",
                  "are"
            ],
            "tr": "Parkta hiç araba yok.",
            "hint": "'cars' çoğuldur.",
            "explanation": "Çoğul nesnelerde olumsuz varlık bildirmek için 'There aren't' kullanılır."
      },
      {
            "id": "a1-there-is-are-p3",
            "sentence": "How many students ___ there in the classroom?",
            "blankAnswer": "are",
            "options": [
                  "is",
                  "are",
                  "do"
            ],
            "tr": "Sınıfta kaç tane öğrenci var?",
            "hint": "'students' çoğuldur.",
            "explanation": "Çoğul isimlerin soru yapısında 'How many ... are there' kullanılır."
      },
      {
            "id": "a1-there-is-are-p4",
            "sentence": "There ___ a pencil and two erasers in the box.",
            "blankAnswer": "is",
            "options": [
                  "is",
                  "are",
                  "were"
            ],
            "tr": "Kutuda bir kurşun kalem ve iki silgi var.",
            "hint": "'There is' kendisinden hemen sonra gelen ilk isme uyar.",
            "explanation": "İlk gelen nesne tekil ('a pencil') olduğunda 'There is' tercih edilir."
      },
      {
            "id": "a1-there-is-are-p5",
            "sentence": "There ___ (not) any water in the glass.",
            "blankAnswer": "isn't",
            "options": [
                  "isn't",
                  "aren't",
                  "not is"
            ],
            "tr": "Bardakta hiç su yok.",
            "hint": "Su (water) sayılamayan bir isimdir.",
            "explanation": "Sayılamayan isimler tekil kabul edilir ve 'There isn't' kullanılır."
      },
      {
            "id": "a1-there-is-are-p6",
            "sentence": "___ there a supermarket near your house?",
            "blankAnswer": "Is",
            "options": [
                  "Is",
                  "Are",
                  "Do"
            ],
            "tr": "Evinin yakınında bir süpermarket var mı?",
            "hint": "'a supermarket' tekildir.",
            "explanation": "Tekil nesnelerin varlığını sorarken 'Is there...?' kalıbı kullanılır."
      },
      {
            "id": "a1-there-is-are-p7",
            "sentence": "There ___ five books on the wooden shelf.",
            "blankAnswer": "are",
            "options": [
                  "is",
                  "are",
                  "be"
            ],
            "tr": "Ahşap rafta beş tane kitap var.",
            "hint": "'five books' çoğul bir nesnedir.",
            "explanation": "Çoğul nesnelerin olumlu varlığında 'There are' kullanılır."
      }
    ]
  },
  {
    "id": "a1-can-cant",
    "level": "A1",
    "title": "Modals: Can & Can't (Yetenek & İzin & Rica)",
    "badge": "Yetenek & İzin",
    "summary": "Fiziksel veya zihinsel becerilerimiz, izin isteme ve nezaket ricaları.",
    "introduction": "'Can', yapabilme gücünü, kabiliyeti, izin istemeyi ve yetenekleri ifade eden en pratik yardımcı fiildir. İngilizcedeki en dost canlısı kurala sahiptir: Özneden sonra doğrudan gelir ve özne ne olursa olsun (I, he, they) BİÇİMİ ASLA DEĞİŞMEZ.",
    "subjectSchema": [
      {
        "subject": "Tüm Özneler (I, You, He, She, It, We, They)",
        "subjectLabel": "Herkes İçin Aynı Kalıp",
        "positive": "can + V1 (Yalın) ➔ He can swim. / I can speak Italian.",
        "negative": "cannot / can't + V1 ➔ She can't drive.",
        "question": "Can + Özne + V1? ➔ Can you help me, please?",
        "highlight": "Özneye göre -s, -ed veya başka hiçbir takı almaz!",
        "positiveTr": "O yüzebilir. / İtalyanca konuşabilirim.",
        "negativeTr": "O araba süremez.",
        "questionTr": "Bana yardım edebilir misiniz, lütfen?"
      }
    ],
    "formulas": [
      {
        "title": "Genel Formül",
        "pattern": "Özne + can / can't + V1 (Fiilin EN YALIN HALİ)",
        "explanation": "Fiil asla 'to' almaz. 'I can to run' denmez, 'I can run' denir.",
        "sample": "I can swim. / She can't cook.",
        "sampleTr": "Yüzebilirim. / O yemek pişiremez."
      }
    ],
    "keyRules": [
      "Yetenek bildirirken: 'Birds can fly.' (Kuşlar uçabilir).",
      "İzin ve rica bildirirken: 'Can I open the window?' (Pencereyi açabilir miyim?), 'Can you pass the salt?' (Tuzu uzatabilir misin?).",
      "Olumsuz biçimi bitişik yazılır: 'cannot' veya kısaca 'can't'."
    ],
    "commonMistakes": [
      {
        "wrong": "She cans speak three languages.",
        "correct": "She can speak three languages.",
        "reason": "'Can' modal fiili 3. tekil şahıslarda bile asla -s takısı almaz.",
        "correctTr": "O üç dil konuşabilir."
      },
      {
        "wrong": "I can to swim very well.",
        "correct": "I can swim very well.",
        "reason": "Can'den sonra fiil 'to' almadan doğrudan yalın haliyle kullanılır.",
        "correctTr": "Çok iyi yüzebilirim."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I can speak conversational English and basic German.",
        "tr": "Günlük konuşma düzeyinde İngilizce ve temel düzeyde Almanca konuşabiliyorum.",
        "note": "I can + yalın fiil"
      },
      {
        "pronoun": "I",
        "sentenceType": "negative",
        "eng": "I can't attend the workshop because of an urgent meeting.",
        "tr": "Acil bir toplantı yüzünden atölyeye katılamam.",
        "note": "I can't"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He can play the classical violin beautifully.",
        "tr": "O harika bir şekilde klasik keman çalabilir.",
        "note": "He can (cans olmaz)"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He can't swim in deep water without life jacket.",
        "tr": "Can yeleği olmadan derin suda yüzemez.",
        "note": "He can't"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She can solve complex algorithmic math puzzles quickly.",
        "tr": "Karmaşık algoritmik matematik bulmacalarını hızla çözebilir.",
        "note": "She can"
      },
      {
        "pronoun": "She",
        "sentenceType": "question",
        "eng": "Can she come with us to the cinema tonight?",
        "tr": "Bu akşam bizimle sinemaya gelebilir mi?",
        "note": "Can she come...?"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "This modern smartphone can record videos in 4K resolution.",
        "tr": "Bu modern akıllı telefon 4K çözünürlükte video kaydedebilir.",
        "note": "It can"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Can you please pass me the bread and butter?",
        "tr": "Ekmeği ve tereyağını bana uzatabilir misiniz lütfen?",
        "note": "Can you + rica"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We can finish this project ahead of schedule if we collaborate.",
        "tr": "İşbirliği yaparsak bu projeyi vaktinden önce bitirebiliriz.",
        "note": "We can"
      },
      {
        "pronoun": "We",
        "sentenceType": "negative",
        "eng": "We can't hear what the speaker is saying clearly.",
        "tr": "Konuşmacının ne söylediğini net olarak duyamıyoruz.",
        "note": "We can't"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They can run ten kilometers without taking any break.",
        "tr": "Hiç mola vermeden on kilometre koşabilirler.",
        "note": "They can"
      },
      {
        "pronoun": "They",
        "sentenceType": "negative",
        "eng": "They can't park their vehicle on this private street.",
        "tr": "Araçlarını bu özel sokağa park edemezler (İzin yok).",
        "note": "They can't"
      }
    ],
    "proTip": "Daha resmi ve kibar bir rica için 'Can' yerine 'Could' tercih edebilirsiniz: 'Could you help me?'",
    "practices": [
      {
            "id": "a1-can-cant-p1",
            "sentence": "My sister ___ speak two languages very well.",
            "blankAnswer": "can",
            "options": [
                  "can",
                  "cans",
                  "is can"
            ],
            "tr": "Kız kardeşim iki dili çok iyi konuşabilir.",
            "hint": "Modal fiiller özneden etkilenmez.",
            "explanation": "'Can' modali hiçbir özneye göre takı almaz ve doğrudan 'can' olarak kalır."
      },
      {
            "id": "a1-can-cant-p2",
            "sentence": "I am sorry, but I ___ come to your party tonight.",
            "blankAnswer": "can't",
            "options": [
                  "can't",
                  "don't can",
                  "am not can"
            ],
            "tr": "Üzgünüm ama bu gece partine gelemem.",
            "hint": "'Can' modalının olumsuz hali.",
            "explanation": "'Can' modalının olumsuz biçimi 'cannot' veya kısaca 'can't'tir."
      },
      {
            "id": "a1-can-cant-p3",
            "sentence": "Can you ___ (swim) across this river?",
            "blankAnswer": "swim",
            "options": [
                  "swim",
                  "swimming",
                  "swims"
            ],
            "tr": "Bu nehri yüzerek geçebilir misin?",
            "hint": "Modalden sonraki fiil biçimi.",
            "explanation": "'Can' modalından sonra gelen ana fiil daima eksiz ve yalın halde (V1) kullanılır."
      },
      {
            "id": "a1-can-cant-p4",
            "sentence": "Elephants are very heavy, so they ___ climb trees.",
            "blankAnswer": "can't",
            "options": [
                  "can",
                  "can't",
                  "don't can"
            ],
            "tr": "Filler çok ağırdır, bu yüzden ağaca tırmanamazlar.",
            "hint": "Fiziksel yetersizlik.",
            "explanation": "Yetenek olumsuzluğu 'can't' ile belirtilir."
      },
      {
            "id": "a1-can-cant-p5",
            "sentence": "___ I open the window, please? It is hot here.",
            "blankAnswer": "Can",
            "options": [
                  "Can",
                  "Do",
                  "Am"
            ],
            "tr": "Pencereyi açabilir miyim lütfen? Burası çok sıcak.",
            "hint": "Nezaketle izin / rica cümlesi.",
            "explanation": "İzin ve rica isterken soruya 'Can I...?' kalıbıyla başlanır."
      },
      {
            "id": "a1-can-cant-p6",
            "sentence": "He can ___ (run) fast, but he cannot jump high.",
            "blankAnswer": "run",
            "options": [
                  "run",
                  "runs",
                  "running"
            ],
            "tr": "Hızlı koşabilir ama yükseğe zıplayamaz.",
            "hint": "Modal sonrası fiil kuralı.",
            "explanation": "Can/cannot sonrasında fiile -s veya -ing takısı gelmez, yalın kalır."
      },
      {
            "id": "a1-can-cant-p7",
            "sentence": "They ___ play the guitar, but they sing beautifully.",
            "blankAnswer": "can't",
            "options": [
                  "can't",
                  "aren't",
                  "don't"
            ],
            "tr": "Gitar çalamıyorlar ama çok güzel şarkı söylüyorlar.",
            "hint": "Zıtlık belirten 'but' bağlacı ve yetenek eksikliği.",
            "explanation": "Bir eylemi yapamama yetersizliği 'can't' ile ifade edilir."
      }
    ]
  },
  {
    "id": "a2-past-simple",
    "level": "A2",
    "title": "Past Simple (Geçmiş Zaman: Düzenli & Düzensiz Fiiller)",
    "badge": "Tamamlanmış Geçmiş",
    "summary": "Geçmişte belirli bir zamanda gerçekleşmiş ve tamamen sonlanmış eylemler.",
    "introduction": "Dün, geçen hafta, çocukluğumuzda ya da belirli bir geçmiş tarihte olup bitmiş olayları anlatmak için Geçmiş Zaman kullanılır. Fiiller iki gruptur: Düzenli olanlar '-ed' takısı alır (play ➔ played), düzensiz olanlar ise tamamen kelime kökünden değişir (go ➔ went, buy ➔ bought).",
    "subjectSchema": [
      {
        "subject": "Tüm Özneler (Olumlu Cümle)",
        "subjectLabel": "I, You, He, She, It, We, They",
        "positive": "V2 (Fiilin 2. Hali) ➔ I visited my uncle. / She bought a car.",
        "negative": "didn't + V1 (Fiil YALIN) ➔ We didn't go out.",
        "question": "Did + Özne + V1 (YALIN)? ➔ Did you see that movie?",
        "highlight": "Olumsuzda (didn't) ve soruda (did) fiil YALIN (V1) haline döner!",
        "positiveTr": "Amcamı ziyaret ettim. / O bir araba aldı.",
        "negativeTr": "Dışarı çıkmadık.",
        "questionTr": "O filmi gördün mü?"
      },
      {
        "subject": "To Be Fiilinin Geçmiş Hali (Was / Were)",
        "subjectLabel": "Durum Cümleleri (Fiilsiz)",
        "positive": "I / He / She / It ➔ was | You / We / They ➔ were",
        "negative": "wasn't | weren't ➔ He wasn't at home.",
        "question": "Was / Were + Özne? ➔ Were you tired yesterday?",
        "highlight": "Cümlede was/were varsa asla 'did' yardımcı fiili kullanılmaz!",
        "positiveTr": "Evdeydim. / Yorgundular.",
        "negativeTr": "O evde değildi.",
        "questionTr": "Dün yorgun muydun?"
      }
    ],
    "formulas": [
      {
        "title": "Düzenli Fiillerde -ed Ekleme Kuralları",
        "pattern": "• Genel: walk ➔ walked, clean ➔ cleaned\n• 'e' ile biten: live ➔ lived, arrive ➔ arrived\n• Sessiz + y: study ➔ studied, cry ➔ cried\n• Tek sesli + sessiz: stop ➔ stopped, plan ➔ planned",
        "explanation": "Telaffuz kuralı: -ed takısı ses durumuna göre /t/, /d/ ya da /ɪd/ şeklinde sesletilir.",
        "sample": "I played football. / She studied hard.",
        "sampleTr": "Futbol oynadım. / O çok çalıştı."
      }
    ],
    "keyRules": [
      "Geçmiş Zaman Belirteçleri: yesterday (dün), last week/year (geçen hafta/yıl), two days ago (iki gün önce), in 2018 (2018'de), when I was a child (çocukken).",
      "Altın Kural: 'Did' veya 'Didn't' cümlenin patronudur; geldiği anda fiil 2. halden (V2) kurtulup en sade 1. haline (V1) döner."
    ],
    "comparisonTable": {
      "title": "En Çok Kullanılan 12 Temel Düzensiz Fiil (Irregular Verbs)",
      "headers": [
        "V1 (Yalın)",
        "V2 (Geçmiş Hali)",
        "Türkçe Anlamı",
        "Örnek Cümle"
      ],
      "rows": [
        [
          "go",
          "went",
          "gitmek",
          "We went to the beach yesterday."
        ],
        [
          "come",
          "came",
          "gelmek",
          "He came late to the party."
        ],
        [
          "see",
          "saw",
          "görmek",
          "I saw an eagle in the sky."
        ],
        [
          "buy",
          "bought",
          "satın almak",
          "She bought a vintage coat."
        ],
        [
          "make",
          "made",
          "yapmak",
          "My mom made a delicious cake."
        ],
        [
          "take",
          "took",
          "almak / götürmek",
          "He took my umbrella by mistake."
        ],
        [
          "eat",
          "ate",
          "yemek",
          "We ate Italian pasta for dinner."
        ],
        [
          "drink",
          "drank",
          "içmek",
          "I drank two cups of coffee."
        ],
        [
          "write",
          "wrote",
          "yazmak",
          "She wrote a lovely poem."
        ],
        [
          "read",
          "read (/red/)",
          "okumak",
          "He read the whole newspaper."
        ],
        [
          "give",
          "gave",
          "vermek",
          "They gave us a warm welcome."
        ],
        [
          "find",
          "found",
          "bulmak",
          "I found my lost keys under the sofa."
        ]
      ]
    },
    "commonMistakes": [
      {
        "wrong": "I didn't went to work yesterday.",
        "correct": "I didn't go to work yesterday.",
        "reason": "'Didn't' zaten geçmişi yüklendiği için fiil V2 (went) değil, yalın (go) olmalıdır.",
        "correctTr": "Dün işe gitmedim."
      },
      {
        "wrong": "Did you saw that car crash?",
        "correct": "Did you see that car crash?",
        "reason": "'Did' ile başlayan sorularda fiil mutlaka yalın (see) kalmalıdır.",
        "correctTr": "O araba kazasını gördün mü?"
      },
      {
        "wrong": "Were you play football yesterday?",
        "correct": "Did you play football yesterday?",
        "reason": "Ana fiil (play) varken soru 'were' ile değil 'Did' ile kurulur.",
        "correctTr": "Dün futbol oynadın mı?"
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I visited my grandparents in the village last weekend.",
        "tr": "Geçen hafta sonu köydeki büyükanne ve büyükbabamı ziyaret ettim.",
        "note": "visited (düzenli V2)"
      },
      {
        "pronoun": "I",
        "sentenceType": "negative",
        "eng": "I didn't wake up on time yesterday morning.",
        "tr": "Dün sabah vaktinde uyanamadım.",
        "note": "didn't wake (yalın V1)"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He bought a stylish second-hand car two days ago.",
        "tr": "İki gün önce şık bir ikinci el araba satın aldı.",
        "note": "bought (düzensiz V2)"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He didn't attend the annual budget conference.",
        "tr": "Yıllık bütçe konferansına katılmadı.",
        "note": "didn't attend"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She wrote a wonderful novel during the pandemic.",
        "tr": "Pandemi sırasında harika bir roman yazdı.",
        "note": "wrote (düzensiz V2)"
      },
      {
        "pronoun": "She",
        "sentenceType": "question",
        "eng": "Did she pass her final medical examination?",
        "tr": "O tıp fakültesi bitirme sınavını geçti mi?",
        "note": "Did she pass...?"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "It rained continuously throughout the entire afternoon.",
        "tr": "Bütün öğleden sonra boyunca aralıksız yağmur yağdı.",
        "note": "rained (düzenli V2)"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Where did you spend your summer vacation last year?",
        "tr": "Geçen yıl yaz tatilinizi nerede geçirdiniz?",
        "note": "Where did you spend...?"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We ate delicious homemade Italian pizza for dinner.",
        "tr": "Akşam yemeğinde lezzetli ev yapımı İtalyan pizzası yedik.",
        "note": "ate (düzensiz V2)"
      },
      {
        "pronoun": "We",
        "sentenceType": "negative",
        "eng": "We didn't hear the alarm bell go off this morning.",
        "tr": "Bu sabah çalan alarm zilini duymadık.",
        "note": "didn't hear"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They moved to Canada five years ago to start a business.",
        "tr": "Beş yıl önce iş kurmak için Kanada'ya taşındılar.",
        "note": "moved (düzenli V2)"
      },
      {
        "pronoun": "They",
        "sentenceType": "question",
        "eng": "Did they accept your new commercial partnership proposal?",
        "tr": "Yeni ticari ortaklık teklifinizi kabul ettiler mi?",
        "note": "Did they accept...?"
      }
    ],
    "proTip": "Düzensiz fiilleri ezberlerken gruplayarak (örneğin -ought ile bitenler: buy-bought, think-thought, bring-brought) çalışmak akılda kalıcılığı ikiye katlar.",
    "practices": [
      {
            "id": "a2-past-simple-p1",
            "sentence": "Yesterday, we ___ (go) to the museum and saw old statues.",
            "blankAnswer": "went",
            "options": [
                  "go",
                  "went",
                  "gone"
            ],
            "tr": "Dün müzeye gittik ve eski heykeller gördük.",
            "hint": "'Go' düzensiz bir fiildir.",
            "explanation": "'Go' fiilinin Past Simple (V2) geçmiş zaman hali 'went'tir."
      },
      {
            "id": "a2-past-simple-p2",
            "sentence": "She ___ (not / watch) the movie last night.",
            "blankAnswer": "didn't watch",
            "options": [
                  "didn't watch",
                  "didn't watched",
                  "not watched"
            ],
            "tr": "Dün gece filmi izlemedi.",
            "hint": "'didn't' sonrasındaki fiil kuralı.",
            "explanation": "Past Simple olumsuz cümlesinde 'didn't' kullanılır ve ana fiil yalın kalır (didn't watch)."
      },
      {
            "id": "a2-past-simple-p3",
            "sentence": "What time ___ you arrive at the train station?",
            "blankAnswer": "did",
            "options": [
                  "did",
                  "do",
                  "were"
            ],
            "tr": "Tren istasyonuna saat kaçta vardın?",
            "hint": "Geçmiş zaman eylem sorularının yardımcı fiili.",
            "explanation": "Geçmiş zaman soru cümlelerinde eylem bildiren fiillerle 'did' yardımcı fiili başa gelir."
      },
      {
            "id": "a2-past-simple-p4",
            "sentence": "I ___ (buy) a new warm jacket two days ago.",
            "blankAnswer": "bought",
            "options": [
                  "buyed",
                  "bought",
                  "buy"
            ],
            "tr": "İki gün önce yeni sıcak bir ceket aldım.",
            "hint": "'Buy' fiilinin 2. hali düzensizdir.",
            "explanation": "'Buy' fiili geçmiş zamanda 'bought' olarak çekimlenir."
      },
      {
            "id": "a2-past-simple-p5",
            "sentence": "They ___ (not / visit) their grandparents last weekend.",
            "blankAnswer": "didn't visit",
            "options": [
                  "didn't visit",
                  "didn't visited",
                  "weren't visit"
            ],
            "tr": "Geçen hafta sonu büyükanne ve büyükbabalarını ziyaret etmediler.",
            "hint": "Geçmiş zaman olumsuzu.",
            "explanation": "Geçmiş zaman olumsuzluğunda 'didn't + V1' kalıbı esastır."
      },
      {
            "id": "a2-past-simple-p6",
            "sentence": "Where ___ they go on their summer holiday last July?",
            "blankAnswer": "did",
            "options": [
                  "did",
                  "were",
                  "had"
            ],
            "tr": "Geçen temmuz ayında yaz tatilinde nereye gittiler?",
            "hint": "Geçmiş soru yardımcı fiili.",
            "explanation": "Geçmiş zamanda 'Where did they go...?' şeklinde 'did' kullanılır."
      },
      {
            "id": "a2-past-simple-p7",
            "sentence": "He ___ (eat) delicious pasta at the Italian restaurant.",
            "blankAnswer": "ate",
            "options": [
                  "ate",
                  "eated",
                  "eat"
            ],
            "tr": "İtalyan restoranında lezzetli makarna yedi.",
            "hint": "'Eat' fiilinin 2. hali.",
            "explanation": "'Eat' fiilinin Past Simple (V2) şekli 'ate'tir."
      }
    ]
  },
  {
    "id": "a2-past-continuous",
    "level": "A2",
    "title": "Past Continuous & When / While (Geçmişte Süregelen Zaman)",
    "badge": "Geçmişteki Süreç",
    "summary": "Geçmişte belirli bir anda devam etmekte olan eylemler ve araya giren anlık olaylar.",
    "introduction": "Geçmişte belli bir saatte yapmakta olduğumuz bir eylemi ('Dün akşam saat 8'de televizyon izliyordum') veya geçmişte devam eden uzun bir eylem sırasında başka ani bir olayın gerçekleşmesini ('Ben duş alırken telefon çaldı') anlatmak için kullanılır.",
    "subjectSchema": [
      {
        "subject": "I / He / She / It",
        "subjectLabel": "Tekil Şahıslar",
        "positive": "was + V-ing ➔ I was cooking dinner. / She was studying.",
        "negative": "wasn't + V-ing ➔ He wasn't sleeping when I called.",
        "question": "Was + Özne + V-ing? ➔ Was it raining when you left?",
        "highlight": "Tekillerle 'was + V-ing' kullanılır.",
        "positiveTr": "Akşam yemeği yapıyordum. / O ders çalışıyordu.",
        "negativeTr": "Aradığımda o uyumuyordu.",
        "questionTr": "Çıktığında yağmur yağıyor muydu?"
      },
      {
        "subject": "You / We / They",
        "subjectLabel": "Çoğul Şahıslar",
        "positive": "were + V-ing ➔ We were walking in the park.",
        "negative": "weren't + V-ing ➔ They weren't listening to the teacher.",
        "question": "Were + Özne + V-ing? ➔ Were you waiting for me?",
        "highlight": "Çoğullarla 'were + V-ing' kullanılır.",
        "positiveTr": "Parkta yürüyorduk.",
        "negativeTr": "Öğretmeni dinlemiyorlardı.",
        "questionTr": "Beni mi bekliyordun?"
      }
    ],
    "formulas": [
      {
        "title": "When & While Altın Formülü",
        "pattern": "• While + Past Continuous (Uzun Eylem), ... Past Simple (Kısa Eylem)\n  Örnek: While I was driving, my phone rang.\n• When + Past Simple (Kısa Eylem), ... Past Continuous (Uzun Eylem)\n  Örnek: When the lights went out, we were watching a movie.",
        "explanation": "While '-iken' anlamında devam eden uzun eylemi, When '-dığında' anlamında kesintiye uğratan ani olayı bağlar.",
        "sample": "While he was reading, the door bell rang.",
        "sampleTr": "O kitap okurken kapı zili çaldı."
      }
    ],
    "keyRules": [
      "Aynı anda devam eden iki paralel eylemde her iki tarafta da 'while' ile Past Continuous kullanılabilir: 'While I was studying, my brother was playing computer games.'",
      "Durum bildiren stative fiiller (know, want, believe) burada da -ing almaz, Past Simple kullanılır."
    ],
    "commonMistakes": [
      {
        "wrong": "When I was walking home, it was starting to rain.",
        "correct": "When I was walking home, it started to rain.",
        "reason": "Yağmurun başlaması ani bir eylemdir; Past Simple (started) gerektirir.",
        "correctTr": "Eve doğru yürürken yağmur yağmaya başladı."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I was having a peaceful breakfast when the courier arrived.",
        "tr": "Kurye geldiğinde huzurlu bir kahvaltı yapıyordum.",
        "note": "I was having"
      },
      {
        "pronoun": "I",
        "sentenceType": "negative",
        "eng": "I wasn't paying attention when the instructor spoke.",
        "tr": "Eğitmen konuştuğunda dikkatimi vermiyordum.",
        "note": "I wasn't paying"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He was driving on the highway when the tire punctured.",
        "tr": "Lastik patladığında otobanda araba sürüyordu.",
        "note": "He was driving"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He wasn't sleeping yesterday at midnight.",
        "tr": "Dün gece yarısı uyumuyordu.",
        "note": "He wasn't sleeping"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She was practicing the piano while her brother was studying.",
        "tr": "Erkek kardeşi ders çalışırken o piyano pratiği yapıyordu.",
        "note": "She was practicing"
      },
      {
        "pronoun": "She",
        "sentenceType": "question",
        "eng": "Was she crying when you entered the room?",
        "tr": "Sen odaya girdiğinde ağlıyor muydu?",
        "note": "Was she crying...?"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "It was snowing quietly outside all night long.",
        "tr": "Bütün gece boyunca dışarıda sessizce kar yağıyordu.",
        "note": "It was snowing"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "What were you doing yesterday at eight in the evening?",
        "tr": "Dün akşam saat sekizde ne yapıyordun?",
        "note": "What were you doing...?"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We were hiking in the misty forest when the storm began.",
        "tr": "Fırtına başladığında sisli ormanda yürüyüş yapıyorduk.",
        "note": "We were hiking"
      },
      {
        "pronoun": "We",
        "sentenceType": "negative",
        "eng": "We weren't expecting any guests at that late hour.",
        "tr": "O geç saatte hiç misafir beklemiyorduk.",
        "note": "We weren't expecting"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They were discussing the marketing strategy during the lunch break.",
        "tr": "Öğle molası boyunca pazarlama stratejisini tartışıyorlardı.",
        "note": "They were discussing"
      },
      {
        "pronoun": "They",
        "sentenceType": "negative",
        "eng": "They weren't watching the match when the goal was scored.",
        "tr": "Gol atıldığında maçı izlemiyorlardı.",
        "note": "They weren't watching"
      }
    ],
    "proTip": "Hikaye ve roman anlatımlarında arka plan atmosferini kurmak için Past Continuous, olayları ilerletmek için Past Simple kullanılır.",
    "practices": [
      {
            "id": "a2-past-continuous-p1",
            "sentence": "I ___ (read) a book when the telephone suddenly rang.",
            "blankAnswer": "was reading",
            "options": [
                  "was reading",
                  "were reading",
                  "read"
            ],
            "tr": "Telefon aniden çaldığında bir kitap okuyordum.",
            "hint": "'I' öznesi için tekil geçmiş süreklilik.",
            "explanation": "'When' ile kesilen uzun süreli eylem için Past Continuous (was reading) kullanılır."
      },
      {
            "id": "a2-past-continuous-p2",
            "sentence": "They were walking in the park while it ___ (rain).",
            "blankAnswer": "was raining",
            "options": [
                  "was raining",
                  "rained",
                  "were raining"
            ],
            "tr": "Yağmur yağarken parkta yürüyorlardı.",
            "hint": "'while' eş zamanlı devam eden bir durumu bağlar.",
            "explanation": "'While' bağlacından sonra süregelen durum Past Continuous (was raining) ile anlatılır."
      },
      {
            "id": "a2-past-continuous-p3",
            "sentence": "My mother was cooking dinner ___ the lights suddenly went out.",
            "blankAnswer": "when",
            "options": [
                  "when",
                  "while",
                  "during"
            ],
            "tr": "Annem akşam yemeğini pişirirken aniden elektrikler kesildi.",
            "hint": "Anlık kesinti bildiren Past Simple (went out) öncesi bağlaç.",
            "explanation": "Süregelen bir eylem yaşanırken anlık bir olay (went out) araya giriyorsa başına 'when' gelir."
      },
      {
            "id": "a2-past-continuous-p4",
            "sentence": "What were you doing ___ the traffic accident happened?",
            "blankAnswer": "when",
            "options": [
                  "when",
                  "while",
                  "since"
            ],
            "tr": "Trafik kazası gerçekleştiğinde sen ne yapıyordun?",
            "hint": "Anlık eylem (happened) bağlacı.",
            "explanation": "Geçmişte anlık meydana gelen olayın başında 'when' kullanılır."
      },
      {
            "id": "a2-past-continuous-p5",
            "sentence": "___ I was washing the dishes, my brother was doing his homework.",
            "blankAnswer": "While",
            "options": [
                  "While",
                  "When",
                  "During"
            ],
            "tr": "Ben bulaşıkları yıkarken erkek kardeşim ödevini yapıyordu.",
            "hint": "Aynı anda paralel devam eden iki eylem.",
            "explanation": "Geçmişte aynı anda süren iki eylemi bağlarken 'While' kullanılır."
      },
      {
            "id": "a2-past-continuous-p6",
            "sentence": "We were waiting at the bus stop when it ___ (start) to snow.",
            "blankAnswer": "started",
            "options": [
                  "started",
                  "was starting",
                  "starts"
            ],
            "tr": "Kar yağmaya başladığında otobüs durağında bekliyorduk.",
            "hint": "'When' sonrasındaki anlık olay.",
            "explanation": "'When' sonrasındaki cümlecik genellikle anlık bir eylemdir ve Past Simple (started) alır."
      },
      {
            "id": "a2-past-continuous-p7",
            "sentence": "He ___ (not / listen) to the teacher when she asked him a question.",
            "blankAnswer": "wasn't listening",
            "options": [
                  "wasn't listening",
                  "weren't listening",
                  "didn't listening"
            ],
            "tr": "Öğretmen ona soru sorduğunda öğretmeni dinlemiyordu.",
            "hint": "'He' tekil şahsının geçmiş süreklilik olumsuzu.",
            "explanation": "'He' öznesi için Past Continuous olumsuzu 'was not' (wasn't) listening'dir."
      },
      {
            "id": "a2-past-continuous-p8",
            "sentence": "While they ___ (play) football, it started to rain heavily.",
            "blankAnswer": "were playing",
            "options": [
                  "were playing",
                  "was playing",
                  "played"
            ],
            "tr": "Onlar futbol oynarken şiddetli bir şekilde yağmur yağmaya başladı.",
            "hint": "'They' çoğul öznesinin 'while' cümlesindeki hali.",
            "explanation": "'While' sonrasında çoğul özne (they) ile 'were playing' kullanılır."
      }
    ]
  },
  {
    "id": "a2-comparatives-superlatives",
    "level": "A2",
    "title": "Comparatives & Superlatives (Kıyaslama & Üstünlük)",
    "badge": "Karşılaştırma Sanatı",
    "summary": "İki nesneyi birbiriyle kıyaslama (Comparative) veya bir grubun en iyisini seçme (Superlative).",
    "introduction": "Sıfatların kıyaslama formlarıdır. 'Comparative' iki şeyi (Ahmet Mehmet'ten daha hızlıdır), 'Superlative' ise üç veya daha fazla şey arasında zirvede olanı (Everest dünyanın en yüksek dağıdır) belirtir.",
    "subjectSchema": [
      {
        "subject": "Kısa Sıfatlar (1 Hece)",
        "subjectLabel": "fast, tall, cheap, cold",
        "positive": "Comparative: Sıfat + -er + than ➔ faster than, taller than",
        "negative": "Superlative: the + Sıfat + -est ➔ the fastest, the tallest",
        "question": "Eşitlik (As ... As): as + Sıfat + as ➔ as tall as me",
        "highlight": "'y' ile biten 2 heceliler de bu kurala uyar: easy ➔ easier than",
        "positiveTr": "Daha hızlı, daha uzun",
        "negativeTr": "En hızlı, en uzun",
        "questionTr": "Benim kadar uzun"
      },
      {
        "subject": "Uzun Sıfatlar (2+ Hece)",
        "subjectLabel": "expensive, modern, comfortable",
        "positive": "Comparative: more + Sıfat + than ➔ more expensive than",
        "negative": "Superlative: the most + Sıfat ➔ the most expensive",
        "question": "Daha az: less + Sıfat + than ➔ less expensive than",
        "highlight": "Uzun sıfatların sonuna asla -er veya -est eklenmez!",
        "positiveTr": "Daha pahalı",
        "negativeTr": "En pahalı",
        "questionTr": "Daha az pahalı"
      }
    ],
    "formulas": [
      {
        "title": "Özel Düzensiz Sıfatlar (Ezberlenmeli)",
        "pattern": "• good ➔ better than ➔ the best (iyi - daha iyi - en iyi)\n• bad ➔ worse than ➔ the worst (kötü - daha kötü - en kötü)\n• far ➔ further/farther than ➔ the furthest (uzak - daha uzak - en uzak)\n• little ➔ less than ➔ the least (az - daha az - en az)\n• much/many ➔ more than ➔ the most (çok - daha çok - en çok)",
        "explanation": "Bu sıfatlar kural dışıdır ve tamamen şekil değiştirir.",
        "sample": "This car is better than that one. / It is the best hotel.",
        "sampleTr": "Bu araba diğerinden daha iyidir. / Burası en iyi oteldir."
      }
    ],
    "keyRules": [
      "Superlative yapılarının önünde daima 'the' artikeli yer alır: 'the most dangerous animal', 'the longest river'.",
      "İki taraf eşitse: 'as + sıfat + as' kullanılır: 'He is as strong as a lion.'",
      "İki şeyden biri diğerinden daha az ise: 'not as ... as' kalıbı harikadır: 'A train is not as fast as an airplane.'"
    ],
    "commonMistakes": [
      {
        "wrong": "This phone is more cheaper than mine.",
        "correct": "This phone is cheaper than mine.",
        "reason": "'Cheap' tek hecelidir; hem 'more' hem '-er' takısı aynı anda kullanılamaz.",
        "correctTr": "Bu telefon benimkinden daha ucuz."
      },
      {
        "wrong": "He is the most good player in the team.",
        "correct": "He is the best player in the team.",
        "reason": "'Good' düzensiz bir sıfattır; 'the best' olmalıdır.",
        "correctTr": "O takımdaki en iyi oyuncudur."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I am slightly taller than my elder brother now.",
        "tr": "Artık abimden biraz daha uzunum.",
        "note": "taller than (tek hece)"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He is the most creative designer in our advertising agency.",
        "tr": "O reklam ajansımızdaki en yaratıcı tasarımcıdır.",
        "note": "the most creative (uzun)"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She works much faster and more accurately than before.",
        "tr": "Eskisinden çok daha hızlı ve daha hatasız çalışıyor.",
        "note": "more accurately"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "Mount Everest is the highest mountain peak in the world.",
        "tr": "Everest Dağı dünyadaki en yüksek dağ zirvesidir.",
        "note": "the highest"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "This new laptop is significantly lighter than my old computer.",
        "tr": "Bu yeni dizüstü bilgisayar eski bilgisayarımdan belirgin biçimde daha hafif.",
        "note": "lighter than"
      },
      {
        "pronoun": "You",
        "sentenceType": "positive",
        "eng": "You are just as capable as anyone else on the team.",
        "tr": "Takımdaki diğer herkes kadar yeteneklisin.",
        "note": "as capable as (eşitlik)"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We chose the least expensive flight option available.",
        "tr": "Mevcut en ucuz (en az masraflı) uçuş seçeneğini seçtik.",
        "note": "the least expensive"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They live in the most peaceful neighborhood of the city.",
        "tr": "Şehrin en huzurlu mahallesinde yaşıyorlar.",
        "note": "the most peaceful"
      }
    ],
    "proTip": "Karşılaştırmayı güçlendirmek için önüne 'much' veya 'far' ekleyebilirsiniz: 'much better' (çok daha iyi).",
    "practices": [
      {
            "id": "a2-comparatives-superlatives-p1",
            "sentence": "This warm jacket is ___ (cheap) than that leather coat.",
            "blankAnswer": "cheaper",
            "options": [
                  "cheaper",
                  "more cheap",
                  "cheapest"
            ],
            "tr": "Bu sıcak ceket, şu deri kabandan daha ucuzdur.",
            "hint": "Kısa (tek heceli) sıfat kuralı.",
            "explanation": "Tek heceli kısa sıfatlarda comparative yaparken sona '-er' takısı eklenir (cheap -> cheaper than)."
      },
      {
            "id": "a2-comparatives-superlatives-p2",
            "sentence": "Mount Everest is the ___ (high) mountain in the world.",
            "blankAnswer": "highest",
            "options": [
                  "higher",
                  "highest",
                  "most high"
            ],
            "tr": "Everest Dağı dünyadaki en yüksek dağdır.",
            "hint": "'the' belirteci en üstünlüğü gösterir.",
            "explanation": "Superlative yapısında tek heceli sıfatların başına 'the', sonuna '-est' takısı gelir."
      },
      {
            "id": "a2-comparatives-superlatives-p3",
            "sentence": "Health is ___ (important) than money.",
            "blankAnswer": "more important",
            "options": [
                  "more important",
                  "importanter",
                  "most important"
            ],
            "tr": "Sağlık paradan daha önemlidir.",
            "hint": "Çok heceli uzun sıfat kuralı.",
            "explanation": "İki veya daha çok heceli uzun sıfatlar comparative yapılırken önlerine 'more' alır."
      },
      {
            "id": "a2-comparatives-superlatives-p4",
            "sentence": "My grandfather is the ___ (old) person in our family.",
            "blankAnswer": "oldest",
            "options": [
                  "older",
                  "oldest",
                  "most old"
            ],
            "tr": "Büyükbabam ailemizdeki en yaşlı kişidir.",
            "hint": "'the' ile superlative.",
            "explanation": "'Old' tek hecelidir; superlative biçimi 'the oldest'tir."
      },
      {
            "id": "a2-comparatives-superlatives-p5",
            "sentence": "An airplane is much ___ (fast) than a train.",
            "blankAnswer": "faster",
            "options": [
                  "faster",
                  "more fast",
                  "fastest"
            ],
            "tr": "Uçak trenden çok daha hızlıdır.",
            "hint": "'Fast' kısa sıfattır.",
            "explanation": "'Fast' sıfatının comparative hali 'faster'dır."
      },
      {
            "id": "a2-comparatives-superlatives-p6",
            "sentence": "Today is the ___ (good) day of my whole life.",
            "blankAnswer": "best",
            "options": [
                  "best",
                  "goodest",
                  "better"
            ],
            "tr": "Bugün tüm hayatımın en iyi günüdür.",
            "hint": "'Good' düzensiz bir sıfattır.",
            "explanation": "'Good' sıfatının en üstünlük (superlative) hali 'best'tir (the best)."
      },
      {
            "id": "a2-comparatives-superlatives-p7",
            "sentence": "This puzzle is ___ (difficult) than the previous one.",
            "blankAnswer": "more difficult",
            "options": [
                  "more difficult",
                  "difficulter",
                  "most difficult"
            ],
            "tr": "Bu bulmaca bir öncekinden daha zordur.",
            "hint": "Üç heceli sıfat.",
            "explanation": "Uzun sıfatların comparative halinde 'more' kullanılır."
      }
    ]
  },
  {
    "id": "a2-modals-must-should",
    "level": "A2",
    "title": "Modals: Must, Have to & Should (Zorunluluk & Tavsiye)",
    "badge": "Kurallar & Öneriler",
    "summary": "Yasal ve kişisel zorunluluklar (must/have to), yasaklar (mustn't) ve dostane tavsiyeler (should).",
    "introduction": "Günlük hayatta kurallardan, yapılması zorunlu görevlerden veya birine iyi bir tavsiye vermekten bahsederken bu yardımcı fiiller kullanılır.",
    "subjectSchema": [
      {
        "subject": "Must & Mustn't",
        "subjectLabel": "Kişisel Zorunluluk & Kesin Yasak",
        "positive": "must + V1 ➔ I must study harder. (Kişisel karar)",
        "negative": "mustn't + V1 ➔ You mustn't smoke here! (Kesin YASAK)",
        "question": "Must I ...? ➔ Must we leave now?",
        "highlight": "Mustn't kesin yasak bildirir (Yasaklanmıştır).",
        "positiveTr": "Daha sıkı çalışmalıyım (Kişisel karar).",
        "negativeTr": "Burada sigara içemezsiniz! (Yasak)",
        "questionTr": "Şimdi çıkmak zorunda mıyız?"
      },
      {
        "subject": "Have to / Don't have to",
        "subjectLabel": "Dışsal Kural & Zorunluluk Yokluğu",
        "positive": "have to / has to + V1 ➔ Doctors have to wear uniforms.",
        "negative": "don't have to + V1 ➔ You don't have to wake up early tomorrow.",
        "question": "Do you have to ...? ➔ Do I have to pay now?",
        "highlight": "'Don't have to' = Zorunda değilsin, serbestsin (Yasak değildir!).",
        "positiveTr": "Doktorlar üniforma giymek zorundadır.",
        "negativeTr": "Yarın erken uyanmak zorunda değilsin.",
        "questionTr": "Şimdi ödemek zorunda mıyım?"
      },
      {
        "subject": "Should & Shouldn't",
        "subjectLabel": "Tavsiye & Öneri",
        "positive": "should + V1 ➔ You should drink more water.",
        "negative": "shouldn't + V1 ➔ You shouldn't stay up so late.",
        "question": "Should I ...? ➔ Should I accept this job offer?",
        "highlight": "Nezaket ve tavsiye: 'Bunu yapman iyi olur.'",
        "positiveTr": "Daha çok su içmelisin (Tavsiye).",
        "negativeTr": "Bu kadar geç saate kadar ayakta kalmamalısın.",
        "questionTr": "Bu iş teklifini kabul etmeli miyim?"
      }
    ],
    "formulas": [
      {
        "title": "Büyük Fark: Mustn't vs. Don't have to",
        "pattern": "• You MUSTN'T park here = Burada park etmek KESİNLİKLE YASAKTIR (Ceza yersin).\n• You DON'T HAVE TO pay = Ödemek zorunda değilsin, istersen ödersin (Gerek yok).",
        "explanation": "En çok karıştırılan iki anlam ayrımıdır.",
        "sample": "You mustn't touch it. / You don't have to come.",
        "sampleTr": "Ona dokunmamalısın (Yasak). / Gelmek zorunda değilsin (Serbest)."
      }
    ],
    "keyRules": [
      "Tüm bu modal fiillerden sonra gelen ana fiil daima yalın (V1) haldedir: 'You should see a doctor.'",
      "Geçmiş zamanda zorunluluk söylerken 'must' yerine 'had to' kullanılır: 'I had to work late yesterday.'"
    ],
    "commonMistakes": [
      {
        "wrong": "You must to wear a seatbelt.",
        "correct": "You must wear a seatbelt.",
        "reason": "Must'tan sonra asla 'to' gelmez; doğrudan yalın fiil kullanılır.",
        "correctTr": "Emniyet kemeri takmalısın."
      },
      {
        "wrong": "Tomorrow is Sunday, so I mustn't go to school.",
        "correct": "Tomorrow is Sunday, so I don't have to go to school.",
        "reason": "Pazar günü okula gitmek 'yasak' değil, 'gerek yoktur'; don't have to denmelidir.",
        "correctTr": "Yarın pazar, bu yüzden okula gitmek zorunda değilim."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I must renew my passport before the international flight.",
        "tr": "Uluslararası uçuştan önce pasaportumu yenilemeliyim (Kişisel zorunluluk).",
        "note": "I must + V1"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I have to wake up at six every morning for work.",
        "tr": "İş için her sabah altıda kalkmak zorundayım (Dışsal kural).",
        "note": "have to + V1"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He has to wear a safety helmet on the construction site.",
        "tr": "İnşaat sahasında güvenlik kaskı takmak zorundadır.",
        "note": "He has to"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He shouldn't consume so much sugary soda every day.",
        "tr": "Her gün bu kadar çok şekerli gazoz tüketmemeli (Tavsiye).",
        "note": "shouldn't + V1"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She should consult an experienced lawyer before signing.",
        "tr": "İmzalamadan önce deneyimli bir avukata danışmalı.",
        "note": "She should"
      },
      {
        "pronoun": "She",
        "sentenceType": "negative",
        "eng": "She doesn't have to attend the orientation session.",
        "tr": "Uyum seminerine katılmak zorunda değil (Serbest).",
        "note": "doesn't have to"
      },
      {
        "pronoun": "You",
        "sentenceType": "negative",
        "eng": "You mustn't take photographs inside the historical museum.",
        "tr": "Tarihi müzenin içinde fotoğraf çekmek kesinlikle yasaktır.",
        "note": "mustn't (Yasak)"
      },
      {
        "pronoun": "You",
        "sentenceType": "positive",
        "eng": "You should get at least eight hours of sleep every night.",
        "tr": "Her gece en az sekiz saat uyumalısın.",
        "note": "should (Tavsiye)"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We have to submit the audited tax reports by Friday.",
        "tr": "Denetlenmiş vergi raporlarını cumaya kadar teslim etmek zorundayız.",
        "note": "have to"
      },
      {
        "pronoun": "We",
        "sentenceType": "negative",
        "eng": "We don't have to cook tonight; we can order pizza.",
        "tr": "Bu akşam yemek pişirmek zorunda değiliz; pizza sipariş edebiliriz.",
        "note": "don't have to"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They must turn off their mobile phones during the exam.",
        "tr": "Sınav sırasında cep telefonlarını kapatmak zorundadırlar.",
        "note": "must turn off"
      },
      {
        "pronoun": "They",
        "sentenceType": "question",
        "eng": "Should they invest in renewable solar energy right now?",
        "tr": "Şu anda yenilenebilir güneş enerjisine yatırım yapmalılar mı?",
        "note": "Should they...?"
      }
    ],
    "proTip": "Bir arkadaşınıza nazikçe öneride bulunurken 'I think you should...' kalıbı en sempatik yaklaşımdır.",
    "practices": [
      {
            "id": "a2-modals-must-should-p1",
            "sentence": "You ___ stop your car when the traffic light is red; it is the law.",
            "blankAnswer": "must",
            "options": [
                  "must",
                  "should",
                  "might"
            ],
            "tr": "Trafik ışığı kırmızı olduğunda arabanızı durdurmalısınız; bu yasadır.",
            "hint": "Yasal kesin bir zorunluluk.",
            "explanation": "Kanun, kural ve kaçınılmaz zorunluluk bildiren durumlarda 'must' kullanılır."
      },
      {
            "id": "a2-modals-must-should-p2",
            "sentence": "You look exhausted. You ___ take a short break.",
            "blankAnswer": "should",
            "options": [
                  "must",
                  "should",
                  "have"
            ],
            "tr": "Tükenmiş görünüyorsun. Kısa bir mola vermelisin.",
            "hint": "Dostane bir tavsiye.",
            "explanation": "Kişiye iyi geleceğini düşündüğümüz tavsiye ve önerilerde 'should' kullanılır."
      },
      {
            "id": "a2-modals-must-should-p3",
            "sentence": "Children ___ play with sharp kitchen knives; it is very dangerous.",
            "blankAnswer": "mustn't",
            "options": [
                  "mustn't",
                  "don't have to",
                  "should"
            ],
            "tr": "Çocuklar keskin mutfak bıçaklarıyla oynamamalıdır; çok tehlikelidir.",
            "hint": "Kesin bir yasaklama.",
            "explanation": "Tehlike veya yasak belirten durumlarda olumsuz kesinlik için 'mustn't' kullanılır."
      },
      {
            "id": "a2-modals-must-should-p4",
            "sentence": "Tomorrow is Sunday, so I ___ wake up early.",
            "blankAnswer": "don't have to",
            "options": [
                  "don't have to",
                  "mustn't",
                  "shouldn't"
            ],
            "tr": "Yarın pazar, bu yüzden erken uyanmak zorunda değilim.",
            "hint": "Zorunluluğun olmaması durumu.",
            "explanation": "Zorunluluk bulunmadığını ifade etmek için 'don't have to' kullanılır."
      },
      {
            "id": "a2-modals-must-should-p5",
            "sentence": "You ___ eat so much sugary food if you want to stay fit.",
            "blankAnswer": "shouldn't",
            "options": [
                  "shouldn't",
                  "mustn't",
                  "don't have to"
            ],
            "tr": "Formda kalmak istiyorsan bu kadar çok şekerli yiyecek yememelisin.",
            "hint": "Sağlık tavsiyesi.",
            "explanation": "Olumsuz tavsiye ve öğüt verirken 'shouldn't' kullanılır."
      },
      {
            "id": "a2-modals-must-should-p6",
            "sentence": "All passengers ___ fasten their seatbelts during airplane takeoff.",
            "blankAnswer": "must",
            "options": [
                  "must",
                  "should",
                  "can"
            ],
            "tr": "Uçak kalkışı sırasında tüm yolcular emniyet kemerlerini bağlamalıdır.",
            "hint": "Havacılık kuralı ve zorunluluk.",
            "explanation": "Uçuş kuralları gibi kati kurallarda 'must' kullanılır."
      },
      {
            "id": "a2-modals-must-should-p7",
            "sentence": "Do you think I ___ send my CV for this job opening?",
            "blankAnswer": "should",
            "options": [
                  "should",
                  "must",
                  "have to"
            ],
            "tr": "Sence bu iş ilanı için özgeçmişimi göndermeli miyim?",
            "hint": "Fikir / tavsiye sorma sorusu.",
            "explanation": "Bir konuda başkasının tavsiyesini isterken 'should' kullanılır."
      }
    ]
  },
  {
    "id": "b1-present-perfect",
    "level": "B1",
    "title": "Present Perfect Tense (Yakın / Etkisi Süren Geçmiş)",
    "badge": "Geçmiş ile Bugünün Köprüsü",
    "summary": "Geçmişte yaşanmış ancak sonucu veya etkisi şu anda devam eden eylemler; hayat tecrübeleri.",
    "introduction": "Türkçede birebir aynı zaman olmadığı için Türk öğrencilerin en çok tereddüt ettiği ama İngilizcenin en popüler ve şık zamanıdır. Olayın tam olarak ne zaman olduğu değil, şu anki sonucunun ve getirdiği tecrübenin önemi vurgulanır. Örneğin anahtarınızı kaybettiyseniz ve şu an kapıda bekliyorsanız 'I have lost my key' dersiniz.",
    "subjectSchema": [
      {
        "subject": "I / You / We / They",
        "subjectLabel": "Ben, Sen, Biz, Onlar",
        "positive": "have ('ve) + V3 ➔ I have lived here for 5 years.",
        "negative": "haven't + V3 ➔ They haven't finished the project yet.",
        "question": "Have + Özne + V3? ➔ Have you ever seen a shooting star?",
        "highlight": "Düzenli fiiller -ed alır; düzensizlerin 3. hali (V3) kullanılır.",
        "positiveTr": "5 yıldır burada yaşıyorum.",
        "negativeTr": "Projeyi henüz bitirmediler.",
        "questionTr": "Daha önce hiç kayan bir yıldız gördün mü?"
      },
      {
        "subject": "He / She / It",
        "subjectLabel": "3. Tekil Şahıslar",
        "positive": "has ('s) + V3 ➔ She has visited ten different countries.",
        "negative": "hasn't + V3 ➔ He hasn't replied to my email yet.",
        "question": "Has + Özne + V3? ➔ Has the movie started?",
        "highlight": "Tekillerde 'has + V3' eşleşir.",
        "positiveTr": "O on farklı ülkeyi ziyaret etti.",
        "negativeTr": "E-postama henüz yanıt vermedi.",
        "questionTr": "Film başladı mı?"
      }
    ],
    "formulas": [
      {
        "title": "Önemli Zaman Belirteçleri (Key Words)",
        "pattern": "• Ever: Hayatında hiç mi? (Sorularda: Have you ever been to Rome?)\n• Never: Asla / Hayatımda hiç (I have never tasted sushi).\n• Just: Az önce / Henüz (I have just sent the message).\n• Already: Çoktan / Zaten beklenenden önce (She has already left).\n• Yet: Henüz değil (Cümle sonunda: I haven't seen it yet).\n• Since: -den beri (Başlangıç noktası: since 2015, since Monday).\n• For: -dır/-dir (Süreç: for 10 years, for two hours).",
        "explanation": "Bu zarflar cümlenin neresinde yer aldıklarına göre anlamı şekillendirir.",
        "sample": "I have just eaten. / She hasn't finished yet.",
        "sampleTr": "Az önce yedim. / O henüz bitirmedi."
      }
    ],
    "keyRules": [
      "KESİN GEÇMİŞ ZAMAN KURALI: Cümlede 'yesterday', 'last year', 'in 1999', 'two hours ago' gibi net bir geçmiş zaman ifadesi varsa PRESENT PERFECT KULLANILAMAZ! O zaman Past Simple (went, saw) zorunludur.",
      "Been vs. Gone:\n• 'He has gone to Italy' = İtalya'ya gitti ve hala orada, dönmedi.\n• 'He has been to Italy' = İtalya'da bulundu, gezdi ve geri döndü."
    ],
    "comparisonTable": {
      "title": "Since vs. For Karşılaştırma Matrisi",
      "headers": [
        "Zarf",
        "Mantık",
        "Örnek Zamanlar",
        "Örnek Cümle"
      ],
      "rows": [
        [
          "Since",
          "Eylemin başladığı kesin an (Başlangıç noktası)",
          "since 2018, since morning, since childhood, since Monday",
          "I have worked here since 2020."
        ],
        [
          "For",
          "Eylemin sürdüğü toplam zaman dilimi (Süreç)",
          "for 3 days, for 5 years, for two hours, for ages",
          "She has lived in Madrid for 6 years."
        ]
      ]
    },
    "commonMistakes": [
      {
        "wrong": "I have seen him yesterday.",
        "correct": "I saw him yesterday.",
        "reason": "'Yesterday' geçmişte tamamlanmış net bir zamandır; Present Perfect ile ASLA birleşmez.",
        "correctTr": "Onu dün gördüm."
      },
      {
        "wrong": "I live in this city since 2018.",
        "correct": "I have lived in this city since 2018.",
        "reason": "Eğer geçmişten bugüne gelen bir süreç varsa Present Simple değil, Present Perfect kullanılır.",
        "correctTr": "2018'den beri bu şehirde yaşıyorum."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I have lived in this vibrant city for more than seven years.",
        "tr": "Yedi yılı aşkın süredir bu hareketli şehirde yaşıyorum.",
        "note": "have lived + for"
      },
      {
        "pronoun": "I",
        "sentenceType": "negative",
        "eng": "I haven't received any formal confirmation email yet.",
        "tr": "Henüz resmi bir onay e-postası almadım.",
        "note": "haven't + yet"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He has just finished designing the new user interface.",
        "tr": "Yeni kullanıcı arayüzünü tasarlamayı az önce bitirdi.",
        "note": "has just finished"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "He hasn't spoken to his manager about the promotion yet.",
        "tr": "Terfi hakkında müdürüyle henüz konuşmadı.",
        "note": "hasn't spoken"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She has visited seventeen distinct countries across Europe.",
        "tr": "Avrupa genelinde on yedi farklı ülkeyi ziyaret etti.",
        "note": "has visited (deneyim)"
      },
      {
        "pronoun": "She",
        "sentenceType": "negative",
        "eng": "She has never eaten raw seafood in her life.",
        "tr": "Hayatında hiç çiğ deniz ürünü yemedi.",
        "note": "has never eaten"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "The company has grown by forty percent since last year.",
        "tr": "Şirket geçen yıldan bu yana yüzde kırk büyüdü.",
        "note": "has grown + since"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Have you ever experienced diving in a coral reef?",
        "tr": "Daha önce hiç mercan resifinde dalış deneyimledin mi?",
        "note": "Have you ever...?"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "We have already booked our hotel rooms for the seminar.",
        "tr": "Seminer için otel odalarımızı çoktan ayırttık.",
        "note": "have already booked"
      },
      {
        "pronoun": "We",
        "sentenceType": "negative",
        "eng": "We haven't made our final decision on the budget yet.",
        "tr": "Bütçe hakkındaki nihai kararımızı henüz vermedik.",
        "note": "haven't made"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "They have known each other since their childhood days.",
        "tr": "Çocukluk günlerinden beri birbirlerini tanıyorlar.",
        "note": "have known + since"
      },
      {
        "pronoun": "They",
        "sentenceType": "question",
        "eng": "Have they completed testing the new mobile application?",
        "tr": "Yeni mobil uygulamanın testini tamamladılar mı?",
        "note": "Have they completed...?"
      }
    ],
    "proTip": "Biriyle tanışıp sohbet ederken hayat deneyimlerinizi 'Have you ever...' kalıbıyla sorup buzları anında eritebilirsiniz.",
    "practices": [
      {
            "id": "b1-present-perfect-p1",
            "sentence": "They have lived in this modern apartment ___ five years.",
            "blankAnswer": "for",
            "options": [
                  "since",
                  "for",
                  "ago"
            ],
            "tr": "Beş yıldır bu modern dairede yaşıyorlar.",
            "hint": "Zaman süresi (duration) belirtiliyor.",
            "explanation": "Belirli bir zaman dilimi veya süresi belirtildiğinde 'for' (5 yıldır) kullanılır."
      },
      {
            "id": "b1-present-perfect-p2",
            "sentence": "She has ___ submitted her project, so she has free time now.",
            "blankAnswer": "already",
            "options": [
                  "already",
                  "yet",
                  "still"
            ],
            "tr": "Projesini çoktan teslim etti, bu yüzden artık boş zamanı var.",
            "hint": "Beklenenden önce tamamlanmış olumlu eylem.",
            "explanation": "Bir eylemin önceden veya erkenden yapıldığını olumlu cümlede belirtmek için 'already' kullanılır."
      },
      {
            "id": "b1-present-perfect-p3",
            "sentence": "Have you ___ eaten traditional Japanese sushi?",
            "blankAnswer": "ever",
            "options": [
                  "ever",
                  "never",
                  "yet"
            ],
            "tr": "Hiç geleneksel Japon suşisi yedin mi?",
            "hint": "Hayat boyu deneyim sorusu.",
            "explanation": "Present Perfect soru cümlelerinde 'hiç yaptın mı?' anlamında 'ever' kullanılır."
      },
      {
            "id": "b1-present-perfect-p4",
            "sentence": "I haven't received an official reply from the university ___ .",
            "blankAnswer": "yet",
            "options": [
                  "yet",
                  "already",
                  "since"
            ],
            "tr": "Üniversiteden henüz resmi bir yanıt almadım.",
            "hint": "Olumsuz cümlenin sonunda 'henüz' anlamında.",
            "explanation": "Present Perfect olumsuz cümlelerinin ve sorularının sonunda 'yet' kullanılır."
      },
      {
            "id": "b1-present-perfect-p5",
            "sentence": "We have been close friends ___ high school.",
            "blankAnswer": "since",
            "options": [
                  "since",
                  "for",
                  "during"
            ],
            "tr": "Liseden beri yakın arkadaşız.",
            "hint": "Eylemin başlangıç noktası belirtiliyor.",
            "explanation": "Bir sürecin başlangıç anını belirtirken 'since' (liseden beri) kullanılır."
      },
      {
            "id": "b1-present-perfect-p6",
            "sentence": "He has ___ visited that historic castle three times this year.",
            "blankAnswer": "already",
            "options": [
                  "already",
                  "yet",
                  "ever"
            ],
            "tr": "Bu tarihi kaleyi bu yıl çoktan üç kez ziyaret etti.",
            "hint": "Olumlu cümlede 'çoktan / şimdiden'.",
            "explanation": "Olumlu cümlede pekiştirme için 'already' kullanılır."
      },
      {
            "id": "b1-present-perfect-p7",
            "sentence": "Have you seen any good movies ___ ?",
            "blankAnswer": "recently",
            "options": [
                  "recently",
                  "ago",
                  "since"
            ],
            "tr": "Son zamanlarda hiç güzel film gördün mü?",
            "hint": "'Son zamanlarda' anlamı.",
            "explanation": "Present Perfect ile yakın geçmişi ifade eden 'recently / lately' zarfı kullanılır."
      }
    ]
  },
  {
    "id": "b1-perfect-vs-past",
    "level": "B1",
    "title": "Present Perfect vs. Past Simple (Büyük Karşılaştırma)",
    "badge": "Zaman Ayrımı",
    "summary": "İngilizce öğrenenlerin en büyük ikilemini çözen net karşılaştırma rehberi.",
    "introduction": "Geçmişte olan bir eylemi aktarırken ne zaman 'went / saw' (Past Simple), ne zaman 'have gone / have seen' (Present Perfect) demeliyiz? Tek bir soru tüm farkı belirler: 'Zaman bitti mi ve eylemin tam tarihi önemli mi?'",
    "subjectSchema": [
      {
        "subject": "Past Simple (Geçmişte Kapanan Kapı)",
        "subjectLabel": "Zamanı Belli ve Bitmiş",
        "positive": "I lost my keys yesterday. ➔ Dün kaybettim (belki sonra buldum).",
        "negative": "Did you see John this morning? ➔ (Öğleden sonra konuşuluyorsa).",
        "question": "When did you arrive? ➔ Zamanı sorarken daima Past Simple.",
        "highlight": "Zaman tamamen bitti ve kapandı.",
        "positiveTr": "Anahtarlarımı dün kaybettim (Geçmişte bitti).",
        "negativeTr": "John'u bu sabah gördün mü? (Öğleden sonra konuşuluyor).",
        "questionTr": "Ne zaman geldin?"
      },
      {
        "subject": "Present Perfect (Bugünle Bağlantılı Kapı)",
        "subjectLabel": "Etkisi / Sonucu Şu An Yaşanıyor",
        "positive": "I have lost my keys! ➔ Anahtarımı kaybettim (Şu an kapıda kaldım).",
        "negative": "Have you seen John this morning? ➔ (Sabah vakti hala sürüyorsa).",
        "question": "How long have you lived here? ➔ Ne zamandır buradasın (hala buradayım).",
        "highlight": "Eylemin sonucu şimdiye yansıyor.",
        "positiveTr": "Anahtarlarımı kaybettim! (Şu an kapıda kaldım).",
        "negativeTr": "John'u bu sabah gördün mü? (Sabah hala sürüyor).",
        "questionTr": "Ne zamandır burada yaşıyorsun? (Hala buradayım)."
      }
    ],
    "formulas": [
      {
        "title": "Dedektif Kuralı: 'When' Sorusu",
        "pattern": "'When' ile soru soruyorsanız istisnasız PAST SIMPLE kullanmalısınız!\n• When did you buy this car? (DOĞRU)\n• When have you bought this car? (YANLIŞ)",
        "explanation": "Çünkü 'when' spesifik bir geçmiş anı hedefler.",
        "sample": "When did you graduate? / I have graduated.",
        "sampleTr": "Ne zaman mezun oldun? / Mezun oldum."
      }
    ],
    "keyRules": [
      "Tamamlanmamış zaman dilimleri (this week, today, this month) gün bitmediyse Present Perfect ile kullanılabilir: 'I have drunk three coffees today.'",
      "Hayat tecrübesi konuşurken Present Perfect ile başlanır, detaya inildiğinde Past Simple'a geçilir: 'I have been to Paris. I went there two years ago with my family.'"
    ],
    "commonMistakes": [
      {
        "wrong": "When have you graduated from university?",
        "correct": "When did you graduate from university?",
        "reason": "'When' sorusu belirli bir geçmiş tarihi sorduğu için daima Past Simple ister.",
        "correctTr": "Üniversiteden ne zaman mezun oldun?"
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I have lost my wallet! I don't have any money right now.",
        "tr": "Cüzdanımı kaybettim! Şu anda hiç param yok (Sonuç sürüyor).",
        "note": "Present Perfect"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I lost my wallet yesterday, but fortunately someone found it.",
        "tr": "Dün cüzdanımı kaybettim ama neyse ki biri buldu (Bitti).",
        "note": "Past Simple (yesterday)"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He has lived in London for three years (He still lives there).",
        "tr": "Üç yıldır Londra'da yaşıyor (Hala orada).",
        "note": "Present Perfect"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He lived in London for three years in 2015 (He lives elsewhere now).",
        "tr": "2015'te üç yıl Londra'da yaşadı (Artık başka yerde).",
        "note": "Past Simple (geçmişte bitti)"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She has written three best-selling mystery books so far.",
        "tr": "Şu ana dek üç tane çok satan polisiye kitap yazdı (Yazar hayatta).",
        "note": "so far ➔ Present Perfect"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "Agatha Christie wrote sixty-six detective novels.",
        "tr": "Agatha Christie altmış altı dedektif romanı yazdı (Hayatı bitti).",
        "note": "Past Simple"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Have you seen David today? (Today is still continuing)",
        "tr": "David'i bugün gördün mü? (Gün henüz bitmedi).",
        "note": "Present Perfect"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Did you see David yesterday afternoon?",
        "tr": "David'i dün öğleden sonra gördün mü?",
        "note": "Past Simple"
      }
    ],
    "proTip": "Kayıp bir eşya ararken durum devam ediyorsa 'I have lost it', bulduysanız 'I found it' deyin.",
    "practices": [
      {
            "id": "b1-perfect-vs-past-p1",
            "sentence": "Leonardo da Vinci ___ (paint) the Mona Lisa in the early 16th century.",
            "blankAnswer": "painted",
            "options": [
                  "has painted",
                  "painted",
                  "was painting"
            ],
            "tr": "Leonardo da Vinci 16. yüzyılın başlarında Mona Lisa'yı yaptı.",
            "hint": "Geçmişte yaşamış tarihi bir kişi.",
            "explanation": "Geçmişte yaşamış kişilerin bitmiş eylemleri için kesin olarak Past Simple (painted) kullanılır."
      },
      {
            "id": "b1-perfect-vs-past-p2",
            "sentence": "I ___ (lose) my key! I cannot get inside my office now.",
            "blankAnswer": "have lost",
            "options": [
                  "lost",
                  "have lost",
                  "had lost"
            ],
            "tr": "Anahtarımı kaybettim! Şu anda ofisime giremiyorum.",
            "hint": "Eylemin sonucu şu an devam ediyor.",
            "explanation": "Geçmişte yapılmış fakat sonucu şu anı doğrudan etkileyen durumlar Present Perfect (have lost) ile anlatılır."
      },
      {
            "id": "b1-perfect-vs-past-p3",
            "sentence": "Our company ___ two new branches in Europe last year.",
            "blankAnswer": "opened",
            "options": [
                  "opened",
                  "has opened",
                  "had opened"
            ],
            "tr": "Şirketimiz geçen yıl Avrupa'da iki yeni şube açtı.",
            "hint": "'last year' kesin zaman belirtecidir.",
            "explanation": "'Last year' kesin bir geçmiş zaman zarfıdır; bu yüzden mutlaka Past Simple (opened) kullanılır."
      },
      {
            "id": "b1-perfect-vs-past-p4",
            "sentence": "When ___ you graduate from the university?",
            "blankAnswer": "did",
            "options": [
                  "did",
                  "have",
                  "were"
            ],
            "tr": "Üniversiteden ne zaman mezun oldun?",
            "hint": "'When' sorusu kesin zaman sorar.",
            "explanation": "'When' ile sorulan geçmiş sorularında Present Perfect kullanılmaz, Past Simple (did) kullanılır."
      },
      {
            "id": "b1-perfect-vs-past-p5",
            "sentence": "She lived in London for three years before she ___ to Berlin.",
            "blankAnswer": "moved",
            "options": [
                  "moved",
                  "has moved",
                  "was moving"
            ],
            "tr": "Berlin'e taşınmadan önce üç yıl boyunca Londra'da yaşadı.",
            "hint": "Geçmişte tamamlanmış iki eylem.",
            "explanation": "Tamamlanmış sıralı geçmiş eylemler için Past Simple (moved) kullanılır."
      },
      {
            "id": "b1-perfect-vs-past-p6",
            "sentence": "I have known Alex since 2018, but we ___ (meet) at a café yesterday.",
            "blankAnswer": "met",
            "options": [
                  "met",
                  "have met",
                  "meet"
            ],
            "tr": "Alex'i 2018'den beri tanırım ama dün bir kafede buluştuk.",
            "hint": "'yesterday' kesin geçmiş zaman zarfıdır.",
            "explanation": "Dün gerçekleşen buluşma eylemi için Past Simple (met) kullanılır."
      },
      {
            "id": "b1-perfect-vs-past-p7",
            "sentence": "Biologists ___ discovered a rare plant in the mountain region.",
            "blankAnswer": "have",
            "options": [
                  "have",
                  "did",
                  "were"
            ],
            "tr": "Biyologlar dağlık bölgede nadir bir bitki keşfettiler.",
            "hint": "Zamanı belirtilmeyen yeni bir keşif / haber.",
            "explanation": "Zamanı kesin verilmeyen güncel keşif ve haberlerde Present Perfect kullanılır."
      }
    ]
  },
  {
    "id": "b1-passive-voice",
    "level": "B1",
    "title": "Passive Voice (Edilgen Çatı)",
    "badge": "Eylem Odaklı",
    "summary": "İşi yapanın bilinmediği, önemsiz olduğu veya eylemin sonucunun öne çıkarıldığı yapılar.",
    "introduction": "Haber bültenlerinde, bilimsel makalelerde ve resmi konuşmalarda sıklıkla karşımıza çıkar. 'Ahmet pencereyi kırdı' yerine 'Pencere kırıldı' diyerek yapılan işe odaklanılır.",
    "subjectSchema": [
      {
        "subject": "Geniş Zaman Pasif (Present Simple)",
        "subjectLabel": "am / is / are + V3",
        "positive": "English is spoken all over the world.",
        "negative": "These rooms aren't cleaned every day.",
        "question": "Is the mail delivered on Saturdays?",
        "highlight": "Genel gerçekler ve rutin pasif eylemler.",
        "positiveTr": "İngilizce tüm dünyada konuşulur.",
        "negativeTr": "Bu odalar her gün temizlenmez.",
        "questionTr": "Posta cumartesi günleri teslim edilir mi?"
      },
      {
        "subject": "Geçmiş Zaman Pasif (Past Simple)",
        "subjectLabel": "was / were + V3",
        "positive": "The telephone was invented by Alexander Graham Bell.",
        "negative": "The stolen car wasn't found.",
        "question": "Were all the documents signed yesterday?",
        "highlight": "Geçmişte tamamlanmış pasif olaylar.",
        "positiveTr": "Telefon Alexander Graham Bell tarafından icat edildi.",
        "negativeTr": "Çalınan araba bulunamadı.",
        "questionTr": "Bütün evraklar dün imzalandı mı?"
      },
      {
        "subject": "Gelecek & Modals Pasif",
        "subjectLabel": "will be + V3 / modal + be + V3",
        "positive": "The new hospital will be opened next month.",
        "negative": "Seat belts must be worn at all times.",
        "question": "Can this problem be solved quickly?",
        "highlight": "Modal fiillerde 'modal + be + V3' gelir.",
        "positiveTr": "Yeni hastane gelecek ay açılacak.",
        "negativeTr": "Emniyet kemerleri her zaman takılmalıdır.",
        "questionTr": "Bu sorun hızlıca çözülebilir mi?"
      }
    ],
    "formulas": [
      {
        "title": "Evrensel Pasif Formülü",
        "pattern": "Nesne (Yeni Özne) + TO BE (İlgili Zamana Göre) + V3 (Past Participle)",
        "explanation": "Eğer işi yapanı özellikle eklemek istiyorsak cümlenin sonuna 'by + kişi' ekleriz: '...written by Shakespeare.'",
        "sample": "The letter was sent yesterday by courier.",
        "sampleTr": "Mektup dün kurye tarafından gönderildi."
      }
    ],
    "keyRules": [
      "Aktif cümleden pasife geçerken aktif cümlenin nesnesi (object), pasif cümlenin öznesi (subject) konumuna geçer.",
      "Geçişsiz fiiller (nesne almayan fiiller: sleep, arrive, die, happen) ASLA pasif yapılamaz: 'An accident was happened' YANLIŞ ➔ 'An accident happened' DOĞRU."
    ],
    "commonMistakes": [
      {
        "wrong": "The bridge built in 1973.",
        "correct": "The bridge was built in 1973.",
        "reason": "Köprü kendi kendini inşa edemez! 'To be (was)' yardımcı fiili olmadan pasif kurulamaz.",
        "correctTr": "Köprü 1973 yılında inşa edildi."
      }
    ],
    "examples": [
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "English is spoken as an official language in over fifty nations.",
        "tr": "İngilizce elliden fazla ülkede resmi dil olarak konuşulur.",
        "note": "is spoken (geniş pasif)"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "This magnificent historic castle was built in the sixteenth century.",
        "tr": "Bu görkemli tarihi kale on altıncı yüzyılda inşa edilmiştir.",
        "note": "was built (geçmiş pasif)"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "The new regional medical center will be inaugurated next month.",
        "tr": "Yeni bölgesel tıp merkezi gelecek ay törenle açılacak.",
        "note": "will be inaugurated"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "Millions of credit card transactions are processed securely every day.",
        "tr": "Her gün milyonlarca kredi kartı işlemi güvenli biçimde işlenir.",
        "note": "are processed"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "All international flights were cancelled due to dense fog.",
        "tr": "Bütün uluslararası uçuşlar yoğun sis yüzünden iptal edildi.",
        "note": "were cancelled"
      },
      {
        "pronoun": "They",
        "sentenceType": "negative",
        "eng": "The confidential documents weren't leaked to the press.",
        "tr": "Gizli belgeler basına sızdırılmadı.",
        "note": "weren't leaked"
      },
      {
        "pronoun": "Wh- / Soru",
        "sentenceType": "question",
        "eng": "Was the crucial contract signed by both executives yesterday?",
        "tr": "Kritik sözleşme dün her iki yönetici tarafından imzalandı mı?",
        "note": "Was + contract + signed...?"
      },
      {
        "pronoun": "Diğer",
        "sentenceType": "positive",
        "eng": "Seat belts must be worn at all times during the bus journey.",
        "tr": "Otobüs yolculuğu boyunca emniyet kemerleri daima takılmalıdır.",
        "note": "must be worn"
      }
    ],
    "proTip": "Akademik veya iş e-postalarında resmi bir ton yakalamak istediğinizde pasif cümleler cümlenize ağırlık katar.",
    "practices": [
      {
            "id": "b1-passive-voice-p1",
            "sentence": "The ancient castle ___ (visit) by thousands of tourists every summer.",
            "blankAnswer": "is visited",
            "options": [
                  "visited",
                  "is visited",
                  "was visited"
            ],
            "tr": "Antik kale her yaz binlerce turist tarafından ziyaret edilir.",
            "hint": "'every summer' geniş zaman edilgendir.",
            "explanation": "Geniş zaman tekil edilgen çatı yapısı: is + V3 (is visited)."
      },
      {
            "id": "b1-passive-voice-p2",
            "sentence": "This historic bridge was ___ (construct) over two hundred years ago.",
            "blankAnswer": "constructed",
            "options": [
                  "construct",
                  "constructed",
                  "constructing"
            ],
            "tr": "Bu tarihi köprü iki yüz yılı aşkın süre önce inşa edildi.",
            "hint": "was + V3 kuralı.",
            "explanation": "Geçmiş zaman edilgen yapıda 'was' ardından fiilin 3. hali (V3: constructed) gelir."
      },
      {
            "id": "b1-passive-voice-p3",
            "sentence": "The important documents will be ___ (send) to your office tomorrow.",
            "blankAnswer": "sent",
            "options": [
                  "send",
                  "sent",
                  "sending"
            ],
            "tr": "Önemli belgeler yarın ofisinize gönderilecek.",
            "hint": "Gelecek zaman edilgen yapısı.",
            "explanation": "Gelecek zaman edilgen kalıbı 'will be + V3' (will be sent) şeklindedir."
      },
      {
            "id": "b1-passive-voice-p4",
            "sentence": "Millions of electronic devices are ___ in international factories every month.",
            "blankAnswer": "produced",
            "options": [
                  "produced",
                  "producing",
                  "produce"
            ],
            "tr": "Her ay uluslararası fabrikalarda milyonlarca elektronik cihaz üretilir.",
            "hint": "Geniş zaman edilgen fiil hali.",
            "explanation": "Edilgen yapıda 'are' sonrasında fiilin 3. hali (produced) kullanılır."
      },
      {
            "id": "b1-passive-voice-p5",
            "sentence": "The modern health clinic was ___ by the city mayor yesterday.",
            "blankAnswer": "opened",
            "options": [
                  "opened",
                  "open",
                  "opening"
            ],
            "tr": "Modern sağlık kliniği dün şehir belediye başkanı tarafından açıldı.",
            "hint": "Geçmiş zaman edilgen.",
            "explanation": "Geçmiş zaman tekil nesneler için 'was + V3' (was opened) kullanılır."
      },
      {
            "id": "b1-passive-voice-p6",
            "sentence": "Our broken vehicle is currently being ___ by an experienced mechanic.",
            "blankAnswer": "repaired",
            "options": [
                  "repaired",
                  "repair",
                  "repairing"
            ],
            "tr": "Bozuk aracımız şu anda deneyimli bir tamirci tarafından tamir ediliyor.",
            "hint": "Şimdiki zaman edilgen: is being + V3.",
            "explanation": "Süregelen edilgen yapıda 'is being' sonrasında fiilin 3. hali (repaired) gelir."
      },
      {
            "id": "b1-passive-voice-p7",
            "sentence": "The lost passport has not been ___ anywhere yet.",
            "blankAnswer": "found",
            "options": [
                  "found",
                  "finded",
                  "finding"
            ],
            "tr": "Kayıp pasaport henüz hiçbir yerde bulunamadı.",
            "hint": "Present Perfect edilgen: has been + V3.",
            "explanation": "Present Perfect edilgen kalıbı 'has been + V3' (found) şeklindedir."
      }
    ]
  },
  {
    "id": "b1-conditionals",
    "level": "B1",
    "title": "Conditionals: Type 1 & Type 2 (Şart Cümleleri)",
    "badge": "Olasılıklar & Hayaller",
    "summary": "Gerçekleşmesi muhtemel durumlar (Type 1) ve şimdiki hayali/varsayımsal senaryolar (Type 2).",
    "introduction": "Eğer anlamına gelen 'If' bağlacı ile kurulan koşul cümleleridir. Type 1 gelecekteki gerçekçi olasılıkları anlatırken, Type 2 şu anda elimizde olmayan ama olsaydı ne yapacağımızı anlatan hayalleri betimler.",
    "subjectSchema": [
      {
        "subject": "Type 1 (Gerçekçi Gelecek Koşulu)",
        "subjectLabel": "Real Possibility in Future",
        "positive": "If + Present Simple, ... will + V1 ➔ If it rains, I will stay at home.",
        "negative": "If you don't study, you won't pass the exam.",
        "question": "What will you do if you miss the train?",
        "highlight": "Şart gerçekleşirse sonuç kesinlikle mümkün.",
        "positiveTr": "Yağmur yağarsa evde kalacağım.",
        "negativeTr": "Çalışmazsan sınavı geçemezsin.",
        "questionTr": "Treni kaçırırsan ne yapacaksın?"
      },
      {
        "subject": "Type 2 (Şimdiki Hayali / Varsayımsal Koşul)",
        "subjectLabel": "Unreal / Hypothetical Present",
        "positive": "If + Past Simple, ... would + V1 ➔ If I had money, I would buy a boat.",
        "negative": "If he weren't so busy, he would join us.",
        "question": "If you won the lottery, where would you travel?",
        "highlight": "Geçmiş zaman kullanılır ama anlam ŞİMDİKİ zamandır!",
        "positiveTr": "Param olsaydı bir tekne satın alırdım.",
        "negativeTr": "O bu kadar meşgul olmasaydı bize katılırdı.",
        "questionTr": "Piyangoyu kazansaydın nereye seyahat ederdin?"
      }
    ],
    "formulas": [
      {
        "title": "Altın Kural: If Tarafına Asla Will Gelmez!",
        "pattern": "• If I will see him, I will tell him. ➔ YANLIŞ\n• If I see him, I will tell him. ➔ DOĞRU",
        "explanation": "'If' cümlesinin bulunduğu şart kısmına asla 'will' ya da 'would' konmaz.",
        "sample": "If it snows, we will build a snowman.",
        "sampleTr": "Kar yağarsa kardan adam yapacağız."
      }
    ],
    "keyRules": [
      "Type 2'de to be fiili için tüm öznelerle (I, he, she, it dahil) 'were' kullanılması resmi ve şık olandır: 'If I were you, I would take that course' (Senin yerinde olsaydım...).",
      "Virgül Kuralı: Eğer 'If' cümlesi başta ise yan cümle bitince virgül konur. Eğer 'If' ortadaysa virgül konmaz: 'I will call you if I get the news.'"
    ],
    "commonMistakes": [
      {
        "wrong": "If I will have time tomorrow, I will call you.",
        "correct": "If I have time tomorrow, I will call you.",
        "reason": "Şart yan cümleciğinde 'will' kullanılmaz, geniş zaman çekimi gerekir.",
        "correctTr": "Yarın vaktim olursa seni arayacağım."
      },
      {
        "wrong": "If I was you, I wouldn't buy that car.",
        "correct": "If I were you, I wouldn't buy that car.",
        "reason": "Tavsiye ve hayali şart kalıbında 'were' tercih edilir.",
        "correctTr": "Senin yerinde olsaydım o arabayı almazdım."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "If I pass the IELTS exam, I will apply for a master's degree in Canada.",
        "tr": "IELTS sınavını geçersem Kanada'da yüksek lisansa başvuracağım (Type 1).",
        "note": "Type 1 (Gerçekçi)"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "If I had a million dollars, I would travel around the entire world.",
        "tr": "Bir milyon dolarım olsaydı bütün dünyayı gezerdim (Type 2: param yok).",
        "note": "Type 2 (Hayali)"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "If I were you, I would accept that senior management job offer immediately.",
        "tr": "Senin yerinde olsaydım o üst yönetim iş teklifini derhal kabul ederdim.",
        "note": "If I were you (Tavsiye)"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "If he trains with dedication every day, he will win the championship.",
        "tr": "Her gün adanmışlıkla antrenman yaparsa şampiyonluğu kazanacaktır.",
        "note": "Type 1"
      },
      {
        "pronoun": "He",
        "sentenceType": "negative",
        "eng": "If he didn't work so many overtime hours, he wouldn't be so exhausted.",
        "tr": "Bu kadar çok fazla mesai yapmasaydı bu kadar bitkin olmazdı.",
        "note": "Type 2"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "If she speaks slowly and clearly, everyone will understand her points.",
        "tr": "Yavaş ve net konuşursa herkes onun fikirlerini anlayacaktır.",
        "note": "Type 1"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "If she knew his telephone number, she would contact him.",
        "tr": "Telefon numarasını bilseydi onunla iletişime geçerdi (bilmiyor).",
        "note": "Type 2"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "What will you do if the flight is delayed for five hours?",
        "tr": "Uçuş beş saat ertelenirse ne yapacaksın?",
        "note": "Type 1 Soru"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Where would you live if you could choose any country on earth?",
        "tr": "Dünyadaki herhangi bir ülkeyi seçebilseydin nerede yaşardın?",
        "note": "Type 2 Soru"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "If we hurry up, we will catch the last ferry across the bay.",
        "tr": "Acele edersek körfezdeki son vapura yetişiriz.",
        "note": "Type 1"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "If they lowered their prices slightly, they would attract more customers.",
        "tr": "Fiyatlarını biraz düşürselerdi daha fazla müşteri çekerlerdi.",
        "note": "Type 2"
      }
    ],
    "proTip": "Bir arkadaşınıza akıl verirken veya tavsiye sunarken 'If I were you, I would...' kalıbından daha etkilisi yoktur.",
    "practices": [
      {
            "id": "b1-conditionals-p1",
            "sentence": "If we catch the 8 o'clock train, we ___ arrive in Paris on time.",
            "blankAnswer": "will",
            "options": [
                  "will",
                  "would",
                  "are"
            ],
            "tr": "Saat 8 trenine yetişirsek Paris'e zamanında varacağız.",
            "hint": "Type 1 gerçekçi gelecek olasılığı.",
            "explanation": "Type 1 koşul cümlesi: If + Present Simple, will + V1."
      },
      {
            "id": "b1-conditionals-p2",
            "sentence": "If I ___ (have) enough free time, I would learn how to play the piano.",
            "blankAnswer": "had",
            "options": [
                  "have",
                  "had",
                  "will have"
            ],
            "tr": "Yeterince boş vaktim olsaydı piyano çalmayı öğrenirdim.",
            "hint": "Type 2 şimdiki hayali durum.",
            "explanation": "Type 2 koşul cümlelerinde if cümleciği Past Simple (had) alır, ana cümlecik 'would + V1' olur."
      },
      {
            "id": "b1-conditionals-p3",
            "sentence": "If she practiced speaking every day, she ___ improve her English much faster.",
            "blankAnswer": "would",
            "options": [
                  "will",
                  "would",
                  "can"
            ],
            "tr": "Her gün konuşma pratiği yapsaydı İngilizcesini çok daha hızlı geliştirirdi.",
            "hint": "Type 2 ana cümleciği.",
            "explanation": "Type 2 şart cümlelerinde temel cümlecikte 'would + fiil' kullanılır."
      },
      {
            "id": "b1-conditionals-p4",
            "sentence": "Unless you study consistently, you ___ pass the difficult exam.",
            "blankAnswer": "won't",
            "options": [
                  "won't",
                  "wouldn't",
                  "can't to"
            ],
            "tr": "Düzenli çalışmadıkça bu zor sınavı geçemezsin.",
            "hint": "'Unless' olumsuz koşul bildirir (= If you don't).",
            "explanation": "'Unless' Type 1 cümlesinde ana cümlecik genellikle olumsuz gelecek 'won't' alır."
      },
      {
            "id": "b1-conditionals-p5",
            "sentence": "If I ___ you, I would consult a professional doctor immediately.",
            "blankAnswer": "were",
            "options": [
                  "were",
                  "was",
                  "am"
            ],
            "tr": "Senin yerinde olsaydım derhal profesyonel bir doktora danışırdım.",
            "hint": "Tavsiye kalıbı 'If I were you'.",
            "explanation": "Type 2 hayali durumlarda 'I' dahil tüm öznelerle kural olarak 'were' kullanılır."
      },
      {
            "id": "b1-conditionals-p6",
            "sentence": "What would you do if you ___ (win) a million dollars in the lottery?",
            "blankAnswer": "won",
            "options": [
                  "won",
                  "win",
                  "would win"
            ],
            "tr": "Piyangoda bir milyon dolar kazansaydın ne yapardın?",
            "hint": "Type 2 if cümleciği fiil hali.",
            "explanation": "Type 2 koşul yan cümleciğinde fiil Past Simple (V2: won) olur."
      },
      {
            "id": "b1-conditionals-p7",
            "sentence": "If the weather is sunny this weekend, we ___ go camping by the lake.",
            "blankAnswer": "will",
            "options": [
                  "will",
                  "would",
                  "did"
            ],
            "tr": "Bu hafta sonu hava güneşli olursa göl kenarında kampa gideceğiz.",
            "hint": "Geleceğe yönelik gerçekçi şart (Type 1).",
            "explanation": "Type 1 koşul cümlesinin ana cümleciğinde 'will' kullanılır."
      }
    ]
  },
  {
    "id": "b2-third-mixed-conditionals",
    "level": "B2",
    "title": "Third & Mixed Conditionals (Geçmiş Pişmanlıklar & Karma Koşullar)",
    "badge": "Pişmanlık & Zamansal Köprü",
    "summary": "Geçmişte yaşanmış bitmiş olayların değiştirilemez varsayımları ve günümüze yansımaları.",
    "introduction": "Geçmiş için duyulan pişmanlıkları ('Keşke öyle yapsaydım'), kaçırılan fırsatları ve alternatif geçmiş senaryolarını anlatır. Mixed Conditionals ise geçmişteki bir olayın şimdiki zamana olan yansımasını bağlar.",
    "subjectSchema": [
      {
        "subject": "Third Conditional (Geçmiş Hayali)",
        "subjectLabel": "Geçmiş Sebep ➔ Geçmiş Sonuç",
        "positive": "If + had + V3, ... would have + V3 ➔ If I had studied, I would have passed.",
        "negative": "If we hadn't missed the bus, we wouldn't have been late.",
        "question": "Would you have accepted the job if they had offered more?",
        "highlight": "Olay geçmişte bitti, artık değiştirilmesi imkansız.",
        "positiveTr": "Çalışmış olsaydım geçmiş olurdum.",
        "negativeTr": "Otobüsü kaçırmamış olsaydık geç kalmazdık.",
        "questionTr": "Daha fazla teklif etselerdi işi kabul eder miydin?"
      },
      {
        "subject": "Mixed Conditional (Karma Koşul)",
        "subjectLabel": "Geçmiş Sebep ➔ Şimdiki Sonuç",
        "positive": "If + had + V3, ... would + V1 (NOW) ➔ If I had taken the map, we wouldn't be lost now.",
        "negative": "If you hadn't spent all your salary, you would have money today.",
        "question": "If you hadn't moved to England, would you be happy now?",
        "highlight": "Geçmişteki karar şimdiki durumu etkiliyor.",
        "positiveTr": "Haritayı almış olsaydım şimdi kaybolmuş olmazdık.",
        "negativeTr": "Tüm maaşını harcamamış olsaydın bugün paran olurdu.",
        "questionTr": "İngiltere'ye taşınmamış olsaydın şimdi mutlu olur muydun?"
      }
    ],
    "formulas": [
      {
        "title": "Devrik Yapı (Inversion - İleri Düzey)",
        "pattern": "'If' kaldırılarak cümle doğrudan 'Had' ile başlatılabilir:\n• Normal: If I had known the truth, I would have warned you.\n• Devrik (Inverted): Had I known the truth, I would have warned you.",
        "explanation": "Akademik sınavlarda (TOEFL, IELTS, YDS) yüksek puan getiren prestijli bir yapıdır.",
        "sample": "Had we left earlier, we wouldn't have missed the flight.",
        "sampleTr": "Daha erken çıkmış olsaydık uçağı kaçırmamış olurduk."
      }
    ],
    "keyRules": [
      "'Would have' yerine ihtimal derecesine göre 'could have + V3' (yapabilirdim ama yapmadım) veya 'might have + V3' (yapmış olabilirdim) kullanılabilir.",
      "'If' yan cümlesinde asla 'would have' KULLANILAMAZ! Şart tarafı Past Perfect (had + V3) olmalıdır."
    ],
    "commonMistakes": [
      {
        "wrong": "If I would have known your phone number, I would have called you.",
        "correct": "If I had known your phone number, I would have called you.",
        "reason": "'If' yan cümlesine 'would have' getirilmez; kural gereği 'had + V3' kullanılır.",
        "correctTr": "Telefon numaranı bilmiş olsaydım seni arardım."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "If I had studied harder for the entrance exam, I would have been accepted.",
        "tr": "Giriş sınavına daha sıkı çalışmış olsaydım kabul edilmiş olurdum (Third).",
        "note": "had studied ➔ would have been"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "If I had accepted that foreign scholarship, I would be living in Tokyo now.",
        "tr": "O yurtdışı bursunu kabul etmiş olsaydım şu an Tokyo'da yaşıyor olurdum (Mixed).",
        "note": "had accepted ➔ would be (now)"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "If he had driven more cautiously, he wouldn't have crashed his sports car.",
        "tr": "Daha dikkatli sürmüş olsaydı spor arabasıyla kaza yapmamış olurdu.",
        "note": "Third Conditional"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She could have become a renowned surgeon if she had finished medical university.",
        "tr": "Tıp fakültesini bitirmiş olsaydı tanınmış bir cerrah olabilirdi.",
        "note": "could have become"
      },
      {
        "pronoun": "You",
        "sentenceType": "question",
        "eng": "Would you have warned the director if you had discovered the accounting error?",
        "tr": "Muhasebe hatasını fark etmiş olsaydın direktörü uyarır mıydın?",
        "note": "Third Soru"
      },
      {
        "pronoun": "You",
        "sentenceType": "positive",
        "eng": "If you had saved your earnings wisely, you wouldn't be in financial debt today.",
        "tr": "Kazancını akıllıca biriktirmiş olsaydın bugün borç batağında olmazdın (Mixed).",
        "note": "Mixed Conditional"
      },
      {
        "pronoun": "We",
        "sentenceType": "positive",
        "eng": "If we had left the hotel twenty minutes earlier, we wouldn't have missed the plane.",
        "tr": "Otelden yirmi dakika daha erken çıkmış olsaydık uçağı kaçırmamış olurduk.",
        "note": "Third Conditional"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "Had they invested in technological modernization, their business wouldn't have failed.",
        "tr": "Teknolojik modernizasyona yatırım yapmış olsalardı işletmeleri batmazdı (Devrik).",
        "note": "Inversion (Had they...)"
      }
    ],
    "proTip": "Geçmişte aldığınız kararları değerlendirirken 'Had I known...' diyerek anadili İngilizce olanların seviyesine çıkabilirsiniz.",
    "practices": [
      {
            "id": "b2-third-mixed-conditionals-p1",
            "sentence": "If the pilot had noticed the storm warning, the plane ___ made an emergency landing.",
            "blankAnswer": "wouldn't have",
            "options": [
                  "wouldn't have",
                  "won't have",
                  "hadn't"
            ],
            "tr": "Pilot fırtına uyarısını fark etmiş olsaydı uçak acil iniş yapmamış olurdu.",
            "hint": "Geçmişte gerçekleşmemiş bir pişmanlık (Type 3).",
            "explanation": "Third Conditional kuralı: If + had V3, would/wouldn't have + V3."
      },
      {
            "id": "b2-third-mixed-conditionals-p2",
            "sentence": "If they ___ (reserve) tickets in advance, they would have attended the gala dinner.",
            "blankAnswer": "had reserved",
            "options": [
                  "reserved",
                  "had reserved",
                  "have reserved"
            ],
            "tr": "Biletleri önceden rezerve etmiş olsalardı gala yemeğine katılmış olurlardı.",
            "hint": "Type 3 'If' cümleciği hali.",
            "explanation": "Third Conditional 'If' cümleciğinde 'had + V3' (had reserved) kullanılır."
      },
      {
            "id": "b2-third-mixed-conditionals-p3",
            "sentence": "If she had accepted the prestigious job offer last year, she ___ be a manager today.",
            "blankAnswer": "would",
            "options": [
                  "would",
                  "would have",
                  "will"
            ],
            "tr": "Geçen yıl o prestijli iş teklifini kabul etmiş olsaydı bugün bir müdür olurdu.",
            "hint": "Geçmiş şart + şimdiki sonuç (Mixed Conditional).",
            "explanation": "Mixed conditional: Geçmişteki karar (had accepted) şu anki durumu etkiliyorsa ana cümlecik 'would + V1' (today) olur."
      },
      {
            "id": "b2-third-mixed-conditionals-p4",
            "sentence": "Had I known about the conference delay, I ___ arrived at the airport so early.",
            "blankAnswer": "wouldn't have",
            "options": [
                  "wouldn't have",
                  "won't have",
                  "haven't"
            ],
            "tr": "Konferans ertelemesini bilmiş olsaydım havalimanına bu kadar erken gelmemiş olurdum.",
            "hint": "Devrik Third Conditional (Had I known...).",
            "explanation": "Devrik Type 3 yapısında ana cümlecik 'would have / wouldn't have + V3' olur."
      },
      {
            "id": "b2-third-mixed-conditionals-p5",
            "sentence": "If he had taken his prescribed medication yesterday, he ___ feeling much better right now.",
            "blankAnswer": "would be",
            "options": [
                  "would be",
                  "would have been",
                  "will be"
            ],
            "tr": "Dün reçeteli ilacını almış olsaydı şu anda kendini çok daha iyi hissediyor olurdu.",
            "hint": "'right now' şu anki sonucu gösterir (Mixed Conditional).",
            "explanation": "Geçmiş şartın şu anki sonucunda 'would + V1 / V-ing' (would be feeling) kullanılır."
      },
      {
            "id": "b2-third-mixed-conditionals-p6",
            "sentence": "If we hadn't invested in that startup company, we ___ lost all our savings.",
            "blankAnswer": "wouldn't have",
            "options": [
                  "wouldn't have",
                  "didn't have",
                  "won't have"
            ],
            "tr": "O girişim şirketine yatırım yapmamış olsaydık tüm birikimimizi kaybetmemiş olurduk.",
            "hint": "Geçmişte yaşanmış bitmiş finansal kayıp.",
            "explanation": "Tamamen geçmişte kalmış iki durum için Type 3 (wouldn't have + V3) kullanılır."
      },
      {
            "id": "b2-third-mixed-conditionals-p7",
            "sentence": "If you had listened to my financial advice, you ___ in debt now.",
            "blankAnswer": "wouldn't be",
            "options": [
                  "wouldn't be",
                  "wouldn't have been",
                  "aren't"
            ],
            "tr": "Mali tavsiyemi dinlemiş olsaydın şimdi borç içinde olmazdın.",
            "hint": "'now' belirteci şimdiki durumu gösterir.",
            "explanation": "Geçmiş pişmanlık (had listened) ➔ şimdiki durum (wouldn't be in debt now)."
      }
    ]
  },
  {
    "id": "b2-reported-speech",
    "level": "B2",
    "title": "Reported Speech (Dolaylı Anlatım & Aktarma Cümleleri)",
    "badge": "Diplomasi & Aktarım",
    "summary": "Birinin söylediği sözü başka birine zaman kaydırması (Backshift) yaparak aktarma.",
    "introduction": "Birisinin söylediği cümleyi tırnak içine almadan ('He said that...') aktarmaktır. Olay geçmişte söylendiği için zamanlar genellikle bir derece geçmişe kaydırılır (Backshift kuralı).",
    "subjectSchema": [
      {
        "subject": "Say vs. Tell Ayrımı",
        "subjectLabel": "En Kritik Kural",
        "positive": "He SAID THAT he was tired. (Kime söylendiği belirtilmez)",
        "negative": "He TOLD ME THAT he was tired. (Kime söylendiği ZORUNLUDUR: told me/him/us)",
        "question": "He ASKED ME if I was ready. (Soru aktarırken asked kullanılır)",
        "highlight": "'He said me' ASLA denemez! Daima 'He told me' veya 'He said that'.",
        "positiveTr": "Yorgun olduğunu söyledi.",
        "negativeTr": "Bana yorgun olduğunu söyledi.",
        "questionTr": "Bana hazır olup olmadığımı sordu."
      }
    ],
    "formulas": [
      {
        "title": "Zaman Kaydırma (Backshift) Kuralı",
        "pattern": "Doğrudan Söz (Direct) ➔ Aktarılan Söz (Reported)\n• Present Simple (I work) ➔ Past Simple (He worked)\n• Present Continuous (I am working) ➔ Past Continuous (He was working)\n• Past Simple (I worked) ➔ Past Perfect (He had worked)\n• Present Perfect (I have worked) ➔ Past Perfect (He had worked)\n• Will (I will work) ➔ Would (He would work)\n• Can (I can work) ➔ Could (He could work)",
        "explanation": "Söylenen an geçmişte kaldığı için her zaman bir derece eskiye gider.",
        "sample": "\"I am tired\" ➔ She said she was tired.",
        "sampleTr": "'Yorgunum' ➔ Yorgun olduğunu söyledi."
      }
    ],
    "comparisonTable": {
      "title": "Zaman ve Yer Zarfları Dönüşüm Tablosu",
      "headers": [
        "Doğrudan Cümle (Direct)",
        "Aktarılan Cümle (Reported)",
        "Örnek Değişim"
      ],
      "rows": [
        [
          "today",
          "that day",
          "today ➔ that day"
        ],
        [
          "yesterday",
          "the day before / the previous day",
          "yesterday ➔ the day before"
        ],
        [
          "tomorrow",
          "the next day / the following day",
          "tomorrow ➔ the following day"
        ],
        [
          "now",
          "then / at that moment",
          "now ➔ then"
        ],
        [
          "this / these",
          "that / those",
          "this book ➔ that book"
        ],
        [
          "here",
          "there",
          "come here ➔ go there"
        ]
      ]
    },
    "keyRules": [
      "Soru Cümlelerini Aktarırken:\n• Yes/No sorularında 'if' veya 'whether' kullanılır: 'Do you like tea?' ➔ He asked me if I liked tea.\n• Soru kelimesinden sonra cümle DÜZ CÜMLE dizilimine döner (Özne + Fiil): 'Where do you live?' ➔ She asked me where I lived (Where did I live DENMEZ!)."
    ],
    "commonMistakes": [
      {
        "wrong": "He said me that he was sick.",
        "correct": "He told me that he was sick. / He said that he was sick.",
        "reason": "'Say' fiilinden sonra doğrudan şahıs zamiri (me) gelmez; nesne varsa 'tell' kullanılır.",
        "correctTr": "Bana hasta olduğunu söyledi."
      },
      {
        "wrong": "She asked me where did I live.",
        "correct": "She asked me where I lived.",
        "reason": "Aktarılan sorularda soru dizilimi kalkar, düz cümle dizilimine (Özne + Fiil) geçilir.",
        "correctTr": "Bana nerede yaşadığımı sordu."
      }
    ],
    "examples": [
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He said that he was feeling completely exhausted after the marathon.",
        "tr": "Maratondan sonra kendini tamamen bitkin hissettiğini söyledi.",
        "note": "is feeling ➔ was feeling"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He told me that he would move to London the following month.",
        "tr": "Bana bir sonraki ay Londra'ya taşınacağını söyledi.",
        "note": "told me + would"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She said that she had already submitted her research paper.",
        "tr": "Araştırma makalesini çoktan teslim ettiğini söyledi.",
        "note": "has submitted ➔ had submitted"
      },
      {
        "pronoun": "She",
        "sentenceType": "question",
        "eng": "She asked me if I had ever travelled to South America before.",
        "tr": "Bana daha önce hiç Güney Amerika'ya seyahat edip etmediğimi sordu.",
        "note": "asked me if..."
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "The company directors announced that all employee wages would be increased.",
        "tr": "Şirket direktörleri tüm çalışan maaşlarının artırılacağını duyurdu.",
        "note": "will ➔ would"
      },
      {
        "pronoun": "They",
        "sentenceType": "question",
        "eng": "They asked us what time the next morning flight departed.",
        "tr": "Bize bir sonraki sabah uçuşunun saat kaçta kalktığını sordular.",
        "note": "düz cümle dizilimi"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I reminded him that the registration deadline was approaching rapidly.",
        "tr": "Kayıt son tarihinin hızla yaklaştığını ona hatırlattım.",
        "note": "reminded him that..."
      },
      {
        "pronoun": "Wh- / Soru",
        "sentenceType": "question",
        "eng": "The officer asked the passenger where he had put his boarding pass.",
        "tr": "Görevli yolcuya biniş kartını nereye koyduğunu sordu.",
        "note": "where he had put"
      }
    ],
    "proTip": "Aktardığınız bilgi evrensel ve değişmeyen bir gerçekse zaman kaydırması yapılmayabilir: 'The teacher said that water boils at 100 degrees.'",
    "practices": [
      {
            "id": "b2-reported-speech-p1",
            "sentence": "The director said, 'I am reviewing the annual budget.' ➔ The director said that he ___ the annual budget.",
            "blankAnswer": "was reviewing",
            "options": [
                  "is reviewing",
                  "was reviewing",
                  "had reviewed"
            ],
            "tr": "Direktör 'Yıllık bütçeyi inceliyorum' dedi. ➔ Direktör yıllık bütçeyi incelemekte olduğunu söyledi.",
            "hint": "Aktarma fiili geçmişte (said).",
            "explanation": "Aktarma fiili geçmişte olduğunda Present Continuous (am reviewing) ➔ Past Continuous'a (was reviewing) kayar."
      },
      {
            "id": "b2-reported-speech-p2",
            "sentence": "She explained, 'I have already submitted all required documents.' ➔ She explained that she ___ all required documents.",
            "blankAnswer": "had already submitted",
            "options": [
                  "has already submitted",
                  "had already submitted",
                  "already submitted"
            ],
            "tr": "'Gerekli tüm belgeleri çoktan teslim ettim' diye açıkladı. ➔ Gerekli tüm belgeleri çoktan teslim ettiğini açıkladı.",
            "hint": "Present Perfect dolaylı anlatımı.",
            "explanation": "Reported speech kuralında Present Perfect (have submitted) ➔ Past Perfect'e (had submitted) dönüşür."
      },
      {
            "id": "b2-reported-speech-p3",
            "sentence": "The manager asked me, 'Can you complete this analysis by Friday?' ➔ The manager asked me if I ___ complete the analysis by Friday.",
            "blankAnswer": "could",
            "options": [
                  "can",
                  "could",
                  "will"
            ],
            "tr": "Müdür bana 'Bu analizi cumaya kadar tamamlayabilir misin?' diye sordu. ➔ Müdür bana analizi cumaya kadar tamamlayıp tamamlayamayacağımı sordu.",
            "hint": "'can' modalının geçmiş hali.",
            "explanation": "Reported speech aktarımında 'can' yardımcı fiili 'could' biçimine dönüşür."
      },
      {
            "id": "b2-reported-speech-p4",
            "sentence": "'Where did you purchase this antique table?' ➔ She asked me where I ___ that antique table.",
            "blankAnswer": "had purchased",
            "options": [
                  "had purchased",
                  "purchased",
                  "did purchase"
            ],
            "tr": "'Bu antika masayı nereden satın aldın?' ➔ O antika masayı nereden satın aldığımı sordu.",
            "hint": "Past Simple aktarımı ve düz cümle sırası.",
            "explanation": "Past Simple soru (did you purchase) ➔ Past Perfect (had purchased) ve düz cümle sırasına geçer."
      },
      {
            "id": "b2-reported-speech-p5",
            "sentence": "'Don't forget to lock the laboratory door!' ➔ He reminded us ___ the laboratory door.",
            "blankAnswer": "to lock",
            "options": [
                  "to lock",
                  "locking",
                  "that lock"
            ],
            "tr": "'Laboratuvar kapısını kilitlemeyi unutmayın!' ➔ Bize laboratuvar kapısını kilitlememizi hatırlattı.",
            "hint": "Emir / rica aktarımı (remind + to + V1).",
            "explanation": "Emir ve hatırlatmalarda 'remind / tell someone to do something' kalıbı kullanılır."
      },
      {
            "id": "b2-reported-speech-p6",
            "sentence": "'I will send the finalized contract tomorrow.' ➔ He promised that he would send the contract ___ .",
            "blankAnswer": "the following day",
            "options": [
                  "the following day",
                  "tomorrow",
                  "the yesterday"
            ],
            "tr": "'Kesinleşen sözleşmeyi yarın göndereceğim.' ➔ Sözleşmeyi ertesi gün göndereceğine söz verdi.",
            "hint": "'tomorrow' zaman zarfının aktarımı.",
            "explanation": "Dolaylı aktarımda 'tomorrow' zarfı 'the following day' veya 'the next day'e dönüşür."
      },
      {
            "id": "b2-reported-speech-p7",
            "sentence": "The safety inspector inquired whether the environmental guidelines ___ complied with.",
            "blankAnswer": "had been",
            "options": [
                  "had been",
                  "have been",
                  "were being"
            ],
            "tr": "Güvenlik müfettişi çevre kurallarına uyulup uyulmadığını sordu.",
            "hint": "Geçmişe kaydırılmış edilgen aktarım.",
            "explanation": "Geçmişte sorulan dolaylı soruda 'had been + V3' yapısı kullanılır."
      }
    ]
  },
  {
    "id": "b2-relative-clauses",
    "level": "B2",
    "title": "Relative Clauses (İlgi Cümlecikleri: Defining & Non-defining)",
    "badge": "Cümle Bağlama Sanatı",
    "summary": "İki ayrı cümleyi tek bir akıcı, zengin ve sofistike cümlede birleştirme tekniği.",
    "introduction": "Bir ismi (insan, nesne, yer veya zaman) nitelemek için arkasına eklenen tanımlayıcı cümleciklerdir. 'who' (insanlar için), 'which' (nesneler/hayvanlar için), 'that' (her ikisi için), 'where' (yerler için), 'whose' (sahiplik için) kullanılır.",
    "subjectSchema": [
      {
        "subject": "Defining Relative Clause (Tanımlayıcı)",
        "subjectLabel": "Anlam İçin Zorunlu / Virgülsüz",
        "positive": "The woman who lives next door is an architect.",
        "negative": "The car that I bought last year is very reliable.",
        "question": "Virgül KULLANILMAZ. 'That' serbestçe kullanılabilir.",
        "highlight": "Bu cümlecik çıkarılırsa hangi kadından bahsedildiği anlaşılmaz.",
        "positiveTr": "Yan dairede yaşayan kadın bir mimardır.",
        "negativeTr": "Geçen yıl satın aldığım araba çok güvenilirdir.",
        "questionTr": "Virgül kullanılmaz. 'That' serbesttir."
      },
      {
        "subject": "Non-Defining Relative Clause (Ekstra Bilgi)",
        "subjectLabel": "Ekstra Detay / Virgüllü",
        "positive": "My father, who is 62 years old, retired yesterday.",
        "negative": "Paris, which is the capital of France, is lovely.",
        "question": "MUTLAKA VİRGÜLLE AYRILIR. Asla 'THAT' KULLANILAMAZ!",
        "highlight": "Bu cümlecik atılsa bile ana cümlenin anlamı bozulmaz.",
        "positiveTr": "62 yaşında olan babam dün emekli oldu.",
        "negativeTr": "Fransa'nın başkenti olan Paris sevimlidir.",
        "questionTr": "Virgülle ayrılır. 'That' kullanılamaz!"
      }
    ],
    "formulas": [
      {
        "title": "Bağlaç Rehberi (Relative Pronouns)",
        "pattern": "• WHO: İnsanlar için (The man who called you)\n• WHICH: Nesne ve hayvanlar için (The watch which was broken)\n• THAT: Hem insan hem nesne için (Yalnızca Defining cümlelerde!)\n• WHOSE: Sahiplik bildirir (The boy whose father is a pilot)\n• WHERE: Yer bildirir (The town where I was born)",
        "explanation": "Doğru bağlaç seçimi nitelenen kelimenin türüne bağlıdır.",
        "sample": "The person who helped me was very kind.",
        "sampleTr": "Bana yardım eden kişi çok nazikti."
      }
    ],
    "keyRules": [
      "VİRGÜLLÜ CÜMLELERDE 'THAT' KESİNLİKLE KULLANILAMAZ! Yalnızca 'who' veya 'which' kullanılır.",
      "Nesne Konumundaki Bağlacı Atma (Omitting Relative Pronoun): Eğer bağlaçtan sonra yeni bir özne geliyorsa bağlaç atılabilir: 'The movie (that) I watched' = 'The movie I watched'. Ancak özne konumundaysa atılamaz: 'The man who helped me'."
    ],
    "commonMistakes": [
      {
        "wrong": "My uncle, that lives in Canada, sent me a gift.",
        "correct": "My uncle, who lives in Canada, sent me a gift.",
        "reason": "Virgülle ayrılan ekstra bilgi cümlelerinde 'that' asla kullanılmaz, 'who' zorunludur.",
        "correctTr": "Kanada'da yaşayan amcam bana bir hediye gönderdi."
      }
    ],
    "examples": [
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "The brilliant surgeon who performed the operation received an international award.",
        "tr": "Ameliyatı gerçekleştiren parlak cerrah uluslararası bir ödül aldı.",
        "note": "who (insan)"
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "My uncle, who has lived in Vancouver for thirty years, visited us.",
        "tr": "Otuz yıldır Vancouver'da yaşayan amcam bizi ziyaret etti (Non-defining).",
        "note": ", who... , (virgüllü)"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "The candidate whom we interviewed this morning had exceptional leadership skills.",
        "tr": "Bu sabah mülakat yaptığımız adayın olağanüstü liderlik becerileri vardı.",
        "note": "whom / who (nesne)"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "The historical documentary which was broadcast last night was deeply moving.",
        "tr": "Dün gece yayımlanan tarihi belgesel son derece dokunaklıydı.",
        "note": "which (nesne/eser)"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "This is the peaceful seaside town where I spent my childhood summers.",
        "tr": "Burası çocukluk yazlarımı geçirdiğim huzurlu sahil kasabasıdır.",
        "note": "where (mekan)"
      },
      {
        "pronoun": "Diğer",
        "sentenceType": "positive",
        "eng": "The talented author whose novel topped the bestseller charts gave a speech.",
        "tr": "Romanı çok satanlar listesinde zirveye oturan yetenekli yazar bir konuşma yaptı.",
        "note": "whose (sahiplik)"
      },
      {
        "pronoun": "They",
        "sentenceType": "positive",
        "eng": "The students that achieved top scores received full university scholarships.",
        "tr": "En yüksek puanları alan öğrenciler tam üniversite bursu kazandı.",
        "note": "that (defining)"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "The book you recommended to me was genuinely eye-opening.",
        "tr": "Bana tavsiye ettiğin kitap gerçekten ufuk açıcıydı (bağlaç atılmış).",
        "note": "Omitting (that/which atılmış)"
      }
    ],
    "proTip": "Akıcı ve profesyonel İngilizce konuşurken nesne konumundaki who/which kelimelerini atarak daha doğal bir ritim yakalayabilirsiniz.",
    "practices": [
      {
            "id": "b2-relative-clauses-p1",
            "sentence": "The scientist ___ developed the innovative vaccine received an international award.",
            "blankAnswer": "who",
            "options": [
                  "who",
                  "which",
                  "whose"
            ],
            "tr": "Yenilikçi aşıyı geliştiren bilim insanı uluslararası bir ödül aldı.",
            "hint": "İnsanları niteleyen özne zamiri.",
            "explanation": "İnsanları niteleyen ve cümleciğin öznesi olan relative pronoun 'who'dur."
      },
      {
            "id": "b2-relative-clauses-p2",
            "sentence": "The company headquarters, ___ were designed by an award-winning architect, will open next month.",
            "blankAnswer": "which",
            "options": [
                  "that",
                  "which",
                  "where"
            ],
            "tr": "Ödüllü bir mimar tarafından tasarlanan şirket genel merkezi gelecek ay açılacak.",
            "hint": "Virgülle ayrılan (Non-defining) cümlecik.",
            "explanation": "Virgüllü Non-defining Relative Clause yapılarında asla 'that' kullanılamaz; cansız varlıklar için 'which' zorunludur."
      },
      {
            "id": "b2-relative-clauses-p3",
            "sentence": "We interviewed a candidate ___ analytical skills impressed the entire board.",
            "blankAnswer": "whose",
            "options": [
                  "who",
                  "whom",
                  "whose"
            ],
            "tr": "Analitik becerileri tüm yönetim kurulunu etkileyen bir adayla mülakat yaptık.",
            "hint": "Aitlik/sahiplik bildiren ilgi zamiri.",
            "explanation": "Aitlik bildiren durumlarda (adayın analitik becerileri) 'whose' kullanılır."
      },
      {
            "id": "b2-relative-clauses-p4",
            "sentence": "The historical archive, in ___ the ancient manuscripts were preserved, was restored.",
            "blankAnswer": "which",
            "options": [
                  "which",
                  "that",
                  "where"
            ],
            "tr": "Eski el yazmalarının korunduğu tarihi arşiv restore edildi.",
            "hint": "Edat (preposition) ardından gelen zamir.",
            "explanation": "Edatların (in, on, at, with) ardından cansızlar için daima 'which' gelir; asla 'that' gelmez."
      },
      {
            "id": "b2-relative-clauses-p5",
            "sentence": "The senior engineer ___ I had collaborated with for three years resigned yesterday.",
            "blankAnswer": "whom",
            "options": [
                  "whom",
                  "which",
                  "whose"
            ],
            "tr": "Üç yıldır birlikte çalıştığım kıdemli mühendis dün istifa etti.",
            "hint": "Cümlenin nesnesi konumundaki insan.",
            "explanation": "İnsanları niteleyen nesne konumundaki resmi yapılarda 'whom' kullanılır."
      },
      {
            "id": "b2-relative-clauses-p6",
            "sentence": "This is the research laboratory ___ the groundbreaking experiments took place.",
            "blankAnswer": "where",
            "options": [
                  "where",
                  "which",
                  "that"
            ],
            "tr": "Bu, çığır açan deneylerin gerçekleştiği araştırma laboratuvarıdır.",
            "hint": "Mekan ve yer niteleme zamiri.",
            "explanation": "Bir eylemin içinde gerçekleştiği yeri nitelemek için 'where' kullanılır."
      },
      {
            "id": "b2-relative-clauses-p7",
            "sentence": "Any candidate ___ credentials do not meet the minimum criteria will be disqualified.",
            "blankAnswer": "whose",
            "options": [
                  "whose",
                  "who",
                  "whom"
            ],
            "tr": "Nitelikleri asgari kriterleri karşılamayan adaylar elenecektir.",
            "hint": "Aitlik (adayın nitelikleri).",
            "explanation": "Adayın belgelerine/niteliklerine aitlik bildirmek için 'whose' kullanılır."
      }
    ]
  },
  {
    "id": "b2-wish-clauses",
    "level": "B2",
    "title": "Wish Clauses & If Only (Dilek ve Pişmanlık Cümleleri)",
    "badge": "Keşkeler & Dilekler",
    "summary": "Şimdiki durumdan memnuniyetsizlik, geçmiş pişmanlıklar ve başkalarının davranışlarına dair şikayetler.",
    "introduction": "Türkçedeki 'Keşke...' ifadesinin karşılığıdır. 'I wish' veya daha duygusal vurgulu haliyle 'If only' kullanılır. Gerçek dışı bir temenniyi yansıttığı için kullanılan zamanlar daima bir derece geçmişe çekilir.",
    "subjectSchema": [
      {
        "subject": "Şimdiki Zaman Dileği (Present Wish)",
        "subjectLabel": "Şu Anki Durumun Tersi",
        "positive": "Wish + Past Simple ➔ I wish I lived in a warm country. (Şu an soğuktayım)",
        "negative": "I wish I had more free time to travel.",
        "question": "To be için 'were' tercih edilir: I wish I were taller.",
        "highlight": "Geçmiş zaman kullanılır ama dilek ŞU ANA aittir.",
        "positiveTr": "Keşke sıcak bir ülkede yaşasaydım.",
        "negativeTr": "Keşke seyahat edecek daha çok boş vaktim olsaydı.",
        "questionTr": "Keşke daha uzun boylu olsaydım."
      },
      {
        "subject": "Geçmiş Zaman Pişmanlığı (Past Regret)",
        "subjectLabel": "Geçmişte Olanın Tersi",
        "positive": "Wish + Past Perfect (had + V3) ➔ I wish I had studied harder. (Çalışmadım)",
        "negative": "If only we hadn't sold our old house!",
        "question": "Geçmişte yaşanmış bitmiş olayın pişmanlığıdır.",
        "highlight": "had + V3 kalıbı kullanılır.",
        "positiveTr": "Keşke daha sıkı çalışmış olsaydım.",
        "negativeTr": "Keşke eski evimizi satmamış olsaydık!",
        "questionTr": "Geçmişe ait pişmanlık."
      },
      {
        "subject": "Şikayet & Değişim İsteği (Complaint)",
        "subjectLabel": "Gelecek / Başkası Hakkında",
        "positive": "Wish + would + V1 ➔ I wish you would stop interrupting me.",
        "negative": "I wish it would stop raining!",
        "question": "Kişi kendisi için 'I wish I would' KULLANAMAZ! Başkasına şikayettir.",
        "highlight": "Birisinin rahatsız edici bir eylemi bırakmasını istemek.",
        "positiveTr": "Keşke sözümü kesmeyi bıraksan.",
        "negativeTr": "Keşke yağmur dursa!",
        "questionTr": "Başkasına yönelik şikayet."
      }
    ],
    "formulas": [
      {
        "title": "Özet Tablo",
        "pattern": "• Şu An İçin: I wish + Past Simple (I wish I knew the answer)\n• Geçmiş İçin: I wish + had + V3 (I wish I had accepted the offer)\n• Şikayet İçin: I wish + someone + would + V1 (I wish he would listen)",
        "explanation": "'If only' de aynı kurallarla çalışır, yalnızca duygusal şiddeti ve vurgusu daha yüksektir.",
        "sample": "I wish I had more time. / If only I had known!",
        "sampleTr": "Keşke daha çok vaktim olsaydı. / Keşke bilmiş olsaydım!"
      }
    ],
    "keyRules": [
      "Kendimiz için 'I wish I would' kullanılamaz; onun yerine 'I wish I could' (Keşke yapabilseydim) denir: 'I wish I could speak Spanish.'",
      "To be fiilinde 'were' kullanımı resmi ve standarttır: 'I wish I were with you right now.'"
    ],
    "commonMistakes": [
      {
        "wrong": "I wish I will see you tomorrow.",
        "correct": "I hope I will see you tomorrow. / I wish I could see you tomorrow.",
        "reason": "Gelecekte olası bir temenni için 'wish + will' değil, 'hope' kullanılır.",
        "correctTr": "Umarım yarın seni görürüm."
      }
    ],
    "examples": [
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I wish I spoke Italian fluently enough to live in Florence.",
        "tr": "Keşke Floransa'da yaşayacak kadar akıcı İtalyanca konuşabilseydim (Şu anki dilek).",
        "note": "wish + Past Simple"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I wish I had bought that historical apartment five years ago.",
        "tr": "Keşke o tarihi daireyi beş yıl önce satın almış olsaydım (Geçmiş pişmanlık).",
        "note": "wish + had + V3"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "If only I had listened to my senior mentor's thoughtful advice!",
        "tr": "Keşke kıdemli mentorumun düşünceli tavsiyesini dinlemiş olsaydım!",
        "note": "If only + Past Perfect"
      },
      {
        "pronoun": "I",
        "sentenceType": "positive",
        "eng": "I wish I were more confident during public presentations.",
        "tr": "Keşke topluluk önündeki sunumlarda daha özgüvenli olsaydım.",
        "note": "I wish I were..."
      },
      {
        "pronoun": "He",
        "sentenceType": "positive",
        "eng": "He wishes he had more time to spend outdoors in nature.",
        "tr": "O doğada açık havada geçirecek daha fazla vakti olmasını diliyor.",
        "note": "He wishes + Past"
      },
      {
        "pronoun": "She",
        "sentenceType": "positive",
        "eng": "She wishes she hadn't quit her software development job.",
        "tr": "Yazılım geliştirme işinden istifa etmemiş olmayı diliyor.",
        "note": "wishes + hadn't quit"
      },
      {
        "pronoun": "You",
        "sentenceType": "positive",
        "eng": "I wish you would stop tapping your pen on the meeting table.",
        "tr": "Keşke toplantı masasında kalemini tıklatıp durmayı kessen (Şikayet).",
        "note": "wish you would + V1"
      },
      {
        "pronoun": "It",
        "sentenceType": "positive",
        "eng": "I wish it would stop raining so that we could go out for a walk.",
        "tr": "Keşke yağmur dursa da dışarı yürüyüşe çıkabilsek.",
        "note": "wish it would stop"
      }
    ],
    "proTip": "Gerçekleşmesi muhtemel gelecek umutları için 'hope', imkansız hayaller ve keşkeler için 'wish' kullanın.",
    "practices": [
      {
            "id": "b2-wish-clauses-p1",
            "sentence": "I do not understand statistical analysis. I wish I ___ (understand) advanced statistics.",
            "blankAnswer": "understood",
            "options": [
                  "understand",
                  "understood",
                  "had understood"
            ],
            "tr": "İstatistiki analizi anlamıyorum. Keşke ileri düzey istatistiği anlayabilseydim.",
            "hint": "Şu anki gerçekliğe zıt dilek.",
            "explanation": "Şu an geçerli olan bir duruma yönelik dilek bildirmek için 'wish + Past Simple' (understood) kullanılır."
      },
      {
            "id": "b2-wish-clauses-p2",
            "sentence": "I did not attend yesterday's crucial strategy conference. I wish I ___ (attend) it.",
            "blankAnswer": "had attended",
            "options": [
                  "attended",
                  "had attended",
                  "would attend"
            ],
            "tr": "Dünkü kritik strateji konferansına katılmadım. Keşke katılmış olsaydım.",
            "hint": "Geçmişe yönelik geri döndürülemez pişmanlık.",
            "explanation": "Geçmişte yaşanmış ve bitmiş bir duruma yönelik pişmanlıkta 'wish + Past Perfect' (had attended) kullanılır."
      },
      {
            "id": "b2-wish-clauses-p3",
            "sentence": "The noise outside is unbearable. If only they ___ stop drilling the road!",
            "blankAnswer": "would",
            "options": [
                  "would",
                  "will",
                  "did"
            ],
            "tr": "Dışarıdaki gürültü dayanılmaz. Keşke yolu delmeyi bıraksalar!",
            "hint": "Başkalarının rahatsız edici eylemleri için dilek.",
            "explanation": "Başkalarının rahatsız edici bir eylemi sonlandırmasını istemek için 'wish / if only + would + V1' kullanılır."
      },
      {
            "id": "b2-wish-clauses-p4",
            "sentence": "I have so many pending tasks today. I wish I ___ on a peaceful beach right now.",
            "blankAnswer": "were",
            "options": [
                  "were",
                  "am",
                  "have been"
            ],
            "tr": "Bugün bekleyen çok fazla görevim var. Keşke şu an huzurlu bir kumsalda olsaydım.",
            "hint": "Şu anki gerçek dışı durum.",
            "explanation": "Wish clauses yapısında 'to be' fiili tüm özneler için kural olarak 'were' olur."
      },
      {
            "id": "b2-wish-clauses-p5",
            "sentence": "She failed her driving examination. She wishes she ___ practiced more before the test.",
            "blankAnswer": "had",
            "options": [
                  "had",
                  "would",
                  "has"
            ],
            "tr": "Direksiyon sınavında başarısız oldu. Keşke sınavdan önce daha çok pratik yapmış olsaydı.",
            "hint": "Geçmişe yönelik pişmanlık.",
            "explanation": "Geçmişteki bir eylemin pişmanlığında 'wish + had + V3' (had practiced) kullanılır."
      },
      {
            "id": "b2-wish-clauses-p6",
            "sentence": "If only I ___ spoken so aggressively to my team members during the meeting!",
            "blankAnswer": "hadn't",
            "options": [
                  "hadn't",
                  "didn't",
                  "wouldn't"
            ],
            "tr": "Keşke toplantı sırasında ekip üyelerime o kadar sert konuşmamış olsaydım!",
            "hint": "Geçmiş olumsuz pişmanlık.",
            "explanation": "Geçmişteki bir hatadan duyulan pişmanlıkta 'If only + hadn't + V3' kullanılır."
      },
      {
            "id": "b2-wish-clauses-p7",
            "sentence": "I wish our noisy neighbors ___ turn down their loud music late at night.",
            "blankAnswer": "would",
            "options": [
                  "would",
                  "will",
                  "did"
            ],
            "tr": "Keşke gürültücü komşularımız gece geç saatte yüksek sesli müziklerini kıssalar.",
            "hint": "Başkalarının davranışından şikayetçi olma.",
            "explanation": "Başkalarının rahatsız edici tutumunu değiştirmesini dilerken 'wish + would' kullanılır."
      }
    ]
  }
];

export const SENTENCE_SCRAMBLE_DATA: SentenceScrambleItem[] = [
  {
    "id": "scramble-a1-1",
    "level": "A1",
    "grammarTopicId": "a1-to-be",
    "topicName": "To Be (Am/Is/Are)",
    "tr": "Ben bugün çok mutluyum.",
    "targetEng": "I am very happy today.",
    "tokens": [
      "I",
      "am",
      "very",
      "happy",
      "today."
    ],
    "hint": "I öznesi için to be hali 'am'dir.",
    "ruleExplanation": "İngilizcede durum cümlelerinde I öznesi daima 'am' yardımcı fiilini alır."
  },
  {
    "id": "scramble-a1-2",
    "level": "A1",
    "grammarTopicId": "a1-present-simple",
    "topicName": "Present Simple",
    "tr": "O her sabah taze süt içer.",
    "targetEng": "She drinks fresh milk every morning.",
    "tokens": [
      "She",
      "drinks",
      "fresh",
      "milk",
      "every",
      "morning."
    ],
    "hint": "Geniş zamanda 3. tekil şahısta fiile -s gelir.",
    "ruleExplanation": "He/She/It öznelerinde fiil -s takısı alır: She drinks."
  },
  {
    "id": "scramble-a1-3",
    "level": "A1",
    "grammarTopicId": "a1-present-continuous",
    "topicName": "Present Continuous",
    "tr": "Onlar şu anda önemli bir proje üzerinde çalışıyorlar.",
    "targetEng": "They are working on an important project now.",
    "tokens": [
      "They",
      "are",
      "working",
      "on",
      "an",
      "important",
      "project",
      "now."
    ],
    "hint": "Çoğul şahısla 'are + V-ing' kullanılır.",
    "ruleExplanation": "Present Continuous yapısında özneye uygun to be (are) ve fiilin -ing hali bir araya gelir."
  },
  {
    "id": "scramble-a1-4",
    "level": "A1",
    "grammarTopicId": "a1-have-got-has-got",
    "topicName": "Have Got / Has Got",
    "tr": "Bizim evin arkasında büyük bir bahçemiz var.",
    "targetEng": "We have got a big garden behind our house.",
    "tokens": [
      "We",
      "have",
      "got",
      "a",
      "big",
      "garden",
      "behind",
      "our",
      "house."
    ],
    "hint": "Sıfat (big) isimden (garden) önce gelir.",
    "ruleExplanation": "We öznesiyle 'have got' kullanılır ve niteleme sıfatları ismin önüne yerleşir."
  },
  {
    "id": "scramble-a1-5",
    "level": "A1",
    "grammarTopicId": "a1-there-is-are",
    "topicName": "There Is / There Are",
    "tr": "Mutfak masasının üzerinde üç taze elma var.",
    "targetEng": "There are three fresh apples on the kitchen table.",
    "tokens": [
      "There",
      "are",
      "three",
      "fresh",
      "apples",
      "on",
      "the",
      "kitchen",
      "table."
    ],
    "hint": "Çoğul nesnelerde 'There are' kullanılır.",
    "ruleExplanation": "Çoğul varlıkların mevcudiyetini belirtirken 'There are' yapısı kullanılır."
  },
  {
    "id": "scramble-a1-6",
    "level": "A1",
    "grammarTopicId": "a1-can-cant",
    "topicName": "Can / Can't",
    "tr": "O çok iyi akustik gitar çalabilir.",
    "targetEng": "He can play the acoustic guitar very well.",
    "tokens": [
      "He",
      "can",
      "play",
      "the",
      "acoustic",
      "guitar",
      "very",
      "well."
    ],
    "hint": "'can' sonrası fiil ek almaz, yalın kalır.",
    "ruleExplanation": "Modal verb 'can' sonrasında fiil daima yalın (bare infinitive) halde gelir."
  },
  {
    "id": "scramble-a1-7",
    "level": "A1",
    "grammarTopicId": "a1-to-be",
    "topicName": "To Be Soru Yapısı",
    "tr": "Final sınavına hazır mısın?",
    "targetEng": "Are you ready for the final exam?",
    "tokens": [
      "Are",
      "you",
      "ready",
      "for",
      "the",
      "final",
      "exam?"
    ],
    "hint": "'you' öznesiyle to be sorusu cümlenin başına 'Are' alarak başlar.",
    "ruleExplanation": "To be soru yapısında yardımcı fiil (Are) cümlenin başına taşınır."
  },
  {
    "id": "scramble-a1-8",
    "level": "A1",
    "grammarTopicId": "a1-present-simple",
    "topicName": "Present Simple (Olumsuz)",
    "tr": "Babam pazar günleri çalışmaz.",
    "targetEng": "My father does not work on Sundays.",
    "tokens": [
      "My",
      "father",
      "does",
      "not",
      "work",
      "on",
      "Sundays."
    ],
    "hint": "3. tekil şahısta olumsuz geniş zaman için 'does not' + V1.",
    "ruleExplanation": "He/She/It öznelerinde geniş zaman olumsuzluk yapısı 'does not (doesn't)' ve yalın fiildir."
  },
  {
    "id": "scramble-a1-9",
    "level": "A1",
    "grammarTopicId": "a1-present-simple",
    "topicName": "Present Simple (Wh- Soru)",
    "tr": "Büyükanne ve büyükbaban nerede yaşıyor?",
    "targetEng": "Where do your grandparents live?",
    "tokens": [
      "Where",
      "do",
      "your",
      "grandparents",
      "live?"
    ],
    "hint": "Soru kelimesinden (Where) sonra 'do' yardımcı fiili gelir.",
    "ruleExplanation": "Wh- soru kelimelerinde dizilim: Soru Kelimesi + Do/Does + Özne + Yalın Fiil şeklindedir."
  },
  {
    "id": "scramble-a1-10",
    "level": "A1",
    "grammarTopicId": "a1-present-continuous",
    "topicName": "Present Continuous (Soru)",
    "tr": "Kız kardeşin şu anda televizyon mu izliyor?",
    "targetEng": "Is your sister watching television right now?",
    "tokens": [
      "Is",
      "your",
      "sister",
      "watching",
      "television",
      "right",
      "now?"
    ],
    "hint": "Şimdiki zaman soru cümlesinde 'Is' başa gelir.",
    "ruleExplanation": "Present Continuous soru yapısında 'Am/Is/Are + Özne + Fiil-ing' kuralı uygulanır."
  },
  {
    "id": "scramble-a1-11",
    "level": "A1",
    "grammarTopicId": "a1-have-got-has-got",
    "topicName": "Have Got / Has Got",
    "tr": "Onun iki sevimli kedisi var.",
    "targetEng": "He has got two cute cats.",
    "tokens": [
      "He",
      "has",
      "got",
      "two",
      "cute",
      "cats."
    ],
    "hint": "He/She/It özneleri için 'has got' kullanılır.",
    "ruleExplanation": "Üçüncü tekil şahıslarda sahiplik belirtirken 'have got' yerine 'has got' gelir."
  },
  {
    "id": "scramble-a1-12",
    "level": "A1",
    "grammarTopicId": "a1-there-is-are",
    "topicName": "There Is (Sayılamayan)",
    "tr": "Fincanda biraz sıcak kahve var.",
    "targetEng": "There is some hot coffee in the cup.",
    "tokens": [
      "There",
      "is",
      "some",
      "hot",
      "coffee",
      "in",
      "the",
      "cup."
    ],
    "hint": "Sayılamayan isimler için 'There is' ve 'some' kullanılır.",
    "ruleExplanation": "Kahve gibi sayılamayan isimlerin varlığından bahsederken tekil yardımcı fiil 'is' kullanılır."
  },
  {
    "id": "scramble-a1-13",
    "level": "A1",
    "grammarTopicId": "a1-can-cant",
    "topicName": "Can / Can't",
    "tr": "O çok akıcı bir şekilde Fransızca konuşamaz.",
    "targetEng": "She cannot speak French very fluently.",
    "tokens": [
      "She",
      "cannot",
      "speak",
      "French",
      "very",
      "fluently."
    ],
    "hint": "Yetenek olumsuzluğu için 'cannot' + yalın fiil.",
    "ruleExplanation": "'Can't' veya 'cannot' kip belirtecinden sonra gelen esas fiil hiçbir ek almaz."
  },
  {
    "id": "scramble-a1-14",
    "level": "A1",
    "grammarTopicId": "a1-to-be",
    "topicName": "To Be (Meslek & Sıfat)",
    "tr": "En iyi arkadaşım yetenekli bir mimardır.",
    "targetEng": "My best friend is a talented architect.",
    "tokens": [
      "My",
      "best",
      "friend",
      "is",
      "a",
      "talented",
      "architect."
    ],
    "hint": "Tekil meslek ismi önüne 'a/an' gelir.",
    "ruleExplanation": "Meslek ve niteleme durumlarında 'is + sıfat + isim' sıralaması izlenir."
  },
  {
    "id": "scramble-a1-15",
    "level": "A1",
    "grammarTopicId": "a1-present-simple",
    "topicName": "Sıklık Zarfları",
    "tr": "Biz genellikle saat on ikide öğle yemeği yeriz.",
    "targetEng": "We usually have lunch at twelve o'clock.",
    "tokens": [
      "We",
      "usually",
      "have",
      "lunch",
      "at",
      "twelve",
      "o'clock."
    ],
    "hint": "Sıklık zarfı (usually) özneden hemen sonra, esas fiilden önce gelir.",
    "ruleExplanation": "Geniş zamanda 'usually, always, often' gibi sıklık zarfları özne ile esas fiil arasına girer."
  },
  {
    "id": "scramble-a2-1",
    "level": "A2",
    "grammarTopicId": "a2-past-simple",
    "topicName": "Past Simple",
    "tr": "Geçen hafta sonu sinemaya gittik.",
    "targetEng": "We went to the cinema last weekend.",
    "tokens": [
      "We",
      "went",
      "to",
      "the",
      "cinema",
      "last",
      "weekend."
    ],
    "hint": "'go' fiilinin 2. hali düzensizdir (went).",
    "ruleExplanation": "Geçmişte tamamlanmış eylemlerde düzensiz fiiller 2. halleriyle (V2) kullanılır."
  },
  {
    "id": "scramble-a2-2",
    "level": "A2",
    "grammarTopicId": "a2-past-continuous",
    "topicName": "Past Continuous + When",
    "tr": "Telefon çaldığında akşam yemeği pişiriyordum.",
    "targetEng": "I was cooking dinner when the phone rang.",
    "tokens": [
      "I",
      "was",
      "cooking",
      "dinner",
      "when",
      "the",
      "phone",
      "rang."
    ],
    "hint": "'when' anlık kesintiyi (rang), ana cümle süreci (was cooking) anlatır.",
    "ruleExplanation": "Geçmişte devam eden bir süreç başka bir olayla kesildiğinde 'was/were V-ing + when + V2' kalıbı kullanılır."
  },
  {
    "id": "scramble-a2-3",
    "level": "A2",
    "grammarTopicId": "a2-future-will-goingto",
    "topicName": "Be Going To (Kanıtlı Gelecek)",
    "tr": "Karanlık bulutlara bak, yağmur yağacak.",
    "targetEng": "Look at the dark clouds, it is going to rain.",
    "tokens": [
      "Look",
      "at",
      "the",
      "dark",
      "clouds,",
      "it",
      "is",
      "going",
      "to",
      "rain."
    ],
    "hint": "Görünür güçlü kanıtlarda 'be going to' tercih edilir.",
    "ruleExplanation": "Konuşma anında gözle görülen açık bir kanıt varsa gelecek için 'is going to' kullanılır."
  },
  {
    "id": "scramble-a2-4",
    "level": "A2",
    "grammarTopicId": "a2-comparatives-superlatives",
    "topicName": "Comparatives",
    "tr": "Bu yeni araba benimkinden çok daha konforludur.",
    "targetEng": "This new car is much more comfortable than mine.",
    "tokens": [
      "This",
      "new",
      "car",
      "is",
      "much",
      "more",
      "comfortable",
      "than",
      "mine."
    ],
    "hint": "Uzun sıfatlarda 'more' ve pekiştirmek için 'much' kullanılır.",
    "ruleExplanation": "Üç veya daha fazla heceli sıfatların kıyaslamasında 'more + sıfat + than' kullanılır."
  },
  {
    "id": "scramble-a2-5",
    "level": "A2",
    "grammarTopicId": "a2-modals-must-should",
    "topicName": "Should (Tavsiye)",
    "tr": "Daha sağlıklı hissetmek için her gün bol su içmelisin.",
    "targetEng": "You should drink plenty of water every day to feel healthier.",
    "tokens": [
      "You",
      "should",
      "drink",
      "plenty",
      "of",
      "water",
      "every",
      "day",
      "to",
      "feel",
      "healthier."
    ],
    "hint": "'should' tavsiye kipi sonrası fiil yalın gelir.",
    "ruleExplanation": "Nasihat ve öneri bildirmek için 'should + V1' kullanılır."
  },
  {
    "id": "scramble-a2-6",
    "level": "A2",
    "grammarTopicId": "a2-past-simple",
    "topicName": "Past Simple (Olumsuz)",
    "tr": "O dün öğleden sonra büyükanne ve büyükbabasını ziyaret etmedi.",
    "targetEng": "She did not visit her grandparents yesterday afternoon.",
    "tokens": [
      "She",
      "did",
      "not",
      "visit",
      "her",
      "grandparents",
      "yesterday",
      "afternoon."
    ],
    "hint": "Geçmiş zaman olumsuz cümlesinde 'did not' sonrası fiil yalın kalır.",
    "ruleExplanation": "Past Simple olumsuz cümlelerde 'did not + V1' kuralı gereği fiil 2. halini almaz."
  },
  {
    "id": "scramble-a2-7",
    "level": "A2",
    "grammarTopicId": "a2-past-continuous",
    "topicName": "While + Past Continuous",
    "tr": "Biz parkta yürürken yağmur yağmaya başladı.",
    "targetEng": "While we were walking in the park, it started to rain.",
    "tokens": [
      "While",
      "we",
      "were",
      "walking",
      "in",
      "the",
      "park,",
      "it",
      "started",
      "to",
      "rain."
    ],
    "hint": "'While' devam eden süreci (were walking), ana cümle başlangıcı (started) anlatır.",
    "ruleExplanation": "'While' bağlacından sonra süreç belirten Past Continuous (were walking) kullanılır."
  },
  {
    "id": "scramble-a2-8",
    "level": "A2",
    "grammarTopicId": "a2-comparatives-superlatives",
    "topicName": "Superlatives",
    "tr": "Everest Dağı tüm dünyadaki en yüksek dağdır.",
    "targetEng": "Mount Everest is the highest mountain in the whole world.",
    "tokens": [
      "Mount",
      "Everest",
      "is",
      "the",
      "highest",
      "mountain",
      "in",
      "the",
      "whole",
      "world."
    ],
    "hint": "En üstünlük derecesinde 'the' + '-est' takısı kullanılır.",
    "ruleExplanation": "Kısa sıfatlarda en üstünlük derecesi (Superlative) 'the + sıfat-est' şeklinde oluşturulur."
  },
  {
    "id": "scramble-a2-9",
    "level": "A2",
    "grammarTopicId": "a2-modals-must-should",
    "topicName": "Must Not (Yasak)",
    "tr": "Öğrenciler sınav sırasında cep telefonlarını kullanmamalıdır.",
    "targetEng": "Students must not use their mobile phones during the exam.",
    "tokens": [
      "Students",
      "must",
      "not",
      "use",
      "their",
      "mobile",
      "phones",
      "during",
      "the",
      "exam."
    ],
    "hint": "Kesin yasak bildirmek için 'must not' kullanılır.",
    "ruleExplanation": "Güçlü yasaklama ve kurallarda 'must not (mustn't) + V1' kalıbı kullanılır."
  },
  {
    "id": "scramble-a2-10",
    "level": "A2",
    "grammarTopicId": "a2-future-will-goingto",
    "topicName": "Future Will (Gelecek Tahmini)",
    "tr": "Bence insanlar gelecekte Mars'ta yaşayacaklar.",
    "targetEng": "I think people will live on Mars in the future.",
    "tokens": [
      "I",
      "think",
      "people",
      "will",
      "live",
      "on",
      "Mars",
      "in",
      "the",
      "future."
    ],
    "hint": "Kişisel tahmin ve inançlarda 'will' kullanılır.",
    "ruleExplanation": "'I think, I believe' gibi kişisel tahmin belirten ifadelerle 'will + V1' kullanılır."
  },
  {
    "id": "scramble-a2-11",
    "level": "A2",
    "grammarTopicId": "a2-past-simple",
    "topicName": "Past Simple (Soru)",
    "tr": "Roma seyahatinden herhangi bir hediyelik eşya aldın mı?",
    "targetEng": "Did you buy any souvenirs from your trip to Rome?",
    "tokens": [
      "Did",
      "you",
      "buy",
      "any",
      "souvenirs",
      "from",
      "your",
      "trip",
      "to",
      "Rome?"
    ],
    "hint": "Geçmiş zaman soru cümlesinde 'Did' başa gelir ve fiil yalındır.",
    "ruleExplanation": "Past Simple soru kalıbı: 'Did + Özne + V1' şeklinde oluşturulur."
  },
  {
    "id": "scramble-a2-12",
    "level": "A2",
    "grammarTopicId": "a2-future-will-goingto",
    "topicName": "Be Going To (Plan)",
    "tr": "Gelecek ay yeni bir ev satın alacağız.",
    "targetEng": "We are going to buy a new house next month.",
    "tokens": [
      "We",
      "are",
      "going",
      "to",
      "buy",
      "a",
      "new",
      "house",
      "next",
      "month."
    ],
    "hint": "Önceden planlanmış gelecek niyetlerinde 'be going to' kullanılır.",
    "ruleExplanation": "Önceden kararlaştırılmış plan ve niyetlerde 'am/is/are going to + V1' kullanılır."
  },
  {
    "id": "scramble-a2-13",
    "level": "A2",
    "grammarTopicId": "a2-past-continuous",
    "topicName": "Past Continuous (Wh- Soru)",
    "tr": "Dün akşam saat sekizde ne yapıyordun?",
    "targetEng": "What were you doing at eight o'clock yesterday evening?",
    "tokens": [
      "What",
      "were",
      "you",
      "doing",
      "at",
      "eight",
      "o'clock",
      "yesterday",
      "evening?"
    ],
    "hint": "Geçmişte belirli bir andaki süreç sorulurken 'were + you + V-ing'.",
    "ruleExplanation": "Past Continuous soru dizilimi: Soru Kelimesi + was/were + Özne + V-ing."
  },
  {
    "id": "scramble-a2-14",
    "level": "A2",
    "grammarTopicId": "a2-comparatives-superlatives",
    "topicName": "Comparatives with Much",
    "tr": "İngilizce öğrenmek Japonca öğrenmekten çok daha kolaydır.",
    "targetEng": "Learning English is much easier than learning Japanese.",
    "tokens": [
      "Learning",
      "English",
      "is",
      "much",
      "easier",
      "than",
      "learning",
      "Japanese."
    ],
    "hint": "Karşılaştırmayı pekiştirmek için sıfatın önüne 'much' gelir.",
    "ruleExplanation": "Karşılaştırma sıfatlarının önüne 'much' getirilerek aradaki fark vurgulanır."
  },
  {
    "id": "scramble-a2-15",
    "level": "A2",
    "grammarTopicId": "a2-modals-must-should",
    "topicName": "Don't Have To (Zorunluluk Yokluğu)",
    "tr": "Yarın pazar olduğu için erken uyanmak zorunda değilsin.",
    "targetEng": "You do not have to wake up early tomorrow because it is Sunday.",
    "tokens": [
      "You",
      "do",
      "not",
      "have",
      "to",
      "wake",
      "up",
      "early",
      "tomorrow",
      "because",
      "it",
      "is",
      "Sunday."
    ],
    "hint": "Zorunluluk yokluğunu belirtmek için 'don't have to' kullanılır.",
    "ruleExplanation": "Gerekliliğin ve zorunluluğun olmadığını bildirmek için 'don't/doesn't have to' kullanılır."
  },
  {
    "id": "scramble-b1-1",
    "level": "B1",
    "grammarTopicId": "b1-present-perfect",
    "topicName": "Present Perfect (For/Since)",
    "tr": "Bu uluslararası şirkette yedi yıldır çalışıyorum.",
    "targetEng": "I have worked at this international company for seven years.",
    "tokens": [
      "I",
      "have",
      "worked",
      "at",
      "this",
      "international",
      "company",
      "for",
      "seven",
      "years."
    ],
    "hint": "Süreç bildirmek için 'for' ve Present Perfect (have + V3) kullanılır.",
    "ruleExplanation": "Geçmişte başlayıp günümüzde de süren durumlar için 'have/has + V3' ve zaman süresi için 'for' kullanılır."
  },
  {
    "id": "scramble-b1-2",
    "level": "B1",
    "grammarTopicId": "b1-passive-voice",
    "topicName": "Passive Voice (Geçmiş Zaman Edilgen)",
    "tr": "Bu tarihi katedral on dördüncü yüzyılda inşa edildi.",
    "targetEng": "This historic cathedral was built in the fourteenth century.",
    "tokens": [
      "This",
      "historic",
      "cathedral",
      "was",
      "built",
      "in",
      "the",
      "fourteenth",
      "century."
    ],
    "hint": "Geçmiş zaman edilgen yapıda 'was/were + V3' kullanılır.",
    "ruleExplanation": "Geçmişteki eylemi yapan kişi değil yapılan nesne vurgulandığında 'was/were + V3' kurulur."
  },
  {
    "id": "scramble-b1-3",
    "level": "B1",
    "grammarTopicId": "b1-conditionals",
    "topicName": "Second Conditional (Hayali Durum)",
    "tr": "Daha fazla boş vaktim olsaydı piyano çalmayı öğrenirdim.",
    "targetEng": "If I had more free time, I would learn to play the piano.",
    "tokens": [
      "If",
      "I",
      "had",
      "more",
      "free",
      "time,",
      "I",
      "would",
      "learn",
      "to",
      "play",
      "the",
      "piano."
    ],
    "hint": "Şu anki gerçek dışı durumlarda 'If + Past Simple, would + V1' kullanılır.",
    "ruleExplanation": "Şimdiki zamana ait hayali durum ve dileklerde Second Conditional yapısı kullanılır."
  },
  {
    "id": "scramble-b1-4",
    "level": "B1",
    "grammarTopicId": "b1-perfect-vs-past",
    "topicName": "Past Simple vs Present Perfect",
    "tr": "Üniversiteden ne zaman mezun oldun?",
    "targetEng": "When did you graduate from the university?",
    "tokens": [
      "When",
      "did",
      "you",
      "graduate",
      "from",
      "the",
      "university?"
    ],
    "hint": "'When' soru kelimesiyle belirli geçmiş zaman sorulur (did + V1).",
    "ruleExplanation": "'When' kesin zaman sorduğu için Present Perfect ile değil, Past Simple (did) ile kullanılır."
  },
  {
    "id": "scramble-b1-5",
    "level": "B1",
    "grammarTopicId": "b1-present-perfect",
    "topicName": "Present Perfect with Already",
    "tr": "O yüksek lisans tezini çoktan bitirdi.",
    "targetEng": "She has already finished her master thesis.",
    "tokens": [
      "She",
      "has",
      "already",
      "finished",
      "her",
      "master",
      "thesis."
    ],
    "hint": "'Already' yardımcı fiil ile esas fiil arasına gelir.",
    "ruleExplanation": "Present Perfect'te eylemin beklenenden önce tamamlandığını belirtmek için 'already' kullanılır."
  },
  {
    "id": "scramble-b1-6",
    "level": "B1",
    "grammarTopicId": "b1-present-perfect",
    "topicName": "Present Perfect with Ever",
    "tr": "Daha önce hiç bir Asya ülkesine seyahat ettin mi?",
    "targetEng": "Have you ever traveled to an Asian country before?",
    "tokens": [
      "Have",
      "you",
      "ever",
      "traveled",
      "to",
      "an",
      "Asian",
      "country",
      "before?"
    ],
    "hint": "Hayat boyu deneyimleri sorarken 'Have you ever + V3' kullanılır.",
    "ruleExplanation": "Deneyim sorgulamalarında soru cümlesi 'Have/Has + Özne + ever + V3' şeklindedir."
  },
  {
    "id": "scramble-b1-7",
    "level": "B1",
    "grammarTopicId": "b1-perfect-vs-past",
    "topicName": "Past Perfect (Geçmişin Geçmişi)",
    "tr": "Ambulans vardığında hasta çoktan stabil hale gelmişti.",
    "targetEng": "By the time the ambulance arrived, the patient had already stabilized.",
    "tokens": [
      "By",
      "the",
      "time",
      "the",
      "ambulance",
      "arrived,",
      "the",
      "patient",
      "had",
      "already",
      "stabilized."
    ],
    "hint": "'By the time' yan cümlesi Past Simple, ana cümle daha önceki Past Perfect olur.",
    "ruleExplanation": "Geçmişteki bir andan önce tamamlanmış olaylar Past Perfect (had + V3) ile ifade edilir."
  },
  {
    "id": "scramble-b1-8",
    "level": "B1",
    "grammarTopicId": "b1-passive-voice",
    "topicName": "Passive Voice (Geniş Zaman Edilgen)",
    "tr": "İngilizce tüm dünyada milyonlarca insan tarafından konuşulur.",
    "targetEng": "English is spoken by millions of people all over the world.",
    "tokens": [
      "English",
      "is",
      "spoken",
      "by",
      "millions",
      "of",
      "people",
      "all",
      "over",
      "the",
      "world."
    ],
    "hint": "Geniş zaman edilgen yapı: 'is/are + V3'.",
    "ruleExplanation": "Geniş zamanda edilgen yapı nesne odaklıdır: 'is/are + fiilin 3. hali (V3)'."
  },
  {
    "id": "scramble-b1-9",
    "level": "B1",
    "grammarTopicId": "b1-conditionals",
    "topicName": "First Conditional (Tip 1 Gerçek Şart)",
    "tr": "Yarın yağmur yağarsa açık hava konserini iptal edeceğiz.",
    "targetEng": "If it rains tomorrow, we will cancel the open-air concert.",
    "tokens": [
      "If",
      "it",
      "rains",
      "tomorrow,",
      "we",
      "will",
      "cancel",
      "the",
      "open-air",
      "concert."
    ],
    "hint": "Tip 1 şart cümlesi: 'If + Present Simple, will + V1'.",
    "ruleExplanation": "Geleceğe yönelik olası şart ve sonuçlar için First Conditional (If + V1, will + V1) kullanılır."
  },
  {
    "id": "scramble-b1-10",
    "level": "B1",
    "grammarTopicId": "b1-conditionals",
    "topicName": "Second Conditional (Piyango Hayali)",
    "tr": "Milli piyangoyu kazansaydım dünyayı gezerdim.",
    "targetEng": "If I won the national lottery, I would travel around the world.",
    "tokens": [
      "If",
      "I",
      "won",
      "the",
      "national",
      "lottery,",
      "I",
      "would",
      "travel",
      "around",
      "the",
      "world."
    ],
    "hint": "Tip 2 hayali durum: 'If + Past Simple, would + V1'.",
    "ruleExplanation": "Şimdiki zamanda gerçekleşmesi imkansız veya hayali durumlar için Second Conditional kullanılır."
  },
  {
    "id": "scramble-b1-11",
    "level": "B1",
    "grammarTopicId": "b1-passive-voice",
    "topicName": "Relative Clauses (Who)",
    "tr": "Sınıfta yanımda oturan kız Norveçlidir.",
    "targetEng": "The girl who sits next to me in class is from Norway.",
    "tokens": [
      "The",
      "girl",
      "who",
      "sits",
      "next",
      "to",
      "me",
      "in",
      "class",
      "is",
      "from",
      "Norway."
    ],
    "hint": "İnsanları nitelemek için 'who' ilgi zamiri kullanılır.",
    "ruleExplanation": "İnsan isimlerinden sonra gelen sıfat cümleciklerinde özne konumunda 'who' kullanılır."
  },
  {
    "id": "scramble-b1-12",
    "level": "B1",
    "grammarTopicId": "b1-passive-voice",
    "topicName": "Relative Clauses (Which)",
    "tr": "Geçen hafta satın aldığım dizüstü bilgisayarın olağanüstü pil ömrü var.",
    "targetEng": "The laptop which I purchased last week has exceptional battery life.",
    "tokens": [
      "The",
      "laptop",
      "which",
      "I",
      "purchased",
      "last",
      "week",
      "has",
      "exceptional",
      "battery",
      "life."
    ],
    "hint": "Cansız nesneleri nitelemek için 'which' kullanılır.",
    "ruleExplanation": "Cansız varlıkları ve hayvanları tanımlayan sıfat cümleciklerinde 'which' ilgi zamiri kullanılır."
  },
  {
    "id": "scramble-b1-13",
    "level": "B1",
    "grammarTopicId": "b1-present-perfect",
    "topicName": "Modals of Deduction (Güçlü Çıkarım)",
    "tr": "Tam bir maraton koştuktan sonra çok bitkin olmalı.",
    "targetEng": "He must be very exhausted after running a full marathon.",
    "tokens": [
      "He",
      "must",
      "be",
      "very",
      "exhausted",
      "after",
      "running",
      "a",
      "full",
      "marathon."
    ],
    "hint": "Güçlü mantıksal çıkarım için 'must + be' kullanılır.",
    "ruleExplanation": "Eldeki güçlü bir kanıta dayanarak yüksek olasılıklı çıkarım yaparken 'must + V1' kullanılır."
  },
  {
    "id": "scramble-b1-14",
    "level": "B1",
    "grammarTopicId": "b1-present-perfect",
    "topicName": "Modals of Deduction (İmkansızlık)",
    "tr": "Ofiste olması imkansız çünkü şu anda tatilde.",
    "targetEng": "She cannot be at the office because she is currently on vacation.",
    "tokens": [
      "She",
      "cannot",
      "be",
      "at",
      "the",
      "office",
      "because",
      "she",
      "is",
      "currently",
      "on",
      "vacation."
    ],
    "hint": "İmkansızlık çıkarımında 'cannot be' kullanılır.",
    "ruleExplanation": "Mantıksal olarak imkansız bir durumu belirtmek için 'can't / cannot + V1' kullanılır."
  },
  {
    "id": "scramble-b1-15",
    "level": "B1",
    "grammarTopicId": "b1-present-perfect",
    "topicName": "Present Perfect with Since",
    "tr": "Liseden mezun olduğumuzdan beri çocukluk arkadaşımı görmedim.",
    "targetEng": "I have not seen my childhood friend since we graduated from high school.",
    "tokens": [
      "I",
      "have",
      "not",
      "seen",
      "my",
      "childhood",
      "friend",
      "since",
      "we",
      "graduated",
      "from",
      "high",
      "school."
    ],
    "hint": "'Since' geçmişteki belirli bir başlangıç noktasını belirtir.",
    "ruleExplanation": "'Since' bağlacından sonra Past Simple bir olay, ana cümlede Present Perfect kullanılır."
  },
  {
    "id": "scramble-b2-1",
    "level": "B2",
    "grammarTopicId": "b2-third-mixed-conditionals",
    "topicName": "Third Conditional",
    "tr": "Daha erken çıkmış olsaydık uçağı kaçırmamış olurduk.",
    "targetEng": "If we had left earlier, we would not have missed the flight.",
    "tokens": [
      "If",
      "we",
      "had",
      "left",
      "earlier,",
      "we",
      "would",
      "not",
      "have",
      "missed",
      "the",
      "flight."
    ],
    "hint": "Geçmişe yönelik gerçekleşmemiş şart: 'had + V3 ➔ would have + V3'.",
    "ruleExplanation": "Third Conditional geçmişte yaşanmış bitmiş olayların tersini kurgularken kullanılır."
  },
  {
    "id": "scramble-b2-2",
    "level": "B2",
    "grammarTopicId": "b2-reported-speech",
    "topicName": "Reported Speech",
    "tr": "Müdür ertesi gün yeni bir ofise taşınacağını bana söyledi.",
    "targetEng": "The manager told me that he would move to a new office the following day.",
    "tokens": [
      "The",
      "manager",
      "told",
      "me",
      "that",
      "he",
      "would",
      "move",
      "to",
      "a",
      "new",
      "office",
      "the",
      "following",
      "day."
    ],
    "hint": "will ➔ would, tomorrow ➔ the following day dönüşür.",
    "ruleExplanation": "Dolaylı anlatımda zamanlar ve zaman zarfları bir derece geçmişe aktarılır."
  },
  {
    "id": "scramble-b2-3",
    "level": "B2",
    "grammarTopicId": "b2-relative-clauses",
    "topicName": "Defining Relative Clauses",
    "tr": "Tedaviyi keşfeden bilim insanı prestijli bir ödül kazandı.",
    "targetEng": "The scientist who discovered the cure won a prestigious award.",
    "tokens": [
      "The",
      "scientist",
      "who",
      "discovered",
      "the",
      "cure",
      "won",
      "a",
      "prestigious",
      "award."
    ],
    "hint": "İnsan özneyi niteleyen sıfat cümleciğinde 'who' kullanılır.",
    "ruleExplanation": "Belirleyici sıfat cümleciklerinde insanları tanımlamak için virgül olmadan 'who' kullanılır."
  },
  {
    "id": "scramble-b2-4",
    "level": "B2",
    "grammarTopicId": "b2-wish-clauses",
    "topicName": "Wish Clauses (Şimdiki Zaman Dileği)",
    "tr": "Keşke kendi şirketimi kuracak daha fazla cesaretim olsaydı.",
    "targetEng": "I wish I had more courage to start my own company.",
    "tokens": [
      "I",
      "wish",
      "I",
      "had",
      "more",
      "courage",
      "to",
      "start",
      "my",
      "own",
      "company."
    ],
    "hint": "Şu anki durumun tersini dilerken 'wish + Past Simple' kullanılır.",
    "ruleExplanation": "Wish clauses yapısında şu anki bir arzu için fiil Past Simple'a çekilir (have ➔ had)."
  },
  {
    "id": "scramble-b2-5",
    "level": "B2",
    "grammarTopicId": "b2-third-mixed-conditionals",
    "topicName": "Inversion (Devrik Şart)",
    "tr": "Yoğun trafik sıkışıklığını bilseydim metroya binerdim.",
    "targetEng": "Had I known about the severe traffic jam, I would have taken the subway.",
    "tokens": [
      "Had",
      "I",
      "known",
      "about",
      "the",
      "severe",
      "traffic",
      "jam,",
      "I",
      "would",
      "have",
      "taken",
      "the",
      "subway."
    ],
    "hint": "Devrik şart yapısında 'If' kalkar ve 'Had' cümlenin başına gelir.",
    "ruleExplanation": "Üçüncü tip şart cümlelerinde devriklik 'Had + Özne + V3' dizilimiyle kurulur."
  },
  {
    "id": "scramble-b2-6",
    "level": "B2",
    "grammarTopicId": "b2-third-mixed-conditionals",
    "topicName": "Inversion with Seldom",
    "tr": "Böylesine olağanüstü bir müzik performansına nadiren şahit oldum.",
    "targetEng": "Seldom have I witnessed such an extraordinary musical performance.",
    "tokens": [
      "Seldom",
      "have",
      "I",
      "witnessed",
      "such",
      "an",
      "extraordinary",
      "musical",
      "performance."
    ],
    "hint": "Olumsuz zarf (Seldom) başa geldiğinde yardımcı fiil özneden önce gelir.",
    "ruleExplanation": "'Seldom, rarely, hardly' gibi zarflar cümlenin başına geldiğinde cümle soru formatında devrik olur."
  },
  {
    "id": "scramble-b2-7",
    "level": "B2",
    "grammarTopicId": "b2-third-mixed-conditionals",
    "topicName": "Mixed Conditionals",
    "tr": "Londra'daki iş teklifini kabul etmiş olsaydı bugün yurtdışında yaşıyor olurdu.",
    "targetEng": "If she had taken the job offer in London, she would be living abroad today.",
    "tokens": [
      "If",
      "she",
      "had",
      "taken",
      "the",
      "job",
      "offer",
      "in",
      "London,",
      "she",
      "would",
      "be",
      "living",
      "abroad",
      "today."
    ],
    "hint": "Geçmişteki şartın (had taken) bugünkü sonucu (would be living).",
    "ruleExplanation": "Geçmişteki bir seçimin şimdiki sonucunu ifade etmek için Mixed Conditional (Past Perfect ➔ would + V1) kullanılır."
  },
  {
    "id": "scramble-b2-8",
    "level": "B2",
    "grammarTopicId": "b2-third-mixed-conditionals",
    "topicName": "Advanced Passive (Reporting Verb)",
    "tr": "Yeni gökdelenin ünlü bir Japon mimar tarafından tasarlandığı bildiriliyor.",
    "targetEng": "The new skyscraper is reported to have been designed by a famous Japanese architect.",
    "tokens": [
      "The",
      "new",
      "skyscraper",
      "is",
      "reported",
      "to",
      "have",
      "been",
      "designed",
      "by",
      "a",
      "famous",
      "Japanese",
      "architect."
    ],
    "hint": "Geçmiş eylemi bildiren edilgen yapı: 'is reported to have been + V3'.",
    "ruleExplanation": "Aktarma fiillerinde geçmişte tamamlanmış edilgen durum 'to have been + V3' kalıbıyla aktarılır."
  },
  {
    "id": "scramble-b2-9",
    "level": "B2",
    "grammarTopicId": "b2-reported-speech",
    "topicName": "Reported Speech (Whether / Soru)",
    "tr": "Bana yıllık gala yemeğinde kendisine eşlik edip etmeyeceğimi sordu.",
    "targetEng": "She asked me whether I would accompany her to the annual gala dinner.",
    "tokens": [
      "She",
      "asked",
      "me",
      "whether",
      "I",
      "would",
      "accompany",
      "her",
      "to",
      "the",
      "annual",
      "gala",
      "dinner."
    ],
    "hint": "Dolaylı sorularda 'if / whether' kullanılır ve fiil bir derece geçmişe kayar.",
    "ruleExplanation": "Yes/No soruları Reported Speech aktarılırken 'asked + whether/if + düz cümle dizilimi' uygulanır."
  },
  {
    "id": "scramble-b2-10",
    "level": "B2",
    "grammarTopicId": "b2-reported-speech",
    "topicName": "Reported Speech (Backshift)",
    "tr": "CEO şirketin rekor çeyrek kârı elde ettiğini duyurdu.",
    "targetEng": "The CEO announced that the company had achieved record quarterly profits.",
    "tokens": [
      "The",
      "CEO",
      "announced",
      "that",
      "the",
      "company",
      "had",
      "achieved",
      "record",
      "quarterly",
      "profits."
    ],
    "hint": "Geçmişte söylenen söz aktarılırken Present Perfect 'had achieved'e dönüşür.",
    "ruleExplanation": "Dolaylı aktarımda zamanlar bir derece geçmişe kaydırılır (Backshift): Present/Past ➔ Past Perfect."
  },
  {
    "id": "scramble-b2-11",
    "level": "B2",
    "grammarTopicId": "b2-relative-clauses",
    "topicName": "Non-defining Relative Clauses (Whose)",
    "tr": "Çığır açan araştırması dün yayımlanan Dr. Smith bir konuşma yapacak.",
    "targetEng": "Dr. Smith, whose groundbreaking research was published yesterday, will give a speech.",
    "tokens": [
      "Dr.",
      "Smith,",
      "whose",
      "groundbreaking",
      "research",
      "was",
      "published",
      "yesterday,",
      "will",
      "give",
      "a",
      "speech."
    ],
    "hint": "Ek bilgi veren sıfat cümleciklerinde iki virgül arasında 'whose' kullanılır.",
    "ruleExplanation": "Aitlik bildiren sıfat cümleciklerinde 'whose + isim' yapısı kullanılır ve ek bilgiyse virgülle ayrılır."
  },
  {
    "id": "scramble-b2-12",
    "level": "B2",
    "grammarTopicId": "b2-wish-clauses",
    "topicName": "Wish Clauses (Şikayet - Would)",
    "tr": "Raporumu sunarken sözümü kesmeyi bıraksan ne iyi olur (Keşke kessen).",
    "targetEng": "I wish you would stop interrupting me while I am presenting my report.",
    "tokens": [
      "I",
      "wish",
      "you",
      "would",
      "stop",
      "interrupting",
      "me",
      "while",
      "I",
      "am",
      "presenting",
      "my",
      "report."
    ],
    "hint": "Başkalarının rahatsız edici bir eylemi sonlandırmasını isterken 'wish + would' kullanılır.",
    "ruleExplanation": "Karşı tarafın davranışına yönelik şikayet ve değişiklik dileklerinde 'wish + would + V1' kalıbı kullanılır."
  },
  {
    "id": "scramble-b2-13",
    "level": "B2",
    "grammarTopicId": "b2-wish-clauses",
    "topicName": "If Only (Geçmiş Pişmanlık)",
    "tr": "Keşke on yıl önce sürdürülebilir yeşil teknolojilere yatırım yapmış olsaydım!",
    "targetEng": "If only I had invested in sustainable green technologies a decade ago!",
    "tokens": [
      "If",
      "only",
      "I",
      "had",
      "invested",
      "in",
      "sustainable",
      "green",
      "technologies",
      "a",
      "decade",
      "ago!"
    ],
    "hint": "Geçmişe yönelik derin pişmanlık bildirmek için 'If only + Past Perfect' kullanılır.",
    "ruleExplanation": "Geçmişte değiştirilemeyen olaylara duyulan pişmanlıkta 'If only + had + V3' kalıbı kullanılır."
  },
  {
    "id": "scramble-b2-14",
    "level": "B2",
    "grammarTopicId": "b2-third-mixed-conditionals",
    "topicName": "Inversion (Not only... but also)",
    "tr": "Projeyi planlanandan önce tamamlamakla kalmadı, aynı zamanda maliyetleri de düşürdü.",
    "targetEng": "Not only did he complete the project ahead of schedule, but he also cut costs.",
    "tokens": [
      "Not",
      "only",
      "did",
      "he",
      "complete",
      "the",
      "project",
      "ahead",
      "of",
      "schedule,",
      "but",
      "he",
      "also",
      "cut",
      "costs."
    ],
    "hint": "'Not only' cümle başında devriklik yapar: 'did he complete'.",
    "ruleExplanation": "'Not only' cümleye başladığında ilk cümle soru yapısında devrik (did + özne + V1) kurulur."
  },
  {
    "id": "scramble-b2-15",
    "level": "B2",
    "grammarTopicId": "b2-third-mixed-conditionals",
    "topicName": "Inversion (Under no circumstances)",
    "tr": "Gizli müşteri verileri hiçbir koşulda üçüncü şahıslarla paylaşılmamalıdır.",
    "targetEng": "Under no circumstances should confidential customer data be shared with third parties.",
    "tokens": [
      "Under",
      "no",
      "circumstances",
      "should",
      "confidential",
      "customer",
      "data",
      "be",
      "shared",
      "with",
      "third",
      "parties."
    ],
    "hint": "'Under no circumstances' devrik yapı gerektirir: 'should data be shared'.",
    "ruleExplanation": "Kısıtlayıcı olumsuz edat öbekleri cümle başında yardımcı fiili özneden önceye çeker."
  }
];
