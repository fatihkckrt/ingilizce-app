// scripts/build_70_texts.cjs
const fs = require('fs');

// We will load the original 20 texts from src/data.ts first
const dataContent = fs.readFileSync('src/data.ts', 'utf8');
const originalTextsMatch = dataContent.match(/const defaultTexts = \[([\s\S]*?)\];\s*\n\s*(const|export|let)/);

if (!originalTextsMatch) {
  console.error("Could not find defaultTexts in src/data.ts");
  process.exit(1);
}

const originalTexts = eval("[" + originalTextsMatch[1] + "]");
console.log(`Loaded ${originalTexts.length} original texts.`);

// Original 1..5 are A1
const originalA1 = originalTexts.filter(t => t.level === 'A1'); // 5 texts (1..5)
// Original 6..10 are A2
const originalA2 = originalTexts.filter(t => t.level === 'A2'); // 5 texts (6..10)
// Original 11..15 are B1
const originalB1 = originalTexts.filter(t => t.level === 'B1'); // 5 texts (11..15)
// Original 16..20 are B2
const originalB2 = originalTexts.filter(t => t.level === 'B2'); // 5 texts (16..20)

// Renumber original A2 from 31..35
const renumberedA2 = originalA2.map((t, idx) => ({ ...t, id: 31 + idx }));
// Renumber original B1 from 61..65
const renumberedB1 = originalB1.map((t, idx) => ({ ...t, id: 61 + idx }));
// Renumber original B2 from 66..70
const renumberedB2 = originalB2.map((t, idx) => ({ ...t, id: 66 + idx }));

