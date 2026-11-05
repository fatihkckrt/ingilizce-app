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

export interface GrammarTopic {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  title: string;
  badge: string;
  summary: string;
  introduction: string;
  formulas: GrammarFormula[];
  keyRules: string[];
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

// -------------------------------------------------------------
// 1. KAPSAMLI SEVİYELİ GRAMER REHBERİ
// -------------------------------------------------------------
export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // ========================== A1 SEVİYESİ ==========================
  {
    id: 'a1-to-be',
    level: 'A1',
    title: 'To Be Fiili (Am / Is / Are)',
    badge: 'Temel Yapıtaşı',
    summary: 'İngilizcenin en temel "olmak", durum, kimlik ve niteleme fiili.',
    introduction: 'İngilizcede bir hareket bildirmeyen (koşmak, yemek gibi olmayan), sadece kişinin kim olduğunu, nerede olduğunu, nasıl hissettiğini veya bir nesnenin durumunu anlatan cümlelerde "To Be" fiili kullanılır. Türkçedeki "-dir, -dır" veya "ben bir öğretmen-im" eklerinin karşılığıdır.',
    formulas: [
      {
        title: 'Olumlu Cümle',
        pattern: 'Subject (Özne) + am / is / are + Noun / Adjective / Place',
        explanation: 'I ile "am"; He/She/It ve tekiller ile "is"; You/We/They ve çoğullar ile "are" kullanılır.'
      },
      {
        title: 'Olumsuz Cümle',
        pattern: 'Subject + am not / isn\'t / aren\'t + Complement',
        explanation: 'Olumsuzluk eki "not" doğrudan to be fiilinin ardına gelir.'
      },
      {
        title: 'Soru Cümlesi',
        pattern: 'Am / Is / Are + Subject + Complement + ?',
        explanation: 'Yardımcı fiil öznenin önüne geçer. Kısa cevap: "Yes, I am." / "No, she isn\'t."'
      }
    ],
    keyRules: [
      'İngilizce bir cümlede mutlaka bir yüklem (fiil) bulunmalıdır. Eğer hareket bildiren bir fiil yoksa "am, is, are" zorunludur. Örneğin "She tired" denemez, "She is tired" denir.',
      'Kısaltmalar günlük konuşmada çok yaygındır: I am ➔ I\'m, She is ➔ She\'s, They are ➔ They\'re.',
      'Soru kelimeleri (What, Where, Who, How) cümlenin en başına gelir: "Where are you?" (Neredesin?).'
    ],
    commonMistakes: [
      {
        wrong: 'I have 20 years old.',
        correct: 'I am 20 years old.',
        reason: 'İngilizcede yaş söylenirken "sahip olmak (have)" değil, "to be" kullanılır.'
      },
      {
        wrong: 'He is like apples.',
        correct: 'He likes apples.',
        reason: 'Eğer ana bir hareket fiili (like, go, eat) varsa, geniş zamanda ayrıca "is/are" eklenmez.'
      }
    ],
    examples: [
      { eng: 'I am a university student in Istanbul.', tr: 'Ben İstanbul\'da bir üniversite öğrencisiyim.' },
      { eng: 'The weather is very cold and windy today.', tr: 'Bugün hava çok soğuk ve rüzgarlı.' },
      { eng: 'Are you ready for the final exam?', tr: 'Final sınavı için hazır mısın?' },
      { eng: 'They are not at home; they are at the cinema.', tr: 'Onlar evde değiller; sinemadalar.' }
    ],
    proTip: 'Kendinizi, mesleğinizi, hislerinizi ve bulunduğunuz konumu anlatırken daima to be fiiline başvurun.'
  },
  {
    id: 'a1-present-simple',
    level: 'A1',
    title: 'Present Simple (Geniş Zaman)',
    badge: 'Alışkanlıklar & Gerçekler',
    summary: 'Günlük rutinler, alışkanlıklar, bilimsel gerçekler ve değişmeyen durumlar.',
    introduction: 'Her gün tekrarladığınız eylemleri (sabah uyanmak, işe gitmek), genel geçer doğa kanunlarını (Güneş doğudan doğar) veya hobilerinizi anlatırken Geniş Zaman (Present Simple) kullanılır. Türkçe\'deki "-r, -ar, -er, -ır" eklerinin karşılığıdır.',
    formulas: [
      {
        title: 'Olumlu Cümle',
        pattern: 'I / You / We / They + V1 (Fiilin yalın hali)\nHe / She / It + V1 + (-s / -es / -ies)',
        explanation: 'Üçüncü tekil şahıslarda (he, she, it) fiile -s takısı gelir.'
      },
      {
        title: 'Olumsuz Cümle',
        pattern: 'Subject + don\'t / doesn\'t + V1 (Fiil YALIN)',
        explanation: 'Doesn\'t kullanıldığında fiildeki "-s" takısı düşer.'
      },
      {
        title: 'Soru Cümlesi',
        pattern: 'Do / Does + Subject + V1 (Fiil YALIN) + ?',
        explanation: 'Does başa geldiğinde fiil yine yalın haline döner: "Does he speak English?"'
      }
    ],
    keyRules: [
      'Üçüncü tekil şahıs kuralı: "work ➔ works", "watch ➔ watches" (-ch, -sh, -ss, -x ile bitenler -es alır), "study ➔ studies" (sessiz + y düşer, -ies gelir).',
      'Sıklık zarfları (Frequency Adverbs: always, usually, often, sometimes, never) ana fiilden ÖNCE, "to be" fiilinden SONRA gelir: "She always drinks tea." / "He is always late."',
      'Zaman belirteçleri: every day, on Mondays, in the morning cümlenin genellikle en sonunda yer alır.'
    ],
    commonMistakes: [
      {
        wrong: 'She doesn\'t likes milk.',
        correct: 'She doesn\'t like milk.',
        reason: '"Doesn\'t" zaten -s takısını üstlendiği için ana fiile bir daha -s eklenmez.'
      },
      {
        wrong: 'I am live in London.',
        correct: 'I live in London.',
        reason: 'Geniş zamanda normal fiillerle birlikte "am/is/are" asla yan yana gelmez.'
      }
    ],
    examples: [
      { eng: 'I drink a cup of coffee every morning.', tr: 'Her sabah bir fincan kahve içerim.' },
      { eng: 'My brother works at a technology company.', tr: 'Erkek kardeşim bir teknoloji şirketinde çalışır.' },
      { eng: 'Water boils at one hundred degrees Celsius.', tr: 'Su yüz santigrat derecede kaynar.' },
      { eng: 'Do you speak English with your friends?', tr: 'Arkadaşlarınla İngilizce konuşur musun?' }
    ],
    proTip: 'Soru sorarken "Do" ve "Does" kelimelerini cümle dedektifi gibi düşünün; geldiklerinde fiildeki tüm ekleri temizlerler.'
  },
  {
    id: 'a1-have-got-has-got',
    level: 'A1',
    title: 'Have Got / Has Got (Sahip Olmak)',
    badge: 'Sahiplik & Özellikler',
    summary: 'Eşyalarımız, aile üyelerimiz ve fiziksel özelliklerimizden bahsetme.',
    introduction: 'Bir şeye sahip olduğumuzu, ailemizi veya dış görünüşümüzü (mavi gözler, sarı saçlar vb.) anlatırken "have got / has got" kullanılır. Özellikle İngiliz İngilizcesinde çok yaygındır.',
    formulas: [
      {
        title: 'Olumlu Cümle',
        pattern: 'I / You / We / They + have got (\'ve got)\nHe / She / It + has got (\'s got)',
        explanation: 'I have got a car. / She has got two sisters.'
      },
      {
        title: 'Olumsuz & Soru',
        pattern: 'haven\'t got / hasn\'t got\nHave / Has + Subject + got + ?',
        explanation: 'Have you got any money? - No, I haven\'t got any.'
      }
    ],
    keyRules: [
      'Amerikan İngilizcesinde sadece "have / has" (I have a car, Do you have a car?) daha sık tercih edilirken, İngiliz İngilizcesinde "have got" yaygındır.',
      'Fiziksel özellikler anlatılırken sıfat isimden önce gelir: "She has got blue eyes."'
    ],
    commonMistakes: [
      {
        wrong: 'He haven\'t got a car.',
        correct: 'He hasn\'t got a car.',
        reason: 'He, she ve it özneleriyle "has / hasn\'t" kullanılır.'
      }
    ],
    examples: [
      { eng: 'We have got a big garden behind our house.', tr: 'Evimizin arkasında büyük bir bahçemiz var.' },
      { eng: 'She has got long brown hair and green eyes.', tr: 'Onun uzun kahverengi saçları ve yeşil gözleri var.' },
      { eng: 'Have you got a minute to talk?', tr: 'Konuşmak için bir dakikan var mı?' }
    ],
    proTip: '"I have got a headache" (Başım ağrıyor) gibi sağlık problemlerinde de bu kalıp kullanılır.'
  },
  {
    id: 'a1-can-cant',
    level: 'A1',
    title: 'Modals: Can & Can\'t (Yetenek & İzin)',
    badge: 'Yetenek & İzin',
    summary: 'Yeteneklerimiz, yapabildiklerimiz, rica ve izin ifadeleri.',
    introduction: '"Can", İngilizcede yapabilme gücünü, kabiliyeti ve izin istemeyi ifade eden en dost canlısı yardımcı fiildir. Özneden sonra doğrudan gelir ve tüm özneler için biçimi ASLA değişmez.',
    formulas: [
      {
        title: 'Formül',
        pattern: 'Subject + can / can\'t + V1 (Fiilin EN YALIN HALİ)',
        explanation: 'Özne ne olursa olsun (I, he, they) "can" asla -s veya -ed takısı almaz.'
      }
    ],
    keyRules: [
      'Can\'den sonra fiile asla "to" gelmez: "I can to swim" YANLIŞ, "I can swim" DOĞRU.',
      'Rica ve izin isterken: "Can you help me, please?" (Bana yardım edebilir misiniz, lütfen?).'
    ],
    commonMistakes: [
      {
        wrong: 'She cans speak French.',
        correct: 'She can speak French.',
        reason: '"Can" modal fiili üçüncü tekil şahıslarda asla -s takısı almaz.'
      }
    ],
    examples: [
      { eng: 'He can play the guitar very well.', tr: 'O çok iyi gitar çalabilir.' },
      { eng: 'I can\'t swim, but I want to learn.', tr: 'Yüzemiyorum ama öğrenmek istiyorum.' },
      { eng: 'Can you open the window, please?', tr: 'Pencereyi açabilir misiniz, lütfen?' }
    ],
    proTip: 'Soru sorarken "Can" kelimesini başa çekmeniz yeterlidir: "Can you drive?" (Araba sürebilir misin?).'
  },

