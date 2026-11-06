// src/grammarData.ts
// Kapsamlı Seviyeli İngilizce Gramer Rehberi & Cümle Kurma / Sözcük Sıralama Veri Tabanı

export interface GrammarExample {
  eng: string;
  tr: string;
  note?: string;
}

export interface GrammarFormula {
  title: string;
  pattern: string;
  explanation: string;
}

export interface SubjectSchemaRow {
  subject: string; // Özne: "I", "He / She / It", "You / We / They"
  subjectLabel?: string; // "1. Tekil Şahıs", "3. Tekil Şahıslar", "Çoğul & 2. Şahıs"
  positive: string; // Olumlu çekim / örnek
  negative: string; // Olumsuz çekim / örnek
  question: string; // Soru biçimi
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
  commonMistakes: { wrong: string; correct: string; reason: string }[];
  examples: GrammarExample[];
  proTip: string;
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

// =============================================================
// 1. KAPSAMLI VE ŞEMATİK SEVİYELİ GRAMER REHBERİ
// =============================================================
export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // ===========================================================
  // ======================== A1 SEVİYESİ =======================
  // ===========================================================
  {
    id: 'a1-to-be',
    level: 'A1',
    title: 'To Be Fiili (Am / Is / Are)',
    badge: 'Temel Yapıtaşı',
    summary: 'İngilizcenin en temel "olmak", durum, kimlik, yaş ve niteleme fiili.',
    introduction: 'İngilizcede hareket bildiren bir ana eylem (koşmak, yemek, uyumak gibi) bulunmadığında; kişinin kim olduğunu, nerede bulunduğunu, nasıl hissettiğini, yaşını veya hava durumunu bildirmek için "To Be" (am / is / are) fiili kullanılır. Türkçedeki "-dir, -dır" veya "öğrenci-yim", "mutlu-yuz" eklerinin tam karşılığıdır.',
    subjectSchema: [
      {
        subject: 'I (Ben)',
        subjectLabel: '1. Tekil Şahıs',
        positive: 'am (\'m) ➔ I am a teacher.',
        negative: 'am not (\'m not) ➔ I am not late.',
        question: 'Am I ...? ➔ Am I right?',
        highlight: 'Yalnızca "I" öznesi ile "am" eşleşir.'
      },
      {
        subject: 'He / She / It (O)',
        subjectLabel: '3. Tekil Şahıslar',
        positive: 'is (\'s) ➔ She is happy. / It is cold.',
        negative: 'is not (isn\'t) ➔ He isn\'t at work.',
        question: 'Is he / she / it ...? ➔ Is she ready?',
        highlight: 'Tüm tekil isimler (John, the cat) "is" alır.'
      },
      {
        subject: 'You / We / They (Sen/Siz, Biz, Onlar)',
        subjectLabel: 'Çoğullar & 2. Şahıs',
        positive: 'are (\'re) ➔ We are students.',
        negative: 'are not (aren\'t) ➔ They aren\'t here.',
        question: 'Are you / we / they ...? ➔ Are they doctors?',
        highlight: 'Tüm çoğul özneler ve daima "you" ile "are" kullanılır.'
      }
    ],
    formulas: [
      {
        title: 'Olumlu Yapı (+)',
        pattern: 'Özne (Subject) + am / is / are + Sıfat / İsim / Yer Belirteci',
        explanation: 'Örnek: She + is + an engineer. / We + are + at the library.'
      },
      {
        title: 'Olumsuz Yapı (-)',
        pattern: 'Özne (Subject) + am not / isn\'t / aren\'t + Tümleç',
        explanation: 'Olumsuzluk eki "not" to be fiiline eklenir. Örnek: It isn\'t raining.'
      },
      {
        title: 'Soru Yapısı (?)',
        pattern: 'Am / Is / Are + Özne + Tümleç + ?',
        explanation: 'Yardımcı fiil öznenin önüne geçer. Örnek: Are you ready? (Kısa cevap: Yes, I am. / No, I\'m not.)'
      }
    ],
    keyRules: [
      'İngilizce bir cümlede yüklem asla boş bırakılamaz. Eylem yoksa "am, is, are" şarttır: "She doctor" DENMEZ ➔ "She is a doctor" denir.',
      'Yaş söylerken "have" değil, daima "to be" kullanılır: "I am 24 years old."',
      'Hava durumu ve saatler için "It is" kullanılır: "It is 3 o\'clock.", "It is sunny today."',
      'Soru kelimeleri (Who, What, Where, How, When) en başa gelir: "Where are you from?", "How is your mother?"'
    ],
    comparisonTable: {
      title: 'To Be Kısaltmaları (Contractions) Rehberi',
      headers: ['Uzun Biçim', 'Olumlu Kısaltma', 'Olumsuz Kısaltma', 'Türkçe Anlamı'],
      rows: [
        ['I am', 'I\'m', 'I\'m not', 'Ben ...yim'],
        ['He is / She is / It is', 'He\'s / She\'s / It\'s', 'He isn\'t / She isn\'t', 'O ...dır'],
        ['You are', 'You\'re', 'You aren\'t', 'Sen / Siz ...siniz'],
        ['We are', 'We\'re', 'We aren\'t', 'Biz ...yiz'],
        ['They are', 'They\'re', 'They aren\'t', 'Onlar ...dırlar']
      ]
    },
    commonMistakes: [
      {
        wrong: 'I have 22 years old.',
        correct: 'I am 22 years old.',
        reason: 'İngilizcede yaş bir sahiplik değil, varoluş durumudur; "to be" kullanılır.'
      },
      {
        wrong: 'He is work in a hospital.',
        correct: 'He works in a hospital.',
        reason: 'Eğer "work" gibi ana bir hareket fiili varsa, geniş zamanda ayrıca "is" eklenmez.'
      },
      {
        wrong: 'Are you agree with me?',
        correct: 'Do you agree with me?',
        reason: '"Agree" bir sıfat değil fiildir (katılmak); soru "Do you" ile sorulur.'
      }
    ],
    examples: [
      { eng: 'I am a software developer living in Ankara.', tr: 'Ankara\'da yaşayan bir yazılım geliştiriciyim.' },
      { eng: 'The weather is surprisingly warm and sunny today.', tr: 'Bugün hava şaşırtıcı şekilde ılık ve güneşli.' },
      { eng: 'Are you ready for the big presentation this afternoon?', tr: 'Bu öğleden sonraki büyük sunum için hazır mısın?' },
      { eng: 'They are not at home; they are at the national park.', tr: 'Onlar evde değiller; milli parktalar.' }
    ],
    proTip: 'Kimlik, meslek, milliyet, konum ve hisleri belirtirken ilk başvuracağınız temel kural to be çekimidir.'
  },
  {
    id: 'a1-present-simple',
    level: 'A1',
    title: 'Present Simple (Geniş Zaman)',
    badge: 'Rutinler & Gerçekler',
    summary: 'Günlük alışkanlıklar, tekrarlanan eylemler, bilimsel gerçekler ve doğa kanunları.',
    introduction: 'Her gün tekrarladığınız sabah kahvesi içmek, işe gitmek gibi rutinlerinizi, hobilerinizi veya değişmeyen doğa kanunlarını (su 100 derecede kaynar) anlatmak için Present Simple kullanılır. Türkçe\'deki "-r, -ar, -er, -ır" eklerinin karşılığıdır.',
    subjectSchema: [
      {
        subject: 'I / You / We / They',
        subjectLabel: 'Ben, Sen/Siz, Biz, Onlar & Çoğul İsimler',
        positive: 'V1 (Fiil Yalın) ➔ I play tennis. / They live in London.',
        negative: 'don\'t + V1 ➔ We don\'t eat meat.',
        question: 'Do + Özne + V1? ➔ Do you speak English?',
        highlight: 'Fiil hiçbir takı almaz, orijinal yalın halindedir.'
      },
      {
        subject: 'He / She / It',
        subjectLabel: '3. Tekil Şahıslar & Tekil İsimler',
        positive: 'V1 + (-s / -es / -ies) ➔ He works hard. / She watches TV.',
        negative: 'doesn\'t + V1 (Fiil YALIN) ➔ He doesn\'t smoke.',
        question: 'Does + Özne + V1? ➔ Does she live alone?',
        highlight: 'Olumsuzda ve soruda "doesn\'t/does" geldiğinde fiildeki -s takısı DÜŞER!'
      }
    ],
    formulas: [
      {
        title: 'Olumlu Cümle Formülü (+)',
        pattern: 'Özne + V1 (veya He/She/It için V1 + -s/-es/-ies) + Nesne + Zaman',
        explanation: 'Örnek: My brother + drinks + coffee + every morning.'
      },
      {
        title: 'Olumsuz Cümle Formülü (-)',
        pattern: 'Özne + don\'t / doesn\'t + V1 (Fiil Daima YALIN)',
        explanation: 'Örnek: She doesn\'t like horror movies.'
      },
      {
        title: 'Soru Cümlesi Formülü (?)',
        pattern: 'Do / Does + Özne + V1 (Fiil YALIN) + ?',
        explanation: 'Örnek: Do you study English every day? / Does he have a car?'
      }
    ],
    keyRules: [
      'He / She / It için fiil sonu yazım kuralları:\n• Genel kural: Çoğu fiil sadece -s alır (work ➔ works, read ➔ reads).\n• -ch, -sh, -ss, -x, -o ile biten fiiller -es alır (watch ➔ watches, wash ➔ washes, go ➔ goes).\n• Sessiz harf + y ile biten fiillerde "y" düşer ve -ies gelir (study ➔ studies, fly ➔ flies). Dikkat: Sesli + y varsa sadece -s alır (play ➔ plays).',
      'Sıklık zarfları (Frequency Adverbs) ana fiilden ÖNCE gelir: "She always wakes up early." Ancak "to be" fiilinden SONRA gelir: "He is always late."'
    ],
    comparisonTable: {
      title: 'Sıklık Zarfları (Frequency Adverbs) ve Dereceleri',
      headers: ['Zarf', 'Türkçe Karşılık', 'Sıklık Oranı', 'Örnek Kullanım'],
      rows: [
        ['Always', 'Her zaman / Daima', '%100', 'I always brush my teeth before sleep.'],
        ['Usually / Normally', 'Genellikle', '%80', 'She usually drinks herbal tea.'],
        ['Often / Frequently', 'Sık sık', '%60', 'We often go hiking at the weekends.'],
        ['Sometimes', 'Bazen / Ara sıra', '%40', 'I sometimes read books in bed.'],
        ['Rarely / Seldom', 'Nadiren', '%15', 'He rarely eats fast food.'],
        ['Never', 'Asla / Hiç', '%0', 'They never arrive late for the meeting.']
      ]
    },
    commonMistakes: [
      {
        wrong: 'She doesn\'t likes apples.',
        correct: 'She doesn\'t like apples.',
        reason: '"Doesn\'t" yardımcı fiili -s takısını üzerine almıştır; ana fiil yalın kalmalıdır.'
      },
      {
        wrong: 'I am live in Izmir.',
        correct: 'I live in Izmir.',
        reason: 'Geniş zamanda ana fiil (live) varken "am/is/are" asla eklenmez.'
      },
      {
        wrong: 'He play football on Sundays.',
        correct: 'He plays football on Sundays.',
        reason: '3. tekil şahıs "he" olumlu cümlede fiile -s takısı getirilmesini zorunlu kılar.'
      }
    ],
    examples: [
      { eng: 'I drink a glass of warm water every morning.', tr: 'Her sabah bir bardak ılık su içerim.' },
      { eng: 'My sister works at an international finance bank.', tr: 'Kız kardeşim uluslararası bir finans bankasında çalışıyor.' },
      { eng: 'The sun rises in the east and sets in the west.', tr: 'Güneş doğudan doğar ve batıdan batar.' },
      { eng: 'Do you take public transport to get to work?', tr: 'İşe gitmek için toplu taşımayı mı kullanırsın?' }
    ],
    proTip: 'Soru sorarken "Do / Does" yardımcılarını cümle bekçisi olarak kodlayın; geldikleri an fiilin üzerindeki bütün ekleri silerler.'
  },
  {
    id: 'a1-present-continuous',
    level: 'A1',
    title: 'Present Continuous (Şimdiki Zaman)',
    badge: 'Şu An & Süreç',
    summary: 'Konuşma anında gerçekleşen eylemler, geçici durumlar ve geleceğe yönelik kesin randevular.',
    introduction: 'Tam şu anda yapmakta olduğunuz eylemleri (konuşmak, dinlemek, yazmak), bu günlerde süregelen geçici durumları veya kesinleşmiş yakın gelecek randevularını ifade etmek için Present Continuous kullanılır. Türkçe\'deki "-yor" ekinin tam karşılığıdır.',
    subjectSchema: [
      {
        subject: 'I (Ben)',
        subjectLabel: '1. Tekil Şahıs',
        positive: 'am + V-ing ➔ I am studying English right now.',
        negative: 'am not + V-ing ➔ I am not sleeping.',
        question: 'Am I + V-ing? ➔ Am I speaking too fast?',
        highlight: 'I am reading ➔ I\'m reading'
      },
      {
        subject: 'He / She / It (O)',
        subjectLabel: '3. Tekil Şahıslar',
        positive: 'is + V-ing ➔ He is driving. / It is raining.',
        negative: 'isn\'t + V-ing ➔ She isn\'t listening to music.',
        question: 'Is he/she/it + V-ing? ➔ Is the baby sleeping?',
        highlight: 'Tekillerle daima "is + V-ing" eşleşir.'
      },
      {
        subject: 'You / We / They (Sen/Siz, Biz, Onlar)',
        subjectLabel: 'Çoğullar & 2. Şahıs',
        positive: 'are + V-ing ➔ We are preparing dinner.',
        negative: 'aren\'t + V-ing ➔ They aren\'t working today.',
        question: 'Are you/we/they + V-ing? ➔ Are you watching TV?',
        highlight: 'Çoğullarla daima "are + V-ing" kullanılır.'
      }
    ],
    formulas: [
      {
        title: 'Olumlu Cümle (+)',
        pattern: 'Özne + am / is / are + Fiil-ing (V-ing) + Nesne',
        explanation: 'Örnek: The students + are + taking + an important exam.'
      },
      {
        title: 'Olumsuz Cümle (-)',
        pattern: 'Özne + am not / isn\'t / aren\'t + Fiil-ing',
        explanation: 'Örnek: She isn\'t wearing her glasses right now.'
      },
      {
        title: 'Soru Cümlesi (?)',
        pattern: 'Am / Is / Are + Özne + Fiil-ing + ?',
        explanation: 'Örnek: What are you doing at the moment?'
      }
    ],
    keyRules: [
      '-ing Ekleme Yazım Kuralları:\n• "e" ile biten fiillerde "e" düşer: make ➔ making, write ➔ writing.\n• Bir sesli + bir sessizle biten tek heceli fiillerde son sessiz harf çift yazılır: run ➔ running, swim ➔ swimming, sit ➔ sitting.\n• "-ie" ile biten fiillerde "-ie" yerine "-y" gelir: lie ➔ lying, die ➔ dying.',
      'DURUM FİİLLERİ (Stative Verbs) KURALI:\nZihinsel süreç, his ve duygu bildiren fiiller şimdiki zaman anlamında olsalar bile kural gereği -ing ALMAZLAR! (love, like, hate, want, need, know, understand, believe, remember, belong, seem). Bu fiiller yerine Geniş Zaman kullanılır: "I am knowing you" YANLIŞ ➔ "I know you" DOĞRU.'
    ],
    timeMarkers: [
      { term: 'Now / Right now', meaning: 'Şimdi / Tam şu anda', usage: 'I am typing a message right now.' },
      { term: 'At the moment / Currently', meaning: 'Şu anda / Şu sıralar', usage: 'She is working on a new project at the moment.' },
      { term: 'Look! / Listen!', meaning: 'Bak! / Dinle! (Dikkat çekme)', usage: 'Look! The bus is coming.' },
      { term: 'These days / Nowadays', meaning: 'Bugünlerde (Geçici süreç)', usage: 'He is living with his uncle these days.' }
    ],
    commonMistakes: [
      {
        wrong: 'I am wanting a cup of coffee.',
        correct: 'I want a cup of coffee.',
        reason: '"Want" durum fiilidir (stative verb), istemek hissi -ing eki alamaz.'
      },
      {
        wrong: 'She watching television now.',
        correct: 'She is watching television now.',
        reason: '"To be" (is) yardımcı fiili unutulmamalıdır; sadece -ing tek başına yüklem oluşturmaz.'
      }
    ],
    examples: [
      { eng: 'Look outside! It is snowing heavily over the mountains.', tr: 'Dışarıya bak! Dağların üzerinde lapa lapa kar yağıyor.' },
      { eng: 'Why are you whispering so quietly?', tr: 'Neden bu kadar sessizce fısıldıyorsun?' },
      { eng: 'I am reading an inspiring book about space exploration.', tr: 'Uzay keşifleri hakkında ilham verici bir kitap okuyorum.' },
      { eng: 'They are staying at a luxury hotel until next Monday.', tr: 'Gelecek pazartesiye kadar lüks bir otelde kalıyorlar.' }
    ],
    proTip: 'Gözünüzün önünde cereyan eden bir eylemi aktarırken "am/is/are + ing" refleksiniz olsun.'
  },
  {
    id: 'a1-have-got-has-got',
    level: 'A1',
    title: 'Have Got / Has Got (Sahip Olmak & Nitelikler)',
    badge: 'Sahiplik & Özellikler',
    summary: 'Eşyalarımız, aile fertlerimiz, fiziksel özelliklerimiz ve geçici sağlık durumları.',
    introduction: 'Bir nesneye sahip olduğumuzu (arabam var), aile üyelerimizi (iki kardeşim var), dış görünüş özelliklerimizi (yeşil gözleri var) veya sağlık şikayetlerimizi (baş ağrım var) ifade ederken kullanılır. Özellikle İngiliz İngilizcesinde temel seviyede en çok tercih edilen yapıdır.',
    subjectSchema: [
      {
        subject: 'I / You / We / They',
        subjectLabel: 'Ben, Sen/Siz, Biz, Onlar',
        positive: 'have got (\'ve got) ➔ I\'ve got a laptop.',
        negative: 'haven\'t got ➔ We haven\'t got enough time.',
        question: 'Have + Özne + got? ➔ Have you got a pen?',
        highlight: 'Kısaltma: \'ve got (I\'ve got, they\'ve got)'
      },
      {
        subject: 'He / She / It',
        subjectLabel: '3. Tekil Şahıslar',
        positive: 'has got (\'s got) ➔ She\'s got blue eyes.',
        negative: 'hasn\'t got ➔ He hasn\'t got a car.',
        question: 'Has + Özne + got? ➔ Has she got a sister?',
        highlight: 'Kısaltma: \'s got (He\'s got, she\'s got)'
      }
    ],
    formulas: [
      {
        title: 'Olumlu Cümle (+)',
        pattern: 'Özne + have got / has got + Nesne / Nitelik',
        explanation: 'Örnek: They have got a beautiful country house.'
      },
      {
        title: 'Olumsuz Cümle (-)',
        pattern: 'Özne + haven\'t got / hasn\'t got + Nesne',
        explanation: 'Örnek: He hasn\'t got any siblings.'
      },
      {
        title: 'Soru Cümlesi (?)',
        pattern: 'Have / Has + Özne + got + Nesne + ?',
        explanation: 'Örnek: Have you got any questions? (Yes, I have. / No, I haven\'t.)'
      }
    ],
    keyRules: [
      'Amerikan İngilizcesinde "have / has" (Do you have a car? / She has a cat) tercih edilirken, İngiliz İngilizcesinde "have got / has got" kullanılır. Her iki kullanım da tamamen doğrudur.',
      'Fiziksel özellikler söylenirken sıfat her zaman isimden önce gelir: "She has got curly brown hair."',
      'Hastalık ve ağrılarda yaygın kullanım: "I have got a headache" (Başım ağrıyor), "She has got a sore throat" (Boğazı ağrıyor).'
    ],
    commonMistakes: [
      {
        wrong: 'He haven\'t got a passport.',
        correct: 'He hasn\'t got a passport.',
        reason: '"He" öznesiyle daima "hasn\'t got" kullanılır.'
      },
      {
        wrong: 'Do you have got a pencil?',
        correct: 'Have you got a pencil? / Do you have a pencil?',
        reason: '"Do" ile "got" aynı soru kalıbında karıştırılmamalıdır.'
      }
    ],
    examples: [
      { eng: 'We have got a lovely garden behind our house.', tr: 'Evimizin arkasında sevimli bir bahçemiz var.' },
      { eng: 'She has got long blonde hair and charming green eyes.', tr: 'Onun uzun sarı saçları ve büyüleyici yeşil gözleri var.' },
      { eng: 'Have you got a minute to help me with this form?', tr: 'Bu formda bana yardım etmek için bir dakikan var mı?' }
    ],
    proTip: 'Kısa cevaplarda "got" kelimesi tekrarlanmaz: "Have you got a car?" ➔ "Yes, I have." (Yes, I have got denmez).'
  },
  {
    id: 'a1-there-is-are',
    level: 'A1',
    title: 'There is / There are (Varlık Bildirme & Sayılabilirlik)',
    badge: 'Var & Yok',
    summary: 'Bir yerde bir şeyin var olduğunu ya da olmadığını bildirme; Some & Any kullanımı.',
    introduction: 'Bir odada, bir şehirde veya bir masada bir nesnenin ya da insanların var olduğunu ("Masanın üzerinde bir elma var", "Sınıfta 20 öğrenci var") ifade etmek için "There is / There are" kullanılır. Türkçedeki "var" kelimesinin karşılığıdır.',
    subjectSchema: [
      {
        subject: 'Tekil İsimler & Sayılamayanlar',
        subjectLabel: 'Singular & Uncountable Nouns',
        positive: 'There is (There\'s) ➔ There is a book on the desk. / There is milk.',
        negative: 'There isn\'t ➔ There isn\'t any milk in the fridge.',
        question: 'Is there ...? ➔ Is there a bank near here?',
        highlight: 'Sayılamayan sıvılar, para, zaman ile tekil muamelesi yapılır.'
      },
      {
        subject: 'Çoğul İsimler',
        subjectLabel: 'Plural Countable Nouns',
        positive: 'There are ➔ There are three apples in the basket.',
        negative: 'There aren\'t ➔ There aren\'t any chairs in the room.',
        question: 'Are there ...? ➔ Are there any tickets left?',
        highlight: 'Çoğul sayılabilen nesnelerle daima "There are" kullanılır.'
      }
    ],
    formulas: [
      {
        title: 'Some & Any Altın Kuralı',
        pattern: 'Olumlu Cümlelerde: SOME (Biraz / Birkaç)\nOlumsuz ve Sorularda: ANY (Hiç)',
        explanation: 'Örnek: There is some water. / There isn\'t any water. / Is there any water?'
      }
    ],
    keyRules: [
      '"A / An" kuralı: Sessiz harfle başlayan tekil isimler "a" (a car, a house), sesli harfle okunanlar "an" (an apple, an hour) alır.',
      'Sayılamayan isimler (uncountable nouns) her zaman "There is" ile kullanılır: water, bread, money, information, music, sugar.'
    ],
    commonMistakes: [
      {
        wrong: 'There are many waters in the bottle.',
        correct: 'There is a lot of water in the bottle.',
        reason: 'Su sayılamaz, çoğul yapılamaz ve "There are" ile kullanılmaz.'
      },
      {
        wrong: 'Is there some chairs in the kitchen?',
        correct: 'Are there any chairs in the kitchen?',
        reason: 'Sandalyeler çoğul olduğu için "Are there" ve sorularda "any" gereklidir.'
      }
    ],
    examples: [
      { eng: 'There is a cozy cafe right at the corner of the street.', tr: 'Sokağın tam köşesinde samimi bir kafe var.' },
      { eng: 'There are more than thirty historic mosques in the old city.', tr: 'Eski şehirde otuzdan fazla tarihi cami var.' },
      { eng: 'Is there any sugar left in the glass jar?', tr: 'Cam kavanozda hiç şeker kaldı mı?' }
    ],
    proTip: 'Birisinden bir şey ikram veya rica ederken (soru olsa bile) nezaketen "some" kullanılır: "Would you like some coffee?"'
  },
  {
    id: 'a1-can-cant',
    level: 'A1',
    title: 'Modals: Can & Can\'t (Yetenek & İzin & Rica)',
    badge: 'Yetenek & İzin',
    summary: 'Fiziksel veya zihinsel becerilerimiz, izin isteme ve nezaket ricaları.',
    introduction: '"Can", yapabilme gücünü, kabiliyeti, izin istemeyi ve yetenekleri ifade eden en pratik yardımcı fiildir. İngilizcedeki en dost canlısı kurala sahiptir: Özneden sonra doğrudan gelir ve özne ne olursa olsun (I, he, they) BİÇİMİ ASLA DEĞİŞMEZ.',
    subjectSchema: [
      {
        subject: 'Tüm Özneler (I, You, He, She, It, We, They)',
        subjectLabel: 'Herkes İçin Aynı Kalıp',
        positive: 'can + V1 (Yalın) ➔ He can swim. / I can speak Italian.',
        negative: 'cannot / can\'t + V1 ➔ She can\'t drive.',
        question: 'Can + Özne + V1? ➔ Can you help me, please?',
        highlight: 'Özneye göre -s, -ed veya başka hiçbir takı almaz!'
      }
    ],
    formulas: [
      {
        title: 'Genel Formül',
        pattern: 'Özne + can / can\'t + V1 (Fiilin EN YALIN HALİ)',
        explanation: 'Fiil asla "to" almaz. "I can to run" denmez, "I can run" denir.'
      }
    ],
    keyRules: [
      'Yetenek bildirirken: "Birds can fly." (Kuşlar uçabilir).',
      'İzin ve rica bildirirken: "Can I open the window?" (Pencereyi açabilir miyim?), "Can you pass the salt?" (Tuzu uzatabilir misin?).',
      'Olumsuz biçimi bitişik yazılır: "cannot" veya kısaca "can\'t".'
    ],
    commonMistakes: [
      {
        wrong: 'She cans speak three languages.',
        correct: 'She can speak three languages.',
        reason: '"Can" modal fiili 3. tekil şahıslarda bile asla -s takısı almaz.'
      },
      {
        wrong: 'I can to swim very well.',
        correct: 'I can swim very well.',
        reason: 'Can\'den sonra fiil "to" almadan doğrudan yalın haliyle kullanılır.'
      }
    ],
    examples: [
      { eng: 'He can play the acoustic guitar and sing wonderfully.', tr: 'Akustik gitar çalabilir ve harika şarkı söyleyebilir.' },
      { eng: 'I can\'t attend the meeting tomorrow because I have a doctor\'s appointment.', tr: 'Doktor randevum olduğu için yarınki toplantıya katılamam.' },
      { eng: 'Can you please lend me your charger for an hour?', tr: 'Şarj aletini bana bir saatliğine ödünç verebilir misin lütfen?' }
    ],
    proTip: 'Daha resmi ve kibar bir rica için "Can" yerine "Could" tercih edebilirsiniz: "Could you help me?"'
  },

