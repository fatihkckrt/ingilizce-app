// src/utils/puzzleSentenceService.ts
// Service for retrieving contextual English example sentences and Turkish translations
// for puzzle clues, dictionary lookups, and Leitner study cards.

import { defaultTexts } from '../defaultTextsData';

export interface ExampleSentenceResult {
  eng: string;
  tr: string;
  source: 'story' | 'curated' | 'generated';
}

// Curated authentic example sentences for vocabulary items
const CURATED_SENTENCES: Record<string, { eng: string; tr: string }> = {
  "ABILITY": {
    eng: "She has the ability to learn new languages quickly.",
    tr: "Yeni dilleri hızlıca öğrenme yeteneğine sahip."
  },
  "ACTION": {
    eng: "We need to take action before it is too late.",
    tr: "Çok geç olmadan harekete geçmemiz gerekiyor."
  },
  "AHEAD": {
    eng: "The road ahead is clear, safe, and beautiful.",
    tr: "İlerideki yol açık, güvenli ve güzel."
  },
  "AUDIT": {
    eng: "The company conducts an annual financial audit.",
    tr: "Şirket her yıl bir mali denetim gerçekleştirir."
  },
  "AWARD": {
    eng: "He won a special award for his scientific research.",
    tr: "Bilimsel araştırması için özel bir ödül kazandı."
  },
  "AWARE": {
    eng: "Are you aware of the new rules in the classroom?",
    tr: "Sınıftaki yeni kuralların farkında mısın?"
  },
  "AXIS": {
    eng: "The Earth rotates smoothly on its own axis.",
    tr: "Dünya kendi ekseni etrafında pürüzsüzce döner."
  },
  "BANANA": {
    eng: "I usually eat a fresh banana before my morning run.",
    tr: "Genellikle sabah koşumdan önce taze bir muz yerim."
  },
  "BELIEF": {
    eng: "Hard work and strong belief bring true success.",
    tr: "Sıkı çalışma ve güçlü inanç gerçek başarı getirir."
  },
  "CAM": {
    eng: "The engine uses a rotating cam mechanism.",
    tr: "Motor, dönen bir kam mekanizması kullanır."
  },
  "CHEMIST": {
    eng: "The chemist discovered a new compound in the laboratory.",
    tr: "Kimyager laboratuvarda yeni bir bileşik keşfetti."
  },
  "CHOSEN": {
    eng: "She was chosen as the team leader for the project.",
    tr: "Proje için takım lideri olarak seçildi."
  },
  "COIN": {
    eng: "He found an old silver coin on the walking path.",
    tr: "Yürüyüş yolunda eski gümüş bir madeni para buldu."
  },
  "CONCEPT": {
    eng: "The teacher explained an important grammar concept.",
    tr: "Öğretmen önemli bir dilbilgisi kavramını açıkladı."
  },
  "CURE": {
    eng: "Scientists are looking for a permanent cure for the disease.",
    tr: "Bilim insanları hastalık için kalıcı bir tedavi arıyor."
  },
  "DATE": {
    eng: "Save the date for our annual school ceremony.",
    tr: "Yıllık okul törenimiz için tarihi not edin."
  },
  "DEAL": {
    eng: "We made a fair business deal this morning.",
    tr: "Bu sabah adil bir iş anlaşması yaptık."
  },
  "DECREE": {
    eng: "The president issued an official decree yesterday.",
    tr: "Başkan dün resmi bir kararname yayımladı."
  },
  "DIE": {
    eng: "Plants will die without fresh water and sunlight.",
    tr: "Bitkiler taze su ve güneş ışığı olmadan ölür."
  },
  "DINE": {
    eng: "We will dine at a quiet seaside restaurant tonight.",
    tr: "Bu gece deniz kenarında sakin bir restoranda yemek yiyeceğiz."
  },
  "EAR": {
    eng: "She whispered the exciting secret into my ear.",
    tr: "Heyecan verici sırrı kulağıma fısıldadı."
  },
  "EARN": {
    eng: "He works hard to earn a living for his family.",
    tr: "Ailesinin geçimini sağlamak için çok çalışır."
  },
  "EATEN": {
    eng: "Have you eaten breakfast yet this morning?",
    tr: "Bu sabah henüz kahvaltı yaptın mı?"
  },
  "EGO": {
    eng: "A healthy self-confidence is different from a big ego.",
    tr: "Sağlıklı bir özgüven, büyük bir egodan farklıdır."
  },
  "ELDER": {
    eng: "We should always show kindness and respect to our elders.",
    tr: "Büyüklerimize her zaman nezaket ve saygı göstermeliyiz."
  },
  "ELF": {
    eng: "The fairy tale describes a cheerful woodland elf.",
    tr: "Masal, neşeli bir orman elfinden bahseder."
  },
  "ENTER": {
    eng: "Please knock gently before you enter the office.",
    tr: "Ofise girmeden önce lütfen kapıyı nazikçe çalın."
  },
  "EVENT": {
    eng: "The music festival was the biggest event of the summer.",
    tr: "Müzik festivali yazın en büyük etkinliğiydi."
  },
  "FACT": {
    eng: "It is a proven fact that exercise improves your health.",
    tr: "Egzersizin sağlığı iyileştirdiği kanıtlanmış bir gerçektir."
  },
  "FAT": {
    eng: "Natural olive oil contains healthy fats.",
    tr: "Doğal zeytinyağı sağlıklı yağlar içerir."
  },
  "GET": {
    eng: "Can you get some fresh bread from the bakery?",
    tr: "Fırından biraz taze ekmek alabilir misin?"
  },
  "GRACE": {
    eng: "She danced across the stage with elegance and grace.",
    tr: "Sahnede zarafet ve incelikle dans etti."
  },
  "HAT": {
    eng: "Wear a warm wool hat on cold winter days.",
    tr: "Soğuk kış günlerinde sıcak bir yün şapka tak."
  },
  "HEARD": {
    eng: "I heard the pleasant sound of rain outside.",
    tr: "Dışarıdaki yağmurun hoş sesini duydum."
  },
  "HEN": {
    eng: "The little hen lays fresh eggs every morning.",
    tr: "Küçük tavuk her sabah taze yumurta verir."
  },
  "HOPE": {
    eng: "Never lose hope, even in difficult times.",
    tr: "Zor zamanlarda bile umudunu asla kaybetme."
  },
  "IDEAS": {
    eng: "Sharing creative ideas helps us solve complex problems.",
    tr: "Yaratıcı fikirleri paylaşmak karmaşık sorunları çözmemize yardımcı olur."
  },
  "ILL": {
    eng: "He stayed at home because he felt quite ill.",
    tr: "Oldukça hasta hissettiği için evde kaldı."
  },
  "IMPACT": {
    eng: "Reading books has a positive impact on personal growth.",
    tr: "Kitap okumanın kişisel gelişim üzerinde olumlu bir etkisi vardır."
  },
  "INVEST": {
    eng: "It is smart to invest time in learning new skills.",
    tr: "Yeni beceriler öğrenmeye zaman yatırımı yapmak akıllıcadır."
  },
  "IRONIC": {
    eng: "It was ironic that the umbrella store had a roof leak.",
    tr: "Şemsiye dükkanının çatısının akması ironik bir durumdu."
  },
  "ITEM": {
    eng: "Which item on the menu would you like to choose?",
    tr: "Menüdeki hangi yiyeceği seçmek istersiniz?"
  },
  "JUDGE": {
    eng: "Do not judge a person before getting to know them.",
    tr: "Bir insanı tanımadan önce yargılama."
  },
  "KEY": {
    eng: "Practice and patience are the key to speaking fluently.",
    tr: "Akıcı konuşmanın anahtarı pratik ve sabırdır."
  },
  "LATEST": {
    eng: "Have you heard the latest news about the competition?",
    tr: "Yarışmayla ilgili en son haberleri duydun mu?"
  },
  "LEADER": {
    eng: "A great leader inspires everyone in the group.",
    tr: "Büyük bir lider gruptaki herkese ilham verir."
  },
  "LOGIC": {
    eng: "There is sound logic behind this engineering solution.",
    tr: "Bu mühendislik çözümünün arkasında sağlam bir mantık var."
  },
  "MAN": {
    eng: "The kind man helped the lost traveler find the station.",
    tr: "Kibar adam kaybolan yolcunun istasyonu bulmasına yardım etti."
  },
  "MAP": {
    eng: "We checked the map to find the shortest route to the castle.",
    tr: "Kaleye giden en kısa rotayı bulmak için haritayı kontrol ettik."
  },
  "MEDIA": {
    eng: "Modern media spreads information across the globe instantly.",
    tr: "Modern medya bilgiyi dünya çapında anında yayar."
  },
  "MERIT": {
    eng: "The scholarship was awarded based solely on academic merit.",
    tr: "Burs yalnızca akademik başarı ve liyakate dayalı olarak verildi."
  },
  "METHOD": {
    eng: "Spaced repetition is an effective method for learning vocabulary.",
    tr: "Aralıklı tekrar, kelime öğrenmek için etkili bir yöntemdir."
  },
  "MORAL": {
    eng: "The story teaches a valuable moral lesson about honesty.",
    tr: "Hikaye dürüstlük hakkında değerli bir ahlaki ders verir."
  },
  "NEEDY": {
    eng: "The volunteer group provides warm meals to needy people.",
    tr: "Gönüllü grup ihtiyaç sahibi insanlara sıcak yemek sağlıyor."
  },
  "ONION": {
    eng: "Dice the sweet onion finely for the vegetable soup.",
    tr: "Sebze çorbası için tatlı soğanı ince ince doğrayın."
  },
  "OPINE": {
    eng: "Education experts opine that interactive learning is best.",
    tr: "Eğitim uzmanları en iyi yöntemin etkileşimli öğrenme olduğu görüşünü savunuyor."
  },
  "ORDER": {
    eng: "I would like to order a warm cup of herbal tea.",
    tr: "Sıcak bir fincan bitki çayı sipariş etmek istiyorum."
  },
  "ORE": {
    eng: "The miners extracted high-grade iron ore from the mountains.",
    tr: "Madenciler dağlardan yüksek kaliteli demir cevheri çıkardılar."
  },
  "PACKS": {
    eng: "She packs her backpack carefully before every mountain hike.",
    tr: "Her dağ yürüyüşünden önce sırt çantasını dikkatle hazırlar."
  },
  "PAIN": {
    eng: "Take a deep breath and the muscle pain will subside.",
    tr: "Derin bir nefes al, kas ağrısı hafifleyecektir."
  },
  "PERSON": {
    eng: "Every single person has unique talents and strengths.",
    tr: "Her bir insanın kendine has yetenekleri ve güçlü yanları vardır."
  },
  "PILOT": {
    eng: "The experienced pilot guided the airplane through the clouds.",
    tr: "Deneyimli pilot uçağı bulutların arasından güvenle yönlendirdi."
  },
  "POINT": {
    eng: "You made an important point in today's class discussion.",
    tr: "Bugünkü sınıf tartışmasında önemli bir noktaya değindin."
  },
  "POLICY": {
    eng: "The library maintains a quiet study policy for all visitors.",
    tr: "Kütüphane tüm ziyaretçiler için sessiz çalışma politikası uygular."
  },
  "PROFILE": {
    eng: "You can update your personal goals in your user profile.",
    tr: "Kullanıcı profilinizden kişisel hedeflerinizi güncelleyebilirsiniz."
  },
  "PUTS": {
    eng: "He puts his keys in the wooden bowl beside the front door.",
    tr: "Anahtarlarını ön kapının yanındaki ahşap kaseye koyar."
  },
  "RANGE": {
    eng: "The bookstore offers a wide range of learning materials.",
    tr: "Kitapçı geniş bir öğrenme materyali yelpazesi sunmaktadır."
  },
  "RAT": {
    eng: "The laboratory rat learned the maze very quickly.",
    tr: "Laboratuvar faresi labirenti çok hızlı öğrendi."
  },
  "REASON": {
    eng: "Curiosity is the main reason why people discover new things.",
    tr: "İnsanların yeni şeyler keşfetmesinin ana nedeni meraktır."
  },
  "RESULT": {
    eng: "Her exam result was excellent because of regular practice.",
    tr: "Düzenli pratik sayesinde sınav sonucu mükemmeldi."
  },
  "REUSE": {
    eng: "Always reuse water bottles to protect the environment.",
    tr: "Çevreyi korumak için su şişelerini her zaman yeniden kullanın."
  },
  "RISE": {
    eng: "We woke up early to watch the sunrise over the hills.",
    tr: "Tepelerin üzerinden güneşin doğuşunu izlemek için erken kalktık."
  },
  "RUG": {
    eng: "A soft wool rug covers the living room floor.",
    tr: "Oturma odasının zeminini yumuşak bir yün halı kaplıyor."
  },
  "RUNNER": {
    eng: "The marathon runner reached the finish line with a smile.",
    tr: "Maraton koşucusu gülümseyerek bitiş çizgisine ulaştı."
  },
  "SCALE": {
    eng: "Use a digital kitchen scale to weigh the flour accurately.",
    tr: "Unu doğru şekilde tartmak için dijital mutfak terazisi kullanın."
  },
  "SCOPE": {
    eng: "The scope of our research covers both history and science.",
    tr: "Araştırmamızın kapsamı hem tarihi hem de bilimi içerir."
  },
  "SEEN": {
    eng: "Have you seen the beautiful new library in the center?",
    tr: "Merkezdeki güzel yeni kütüphaneyi gördün mü?"
  },
  "SEND": {
    eng: "Please send the homework assignment before five o'clock.",
    tr: "Lütfen ödevi saat beşten önce gönderin."
  },
  "SIC": {
    eng: "The ancient text was preserved word for word (sic).",
    tr: "Antik metin kelimesi kelimesine (aynen böyle) korundu."
  },
  "SKI": {
    eng: "They love to ski down the snow-covered slopes in winter.",
    tr: "Kışın karla kaplı yamaçlardan aşağı kayak yapmayı çok severler."
  },
  "SORRY": {
    eng: "I am sorry for the small mistake on page three.",
    tr: "Üçüncü sayfadaki küçük hata için özür dilerim."
  },
  "TAD": {
    eng: "Add a tad of lemon juice to enhance the fresh flavor.",
    tr: "Taze tadı zenginleştirmek için bir damla limon suyu ekleyin."
  },
  "TAR": {
    eng: "Road crews spread warm tar to pave the street.",
    tr: "Yol ekipleri sokağı asfaltlamak için sıcak katran serpti."
  },
  "TENNIS": {
    eng: "We play tennis together at the sports club every weekend.",
    tr: "Her hafta sonu spor kulübünde birlikte tenis oynarız."
  },
  "TIE": {
    eng: "Remember to tie your shoelaces tightly before running.",
    tr: "Koşmadan önce ayakkabı bağcıklarını sıkıca bağlamayı unutma."
  },
  "TOTAL": {
    eng: "The total number of reading texts in the app is seventy.",
    tr: "Uygulamadaki toplam okuma parçası sayısı yetmiştir."
  },
  "TOUR": {
    eng: "We took an exciting guided walking tour around the city.",
    tr: "Şehrin etrafında heyecan verici rehberli bir yürüyüş turuna katıldık."
  },
  "TREND": {
    eng: "Reading digital books has become a popular modern trend.",
    tr: "Dijital kitap okumak popüler bir modern eğilim haline geldi."
  },
  "TRIAL": {
    eng: "The clinical trial showed very promising health results.",
    tr: "Klinik deneme oldukça umut verici sağlık sonuçları gösterdi."
  },
  "TRUST": {
    eng: "Trust and honesty are essential in every friendship.",
    tr: "Güven ve dürüstlük her arkadaşlıkta vazgeçilmezdir."
  },
  "UNIQUE": {
    eng: "Each student has a unique way of understanding concepts.",
    tr: "Her öğrencinin kavramları anlama konusunda kendine özgü bir yolu vardır."
  },
  "USER": {
    eng: "The mobile app is designed to be friendly for every user.",
    tr: "Mobil uygulama her kullanıcı için dostça olacak şekilde tasarlandı."
  },
  "USERS": {
    eng: "Active users practice English daily to build their vocabulary.",
    tr: "Aktif kullanıcılar kelime dağarcığını geliştirmek için her gün İngilizce pratik yapıyor."
  }
};