  // ========================== A2 SEVİYESİ ==========================
  {
    id: 'a2-past-simple',
    level: 'A2',
    title: 'Past Simple (Geçmiş Zaman: Düzenli & Düzensiz Fiiller)',
    badge: 'Tamamlanmış Geçmiş',
    summary: 'Geçmişte belirli bir zamanda gerçekleşmiş ve tamamen bitmiş eylemler.',
    introduction: 'Dün, geçen hafta ya da iki yıl önce olup bitmiş olayları anlatmak için Geçmiş Zaman kullanılır. Fiiller ikiye ayrılır: Düzenli olanlar "-ed" takısı alır (play ➔ played), düzensiz olanlar ise tamamen şekil değiştirir (go ➔ went).',
    formulas: [
      {
        title: 'Olumlu Cümle',
        pattern: 'Subject + V2 (Geçmiş Zaman Hali: -ed veya Düzensiz Form)',
        explanation: 'Özneden bağımsız olarak tüm kişilerde V2 kullanılır.'
      },
      {
        title: 'Olumsuz & Soru',
        pattern: 'Subject + didn\'t + V1 (YALIN)\nDid + Subject + V1 (YALIN) + ?',
        explanation: '"Didn\'t" ve "Did" kullanıldığında fiil ilk yalın haline (V1) döner!'
      }
    ],
    keyRules: [
      'Geçmiş zaman zaman zarfları: yesterday (dün), last week/night/year (geçen hafta/gece/yıl), two days ago (iki gün önce), in 2020.',
      'To Be fiilinin geçmiş hali "was / were"dür. Cümlede was/were varsa did kullanılmaz: "I was tired" / "Were you at home?".',
      'Düzensiz fiiller (Irregular Verbs) ezberlenmelidir: go ➔ went, see ➔ saw, buy ➔ bought, eat ➔ ate.'
    ],
    commonMistakes: [
      {
        wrong: 'I didn\'t went to school yesterday.',
        correct: 'I didn\'t go to school yesterday.',
        reason: '"Didn\'t" zaten geçmişi anlattığı için fiil V2 (went) değil, yalın (go) olur.'
      },
      {
        wrong: 'Did you saw him?',
        correct: 'Did you see him?',
        reason: 'Did sorusunda fiil daima yalın (see) kalmalıdır.'
      }
    ],
    examples: [
      { eng: 'We visited our grandparents last weekend.', tr: 'Geçen hafta sonu büyükanne ve büyükbabamızı ziyaret ettik.' },
      { eng: 'She bought a new laptop yesterday afternoon.', tr: 'Dün öğleden sonra yeni bir dizüstü bilgisayar satın aldı.' },
      { eng: 'I didn\'t sleep well last night.', tr: 'Dün gece iyi uyuyamadım.' },
      { eng: 'Where did you go for your summer holiday?', tr: 'Yaz tatili için nereye gittiniz?' }
    ],
    proTip: 'Olumsuz ve soru cümlelerinde fiilin ilk haline dönmesini hiç unutmayın; geçmiş zamanın sihirli anahtarı "Did / Didn\'t" fiilin yükünü taşır.'
  },
  {
    id: 'a2-future-will-going-to',
    level: 'A2',
    title: 'Gelecek Zaman: Will vs. Be Going To',
    badge: 'Gelecek Planları & Tahminler',
    summary: 'Gelecekle ilgili planlar, anlık kararlar ve kanıta dayalı tahminler.',
    introduction: 'İngilizcede geleceği anlatırken kullanılan iki temel yapı vardır. "Be going to" önceden planlanmış niyetler ve açık kanıtı olan durumlar için; "Will" ise konuşma anında verilen ani kararlar, sözler ve kişisel tahminler için kullanılır.',
    formulas: [
      {
        title: 'Be Going To (Plan & Belirti)',
        pattern: 'Subject + am/is/are + going to + V1',
        explanation: 'I am going to study tonight. (Önceden karar verilmiş plan).'
      },
      {
        title: 'Will (Anlık Karar & Söz)',
        pattern: 'Subject + will (\'ll) / won\'t + V1',
        explanation: 'The phone is ringing. I will answer it! (Konuşma anında anlık karar).'
      }
    ],
    keyRules: [
      'Görünürde kesin bir kanıt varsa "going to" kullanılır: "Look at the dark clouds! It is going to rain." (Gökyüzü kapkara, yağmur yağacak).',
      'Söz verme, teklif ve anlık tepkilerde "will": "I will always love you." / "I\'ll help you with those bags."',
      'I think, I believe, probably gibi düşünce belirten ifadelerle genelde "will" tercih edilir.'
    ],
    commonMistakes: [
      {
        wrong: 'I am going to will call you.',
        correct: 'I will call you. / I am going to call you.',
        reason: 'İki gelecek zaman yapısı asla aynı cümlede birleştirilemez.'
      }
    ],
    examples: [
      { eng: 'Look at the time! We are going to be late.', tr: 'Saate bak! Geç kalacağız.' },
      { eng: 'I think our team will win the match tonight.', tr: 'Bence bu akşam maçı bizim takım kazanacak.' },
      { eng: 'Don\'t worry, I won\'t tell your secret to anyone.', tr: 'Endişelenme, sırrını kimseye söylemeyeceğim.' }
    ],
    proTip: 'Restoranda sipariş verirken "I will have coffee, please" diyerek anlık karar bildiren will kullanılır.'
  },
  {
    id: 'a2-comparatives-superlatives',
    level: 'A2',
    title: 'Comparatives & Superlatives (Karşılaştırmalar)',
    badge: 'Kıyaslama & Üstünlük',
    summary: 'İki şeyi birbiriyle kıyaslama ya da bir grubun en iyisini/en büyüğünü seçme.',
    introduction: 'Sıfatların kıyaslama biçimleridir. Comparative (daha...), iki şeyi karşılaştırırken kullanılır. Superlative (en...), üç veya daha fazla şey arasında zirvede olanı belirtir.',
    formulas: [
      {
        title: 'Kısa Sıfatlar (Tek Hece)',
        pattern: 'Comparative: Adjective + -er + than (faster than)\nSuperlative: the + Adjective + -est (the fastest)',
        explanation: 'tall ➔ taller than ➔ the tallest'
      },
      {
        title: 'Uzun Sıfatlar (2+ Hece)',
        pattern: 'Comparative: more + Adjective + than\nSuperlative: the most + Adjective',
        explanation: 'expensive ➔ more expensive than ➔ the most expensive'
      }
    ],
    keyRules: [
      'Düzensiz sıfatlar özeldir: good ➔ better than ➔ the best; bad ➔ worse than ➔ the worst; far ➔ further ➔ the furthest.',
      'Superlative yapılarının önünde daima "the" artikeli yer alır: "the highest mountain".'
    ],
    commonMistakes: [
      {
        wrong: 'This car is more faster than mine.',
        correct: 'This car is faster than mine.',
        reason: 'Hem "-er" takısı hem de "more" aynı anda kullanılamaz.'
      }
    ],
    examples: [
      { eng: 'Istanbul is more crowded than Ankara.', tr: 'İstanbul Ankara\'dan daha kalabalıktır.' },
      { eng: 'Mount Everest is the highest mountain in the world.', tr: 'Everest Dağı dünyadaki en yüksek dağdır.' },
      { eng: 'Health is more important than wealth.', tr: 'Sağlık zenginlikten daha önemlidir.' }
    ],
    proTip: 'İki şey tamamen eşitse "as ... as" kalıbı kullanılır: "She is as tall as her brother" (Kardeşi kadar uzun).'
  },

