export interface WordRelationItem {
  word: string;
  tr: string;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
}

export interface WordRelationEntry {
  id: string;
  word: string; // UPPERCASE e.g. "BIG"
  tr: string;   // Turkish meaning e.g. "büyük, kocaman"
  level: 'A1' | 'A2' | 'B1' | 'B2';
  category: 'Sıfat (Adjective)' | 'Fiil (Verb)' | 'İsim (Noun)' | 'Zarf (Adverb)';
  exampleEng?: string;
  exampleTr?: string;
  synonyms: WordRelationItem[];
  antonyms: WordRelationItem[];
}

export const WORD_RELATIONS: WordRelationEntry[] = [
  // ================= A1 SEVİYESİ =================
  {
    id: 'a1_big',
    word: 'BIG',
    tr: 'büyük, iri, kocaman',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'They live in a big house with a garden.',
    exampleTr: 'Bahçeli büyük bir evde yaşıyorlar.',
    synonyms: [
      { word: 'LARGE', tr: 'geniş, büyük', level: 'A1' },
      { word: 'HUGE', tr: 'kocaman, devasa', level: 'A2' },
      { word: 'ENORMOUS', tr: 'muazzam, aşırı büyük', level: 'B1' }
    ],
    antonyms: [
      { word: 'SMALL', tr: 'küçük, ufak', level: 'A1' },
      { word: 'LITTLE', tr: 'küçük, az', level: 'A1' },
      { word: 'TINY', tr: 'minik, ufacık', level: 'A2' }
    ]
  },
  {
    id: 'a1_small',
    word: 'SMALL',
    tr: 'küçük, ufak',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'A small bird was singing on the branch.',
    exampleTr: 'Daldaki küçük bir kuş şarkı söylüyordu.',
    synonyms: [
      { word: 'LITTLE', tr: 'küçük, minik', level: 'A1' },
      { word: 'TINY', tr: 'ufacık, minik', level: 'A2' },
      { word: 'PETITE', tr: 'ufak tefek, minyon', level: 'B1' }
    ],
    antonyms: [
      { word: 'BIG', tr: 'büyük, kocaman', level: 'A1' },
      { word: 'LARGE', tr: 'büyük, geniş', level: 'A1' },
      { word: 'HUGE', tr: 'devasa', level: 'A2' }
    ]
  },
  {
    id: 'a1_hot',
    word: 'HOT',
    tr: 'sıcak, acı',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The soup is very hot, please be careful.',
    exampleTr: 'Çorba çok sıcak, lütfen dikkatli ol.',
    synonyms: [
      { word: 'WARM', tr: 'ılık, sıcak', level: 'A1' },
      { word: 'BOILING', tr: 'kaynar, çok sıcak', level: 'A2' },
      { word: 'SCORCHING', tr: 'kavurucu, yakıcı', level: 'B2' }
    ],
    antonyms: [
      { word: 'COLD', tr: 'soğuk', level: 'A1' },
      { word: 'COOL', tr: 'serin', level: 'A2' },
      { word: 'FREEZING', tr: 'dondurucu soğuk', level: 'B1' }
    ]
  },
  {
    id: 'a1_cold',
    word: 'COLD',
    tr: 'soğuk, üşütücü',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'It is very cold outside in winter.',
    exampleTr: 'Kışın dışarısı çok soğuktur.',
    synonyms: [
      { word: 'COOL', tr: 'serin, serinletici', level: 'A2' },
      { word: 'CHILLY', tr: 'ürpertici soğuk', level: 'B1' },
      { word: 'FREEZING', tr: 'buz gibi, dondurucu', level: 'B1' }
    ],
    antonyms: [
      { word: 'HOT', tr: 'sıcak', level: 'A1' },
      { word: 'WARM', tr: 'ılık, sıcak', level: 'A1' },
      { word: 'BOILING', tr: 'kaynar, aşırı sıcak', level: 'A2' }
    ]
  },
  {
    id: 'a1_happy',
    word: 'HAPPY',
    tr: 'mutlu, sevinçli, neşeli',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The children were very happy with their gifts.',
    exampleTr: 'Çocuklar hediyelerinden ötürü çok mutluydu.',
    synonyms: [
      { word: 'GLAD', tr: 'memnun, hoşnut', level: 'A1' },
      { word: 'JOYFUL', tr: 'neşeli, sevinç dolu', level: 'A2' },
      { word: 'CHEERFUL', tr: 'şen, neşeli', level: 'B1' },
      { word: 'DELIGHTED', tr: 'büyük mutluluk duyan', level: 'B1' }
    ],
    antonyms: [
      { word: 'SAD', tr: 'üzgün, hüzünlü', level: 'A1' },
      { word: 'UNHAPPY', tr: 'mutsuz, keyifsiz', level: 'A1' },
      { word: 'SORROWFUL', tr: 'kederli, yaslı', level: 'B2' }
    ]
  },
  {
    id: 'a1_sad',
    word: 'SAD',
    tr: 'üzgün, kederli, hüzünlü',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Why do you look so sad today?',
    exampleTr: 'Bugün neden bu kadar üzgün görünüyorsun?',
    synonyms: [
      { word: 'UNHAPPY', tr: 'mutsuz', level: 'A1' },
      { word: 'UPSET', tr: 'morali bozuk, üzgün', level: 'A2' },
      { word: 'DEPRESSED', tr: 'bunalımlı, çökkün', level: 'B1' },
      { word: 'GLOOMY', tr: 'kasvetli, hüzünlü', level: 'B1' }
    ],
    antonyms: [
      { word: 'HAPPY', tr: 'mutlu, sevinçli', level: 'A1' },
      { word: 'CHEERFUL', tr: 'neşeli, keyifli', level: 'B1' },
      { word: 'JOYFUL', tr: 'sevinç dolu', level: 'A2' }
    ]
  },
  {
    id: 'a1_fast',
    word: 'FAST',
    tr: 'hızlı, süratli, çabuk',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'He runs very fast to catch the bus.',
    exampleTr: 'Otobüse yetişmek için çok hızlı koşar.',
    synonyms: [
      { word: 'QUICK', tr: 'çabuk, tez', level: 'A1' },
      { word: 'RAPID', tr: 'süratli, seri', level: 'B1' },
      { word: 'SWIFT', tr: 'seri, tez elden', level: 'B2' }
    ],
    antonyms: [
      { word: 'SLOW', tr: 'yavaş, ağır', level: 'A1' },
      { word: 'SLUGGISH', tr: 'ağırkanlı, uyuşuk', level: 'B2' }
    ]
  },
  {
    id: 'a1_slow',
    word: 'SLOW',
    tr: 'yavaş, ağır',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Turtles are famously slow animals.',
    exampleTr: 'Kaplumbağalar meşhur yavaş hayvanlardır.',
    synonyms: [
      { word: 'GRADUAL', tr: 'kademeli, yavaş yavaş', level: 'B1' },
      { word: 'UNHURRIED', tr: 'telaşsız, sakin', level: 'B2' }
    ],
    antonyms: [
      { word: 'FAST', tr: 'hızlı, çabuk', level: 'A1' },
      { word: 'QUICK', tr: 'çabuk, seri', level: 'A1' },
      { word: 'RAPID', tr: 'süratli', level: 'B1' }
    ]
  },
  {
    id: 'a1_easy',
    word: 'EASY',
    tr: 'kolay, zahmetsiz',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The English test was surprisingly easy.',
    exampleTr: 'İngilizce sınavı şaşırtıcı derecede kolaydı.',
    synonyms: [
      { word: 'SIMPLE', tr: 'basit, yalın', level: 'A1' },
      { word: 'EFFORTLESS', tr: 'zahmetsiz, emeksiz', level: 'B2' },
      { word: 'STRAIGHTFORWARD', tr: 'anlaşılır, dolaysız', level: 'B2' }
    ],
    antonyms: [
      { word: 'HARD', tr: 'zor, çetin', level: 'A1' },
      { word: 'DIFFICULT', tr: 'zor, güç', level: 'A2' },
      { word: 'COMPLICATED', tr: 'karmaşık, çetrefilli', level: 'B1' }
    ]
  },
  {
    id: 'a1_hard',
    word: 'HARD',
    tr: 'zor, sert, katı',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Learning a new language is hard but rewarding.',
    exampleTr: 'Yeni bir dil öğrenmek zordur ama karşılığını verir.',
    synonyms: [
      { word: 'DIFFICULT', tr: 'zor, çetin', level: 'A2' },
      { word: 'TOUGH', tr: 'zorlu, sert', level: 'B1' },
      { word: 'SOLID', tr: 'katı, sert, dayanıklı', level: 'A2' }
    ],
    antonyms: [
      { word: 'EASY', tr: 'kolay', level: 'A1' },
      { word: 'SIMPLE', tr: 'basit', level: 'A1' },
      { word: 'SOFT', tr: 'yumuşak', level: 'A1' }
    ]
  },
  {
    id: 'a1_good',
    word: 'GOOD',
    tr: 'iyi, güzel, hoş, kaliteli',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'She did a very good job on the project.',
    exampleTr: 'Projeyle ilgili çok iyi bir iş çıkardı.',
    synonyms: [
      { word: 'FINE', tr: 'iyi, hoş, güzel', level: 'A1' },
      { word: 'GREAT', tr: 'harika, muhteşem', level: 'A1' },
      { word: 'EXCELLENT', tr: 'mükemmel, kusursuz', level: 'A2' },
      { word: 'WONDERFUL', tr: 'harikulade', level: 'A2' }
    ],
    antonyms: [
      { word: 'BAD', tr: 'kötü, fena', level: 'A1' },
      { word: 'POOR', tr: 'yetersiz, kötü, fakir', level: 'A1' },
      { word: 'TERRIBLE', tr: 'berbat, korkunç', level: 'A2' }
    ]
  },
  {
    id: 'a1_bad',
    word: 'BAD',
    tr: 'kötü, fena, zararlı',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Eating too much sugar is bad for your teeth.',
    exampleTr: 'Çok fazla şeker yemek dişleriniz için kötüdür.',
    synonyms: [
      { word: 'POOR', tr: 'yetersiz, kalitesiz', level: 'A1' },
      { word: 'TERRIBLE', tr: 'berbat, felaket', level: 'A2' },
      { word: 'AWFUL', tr: 'berbat, çok kötü', level: 'B1' }
    ],
    antonyms: [
      { word: 'GOOD', tr: 'iyi, güzel', level: 'A1' },
      { word: 'FINE', tr: 'iyi, hoş', level: 'A1' },
      { word: 'GREAT', tr: 'harika', level: 'A1' }
    ]
  },
  {
    id: 'a1_new',
    word: 'NEW',
    tr: 'yeni, taze, çağdaş',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'I bought a new pair of shoes yesterday.',
    exampleTr: 'Dün yeni bir çift ayakkabı aldım.',
    synonyms: [
      { word: 'RECENT', tr: 'son, yakın zamandaki', level: 'A2' },
      { word: 'MODERN', tr: 'çağdaş, modern', level: 'A2' },
      { word: 'FRESH', tr: 'taze, yeni', level: 'A2' }
    ],
    antonyms: [
      { word: 'OLD', tr: 'eski, yaşlı', level: 'A1' },
      { word: 'ANCIENT', tr: 'antik, çok eski', level: 'B1' },
      { word: 'OUTDATED', tr: 'modası geçmiş, eski', level: 'B2' }
    ]
  },
  {
    id: 'a1_old',
    word: 'OLD',
    tr: 'eski, yaşlı, ihtiyar',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'This castle is hundreds of years old.',
    exampleTr: 'Bu kale yüzlerce yıllık eskidir.',
    synonyms: [
      { word: 'AGED', tr: 'yaşlı, kıdemli', level: 'B1' },
      { word: 'ELDERLY', tr: 'yaşlı, aksakallı', level: 'B1' },
      { word: 'ANCIENT', tr: 'antik, kadim', level: 'B1' }
    ],
    antonyms: [
      { word: 'NEW', tr: 'yeni', level: 'A1' },
      { word: 'YOUNG', tr: 'genç', level: 'A1' },
      { word: 'MODERN', tr: 'modern, çağdaş', level: 'A2' }
    ]
  },
  {
    id: 'a1_start',
    word: 'START',
    tr: 'başlamak, başlatmak',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'The movie will start in ten minutes.',
    exampleTr: 'Film on dakika içinde başlayacak.',
    synonyms: [
      { word: 'BEGIN', tr: 'başlamak', level: 'A1' },
      { word: 'COMMENCE', tr: 'resmen başlamak', level: 'B2' },
      { word: 'INITIATE', tr: 'başlatmak, girişmek', level: 'B2' }
    ],
    antonyms: [
      { word: 'FINISH', tr: 'bitirmek, tamamlamak', level: 'A1' },
      { word: 'END', tr: 'sona ermek, bitmek', level: 'A1' },
      { word: 'STOP', tr: 'durmak, kesmek', level: 'A1' }
    ]
  },
  {
    id: 'a1_finish',
    word: 'FINISH',
    tr: 'bitirmek, tamamlamak, sona ermek',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'Please finish your homework before dinner.',
    exampleTr: 'Lütfen akşam yemeğinden önce ödevini bitir.',
    synonyms: [
      { word: 'END', tr: 'sonlandırmak, bitmek', level: 'A1' },
      { word: 'COMPLETE', tr: 'tamamlamak', level: 'A2' },
      { word: 'CONCLUDE', tr: 'sonuçlandırmak', level: 'B1' }
    ],
    antonyms: [
      { word: 'START', tr: 'başlamak', level: 'A1' },
      { word: 'BEGIN', tr: 'başlamak', level: 'A1' },
      { word: 'COMMENCE', tr: 'başlamak', level: 'B2' }
    ]
  },
  {
    id: 'a1_open',
    word: 'OPEN',
    tr: 'açık; açmak',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Please leave the door open.',
    exampleTr: 'Lütfen kapıyı açık bırakın.',
    synonyms: [
      { word: 'UNLOCKED', tr: 'kilitsiz, açık', level: 'A2' },
      { word: 'ACCESSIBLE', tr: 'erişilebilir, açık', level: 'B1' }
    ],
    antonyms: [
      { word: 'CLOSED', tr: 'kapalı', level: 'A1' },
      { word: 'SHUT', tr: 'kapanmış, örtülü', level: 'A2' },
      { word: 'LOCKED', tr: 'kilitli', level: 'A2' }
    ]
  },
  {
    id: 'a1_close',
    word: 'CLOSE',
    tr: 'kapatmak; yakın',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'Close the window because the wind is strong.',
    exampleTr: 'Rüzgar güçlü olduğu için pencereyi kapat.',
    synonyms: [
      { word: 'SHUT', tr: 'kapatmak, örtmek', level: 'A2' },
      { word: 'LOCK', tr: 'kilitlemek', level: 'A2' },
      { word: 'SEAL', tr: 'mühürlemek, sımsıkı kapatmak', level: 'B2' }
    ],
    antonyms: [
      { word: 'OPEN', tr: 'açmak; açık', level: 'A1' },
      { word: 'UNLOCK', tr: 'kilidini açmak', level: 'A2' }
    ]
  },
  {
    id: 'a1_love',
    word: 'LOVE',
    tr: 'sevmek, aşık olmak; sevgi, aşk',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'I love spending time in nature.',
    exampleTr: 'Doğada vakit geçirmeyi çok seviyorum.',
    synonyms: [
      { word: 'LIKE', tr: 'beğenmek, hoşlanmak', level: 'A1' },
      { word: 'ADORE', tr: 'taparcasına sevmek', level: 'B1' },
      { word: 'CHERISH', tr: 'el üstünde tutmak, sevmek', level: 'B2' }
    ],
    antonyms: [
      { word: 'HATE', tr: 'nefret etmek', level: 'A1' },
      { word: 'DISLIKE', tr: 'hoşlanmamak', level: 'A2' },
      { word: 'DETEST', tr: 'iğrenmek, tiksinmek', level: 'B2' }
    ]
  },
  {
    id: 'a1_hate',
    word: 'HATE',
    tr: 'nefret etmek, hiç sevmemek',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'He hates waking up early on Sundays.',
    exampleTr: 'Pazar günleri erken uyanmaktan nefret eder.',
    synonyms: [
      { word: 'DISLIKE', tr: 'sevmemek', level: 'A2' },
      { word: 'LOATHE', tr: 'tiksinti duymak', level: 'B2' },
      { word: 'DETEST', tr: 'nefretle karşılamak', level: 'B2' }
    ],
    antonyms: [
      { word: 'LOVE', tr: 'sevmek, aşık olmak', level: 'A1' },
      { word: 'LIKE', tr: 'beğenmek', level: 'A1' },
      { word: 'ADORE', tr: 'çok sevmek', level: 'B1' }
    ]
  },
  {
    id: 'a1_buy',
    word: 'BUY',
    tr: 'satın almak',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'She wants to buy a new bicycle.',
    exampleTr: 'Yeni bir bisiklet satın almak istiyor.',
    synonyms: [
      { word: 'PURCHASE', tr: 'satın almak, temin etmek', level: 'B1' },
      { word: 'ACQUIRE', tr: 'edinmek, elde etmek', level: 'B2' }
    ],
    antonyms: [
      { word: 'SELL', tr: 'satmak', level: 'A1' },
      { word: 'VEND', tr: 'satışa sunmak', level: 'B2' }
    ]
  },
  {
    id: 'a1_sell',
    word: 'SELL',
    tr: 'satmak, elden çıkarmak',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'They decided to sell their old car.',
    exampleTr: 'Eski arabalarını satmaya karar verdiler.',
    synonyms: [
      { word: 'TRADE', tr: 'ticaretini yapmak', level: 'B1' },
      { word: 'MARKET', tr: 'pazarlamak', level: 'B1' }
    ],
    antonyms: [
      { word: 'BUY', tr: 'satın almak', level: 'A1' },
      { word: 'PURCHASE', tr: 'satın almak', level: 'B1' }
    ]
  },
  {
    id: 'a1_day',
    word: 'DAY',
    tr: 'gündüz, gün',
    level: 'A1',
    category: 'İsim (Noun)',
    exampleEng: 'The flowers open during the day.',
    exampleTr: 'Çiçekler gündüzleri açar.',
    synonyms: [
      { word: 'DAYTIME', tr: 'gündüz vakti', level: 'A2' },
      { word: 'DAYLIGHT', tr: 'gün ışığı', level: 'B1' }
    ],
    antonyms: [
      { word: 'NIGHT', tr: 'gece', level: 'A1' },
      { word: 'DARKNESS', tr: 'karanlık', level: 'A2' }
    ]
  },
  {
    id: 'a1_clean',
    word: 'CLEAN',
    tr: 'temiz; temizlemek',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Always keep your hands clean before eating.',
    exampleTr: 'Yemek yemeden önce ellerinizi daima temiz tutun.',
    synonyms: [
      { word: 'TIDY', tr: 'düzenli, derli toplu', level: 'A2' },
      { word: 'SPOTLESS', tr: 'lekesiz, tertemiz', level: 'B2' },
      { word: 'PURE', tr: 'saf, katkısız', level: 'B1' }
    ],
    antonyms: [
      { word: 'DIRTY', tr: 'kirli, pis', level: 'A1' },
      { word: 'MESSY', tr: 'dağınık, pis', level: 'A2' },
      { word: 'FILTHY', tr: 'pislik içinde, çok kirli', level: 'B2' }
    ]
  },
  {
    id: 'a1_dirty',
    word: 'DIRTY',
    tr: 'kirli, pis, lekeli',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Wash your dirty shoes before entering the house.',
    exampleTr: 'Eve girmeden önce kirli ayakkabılarını yıka.',
    synonyms: [
      { word: 'MESSY', tr: 'dağınık, darmadağın', level: 'A2' },
      { word: 'FILTHY', tr: 'çok pis, leş gibi', level: 'B2' },
      { word: 'STAINED', tr: 'lekeli', level: 'B1' }
    ],
    antonyms: [
      { word: 'CLEAN', tr: 'temiz', level: 'A1' },
      { word: 'SPOTLESS', tr: 'tertemiz, lekesiz', level: 'B2' },
      { word: 'PURE', tr: 'arı, saf', level: 'B1' }
    ]
  },
  {
    id: 'a1_rich',
    word: 'RICH',
    tr: 'zengin, varlıklı',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The city has a rich history and culture.',
    exampleTr: 'Şehrin zengin bir tarihi ve kültürü var.',
    synonyms: [
      { word: 'WEALTHY', tr: 'varlıklı, zengin', level: 'A2' },
      { word: 'PROSPEROUS', tr: 'refah içinde, varsıl', level: 'B2' },
      { word: 'AFFLUENT', tr: 'bolluk içinde', level: 'B2' }
    ],
    antonyms: [
      { word: 'POOR', tr: 'fakir, yoksul', level: 'A1' },
      { word: 'BROKE', tr: 'meteliksiz, parasız', level: 'A2' },
      { word: 'NEEDY', tr: 'muhtaç, yoksul', level: 'B1' }
    ]
  },
  {
    id: 'a1_poor',
    word: 'POOR',
    tr: 'fakir, yoksul, zavallı',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Many poor families need community support.',
    exampleTr: 'Birçok yoksul aile toplum desteğine ihtiyaç duyar.',
    synonyms: [
      { word: 'NEEDY', tr: 'ihtiyaç sahibi, yoksul', level: 'B1' },
      { word: 'BROKE', tr: 'parasız, meteliksiz', level: 'A2' },
      { word: 'PENNILESS', tr: 'beş parasız', level: 'B2' }
    ],
    antonyms: [
      { word: 'RICH', tr: 'zengin, varlıklı', level: 'A1' },
      { word: 'WEALTHY', tr: 'varlıklı', level: 'A2' },
      { word: 'PROSPEROUS', tr: 'müreffeh', level: 'B2' }
    ]
  },
  {
    id: 'a1_strong',
    word: 'STRONG',
    tr: 'güçlü, kuvvetli, dayanıklı',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'He has a strong body and sharp mind.',
    exampleTr: 'Güçlü bir bedeni ve keskin bir zihni var.',
    synonyms: [
      { word: 'POWERFUL', tr: 'kuvvetli, kudretli', level: 'A2' },
      { word: 'MIGHTY', tr: 'azametli, kudretli', level: 'B1' },
      { word: 'STURDY', tr: 'sağlam, dirençli', level: 'B2' }
    ],
    antonyms: [
      { word: 'WEAK', tr: 'zayıf, güçsüz', level: 'A1' },
      { word: 'FRAGILE', tr: 'kırılgan, narin', level: 'B1' },
      { word: 'FEEBLE', tr: 'dermansız, güçsüz', level: 'B2' }
    ]
  },
  {
    id: 'a1_weak',
    word: 'WEAK',
    tr: 'zayıf, güçsüz, dayanıksız',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'I felt weak after having the flu.',
    exampleTr: 'Grip olduktan sonra kendimi güçsüz hissettim.',
    synonyms: [
      { word: 'FRAGILE', tr: 'narin, kolay kırılır', level: 'B1' },
      { word: 'FEEBLE', tr: 'mecalsiz, zayıf', level: 'B2' },
      { word: 'DELICATE', tr: 'hassas, narin', level: 'B1' }
    ],
    antonyms: [
      { word: 'STRONG', tr: 'güçlü, kuvvetli', level: 'A1' },
      { word: 'POWERFUL', tr: 'güçlü', level: 'A2' },
      { word: 'STURDY', tr: 'sağlam', level: 'B2' }
    ]
  },
  {
    id: 'a1_true',
    word: 'TRUE',
    tr: 'doğru, gerçek, hakiki',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Is it true that you are moving abroad?',
    exampleTr: 'Yurt dışına taşınacağınız doğru mu?',
    synonyms: [
      { word: 'CORRECT', tr: 'doğru, hatasız', level: 'A1' },
      { word: 'ACCURATE', tr: 'kesin, tam doğru', level: 'B1' },
      { word: 'REAL', tr: 'gerçek, hakiki', level: 'A1' }
    ],
    antonyms: [
      { word: 'FALSE', tr: 'yanlış, yalan', level: 'A1' },
      { word: 'WRONG', tr: 'yanlış, hatalı', level: 'A1' },
      { word: 'INCORRECT', tr: 'doğru olmayan', level: 'A2' }
    ]
  },
  {
    id: 'a1_right',
    word: 'RIGHT',
    tr: 'doğru, haklı; sağ',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'You made the right choice.',
    exampleTr: 'Doğru seçimi yaptın.',
    synonyms: [
      { word: 'CORRECT', tr: 'doğru', level: 'A1' },
      { word: 'PROPER', tr: 'uygun, düzgün', level: 'B1' },
      { word: 'JUST', tr: 'adil, haklı', level: 'B1' }
    ],
    antonyms: [
      { word: 'WRONG', tr: 'yanlış, hatalı', level: 'A1' },
      { word: 'LEFT', tr: 'sol', level: 'A1' },
      { word: 'INCORRECT', tr: 'yanlış', level: 'A2' }
    ]
  },
  {
    id: 'a1_safe',
    word: 'SAFE',
    tr: 'güvenli, emniyetli, tehlikesiz',
    level: 'A1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Wear a seatbelt to stay safe.',
    exampleTr: 'Güvende kalmak için emniyet kemeri takın.',
    synonyms: [
      { word: 'SECURE', tr: 'emniyetli, korumalı', level: 'B1' },
      { word: 'PROTECTED', tr: 'korunan, korunmuş', level: 'A2' },
      { word: 'HARMLESS', tr: 'zararsız', level: 'B1' }
    ],
    antonyms: [
      { word: 'DANGEROUS', tr: 'tehlikeli', level: 'A2' },
      { word: 'RISKY', tr: 'riskli', level: 'A2' },
      { word: 'HAZARDOUS', tr: 'tehlikeli, zararlı', level: 'B2' }
    ]
  },
  {
    id: 'a1_early',
    word: 'EARLY',
    tr: 'erken, erkenden',
    level: 'A1',
    category: 'Zarf (Adverb)',
    exampleEng: 'We arrived early to get good seats.',
    exampleTr: 'İyi yerler kapmak için erkenden vardık.',
    synonyms: [
      { word: 'SOON', tr: 'yakında, tez vakitte', level: 'A1' },
      { word: 'PROMPT', tr: 'dakik, vaktinde', level: 'B2' }
    ],
    antonyms: [
      { word: 'LATE', tr: 'geç, gecikmiş', level: 'A1' },
      { word: 'DELAYED', tr: 'gecikmeli, rötar yapmış', level: 'A2' }
    ]
  },
  {
    id: 'a1_give',
    word: 'GIVE',
    tr: 'vermek, hediye etmek',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'Can you give me that book on the table?',
    exampleTr: 'Masadaki şu kitabı bana verebilir misin?',
    synonyms: [
      { word: 'OFFER', tr: 'sunmak, teklif etmek', level: 'A2' },
      { word: 'DONATE', tr: 'bağışlamak', level: 'B1' },
      { word: 'PROVIDE', tr: 'sağlamak, temin etmek', level: 'B1' }
    ],
    antonyms: [
      { word: 'TAKE', tr: 'almak, götürmek', level: 'A1' },
      { word: 'RECEIVE', tr: 'teslim almak', level: 'A2' },
      { word: 'GRAB', tr: 'kapmak, yakalamak', level: 'B1' }
    ]
  },
  {
    id: 'a1_come',
    word: 'COME',
    tr: 'gelmek, yaklaşmak',
    level: 'A1',
    category: 'Fiil (Verb)',
    exampleEng: 'Please come here and sit down.',
    exampleTr: 'Lütfen buraya gelin ve oturun.',
    synonyms: [
      { word: 'ARRIVE', tr: 'varmak, ulaşmak', level: 'A2' },
      { word: 'APPROACH', tr: 'yaklaşmak', level: 'B1' }
    ],
    antonyms: [
      { word: 'GO', tr: 'gitmek', level: 'A1' },
      { word: 'LEAVE', tr: 'ayrılmak, terk etmek', level: 'A1' },
      { word: 'DEPART', tr: 'hareket etmek, kalkmak', level: 'B1' }
    ]
  },

  // ================= A2 SEVİYESİ =================
  {
    id: 'a2_beautiful',
    word: 'BEAUTIFUL',
    tr: 'güzel, hoş, harika',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The sunset over the ocean was beautiful.',
    exampleTr: 'Okyanus üzerindeki gün batımı çok güzeldi.',
    synonyms: [
      { word: 'PRETTY', tr: 'hoş, sevimli, güzel', level: 'A1' },
      { word: 'LOVELY', tr: 'sevimli, nefis', level: 'A2' },
      { word: 'GORGEOUS', tr: 'göz alıcı, muhteşem', level: 'B1' },
      { word: 'ATTRACTIVE', tr: 'çekici, alımlı', level: 'B1' }
    ],
    antonyms: [
      { word: 'UGLY', tr: 'çirkin', level: 'A1' },
      { word: 'HIDEOUS', tr: 'iğrenç, korkunç çirkin', level: 'B2' },
      { word: 'UNATTRACTIVE', tr: 'çekici olmayan', level: 'B1' }
    ]
  },
  {
    id: 'a2_ugly',
    word: 'UGLY',
    tr: 'çirkin, göze nahoş gelen',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The old broken building looked very ugly.',
    exampleTr: 'Eski kırık dökük bina çok çirkin görünüyordu.',
    synonyms: [
      { word: 'UNSIGHTLY', tr: 'göz zevkini bozan', level: 'B2' },
      { word: 'HIDEOUS', tr: 'korkunç derecede çirkin', level: 'B2' }
    ],
    antonyms: [
      { word: 'BEAUTIFUL', tr: 'güzel', level: 'A2' },
      { word: 'PRETTY', tr: 'hoş, sevimli', level: 'A1' },
      { word: 'GORGEOUS', tr: 'göz kamaştırıcı', level: 'B1' }
    ]
  },
  {
    id: 'a2_dangerous',
    word: 'DANGEROUS',
    tr: 'tehlikeli, riskli',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'It is dangerous to walk alone in this forest at night.',
    exampleTr: 'Geceleyin bu ormanda tek başına yürümek tehlikelidir.',
    synonyms: [
      { word: 'RISKY', tr: 'riskli, rizikolu', level: 'A2' },
      { word: 'HAZARDOUS', tr: 'tehlikeli, zararlı', level: 'B2' },
      { word: 'PERILOUS', tr: 'büyük tehlikelerle dolu', level: 'B2' }
    ],
    antonyms: [
      { word: 'SAFE', tr: 'güvenli', level: 'A1' },
      { word: 'SECURE', tr: 'korunaklı, emniyetli', level: 'B1' },
      { word: 'HARMLESS', tr: 'zararsız', level: 'B1' }
    ]
  },
  {
    id: 'a2_bright',
    word: 'BRIGHT',
    tr: 'parlak, aydınlık; zeki',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The stars are very bright in the desert sky.',
    exampleTr: 'Çöl gökyüzünde yıldızlar çok parlaktır.',
    synonyms: [
      { word: 'SHINY', tr: 'parıltılı, ışıltılı', level: 'A2' },
      { word: 'LUMINOUS', tr: 'ışık saçan', level: 'B2' },
      { word: 'CLEVER', tr: 'akıllı, zeki', level: 'A2' }
    ],
    antonyms: [
      { word: 'DARK', tr: 'karanlık, koyu', level: 'A1' },
      { word: 'DIM', tr: 'loş, sönük', level: 'B1' },
      { word: 'GLOOMY', tr: 'kasvetli, karanlık', level: 'B1' }
    ]
  },
  {
    id: 'a2_dark',
    word: 'DARK',
    tr: 'karanlık, loş, koyu renk',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The room got completely dark after the power outage.',
    exampleTr: 'Elektrik kesintisinden sonra oda tamamen karanlık oldu.',
    synonyms: [
      { word: 'DIM', tr: 'loş, sönük', level: 'B1' },
      { word: 'GLOOMY', tr: 'kasvetli, puslu', level: 'B1' },
      { word: 'SHADOWY', tr: 'gölgeli', level: 'B2' }
    ],
    antonyms: [
      { word: 'BRIGHT', tr: 'parlak, aydınlık', level: 'A2' },
      { word: 'LIGHT', tr: 'aydınlık, açık renk', level: 'A1' },
      { word: 'SUNNY', tr: 'güneşli', level: 'A1' }
    ]
  },
  {
    id: 'a2_smart',
    word: 'SMART',
    tr: 'zeki, akıllı, şık',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'She is a very smart student who solves problems easily.',
    exampleTr: 'Problemleri kolayca çözen çok zeki bir öğrencidir.',
    synonyms: [
      { word: 'CLEVER', tr: 'zeki, akıllı', level: 'A2' },
      { word: 'INTELLIGENT', tr: 'akıllı, entelektüel', level: 'B1' },
      { word: 'WISE', tr: 'bilge, aklı başında', level: 'B1' }
    ],
    antonyms: [
      { word: 'STUPID', tr: 'aptal, ahmak', level: 'A2' },
      { word: 'FOOLISH', tr: 'akılsızca, budala', level: 'B1' },
      { word: 'SILLY', tr: 'saçma, şapşal', level: 'A2' }
    ]
  },
  {
    id: 'a2_cheap',
    word: 'CHEAP',
    tr: 'ucuz, hesaplı; kalitesiz',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Vegetables are cheaper at the local farmers market.',
    exampleTr: 'Yerel köylü pazarında sebzeler daha ucuzdur.',
    synonyms: [
      { word: 'INEXPENSIVE', tr: 'pahalı olmayan', level: 'A2' },
      { word: 'AFFORDABLE', tr: 'bütçeye uygun, hesaplı', level: 'B1' },
      { word: 'ECONOMICAL', tr: 'ekonomik, tasarruflu', level: 'B1' }
    ],
    antonyms: [
      { word: 'EXPENSIVE', tr: 'pahalı, maliyetli', level: 'A1' },
      { word: 'PRICEY', tr: 'tuzlu, pahalıca', level: 'B1' },
      { word: 'COSTLY', tr: 'masraflı, pahalı', level: 'B2' }
    ]
  },
  {
    id: 'a2_expensive',
    word: 'EXPENSIVE',
    tr: 'pahalı, yüksek fiyatlı',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Eating at luxury restaurants can be very expensive.',
    exampleTr: 'Lüks restoranlarda yemek çok pahalı olabilir.',
    synonyms: [
      { word: 'COSTLY', tr: 'masraflı, pahalı', level: 'B2' },
      { word: 'PRICEY', tr: 'fiyatı yüksek', level: 'B1' },
      { word: 'VALUABLE', tr: 'değerli, kıymetli', level: 'B1' }
    ],
    antonyms: [
      { word: 'CHEAP', tr: 'ucuz', level: 'A2' },
      { word: 'INEXPENSIVE', tr: 'pahalı olmayan', level: 'A2' },
      { word: 'AFFORDABLE', tr: 'hesaplı, uygun', level: 'B1' }
    ]
  },
  {
    id: 'a2_quiet',
    word: 'QUIET',
    tr: 'sessiz, sakin, dingin',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The library is a quiet place to read and study.',
    exampleTr: 'Kütüphane okumak ve çalışmak için sessiz bir yerdir.',
    synonyms: [
      { word: 'SILENT', tr: 'çıt çıkarmayan, sessiz', level: 'A2' },
      { word: 'PEACEFUL', tr: 'huzurlu, sakin', level: 'A2' },
      { word: 'TRANQUIL', tr: 'dingin, duru', level: 'B2' }
    ],
    antonyms: [
      { word: 'NOISY', tr: 'gürültülü, patırtılı', level: 'A2' },
      { word: 'LOUD', tr: 'yüksek sesli', level: 'A1' },
      { word: 'ROWDY', tr: 'gürültücü, taşkın', level: 'B2' }
    ]
  },
  {
    id: 'a2_loud',
    word: 'LOUD',
    tr: 'yüksek sesli, gürültülü',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The music was so loud we could not talk.',
    exampleTr: 'Müzik o kadar yüksek sesliydi ki konuşamadık.',
    synonyms: [
      { word: 'NOISY', tr: 'gürültülü', level: 'A2' },
      { word: 'BOISTEROUS', tr: 'patırtılı, taşkın', level: 'B2' },
      { word: 'DEAFENING', tr: 'sağır edici derecede yüksek', level: 'B2' }
    ],
    antonyms: [
      { word: 'QUIET', tr: 'sessiz, sakin', level: 'A2' },
      { word: 'SILENT', tr: 'sessiz', level: 'A2' },
      { word: 'SOFT', tr: 'hafif, yumuşak', level: 'A1' }
    ]
  },
  {
    id: 'a2_remember',
    word: 'REMEMBER',
    tr: 'hatırlamak, anımsamak',
    level: 'A2',
    category: 'Fiil (Verb)',
    exampleEng: 'Do you remember our first day at university?',
    exampleTr: 'Üniversitedeki ilk günümüzü hatırlıyor musun?',
    synonyms: [
      { word: 'RECALL', tr: 'anımsamak, aklına getirmek', level: 'B1' },
      { word: 'RECOLLECT', tr: 'hatırlamak, anmak', level: 'B2' }
    ],
    antonyms: [
      { word: 'FORGET', tr: 'unutmak', level: 'A1' },
      { word: 'OVERLOOK', tr: 'gözden kaçırmak', level: 'B2' }
    ]
  },
  {
    id: 'a2_teach',
    word: 'TEACH',
    tr: 'öğretmek, ders vermek',
    level: 'A2',
    category: 'Fiil (Verb)',
    exampleEng: 'She wants to teach history to high school students.',
    exampleTr: 'Lise öğrencilerine tarih öğretmek istiyor.',
    synonyms: [
      { word: 'INSTRUCT', tr: 'talimat vermek, öğretmek', level: 'B1' },
      { word: 'EDUCATE', tr: 'eğitmek', level: 'B1' },
      { word: 'TRAIN', tr: 'eğitmek, yetiştirmek', level: 'A2' }
    ],
    antonyms: [
      { word: 'LEARN', tr: 'öğrenmek', level: 'A1' },
      { word: 'STUDY', tr: 'ders çalışmak', level: 'A1' }
    ]
  },
  {
    id: 'a2_win',
    word: 'WIN',
    tr: 'kazanmak, galip gelmek',
    level: 'A2',
    category: 'Fiil (Verb)',
    exampleEng: 'Our football team played hard to win the match.',
    exampleTr: 'Futbol takımımız maçı kazanmak için çok çabaladı.',
    synonyms: [
      { word: 'TRIUMPH', tr: 'zafer kazanmak', level: 'B2' },
      { word: 'CONQUER', tr: 'fethetmek, yenmek', level: 'B2' },
      { word: 'PREVAIL', tr: 'üstün gelmek', level: 'B2' }
    ],
    antonyms: [
      { word: 'LOSE', tr: 'kaybetmek, yenilmek', level: 'A1' },
      { word: 'FAIL', tr: 'başarısız olmak', level: 'A2' },
      { word: 'SURRENDER', tr: 'teslim olmak', level: 'B2' }
    ]
  },
  {
    id: 'a2_near',
    word: 'NEAR',
    tr: 'yakın, yakında',
    level: 'A2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'My office is near the central metro station.',
    exampleTr: 'Ofisim merkez metro istasyonuna yakındır.',
    synonyms: [
      { word: 'CLOSE', tr: 'yakın, bitişik', level: 'A1' },
      { word: 'ADJACENT', tr: 'bitişik, komşu', level: 'B2' }
    ],
    antonyms: [
      { word: 'FAR', tr: 'uzak', level: 'A1' },
      { word: 'DISTANT', tr: 'uzak, mesafeli', level: 'B1' },
      { word: 'REMOTE', tr: 'ırak, ücra', level: 'B2' }
    ]
  },

  // ================= B1 SEVİYESİ =================
  {
    id: 'b1_brave',
    word: 'BRAVE',
    tr: 'cesur, yiğit, yürekli',
    level: 'B1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The brave firefighter rescued a cat from the tree.',
    exampleTr: 'Cesur itfaiyeci ağaçtan bir kedi kurtardı.',
    synonyms: [
      { word: 'COURAGEOUS', tr: 'yürekli, cesaretli', level: 'B1' },
      { word: 'FEARLESS', tr: 'korkusuz', level: 'B2' },
      { word: 'VALIANT', tr: 'kahraman, yiğit', level: 'B2' }
    ],
    antonyms: [
      { word: 'COWARDLY', tr: 'ödlek, korkak', level: 'B1' },
      { word: 'TIMID', tr: 'çekingen, ürkek', level: 'B2' },
      { word: 'FEARFUL', tr: 'korkan, endişeli', level: 'B1' }
    ]
  },
  {
    id: 'b1_calm',
    word: 'CALM',
    tr: 'sakin, huzurlu; yatıştırmak',
    level: 'B1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Stay calm and breathe deeply during an earthquake.',
    exampleTr: 'Deprem sırasında sakin kalın ve derin nefes alın.',
    synonyms: [
      { word: 'PEACEFUL', tr: 'huzurlu, dingin', level: 'A2' },
      { word: 'SERENE', tr: 'dingin, duru, huzurlu', level: 'B2' },
      { word: 'COMPOSED', tr: 'kendine hakim, soğukkanlı', level: 'B2' }
    ],
    antonyms: [
      { word: 'ANXIOUS', tr: 'kaygılı, endişeli', level: 'B1' },
      { word: 'FURIOUS', tr: 'öfkeli, küplere binmiş', level: 'B2' },
      { word: 'AGITATED', tr: 'huzursuz, tedirgin', level: 'B2' }
    ]
  },
  {
    id: 'b1_polite',
    word: 'POLITE',
    tr: 'kibar, nazik, terbiyeli',
    level: 'B1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'He was polite enough to hold the door for everyone.',
    exampleTr: 'Kapıyı herkes için tutacak kadar nazikti.',
    synonyms: [
      { word: 'COURTEOUS', tr: 'saygılı, nazik', level: 'B2' },
      { word: 'WELL-MANNERED', tr: 'görgülü', level: 'B1' },
      { word: 'CIVIL', tr: 'medeni, kibar', level: 'B2' }
    ],
    antonyms: [
      { word: 'RUDE', tr: 'kaba, nezaketsiz', level: 'A2' },
      { word: 'IMPOLITE', tr: 'saygısız', level: 'B1' },
      { word: 'INSOLENT', tr: 'küstah, hadsiz', level: 'B2' }
    ]
  },
  {
    id: 'b1_accept',
    word: 'ACCEPT',
    tr: 'kabul etmek, onaylamak, benimsemek',
    level: 'B1',
    category: 'Fiil (Verb)',
    exampleEng: 'She accepted the job offer without hesitation.',
    exampleTr: 'İş teklifini hiç tereddüt etmeden kabul etti.',
    synonyms: [
      { word: 'AGREE', tr: 'onaylamak, razı olmak', level: 'A2' },
      { word: 'APPROVE', tr: 'onay vermek', level: 'B1' },
      { word: 'WELCOME', tr: 'memnuniyetle karşılamak', level: 'A2' }
    ],
    antonyms: [
      { word: 'REJECT', tr: 'reddetmek, geri çevirmek', level: 'B1' },
      { word: 'REFUSE', tr: 'geri çevirmek', level: 'B1' },
      { word: 'DECLINE', tr: 'nazikçe reddetmek', level: 'B2' }
    ]
  },
  {
    id: 'b1_reject',
    word: 'REJECT',
    tr: 'reddetmek, geri çevirmek',
    level: 'B1',
    category: 'Fiil (Verb)',
    exampleEng: 'The editor rejected the first draft of the manuscript.',
    exampleTr: 'Editör el yazmasının ilk taslağını reddetti.',
    synonyms: [
      { word: 'REFUSE', tr: 'kabul etmemek', level: 'B1' },
      { word: 'DECLINE', tr: 'geri çevirmek', level: 'B2' },
      { word: 'DISMISS', tr: 'göz ardı etmek, savmak', level: 'B2' }
    ],
    antonyms: [
      { word: 'ACCEPT', tr: 'kabul etmek', level: 'B1' },
      { word: 'ADOPT', tr: 'benimsemek', level: 'B2' },
      { word: 'APPROVE', tr: 'onaylamak', level: 'B1' }
    ]
  },
  {
    id: 'b1_increase',
    word: 'INCREASE',
    tr: 'artmak, yükselmek, artırmak',
    level: 'B1',
    category: 'Fiil (Verb)',
    exampleEng: 'Regular exercise increases your energy levels.',
    exampleTr: 'Düzenli egzersiz enerji seviyenizi artırır.',
    synonyms: [
      { word: 'GROW', tr: 'büyümek, artmak', level: 'A2' },
      { word: 'RISE', tr: 'yükselmek', level: 'A2' },
      { word: 'EXPAND', tr: 'genişlemek, büyümek', level: 'B1' },
      { word: 'ESCALATE', tr: 'tırmanmak, artmak', level: 'B2' }
    ],
    antonyms: [
      { word: 'DECREASE', tr: 'azalmak, düşmek', level: 'B1' },
      { word: 'REDUCE', tr: 'azaltmak, kısmak', level: 'B1' },
      { word: 'DIMINISH', tr: 'eksilmek, zayıflamak', level: 'B2' }
    ]
  },
  {
    id: 'b1_decrease',
    word: 'DECREASE',
    tr: 'azalmak, eksilmek, düşüş göstermek',
    level: 'B1',
    category: 'Fiil (Verb)',
    exampleEng: 'The temperature began to decrease as night fell.',
    exampleTr: 'Gece indikçe sıcaklık azalmaya başladı.',
    synonyms: [
      { word: 'REDUCE', tr: 'azaltmak', level: 'B1' },
      { word: 'DROP', tr: 'düşmek', level: 'A2' },
      { word: 'DECLINE', tr: 'gerilemek, inişe geçmek', level: 'B1' }
    ],
    antonyms: [
      { word: 'INCREASE', tr: 'artmak, yükselmek', level: 'B1' },
      { word: 'RISE', tr: 'yükselmek', level: 'A2' },
      { word: 'CLIMB', tr: 'tırmanmak', level: 'A2' }
    ]
  },
  {
    id: 'b1_success',
    word: 'SUCCESS',
    tr: 'başarı, zafer',
    level: 'B1',
    category: 'İsim (Noun)',
    exampleEng: 'Patience and practice are keys to success.',
    exampleTr: 'Sabır ve pratik, başarının anahtarıdır.',
    synonyms: [
      { word: 'ACHIEVEMENT', tr: 'kazanım, başarı', level: 'B1' },
      { word: 'TRIUMPH', tr: 'büyük zafer', level: 'B2' },
      { word: 'VICTORY', tr: 'galibiyet', level: 'B1' }
    ],
    antonyms: [
      { word: 'FAILURE', tr: 'başarısızlık, hüsran', level: 'B1' },
      { word: 'DEFEAT', tr: 'mağlubiyet, yenilgi', level: 'B1' }
    ]
  },
  {
    id: 'b1_failure',
    word: 'FAILURE',
    tr: 'başarısızlık, çöküş, hüsran',
    level: 'B1',
    category: 'İsim (Noun)',
    exampleEng: 'Failure is just another chance to learn.',
    exampleTr: 'Başarısızlık, öğrenmek için sadece yeni bir fırsattır.',
    synonyms: [
      { word: 'DEFEAT', tr: 'yenilgi', level: 'B1' },
      { word: 'BREAKDOWN', tr: 'çöküş, aksama', level: 'B2' }
    ],
    antonyms: [
      { word: 'SUCCESS', tr: 'başarı', level: 'B1' },
      { word: 'VICTORY', tr: 'zafer', level: 'B1' },
      { word: 'TRIUMPH', tr: 'büyük zafer', level: 'B2' }
    ]
  },
  {
    id: 'b1_generous',
    word: 'GENEROUS',
    tr: 'cömert, eli açık',
    level: 'B1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'He made a generous donation to the animal shelter.',
    exampleTr: 'Hayvan barınağına cömert bir bağışta bulundu.',
    synonyms: [
      { word: 'CHARITABLE', tr: 'hayırsever, cömert', level: 'B2' },
      { word: 'BIG-HEARTED', tr: 'yüce gönüllü', level: 'B1' },
      { word: 'LAVISH', tr: 'eli bol, cömert', level: 'B2' }
    ],
    antonyms: [
      { word: 'STINGY', tr: 'cimri, eli sıkı', level: 'B1' },
      { word: 'MEAN', tr: 'cimri, kaba', level: 'A2' },
      { word: 'MISERLY', tr: 'pinti, cimri', level: 'B2' }
    ]
  },
  {
    id: 'b1_boring',
    word: 'BORING',
    tr: 'sıkıcı, tekdüze, bayat',
    level: 'B1',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The two-hour speech was long and boring.',
    exampleTr: 'İki saatlik konuşma uzun ve sıkıcıydı.',
    synonyms: [
      { word: 'DULL', tr: 'tekdüze, donuk', level: 'B1' },
      { word: 'TEDIOUS', tr: 'usandırıcı, can sıkıcı', level: 'B2' },
      { word: 'MONOTONOUS', tr: 'monoton', level: 'B2' }
    ],
    antonyms: [
      { word: 'EXCITING', tr: 'heyecan verici', level: 'A2' },
      { word: 'INTERESTING', tr: 'ilginç, dikkat çekici', level: 'A1' },
      { word: 'FASCINATING', tr: 'büyüleyici', level: 'B1' }
    ]
  },
  {
    id: 'b1_build',
    word: 'BUILD',
    tr: 'inşa etmek, kurmak, oluşturmak',
    level: 'B1',
    category: 'Fiil (Verb)',
    exampleEng: 'They plan to build a new bridge across the river.',
    exampleTr: 'Nehir üzerinden yeni bir köprü inşa etmeyi planlıyorlar.',
    synonyms: [
      { word: 'CONSTRUCT', tr: 'inşa etmek, kurmak', level: 'B1' },
      { word: 'CREATE', tr: 'yaratmak, kurmak', level: 'A2' },
      { word: 'ESTABLISH', tr: 'tesis etmek, kurmak', level: 'B2' }
    ],
    antonyms: [
      { word: 'DESTROY', tr: 'yıkmak, yok etmek', level: 'B1' },
      { word: 'DEMOLISH', tr: 'yerle bir etmek', level: 'B2' },
      { word: 'RUIN', tr: 'mahvetmek', level: 'B1' }
    ]
  },

  // ================= B2 SEVİYESİ =================
  {
    id: 'b2_abundant',
    word: 'ABUNDANT',
    tr: 'bol, bereketli, çok sayıda',
    level: 'B2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The rainforest is rich in abundant natural resources.',
    exampleTr: 'Yağmur ormanı bol miktarda doğal kaynak açısından zengindir.',
    synonyms: [
      { word: 'PLENTIFUL', tr: 'bol, verimli', level: 'B1' },
      { word: 'COPIOUS', tr: 'pek çok, bereketli', level: 'B2' },
      { word: 'AMPLE', tr: 'kifayetli, bolca', level: 'B2' }
    ],
    antonyms: [
      { word: 'SCARCE', tr: 'kıt, az bulunan', level: 'B2' },
      { word: 'RARE', tr: 'nadir, ender', level: 'B1' },
      { word: 'MEAGER', tr: 'yetersiz, kıt', level: 'B2' }
    ]
  },
  {
    id: 'b2_scarce',
    word: 'SCARCE',
    tr: 'kıt, nadir, az bulunan',
    level: 'B2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'Fresh water became scarce during the long drought.',
    exampleTr: 'Uzun süren kuraklık sırasında tatlı su kıtlaştı.',
    synonyms: [
      { word: 'RARE', tr: 'nadir, ender', level: 'B1' },
      { word: 'LIMITED', tr: 'sınırlı, kısıtlı', level: 'A2' },
      { word: 'DEFICIENT', tr: 'yetersiz, noksan', level: 'B2' }
    ],
    antonyms: [
      { word: 'ABUNDANT', tr: 'bol, bereketli', level: 'B2' },
      { word: 'PLENTIFUL', tr: 'bol, çokça', level: 'B1' }
    ]
  },
  {
    id: 'b2_complex',
    word: 'COMPLEX',
    tr: 'karmaşık, çapraşık, çok yönlü',
    level: 'B2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'The human brain is a complex neural network.',
    exampleTr: 'İnsan beyni karmaşık bir sinir ağıdır.',
    synonyms: [
      { word: 'COMPLICATED', tr: 'çetrefilli, karmaşık', level: 'B1' },
      { word: 'INTRICATE', tr: 'girift, detaylı karmaşık', level: 'B2' },
      { word: 'ELABORATE', tr: 'ayrıntılı, özenle işlenmiş', level: 'B2' }
    ],
    antonyms: [
      { word: 'SIMPLE', tr: 'basit, yalın', level: 'A1' },
      { word: 'BASIC', tr: 'temel, yalın', level: 'A2' },
      { word: 'STRAIGHTFORWARD', tr: 'anlaşılması kolay', level: 'B2' }
    ]
  },
  {
    id: 'b2_expand',
    word: 'EXPAND',
    tr: 'genişlemek, büyütmek, yayılmak',
    level: 'B2',
    category: 'Fiil (Verb)',
    exampleEng: 'The company plans to expand into European markets.',
    exampleTr: 'Şirket Avrupa pazarlarına genişlemeyi planlıyor.',
    synonyms: [
      { word: 'BROADEN', tr: 'genişletmek', level: 'B1' },
      { word: 'EXTEND', tr: 'uzatmak, genişletmek', level: 'B1' },
      { word: 'ENLARGE', tr: 'büyütmek', level: 'B1' }
    ],
    antonyms: [
      { word: 'SHRINK', tr: 'küçülmek, büzülmek', level: 'B2' },
      { word: 'CONTRACT', tr: 'daralmak, büzüşmek', level: 'B2' },
      { word: 'NARROW', tr: 'daralmak', level: 'B1' }
    ]
  },
  {
    id: 'b2_shrink',
    word: 'SHRINK',
    tr: 'küçülmek, çekmek, büzüşmek',
    level: 'B2',
    category: 'Fiil (Verb)',
    exampleEng: 'Hot water made the wool sweater shrink.',
    exampleTr: 'Sıcak su yün kazağın çekmesine neden oldu.',
    synonyms: [
      { word: 'CONTRACT', tr: 'daralmak, büzüşmek', level: 'B2' },
      { word: 'DWINDLE', tr: 'giderek azalmak', level: 'B2' }
    ],
    antonyms: [
      { word: 'EXPAND', tr: 'genişlemek, büyümek', level: 'B2' },
      { word: 'GROW', tr: 'büyümek', level: 'A2' },
      { word: 'SWELL', tr: 'şişmek, kabarmak', level: 'B2' }
    ]
  },
  {
    id: 'b2_prohibit',
    word: 'PROHIBIT',
    tr: 'yasaklamak, men etmek',
    level: 'B2',
    category: 'Fiil (Verb)',
    exampleEng: 'Smoking is strictly prohibited inside the hospital.',
    exampleTr: 'Hastane içinde sigara içmek kesinlikle yasaktır.',
    synonyms: [
      { word: 'FORBID', tr: 'yasaklamak', level: 'B1' },
      { word: 'BAN', tr: 'yasak getirmek', level: 'B1' },
      { word: 'DISALLOW', tr: 'izin vermemek', level: 'B2' }
    ],
    antonyms: [
      { word: 'ALLOW', tr: 'izin vermek', level: 'A2' },
      { word: 'PERMIT', tr: 'müsaade etmek', level: 'B1' },
      { word: 'AUTHORIZE', tr: 'yetki vermek', level: 'B2' }
    ]
  },
  {
    id: 'b2_praise',
    word: 'PRAISE',
    tr: 'övmek, methetmek; övgü',
    level: 'B2',
    category: 'Fiil (Verb)',
    exampleEng: 'The professor praised the student for her original research.',
    exampleTr: 'Profesör özgün araştırmasından dolayı öğrenciyi övdü.',
    synonyms: [
      { word: 'COMPLIMENT', tr: 'iltifat etmek', level: 'B1' },
      { word: 'APPLAUD', tr: 'alkışlamak, takdir etmek', level: 'B1' },
      { word: 'COMMEND', tr: 'takdirle anmak', level: 'B2' }
    ],
    antonyms: [
      { word: 'CRITICIZE', tr: 'eleştirmek, kınamak', level: 'B1' },
      { word: 'CONDEMN', tr: 'kınamak, mahkum etmek', level: 'B2' },
      { word: 'BLAME', tr: 'suçlamak', level: 'B1' }
    ]
  },
  {
    id: 'b2_criticize',
    word: 'CRITICIZE',
    tr: 'eleştirmek, yermek',
    level: 'B2',
    category: 'Fiil (Verb)',
    exampleEng: 'Constructive feedback should help rather than merely criticize.',
    exampleTr: 'Yapıcı geri bildirim sadece eleştirmek yerine yardımcı olmalıdır.',
    synonyms: [
      { word: 'BLAME', tr: 'suçlamak', level: 'B1' },
      { word: 'FAULT', tr: 'kusur bulmak', level: 'B2' },
      { word: 'CENSURE', tr: 'kınamak', level: 'B2' }
    ],
    antonyms: [
      { word: 'PRAISE', tr: 'övmek, methetmek', level: 'B2' },
      { word: 'APPLAUD', tr: 'takdir etmek', level: 'B1' },
      { word: 'COMPLIMENT', tr: 'iltifat etmek', level: 'B1' }
    ]
  },
  {
    id: 'b2_encourage',
    word: 'ENCOURAGE',
    tr: 'cesaretlendirmek, teşvik etmek',
    level: 'B2',
    category: 'Fiil (Verb)',
    exampleEng: 'Teachers should encourage students to think critically.',
    exampleTr: 'Öğretmenler öğrencileri eleştirel düşünmeye teşvik etmelidir.',
    synonyms: [
      { word: 'MOTIVATE', tr: 'motive etmek', level: 'B1' },
      { word: 'INSPIRE', tr: 'ilham vermek', level: 'B1' },
      { word: 'STIMULATE', tr: 'uyarmak, harekete geçirmek', level: 'B2' }
    ],
    antonyms: [
      { word: 'DISCOURAGE', tr: 'cesaretini kırmak', level: 'B2' },
      { word: 'DISSUADE', tr: 'vazgeçirmek', level: 'B2' },
      { word: 'DETER', tr: 'caydırmak', level: 'B2' }
    ]
  },
  {
    id: 'b2_temporary',
    word: 'TEMPORARY',
    tr: 'geçici, muvakkat',
    level: 'B2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'This road closure is only temporary for repairs.',
    exampleTr: 'Bu yol kapanması onarım nedeniyle sadece geçicidir.',
    synonyms: [
      { word: 'TRANSIENT', tr: 'gelip geçici, fani', level: 'B2' },
      { word: 'MOMENTARY', tr: 'anlık', level: 'B2' },
      { word: 'PROVISIONAL', tr: 'geçici, eğreti', level: 'B2' }
    ],
    antonyms: [
      { word: 'PERMANENT', tr: 'kalıcı, daimi', level: 'B1' },
      { word: 'ETERNAL', tr: 'sonsuz, ebedi', level: 'B2' },
      { word: 'LASTING', tr: 'uzun ömürlü, sürekli', level: 'B2' }
    ]
  },
  {
    id: 'b2_permanent',
    word: 'PERMANENT',
    tr: 'kalıcı, sürekli, daimi',
    level: 'B2',
    category: 'Sıfat (Adjective)',
    exampleEng: 'They offered him a permanent position at the company.',
    exampleTr: 'Ona şirkette kalıcı bir pozisyon teklif ettiler.',
    synonyms: [
      { word: 'LASTING', tr: 'uzun ömürlü', level: 'B2' },
      { word: 'ENDURING', tr: 'dayanıklı, sürekli', level: 'B2' },
      { word: 'CONSTANT', tr: 'sabit, değişmez', level: 'B1' }
    ],
    antonyms: [
      { word: 'TEMPORARY', tr: 'geçici', level: 'B2' },
      { word: 'FLEETING', tr: 'gelip geçici', level: 'B2' },
      { word: 'BRIEF', tr: 'kısa süreli', level: 'B1' }
    ]
  }
];