  // ===========================================================
  // ======================== A2 SEVİYESİ =======================
  // ===========================================================
  {
    id: 'a2-past-simple',
    level: 'A2',
    title: 'Past Simple (Geçmiş Zaman: Düzenli & Düzensiz Fiiller)',
    badge: 'Tamamlanmış Geçmiş',
    summary: 'Geçmişte belirli bir zamanda gerçekleşmiş ve tamamen sonlanmış eylemler.',
    introduction: 'Dün, geçen hafta, çocukluğumuzda ya da belirli bir geçmiş tarihte olup bitmiş olayları anlatmak için Geçmiş Zaman kullanılır. Fiiller iki gruptur: Düzenli olanlar "-ed" takısı alır (play ➔ played), düzensiz olanlar ise tamamen kelime kökünden değişir (go ➔ went, buy ➔ bought).',
    subjectSchema: [
      {
        subject: 'Tüm Özneler (Olumlu Cümle)',
        subjectLabel: 'I, You, He, She, It, We, They',
        positive: 'V2 (Fiilin 2. Hali) ➔ I visited my uncle. / She bought a car.',
        negative: 'didn\'t + V1 (Fiil YALIN) ➔ We didn\'t go out.',
        question: 'Did + Özne + V1 (YALIN)? ➔ Did you see that movie?',
        highlight: 'Olumsuzda (didn\'t) ve soruda (did) fiil YALIN (V1) haline döner!'
      },
      {
        subject: 'To Be Fiilinin Geçmiş Hali (Was / Were)',
        subjectLabel: 'Durum Cümleleri (Fiilsiz)',
        positive: 'I / He / She / It ➔ was | You / We / They ➔ were',
        negative: 'wasn\'t | weren\'t ➔ He wasn\'t at home.',
        question: 'Was / Were + Özne? ➔ Were you tired yesterday?',
        highlight: 'Cümlede was/were varsa asla "did" yardımcı fiili kullanılmaz!'
      }
    ],
    formulas: [
      {
        title: 'Düzenli Fiillerde -ed Ekleme Kuralları',
        pattern: '• Genel: walk ➔ walked, clean ➔ cleaned\n• "e" ile biten: live ➔ lived, arrive ➔ arrived\n• Sessiz + y: study ➔ studied, cry ➔ cried\n• Tek sesli + sessiz: stop ➔ stopped, plan ➔ planned',
        explanation: 'Telaffuz kuralı: -ed takısı ses durumuna göre /t/, /d/ ya da /ɪd/ şeklinde sesletilir.'
      }
    ],
    keyRules: [
      'Geçmiş Zaman Belirteçleri: yesterday (dün), last week/year (geçen hafta/yıl), two days ago (iki gün önce), in 2018 (2018\'de), when I was a child (çocukken).',
      'Altın Kural: "Did" veya "Didn\'t" cümlenin patronudur; geldiği anda fiil 2. halden (V2) kurtulup en sade 1. haline (V1) döner.'
    ],
    comparisonTable: {
      title: 'En Çok Kullanılan 12 Temel Düzensiz Fiil (Irregular Verbs)',
      headers: ['V1 (Yalın)', 'V2 (Geçmiş Hali)', 'Türkçe Anlamı', 'Örnek Cümle'],
      rows: [
        ['go', 'went', 'gitmek', 'We went to the beach yesterday.'],
        ['come', 'came', 'gelmek', 'He came late to the party.'],
        ['see', 'saw', 'görmek', 'I saw an eagle in the sky.'],
        ['buy', 'bought', 'satın almak', 'She bought a vintage coat.'],
        ['make', 'made', 'yapmak', 'My mom made a delicious cake.'],
        ['take', 'took', 'almak / götürmek', 'He took my umbrella by mistake.'],
        ['eat', 'ate', 'yemek', 'We ate Italian pasta for dinner.'],
        ['drink', 'drank', 'içmek', 'I drank two cups of coffee.'],
        ['write', 'wrote', 'yazmak', 'She wrote a lovely poem.'],
        ['read', 'read (/red/)', 'okumak', 'He read the whole newspaper.'],
        ['give', 'gave', 'vermek', 'They gave us a warm welcome.'],
        ['find', 'found', 'bulmak', 'I found my lost keys under the sofa.']
      ]
    },
    commonMistakes: [
      {
        wrong: 'I didn\'t went to work yesterday.',
        correct: 'I didn\'t go to work yesterday.',
        reason: '"Didn\'t" zaten geçmişi yüklendiği için fiil V2 (went) değil, yalın (go) olmalıdır.'
      },
      {
        wrong: 'Did you saw that car crash?',
        correct: 'Did you see that car crash?',
        reason: '"Did" ile başlayan sorularda fiil mutlaka yalın (see) kalmalıdır.'
      },
      {
        wrong: 'Were you play football yesterday?',
        correct: 'Did you play football yesterday?',
        reason: 'Ana fiil (play) varken soru "were" ile değil "Did" ile kurulur.'
      }
    ],
    examples: [
      { eng: 'We visited our grandparents in the countryside last weekend.', tr: 'Geçen hafta sonu kırsaldaki büyükanne ve büyükbabamızı ziyaret ettik.' },
      { eng: 'She bought an elegant dress for her graduation ceremony.', tr: 'Mezuniyet töreni için zarif bir elbise satın aldı.' },
      { eng: 'I didn\'t sleep well last night because of the loud thunderstorm.', tr: 'Şiddetli gök gürültüsü yüzünden dün gece iyi uyuyamadım.' },
      { eng: 'Where did you stay during your trip to Rome?', tr: 'Roma seyahatiniz boyunca nerede kaldınız?' }
    ],
    proTip: 'Düzensiz fiilleri ezberlerken gruplayarak (örneğin -ought ile bitenler: buy-bought, think-thought, bring-brought) çalışmak akılda kalıcılığı ikiye katlar.'
  },
  {
    id: 'a2-past-continuous',
    level: 'A2',
    title: 'Past Continuous & When / While (Geçmişte Süregelen Zaman)',
    badge: 'Geçmişteki Süreç',
    summary: 'Geçmişte belirli bir anda devam etmekte olan eylemler ve araya giren anlık olaylar.',
    introduction: 'Geçmişte belli bir saatte yapmakta olduğumuz bir eylemi ("Dün akşam saat 8\'de televizyon izliyordum") veya geçmişte devam eden uzun bir eylem sırasında başka ani bir olayın gerçekleşmesini ("Ben duş alırken telefon çaldı") anlatmak için kullanılır.',
    subjectSchema: [
      {
        subject: 'I / He / She / It',
        subjectLabel: 'Tekil Şahıslar',
        positive: 'was + V-ing ➔ I was cooking dinner. / She was studying.',
        negative: 'wasn\'t + V-ing ➔ He wasn\'t sleeping when I called.',
        question: 'Was + Özne + V-ing? ➔ Was it raining when you left?',
        highlight: 'Tekillerle "was + V-ing" kullanılır.'
      },
      {
        subject: 'You / We / They',
        subjectLabel: 'Çoğul Şahıslar',
        positive: 'were + V-ing ➔ We were walking in the park.',
        negative: 'weren\'t + V-ing ➔ They weren\'t listening to the teacher.',
        question: 'Were + Özne + V-ing? ➔ Were you waiting for me?',
        highlight: 'Çoğullarla "were + V-ing" kullanılır.'
      }
    ],
    formulas: [
      {
        title: 'When & While Altın Formülü',
        pattern: '• While + Past Continuous (Uzun Eylem), ... Past Simple (Kısa Eylem)\n  Örnek: While I was driving, my phone rang.\n• When + Past Simple (Kısa Eylem), ... Past Continuous (Uzun Eylem)\n  Örnek: When the lights went out, we were watching a movie.',
        explanation: 'While "-iken" anlamında devam eden uzun eylemi, When "-dığında" anlamında kesintiye uğratan ani olayı bağlar.'
      }
    ],
    keyRules: [
      'Aynı anda devam eden iki paralel eylemde her iki tarafta da "while" ile Past Continuous kullanılabilir: "While I was studying, my brother was playing computer games."',
      'Durum bildiren stative fiiller (know, want, believe) burada da -ing almaz, Past Simple kullanılır.'
    ],
    commonMistakes: [
      {
        wrong: 'When I was walking home, it was starting to rain.',
        correct: 'When I was walking home, it started to rain.',
        reason: 'Yağmurun başlaması ani bir eylemdir; Past Simple (started) gerektirir.'
      }
    ],
    examples: [
      { eng: 'I was having a peaceful breakfast when the courier knocked on the door.', tr: 'Kurye kapıyı çaldığında huzurlu bir kahvaltı yapıyordum.' },
      { eng: 'What were you doing yesterday at eight in the evening?', tr: 'Dün akşam saat sekizde ne yapıyordun?' },
      { eng: 'While they were travelling through Italy, they took hundreds of photos.', tr: 'İtalya\'da seyahat ederlerken yüzlerce fotoğraf çektiler.' }
    ],
    proTip: 'Hikaye ve roman anlatımlarında arka plan atmosferini kurmak için Past Continuous, olayları ilerletmek için Past Simple kullanılır.'
  },
  {
    id: 'a2-future-will-going-to',
    level: 'A2',
    title: 'Gelecek Zaman: Will vs. Be Going To',
    badge: 'Gelecek Planları & Tahmin',
    summary: 'Önceden planlanan niyetler, anlık konuşma kararları, sözler ve kanıtlı tahminler.',
    introduction: 'İngilizcede geleceği anlatırken iki temel yapı vardır. "Be going to", önceden karar verilmiş planlar ve şu anda gözle görülen açık bir kanıtın sonucunda gerçekleşecek durumlar için kullanılır. "Will" ise konuşma anında ani verilen kararlar, verilen sözler, teklifler ve kişisel inançlar için tercih edilir.',
    subjectSchema: [
      {
        subject: 'Be Going To (Plan & Açık Kanıt)',
        subjectLabel: 'Kararlaştırılmış Niyet',
        positive: 'am/is/are + going to + V1 ➔ I am going to buy a new laptop.',
        negative: 'am not / isn\'t / aren\'t + going to + V1 ➔ We aren\'t going to travel.',
        question: 'Am/Is/Are + Özne + going to + V1? ➔ Are you going to invite him?',
        highlight: 'Karar geçmişte verilmiş, plan hazır.'
      },
      {
        subject: 'Will (Anlık Karar, Söz & Tahmin)',
        subjectLabel: 'Konuşma Anında Verilen Karar',
        positive: 'will (\'ll) + V1 ➔ The phone is ringing. I\'ll answer it!',
        negative: 'will not (won\'t) + V1 ➔ I won\'t tell your secret.',
        question: 'Will + Özne + V1? ➔ Will you come with us tomorrow?',
        highlight: 'Tüm öznelerde "will" aynıdır, asla değişmez.'
      }
    ],
    formulas: [
      {
        title: 'Karşılaştırma Mantığı',
        pattern: '• BE GOING TO: Önceden plan + Gözle görülür fiziksel kanıt (Look at those black clouds! It is going to rain).\n• WILL: Konuşma anında anlık karar + Tahmin (I think / I hope / I believe) + Söz verme.',
        explanation: 'Restoranda garsona sipariş verirken "I will have a soup, please" (anlık karar).'
      }
    ],
    keyRules: [
      '"I think, I believe, probably, maybe" ifadeleriyle genellikle "will" kullanılır: "I think it will be sunny tomorrow."',
      'Geleceğe yönelik kesin tarihli bilet alınmış programlarda Present Continuous (Şimdiki Zaman) da sıkça kullanılır: "I am flying to Paris tomorrow."'
    ],
    commonMistakes: [
      {
        wrong: 'I am going to will help you.',
        correct: 'I will help you. / I am going to help you.',
        reason: 'İki gelecek zaman yapısı asla aynı cümlede yan yana getirilemez.'
      },
      {
        wrong: 'Look at the time! We will be late.',
        correct: 'Look at the time! We are going to be late.',
        reason: 'Saate bakıp kanıt gördüğümüz için "going to" daha uygundur.'
      }
    ],
    examples: [
      { eng: 'Look at those dark grey clouds! It is definitely going to rain.', tr: 'Şu koyu gri bulutlara bak! Kesinlikle yağmur yağacak.' },
      { eng: 'Don\'t carry those heavy bags alone; I will help you.', tr: 'O ağır çantaları tek başına taşıma; ben sana yardım edeceğim.' },
      { eng: 'I promise I will never forget your kindness.', tr: 'Söz veriyorum bu nezaketini asla unutmayacağım.' }
    ],
    proTip: 'Bir kafede sipariş verirken daima "I will have a cappuccino" deyin; çünkü bu kararı menüye bakarken konuşma anında vermiş olursunuz.'
  },
  {
    id: 'a2-comparatives-superlatives',
    level: 'A2',
    title: 'Comparatives & Superlatives (Kıyaslama & Üstünlük)',
    badge: 'Karşılaştırma Sanatı',
    summary: 'İki nesneyi birbiriyle kıyaslama (Comparative) veya bir grubun en iyisini seçme (Superlative).',
    introduction: 'Sıfatların kıyaslama formlarıdır. "Comparative" iki şeyi (Ahmet Mehmet\'ten daha hızlıdır), "Superlative" ise üç veya daha fazla şey arasında zirvede olanı (Everest dünyanın en yüksek dağıdır) belirtir.',
    subjectSchema: [
      {
        subject: 'Kısa Sıfatlar (1 Hece)',
        subjectLabel: 'fast, tall, cheap, cold',
        positive: 'Comparative: Sıfat + -er + than ➔ faster than, taller than',
        negative: 'Superlative: the + Sıfat + -est ➔ the fastest, the tallest',
        question: 'Eşitlik (As ... As): as + Sıfat + as ➔ as tall as me',
        highlight: '"y" ile biten 2 heceliler de bu kurala uyar: easy ➔ easier than'
      },
      {
        subject: 'Uzun Sıfatlar (2+ Hece)',
        subjectLabel: 'expensive, modern, comfortable',
        positive: 'Comparative: more + Sıfat + than ➔ more expensive than',
        negative: 'Superlative: the most + Sıfat ➔ the most expensive',
        question: 'Daha az: less + Sıfat + than ➔ less expensive than',
        highlight: 'Uzun sıfatların sonuna asla -er veya -est eklenmez!'
      }
    ],
    formulas: [
      {
        title: 'Özel Düzensiz Sıfatlar (Ezberlenmeli)',
        pattern: '• good ➔ better than ➔ the best (iyi - daha iyi - en iyi)\n• bad ➔ worse than ➔ the worst (kötü - daha kötü - en kötü)\n• far ➔ further/farther than ➔ the furthest (uzak - daha uzak - en uzak)\n• little ➔ less than ➔ the least (az - daha az - en az)\n• much/many ➔ more than ➔ the most (çok - daha çok - en çok)',
        explanation: 'Bu sıfatlar kural dışıdır ve tamamen şekil değiştirir.'
      }
    ],
    keyRules: [
      'Superlative yapılarının önünde daima "the" artikeli yer alır: "the most dangerous animal", "the longest river".',
      'İki taraf eşitse: "as + sıfat + as" kullanılır: "He is as strong as a lion."',
      'İki şeyden biri diğerinden daha az ise: "not as ... as" kalıbı harikadır: "A train is not as fast as an airplane."'
    ],
    commonMistakes: [
      {
        wrong: 'This phone is more cheaper than mine.',
        correct: 'This phone is cheaper than mine.',
        reason: '"Cheap" tek hecelidir; hem "more" hem "-er" takısı aynı anda kullanılamaz.'
      },
      {
        wrong: 'He is the most good player in the team.',
        correct: 'He is the best player in the team.',
        reason: '"Good" düzensiz bir sıfattır; "the best" olmalıdır.'
      }
    ],
    examples: [
      { eng: 'Istanbul is much more crowded and energetic than Ankara.', tr: 'İstanbul Ankara\'dan çok daha kalabalık ve enerjiktir.' },
      { eng: 'Mount Everest is the highest mountain peak on Earth.', tr: 'Everest Dağı yeryüzündeki en yüksek dağ zirvesidir.' },
      { eng: 'Health and inner peace are far more valuable than gold.', tr: 'Sağlık ve iç huzuru altından katbekat daha değerlidir.' }
    ],
    proTip: 'Karşılaştırmayı güçlendirmek için önüne "much" veya "far" ekleyebilirsiniz: "much better" (çok daha iyi).'
  },
  {
    id: 'a2-modals-must-should',
    level: 'A2',
    title: 'Modals: Must, Have to & Should (Zorunluluk & Tavsiye)',
    badge: 'Kurallar & Öneriler',
    summary: 'Yasal ve kişisel zorunluluklar (must/have to), yasaklar (mustn\'t) ve dostane tavsiyeler (should).',
    introduction: 'Günlük hayatta kurallardan, yapılması zorunlu görevlerden veya birine iyi bir tavsiye vermekten bahsederken bu yardımcı fiiller kullanılır.',
    subjectSchema: [
      {
        subject: 'Must & Mustn\'t',
        subjectLabel: 'Kişisel Zorunluluk & Kesin Yasak',
        positive: 'must + V1 ➔ I must study harder. (Kişisel karar)',
        negative: 'mustn\'t + V1 ➔ You mustn\'t smoke here! (Kesin YASAK)',
        question: 'Must I ...? ➔ Must we leave now?',
        highlight: 'Mustn\'t kesin yasak bildirir (Yasaklanmıştır).'
      },
      {
        subject: 'Have to / Don\'t have to',
        subjectLabel: 'Dışsal Kural & Zorunluluk Yokluğu',
        positive: 'have to / has to + V1 ➔ Doctors have to wear uniforms.',
        negative: 'don\'t have to + V1 ➔ You don\'t have to wake up early tomorrow.',
        question: 'Do you have to ...? ➔ Do I have to pay now?',
        highlight: '"Don\'t have to" = Zorunda değilsin, serbestsin (Yasak değildir!).'
      },
      {
        subject: 'Should & Shouldn\'t',
        subjectLabel: 'Tavsiye & Öneri',
        positive: 'should + V1 ➔ You should drink more water.',
        negative: 'shouldn\'t + V1 ➔ You shouldn\'t stay up so late.',
        question: 'Should I ...? ➔ Should I accept this job offer?',
        highlight: 'Nezaket ve tavsiye: "Bunu yapman iyi olur."'
      }
    ],
    formulas: [
      {
        title: 'Büyük Fark: Mustn\'t vs. Don\'t have to',
        pattern: '• You MUSTN\'T park here = Burada park etmek KESİNLİKLE YASAKTIR (Ceza yersin).\n• You DON\'T HAVE TO pay = Ödemek zorunda değilsin, istersen ödersin (Gerek yok).',
        explanation: 'En çok karıştırılan iki anlam ayrımıdır.'
      }
    ],
    keyRules: [
      'Tüm bu modal fiillerden sonra gelen ana fiil daima yalın (V1) haldedir: "You should see a doctor."',
      'Geçmiş zamanda zorunluluk söylerken "must" yerine "had to" kullanılır: "I had to work late yesterday."'
    ],
    commonMistakes: [
      {
        wrong: 'You must to wear a seatbelt.',
        correct: 'You must wear a seatbelt.',
        reason: 'Must\'tan sonra asla "to" gelmez; doğrudan yalın fiil kullanılır.'
      },
      {
        wrong: 'Tomorrow is Sunday, so I mustn\'t go to school.',
        correct: 'Tomorrow is Sunday, so I don\'t have to go to school.',
        reason: 'Pazar günü okula gitmek "yasak" değil, "gerek yoktur"; don\'t have to denmelidir.'
      }
    ],
    examples: [
      { eng: 'Passengers must fasten their seat belts during take-off and landing.', tr: 'Yolcular kalkış ve iniş sırasında emniyet kemerlerini bağlamak zorundadır.' },
      { eng: 'You should really read this inspiring autobiography; it will change your mindset.', tr: 'Bu ilham verici otobiyografiyi gerçekten okumalısın; bakış açını değiştirecektir.' },
      { eng: 'You don\'t have to come with us if you are feeling exhausted.', tr: 'Kendini bitkin hissediyorsan bizimle gelmek zorunda değilsin.' }
    ],
    proTip: 'Bir arkadaşınıza nazikçe öneride bulunurken "I think you should..." kalıbı en sempatik yaklaşımdır.'
  },

