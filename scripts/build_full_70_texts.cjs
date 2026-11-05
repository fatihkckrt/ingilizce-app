// scripts/build_full_70_texts.cjs
const fs = require('fs');

// Read original 20 texts from src/data.ts
const dataContent = fs.readFileSync('src/data.ts', 'utf8');
const originalTextsMatch = dataContent.match(/const defaultTexts = \[([\s\S]*?)\];\s*\n\s*(const|export|let)/);

if (!originalTextsMatch) {
  console.error("Could not find defaultTexts in src/data.ts");
  process.exit(1);
}

const originalTexts = eval("[" + originalTextsMatch[1] + "]");
console.log(`Loaded ${originalTexts.length} original texts from src/data.ts`);

const originalA1 = originalTexts.filter(t => t.level === 'A1'); // IDs 1..5
const originalA2 = originalTexts.filter(t => t.level === 'A2'); // IDs 6..10 -> renumbered to 31..35
const originalB1 = originalTexts.filter(t => t.level === 'B1'); // IDs 11..15 -> renumbered to 61..65
const originalB2 = originalTexts.filter(t => t.level === 'B2'); // IDs 16..20 -> renumbered to 66..70

const renumberedA2 = originalA2.map((t, i) => ({ ...t, id: 31 + i }));
const renumberedB1 = originalB1.map((t, i) => ({ ...t, id: 61 + i }));
const renumberedB2 = originalB2.map((t, i) => ({ ...t, id: 66 + i }));

