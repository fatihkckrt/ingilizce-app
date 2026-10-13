// scripts/append_a2_texts.cjs
const fs = require('fs');

const newA2Texts = [
  {
    id: 36,
    level: 'A2',
    title: 'Preparing for a Job Interview',
    bgImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Last Tuesday, I received an invitation for an exciting job interview.", tr: "Geçen salı heyecan verici bir iş görüşmesi için bir davet aldım." },
      { id: 2, eng: "The position was for a junior customer support specialist at a tech company.", tr: "Pozisyon, bir teknoloji şirketinde kıdemsiz müşteri destek uzmanı içindi." },
      { id: 3, eng: "I spent three days preparing thoroughly to make a positive impression.", tr: "Olumlu bir izlenim bırakmak için üç gün boyunca kapsamlı bir şekilde hazırlandım." },
      { id: 4, eng: "First, I researched the company's core mission, products, and recent accomplishments.", tr: "İlk önce şirketin temel misyonunu, ürünlerini ve son başarılarını araştırdım." },
      { id: 5, eng: "I printed three clean copies of my updated curriculum vitae on thick paper.", tr: "Güncellenmiş özgeçmişimin üç temiz kopyasını kalın kağıda yazdırdım." },
      { id: 6, eng: "I practiced answering common behavioral questions in front of a mirror.", tr: "Bir aynanın karşısında yaygın davranışsal soruları yanıtlamanın provasını yaptım." },
      { id: 7, eng: "I ironed my formal navy blue blazer and polished my black leather shoes.", tr: "Resmi lacivert blazer ceketimi ütüledim ve siyah deri ayakkabılarımı boyadım." },
      { id: 8, eng: "On the interview morning, I arrived twenty minutes early to calm my nerves.", tr: "Görüşme sabahı heyecanımı yatıştırmak için yirmi dakika erken vardım." },
      { id: 9, eng: "The hiring managers greeted me with professional warmth and a firm handshake.", tr: "İşe alım yöneticileri beni profesyonel bir sıcaklık ve sıkı bir el sıkışmayla karşıladı." },
      { id: 10, eng: "I answered every inquiry clearly and explained my past team experiences.", tr: "Her soruyu net bir şekilde yanıtladım ve geçmiş takım deneyimlerimi anlattım." },
      { id: 11, eng: "I also asked thoughtful questions about their workplace culture and training.", tr: "Ayrıca çalışma yeri kültürleri ve eğitimleri hakkında düşünceli sorular sordum." },
      { id: 12, eng: "Preparation builds genuine confidence when facing career opportunities.", tr: "Hazırlık kariyer fırsatlarıyla yüzleşirken gerçek bir özgüven oluşturur." }
    ],
    questions: [
      { q: "What position did the author apply for?", options: ["Software engineer", "Junior customer support specialist", "Sales director"], answer: 1 },
      { q: "How early did the author arrive for the interview?", options: ["Five minutes late", "Twenty minutes early", "One hour early"], answer: 1 },
      { q: "What did the author practice in front of a mirror?", options: ["Singing songs", "Answering common interview questions", "Dancing"], answer: 1 }
    ]
  },
  {
    id: 37,
    level: 'A2',
    title: 'Adopting a Puppy from the Animal Shelter',
    bgImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Deciding to adopt a rescued pet was one of our family's best decisions.", tr: "Kurtarılmış bir evcil hayvan sahiplenmeye karar vermek ailemizin en iyi kararlarından biriydi." },
      { id: 2, eng: "We visited the local animal welfare shelter on a sunny Saturday afternoon.", tr: "Güneşli bir cumartesi öğleden sonrasında yerel hayvan refahı barınağını ziyaret ettik." },
      { id: 3, eng: "Dozens of hopeful dogs barked cheerfully from behind their clean enclosures.", tr: "Düzinelerce umut dolu köpek temiz bölmelerinin arkasından neşeyle havladı." },
      { id: 4, eng: "In the quietest kennel sat a little golden puppy with soulful brown eyes.", tr: "En sessiz kulübede duygulu kahverengi gözleri olan küçük altın sarısı bir yavru oturuyordu." },
      { id: 5, eng: "He wagged his tail gently and pressed his wet black nose against the fence.", tr: "Kuyruğunu nazikçe salladı ve ıslak siyah burnunu tele bastırdı." },
      { id: 6, eng: "The shelter volunteer explained that he had been rescued from the rainy streets.", tr: "Barınak gönüllüsü onun yağmurlu sokaklardan kurtarıldığını açıkladı." },
      { id: 7, eng: "We took him to the outdoor grass play area to see how he interacted with us.", tr: "Bizimle nasıl etkileşim kurduğunu görmek için onu açık hava çim oyun alanına götürdük." },
      { id: 8, eng: "He immediately ran into my arms and showered my face with playful puppy kisses.", tr: "Hemen kollarıma koştu ve yüzümü oyuncu yavru köpek öpücüklerine boğdu." },
      { id: 9, eng: "We completed the adoption paperwork and purchased a collar, leash, and dog bed.", tr: "Sahiplenme evraklarını tamamladık ve bir tasma, kayış ve köpek yatağı satın aldık." },
      { id: 10, eng: "We named him Milo because of his soft golden fur and gentle demeanor.", tr: "Yumuşak altın rengi kürkü ve nazik tavrı nedeniyle ona Milo adını verdik." },
      { id: 11, eng: "Giving a homeless animal a loving home transforms both human and pet lives.", tr: "Evsiz bir hayvana sevgi dolu bir yuva vermek hem insanın hem de hayvanın hayatını dönüştürür." },
      { id: 12, eng: "Milo brought boundless joy, warmth, and daily laughter into our household.", tr: "Milo hanemize sınırsız neşe, sıcaklık ve günlük kahkahalar getirdi." }
    ],
    questions: [
      { q: "Where was the puppy rescued from?", options: ["A pet store", "The rainy streets", "A farm"], answer: 1 },
      { q: "What name did the family give to the puppy?", options: ["Max", "Milo", "Rocky"], answer: 1 },
      { q: "What items did they purchase for the new puppy?", options: ["A cage", "A collar, leash, and bed", "Toys only"], answer: 1 }
    ]
  },
  {
    id: 38,
    level: 'A2',
    title: 'A Scenic Train Journey to the Coast',
    bgImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Traveling by modern passenger train is much more relaxing than flying.", tr: "Modern yolcu treniyle seyahat etmek uçmaktan çok daha rahatlatıcıdır." },
      { id: 2, eng: "Last weekend, my partner and I boarded the early morning express to the coast.", tr: "Geçen hafta sonu partnerim ve ben sahile giden sabah erken ekspresine bindik." },
      { id: 3, eng: "The train departed smoothly from the historic grand terminal at seven sharp.", tr: "Tren tarihi büyük terminalden tam saat yedide sarsıntısız bir şekilde hareket etti." },
      { id: 4, eng: "We settled into comfortable plush seats next to a panoramic glass window.", tr: "Panoramik cam bir pencerenin yanındaki rahat pelüş koltuklara yerleştik." },
      { id: 5, eng: "As the train gathered speed, urban apartments gave way to misty green meadows.", tr: "Tren hızlandıkça kentsel apartmanlar yerini sisli yeşil çayırlara bıraktı." },
      { id: 6, eng: "We passed through winding mountain tunnels and crossed sparkling rocky rivers.", tr: "Kıvrımlı dağ tünellerinden geçtik ve parıldayan kayalık nehirleri aştık." },
      { id: 7, eng: "The conductor walked down the carpeted aisle to stamp our digital tickets.", tr: "Kondüktör dijital biletlerimizi damgalamak için halı kaplı koridorda yürüdü." },
      { id: 8, eng: "We bought freshly brewed espresso and buttery croissants from the buffet car.", tr: "Büfe vagonundan taze demlenmiş espresso ve tereyağlı kruvasan satın aldık." },
      { id: 9, eng: "After two scenic hours, the deep blue horizon of the ocean emerged.", tr: "İki manzaralı saatin ardından okyanusun koyu mavi ufku ortaya çıktı." },
      { id: 10, eng: "Seagulls soared overhead as the train slowed down along the seaside platform.", tr: "Tren sahil peronu boyunca yavaşlarken martılar tepede süzüldü." },
      { id: 11, eng: "Train journeys allow travelers to appreciate the changing landscape peacefully.", tr: "Tren yolculukları gezginlerin değişen manzarayı huzur içinde takdir etmelerini sağlar." },
      { id: 12, eng: "We stepped onto the sunny coastal platform ready for our holiday.", tr: "Tatilimize hazır bir şekilde güneşli sahil peronuna adım attık." }
    ],
    questions: [
      { q: "What time did the train depart from the terminal?", options: ["At six", "At seven sharp", "At nine"], answer: 1 },
      { q: "What did they buy from the buffet car?", options: ["Pizza", "Espresso and croissants", "Sandwiches"], answer: 1 },
      { q: "What birds soared overhead near the coast?", options: ["Pigeons", "Seagulls", "Eagles"], answer: 1 }
    ]
  },
  {
    id: 39,
    level: 'A2',
    title: 'Volunteering at the Community Garden',
    bgImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a31?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Community gardens are wonderful green spaces that bring urban neighbors together.", tr: "Topluluk bahçeleri şehir komşularını bir araya getiren harika yeşil alanlardır." },
      { id: 2, eng: "Every Saturday, I volunteer at our neighborhood's collective organic plot.", tr: "Her cumartesi mahallemizin ortak organik arazisinde gönüllü olarak çalışırım." },
      { id: 3, eng: "The project transformed an abandoned concrete parking lot into a blooming oasis.", tr: "Proje terk edilmiş beton bir otoparkı çiçek açan bir vahaya dönüştürdü." },
      { id: 4, eng: "We built raised wooden beds filled with nutrient-rich compost and black soil.", tr: "Besin açısından zengin kompost ve kara toprakla dolu yükseltilmiş ahşap yataklar inşa ettik." },
      { id: 5, eng: "Today, we harvested several wicker baskets of heirloom tomatoes and bell peppers.", tr: "Bugün birkaç hasır sepet dolusu yerli tohum domates ve dolmalık biber hasat ettik." },
      { id: 6, eng: "Older experienced gardeners teach teenagers how to prune fruit bushes properly.", tr: "Daha yaşlı ve tecrübeli bahçıvanlar gençlere meyve çalılarını düzgün budamayı öğretir." },
      { id: 7, eng: "We set up rain barrels to collect stormwater for eco-friendly irrigation.", tr: "Çevre dostu sulama amacıyla yağmur suyunu toplamak için yağmur varilleri kurduk." },
      { id: 8, eng: "A wooden beehive at the corner produces organic wildflower honey each autumn.", tr: "Köşedeki ahşap bir arı kovanı her sonbaharda organik kır çiçeği balı üretir." },
      { id: 9, eng: "Half of our fresh harvest is donated to the local community food pantry.", tr: "Taze hasadımızın yarısı yerel toplum aşevine bağışlanır." },
      { id: 10, eng: "Working together outdoors creates deep connections among diverse residents.", tr: "Açık havada birlikte çalışmak farklı mahalle sakinleri arasında derin bağlar kurar." },
      { id: 11, eng: "It is rewarding to watch tiny seeds turn into nutritious food for neighbors.", tr: "Minik tohumların komşular için besleyici gıdaya dönüşmesini izlemek çok tatmin edicidir." },
      { id: 12, eng: "Urban agriculture proves that nature can thrive even inside concrete cities.", tr: "Kentsel tarım doğanın beton şehirlerin içinde bile serpilebileceğini kanıtlar." }
    ],
    questions: [
      { q: "What was the garden site before the project?", options: ["A park", "An abandoned concrete parking lot", "A farm"], answer: 1 },
      { q: "Where is half of the harvested food donated?", options: ["To a supermarket", "To the local community food pantry", "Sold online"], answer: 1 },
      { q: "How do they collect stormwater for irrigation?", options: ["Using buckets", "Using rain barrels", "From a river"], answer: 1 }
    ]
  },
  {
    id: 40,
    level: 'A2',
    title: 'Restoring an Old Bicycle',
    bgImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Last month, I discovered an old steel bicycle covered in rust in my uncle's shed.", tr: "Geçen ay amcamın barakasında pasla kaplı eski çelik bir bisiklet keşfettim." },
      { id: 2, eng: "Although its tires were flat and chain seized, the vintage frame was solid.", tr: "Lastikleri inik ve zinciri sıkışmış olmasına rağmen klasik kadrosu sağlamdı." },
      { id: 3, eng: "I decided to restore it completely instead of purchasing an expensive new one.", tr: "Pahalı yeni bir tane satın almak yerine onu tamamen restore etmeye karar verdim." },
      { id: 4, eng: "I disassembled all components carefully using metric wrenches and screwdrivers.", tr: "Metrik anahtarlar ve tornavidalar kullanarak tüm bileşenleri dikkatlice söktüm." },
      { id: 5, eng: "I scrubbed the rusty steel frame with steel wool and anti-corrosion spray.", tr: "Paslı çelik kadroyu çelik yünü ve korozyon önleyici sprey ile ovaladım." },
      { id: 6, eng: "I applied two coats of British racing green paint and a shiny clear coat.", tr: "İki kat İngiliz yarış yeşili boya ve parlak bir vernik uyguladım." },
      { id: 7, eng: "I ordered a brand-new stainless steel chain, rubber brake pads, and cables.", tr: "Yepyeni bir paslanmaz çelik zincir, kauçuk fren balataları ve teller sipariş ettim." },
      { id: 8, eng: "I fitted a classic leather saddle and brown handlebar tape for vintage style.", tr: "Klasik bir tarz için klasik bir deri sele ve kahverengi gidon bandı taktım." },
      { id: 9, eng: "After three weekends of patient mechanical work, the bicycle was fully reborn.", tr: "Üç hafta sonu süren sabırlı mekanik çalışmanın ardından bisiklet tamamen yeniden doğdu." },
      { id: 10, eng: "Taking my first test ride down the paved park boulevard was exhilarating.", tr: "Park bulvarında ilk deneme sürüşüme çıkmak heyecan vericiydi." },
      { id: 11, eng: "Repairing vintage machinery gives objects a second life and reduces waste.", tr: "Eski makineleri tamir etmek nesnelere ikinci bir hayat verir ve israfı azaltır." },
      { id: 12, eng: "I feel proud every time someone stops to admire my handmade restoration.", tr: "Biri el yapımı restorasyonumu takdir etmek için durduğunda gurur duyuyorum." }
    ],
    questions: [
      { q: "Where did the author find the old bicycle?", options: ["At a shop", "In an uncle's shed", "In the street"], answer: 1 },
      { q: "What color paint was applied to the frame?", options: ["Bright red", "British racing green", "Yellow"], answer: 1 },
      { q: "How long did the restoration take?", options: ["One day", "Three weekends", "A full year"], answer: 1 }
    ]
  }
];

console.log("Additional 5 A2 texts prepared.");