  // ===========================================================
  // ======================== B1 SEVİYESİ =======================
  // ===========================================================
  {
    id: 'b1-present-perfect',
    level: 'B1',
    title: 'Present Perfect Tense (Yakın / Etkisi Süren Geçmiş)',
    badge: 'Geçmiş ile Bugünün Köprüsü',
    summary: 'Geçmişte yaşanmış ancak sonucu veya etkisi şu anda devam eden eylemler; hayat tecrübeleri.',
    introduction: 'Türkçede birebir aynı zaman olmadığı için Türk öğrencilerin en çok tereddüt ettiği ama İngilizcenin en popüler ve şık zamanıdır. Olayın tam olarak ne zaman olduğu değil, şu anki sonucunun ve getirdiği tecrübenin önemi vurgulanır. Örneğin anahtarınızı kaybettiyseniz ve şu an kapıda bekliyorsanız "I have lost my key" dersiniz.',
    subjectSchema: [
      {
        subject: 'I / You / We / They',
        subjectLabel: 'Ben, Sen, Biz, Onlar',
        positive: 'have (\'ve) + V3 ➔ I have lived here for 5 years.',
        negative: 'haven\'t + V3 ➔ They haven\'t finished the project yet.',
        question: 'Have + Özne + V3? ➔ Have you ever seen a shooting star?',
        highlight: 'Düzenli fiiller -ed alır; düzensizlerin 3. hali (V3) kullanılır.'
      },
      {
        subject: 'He / She / It',
        subjectLabel: '3. Tekil Şahıslar',
        positive: 'has (\'s) + V3 ➔ She has visited ten different countries.',
        negative: 'hasn\'t + V3 ➔ He hasn\'t replied to my email yet.',
        question: 'Has + Özne + V3? ➔ Has the movie started?',
        highlight: 'Tekillerde "has + V3" eşleşir.'
      }
    ],
    formulas: [
      {
        title: 'Önemli Zaman Belirteçleri (Key Words)',
        pattern: '• Ever: Hayatında hiç mi? (Sorularda: Have you ever been to Rome?)\n• Never: Asla / Hayatımda hiç (I have never tasted sushi).\n• Just: Az önce / Henüz (I have just sent the message).\n• Already: Çoktan / Zaten beklenenden önce (She has already left).\n• Yet: Henüz değil (Cümle sonunda: I haven\'t seen it yet).\n• Since: -den beri (Başlangıç noktası: since 2015, since Monday).\n• For: -dır/-dir (Süreç: for 10 years, for two hours).',
        explanation: 'Bu zarflar cümlenin neresinde yer aldıklarına göre anlamı şekillendirir.'
      }
    ],
    keyRules: [
      'KESİN GEÇMİŞ ZAMAN KURALI: Cümlede "yesterday", "last year", "in 1999", "two hours ago" gibi net bir geçmiş zaman ifadesi varsa PRESENT PERFECT KULLANILAMAZ! O zaman Past Simple (went, saw) zorunludur.',
      'Been vs. Gone:\n• "He has gone to Italy" = İtalya\'ya gitti ve hala orada, dönmedi.\n• "He has been to Italy" = İtalya\'da bulundu, gezdi ve geri döndü.'
    ],
    comparisonTable: {
      title: 'Since vs. For Karşılaştırma Matrisi',
      headers: ['Zarf', 'Mantık', 'Örnek Zamanlar', 'Örnek Cümle'],
      rows: [
        ['Since', 'Eylemin başladığı kesin an (Başlangıç noktası)', 'since 2018, since morning, since childhood, since Monday', 'I have worked here since 2020.'],
        ['For', 'Eylemin sürdüğü toplam zaman dilimi (Süreç)', 'for 3 days, for 5 years, for two hours, for ages', 'She has lived in Madrid for 6 years.']
      ]
    },
    commonMistakes: [
      {
        wrong: 'I have seen him yesterday.',
        correct: 'I saw him yesterday.',
        reason: '"Yesterday" geçmişte tamamlanmış net bir zamandır; Present Perfect ile ASLA birleşmez.'
      },
      {
        wrong: 'I live in this city since 2018.',
        correct: 'I have lived in this city since 2018.',
        reason: 'Eğer geçmişten bugüne gelen bir süreç varsa Present Simple değil, Present Perfect kullanılır.'
      }
    ],
    examples: [
      { eng: 'I have lived in this vibrant city for more than seven years.', tr: 'Yedi yılı aşkın süredir bu hareketli şehirde yaşıyorum.' },
      { eng: 'Have you ever experienced diving in a coral reef?', tr: 'Daha önce hiç bir mercan resifinde dalış yapmayı deneyimledin mi?' },
      { eng: 'The engineers have already completed the preliminary research.', tr: 'Mühendisler ön araştırmayı çoktan tamamladılar.' },
      { eng: 'I haven\'t received any formal confirmation from the university yet.', tr: 'Üniversiteden henüz resmi bir onay almadım.' }
    ],
    proTip: 'Biriyle tanışıp sohbet ederken hayat deneyimlerinizi "Have you ever..." kalıbıyla sorup buzları anında eritebilirsiniz.'
  },
  {
    id: 'b1-perfect-vs-past',
    level: 'B1',
    title: 'Present Perfect vs. Past Simple (Büyük Karşılaştırma)',
    badge: 'Zaman Ayrımı',
    summary: 'İngilizce öğrenenlerin en büyük ikilemini çözen net karşılaştırma rehberi.',
    introduction: 'Geçmişte olan bir eylemi aktarırken ne zaman "went / saw" (Past Simple), ne zaman "have gone / have seen" (Present Perfect) demeliyiz? Tek bir soru tüm farkı belirler: "Zaman bitti mi ve eylemin tam tarihi önemli mi?"',
    subjectSchema: [
      {
        subject: 'Past Simple (Geçmişte Kapanan Kapı)',
        subjectLabel: 'Zamanı Belli ve Bitmiş',
        positive: 'I lost my keys yesterday. ➔ Dün kaybettim (belki sonra buldum).',
        negative: 'Did you see John this morning? ➔ (Öğleden sonra konuşuluyorsa).',
        question: 'When did you arrive? ➔ Zamanı sorarken daima Past Simple.',
        highlight: 'Zaman tamamen bitti ve kapandı.'
      },
      {
        subject: 'Present Perfect (Bugünle Bağlantılı Kapı)',
        subjectLabel: 'Etkisi / Sonucu Şu An Yaşanıyor',
        positive: 'I have lost my keys! ➔ Anahtarımı kaybettim (Şu an kapıda kaldım).',
        negative: 'Have you seen John this morning? ➔ (Sabah vakti hala sürüyorsa).',
        question: 'How long have you lived here? ➔ Ne zamandır buradasın (hala buradayım).',
        highlight: 'Eylemin sonucu şimdiye yansıyor.'
      }
    ],
    formulas: [
      {
        title: 'Dedektif Kuralı: "When" Sorusu',
        pattern: '"When" ile soru soruyorsanız istisnasız PAST SIMPLE kullanmalısınız!\n• When did you buy this car? (DOĞRU)\n• When have you bought this car? (YANLIŞ)',
        explanation: 'Çünkü "when" spesifik bir geçmiş anı hedefler.'
      }
    ],
    keyRules: [
      'Tamamlanmamış zaman dilimleri (this week, today, this month) gün bitmediyse Present Perfect ile kullanılabilir: "I have drunk three coffees today."',
      'Hayat tecrübesi konuşurken Present Perfect ile başlanır, detaya inildiğinde Past Simple\'a geçilir: "I have been to Paris. I went there two years ago with my family."'
    ],
    commonMistakes: [
      {
        wrong: 'When have you graduated from university?',
        correct: 'When did you graduate from university?',
        reason: '"When" sorusu belirli bir geçmiş tarihi sorduğu için daima Past Simple ister.'
      }
    ],
    examples: [
      { eng: 'Shakespeare wrote thirty-seven plays in his lifetime.', tr: 'Shakespeare yaşamı boyunca otuz yedi oyun yazdı. (Hayatı bitti, Past Simple).' },
      { eng: 'J.K. Rowling has written many international bestsellers.', tr: 'J.K. Rowling birçok uluslararası çok satan kitap yazdı. (Yazar hayatta ve devam edebilir).' }
    ],
    proTip: 'Kayıp bir eşya ararken durum devam ediyorsa "I have lost it", bulduysanız "I found it" deyin.'
  },
  {
    id: 'b1-passive-voice',
    level: 'B1',
    title: 'Passive Voice (Edilgen Çatı)',
    badge: 'Eylem Odaklı',
    summary: 'İşi yapanın bilinmediği, önemsiz olduğu veya eylemin sonucunun öne çıkarıldığı yapılar.',
    introduction: 'Haber bültenlerinde, bilimsel makalelerde ve resmi konuşmalarda sıklıkla karşımıza çıkar. "Ahmet pencereyi kırdı" yerine "Pencere kırıldı" diyerek yapılan işe odaklanılır.',
    subjectSchema: [
      {
        subject: 'Geniş Zaman Pasif (Present Simple)',
        subjectLabel: 'am / is / are + V3',
        positive: 'English is spoken all over the world.',
        negative: 'These rooms aren\'t cleaned every day.',
        question: 'Is the mail delivered on Saturdays?',
        highlight: 'Genel gerçekler ve rutin pasif eylemler.'
      },
      {
        subject: 'Geçmiş Zaman Pasif (Past Simple)',
        subjectLabel: 'was / were + V3',
        positive: 'The telephone was invented by Alexander Graham Bell.',
        negative: 'The stolen car wasn\'t found.',
        question: 'Were all the documents signed yesterday?',
        highlight: 'Geçmişte tamamlanmış pasif olaylar.'
      },
      {
        subject: 'Gelecek & Modals Pasif',
        subjectLabel: 'will be + V3 / modal + be + V3',
        positive: 'The new hospital will be opened next month.',
        negative: 'Seat belts must be worn at all times.',
        question: 'Can this problem be solved quickly?',
        highlight: 'Modal fiillerde "modal + be + V3" gelir.'
      }
    ],
    formulas: [
      {
        title: 'Evrensel Pasif Formülü',
        pattern: 'Nesne (Yeni Özne) + TO BE (İlgili Zamana Göre) + V3 (Past Participle)',
        explanation: 'Eğer işi yapanı özellikle eklemek istiyorsak cümlenin sonuna "by + kişi" ekleriz: "...written by Shakespeare."'
      }
    ],
    keyRules: [
      'Aktif cümleden pasife geçerken aktif cümlenin nesnesi (object), pasif cümlenin öznesi (subject) konumuna geçer.',
      'Geçişsiz fiiller (nesne almayan fiiller: sleep, arrive, die, happen) ASLA pasif yapılamaz: "An accident was happened" YANLIŞ ➔ "An accident happened" DOĞRU.'
    ],
    commonMistakes: [
      {
        wrong: 'The bridge built in 1973.',
        correct: 'The bridge was built in 1973.',
        reason: 'Köprü kendi kendini inşa edemez! "To be (was)" yardımcı fiili olmadan pasif kurulamaz.'
      }
    ],
    examples: [
      { eng: 'Millions of payment transactions are processed securely every day.', tr: 'Her gün milyonlarca ödeme işlemi güvenli şekilde işlenir.' },
      { eng: 'This majestic cathedral was constructed in the fourteenth century.', tr: 'Bu görkemli katedral on dördüncü yüzyılda inşa edilmiştir.' },
      { eng: 'All flights have been delayed due to the heavy winter storm.', tr: 'Şiddetli kış fırtınası sebebiyle tüm uçuşlar ertelenmiştir.' }
    ],
    proTip: 'Akademik veya iş e-postalarında resmi bir ton yakalamak istediğinizde pasif cümleler cümlenize ağırlık katar.'
  },
  {
    id: 'b1-conditionals',
    level: 'B1',
    title: 'Conditionals: Type 1 & Type 2 (Şart Cümleleri)',
    badge: 'Olasılıklar & Hayaller',
    summary: 'Gerçekleşmesi muhtemel durumlar (Type 1) ve şimdiki hayali/varsayımsal senaryolar (Type 2).',
    introduction: 'Eğer anlamına gelen "If" bağlacı ile kurulan koşul cümleleridir. Type 1 gelecekteki gerçekçi olasılıkları anlatırken, Type 2 şu anda elimizde olmayan ama olsaydı ne yapacağımızı anlatan hayalleri betimler.',
    subjectSchema: [
      {
        subject: 'Type 1 (Gerçekçi Gelecek Koşulu)',
        subjectLabel: 'Real Possibility in Future',
        positive: 'If + Present Simple, ... will + V1 ➔ If it rains, I will stay at home.',
        negative: 'If you don\'t study, you won\'t pass the exam.',
        question: 'What will you do if you miss the train?',
        highlight: 'Şart gerçekleşirse sonuç kesinlikle mümkün.'
      },
      {
        subject: 'Type 2 (Şimdiki Hayali / Varsayımsal Koşul)',
        subjectLabel: 'Unreal / Hypothetical Present',
        positive: 'If + Past Simple, ... would + V1 ➔ If I had money, I would buy a boat.',
        negative: 'If he weren\'t so busy, he would join us.',
        question: 'If you won the lottery, where would you travel?',
        highlight: 'Geçmiş zaman kullanılır ama anlam ŞİMDİKİ zamandır!'
      }
    ],
    formulas: [
      {
        title: 'Altın Kural: If Tarafına Asla Will Gelmez!',
        pattern: '• If I will see him, I will tell him. ➔ YANLIŞ\n• If I see him, I will tell him. ➔ DOĞRU',
        explanation: '"If" cümlesinin bulunduğu şart kısmına asla "will" ya da "would" konmaz.'
      }
    ],
    keyRules: [
      'Type 2\'de to be fiili için tüm öznelerle (I, he, she, it dahil) "were" kullanılması resmi ve şık olandır: "If I were you, I would take that course" (Senin yerinde olsaydım...).',
      'Virgül Kuralı: Eğer "If" cümlesi başta ise yan cümle bitince virgül konur. Eğer "If" ortadaysa virgül konmaz: "I will call you if I get the news."'
    ],
    commonMistakes: [
      {
        wrong: 'If I will have time tomorrow, I will call you.',
        correct: 'If I have time tomorrow, I will call you.',
        reason: 'Şart yan cümleciğinde "will" kullanılmaz, geniş zaman çekimi gerekir.'
      },
      {
        wrong: 'If I was you, I wouldn\'t buy that car.',
        correct: 'If I were you, I wouldn\'t buy that car.',
        reason: 'Tavsiye ve hayali şart kalıbında "were" tercih edilir.'
      }
    ],
    examples: [
      { eng: 'If you practice speaking English every day, you will become fluent quickly.', tr: 'Her gün İngilizce konuşma pratiği yaparsan hızlıca akıcı hale gelirsin.' },
      { eng: 'If I had more spare time, I would learn how to play the classical violin.', tr: 'Daha çok boş vaktim olsaydı klasik keman çalmayı öğrenirdim.' },
      { eng: 'If I were in your position, I would discuss the matter openly with the manager.', tr: 'Senin yerinde olsaydım meseleyi müdürle açıkça konuşurdum.' }
    ],
    proTip: 'Bir arkadaşınıza akıl verirken veya tavsiye sunarken "If I were you, I would..." kalıbından daha etkilisi yoktur.'
  },