// Now let us define the 25 new A1 texts (id 6 to 30)
const newA1Texts = [
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
  },
  {
    id: 11,
    level: 'A1',
    title: 'Making Fresh Fruit Salad',
    bgImage: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "On hot summer afternoons, I love making fresh fruit salad.", tr: "Sıcak yaz öğleden sonralarında taze meyve salatası yapmayı çok severim." },
      { id: 2, eng: "I wash my hands and place a big glass bowl on the kitchen table.", tr: "Ellerimi yıkar ve mutfak masasına büyük bir cam kase koyarım." },
      { id: 3, eng: "First, I peel two sweet yellow bananas and cut them into slices.", tr: "İlk önce iki tatlı sarı muzun kabuğunu soyar ve dilimlere keserim." },
      { id: 4, eng: "Next, I wash ten ripe red strawberries with cold water.", tr: "Sonra on olgun kırmızı çileği soğuk suyla yıkarım." },
      { id: 5, eng: "I chop a green apple into crisp crunchy cubes.", tr: "Yeşil bir elmayı çıtır çıtır küpler halinde doğrarım." },
      { id: 6, eng: "I add sweet purple grapes and a peeled orange.", tr: "Tatlı mor üzümler ve soyulmuş bir portakal eklerim." },
      { id: 7, eng: "I squeeze half a fresh lemon over the mixed fruits.", tr: "Karışık meyvelerin üzerine yarım taze limon sıkarım." },
      { id: 8, eng: "Lemon juice keeps the apples fresh and prevents them from turning brown.", tr: "Limon suyu elmaları taze tutar ve kararmalarını önler." },
      { id: 9, eng: "I add a spoonful of pure flower honey for extra sweetness.", tr: "Ekstra tatlılık için bir kaşık saf çiçek balı eklerim." },
      { id: 10, eng: "I mix everything gently with a large wooden spoon.", tr: "Büyük bir tahta kaşıkla her şeyi nazikçe karıştırırım." },
      { id: 11, eng: "I share the colorful bowl with my little sister.", tr: "Renkli kaseyi küçük kız kardeşimle paylaşırım." },
      { id: 12, eng: "Eating healthy fresh fruit gives us plenty of energy.", tr: "Sağlıklı taze meyve yemek bize bolca enerji verir." }
    ],
    questions: [
      { q: "Why does the author squeeze lemon juice over the fruit?", options: ["To make it bitter", "To keep it fresh and prevent browning", "To make it spicy"], answer: 1 },
      { q: "What does the author add for extra sweetness?", options: ["Sugar", "Pure flower honey", "Chocolate syrup"], answer: 1 },
      { q: "Who does the author share the salad with?", options: ["Little sister", "Classmate", "Grandfather"], answer: 0 }
    ]
  },
  {
    id: 12,
    level: 'A1',
    title: 'My Friendly Cat Oliver',
    bgImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Oliver is my lovely two-year-old cat.", tr: "Oliver benim iki yaşındaki sevimli kedimdir." },
      { id: 2, eng: "He has soft orange fur and big emerald green eyes.", tr: "Yumuşak turuncu kürkü ve kocaman zümrüt yeşili gözleri var." },
      { id: 3, eng: "Oliver sleeps on my soft pillow every single night.", tr: "Oliver her gece yumuşak yastığımda uyur." },
      { id: 4, eng: "When my alarm rings, he taps my nose with his soft paw.", tr: "Alarmım çaldığında yumuşak patisiyle burnuma dokunur." },
      { id: 5, eng: "He purrs loudly when I pet him behind his ears.", tr: "Kulaklarının arkasını okşadığımda yüksek sesle mırlar." },
      { id: 6, eng: "I give him fresh water and healthy crunchy cat food.", tr: "Ona taze su ve sağlıklı çıtır kedi maması veririm." },
      { id: 7, eng: "His favorite toy is a tiny red rubber ball.", tr: "En sevdiği oyuncak küçük kırmızı bir lastik toptur." },
      { id: 8, eng: "He chases the red ball all around the living room.", tr: "Kırmızı topu oturma odasının her tarafında kovalar." },
      { id: 9, eng: "In the afternoon, Oliver sits on the sunny windowsill.", tr: "Öğleden sonra Oliver güneşli pencere kenarında oturur." },
      { id: 10, eng: "He watches flying birds and fluttering leaves outside.", tr: "Dışarıdaki uçan kuşları ve dalgalanan yaprakları izler." },
      { id: 11, eng: "Whenever I feel sad, Oliver sits close to comfort me.", tr: "Ne zaman üzgün hissetsem Oliver beni teselli etmek için yakınıma oturur." },
      { id: 12, eng: "Having a pet makes life so much happier.", tr: "Bir evcil hayvana sahip olmak hayatı çok daha mutlu kılar." }
    ],
    questions: [
      { q: "What color are Oliver's eyes?", options: ["Blue", "Emerald green", "Brown"], answer: 1 },
      { q: "What is Oliver's favorite toy?", options: ["A red rubber ball", "A feather", "A mouse"], answer: 0 },
      { q: "Where does Oliver like to sit in the afternoon?", options: ["In the kitchen", "On the windowsill", "In the garden"], answer: 1 }
    ]
  },
  {
    id: 13,
    level: 'A1',
    title: 'Walking in the Autumn Woods',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Autumn is my absolute favorite season of the year.", tr: "Sonbahar yılın kesinlikle en sevdiğim mevsimidir." },
      { id: 2, eng: "The forest behind our town transforms into gold and orange.", tr: "Kasabamızın arkasındaki orman altın ve turuncuya dönüşür." },
      { id: 3, eng: "Crisp fallen leaves crunch softly under my walking boots.", tr: "Çıtır dökülmüş yapraklar yürüyüş botlarımın altında usulca çatırdar." },
      { id: 4, eng: "The air smells fresh like damp earth and pine needles.", tr: "Hava nemli toprak ve çam iğnesi gibi taze kokar." },
      { id: 5, eng: "I wear a warm wool coat and a knitted scarf.", tr: "Sıcak bir yün palto ve örgü bir atkı takarım." },
      { id: 6, eng: "A shy brown squirrel climbs quickly up an old oak tree.", tr: "Utangaç kahverengi bir sincap yaşlı bir meşe ağacına hızlıca tırmanır." },
      { id: 7, eng: "It carries a small brown acorn in its tiny paws.", tr: "Küçük patilerinde minik kahverengi bir palamut taşır." },
      { id: 8, eng: "I stop by a quiet wooden bridge over the stream.", tr: "Derenin üzerindeki sessiz ahşap bir köprünün yanında dururum." },
      { id: 9, eng: "Clear cold water flows gently between smooth grey stones.", tr: "Berrak soğuk su pürüzsüz gri taşların arasından nazikçe akar." },
      { id: 10, eng: "I take several beautiful pictures with my pocket camera.", tr: "Cep kameramla birkaç güzel fotoğraf çekerim." },
      { id: 11, eng: "Walking among tall trees brings deep calm to my mind.", tr: "Yüksek ağaçlar arasında yürümek zihnime derin bir dinginlik getirir." },
      { id: 12, eng: "I return home before the evening chill sets in.", tr: "Akşam ayazı başlamadan önce eve dönerim." }
    ],
    questions: [
      { q: "What animal climbs the old oak tree?", options: ["A bird", "A brown squirrel", "A fox"], answer: 1 },
      { q: "What does the squirrel carry?", options: ["A nut", "An acorn", "A berry"], answer: 1 },
      { q: "What does the author take pictures with?", options: ["A pocket camera", "A phone", "A tablet"], answer: 0 }
    ]
  },
  {
    id: 14,
    level: 'A1',
    title: 'A Big Family Dinner',
    bgImage: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "On Friday evenings, my whole family gathers for dinner.", tr: "Cuma akşamları tüm ailem akşam yemeği için toplanır." },
      { id: 2, eng: "My parents, grandparents, aunt, and cousins all come together.", tr: "Annem, babam, büyükannem, büyükbabam, teyzem ve kuzenlerim hep birlikte gelir." },
      { id: 3, eng: "We set a long wooden table with white napkins and candles.", tr: "Beyaz peçeteler ve mumlarla uzun bir ahşap masa kurarız." },
      { id: 4, eng: "My father cooks tender roasted chicken in the oven.", tr: "Babam fırında lokum gibi kızarmış tavuk pişirir." },
      { id: 5, eng: "My mother prepares a rich green salad with olive oil.", tr: "Annem zeytinyağlı zengin yeşil bir salata hazırlar." },
      { id: 6, eng: "My grandmother brings homemade warm apple pie.", tr: "Büyükannem ev yapımı sıcak elmalı turta getirir." },
      { id: 7, eng: "Everyone sits down and talks about their busy week.", tr: "Herkes oturur ve yoğun geçen haftaları hakkında konuşur." },
      { id: 8, eng: "My uncle tells funny stories that make us all laugh loudly.", tr: "Amcam hepimizi kahkahalarla güldüren komik hikayeler anlatır." },
      { id: 9, eng: "We drink warm herbal tea after finishing our meal.", tr: "Yemeğimizi bitirdikten sonra sıcak bitki çayı içeriz." },
      { id: 10, eng: "I help clear the empty plates from the table.", tr: "Boş tabakları masadan kaldırmaya yardım ederim." },
      { id: 11, eng: "Family dinners remind me how lucky I am.", tr: "Aile yemekleri bana ne kadar şanslı olduğumu hatırlatır." },
      { id: 12, eng: "Love and shared meals create wonderful memories.", tr: "Sevgi ve paylaşılan yemekler harika anılar yaratır." }
    ],
    questions: [
      { q: "On what day does the family gather for dinner?", options: ["Friday evening", "Sunday morning", "Wednesday"], answer: 0 },
      { q: "What dessert does the grandmother bring?", options: ["Chocolate cake", "Homemade apple pie", "Ice cream"], answer: 1 },
      { q: "What do they drink after dinner?", options: ["Coffee", "Warm herbal tea", "Cold soda"], answer: 1 }
    ]
  },
  {
    id: 15,
    level: 'A1',
    title: 'Riding a Bicycle in Spring',
    bgImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Spring brings warm sunny weather and blooming flowers.", tr: "İlkbahar ılık güneşli hava ve açan çiçekler getirir." },
      { id: 2, eng: "I take my bright blue bicycle out of the garage.", tr: "Parlak mavi bisikletimi garajdan çıkarırım." },
      { id: 3, eng: "I check the tire pressure with a small hand pump.", tr: "Küçük bir el pompasıyla lastik basıncını kontrol ederim." },
      { id: 4, eng: "I strap on my protective helmet and adjust the mirror.", tr: "Koruyucu kaskımı bağlar ve aynayı ayarlarım." },
      { id: 5, eng: "There is a wide bicycle path that follows the clean river.", tr: "Temiz nehri takip eden geniş bir bisiklet yolu vardır." },
      { id: 6, eng: "The gentle cool breeze feels amazing on my face.", tr: "Hafif serin esinti yüzümde harika bir his bırakır." },
      { id: 7, eng: "Pink cherry blossoms drop petals along the asphalt road.", tr: "Pembe kiraz çiçekleri asfalt yola yaprak döker." },
      { id: 8, eng: "I ring my little brass bell when passing other cyclists.", tr: "Diğer bisikletlileri geçerken küçük pirinç zilimi çalarım." },
      { id: 9, eng: "I stop at a wooden bench to drink cold water from my bottle.", tr: "Mataramdan soğuk su içmek için ahşap bir bankta dururum." },
      { id: 10, eng: "Riding a bicycle keeps my body strong and healthy.", tr: "Bisiklete binmek vücudumu güçlü ve sağlıklı tutar." },
      { id: 11, eng: "It is an eco-friendly and enjoyable way to travel.", tr: "Seyahat etmenin çevre dostu ve keyifli bir yoludur." },
      { id: 12, eng: "I cycle back home feeling refreshed and energized.", tr: "Kendimi yenilenmiş ve enerjik hissederek eve geri sürerim." }
    ],
    questions: [
      { q: "Where is the bicycle path located?", options: ["In the city center", "Along the clean river", "On the mountain"], answer: 1 },
      { q: "What does the author wear for protection?", options: ["Gloves", "A helmet", "Sunglasses"], answer: 1 },
      { q: "What does the author ring when passing others?", options: ["A phone", "A brass bell", "A whistle"], answer: 1 }
    ]
  }
];

console.log("Script draft ready to append remaining texts.");