  // ========================== B1 SEVİYESİ ==========================
  {
    id: 'b1-present-perfect',
    level: 'B1',
    title: 'Present Perfect Tense (Yakın / Etkisi Süren Geçmiş)',
    badge: 'Geçmiş ile Bugünün Köprüsü',
    summary: 'Geçmişte başlamış veya olmuş, ancak etkisi ya da sonucu şu anda devam eden eylemler.',
    introduction: 'Türkçede tam bir karşılığı olmadığı için en çok zorlanılan ama İngilizcenin en zarif zamanıdır. Olayın ne zaman olduğu değil, şu anki sonucunun ve tecrübesinin önemi vurgulanır. Örneğin anahtarınızı kaybettiyseniz ve şu an hala kapıda bekliyorsanız "I have lost my key" dersiniz.',
    formulas: [
      {
        title: 'Olumlu Cümle',
        pattern: 'I / You / We / They + have + V3 (Past Participle)\nHe / She / It + has + V3',
        explanation: 'Düzenli fiiller yine -ed alır; düzensiz fiillerin 3. hali (V3) kullanılır (go ➔ gone, see ➔ seen).'
      },
      {
        title: 'Olumsuz & Soru',
        pattern: 'haven\'t / hasn\'t + V3\nHave / Has + Subject + V3 + ?',
        explanation: 'Have you ever been to Italy? - Yes, I have.'
      }
    ],
    keyRules: [
      'Kesin bir geçmiş zaman belirteci (yesterday, in 2010, two hours ago) VARSA Present Perfect KULLANILAMAZ! O zaman Past Simple (did/went) zorunludur.',
      'Anahtar Kelimeler:\n• Ever: Hayatında hiç (sorularda: Have you ever...?)\n• Never: Asla / Hiç (olumlu yapılı cümlede olumsuz anlam: I have never seen)\n• Just: Az önce / Henüz (I have just finished)\n• Already: Çoktan / Zaten (She has already left)\n• Yet: Henüz (olumsuz cümle sonlarında ve sorularda)\n• Since: -den beri (belirli bir başlangıç noktası: since 2015, since Monday)\n• For: -dır/-dir (süreç boyunca: for 10 years, for two hours)'
    ],
    commonMistakes: [
      {
        wrong: 'I have seen him yesterday.',
        correct: 'I saw him yesterday.',
        reason: '"Yesterday" net bir geçmiş zaman belirttiği için Present Perfect değil, Past Simple (saw) kullanılmalıdır.'
      },
      {
        wrong: 'I live here since five years.',
        correct: 'I have lived here for five years. / ...since 2019.',
        reason: 'Süreç belirtirken "for", kesin tarih verirken "since" ve eylem sürdüğü için Present Perfect gerekir.'
      }
    ],
    examples: [
      { eng: 'I have lived in this city for more than ten years.', tr: 'On yıldan uzun süredir bu şehirde yaşıyorum.' },
      { eng: 'Have you ever eaten sushi before?', tr: 'Daha önce hiç suşi yedin mi?' },
      { eng: 'She has already finished her university assignment.', tr: 'O üniversite ödevini çoktan bitirdi.' },
      { eng: 'I haven\'t received your email yet.', tr: 'E-postanızı henüz almadım.' }
    ],
    proTip: 'Hayat tecrübelerinizden bahsederken (filmler, gezilen ülkeler, yapılan aktiviteler) ilk cümlenizi Present Perfect ile kurun, detaylara girdiğinizde Past Simple\'a geçin.'
  },
  {
    id: 'b1-passive-voice',
    level: 'B1',
    title: 'Passive Voice (Edilgen Çatı)',
    badge: 'İşi Yapan Değil, Eylem Önemli',
    summary: 'Eylemi kimin yaptığının bilinmediği, önemsiz olduğu veya nesnenin öne çıkarıldığı yapılar.',
    introduction: 'Haber bültenlerinde, bilimsel makalelerde ve resmi konuşmalarda sıklıkla karşımıza çıkar. "Ahmet pencereyi kırdı" yerine "Pencere kırıldı" diyerek yapılan işe odaklanılır.',
    formulas: [
      {
        title: 'Temel Formül',
        pattern: 'Object (Yeni Özne) + to be (zamana göre) + V3 (Past Participle)',
        explanation: 'Zamana göre be fiili çekimlenir: is/are (geniş), was/were (geçmiş), will be (gelecek), has been (perfect).'
      }
    ],
    keyRules: [
      'Geniş Zaman Pasif: am/is/are + V3 ➔ "English is spoken all over the world."',
      'Geçmiş Zaman Pasif: was/were + V3 ➔ "The telephone was invented by Bell."',
      'Eğer işi yapan kişiyi özellikle belirtmek istiyorsak cümlenin sonuna "by + kişi" ekleriz: "...by Shakespeare."'
    ],
    commonMistakes: [
      {
        wrong: 'The bridge built in 1973.',
        correct: 'The bridge was built in 1973.',
        reason: 'Köprü kendi kendini inşa edemez! "To be (was)" fiili mutlaka eklenmelidir.'
      }
    ],
    examples: [
      { eng: 'Millions of emails are sent every single minute.', tr: 'Her bir dakikada milyonlarca e-posta gönderilir.' },
      { eng: 'This magnificent castle was built in the sixteenth century.', tr: 'Bu görkemli kale on altıncı yüzyılda inşa edildi.' },
      { eng: 'All the tickets have been sold out.', tr: 'Bütün biletler tükendi (satıldı).' }
    ],
    proTip: 'Kimin yaptığından çok neyin etkilendiği mühimse her zaman pasif çatıyı tercih edin.'
  },
  {
    id: 'b1-conditionals',
    level: 'B1',
    title: 'Conditionals: Type 1 & Type 2 (Şart Cümleleri)',
    badge: 'Koşul & Olasılıklar',
    summary: 'Gerçekleşmesi muhtemel durumlar (Type 1) ve hayali/varsayımsal senaryolar (Type 2).',
    introduction: 'Eğer anlamına gelen "If" bağlacı ile kurulan şart cümleleridir. Type 1 gelecekteki gerçekçi olasılıkları, Type 2 ise şu anki gerçek dışı hayalleri anlatır.',
    formulas: [
      {
        title: 'Type 1 (Gerçekçi Gelecek Koşulu)',
        pattern: 'If + Present Simple, ... will + V1',
        explanation: 'If it rains tomorrow, we will stay at home. (Yarın yağmur yağarsa evde kalacağız).'
      },
      {
        title: 'Type 2 (Şimdiki Hayali / Varsayımsal)',
        pattern: 'If + Past Simple, ... would + V1',
        explanation: 'If I had a million dollars, I would travel around the world. (Param yok ama olsaydı gezerdim).'
      }
    ],
    keyRules: [
      'Type 2\'de geçmiş zaman kullanılmasına rağmen anlam ŞİMDİKİ ZAMANDIR; sadece olayın gerçek dışı olduğunu vurgular.',
      'Type 2\'de to be fiili için geleneksel gramerde her özneyle "were" tercih edilir: "If I were you, I would accept the offer" (Senin yerinde olsaydım...).',
      'Virgül Kuralı: Eğer "If" cümlesi başındaysa araya virgül konur; eğer ortadaysa virgüle gerek yoktur.'
    ],
    commonMistakes: [
      {
        wrong: 'If I will see him, I will tell him.',
        correct: 'If I see him, I will tell him.',
        reason: '"If"in bulunduğu yan cümleciğe ASLA "will" gelmez! Şart tarafı Present Simple olur.'
      }
    ],
    examples: [
      { eng: 'If you study hard, you will pass the driving test.', tr: 'Çok çalışırsan direksiyon sınavını geçersin.' },
      { eng: 'If I had more free time, I would learn how to play the piano.', tr: 'Daha çok boş vaktim olsaydı piyano çalmayı öğrenirdim.' },
      { eng: 'If I were you, I would take that job offer immediately.', tr: 'Senin yerinde olsaydım o iş teklifini derhal kabul ederdim.' }
    ],
    proTip: 'Tavsiye verirken en prestijli kalıp: "If I were you, I would..." kalıbıdır.'
  },