  // ===========================================================
  // ======================== B2 SEVİYESİ =======================
  // ===========================================================
  {
    id: 'b2-third-mixed-conditionals',
    level: 'B2',
    title: 'Third & Mixed Conditionals (Geçmiş Pişmanlıklar & Karma Koşullar)',
    badge: 'Pişmanlık & Zamansal Köprü',
    summary: 'Geçmişte yaşanmış bitmiş olayların değiştirilemez varsayımları ve günümüze yansımaları.',
    introduction: 'Geçmiş için duyulan pişmanlıkları ("Keşke öyle yapsaydım"), kaçırılan fırsatları ve alternatif geçmiş senaryolarını anlatır. Mixed Conditionals ise geçmişteki bir olayın şimdiki zamana olan yansımasını bağlar.',
    subjectSchema: [
      {
        subject: 'Third Conditional (Geçmiş Hayali)',
        subjectLabel: 'Geçmiş Sebep ➔ Geçmiş Sonuç',
        positive: 'If + had + V3, ... would have + V3 ➔ If I had studied, I would have passed.',
        negative: 'If we hadn\'t missed the bus, we wouldn\'t have been late.',
        question: 'Would you have accepted the job if they had offered more?',
        highlight: 'Olay geçmişte bitti, artık değiştirilmesi imkansız.'
      },
      {
        subject: 'Mixed Conditional (Karma Koşul)',
        subjectLabel: 'Geçmiş Sebep ➔ Şimdiki Sonuç',
        positive: 'If + had + V3, ... would + V1 (NOW) ➔ If I had taken the map, we wouldn\'t be lost now.',
        negative: 'If you hadn\'t spent all your salary, you would have money today.',
        question: 'If you hadn\'t moved to England, would you be happy now?',
        highlight: 'Geçmişteki karar şimdiki durumu etkiliyor.'
      }
    ],
    formulas: [
      {
        title: 'Devrik Yapı (Inversion - İleri Düzey)',
        pattern: '"If" kaldırılarak cümle doğrudan "Had" ile başlatılabilir:\n• Normal: If I had known the truth, I would have warned you.\n• Devrik (Inverted): Had I known the truth, I would have warned you.',
        explanation: 'Akademik sınavlarda (TOEFL, IELTS, YDS) yüksek puan getiren prestijli bir yapıdır.'
      }
    ],
    keyRules: [
      '"Would have" yerine ihtimal derecesine göre "could have + V3" (yapabilirdim ama yapmadım) veya "might have + V3" (yapmış olabilirdim) kullanılabilir.',
      '"If" yan cümlesinde asla "would have" KULLANILAMAZ! Şart tarafı Past Perfect (had + V3) olmalıdır.'
    ],
    commonMistakes: [
      {
        wrong: 'If I would have known your phone number, I would have called you.',
        correct: 'If I had known your phone number, I would have called you.',
        reason: '"If" yan cümlesine "would have" getirilmez; kural gereği "had + V3" kullanılır.'
      }
    ],
    examples: [
      { eng: 'If we had left the hotel twenty minutes earlier, we wouldn\'t have missed our flight.', tr: 'Otelden yirmi dakika daha erken çıkmış olsaydık uçağımızı kaçırmamış olurduk.' },
      { eng: 'She could have become a renowned surgeon if she had pursued medical school.', tr: 'Tıp fakültesine devam etmiş olsaydı tanınmış bir cerrah olabilirdi.' },
      { eng: 'If you had saved your earnings wisely, you wouldn\'t be struggling financially today.', tr: 'Kazancını akıllıca biriktirmiş olsaydın bugün maddi olarak zorlanıyor olmazdın.' }
    ],
    proTip: 'Geçmişte aldığınız kararları değerlendirirken "Had I known..." diyerek anadili İngilizce olanların seviyesine çıkabilirsiniz.'
  },
  {
    id: 'b2-reported-speech',
    level: 'B2',
    title: 'Reported Speech (Dolaylı Anlatım & Aktarma Cümleleri)',
    badge: 'Diplomasi & Aktarım',
    summary: 'Birinin söylediği sözü başka birine zaman kaydırması (Backshift) yaparak aktarma.',
    introduction: 'Birisinin söylediği cümleyi tırnak içine almadan ("He said that...") aktarmaktır. Olay geçmişte söylendiği için zamanlar genellikle bir derece geçmişe kaydırılır (Backshift kuralı).',
    subjectSchema: [
      {
        subject: 'Say vs. Tell Ayrımı',
        subjectLabel: 'En Kritik Kural',
        positive: 'He SAID THAT he was tired. (Kime söylendiği belirtilmez)',
        negative: 'He TOLD ME THAT he was tired. (Kime söylendiği ZORUNLUDUR: told me/him/us)',
        question: 'He ASKED ME if I was ready. (Soru aktarırken asked kullanılır)',
        highlight: '"He said me" ASLA denemez! Daima "He told me" veya "He said that".'
      }
    ],
    formulas: [
      {
        title: 'Zaman Kaydırma (Backshift) Kuralı',
        pattern: 'Doğrudan Söz (Direct) ➔ Aktarılan Söz (Reported)\n• Present Simple (I work) ➔ Past Simple (He worked)\n• Present Continuous (I am working) ➔ Past Continuous (He was working)\n• Past Simple (I worked) ➔ Past Perfect (He had worked)\n• Present Perfect (I have worked) ➔ Past Perfect (He had worked)\n• Will (I will work) ➔ Would (He would work)\n• Can (I can work) ➔ Could (He could work)',
        explanation: 'Söylenen an geçmişte kaldığı için her zaman bir derece eskiye gider.'
      }
    ],
    comparisonTable: {
      title: 'Zaman ve Yer Zarfları Dönüşüm Tablosu',
      headers: ['Doğrudan Cümle (Direct)', 'Aktarılan Cümle (Reported)', 'Örnek Değişim'],
      rows: [
        ['today', 'that day', 'today ➔ that day'],
        ['yesterday', 'the day before / the previous day', 'yesterday ➔ the day before'],
        ['tomorrow', 'the next day / the following day', 'tomorrow ➔ the following day'],
        ['now', 'then / at that moment', 'now ➔ then'],
        ['this / these', 'that / those', 'this book ➔ that book'],
        ['here', 'there', 'come here ➔ go there']
      ]
    },
    keyRules: [
      'Soru Cümlelerini Aktarırken:\n• Yes/No sorularında "if" veya "whether" kullanılır: "Do you like tea?" ➔ He asked me if I liked tea.\n• Soru kelimesinden sonra cümle DÜZ CÜMLE dizilimine döner (Özne + Fiil): "Where do you live?" ➔ She asked me where I lived (Where did I live DENMEZ!).'
    ],
    commonMistakes: [
      {
        wrong: 'He said me that he was sick.',
        correct: 'He told me that he was sick. / He said that he was sick.',
        reason: '"Say" fiilinden sonra doğrudan şahıs zamiri (me) gelmez; nesne varsa "tell" kullanılır.'
      },
      {
        wrong: 'She asked me where did I live.',
        correct: 'She asked me where I lived.',
        reason: 'Aktarılan sorularda soru dizilimi kalkar, düz cümle dizilimine (Özne + Fiil) geçilir.'
      }
    ],
    examples: [
      { eng: 'She told me that she was moving to London the following month.', tr: 'Bana bir sonraki ay Londra\'ya taşınacağını söyledi.' },
      { eng: 'The project manager announced that the deadline had been extended.', tr: 'Proje yöneticisi teslim tarihinin uzatılmış olduğunu duyurdu.' },
      { eng: 'He politely asked me whether I had received his previous email.', tr: 'Bana kibarca önceki e-postasını alıp almadığımı sordu.' }
    ],
    proTip: 'Aktardığınız bilgi evrensel ve değişmeyen bir gerçekse zaman kaydırması yapılmayabilir: "The teacher said that water boils at 100 degrees."'
  },
  {
    id: 'b2-relative-clauses',
    level: 'B2',
    title: 'Relative Clauses (İlgi Cümlecikleri: Defining & Non-defining)',
    badge: 'Cümle Bağlama Sanatı',
    summary: 'İki ayrı cümleyi tek bir akıcı, zengin ve sofistike cümlede birleştirme tekniği.',
    introduction: 'Bir ismi (insan, nesne, yer veya zaman) nitelemek için arkasına eklenen tanımlayıcı cümleciklerdir. "who" (insanlar için), "which" (nesneler/hayvanlar için), "that" (her ikisi için), "where" (yerler için), "whose" (sahiplik için) kullanılır.',
    subjectSchema: [
      {
        subject: 'Defining Relative Clause (Tanımlayıcı)',
        subjectLabel: 'Anlam İçin Zorunlu / Virgülsüz',
        positive: 'The woman who lives next door is an architect.',
        negative: 'The car that I bought last year is very reliable.',
        question: 'Virgül KULLANILMAZ. "That" serbestçe kullanılabilir.',
        highlight: 'Bu cümlecik çıkarılırsa hangi kadından bahsedildiği anlaşılmaz.'
      },
      {
        subject: 'Non-Defining Relative Clause (Ekstra Bilgi)',
        subjectLabel: 'Ekstra Detay / Virgüllü',
        positive: 'My father, who is 62 years old, retired yesterday.',
        negative: 'Paris, which is the capital of France, is lovely.',
        question: 'MUTLAKA VİRGÜLLE AYRILIR. Asla "THAT" KULLANILAMAZ!',
        highlight: 'Bu cümlecik atılsa bile ana cümlenin anlamı bozulmaz.'
      }
    ],
    formulas: [
      {
        title: 'Bağlaç Rehberi (Relative Pronouns)',
        pattern: '• WHO: İnsanlar için (The man who called you)\n• WHICH: Nesne ve hayvanlar için (The watch which was broken)\n• THAT: Hem insan hem nesne için (Yalnızca Defining cümlelerde!)\n• WHOSE: Sahiplik bildirir (The boy whose father is a pilot)\n• WHERE: Yer bildirir (The town where I was born)',
        explanation: 'Doğru bağlaç seçimi nitelenen kelimenin türüne bağlıdır.'
      }
    ],
    keyRules: [
      'VİRGÜLLÜ CÜMLELERDE "THAT" KESİNLİKLE KULLANILAMAZ! Yalnızca "who" veya "which" kullanılır.',
      'Nesne Konumundaki Bağlacı Atma (Omitting Relative Pronoun): Eğer bağlaçtan sonra yeni bir özne geliyorsa bağlaç atılabilir: "The movie (that) I watched" = "The movie I watched". Ancak özne konumundaysa atılamaz: "The man who helped me".'
    ],
    commonMistakes: [
      {
        wrong: 'My uncle, that lives in Canada, sent me a gift.',
        correct: 'My uncle, who lives in Canada, sent me a gift.',
        reason: 'Virgülle ayrılan ekstra bilgi cümlelerinde "that" asla kullanılmaz, "who" zorunludur.'
      }
    ],
    examples: [
      { eng: 'The ambitious researcher who discovered the antibiotic was awarded the medal.', tr: 'Antibiyotiği keşfeden azimli araştırmacıya madalya verildi.' },
      { eng: 'This is the charming Mediterranean town where my family used to spend our summers.', tr: 'Burası ailemin yazlarımızı geçirdiği şirin Akdeniz kasabasıdır.' },
      { eng: 'The company whose shares soared yesterday announced record profits.', tr: 'Hisseleri dün fırlayan şirket rekor karlar açıkladı.' }
    ],
    proTip: 'Akıcı ve profesyonel İngilizce konuşurken nesne konumundaki who/which kelimelerini atarak daha doğal bir ritim yakalayabilirsiniz.'
  },
  {
    id: 'b2-wish-clauses',
    level: 'B2',
    title: 'Wish Clauses & If Only (Dilek ve Pişmanlık Cümleleri)',
    badge: 'Keşkeler & Dilekler',
    summary: 'Şimdiki durumdan memnuniyetsizlik, geçmiş pişmanlıklar ve başkalarının davranışlarına dair şikayetler.',
    introduction: 'Türkçedeki "Keşke..." ifadesinin karşılığıdır. "I wish" veya daha duygusal vurgulu haliyle "If only" kullanılır. Gerçek dışı bir temenniyi yansıttığı için kullanılan zamanlar daima bir derece geçmişe çekilir.',
    subjectSchema: [
      {
        subject: 'Şimdiki Zaman Dileği (Present Wish)',
        subjectLabel: 'Şu Anki Durumun Tersi',
        positive: 'Wish + Past Simple ➔ I wish I lived in a warm country. (Şu an soğuktayım)',
        negative: 'I wish I had more free time to travel.',
        question: 'To be için "were" tercih edilir: I wish I were taller.',
        highlight: 'Geçmiş zaman kullanılır ama dilek ŞU ANA aittir.'
      },
      {
        subject: 'Geçmiş Zaman Pişmanlığı (Past Regret)',
        subjectLabel: 'Geçmişte Olanın Tersi',
        positive: 'Wish + Past Perfect (had + V3) ➔ I wish I had studied harder. (Çalışmadım)',
        negative: 'If only we hadn\'t sold our old house!',
        question: 'Geçmişte yaşanmış bitmiş olayın pişmanlığıdır.',
        highlight: 'had + V3 kalıbı kullanılır.'
      },
      {
        subject: 'Şikayet & Değişim İsteği (Complaint)',
        subjectLabel: 'Gelecek / Başkası Hakkında',
        positive: 'Wish + would + V1 ➔ I wish you would stop interrupting me.',
        negative: 'I wish it would stop raining!',
        question: 'Kişi kendisi için "I wish I would" KULLANAMAZ! Başkasına şikayettir.',
        highlight: 'Birisinin rahatsız edici bir eylemi bırakmasını istemek.'
      }
    ],
    formulas: [
      {
        title: 'Özet Tablo',
        pattern: '• Şu An İçin: I wish + Past Simple (I wish I knew the answer)\n• Geçmiş İçin: I wish + had + V3 (I wish I had accepted the offer)\n• Şikayet İçin: I wish + someone + would + V1 (I wish he would listen)',
        explanation: '"If only" de aynı kurallarla çalışır, yalnızca duygusal şiddeti ve vurgusu daha yüksektir.'
      }
    ],
    keyRules: [
      'Kendimiz için "I wish I would" kullanılamaz; onun yerine "I wish I could" (Keşke yapabilseydim) denir: "I wish I could speak Spanish."',
      'To be fiilinde "were" kullanımı resmi ve standarttır: "I wish I were with you right now."'
    ],
    commonMistakes: [
      {
        wrong: 'I wish I will see you tomorrow.',
        correct: 'I hope I will see you tomorrow. / I wish I could see you tomorrow.',
        reason: 'Gelecekte olası bir temenni için "wish + will" değil, "hope" kullanılır.'
      }
    ],
    examples: [
      { eng: 'I wish I had more courage to start my own digital company.', tr: 'Keşke kendi dijital şirketimi kurmak için daha fazla cesaretim olsaydı.' },
      { eng: 'If only I had listened to my mentor\'s valuable advice ten years ago!', tr: 'Keşke on yıl önce mentorumun değerli tavsiyesini dinlemiş olsaydım!' },
      { eng: 'I wish the neighbors would stop making noise late at night.', tr: 'Keşke komşular gecenin geç saatinde gürültü yapmayı kesseler.' }
    ],
    proTip: 'Gerçekleşmesi muhtemel gelecek umutları için "hope", imkansız hayaller ve keşkeler için "wish" kullanın.'
  }
];