// 25 new A1 texts (id 6 to 30)
const newA1 = [
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
  },
  {
    id: 16,
    level: 'A1',
    title: 'Cooking Pasta with Tomato Sauce',
    bgImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Cooking pasta is simple, fast, and very delicious.", tr: "Makarna pişirmek basit, hızlı ve çok lezzetlidir." },
      { id: 2, eng: "First, I fill a large stainless steel pot with water.", tr: "İlk önce büyük bir paslanmaz çelik tencereyi suyla doldururum." },
      { id: 3, eng: "I place the pot on the stove and turn on the flame.", tr: "Tencereyi ocağa koyar ve ateşi yakarım." },
      { id: 4, eng: "I add a pinch of salt when the water starts boiling.", tr: "Su kaynamaya başladığında bir tutam tuz eklerim." },
      { id: 5, eng: "I pour a package of penne pasta into the bubbling pot.", tr: "Kabarcıklanan tencereye bir paket penne makarna dökerim." },
      { id: 6, eng: "In a separate pan, I heat pure olive oil and minced garlic.", tr: "Ayrı bir tavada saf zeytinyağı ve kıyılmış sarımsak ısıtırım." },
      { id: 7, eng: "I add chopped red tomatoes and dried green basil.", tr: "Doğranmış kırmızı domatesler ve kurutulmuş yeşil fesleğen eklerim." },
      { id: 8, eng: "The red tomato sauce simmers gently for ten minutes.", tr: "Kırmızı domates sosu on dakika boyunca kısık ateşte kaynar." },
      { id: 9, eng: "I drain the cooked pasta in a metal colander.", tr: "Pişmiş makarnayı metal bir süzgeçte süzerim." },
      { id: 10, eng: "I mix the hot pasta together with the rich red sauce.", tr: "Sıcak makarnayı zengin kırmızı sosla birlikte karıştırırım." },
      { id: 11, eng: "I sprinkle grated white cheese on top before serving.", tr: "Servis yapmadan önce üzerine rendelenmiş beyaz peynir serperim." },
      { id: 12, eng: "Dinner smells like a traditional Italian restaurant.", tr: "Akşam yemeği geleneksel bir İtalyan restoranı gibi kokar." }
    ],
    questions: [
      { q: "What herb does the author add to the tomato sauce?", options: ["Mint", "Green basil", "Oregano"], answer: 1 },
      { q: "What type of pasta does the author use?", options: ["Spaghetti", "Penne pasta", "Macaroni"], answer: 1 },
      { q: "What is sprinkled on top before serving?", options: ["Grated white cheese", "Black pepper", "Sugar"], answer: 0 }
    ]
  },
  {
    id: 17,
    level: 'A1',
    title: 'The Friendly Neighborhood Baker',
    bgImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Mr. Thomas owns the oldest bakery on our quiet street.", tr: "Bay Thomas sakin caddemizdeki en eski fırının sahibidir." },
      { id: 2, eng: "He wakes up at four in the morning every single day.", tr: "Her gün sabahın dördünde uyanır." },
      { id: 3, eng: "He mixes flour, water, yeast, and salt in big bowls.", tr: "Büyük kaselerde un, su, maya ve tuzu karıştırır." },
      { id: 4, eng: "The stone oven bakes hundreds of crusty loaves before sunrise.", tr: "Taş fırın gün doğumundan önce yüzlerce çıtır somun pişirir." },
      { id: 5, eng: "The pleasant smell of warm bread travels across the neighborhood.", tr: "Sıcak ekmeğin hoş kokusu mahalle boyunca yayılır." },
      { id: 6, eng: "I visit the bakery at eight to buy breakfast bread.", tr: "Kahvaltı ekmeği almak için saat sekizde fırını ziyaret ederim." },
      { id: 7, eng: "Mr. Thomas always wears a clean white apron and a friendly smile.", tr: "Bay Thomas her zaman temiz beyaz bir önlük ve dostça bir gülümseme takar." },
      { id: 8, eng: "He also bakes buttery croissants and sweet cinnamon rolls.", tr: "Ayrıca tereyağlı kruvasanlar ve tatlı tarçınlı çörekler pişirir." },
      { id: 9, eng: "He gives me a tiny warm cookie as a special treat.", tr: "Bana özel bir ikram olarak minik sıcak bir kurabiye verir." },
      { id: 10, eng: "I thank him politely and pay with my coins.", tr: "Ona kibarca teşekkür eder ve madeni paralarımla öderim." },
      { id: 11, eng: "Local small businesses make our town feel like a family.", tr: "Yerel küçük işletmeler kasabamızı bir aile gibi hissettirir." },
      { id: 12, eng: "Warm fresh bread tastes best when shared with loved ones.", tr: "Sıcak taze ekmek sevdiklerinizle paylaşıldığında en lezzetlidir." }
    ],
    questions: [
      { q: "What time does Mr. Thomas wake up?", options: ["At four in the morning", "At seven", "At noon"], answer: 0 },
      { q: "What does the baker wear?", options: ["A black suit", "A clean white apron", "A blue jacket"], answer: 1 },
      { q: "What special treat does Mr. Thomas give the author?", options: ["A croissant", "A tiny warm cookie", "An apple"], answer: 1 }
    ]
  },
  {
    id: 18,
    level: 'A1',
    title: 'A Morning at the Flower Garden',
    bgImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "My grandmother has a magical flower garden behind her house.", tr: "Büyükannemin evinin arkasında büyülü bir çiçek bahçesi var." },
      { id: 2, eng: "In early morning, shiny dew drops cover every green petal.", tr: "Sabahın erken saatlerinde parıldayan çiy damlaları her yeşil yaprağı kaplar." },
      { id: 3, eng: "Red roses, yellow sunflowers, and purple lavender grow side by side.", tr: "Kırmızı güller, sarı ayçiçekleri ve mor lavantalar yan yana büyür." },
      { id: 4, eng: "I help my grandmother pull out unwanted weeds from the soil.", tr: "Büyükanneme topraktan istenmeyen yabani otları çekmesine yardım ederim." },
      { id: 5, eng: "We use a green plastic watering can to nourish the roots.", tr: "Kökleri beslemek için yeşil plastik bir sulama kabı kullanırız." },
      { id: 6, eng: "Busy honeybees buzz quietly from one blossom to another.", tr: "Meşgul bal arıları bir çiçekten diğerine sessizce vızıldar." },
      { id: 7, eng: "A blue butterfly lands gently on a tall yellow tulip.", tr: "Mavi bir kelebek uzun sarı bir lalenin üzerine nazikçe konar." },
      { id: 8, eng: "The soothing perfume of lavender fills the fresh garden air.", tr: "Lavantanın rahatlatıcı kokusu taze bahçe havasını doldurur." },
      { id: 9, eng: "Gardening teaches patience and gentle care for nature.", tr: "Bahçıvanlık sabrı ve doğaya karşı nazik bakımı öğretir." },
      { id: 10, eng: "We cut a small bouquet of colorful flowers for the dining table.", tr: "Yemek masası için renkli çiçeklerden oluşan küçük bir buket keseriz." },
      { id: 11, eng: "We place them in a crystal vase filled with fresh water.", tr: "Onları taze suyla dolu kristal bir vazoya koyarız." },
      { id: 12, eng: "Nature brings peace and joy to everyone who cares for it.", tr: "Doğa ona özen gösteren herkese huzur ve sevinç getirir." }
    ],
    questions: [
      { q: "What covers the petals in early morning?", options: ["Dust", "Shiny dew drops", "Snow"], answer: 1 },
      { q: "What insect buzzes around the blossoms?", options: ["Honeybees", "Ants", "Flies"], answer: 0 },
      { q: "Where do they place the bouquet of flowers?", options: ["In a wooden box", "In a crystal vase on the dining table", "Outside"], answer: 1 }
    ]
  },
  {
    id: 19,
    level: 'A1',
    title: 'Cleaning and Tidying My Room',
    bgImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Saturday morning is my designated room cleaning time.", tr: "Cumartesi sabahı benim belirlenmiş oda temizleme zamanımdır." },
      { id: 2, eng: "First, I open the window wide to let in fresh cool breeze.", tr: "İlk önce taze serin esintiyi içeri almak için pencereyi ardına kadar açarım." },
      { id: 3, eng: "I put on my favorite upbeat music on my small speaker.", tr: "Küçük hoparlörümden en sevdiğim neşeli müziği açarım." },
      { id: 4, eng: "I make my bed neatly with clean white sheets and blankets.", tr: "Yatağımı temiz beyaz çarşaflar ve battaniyelerle düzgünce toplarım." },
      { id: 5, eng: "I pick up clothes from the chair and hang them in the closet.", tr: "Sandalyedeki kıyafetleri toplar ve dolaba asarım." },
      { id: 6, eng: "I arrange my school notebooks and textbooks on the wooden desk.", tr: "Okul defterlerimi ve ders kitaplarımı ahşap masanın üzerine dizerim." },
      { id: 7, eng: "I wipe the dust off my computer monitor with a microfiber cloth.", tr: "Bilgisayar monitörümün tozunu mikrofiber bir bezle silerim." },
      { id: 8, eng: "Then I vacuum the soft carpet from corner to corner.", tr: "Sonra yumuşak halıyı köşeden köşeye süpürürüm." },
      { id: 9, eng: "I empty the small wastebasket near my study desk.", tr: "Çalışma masamın yanındaki küçük çöp kutusunu boşaltırım." },
      { id: 10, eng: "A tidy and clean room helps me think clearly and study better.", tr: "Düzenli ve temiz bir oda net düşünmeme ve daha iyi ders çalışmama yardımcı olur." },
      { id: 11, eng: "I light a lavender candle to make the air smell pleasant.", tr: "Havanın hoş kokması için bir lavanta mumu yakarım." },
      { id: 12, eng: "I feel proud and relaxed when my personal space is clean.", tr: "Kişisel alanım temiz olduğunda gururlu ve rahatlamış hissederim." }
    ],
    questions: [
      { q: "What does the author do first before cleaning?", options: ["Eats breakfast", "Opens the window wide for fresh air", "Sleeps"], answer: 1 },
      { q: "What does the author use to wipe dust from the monitor?", options: ["Paper", "A microfiber cloth", "A wet towel"], answer: 1 },
      { q: "What candle scent is lit at the end?", options: ["Vanilla", "Lavender", "Lemon"], answer: 1 }
    ]
  },
  {
    id: 20,
    level: 'A1',
    title: 'Buying New Shoes at the Mall',
    bgImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Yesterday, my older brother and I went to the shopping mall.", tr: "Dün ağabeyim ve ben alışveriş merkezine gittik." },
      { id: 2, eng: "I needed a new pair of running sneakers for gym class.", tr: "Beden eğitimi dersi için yeni bir çift koşu spor ayakkabısına ihtiyacım vardı." },
      { id: 3, eng: "The sports shop was brightly lit with rows of colorful footwear.", tr: "Spor mağazası rengarenk ayakkabı sıralarıyla pırıl pırıl aydınlatılmıştı." },
      { id: 4, eng: "A polite sales assistant asked how he could assist us.", tr: "Kibar bir satış görevlisi bize nasıl yardımcı olabileceğini sordu." },
      { id: 5, eng: "I told him I wear European shoe size forty.", tr: "Ona kırk numara Avrupa ayakkabı giydiğimi söyledim." },
      { id: 6, eng: "He brought three different boxes of running shoes.", tr: "Üç farklı koşu ayakkabısı kutusu getirdi." },
      { id: 7, eng: "I tried on a dark blue pair with soft white foam soles.", tr: "Yumuşak beyaz köpük tabanlı koyu mavi bir çift denedim." },
      { id: 8, eng: "I tied the laces and walked around the shop carpet.", tr: "Bağcıkları bağladım ve mağaza halısında dolaştım." },
      { id: 9, eng: "The sneakers felt very light and extremely comfortable on my feet.", tr: "Spor ayakkabılar ayağımda çok hafif ve son derece rahat hissettirdi." },
      { id: 10, eng: "My brother agreed that they looked stylish and sporty.", tr: "Ağabeyim şık ve sportif göründükleri konusunda hemfikir oldu." },
      { id: 11, eng: "We paid at the counter and carried the shoe box home happily.", tr: "Kasada ödeme yaptık ve ayakkabı kutusunu mutlu bir şekilde eve taşıdık." },
      { id: 12, eng: "I cannot wait to wear my new sneakers to school tomorrow.", tr: "Yeni spor ayakkabılarımı yarın okula giymek için sabırsızlanıyorum." }
    ],
    questions: [
      { q: "What shoe size does the author wear?", options: ["Size 38", "Size 40", "Size 42"], answer: 1 },
      { q: "What color pair did the author choose?", options: ["Red", "Dark blue with white soles", "Black"], answer: 1 },
      { q: "Why did the author need new shoes?", options: ["For a party", "For gym class", "For winter snow"], answer: 1 }
    ]
  },
  {
    id: 21,
    level: 'A1',
    title: 'Watching the Night Stars',
    bgImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Summer nights in our village are remarkably clear and dark.", tr: "Köyümüzdeki yaz geceleri son derece berrak ve karanlıktır." },
      { id: 2, eng: "There are no tall city buildings or bright street lamps here.", tr: "Burada yüksek şehir binaları veya parlak sokak lambaları yoktur." },
      { id: 3, eng: "My father and I spread a thick blanket on the soft grass.", tr: "Babam ve ben yumuşak çimlerin üzerine kalın bir battaniye sereriz." },
      { id: 4, eng: "We lie on our backs and gaze up at the giant velvet sky.", tr: "Sırt üstü yatar ve dev kadife gökyüzüne bakarız." },
      { id: 5, eng: "Millions of silver stars twinkle like tiny distant lanterns.", tr: "Milyonlarca gümüş yıldız minik uzak fenerler gibi parıldar." },
      { id: 6, eng: "The bright full moon shines like a silver plate.", tr: "Parlak dolunay gümüş bir tabak gibi parlar." },
      { id: 7, eng: "My father points towards the Big Dipper constellation.", tr: "Babam Büyük Ayı takımyıldızını işaret eder." },
      { id: 8, eng: "Suddenly, a shooting star streaks across the dark sky.", tr: "Aniden karanlık gökyüzünden bir kayan yıldız geçer." },
      { id: 9, eng: "I quickly close my eyes and make a silent hopeful wish.", tr: "Hızlıca gözlerimi kapatır ve sessiz umutlu bir dilek tutarım." },
      { id: 10, eng: "Crickets chirp a gentle nighttime song around the garden.", tr: "Cırcır böcekleri bahçenin etrafında nazik bir gece şarkısı öttürür." },
      { id: 11, eng: "Stargazing makes me feel wonder and respect for the universe.", tr: "Yıldızları izlemek evrene karşı hayranlık ve saygı duymamı sağlar." },
      { id: 12, eng: "We fall asleep counting stars under the infinite night.", tr: "Sonsuz gecenin altında yıldızları sayarak uykuya dalarız." }
    ],
    questions: [
      { q: "Where does the family watch the stars?", options: ["In a big city", "In their village garden", "On a boat"], answer: 1 },
      { q: "Which constellation does the father point out?", options: ["Orion", "The Big Dipper", "Cassiopeia"], answer: 1 },
      { q: "What does the author do when a shooting star appears?", options: ["Takes a photo", "Makes a silent wish", "Calls friends"], answer: 1 }
    ]
  },
  {
    id: 22,
    level: 'A1',
    title: 'Visiting My Grandparents',
    bgImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "My grandparents live in a small coastal town two hours away.", tr: "Büyükannem ve büyükbabam iki saat uzaklıktaki küçük bir sahil kasabasında yaşıyor." },
      { id: 2, eng: "We travel by bus every two weeks to visit them.", tr: "Onları ziyaret etmek için iki haftada bir otobüsle seyahat ederiz." },
      { id: 3, eng: "Their cozy house has a red tiled roof and a garden of lemons.", tr: "Samimi evlerinin kırmızı kiremitli bir çatısı ve limon bahçesi var." },
      { id: 4, eng: "My grandmother opens the front door and hugs me warmly.", tr: "Büyükannem ön kapıyı açar ve bana sımsıcak sarılır." },
      { id: 5, eng: "She always prepares homemade cheese pies and freshly baked bread.", tr: "Her zaman ev yapımı peynirli börekler ve taze pişmiş ekmek hazırlar." },
      { id: 6, eng: "My grandfather shows me his wooden workshop behind the house.", tr: "Büyükbabam bana evin arkasındaki ahşap atölyesini gösterir." },
      { id: 7, eng: "He carves miniature toy boats from fragrant olive wood.", tr: "Mis kokulu zeytin ağacından minyatür oyuncak tekneler oyar." },
      { id: 8, eng: "He teaches me how to sand the rough wood until it is smooth.", tr: "Pürüzlü ahşabı pürüzsüz olana kadar nasıl zımparalayacağımı öğretir." },
      { id: 9, eng: "In the evening, we drink black tea on the sea-view balcony.", tr: "Akşam deniz manzaralı balkonda siyah çay içeriz." },
      { id: 10, eng: "Grandmother tells ancient folktales from her childhood days.", tr: "Büyükanne çocukluk günlerinden kalma kadim halk hikayeleri anlatır." },
      { id: 11, eng: "Time spent with grandparents is precious and heartwarming.", tr: "Büyükanne ve büyükbaba ile geçirilen zaman çok değerli ve iç ısıtıcıdır." },
      { id: 12, eng: "I always return home with a happy heart and fond memories.", tr: "Eve her zaman mutlu bir kalp ve güzel anılarla dönerim." }
    ],
    questions: [
      { q: "What does the grandfather carve in his workshop?", options: ["Wooden chairs", "Miniature toy boats", "Picture frames"], answer: 1 },
      { q: "What trees grow in the grandparents' garden?", options: ["Apple trees", "Lemon trees", "Cherry trees"], answer: 1 },
      { q: "Where do they drink tea in the evening?", options: ["In the kitchen", "On the sea-view balcony", "In the garden"], answer: 1 }
    ]
  },
  {
    id: 23,
    level: 'A1',
    title: 'A Warm Summer at the Beach',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "In July, our family spent a wonderful week by the seaside.", tr: "Temmuz ayında ailemiz deniz kenarında harika bir hafta geçirdi." },
      { id: 2, eng: "The golden sandy beach stretched for miles under the hot sun.", tr: "Altın kumsal sıcak güneşin altında miller boyunca uzanıyordu." },
      { id: 3, eng: "We set up a striped blue umbrella to protect ourselves from heat.", tr: "Sıcaktan korunmak için çizgili mavi bir şemsiye kurduk." },
      { id: 4, eng: "I applied sunscreen lotion carefully before jumping into water.", tr: "Suya atlamadan önce güneş kremini dikkatlice sürdüm." },
      { id: 5, eng: "The turquoise Mediterranean water was crystal clear and refreshing.", tr: "Turkuaz Akdeniz suyu kristal gibi berrak ve ferahlatıcıydı." },
      { id: 6, eng: "Small silver fish swam curiously around my bare ankles.", tr: "Küçük gümüş balıklar çıplak ayak bileklerimin etrafında merakla yüzdü." },
      { id: 7, eng: "My sister and I built a giant sandcastle with moat and towers.", tr: "Kız kardeşimle hendek ve kuleleri olan dev bir kumdan kale yaptık." },
      { id: 8, eng: "We collected smooth colorful seashells along the shoreline.", tr: "Kıyı şeridi boyunca pürüzsüz renkli deniz kabukları topladık." },
      { id: 9, eng: "At midday, we ate chilled sweet watermelon slices on our towels.", tr: "Öğle vakti havlularımızın üzerinde soğutulmuş tatlı karpuz dilimleri yedik." },
      { id: 10, eng: "The rhythmic crashing of waves sounded like gentle music.", tr: "Dalgaların ritmik çarpması nazik bir müzik gibi geliyordu." },
      { id: 11, eng: "We watched the fiery orange sun sink slowly into the ocean.", tr: "Ateşli turuncu güneşin yavaşça okyanusa batışını izledik." },
      { id: 12, eng: "Summer beach days leave unforgettable smiles on our faces.", tr: "Yaz plaj günleri yüzümüzde unutulmaz gülümsemeler bırakır." }
    ],
    questions: [
      { q: "What fruit did the family eat at midday?", options: ["Apples", "Chilled watermelon slices", "Bananas"], answer: 1 },
      { q: "What did the author apply before swimming?", options: ["Sunscreen lotion", "Soap", "Oil"], answer: 0 },
      { q: "What did the author and sister build?", options: ["A boat", "A giant sandcastle", "A wooden house"], answer: 1 }
    ]
  },
  {
    id: 24,
    level: 'A1',
    title: 'Taking the Morning Bus',
    bgImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Every weekday at seven-thirty, I walk to the nearby bus stop.", tr: "Her hafta içi yediyi buçuk geçe yakındaki otobüs durağına yürürüm." },
      { id: 2, eng: "A group of cheerful neighbors and students wait for the line forty.", tr: "Neşeli komşular ve öğrencilerden oluşan bir grup kırk numaralı hattı bekler." },
      { id: 3, eng: "The big yellow city bus arrives right on schedule.", tr: "Büyük sarı belediye otobüsü tam vaktinde gelir." },
      { id: 4, eng: "The pneumatic doors hiss open and passengers step inside.", tr: "Pnömatik kapılar tıslayarak açılır ve yolcular içeri adım atar." },
      { id: 5, eng: "I scan my electronic transport pass against the card reader.", tr: "Elektronik ulaşım kartımı kart okuyucuya taratırım." },
      { id: 6, eng: "A pleasant green light beeps and welcomes me aboard.", tr: "Hoş bir yeşil ışık bip sesi çıkarır ve beni araçta karşılar." },
      { id: 7, eng: "I find an empty seat by the window on the right side.", tr: "Sağ taraftaki pencere kenarında boş bir koltuk bulurum." },
      { id: 8, eng: "I put in my earphones and listen to calm acoustic melodies.", tr: "Kulaklıklarımı takar ve sakin akustik melodiler dinlerim." },
      { id: 9, eng: "Outside, morning shopkeepers unlock their doors and wave.", tr: "Dışarıda sabah dükkan sahipleri kapılarının kilidini açar ve el sallar." },
      { id: 10, eng: "The bus drives through tree-lined avenues and bustling squares.", tr: "Otobüs ağaçlıklı caddelerden ve hareketli meydanlardan geçer." },
      { id: 11, eng: "I press the red stop button when my destination approaches.", tr: "Varış noktam yaklaştığında kırmızı dur butonuna basarım." },
      { id: 12, eng: "Public transportation is efficient, punctual, and safe.", tr: "Toplu taşıma verimli, dakik ve güvenlidir." }
    ],
    questions: [
      { q: "What line number does the bus have?", options: ["Line 12", "Line 40", "Line 100"], answer: 1 },
      { q: "Where does the author find a seat?", options: ["Near the driver", "By the window on the right side", "Standing at the back"], answer: 1 },
      { q: "What does the author do while riding?", options: ["Reads newspaper", "Listens to acoustic melodies", "Sleeps"], answer: 1 }
    ]
  },
  {
    id: 25,
    level: 'A1',
    title: 'Playing Board Games with Friends',
    bgImage: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "On rainy Sunday afternoons, my friends gather at my house.", tr: "Yağmurlu pazar öğleden sonralarında arkadaşlarım benim evimde toplanır." },
      { id: 2, eng: "We clear the large dining table and bring out board games.", tr: "Geniş yemek masasını boşaltır ve kutu oyunlarını çıkarırız." },
      { id: 3, eng: "Our favorite strategy game is about building roads and trading resources.", tr: "En sevdiğimiz strateji oyunu yollar inşa etmek ve kaynak ticareti yapmakla ilgilidir." },
      { id: 4, eng: "Each player chooses a set of colorful wooden tokens.", tr: "Her oyuncu renkli ahşap piyonlardan oluşan bir set seçer." },
      { id: 5, eng: "We roll two white dice to determine who begins the first turn.", tr: "İlk tura kimin başlayacağını belirlemek için iki beyaz zar atarız." },
      { id: 6, eng: "My friend Leo rolls twelve and laughs with excitement.", tr: "Arkadaşım Leo on iki atar ve heyecanla güler." },
      { id: 7, eng: "My mother brings a big bowl of crunchy salted popcorn.", tr: "Annem büyük bir kase çıtır tuzlu patlamış mısır getirir." },
      { id: 8, eng: "We negotiate trades of wood, brick, wheat, and sheep.", tr: "Odun, tuğla, buğday ve koyun takasları için pazarlık yaparız." },
      { id: 9, eng: "No one checks their smartphones while playing together.", tr: "Birlikte oynarken hiç kimse akıllı telefonuna bakmaz." },
      { id: 10, eng: "The game takes nearly two hours of laughter and friendly rivalry.", tr: "Oyun yaklaşık iki saatlik kahkaha ve tatlı bir rekabetle geçer." },
      { id: 11, eng: "Winning is fun, but sharing time with friends is the real reward.", tr: "Kazanmak eğlencelidir ama arkadaşlarla zaman paylaşmak asıl ödüldür." },
      { id: 12, eng: "Board games bring people closer than digital screens.", tr: "Kutu oyunları insanları dijital ekranlardan daha çok yakınlaştırır." }
    ],
    questions: [
      { q: "What snack does the mother bring?", options: ["Chocolate cake", "Salted popcorn", "Pizza"], answer: 1 },
      { q: "How long does the game usually take?", options: ["Twenty minutes", "Nearly two hours", "All night"], answer: 1 },
      { q: "What resources do players trade in the game?", options: ["Wood, brick, wheat, and sheep", "Gold and diamonds", "Cars and planes"], answer: 0 }
    ]
  },
  {
    id: 26,
    level: 'A1',
    title: 'My First English Notebook',
    bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Last month, I bought a hardcover notebook with lined cream pages.", tr: "Geçen ay krem çizgili sayfaları olan sert kapaklı bir defter aldım." },
      { id: 2, eng: "I decided to dedicate it entirely to my English learning journey.", tr: "Onu tamamen İngilizce öğrenme yolculuğuma adamaya karar verdim." },
      { id: 3, eng: "On the front cover, I wrote my name with gold ink.", tr: "Ön kapağa altın mürekkeple adımı yazdım." },
      { id: 4, eng: "Every morning, I write down five new vocabulary words.", tr: "Her sabah beş yeni kelime yazarım." },
      { id: 5, eng: "Next to each word, I write its Turkish meaning and part of speech.", tr: "Her kelimenin yanına Türkçe anlamını ve kelime türünü yazarım." },
      { id: 6, eng: "I also compose an original example sentence for each word.", tr: "Ayrıca her kelime için özgün bir örnek cümle kurarım." },
      { id: 7, eng: "I use green highlighter for verbs and blue for nouns.", tr: "Fiiller için yeşil, isimler için mavi fosforlu kalem kullanırım." },
      { id: 8, eng: "Reviewing my notebook before sleeping reinforces my memory.", tr: "Uyumadan önce defterimi gözden geçirmek hafızamı pekiştirir." },
      { id: 9, eng: "After thirty days, I have mastered one hundred and fifty words.", tr: "Otuz günün ardından yüz elli kelimede ustalaştım." },
      { id: 10, eng: "Writing by hand helps my brain remember spelling much better.", tr: "Elle yazmak beynimin yazılışı çok daha iyi hatırlamasına yardımcı olur." },
      { id: 11, eng: "Learning a language requires small, consistent daily steps.", tr: "Bir dil öğrenmek küçük ve tutarlı günlük adımlar gerektirir." },
      { id: 12, eng: "My English notebook is my most valuable study companion.", tr: "İngilizce defterim benim en değerli çalışma arkadaşımdır." }
    ],
    questions: [
      { q: "How many new words does the author write daily?", options: ["One", "Five", "Twenty"], answer: 1 },
      { q: "What color highlighter is used for verbs?", options: ["Red", "Green", "Yellow"], answer: 1 },
      { q: "How many words did the author master in thirty days?", options: ["Fifty", "One hundred and fifty", "Three hundred"], answer: 1 }
    ]
  },
  {
    id: 27,
    level: 'A1',
    title: "Saturday Morning at the Farmer's Market",
    bgImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Every Saturday morning, our town hosts a lively open-air market.", tr: "Her cumartesi sabahı kasabamız canlı bir açık hava pazarına ev sahipliği yapar." },
      { id: 2, eng: "Farmers from surrounding villages bring fresh organic harvests.", tr: "Çevre köylerden çiftçiler taze organik hasatlarını getirirler." },
      { id: 3, eng: "Wooden stalls display pyramids of red tomatoes and purple eggplants.", tr: "Ahşap tezgahlar kırmızı domates ve mor patlıcan piramitlerini sergiler." },
      { id: 4, eng: "The air smells of fresh parsley, mint, and ripe peaches.", tr: "Hava taze maydanoz, nane ve olgun şeftali kokar." },
      { id: 5, eng: "Friendly vendors shout cheerful greetings and offer fruit samples.", tr: "Dost canlısı satıcılar neşeli selamlar haykırır ve meyve numuneleri sunar." },
      { id: 6, eng: "I taste a slice of sweet cantaloupe melon from a kind farmer.", tr: "Kibar bir çiftçiden tatlı bir kavun diliminin tadına bakarım." },
      { id: 7, eng: "My mother chooses crisp cucumbers, green olives, and goat cheese.", tr: "Annem çıtır salatalıklar, yeşil zeytinler ve keçi peyniri seçer." },
      { id: 8, eng: "We carry our own canvas tote bags to reduce plastic waste.", tr: "Plastik atıkları azaltmak için kendi bez çantalarımızı taşırız." },
      { id: 9, eng: "Shopping at the local market directly supports working families.", tr: "Yerel pazardan alışveriş yapmak çalışan aileleri doğrudan destekler." },
      { id: 10, eng: "The vegetables taste ten times fresher than ordinary supermarket goods.", tr: "Sebzelerin tadı sıradan süpermarket ürünlerinden on kat daha tazedir." },
      { id: 11, eng: "We walk home with heavy bags and big smiles on our faces.", tr: "Ağır çantalar ve yüzümüzde kocaman gülümsemelerle eve yürürüz." },
      { id: 12, eng: "The weekly market is the vibrant heartbeat of our community.", tr: "Haftalık pazar topluluğumuzun canlı kalp atışıdır." }
    ],
    questions: [
      { q: "On what day does the market take place?", options: ["Saturday morning", "Monday evening", "Sunday afternoon"], answer: 0 },
      { q: "What does the author taste from a farmer?", options: ["An apple", "A slice of sweet cantaloupe melon", "Cheese"], answer: 1 },
      { q: "Why do they carry canvas tote bags?", options: ["To look rich", "To reduce plastic waste", "Because it is required"], answer: 1 }
    ]
  },
  {
    id: 28,
    level: 'A1',
    title: 'Feeding Swans at the Lake',
    bgImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "There is a tranquil blue lake situated ten minutes from my house.", tr: "Evimden on dakika uzaklıkta sakin mavi bir göl yer alıyor." },
      { id: 2, eng: "Weeping willow trees bend gracefully over the quiet shoreline.", tr: "Salkımsöğüt ağaçları sessiz kıyı şeridinin üzerine zarifçe eğilir." },
      { id: 3, eng: "A pair of graceful white swans glide silently across the mirror surface.", tr: "Bir çift zarif beyaz kuğu ayna yüzeyinde sessizce süzülür." },
      { id: 4, eng: "I bring a paper bag filled with cracked corn and grain.", tr: "İçinde kırık mısır ve tahıl olan kağıt bir torba getiririm." },
      { id: 5, eng: "Park signs kindly explain that bread harms wild birds' digestion.", tr: "Park tabelaları ekmeğin yabani kuşların sindirimine zarar verdiğini nazikçe açıklar." },
      { id: 6, eng: "I sit quietly on a large grey boulder near the water's edge.", tr: "Suyun kenarındaki büyük gri bir kayanın üzerine sessizce otururum." },
      { id: 7, eng: "The elegant swans swim closer without any fear or hesitation.", tr: "Zarif kuğular hiçbir korku ya da tereddüt olmadan daha yakına yüzerler." },
      { id: 8, eng: "I scatter a handful of grain across the shallow ripples.", tr: "Sığ dalgacıkların üzerine bir avuç tahıl saçarım." },
      { id: 9, eng: "They dip their long curved necks gracefully to eat the seeds.", tr: "Tohumları yemek için uzun kavisli boyunlarını zarifçe daldırırlar." },
      { id: 10, eng: "Gentle ripples spread outwards in perfect concentric circles.", tr: "Hafif dalgacıklar mükemmel eşmerkezli halkalar halinde dışarı doğru yayılır." },
      { id: 11, eng: "Watching wild creatures in peace calms all modern worries.", tr: "Vahşi canlıları huzur içinde izlemek tüm modern endişeleri yatıştırır." },
      { id: 12, eng: "Nature offers the purest therapy right at our doorstep.", tr: "Doğa tam kapımızın önünde en saf terapiyi sunar." }
    ],
    questions: [
      { q: "What does the author feed the swans?", options: ["Bread", "Cracked corn and grain", "Candy"], answer: 1 },
      { q: "Why shouldn't people feed bread to wild birds?", options: ["Bread is expensive", "It harms their digestion", "Birds dislike bread"], answer: 1 },
      { q: "What trees grow along the lake shore?", options: ["Pine trees", "Weeping willow trees", "Palm trees"], answer: 1 }
    ]
  },
  {
    id: 29,
    level: 'A1',
    title: 'A Peaceful Sunday Afternoon',
    bgImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Sunday is the day of rest, quiet reflection, and restoration.", tr: "Pazar günü dinlenme, sessiz tefekkür ve yenilenme günüdür." },
      { id: 2, eng: "After a light lunch, the whole house settles into silence.", tr: "Hafif bir öğle yemeğinin ardından bütün ev sessizliğe bürünür." },
      { id: 3, eng: "I curl up on the armchair with a warm plaid blanket.", tr: "Sıcak ekose bir battaniyeyle koltuğa kıvrılırım." },
      { id: 4, eng: "A cup of chamomile tea steams gently on the wooden side table.", tr: "Ahşap yan sehpanın üzerinde bir fincan papatya çayı hafifçe tüter." },
      { id: 5, eng: "Soft piano music plays in the background at a very low volume.", tr: "Arka planda çok kısık bir sesle yumuşak piyano müziği çalar." },
      { id: 6, eng: "I open my illustrated novel and read three absorbing chapters.", tr: "Resimli romanımı açar ve üç sürükleyici bölüm okurum." },
      { id: 7, eng: "Sunbeams slant across the wooden floor as afternoon advances.", tr: "Öğleden sonra ilerledikçe güneş ışınları ahşap zemine eğik vurur." },
      { id: 8, eng: "My cat stretches lazily and curls beside my legs.", tr: "Kedim tembelce gerinir ve bacaklarımın yanına kıvrılır." },
      { id: 9, eng: "There are no urgent deadlines, alarms, or buzzing notifications.", tr: "Acil teslim tarihleri, alarmlar veya vızıldayan bildirimler yoktur." },
      { id: 10, eng: "I close my eyes for a twenty-minute revitalizing nap.", tr: "Yirmi dakikalık canlandırıcı bir şekerleme için gözlerimi kapatırım." },
      { id: 11, eng: "Resting deeply is essential for mental clarity and health.", tr: "Derinlemesine dinlenmek zihinsel berraklık ve sağlık için şarttır." },
      { id: 12, eng: "I wake up feeling thoroughly restored for the new week.", tr: "Yeni hafta için tamamen yenilenmiş hissederek uyanırım." }
    ],
    questions: [
      { q: "What kind of tea is steaming on the table?", options: ["Black tea", "Chamomile tea", "Green tea"], answer: 1 },
      { q: "What music plays in the background?", options: ["Rock music", "Soft piano music", "Jazz"], answer: 1 },
      { q: "How long is the author's revitalizing nap?", options: ["Ten minutes", "Twenty minutes", "Two hours"], answer: 1 }
    ]
  },
  {
    id: 30,
    level: 'A1',
    title: 'Baking Chocolate Chip Cookies',
    bgImage: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',
    sentences: [
      { id: 1, eng: "Baking warm cookies on a chilly evening is pure delight.", tr: "Serin bir akşamda sıcak kurabiye pişirmek saf bir zevktir." },
      { id: 2, eng: "I preheat our oven to one hundred and eighty degrees.", tr: "Fırınımızı yüz seksen dereceye önceden ısıtırım." },
      { id: 3, eng: "In a mixing bowl, I cream soft butter with brown sugar.", tr: "Bir karıştırma kabında yumuşak tereyağını esmer şekerle krema haline getiririm." },
      { id: 4, eng: "I crack one farm-fresh egg and stir in vanilla extract.", tr: "Çiftlikten bir taze yumurta kırar ve vanilya özütü eklerim." },
      { id: 5, eng: "I sift white flour, baking soda, and a pinch of salt.", tr: "Beyaz un, kabartma tozu ve bir tutam tuzu elerim." },
      { id: 6, eng: "I fold in a generous cup of dark chocolate chips.", tr: "Cömert bir fincan bitter çikolata parçasını hamura katarım." },
      { id: 7, eng: "The sweet dough comes together into a rich, fragrant mixture.", tr: "Tatlı hamur zengin, mis kokulu bir karışım halinde birleşir." },
      { id: 8, eng: "I scoop rounded spoonfuls onto a lined baking tray.", tr: "Yağlı kağıt serilmiş fırın tepsisine yuvarlak kaşık doluları koyarım." },
      { id: 9, eng: "They bake inside the oven for exactly twelve golden minutes.", tr: "Tam on iki altın dakika boyunca fırının içinde pişerler." },
      { id: 10, eng: "The heavenly aroma of melted chocolate fills the entire house.", tr: "Erimiş çikolatanın cennet gibi aroması bütün evi doldurur." },
      { id: 11, eng: "I let them cool slightly on a metal wire rack.", tr: "Metal bir tel ızgara üzerinde biraz soğumalarına izin veririm." },
      { id: 12, eng: "We enjoy them warm with cold glasses of fresh milk.", tr: "Onları soğuk bardak taze süt eşliğinde sıcacık yeriz." }
    ],
    questions: [
      { q: "What temperature is the oven preheated to?", options: ["150 degrees", "180 degrees", "220 degrees"], answer: 1 },
      { q: "How long do the cookies bake in the oven?", options: ["Five minutes", "Twelve minutes", "Thirty minutes"], answer: 1 },
      { q: "What drink is enjoyed with the warm cookies?", options: ["Cold milk", "Hot coffee", "Orange juice"], answer: 0 }
    ]
  }
];

console.log("30 A1 texts prepared.");