  // ========================== B2 SEVİYESİ ==========================
  {
    id: 'b2-third-mixed-conditionals',
    level: 'B2',
    title: 'Third & Mixed Conditionals (Geçmiş Pişmanlıklar & Karma Koşullar)',
    badge: 'Pişmanlık & Alternatif Tarih',
    summary: 'Geçmişte yaşanmış bitmiş olayların değiştirilemez varsayımları ve günümüze yansımaları.',
    introduction: 'Geçmiş için duyulan pişmanlıkları ("Keşke öyle yapsaydım"), kaçırılan fırsatları ve alternatif geçmiş senaryolarını anlatır. Mixed Conditionals ise geçmişteki bir olayın şimdiki zamana olan etkisini bağlar.',
    formulas: [
      {
        title: 'Third Conditional (Geçmiş Hayali)',
        pattern: 'If + Past Perfect (had + V3), ... would have + V3',
        explanation: 'If I had studied harder, I would have passed the exam. (Çalışmadım ve kaldım, geçmişe yönelik hayal).'
      },
      {
        title: 'Mixed Conditional (Geçmiş Sebep ➔ Şimdiki Sonuç)',
        pattern: 'If + had + V3, ... would + V1 (now)',
        explanation: 'If I had taken the map, we wouldn\'t be lost now. (Haritayı almadım, şu an kaybolmuş durumdayız).'
      }
    ],
    keyRules: [
      '"Would have" yerine ihtimal derecesine göre "could have" (yapabilirdim) veya "might have" (yapmış olabilirdim) kullanılabilir.',
      'Devrik Yapı (Inversion): "If" kaldırılarak cümle "Had" ile başlatılabilir: "Had I known the truth, I wouldn\'t have come."'
    ],
    commonMistakes: [
      {
        wrong: 'If I would have known, I would have helped.',
        correct: 'If I had known, I would have helped.',
        reason: '"If" tarafında "would have" asla kullanılmaz; şart kısmı mutlaka "had + V3" olmalıdır.'
      }
    ],
    examples: [
      { eng: 'If we had left the house earlier, we wouldn\'t have missed the flight.', tr: 'Evden daha erken çıksaydık uçağı kaçırmamış olurduk.' },
      { eng: 'She could have become a doctor if she had continued her education.', tr: 'Eğitimine devam etmiş olsaydı bir doktor olabilirdi.' },
      { eng: 'If you had saved your money, you wouldn\'t be in debt today.', tr: 'Paranı biriktirmiş olsaydın bugün borç içinde olmazdın.' }
    ],
    proTip: 'Akademik sınavlarda (IELTS, TOEFL, YDS) en çok puan getiren ileri düzey yapılardan biridir.'
  },
  {
    id: 'b2-reported-speech',
    level: 'B2',
    title: 'Reported Speech (Dolaylı Anlatım & Aktarma Cümleleri)',
    badge: 'Söz Aktarımı & Diplomasi',
    summary: 'Birinin söylediği sözü başka birine zaman kaydırması (Backshift) yaparak aktarma.',
    introduction: 'Birisinin söylediği cümleyi tırnak içine almadan ("He said that...") aktarmaktır. Olay geçmişte söylendiği için zamanlar genellikle bir derece geçmişe kaydırılır (Backshift kuralı).',
    formulas: [
      {
        title: 'Zaman Kaydırma (Backshift) Tablosu',
        pattern: 'Present Simple ➔ Past Simple\nPresent Continuous ➔ Past Continuous\nPast Simple / Present Perfect ➔ Past Perfect\nWill ➔ Would / Can ➔ Could',
        explanation: '"I am tired" ➔ He said that he was tired.'
      }
    ],
    keyRules: [
      'Zaman zarfları da dönüşür: today ➔ that day, yesterday ➔ the day before, tomorrow ➔ the next day, now ➔ then.',
      'Say vs. Tell: "Tell" daima bir nesne (kime söylendiğini) ister: "He told me that..." / "He said that...".'
    ],
    commonMistakes: [
      {
        wrong: 'He said me that he was busy.',
        correct: 'He told me that he was busy. / He said that he was busy.',
        reason: '"Say" fiilinden sonra doğrudan "me" gelmez, "told me" olmalıdır.'
      }
    ],
    examples: [
      { eng: 'She told me that she was moving to Germany the following month.', tr: 'Bana bir sonraki ay Almanya\'ya taşınacağını söyledi.' },
      { eng: 'The manager said that the meeting had been canceled.', tr: 'Müdür toplantının iptal edilmiş olduğunu söyledi.' },
      { eng: 'He asked me where I had bought that stylish jacket.', tr: 'O şık ceketi nereden satın aldığımı sordu.' }
    ],
    proTip: 'Soru aktarırken soru kelimesinden sonra düz cümle dizilimi (Özne + Yüklem) kullanılır: "She asked me what I wanted."'
  },
  {
    id: 'b2-relative-clauses',
    level: 'B2',
    title: 'Relative Clauses (İlgi Cümlecikleri: Defining & Non-defining)',
    badge: 'Cümle Bağlama Sanatı',
    summary: 'İki ayrı cümleyi tek bir akıcı ve sofistike cümlede birleştirme tekniği.',
    introduction: 'Bir ismi (insan, nesne, yer veya zaman) nitelemek için arkasına eklenen tanımlayıcı cümleciklerdir. "who" (insanlar için), "which" (nesneler/hayvanlar için), "that" (her ikisi için), "where" (yerler için), "whose" (sahiplik için) kullanılır.',
    formulas: [
      {
        title: 'Defining (Gereksiz Olmayan / Tanımlayıcı)',
        pattern: 'Noun + who / which / that + clause (virgülsüz)',
        explanation: 'The woman who lives next door is a talented musician.'
      },
      {
        title: 'Non-Defining (Ekstra Bilgi Veren)',
        pattern: 'Noun, who / which + clause, (virgülle ayrılır)',
        explanation: 'My brother, who lives in Berlin, is visiting us next week.'
      }
    ],
    keyRules: [
      'Non-defining (virgüllü) cümlelerde asla "that" KULLANILAMAZ! Yalnızca who veya which kullanılır.',
      'Whose sahiplik bildirir ve ardından doğrudan isim gelir: "The man whose car was stolen..."'
    ],
    commonMistakes: [
      {
        wrong: 'My father, that is 60 years old, retired yesterday.',
        correct: 'My father, who is 60 years old, retired yesterday.',
        reason: 'Virgüllü ekstra bilgi cümlelerinde "that" asla kullanılmaz, "who" zorunludur.'
      }
    ],
    examples: [
      { eng: 'The scientist who discovered the cure received the Nobel Prize.', tr: 'Tedaviyi keşfeden bilim insanı Nobel Ödülü\'nü aldı.' },
      { eng: 'This is the historical house where the famous author was born.', tr: 'Burası ünlü yazarın doğduğu tarihi evdir.' },
      { eng: 'The book which you recommended to me was truly fascinating.', tr: 'Bana tavsiye ettiğin kitap gerçekten büyüleyiciydi.' }
    ],
    proTip: 'Akıcı konuşmada nesne konumundaki who/which atılabilir: "The movie (which) I watched yesterday was great."'
  }
];