// O(1) Lookup Maps
const wordToRelationMap = new Map<string, WordRelationEntry>();

// Populate lookup
WORD_RELATIONS.forEach((entry) => {
  wordToRelationMap.set(entry.word.toUpperCase(), entry);
});

// Also create reverse index so querying a synonym or antonym points to its master relation
const reverseLookupMap = new Map<string, WordRelationEntry>();
WORD_RELATIONS.forEach((entry) => {
  reverseLookupMap.set(entry.word.toUpperCase(), entry);
  entry.synonyms.forEach((syn) => {
    const k = syn.word.toUpperCase();
    if (!reverseLookupMap.has(k)) {
      reverseLookupMap.set(k, entry);
    }
  });
  entry.antonyms.forEach((ant) => {
    const k = ant.word.toUpperCase();
    if (!reverseLookupMap.has(k)) {
      reverseLookupMap.set(k, entry);
    }
  });
});

/**
 * Find word relation entry by English word (case-insensitive)
 */
export function getWordRelations(word?: string): WordRelationEntry | null {
  if (!word) return null;
  const clean = word.trim().toUpperCase().replace(/[^A-Z]/g, '');
  if (!clean) return null;

  // 1. Direct match
  if (wordToRelationMap.has(clean)) {
    return wordToRelationMap.get(clean)!;
  }

  // 2. Reverse index match (synonym or antonym queried)
  if (reverseLookupMap.has(clean)) {
    return reverseLookupMap.get(clean)!;
  }

  return null;
}

