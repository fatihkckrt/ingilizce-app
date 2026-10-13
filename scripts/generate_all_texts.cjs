// scripts/generate_all_texts.cjs
// Script to generate all 30 A1 texts, 30 A2 texts, 5 B1 texts, 5 B2 texts (70 total)
const fs = require('fs');

const a1NewTexts = [
  {
    id: 6,
    level: 'A1',
    title: 'Morning Coffee and Breakfast',
    bgImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Every morning, I wake up at seven o'clock.", tr: "Her sabah saat yedide uyanırım." },
      { id: 2, eng: "The kitchen is quiet and full of warm sunlight.", tr: "Mutfak sessiz ve ılık güneş ışığıyla doludur." },
      { id: 3, eng: "I boil fresh water in a small electric kettle.", tr: "Küçük bir elektrikli su ısıtıcısında taze su kaynatırım." },
      { id: 4, eng: "I make a cup of black coffee with two spoons of sugar.", tr: "İki kaşık şekerli bir fincan sade kahve yaparım." },
      { id: 5, eng: "Then I slice two pieces of whole wheat bread.", tr: "Sonra iki dilim tam buğday ekmeği keserim." },
      { id: 6, eng: "I put butter and sweet strawberry jam on the bread.", tr: "Ekmeğin üzerine tereyağı ve tatlı çilek reçeli sürerim." },
      { id: 7, eng: "My white cat Oliver sits near my feet.", tr: "Beyaz kedim Oliver ayaklarımın yanına oturur." },
      { id: 8, eng: "He waits for a little bowl of fresh warm milk.", tr: "Küçük bir kase taze ılık süt bekler." },
      { id: 9, eng: "I listen to the morning news on the radio.", tr: "Radyodan sabah haberlerini dinlerim." },
      { id: 10, eng: "Breakfast is the most relaxing time of my day.", tr: "Kahvaltı günümün en rahatlatıcı zamanıdır." },
      { id: 11, eng: "After eating, I wash my plate and cup carefully.", tr: "Yedikten sonra tabağımı ve fincanımı dikkatlice yıkarım." },
      { id: 12, eng: "Then I am ready to start a productive day.", tr: "Sonra verimli bir güne başlamaya hazırım." }
    ],
    questions: [
      { q: "What time does the author wake up?", options: ["At six", "At seven", "At eight"], answer: 1 },
      { q: "What does the author put on the bread?", options: ["Butter and jam", "Cheese and tomato", "Peanut butter"], answer: 0 },
      { q: "What is the cat's name?", options: ["Leo", "Oliver", "Max"], answer: 1 }
    ]
  },
  {
    id: 7,
    level: 'A1',
    title: 'My Favorite Hobby: Painting',
    bgImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Painting pictures is my favorite weekend hobby.", tr: "Resim yapmak benim en sevdiğim hafta sonu hobimdir." },
      { id: 2, eng: "I have a wooden box with many colorful acrylic paints.", tr: "İçinde çok sayıda renkli akrilik boya olan ahşap bir kutum var." },
      { id: 3, eng: "Blue, yellow, red, and green are my favorite colors.", tr: "Mavi, sarı, kırmızı ve yeşil en sevdiğim renklerdir." },
      { id: 4, eng: "I set up my easel near the large living room window.", tr: "Şövalemi geniş oturma odası penceresinin yanına kurarım." },
      { id: 5, eng: "Natural daylight helps me see true shades.", tr: "Doğal gün ışığı gerçek tonları görmeme yardımcı olur." },
      { id: 6, eng: "Today, I am painting green mountains and a blue river.", tr: "Bugün yeşil dağlar ve mavi bir nehir çiziyorum." },
      { id: 7, eng: "I use a thin brush for small details like trees.", tr: "Ağaçlar gibi küçük detaylar için ince bir fırça kullanırım." },
      { id: 8, eng: "Mixing colors on the palette is very fun.", tr: "Palet üzerinde renkleri karıştırmak çok eğlencelidir." },
      { id: 9, eng: "When I paint, all my daily stress disappears.", tr: "Resim yaptığımda tüm günlük stresim yok olur." },
      { id: 10, eng: "My mother hangs my finished paintings on the hallway wall.", tr: "Annem bitmiş tablolarımı koridor duvarına asar." },
      { id: 11, eng: "My friends always compliment my colorful artwork.", tr: "Arkadaşlarım her zaman renkli sanat eserlerimi över." },
      { id: 12, eng: "Art brings immense joy and peace to my heart.", tr: "Sanat kalbime muazzam bir neşe ve huzur getirir." }
    ],
    questions: [
      { q: "What is the author's favorite hobby?", options: ["Reading", "Painting", "Singing"], answer: 1 },
      { q: "What is the author painting today?", options: ["Animals", "Mountains and a river", "A city street"], answer: 1 },
      { q: "Where does the mother hang the paintings?", options: ["In the bedroom", "On the hallway wall", "In the kitchen"], answer: 1 }
    ]
  },
  {
    id: 8,
    level: 'A1',
    title: 'A Rainy Day at Home',
    bgImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Dark grey clouds covered the sky this morning.", tr: "Bu sabah koyu gri bulutlar gökyüzünü kapladı." },
      { id: 2, eng: "Heavy raindrops started falling on the glass windows.", tr: "Ağır yağmur damlaları cam pencerelere düşmeye başladı." },
      { id: 3, eng: "The cold wind blew yellow leaves across the street.", tr: "Soğuk rüzgar sokak boyunca sarı yaprakları savurdu." },
      { id: 4, eng: "I stayed inside our warm living room.", tr: "Sıcak oturma odamızın içinde kaldım." },
      { id: 5, eng: "I wore thick wool socks and a soft grey sweater.", tr: "Kalın yün çoraplar ve yumuşak gri bir kazak giydim." },
      { id: 6, eng: "My grandmother made hot mint tea with honey.", tr: "Büyükannem ballı sıcak nane çayı yaptı." },
      { id: 7, eng: "The sweet aroma of mint filled the whole house.", tr: "Nanenin tatlı aroması bütün evi doldurdu." },
      { id: 8, eng: "I sat on the sofa and opened an interesting storybook.", tr: "Kanepeye oturdum ve ilginç bir hikaye kitabı açtım." },
      { id: 9, eng: "Listening to the sound of rain makes me feel peaceful.", tr: "Yağmurun sesini dinlemek beni huzurlu hissettirir." },
      { id: 10, eng: "In the afternoon, the rain slowly stopped.", tr: "Öğleden sonra yağmur yavaşça durdu." },
      { id: 11, eng: "A beautiful colorful rainbow appeared behind the clouds.", tr: "Bulutların arkasında güzel, renkli bir gökkuşağı belirdi." },
      { id: 12, eng: "I love rainy days when I can stay home.", tr: "Evde kalabildiğim yağmurlu günleri çok seviyorum." }
    ],
    questions: [
      { q: "What was the weather like in the morning?", options: ["Sunny", "Rainy and windy", "Snowy"], answer: 1 },
      { q: "What did the grandmother make?", options: ["Hot chocolate", "Mint tea with honey", "Coffee"], answer: 1 },
      { q: "What appeared when the rain stopped?", options: ["A rainbow", "Lightning", "Snow"], answer: 0 }
    ]
  },
  {
    id: 9,
    level: 'A1',
    title: 'Going to the City Library',
    bgImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "The city library is my favorite place in town.", tr: "Şehir kütüphanesi kasabadaki en sevdiğim yerdir." },
      { id: 2, eng: "It is an old stone building with huge wooden doors.", tr: "Büyük ahşap kapıları olan eski taş bir binadır." },
      { id: 3, eng: "Inside, there are tall shelves filled with thousands of books.", tr: "İçeride binlerce kitapla dolu yüksek raflar var." },
      { id: 4, eng: "Everyone speaks in quiet whispers to respect others.", tr: "Herkes başkalarına saygı duymak için alçak fısıltılarla konuşur." },
      { id: 5, eng: "I show my blue library card to the kind librarian.", tr: "Mavi kütüphane kartımı kibar kütüphaneciye gösteririm." },
      { id: 6, eng: "She smiles and points towards the English literature section.", tr: "Gülümser ve İngiliz edebiyatı bölümünü işaret eder." },
      { id: 7, eng: "I look for graded readers with short vocabularies.", tr: "Kısa kelime dağarcığı olan seviyelendirilmiş okuma kitapları ararım." },
      { id: 8, eng: "I select three books about nature and adventure.", tr: "Doğa ve macera hakkında üç kitap seçerim." },
      { id: 9, eng: "I sit near a wooden table under a warm green lamp.", tr: "Ilık yeşil bir lambanın altındaki ahşap bir masanın yanına otururum." },
      { id: 10, eng: "I read the first chapter without any phone distractions.", tr: "İlk bölümü telefon dikkat dağınıklığı olmadan okurum." },
      { id: 11, eng: "I can borrow these books for two whole weeks.", tr: "Bu kitapları tam iki hafta boyunca ödünç alabilirim." },
      { id: 12, eng: "Reading in the library makes me very happy.", tr: "Kütüphanede okumak beni çok mutlu eder." }
    ],
    questions: [
      { q: "What does the author show to the librarian?", options: ["Money", "A library card", "A passport"], answer: 1 },
      { q: "How many books does the author select?", options: ["One", "Three", "Ten"], answer: 1 },
      { q: "How long can the author borrow the books?", options: ["Two weeks", "Two days", "One month"], answer: 0 }
    ]
  },
  {
    id: 10,
    level: 'A1',
    title: 'A Sunny Day in the Park',
    bgImage: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Today is sunny and perfect for spending time outside.", tr: "Bugün güneşli ve dışarıda vakit geçirmek için mükemmel." },
      { id: 2, eng: "My friends and I meet at the central green park.", tr: "Arkadaşlarım ve ben merkez yeşil parkta buluşuruz." },
      { id: 3, eng: "Tall green pine trees provide cool shade.", tr: "Uzun yeşil çam ağaçları serin gölge sağlar." },
      { id: 4, eng: "Many families are sitting on colorful blankets.", tr: "Birçok aile renkli battaniyelerin üzerinde oturuyor." },
      { id: 5, eng: "Small children are laughing and running on the grass.", tr: "Küçük çocuklar çimenlerin üzerinde gülüyor ve koşuyor." },
      { id: 6, eng: "We throw a red frisbee back and forth across the lawn.", tr: "Çimlerin üzerinde kırmızı bir frizbiyi ileri geri fırlatırız." },
      { id: 7, eng: "A cute white puppy barks and chases the frisbee.", tr: "Sevimli beyaz bir köpek yavrusu havlar ve frizbiyi kovalar." },
      { id: 8, eng: "We buy cold vanilla ice cream from a cart.", tr: "Bir arabadan soğuk vanilyalı dondurma satın alırız." },
      { id: 9, eng: "The sweet taste of ice cream cools us down.", tr: "Dondurmanın tatlı tadı bizi serinletir." },
      { id: 10, eng: "We sit on a wooden bench and chat about school.", tr: "Ahşap bir banka oturur ve okul hakkında sohbet ederiz." },
      { id: 11, eng: "As the sun sets, the sky turns bright pink.", tr: "Güneş batarken gökyüzü parlak pembeye döner." },
      { id: 12, eng: "We walk home feeling energized and cheerful.", tr: "Kendimizi enerjik ve neşeli hissederek eve yürürüz." }
    ],
    questions: [
      { q: "Where do the friends meet?", options: ["At a restaurant", "At the central park", "At the cinema"], answer: 1 },
      { q: "What ice cream flavor do they buy?", options: ["Chocolate", "Vanilla", "Strawberry"], answer: 1 },
      { q: "What color does the sky turn at sunset?", options: ["Green", "Pink", "Dark blue"], answer: 1 }
    ]
  }
];

console.log("A1 template loaded with", a1NewTexts.length, "items.");