// -------------------------------------------------------------
// 2. CÜMLE KURMA & SÖZCÜK SIRALAMA (SENTENCE BUILDER)
// -------------------------------------------------------------
export const SENTENCE_SCRAMBLE_DATA: SentenceScrambleItem[] = [
  // ========== A1 SEVİYESİ ==========
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
    tr: 'O her sabah süt içer.',
    targetEng: 'She drinks milk every morning.',
    tokens: ['She', 'drinks', 'milk', 'every', 'morning.'],
    hint: 'Geniş zamanda 3. tekil şahısta fiile -s gelir.',
    ruleExplanation: 'He/She/It öznelerinde fiil -s takısı alır: She drinks.'
  },
  {
    id: 'scramble-a1-3',
    level: 'A1',
    grammarTopicId: 'a1-have-got-has-got',
    topicName: 'Have Got / Has Got',
    tr: 'Bizim büyük bir bahçemiz var.',
    targetEng: 'We have got a big garden.',
    tokens: ['We', 'have', 'got', 'a', 'big', 'garden.'],
    hint: 'Sıfat (big) isimden (garden) önce gelir.',
    ruleExplanation: 'We öznesiyle "have got" kullanılır ve niteleme sıfatları ismin önüne yerleşir.'
  },
  {
    id: 'scramble-a1-4',
    level: 'A1',
    grammarTopicId: 'a1-can-cant',
    topicName: 'Can / Can\'t',
    tr: 'O çok hızlı koşabilir.',
    targetEng: 'He can run very fast.',
    tokens: ['He', 'can', 'run', 'very', 'fast.'],
    hint: 'Can yardımcı fiilinden sonra ana fiil yalın gelir.',
    ruleExplanation: 'Can modal fiilinden sonra gelen eylem hiçbir takı almaz.'
  },
  {
    id: 'scramble-a1-5',
    level: 'A1',
    grammarTopicId: 'a1-to-be',
    topicName: 'Soru Cümlesi',
    tr: 'Sen bir İngilizce öğretmeni misin?',
    targetEng: 'Are you an English teacher?',
    tokens: ['Are', 'you', 'an', 'English', 'teacher?'],
    hint: 'To be sorularında yardımcı fiil cümlenin en başına gelir.',
    ruleExplanation: 'Sorularda "Are" başa geçer: Are + you + an English teacher?'
  },
  {
    id: 'scramble-a1-6',
    level: 'A1',
    grammarTopicId: 'a1-present-simple',
    topicName: 'Present Simple Soru',
    tr: 'Onlar nerede yaşıyorlar?',
    targetEng: 'Where do they live?',
    tokens: ['Where', 'do', 'they', 'live?'],
    hint: 'Soru kelimesi (Where) en başa, ardından yardımcı fiil (do) gelir.',
    ruleExplanation: 'Wh- Questions dizilimi: Soru Kelimesi + Do/Does + Özne + Yalın Fiil.'
  },

  // ========== A2 SEVİYESİ ==========
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
    grammarTopicId: 'a2-past-simple',
    topicName: 'Past Simple Olumsuz',
    tr: 'O dün gece iyi uyumadı.',
    targetEng: 'She did not sleep well last night.',
    tokens: ['She', 'did', 'not', 'sleep', 'well', 'last', 'night.'],
    hint: 'Did not kullandıktan sonra fiil yalın (sleep) kalır.',
    ruleExplanation: 'Did / Did not sonrasında fiil 2. haline değil, 1. yalın haline döner.'
  },
  {
    id: 'scramble-a2-3',
    level: 'A2',
    grammarTopicId: 'a2-future-will-going-to',
    topicName: 'Future: Going To',
    tr: 'Ben bu akşam sınav için çalışacağım.',
    targetEng: 'I am going to study for the exam tonight.',
    tokens: ['I', 'am', 'going', 'to', 'study', 'for', 'the', 'exam', 'tonight.'],
    hint: 'Planlı gelecek zaman: am/is/are + going to + fiil.',
    ruleExplanation: 'Önceden planlanmış eylemlerde be going to kalıbı kullanılır.'
  },
  {
    id: 'scramble-a2-4',
    level: 'A2',
    grammarTopicId: 'a2-comparatives-superlatives',
    topicName: 'Comparatives',
    tr: 'Bu araba benimkinden daha pahalıdır.',
    targetEng: 'This car is more expensive than mine.',
    tokens: ['This', 'car', 'is', 'more', 'expensive', 'than', 'mine.'],
    hint: 'Uzun sıfatların önüne "more", arkasına "than" gelir.',
    ruleExplanation: 'Çok heceli sıfatlarda karşılaştırma "more + sıfat + than" ile yapılır.'
  },
  {
    id: 'scramble-a2-5',
    level: 'A2',
    grammarTopicId: 'a2-future-will-going-to',
    topicName: 'Future: Will',
    tr: 'Bence bizim takım bu maçı kazanacak.',
    targetEng: 'I think our team will win this match.',
    tokens: ['I', 'think', 'our', 'team', 'will', 'win', 'this', 'match.'],
    hint: '"I think" sonrasında tahmin için will kullanılır.',
    ruleExplanation: 'Kişisel tahmin ve fikir belirten cümlelerde will tercih edilir.'
  },

  // ========== B1 SEVİYESİ ==========
  {
    id: 'scramble-b1-1',
    level: 'B1',
    grammarTopicId: 'b1-present-perfect',
    topicName: 'Present Perfect (For/Since)',
    tr: 'Ben beş yıldır bu şirkette çalışıyorum.',
    targetEng: 'I have worked at this company for five years.',
    tokens: ['I', 'have', 'worked', 'at', 'this', 'company', 'for', 'five', 'years.'],
    hint: 'Süreç belirtirken "for" kullanılır.',
    ruleExplanation: 'Geçmişte başlayıp hala devam eden eylemlerde have + V3 ve for/since kullanılır.'
  },
  {
    id: 'scramble-b1-2',
    level: 'B1',
    grammarTopicId: 'b1-present-perfect',
    topicName: 'Present Perfect Soru',
    tr: 'Sen daha önce hiç suşi yedin mi?',
    targetEng: 'Have you ever eaten sushi before?',
    tokens: ['Have', 'you', 'ever', 'eaten', 'sushi', 'before?'],
    hint: 'Hayat tecrübesi sorarken "ever" özne ile fiil arasına gelir.',
    ruleExplanation: 'Have/Has + Özne + ever + V3 yapısı tecrübe sorgulamada standarttır.'
  },
  {
    id: 'scramble-b1-3',
    level: 'B1',
    grammarTopicId: 'b1-passive-voice',
    topicName: 'Passive Voice (Edilgen)',
    tr: 'Bu tarihi bina on altıncı yüzyılda inşa edildi.',
    targetEng: 'This historic building was built in the sixteenth century.',
    tokens: ['This', 'historic', 'building', 'was', 'built', 'in', 'the', 'sixteenth', 'century.'],
    hint: 'Geçmiş pasif: was/were + V3 (built).',
    ruleExplanation: 'İşi yapan değil yapılan nesne vurgulandığında Passive Voice kullanılır.'
  },
  {
    id: 'scramble-b1-4',
    level: 'B1',
    grammarTopicId: 'b1-conditionals',
    topicName: 'Conditionals Type 2',
    tr: 'Daha çok param olsaydı yeni bir ev satın alırdım.',
    targetEng: 'If I had more money, I would buy a new house.',
    tokens: ['If', 'I', 'had', 'more', 'money,', 'I', 'would', 'buy', 'a', 'new', 'house.'],
    hint: 'Type 2: If + Past Simple, would + V1.',
    ruleExplanation: 'Şu anki gerçek dışı hayali senaryolar Type 2 kalıbıyla aktarılır.'
  },
  {
    id: 'scramble-b1-5',
    level: 'B1',
    grammarTopicId: 'b1-conditionals',
    topicName: 'Conditionals Type 1',
    tr: 'Yarın yağmur yağarsa biz evde kalacağız.',
    targetEng: 'If it rains tomorrow, we will stay at home.',
    tokens: ['If', 'it', 'rains', 'tomorrow,', 'we', 'will', 'stay', 'at', 'home.'],
    hint: 'If tarafında geniş zaman, ana cümlede will kullanılır.',
    ruleExplanation: 'Gelecekteki gerçekçi şartlarda if tarafına asla will gelmez.'
  },

  // ========== B2 SEVİYESİ ==========
  {
    id: 'scramble-b2-1',
    level: 'B2',
    grammarTopicId: 'b2-third-mixed-conditionals',
    topicName: 'Third Conditional',
    tr: 'Daha erken çıksaydık uçağı kaçırmazdık.',
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
    tr: 'O bana ertesi gün geleceğini söyledi.',
    targetEng: 'She told me that she would come the next day.',
    tokens: ['She', 'told', 'me', 'that', 'she', 'would', 'come', 'the', 'next', 'day.'],
    hint: 'Will geçmişe aktarılınca "would" olur; tomorrow ise "the next day"e dönüşür.',
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
    grammarTopicId: 'b2-third-mixed-conditionals',
    topicName: 'Mixed Conditional',
    tr: 'Haritayı almış olsaydın şimdi kaybolmuş olmazdık.',
    targetEng: 'If you had taken the map, we would not be lost now.',
    tokens: ['If', 'you', 'had', 'taken', 'the', 'map,', 'we', 'would', 'not', 'be', 'lost', 'now.'],
    hint: 'Geçmiş sebep (had taken) ➔ Şimdiki sonuç (would not be lost now).',
    ruleExplanation: 'Geçmişteki eylemin şu anki durumuna etkisi Mixed Conditional ile kurulur.'
  }
];