// =============================================================
// 2. CÜMLE KURMA & SÖZCÜK SIRALAMA (SENTENCE BUILDER)
// =============================================================
export const SENTENCE_SCRAMBLE_DATA: SentenceScrambleItem[] = [
  // ===================== A1 SEVİYESİ =====================
  {
    id: 'scramble-a1-1',
    level: 'A1',
    grammarTopicId: 'a1-to-be',
    topicName: 'To Be (Am/Is/Are)',
    tr: 'Ben bugün çok mutluyum.',
    targetEng: 'I am very happy today.',
    tokens: ['I', 'am', 'very', 'happy', 'today.'],
    hint: 'Özne (I) + to be (am) + sıfat (very happy) + zaman zarfı (today).',
    ruleExplanation: 'İngilizcede temel cümle yapısı Özne + Yüklem + Nesne / Belirteç sırasını takip eder.'
  },
  {
    id: 'scramble-a1-2',
    level: 'A1',
    grammarTopicId: 'a1-present-simple',
    topicName: 'Present Simple',
    tr: 'O her sabah taze süt içer.',
    targetEng: 'She drinks fresh milk every morning.',
    tokens: ['She', 'drinks', 'fresh', 'milk', 'every', 'morning.'],
    hint: 'Geniş zamanda 3. tekil şahısta fiile -s gelir.',
    ruleExplanation: 'He/She/It öznelerinde fiil -s takısı alır: She drinks.'
  },
  {
    id: 'scramble-a1-3',
    level: 'A1',
    grammarTopicId: 'a1-present-continuous',
    topicName: 'Present Continuous',
    tr: 'Onlar şu anda önemli bir proje üzerinde çalışıyorlar.',
    targetEng: 'They are working on an important project now.',
    tokens: ['They', 'are', 'working', 'on', 'an', 'important', 'project', 'now.'],
    hint: 'Çoğul şahısla "are + V-ing" kullanılır.',
    ruleExplanation: 'Present Continuous yapısında özneye uygun to be (are) ve fiilin -ing hali bir araya gelir.'
  },
  {
    id: 'scramble-a1-4',
    level: 'A1',
    grammarTopicId: 'a1-have-got-has-got',
    topicName: 'Have Got / Has Got',
    tr: 'Bizim evin arkasında büyük bir bahçemiz var.',
    targetEng: 'We have got a big garden behind our house.',
    tokens: ['We', 'have', 'got', 'a', 'big', 'garden', 'behind', 'our', 'house.'],
    hint: 'Sıfat (big) isimden (garden) önce gelir.',
    ruleExplanation: 'We öznesiyle "have got" kullanılır ve niteleme sıfatları ismin önüne yerleşir.'
  },
  {
    id: 'scramble-a1-5',
    level: 'A1',
    grammarTopicId: 'a1-there-is-are',
    topicName: 'There is / There are',
    tr: 'Mutfak masasının üzerinde üç taze elma var.',
    targetEng: 'There are three fresh apples on the kitchen table.',
    tokens: ['There', 'are', 'three', 'fresh', 'apples', 'on', 'the', 'kitchen', 'table.'],
    hint: 'Çoğul nesnelerde "There are" kullanılır.',
    ruleExplanation: 'Elmalar çoğul sayılabilir olduğu için "There are" ile başlanır.'
  },
  {
    id: 'scramble-a1-6',
    level: 'A1',
    grammarTopicId: 'a1-can-cant',
    topicName: 'Can / Can\'t',
    tr: 'O akustik gitarı çok güzel çalabilir.',
    targetEng: 'He can play the acoustic guitar very well.',
    tokens: ['He', 'can', 'play', 'the', 'acoustic', 'guitar', 'very', 'well.'],
    hint: 'Can yardımcı fiilinden sonra ana fiil yalın gelir.',
    ruleExplanation: 'Can modal fiilinden sonra gelen eylem hiçbir takı almaz ve yalın kalır.'
  },
  {
    id: 'scramble-a1-7',
    level: 'A1',
    grammarTopicId: 'a1-to-be',
    topicName: 'To Be Soru',
    tr: 'Sen final sınavı için hazır mısın?',
    targetEng: 'Are you ready for the final exam?',
    tokens: ['Are', 'you', 'ready', 'for', 'the', 'final', 'exam?'],
    hint: 'To be sorularında yardımcı fiil cümlenin en başına gelir.',
    ruleExplanation: 'Sorularda "Are" başa geçer: Are + you + ready?'
  },

  // ===================== A2 SEVİYESİ =====================
  {
    id: 'scramble-a2-1',
    level: 'A2',
    grammarTopicId: 'a2-past-simple',
    topicName: 'Past Simple',
    tr: 'Biz geçen hafta sonu sinemaya gittik.',
    targetEng: 'We went to the cinema last weekend.',
    tokens: ['We', 'went', 'to', 'the', 'cinema', 'last', 'weekend.'],
    hint: 'Go fiilinin geçmiş hali "went"tir.',
    ruleExplanation: 'Geçmiş zamanda düzensiz fiillerin 2. hali kullanılır; zaman zarfı sona gelir.'
  },
  {
    id: 'scramble-a2-2',
    level: 'A2',
    grammarTopicId: 'a2-past-continuous',
    topicName: 'Past Continuous & When',
    tr: 'Telefon çaldığında ben akşam yemeği hazırlıyordum.',
    targetEng: 'I was cooking dinner when the phone rang.',
    tokens: ['I', 'was', 'cooking', 'dinner', 'when', 'the', 'phone', 'rang.'],
    hint: 'Devam eden eylemde "was + V-ing", araya giren ani eylemde Past Simple kullanılır.',
    ruleExplanation: 'When ani olayı (rang), Past Continuous ise süregiden arka planı (was cooking) anlatır.'
  },
  {
    id: 'scramble-a2-3',
    level: 'A2',
    grammarTopicId: 'a2-future-will-going-to',
    topicName: 'Future: Going To',
    tr: 'Karanlık bulutlara bak, yağmur yağacak.',
    targetEng: 'Look at the dark clouds, it is going to rain.',
    tokens: ['Look', 'at', 'the', 'dark', 'clouds,', 'it', 'is', 'going', 'to', 'rain.'],
    hint: 'Gözle görülür açık kanıt varsa "be going to" kullanılır.',
    ruleExplanation: 'Fiziksel kanıta dayalı tahminlerde be going to yapısı zorunludur.'
  },
  {
    id: 'scramble-a2-4',
    level: 'A2',
    grammarTopicId: 'a2-comparatives-superlatives',
    topicName: 'Comparatives',
    tr: 'Bu yeni araba benimkinden çok daha konforludur.',
    targetEng: 'This new car is much more comfortable than mine.',
    tokens: ['This', 'new', 'car', 'is', 'much', 'more', 'comfortable', 'than', 'mine.'],
    hint: 'Uzun sıfatların önüne "more", arkasına "than" gelir.',
    ruleExplanation: 'Çok heceli sıfatlarda karşılaştırma "more + sıfat + than" ile yapılır.'
  },
  {
    id: 'scramble-a2-5',
    level: 'A2',
    grammarTopicId: 'a2-modals-must-should',
    topicName: 'Modals: Should',
    tr: 'Daha sağlıklı hissetmek için her gün bol su içmelisin.',
    targetEng: 'You should drink plenty of water every day to feel healthier.',
    tokens: ['You', 'should', 'drink', 'plenty', 'of', 'water', 'every', 'day', 'to', 'feel', 'healthier.'],
    hint: 'Tavsiye verirken should + yalın fiil kullanılır.',
    ruleExplanation: 'Should dostane tavsiyelerde kullanılır ve fiil yalın kalır.'
  },

  // ===================== B1 SEVİYESİ =====================
  {
    id: 'scramble-b1-1',
    level: 'B1',
    grammarTopicId: 'b1-present-perfect',
    topicName: 'Present Perfect (For/Since)',
    tr: 'Ben yedi yıldır bu uluslararası şirkette çalışıyorum.',
    targetEng: 'I have worked at this international company for seven years.',
    tokens: ['I', 'have', 'worked', 'at', 'this', 'international', 'company', 'for', 'seven', 'years.'],
    hint: 'Süreç belirtirken "for" kullanılır.',
    ruleExplanation: 'Geçmişte başlayıp hala devam eden eylemlerde have + V3 ve for/since kullanılır.'
  },
  {
    id: 'scramble-b1-2',
    level: 'B1',
    grammarTopicId: 'b1-passive-voice',
    topicName: 'Passive Voice (Geçmiş Pasif)',
    tr: 'Bu tarihi katedral on dördüncü yüzyılda inşa edildi.',
    targetEng: 'This historic cathedral was built in the fourteenth century.',
    tokens: ['This', 'historic', 'cathedral', 'was', 'built', 'in', 'the', 'fourteenth', 'century.'],
    hint: 'Geçmiş pasif: was/were + V3 (built).',
    ruleExplanation: 'İşi yapan değil yapılan nesne vurgulandığında Passive Voice kullanılır.'
  },
  {
    id: 'scramble-b1-3',
    level: 'B1',
    grammarTopicId: 'b1-conditionals',
    topicName: 'Conditionals Type 2',
    tr: 'Daha çok boş vaktim olsaydı piyano çalmayı öğrenirdim.',
    targetEng: 'If I had more free time, I would learn to play the piano.',
    tokens: ['If', 'I', 'had', 'more', 'free', 'time,', 'I', 'would', 'learn', 'to', 'play', 'the', 'piano.'],
    hint: 'Type 2: If + Past Simple, would + V1.',
    ruleExplanation: 'Şu anki gerçek dışı hayali senaryolar Type 2 kalıbıyla aktarılır.'
  },
  {
    id: 'scramble-b1-4',
    level: 'B1',
    grammarTopicId: 'b1-perfect-vs-past',
    topicName: 'Present Perfect vs. Past',
    tr: 'Üniversiteden tam olarak ne zaman mezun oldun?',
    targetEng: 'When did you graduate from the university?',
    tokens: ['When', 'did', 'you', 'graduate', 'from', 'the', 'university?'],
    hint: '"When" sorusu daima Past Simple (did) gerektirir.',
    ruleExplanation: 'Belirli bir zamanı sorgulayan "When" ile Present Perfect değil Past Simple kullanılır.'
  },

  // ===================== B2 SEVİYESİ =====================
  {
    id: 'scramble-b2-1',
    level: 'B2',
    grammarTopicId: 'b2-third-mixed-conditionals',
    topicName: 'Third Conditional',
    tr: 'Daha erken çıkmış olsaydık uçağı kaçırmamış olurduk.',
    targetEng: 'If we had left earlier, we would not have missed the flight.',
    tokens: ['If', 'we', 'had', 'left', 'earlier,', 'we', 'would', 'not', 'have', 'missed', 'the', 'flight.'],
    hint: 'Geçmiş pişmanlık: If + had + V3, would have + V3.',
    ruleExplanation: 'Geçmişte yaşanmış bitmiş olayın hayali aksi durumunu Third Conditional ifade eder.'
  },
  {
    id: 'scramble-b2-2',
    level: 'B2',
    grammarTopicId: 'b2-reported-speech',
    topicName: 'Reported Speech',
    tr: 'Müdür bana ertesi gün yeni bir ofise taşınacağını söyledi.',
    targetEng: 'The manager told me that he would move to a new office the following day.',
    tokens: ['The', 'manager', 'told', 'me', 'that', 'he', 'would', 'move', 'to', 'a', 'new', 'office', 'the', 'following', 'day.'],
    hint: 'Told me + that; will ➔ would; tomorrow ➔ the following day.',
    ruleExplanation: 'Dolaylı aktarımda zamanlar bir derece geçmişe kaydırılır (Backshift).'
  },
  {
    id: 'scramble-b2-3',
    level: 'B2',
    grammarTopicId: 'b2-relative-clauses',
    topicName: 'Relative Clauses',
    tr: 'Tedaviyi keşfeden bilim insanı prestijli bir ödül kazandı.',
    targetEng: 'The scientist who discovered the cure won a prestigious award.',
    tokens: ['The', 'scientist', 'who', 'discovered', 'the', 'cure', 'won', 'a', 'prestigious', 'award.'],
    hint: 'İnsanları nitelerken "who" bağlacı kullanılır.',
    ruleExplanation: 'Defining Relative Clause cümlede özneyi niteleyen yan cümleciği kurar.'
  },
  {
    id: 'scramble-b2-4',
    level: 'B2',
    grammarTopicId: 'b2-wish-clauses',
    topicName: 'Wish Clauses',
    tr: 'Keşke kendi şirketimi kurmak için daha fazla cesaretim olsaydı.',
    targetEng: 'I wish I had more courage to start my own company.',
    tokens: ['I', 'wish', 'I', 'had', 'more', 'courage', 'to', 'start', 'my', 'own', 'company.'],
    hint: 'Şimdiki zaman dileği: I wish + Past Simple (had).',
    ruleExplanation: 'Şu an elimizde olmayan bir durumu dilerken I wish + Past Simple kullanılır.'
  }
];
