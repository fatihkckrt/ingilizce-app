// src/defaultTextsData.ts
// Comprehensive Reading Texts Database: 33 A1, 34 A2, 9 B1, 9 B2 (85 total)

export interface SentenceItem {
  id: number;
  eng: string;
  tr: string;
}

export interface QuestionItem {
  q: string;
  options: string[];
  answer: number;
}

export interface ReadingText {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  title: string;
  bgImage: string;
  sentences: SentenceItem[];
  questions: QuestionItem[];
}

export const defaultTexts: ReadingText[] = [
  {
    "id": 1,
    "level": "A1",
    "title": "A Day on the Farm",
    "bgImage": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "My grandfather has a small farm outside the city.",
        "tr": "Büyükbabamın şehir dışında küçük bir çiftliği var."
      },
      {
        "id": 2,
        "eng": "I visit the farm every summer holiday.",
        "tr": "Her yaz tatilinde çiftliği ziyaret ederim."
      },
      {
        "id": 3,
        "eng": "We wake up early in the morning.",
        "tr": "Sabahları erken uyanırız."
      },
      {
        "id": 4,
        "eng": "The air is very fresh and clean.",
        "tr": "Hava çok taze ve temizdir."
      },
      {
        "id": 5,
        "eng": "First, we feed the hungry chickens.",
        "tr": "İlk önce aç tavukları besleriz."
      },
      {
        "id": 6,
        "eng": "The chickens give us fresh eggs every day.",
        "tr": "Tavuklar bize her gün taze yumurta verir."
      },
      {
        "id": 7,
        "eng": "I collect the eggs in a wooden basket.",
        "tr": "Yumurtaları ahşap bir sepette toplarım."
      },
      {
        "id": 8,
        "eng": "Next, we visit the cows in the green field.",
        "tr": "Sonra yeşil tarladaki inekleri ziyaret ederiz."
      },
      {
        "id": 9,
        "eng": "The cows eat grass and make white milk.",
        "tr": "İnekler çimen yer ve beyaz süt yapar."
      },
      {
        "id": 10,
        "eng": "My grandfather milks the cows before breakfast.",
        "tr": "Büyükbabam kahvaltıdan önce inekleri sağar."
      },
      {
        "id": 11,
        "eng": "There is also a friendly brown dog named Max.",
        "tr": "Max adında arkadaş canlısı kahverengi bir köpek de var."
      },
      {
        "id": 12,
        "eng": "Max loves running with me in the garden.",
        "tr": "Max bahçede benimle koşmayı çok sever."
      },
      {
        "id": 13,
        "eng": "At noon, we eat lunch under a large oak tree.",
        "tr": "Öğlen büyük bir meşe ağacının altında öğle yemeği yeriz."
      },
      {
        "id": 14,
        "eng": "We eat bread, goat cheese, and red tomatoes.",
        "tr": "Ekmek, keçi peyniri ve kırmızı domates yeriz."
      },
      {
        "id": 15,
        "eng": "In the afternoon, we water the young vegetables.",
        "tr": "Öğleden sonra genç sebzeleri sularız."
      },
      {
        "id": 16,
        "eng": "Farm life is hard, but it is very peaceful.",
        "tr": "Çiftlik hayatı zordur ama çok huzurludur."
      },
      {
        "id": 17,
        "eng": "The birds sing sweet songs until sunset.",
        "tr": "Kuşlar gün batımına kadar tatlı şarkılar söyler."
      },
      {
        "id": 18,
        "eng": "At night, we sit near the small wooden house.",
        "tr": "Geceleri küçük ahşap evin yanında otururuz."
      },
      {
        "id": 19,
        "eng": "We drink warm tea and watch the clear sky.",
        "tr": "Sıcak çay içer ve berrak gökyüzünü izleriz."
      },
      {
        "id": 20,
        "eng": "I love spending my time on this beautiful farm.",
        "tr": "Zamanımı bu güzel çiftlikte geçirmeyi çok seviyorum."
      }
    ],
    "questions": [
      {
        "q": "What does the author collect in a basket?",
        "options": [
          "Apples",
          "Fresh eggs",
          "Flowers"
        ],
        "answer": 1
      },
      {
        "q": "What is the dog's name?",
        "options": [
          "Max",
          "Tom",
          "Leo"
        ],
        "answer": 0
      },
      {
        "q": "Where do they eat lunch?",
        "options": [
          "In the kitchen",
          "Under an oak tree",
          "In the barn"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 2,
    "level": "A1",
    "title": "My School Day",
    "bgImage": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "I am a student at a primary school.",
        "tr": "Ben bir ilkokulda öğrenciyim."
      },
      {
        "id": 2,
        "eng": "My school is close to my home.",
        "tr": "Okulum evime yakındır."
      },
      {
        "id": 3,
        "eng": "I walk to school every morning with my friends.",
        "tr": "Her sabah arkadaşlarımla okula yürürüm."
      },
      {
        "id": 4,
        "eng": "Lessons start at eight o'clock sharp.",
        "tr": "Dersler tam saat sekizde başlar."
      },
      {
        "id": 5,
        "eng": "Our classroom is large and full of light.",
        "tr": "Sınıfımız geniş ve ışık doludur."
      },
      {
        "id": 6,
        "eng": "There are twenty students in my class.",
        "tr": "Sınıfımda yirmi öğrenci var."
      },
      {
        "id": 7,
        "eng": "We have blue desks and comfortable chairs.",
        "tr": "Mavi sıralarımız ve rahat sandalyelerimiz var."
      },
      {
        "id": 8,
        "eng": "The teacher writes English words on the board.",
        "tr": "Öğretmen tahtaya İngilizce kelimeler yazar."
      },
      {
        "id": 9,
        "eng": "English is my favorite subject this term.",
        "tr": "İngilizce bu dönem en sevdiğim derstir."
      },
      {
        "id": 10,
        "eng": "I like learning new vocabulary and reading short stories.",
        "tr": "Yeni kelimeler öğrenmeyi ve kısa hikayeler okumayı severim."
      },
      {
        "id": 11,
        "eng": "Before noon, we have a forty-minute math class.",
        "tr": "Öğleden önce kırk dakikalık bir matematik dersimiz var."
      },
      {
        "id": 12,
        "eng": "Math is difficult, but our teacher is very patient.",
        "tr": "Matematik zordur ama öğretmenimiz çok sabırlıdır."
      },
      {
        "id": 13,
        "eng": "At twelve o'clock, the lunch bell rings loudly.",
        "tr": "Saat on ikide öğle yemeği zili yüksek sesle çalar."
      },
      {
        "id": 14,
        "eng": "I eat an apple and a cheese sandwich.",
        "tr": "Bir elma ve peynirli bir sandviç yerim."
      },
      {
        "id": 15,
        "eng": "After lunch, we play football in the garden.",
        "tr": "Öğle yemeğinden sonra bahçede futbol oynarız."
      },
      {
        "id": 16,
        "eng": "We laugh and run together until the bell rings.",
        "tr": "Zil çalana kadar birlikte güler ve koşarız."
      },
      {
        "id": 17,
        "eng": "In the afternoon, we draw pictures in art class.",
        "tr": "Öğleden sonra resim dersinde resimler çizeriz."
      },
      {
        "id": 18,
        "eng": "School finishes at three o'clock in the afternoon.",
        "tr": "Okul öğleden sonra saat üçte biter."
      },
      {
        "id": 19,
        "eng": "I say goodbye to my teacher and classmates.",
        "tr": "Öğretmenime ve sınıf arkadaşlarıma veda ederim."
      },
      {
        "id": 20,
        "eng": "Then I walk back home happily.",
        "tr": "Sonra mutlu bir şekilde eve geri yürürüm."
      }
    ],
    "questions": [
      {
        "q": "What time do lessons start?",
        "options": [
          "At seven",
          "At eight",
          "At nine"
        ],
        "answer": 1
      },
      {
        "q": "What is the author's favorite subject?",
        "options": [
          "English",
          "Math",
          "History"
        ],
        "answer": 0
      },
      {
        "q": "What do they play after lunch?",
        "options": [
          "Tennis",
          "Football",
          "Basketball"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 3,
    "level": "A1",
    "title": "Shopping at the Supermarket",
    "bgImage": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Every Sunday morning, my mother and I go shopping.",
        "tr": "Her pazar sabahı annem ve ben alışverişe gideriz."
      },
      {
        "id": 2,
        "eng": "We visit a large supermarket in our town.",
        "tr": "Kasabamızdaki büyük bir süpermarketi ziyaret ederiz."
      },
      {
        "id": 3,
        "eng": "First, my mother writes a clear shopping list.",
        "tr": "İlk önce annem net bir alışveriş listesi yazar."
      },
      {
        "id": 4,
        "eng": "The list helps us buy only necessary food.",
        "tr": "Liste sadece gerekli yiyecekleri almamıza yardımcı olur."
      },
      {
        "id": 5,
        "eng": "I take a metal shopping cart at the entrance.",
        "tr": "Girişte metal bir alışveriş arabası alırım."
      },
      {
        "id": 6,
        "eng": "We walk to the fruit and vegetable section first.",
        "tr": "İlk olarak meyve ve sebze reyonuna yürürüz."
      },
      {
        "id": 7,
        "eng": "We choose yellow bananas, fresh oranges, and red apples.",
        "tr": "Sarı muzlar, taze portakallar ve kırmızı elmalar seçeriz."
      },
      {
        "id": 8,
        "eng": "The vegetables look very fresh today.",
        "tr": "Sebzeler bugün çok taze görünüyor."
      },
      {
        "id": 9,
        "eng": "We put green cucumbers and big tomatoes into the cart.",
        "tr": "Arabaya yeşil salatalıklar ve büyük domatesler koyarız."
      },
      {
        "id": 10,
        "eng": "Next, we visit the bakery section near the corner.",
        "tr": "Sırada köşeye yakın fırın reyonunu ziyaret ederiz."
      },
      {
        "id": 11,
        "eng": "The smell of warm bread is wonderful.",
        "tr": "Sıcak ekmeğin kokusu harikadır."
      },
      {
        "id": 12,
        "eng": "We take two loaves of bread and some cookies.",
        "tr": "İki somun ekmek ve biraz kurabiye alırız."
      },
      {
        "id": 13,
        "eng": "Then we find milk, butter, and cheese in the dairy aisle.",
        "tr": "Sonra süt ürünleri reyonunda süt, tereyağı ve peynir buluruz."
      },
      {
        "id": 14,
        "eng": "I check the dates on the milk bottles carefully.",
        "tr": "Süt şişelerinin üzerindeki tarihleri dikkatlice kontrol ederim."
      },
      {
        "id": 15,
        "eng": "My mother allows me to choose one dark chocolate.",
        "tr": "Annem bir adet bitter çikolata seçmeme izin verir."
      },
      {
        "id": 16,
        "eng": "We finally walk towards the cash register.",
        "tr": "Sonunda kasaya doğru yürürüz."
      },
      {
        "id": 17,
        "eng": "The cashier scans our items with a smile.",
        "tr": "Kasiyer ürünlerimizi bir gülümsemeyle tarar."
      },
      {
        "id": 18,
        "eng": "My mother pays with her credit card.",
        "tr": "Annem kredi kartıyla öder."
      },
      {
        "id": 19,
        "eng": "We pack our groceries into reusable cloth bags.",
        "tr": "Yiyeceklerimizi yeniden kullanılabilir bez çantalara koyarız."
      },
      {
        "id": 20,
        "eng": "Then we carry the heavy bags home together.",
        "tr": "Sonra ağır çantaları eve birlikte taşırız."
      }
    ],
    "questions": [
      {
        "q": "What day do they go shopping?",
        "options": [
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "answer": 2
      },
      {
        "q": "What sweet treat does the author choose?",
        "options": [
          "Ice cream",
          "Dark chocolate",
          "Cake"
        ],
        "answer": 1
      },
      {
        "q": "How does the mother pay?",
        "options": [
          "With cash",
          "With credit card",
          "With coins"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 4,
    "level": "A1",
    "title": "A Visit to the Zoo",
    "bgImage": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Last Saturday, my family went to the city zoo.",
        "tr": "Geçen cumartesi ailem şehir hayvanat bahçesine gitti."
      },
      {
        "id": 2,
        "eng": "The weather was warm, dry, and sunny.",
        "tr": "Hava ılık, kuru ve güneşliydi."
      },
      {
        "id": 3,
        "eng": "We arrived at the zoo gates at ten o'clock.",
        "tr": "Hayvanat bahçesi kapısına saat onda vardık."
      },
      {
        "id": 4,
        "eng": "My father bought tickets for all of us.",
        "tr": "Babam hepimiz için bilet aldı."
      },
      {
        "id": 5,
        "eng": "First, we walked to see the colorful birds.",
        "tr": "İlk önce renkli kuşları görmeye yürüdük."
      },
      {
        "id": 6,
        "eng": "The parrots had green, red, and blue feathers.",
        "tr": "Papağanların yeşil, kırmızı ve mavi tüyleri vardı."
      },
      {
        "id": 7,
        "eng": "One clever parrot repeated simple words.",
        "tr": "Akıllı bir papağan basit kelimeleri tekrarladı."
      },
      {
        "id": 8,
        "eng": "Next, we watched the tall giraffes eating green leaves.",
        "tr": "Sonra yeşil yaprakları yiyen uzun boylu zürafaları izledik."
      },
      {
        "id": 9,
        "eng": "Their necks were extremely long and graceful.",
        "tr": "Boyunları son derece uzun ve zarifti."
      },
      {
        "id": 10,
        "eng": "Then we walked to the monkey area.",
        "tr": "Sonra maymun alanına yürüdük."
      },
      {
        "id": 11,
        "eng": "The little monkeys jumped between high ropes.",
        "tr": "Küçük maymunlar yüksek ipler arasında zıpladı."
      },
      {
        "id": 12,
        "eng": "They were very funny and energetic.",
        "tr": "Çok komik ve enerjiktiler."
      },
      {
        "id": 13,
        "eng": "After that, we visited the two African elephants.",
        "tr": "Ondan sonra iki Afrika filini ziyaret ettik."
      },
      {
        "id": 14,
        "eng": "A huge elephant drank water with its long trunk.",
        "tr": "Devasa bir fil uzun hortumuyla su içti."
      },
      {
        "id": 15,
        "eng": "We sat on a wooden bench and rested.",
        "tr": "Ahşap bir bankta oturduk ve dinlendik."
      },
      {
        "id": 16,
        "eng": "I drank cold lemonade and ate chocolate ice cream.",
        "tr": "Soğuk limonata içtim ve çikolatalı dondurma yedim."
      },
      {
        "id": 17,
        "eng": "In the afternoon, we saw the sleeping lions.",
        "tr": "Öğleden sonra uyuyan aslanları gördük."
      },
      {
        "id": 18,
        "eng": "A big lion slept quietly under a shady tree.",
        "tr": "Büyük bir aslan gölgeli bir ağacın altında sessizce uyudu."
      },
      {
        "id": 19,
        "eng": "We took wonderful family photos before leaving.",
        "tr": "Ayrılmadan önce harika aile fotoğrafları çektik."
      },
      {
        "id": 20,
        "eng": "We returned home tired but very happy.",
        "tr": "Eve yorgun ama çok mutlu döndük."
      }
    ],
    "questions": [
      {
        "q": "What time did they arrive at the zoo?",
        "options": [
          "At eight",
          "At ten",
          "At noon"
        ],
        "answer": 1
      },
      {
        "q": "What did the elephant drink water with?",
        "options": [
          "Its long trunk",
          "A bucket",
          "A bottle"
        ],
        "answer": 0
      },
      {
        "q": "What was the big lion doing?",
        "options": [
          "Roaring",
          "Sleeping under a tree",
          "Eating"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 5,
    "level": "A1",
    "title": "My Small Hometown",
    "bgImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "I live in a peaceful town near high mountains.",
        "tr": "Yüksek dağların yakınında huzurlu bir kasabada yaşıyorum."
      },
      {
        "id": 2,
        "eng": "My hometown is quiet, clean, and green.",
        "tr": "Memleketim sessiz, temiz ve yeşildir."
      },
      {
        "id": 3,
        "eng": "Only four thousand people live here.",
        "tr": "Burada sadece dört bin insan yaşar."
      },
      {
        "id": 4,
        "eng": "Most neighbors know each other well.",
        "tr": "Komşuların çoğu birbirini iyi tanır."
      },
      {
        "id": 5,
        "eng": "The narrow streets have old stone houses.",
        "tr": "Dar sokaklarda eski taş evler vardır."
      },
      {
        "id": 6,
        "eng": "There is a traditional bakery in the main square.",
        "tr": "Ana meydanda geleneksel bir fırın var."
      },
      {
        "id": 7,
        "eng": "The friendly baker bakes fresh bread every morning.",
        "tr": "Dost canlısı fırıncı her sabah taze ekmek pişirir."
      },
      {
        "id": 8,
        "eng": "People say good morning with warm smiles.",
        "tr": "İnsanlar sıcak gülümsemelerle günaydın derler."
      },
      {
        "id": 9,
        "eng": "Children ride bicycles safely around the park.",
        "tr": "Çocuklar parkın etrafında güvenle bisiklet sürerler."
      },
      {
        "id": 10,
        "eng": "There is no heavy traffic or loud city noise.",
        "tr": "Yoğun trafik veya yüksek şehir gürültüsü yoktur."
      },
      {
        "id": 11,
        "eng": "A clean river flows right behind our garden.",
        "tr": "Bahçemizin hemen arkasından temiz bir nehir akar."
      },
      {
        "id": 12,
        "eng": "My brother and I catch small fish on Saturdays.",
        "tr": "Erkek kardeşim ve ben cumartesi günleri küçük balıklar tutarız."
      },
      {
        "id": 13,
        "eng": "The river water is cold and very clear.",
        "tr": "Nehir suyu soğuk ve çok berraktır."
      },
      {
        "id": 14,
        "eng": "At night, thousands of bright stars shine above us.",
        "tr": "Geceleri üzerimizde binlerce parlak yıldız parlar."
      },
      {
        "id": 15,
        "eng": "The evening air smells like pine and wood smoke.",
        "tr": "Akşam havası çam ve odun dumanı gibi kokar."
      },
      {
        "id": 16,
        "eng": "Life moves slowly and peacefully in this place.",
        "tr": "Bu yerde hayat yavaş ve huzurlu akar."
      },
      {
        "id": 17,
        "eng": "Sometimes I travel to big cities for shopping.",
        "tr": "Bazen alışveriş için büyük şehirlere seyahat ederim."
      },
      {
        "id": 18,
        "eng": "However, I always miss my quiet town.",
        "tr": "Ancak her zaman sessiz kasabamı özlerim."
      },
      {
        "id": 19,
        "eng": "It is the best place to relax and feel safe.",
        "tr": "Dinlenmek ve güvende hissetmek için en iyi yerdir."
      },
      {
        "id": 20,
        "eng": "I am very proud of my little hometown.",
        "tr": "Küçük memleketimle çok gurur duyuyorum."
      }
    ],
    "questions": [
      {
        "q": "Where is the peaceful town located?",
        "options": [
          "Near high mountains",
          "In the desert",
          "By the ocean"
        ],
        "answer": 0
      },
      {
        "q": "What flows behind the author's garden?",
        "options": [
          "A highway",
          "A clean river",
          "A railway"
        ],
        "answer": 1
      },
      {
        "q": "What shines in the sky at night?",
        "options": [
          "Thousands of bright stars",
          "Towers",
          "Dark clouds"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 6,
    "level": "A1",
    "title": "Morning Coffee and Breakfast",
    "bgImage": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Every morning, I wake up at seven o'clock.",
        "tr": "Her sabah saat yedide uyanırım."
      },
      {
        "id": 2,
        "eng": "The kitchen is quiet and full of warm sunlight.",
        "tr": "Mutfak sessiz ve ılık güneş ışığıyla doludur."
      },
      {
        "id": 3,
        "eng": "I boil fresh water in a small electric kettle.",
        "tr": "Küçük bir elektrikli su ısıtıcısında taze su kaynatırım."
      },
      {
        "id": 4,
        "eng": "I make a cup of black coffee with two spoons of sugar.",
        "tr": "İki kaşık şekerli bir fincan sade kahve yaparım."
      },
      {
        "id": 5,
        "eng": "Then I slice two pieces of whole wheat bread.",
        "tr": "Sonra iki dilim tam buğday ekmeği keserim."
      },
      {
        "id": 6,
        "eng": "I put butter and sweet strawberry jam on the bread.",
        "tr": "Ekmeğin üzerine tereyağı ve tatlı çilek reçeli sürerim."
      },
      {
        "id": 7,
        "eng": "My white cat Oliver sits near my feet.",
        "tr": "Beyaz kedim Oliver ayaklarımın yanına oturur."
      },
      {
        "id": 8,
        "eng": "He waits for a little bowl of fresh warm milk.",
        "tr": "Küçük bir kase taze ılık süt bekler."
      },
      {
        "id": 9,
        "eng": "I listen to the morning news on the radio.",
        "tr": "Radyodan sabah haberlerini dinlerim."
      },
      {
        "id": 10,
        "eng": "Breakfast is the most relaxing time of my day.",
        "tr": "Kahvaltı günümün en rahatlatıcı zamanıdır."
      },
      {
        "id": 11,
        "eng": "After eating, I wash my plate and cup carefully.",
        "tr": "Yedikten sonra tabağımı ve fincanımı dikkatlice yıkarım."
      },
      {
        "id": 12,
        "eng": "Then I am ready to start a productive day.",
        "tr": "Sonra verimli bir güne başlamaya hazırım."
      }
    ],
    "questions": [
      {
        "q": "What time does the author wake up?",
        "options": [
          "At six",
          "At seven",
          "At eight"
        ],
        "answer": 1
      },
      {
        "q": "What does the author put on the bread?",
        "options": [
          "Butter and jam",
          "Cheese and tomato",
          "Peanut butter"
        ],
        "answer": 0
      },
      {
        "q": "What is the cat's name?",
        "options": [
          "Leo",
          "Oliver",
          "Max"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 7,
    "level": "A1",
    "title": "My Favorite Hobby: Painting",
    "bgImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Painting pictures is my favorite weekend hobby.",
        "tr": "Resim yapmak benim en sevdiğim hafta sonu hobimdir."
      },
      {
        "id": 2,
        "eng": "I have a wooden box with many colorful acrylic paints.",
        "tr": "İçinde çok sayıda renkli akrilik boya olan ahşap bir kutum var."
      },
      {
        "id": 3,
        "eng": "Blue, yellow, red, and green are my favorite colors.",
        "tr": "Mavi, sarı, kırmızı ve yeşil en sevdiğim renklerdir."
      },
      {
        "id": 4,
        "eng": "I set up my easel near the large living room window.",
        "tr": "Şövalemi geniş oturma odası penceresinin yanına kurarım."
      },
      {
        "id": 5,
        "eng": "Natural daylight helps me see true shades.",
        "tr": "Doğal gün ışığı gerçek tonları görmeme yardımcı olur."
      },
      {
        "id": 6,
        "eng": "Today, I am painting green mountains and a blue river.",
        "tr": "Bugün yeşil dağlar ve mavi bir nehir çiziyorum."
      },
      {
        "id": 7,
        "eng": "I use a thin brush for small details like trees.",
        "tr": "Ağaçlar gibi küçük detaylar için ince bir fırça kullanırım."
      },
      {
        "id": 8,
        "eng": "Mixing colors on the palette is very fun.",
        "tr": "Palet üzerinde renkleri karıştırmak çok eğlencelidir."
      },
      {
        "id": 9,
        "eng": "When I paint, all my daily stress disappears.",
        "tr": "Resim yaptığımda tüm günlük stresim yok olur."
      },
      {
        "id": 10,
        "eng": "My mother hangs my finished paintings on the hallway wall.",
        "tr": "Annem bitmiş tablolarımı koridor duvarına asar."
      },
      {
        "id": 11,
        "eng": "My friends always compliment my colorful artwork.",
        "tr": "Arkadaşlarım her zaman renkli sanat eserlerimi över."
      },
      {
        "id": 12,
        "eng": "Art brings immense joy and peace to my heart.",
        "tr": "Sanat kalbime muazzam bir neşe ve huzur getirir."
      }
    ],
    "questions": [
      {
        "q": "What is the author's favorite hobby?",
        "options": [
          "Reading",
          "Painting",
          "Singing"
        ],
        "answer": 1
      },
      {
        "q": "What is the author painting today?",
        "options": [
          "Animals",
          "Mountains and a river",
          "A city street"
        ],
        "answer": 1
      },
      {
        "q": "Where does the mother hang the paintings?",
        "options": [
          "In the bedroom",
          "On the hallway wall",
          "In the kitchen"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 8,
    "level": "A1",
    "title": "A Rainy Day at Home",
    "bgImage": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Dark grey clouds covered the sky this morning.",
        "tr": "Bu sabah koyu gri bulutlar gökyüzünü kapladı."
      },
      {
        "id": 2,
        "eng": "Heavy raindrops started falling on the glass windows.",
        "tr": "Ağır yağmur damlaları cam pencerelere düşmeye başladı."
      },
      {
        "id": 3,
        "eng": "The cold wind blew yellow leaves across the street.",
        "tr": "Soğuk rüzgar sokak boyunca sarı yaprakları savurdu."
      },
      {
        "id": 4,
        "eng": "I stayed inside our warm living room.",
        "tr": "Sıcak oturma odamızın içinde kaldım."
      },
      {
        "id": 5,
        "eng": "I wore thick wool socks and a soft grey sweater.",
        "tr": "Kalın yün çoraplar ve yumuşak gri bir kazak giydim."
      },
      {
        "id": 6,
        "eng": "My grandmother made hot mint tea with honey.",
        "tr": "Büyükannem ballı sıcak nane çayı yaptı."
      },
      {
        "id": 7,
        "eng": "The sweet aroma of mint filled the whole house.",
        "tr": "Nanenin tatlı aroması bütün evi doldurdu."
      },
      {
        "id": 8,
        "eng": "I sat on the sofa and opened an interesting storybook.",
        "tr": "Kanepeye oturdum ve ilginç bir hikaye kitabı açtım."
      },
      {
        "id": 9,
        "eng": "Listening to the sound of rain makes me feel peaceful.",
        "tr": "Yağmurun sesini dinlemek beni huzurlu hissettirir."
      },
      {
        "id": 10,
        "eng": "In the afternoon, the rain slowly stopped.",
        "tr": "Öğleden sonra yağmur yavaşça durdu."
      },
      {
        "id": 11,
        "eng": "A beautiful colorful rainbow appeared behind the clouds.",
        "tr": "Bulutların arkasında güzel, renkli bir gökkuşağı belirdi."
      },
      {
        "id": 12,
        "eng": "I love rainy days when I can stay home.",
        "tr": "Evde kalabildiğim yağmurlu günleri çok seviyorum."
      }
    ],
    "questions": [
      {
        "q": "What was the weather like in the morning?",
        "options": [
          "Sunny",
          "Rainy and windy",
          "Snowy"
        ],
        "answer": 1
      },
      {
        "q": "What did the grandmother make?",
        "options": [
          "Hot chocolate",
          "Mint tea with honey",
          "Coffee"
        ],
        "answer": 1
      },
      {
        "q": "What appeared when the rain stopped?",
        "options": [
          "A rainbow",
          "Lightning",
          "Snow"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 9,
    "level": "A1",
    "title": "Going to the City Library",
    "bgImage": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "The city library is my favorite place in town.",
        "tr": "Şehir kütüphanesi kasabadaki en sevdiğim yerdir."
      },
      {
        "id": 2,
        "eng": "It is an old stone building with huge wooden doors.",
        "tr": "Büyük ahşap kapıları olan eski taş bir binadır."
      },
      {
        "id": 3,
        "eng": "Inside, there are tall shelves filled with thousands of books.",
        "tr": "İçeride binlerce kitapla dolu yüksek raflar var."
      },
      {
        "id": 4,
        "eng": "Everyone speaks in quiet whispers to respect others.",
        "tr": "Herkes başkalarına saygı duymak için alçak fısıltılarla konuşur."
      },
      {
        "id": 5,
        "eng": "I show my blue library card to the kind librarian.",
        "tr": "Mavi kütüphane kartımı kibar kütüphaneciye gösteririm."
      },
      {
        "id": 6,
        "eng": "She smiles and points towards the English literature section.",
        "tr": "Gülümser ve İngiliz edebiyatı bölümünü işaret eder."
      },
      {
        "id": 7,
        "eng": "I look for graded readers with short vocabularies.",
        "tr": "Kısa kelime dağarcığı olan seviyelendirilmiş okuma kitapları ararım."
      },
      {
        "id": 8,
        "eng": "I select three books about nature and adventure.",
        "tr": "Doğa ve macera hakkında üç kitap seçerim."
      },
      {
        "id": 9,
        "eng": "I sit near a wooden table under a warm green lamp.",
        "tr": "Ilık yeşil bir lambanın altındaki ahşap bir masanın yanına otururum."
      },
      {
        "id": 10,
        "eng": "I read the first chapter without any phone distractions.",
        "tr": "İlk bölümü telefon dikkat dağınıklığı olmadan okurum."
      },
      {
        "id": 11,
        "eng": "I can borrow these books for two whole weeks.",
        "tr": "Bu kitapları tam iki hafta boyunca ödünç alabilirim."
      },
      {
        "id": 12,
        "eng": "Reading in the library makes me very happy.",
        "tr": "Kütüphanede okumak beni çok mutlu eder."
      }
    ],
    "questions": [
      {
        "q": "What does the author show to the librarian?",
        "options": [
          "Money",
          "A library card",
          "A passport"
        ],
        "answer": 1
      },
      {
        "q": "How many books does the author select?",
        "options": [
          "One",
          "Three",
          "Ten"
        ],
        "answer": 1
      },
      {
        "q": "How long can the author borrow the books?",
        "options": [
          "Two weeks",
          "Two days",
          "One month"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 10,
    "level": "A1",
    "title": "A Sunny Day in the Park",
    "bgImage": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Today is sunny and perfect for spending time outside.",
        "tr": "Bugün güneşli ve dışarıda vakit geçirmek için mükemmel."
      },
      {
        "id": 2,
        "eng": "My friends and I meet at the central green park.",
        "tr": "Arkadaşlarım ve ben merkez yeşil parkta buluşuruz."
      },
      {
        "id": 3,
        "eng": "Tall green pine trees provide cool shade.",
        "tr": "Uzun yeşil çam ağaçları serin gölge sağlar."
      },
      {
        "id": 4,
        "eng": "Many families are sitting on colorful blankets.",
        "tr": "Birçok aile renkli battaniyelerin üzerinde oturuyor."
      },
      {
        "id": 5,
        "eng": "Small children are laughing and running on the grass.",
        "tr": "Küçük çocuklar çimenlerin üzerinde gülüyor ve koşuyor."
      },
      {
        "id": 6,
        "eng": "We throw a red frisbee back and forth across the lawn.",
        "tr": "Çimlerin üzerinde kırmızı bir frizbiyi ileri geri fırlatırız."
      },
      {
        "id": 7,
        "eng": "A cute white puppy barks and chases the frisbee.",
        "tr": "Sevimli beyaz bir köpek yavrusu havlar ve frizbiyi kovalar."
      },
      {
        "id": 8,
        "eng": "We buy cold vanilla ice cream from a cart.",
        "tr": "Bir arabadan soğuk vanilyalı dondurma satın alırız."
      },
      {
        "id": 9,
        "eng": "The sweet taste of ice cream cools us down.",
        "tr": "Dondurmanın tatlı tadı bizi serinletir."
      },
      {
        "id": 10,
        "eng": "We sit on a wooden bench and chat about school.",
        "tr": "Ahşap bir banka oturur ve okul hakkında sohbet ederiz."
      },
      {
        "id": 11,
        "eng": "As the sun sets, the sky turns bright pink.",
        "tr": "Güneş batarken gökyüzü parlak pembeye döner."
      },
      {
        "id": 12,
        "eng": "We walk home feeling energized and cheerful.",
        "tr": "Kendimizi enerjik ve neşeli hissederek eve yürürüz."
      }
    ],
    "questions": [
      {
        "q": "Where do the friends meet?",
        "options": [
          "At a restaurant",
          "At the central park",
          "At the cinema"
        ],
        "answer": 1
      },
      {
        "q": "What ice cream flavor do they buy?",
        "options": [
          "Chocolate",
          "Vanilla",
          "Strawberry"
        ],
        "answer": 1
      },
      {
        "q": "What color does the sky turn at sunset?",
        "options": [
          "Green",
          "Pink",
          "Dark blue"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 11,
    "level": "A1",
    "title": "Making Fresh Fruit Salad",
    "bgImage": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "On hot summer afternoons, I love making fresh fruit salad.",
        "tr": "Sıcak yaz öğleden sonralarında taze meyve salatası yapmayı çok severim."
      },
      {
        "id": 2,
        "eng": "I wash my hands and place a big glass bowl on the kitchen table.",
        "tr": "Ellerimi yıkar ve mutfak masasına büyük bir cam kase koyarım."
      },
      {
        "id": 3,
        "eng": "First, I peel two sweet yellow bananas and cut them into slices.",
        "tr": "İlk önce iki tatlı sarı muzun kabuğunu soyar ve dilimlere keserim."
      },
      {
        "id": 4,
        "eng": "Next, I wash ten ripe red strawberries with cold water.",
        "tr": "Sonra on olgun kırmızı çileği soğuk suyla yıkarım."
      },
      {
        "id": 5,
        "eng": "I chop a green apple into crisp crunchy cubes.",
        "tr": "Yeşil bir elmayı çıtır çıtır küpler halinde doğrarım."
      },
      {
        "id": 6,
        "eng": "I add sweet purple grapes and a peeled orange.",
        "tr": "Tatlı mor üzümler ve soyulmuş bir portakal eklerim."
      },
      {
        "id": 7,
        "eng": "I squeeze half a fresh lemon over the mixed fruits.",
        "tr": "Karışık meyvelerin üzerine yarım taze limon sıkarım."
      },
      {
        "id": 8,
        "eng": "Lemon juice keeps the apples fresh and prevents them from turning brown.",
        "tr": "Limon suyu elmaları taze tutar ve kararmalarını önler."
      },
      {
        "id": 9,
        "eng": "I add a spoonful of pure flower honey for extra sweetness.",
        "tr": "Ekstra tatlılık için bir kaşık saf çiçek balı eklerim."
      },
      {
        "id": 10,
        "eng": "I mix everything gently with a large wooden spoon.",
        "tr": "Büyük bir tahta kaşıkla her şeyi nazikçe karıştırırım."
      },
      {
        "id": 11,
        "eng": "I share the colorful bowl with my little sister.",
        "tr": "Renkli kaseyi küçük kız kardeşimle paylaşırım."
      },
      {
        "id": 12,
        "eng": "Eating healthy fresh fruit gives us plenty of energy.",
        "tr": "Sağlıklı taze meyve yemek bize bolca enerji verir."
      }
    ],
    "questions": [
      {
        "q": "Why does the author squeeze lemon juice over the fruit?",
        "options": [
          "To make it bitter",
          "To keep it fresh and prevent browning",
          "To make it spicy"
        ],
        "answer": 1
      },
      {
        "q": "What does the author add for extra sweetness?",
        "options": [
          "Sugar",
          "Pure flower honey",
          "Chocolate syrup"
        ],
        "answer": 1
      },
      {
        "q": "Who does the author share the salad with?",
        "options": [
          "Little sister",
          "Classmate",
          "Grandfather"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 12,
    "level": "A1",
    "title": "My Friendly Cat Oliver",
    "bgImage": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Oliver is my lovely two-year-old cat.",
        "tr": "Oliver benim iki yaşındaki sevimli kedimdir."
      },
      {
        "id": 2,
        "eng": "He has soft orange fur and big emerald green eyes.",
        "tr": "Yumuşak turuncu kürkü ve kocaman zümrüt yeşili gözleri var."
      },
      {
        "id": 3,
        "eng": "Oliver sleeps on my soft pillow every single night.",
        "tr": "Oliver her gece yumuşak yastığımda uyur."
      },
      {
        "id": 4,
        "eng": "When my alarm rings, he taps my nose with his soft paw.",
        "tr": "Alarmım çaldığında yumuşak patisiyle burnuma dokunur."
      },
      {
        "id": 5,
        "eng": "He purrs loudly when I pet him behind his ears.",
        "tr": "Kulaklarının arkasını okşadığımda yüksek sesle mırlar."
      },
      {
        "id": 6,
        "eng": "I give him fresh water and healthy crunchy cat food.",
        "tr": "Ona taze su ve sağlıklı çıtır kedi maması veririm."
      },
      {
        "id": 7,
        "eng": "His favorite toy is a tiny red rubber ball.",
        "tr": "En sevdiği oyuncak küçük kırmızı bir lastik toptur."
      },
      {
        "id": 8,
        "eng": "He chases the red ball all around the living room.",
        "tr": "Kırmızı topu oturma odasının her tarafında kovalar."
      },
      {
        "id": 9,
        "eng": "In the afternoon, Oliver sits on the sunny windowsill.",
        "tr": "Öğleden sonra Oliver güneşli pencere kenarında oturur."
      },
      {
        "id": 10,
        "eng": "He watches flying birds and fluttering leaves outside.",
        "tr": "Dışarıdaki uçan kuşları ve dalgalanan yaprakları izler."
      },
      {
        "id": 11,
        "eng": "Whenever I feel sad, Oliver sits close to comfort me.",
        "tr": "Ne zaman üzgün hissetsem Oliver beni teselli etmek için yakınıma oturur."
      },
      {
        "id": 12,
        "eng": "Having a pet makes life so much happier.",
        "tr": "Bir evcil hayvana sahip olmak hayatı çok daha mutlu kılar."
      }
    ],
    "questions": [
      {
        "q": "What color are Oliver's eyes?",
        "options": [
          "Blue",
          "Emerald green",
          "Brown"
        ],
        "answer": 1
      },
      {
        "q": "What is Oliver's favorite toy?",
        "options": [
          "A red rubber ball",
          "A feather",
          "A mouse"
        ],
        "answer": 0
      },
      {
        "q": "Where does Oliver like to sit in the afternoon?",
        "options": [
          "In the kitchen",
          "On the windowsill",
          "In the garden"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 13,
    "level": "A1",
    "title": "Walking in the Autumn Woods",
    "bgImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Autumn is my absolute favorite season of the year.",
        "tr": "Sonbahar yılın kesinlikle en sevdiğim mevsimidir."
      },
      {
        "id": 2,
        "eng": "The forest behind our town transforms into gold and orange.",
        "tr": "Kasabamızın arkasındaki orman altın ve turuncuya dönüşür."
      },
      {
        "id": 3,
        "eng": "Crisp fallen leaves crunch softly under my walking boots.",
        "tr": "Çıtır dökülmüş yapraklar yürüyüş botlarımın altında usulca çatırdar."
      },
      {
        "id": 4,
        "eng": "The air smells fresh like damp earth and pine needles.",
        "tr": "Hava nemli toprak ve çam iğnesi gibi taze kokar."
      },
      {
        "id": 5,
        "eng": "I wear a warm wool coat and a knitted scarf.",
        "tr": "Sıcak bir yün palto ve örgü bir atkı takarım."
      },
      {
        "id": 6,
        "eng": "A shy brown squirrel climbs quickly up an old oak tree.",
        "tr": "Utangaç kahverengi bir sincap yaşlı bir meşe ağacına hızlıca tırmanır."
      },
      {
        "id": 7,
        "eng": "It carries a small brown acorn in its tiny paws.",
        "tr": "Küçük patilerinde minik kahverengi bir palamut taşır."
      },
      {
        "id": 8,
        "eng": "I stop by a quiet wooden bridge over the stream.",
        "tr": "Derenin üzerindeki sessiz ahşap bir köprünün yanında dururum."
      },
      {
        "id": 9,
        "eng": "Clear cold water flows gently between smooth grey stones.",
        "tr": "Berrak soğuk su pürüzsüz gri taşların arasından nazikçe akar."
      },
      {
        "id": 10,
        "eng": "I take several beautiful pictures with my pocket camera.",
        "tr": "Cep kameramla birkaç güzel fotoğraf çekerim."
      },
      {
        "id": 11,
        "eng": "Walking among tall trees brings deep calm to my mind.",
        "tr": "Yüksek ağaçlar arasında yürümek zihnime derin bir dinginlik getirir."
      },
      {
        "id": 12,
        "eng": "I return home before the evening chill sets in.",
        "tr": "Akşam ayazı başlamadan önce eve dönerim."
      }
    ],
    "questions": [
      {
        "q": "What animal climbs the old oak tree?",
        "options": [
          "A bird",
          "A brown squirrel",
          "A fox"
        ],
        "answer": 1
      },
      {
        "q": "What does the squirrel carry?",
        "options": [
          "A nut",
          "An acorn",
          "A berry"
        ],
        "answer": 1
      },
      {
        "q": "What does the author take pictures with?",
        "options": [
          "A pocket camera",
          "A phone",
          "A tablet"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 14,
    "level": "A1",
    "title": "A Big Family Dinner",
    "bgImage": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "On Friday evenings, my whole family gathers for dinner.",
        "tr": "Cuma akşamları tüm ailem akşam yemeği için toplanır."
      },
      {
        "id": 2,
        "eng": "My parents, grandparents, aunt, and cousins all come together.",
        "tr": "Annem, babam, büyükannem, büyükbabam, teyzem ve kuzenlerim hep birlikte gelir."
      },
      {
        "id": 3,
        "eng": "We set a long wooden table with white napkins and candles.",
        "tr": "Beyaz peçeteler ve mumlarla uzun bir ahşap masa kurarız."
      },
      {
        "id": 4,
        "eng": "My father cooks tender roasted chicken in the oven.",
        "tr": "Babam fırında lokum gibi kızarmış tavuk pişirir."
      },
      {
        "id": 5,
        "eng": "My mother prepares a rich green salad with olive oil.",
        "tr": "Annem zeytinyağlı zengin yeşil bir salata hazırlar."
      },
      {
        "id": 6,
        "eng": "My grandmother brings homemade warm apple pie.",
        "tr": "Büyükannem ev yapımı sıcak elmalı turta getirir."
      },
      {
        "id": 7,
        "eng": "Everyone sits down and talks about their busy week.",
        "tr": "Herkes oturur ve yoğun geçen haftaları hakkında konuşur."
      },
      {
        "id": 8,
        "eng": "My uncle tells funny stories that make us all laugh loudly.",
        "tr": "Amcam hepimizi kahkahalarla güldüren komik hikayeler anlatır."
      },
      {
        "id": 9,
        "eng": "We drink warm herbal tea after finishing our meal.",
        "tr": "Yemeğimizi bitirdikten sonra sıcak bitki çayı içeriz."
      },
      {
        "id": 10,
        "eng": "I help clear the empty plates from the table.",
        "tr": "Boş tabakları masadan kaldırmaya yardım ederim."
      },
      {
        "id": 11,
        "eng": "Family dinners remind me how lucky I am.",
        "tr": "Aile yemekleri bana ne kadar şanslı olduğumu hatırlatır."
      },
      {
        "id": 12,
        "eng": "Love and shared meals create wonderful memories.",
        "tr": "Sevgi ve paylaşılan yemekler harika anılar yaratır."
      }
    ],
    "questions": [
      {
        "q": "On what day does the family gather for dinner?",
        "options": [
          "Friday evening",
          "Sunday morning",
          "Wednesday"
        ],
        "answer": 0
      },
      {
        "q": "What dessert does the grandmother bring?",
        "options": [
          "Chocolate cake",
          "Homemade apple pie",
          "Ice cream"
        ],
        "answer": 1
      },
      {
        "q": "What do they drink after dinner?",
        "options": [
          "Coffee",
          "Warm herbal tea",
          "Cold soda"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 15,
    "level": "A1",
    "title": "Riding a Bicycle in Spring",
    "bgImage": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Spring brings warm sunny weather and blooming flowers.",
        "tr": "İlkbahar ılık güneşli hava ve açan çiçekler getirir."
      },
      {
        "id": 2,
        "eng": "I take my bright blue bicycle out of the garage.",
        "tr": "Parlak mavi bisikletimi garajdan çıkarırım."
      },
      {
        "id": 3,
        "eng": "I check the tire pressure with a small hand pump.",
        "tr": "Küçük bir el pompasıyla lastik basıncını kontrol ederim."
      },
      {
        "id": 4,
        "eng": "I strap on my protective helmet and adjust the mirror.",
        "tr": "Koruyucu kaskımı bağlar ve aynayı ayarlarım."
      },
      {
        "id": 5,
        "eng": "There is a wide bicycle path that follows the clean river.",
        "tr": "Temiz nehri takip eden geniş bir bisiklet yolu vardır."
      },
      {
        "id": 6,
        "eng": "The gentle cool breeze feels amazing on my face.",
        "tr": "Hafif serin esinti yüzümde harika bir his bırakır."
      },
      {
        "id": 7,
        "eng": "Pink cherry blossoms drop petals along the asphalt road.",
        "tr": "Pembe kiraz çiçekleri asfalt yola yaprak döker."
      },
      {
        "id": 8,
        "eng": "I ring my little brass bell when passing other cyclists.",
        "tr": "Diğer bisikletlileri geçerken küçük pirinç zilimi çalarım."
      },
      {
        "id": 9,
        "eng": "I stop at a wooden bench to drink cold water from my bottle.",
        "tr": "Mataramdan soğuk su içmek için ahşap bir bankta dururum."
      },
      {
        "id": 10,
        "eng": "Riding a bicycle keeps my body strong and healthy.",
        "tr": "Bisiklete binmek vücudumu güçlü ve sağlıklı tutar."
      },
      {
        "id": 11,
        "eng": "It is an eco-friendly and enjoyable way to travel.",
        "tr": "Seyahat etmenin çevre dostu ve keyifli bir yoludur."
      },
      {
        "id": 12,
        "eng": "I cycle back home feeling refreshed and energized.",
        "tr": "Kendimi yenilenmiş ve enerjik hissederek eve geri sürerim."
      }
    ],
    "questions": [
      {
        "q": "Where is the bicycle path located?",
        "options": [
          "In the city center",
          "Along the clean river",
          "On the mountain"
        ],
        "answer": 1
      },
      {
        "q": "What does the author wear for protection?",
        "options": [
          "Gloves",
          "A helmet",
          "Sunglasses"
        ],
        "answer": 1
      },
      {
        "q": "What does the author ring when passing others?",
        "options": [
          "A phone",
          "A brass bell",
          "A whistle"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 16,
    "level": "A1",
    "title": "Cooking Pasta with Tomato Sauce",
    "bgImage": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Cooking pasta is simple, fast, and very delicious.",
        "tr": "Makarna pişirmek basit, hızlı ve çok lezzetlidir."
      },
      {
        "id": 2,
        "eng": "First, I fill a large stainless steel pot with water.",
        "tr": "İlk önce büyük bir paslanmaz çelik tencereyi suyla doldururum."
      },
      {
        "id": 3,
        "eng": "I place the pot on the stove and turn on the flame.",
        "tr": "Tencereyi ocağa koyar ve ateşi yakarım."
      },
      {
        "id": 4,
        "eng": "I add a pinch of salt when the water starts boiling.",
        "tr": "Su kaynamaya başladığında bir tutam tuz eklerim."
      },
      {
        "id": 5,
        "eng": "I pour a package of penne pasta into the bubbling pot.",
        "tr": "Kabarcıklanan tencereye bir paket penne makarna dökerim."
      },
      {
        "id": 6,
        "eng": "In a separate pan, I heat pure olive oil and minced garlic.",
        "tr": "Ayrı bir tavada saf zeytinyağı ve kıyılmış sarımsak ısıtırım."
      },
      {
        "id": 7,
        "eng": "I add chopped red tomatoes and dried green basil.",
        "tr": "Doğranmış kırmızı domatesler ve kurutulmuş yeşil fesleğen eklerim."
      },
      {
        "id": 8,
        "eng": "The red tomato sauce simmers gently for ten minutes.",
        "tr": "Kırmızı domates sosu on dakika boyunca kısık ateşte kaynar."
      },
      {
        "id": 9,
        "eng": "I drain the cooked pasta in a metal colander.",
        "tr": "Pişmiş makarnayı metal bir süzgeçte süzerim."
      },
      {
        "id": 10,
        "eng": "I mix the hot pasta together with the rich red sauce.",
        "tr": "Sıcak makarnayı zengin kırmızı sosla birlikte karıştırırım."
      },
      {
        "id": 11,
        "eng": "I sprinkle grated white cheese on top before serving.",
        "tr": "Servis yapmadan önce üzerine rendelenmiş beyaz peynir serperim."
      },
      {
        "id": 12,
        "eng": "Dinner smells like a traditional Italian restaurant.",
        "tr": "Akşam yemeği geleneksel bir İtalyan restoranı gibi kokar."
      }
    ],
    "questions": [
      {
        "q": "What herb does the author add to the tomato sauce?",
        "options": [
          "Mint",
          "Green basil",
          "Oregano"
        ],
        "answer": 1
      },
      {
        "q": "What type of pasta does the author use?",
        "options": [
          "Spaghetti",
          "Penne pasta",
          "Macaroni"
        ],
        "answer": 1
      },
      {
        "q": "What is sprinkled on top before serving?",
        "options": [
          "Grated white cheese",
          "Black pepper",
          "Sugar"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 17,
    "level": "A1",
    "title": "The Friendly Neighborhood Baker",
    "bgImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Mr. Thomas owns the oldest bakery on our quiet street.",
        "tr": "Bay Thomas sakin caddemizdeki en eski fırının sahibidir."
      },
      {
        "id": 2,
        "eng": "He wakes up at four in the morning every single day.",
        "tr": "Her gün sabahın dördünde uyanır."
      },
      {
        "id": 3,
        "eng": "He mixes flour, water, yeast, and salt in big bowls.",
        "tr": "Büyük kaselerde un, su, maya ve tuzu karıştırır."
      },
      {
        "id": 4,
        "eng": "The stone oven bakes hundreds of crusty loaves before sunrise.",
        "tr": "Taş fırın gün doğumundan önce yüzlerce çıtır somun pişirir."
      },
      {
        "id": 5,
        "eng": "The pleasant smell of warm bread travels across the neighborhood.",
        "tr": "Sıcak ekmeğin hoş kokusu mahalle boyunca yayılır."
      },
      {
        "id": 6,
        "eng": "I visit the bakery at eight to buy breakfast bread.",
        "tr": "Kahvaltı ekmeği almak için saat sekizde fırını ziyaret ederim."
      },
      {
        "id": 7,
        "eng": "Mr. Thomas always wears a clean white apron and a friendly smile.",
        "tr": "Bay Thomas her zaman temiz beyaz bir önlük ve dostça bir gülümseme takar."
      },
      {
        "id": 8,
        "eng": "He also bakes buttery croissants and sweet cinnamon rolls.",
        "tr": "Ayrıca tereyağlı kruvasanlar ve tatlı tarçınlı çörekler pişirir."
      },
      {
        "id": 9,
        "eng": "He gives me a tiny warm cookie as a special treat.",
        "tr": "Bana özel bir ikram olarak minik sıcak bir kurabiye verir."
      },
      {
        "id": 10,
        "eng": "I thank him politely and pay with my coins.",
        "tr": "Ona kibarca teşekkür eder ve madeni paralarımla öderim."
      },
      {
        "id": 11,
        "eng": "Local small businesses make our town feel like a family.",
        "tr": "Yerel küçük işletmeler kasabamızı bir aile gibi hissettirir."
      },
      {
        "id": 12,
        "eng": "Warm fresh bread tastes best when shared with loved ones.",
        "tr": "Sıcak taze ekmek sevdiklerinizle paylaşıldığında en lezzetlidir."
      }
    ],
    "questions": [
      {
        "q": "What time does Mr. Thomas wake up?",
        "options": [
          "At four in the morning",
          "At seven",
          "At noon"
        ],
        "answer": 0
      },
      {
        "q": "What does the baker wear?",
        "options": [
          "A black suit",
          "A clean white apron",
          "A blue jacket"
        ],
        "answer": 1
      },
      {
        "q": "What special treat does Mr. Thomas give the author?",
        "options": [
          "A croissant",
          "A tiny warm cookie",
          "An apple"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 18,
    "level": "A1",
    "title": "A Morning at the Flower Garden",
    "bgImage": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "My grandmother has a magical flower garden behind her house.",
        "tr": "Büyükannemin evinin arkasında büyülü bir çiçek bahçesi var."
      },
      {
        "id": 2,
        "eng": "In early morning, shiny dew drops cover every green petal.",
        "tr": "Sabahın erken saatlerinde parıldayan çiy damlaları her yeşil yaprağı kaplar."
      },
      {
        "id": 3,
        "eng": "Red roses, yellow sunflowers, and purple lavender grow side by side.",
        "tr": "Kırmızı güller, sarı ayçiçekleri ve mor lavantalar yan yana büyür."
      },
      {
        "id": 4,
        "eng": "I help my grandmother pull out unwanted weeds from the soil.",
        "tr": "Büyükanneme topraktan istenmeyen yabani otları çekmesine yardım ederim."
      },
      {
        "id": 5,
        "eng": "We use a green plastic watering can to nourish the roots.",
        "tr": "Kökleri beslemek için yeşil plastik bir sulama kabı kullanırız."
      },
      {
        "id": 6,
        "eng": "Busy honeybees buzz quietly from one blossom to another.",
        "tr": "Meşgul bal arıları bir çiçekten diğerine sessizce vızıldar."
      },
      {
        "id": 7,
        "eng": "A blue butterfly lands gently on a tall yellow tulip.",
        "tr": "Mavi bir kelebek uzun sarı bir lalenin üzerine nazikçe konar."
      },
      {
        "id": 8,
        "eng": "The soothing perfume of lavender fills the fresh garden air.",
        "tr": "Lavantanın rahatlatıcı kokusu taze bahçe havasını doldurur."
      },
      {
        "id": 9,
        "eng": "Gardening teaches patience and gentle care for nature.",
        "tr": "Bahçıvanlık sabrı ve doğaya karşı nazik bakımı öğretir."
      },
      {
        "id": 10,
        "eng": "We cut a small bouquet of colorful flowers for the dining table.",
        "tr": "Yemek masası için renkli çiçeklerden oluşan küçük bir buket keseriz."
      },
      {
        "id": 11,
        "eng": "We place them in a crystal vase filled with fresh water.",
        "tr": "Onları taze suyla dolu kristal bir vazoya koyarız."
      },
      {
        "id": 12,
        "eng": "Nature brings peace and joy to everyone who cares for it.",
        "tr": "Doğa ona özen gösteren herkese huzur ve sevinç getirir."
      }
    ],
    "questions": [
      {
        "q": "What covers the petals in early morning?",
        "options": [
          "Dust",
          "Shiny dew drops",
          "Snow"
        ],
        "answer": 1
      },
      {
        "q": "What insect buzzes around the blossoms?",
        "options": [
          "Honeybees",
          "Ants",
          "Flies"
        ],
        "answer": 0
      },
      {
        "q": "Where do they place the bouquet of flowers?",
        "options": [
          "In a wooden box",
          "In a crystal vase on the dining table",
          "Outside"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 19,
    "level": "A1",
    "title": "Cleaning and Tidying My Room",
    "bgImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Saturday morning is my designated room cleaning time.",
        "tr": "Cumartesi sabahı benim belirlenmiş oda temizleme zamanımdır."
      },
      {
        "id": 2,
        "eng": "First, I open the window wide to let in fresh cool breeze.",
        "tr": "İlk önce taze serin esintiyi içeri almak için pencereyi ardına kadar açarım."
      },
      {
        "id": 3,
        "eng": "I put on my favorite upbeat music on my small speaker.",
        "tr": "Küçük hoparlörümden en sevdiğim neşeli müziği açarım."
      },
      {
        "id": 4,
        "eng": "I make my bed neatly with clean white sheets and blankets.",
        "tr": "Yatağımı temiz beyaz çarşaflar ve battaniyelerle düzgünce toplarım."
      },
      {
        "id": 5,
        "eng": "I pick up clothes from the chair and hang them in the closet.",
        "tr": "Sandalyedeki kıyafetleri toplar ve dolaba asarım."
      },
      {
        "id": 6,
        "eng": "I arrange my school notebooks and textbooks on the wooden desk.",
        "tr": "Okul defterlerimi ve ders kitaplarımı ahşap masanın üzerine dizerim."
      },
      {
        "id": 7,
        "eng": "I wipe the dust off my computer monitor with a microfiber cloth.",
        "tr": "Bilgisayar monitörümün tozunu mikrofiber bir bezle silerim."
      },
      {
        "id": 8,
        "eng": "Then I vacuum the soft carpet from corner to corner.",
        "tr": "Sonra yumuşak halıyı köşeden köşeye süpürürüm."
      },
      {
        "id": 9,
        "eng": "I empty the small wastebasket near my study desk.",
        "tr": "Çalışma masamın yanındaki küçük çöp kutusunu boşaltırım."
      },
      {
        "id": 10,
        "eng": "A tidy and clean room helps me think clearly and study better.",
        "tr": "Düzenli ve temiz bir oda net düşünmeme ve daha iyi ders çalışmama yardımcı olur."
      },
      {
        "id": 11,
        "eng": "I light a lavender candle to make the air smell pleasant.",
        "tr": "Havanın hoş kokması için bir lavanta mumu yakarım."
      },
      {
        "id": 12,
        "eng": "I feel proud and relaxed when my personal space is clean.",
        "tr": "Kişisel alanım temiz olduğunda gururlu ve rahatlamış hissederim."
      }
    ],
    "questions": [
      {
        "q": "What does the author do first before cleaning?",
        "options": [
          "Eats breakfast",
          "Opens the window wide for fresh air",
          "Sleeps"
        ],
        "answer": 1
      },
      {
        "q": "What does the author use to wipe dust from the monitor?",
        "options": [
          "Paper",
          "A microfiber cloth",
          "A wet towel"
        ],
        "answer": 1
      },
      {
        "q": "What candle scent is lit at the end?",
        "options": [
          "Vanilla",
          "Lavender",
          "Lemon"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 20,
    "level": "A1",
    "title": "Buying New Shoes at the Mall",
    "bgImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Yesterday, my older brother and I went to the shopping mall.",
        "tr": "Dün ağabeyim ve ben alışveriş merkezine gittik."
      },
      {
        "id": 2,
        "eng": "I needed a new pair of running sneakers for gym class.",
        "tr": "Beden eğitimi dersi için yeni bir çift koşu spor ayakkabısına ihtiyacım vardı."
      },
      {
        "id": 3,
        "eng": "The sports shop was brightly lit with rows of colorful footwear.",
        "tr": "Spor mağazası rengarenk ayakkabı sıralarıyla pırıl pırıl aydınlatılmıştı."
      },
      {
        "id": 4,
        "eng": "A polite sales assistant asked how he could assist us.",
        "tr": "Kibar bir satış görevlisi bize nasıl yardımcı olabileceğini sordu."
      },
      {
        "id": 5,
        "eng": "I told him I wear European shoe size forty.",
        "tr": "Ona kırk numara Avrupa ayakkabı giydiğimi söyledim."
      },
      {
        "id": 6,
        "eng": "He brought three different boxes of running shoes.",
        "tr": "Üç farklı koşu ayakkabısı kutusu getirdi."
      },
      {
        "id": 7,
        "eng": "I tried on a dark blue pair with soft white foam soles.",
        "tr": "Yumuşak beyaz köpük tabanlı koyu mavi bir çift denedim."
      },
      {
        "id": 8,
        "eng": "I tied the laces and walked around the shop carpet.",
        "tr": "Bağcıkları bağladım ve mağaza halısında dolaştım."
      },
      {
        "id": 9,
        "eng": "The sneakers felt very light and extremely comfortable on my feet.",
        "tr": "Spor ayakkabılar ayağımda çok hafif ve son derece rahat hissettirdi."
      },
      {
        "id": 10,
        "eng": "My brother agreed that they looked stylish and sporty.",
        "tr": "Ağabeyim şık ve sportif göründükleri konusunda hemfikir oldu."
      },
      {
        "id": 11,
        "eng": "We paid at the counter and carried the shoe box home happily.",
        "tr": "Kasada ödeme yaptık ve ayakkabı kutusunu mutlu bir şekilde eve taşıdık."
      },
      {
        "id": 12,
        "eng": "I cannot wait to wear my new sneakers to school tomorrow.",
        "tr": "Yeni spor ayakkabılarımı yarın okula giymek için sabırsızlanıyorum."
      }
    ],
    "questions": [
      {
        "q": "What shoe size does the author wear?",
        "options": [
          "Size 38",
          "Size 40",
          "Size 42"
        ],
        "answer": 1
      },
      {
        "q": "What color pair did the author choose?",
        "options": [
          "Red",
          "Dark blue with white soles",
          "Black"
        ],
        "answer": 1
      },
      {
        "q": "Why did the author need new shoes?",
        "options": [
          "For a party",
          "For gym class",
          "For winter snow"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 21,
    "level": "A1",
    "title": "Watching the Night Stars",
    "bgImage": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Summer nights in our village are remarkably clear and dark.",
        "tr": "Köyümüzdeki yaz geceleri son derece berrak ve karanlıktır."
      },
      {
        "id": 2,
        "eng": "There are no tall city buildings or bright street lamps here.",
        "tr": "Burada yüksek şehir binaları veya parlak sokak lambaları yoktur."
      },
      {
        "id": 3,
        "eng": "My father and I spread a thick blanket on the soft grass.",
        "tr": "Babam ve ben yumuşak çimlerin üzerine kalın bir battaniye sereriz."
      },
      {
        "id": 4,
        "eng": "We lie on our backs and gaze up at the giant velvet sky.",
        "tr": "Sırt üstü yatar ve dev kadife gökyüzüne bakarız."
      },
      {
        "id": 5,
        "eng": "Millions of silver stars twinkle like tiny distant lanterns.",
        "tr": "Milyonlarca gümüş yıldız minik uzak fenerler gibi parıldar."
      },
      {
        "id": 6,
        "eng": "The bright full moon shines like a silver plate.",
        "tr": "Parlak dolunay gümüş bir tabak gibi parlar."
      },
      {
        "id": 7,
        "eng": "My father points towards the Big Dipper constellation.",
        "tr": "Babam Büyük Ayı takımyıldızını işaret eder."
      },
      {
        "id": 8,
        "eng": "Suddenly, a shooting star streaks across the dark sky.",
        "tr": "Aniden karanlık gökyüzünden bir kayan yıldız geçer."
      },
      {
        "id": 9,
        "eng": "I quickly close my eyes and make a silent hopeful wish.",
        "tr": "Hızlıca gözlerimi kapatır ve sessiz umutlu bir dilek tutarım."
      },
      {
        "id": 10,
        "eng": "Crickets chirp a gentle nighttime song around the garden.",
        "tr": "Cırcır böcekleri bahçenin etrafında nazik bir gece şarkısı öttürür."
      },
      {
        "id": 11,
        "eng": "Stargazing makes me feel wonder and respect for the universe.",
        "tr": "Yıldızları izlemek evrene karşı hayranlık ve saygı duymamı sağlar."
      },
      {
        "id": 12,
        "eng": "We fall asleep counting stars under the infinite night.",
        "tr": "Sonsuz gecenin altında yıldızları sayarak uykuya dalarız."
      }
    ],
    "questions": [
      {
        "q": "Where does the family watch the stars?",
        "options": [
          "In a big city",
          "In their village garden",
          "On a boat"
        ],
        "answer": 1
      },
      {
        "q": "Which constellation does the father point out?",
        "options": [
          "Orion",
          "The Big Dipper",
          "Cassiopeia"
        ],
        "answer": 1
      },
      {
        "q": "What does the author do when a shooting star appears?",
        "options": [
          "Takes a photo",
          "Makes a silent wish",
          "Calls friends"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 22,
    "level": "A1",
    "title": "Visiting My Grandparents",
    "bgImage": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "My grandparents live in a small coastal town two hours away.",
        "tr": "Büyükannem ve büyükbabam iki saat uzaklıktaki küçük bir sahil kasabasında yaşıyor."
      },
      {
        "id": 2,
        "eng": "We travel by bus every two weeks to visit them.",
        "tr": "Onları ziyaret etmek için iki haftada bir otobüsle seyahat ederiz."
      },
      {
        "id": 3,
        "eng": "Their cozy house has a red tiled roof and a garden of lemons.",
        "tr": "Samimi evlerinin kırmızı kiremitli bir çatısı ve limon bahçesi var."
      },
      {
        "id": 4,
        "eng": "My grandmother opens the front door and hugs me warmly.",
        "tr": "Büyükannem ön kapıyı açar ve bana sımsıcak sarılır."
      },
      {
        "id": 5,
        "eng": "She always prepares homemade cheese pies and freshly baked bread.",
        "tr": "Her zaman ev yapımı peynirli börekler ve taze pişmiş ekmek hazırlar."
      },
      {
        "id": 6,
        "eng": "My grandfather shows me his wooden workshop behind the house.",
        "tr": "Büyükbabam bana evin arkasındaki ahşap atölyesini gösterir."
      },
      {
        "id": 7,
        "eng": "He carves miniature toy boats from fragrant olive wood.",
        "tr": "Mis kokulu zeytin ağacından minyatür oyuncak tekneler oyar."
      },
      {
        "id": 8,
        "eng": "He teaches me how to sand the rough wood until it is smooth.",
        "tr": "Pürüzlü ahşabı pürüzsüz olana kadar nasıl zımparalayacağımı öğretir."
      },
      {
        "id": 9,
        "eng": "In the evening, we drink black tea on the sea-view balcony.",
        "tr": "Akşam deniz manzaralı balkonda siyah çay içeriz."
      },
      {
        "id": 10,
        "eng": "Grandmother tells ancient folktales from her childhood days.",
        "tr": "Büyükanne çocukluk günlerinden kalma kadim halk hikayeleri anlatır."
      },
      {
        "id": 11,
        "eng": "Time spent with grandparents is precious and heartwarming.",
        "tr": "Büyükanne ve büyükbaba ile geçirilen zaman çok değerli ve iç ısıtıcıdır."
      },
      {
        "id": 12,
        "eng": "I always return home with a happy heart and fond memories.",
        "tr": "Eve her zaman mutlu bir kalp ve güzel anılarla dönerim."
      }
    ],
    "questions": [
      {
        "q": "What does the grandfather carve in his workshop?",
        "options": [
          "Wooden chairs",
          "Miniature toy boats",
          "Picture frames"
        ],
        "answer": 1
      },
      {
        "q": "What trees grow in the grandparents' garden?",
        "options": [
          "Apple trees",
          "Lemon trees",
          "Cherry trees"
        ],
        "answer": 1
      },
      {
        "q": "Where do they drink tea in the evening?",
        "options": [
          "In the kitchen",
          "On the sea-view balcony",
          "In the garden"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 23,
    "level": "A1",
    "title": "A Warm Summer at the Beach",
    "bgImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "In July, our family spent a wonderful week by the seaside.",
        "tr": "Temmuz ayında ailemiz deniz kenarında harika bir hafta geçirdi."
      },
      {
        "id": 2,
        "eng": "The golden sandy beach stretched for miles under the hot sun.",
        "tr": "Altın kumsal sıcak güneşin altında miller boyunca uzanıyordu."
      },
      {
        "id": 3,
        "eng": "We set up a striped blue umbrella to protect ourselves from heat.",
        "tr": "Sıcaktan korunmak için çizgili mavi bir şemsiye kurduk."
      },
      {
        "id": 4,
        "eng": "I applied sunscreen lotion carefully before jumping into water.",
        "tr": "Suya atlamadan önce güneş kremini dikkatlice sürdüm."
      },
      {
        "id": 5,
        "eng": "The turquoise Mediterranean water was crystal clear and refreshing.",
        "tr": "Turkuaz Akdeniz suyu kristal gibi berrak ve ferahlatıcıydı."
      },
      {
        "id": 6,
        "eng": "Small silver fish swam curiously around my bare ankles.",
        "tr": "Küçük gümüş balıklar çıplak ayak bileklerimin etrafında merakla yüzdü."
      },
      {
        "id": 7,
        "eng": "My sister and I built a giant sandcastle with moat and towers.",
        "tr": "Kız kardeşimle hendek ve kuleleri olan dev bir kumdan kale yaptık."
      },
      {
        "id": 8,
        "eng": "We collected smooth colorful seashells along the shoreline.",
        "tr": "Kıyı şeridi boyunca pürüzsüz renkli deniz kabukları topladık."
      },
      {
        "id": 9,
        "eng": "At midday, we ate chilled sweet watermelon slices on our towels.",
        "tr": "Öğle vakti havlularımızın üzerinde soğutulmuş tatlı karpuz dilimleri yedik."
      },
      {
        "id": 10,
        "eng": "The rhythmic crashing of waves sounded like gentle music.",
        "tr": "Dalgaların ritmik çarpması nazik bir müzik gibi geliyordu."
      },
      {
        "id": 11,
        "eng": "We watched the fiery orange sun sink slowly into the ocean.",
        "tr": "Ateşli turuncu güneşin yavaşça okyanusa batışını izledik."
      },
      {
        "id": 12,
        "eng": "Summer beach days leave unforgettable smiles on our faces.",
        "tr": "Yaz plaj günleri yüzümüzde unutulmaz gülümsemeler bırakır."
      }
    ],
    "questions": [
      {
        "q": "What fruit did the family eat at midday?",
        "options": [
          "Apples",
          "Chilled watermelon slices",
          "Bananas"
        ],
        "answer": 1
      },
      {
        "q": "What did the author apply before swimming?",
        "options": [
          "Sunscreen lotion",
          "Soap",
          "Oil"
        ],
        "answer": 0
      },
      {
        "q": "What did the author and sister build?",
        "options": [
          "A boat",
          "A giant sandcastle",
          "A wooden house"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 24,
    "level": "A1",
    "title": "Taking the Morning Bus",
    "bgImage": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Every weekday at seven-thirty, I walk to the nearby bus stop.",
        "tr": "Her hafta içi yediyi buçuk geçe yakındaki otobüs durağına yürürüm."
      },
      {
        "id": 2,
        "eng": "A group of cheerful neighbors and students wait for the line forty.",
        "tr": "Neşeli komşular ve öğrencilerden oluşan bir grup kırk numaralı hattı bekler."
      },
      {
        "id": 3,
        "eng": "The big yellow city bus arrives right on schedule.",
        "tr": "Büyük sarı belediye otobüsü tam vaktinde gelir."
      },
      {
        "id": 4,
        "eng": "The pneumatic doors hiss open and passengers step inside.",
        "tr": "Pnömatik kapılar tıslayarak açılır ve yolcular içeri adım atar."
      },
      {
        "id": 5,
        "eng": "I scan my electronic transport pass against the card reader.",
        "tr": "Elektronik ulaşım kartımı kart okuyucuya taratırım."
      },
      {
        "id": 6,
        "eng": "A pleasant green light beeps and welcomes me aboard.",
        "tr": "Hoş bir yeşil ışık bip sesi çıkarır ve beni araçta karşılar."
      },
      {
        "id": 7,
        "eng": "I find an empty seat by the window on the right side.",
        "tr": "Sağ taraftaki pencere kenarında boş bir koltuk bulurum."
      },
      {
        "id": 8,
        "eng": "I put in my earphones and listen to calm acoustic melodies.",
        "tr": "Kulaklıklarımı takar ve sakin akustik melodiler dinlerim."
      },
      {
        "id": 9,
        "eng": "Outside, morning shopkeepers unlock their doors and wave.",
        "tr": "Dışarıda sabah dükkan sahipleri kapılarının kilidini açar ve el sallar."
      },
      {
        "id": 10,
        "eng": "The bus drives through tree-lined avenues and bustling squares.",
        "tr": "Otobüs ağaçlıklı caddelerden ve hareketli meydanlardan geçer."
      },
      {
        "id": 11,
        "eng": "I press the red stop button when my destination approaches.",
        "tr": "Varış noktam yaklaştığında kırmızı dur butonuna basarım."
      },
      {
        "id": 12,
        "eng": "Public transportation is efficient, punctual, and safe.",
        "tr": "Toplu taşıma verimli, dakik ve güvenlidir."
      }
    ],
    "questions": [
      {
        "q": "What line number does the bus have?",
        "options": [
          "Line 12",
          "Line 40",
          "Line 100"
        ],
        "answer": 1
      },
      {
        "q": "Where does the author find a seat?",
        "options": [
          "Near the driver",
          "By the window on the right side",
          "Standing at the back"
        ],
        "answer": 1
      },
      {
        "q": "What does the author do while riding?",
        "options": [
          "Reads newspaper",
          "Listens to acoustic melodies",
          "Sleeps"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 25,
    "level": "A1",
    "title": "Playing Board Games with Friends",
    "bgImage": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "On rainy Sunday afternoons, my friends gather at my house.",
        "tr": "Yağmurlu pazar öğleden sonralarında arkadaşlarım benim evimde toplanır."
      },
      {
        "id": 2,
        "eng": "We clear the large dining table and bring out board games.",
        "tr": "Geniş yemek masasını boşaltır ve kutu oyunlarını çıkarırız."
      },
      {
        "id": 3,
        "eng": "Our favorite strategy game is about building roads and trading resources.",
        "tr": "En sevdiğimiz strateji oyunu yollar inşa etmek ve kaynak ticareti yapmakla ilgilidir."
      },
      {
        "id": 4,
        "eng": "Each player chooses a set of colorful wooden tokens.",
        "tr": "Her oyuncu renkli ahşap piyonlardan oluşan bir set seçer."
      },
      {
        "id": 5,
        "eng": "We roll two white dice to determine who begins the first turn.",
        "tr": "İlk tura kimin başlayacağını belirlemek için iki beyaz zar atarız."
      },
      {
        "id": 6,
        "eng": "My friend Leo rolls twelve and laughs with excitement.",
        "tr": "Arkadaşım Leo on iki atar ve heyecanla güler."
      },
      {
        "id": 7,
        "eng": "My mother brings a big bowl of crunchy salted popcorn.",
        "tr": "Annem büyük bir kase çıtır tuzlu patlamış mısır getirir."
      },
      {
        "id": 8,
        "eng": "We negotiate trades of wood, brick, wheat, and sheep.",
        "tr": "Odun, tuğla, buğday ve koyun takasları için pazarlık yaparız."
      },
      {
        "id": 9,
        "eng": "No one checks their smartphones while playing together.",
        "tr": "Birlikte oynarken hiç kimse akıllı telefonuna bakmaz."
      },
      {
        "id": 10,
        "eng": "The game takes nearly two hours of laughter and friendly rivalry.",
        "tr": "Oyun yaklaşık iki saatlik kahkaha ve tatlı bir rekabetle geçer."
      },
      {
        "id": 11,
        "eng": "Winning is fun, but sharing time with friends is the real reward.",
        "tr": "Kazanmak eğlencelidir ama arkadaşlarla zaman paylaşmak asıl ödüldür."
      },
      {
        "id": 12,
        "eng": "Board games bring people closer than digital screens.",
        "tr": "Kutu oyunları insanları dijital ekranlardan daha çok yakınlaştırır."
      }
    ],
    "questions": [
      {
        "q": "What snack does the mother bring?",
        "options": [
          "Chocolate cake",
          "Salted popcorn",
          "Pizza"
        ],
        "answer": 1
      },
      {
        "q": "How long does the game usually take?",
        "options": [
          "Twenty minutes",
          "Nearly two hours",
          "All night"
        ],
        "answer": 1
      },
      {
        "q": "What resources do players trade in the game?",
        "options": [
          "Wood, brick, wheat, and sheep",
          "Gold and diamonds",
          "Cars and planes"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 26,
    "level": "A1",
    "title": "My First English Notebook",
    "bgImage": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Last month, I bought a hardcover notebook with lined cream pages.",
        "tr": "Geçen ay krem çizgili sayfaları olan sert kapaklı bir defter aldım."
      },
      {
        "id": 2,
        "eng": "I decided to dedicate it entirely to my English learning journey.",
        "tr": "Onu tamamen İngilizce öğrenme yolculuğuma adamaya karar verdim."
      },
      {
        "id": 3,
        "eng": "On the front cover, I wrote my name with gold ink.",
        "tr": "Ön kapağa altın mürekkeple adımı yazdım."
      },
      {
        "id": 4,
        "eng": "Every morning, I write down five new vocabulary words.",
        "tr": "Her sabah beş yeni kelime yazarım."
      },
      {
        "id": 5,
        "eng": "Next to each word, I write its Turkish meaning and part of speech.",
        "tr": "Her kelimenin yanına Türkçe anlamını ve kelime türünü yazarım."
      },
      {
        "id": 6,
        "eng": "I also compose an original example sentence for each word.",
        "tr": "Ayrıca her kelime için özgün bir örnek cümle kurarım."
      },
      {
        "id": 7,
        "eng": "I use green highlighter for verbs and blue for nouns.",
        "tr": "Fiiller için yeşil, isimler için mavi fosforlu kalem kullanırım."
      },
      {
        "id": 8,
        "eng": "Reviewing my notebook before sleeping reinforces my memory.",
        "tr": "Uyumadan önce defterimi gözden geçirmek hafızamı pekiştirir."
      },
      {
        "id": 9,
        "eng": "After thirty days, I have mastered one hundred and fifty words.",
        "tr": "Otuz günün ardından yüz elli kelimede ustalaştım."
      },
      {
        "id": 10,
        "eng": "Writing by hand helps my brain remember spelling much better.",
        "tr": "Elle yazmak beynimin yazılışı çok daha iyi hatırlamasına yardımcı olur."
      },
      {
        "id": 11,
        "eng": "Learning a language requires small, consistent daily steps.",
        "tr": "Bir dil öğrenmek küçük ve tutarlı günlük adımlar gerektirir."
      },
      {
        "id": 12,
        "eng": "My English notebook is my most valuable study companion.",
        "tr": "İngilizce defterim benim en değerli çalışma arkadaşımdır."
      }
    ],
    "questions": [
      {
        "q": "How many new words does the author write daily?",
        "options": [
          "One",
          "Five",
          "Twenty"
        ],
        "answer": 1
      },
      {
        "q": "What color highlighter is used for verbs?",
        "options": [
          "Red",
          "Green",
          "Yellow"
        ],
        "answer": 1
      },
      {
        "q": "How many words did the author master in thirty days?",
        "options": [
          "Fifty",
          "One hundred and fifty",
          "Three hundred"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 27,
    "level": "A1",
    "title": "Saturday Morning at the Farmer's Market",
    "bgImage": "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Every Saturday morning, our town hosts a lively open-air market.",
        "tr": "Her cumartesi sabahı kasabamız canlı bir açık hava pazarına ev sahipliği yapar."
      },
      {
        "id": 2,
        "eng": "Farmers from surrounding villages bring fresh organic harvests.",
        "tr": "Çevre köylerden çiftçiler taze organik hasatlarını getirirler."
      },
      {
        "id": 3,
        "eng": "Wooden stalls display pyramids of red tomatoes and purple eggplants.",
        "tr": "Ahşap tezgahlar kırmızı domates ve mor patlıcan piramitlerini sergiler."
      },
      {
        "id": 4,
        "eng": "The air smells of fresh parsley, mint, and ripe peaches.",
        "tr": "Hava taze maydanoz, nane ve olgun şeftali kokar."
      },
      {
        "id": 5,
        "eng": "Friendly vendors shout cheerful greetings and offer fruit samples.",
        "tr": "Dost canlısı satıcılar neşeli selamlar haykırır ve meyve numuneleri sunar."
      },
      {
        "id": 6,
        "eng": "I taste a slice of sweet cantaloupe melon from a kind farmer.",
        "tr": "Kibar bir çiftçiden tatlı bir kavun diliminin tadına bakarım."
      },
      {
        "id": 7,
        "eng": "My mother chooses crisp cucumbers, green olives, and goat cheese.",
        "tr": "Annem çıtır salatalıklar, yeşil zeytinler ve keçi peyniri seçer."
      },
      {
        "id": 8,
        "eng": "We carry our own canvas tote bags to reduce plastic waste.",
        "tr": "Plastik atıkları azaltmak için kendi bez çantalarımızı taşırız."
      },
      {
        "id": 9,
        "eng": "Shopping at the local market directly supports working families.",
        "tr": "Yerel pazardan alışveriş yapmak çalışan aileleri doğrudan destekler."
      },
      {
        "id": 10,
        "eng": "The vegetables taste ten times fresher than ordinary supermarket goods.",
        "tr": "Sebzelerin tadı sıradan süpermarket ürünlerinden on kat daha tazedir."
      },
      {
        "id": 11,
        "eng": "We walk home with heavy bags and big smiles on our faces.",
        "tr": "Ağır çantalar ve yüzümüzde kocaman gülümsemelerle eve yürürüz."
      },
      {
        "id": 12,
        "eng": "The weekly market is the vibrant heartbeat of our community.",
        "tr": "Haftalık pazar topluluğumuzun canlı kalp atışıdır."
      }
    ],
    "questions": [
      {
        "q": "On what day does the market take place?",
        "options": [
          "Saturday morning",
          "Monday evening",
          "Sunday afternoon"
        ],
        "answer": 0
      },
      {
        "q": "What does the author taste from a farmer?",
        "options": [
          "An apple",
          "A slice of sweet cantaloupe melon",
          "Cheese"
        ],
        "answer": 1
      },
      {
        "q": "Why do they carry canvas tote bags?",
        "options": [
          "To look rich",
          "To reduce plastic waste",
          "Because it is required"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 28,
    "level": "A1",
    "title": "Feeding Swans at the Lake",
    "bgImage": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "There is a tranquil blue lake situated ten minutes from my house.",
        "tr": "Evimden on dakika uzaklıkta sakin mavi bir göl yer alıyor."
      },
      {
        "id": 2,
        "eng": "Weeping willow trees bend gracefully over the quiet shoreline.",
        "tr": "Salkımsöğüt ağaçları sessiz kıyı şeridinin üzerine zarifçe eğilir."
      },
      {
        "id": 3,
        "eng": "A pair of graceful white swans glide silently across the mirror surface.",
        "tr": "Bir çift zarif beyaz kuğu ayna yüzeyinde sessizce süzülür."
      },
      {
        "id": 4,
        "eng": "I bring a paper bag filled with cracked corn and grain.",
        "tr": "İçinde kırık mısır ve tahıl olan kağıt bir torba getiririm."
      },
      {
        "id": 5,
        "eng": "Park signs kindly explain that bread harms wild birds' digestion.",
        "tr": "Park tabelaları ekmeğin yabani kuşların sindirimine zarar verdiğini nazikçe açıklar."
      },
      {
        "id": 6,
        "eng": "I sit quietly on a large grey boulder near the water's edge.",
        "tr": "Suyun kenarındaki büyük gri bir kayanın üzerine sessizce otururum."
      },
      {
        "id": 7,
        "eng": "The elegant swans swim closer without any fear or hesitation.",
        "tr": "Zarif kuğular hiçbir korku ya da tereddüt olmadan daha yakına yüzerler."
      },
      {
        "id": 8,
        "eng": "I scatter a handful of grain across the shallow ripples.",
        "tr": "Sığ dalgacıkların üzerine bir avuç tahıl saçarım."
      },
      {
        "id": 9,
        "eng": "They dip their long curved necks gracefully to eat the seeds.",
        "tr": "Tohumları yemek için uzun kavisli boyunlarını zarifçe daldırırlar."
      },
      {
        "id": 10,
        "eng": "Gentle ripples spread outwards in perfect concentric circles.",
        "tr": "Hafif dalgacıklar mükemmel eşmerkezli halkalar halinde dışarı doğru yayılır."
      },
      {
        "id": 11,
        "eng": "Watching wild creatures in peace calms all modern worries.",
        "tr": "Vahşi canlıları huzur içinde izlemek tüm modern endişeleri yatıştırır."
      },
      {
        "id": 12,
        "eng": "Nature offers the purest therapy right at our doorstep.",
        "tr": "Doğa tam kapımızın önünde en saf terapiyi sunar."
      }
    ],
    "questions": [
      {
        "q": "What does the author feed the swans?",
        "options": [
          "Bread",
          "Cracked corn and grain",
          "Candy"
        ],
        "answer": 1
      },
      {
        "q": "Why shouldn't people feed bread to wild birds?",
        "options": [
          "Bread is expensive",
          "It harms their digestion",
          "Birds dislike bread"
        ],
        "answer": 1
      },
      {
        "q": "What trees grow along the lake shore?",
        "options": [
          "Pine trees",
          "Weeping willow trees",
          "Palm trees"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 29,
    "level": "A1",
    "title": "A Peaceful Sunday Afternoon",
    "bgImage": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Sunday is the day of rest, quiet reflection, and restoration.",
        "tr": "Pazar günü dinlenme, sessiz tefekkür ve yenilenme günüdür."
      },
      {
        "id": 2,
        "eng": "After a light lunch, the whole house settles into silence.",
        "tr": "Hafif bir öğle yemeğinin ardından bütün ev sessizliğe bürünür."
      },
      {
        "id": 3,
        "eng": "I curl up on the armchair with a warm plaid blanket.",
        "tr": "Sıcak ekose bir battaniyeyle koltuğa kıvrılırım."
      },
      {
        "id": 4,
        "eng": "A cup of chamomile tea steams gently on the wooden side table.",
        "tr": "Ahşap yan sehpanın üzerinde bir fincan papatya çayı hafifçe tüter."
      },
      {
        "id": 5,
        "eng": "Soft piano music plays in the background at a very low volume.",
        "tr": "Arka planda çok kısık bir sesle yumuşak piyano müziği çalar."
      },
      {
        "id": 6,
        "eng": "I open my illustrated novel and read three absorbing chapters.",
        "tr": "Resimli romanımı açar ve üç sürükleyici bölüm okurum."
      },
      {
        "id": 7,
        "eng": "Sunbeams slant across the wooden floor as afternoon advances.",
        "tr": "Öğleden sonra ilerledikçe güneş ışınları ahşap zemine eğik vurur."
      },
      {
        "id": 8,
        "eng": "My cat stretches lazily and curls beside my legs.",
        "tr": "Kedim tembelce gerinir ve bacaklarımın yanına kıvrılır."
      },
      {
        "id": 9,
        "eng": "There are no urgent deadlines, alarms, or buzzing notifications.",
        "tr": "Acil teslim tarihleri, alarmlar veya vızıldayan bildirimler yoktur."
      },
      {
        "id": 10,
        "eng": "I close my eyes for a twenty-minute revitalizing nap.",
        "tr": "Yirmi dakikalık canlandırıcı bir şekerleme için gözlerimi kapatırım."
      },
      {
        "id": 11,
        "eng": "Resting deeply is essential for mental clarity and health.",
        "tr": "Derinlemesine dinlenmek zihinsel berraklık ve sağlık için şarttır."
      },
      {
        "id": 12,
        "eng": "I wake up feeling thoroughly restored for the new week.",
        "tr": "Yeni hafta için tamamen yenilenmiş hissederek uyanırım."
      }
    ],
    "questions": [
      {
        "q": "What kind of tea is steaming on the table?",
        "options": [
          "Black tea",
          "Chamomile tea",
          "Green tea"
        ],
        "answer": 1
      },
      {
        "q": "What music plays in the background?",
        "options": [
          "Rock music",
          "Soft piano music",
          "Jazz"
        ],
        "answer": 1
      },
      {
        "q": "How long is the author's revitalizing nap?",
        "options": [
          "Ten minutes",
          "Twenty minutes",
          "Two hours"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 30,
    "level": "A1",
    "title": "Baking Chocolate Chip Cookies",
    "bgImage": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Baking warm cookies on a chilly evening is pure delight.",
        "tr": "Serin bir akşamda sıcak kurabiye pişirmek saf bir zevktir."
      },
      {
        "id": 2,
        "eng": "I preheat our oven to one hundred and eighty degrees.",
        "tr": "Fırınımızı yüz seksen dereceye önceden ısıtırım."
      },
      {
        "id": 3,
        "eng": "In a mixing bowl, I cream soft butter with brown sugar.",
        "tr": "Bir karıştırma kabında yumuşak tereyağını esmer şekerle krema haline getiririm."
      },
      {
        "id": 4,
        "eng": "I crack one farm-fresh egg and stir in vanilla extract.",
        "tr": "Çiftlikten bir taze yumurta kırar ve vanilya özütü eklerim."
      },
      {
        "id": 5,
        "eng": "I sift white flour, baking soda, and a pinch of salt.",
        "tr": "Beyaz un, kabartma tozu ve bir tutam tuzu elerim."
      },
      {
        "id": 6,
        "eng": "I fold in a generous cup of dark chocolate chips.",
        "tr": "Cömert bir fincan bitter çikolata parçasını hamura katarım."
      },
      {
        "id": 7,
        "eng": "The sweet dough comes together into a rich, fragrant mixture.",
        "tr": "Tatlı hamur zengin, mis kokulu bir karışım halinde birleşir."
      },
      {
        "id": 8,
        "eng": "I scoop rounded spoonfuls onto a lined baking tray.",
        "tr": "Yağlı kağıt serilmiş fırın tepsisine yuvarlak kaşık doluları koyarım."
      },
      {
        "id": 9,
        "eng": "They bake inside the oven for exactly twelve golden minutes.",
        "tr": "Tam on iki altın dakika boyunca fırının içinde pişerler."
      },
      {
        "id": 10,
        "eng": "The heavenly aroma of melted chocolate fills the entire house.",
        "tr": "Erimiş çikolatanın cennet gibi aroması bütün evi doldurur."
      },
      {
        "id": 11,
        "eng": "I let them cool slightly on a metal wire rack.",
        "tr": "Metal bir tel ızgara üzerinde biraz soğumalarına izin veririm."
      },
      {
        "id": 12,
        "eng": "We enjoy them warm with cold glasses of fresh milk.",
        "tr": "Onları soğuk bardak taze süt eşliğinde sıcacık yeriz."
      }
    ],
    "questions": [
      {
        "q": "What temperature is the oven preheated to?",
        "options": [
          "150 degrees",
          "180 degrees",
          "220 degrees"
        ],
        "answer": 1
      },
      {
        "q": "How long do the cookies bake in the oven?",
        "options": [
          "Five minutes",
          "Twelve minutes",
          "Thirty minutes"
        ],
        "answer": 1
      },
      {
        "q": "What drink is enjoyed with the warm cookies?",
        "options": [
          "Cold milk",
          "Hot coffee",
          "Orange juice"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 31,
    "level": "A2",
    "title": "A Weekend Camping Trip",
    "bgImage": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Last Saturday, my friends and I went camping in the mountains.",
        "tr": "Geçen cumartesi arkadaşlarım ve ben dağlarda kamp yapmaya gittik."
      },
      {
        "id": 2,
        "eng": "We packed warm clothes, flashlights, and sleeping bags.",
        "tr": "Sıcak giysiler, el fenerleri ve uyku tulumları hazırladık."
      },
      {
        "id": 3,
        "eng": "The forecast predicted sunny weather, so we were excited.",
        "tr": "Hava durumu güneşli bir hava öngördü, bu yüzden heyecanlıydık."
      },
      {
        "id": 4,
        "eng": "We drove for two hours to reach the campsite.",
        "tr": "Kamp alanına ulaşmak için iki saat araba sürdük."
      },
      {
        "id": 5,
        "eng": "First, we pitched our tents on dry grass.",
        "tr": "İlk olarak çadırlarımızı kuru çimlerin üzerine kurduk."
      },
      {
        "id": 6,
        "eng": "Setting up the tents took thirty minutes.",
        "tr": "Çadırları kurmak otuz dakika sürdü."
      },
      {
        "id": 7,
        "eng": "After resting, we hiked along a narrow forest trail.",
        "tr": "Dinlendikten sonra dar bir orman patikası boyunca yürüdük."
      },
      {
        "id": 8,
        "eng": "The trail led us to a small, hidden waterfall.",
        "tr": "Patika bizi küçük, gizli bir şelaleye götürdü."
      },
      {
        "id": 9,
        "eng": "The water was freezing, but we washed our faces.",
        "tr": "Su buz gibiydi ama yüzlerimizi yıkadık."
      },
      {
        "id": 10,
        "eng": "We took many pictures of the rocks and trees.",
        "tr": "Kayaların ve ağaçların birçok fotoğrafını çektik."
      },
      {
        "id": 11,
        "eng": "When evening arrived, we returned to our tents.",
        "tr": "Akşam geldiğinde çadırlarımıza geri döndük."
      },
      {
        "id": 12,
        "eng": "Gathering dry firewood was our next task.",
        "tr": "Kuru yakacak odun toplamak sıradaki görevimizdi."
      },
      {
        "id": 13,
        "eng": "My friend Alex built a warm campfire safely.",
        "tr": "Arkadaşım Alex güvenli bir şekilde sıcak bir kamp ateşi yaktı."
      },
      {
        "id": 14,
        "eng": "We grilled sausages and baked potatoes over the flames.",
        "tr": "Alevlerin üzerinde sosis ızgara yaptık ve patates pişirdik."
      },
      {
        "id": 15,
        "eng": "Food always tastes better when you eat outdoors.",
        "tr": "Dışarıda yediğinizde yemeklerin tadı her zaman daha güzeldir."
      },
      {
        "id": 16,
        "eng": "Later, we sat around the fire and shared stories.",
        "tr": "Daha sonra ateşin etrafında oturduk ve hikayeler paylaştık."
      },
      {
        "id": 17,
        "eng": "The night sky was filled with bright stars.",
        "tr": "Gece gökyüzü parlak yıldızlarla doluydu."
      },
      {
        "id": 18,
        "eng": "I slept well in my thick sleeping bag.",
        "tr": "Kalın uyku tulumumda iyi uyudum."
      },
      {
        "id": 19,
        "eng": "In the morning, we drank hot black coffee together.",
        "tr": "Sabah birlikte sıcak sade kahve içtik."
      },
      {
        "id": 20,
        "eng": "It was an unforgettable weekend in nature.",
        "tr": "Doğada unutulmaz bir hafta sonuydu."
      }
    ],
    "questions": [
      {
        "q": "Where did the friends go camping?",
        "options": [
          "At the beach",
          "In the mountains",
          "In the desert"
        ],
        "answer": 1
      },
      {
        "q": "What did they cook over the fire?",
        "options": [
          "Fish",
          "Sausages and potatoes",
          "Burgers"
        ],
        "answer": 1
      },
      {
        "q": "What filled the night sky?",
        "options": [
          "Rain clouds",
          "Bright stars",
          "Heavy smoke"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 32,
    "level": "A2",
    "title": "Moving to a New Apartment",
    "bgImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Last month, I moved into a new apartment.",
        "tr": "Geçen ay yeni bir daireye taşındım."
      },
      {
        "id": 2,
        "eng": "My old flat was too far from my workplace.",
        "tr": "Eski dairem iş yerimden çok uzaktı."
      },
      {
        "id": 3,
        "eng": "I spent two weeks searching for the right place online.",
        "tr": "İnternette doğru yeri aramak için iki hafta harcadım."
      },
      {
        "id": 4,
        "eng": "Finally, I found a bright flat on the third floor.",
        "tr": "Sonunda üçüncü katta aydınlık bir daire buldum."
      },
      {
        "id": 5,
        "eng": "The neighborhood is very quiet with small grocery stores.",
        "tr": "Mahalle küçük bakkallarla çok sessizdir."
      },
      {
        "id": 6,
        "eng": "Packing my belongings was the hardest part.",
        "tr": "Eşyalarımı paketlemek en zor kısımdı."
      },
      {
        "id": 7,
        "eng": "I bought twenty cardboard boxes and heavy tape.",
        "tr": "Yirmi karton kutu ve sağlam koli bandı aldım."
      },
      {
        "id": 8,
        "eng": "I wrapped my glass dishes carefully in old newspapers.",
        "tr": "Cam tabaklarımı eski gazetelere dikkatlice sardım."
      },
      {
        "id": 9,
        "eng": "My brother helped me carry the heavy furniture downstairs.",
        "tr": "Erkek kardeşim ağır mobilyaları aşağı taşımama yardım etti."
      },
      {
        "id": 10,
        "eng": "We rented a small white truck for the day.",
        "tr": "O gün için küçük beyaz bir kamyonet kiraladık."
      },
      {
        "id": 11,
        "eng": "The blue sofa was difficult to carry down the stairs.",
        "tr": "Mavi kanepeyi merdivenlerden aşağı taşımak zordu."
      },
      {
        "id": 12,
        "eng": "Fortunately, nothing was broken during the move.",
        "tr": "Neyse ki taşınma sırasında hiçbir şey kırılmadı."
      },
      {
        "id": 13,
        "eng": "We arrived at the new building in the afternoon.",
        "tr": "Öğleden sonra yeni binaya vardık."
      },
      {
        "id": 14,
        "eng": "My new living room gets plenty of direct sunlight.",
        "tr": "Yeni oturma odam bol miktarda doğrudan güneş ışığı alıyor."
      },
      {
        "id": 15,
        "eng": "I ordered two large pizzas to thank my brother.",
        "tr": "Kardeşime teşekkür etmek için iki büyük pizza sipariş ettim."
      },
      {
        "id": 16,
        "eng": "The next morning, my neighbor knocked on my door.",
        "tr": "Ertesi sabah komşum kapımı çaldı."
      },
      {
        "id": 17,
        "eng": "She brought fresh cookies and welcomed me warmly.",
        "tr": "Taze kurabiyeler getirdi ve beni sıcak bir şekilde karşıladı."
      },
      {
        "id": 18,
        "eng": "I spent the rest of the week unpacking boxes.",
        "tr": "Haftanın geri kalanını kutuları açarak geçirdim."
      },
      {
        "id": 19,
        "eng": "Now my apartment feels cozy and truly comfortable.",
        "tr": "Şimdi dairem samimi ve gerçekten rahat hissettiriyor."
      },
      {
        "id": 20,
        "eng": "Living closer to work saves me valuable time.",
        "tr": "İşe daha yakın yaşamak bana değerli zaman kazandırıyor."
      }
    ],
    "questions": [
      {
        "q": "Why did the author move?",
        "options": [
          "To live closer to work",
          "To live near parents",
          "To buy a car"
        ],
        "answer": 0
      },
      {
        "q": "What floor is the new flat on?",
        "options": [
          "First floor",
          "Second floor",
          "Third floor"
        ],
        "answer": 2
      },
      {
        "q": "What did the neighbor bring?",
        "options": [
          "Fresh cookies",
          "Hot coffee",
          "Flowers"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 33,
    "level": "A2",
    "title": "Visiting a Science Museum",
    "bgImage": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Yesterday, our school visited the capital science museum.",
        "tr": "Dün okulumuz başkent bilim müzesini ziyaret etti."
      },
      {
        "id": 2,
        "eng": "We traveled together on a large yellow bus.",
        "tr": "Büyük sarı bir otobüsle birlikte seyahat ettik."
      },
      {
        "id": 3,
        "eng": "The trip took one hour from our school.",
        "tr": "Yolculuk okulumuzdan bir saat sürdü."
      },
      {
        "id": 4,
        "eng": "When we entered, a friendly robot greeted all visitors.",
        "tr": "İçeri girdiğimizde dost canlısı bir robot tüm ziyaretçileri selamladı."
      },
      {
        "id": 5,
        "eng": "The robot answered simple questions in three languages.",
        "tr": "Robot üç dilde basit soruları yanıtladı."
      },
      {
        "id": 6,
        "eng": "First, our guide took us to the dinosaur hall.",
        "tr": "İlk olarak rehberimiz bizi dinozor salonuna götürdü."
      },
      {
        "id": 7,
        "eng": "We saw gigantic skeleton fossils of prehistoric creatures.",
        "tr": "Tarih öncesi yaratıkların devasa iskelet fosillerini gördük."
      },
      {
        "id": 8,
        "eng": "They looked terrifying yet fascinating.",
        "tr": "Korkutucu ama büyüleyici görünüyorlardı."
      },
      {
        "id": 9,
        "eng": "Next, we entered the dark space exploration room.",
        "tr": "Sonra karanlık uzay keşif odasına girdik."
      },
      {
        "id": 10,
        "eng": "There was a real astronaut suit on display.",
        "tr": "Sergilenen gerçek bir astronot giysisi vardı."
      },
      {
        "id": 11,
        "eng": "We learned how astronauts eat and sleep in zero gravity.",
        "tr": "Astronotların sıfır yerçekiminde nasıl yemek yiyip uyuduklarını öğrendik."
      },
      {
        "id": 12,
        "eng": "I even touched a real meteorite from outer space.",
        "tr": "Uzaydan gelen gerçek bir göktaşına bile dokundum."
      },
      {
        "id": 13,
        "eng": "It felt heavy, metallic, and surprisingly rough.",
        "tr": "Ağır, metalik ve şaşırtıcı derecede pürüzlü hissettirdi."
      },
      {
        "id": 14,
        "eng": "Then we visited the interactive physics laboratory.",
        "tr": "Sonra etkileşimli fizik laboratuvarını ziyaret ettik."
      },
      {
        "id": 15,
        "eng": "We pressed buttons to see electricity move through metals.",
        "tr": "Elektriğin metaller içinden geçişini görmek için düğmelere bastık."
      },
      {
        "id": 16,
        "eng": "At noon, we ate lunch in the museum café.",
        "tr": "Öğlen müze kafesinde öğle yemeği yedik."
      },
      {
        "id": 17,
        "eng": "After lunch, we watched a 3D movie about oceans.",
        "tr": "Öğle yemeğinden sonra okyanuslar hakkında bir 3D film izledik."
      },
      {
        "id": 18,
        "eng": "We felt like we were swimming with giant whales.",
        "tr": "Dev balinalarla yüzüyormuşuz gibi hissettik."
      },
      {
        "id": 19,
        "eng": "Before leaving, I bought a small toy robot.",
        "tr": "Ayrılmadan önce küçük bir oyuncak robot aldım."
      },
      {
        "id": 20,
        "eng": "Science proved to be much more exciting than expected.",
        "tr": "Bilim beklenenden çok daha heyecan verici çıktı."
      }
    ],
    "questions": [
      {
        "q": "What greeted visitors at the entrance?",
        "options": [
          "A dinosaur",
          "A friendly robot",
          "An astronaut"
        ],
        "answer": 1
      },
      {
        "q": "What did the author touch in the space room?",
        "options": [
          "A meteorite",
          "A rocket engine",
          "The Moon"
        ],
        "answer": 0
      },
      {
        "q": "What was the 3D movie about?",
        "options": [
          "Jungle animals",
          "Oceans and whales",
          "Volcanoes"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 34,
    "level": "A2",
    "title": "Planning a Birthday Surprise",
    "bgImage": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Next Friday is my best friend Lisa's birthday.",
        "tr": "Gelecek cuma en iyi arkadaşım Lisa'nın doğum günü."
      },
      {
        "id": 2,
        "eng": "We wanted to organize a secret surprise party.",
        "tr": "Gizli bir sürpriz parti organize etmek istedik."
      },
      {
        "id": 3,
        "eng": "We created a private chat group to plan everything.",
        "tr": "Her şeyi planlamak için özel bir sohbet grubu kurduk."
      },
      {
        "id": 4,
        "eng": "Everyone received a specific job for the party.",
        "tr": "Parti için herkes belirli bir görev aldı."
      },
      {
        "id": 5,
        "eng": "My responsibility was baking a chocolate cake.",
        "tr": "Benim sorumluluğum çikolatalı bir pasta pişirmekti."
      },
      {
        "id": 6,
        "eng": "I bought flour, organic eggs, dark cocoa, and strawberries.",
        "tr": "Un, organik yumurta, bitter kakao ve çilek aldım."
      },
      {
        "id": 7,
        "eng": "The cake baked for forty minutes and smelled wonderful.",
        "tr": "Pasta kırk dakika pişti ve harika koktu."
      },
      {
        "id": 8,
        "eng": "Meanwhile, David bought golden balloons and colorful banners.",
        "tr": "Bu sırada David altın sarısı balonlar ve renkli afişler aldı."
      },
      {
        "id": 9,
        "eng": "Emma agreed to keep Lisa busy all afternoon.",
        "tr": "Emma bütün öğleden sonra Lisa'yı oyalamayı kabul etti."
      },
      {
        "id": 10,
        "eng": "They went to the cinema to watch a comedy.",
        "tr": "Bir komedi izlemek için sinemaya gittiler."
      },
      {
        "id": 11,
        "eng": "At six o'clock, twelve guests arrived at my home.",
        "tr": "Saat altıda on iki davetli evime geldi."
      },
      {
        "id": 12,
        "eng": "We hung banners and prepared drinks on the table.",
        "tr": "Afişleri astık ve masaya içecekler hazırladık."
      },
      {
        "id": 13,
        "eng": "At seven, we turned off the living room lights.",
        "tr": "Yedide oturma odasının ışıklarını kapattık."
      },
      {
        "id": 14,
        "eng": "We hid behind the sofa and waited quietly.",
        "tr": "Kanepenin arkasına saklandık ve sessizce bekledik."
      },
      {
        "id": 15,
        "eng": "Lisa opened the front door and entered the room.",
        "tr": "Lisa ön kapıyı açtı ve odaya girdi."
      },
      {
        "id": 16,
        "eng": "We all jumped up and shouted happy birthday.",
        "tr": "Hepimiz ayağa fırladık ve iyi ki doğdun diye bağırdık."
      },
      {
        "id": 17,
        "eng": "Lisa was completely shocked and smiled with joy.",
        "tr": "Lisa tamamen şoke oldu ve sevinçle gülümsedi."
      },
      {
        "id": 18,
        "eng": "She blew out the candles and made a secret wish.",
        "tr": "Mumları üfledi ve gizli bir dilek tuttu."
      },
      {
        "id": 19,
        "eng": "We danced and played party games until midnight.",
        "tr": "Gece yarısına kadar dans ettik ve parti oyunları oynadık."
      },
      {
        "id": 20,
        "eng": "Keeping the secret was hard, but it was worth it.",
        "tr": "Sırrı saklamak zordu ama buna değdi."
      }
    ],
    "questions": [
      {
        "q": "What was the author's job for the party?",
        "options": [
          "Buying balloons",
          "Baking the cake",
          "Cleaning"
        ],
        "answer": 1
      },
      {
        "q": "How did Emma keep Lisa busy?",
        "options": [
          "Going to the cinema",
          "Shopping",
          "Studying"
        ],
        "answer": 0
      },
      {
        "q": "Where did the friends hide?",
        "options": [
          "Behind the sofa",
          "In the kitchen",
          "In the garden"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 35,
    "level": "A2",
    "title": "Learning to Drive a Car",
    "bgImage": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Learning to drive was always my biggest personal goal.",
        "tr": "Araba kullanmayı öğrenmek her zaman en büyük kişisel hedefimdi."
      },
      {
        "id": 2,
        "eng": "When I turned twenty, I joined a driving academy.",
        "tr": "Yirmi yaşıma bastığımda bir sürücü kursuna katıldım."
      },
      {
        "id": 3,
        "eng": "First, I attended theory classes for two weeks.",
        "tr": "İlk olarak iki hafta boyunca teorik derslere katıldım."
      },
      {
        "id": 4,
        "eng": "We studied traffic signs and speed limits carefully.",
        "tr": "Trafik işaretlerini ve hız sınırlarını dikkatle çalıştık."
      },
      {
        "id": 5,
        "eng": "After passing the written test, practical lessons began.",
        "tr": "Yazılı sınavı geçtikten sonra direksiyon dersleri başladı."
      },
      {
        "id": 6,
        "eng": "On the first day, my hands were sweating with anxiety.",
        "tr": "İlk gün ellerim endişeden terliyordu."
      },
      {
        "id": 7,
        "eng": "My instructor, Mr. Davis, was very patient and encouraging.",
        "tr": "Eğitmenim Bay Davis çok sabırlı ve cesaret vericiydi."
      },
      {
        "id": 8,
        "eng": "He showed me how to adjust the driver's seat.",
        "tr": "Bana sürücü koltuğunu nasıl ayarlayacağımı gösterdi."
      },
      {
        "id": 9,
        "eng": "Then I checked the rear mirrors and fastened my seatbelt.",
        "tr": "Sonra dikiz aynalarını kontrol ettim ve emniyet kemerimi bağladım."
      },
      {
        "id": 10,
        "eng": "Using the clutch smoothly was very hard at first.",
        "tr": "Debriyajı sarsmadan kullanmak ilk başta çok zordu."
      },
      {
        "id": 11,
        "eng": "The engine stopped twice, but I tried again calmly.",
        "tr": "Motor iki kez stop etti ama sakince tekrar denedim."
      },
      {
        "id": 12,
        "eng": "Soon, we moved from an empty parking lot into real traffic.",
        "tr": "Kısa süre sonra boş bir park yerinden gerçek trafiğe geçtik."
      },
      {
        "id": 13,
        "eng": "Driving among trucks and buses required fast concentration.",
        "tr": "Kamyonlar ve otobüsler arasında araç sürmek hızlı konsantrasyon gerektiriyordu."
      },
      {
        "id": 14,
        "eng": "Parallel parking between two vehicles was the hardest maneuver.",
        "tr": "İki araç arasına paralel park etmek en zor manevraydı."
      },
      {
        "id": 15,
        "eng": "I practiced parking every afternoon until I succeeded.",
        "tr": "Başarana kadar her öğleden sonra park etme pratiği yaptım."
      },
      {
        "id": 16,
        "eng": "Yesterday was the day of my official driving test.",
        "tr": "Dün resmi direksiyon sınavımın günüydü."
      },
      {
        "id": 17,
        "eng": "The examiner sat quietly next to me with a clipboard.",
        "tr": "Sınav görevlisi elinde bir not tahtasıyla yanımda sessizce oturdu."
      },
      {
        "id": 18,
        "eng": "I remembered all the safety rules and stayed calm.",
        "tr": "Tüm güvenlik kurallarını hatırladım ve sakin kaldım."
      },
      {
        "id": 19,
        "eng": "At the end, he smiled and said I passed.",
        "tr": "Sonunda gülümsedi ve geçtiğimi söyledi."
      },
      {
        "id": 20,
        "eng": "Holding my driving license gives me wonderful freedom.",
        "tr": "Ehliyetimi tutmak bana harika bir özgürlük veriyor."
      }
    ],
    "questions": [
      {
        "q": "How long did theory classes take?",
        "options": [
          "Two days",
          "Two weeks",
          "One month"
        ],
        "answer": 1
      },
      {
        "q": "What was the hardest maneuver?",
        "options": [
          "Parallel parking",
          "Turning right",
          "Stopping"
        ],
        "answer": 0
      },
      {
        "q": "How did the author feel on the first day?",
        "options": [
          "Bored",
          "Nervous and sweating",
          "Angry"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 36,
    "level": "A2",
    "title": "Preparing for a Job Interview",
    "bgImage": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Last Tuesday, I received an invitation for an exciting job interview.",
        "tr": "Geçen salı heyecan verici bir iş görüşmesi için bir davet aldım."
      },
      {
        "id": 2,
        "eng": "The position was for a junior customer support specialist at a tech company.",
        "tr": "Pozisyon, bir teknoloji şirketinde kıdemsiz müşteri destek uzmanı içindi."
      },
      {
        "id": 3,
        "eng": "I spent three days preparing thoroughly to make a positive impression.",
        "tr": "Olumlu bir izlenim bırakmak için üç gün boyunca kapsamlı bir şekilde hazırlandım."
      },
      {
        "id": 4,
        "eng": "First, I researched the company's core mission, products, and recent accomplishments.",
        "tr": "İlk önce şirketin temel misyonunu, ürünlerini ve son başarılarını araştırdım."
      },
      {
        "id": 5,
        "eng": "I printed three clean copies of my updated curriculum vitae on thick paper.",
        "tr": "Güncellenmiş özgeçmişimin üç temiz kopyasını kalın kağıda yazdırdım."
      },
      {
        "id": 6,
        "eng": "I practiced answering common behavioral questions in front of a mirror.",
        "tr": "Bir aynanın karşısında yaygın davranışsal soruları yanıtlamanın provasını yaptım."
      },
      {
        "id": 7,
        "eng": "I ironed my formal navy blue blazer and polished my black leather shoes.",
        "tr": "Resmi lacivert blazer ceketimi ütüledim ve siyah deri ayakkabılarımı boyadım."
      },
      {
        "id": 8,
        "eng": "On the interview morning, I arrived twenty minutes early to calm my nerves.",
        "tr": "Görüşme sabahı heyecanımı yatıştırmak için yirmi dakika erken vardım."
      },
      {
        "id": 9,
        "eng": "The hiring managers greeted me with professional warmth and a firm handshake.",
        "tr": "İşe alım yöneticileri beni profesyonel bir sıcaklık ve sıkı bir el sıkışmayla karşıladı."
      },
      {
        "id": 10,
        "eng": "I answered every inquiry clearly and explained my past team experiences.",
        "tr": "Her soruyu net bir şekilde yanıtladım ve geçmiş takım deneyimlerimi anlattım."
      },
      {
        "id": 11,
        "eng": "I also asked thoughtful questions about their workplace culture and training.",
        "tr": "Ayrıca çalışma yeri kültürleri ve eğitimleri hakkında düşünceli sorular sordum."
      },
      {
        "id": 12,
        "eng": "Preparation builds genuine confidence when facing career opportunities.",
        "tr": "Hazırlık kariyer fırsatlarıyla yüzleşirken gerçek bir özgüven oluşturur."
      }
    ],
    "questions": [
      {
        "q": "What position did the author apply for?",
        "options": [
          "Software engineer",
          "Junior customer support specialist",
          "Sales director"
        ],
        "answer": 1
      },
      {
        "q": "How early did the author arrive for the interview?",
        "options": [
          "Five minutes late",
          "Twenty minutes early",
          "One hour early"
        ],
        "answer": 1
      },
      {
        "q": "What did the author practice in front of a mirror?",
        "options": [
          "Singing songs",
          "Answering common interview questions",
          "Dancing"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 37,
    "level": "A2",
    "title": "Adopting a Puppy from the Animal Shelter",
    "bgImage": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Deciding to adopt a rescued pet was one of our family's best decisions.",
        "tr": "Kurtarılmış bir evcil hayvan sahiplenmeye karar vermek ailemizin en iyi kararlarından biriydi."
      },
      {
        "id": 2,
        "eng": "We visited the local animal welfare shelter on a sunny Saturday afternoon.",
        "tr": "Güneşli bir cumartesi öğleden sonrasında yerel hayvan refahı barınağını ziyaret ettik."
      },
      {
        "id": 3,
        "eng": "Dozens of hopeful dogs barked cheerfully from behind their clean enclosures.",
        "tr": "Düzinelerce umut dolu köpek temiz bölmelerinin arkasından neşeyle havladı."
      },
      {
        "id": 4,
        "eng": "In the quietest kennel sat a little golden puppy with soulful brown eyes.",
        "tr": "En sessiz kulübede duygulu kahverengi gözleri olan küçük altın sarısı bir yavru oturuyordu."
      },
      {
        "id": 5,
        "eng": "He wagged his tail gently and pressed his wet black nose against the fence.",
        "tr": "Kuyruğunu nazikçe salladı ve ıslak siyah burnunu tele bastırdı."
      },
      {
        "id": 6,
        "eng": "The shelter volunteer explained that he had been rescued from the rainy streets.",
        "tr": "Barınak gönüllüsü onun yağmurlu sokaklardan kurtarıldığını açıkladı."
      },
      {
        "id": 7,
        "eng": "We took him to the outdoor grass play area to see how he interacted with us.",
        "tr": "Bizimle nasıl etkileşim kurduğunu görmek için onu açık hava çim oyun alanına götürdük."
      },
      {
        "id": 8,
        "eng": "He immediately ran into my arms and showered my face with playful puppy kisses.",
        "tr": "Hemen kollarıma koştu ve yüzümü oyuncu yavru köpek öpücüklerine boğdu."
      },
      {
        "id": 9,
        "eng": "We completed the adoption paperwork and purchased a collar, leash, and dog bed.",
        "tr": "Sahiplenme evraklarını tamamladık ve bir tasma, kayış ve köpek yatağı satın aldık."
      },
      {
        "id": 10,
        "eng": "We named him Milo because of his soft golden fur and gentle demeanor.",
        "tr": "Yumuşak altın rengi kürkü ve nazik tavrı nedeniyle ona Milo adını verdik."
      },
      {
        "id": 11,
        "eng": "Giving a homeless animal a loving home transforms both human and pet lives.",
        "tr": "Evsiz bir hayvana sevgi dolu bir yuva vermek hem insanın hem de hayvanın hayatını dönüştürür."
      },
      {
        "id": 12,
        "eng": "Milo brought boundless joy, warmth, and daily laughter into our household.",
        "tr": "Milo hanemize sınırsız neşe, sıcaklık ve günlük kahkahalar getirdi."
      }
    ],
    "questions": [
      {
        "q": "Where was the puppy rescued from?",
        "options": [
          "A pet store",
          "The rainy streets",
          "A farm"
        ],
        "answer": 1
      },
      {
        "q": "What name did the family give to the puppy?",
        "options": [
          "Max",
          "Milo",
          "Rocky"
        ],
        "answer": 1
      },
      {
        "q": "What items did they purchase for the new puppy?",
        "options": [
          "A cage",
          "A collar, leash, and bed",
          "Toys only"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 38,
    "level": "A2",
    "title": "A Scenic Train Journey to the Coast",
    "bgImage": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Traveling by modern passenger train is much more relaxing than flying.",
        "tr": "Modern yolcu treniyle seyahat etmek uçmaktan çok daha rahatlatıcıdır."
      },
      {
        "id": 2,
        "eng": "Last weekend, my partner and I boarded the early morning express to the coast.",
        "tr": "Geçen hafta sonu partnerim ve ben sahile giden sabah erken ekspresine bindik."
      },
      {
        "id": 3,
        "eng": "The train departed smoothly from the historic grand terminal at seven sharp.",
        "tr": "Tren tarihi büyük terminalden tam saat yedide sarsıntısız bir şekilde hareket etti."
      },
      {
        "id": 4,
        "eng": "We settled into comfortable plush seats next to a panoramic glass window.",
        "tr": "Panoramik cam bir pencerenin yanındaki rahat pelüş koltuklara yerleştik."
      },
      {
        "id": 5,
        "eng": "As the train gathered speed, urban apartments gave way to misty green meadows.",
        "tr": "Tren hızlandıkça kentsel apartmanlar yerini sisli yeşil çayırlara bıraktı."
      },
      {
        "id": 6,
        "eng": "We passed through winding mountain tunnels and crossed sparkling rocky rivers.",
        "tr": "Kıvrımlı dağ tünellerinden geçtik ve parıldayan kayalık nehirleri aştık."
      },
      {
        "id": 7,
        "eng": "The conductor walked down the carpeted aisle to stamp our digital tickets.",
        "tr": "Kondüktör dijital biletlerimizi damgalamak için halı kaplı koridorda yürüdü."
      },
      {
        "id": 8,
        "eng": "We bought freshly brewed espresso and buttery croissants from the buffet car.",
        "tr": "Büfe vagonundan taze demlenmiş espresso ve tereyağlı kruvasan satın aldık."
      },
      {
        "id": 9,
        "eng": "After two scenic hours, the deep blue horizon of the ocean emerged.",
        "tr": "İki manzaralı saatin ardından okyanusun koyu mavi ufku ortaya çıktı."
      },
      {
        "id": 10,
        "eng": "Seagulls soared overhead as the train slowed down along the seaside platform.",
        "tr": "Tren sahil peronu boyunca yavaşlarken martılar tepede süzüldü."
      },
      {
        "id": 11,
        "eng": "Train journeys allow travelers to appreciate the changing landscape peacefully.",
        "tr": "Tren yolculukları gezginlerin değişen manzarayı huzur içinde takdir etmelerini sağlar."
      },
      {
        "id": 12,
        "eng": "We stepped onto the sunny coastal platform ready for our holiday.",
        "tr": "Tatilimize hazır bir şekilde güneşli sahil peronuna adım attık."
      }
    ],
    "questions": [
      {
        "q": "What time did the train depart from the terminal?",
        "options": [
          "At six",
          "At seven sharp",
          "At nine"
        ],
        "answer": 1
      },
      {
        "q": "What did they buy from the buffet car?",
        "options": [
          "Pizza",
          "Espresso and croissants",
          "Sandwiches"
        ],
        "answer": 1
      },
      {
        "q": "What birds soared overhead near the coast?",
        "options": [
          "Pigeons",
          "Seagulls",
          "Eagles"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 39,
    "level": "A2",
    "title": "Volunteering at the Community Garden",
    "bgImage": "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a31?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Community gardens are wonderful green spaces that bring urban neighbors together.",
        "tr": "Topluluk bahçeleri şehir komşularını bir araya getiren harika yeşil alanlardır."
      },
      {
        "id": 2,
        "eng": "Every Saturday, I volunteer at our neighborhood's collective organic plot.",
        "tr": "Her cumartesi mahallemizin ortak organik arazisinde gönüllü olarak çalışırım."
      },
      {
        "id": 3,
        "eng": "The project transformed an abandoned concrete parking lot into a blooming oasis.",
        "tr": "Proje terk edilmiş beton bir otoparkı çiçek açan bir vahaya dönüştürdü."
      },
      {
        "id": 4,
        "eng": "We built raised wooden beds filled with nutrient-rich compost and black soil.",
        "tr": "Besin açısından zengin kompost ve kara toprakla dolu yükseltilmiş ahşap yataklar inşa ettik."
      },
      {
        "id": 5,
        "eng": "Today, we harvested several wicker baskets of heirloom tomatoes and bell peppers.",
        "tr": "Bugün birkaç hasır sepet dolusu yerli tohum domates ve dolmalık biber hasat ettik."
      },
      {
        "id": 6,
        "eng": "Older experienced gardeners teach teenagers how to prune fruit bushes properly.",
        "tr": "Daha yaşlı ve tecrübeli bahçıvanlar gençlere meyve çalılarını düzgün budamayı öğretir."
      },
      {
        "id": 7,
        "eng": "We set up rain barrels to collect stormwater for eco-friendly irrigation.",
        "tr": "Çevre dostu sulama amacıyla yağmur suyunu toplamak için yağmur varilleri kurduk."
      },
      {
        "id": 8,
        "eng": "A wooden beehive at the corner produces organic wildflower honey each autumn.",
        "tr": "Köşedeki ahşap bir arı kovanı her sonbaharda organik kır çiçeği balı üretir."
      },
      {
        "id": 9,
        "eng": "Half of our fresh harvest is donated to the local community food pantry.",
        "tr": "Taze hasadımızın yarısı yerel toplum aşevine bağışlanır."
      },
      {
        "id": 10,
        "eng": "Working together outdoors creates deep connections among diverse residents.",
        "tr": "Açık havada birlikte çalışmak farklı mahalle sakinleri arasında derin bağlar kurar."
      },
      {
        "id": 11,
        "eng": "It is rewarding to watch tiny seeds turn into nutritious food for neighbors.",
        "tr": "Minik tohumların komşular için besleyici gıdaya dönüşmesini izlemek çok tatmin edicidir."
      },
      {
        "id": 12,
        "eng": "Urban agriculture proves that nature can thrive even inside concrete cities.",
        "tr": "Kentsel tarım doğanın beton şehirlerin içinde bile serpilebileceğini kanıtlar."
      }
    ],
    "questions": [
      {
        "q": "What was the garden site before the project?",
        "options": [
          "A park",
          "An abandoned concrete parking lot",
          "A farm"
        ],
        "answer": 1
      },
      {
        "q": "Where is half of the harvested food donated?",
        "options": [
          "To a supermarket",
          "To the local community food pantry",
          "Sold online"
        ],
        "answer": 1
      },
      {
        "q": "How do they collect stormwater for irrigation?",
        "options": [
          "Using buckets",
          "Using rain barrels",
          "From a river"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 40,
    "level": "A2",
    "title": "Restoring an Old Bicycle",
    "bgImage": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Last month, I discovered an old steel bicycle covered in rust in my uncle's shed.",
        "tr": "Geçen ay amcamın barakasında pasla kaplı eski çelik bir bisiklet keşfettim."
      },
      {
        "id": 2,
        "eng": "Although its tires were flat and chain seized, the vintage frame was solid.",
        "tr": "Lastikleri inik ve zinciri sıkışmış olmasına rağmen klasik kadrosu sağlamdı."
      },
      {
        "id": 3,
        "eng": "I decided to restore it completely instead of purchasing an expensive new one.",
        "tr": "Pahalı yeni bir tane satın almak yerine onu tamamen restore etmeye karar verdim."
      },
      {
        "id": 4,
        "eng": "I disassembled all components carefully using metric wrenches and screwdrivers.",
        "tr": "Metrik anahtarlar ve tornavidalar kullanarak tüm bileşenleri dikkatlice söktüm."
      },
      {
        "id": 5,
        "eng": "I scrubbed the rusty steel frame with steel wool and anti-corrosion spray.",
        "tr": "Paslı çelik kadroyu çelik yünü ve korozyon önleyici sprey ile ovaladım."
      },
      {
        "id": 6,
        "eng": "I applied two coats of British racing green paint and a shiny clear coat.",
        "tr": "İki kat İngiliz yarış yeşili boya ve parlak bir vernik uyguladım."
      },
      {
        "id": 7,
        "eng": "I ordered a brand-new stainless steel chain, rubber brake pads, and cables.",
        "tr": "Yepyeni bir paslanmaz çelik zincir, kauçuk fren balataları ve teller sipariş ettim."
      },
      {
        "id": 8,
        "eng": "I fitted a classic leather saddle and brown handlebar tape for vintage style.",
        "tr": "Klasik bir tarz için klasik bir deri sele ve kahverengi gidon bandı taktım."
      },
      {
        "id": 9,
        "eng": "After three weekends of patient mechanical work, the bicycle was fully reborn.",
        "tr": "Üç hafta sonu süren sabırlı mekanik çalışmanın ardından bisiklet tamamen yeniden doğdu."
      },
      {
        "id": 10,
        "eng": "Taking my first test ride down the paved park boulevard was exhilarating.",
        "tr": "Park bulvarında ilk deneme sürüşüme çıkmak heyecan vericiydi."
      },
      {
        "id": 11,
        "eng": "Repairing vintage machinery gives objects a second life and reduces waste.",
        "tr": "Eski makineleri tamir etmek nesnelere ikinci bir hayat verir ve israfı azaltır."
      },
      {
        "id": 12,
        "eng": "I feel proud every time someone stops to admire my handmade restoration.",
        "tr": "Biri el yapımı restorasyonumu takdir etmek için durduğunda gurur duyuyorum."
      }
    ],
    "questions": [
      {
        "q": "Where did the author find the old bicycle?",
        "options": [
          "At a shop",
          "In an uncle's shed",
          "In the street"
        ],
        "answer": 1
      },
      {
        "q": "What color paint was applied to the frame?",
        "options": [
          "Bright red",
          "British racing green",
          "Yellow"
        ],
        "answer": 1
      },
      {
        "q": "How long did the restoration take?",
        "options": [
          "One day",
          "Three weekends",
          "A full year"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 41,
    "level": "A2",
    "title": "Hosting a Traditional Sunday Brunch",
    "bgImage": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Brunch is the ultimate weekend celebration of good food and leisure.",
        "tr": "Brunch, iyi yemek ve keyfin nihai hafta sonu kutlamasıdır."
      },
      {
        "id": 2,
        "eng": "Last Sunday, I invited six close friends over to my flat for a lavish spread.",
        "tr": "Geçen pazar altı yakın arkadaşımı zengin bir sofra için daireme davet ettim."
      },
      {
        "id": 3,
        "eng": "I woke up early to brew a pot of aromatic Turkish tea in a double teapot.",
        "tr": "Çift çaydanlıkta aromatik Türk çayı demlemek için erken uyandım."
      },
      {
        "id": 4,
        "eng": "I arranged several ceramic dishes with kalamata olives, aged feta, and walnuts.",
        "tr": "Kalamata zeytini, yıllanmış beyaz peynir ve ceviz içeren birkaç seramik tabak düzenledim."
      },
      {
        "id": 5,
        "eng": "In a cast-iron skillet, I cooked menemen with ripe tomatoes and green peppers.",
        "tr": "Döküm bir tavada olgun domates ve yeşil biberle menemen pişirdim."
      },
      {
        "id": 6,
        "eng": "Fresh simit with toasted sesame seeds arrived warm from the local bakery.",
        "tr": "Kavrulmuş susamlı taze simit yerel fırından sıcacık geldi."
      },
      {
        "id": 7,
        "eng": "We also served homemade blackberry jam, blossom honey, and clotted cream.",
        "tr": "Ayrıca ev yapımı böğürtlen reçeli, çiçek balı ve kaymak ikram ettik."
      },
      {
        "id": 8,
        "eng": "My friends brought fresh fruit smoothies and gluten-free oat pancakes.",
        "tr": "Arkadaşlarım taze meyve smoothieleri ve glütensiz yulaf krepleri getirdi."
      },
      {
        "id": 9,
        "eng": "We sat around the sunlit dining table chatting and laughing for over three hours.",
        "tr": "Güneş alan yemek masasının etrafında üç saatten fazla sohbet edip güldük."
      },
      {
        "id": 10,
        "eng": "Slow shared meals strengthen friendships and allow genuine decompression.",
        "tr": "Yavaş ve paylaşılan yemekler dostlukları güçlendirir ve gerçek bir rahatlama sağlar."
      },
      {
        "id": 11,
        "eng": "Everyone insisted on helping wash dishes and dry glasses afterwards.",
        "tr": "Sonrasında herkes bulaşıkları yıkamaya ve bardakları kurulamaya yardım etmekte ısrar etti."
      },
      {
        "id": 12,
        "eng": "Hosting loved ones is one of the greatest pleasures of modern adulthood.",
        "tr": "Sevdiklerini ağırlamak modern yetişkinliğin en büyük zevklerinden biridir."
      }
    ],
    "questions": [
      {
        "q": "What egg dish was cooked in the cast-iron skillet?",
        "options": [
          "Omelet",
          "Menemen with tomatoes and peppers",
          "Scrambled eggs"
        ],
        "answer": 1
      },
      {
        "q": "How long did the friends chat around the table?",
        "options": [
          "Thirty minutes",
          "Over three hours",
          "All day"
        ],
        "answer": 1
      },
      {
        "q": "What fresh pastry came warm from the bakery?",
        "options": [
          "Simit with sesame seeds",
          "Croissants",
          "Muffins"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 42,
    "level": "A2",
    "title": "Exploring an Art Exhibition Downtown",
    "bgImage": "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Visiting modern art museums expands imagination and stimulates the mind.",
        "tr": "Modern sanat müzelerini ziyaret etmek hayal gücünü genişletir ve zihni uyarır."
      },
      {
        "id": 2,
        "eng": "On Friday evening, I visited a contemporary exhibition held in a converted warehouse.",
        "tr": "Cuma akşamı dönüştürülmüş bir depoda düzenlenen çağdaş bir sergiyi ziyaret ettim."
      },
      {
        "id": 3,
        "eng": "The gallery featured striking oil canvases by emerging international painters.",
        "tr": "Galeri gelişmekte olan uluslararası ressamların çarpıcı yağlı boya tuvallerini sergiledi."
      },
      {
        "id": 4,
        "eng": "I rented an audio guide that provided context about the painter's techniques.",
        "tr": "Ressamın teknikleri hakkında bağlam sağlayan bir sesli rehber kiraladım."
      },
      {
        "id": 5,
        "eng": "One massive painting depicted a futuristic city illuminated by neon lights.",
        "tr": "Büyük bir tablo neon ışıklarıyla aydınlatılmış fütüristik bir şehri tasvir ediyordu."
      },
      {
        "id": 6,
        "eng": "The bold contrast between deep shadow and vibrant yellow drew crowds.",
        "tr": "Derin gölge ile canlı sarı arasındaki cesur kontrast kalabalıkları çekti."
      },
      {
        "id": 7,
        "eng": "In the central atrium, a kinetic metal sculpture moved gently with the airflow.",
        "tr": "Merkez atriyumda kinetik bir metal heykel hava akımıyla nazikçe hareket ediyordu."
      },
      {
        "id": 8,
        "eng": "Visitors stood in silent contemplation admiring the delicate balance.",
        "tr": "Ziyaretçiler hassas dengeye hayran kalarak sessiz bir tefekkür içinde durdular."
      },
      {
        "id": 9,
        "eng": "I took notes in my sketchbook about color palettes and spatial harmony.",
        "tr": "Renk paletleri ve mekânsal uyum hakkında eskiz defterime notlar aldım."
      },
      {
        "id": 10,
        "eng": "Afterwards, I met a few art students at the gallery cafe for black coffee.",
        "tr": "Sonrasında galeri kafesinde sade kahve için birkaç sanat öğrencisiyle buluştum."
      },
      {
        "id": 11,
        "eng": "Discussing subjective interpretations is half the joy of viewing art.",
        "tr": "Öznel yorumları tartışmak sanat izleme keyfinin yarısıdır."
      },
      {
        "id": 12,
        "eng": "Cultural experiences provide fresh inspiration for everyday life.",
        "tr": "Kültürel deneyimler günlük yaşam için taze bir ilham kaynağı sağlar."
      }
    ],
    "questions": [
      {
        "q": "Where was the modern exhibition hosted?",
        "options": [
          "In a castle",
          "In a converted warehouse",
          "In an outdoor tent"
        ],
        "answer": 1
      },
      {
        "q": "What was in the central atrium?",
        "options": [
          "A fountain",
          "A kinetic metal sculpture",
          "A flower bed"
        ],
        "answer": 1
      },
      {
        "q": "What did the author use to learn about the paintings?",
        "options": [
          "A catalog",
          "An audio guide",
          "A video tape"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 43,
    "level": "A2",
    "title": "Navigating a Busy Airport Terminal",
    "bgImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "International airports can be overwhelming, yet fascinating hubs of transit.",
        "tr": "Uluslararası havalimanları bunaltıcı ama yine de büyüleyici transit merkezleri olabilir."
      },
      {
        "id": 2,
        "eng": "Last month, I flew overseas alone for the first time to attend a conference.",
        "tr": "Geçen ay bir konferansa katılmak için ilk kez tek başıma yurt dışına uçtum."
      },
      {
        "id": 3,
        "eng": "I arrived at terminal two three full hours prior to international boarding.",
        "tr": "Uluslararası binişten tam üç saat önce terminal ikiye vardım."
      },
      {
        "id": 4,
        "eng": "I printed my boarding pass and baggage tag at the automated check-in kiosk.",
        "tr": "Otomatik check-in kioskunda biniş kartımı ve bagaj etiketimi yazdırdım."
      },
      {
        "id": 5,
        "eng": "I dropped my heavy suitcase onto the conveyor belt at the baggage counter.",
        "tr": "Bavulumu bagaj kontuarındaki konveyör bandına bıraktım."
      },
      {
        "id": 6,
        "eng": "Passing through security required removing laptops and metallic accessories.",
        "tr": "Güvenlikten geçmek dizüstü bilgisayarları ve metalik aksesuarları çıkarmayı gerektirdi."
      },
      {
        "id": 7,
        "eng": "Once past passport control, the expansive duty-free hall opened up.",
        "tr": "Pasaport kontrolünü geçtikten sonra geniş gümrüksüz satış salonu açıldı."
      },
      {
        "id": 8,
        "eng": "Digital departure screens updated gate information in five different languages.",
        "tr": "Dijital kalkış ekranları kapı bilgilerini beş farklı dilde güncelledi."
      },
      {
        "id": 9,
        "eng": "I located gate B24 and charged my smartphone near a charging station.",
        "tr": "B24 kapısını buldum ve şarj istasyonunun yanında akıllı telefonumu şarj ettim."
      },
      {
        "id": 10,
        "eng": "Watching jumbo planes take off into the cloudy sky was mesmerizing.",
        "tr": "Büyük uçakların bulutlu gökyüzüne havalanışını izlemek büyüleyiciydi."
      },
      {
        "id": 11,
        "eng": "The gate agent announced final boarding calls for our scheduled flight.",
        "tr": "Kapı görevlisi tarifeli uçuşumuz için son biniş çağrılarını anons etti."
      },
      {
        "id": 12,
        "eng": "Air travel bridges distances and connects people across continents.",
        "tr": "Hava yolculuğu mesafeleri köprüler ve kıtalar arasındaki insanları birbirine bağlar."
      }
    ],
    "questions": [
      {
        "q": "How early did the traveler arrive at the terminal?",
        "options": [
          "One hour",
          "Three full hours",
          "Ten minutes"
        ],
        "answer": 1
      },
      {
        "q": "What was the assigned boarding gate?",
        "options": [
          "Gate A1",
          "Gate B24",
          "Gate C10"
        ],
        "answer": 1
      },
      {
        "q": "Where was the heavy suitcase placed?",
        "options": [
          "On the seat",
          "On the conveyor belt at the baggage counter",
          "Carried on plane"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 44,
    "level": "A2",
    "title": "Staying at an Eco-Friendly Hotel",
    "bgImage": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Sustainable tourism is growing rapidly as travelers seek greener choices.",
        "tr": "Gezginler daha yeşil seçenekler aradıkça sürdürülebilir turizm hızla büyüyor."
      },
      {
        "id": 2,
        "eng": "During our recent holiday, we booked a boutique eco-lodge nestled in green hills.",
        "tr": "Son tatilimizde yeşil tepeler arasına gizlenmiş butik bir eko-otelde rezervasyon yaptık."
      },
      {
        "id": 3,
        "eng": "The entire building was constructed with reclaimed cedar wood and local stone.",
        "tr": "Tüm bina geri dönüştürülmüş sedir ağacı ve yerel taşla inşa edilmişti."
      },
      {
        "id": 4,
        "eng": "Rooftop solar photovoltaic panels generated all the electrical power required.",
        "tr": "Çatıdaki güneş fotovoltaik panelleri gereken tüm elektrik enerjisini üretti."
      },
      {
        "id": 5,
        "eng": "The rooms had large triple-glazed windows that insulated naturally against heat.",
        "tr": "Odalarda sıcağa karşı doğal olarak yalıtım sağlayan büyük üç camlı pencereler vardı."
      },
      {
        "id": 6,
        "eng": "Bathrooms offered refillable glass bottles containing organic olive oil soaps.",
        "tr": "Banyolar organik zeytinyağı sabunları içeren yeniden doldurulabilir cam şişeler sunuyordu."
      },
      {
        "id": 7,
        "eng": "No single-use plastic bottles or disposable toothbrushes were found on site.",
        "tr": "Tesis içinde tek kullanımlık plastik şişeler veya tek kullanımlık diş fırçaları bulunmuyordu."
      },
      {
        "id": 8,
        "eng": "The lodge restaurant served a seasonal menu sourced from farms within ten miles.",
        "tr": "Otelin restoranı on mil içindeki çiftliklerden temin edilen mevsimlik bir menü sundu."
      },
      {
        "id": 9,
        "eng": "A natural saltwater pool was filtered with reeds instead of harsh chemicals.",
        "tr": "Doğal bir tuzlu su havuzu sert kimyasallar yerine sazlıklarla filtreleniyordu."
      },
      {
        "id": 10,
        "eng": "We participated in a guided nature walk to learn about native bird habitats.",
        "tr": "Yerli kuş yaşam alanları hakkında bilgi edinmek için rehberli bir doğa yürüyüşüne katıldık."
      },
      {
        "id": 11,
        "eng": "Eco-conscious hospitality proves luxury and environmental stewardship can coexist.",
        "tr": "Çevreye duyarlı misafirperverlik lüks ile çevre yönetiminin bir arada var olabileceğini kanıtlar."
      },
      {
        "id": 12,
        "eng": "We left feeling thoroughly refreshed without leaving a heavy carbon footprint.",
        "tr": "Ağır bir karbon ayak izi bırakmadan tamamen tazelenmiş hissederek ayrıldık."
      }
    ],
    "questions": [
      {
        "q": "How did the eco-hotel generate its electricity?",
        "options": [
          "Coal",
          "Rooftop solar panels",
          "Diesel generator"
        ],
        "answer": 1
      },
      {
        "q": "How was the swimming pool filtered?",
        "options": [
          "With chlorine",
          "With natural reeds instead of harsh chemicals",
          "Not filtered"
        ],
        "answer": 1
      },
      {
        "q": "Where was the restaurant's food sourced from?",
        "options": [
          "Supermarkets",
          "Farms within ten miles",
          "Imported by plane"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 45,
    "level": "A2",
    "title": "Discovering Photography with an Analog Camera",
    "bgImage": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "In an era of instant digital snapshots, analog film photography offers intentionality.",
        "tr": "Anlık dijital çekimler çağında analog film fotoğrafçılığı bilinçli bir özen sunar."
      },
      {
        "id": 2,
        "eng": "My grandfather gifted me his vintage thirty-five millimeter camera last Christmas.",
        "tr": "Büyükbabam geçen Noel'de bana klasik otuz beş milimetrelik fotoğraf makinesini hediye etti."
      },
      {
        "id": 3,
        "eng": "It has a solid metallic body, a manual focus ring, and no digital LCD screen.",
        "tr": "Sağlam metalik bir gövdesi, manuel odaklama halkası vardır ve dijital LCD ekranı yoktur."
      },
      {
        "id": 4,
        "eng": "Loading a roll of thirty-six exposure black and white film felt like a sacred ritual.",
        "tr": "Otuz altı pozluk siyah beyaz bir film rulosu yüklemek kutsal bir ritüel gibi hissettirdi."
      },
      {
        "id": 5,
        "eng": "Because each frame costs money, I learned to compose shots with immense patience.",
        "tr": "Her kare para ettiği için çekimleri muazzam bir sabırla kurgulamayı öğrendim."
      },
      {
        "id": 6,
        "eng": "I adjusted shutter speed, aperture, and focus manually before pressing the button.",
        "tr": "Düğmeye basmadan önce enstantane hızını, diyaframı ve odağı elle ayarladım."
      },
      {
        "id": 7,
        "eng": "The mechanical click of the mirror shutter was deeply satisfying.",
        "tr": "Ayna obtüratörünün mekanik tıkırtısı son derece tatmin ediciydi."
      },
      {
        "id": 8,
        "eng": "I spent an afternoon photographing street musicians, shadows, and architectural curves.",
        "tr": "Bir öğleden sonrayı sokak müzisyenlerini, gölgeleri ve mimari kavisleri fotoğraflayarak geçirdim."
      },
      {
        "id": 9,
        "eng": "I took the exposed film cartridge to a local photo lab for chemical development.",
        "tr": "Pozlanmış film kartuşunu kimyasal banyo için yerel bir fotoğraf laboratuvarına götürdüm."
      },
      {
        "id": 10,
        "eng": "Waiting three days for prints built eager anticipation rarely felt nowadays.",
        "tr": "Baskılar için üç gün beklemek günümüzde nadiren hissedilen hevesli bir beklenti yarattı."
      },
      {
        "id": 11,
        "eng": "When I opened the paper envelope, the rich grain and contrast blew me away.",
        "tr": "Kağıt zarfı açtığımda zengin gren ve kontrast beni büyüledi."
      },
      {
        "id": 12,
        "eng": "Slowing down creative processes reveals magic that instant technology obscures.",
        "tr": "Yaratıcı süreçleri yavaşlatmak anlık teknolojinin gizlediği büyüyü ortaya çıkarır."
      }
    ],
    "questions": [
      {
        "q": "Who gifted the analog camera to the author?",
        "options": [
          "Father",
          "Grandfather",
          "A friend"
        ],
        "answer": 1
      },
      {
        "q": "How many exposures did the film roll have?",
        "options": [
          "Twelve",
          "Twenty-four",
          "Thirty-six"
        ],
        "answer": 2
      },
      {
        "q": "How long did developing the prints take?",
        "options": [
          "One hour",
          "Three days",
          "Two weeks"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 46,
    "level": "A2",
    "title": "Building a Morning Wellness Routine",
    "bgImage": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "How you spend your first hour often dictates the rhythm of your entire day.",
        "tr": "İlk saatinizi nasıl geçirdiğiniz genellikle bütün gününüzün ritmini belirler."
      },
      {
        "id": 2,
        "eng": "Six months ago, I replaced frantic morning phone scrolling with mindful wellness habits.",
        "tr": "Altı ay önce telaşlı sabah telefonu kaydırmasını dikkatli sağlık alışkanlıklarıyla değiştirdim."
      },
      {
        "id": 3,
        "eng": "I wake up at six-thirty without hitting the snooze button on my alarm clock.",
        "tr": "Çalar saatimdeki erteleme düğmesine basmadan altı buçukta uyanırım."
      },
      {
        "id": 4,
        "eng": "I immediately drink a large glass of warm water infused with lemon and mineral salt.",
        "tr": "Hemen limon ve mineral tuzu katılmış büyük bir bardak ılık su içerim."
      },
      {
        "id": 5,
        "eng": "Rehydrating activates digestion and wakes up the circulatory system effectively.",
        "tr": "Sıvı takviyesi sindirimi aktive eder ve dolaşım sistemini etkili bir şekilde uyandırır."
      },
      {
        "id": 6,
        "eng": "I unroll a rubber mat on the balcony for fifteen minutes of gentle spinal yoga.",
        "tr": "On beş dakikalık hafif omurga yogası için balkona kauçuk bir mat sererim."
      },
      {
        "id": 7,
        "eng": "Deep rhythmic breathing oxygenates muscles and calms lingering mental fog.",
        "tr": "Derin ritmik nefes alma kasları oksijenlendirir ve süregelen zihinsel sisi yatıştırır."
      },
      {
        "id": 8,
        "eng": "Next, I step into a brisk shower and conclude with thirty seconds of cold water.",
        "tr": "Sırada canlandırıcı bir duşa girer ve otuz saniyelik soğuk suyla bitiririm."
      },
      {
        "id": 9,
        "eng": "The brief cold shock triggers norepinephrine release, boosting alertness and mood.",
        "tr": "Kısa süreli soğuk şok norepinefrin salınımını tetikleyerek uyanıklığı ve ruh halini artırır."
      },
      {
        "id": 10,
        "eng": "I sit down to write three things I am genuinely grateful for in a leather journal.",
        "tr": "Deri bir günlüğe gerçekten minnettar olduğum üç şeyi yazmak için otururum."
      },
      {
        "id": 11,
        "eng": "By eight o'clock, I feel composed, clear-headed, and energized to tackle work.",
        "tr": "Saat sekize kadar sakin, berrak zihinli ve işle başa çıkmak için enerjik hissederim."
      },
      {
        "id": 12,
        "eng": "Disciplined self-care isn't indulgence; it is foundational to lasting vitality.",
        "tr": "Disiplinli öz bakım şımarıklık değildir; kalıcı canlılığın temelidir."
      }
    ],
    "questions": [
      {
        "q": "What does the author drink right after waking up?",
        "options": [
          "Coffee",
          "Warm water with lemon and salt",
          "Orange juice"
        ],
        "answer": 1
      },
      {
        "q": "How long does the author do yoga on the mat?",
        "options": [
          "Five minutes",
          "Fifteen minutes",
          "One hour"
        ],
        "answer": 1
      },
      {
        "q": "What does the author write in the journal?",
        "options": [
          "A shopping list",
          "Three things genuinely grateful for",
          "Work tasks"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 47,
    "level": "A2",
    "title": "Joining a Language Exchange Club",
    "bgImage": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Speaking with native speakers is the most effective way to overcome speaking hesitation.",
        "tr": "Ana dili İngilizce olanlarla konuşmak, konuşma çekingenliğini yenmenin en etkili yoludur."
      },
      {
        "id": 2,
        "eng": "Last Thursday, I gathered courage to attend my first local conversation meetup.",
        "tr": "Geçen perşembe ilk yerel konuşma buluşmama katılmak için cesaretimi topladım."
      },
      {
        "id": 3,
        "eng": "The club gathered at an indie coffee roastery near the central university library.",
        "tr": "Kulüp merkez üniversite kütüphanesinin yanındaki bağımsız bir kahve kavurucusunda toplandı."
      },
      {
        "id": 4,
        "eng": "Participants came from over twelve countries with diverse cultural backgrounds.",
        "tr": "Katılımcılar farklı kültürel geçmişlere sahip on ikiden fazla ülkeden geldi."
      },
      {
        "id": 5,
        "eng": "We wore small stickers showing our native language and target learning language.",
        "tr": "Ana dilimizi ve öğrenmeyi hedeflediğimiz dili gösteren küçük çıkartmalar taktık."
      },
      {
        "id": 6,
        "eng": "I was paired with Sarah, an exchange student from London who wants to learn Turkish.",
        "tr": "Türkçe öğrenmek isteyen Londra'dan bir değişim öğrencisi olan Sarah ile eşleştim."
      },
      {
        "id": 7,
        "eng": "We set a timer for thirty minutes of English followed by thirty minutes of Turkish.",
        "tr": "Otuz dakika İngilizce ve ardından otuz dakika Türkçe için bir zamanlayıcı ayarladık."
      },
      {
        "id": 8,
        "eng": "At first, my tongue stumbled over pronunciation, but Sarah was wonderfully patient.",
        "tr": "İlk başta telaffuzda dilim sürçtü ama Sarah harika bir şekilde sabırlıydı."
      },
      {
        "id": 9,
        "eng": "We talked about street food in Istanbul, traditional music, and university exams.",
        "tr": "İstanbul'daki sokak lezzetleri, geleneksel müzik ve üniversite sınavları hakkında konuştuk."
      },
      {
        "id": 10,
        "eng": "She gently corrected my prepositions and taught me useful colloquial British idioms.",
        "tr": "Edatlarımı nazikçe düzeltti ve bana yararlı günlük İngiliz deyimleri öğretti."
      },
      {
        "id": 11,
        "eng": "By the end of the evening, my self-confidence in speaking English had soared.",
        "tr": "Akşamın sonunda İngilizce konuşmadaki özgüvenim tavan yapmıştı."
      },
      {
        "id": 12,
        "eng": "Language exchange turns abstract grammar study into genuine human friendship.",
        "tr": "Dil değişimi soyut dilbilgisi çalışmasını gerçek insan dostluğuna dönüştürür."
      }
    ],
    "questions": [
      {
        "q": "Where was Sarah from?",
        "options": [
          "New York",
          "London",
          "Sydney"
        ],
        "answer": 1
      },
      {
        "q": "How did they divide their speaking time?",
        "options": [
          "All English",
          "Thirty minutes English, thirty minutes Turkish",
          "One hour only"
        ],
        "answer": 1
      },
      {
        "q": "What did the stickers show on participants' clothes?",
        "options": [
          "Their age",
          "Native language and target language",
          "Their phone number"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 48,
    "level": "A2",
    "title": "Exploring an Ancient Historic Castle",
    "bgImage": "https://images.unsplash.com/photo-1524397058862-e7a0ec494a3b?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Historical ruins hold silent echoes of centuries long past.",
        "tr": "Tarihi kalıntılar çoktan geçmiş yüzyılların sessiz yankılarını barındırır."
      },
      {
        "id": 2,
        "eng": "Last Sunday, my friends and I hiked up to a thirteenth-century hilltop fortress.",
        "tr": "Geçen pazar arkadaşlarım ve ben tepe üstündeki on üçüncü yüzyıldan kalma bir kaleye tırmandık."
      },
      {
        "id": 3,
        "eng": "The massive fortress walls were constructed from rough limestone and heavy mortar.",
        "tr": "Muazzam kale surları kaba kireçtaşı ve ağır harçla inşa edilmişti."
      },
      {
        "id": 4,
        "eng": "We climbed a narrow spiral stone staircase leading to the highest watchtower.",
        "tr": "En yüksek gözetleme kulesine çıkan dar, döner bir taş merdivene tırmandık."
      },
      {
        "id": 5,
        "eng": "From the stone battlements, a breathtaking panoramic view of the river valley unfolded.",
        "tr": "Taş siperlerden nehir vadisinin nefes kesici panoramik manzarası gözler önüne serildi."
      },
      {
        "id": 6,
        "eng": "Informational plaques explained how medieval guards watched for approaching invaders.",
        "tr": "Bilgilendirme levhaları ortaçağ muhafızlarının yaklaşan işgalcileri nasıl gözlediğini açıkladı."
      },
      {
        "id": 7,
        "eng": "In the central courtyard, an ancient stone well plunged sixty meters into bedrock.",
        "tr": "Merkez avluda antik bir taş kuyu ana kayanın içine altmış metre iniyordu."
      },
      {
        "id": 8,
        "eng": "We visited the armory museum exhibiting iron helmets, shields, and longbows.",
        "tr": "Demir miğferleri, kalkanları ve uzun yayları sergileyen cephanelik müzesini ziyaret ettik."
      },
      {
        "id": 9,
        "eng": "The cool subterranean dungeon gave us goosebumps with its dark history.",
        "tr": "Serin yer altı zindanı karanlık tarihiyle tüylerimizi diken diken etti."
      },
      {
        "id": 10,
        "eng": "We enjoyed a picnic of cheese and olives on the grassy outer ramparts.",
        "tr": "Çimenli dış surlarda peynir ve zeytinden oluşan bir piknik yaptık."
      },
      {
        "id": 11,
        "eng": "Preserving historical landmarks connects modern generations with ancestors' struggles.",
        "tr": "Tarihi simgeleri korumak modern nesilleri ataların mücadeleleriyle bağlar."
      },
      {
        "id": 12,
        "eng": "Walking through ancient stone corridors feels like stepping back in time.",
        "tr": "Eski taş koridorlarda yürümek zamanda geriye adım atmak gibi hissettirir."
      }
    ],
    "questions": [
      {
        "q": "From which century did the fortress date?",
        "options": [
          "Tenth century",
          "Thirteenth century",
          "Nineteenth century"
        ],
        "answer": 1
      },
      {
        "q": "How deep was the stone well in the courtyard?",
        "options": [
          "Ten meters",
          "Sixty meters",
          "One hundred meters"
        ],
        "answer": 1
      },
      {
        "q": "What weapons were displayed in the armory?",
        "options": [
          "Guns",
          "Iron helmets, shields, and longbows",
          "Cannons"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 49,
    "level": "A2",
    "title": "Organizing a Neighborhood Street Fair",
    "bgImage": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Strong communities are built when neighbors actively connect and collaborate.",
        "tr": "Güçlü topluluklar komşular aktif olarak bağlantı kurup iş birliği yaptığında inşa edilir."
      },
      {
        "id": 2,
        "eng": "Our street committee organized an annual block party to welcome new residents.",
        "tr": "Sokak komitemiz yeni sakinleri karşılamak için yıllık bir mahalle şenliği düzenledi."
      },
      {
        "id": 3,
        "eng": "We obtained a temporary municipal permit to close the road to motor vehicles.",
        "tr": "Yolu motorlu araçlara kapatmak için geçici bir belediye izni aldık."
      },
      {
        "id": 4,
        "eng": "Colorful paper lanterns and festive pennant flags were strung between lamp posts.",
        "tr": "Lamba direkleri arasına renkli kağıt fenerler ve şenlik bayrakları asıldı."
      },
      {
        "id": 5,
        "eng": "Families set up folding tables showcasing homemade pastries, crafts, and lemonade.",
        "tr": "Aileler ev yapımı hamur işleri, el sanatları ve limonatayı sergileyen katlanır masalar kurdu."
      },
      {
        "id": 6,
        "eng": "A local acoustic jazz trio performed lively swing standards on an open-air porch.",
        "tr": "Yerel bir akustik caz üçlüsü açık hava sundurmasında canlı swing parçaları çaldı."
      },
      {
        "id": 7,
        "eng": "Children played hopscotch, jumped rope, and drew chalk murals on asphalt.",
        "tr": "Çocuklar seksek oynadı, ip atladı ve asfalta tebeşirle duvar resimleri çizdi."
      },
      {
        "id": 8,
        "eng": "We held a friendly bake-off competition for the finest homemade apple pie.",
        "tr": "En iyi ev yapımı elmalı turta için dostça bir pasta yarışması düzenledik."
      },
      {
        "id": 9,
        "eng": "Mrs. Evelyn won first prize with her secret cinnamon-caramel recipe.",
        "tr": "Bayan Evelyn gizli tarçın-karamel tarifiyle birincilik ödülünü kazandı."
      },
      {
        "id": 10,
        "eng": "As darkness fell, we lit fairy lights and danced under the warm summer stars.",
        "tr": "Karanlık çökerken peri ışıklarını yaktık ve ılık yaz yıldızlarının altında dans ettik."
      },
      {
        "id": 11,
        "eng": "Transforming streets into shared living rooms fosters safety and enduring friendships.",
        "tr": "Sokakları ortak oturma odalarına dönüştürmek güvenliği ve kalıcı dostlukları besler."
      },
      {
        "id": 12,
        "eng": "The street fair was a heartwarming reminder of grassroots togetherness.",
        "tr": "Sokak şenliği tabandan gelen birlikteliğin iç ısıtan bir hatırlatıcısıydı."
      }
    ],
    "questions": [
      {
        "q": "Why was the road closed to motor vehicles?",
        "options": [
          "Construction",
          "With a permit for the neighborhood street fair",
          "An accident"
        ],
        "answer": 1
      },
      {
        "q": "Who won the pie competition?",
        "options": [
          "Sarah",
          "Mrs. Evelyn with her cinnamon-caramel recipe",
          "Leo"
        ],
        "answer": 1
      },
      {
        "q": "What band performed on the porch?",
        "options": [
          "A rock band",
          "An acoustic jazz trio",
          "A choir"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 50,
    "level": "A2",
    "title": "Surviving a Sudden Winter Snowstorm",
    "bgImage": "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Winter weather can turn treacherous with remarkable swiftness in the north.",
        "tr": "Kış havası kuzeyde kayda değer bir hızla tehlikeli bir hal alabilir."
      },
      {
        "id": 2,
        "eng": "Last January, an unexpected blizzard dumped forty centimeters of snow overnight.",
        "tr": "Geçen ocak ayında beklenmedik bir kar fırtınası bir gecede kırk santimetre kar bıraktı."
      },
      {
        "id": 3,
        "eng": "Howling icy winds shook windowpanes and knocked down regional electrical power lines.",
        "tr": "Uğuldayan buz gibi rüzgarlar pencere camlarını sarstı ve bölgesel elektrik hatlarını devirdi."
      },
      {
        "id": 4,
        "eng": "We immediately ignited birch logs in our stone fireplace to keep the house warm.",
        "tr": "Evi sıcak tutmak için taş şöminemizde hemen huş ağacı kütüklerini yaktık."
      },
      {
        "id": 5,
        "eng": "We lit beeswax candles and gathered emergency blankets and battery-powered lanterns.",
        "tr": "Balmumu mumları yaktık, acil durum battaniyelerini ve pilli fenerleri topladık."
      },
      {
        "id": 6,
        "eng": "We melted clean snow in a heavy copper kettle on the fireplace hearth for drinking.",
        "tr": "İçmek için şömine ocağındaki ağır bir bakır çaydanlıkta temiz kar erittik."
      },
      {
        "id": 7,
        "eng": "Without internet or television, we rediscovered the warmth of unplugged conversation.",
        "tr": "İnternet veya televizyon olmadan fişten çekilmiş sohbetin sıcaklığını yeniden keşfettik."
      },
      {
        "id": 8,
        "eng": "We read classic ghost stories aloud while sipping hot cocoa topped with marshmallows.",
        "tr": "Köpüklü şekerli sıcak kakao yudumlarken klasik hayalet hikayelerini yüksek sesle okuduk."
      },
      {
        "id": 9,
        "eng": "By morning, the ferocious blizzard had subsided into a pristine white silence.",
        "tr": "Sabaha kadar şiddetli kar fırtınası yerini el değmemiş beyaz bir sessizliğe bırakmıştı."
      },
      {
        "id": 10,
        "eng": "We strapped on snowshoes and shoveled a clear pathway to our elderly neighbor's door.",
        "tr": "Kar ayakkabılarını bağladık ve yaşlı komşumuzun kapısına kadar açık bir patika küredik."
      },
      {
        "id": 11,
        "eng": "Natural emergencies remind us of human fragility and the necessity of mutual aid.",
        "tr": "Doğal acil durumlar bize insanın kırılganlığını ve karşılıklı yardımlaşmanın gerekliliğini hatırlatır."
      },
      {
        "id": 12,
        "eng": "Standing in deep sparkling snow felt quiet, majestic, and humbling.",
        "tr": "Derin parıldayan karda durmak sessiz, görkemli ve alçakgönüllü hissettirdi."
      }
    ],
    "questions": [
      {
        "q": "How much snow did the blizzard dump overnight?",
        "options": [
          "Five cm",
          "Forty centimeters",
          "Two meters"
        ],
        "answer": 1
      },
      {
        "q": "How did they keep the house warm when power failed?",
        "options": [
          "Gas heater",
          "Birch logs in the stone fireplace",
          "Electric blanket"
        ],
        "answer": 1
      },
      {
        "q": "Whose pathway did they shovel in the morning?",
        "options": [
          "Their own only",
          "Elderly neighbor's door",
          "The school"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 51,
    "level": "A2",
    "title": "Learning the Secrets of Mediterranean Cooking",
    "bgImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Mediterranean gastronomy is renowned worldwide for longevity and radiant health.",
        "tr": "Akdeniz gastronomisi uzun ömür ve ışıltılı sağlıkla dünya çapında ünlüdür."
      },
      {
        "id": 2,
        "eng": "Last month, I enrolled in an intensive weekend culinary masterclass in Izmir.",
        "tr": "Geçen ay İzmir'de yoğun bir hafta sonu mutfak ustalık sınıfına kaydoldum."
      },
      {
        "id": 3,
        "eng": "Chef Elena emphasized that simplicity and premier seasonal ingredients are fundamental.",
        "tr": "Şef Elena sadeliğin ve birinci sınıf mevsimlik malzemelerin temel olduğunu vurguladı."
      },
      {
        "id": 4,
        "eng": "We began by tasting five distinct extra virgin olive oils from local groves.",
        "tr": "Yerel bahçelerden gelen beş farklı sızma zeytinyağını tadarak başladık."
      },
      {
        "id": 5,
        "eng": "Some oils tasted peppery and green, while others possessed fruity floral undertones.",
        "tr": "Bazı yağlar biberli ve yeşil tadarken diğerleri meyvemsi çiçeksi alt tonlara sahipti."
      },
      {
        "id": 6,
        "eng": "We prepared Aegean wild artichokes stewed gently with fresh dill and baby carrots.",
        "tr": "Taze dereotu ve bebek havuçla kısık ateşte pişirilmiş Ege yabani enginarlarını hazırladık."
      },
      {
        "id": 7,
        "eng": "We rolled delicate grape leaves stuffed with spiced rice, currants, and pine nuts.",
        "tr": "Baharatlı pirinç, kuş üzümü ve çam fıstığı ile doldurulmuş narin asma yapraklarını sardık."
      },
      {
        "id": 8,
        "eng": "The kitchen filled with steam carrying fragrant aromas of lemon and wild thyme.",
        "tr": "Mutfak limon ve yabani kekik kokularını taşıyan buharla doldu."
      },
      {
        "id": 9,
        "eng": "Chef Elena explained how minimal processing preserves precious polyphenols and antioxidants.",
        "tr": "Şef Elena minimum işlemenin değerli polifenolleri ve antioksidanları nasıl koruduğunu açıkladı."
      },
      {
        "id": 10,
        "eng": "We concluded the session with a shared banquet under a pergola of grapevines.",
        "tr": "Oturumu asma pergolasının altında paylaşılan bir ziyafetle sonlandırdık."
      },
      {
        "id": 11,
        "eng": "Cooking with whole foods nourishes both the body and the creative soul.",
        "tr": "Doğal gıdalarla yemek pişirmek hem bedeni hem de yaratıcı ruhu besler."
      },
      {
        "id": 12,
        "eng": "I brought home authentic techniques that transformed my everyday family meals.",
        "tr": "Eve günlük aile yemeklerimi dönüştüren otantik teknikler getirdim."
      }
    ],
    "questions": [
      {
        "q": "Where was the culinary masterclass held?",
        "options": [
          "In Istanbul",
          "In Izmir",
          "In Athens"
        ],
        "answer": 1
      },
      {
        "q": "What key ingredient did Chef Elena emphasize?",
        "options": [
          "Butter",
          "Extra virgin olive oil and seasonal produce",
          "Spices only"
        ],
        "answer": 1
      },
      {
        "q": "What wild vegetable dish was prepared?",
        "options": [
          "Wild artichokes with dill",
          "Spinach pie",
          "Mushroom soup"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 52,
    "level": "A2",
    "title": "A Ferry Ride to a Nearby Island",
    "bgImage": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Taking a sea vessel provides an instant sense of adventure and escape.",
        "tr": "Bir deniz taşıtına binmek anında bir macera ve kaçış duygusu sağlar."
      },
      {
        "id": 2,
        "eng": "On a breezy Sunday, my family boarded the morning passenger ferry to Buyukada.",
        "tr": "Rüzgarlı bir pazar günü ailem Büyükada'ya giden sabah yolcu vapuruna bindi."
      },
      {
        "id": 3,
        "eng": "The ship horn blew two deep resonant blasts as we pulled away from the stone dock.",
        "tr": "Taş iskeleden ayrılırken gemi düdüğü iki derin ve yankılı ses çıkardı."
      },
      {
        "id": 4,
        "eng": "Dozens of white seagulls trailed the ferry, catching bread pieces thrown by travelers.",
        "tr": "Düzinelerce beyaz martı vapuru takip ederek yolcuların attığı ekmek parçalarını yakaladı."
      },
      {
        "id": 5,
        "eng": "The salty sea breeze tousled our hair as we stood by the upper wooden railing.",
        "tr": "Üst ahşap tırabzanın yanında dururken tuzlu deniz esintisi saçlarımızı dağıttı."
      },
      {
        "id": 6,
        "eng": "The bustling city skyline slowly shrunk into a hazy blue panorama behind us.",
        "tr": "Hareketli şehir silüeti arkamızda yavaşça puslu mavi bir panoramaya dönüştü."
      },
      {
        "id": 7,
        "eng": "After forty-five minutes of smooth cruising, the lush green island appeared.",
        "tr": "Kırk beş dakikalık sarsıntısız bir yolculuğun ardından yemyeşil ada belirdi."
      },
      {
        "id": 8,
        "eng": "Because private motor vehicles are prohibited on the island, the air smelled pure.",
        "tr": "Adada özel motorlu araçlar yasak olduğu için hava tertemiz kokuyordu."
      },
      {
        "id": 9,
        "eng": "We rented electric bicycles and rode along roads flanked by historic wooden mansions.",
        "tr": "Elektrikli bisikletler kiraladık ve tarihi ahşap konakların çevrelediği yollarda sürdük."
      },
      {
        "id": 10,
        "eng": "Purple bougainvillea draped over whitewashed garden walls in vibrant cascades.",
        "tr": "Mor begonviller badanalı bahçe duvarlarının üzerinden canlı çağlayanlar gibi sarkıyordu."
      },
      {
        "id": 11,
        "eng": "We hiked up the pine hill to visit the historic Aya Yorgi monastery.",
        "tr": "Tarihi Aya Yorgi manastırını ziyaret etmek için çam tepesine yürüdük."
      },
      {
        "id": 12,
        "eng": "Island excursions offer a timeless sanctuary from rapid modern urban life.",
        "tr": "Ada gezileri hızlı modern şehir hayatından zamansız bir sığınak sunar."
      }
    ],
    "questions": [
      {
        "q": "Which island did the family visit by ferry?",
        "options": [
          "Kinali",
          "Buyukada",
          "Heybeli"
        ],
        "answer": 1
      },
      {
        "q": "Why was the air so clean on the island?",
        "options": [
          "It had rain",
          "Private motor vehicles are prohibited",
          "No one lives there"
        ],
        "answer": 1
      },
      {
        "q": "What monastery did they hike up to visit?",
        "options": [
          "St. Peter",
          "Aya Yorgi",
          "St. George"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 53,
    "level": "A2",
    "title": "Hunting for Treasures at the Flea Market",
    "bgImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Vintage flea markets are treasure troves of forgotten history and curious objects.",
        "tr": "Eski bit pazarları unutulmuş tarihin ve ilginç nesnelerin hazine sandıklarıdır."
      },
      {
        "id": 2,
        "eng": "Early every Sunday, antique dealers converge on the cobblestone square of Kadikoy.",
        "tr": "Her pazar erkenden antika satıcıları Kadıköy'ün arnavut kaldırımlı meydanında toplanır."
      },
      {
        "id": 3,
        "eng": "Tables were laden with brass pocket watches, vinyl records, and sepia photographs.",
        "tr": "Masalar pirinç cep saatleri, plaklar ve sepya fotoğraflarla doluydu."
      },
      {
        "id": 4,
        "eng": "I love rummaging through wooden crates containing old illustrated postcards.",
        "tr": "Eski resimli kartpostalları içeren ahşap kasaları karıştırmayı çok seviyorum."
      },
      {
        "id": 5,
        "eng": "I discovered a handwritten postcard sent from Paris in nineteen twenty-four.",
        "tr": "Bin dokuz yüz yirmi dörtte Paris'ten gönderilmiş el yazısı bir kartpostal keşfettim."
      },
      {
        "id": 6,
        "eng": "Its elegant fountain pen cursive spoke of love, autumn rain, and jazz clubs.",
        "tr": "Zarif dolma kalem el yazısı aşktan, sonbahar yağmurundan ve caz kulüplerinden bahsediyordu."
      },
      {
        "id": 7,
        "eng": "My brother found a vintage manual typewriter with functional circular keys.",
        "tr": "Erkek kardeşim çalışan yuvarlak tuşları olan klasik bir manuel daktilo buldu."
      },
      {
        "id": 8,
        "eng": "We politely bargained with the elderly vendor over a cup of Turkish tea.",
        "tr": "Bir fincan Türk çayı eşliğinde yaşlı satıcıyla kibarca pazarlık yaptık."
      },
      {
        "id": 9,
        "eng": "He agreed on a reasonable price and wrapped our finds in recycled newspaper.",
        "tr": "Makul bir fiyatta anlaştı ve bulduklarımızı geri dönüştürülmüş gazeteye sardı."
      },
      {
        "id": 10,
        "eng": "Holding objects that survived decades gives one a tangible bridge to the past.",
        "tr": "On yıllarca ayakta kalan nesneleri tutmak insana geçmişe somut bir köprü verir."
      },
      {
        "id": 11,
        "eng": "Thrifting prevents historical artifacts from ending up in polluting landfills.",
        "tr": "İkinci el alışveriş tarihi eserlerin çevreyi kirleten çöplüklere gitmesini önler."
      },
      {
        "id": 12,
        "eng": "Every object carries a quiet story waiting to be uncovered by patient eyes.",
        "tr": "Her nesne sabırlı gözler tarafından keşfedilmeyi bekleyen sessiz bir hikaye taşır."
      }
    ],
    "questions": [
      {
        "q": "Where was the vintage flea market located?",
        "options": [
          "In Paris",
          "In Kadikoy",
          "In London"
        ],
        "answer": 1
      },
      {
        "q": "What postcard year did the author discover?",
        "options": [
          "1800",
          "1924",
          "1985"
        ],
        "answer": 1
      },
      {
        "q": "What mechanical item did the brother find?",
        "options": [
          "A clock",
          "A vintage manual typewriter",
          "A radio"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 54,
    "level": "A2",
    "title": "Discovering Scuba Diving and Marine Life",
    "bgImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Descending beneath ocean waves feels like visiting another alien planet.",
        "tr": "Okyanus dalgalarının altına inmek başka bir yabancı gezegeni ziyaret etmek gibi hissettirir."
      },
      {
        "id": 2,
        "eng": "Last summer in Kas, I completed my open-water scuba diving certification course.",
        "tr": "Geçen yaz Kaş'ta açık deniz tüplü dalış sertifika kursumu tamamladım."
      },
      {
        "id": 3,
        "eng": "We spent two intensive days learning safety theory, hand signals, and equipment checks.",
        "tr": "Güvenlik teorisini, el işaretlerini ve ekipman kontrollerini öğrenerek iki yoğun gün geçirdik."
      },
      {
        "id": 4,
        "eng": "I strapped on a compressed air tank, buoyancy vest, neoprene wetsuit, and fins.",
        "tr": "Basınçlı hava tüpü, denge yeleği, neopren dalış kıyafeti ve paletleri kuşandım."
      },
      {
        "id": 5,
        "eng": "Our dive boat anchored in a calm turquoise bay known for ancient submerged amphorae.",
        "tr": "Dalış teknemiz batık antik amforalarıyla bilinen sakin turkuaz bir koya demirledi."
      },
      {
        "id": 6,
        "eng": "I rolled backwards into the clear water and felt the exhilarating rush of coolness.",
        "tr": "Berrak suya doğru arkaya doğru yuvarlandım ve serinliğin heyecan verici akışını hissettim."
      },
      {
        "id": 7,
        "eng": "Breathing through the scuba regulator sounded loud and rhythmic in my ears.",
        "tr": "Dalış regülatöründen nefes almak kulaklarımda yüksek ve ritmik geliyordu."
      },
      {
        "id": 8,
        "eng": "We descended to eighteen meters along a dramatic limestone underwater wall.",
        "tr": "Dramatik kireçtaşı su altı duvarı boyunca on sekiz metreye indik."
      },
      {
        "id": 9,
        "eng": "A magnificent loggerhead sea turtle glided effortlessly beside us.",
        "tr": "Görkemli bir caretta caretta deniz kaplumbağası yanımızda zahmetsizce süzüldü."
      },
      {
        "id": 10,
        "eng": "Schools of iridescent damselfish flashed bright yellow and neon blue around coral reefs.",
        "tr": "Yanardöner çipura sürüleri mercan resifleri etrafında parlak sarı ve neon mavi parıldadı."
      },
      {
        "id": 11,
        "eng": "Weightlessness underwater creates an indescribable sensation of pure peace.",
        "tr": "Su altındaki ağırlıksızlık tarif edilemez bir saf huzur hissi yaratır."
      },
      {
        "id": 12,
        "eng": "Protecting fragile marine ecosystems became my lifelong personal mission.",
        "tr": "Kırılgan deniz ekosistemlerini korumak benim ömür boyu sürecek kişisel misyonum haline geldi."
      }
    ],
    "questions": [
      {
        "q": "Where did the author take the scuba certification course?",
        "options": [
          "In Bodrum",
          "In Kas",
          "In Antalya"
        ],
        "answer": 1
      },
      {
        "q": "To what depth did they descend?",
        "options": [
          "Five meters",
          "Eighteen meters",
          "Fifty meters"
        ],
        "answer": 1
      },
      {
        "q": "What magnificent sea creature glided beside them?",
        "options": [
          "A shark",
          "A loggerhead sea turtle",
          "A dolphin"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 55,
    "level": "A2",
    "title": "Remote Work from a Seaside Cafe",
    "bgImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "The modern digital era enables knowledge workers to choose their environment.",
        "tr": "Modern dijital çağ bilgi çalışanlarının kendi ortamlarını seçmelerine olanak tanır."
      },
      {
        "id": 2,
        "eng": "On Fridays, I take advantage of remote work flexibility to work outside the city.",
        "tr": "Cuma günleri şehir dışında çalışmak için uzaktan çalışma esnekliğinden yararlanırım."
      },
      {
        "id": 3,
        "eng": "I set up my laptop on a shaded outdoor terrace overlooking the blue harbor.",
        "tr": "Dizüstü bilgisayarımı mavi limana bakan gölgeli bir açık hava terasına kurdum."
      },
      {
        "id": 4,
        "eng": "The cafe offered reliable high-speed fiber internet and ergonomic wooden chairs.",
        "tr": "Kafe güvenilir yüksek hızlı fiber internet ve ergonomik ahşap sandalyeler sundu."
      },
      {
        "id": 5,
        "eng": "I ordered an iced oat milk latte and a slice of flourless almond cake.",
        "tr": "Buzlu yulaf sütlü latte ve bir dilim unsuz bademli kek sipariş ettim."
      },
      {
        "id": 6,
        "eng": "The rhythmic lap of small waves masked distracting noise better than headphones.",
        "tr": "Küçük dalgaların ritmik sesi dikkat dağıtıcı gürültüyü kulaklıklardan daha iyi maskeledi."
      },
      {
        "id": 7,
        "eng": "I answered team emails and wrote analytical reports with renewed focus.",
        "tr": "Ekip e-postalarını yanıtladım ve yenilenmiş bir odaklanmayla analitik raporlar yazdım."
      },
      {
        "id": 8,
        "eng": "Looking up from spreadsheets to observe passing white sailboats cleared mental fatigue.",
        "tr": "Elektronik tablolardan başımı kaldırıp geçen beyaz yelkenlileri izlemek zihinsel yorgunluğu giderdi."
      },
      {
        "id": 9,
        "eng": "During lunch, I took a thirty-minute barefoot stroll along the smooth pebbles.",
        "tr": "Öğle tatilinde pürüzsüz çakıllar boyunca otuz dakikalık çıplak ayakla bir yürüyüş yaptım."
      },
      {
        "id": 10,
        "eng": "A change of scenery sparks creative solutions that stagnant cubicles suppress.",
        "tr": "Manzara değişikliği durgun ofis bölmelerinin bastırdığı yaratıcı çözümleri tetikler."
      },
      {
        "id": 11,
        "eng": "Balancing focused professional output with natural beauty enhances well-being.",
        "tr": "Odaklanmış mesleki çıktıyı doğal güzellikle dengelemek refahı artırır."
      },
      {
        "id": 12,
        "eng": "Working by the sea reminded me why autonomy is the greatest workplace benefit.",
        "tr": "Deniz kenarında çalışmak bana özerkliğin neden en büyük iş yeri avantajı olduğunu hatırlattı."
      }
    ],
    "questions": [
      {
        "q": "What drink did the author order at the cafe?",
        "options": [
          "Hot tea",
          "An iced oat milk latte",
          "Lemonade"
        ],
        "answer": 1
      },
      {
        "q": "What did the author do during the lunch break?",
        "options": [
          "Took a nap",
          "Took a barefoot stroll along pebbles",
          "Went shopping"
        ],
        "answer": 1
      },
      {
        "q": "What masked distracting noise better than headphones?",
        "options": [
          "Loud music",
          "Rhythmic lap of small waves",
          "Silence"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 56,
    "level": "A2",
    "title": "Planting an Organic Herb Garden",
    "bgImage": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Cultivating your own culinary herbs brings freshness right to your fingertips.",
        "tr": "Kendi yemek otlarınızı yetiştirmek tazeliği parmaklarınızın ucuna getirir."
      },
      {
        "id": 2,
        "eng": "Last spring, I transformed my sunny balcony into a flourishing green herbary.",
        "tr": "Geçen ilkbaharda güneşli balkonumu çiçek açan yeşil bir şifalı bitki bahçesine dönüştürdüm."
      },
      {
        "id": 3,
        "eng": "I purchased terracotta pots with drainage holes and a bag of nutrient organic soil.",
        "tr": "Drenaj delikleri olan pişmiş toprak saksılar ve bir torba besleyici organik toprak aldım."
      },
      {
        "id": 4,
        "eng": "Terracotta is porous, allowing plant roots to breathe and preventing root rot.",
        "tr": "Pişmiş toprak gözeneklidir, bitki köklerinin nefes almasını sağlar ve kök çürümesini önler."
      },
      {
        "id": 5,
        "eng": "I planted fragrant Italian sweet basil, curly parsley, and Greek oregano.",
        "tr": "Mis kokulu İtalyan tatlı fesleğeni, kıvırcık maydanoz ve Yunan kekiği ektim."
      },
      {
        "id": 6,
        "eng": "In a larger pot, I planted perennial rosemary and refreshing peppermint.",
        "tr": "Daha büyük bir saksıya çok yıllık biberiye ve ferahlatıcı nane ektim."
      },
      {
        "id": 7,
        "eng": "I placed peppermint in a separate container because its roots spread aggressively.",
        "tr": "Naneyi ayrı bir kaba koydum çünkü kökleri agresif bir şekilde yayılır."
      },
      {
        "id": 8,
        "eng": "Every morning, I mist the green leaves with fresh water using a spray bottle.",
        "tr": "Her sabah bir sprey şişesi kullanarak yeşil yapraklara taze su sıkarım."
      },
      {
        "id": 9,
        "eng": "Within three weeks, vibrant green shoots emerged and reached toward sunlight.",
        "tr": "Üç hafta içinde canlı yeşil filizler belirdi ve güneş ışığına doğru uzandı."
      },
      {
        "id": 10,
        "eng": "Plucking fresh basil leaves directly into evening salads elevates every bite.",
        "tr": "Taze fesleğen yapraklarını doğrudan akşam salatalarına koparmak her lokmayı zenginleştirir."
      },
      {
        "id": 11,
        "eng": "Urban gardening proves you do not need acres to enjoy homegrown harvests.",
        "tr": "Kentsel bahçıvanlık evde yetiştirilen hasatların tadını çıkarmak için dönümlere ihtiyacınız olmadığını kanıtlar."
      },
      {
        "id": 12,
        "eng": "Tending living plants grounds the spirit and cultivates mindful patience.",
        "tr": "Canlı bitkilerle ilgilenmek ruhu sakinleştirir ve dikkatli bir sabır geliştirir."
      }
    ],
    "questions": [
      {
        "q": "Why did the author plant peppermint in a separate pot?",
        "options": [
          "It needs shade",
          "Its roots spread aggressively",
          "It is dangerous"
        ],
        "answer": 1
      },
      {
        "q": "Why are terracotta pots good for herbs?",
        "options": [
          "They are cheap",
          "They are porous and prevent root rot",
          "They are light"
        ],
        "answer": 1
      },
      {
        "q": "How soon did vibrant green shoots emerge?",
        "options": [
          "In one day",
          "Within three weeks",
          "In two months"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 57,
    "level": "A2",
    "title": "Planning a Budget Backpacking Adventure",
    "bgImage": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Backpacking across unfamiliar countries on a shoestring budget builds resourcefulness.",
        "tr": "Bilinmeyen ülkelerde kısıtlı bir bütçeyle sırt çantasıyla gezmek beceriklilik kazandırır."
      },
      {
        "id": 2,
        "eng": "My university friend and I spent two months meticulously preparing for our journey.",
        "tr": "Üniversite arkadaşım ve ben yolculuğumuz için iki ay boyunca titizlikle hazırlandık."
      },
      {
        "id": 3,
        "eng": "We invested in durable forty-liter backpacks that comply with airline carry-on rules.",
        "tr": "Havayolu el bagajı kurallarına uyan dayanıklı kırk litrelik sırt çantalarına yatırım yaptık."
      },
      {
        "id": 4,
        "eng": "We packed versatile quick-dry merino wool shirts and lightweight waterproof jackets.",
        "tr": "Çok yönlü çabuk kuruyan merinos yünü gömlekler ve hafif su geçirmez ceketler hazırladık."
      },
      {
        "id": 5,
        "eng": "We booked hostel dormitories with high guest ratings and free communal kitchens.",
        "tr": "Yüksek misafir puanları ve ücretsiz ortak mutfakları olan pansiyon yatakhaneleri tuttuk."
      },
      {
        "id": 6,
        "eng": "Cooking our own dinners using local market produce halved our daily food expenses.",
        "tr": "Yerel pazar ürünlerini kullanarak kendi akşam yemeklerimizi pişirmek günlük yiyecek masraflarımızı yarıya indirdi."
      },
      {
        "id": 7,
        "eng": "We downloaded offline maps and regional rail apps to navigate foreign transit networks.",
        "tr": "Yabancı ulaşım ağlarında gezinmek için çevrimdışı haritalar ve bölgesel demiryolu uygulamaları indirdik."
      },
      {
        "id": 8,
        "eng": "Traveling light allowed us to walk through historic alleys without dragging wheeled luggage.",
        "tr": "Hafif seyahat etmek tekerlekli valiz sürüklemeden tarihi sokaklarda yürümemizi sağladı."
      },
      {
        "id": 9,
        "eng": "We met fellow global adventurers from Brazil, Japan, and Canada in hostel common rooms.",
        "tr": "Pansiyon ortak odalarında Brezilya, Japonya ve Kanada'dan gelen küresel gezginlerle tanıştık."
      },
      {
        "id": 10,
        "eng": "We exchanged valuable travel tips, shared train tickets, and forged lasting bonds.",
        "tr": "Değerli seyahat ipuçları takas ettik, tren biletlerini paylaştık ve kalıcı bağlar kurduk."
      },
      {
        "id": 11,
        "eng": "True luxury in travel is not expensive hotels; it is unhurried freedom.",
        "tr": "Seyahatteki gerçek lüks pahalı oteller değil, acele etmeyen özgürlüktür."
      },
      {
        "id": 12,
        "eng": "Stepping outside your comfort zone expands your worldview forever.",
        "tr": "Konfor alanınızın dışına adım atmak dünya görüşünüzü sonsuza kadar genişletir."
      }
    ],
    "questions": [
      {
        "q": "What backpack capacity did they choose?",
        "options": [
          "Twenty liters",
          "Forty-liter backpacks",
          "Eighty liters"
        ],
        "answer": 1
      },
      {
        "q": "How did they cut their food expenses in half?",
        "options": [
          "Skipping meals",
          "Cooking dinners in communal hostel kitchens",
          "Eating fast food"
        ],
        "answer": 1
      },
      {
        "q": "What countries were their fellow hostel friends from?",
        "options": [
          "Brazil, Japan, and Canada",
          "France and Spain",
          "Only Turkey"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 58,
    "level": "A2",
    "title": "Experiencing an Outdoor Summer Music Festival",
    "bgImage": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Live music possesses an extraordinary power to unite thousands of human hearts.",
        "tr": "Canlı müzik binlerce insan kalbini birleştirme konusunda olağanüstü bir güce sahiptir."
      },
      {
        "id": 2,
        "eng": "Last August, my friends and I attended a three-day indie music festival in the valley.",
        "tr": "Geçen ağustos ayında arkadaşlarım ve ben vadideki üç günlük bir bağımsız müzik festivaline katıldık."
      },
      {
        "id": 3,
        "eng": "We pitched our dome tent in the designated grassy meadow beside other music lovers.",
        "tr": "Kubbe çadırımızı diğer müzikseverlerin yanında belirlenen çimenli çayıra kurduk."
      },
      {
        "id": 4,
        "eng": "Three massive timber stages were set up against the backdrop of towering hills.",
        "tr": "Yüksek tepelerin zemininde üç büyük ahşap sahne kurulmuştu."
      },
      {
        "id": 5,
        "eng": "Artisan food trucks served wood-fired pizza, vegetarian tacos, and chilled lemonade.",
        "tr": "Butik yemek kamyonları odun ateşinde pizza, vejetaryen tako ve soğuk limonata servis etti."
      },
      {
        "id": 6,
        "eng": "In the afternoon, we discovered innovative indie folk groups on the forest acoustic stage.",
        "tr": "Öğleden sonra orman akustik sahnesinde yenilikçi indie folk gruplarını keşfettik."
      },
      {
        "id": 7,
        "eng": "The atmospheric combination of acoustic guitar, cello, and vocal harmonies was sublime.",
        "tr": "Akustik gitar, çello ve vokal armonilerinin atmosferik kombinasyonu muhteşemdi."
      },
      {
        "id": 8,
        "eng": "As night fell, laser lights danced across the sky to thumping electronic beats.",
        "tr": "Gece çökerken vuran elektronik ritimlere karşı lazer ışıkları gökyüzünde dans etti."
      },
      {
        "id": 9,
        "eng": "Thousands of jubilant festival-goers danced in harmonious collective euphoria.",
        "tr": "Binlerce neşeli festival katılımcısı uyumlu bir kolektif coşkuyla dans etti."
      },
      {
        "id": 10,
        "eng": "We sang every lyric alongside our favorite headline band until midnight.",
        "tr": "Gece yarısına kadar en sevdiğimiz ana grupla birlikte her şarkı sözünü söyledik."
      },
      {
        "id": 11,
        "eng": "Sharing communal musical celebrations dissolves everyday cynicism and loneliness.",
        "tr": "Ortak müzikal kutlamaları paylaşmak günlük alaycılığı ve yalnızlığı yok eder."
      },
      {
        "id": 12,
        "eng": "Those festival memories will continue to reverberate in our souls for years.",
        "tr": "O festival anıları yıllarca ruhumuzda yankılanmaya devam edecek."
      }
    ],
    "questions": [
      {
        "q": "How long did the music festival last?",
        "options": [
          "One day",
          "Three days",
          "A full week"
        ],
        "answer": 1
      },
      {
        "q": "Where did they pitch their tent?",
        "options": [
          "In a parking lot",
          "In a designated grassy meadow",
          "In a hotel"
        ],
        "answer": 1
      },
      {
        "q": "What instruments played on the forest acoustic stage?",
        "options": [
          "Synthesizer only",
          "Acoustic guitar, cello, and vocal harmonies",
          "Drums only"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 59,
    "level": "A2",
    "title": "Learning Classical Guitar Chords",
    "bgImage": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Mastering a musical instrument demands patience, humility, and daily discipline.",
        "tr": "Bir müzik aletinde ustalaşmak sabır, tevazu ve günlük disiplin gerektirir."
      },
      {
        "id": 2,
        "eng": "At the beginning of this year, I purchased a nylon-string classical acoustic guitar.",
        "tr": "Bu yılın başında naylon telli klasik bir akustik gitar satın aldım."
      },
      {
        "id": 3,
        "eng": "The Spanish cedar neck smelled wonderful and the rosewood body resonated deeply.",
        "tr": "İspanyol sediri sapı harika kokuyordu ve gül ağacı gövdesi derinden yankılanıyordu."
      },
      {
        "id": 4,
        "eng": "My music teacher, Maestro Carlos, emphasized proper hand posture and ergonomics.",
        "tr": "Müzik öğretmenim Maestro Carlos doğru el duruşunu ve ergonomiyi vurguladı."
      },
      {
        "id": 5,
        "eng": "At first, my fingertips developed sore red blisters from pressing against metal frets.",
        "tr": "İlk başta parmak uçlarım metal perdelere basmaktan ağrılı kırmızı su kabarcıkları geliştirdi."
      },
      {
        "id": 6,
        "eng": "Within three weeks, tough protective calluses formed, and finger soreness vanished.",
        "tr": "Üç hafta içinde sert koruyucu nasırlar oluştu ve parmak ağrısı yok oldu."
      },
      {
        "id": 7,
        "eng": "I practiced transitioning between C major, G major, and E minor with a metronome.",
        "tr": "Bir metronomla Do majör, Sol majör ve Mi minör arasında geçiş yapmanın provasını yaptım."
      },
      {
        "id": 8,
        "eng": "Playing slowly with a steady tempo is far more important than rushing through notes.",
        "tr": "Sabit bir tempoyla yavaş çalmak notaları aceleye getirmekten çok daha önemlidir."
      },
      {
        "id": 9,
        "eng": "I learned how to pluck fingerstyle arpeggios using thumb, index, and middle fingers.",
        "tr": "Baş, işaret ve orta parmakları kullanarak parmak stili arpejler çalmayı öğrendim."
      },
      {
        "id": 10,
        "eng": "When I played my first complete Spanish ballad without mistakes, tears filled my eyes.",
        "tr": "İlk eksiksiz İspanyol baladımı hatasız çaldığımda gözlerim yaşardı."
      },
      {
        "id": 11,
        "eng": "Music provides an eloquent emotional outlet beyond the limitations of words.",
        "tr": "Müzik kelimelerin sınırlamalarının ötesinde anlamlı bir duygusal çıkış sağlar."
      },
      {
        "id": 12,
        "eng": "Daily guitar practice has become my personal sanctuary of quiet joy.",
        "tr": "Günlük gitar çalışması benim sessiz neşemin kişisel sığınağı haline geldi."
      }
    ],
    "questions": [
      {
        "q": "What kind of guitar did the author purchase?",
        "options": [
          "Electric guitar",
          "Nylon-string classical acoustic guitar",
          "Bass guitar"
        ],
        "answer": 1
      },
      {
        "q": "What developed on the author's fingertips after three weeks?",
        "options": [
          "Cuts",
          "Tough protective calluses",
          "Nothing"
        ],
        "answer": 1
      },
      {
        "q": "Who was the author's music teacher?",
        "options": [
          "Maestro Carlos",
          "Mr. Thomas",
          "Sarah"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 60,
    "level": "A2",
    "title": "Designing a Cozy Home Study Space",
    "bgImage": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Your physical environment profoundly shapes your cognitive productivity and peace.",
        "tr": "Fiziksel ortamınız bilişsel üretkenliğinizi ve huzurunuzu derinden şekillendirir."
      },
      {
        "id": 2,
        "eng": "Last weekend, I decided to overhaul an underutilized corner of my living room.",
        "tr": "Geçen hafta sonu oturma odamın az kullanılan bir köşesini baştan yaratmaya karar verdim."
      },
      {
        "id": 3,
        "eng": "I painted the accent wall a calming shade of sage green to reduce visual fatigue.",
        "tr": "Görsel yorgunluğu azaltmak için vurgu duvarını adaçayı yeşilinin sakinleştirici bir tonuna boyadım."
      },
      {
        "id": 4,
        "eng": "I installed a sturdy solid oak desk positioned diagonally near natural window light.",
        "tr": "Doğal pencere ışığının yanına çapraz olarak konumlandırılmış sağlam meşe bir masa kurdum."
      },
      {
        "id": 5,
        "eng": "I invested in an ergonomic mesh office chair that supports healthy spinal alignment.",
        "tr": "Sağlıklı omurga hizalamasını destekleyen ergonomik fileli bir ofis koltuğuna yatırım yaptım."
      },
      {
        "id": 6,
        "eng": "I added floating pine bookshelves to display my English textbooks and novels.",
        "tr": "İngilizce ders kitaplarımı ve romanlarımı sergilemek için yüzen çam kitap rafları ekledim."
      },
      {
        "id": 7,
        "eng": "A dimmable warm LED desk lamp provides comfortable glare-free evening illumination.",
        "tr": "Kısılabilir sıcak LED masa lambası parlamasız rahat bir akşam aydınlatması sağlar."
      },
      {
        "id": 8,
        "eng": "I placed two potted air-purifying snake plants on either side of the desk.",
        "tr": "Masanın iki tarafına iki saksı havayı temizleyen paşa kılıcı bitkisi koydum."
      },
      {
        "id": 9,
        "eng": "A ceramic mug warmer keeps my herbal tea piping hot during long study sessions.",
        "tr": "Seramik bir kupa ısıtıcısı uzun çalışma seanslarında bitki çayımı sıcacık tutar."
      },
      {
        "id": 10,
        "eng": "I established a strict rule prohibiting smartphones on the study desktop.",
        "tr": "Çalışma masası üzerinde akıllı telefonları yasaklayan katı bir kural koydum."
      },
      {
        "id": 11,
        "eng": "Having a dedicated sacred space makes learning feel inviting rather than burdensome.",
        "tr": "Özel bir çalışma alanına sahip olmak öğrenmeyi külfetli değil davetkar hissettirir."
      },
      {
        "id": 12,
        "eng": "My new study sanctuary motivates me to read and grow every single day.",
        "tr": "Yeni çalışma sığınağım beni her gün okumaya ve gelişmeye motive ediyor."
      }
    ],
    "questions": [
      {
        "q": "What calming color was painted on the accent wall?",
        "options": [
          "Bright orange",
          "Sage green",
          "Dark black"
        ],
        "answer": 1
      },
      {
        "q": "What plants were placed near the desk?",
        "options": [
          "Roses",
          "Potted snake plants",
          "Cactus"
        ],
        "answer": 1
      },
      {
        "q": "What strict rule was established for the study desk?",
        "options": [
          "No eating",
          "No smartphones allowed on the desk",
          "No books"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 61,
    "level": "B1",
    "title": "The Rise of Renewable Energy",
    "bgImage": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Energy powers modern human society.",
        "tr": "Enerji modern insan toplumuna güç sağlar."
      },
      {
        "id": 2,
        "eng": "For more than a century, countries have heavily relied on coal, oil, and natural gas.",
        "tr": "Bir asırdan fazla bir süredir ülkeler kömür, petrol ve doğal gaza yoğun bir şekilde bağımlı olmuştur."
      },
      {
        "id": 3,
        "eng": "However, this reliance creates serious environmental damage.",
        "tr": "Ancak bu bağımlılık ciddi çevresel hasar yaratmaktadır."
      },
      {
        "id": 4,
        "eng": "Burning fossil fuels releases massive greenhouse gas emissions that trap heat and accelerate global climate change.",
        "tr": "Fosil yakıtların yakılması, ısıyı hapseden ve küresel iklim değişikliğini hızlandıran büyük sera gazı salımlarına yol açar."
      },
      {
        "id": 5,
        "eng": "Clean energy is now an urgent priority.",
        "tr": "Temiz enerji artık acil bir önceliktir."
      },
      {
        "id": 6,
        "eng": "Many progressive nations are investing heavily in solar, wind, and water systems to replace polluting fuels.",
        "tr": "Birçok ilerici ülke, kirletici yakıtların yerini almak üzere güneş, rüzgar ve su sistemlerine yoğun yatırımlar yapıyor."
      },
      {
        "id": 7,
        "eng": "Solar power is expanding rapidly across continents.",
        "tr": "Güneş enerjisi kıtalar genelinde hızla yayılıyor."
      },
      {
        "id": 8,
        "eng": "Modern solar panels convert sunlight directly into clean electrical current without generating any toxic waste.",
        "tr": "Modern güneş panelleri, güneş ışığını herhangi bir zehirli atık üretmeden doğrudan temiz elektrik akımına dönüştürür."
      },
      {
        "id": 9,
        "eng": "Manufacturing costs have fallen dramatically.",
        "tr": "Üretim maliyetleri çarpıcı bir şekilde düştü."
      },
      {
        "id": 10,
        "eng": "Wind power represents another promising solution for utility companies.",
        "tr": "Rüzgar enerjisi, kamu hizmeti şirketleri için bir diğer umut verici çözümü temsil ediyor."
      },
      {
        "id": 11,
        "eng": "Massive wind turbines are installed in windy mountain passes and on stormy ocean shores.",
        "tr": "Devasa rüzgar türbinleri rüzgarlı dağ geçitlerine ve fırtınalı okyanus kıyılarına kurulur."
      },
      {
        "id": 12,
        "eng": "Offshore wind farms capture stronger, steadier breezes.",
        "tr": "Açık deniz rüzgar çiftlikleri daha güçlü, daha istikrarlı rüzgarları yakalar."
      },
      {
        "id": 13,
        "eng": "Yet, renewable power faces technical obstacles.",
        "tr": "Yine de yenilenebilir enerji teknik engellerle karşılaşıyor."
      },
      {
        "id": 14,
        "eng": "Because solar panels do not produce power at night, reliable energy storage becomes essential for communities.",
        "tr": "Güneş panelleri geceleri enerji üretmediğinden, topluluklar için güvenilir enerji depolaması zorunlu hale gelir."
      },
      {
        "id": 15,
        "eng": "Engineers are building giant industrial batteries.",
        "tr": "Mühendisler devasa endüstriyel piller üretiyorlar."
      },
      {
        "id": 16,
        "eng": "These lithium and sodium batteries store daytime surplus electricity and release it during peak evening hours.",
        "tr": "Bu lityum ve sodyum piller gündüz artan elektriği depolar ve yoğun akşam saatlerinde serbest bırakır."
      },
      {
        "id": 17,
        "eng": "The power grid also requires modern upgrades.",
        "tr": "Elektrik şebekesi de modern güncellemelere ihtiyaç duyuyor."
      },
      {
        "id": 18,
        "eng": "Smart digital grids use intelligent sensors to distribute clean electricity efficiently between cities and regions.",
        "tr": "Akıllı dijital şebekeler, temiz elektriği şehirler ve bölgeler arasında verimli bir şekilde dağıtmak için akıllı sensörler kullanır."
      },
      {
        "id": 19,
        "eng": "Governments provide helpful tax credits.",
        "tr": "Hükümetler faydalı vergi indirimleri sağlıyor."
      },
      {
        "id": 20,
        "eng": "Electric vehicles are also becoming popular, replacing gasoline engines on busy city streets.",
        "tr": "Elektrikli araçlar da popüler hale geliyor ve kalabalık şehir sokaklarındaki benzinli motorların yerini alıyor."
      },
      {
        "id": 21,
        "eng": "This transformation creates thousands of skilled jobs.",
        "tr": "Bu dönüşüm binlerce nitelikli iş imkanı yaratıyor."
      },
      {
        "id": 22,
        "eng": "Although complete transition will take decades, international commitment remains stronger than ever before.",
        "tr": "Tam bir geçiş on yıllar alacak olsa da, uluslararası kararlılık her zamankinden daha güçlü kalmaktadır."
      },
      {
        "id": 23,
        "eng": "Local communities are demanding cleaner air.",
        "tr": "Yerel topluluklar daha temiz hava talep ediyor."
      },
      {
        "id": 24,
        "eng": "Choosing clean renewable energy guarantees that future generations inherit a healthier, more stable planet.",
        "tr": "Temiz yenilenebilir enerjiyi seçmek, gelecek nesillerin daha sağlıklı ve daha istikrarlı bir gezegeni miras almasını garanti eder."
      },
      {
        "id": 25,
        "eng": "The future of global power is bright.",
        "tr": "Küresel enerjinin geleceği aydınlıktır."
      }
    ],
    "questions": [
      {
        "q": "What is the main problem with burning fossil fuels?",
        "options": [
          "High storage costs",
          "Greenhouse gas emissions and climate change",
          "Bad smell"
        ],
        "answer": 1
      },
      {
        "q": "Why are batteries needed in clean energy systems?",
        "options": [
          "To store surplus daytime electricity",
          "To clean solar panels",
          "To stop wind"
        ],
        "answer": 0
      },
      {
        "q": "Where are offshore wind turbines built?",
        "options": [
          "In deep caves",
          "On ocean shores",
          "Near coal mines"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 62,
    "level": "B1",
    "title": "The Psychology of Habit Formation",
    "bgImage": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Our lives are largely built on routines.",
        "tr": "Hayatımız büyük ölçüde rutinler üzerine kuruludur."
      },
      {
        "id": 2,
        "eng": "Psychologists estimate that nearly half of our daily behavior is governed by automatic habits rather than conscious thought.",
        "tr": "Psikologlar, günlük davranışlarımızın neredeyse yarısının bilinçli düşünceden ziyade otomatik alışkanlıklar tarafından yönetildiğini tahmin ediyor."
      },
      {
        "id": 3,
        "eng": "Habits exist to conserve cognitive energy.",
        "tr": "Alışkanlıklar bilişsel enerjiyi korumak için vardır."
      },
      {
        "id": 4,
        "eng": "According to behavioral research, every single habit follows an automatic neurological loop composed of three steps.",
        "tr": "Davranışsal araştırmalara göre, her bir alışkanlık üç adımdan oluşan otomatik bir nörolojik döngüyü takip eder."
      },
      {
        "id": 5,
        "eng": "The first element is the cue.",
        "tr": "İlk unsur ipucudur."
      },
      {
        "id": 6,
        "eng": "A cue acts as an environmental trigger, such as a specific time of day or an emotional state like anxiety.",
        "tr": "Bir ipucu, günün belirli bir saati veya kaygı gibi duygusal bir durum gibi çevresel bir tetikleyici görevi görür."
      },
      {
        "id": 7,
        "eng": "Next comes the routine itself.",
        "tr": "Sırada rutinin kendisi gelir."
      },
      {
        "id": 8,
        "eng": "This is the physical, mental, or emotional behavior that you perform automatically in response to the cue.",
        "tr": "Bu, ipucuna yanıt olarak otomatik olarak gerçekleştirdiğiniz fiziksel, zihinsel veya duygusal davranıştır."
      },
      {
        "id": 9,
        "eng": "Finally, there is the reward.",
        "tr": "Son olarak ödül vardır."
      },
      {
        "id": 10,
        "eng": "The reward satisfies your initial craving and convinces your brain that this pattern is worth repeating.",
        "tr": "Ödül, ilk arzunuzu tatmin eder ve beyninizi bu kalıbın tekrarlanmaya değer olduğuna ikna eder."
      },
      {
        "id": 11,
        "eng": "Consider afternoon coffee drinking as an example.",
        "tr": "Örnek olarak öğleden sonra kahve içmeyi düşünün."
      },
      {
        "id": 12,
        "eng": "Feeling tired at two o'clock is the cue that drives you straight to the office kitchen.",
        "tr": "Saat ikide yorgun hissetmek, sizi doğrudan ofis mutfağına götüren ipucudur."
      },
      {
        "id": 13,
        "eng": "The routine is brewing coffee.",
        "tr": "Rutin kahve demlemektir."
      },
      {
        "id": 14,
        "eng": "The pleasant reward is the quick boost of energy and social conversation with colleagues.",
        "tr": "Hoş ödül, hızlı enerji artışı ve iş arkadaşlarıyla yapılan sosyal sohbettir."
      },
      {
        "id": 15,
        "eng": "Breaking bad habits requires smart strategy.",
        "tr": "Kötü alışkanlıkları kırmak akıllıca bir strateji gerektirir."
      },
      {
        "id": 16,
        "eng": "Experts suggest that you cannot eliminate a routine simply through willpower without replacing it with something better.",
        "tr": "Uzmanlar, bir rutini yerine daha iyi bir şey koymadan sadece irade gücüyle ortadan kaldıramayacağınızı öne sürüyor."
      },
      {
        "id": 17,
        "eng": "Keep the same cue and reward.",
        "tr": "Aynı ipucunu ve ödülü koruyun."
      },
      {
        "id": 18,
        "eng": "If stress makes you eat junk food, substitute that unhealthy snack with a brisk ten-minute walk outside.",
        "tr": "Stres abur cubur yemenize neden oluyorsa, o sağlıksız atıştırmalığı dışarıda on dakikalık tempolu bir yürüyüşle değiştirin."
      },
      {
        "id": 19,
        "eng": "Starting tiny is another proven technique.",
        "tr": "Küçük başlamak kanıtlanmış bir başka tekniktir."
      },
      {
        "id": 20,
        "eng": "Committing to reading just two pages of a book every night feels easy and avoids burnout.",
        "tr": "Her gece bir kitabın sadece iki sayfasını okumayı taahhüt etmek kolay hissettirir ve tükenmişliği önler."
      },
      {
        "id": 21,
        "eng": "Consistency matters more than extreme intensity.",
        "tr": "Tutarlılık aşırı yoğunluktan daha önemlidir."
      },
      {
        "id": 22,
        "eng": "Your physical environment should also be arranged to make good habits effortless and visible.",
        "tr": "Fiziksel çevreniz de iyi alışkanlıkları zahmetsiz ve görünür kılacak şekilde düzenlenmelidir."
      },
      {
        "id": 23,
        "eng": "Keep your workout shoes in plain sight.",
        "tr": "Antrenman ayakkabılarınızı göz önünde tutun."
      },
      {
        "id": 24,
        "eng": "When healthy actions turn into automated reflexes, reaching your personal goals becomes inevitable.",
        "tr": "Sağlıklı eylemler otomatik reflekslere dönüştüğünde, kişisel hedeflerinize ulaşmak kaçınılmaz hale gelir."
      },
      {
        "id": 25,
        "eng": "Small daily habits create massive transformations.",
        "tr": "Küçük günlük alışkanlıklar muazzam dönüşümler yaratır."
      }
    ],
    "questions": [
      {
        "q": "What are the three steps of the habit loop?",
        "options": [
          "Start, middle, end",
          "Cue, routine, reward",
          "Plan, action, result"
        ],
        "answer": 1
      },
      {
        "q": "How should you break a bad habit?",
        "options": [
          "Relying only on willpower",
          "Keeping cue/reward and replacing routine",
          "Sleeping more"
        ],
        "answer": 1
      },
      {
        "q": "Why is starting with tiny habits effective?",
        "options": [
          "It avoids burnout and feels easy",
          "It costs less money",
          "It requires tools"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 63,
    "level": "B1",
    "title": "Sustainable Tourism and Travel",
    "bgImage": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Global travel has expanded tremendously.",
        "tr": "Küresel seyahat muazzam bir şekilde genişledi."
      },
      {
        "id": 2,
        "eng": "Cheap flights and online booking platforms allow millions of people to visit exotic destinations every year.",
        "tr": "Ucuz uçuşlar ve çevrimiçi rezervasyon platformları her yıl milyonlarca insanın egzotik yerleri ziyaret etmesini sağlıyor."
      },
      {
        "id": 3,
        "eng": "However, mass tourism brings heavy consequences.",
        "tr": "Ancak kitle turizmi ağır sonuçlar doğurmaktadır."
      },
      {
        "id": 4,
        "eng": "Historic cities like Venice and Amsterdam suffer from overtourism, where visitors overwhelm local services.",
        "tr": "Venedik ve Amsterdam gibi tarihi şehirler, ziyaretçilerin yerel hizmetleri bunalttığı aşırı turizmden muzdariptir."
      },
      {
        "id": 5,
        "eng": "Rents skyrocket for long-term residents.",
        "tr": "Uzun süreli bölge sakinleri için kiralar fırlıyor."
      },
      {
        "id": 6,
        "eng": "In fragile nature reserves, large crowds leave mountains of plastic litter and disturb native wildlife.",
        "tr": "Hassas doğa koruma alanlarında büyük kalabalıklar plastik çöp dağları bırakır ve yerli yaban hayatını rahatsız eder."
      },
      {
        "id": 7,
        "eng": "Sustainable tourism offers a responsible alternative.",
        "tr": "Sürdürülebilir turizm sorumlu bir alternatif sunar."
      },
      {
        "id": 8,
        "eng": "This travel philosophy focuses on protecting cultural heritage and preserving the natural environment for the future.",
        "tr": "Bu seyahat felsefesi, kültürel mirası korumaya ve doğal çevreyi gelecek için muhafaza etmeye odaklanır."
      },
      {
        "id": 9,
        "eng": "Conscious travelers can easily make a difference.",
        "tr": "Bilinçli gezginler kolayca bir fark yaratabilir."
      },
      {
        "id": 10,
        "eng": "Taking high-speed passenger trains instead of short flights dramatically lowers personal carbon footprints.",
        "tr": "Kısa uçuşlar yerine yüksek hızlı yolcu trenlerini kullanmak kişisel karbon ayak izini çarpıcı bir şekilde azaltır."
      },
      {
        "id": 11,
        "eng": "Trains offer scenic, stress-free journeys.",
        "tr": "Trenler manzaralı, stressiz yolculuklar sunar."
      },
      {
        "id": 12,
        "eng": "Supporting locally owned accommodations and family restaurants keeps tourism income directly within the community.",
        "tr": "Yerel işletmelere ait konaklama yerlerini ve aile restoranlarını desteklemek, turizm gelirini doğrudan toplum içinde tutar."
      },
      {
        "id": 13,
        "eng": "Big resort chains often take profits abroad.",
        "tr": "Büyük tatil köyü zincirleri karlarını genellikle yurtdışına götürür."
      },
      {
        "id": 14,
        "eng": "Eating seasonal cuisine introduces travelers to genuine culture and supports local farmers.",
        "tr": "Mevsimlik yemekler yemek, gezginleri özgün kültürle tanıştırır ve yerel çiftçileri destekler."
      },
      {
        "id": 15,
        "eng": "Respecting local social customs is equally important.",
        "tr": "Yerel sosyal geleneklere saygı göstermek de aynı derecede önemlidir."
      },
      {
        "id": 16,
        "eng": "Learning basic courtesy phrases in the native language builds mutual understanding with local people.",
        "tr": "Yerel dilde temel nezaket ifadelerini öğrenmek, yerel halkla karşılıklı anlayış geliştirir."
      },
      {
        "id": 17,
        "eng": "Always follow the leave-no-trace principle.",
        "tr": "Her zaman geride iz bırakmama ilkesine uyun."
      },
      {
        "id": 18,
        "eng": "When hiking in mountains or coral reefs, never collect protected stones, plants, or wild shells.",
        "tr": "Dağlarda veya mercan resiflerinde yürüyüş yaparken asla koruma altındaki taşları, bitkileri veya vahşi deniz kabuklarını toplamayın."
      },
      {
        "id": 19,
        "eng": "Carry a durable refillable water bottle.",
        "tr": "Dayanıklı ve tekrar doldurulabilir bir su şişesi taşıyın."
      },
      {
        "id": 20,
        "eng": "Visiting secondary destinations reduces crowd pressure on famous world capitals.",
        "tr": "İkincil destinasyonları ziyaret etmek, ünlü dünya başkentleri üzerindeki kalabalık baskısını azaltır."
      },
      {
        "id": 21,
        "eng": "Off-season travel provides quieter, richer experiences.",
        "tr": "Sezon dışı seyahat daha sakin ve daha zengin deneyimler sağlar."
      },
      {
        "id": 22,
        "eng": "Prices are also substantially lower outside peak summer.",
        "tr": "Fiyatlar da yoğun yaz döneminin dışında önemli ölçüde daha düşüktür."
      },
      {
        "id": 23,
        "eng": "True travel is about cultural connection.",
        "tr": "Gerçek seyahat kültürel bağ kurmakla ilgilidir."
      },
      {
        "id": 24,
        "eng": "When we treat delicate destinations with deep respect, we preserve their beauty for upcoming generations.",
        "tr": "Hassas destinasyonlara derin bir saygıyla yaklaştığımızda, güzelliklerini gelecek nesiller için korumuş oluruz."
      },
      {
        "id": 25,
        "eng": "Travel with curiosity, kindness, and mindfulness.",
        "tr": "Merakla, nezaketle ve özenle seyahat edin."
      }
    ],
    "questions": [
      {
        "q": "What is a negative impact of overtourism?",
        "options": [
          "Empty streets",
          "Rents skyrocket and services are overwhelmed",
          "No food"
        ],
        "answer": 1
      },
      {
        "q": "Why should travelers support locally owned restaurants?",
        "options": [
          "To keep profits in local community",
          "They are free",
          "Fast food"
        ],
        "answer": 0
      },
      {
        "q": "What does 'leave-no-trace' principle mean?",
        "options": [
          "No photos",
          "Leaving nature undisturbed and packing out trash",
          "No luggage"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 64,
    "level": "B1",
    "title": "The Art of Public Speaking",
    "bgImage": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Public speaking terrifies millions of adults.",
        "tr": "Topluluk önünde konuşmak milyonlarca yetişkini dehşete düşürür."
      },
      {
        "id": 2,
        "eng": "Surveys consistently reveal that glossophobia, or fear of public speech, ranks higher than the fear of spiders.",
        "tr": "Anketler sürekli olarak, topluluk önünde konuşma korkusu olan glossofobinin örümcek korkusundan daha üst sırada yer aldığını ortaya koyuyor."
      },
      {
        "id": 3,
        "eng": "Our bodies trigger an involuntary biological reaction.",
        "tr": "Bedenlerimiz istemsiz bir biyolojik reaksiyon tetikler."
      },
      {
        "id": 4,
        "eng": "When stepping onto an open stage, your heart beats rapidly and adrenaline floods your bloodstream.",
        "tr": "Açık bir sahneye adım attığınızda kalbiniz hızla çarpar ve kanınıza adrenalin dolar."
      },
      {
        "id": 5,
        "eng": "Fortunately, speaking is a learnable craft.",
        "tr": "Neyse ki konuşmak öğrenilebilir bir zanaattır."
      },
      {
        "id": 6,
        "eng": "Thorough preparation remains the ultimate foundation for confidence in front of any live audience.",
        "tr": "Kapsamlı hazırlık, herhangi bir canlı dinleyici kitlesi karşısında özgüvenin nihai temeli olmaya devam eder."
      },
      {
        "id": 7,
        "eng": "Understand your listeners before preparing slides.",
        "tr": "Slaytları hazırlamadan önce dinleyicilerinizi anlayın."
      },
      {
        "id": 8,
        "eng": "Knowing what your audience needs allows you to craft a speech that directly solves their problems.",
        "tr": "Dinleyicilerinizin neye ihtiyacı olduğunu bilmek, doğrudan onların sorunlarını çözen bir konuşma hazırlamanızı sağlar."
      },
      {
        "id": 9,
        "eng": "Every strong presentation follows a clear structure.",
        "tr": "Her güçlü sunum net bir yapıyı takip eder."
      },
      {
        "id": 10,
        "eng": "Begin with an intriguing question, a personal story, or a surprising statistic to capture instant attention.",
        "tr": "Anında dikkat çekmek için merak uyandırıcı bir soruyla, kişisel bir hikayeyle veya şaşırtıcı bir istatistikle başlayın."
      },
      {
        "id": 11,
        "eng": "Audiences remember stories far longer than spreadsheets.",
        "tr": "Dinleyiciler hikayeleri tablolardan çok daha uzun süre hatırlar."
      },
      {
        "id": 12,
        "eng": "Your physical body language speaks before your voice.",
        "tr": "Fiziksel beden diliniz sesinizden önce konuşur."
      },
      {
        "id": 13,
        "eng": "Stand upright with your feet shoulder-width apart to project natural calm and authority.",
        "tr": "Doğal bir sakinlik ve otorite yansıtmak için ayaklarınız omuz genişliğinde açık şekilde dik durun."
      },
      {
        "id": 14,
        "eng": "Maintain steady eye contact with different individuals across the room.",
        "tr": "Odanın dört bir yanındaki farklı bireylerle düzenli göz teması kurun."
      },
      {
        "id": 15,
        "eng": "Vocal control is another vital speaking asset.",
        "tr": "Ses kontrolü bir diğer hayati konuşma avantajıdır."
      },
      {
        "id": 16,
        "eng": "When speakers feel nervous, they naturally rush and speak too quickly without taking proper breaths.",
        "tr": "Konuşmacılar gergin hissettiklerinde, doğal olarak acele ederler ve düzgün nefes almadan çok hızlı konuşurlar."
      },
      {
        "id": 17,
        "eng": "Deliberate pauses are extremely powerful tools.",
        "tr": "Bilinçli duraklamalar son derece güçlü araçlardır."
      },
      {
        "id": 18,
        "eng": "Pausing for two seconds allows your audience to digest critical points and gives you time to think.",
        "tr": "İki saniye duraklamak, dinleyicilerinizin kritik noktaları sindirmesini sağlar ve size düşünme zamanı verir."
      },
      {
        "id": 19,
        "eng": "Keep your presentation slides remarkably visual.",
        "tr": "Sunum slaytlarınızı son derece görsel tutun."
      },
      {
        "id": 20,
        "eng": "Slides packed with tiny text force audiences to read instead of listening to your arguments.",
        "tr": "Küçük metinlerle dolu slaytlar, dinleyicileri argümanlarınızı dinlemek yerine okumaya zorlar."
      },
      {
        "id": 21,
        "eng": "Practice aloud multiple times before speaking.",
        "tr": "Konuşmadan önce defalarca sesli pratik yapın."
      },
      {
        "id": 22,
        "eng": "Recording your rehearsal on a phone reveals annoying filler words like um and uh.",
        "tr": "Provanızı telefona kaydetmek, 'ııı' ve 'şey' gibi sinir bozucu dolgu kelimeleri ortaya çıkarır."
      },
      {
        "id": 23,
        "eng": "Feedback from honest friends speeds up improvement.",
        "tr": "Dürüst arkadaşlardan gelen geri bildirim gelişimi hızlandırır."
      },
      {
        "id": 24,
        "eng": "With regular practice, speaking transforms into an empowering skill that elevates your professional career.",
        "tr": "Düzenli pratikle konuşmak, profesyonel kariyerinizi yükselten güçlendirici bir beceriye dönüşür."
      },
      {
        "id": 25,
        "eng": "Speak with clarity, passion, and purpose.",
        "tr": "Netlikle, tutkuyla ve bir amaçla konuşun."
      }
    ],
    "questions": [
      {
        "q": "What is glossophobia?",
        "options": [
          "Fear of spiders",
          "Fear of public speaking",
          "Fear of heights"
        ],
        "answer": 1
      },
      {
        "q": "Why are deliberate pauses useful?",
        "options": [
          "To check the time",
          "To let listeners digest points",
          "To drink water"
        ],
        "answer": 1
      },
      {
        "q": "What slides should a speaker avoid?",
        "options": [
          "Visual slides",
          "Slides packed with tiny text",
          "Slides with photos"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 65,
    "level": "B1",
    "title": "Financial Literacy for Young Adults",
    "bgImage": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Money management is a critical life skill.",
        "tr": "Para yönetimi kritik bir yaşam becerisidir."
      },
      {
        "id": 2,
        "eng": "Unfortunately, standard academic schools rarely teach students how to manage their personal income effectively.",
        "tr": "Ne yazık ki, standart okullar nadiren öğrencilere kişisel gelirlerini nasıl etkili yöneteceklerini öğretir."
      },
      {
        "id": 3,
        "eng": "Many graduates quickly accumulate expensive credit debt.",
        "tr": "Birçok mezun hızla pahalı kredi borcu biriktirir."
      },
      {
        "id": 4,
        "eng": "Without financial literacy, individuals make emotional purchasing decisions that compromise their future freedom.",
        "tr": "Finansal okuryazarlık olmadan bireyler, gelecekteki özgürlüklerini tehlikeye atan duygusal satın alma kararları verirler."
      },
      {
        "id": 5,
        "eng": "Building personal wealth begins with a budget.",
        "tr": "Kişisel servet inşa etmek bir bütçeyle başlar."
      },
      {
        "id": 6,
        "eng": "A simple budget tracks incoming earnings and categorizes every expense with precision.",
        "tr": "Basit bir bütçe gelen kazançları takip eder ve her harcamayı hassasiyetle sınıflandırır."
      },
      {
        "id": 7,
        "eng": "The 50/30/20 rule is widely recommended.",
        "tr": "50/30/20 kuralı yaygın olarak tavsiye edilir."
      },
      {
        "id": 8,
        "eng": "Under this model, fifty percent of monthly income covers essential living needs like housing, groceries, and utilities.",
        "tr": "Bu modelde aylık gelirin yüzde ellisi barınma, market ve faturalar gibi temel yaşam ihtiyaçlarını karşılar."
      },
      {
        "id": 9,
        "eng": "Thirty percent goes toward personal discretionary wants.",
        "tr": "Yüzde otuzu kişisel keyfi isteklere gider."
      },
      {
        "id": 10,
        "eng": "The final twenty percent must be saved or invested immediately.",
        "tr": "Son yüzde yirmi ise derhal biriktirilmeli veya yatırıma dönüştürülmelidir."
      },
      {
        "id": 11,
        "eng": "An emergency fund is your primary shield.",
        "tr": "Bir acil durum fonu sizin birincil kalkanınızdır."
      },
      {
        "id": 12,
        "eng": "Save three to six months of bare living expenses inside an accessible high-yield bank account.",
        "tr": "Üç ila altı aylık asgari yaşam masraflarını erişilebilir, yüksek getirili bir banka hesabında biriktirin."
      },
      {
        "id": 13,
        "eng": "This fund protects you against sudden job loss or expensive medical emergencies without requiring loans.",
        "tr": "Bu fon, kredi çekmeye gerek kalmadan sizi ani iş kaybına veya pahalı tıbbi acil durumlara karşı korur."
      },
      {
        "id": 14,
        "eng": "Avoid high-interest consumer debt like the plague.",
        "tr": "Yüksek faizli tüketici borcundan vebadan kaçar gibi kaçının."
      },
      {
        "id": 15,
        "eng": "Credit cards demand extreme personal discipline.",
        "tr": "Kredi kartları aşırı kişisel disiplin gerektirir."
      },
      {
        "id": 16,
        "eng": "Paying only the minimum balance triggers compound interest against you, costing thousands in unnecessary fees.",
        "tr": "Yalnızca asgari bakiyeyi ödemek bileşik faizi aleyhinize işletir ve binlerce liralık gereksiz ücrete mal olur."
      },
      {
        "id": 17,
        "eng": "Always pay your statement balance completely every month.",
        "tr": "Her ay hesap özeti bakiyenizi her zaman tamamen ödeyin."
      },
      {
        "id": 18,
        "eng": "Compound interest can also work in your favor.",
        "tr": "Bileşik faiz lehinize de çalışabilir."
      },
      {
        "id": 19,
        "eng": "Investing early inside broad index funds allows small monthly contributions to grow into substantial wealth.",
        "tr": "Geniş tabanlı endeks fonlarına erken yatırım yapmak, küçük aylık katkıların önemli bir servete dönüşmesini sağlar."
      },
      {
        "id": 20,
        "eng": "Time in the market beats trying to time the market.",
        "tr": "Piyasada geçirilen zaman, piyasanın zamanını tahmin etmeye çalışmaktan daha üstündür."
      },
      {
        "id": 21,
        "eng": "Learn the difference between assets and liabilities.",
        "tr": "Varlıklar ve yükümlülükler arasındaki farkı öğrenin."
      },
      {
        "id": 22,
        "eng": "Assets put money into your pockets, while liabilities steadily drain your cash reserves over time.",
        "tr": "Varlıklar cebinize para koyarken, yükümlülükler zamanla nakit rezervlerinizi düzenli olarak tüketir."
      },
      {
        "id": 23,
        "eng": "Practice conscious delayed gratification with large purchases.",
        "tr": "Büyük satın alımlarda bilinçli ertelemeli tatmin uygulayın."
      },
      {
        "id": 24,
        "eng": "When you master your financial choices today, you unlock immense security and personal peace tomorrow.",
        "tr": "Bugün finansal seçimlerinizde ustalaştığınızda, yarın muazzam bir güvenlik ve kişisel huzurun kapısını aralarsınız."
      },
      {
        "id": 25,
        "eng": "Financial freedom is created through daily discipline.",
        "tr": "Finansal özgürlük günlük disiplinle yaratılır."
      }
    ],
    "questions": [
      {
        "q": "In 50/30/20, what is the 20% allocated to?",
        "options": [
          "Dining out",
          "Savings and investments",
          "Entertainment"
        ],
        "answer": 1
      },
      {
        "q": "How many months of expenses should an emergency fund cover?",
        "options": [
          "1 week",
          "3 to 6 months",
          "10 years"
        ],
        "answer": 1
      },
      {
        "q": "What is the danger of paying only the minimum balance?",
        "options": [
          "Compound interest against you",
          "Cards expire",
          "Heavy cards"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 66,
    "level": "B2",
    "title": "The Psychology of Decision Fatigue",
    "bgImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Humans make hundreds of choices daily.",
        "tr": "İnsanlar her gün yüzlerce seçim yapar."
      },
      {
        "id": 2,
        "eng": "From trivial meal selections to complex business negotiations, modern life demands relentless cognitive evaluation.",
        "tr": "Önemsiz yemek tercihlerinden karmaşık iş müzakerelerine kadar, modern hayat aralıksız bilişsel değerlendirme talep eder."
      },
      {
        "id": 3,
        "eng": "This mental taxation has a biological limit.",
        "tr": "Bu zihinsel vergilendirmenin biyolojik bir sınırı vardır."
      },
      {
        "id": 4,
        "eng": "Psychologists define decision fatigue as the deteriorating quality of choices made after prolonged sessions of decision-making.",
        "tr": "Psikologlar karar yorgunluğunu, uzun süren karar verme süreçlerinin ardından yapılan seçimlerin kalitesinin düşmesi olarak tanımlarlar."
      },
      {
        "id": 5,
        "eng": "Willpower behaves much like a physical muscle.",
        "tr": "İrade gücü tıpkı fiziksel bir kas gibi davranır."
      },
      {
        "id": 6,
        "eng": "When cognitive energy is depleted, the brain desperately searches for shortcuts to conserve its remaining fuel.",
        "tr": "Bilişsel enerji tükendiğinde, beyin kalan yakıtını korumak için çaresizce kestirmeler arar."
      },
      {
        "id": 7,
        "eng": "People either act impulsively or avoid choices completely.",
        "tr": "İnsanlar ya dürtüsel davranır ya da seçimlerden tamamen kaçınırlar."
      },
      {
        "id": 8,
        "eng": "A famous judicial study revealed that judges granted parole far more frequently after breakfast and lunch breaks.",
        "tr": "Ünlü bir adli araştırma, yargıçların kahvaltı ve öğle yemeği molalarından hemen sonra çok daha sık şartlı tahliye verdiğini ortaya koydu."
      },
      {
        "id": 9,
        "eng": "Mental exhaustion quietly eroded their judicial empathy.",
        "tr": "Zihinsel tükenmişlik adli empatilerini sessizce yıprattı."
      },
      {
        "id": 10,
        "eng": "Supermarkets exploit this vulnerability aggressively.",
        "tr": "Süpermarketler bu kırılganlığı agresif bir şekilde istismar eder."
      },
      {
        "id": 11,
        "eng": "After shoppers navigate crowded aisles comparing prices, checkout stands tempt their exhausted brains with candy and soda.",
        "tr": "Müşteriler fiyatları karşılaştırarak kalabalık koridorlarda dolaştıktan sonra, kasalar tükenmiş beyinlerini şeker ve gazlı içeceklerle cezbeder."
      },
      {
        "id": 12,
        "eng": "Decision fatigue also sabotages workplace productivity.",
        "tr": "Karar yorgunluğu iş yeri verimliliğini de sabote eder."
      },
      {
        "id": 13,
        "eng": "Executives who waste peak morning hours replying to minor emails struggle with high-stakes strategic dilemmas later.",
        "tr": "Sabahın en verimli saatlerini önemsiz e-postaları yanıtlayarak harcayan yöneticiler, daha sonra yüksek riskli stratejik ikilemlerde zorlanırlar."
      },
      {
        "id": 14,
        "eng": "Steve Jobs famously adopted a uniform wardrobe.",
        "tr": "Steve Jobs tek tip bir gardırobu benimsemesiyle ünlüydü."
      },
      {
        "id": 15,
        "eng": "By wearing identical outfits daily, he eliminated trivial clothing dilemmas and preserved bandwidth for technological design.",
        "tr": "Her gün aynı kıyafetleri giyerek önemsiz giyim ikilemlerini ortadan kaldırdı ve kapasitesini teknolojik tasarım için korudu."
      },
      {
        "id": 16,
        "eng": "Automating recurring routines is the best countermeasure.",
        "tr": "Tekrarlayan rutinleri otomatikleştirmek en iyi karşı önlemdir."
      },
      {
        "id": 17,
        "eng": "When decisions become habitual, the prefrontal cortex rests while basal ganglia handle automated actions effortlessly.",
        "tr": "Kararlar alışkanlık haline geldiğinde, bazal ganglionlar otomatik eylemleri zahmetsizce yürütürken prefrontal korteks dinlenir."
      },
      {
        "id": 18,
        "eng": "Schedule demanding analytical tasks early.",
        "tr": "Zorlu analitik görevleri erken saatlere planlayın."
      },
      {
        "id": 19,
        "eng": "Never negotiate salary or make major financial commitments late at night when self-regulation is lowest.",
        "tr": "Özdenetimin en düşük olduğu gece geç saatlerde asla maaş pazarlığı yapmayın veya büyük finansal taahhütlerde bulunmayın."
      },
      {
        "id": 20,
        "eng": "Nutrition also directly influences executive control.",
        "tr": "Beslenme de yürütücü kontrolü doğrudan etkiler."
      },
      {
        "id": 21,
        "eng": "The brain consumes significant blood glucose during intense deliberation, requiring balanced meals to maintain endurance.",
        "tr": "Beyin yoğun müzakereler sırasında önemli miktarda kan şekeri tüketir ve dayanıklılığı sürdürmek için dengeli öğünler gerektirir."
      },
      {
        "id": 22,
        "eng": "Delegate minor responsibilities to team members.",
        "tr": "Küçük sorumlulukları ekip üyelerine devredin."
      },
      {
        "id": 23,
        "eng": "Simplifying personal lifestyle options protects mental sharpness.",
        "tr": "Kişisel yaşam tarzı seçeneklerini basitleştirmek zihinsel keskinliği korur."
      },
      {
        "id": 24,
        "eng": "By consciously managing our daily mental energy, we make superior decisions and lead far more balanced lives.",
        "tr": "Günlük zihinsel enerjimizi bilinçli olarak yöneterek, üstün kararlar verir ve çok daha dengeli hayatlar süreriz."
      },
      {
        "id": 25,
        "eng": "Protect your attention like your greatest treasure.",
        "tr": "Dikkatinizi en büyük hazineniz gibi koruyun."
      }
    ],
    "questions": [
      {
        "q": "What is decision fatigue?",
        "options": [
          "Muscle pain",
          "Deteriorating quality of decisions after prolonged choosing",
          "Computer crash"
        ],
        "answer": 1
      },
      {
        "q": "Why did Steve Jobs wear identical outfits?",
        "options": [
          "Save money",
          "Eliminate clothing dilemmas and save mental energy",
          "Disliked clothes"
        ],
        "answer": 1
      },
      {
        "q": "What fuel does the brain consume during deliberation?",
        "options": [
          "Adrenaline",
          "Blood glucose",
          "Water"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 67,
    "level": "B2",
    "title": "Urban Green Spaces and Mental Well-being",
    "bgImage": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Global cities are expanding rapidly.",
        "tr": "Küresel şehirler hızla genişliyor."
      },
      {
        "id": 2,
        "eng": "As concrete towers replace natural landscapes, urban residents increasingly suffer from elevated chronic stress and anxiety.",
        "tr": "Beton kuleler doğal manzaraların yerini aldıkça, kent sakinleri giderek daha fazla kronik stres ve kaygıdan muzdarip oluyor."
      },
      {
        "id": 3,
        "eng": "Urban planners now recognize this crisis.",
        "tr": "Şehir plancıları artık bu krizi kabul ediyor."
      },
      {
        "id": 4,
        "eng": "Public parks and botanical reserves act as essential environmental buffers against the toxic pressures of city life.",
        "tr": "Halka açık parklar ve botanik rezervler, şehir hayatının zehirli baskılarına karşı temel çevresel tamponlar olarak işlev görür."
      },
      {
        "id": 5,
        "eng": "Immersion in greenery reduces cortisol levels.",
        "tr": "Yeşilliğin içine girmek kortizol seviyelerini düşürür."
      },
      {
        "id": 6,
        "eng": "The Japanese practice of Shinrin-yoku, or forest bathing, proves that spending time among trees stimulates parasympathetic relaxation.",
        "tr": "Japon Shinrin-yoku yani orman banyosu pratiği, ağaçlar arasında vakit geçirmenin parasempatik rahatlamayı uyardığını kanıtlıyor."
      },
      {
        "id": 7,
        "eng": "Heart rates drop within twenty minutes.",
        "tr": "Kalp atış hızları yirmi dakika içinde düşer."
      },
      {
        "id": 8,
        "eng": "Moreover, mature trees capture hazardous particulate pollutants emitted by diesel engines along congested metropolitan avenues.",
        "tr": "Ayrıca olgun ağaçlar, kalabalık metropol caddelerindeki dizel motorların yaydığı tehlikeli partikül kirleticileri yakalar."
      },
      {
        "id": 9,
        "eng": "Vegetation cools surrounding concrete corridors naturally.",
        "tr": "Bitki örtüsü çevreleyen beton koridorları doğal yollarla soğutur."
      },
      {
        "id": 10,
        "eng": "Through natural shade and moisture transpiration, urban greenery effectively mitigates the dangerous urban heat island effect.",
        "tr": "Doğal gölge ve nem terlemesi yoluyla kentsel yeşillik, tehlikeli kentsel ısı adası etkisini etkili bir şekilde hafifletir."
      },
      {
        "id": 11,
        "eng": "Neighborhood parks also foster social unity.",
        "tr": "Mahalle parkları sosyal birliği de pekiştirir."
      },
      {
        "id": 12,
        "eng": "Communal gardens and green public plazas provide welcoming spaces where diverse socioeconomic groups connect and exercise.",
        "tr": "Topluluk bahçeleri ve yeşil halk meydanları, farklı sosyoekonomik grupların iletişim kurduğu ve spor yaptığı sıcak alanlar sunar."
      },
      {
        "id": 13,
        "eng": "Children with green access develop better focus.",
        "tr": "Yeşil alan erişimi olan çocuklar daha iyi odaklanma geliştirir."
      },
      {
        "id": 14,
        "eng": "Clinical trials show that natural schoolyards substantially diminish attention deficit symptoms and aggressive behaviors among pupils.",
        "tr": "Klinik deneyler, doğal okul bahçelerinin öğrenciler arasındaki dikkat eksikliği semptomlarını ve agresif davranışları önemli ölçüde azalttığını gösteriyor."
      },
      {
        "id": 15,
        "eng": "Nature effortlessly restores depleted cognitive attention.",
        "tr": "Doğa, tükenmiş bilişsel dikkati zahmetsizce geri kazandırır."
      },
      {
        "id": 16,
        "eng": "Observing organic patterns like rustling leaves allows our directed analytical focus to rest and recharge completely.",
        "tr": "Hışırdayan yapraklar gibi organik desenleri gözlemlemek, yönlendirilmiş analitik odağımızın dinlenmesini ve tamamen yenilenmesini sağlar."
      },
      {
        "id": 17,
        "eng": "Modern architecture is embracing living design.",
        "tr": "Modern mimari yaşayan tasarımı benimsiyor."
      },
      {
        "id": 18,
        "eng": "Vertical forests and rooftop agricultural gardens turn sterile glass skyscrapers into functional biodiverse ecosystems.",
        "tr": "Dikey ormanlar ve çatı tarım bahçeleri, steril cam gökdelenleri işlevsel biyoçeşitli ekosistemlere dönüştürür."
      },
      {
        "id": 19,
        "eng": "Singapore leads this visionary movement.",
        "tr": "Singapur bu vizyoner harekete öncülük ediyor."
      },
      {
        "id": 20,
        "eng": "However, environmental disparities persist across low-income districts lacking equal access to municipal parks and trees.",
        "tr": "Ancak belediye parklarına ve ağaçlarına eşit erişimden yoksun düşük gelirli bölgelerde çevresel eşitsizlikler sürmektedir."
      },
      {
        "id": 21,
        "eng": "Equal access to nature is justice.",
        "tr": "Doğaya eşit erişim bir adalettir."
      },
      {
        "id": 22,
        "eng": "Equitable urban investment must guarantee every citizen safe, clean green spaces within walking distance from home.",
        "tr": "Adil kentsel yatırımlar, her vatandaşın evine yürüme mesafesinde güvenli, temiz yeşil alanları garanti etmelidir."
      },
      {
        "id": 23,
        "eng": "Green design is a public health necessity.",
        "tr": "Yeşil tasarım bir halk sağlığı gerekliliğidir."
      },
      {
        "id": 24,
        "eng": "Prioritizing natural urban ecosystems safeguards human psychological well-being as global populations continue migrating into dense cities.",
        "tr": "Doğal kentsel ekosistemleri önceliklendirmek, küresel nüfus yoğun şehirlere göç etmeyi sürdürürken insan psikolojik sağlığını korur."
      },
      {
        "id": 25,
        "eng": "Nature and urban progress must coexist.",
        "tr": "Doğa ve kentsel ilerleme bir arada var olmalıdır."
      }
    ],
    "questions": [
      {
        "q": "What Japanese therapeutic practice means 'forest bathing'?",
        "options": [
          "Ikebana",
          "Shinrin-yoku",
          "Karate"
        ],
        "answer": 1
      },
      {
        "q": "How do trees reduce urban heat island effect?",
        "options": [
          "Shade and moisture transpiration",
          "Blocking sun forever",
          "Drinking water"
        ],
        "answer": 0
      },
      {
        "q": "What happens to cortisol levels when in greenery?",
        "options": [
          "Increase",
          "Decrease",
          "Stay frozen"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 68,
    "level": "B2",
    "title": "The Evolution of Global Supply Chains",
    "bgImage": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Global commerce connects distant continents seamlessly.",
        "tr": "Küresel ticaret uzak kıtaları kusursuz bir şekilde birbirine bağlar."
      },
      {
        "id": 2,
        "eng": "Over past decades, advanced telecommunications and containerized shipping created an unprecedented interconnected world economy.",
        "tr": "Geçtiğimiz on yıllar boyunca gelişmiş telekomünikasyon ve konteynerli taşımacılık, benzeri görülmemiş bir birbirine bağlı dünya ekonomisi yarattı."
      },
      {
        "id": 3,
        "eng": "Corporations dismantled expensive local production facilities.",
        "tr": "Şirketler pahalı yerel üretim tesislerini tasfiye etti."
      },
      {
        "id": 4,
        "eng": "In pursuit of cheap offshore labor, manufacturers fragmented their supply networks across multiple specialized nations.",
        "tr": "Ucuz denizaşırı iş gücü arayışıyla üreticiler, tedarik ağlarını birden fazla uzmanlaşmış ülkeye böldüler."
      },
      {
        "id": 5,
        "eng": "Just-in-time manufacturing became standard gospel.",
        "tr": "Tam zamanında üretim standart bir öğreti haline geldi."
      },
      {
        "id": 6,
        "eng": "Under this lean strategy, companies eliminated warehouse stockpiles to save millions in storage and inventory overhead.",
        "tr": "Bu yalın strateji altında şirketler, depolama ve envanter genel giderlerinden milyonlarca tasarruf etmek için stokları ortadan kaldırdı."
      },
      {
        "id": 7,
        "eng": "Consumer products became remarkably affordable worldwide.",
        "tr": "Tüketici ürünleri dünya çapında son derece uygun fiyatlı hale geldi."
      },
      {
        "id": 8,
        "eng": "However, this ultra-efficient operational system created immense systemic fragility against unexpected global shocks.",
        "tr": "Ancak bu ultra verimli operasyonel sistem, beklenmedik küresel şoklara karşı muazzam bir sistemik kırılganlık yarattı."
      },
      {
        "id": 9,
        "eng": "Recent geopolitical conflicts exposed these vulnerabilities.",
        "tr": "Son jeopolitik çatışmalar bu kırılganlıkları açığa çıkardı."
      },
      {
        "id": 10,
        "eng": "A single blocked cargo vessel at the Suez Canal immobilized tens of billions in global trade.",
        "tr": "Süveyş Kanalı'nda mahsur kalan tek bir kargo gemisi, küresel ticarette on milyarlarca doları hareketsiz kıldı."
      },
      {
        "id": 11,
        "eng": "Semiconductor shortages crippled global automobile assembly.",
        "tr": "Yarı iletken kıtlığı küresel otomobil montajını felç etti."
      },
      {
        "id": 12,
        "eng": "When microchip factories shuttered abroad, vehicle plants worldwide halted production, inflicting billions in losses.",
        "tr": "Denizaşırı mikroçip fabrikaları kapandığında, dünya çapındaki araç fabrikaları üretimi durdurarak milyarlarca dolarlık zarara yol açtı."
      },
      {
        "id": 13,
        "eng": "Corporate executives are now shifting strategies.",
        "tr": "Kurumsal yöneticiler artık stratejilerini değiştiriyor."
      },
      {
        "id": 14,
        "eng": "Resilience has rapidly replaced pure cost minimization as the primary operational priority across industries.",
        "tr": "Dayanıklılık, endüstriler genelinde birincil operasyonel öncelik olarak saf maliyet minimizasyonunun yerini hızla aldı."
      },
      {
        "id": 15,
        "eng": "Nearshoring is gaining tremendous international momentum.",
        "tr": "Nearshoring (yakın ülkeye taşıma) muazzam bir uluslararası ivme kazanıyor."
      },
      {
        "id": 16,
        "eng": "Enterprises are relocating critical manufacturing hubs to neighboring countries to shorten transit routes dramatically.",
        "tr": "İşletmeler, transit rotalarını önemli ölçüde kısaltmak için kritik üretim merkezlerini komşu ülkelere taşıyor."
      },
      {
        "id": 17,
        "eng": "Friendshoring provides an additional political safeguard.",
        "tr": "Friendshoring (dost ülkeye taşıma) ek bir siyasi güvence sağlar."
      },
      {
        "id": 18,
        "eng": "By partnering with ideologically aligned governments, businesses effectively insulate distribution networks from geopolitical sanctions.",
        "tr": "İşletmeler, ideolojik olarak uyumlu hükümetlerle ortaklık kurarak dağıtım ağlarını jeopolitik yaptırımlardan etkili bir şekilde yalıtır."
      },
      {
        "id": 19,
        "eng": "Digital tracking enhances end-to-end visibility.",
        "tr": "Dijital takip uçtan uca görünürlüğü artırır."
      },
      {
        "id": 20,
        "eng": "Predictive machine learning algorithms now detect maritime shipping bottlenecks before vessels depart destination ports.",
        "tr": "Öngörücü makine öğrenimi algoritmaları artık gemiler varış limanlarından ayrılmadan önce deniz taşımacılığı darboğazlarını tespit ediyor."
      },
      {
        "id": 21,
        "eng": "Environmental regulations demand cleaner sea logistics.",
        "tr": "Çevre düzenlemeleri daha temiz deniz lojistiği talep ediyor."
      },
      {
        "id": 22,
        "eng": "Global shipping generates heavy carbon emissions, prompting investments in green hydrogen and alternative biofuels.",
        "tr": "Küresel taşımacılık ağır karbon salımları üreterek yeşil hidrojen ve alternatif biyoyakıtlara yatırımları teşvik ediyor."
      },
      {
        "id": 23,
        "eng": "Supply chains are becoming smarter and localized.",
        "tr": "Tedarik zincirleri daha akıllı ve yerelleşmiş hale geliyor."
      },
      {
        "id": 24,
        "eng": "Companies that balance economic agility with geographical foresight will decisively conquer volatile future markets.",
        "tr": "Ekonomik çevikliği coğrafi öngörüyle dengeleyen şirketler, değişken geleceğin pazarlarını kesin bir şekilde fethedecektir."
      },
      {
        "id": 25,
        "eng": "True strength lies in supply flexibility.",
        "tr": "Gerçek güç tedarik esnekliğinde yatar."
      }
    ],
    "questions": [
      {
        "q": "What was the primary goal of just-in-time manufacturing?",
        "options": [
          "Large warehouse stockpiles",
          "Minimizing storage overhead to save money",
          "Hiring drivers"
        ],
        "answer": 1
      },
      {
        "q": "What does nearshoring mean?",
        "options": [
          "Moving factories closer to consumer markets",
          "Selling online",
          "Closing shops"
        ],
        "answer": 0
      },
      {
        "q": "Which shortage halted car assembly lines?",
        "options": [
          "Rubber tires",
          "Semiconductor microchips",
          "Windshields"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": 69,
    "level": "B2",
    "title": "Ethical Dilemmas in AI and Automation",
    "bgImage": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Artificial intelligence is advancing at blinding speed.",
        "tr": "Yapay zeka baş döndürücü bir hızla ilerliyor."
      },
      {
        "id": 2,
        "eng": "Autonomous algorithms now evaluate loan applicants, screen job resumes, and assist judges with criminal sentencing.",
        "tr": "Otonom algoritmalar artık kredi başvurularını değerlendiriyor, iş özgeçmişlerini eliyor ve yargıçlara ceza infazlarında yardımcı oluyor."
      },
      {
        "id": 3,
        "eng": "These automated systems offer superhuman speed.",
        "tr": "Bu otomatik sistemler insanüstü bir hız sunar."
      },
      {
        "id": 4,
        "eng": "However, deploying automated machine learning models without strict ethical oversight creates perilous social consequences.",
        "tr": "Ancak makine öğrenimi modellerini sıkı etik denetim olmadan devreye sokmak tehlikeli sosyal sonuçlar doğurur."
      },
      {
        "id": 5,
        "eng": "Algorithmic bias represents a critical danger.",
        "tr": "Algoritmik önyargı kritik bir tehlikeyi temsil eder."
      },
      {
        "id": 6,
        "eng": "Because predictive algorithms are trained on historical data, they inevitably inherit and amplify human societal prejudices.",
        "tr": "Öngörücü algoritmalar geçmiş veriler üzerinde eğitildiğinden, kaçınılmaz olarak insan toplumsal önyargılarını miras alır ve büyütür."
      },
      {
        "id": 7,
        "eng": "Facial recognition software produces frequent misidentifications.",
        "tr": "Yüz tanıma yazılımı sık sık yanlış teşhisler üretir."
      },
      {
        "id": 8,
        "eng": "Studies confirm that these scanning tools exhibit substantially higher error rates when analyzing ethnic minority faces.",
        "tr": "Araştırmalar, bu tarama araçlarının etnik azınlık yüzlerini analiz ederken önemli ölçüde daha yüksek hata oranları sergilediğini doğrulamaktadır."
      },
      {
        "id": 9,
        "eng": "Flawed algorithms can lead to wrongful arrests.",
        "tr": "Hatalı algoritmalar haksız tutuklamalara yol açabilir."
      },
      {
        "id": 10,
        "eng": "The black box dilemma presents another profound challenge.",
        "tr": "Kara kutu ikilemi bir başka derin zorluk sunar."
      },
      {
        "id": 11,
        "eng": "Complex deep neural networks cannot explain the precise logical steps behind their automated conclusions.",
        "tr": "Karmaşık derin sinir ağları, otomatik sonuçlarının arkasındaki kesin mantıksal adımları açıklayamaz."
      },
      {
        "id": 12,
        "eng": "Due process requires understandable legal explanations.",
        "tr": "Adil yargılanma hakkı anlaşılabilir yasal açıklamalar gerektirir."
      },
      {
        "id": 13,
        "eng": "If an algorithm denies bail or parole, defendants have the right to know why.",
        "tr": "Bir algoritma kefaleti veya şartlı tahliyeyi reddederse, sanıkların nedenini bilme hakkı vardır."
      },
      {
        "id": 14,
        "eng": "Autonomous vehicles introduce philosophical dilemmas onto highways.",
        "tr": "Otonom araçlar otoyollarda felsefi ikilemler ortaya çıkarır."
      },
      {
        "id": 15,
        "eng": "In unavoidable collision scenarios, software must choose which lives to prioritize based on programmed values.",
        "tr": "Kaçınılmaz çarpışma senaryolarında, yazılım programlanmış değerlere göre hangi hayatlara öncelik vereceğini seçmelidir."
      },
      {
        "id": 16,
        "eng": "Workplace automation threatens cognitive and manual labor.",
        "tr": "İş yeri otomasyonu bilişsel ve kol gücüne dayalı emeği tehdit eder."
      },
      {
        "id": 17,
        "eng": "Generative software and robotic machinery are rapidly displacing skilled professionals, writers, and assembly technicians.",
        "tr": "Üretken yazılımlar ve robotik makineler nitelikli profesyonelleri, yazarları ve montaj teknisyenlerini hızla yerinden ediyor."
      },
      {
        "id": 18,
        "eng": "Wealth could concentrate among tech monopolists.",
        "tr": "Servet teknoloji tekelcilerinin elinde toplanabilir."
      },
      {
        "id": 19,
        "eng": "Economists urge governments to adopt universal basic income and aggressive retraining programs.",
        "tr": "Ekonomistler hükümetleri evrensel temel geliri ve agresif yeniden eğitim programlarını benimsemeye çağırıyor."
      },
      {
        "id": 20,
        "eng": "Enforceable regulatory frameworks are vital.",
        "tr": "Yaptırımı olan düzenleyici çerçeveler hayati önem taşır."
      },
      {
        "id": 21,
        "eng": "The European Union has enacted landmark regulations classifying AI systems by their threat level.",
        "tr": "Avrupa Birliği, yapay zeka sistemlerini tehdit düzeylerine göre sınıflandıran dönüm noktası niteliğinde düzenlemeleri yürürlüğe koydu."
      },
      {
        "id": 22,
        "eng": "High-risk systems must mandate human-in-the-loop oversight.",
        "tr": "Yüksek riskli sistemler, süreçte insanın yer aldığı denetimi zorunlu kılmalıdır."
      },
      {
        "id": 23,
        "eng": "Technology must always serve humanity.",
        "tr": "Teknoloji her zaman insanlığa hizmet etmelidir."
      },
      {
        "id": 24,
        "eng": "Establishing robust ethical guardrails today ensures that automation enhances human potential instead of diminishing it.",
        "tr": "Bugün sağlam etik güvenceler oluşturmak, otomasyonun insan potansiyelini azaltmak yerine geliştirmesini sağlar."
      },
      {
        "id": 25,
        "eng": "Human dignity remains non-negotiable.",
        "tr": "İnsan onuru tartışılamaz bir değerdir."
      }
    ],
    "questions": [
      {
        "q": "What causes algorithmic bias in AI?",
        "options": [
          "Hardware glitches",
          "Training models on historical data with prejudices",
          "Low battery"
        ],
        "answer": 1
      },
      {
        "q": "What is the 'black box' problem in AI?",
        "options": [
          "Painted computers",
          "Deep networks unable to explain their reasoning",
          "Broken screen"
        ],
        "answer": 1
      },
      {
        "q": "How does EU regulate AI?",
        "options": [
          "Classifying systems according to risk level",
          "Banning computers",
          "Taxing Internet"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 70,
    "level": "B2",
    "title": "The Impact of Bilingualism on Brain Plasticity",
    "bgImage": "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    "sentences": [
      {
        "id": 1,
        "eng": "Language learning transforms the human mind.",
        "tr": "Dil öğrenimi insan zihnini dönüştürür."
      },
      {
        "id": 2,
        "eng": "For decades, flawed pedagogical theories erroneously claimed that raising children bilingually would confuse their grammatical development.",
        "tr": "On yıllar boyunca kusurlu pedagojik teoriler, çocukları iki dilli yetiştirmenin dilbilgisel gelişimlerini karıştıracağını hatalı bir şekilde iddia etti."
      },
      {
        "id": 3,
        "eng": "Modern neuroimaging completely disproved that myth.",
        "tr": "Modern beyin görüntüleme bu efsaneyi tamamen çürüttü."
      },
      {
        "id": 4,
        "eng": "Neuroscientists now prove that speaking multiple languages dramatically improves neural plasticity and cognitive longevity.",
        "tr": "Sinirbilimciler artık birden fazla dil konuşmanın sinirsel plastisiteyi ve bilişsel uzun ömürlülüğü çarpıcı bir şekilde geliştirdiğini kanıtlıyor."
      },
      {
        "id": 5,
        "eng": "The brain reorganizes through synaptic connections.",
        "tr": "Beyin sinaptik bağlantılar yoluyla kendini yeniden düzenler."
      },
      {
        "id": 6,
        "eng": "When a multilingual speaker converses, both languages remain perpetually active and competing inside the brain.",
        "tr": "Çok dilli bir konuşmacı sohbet ettiğinde, her iki dil de beynin içinde sürekli olarak aktif ve rekabet halinde kalır."
      },
      {
        "id": 7,
        "eng": "The prefrontal cortex works constantly.",
        "tr": "Prefrontal korteks sürekli çalışır."
      },
      {
        "id": 8,
        "eng": "It suppresses irrelevant words from one language while instantly selecting correct grammatical structures in another.",
        "tr": "Bir dilden alakasız kelimeleri bastırırken diğer dildeki doğru dilbilgisel yapıları anında seçer."
      },
      {
        "id": 9,
        "eng": "This persistent workout strengthens executive function.",
        "tr": "Bu sürekli antrenman yürütücü işlevi güçlendirir."
      },
      {
        "id": 10,
        "eng": "Bilingual individuals demonstrate superior aptitude in multitasking and ignoring distracting environmental noise.",
        "tr": "İki dilli bireyler çoklu görevlerde ve dikkat dağıtıcı çevresel gürültüyü görmezden gelmede üstün yetenek sergilerler."
      },
      {
        "id": 11,
        "eng": "They switch between tasks with agility.",
        "tr": "Görevler arasında çeviklikle geçiş yaparlar."
      },
      {
        "id": 12,
        "eng": "Children exposed to multiple dialects develop acute metalinguistic awareness early in life.",
        "tr": "Birden fazla lehçeye maruz kalan çocuklar, yaşamın erken dönemlerinde keskin bir üst-dilsel farkındalık geliştirirler."
      },
      {
        "id": 13,
        "eng": "They realize words are arbitrary symbols representing real-world concepts rather than physical realities.",
        "tr": "Kelimelerin fiziksel gerçekliklerden ziyade gerçek dünya kavramlarını temsil eden keyfi semboller olduğunu fark ederler."
      },
      {
        "id": 14,
        "eng": "This linguistic insight enhances general problem-solving.",
        "tr": "Bu dilsel kavrayış genel problem çözmeyi geliştirir."
      },
      {
        "id": 15,
        "eng": "Crucially, these cognitive advantages extend into old age.",
        "tr": "Daha da önemlisi, bu bilişsel avantajlar yaşlılığa kadar uzanır."
      },
      {
        "id": 16,
        "eng": "Epidemiological studies indicate that lifelong bilingualism delays symptomatic onset of Alzheimer's by five years.",
        "tr": "Epidemiyolojik çalışmalar, yaşam boyu iki dilliliğin Alzheimer semptomlarının başlangıcını beş yıl geciktirdiğini göstermektedir."
      },
      {
        "id": 17,
        "eng": "Physical pathology might still develop.",
        "tr": "Fiziksel patoloji yine de gelişebilir."
      },
      {
        "id": 18,
        "eng": "However, multilingual brains possess richer cognitive reserve, allowing them to route thoughts through undamaged pathways.",
        "tr": "Ancak çok dilli beyinler daha zengin bir bilişsel rezerve sahiptir ve düşünceleri hasar görmemiş yollardan yönlendirmelerine olanak tanır."
      },
      {
        "id": 19,
        "eng": "Adults also benefit from language acquisition.",
        "tr": "Yetişkinler de dil ediniminden yararlanırlar."
      },
      {
        "id": 20,
        "eng": "Although mastering foreign pronunciation demands disciplined effort, neuroplastic remodeling occurs regardless of your biological age.",
        "tr": "Yabancı telaffuzda ustalaşmak disiplinli bir çaba gerektirse de, nöroplastik yeniden yapılanma biyolojik yaşınızdan bağımsız olarak gerçekleşir."
      },
      {
        "id": 21,
        "eng": "Studying vocabulary stimulates white matter integrity.",
        "tr": "Kelime çalışmak beyaz cevher bütünlüğünü uyarır."
      },
      {
        "id": 22,
        "eng": "It functions as intensive weightlifting for your neurons.",
        "tr": "Nöronlarınız için yoğun bir ağırlık kaldırma işlevi görür."
      },
      {
        "id": 23,
        "eng": "Learning new words keeps thoughts youthful.",
        "tr": "Yeni kelimeler öğrenmek düşünceleri genç tutar."
      },
      {
        "id": 24,
        "eng": "Embracing foreign languages enriches your cultural world while shielding your brain against degenerative decline.",
        "tr": "Yabancı dilleri benimsemek beyninizi dejeneratif gerilemeye karşı korurken kültürel dünyanızı zenginleştirir."
      },
      {
        "id": 25,
        "eng": "Every new language grants another mind.",
        "tr": "Her yeni dil bir başka zihin bağışlar."
      }
    ],
    "questions": [
      {
        "q": "What did outdated theories claim about bilingual children?",
        "options": [
          "Superpowers",
          "Confuses grammatical development",
          "Makes them tall"
        ],
        "answer": 1
      },
      {
        "q": "By how many years can bilingualism delay Alzheimer's?",
        "options": [
          "Five years",
          "One month",
          "Twenty years"
        ],
        "answer": 0
      },
      {
        "q": "What is cognitive reserve?",
        "options": [
          "Bank account",
          "Brain's ability to use alternative neural pathways",
          "Memory card"
        ],
        "answer": 1
      }
    ]
  },
{
  "id": 71,
  "level": "A1",
  "title": "A Visit to the Grand Bazaar",
  "bgImage": "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "The Grand Bazaar is one of the oldest covered markets in Istanbul.",
      "tr": "Kapalıçarşı, İstanbul'un en eski kapalı çarşılarından biridir."
    },
    {
      "id": 2,
      "eng": "My brother and I visit the market on Saturday morning.",
      "tr": "Kardeşim ve ben cumartesi sabahı çarşıyı ziyaret ederiz."
    },
    {
      "id": 3,
      "eng": "There are thousands of colorful little shops under the arched roof.",
      "tr": "Kemerli çatının altında binlerce renkli küçük dükkân vardır."
    },
    {
      "id": 4,
      "eng": "We can smell sweet Turkish delight and fresh spices everywhere.",
      "tr": "Her yerde tatlı lokum ve taze baharat kokusu alabiliyoruz."
    },
    {
      "id": 5,
      "eng": "A kind shopkeeper offers us small glasses of hot apple tea.",
      "tr": "Nazik bir dükkân sahibi bize küçük bardaklarda sıcak elma çayı ikram eder."
    },
    {
      "id": 6,
      "eng": "The tea is delicious and warms our hands.",
      "tr": "Çay çok lezzetli ve ellerimizi ısıtır."
    },
    {
      "id": 7,
      "eng": "I look at beautiful handmade carpets and shiny lamps.",
      "tr": "Güzel el yapımı halılara ve parıldayan lambalara bakarım."
    },
    {
      "id": 8,
      "eng": "My brother buys a small blue ceramic bowl for our mother.",
      "tr": "Kardeşim annemiz için küçük mavi seramik bir kase satın alır."
    },
    {
      "id": 9,
      "eng": "People from many different countries walk together happily.",
      "tr": "Birçok farklı ülkeden insan birlikte neşeyle yürür."
    },
    {
      "id": 10,
      "eng": "We take photos near the historic stone gates.",
      "tr": "Tarihi taş kapıların yanında fotoğraflar çekeriz."
    },
    {
      "id": 11,
      "eng": "At noon, we sit at a quiet cafe and eat warm simit.",
      "tr": "Öğleyin sakin bir kafede oturup sıcak simit yeriz."
    },
    {
      "id": 12,
      "eng": "It is an unforgettable and lively day in Istanbul.",
      "tr": "İstanbul'da unutulmaz ve cıvıl cıvıl bir gün olur."
    }
  ],
  "questions": [
    {
      "q": "When do the narrator and brother visit the Grand Bazaar?",
      "options": [
        "On Friday evening",
        "On Saturday morning",
        "On Monday afternoon",
        "On Sunday night"
      ],
      "answer": 1
    },
    {
      "q": "What does the kind shopkeeper offer them?",
      "options": [
        "Cold orange juice",
        "Hot apple tea",
        "Dark coffee",
        "Lemon cake"
      ],
      "answer": 1
    },
    {
      "q": "What does the brother buy for their mother?",
      "options": [
        "A silver watch",
        "A blue ceramic bowl",
        "A silk scarf",
        "A wooden toy"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 72,
  "level": "A1",
  "title": "My Weekend at the Beach",
  "bgImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "The summer sun is bright and warm today.",
      "tr": "Yaz güneşi bugün parlak ve sıcacık."
    },
    {
      "id": 2,
      "eng": "My family drives to the public beach early in the morning.",
      "tr": "Ailem sabah erkenden halk plajına arabayla gider."
    },
    {
      "id": 3,
      "eng": "The sea water is blue, clear, and calm.",
      "tr": "Deniz suyu mavi, berrak ve sakindir."
    },
    {
      "id": 4,
      "eng": "We place our large towels on the golden sand.",
      "tr": "Büyük havlularımızı altın sarısı kumsalın üzerine sereriz."
    },
    {
      "id": 5,
      "eng": "My little sister builds a tall sandcastle with seashells.",
      "tr": "Küçük kız kardeşim deniz kabuklarıyla yüksek bir kumdan kale yapar."
    },
    {
      "id": 6,
      "eng": "I swim in the gentle waves with my yellow inflatable ring.",
      "tr": "Sarı simidimle yumuşak dalgaların arasında yüzerim."
    },
    {
      "id": 7,
      "eng": "White seagulls fly high in the blue sky.",
      "tr": "Beyaz martılar mavi gökyüzünde yükseklerde uçar."
    },
    {
      "id": 8,
      "eng": "My mother opens a picnic box with watermelon and cheese.",
      "tr": "Annem karpuz ve peynir dolu bir piknik kutusu açar."
    },
    {
      "id": 9,
      "eng": "Cold watermelon tastes wonderful on a hot sunny day.",
      "tr": "Sıcak güneşli bir günde soğuk karpuz harika gelir."
    },
    {
      "id": 10,
      "eng": "In the afternoon, we walk along the shoreline.",
      "tr": "Öğleden sonra kıyı şeridi boyunca yürürüz."
    },
    {
      "id": 11,
      "eng": "We collect shiny stones and smooth shells.",
      "tr": "Parlak taşlar ve pürüzsüz kabuklar toplarız."
    },
    {
      "id": 12,
      "eng": "We return home tired but very happy.",
      "tr": "Eve yorgun ama çok mutlu döneriz."
    }
  ],
  "questions": [
    {
      "q": "What does the little sister build on the beach?",
      "options": [
        "A wooden boat",
        "A tall sandcastle",
        "A paper kite",
        "A small tent"
      ],
      "answer": 1
    },
    {
      "q": "What food does the mother serve from the picnic box?",
      "options": [
        "Pizza and soda",
        "Watermelon and cheese",
        "Fish and rice",
        "Soup and bread"
      ],
      "answer": 1
    },
    {
      "q": "How does the family feel when returning home?",
      "options": [
        "Angry and cold",
        "Tired but very happy",
        "Bored and sleepy",
        "Worried and hungry"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 73,
  "level": "A1",
  "title": "Cooking a Family Dinner",
  "bgImage": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Sunday evening is our favorite family dinner time.",
      "tr": "Pazar akşamı en sevdiğimiz aile yemeği vaktidir."
    },
    {
      "id": 2,
      "eng": "We all meet in the warm kitchen to cook together.",
      "tr": "Birlikte yemek pişirmek için hepimiz sıcak mutfakta buluşuruz."
    },
    {
      "id": 3,
      "eng": "My father washes fresh red tomatoes and green cucumbers.",
      "tr": "Babam taze kırmızı domatesleri ve yeşil salatalıkları yıkar."
    },
    {
      "id": 4,
      "eng": "I help him cut the vegetables for a colorful salad.",
      "tr": "Renkli bir salata için sebzeleri doğramasına yardım ederim."
    },
    {
      "id": 5,
      "eng": "My mother boils delicious pasta in a large stainless pot.",
      "tr": "Annem büyük bir çelik tencerede lezzetli makarna haşlar."
    },
    {
      "id": 6,
      "eng": "The kitchen smells like garlic, olive oil, and tomato sauce.",
      "tr": "Mutfak sarımsak, zeytinyağı ve domates sosu gibi kokar."
    },
    {
      "id": 7,
      "eng": "My brother sets the wooden table with white plates and napkins.",
      "tr": "Kardeşim ahşap masayı beyaz tabaklar ve peçetelerle hazırlar."
    },
    {
      "id": 8,
      "eng": "We put yellow cheese on top of the warm pasta.",
      "tr": "Sıcak makarnanın üzerine sarı peynir koyarız."
    },
    {
      "id": 9,
      "eng": "We sit down together and share stories about our week.",
      "tr": "Birlikte oturur ve haftamızla ilgili hikâyeleri paylaşırız."
    },
    {
      "id": 10,
      "eng": "Everyone laughs and enjoys the tasty homemade food.",
      "tr": "Herkes güler ve leziz ev yapımı yemeğin tadını çıkarır."
    },
    {
      "id": 11,
      "eng": "After dinner, my brother and I wash the dirty dishes.",
      "tr": "Yemekten sonra kardeşimle ben kirli bulaşıkları yıkarız."
    },
    {
      "id": 12,
      "eng": "Eating together brings our family closer.",
      "tr": "Birlikte yemek yemek ailemizi birbirine daha da yakınlaştırır."
    }
  ],
  "questions": [
    {
      "q": "What does the father wash in the kitchen?",
      "options": [
        "Apples and oranges",
        "Tomatoes and cucumbers",
        "Potatoes and onions",
        "Carrots and lettuce"
      ],
      "answer": 1
    },
    {
      "q": "What does the mother boil in the pot?",
      "options": [
        "Chicken soup",
        "Fresh pasta",
        "Rice and peas",
        "Tea and milk"
      ],
      "answer": 1
    },
    {
      "q": "Who washes the dishes after dinner?",
      "options": [
        "The mother",
        "The father",
        "The narrator and brother",
        "The neighbors"
      ],
      "answer": 2
    }
  ]
},
{
  "id": 74,
  "level": "A2",
  "title": "A Train Journey across Cappadocia",
  "bgImage": "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Traveling by passenger train offers a relaxing way to explore rural landscapes.",
      "tr": "Yolcu treniyle seyahat etmek kırsal manzaraları keşfetmenin dinlendirici bir yolunu sunar."
    },
    {
      "id": 2,
      "eng": "Last October, I booked a window seat for a scenic journey to Cappadocia.",
      "tr": "Geçen ekim ayında Kapadokya'ya manzaralı bir yolculuk için cam kenarı bilet ayırttım."
    },
    {
      "id": 3,
      "eng": "The early morning departure was quiet and punctual.",
      "tr": "Sabahın erken saatlerindeki kalkış sakin ve tam vaktindeydi."
    },
    {
      "id": 4,
      "eng": "As the train moved steadily forward, yellow valleys and stone houses appeared.",
      "tr": "Tren istikrarlı biçimde ilerledikçe sarı vadiler ve taş evler belirdi."
    },
    {
      "id": 5,
      "eng": "I brought a notebook to record my thoughts and sketches of the trip.",
      "tr": "Yolculukla ilgili düşüncelerimi ve eskizlerimi kaydetmek için bir not defteri getirdim."
    },
    {
      "id": 6,
      "eng": "A polite train attendant served hot Turkish coffee and toasted sandwiches.",
      "tr": "Kibar bir tren görevlisi sıcak Türk kahvesi ve tost servisi yaptı."
    },
    {
      "id": 7,
      "eng": "I met an elderly traveler who shared fascinating local folklore with me.",
      "tr": "Benimle büyüleyici yerel efsaneleri paylaşan yaşlı bir gezginle tanıştım."
    },
    {
      "id": 8,
      "eng": "Suddenly, dozens of colorful hot air balloons filled the horizon.",
      "tr": "Aniden onlarca renkli sıcak hava balonu ufku doldurdu."
    },
    {
      "id": 9,
      "eng": "The passengers stood up in excitement and captured spectacular photos.",
      "tr": "Yolcular heyecanla ayağa kalktı ve muhteşem fotoğraflar çekti."
    },
    {
      "id": 10,
      "eng": "The rock formations resembled magical towers sculpted by wind and rain.",
      "tr": "Kaya oluşumları rüzgâr ve yağmurla yontulmuş sihirli kulelere benziyordu."
    },
    {
      "id": 11,
      "eng": "Upon arrival at the central station, I felt inspired and completely refreshed.",
      "tr": "Merkez istasyona vardığımda kendimi ilham dolu ve tamamen tazelenmiş hissettim."
    },
    {
      "id": 12,
      "eng": "Train travel reminds us that the journey itself is as meaningful as the destination.",
      "tr": "Tren yolculuğu bize yolun kendisinin de varış noktası kadar anlamlı olduğunu hatırlatır."
    }
  ],
  "questions": [
    {
      "q": "What type of seat did the traveler book for the journey?",
      "options": [
        "An aisle seat",
        "A window seat",
        "A sleeper bed",
        "A dining car seat"
      ],
      "answer": 1
    },
    {
      "q": "What exciting sight appeared in the sky during the train ride?",
      "options": [
        "Dozens of colorful hot air balloons",
        "A flock of golden eagles",
        "A rare rainbow storm",
        "A meteor shower"
      ],
      "answer": 0
    },
    {
      "q": "What lesson does the narrator draw from train travel?",
      "options": [
        "It is always faster than flying",
        "The journey is as meaningful as the destination",
        "Traveling alone is dangerous",
        "Trains are only for summer holidays"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 75,
  "level": "A2",
  "title": "Adopting a Rescue Dog",
  "bgImage": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Adopting an animal from a rescue shelter can transform a life completely.",
      "tr": "Bir barınaktan hayvan sahiplenmek bir hayatı tamamen dönüştürebilir."
    },
    {
      "id": 2,
      "eng": "Last month, my family decided to visit the local municipal shelter.",
      "tr": "Geçen ay ailem yerel belediye barınağını ziyaret etmeye karar verdi."
    },
    {
      "id": 3,
      "eng": "Dozens of friendly dogs wagged their tails behind the wire gates.",
      "tr": "Onlarca arkadaş canlısı köpek tel kapıların ardında kuyruk sallıyordu."
    },
    {
      "id": 4,
      "eng": "One small golden dog with curious brown eyes sat quietly in the corner.",
      "tr": "Meraklı kahverengi gözleri olan küçük sarı bir köpek köşede sakince oturuyordu."
    },
    {
      "id": 5,
      "eng": "The shelter volunteer explained that his name was Leo.",
      "tr": "Barınak gönüllüsü onun adının Leo olduğunu açıkladı."
    },
    {
      "id": 6,
      "eng": "Leo was rescued from a rainy street two weeks before.",
      "tr": "Leo iki hafta önce yağmurlu bir sokaktan kurtarılmıştı."
    },
    {
      "id": 7,
      "eng": "When we stepped into his enclosure, Leo gently placed his paw on my knee.",
      "tr": "Bölmesine girdiğimizde Leo patisini nazikçe dizimin üzerine koydu."
    },
    {
      "id": 8,
      "eng": "We instantly knew that he was the perfect companion for our home.",
      "tr": "Onun evimiz için mükemmel bir can yoldaşı olduğunu hemen anladık."
    },
    {
      "id": 9,
      "eng": "We signed the official adoption papers and bought a soft dog bed.",
      "tr": "Resmi sahiplenme evraklarını imzaladık ve yumuşak bir köpek yatağı aldık."
    },
    {
      "id": 10,
      "eng": "At home, Leo explored every single room with joyful curiosity.",
      "tr": "Evde Leo her bir odayı neşeli bir merakla keşfetti."
    },
    {
      "id": 11,
      "eng": "Now, morning walks in the nearby park are full of energy and fun.",
      "tr": "Artık yakındaki parkta sabah yürüyüşleri enerji ve eğlenceyle dolu."
    },
    {
      "id": 12,
      "eng": "Giving a rescue pet a second chance brings unconditional happiness.",
      "tr": "Bir barınak hayvanına ikinci bir şans vermek koşulsuz mutluluk getirir."
    }
  ],
  "questions": [
    {
      "q": "Where was Leo rescued from two weeks earlier?",
      "options": [
        "A tall mountain forest",
        "A rainy street",
        "An old factory",
        "A neighbor's yard"
      ],
      "answer": 1
    },
    {
      "q": "How did Leo greet the family in his enclosure?",
      "options": [
        "He barked aggressively",
        "He gently placed his paw on the knee",
        "He ran away under a bench",
        "He fell asleep immediately"
      ],
      "answer": 1
    },
    {
      "q": "What does adopting a rescue animal bring to the household?",
      "options": [
        "Continuous stress",
        "Unconditional happiness",
        "Too much work",
        "Unpleasant surprises"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 76,
  "level": "A2",
  "title": "A Day at the Science Museum",
  "bgImage": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Interactive museums make scientific principles thrilling for all ages.",
      "tr": "Etkileşimli müzeler bilimsel ilkeleri her yaş için heyecan verici kılar."
    },
    {
      "id": 2,
      "eng": "Our school organized an educational field trip to the National Science Center.",
      "tr": "Okulumuz Ulusal Bilim Merkezi'ne eğitici bir okul gezisi düzenledi."
    },
    {
      "id": 3,
      "eng": "The main exhibition hall featured modern robots and renewable energy models.",
      "tr": "Ana sergi salonunda modern robotlar ve yenilenebilir enerji modelleri yer alıyordu."
    },
    {
      "id": 4,
      "eng": "We participated in a physics workshop demonstrating static electricity.",
      "tr": "Statik elektriği gösteren bir fizik atölyesine katıldık."
    },
    {
      "id": 5,
      "eng": "When our classmate touched the silver sphere, his hair stood straight up.",
      "tr": "Sınıf arkadaşımız gümüş küreye dokunduğunda saçları dimdik havaya kalktı."
    },
    {
      "id": 6,
      "eng": "The entire class cheered and took entertaining photographs.",
      "tr": "Bütün sınıf sevinçle tezahürat yaptı ve eğlenceli fotoğraflar çekti."
    },
    {
      "id": 7,
      "eng": "Next, we visited the digital planetarium on the top floor.",
      "tr": "Sonra en üst kattaki dijital planetaryumu ziyaret ettik."
    },
    {
      "id": 8,
      "eng": "The dome ceiling showed realistic constellations and distant planetary systems.",
      "tr": "Kubbe tavan gerçekçi takımyıldızları ve uzak gezegen sistemlerini gösterdi."
    },
    {
      "id": 9,
      "eng": "A resident astronomer explained how telescopes detect ancient starlight.",
      "tr": "Merkez astronomu teleskopların kadim yıldız ışığını nasıl tespit ettiğini anlattı."
    },
    {
      "id": 10,
      "eng": "We also programmed simple mini-rovers to navigate an obstacle course.",
      "tr": "Ayrıca bir engelli parkurda ilerlemesi için basit mini keşif araçları kodladık."
    },
    {
      "id": 11,
      "eng": "The hands-on activities sparked great curiosity among all the students.",
      "tr": "Uygulamalı etkinlikler tüm öğrenciler arasında büyük bir merak uyandırdı."
    },
    {
      "id": 12,
      "eng": "Science is not just memorizing formulas; it is active exploration.",
      "tr": "Bilim sadece formül ezberlemek değil, aktif bir keşif sürecidir."
    }
  ],
  "questions": [
    {
      "q": "What happened when a classmate touched the silver sphere?",
      "options": [
        "He got a minor burn",
        "His hair stood straight up",
        "The lights turned off",
        "The sphere began to sing"
      ],
      "answer": 1
    },
    {
      "q": "What was displayed on the ceiling of the planetarium?",
      "options": [
        "Underwater marine life",
        "Constellations and planetary systems",
        "Ancient cave paintings",
        "Flying airplane prototypes"
      ],
      "answer": 1
    },
    {
      "q": "What did students program in the workshop?",
      "options": [
        "Mini-rovers for an obstacle course",
        "Music playlists",
        "Digital calculators",
        "Weather satellites"
      ],
      "answer": 0
    }
  ]
},
{
  "id": 77,
  "level": "A2",
  "title": "Starting a Small Balcony Garden",
  "bgImage": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "You do not need a huge backyard to experience the joy of gardening.",
      "tr": "Bahçıvanlığın keyfini yaşamak için devasa bir arka bahçeye ihtiyacınız yoktur."
    },
    {
      "id": 2,
      "eng": "This spring, I transformed my narrow apartment balcony into a green oasis.",
      "tr": "Bu bahar dar apartman balkonumu yemyeşil bir vahaya dönüştürdüm."
    },
    {
      "id": 3,
      "eng": "I purchased ceramic planters, organic potting soil, and small gardening tools.",
      "tr": "Seramik saksılar, organik saksı toprağı ve küçük bahçe aletleri satın aldım."
    },
    {
      "id": 4,
      "eng": "First, I planted aromatic herbs such as fresh basil, mint, and rosemary.",
      "tr": "İlk önce taze fesleğen, nane ve biberiye gibi aromatik otlar ektim."
    },
    {
      "id": 5,
      "eng": "Herbs grow quickly and fill the entire balcony with a delightful aroma.",
      "tr": "Otlar hızla büyür ve tüm balkonu enfes bir kokuyla doldurur."
    },
    {
      "id": 6,
      "eng": "I also planted dwarf cherry tomato seedlings in deep containers.",
      "tr": "Derin kaplara bodur kiraz domates fideleri de diktim."
    },
    {
      "id": 7,
      "eng": "Every morning before work, I inspect the moist soil and water the plants.",
      "tr": "Her sabah işe gitmeden önce nemli toprağı kontrol edip bitkileri sularım."
    },
    {
      "id": 8,
      "eng": "Within three weeks, tiny green tomatoes began to form on the branches.",
      "tr": "Üç hafta içinde dallarda minik yeşil domatesler belirmeye başladı."
    },
    {
      "id": 9,
      "eng": "Watching living plants grow teaches patience and attentiveness.",
      "tr": "Canlı bitkilerin büyümesini izlemek insana sabır ve özen göstermeyi öğretir."
    },
    {
      "id": 10,
      "eng": "I regularly pick fresh basil leaves to garnish evening pasta dishes.",
      "tr": "Akşam makarnalarını süslemek için düzenli olarak taze fesleğen yaprakları koparırım."
    },
    {
      "id": 11,
      "eng": "My green balcony has become my favorite place to relax and read books.",
      "tr": "Yeşil balkonum dinlenmek ve kitap okumak için en sevdiğim yer haline geldi."
    },
    {
      "id": 12,
      "eng": "Urban gardening brings people closer to nature even in noisy cities.",
      "tr": "Kentsel bahçecilik gürültülü şehirlerde bile insanları doğaya yaklaştırır."
    }
  ],
  "questions": [
    {
      "q": "What herbs did the narrator plant on the balcony?",
      "options": [
        "Cactus and orchids",
        "Basil, mint, and rosemary",
        "Wheat and corn",
        "Roses and tulips"
      ],
      "answer": 1
    },
    {
      "q": "What virtue does caring for living plants cultivate?",
      "options": [
        "Patience and attentiveness",
        "Fast financial gains",
        "Physical strength",
        "Competitive spirit"
      ],
      "answer": 0
    },
    {
      "q": "How does the narrator use the freshly picked basil?",
      "options": [
        "To sell at the market",
        "To garnish evening pasta dishes",
        "To feed birds",
        "To make perfume"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 78,
  "level": "B1",
  "title": "The Rise of Remote Work and Digital Nomads",
  "bgImage": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Technological advancements have radically reshaped the modern workplace over the last decade.",
      "tr": "Teknolojik ilerlemeler son on yılda modern çalışma ortamını kökten yeniden biçimlendirdi."
    },
    {
      "id": 2,
      "eng": "Cloud computing and video conferencing allow millions of professionals to work from anywhere.",
      "tr": "Bulut bilişim ve video konferans milyonlarca uzmanın her yerden çalışmasına imkân tanıyor."
    },
    {
      "id": 3,
      "eng": "A growing segment of the global workforce has adopted the lifestyle of digital nomads.",
      "tr": "Küresel iş gücünün büyüyen bir kesimi dijital göçebe yaşam tarzını benimsedi."
    },
    {
      "id": 4,
      "eng": "These individuals combine full-time careers with continuous international travel.",
      "tr": "Bu bireyler tam zamanlı kariyerlerini sürekli uluslararası seyahatle birleştiriyor."
    },
    {
      "id": 5,
      "eng": "Instead of commuting to corporate skyscrapers, they work from co-working spaces or beachside cafes.",
      "tr": "Kurumsal gökdelenlere her gün gidip gelmek yerine ortak çalışma alanlarından veya sahil kafelerinden çalışırlar."
    },
    {
      "id": 6,
      "eng": "This flexibility fosters higher autonomy, personal freedom, and cross-cultural exchange.",
      "tr": "Bu esneklik daha yüksek özerkliği, kişisel özgürlüğü ve kültürlerarası etkileşimi teşvik eder."
    },
    {
      "id": 7,
      "eng": "However, remote working also introduces unique personal and professional challenges.",
      "tr": "Bununla birlikte uzaktan çalışma kendine özgü kişisel ve mesleki zorlukları da beraberinde getirir."
    },
    {
      "id": 8,
      "eng": "Navigating different time zones can disrupt sleep schedules and team coordination.",
      "tr": "Farklı saat dilimlerinde çalışmak uyku düzenini ve ekip koordinasyonunu bozabilir."
    },
    {
      "id": 9,
      "eng": "Furthermore, the absence of physical colleagues occasionally leads to social isolation.",
      "tr": "Dahası, fiziksel meslektaşların yokluğu kimi zaman sosyal yalnızlaşmaya yol açar."
    },
    {
      "id": 10,
      "eng": "Successful remote workers establish strict routines and clear boundaries between work and leisure.",
      "tr": "Başarılı uzaktan çalışanlar katı rutinler ve iş ile dinlenme arasında net sınırlar belirler."
    },
    {
      "id": 11,
      "eng": "Forward-thinking countries now offer specialized nomad visas to stimulate local economies.",
      "tr": "İleri görüşlü ülkeler artık yerel ekonomileri canlandırmak için özel göçebe vizeleri sunmaktadır."
    },
    {
      "id": 12,
      "eng": "The future of employment will likely blend digital mobility with purposeful community collaboration.",
      "tr": "İstihdamın geleceği muhtemelen dijital hareketlilik ile amaca yönelik topluluk iş birliğini harmanlayacaktır."
    }
  ],
  "questions": [
    {
      "q": "What technologies primarily enable remote professional work?",
      "options": [
        "Radio transmitters and print media",
        "Cloud computing and video conferencing",
        "Postal delivery and analog phones",
        "Factory conveyor belts"
      ],
      "answer": 1
    },
    {
      "q": "What is a prominent challenge faced by digital nomads?",
      "options": [
        "Overpriced train tickets",
        "Time zone navigation and social isolation",
        "Inability to learn languages",
        "A lack of travel options"
      ],
      "answer": 1
    },
    {
      "q": "Why do some countries introduce digital nomad visas?",
      "options": [
        "To discourage foreign tourists",
        "To stimulate their local economies",
        "To replace traditional universities",
        "To shut down corporate offices"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 79,
  "level": "B1",
  "title": "Protecting Coastal Ecosystems",
  "bgImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Coastal ecosystems represent some of the most biodiverse and vulnerable environments on Earth.",
      "tr": "Kıyı ekosistemleri yeryüzündeki en yüksek biyolojik çeşitliliğe sahip ve en hassas ortamlar arasındadır."
    },
    {
      "id": 2,
      "eng": "Mangrove forests, coral reefs, and seagrass meadows protect shorelines from severe storm surges.",
      "tr": "Mangrov ormanları, mercan resifleri ve deniz çayırları kıyıları şiddetli fırtına dalgalarından korur."
    },
    {
      "id": 3,
      "eng": "Additionally, underwater plants absorb massive amounts of carbon dioxide from the atmosphere.",
      "tr": "Ayrıca su altı bitkileri atmosferdeki muazzam miktarda karbondioksiti bünyesine çeker."
    },
    {
      "id": 4,
      "eng": "This blue carbon storage plays a critical role in mitigating global climate changes.",
      "tr": "Bu 'mavi karbon' depolaması küresel iklim değişikliklerini hafifletmede hayati bir rol oynar."
    },
    {
      "id": 5,
      "eng": "Regrettably, coastal areas worldwide face severe pressures from uncontrolled urban development.",
      "tr": "Ne yazık ki dünya çapındaki kıyı bölgeleri kontrolsüz kentsel gelişimden kaynaklanan ağır baskılarla karşı karşıyadır."
    },
    {
      "id": 6,
      "eng": "Industrial wastewater and single-use plastic debris pollute pristine marine habitats.",
      "tr": "Endüstriyel atık sular ve tek kullanımlık plastik çöpler el değmemiş deniz yaşam alanlarını kirletmektedir."
    },
    {
      "id": 7,
      "eng": "Overfishing disrupts delicate food chains, threatening species like sea turtles and reef fish.",
      "tr": "Aşırı avlanma hassas besin zincirlerini bozarak deniz kaplumbağaları ve resif balıkları gibi türleri tehdit eder."
    },
    {
      "id": 8,
      "eng": "In response, marine biologists and local communities are establishing marine protected areas.",
      "tr": "Buna karşılık deniz biyologları ve yerel topluluklar deniz koruma alanları oluşturmaktadır."
    },
    {
      "id": 9,
      "eng": "Artificial reefs and coral restoration nurseries help damaged marine ecosystems recover.",
      "tr": "Yapay resifler ve mercan restorasyon fidanlıkları zarar görmüş deniz ekosistemlerinin toparlanmasına yardımcı olur."
    },
    {
      "id": 10,
      "eng": "Sustainable tourism practices ensure that travelers respect wildlife without damaging natural habitats.",
      "tr": "Sürdürülebilir turizm uygulamaları gezginlerin doğal yaşam alanlarına zarar vermeden yaban hayatına saygı duymasını sağlar."
    },
    {
      "id": 11,
      "eng": "Public awareness campaigns inspire citizens to reduce plastic consumption in everyday life.",
      "tr": "Toplumsal farkındalık kampanyaları vatandaşları günlük hayatta plastik tüketimini azaltmaya teşvik eder."
    },
    {
      "id": 12,
      "eng": "Preserving marine health guarantees food security and prosperity for future generations.",
      "tr": "Deniz sağlığını muhafaza etmek gelecek nesiller için gıda güvenliğini ve refahı güvence altına alır."
    }
  ],
  "questions": [
    {
      "q": "What term describes carbon stored by marine and coastal ecosystems?",
      "options": [
        "Green coal",
        "Blue carbon",
        "Solar ash",
        "Fossil soot"
      ],
      "answer": 1
    },
    {
      "q": "How do mangrove forests and coral reefs benefit human coastal settlements?",
      "options": [
        "They generate artificial electricity",
        "They protect shorelines from severe storm surges",
        "They eliminate the need for fishing",
        "They create warm winter breezes"
      ],
      "answer": 1
    },
    {
      "q": "What proactive measure helps damaged coral ecosystems recover?",
      "options": [
        "Building deeper shipping canals",
        "Establishing coral restoration nurseries",
        "Increasing industrial fishing quotas",
        "Paving sand dunes with concrete"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 80,
  "level": "B1",
  "title": "The Psychology of Time Management",
  "bgImage": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Effective time management is not merely about executing more tasks in fewer hours.",
      "tr": "Etkili zaman yönetimi sadece daha az saatte daha fazla iş bitirmekle ilgili değildir."
    },
    {
      "id": 2,
      "eng": "At its core, time management involves emotional self-regulation and strategic prioritization.",
      "tr": "Özünde zaman yönetimi duygusal öz denetimi ve stratejik önceliklendirmeyi içerir."
    },
    {
      "id": 3,
      "eng": "Many individuals struggle with chronic procrastination due to an underlying fear of failure.",
      "tr": "Pek çok birey başarısızlık korkusu nedeniyle kronik erteleme alışkanlığıyla mücadele eder."
    },
    {
      "id": 4,
      "eng": "When confronted with complex projects, the human brain often seeks instant gratification.",
      "tr": "İnsan beyni karmaşık projelerle karşılaştığında genellikle anlık haz arayışına girer."
    },
    {
      "id": 5,
      "eng": "Scrolling through social media or cleaning a desk provides temporary psychological relief.",
      "tr": "Sosyal medyada gezinmek veya masa temizlemek geçici bir psikolojik rahatlama sağlar."
    },
    {
      "id": 6,
      "eng": "To overcome this cognitive obstacle, psychologists recommend the Pomodoro Technique.",
      "tr": "Bu bilişsel engeli aşmak için psikologlar Pomodoro Tekniği'ni önermektedir."
    },
    {
      "id": 7,
      "eng": "This method divides working intervals into focused twenty-five minute sessions followed by short breaks.",
      "tr": "Bu yöntem çalışma aralıklarını yirmi beş dakikalık odaklanmış seanslara ve ardından kısa molalara böler."
    },
    {
      "id": 8,
      "eng": "Another powerful framework is the Eisenhower Matrix, which separates urgent tasks from important ones.",
      "tr": "Bir diğer güçlü yöntem, acil görevleri önemli olanlardan ayıran Eisenhower Matrisi'dir."
    },
    {
      "id": 9,
      "eng": "Important long-term goals frequently lack immediate urgency and risk being neglected.",
      "tr": "Önemli uzun vadeli hedefler sıklıkla anlık aciliyetten yoksundur ve ihmal edilme riski taşır."
    },
    {
      "id": 10,
      "eng": "Protecting dedicated blocks of deep work enables substantial intellectual breakthroughs.",
      "tr": "Derin çalışma için ayrılmış özel zaman bloklarını korumak kayda değer zihinsel atılımlara zemin hazırlar."
    },
    {
      "id": 11,
      "eng": "Learning to decline non-essential commitments is essential for personal well-being.",
      "tr": "Gerekli olmayan taahhütleri geri çevirmeyi öğrenmek kişisel esenlik için şarttır."
    },
    {
      "id": 12,
      "eng": "Mastering your schedule ultimately grants you control over your destiny.",
      "tr": "Programınıza hakim olmak nihayetinde kendi kaderinizi kontrol etmenizi sağlar."
    }
  ],
  "questions": [
    {
      "q": "What underlying psychological factor often fuels procrastination?",
      "options": [
        "Excessive physical energy",
        "Fear of failure",
        "Overwhelming happiness",
        "Lack of internet connection"
      ],
      "answer": 1
    },
    {
      "q": "How does the Pomodoro Technique structure work time?",
      "options": [
        "Continuous eight-hour marathons",
        "Twenty-five minute focused sessions with short breaks",
        "Working only late at night",
        "Skipping breakfast and lunch"
      ],
      "answer": 1
    },
    {
      "q": "What distinction is central to the Eisenhower Matrix?",
      "options": [
        "Expensive versus cheap tasks",
        "Urgent versus important tasks",
        "Solo versus group activities",
        "Manual versus digital work"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 81,
  "level": "B1",
  "title": "The Evolution of Urban Architecture",
  "bgImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Architecture reflects the cultural values, economic priorities, and technological limits of every era.",
      "tr": "Mimarlık her dönemin kültürel değerlerini, ekonomik önceliklerini ve teknolojik sınırlarını yansıtır."
    },
    {
      "id": 2,
      "eng": "Ancient civilizations constructed monuments from natural stone to project permanence and authority.",
      "tr": "Kadim medeniyetler kalıcılığı ve otoriteyi yansıtmak amacıyla doğal taştan anıtlar inşa etti."
    },
    {
      "id": 3,
      "eng": "The Industrial Revolution transformed construction techniques through mass-produced steel and glass.",
      "tr": "Sanayi Devrimi seri üretim çelik ve cam sayesinde inşaat tekniklerini kökten değiştirdi."
    },
    {
      "id": 4,
      "eng": "Skyscrapers emerged in twentieth-century metropolises, maximizing limited downtown land.",
      "tr": "Sınırlı şehir merkezi arazisinden en üst düzeyde yararlanan gökdelenler yirminci yüzyıl metropollerinde ortaya çıktı."
    },
    {
      "id": 5,
      "eng": "Today, rapid climate challenges demand a profound paradigm shift toward green architecture.",
      "tr": "Günümüzde hızlı iklim zorlukları yeşil mimariye doğru köklü bir paradigma değişimi talep ediyor."
    },
    {
      "id": 6,
      "eng": "Contemporary architects prioritize energy-efficient designs with integrated solar panels.",
      "tr": "Çağdaş mimarlar entegre güneş panellerine sahip enerji tasarruflu tasarımlara öncelik veriyor."
    },
    {
      "id": 7,
      "eng": "Living vertical gardens and green rooftops reduce urban heat island effects significantly.",
      "tr": "Yaşayan dikey bahçeler ve yeşil çatılar kentsel ısı adası etkisini belirgin ölçüde azaltır."
    },
    {
      "id": 8,
      "eng": "Recycled construction materials and mass timber structures are replacing energy-intensive concrete.",
      "tr": "Geri dönüştürülmüş yapı malzemeleri ve ahşap kütük strüktürler yüksek enerji tüketen betonun yerini alıyor."
    },
    {
      "id": 9,
      "eng": "Furthermore, smart building management systems optimize temperature and lighting automatically.",
      "tr": "Dahası, akıllı bina yönetim sistemleri sıcaklığı ve aydınlatmayı otomatik olarak optimize eder."
    },
    {
      "id": 10,
      "eng": "Pedestrian-friendly urban plazas encourage social interaction and public wellness.",
      "tr": "Yaya dostu kentsel meydanlar sosyal etkileşimi ve toplumsal sağlığı teşvik eder."
    },
    {
      "id": 11,
      "eng": "Harmonizing human structures with ecological systems is no longer an optional luxury.",
      "tr": "İnsan yapılarını ekolojik sistemlerle uyumlu hale getirmek artık isteğe bağlı bir lüks değildir."
    },
    {
      "id": 12,
      "eng": "Sustainable cities demonstrate that human ingenuity can thrive in balance with nature.",
      "tr": "Sürdürülebilir şehirler insan dehasının doğayla denge içinde serpilebileceğini kanıtlamaktadır."
    }
  ],
  "questions": [
    {
      "q": "What materials transformed building construction during the Industrial Revolution?",
      "options": [
        "Clay bricks and straw",
        "Mass-produced steel and glass",
        "Hand-carved marble and granite",
        "Plastic sheets and bamboo"
      ],
      "answer": 1
    },
    {
      "q": "What environmental advantage do living green rooftops provide?",
      "options": [
        "They generate loud sound waves",
        "They reduce the urban heat island effect",
        "They eliminate all urban shadows",
        "They increase air conditioning electricity costs"
      ],
      "answer": 1
    },
    {
      "q": "What is modern green architecture attempting to achieve?",
      "options": [
        "Replacing all public parks with highways",
        "Harmonizing human structures with ecological systems",
        "Constructing only windowless concrete bunkers",
        "Banning all pedestrian plazas"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 82,
  "level": "B2",
  "title": "The Ethics and Governance of Artificial Intelligence",
  "bgImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "The unprecedented acceleration of generative artificial intelligence presents profound socioeconomic dilemmas.",
      "tr": "Üretken yapay zekanın benzeri görülmemiş ivmesi derin sosyoekonomik ikilemler doğurmaktadır."
    },
    {
      "id": 2,
      "eng": "Machine learning architectures now demonstrate remarkable capabilities across creative and analytical domains.",
      "tr": "Makine öğrenimi mimarileri artık yaratıcı ve analitik alanlarda kayda değer yetenekler sergiliyor."
    },
    {
      "id": 3,
      "eng": "Algorithms compose intricate prose, synthesize photorealistic visual media, and write sophisticated computer code.",
      "tr": "Algoritmalar incelikli metinler yazıyor, fotogerçekçi görsel medyayı sentezliyor ve karmaşık bilgisayar kodları üretiyor."
    },
    {
      "id": 4,
      "eng": "However, these mathematical models frequently perpetuate historical biases embedded within training datasets.",
      "tr": "Bununla birlikte bu matematiksel modeller eğitim veri setlerinde bulunan tarihsel önyargıları sıklıkla sürdürmektedir."
    },
    {
      "id": 5,
      "eng": "Algorithmic opacity and the 'black box' phenomenon impede accountability in high-stakes decisions.",
      "tr": "Algoritmik şeffaflık eksikliği ve 'kara kutu' fenomeni yüksek riskli kararlarda hesap verebilirliği engellemektedir."
    },
    {
      "id": 6,
      "eng": "Automated systems are increasingly deployed in criminal sentencing, medical diagnoses, and credit appraisals.",
      "tr": "Otomatik sistemler adli ceza tayininde, tıbbi teşhislerde ve kredi değerlendirmelerinde giderek daha fazla kullanılmaktadır."
    },
    {
      "id": 7,
      "eng": "Without robust regulatory oversight, systemic inequities risk becoming permanently institutionalized.",
      "tr": "Güçlü bir yasal denetim olmaksızın yapısal adaletsizliklerin kalıcı biçimde kurumsallaşması riski doğar."
    },
    {
      "id": 8,
      "eng": "Furthermore, the proliferation of deepfakes and automated disinformation undermines democratic deliberation.",
      "tr": "Dahası, sahte içeriklerin ve otomatik dezenformasyonun yaygınlaşması demokratik müzakere ortamını baltalar."
    },
    {
      "id": 9,
      "eng": "International consortiums advocate for ethical frameworks emphasizing transparency, fairness, and human oversight.",
      "tr": "Uluslararası konsorsiyumlar şeffaflık, adalet ve insan denetimini vurgulayan etik çerçeveleri savunmaktadır."
    },
    {
      "id": 10,
      "eng": "Interdisciplinary collaboration among technologists, ethicists, and policymakers is urgently required.",
      "tr": "Teknoloji uzmanları, ahlak felsefecileri ve yasa yapıcılar arasında disiplinlerarası iş birliği acilen gereklidir."
    },
    {
      "id": 11,
      "eng": "Technological innovation must never be pursued at the expense of fundamental human rights.",
      "tr": "Teknolojik yenilik temel insan hakları pahasına asla ilerletilmemelidir."
    },
    {
      "id": 12,
      "eng": "Guiding artificial intelligence toward collective human flourishing remains the definitive challenge of our century.",
      "tr": "Yapay zekayı kolektif insan refahına yönlendirmek yüzyılımızın belirleyici sınavı olmaya devam etmektedir."
    }
  ],
  "questions": [
    {
      "q": "What causes AI systems to replicate discrimination and stereotypes?",
      "options": [
        "Physical hardware defects",
        "Biases embedded within training datasets",
        "Excessive internet bandwidth",
        "Manual programming typos"
      ],
      "answer": 1
    },
    {
      "q": "What term describes the difficulty in understanding how complex algorithms reach conclusions?",
      "options": [
        "The silver ceiling",
        "The 'black box' phenomenon",
        "The quantum bridge",
        "The analog barrier"
      ],
      "answer": 1
    },
    {
      "q": "What ethical values are prioritized by international governance frameworks for AI?",
      "options": [
        "Maximum speed and corporate secrecy",
        "Transparency, fairness, and human oversight",
        "Total automation without human input",
        "Disregard for historical precedents"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 83,
  "level": "B2",
  "title": "Neuroplasticity and Lifelong Learning",
  "bgImage": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "For decades, classical neurobiology maintained that the adult human brain was structurally immutable.",
      "tr": "Onlarca yıl boyunca klasik nörobiyoloji yetişkin insan beyninin yapısal olarak değişmez olduğunu savundu."
    },
    {
      "id": 2,
      "eng": "Contemporary neuroscience has thoroughly dismantled this fatalistic view through the discovery of neuroplasticity.",
      "tr": "Çağdaş sinirbilim nöroplastisitenin keşfiyle bu kaderci görüşü tamamen çürütmüştür."
    },
    {
      "id": 3,
      "eng": "Neuroplasticity refers to the central nervous system's capacity to modify its neural wiring in response to experience.",
      "tr": "Nöroplastisite merkezi sinir sisteminin deneyimlere yanıt olarak sinirsel ağlarını yeniden şekillendirme kapasitesini ifade eder."
    },
    {
      "id": 4,
      "eng": "Whenever we acquire a foreign language or master a musical instrument, synaptogenesis occurs.",
      "tr": "Yeni bir yabancı dil öğrendiğimizde veya bir enstrümanda ustalaştığımızda sinaptogenez gerçekleşir."
    },
    {
      "id": 5,
      "eng": "Repeated deliberate practice strengthens synaptic connections, optimizing cognitive speed and transmission fidelity.",
      "tr": "Tekrarlanan bilinçli pratik sinaptik bağlantıları güçlendirerek bilişsel hızı ve iletim kalitesini optimize eder."
    },
    {
      "id": 6,
      "eng": "Conversely, unused neural pathways undergo targeted pruning to conserve biological metabolic energy.",
      "tr": "Tersine, kullanılmayan sinir yolları biyolojik metabolik enerjiyi korumak amacıyla hedefli bir budamaya uğrar."
    },
    {
      "id": 7,
      "eng": "This dynamic adaptability persists well into late adulthood, disproving the myth of cognitive stagnation.",
      "tr": "Bu dinamik uyum yeteneği ileri yetişkinlik dönemine kadar sürerek bilişsel durgunluk efsanesini boşa çıkarır."
    },
    {
      "id": 8,
      "eng": "Engaging with intellectually stimulating tasks builds what cognitive scientists describe as cognitive reserve.",
      "tr": "Zihinsel olarak uyarıcı görevlerle meşgul olmak bilim insanlarının bilişsel rezerv olarak adlandırdığı yapıyı inşa eder."
    },
    {
      "id": 9,
      "eng": "A substantial cognitive reserve significantly mitigates the symptomatic onset of neurodegenerative disorders.",
      "tr": "Kayda değer bir bilişsel rezerv nörodejeneratif hastalıkların semptomatik başlangıcını belirgin şekilde hafifletir."
    },
    {
      "id": 10,
      "eng": "Furthermore, cardiovascular exercise stimulates brain-derived neurotrophic factor, fostering hippocampal neurogenesis.",
      "tr": "Dahası, kardiyovasküler egzersiz hipokampal nörojenezi teşvik eden beyin kökenli nörotrofik faktörü uyarır."
    },
    {
      "id": 11,
      "eng": "Our mental capabilities are not fixed biological destinies; they are evolving landscapes.",
      "tr": "Zihinsel yeteneklerimiz sabit biyolojik kaderler değil, sürekli evrilen coğrafyalardır."
    },
    {
      "id": 12,
      "eng": "Lifelong curiosity and disciplined study physically reshape the biological architecture of our minds.",
      "tr": "Yaşam boyu merak ve disiplinli çalışma zihnimizin biyolojik mimarisini fiziksel olarak yeniden şekillendirir."
    }
  ],
  "questions": [
    {
      "q": "What obsolete scientific dogma was overthrown by the discovery of neuroplasticity?",
      "options": [
        "That the human brain was structurally immutable in adulthood",
        "That neurons utilize electrical impulses",
        "That memory is stored in the brain",
        "That sleep is essential for survival"
      ],
      "answer": 0
    },
    {
      "q": "What biological process occurs when we repeatedly practice a complex new skill?",
      "options": [
        "Synaptic pruning of active pathways",
        "Synaptogenesis and synaptic strengthening",
        "The complete shutdown of the hippocampus",
        "Severe neuron degeneration"
      ],
      "answer": 1
    },
    {
      "q": "How does cognitive reserve benefit aging individuals?",
      "options": [
        "It eliminates the need for physical exercise",
        "It mitigates the symptomatic onset of neurodegenerative disorders",
        "It prevents all physical aging processes",
        "It replaces the biological need for sleep"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 84,
  "level": "B2",
  "title": "Circular Economy and Zero-Waste Supply Chains",
  "bgImage": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "The prevailing linear economic paradigm—extract, manufacture, consume, discard—is ecologically unsustainable.",
      "tr": "Hüküm süren çizgisel ekonomik model—çıkar, üret, tüket, at—ekolojik açıdan sürdürülemez niteliktedir."
    },
    {
      "id": 2,
      "eng": "Industrial societies generate staggering volumes of non-biodegradable waste while depleting finite natural deposits.",
      "tr": "Sanayi toplumları sınırlı doğal rezervleri tüketirken akıl almaz miktarlarda biyolojik olarak parçalanamayan atık üretmektedir."
    },
    {
      "id": 3,
      "eng": "In response to environmental degradation, forward-thinking institutions advocate for a circular economy.",
      "tr": "Çevresel tahribata yanıt olarak ileri görüşlü kurumlar döngüsel ekonomiyi hararetle savunmaktadır."
    },
    {
      "id": 4,
      "eng": "A circular model decouples economic prosperity from the consumption of virgin natural resources.",
      "tr": "Döngüsel model ekonomik refahı işlenmemiş bakir doğal kaynakların tüketiminden bağımsız hale getirir."
    },
    {
      "id": 5,
      "eng": "Core principles include designing out waste, circulating materials at highest utility, and regenerating natural capital.",
      "tr": "Temel ilkeler arasında atığı tasarımla ortadan kaldırmak, malzemeleri en yüksek verimle döngüde tutmak ve doğal sermayeyi yenilemek yer alır."
    },
    {
      "id": 6,
      "eng": "Pioneering manufacturing corporations now implement cradle-to-cradle product lifecycle methodologies.",
      "tr": "Öncü imalat şirketleri artık beşikten beşiğe ürün yaşam döngüsü metodolojilerini uygulamaktadır."
    },
    {
      "id": 7,
      "eng": "Consumer electronics are purposefully modularized to facilitate component replacement, upgrade, and remanufacture.",
      "tr": "Tüketici elektroniği parça değişimini, yükseltmeyi ve yeniden üretimi kolaylaştırmak için kasıtlı olarak modüler hale getirilir."
    },
    {
      "id": 8,
      "eng": "Extended producer responsibility legislation obligates conglomerates to finance post-consumer recycling logistics.",
      "tr": "Genişletilmiş üretici sorumluluğu mevzuatı holdingleri tüketim sonrası geri dönüşüm lojistiğini finanse etmekle yükümlü kılar."
    },
    {
      "id": 9,
      "eng": "Industrial symbiosis allows one facility's byproduct waste to serve as another facility's raw input.",
      "tr": "Endüstriyel simbiyoz bir tesisin atık yan ürününün başka bir tesisin ham girdisi olarak hizmet etmesini sağlar."
    },
    {
      "id": 10,
      "eng": "Shifting toward circular supply chains significantly lowers carbon emissions and preserves fragile habitats.",
      "tr": "Döngüsel tedarik zincirlerine geçiş karbon salımlarını belirgin biçimde düşürür ve hassas habitatları korur."
    },
    {
      "id": 11,
      "eng": "Consumers catalyze this systemic transition by demanding sustainable, durable, and repairable products.",
      "tr": "Tüketiciler sürdürülebilir, dayanıklı ve tamir edilebilir ürünler talep ederek bu sistemsel dönüşümü tetikler."
    },
    {
      "id": 12,
      "eng": "True ecological resilience requires viewing all material waste as valuable technical nutrients.",
      "tr": "Gerçek ekolojik direnç tüm maddi atıkları değerli teknik besin maddeleri olarak görmeyi gerektirir."
    }
  ],
  "questions": [
    {
      "q": "What defines the traditional linear economic paradigm?",
      "options": [
        "Preserve, regenerate, reuse, and compost",
        "Extract, manufacture, consume, and discard",
        "Borrow, lease, share, and repair",
        "Synthesize, digitize, simulate, and archive"
      ],
      "answer": 1
    },
    {
      "q": "How does modular design in consumer electronics support circularity?",
      "options": [
        "It forces users to buy a new device every year",
        "It facilitates component replacement, upgrades, and remanufacturing",
        "It completely eliminates the need for software",
        "It increases raw plastic content"
      ],
      "answer": 1
    },
    {
      "q": "What occurs in an industrial symbiosis ecosystem?",
      "options": [
        "All factories shut down simultaneously",
        "One facility's waste byproduct serves as raw input for another",
        "Companies compete destructively for fresh water",
        "Products are dumped in landfills without sorting"
      ],
      "answer": 1
    }
  ]
},
{
  "id": 85,
  "level": "B2",
  "title": "Biomimicry: Engineering Solutions Inspired by Nature",
  "bgImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
  "sentences": [
    {
      "id": 1,
      "eng": "Biological organisms have undergone three point eight billion years of rigorous evolutionary optimization.",
      "tr": "Biyolojik organizmalar üç nokta sekiz milyar yıllık amansız bir evrimsel optimizasyondan geçmiştir."
    },
    {
      "id": 2,
      "eng": "Natural selection has solved complex aerodynamic, structural, and energetic dilemmas with supreme efficiency.",
      "tr": "Doğal seçilim karmaşık aerodinamik, yapısal ve enerjetik ikilemleri üstün bir verimlilikle çözmüştür."
    },
    {
      "id": 3,
      "eng": "Biomimicry is the multidisciplinary practice of emulating biological blueprints to solve human challenges.",
      "tr": "Biyomimikri insanlığın sorunlarını çözmek için biyolojik tasarım şablonlarını taklit etmeye dayanan disiplinlerarası bir uygulamadır."
    },
    {
      "id": 4,
      "eng": "A classic exemplar is the aerodynamic redesign of Japan's legendary Shinkansen high-speed bullet train.",
      "tr": "Klasik bir örnek Japonya'nın efsanevi Şinkansen hızlı treninin aerodinamik olarak yeniden tasarlanmasıdır."
    },
    {
      "id": 5,
      "eng": "Engineers modeled the train's elongated nose after the kingfisher bird's beak to eliminate tunnel sonic booms.",
      "tr": "Mühendisler tünel çıkışındaki sonik patlamaları ortadan kaldırmak için trenin burnunu yalıçapkını kuşunun gagasına göre modelledi."
    },
    {
      "id": 6,
      "eng": "Similarly, microscopic shark skin textures have inspired antibacterial surfaces in clinical operating theaters.",
      "tr": "Benzer şekilde mikroskobik köpekbalığı derisi dokuları klinik ameliyathanelerde antibakteriyel yüzeylere ilham kaynağı olmuştur."
    },
    {
      "id": 7,
      "eng": "The diamond-shaped denticles prevent harmful pathogenic bacterial colonies from adhering to hospital walls.",
      "tr": "Elmas şeklindeki dentiküller zararlı patojenik bakteri kolonilerinin hastane duvarlarına tutunmasını engeller."
    },
    {
      "id": 8,
      "eng": "Architects studying African termite mounds engineered passive ventilation systems for massive commercial complexes.",
      "tr": "Afrika termit yuvalarını inceleyen mimarlar devasa ticari yapılar için pasif havalandırma sistemleri geliştirdi."
    },
    {
      "id": 9,
      "eng": "These structures maintain consistent comfortable indoor temperatures without relying on conventional air conditioning.",
      "tr": "Bu binalar geleneksel klimaya bel bağlamadan bina içinde istikrarlı ve konforlu sıcaklıklar sağlar."
    },
    {
      "id": 10,
      "eng": "Self-healing concrete incorporates dormant bacterial spores that precipitate limestone when microscopic fractures develop.",
      "tr": "Kendi kendini onaran beton, mikroskobik çatlaklar oluştuğunda kireç taşı çökeltisi oluşturan uyuyan bakteri sporları içerir."
    },
    {
      "id": 11,
      "eng": "Nature operates without toxic landfills, utilizing cyclical closed loops and renewable solar radiation.",
      "tr": "Doğa döngüsel kapalı devreler ve yenilenebilir güneş radyasyonu kullanarak zehirli çöplükler olmadan işler."
    },
    {
      "id": 12,
      "eng": "Consulting biological wisdom equips engineers to pioneer sustainable and resilient technologies.",
      "tr": "Biyolojik bilgeliğe danışmak mühendislere sürdürülebilir ve dirençli teknolojilere öncülük etme gücü kazandırır."
    }
  ],
  "questions": [
    {
      "q": "What biological creature inspired the aerodynamic nose of the Shinkansen bullet train?",
      "options": [
        "A deep-sea dolphin",
        "A kingfisher bird's beak",
        "A soaring desert falcon",
        "A flying beetle"
      ],
      "answer": 1
    },
    {
      "q": "How does shark skin texture benefit clinical medical facilities?",
      "options": [
        "It softens physical blows",
        "It prevents pathogenic bacterial adhesion without chemicals",
        "It reflects bright surgical lights",
        "It releases medicinal odors"
      ],
      "answer": 1
    },
    {
      "q": "What natural structure inspired passive architectural ventilation systems without conventional air conditioning?",
      "options": [
        "Spider webs",
        "African termite mounds",
        "Beehive wax cells",
        "Bird nests in trees"
      ],
      "answer": 1
    }
  ]
}
];