// In-memory cache for fast lookup
const sentenceCache = new Map<string, ExampleSentenceResult>();

/**
 * Search defaultTexts for a sentence containing the given word.
 */
function findInStoryTexts(rawWord: string): { eng: string; tr: string } | null {
  const clean = rawWord.trim().toLowerCase();
  if (!clean) return null;

  // Regular expression matching exact word boundary
  const pattern = new RegExp(`\\b${clean}\\b`, 'i');

  for (const text of defaultTexts) {
    for (const item of text.sentences) {
      if (pattern.test(item.eng)) {
        return {
          eng: item.eng,
          tr: item.tr
        };
      }
    }
  }

  return null;
}

/**
 * Retrieves an authentic English example sentence and Turkish translation for any word.
 * Priority:
 * 1. Curated exact sentences
 * 2. Real reading text sentences from defaultTexts
 * 3. Dynamic contextual fallback
 */
export function getExampleSentenceForWord(word: string, fallbackClue?: string): ExampleSentenceResult {
  const upper = word.trim().toUpperCase();
  const lower = word.trim().toLowerCase();

  if (sentenceCache.has(upper)) {
    return sentenceCache.get(upper)!;
  }

  // 1. Check curated authentic sentences
  if (CURATED_SENTENCES[upper]) {
    const res: ExampleSentenceResult = {
      ...CURATED_SENTENCES[upper],
      source: 'curated'
    };
    sentenceCache.set(upper, res);
    return res;
  }

  // 2. Search in defaultTexts (85 full-length stories with 2300+ paired sentences)
  const fromStory = findInStoryTexts(lower);
  if (fromStory) {
    const res: ExampleSentenceResult = {
      eng: fromStory.eng,
      tr: fromStory.tr,
      source: 'story'
    };
    sentenceCache.set(upper, res);
    return res;
  }

  // 3. Smart contextual fallback
  const meaning = fallbackClue ? fallbackClue.split('•')[0].replace(/\([a-z.]+\)/gi, '').trim() : lower;
  const res: ExampleSentenceResult = {
    eng: `Learning the word "${lower}" expands your daily English vocabulary.`,
    tr: `"${meaning}" kelimesini öğrenmek günlük İngilizce kelime dağarcığınızı geliştirir.`,
    source: 'generated'
  };
  sentenceCache.set(upper, res);
  return res;
}