/**
 * Filter word relations by search term (querying word, translation, synonyms, or antonyms) and level
 */
export function searchWordRelations(query: string = '', level: string = 'ALL'): WordRelationEntry[] {
  const q = query.trim().toLowerCase();
  return WORD_RELATIONS.filter((entry) => {
    if (level !== 'ALL' && entry.level !== level) {
      return false;
    }
    if (!q) return true;

    const matchWord = entry.word.toLowerCase().includes(q);
    const matchTr = entry.tr.toLowerCase().includes(q);
    const matchSyn = entry.synonyms.some(s => s.word.toLowerCase().includes(q) || s.tr.toLowerCase().includes(q));
    const matchAnt = entry.antonyms.some(a => a.word.toLowerCase().includes(q) || a.tr.toLowerCase().includes(q));

    return matchWord || matchTr || matchSyn || matchAnt;
  });
}

/**
 * Generate a dynamic Flashcard/Quiz question for Synonyms or Antonyms
 */
export interface RelationQuizQuestion {
  targetWord: string;
  targetTr: string;
  relationType: 'synonym' | 'antonym';
  promptTr: string;
  correctAnswer: string;
  correctAnswerTr: string;
  options: Array<{ word: string; tr: string }>;
  explanation: string;
  level: string;
}

export function generateRelationQuiz(level: string = 'ALL'): RelationQuizQuestion | null {
  const pool = level === 'ALL' 
    ? WORD_RELATIONS 
    : WORD_RELATIONS.filter(e => e.level === level);

  if (pool.length < 4) return null;

  const entry = pool[Math.floor(Math.random() * pool.length)];
  const isSynonym = Math.random() > 0.5;

  let correctItem: WordRelationItem | undefined;
  if (isSynonym && entry.synonyms.length > 0) {
    correctItem = entry.synonyms[Math.floor(Math.random() * entry.synonyms.length)];
  } else if (!isSynonym && entry.antonyms.length > 0) {
    correctItem = entry.antonyms[Math.floor(Math.random() * entry.antonyms.length)];
  } else if (entry.synonyms.length > 0) {
    correctItem = entry.synonyms[0];
  } else if (entry.antonyms.length > 0) {
    correctItem = entry.antonyms[0];
  }

  if (!correctItem) return null;

  const actualRelation = entry.synonyms.some(s => s.word === correctItem!.word) ? 'synonym' : 'antonym';
  const promptTr = actualRelation === 'synonym'
    ? `"${entry.word}" (${entry.tr}) kelimesinin EŞ ANLAMLISI (Synonym) hangisidir?`
    : `"${entry.word}" (${entry.tr}) kelimesinin ZIT ANLAMLISI (Antonym) hangisidir?`;

  // Distractors
  const distractors: Array<{ word: string; tr: string }> = [];
  const otherEntries = WORD_RELATIONS.filter(e => e.word !== entry.word && e.word !== correctItem!.word);
  
  // Shuffle other entries
  const shuffledOthers = [...otherEntries].sort(() => 0.5 - Math.random());
  for (const other of shuffledOthers) {
    if (distractors.length >= 3) break;
    distractors.push({ word: other.word, tr: other.tr });
  }

  const options = [
    { word: correctItem.word, tr: correctItem.tr },
    ...distractors
  ].sort(() => 0.5 - Math.random());

  return {
    targetWord: entry.word,
    targetTr: entry.tr,
    relationType: actualRelation,
    promptTr,
    correctAnswer: correctItem.word,
    correctAnswerTr: correctItem.tr,
    options,
    explanation: `${entry.word} (${entry.tr}) ➔ ${actualRelation === 'synonym' ? 'Eş Anlamlısı' : 'Zıt Anlamlısı'}: ${correctItem.word} (${correctItem.tr})`,
    level: entry.level
  };
}
