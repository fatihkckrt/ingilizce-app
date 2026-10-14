import { expandedDictionary } from './generated_dictionary';
import type { PhraseInfo, StudyStats } from './types';
import { defaultTexts } from './defaultTextsData';

// INDEXEDDB DEPOLAMA MOTORU
const DB_NAME = 'EnglishLearnAppDB';
const DB_VERSION = 1;
const STORE_NAME = 'app_store';

const initDB = (): Promise<IDBDatabase | null> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.indexedDB) { resolve(null); return; }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
      const target = e.target as IDBOpenDBRequest;
      const db = target?.result;
      if (db && !db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
};

const idbGet = async <T = any>(key: string): Promise<T | null> => {
  const db = await initDB();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve((req.result as T) || null);
      req.onerror = () => resolve(null);
    } catch { resolve(null); }
  });
};

const idbSet = async (key: string, val: any): Promise<void> => {
  const db = await initDB();
  if (!db) return;
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(val, key);
  } catch (e) {}
};

const getTodayDateKey = (): string => new Date().toISOString().slice(0, 10);

const logStudyActivity = async (
  type: 'sentence_read' | 'text_completed' | 'quiz_completed' | 'vocab_review',
  details: { count?: number; total?: number; correct?: number } = {}
): Promise<StudyStats | undefined> => {
  try {
    const today = getTodayDateKey();
    const stats: StudyStats = (await idbGet<StudyStats>('study_stats')) || {
      dailyStreak: 0,
      lastActiveDate: '',
      totalSentencesRead: 0,
      totalTextsCompleted: 0,
      totalQuizQuestionsAnswered: 0,
      totalQuizCorrect: 0,
      totalVocabReviews: 0,
      history: {}
    };
    
    if (!stats.history) stats.history = {};
    if (!stats.history[today]) {
      stats.history[today] = { sentences: 0, texts: 0, quiz: 0, vocab: 0 };
    }
    
    // Calculate streak
    if (stats.lastActiveDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (stats.lastActiveDate === yesterday) {
        stats.dailyStreak = (stats.dailyStreak || 0) + 1;
      } else if (!stats.lastActiveDate) {
        stats.dailyStreak = 1;
      } else {
        stats.dailyStreak = 1;
      }
      stats.lastActiveDate = today;
    }
    
    if (type === 'sentence_read') {
      stats.totalSentencesRead = (stats.totalSentencesRead || 0) + (details.count || 1);
      stats.history[today].sentences = (stats.history[today].sentences || 0) + (details.count || 1);
    } else if (type === 'text_completed') {
      stats.totalTextsCompleted = (stats.totalTextsCompleted || 0) + 1;
      stats.history[today].texts = (stats.history[today].texts || 0) + 1;
    } else if (type === 'quiz_completed') {
      stats.totalQuizQuestionsAnswered = (stats.totalQuizQuestionsAnswered || 0) + (details.total || 0);
      stats.totalQuizCorrect = (stats.totalQuizCorrect || 0) + (details.correct || 0);
      stats.history[today].quiz = (stats.history[today].quiz || 0) + (details.total || 0);
    } else if (type === 'vocab_review') {
      stats.totalVocabReviews = (stats.totalVocabReviews || 0) + (details.count || 1);
      stats.history[today].vocab = (stats.history[today].vocab || 0) + (details.count || 1);
    }
    
    await idbSet('study_stats', stats);
    return stats;
  } catch (e) {
    console.error('Failed to log study activity:', e);
  }
};

const rawPhrasalVerbs: Record<string, PhraseInfo> = {
  // === A1 ===
  "wake up": { tr: "uyanmak", level: "A1", type: "phrasal", ex: "I wake up at 7 AM every day.", variants: ["wakes up", "waking up", "woke up", "woken up"] },
  "get up": { tr: "yataktan kalkmak", level: "A1", type: "phrasal", ex: "She gets up early on weekdays.", variants: ["gets up", "getting up", "got up"] },
  "grow up": { tr: "büyümek, yetişmek", level: "A1", type: "phrasal", ex: "I grew up in a small town.", variants: ["grows up", "growing up", "grew up", "grown up"] },
  "have fun": { tr: "eğlenmek", level: "A1", type: "collocation", ex: "Have fun tonight!", variants: ["has fun", "having fun", "had fun"] },
  "go shopping": { tr: "alışverişe gitmek", level: "A1", type: "collocation", ex: "We went shopping yesterday.", variants: ["goes shopping", "going shopping", "went shopping", "gone shopping"] },
  "in the morning": { tr: "sabahleyin", level: "A1", type: "idiom", ex: "We wake up early in the morning." },
  "at night": { tr: "geceleyin", level: "A1", type: "idiom", ex: "At night, we sit near the small wooden house." },
  "in the afternoon": { tr: "öğleden sonra", level: "A1", type: "idiom", ex: "In the afternoon, we water the young vegetables." },
  "every day": { tr: "her gün", level: "A1", type: "idiom", ex: "The chickens give us fresh eggs every day." },
  "spend time": { tr: "vakit geçirmek", level: "A1", type: "collocation", ex: "I love spending my time on this beautiful farm.", variants: ["spends time", "spending time", "spent time", "spending my time", "spend my time"] },
  "close to": { tr: "-e yakın", level: "A1", type: "idiom", ex: "My school is close to my home." },
  "play football": { tr: "futbol oynamak", level: "A1", type: "collocation", ex: "After lunch, we play football in the garden.", variants: ["plays football", "playing football", "played football"] },
  "say goodbye": { tr: "veda etmek, hoşça kal demek", level: "A1", type: "collocation", ex: "I say goodbye to my teacher and classmates.", variants: ["says goodbye", "saying goodbye", "said goodbye"] },
  "walk back": { tr: "yürüyerek geri dönmek", level: "A1", type: "phrasal", ex: "Then I walk back home happily.", variants: ["walks back", "walking back", "walked back"] },
  "listen to music": { tr: "müzik dinlemek", level: "A1", type: "collocation", ex: "I listen to music in my free time.", variants: ["listens to music", "listening to music", "listened to music"] },
  "take a bus": { tr: "otobüse binmek", level: "A1", type: "collocation", ex: "I take a bus to work.", variants: ["takes a bus", "taking a bus", "took a bus"] },
  "have breakfast": { tr: "kahvaltı yapmak", level: "A1", type: "collocation", ex: "We have breakfast together.", variants: ["has breakfast", "having breakfast", "had breakfast"] },
  "have lunch": { tr: "öğle yemeği yemek", level: "A1", type: "collocation", ex: "We have lunch at noon.", variants: ["has lunch", "having lunch", "had lunch"] },
  "have dinner": { tr: "akşam yemeği yemek", level: "A1", type: "collocation", ex: "They have dinner at seven.", variants: ["has dinner", "having dinner", "had dinner"] },
  "go to bed": { tr: "yatmaya gitmek", level: "A1", type: "collocation", ex: "Children go to bed early.", variants: ["goes to bed", "going to bed", "went to bed", "gone to bed"] },

  // === A2 ===
  "go camping": { tr: "kamp yapmaya gitmek", level: "A2", type: "collocation", ex: "We went camping in the mountains.", variants: ["goes camping", "going camping", "went camping", "gone camping"] },
  "set up": { tr: "kurmak, hazırlamak", level: "A2", type: "phrasal", ex: "Setting up the tents took thirty minutes.", variants: ["sets up", "setting up"] },
  "sit around": { tr: "etrafında toplanıp oturmak", level: "A2", type: "phrasal", ex: "We sat around the fire and shared stories.", variants: ["sits around", "sitting around", "sat around"] },
  "move into": { tr: "yeni eve taşınmak", level: "A2", type: "phrasal", ex: "I moved into a new apartment last month.", variants: ["moves into", "moving into", "moved into"] },
  "search for": { tr: "aramak, araştırmak", level: "A2", type: "phrasal", ex: "I spent two weeks searching for the right flat.", variants: ["searches for", "searching for", "searched for"] },
  "look for": { tr: "aramak", level: "A2", type: "phrasal", ex: "What are you looking for?", variants: ["looks for", "looking for", "looked for"] },
  "carry down": { tr: "aşağı taşımak", level: "A2", type: "phrasal", ex: "He helped me carry the heavy furniture downstairs.", variants: ["carries down", "carrying down", "carried down"] },
  "knock on": { tr: "kapıyı çalmak", level: "A2", type: "phrasal", ex: "My neighbor knocked on my door with cookies.", variants: ["knocks on", "knocking on", "knocked on"] },
  "save time": { tr: "zaman kazanmak, tasarruf etmek", level: "A2", type: "collocation", ex: "Living closer to work saves valuable time.", variants: ["saves time", "saving time", "saved time", "saves valuable time", "saved valuable time"] },
  "on display": { tr: "sergilenmekte, teşhirde", level: "A2", type: "idiom", ex: "There was a real astronaut suit on display." },
  "outer space": { tr: "uzay boşluğu, derin uzay", level: "A2", type: "collocation", ex: "The meteorite came from outer space." },
  "feel like": { tr: "gibi hissetmek; canı istemek", level: "A2", type: "phrasal", ex: "We felt like we were swimming with whales.", variants: ["feels like", "feeling like", "felt like"] },
  "turn off": { tr: "kapatmak, söndürmek", level: "A2", type: "phrasal", ex: "At seven, we turned off the living room lights.", variants: ["turns off", "turning off", "turned off"] },
  "turn on": { tr: "açmak, çalıştırmak", level: "A2", type: "phrasal", ex: "Please turn on the lights.", variants: ["turns on", "turning on", "turned on"] },
  "hide behind": { tr: "arkasına saklanmak", level: "A2", type: "phrasal", ex: "We hid behind the sofa and waited quietly.", variants: ["hides behind", "hiding behind", "hid behind", "hidden behind"] },
  "jump up": { tr: "yerinden fırlamak, zıplamak", level: "A2", type: "phrasal", ex: "We all jumped up and shouted happy birthday.", variants: ["jumps up", "jumping up", "jumped up"] },
  "blow out": { tr: "üfleyerek söndürmek", level: "A2", type: "phrasal", ex: "She blew out the candles and made a wish.", variants: ["blows out", "blowing out", "blew out", "blown out"] },
  "make a wish": { tr: "dilek tutmak", level: "A2", type: "collocation", ex: "She made a secret wish.", variants: ["makes a wish", "making a wish", "made a wish", "made a secret wish"] },
  "worth it": { tr: "buna değer, zahmetine değer", level: "A2", type: "idiom", ex: "Keeping the secret was hard, but it was worth it." },
  "at first": { tr: "ilk başta, başlangıçta", level: "A2", type: "idiom", ex: "Using the clutch was very hard at first." },
  "at the end": { tr: "sonunda, bitiminde", level: "A2", type: "idiom", ex: "At the end, he smiled and said I passed." },
  "try again": { tr: "tekrar denemek", level: "A2", type: "collocation", ex: "The engine stopped, but I tried again calmly.", variants: ["tries again", "trying again", "tried again"] },
  "take pictures": { tr: "fotoğraf çekmek", level: "A2", type: "collocation", ex: "We took many pictures of the rocks and trees.", variants: ["takes pictures", "taking pictures", "took pictures", "take pictures of", "took pictures of", "take a picture", "took a picture"] },
  "give up": { tr: "vazgeçmek, pes etmek", level: "A2", type: "phrasal", ex: "Never give up on your dreams.", variants: ["gives up", "giving up", "gave up", "given up"] },
  "run out of": { tr: "tükenmek, bitmek", level: "A2", type: "phrasal", ex: "We have run out of coffee.", variants: ["runs out of", "running out of", "ran out of"] },
  "take care of": { tr: "ilgilenmek, bakmak", level: "A2", type: "phrasal", ex: "She takes care of her younger brother.", variants: ["takes care of", "taking care of", "took care of", "taken care of"] },
  "break down": { tr: "bozulmak, arızalanmak", level: "A2", type: "phrasal", ex: "The car broke down on the highway.", variants: ["breaks down", "breaking down", "broke down", "broken down"] },
  "make sense": { tr: "mantıklı gelmek, anlam ifade etmek", level: "A2", type: "collocation", ex: "That explanation makes total sense.", variants: ["makes sense", "making sense", "made sense"] },
  "find out": { tr: "öğrenmek, keşfetmek", level: "A2", type: "phrasal", ex: "I need to find out what happened.", variants: ["finds out", "finding out", "found out"] },
  "pay attention to": { tr: "dikkat etmek, kulak vermek", level: "A2", type: "collocation", ex: "Please pay attention to the instructions.", variants: ["pays attention to", "paying attention to", "paid attention to"] },
  "depend on": { tr: "bağlı olmak, güvenmek", level: "A2", type: "phrasal", ex: "Success depends on your consistency.", variants: ["depends on", "depending on", "depended on"] },
  "put on": { tr: "giymek, takmak", level: "A2", type: "phrasal", ex: "Put on warm clothes.", variants: ["puts on", "putting on"] },
  "take off": { tr: "çıkarmak; havalanmak", level: "A2", type: "phrasal", ex: "The plane will take off soon.", variants: ["takes off", "taking off", "took off", "taken off"] },
  "pick up": { tr: "almak, toplamak, yerden kaldırmak", level: "A2", type: "phrasal", ex: "Can you pick up the phone?", variants: ["picks up", "picking up", "picked up"] },
  "come back": { tr: "geri dönmek", level: "A2", type: "phrasal", ex: "When will you come back?", variants: ["comes back", "coming back", "came back"] },
  "go back": { tr: "geri gitmek", level: "A2", type: "phrasal", ex: "I want to go back home.", variants: ["goes back", "going back", "went back", "gone back"] },
  "calm down": { tr: "sakinleşmek", level: "A2", type: "phrasal", ex: "Calm down and breathe slowly.", variants: ["calms down", "calming down", "calmed down"] },
  "hurry up": { tr: "acele etmek", level: "A2", type: "phrasal", ex: "Hurry up or we will be late.", variants: ["hurries up", "hurrying up", "hurried up"] },
  "get ready": { tr: "hazırlanmak", level: "A2", type: "collocation", ex: "Get ready for the trip.", variants: ["gets ready", "getting ready", "got ready"] },
  "make friends": { tr: "arkadaş edinmek", level: "A2", type: "collocation", ex: "She makes friends easily.", variants: ["makes friends", "making friends", "made friends"] },
  "take a walk": { tr: "yürüyüşe çıkmak", level: "A2", type: "collocation", ex: "Let us take a walk.", variants: ["takes a walk", "taking a walk", "took a walk"] },
  "look after": { tr: "göz kulak olmak, bakmak", level: "A2", type: "phrasal", ex: "Who looks after your cat?", variants: ["looks after", "looking after", "looked after"] },
  "fall in love": { tr: "aşık olmak", level: "A2", type: "collocation", ex: "They fell in love in Paris.", variants: ["falls in love", "falling in love", "fell in love", "fallen in love"] },
  "do homework": { tr: "ödev yapmak", level: "A2", type: "collocation", ex: "She is doing her homework.", variants: ["does homework", "doing homework", "did homework", "done homework"] },
  "check in": { tr: "giriş yaptırmak (otel/uçuş)", level: "A2", type: "phrasal", ex: "We checked in at 2 PM.", variants: ["checks in", "checking in", "checked in"] },
  "check out": { tr: "çıkış yapmak; göz atmak", level: "A2", type: "phrasal", ex: "Check out this cool website.", variants: ["checks out", "checking out", "checked out"] },
  "wait for": { tr: "beklemek", level: "A2", type: "phrasal", ex: "I waited for the bus for 30 minutes.", variants: ["waits for", "waiting for", "waited for"] },
  "listen to": { tr: "dinlemek", level: "A2", type: "phrasal", ex: "Listen to good music.", variants: ["listens to", "listening to", "listened to"] },
  "talk about": { tr: "hakkında konuşmak", level: "A2", type: "phrasal", ex: "What did you talk about?", variants: ["talks about", "talking about", "talked about"] },
  "take part in": { tr: "katılmak, yer almak", level: "A2", type: "idiom", ex: "Many students took part in the science competition.", variants: ["takes part in", "taking part in", "took part in", "taken part in"] },
  "all over the world": { tr: "tüm dünyada", level: "A2", type: "idiom", ex: "People all over the world love pizza." },
  "as soon as possible": { tr: "mümkün olan en kısa sürede", level: "A2", type: "idiom", ex: "Please reply as soon as possible." },
  "by the way": { tr: "bu arada, sırası gelmişken", level: "A2", type: "idiom", ex: "By the way, have you seen my keys?" },
  "in love with": { tr: "-e aşık", level: "A2", type: "idiom", ex: "He is completely in love with her." },
  "make a mistake": { tr: "hata yapmak", level: "A2", type: "collocation", ex: "Do not be afraid to make a mistake.", variants: ["makes a mistake", "making a mistake", "made a mistake"] },
  "take a break": { tr: "mola vermek", level: "A2", type: "collocation", ex: "Let us take a short break.", variants: ["takes a break", "taking a break", "took a break", "take a short break", "took a short break"] },
  "take a shower": { tr: "duş almak", level: "A2", type: "collocation", ex: "I usually take a shower in the evening.", variants: ["takes a shower", "taking a shower", "took a shower"] },
  "catch a cold": { tr: "soğuk algınlığına yakalanmak", level: "A2", type: "collocation", ex: "Dress warmly so you do not catch a cold.", variants: ["catches a cold", "catching a cold", "caught a cold"] },
  "fill out": { tr: "form doldurmak", level: "A2", type: "phrasal", ex: "Please fill out this registration form.", variants: ["fills out", "filling out", "filled out"] },
  "throw away": { tr: "çöpe atmak", level: "A2", type: "phrasal", ex: "Do not throw away old batteries in the trash.", variants: ["throws away", "throwing away", "threw away", "thrown away"] },
  "try on": { tr: "denemek (kıyafet)", level: "A2", type: "phrasal", ex: "Can I try on this jacket?", variants: ["tries on", "trying on", "tried on"] },
  "cross out": { tr: "üstünü çizmek", level: "A2", type: "phrasal", ex: "Cross out any incorrect answers.", variants: ["crosses out", "crossing out", "crossed out"] },

  // === B1 ===
  "renewable energy": { tr: "yenilenebilir enerji", level: "B1", type: "collocation", ex: "Renewable energy is essential for our planet." },
  "climate change": { tr: "iklim değişikliği", level: "B1", type: "collocation", ex: "Climate change accelerates extreme weather." },
  "fossil fuels": { tr: "fosil yakıtlar", level: "B1", type: "collocation", ex: "Fossil fuels release greenhouse gases." },
  "greenhouse gases": { tr: "sera gazları", level: "B1", type: "collocation", ex: "Factories emit greenhouse gases." },
  "solar power": { tr: "güneş enerjisi", level: "B1", type: "collocation", ex: "Solar power and wind energy lead the clean revolution." },
  "wind energy": { tr: "rüzgar enerjisi", level: "B1", type: "collocation", ex: "Wind energy produces clean electricity." },
  "electric vehicles": { tr: "elektrikli araçlar", level: "B1", type: "collocation", ex: "Electric vehicles are replacing gasoline cars." },
  "future generations": { tr: "gelecek nesiller", level: "B1", type: "collocation", ex: "We must preserve nature for future generations." },
  "than ever before": { tr: "şimdiye kadar hiç olmadığı kadar", level: "B1", type: "idiom", ex: "International commitment is stronger than ever before." },
  "at a rapid pace": { tr: "baş döndürücü/hızlı bir tempoda", level: "B1", type: "idiom", ex: "Battery technology has advanced at a rapid pace." },
  "look forward to": { tr: "dört gözle beklemek", level: "B1", type: "phrasal", ex: "I look forward to hearing from you.", variants: ["looks forward to", "looking forward to", "looked forward to"] },
  "figure out": { tr: "çözmek, anlamak", level: "B1", type: "phrasal", ex: "I need to figure out this problem.", variants: ["figures out", "figuring out", "figured out"] },
  "come across": { tr: "karşılaşmak, denk gelmek", level: "B1", type: "phrasal", ex: "I came across an old photo yesterday.", variants: ["comes across", "coming across", "came across"] },
  "get along with": { tr: "biriyle iyi geçinmek", level: "B1", type: "phrasal", ex: "Do you get along with your colleagues?", variants: ["gets along with", "getting along with", "got along with"] },
  "look into": { tr: "araştırmak, incelemek", level: "B1", type: "phrasal", ex: "The manager will look into the complaint.", variants: ["looks into", "looking into", "looked into"] },
  "put off": { tr: "ertelemek", level: "B1", type: "phrasal", ex: "Never put off until tomorrow what you can do today.", variants: ["puts off", "putting off"] },
  "turn down": { tr: "reddetmek; kısmak", level: "B1", type: "phrasal", ex: "He turned down the job offer.", variants: ["turns down", "turning down", "turned down"] },
  "catch up with": { tr: "yakalamak; hasret gidermek", level: "B1", type: "phrasal", ex: "Let us catch up over coffee this weekend.", variants: ["catches up with", "catching up with", "caught up with"] },
  "deal with": { tr: "başa çıkmak, ele almak", level: "B1", type: "phrasal", ex: "How do you deal with stress?", variants: ["deals with", "dealing with", "dealt with"] },
  "call off": { tr: "iptal etmek", level: "B1", type: "phrasal", ex: "They called off the soccer match due to heavy rain.", variants: ["calls off", "calling off", "called off"] },
  "point out": { tr: "işaret etmek, belirtmek", level: "B1", type: "phrasal", ex: "She pointed out several key advantages.", variants: ["points out", "pointing out", "pointed out"] },
  "bring up": { tr: "gündeme getirmek; büyütmek", level: "B1", type: "phrasal", ex: "Why did you bring up that topic?", variants: ["brings up", "bringing up", "brought up"] },
  "run into": { tr: "karşılaşmak, rastlamak", level: "B1", type: "phrasal", ex: "I ran into my old teacher at the market.", variants: ["runs into", "running into", "ran into"] },
  "end up": { tr: "sonuçlanmak, kendini ... bulmak", level: "B1", type: "phrasal", ex: "We ended up having dinner at midnight.", variants: ["ends up", "ending up", "ended up"] },
  "build on": { tr: "üzerine kurmak / inşa edilmek", level: "B1", type: "phrasal", ex: "Our lives are largely built on routines.", variants: ["builds on", "building on", "built on"] },
  "rather than": { tr: "yerine, -den ziyade", level: "B1", type: "idiom", ex: "Habits govern behavior rather than conscious thought." },
  "according to": { tr: "-e göre", level: "B1", type: "idiom", ex: "According to behavioral research, habits follow a loop." },
  "composed of": { tr: "-den oluşan, meydana gelen", level: "B1", type: "collocation", ex: "A loop composed of three steps." },
  "in response to": { tr: "-e yanıt/tepki olarak", level: "B1", type: "idiom", ex: "Behavior performed in response to the cue." },
  "as an example": { tr: "örnek olarak", level: "B1", type: "idiom", ex: "Consider afternoon coffee as an example." },
  "break bad habits": { tr: "kötü alışkanlıkları kırmak", level: "B1", type: "collocation", ex: "Breaking bad habits requires smart strategy.", variants: ["breaks bad habits", "breaking bad habits", "broke bad habits"] },
  "substitute with": { tr: "-ile değiştirmek, yerine koymak", level: "B1", type: "phrasal", ex: "Substitute that unhealthy snack with a walk.", variants: ["substitutes with", "substituting with", "substituted with"] },
  "in plain sight": { tr: "göz önünde, apaçık", level: "B1", type: "idiom", ex: "Keep your workout shoes in plain sight." },
  "turn into": { tr: "-e dönüşmek", level: "B1", type: "phrasal", ex: "Actions turn into automated reflexes.", variants: ["turns into", "turning into", "turned into"] },
  "suffer from": { tr: "muzdarip olmak, acısını çekmek", level: "B1", type: "phrasal", ex: "Historic cities suffer from overtourism.", variants: ["suffers from", "suffering from", "suffered from"] },
  "make a difference": { tr: "fark yaratmak", level: "B1", type: "collocation", ex: "Conscious travelers can make a difference.", variants: ["makes a difference", "making a difference", "made a difference"] },
  "focus on": { tr: "odaklanmak", level: "B1", type: "phrasal", ex: "This travel philosophy focuses on conservation.", variants: ["focuses on", "focusing on", "focused on"] },
  "instead of": { tr: "yerine", level: "B1", type: "idiom", ex: "Taking trains instead of short flights lowers carbon footprint." },
  "as a result of": { tr: "sonucunda, neticesinde", level: "B1", type: "collocation", ex: "He won the award as a result of hard work." },
  "in front of": { tr: "önünde", level: "B1", type: "idiom", ex: "Confidence in front of any live audience." },
  "body language": { tr: "beden dili", level: "B1", type: "collocation", ex: "Your physical body language speaks before your voice." },
  "eye contact": { tr: "göz teması", level: "B1", type: "collocation", ex: "Maintain steady eye contact with the audience." },
  "speed up": { tr: "hızlandırmak", level: "B1", type: "phrasal", ex: "Feedback speeds up improvement.", variants: ["speeds up", "speeding up", "sped up", "speeded up"] },
  "in your favor": { tr: "lehine, yararına", level: "B1", type: "idiom", ex: "Compound interest can work in your favor." },
  "over time": { tr: "zamanla, zaman içinde", level: "B1", type: "idiom", ex: "Liabilities steadily drain cash over time." },
  "delayed gratification": { tr: "tatmini erteleme, sabır", level: "B1", type: "collocation", ex: "Practice conscious delayed gratification with large purchases." },
  "work out": { tr: "antrenman yapmak; çözüme ulaşmak", level: "B1", type: "phrasal", ex: "I work out at the gym regularly.", variants: ["works out", "working out", "worked out"] },
  "cheer up": { tr: "neşelenmek, teselli etmek", level: "B1", type: "phrasal", ex: "Cheer up, everything will be fine!", variants: ["cheers up", "cheering up", "cheered up"] },
  "give in": { tr: "pes etmek, boyun eğmek", level: "B1", type: "phrasal", ex: "Never give in to peer pressure.", variants: ["gives in", "giving in", "gave in", "given in"] },
  "show up": { tr: "çıkagelmek, belirmek", level: "B1", type: "phrasal", ex: "He did not show up for class.", variants: ["shows up", "showing up", "showed up", "shown up"] },
  "get rid of": { tr: "kurtulmak, elden çıkarmak", level: "B1", type: "phrasal", ex: "It is time to get rid of old junk.", variants: ["gets rid of", "getting rid of", "got rid of"] },
  "keep on": { tr: "devam etmek", level: "B1", type: "phrasal", ex: "Keep on smiling.", variants: ["keeps on", "keeping on", "kept on"] },
  "carry on": { tr: "sürdürmek, devam etmek", level: "B1", type: "phrasal", ex: "Carry on with your speech.", variants: ["carries on", "carrying on", "carried on"] },
  "watch out": { tr: "dikkat etmek", level: "B1", type: "phrasal", ex: "Watch out for pickpockets.", variants: ["watches out", "watching out", "watched out"] },
  "by chance": { tr: "tesadüfen", level: "B1", type: "idiom", ex: "We met by chance in the cafe." },
  "on purpose": { tr: "kasıtlı olarak, bilerek", level: "B1", type: "idiom", ex: "I did not do it on purpose." },
  "in advance": { tr: "önceden, peşin", level: "B1", type: "idiom", ex: "Please reserve your room in advance." },
  "at least": { tr: "en azından", level: "B1", type: "idiom", ex: "Read at least ten pages daily." },
  "at most": { tr: "en çok, en fazla", level: "B1", type: "idiom", ex: "It will cost ten dollars at most." },
  "out of order": { tr: "arızalı, bozuk", level: "B1", type: "idiom", ex: "The ticket machine is out of order." },
  "up to date": { tr: "güncel", level: "B1", type: "idiom", ex: "Keep your software up to date." },
  "in fact": { tr: "aslında, doğrusu", level: "B1", type: "idiom", ex: "In fact, I enjoyed the book immensely." },
  "as well as": { tr: "yanı sıra, hem de", level: "B1", type: "idiom", ex: "She speaks German as well as English." },
  "in order to": { tr: "amacıyla, -mek için", level: "B1", type: "idiom", ex: "Work hard in order to achieve your goals." },
  "due to": { tr: "-den dolayı, yüzünden", level: "B1", type: "idiom", ex: "The game was canceled due to heavy snow." },
  "because of": { tr: "nedeniyle", level: "B1", type: "idiom", ex: "We could not travel because of the storm." },
  "in spite of": { tr: "-e rağmen", level: "B1", type: "idiom", ex: "In spite of bad weather, we had a picnic." },
  "on the other hand": { tr: "öte yandan, diğer taraftan", level: "B1", type: "idiom", ex: "On the other hand, it is quite expensive." },
  "first of all": { tr: "her şeyden önce", level: "B1", type: "idiom", ex: "First of all, congratulations on your graduation." },
  "all in all": { tr: "özetle, neticede", level: "B1", type: "idiom", ex: "All in all, it was a successful year." },
  "sooner or later": { tr: "er ya da geç", level: "B1", type: "idiom", ex: "Sooner or later, hard work pays off." },
  "step by step": { tr: "adım adım", level: "B1", type: "idiom", ex: "Follow the tutorial step by step." },
  "so far": { tr: "şu ana kadar", level: "B1", type: "idiom", ex: "So far so good." },
  "keep in mind": { tr: "akılda tutmak", level: "B1", type: "idiom", ex: "Keep in mind that consistency is key.", variants: ["keeps in mind", "keeping in mind", "kept in mind"] },
  "take for granted": { tr: "çantada keklik görmek", level: "B1", type: "idiom", ex: "Never take your health for granted.", variants: ["takes for granted", "taking for granted", "took for granted", "taken for granted"] },

  // === B2 ===
  "decision fatigue": { tr: "karar yorgunluğu", level: "B2", type: "collocation", ex: "Decision fatigue leads to deteriorating choice quality." },
  "lead to": { tr: "yol açmak, sebep olmak", level: "B2", type: "phrasal", ex: "Flawed algorithms can lead to wrongful arrests.", variants: ["leads to", "leading to", "led to"] },
  "result in": { tr: "ile sonuçlanmak", level: "B2", type: "phrasal", ex: "Careless decisions result in serious losses.", variants: ["results in", "resulting in", "resulted in"] },
  "cope with": { tr: "başa çıkmak, göğüs germek", level: "B2", type: "phrasal", ex: "Urban residents must cope with high chronic stress.", variants: ["copes with", "coping with", "coped with"] },
  "in pursuit of": { tr: "peşinde, arayışında", level: "B2", type: "idiom", ex: "In pursuit of lower costs, companies relocated abroad." },
  "just-in-time": { tr: "tam zamanında (üretim/tedarik)", level: "B2", type: "collocation", ex: "Just-in-time manufacturing became standard gospel." },
  "supply chain": { tr: "tedarik zinciri", level: "B2", type: "collocation", ex: "Supply chains connect distant continents seamlessly.", variants: ["supply chains"] },
  "at blinding speed": { tr: "baş döndürücü bir hızla", level: "B2", type: "idiom", ex: "Artificial intelligence is advancing at blinding speed." },
  "algorithmic bias": { tr: "algoritmik önyargı", level: "B2", type: "collocation", ex: "Algorithmic bias poses serious ethical concerns." },
  "due process": { tr: "adil yargılanma hakkı / hukuki süreç", level: "B2", type: "academic", ex: "Due process requires understandable legal explanations." },
  "based on": { tr: "-e dayanarak, -e göre", level: "B2", type: "academic", ex: "Software must make choices based on programmed values.", variants: ["base on", "basing on"] },
  "human-in-the-loop": { tr: "insanın devrede olduğu denetim", level: "B2", type: "collocation", ex: "Safety regulations mandate human-in-the-loop oversight." },
  "regardless of": { tr: "-e bakılmaksızın", level: "B2", type: "academic", ex: "Plasticity occurs regardless of your biological age." },
  "cognitive reserve": { tr: "bilişsel rezerv / zihinsel yedek kapasite", level: "B2", type: "collocation", ex: "Multilingual brains possess richer cognitive reserve." },
  "neural plasticity": { tr: "sinirsel plastisite / beyin esnekliği", level: "B2", type: "academic", ex: "Speaking multiple languages improves neural plasticity." },
  "executive function": { tr: "yürütücü işlev (beyin)", level: "B2", type: "academic", ex: "This workout strengthens executive function." },
  "switch between": { tr: "arasında geçiş yapmak", level: "B2", type: "phrasal", ex: "They switch between tasks with agility.", variants: ["switches between", "switching between", "switched between"] },
  "lie in": { tr: "-de yatmak, -den kaynaklanmak", level: "B2", type: "phrasal", ex: "True strength lies in supply flexibility.", variants: ["lies in", "lying in", "lay in"] },
  "stem from": { tr: "-den kaynaklanmak, ileri gelmek", level: "B2", type: "phrasal", ex: "Many modern anxieties stem from chronic overstimulation.", variants: ["stems from", "stemming from", "stemmed from"] },
  "pave the way": { tr: "çığır açmak, zemin hazırlamak", level: "B2", type: "idiom", ex: "This breakthrough paved the way for modern computing.", variants: ["paves the way", "paving the way", "paved the way"] },
  "take into account": { tr: "hesaba katmak, göz önünde bulundurmak", level: "B2", type: "collocation", ex: "You must take into account all variables.", variants: ["takes into account", "taking into account", "took into account", "taken into account"] },
  "on the verge of": { tr: "eşiğinde, kenarında", level: "B2", type: "idiom", ex: "The industry is on the verge of a major revolution." },
  "play a crucial role in": { tr: "hayati bir rol oynamak", level: "B2", type: "collocation", ex: "Diet plays a crucial role in cognitive health.", variants: ["plays a crucial role in", "playing a crucial role in", "played a crucial role in"] },
  "come at a cost": { tr: "bir bedel karşılığı olmak", level: "B2", type: "idiom", ex: "Rapid growth often comes at a cost.", variants: ["comes at a cost", "coming at a cost", "came at a cost"] },
  "make a tradeoff": { tr: "ödün vermek, denge kurmak", level: "B2", type: "collocation", ex: "Engineers must make tradeoffs between speed and security.", variants: ["makes a tradeoff", "making a tradeoff", "made a tradeoff", "make trade-offs", "makes trade-offs"] },
  "in contrast to": { tr: "-in aksine, tersine", level: "B2", type: "academic", ex: "In contrast to conventional methods, this is cleaner." },
  "prior to": { tr: "-den önce", level: "B2", type: "academic", ex: "Prior to the trial, defendants meet their legal counsel." },
  "foster social unity": { tr: "sosyal birliği pekiştirmek", level: "B2", type: "collocation", ex: "Neighborhood parks foster social unity.", variants: ["fosters social unity", "fostering social unity", "fostered social unity"] },
  "mitigate the effect": { tr: "etkiyi hafifletmek/azaltmak", level: "B2", type: "collocation", ex: "Urban greenery mitigates the heat island effect.", variants: ["mitigates the effect", "mitigating the effect", "mitigated the effect"] },
  "high-stakes": { tr: "yüksek riskli, hayati önemde", level: "B2", type: "collocation", ex: "Struggle with high-stakes strategic dilemmas." },
  "rest and recharge": { tr: "dinlenmek ve enerji toplamak", level: "B2", type: "idiom", ex: "Observing nature allows our minds to rest and recharge." },
  "carry out": { tr: "yürütmek, gerçekleştirmek", level: "B2", type: "phrasal", ex: "Scientists carry out important experiments.", variants: ["carries out", "carrying out", "carried out"] },
  "keep up with": { tr: "ayak uydurmak, takip etmek", level: "B2", type: "phrasal", ex: "It is hard to keep up with modern technology.", variants: ["keeps up with", "keeping up with", "kept up with"] },
  "take advantage of": { tr: "fırsatı değerlendirmek, yararlanmak", level: "B2", type: "collocation", ex: "You should take advantage of this opportunity.", variants: ["takes advantage of", "taking advantage of", "took advantage of", "taken advantage of"] },
  "in terms of": { tr: "bakımından, açısından", level: "B2", type: "collocation", ex: "In terms of performance, this phone is great." },
  "stand out": { tr: "göze çarpmak, öne çıkmak", level: "B2", type: "phrasal", ex: "Her leadership skills really stand out.", variants: ["stands out", "standing out", "stood out"] }
};

export { rawPhrasalVerbs };

export const getAllPhrasesList = (): Array<PhraseInfo & { phrase: string }> => {
  return Object.entries(rawPhrasalVerbs).map(([phrase, info]) => ({
    phrase,
    ...info
  }));
};

// Flatten dictionary including all canonical keys and conjugated variants
const phrasalVerbs: Record<string, PhraseInfo> = {};
for (const [canonical, data] of Object.entries(rawPhrasalVerbs)) {
  phrasalVerbs[canonical] = { ...data, canonical };
  if (data.variants) {
    for (const v of data.variants) {
      if (!phrasalVerbs[v]) {
        phrasalVerbs[v] = { ...data, canonical, isVariant: true };
      }
    }
  }
}

const findPhrasalVerbsInText = (text: string) => {
  if (!text) return [];
  const matches: any[] = [];
  const sortedPhrases = Object.keys(phrasalVerbs).sort((a, b) => b.length - a.length);
  const matchedSpans: { start: number; end: number }[] = [];
  
  for (const phrase of sortedPhrases) {
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      const hasOverlap = matchedSpans.some(span => Math.max(start, span.start) < Math.min(end, span.end));
      if (!hasOverlap) {
        matchedSpans.push({ start, end });
        const info = phrasalVerbs[phrase];
        matches.push({
          phrase: info.canonical || phrase,
          matchedText: match[0],
          index: start,
          length: match[0].length,
          info
        });
      }
    }
  }
  return matches.sort((a, b) => a.index - b.index);
};

const baseDictionary = {
  // Temel Gramer & Zamirler
  "i": "ben", "you": "sen/siz", "he": "o (erkek)", "she": "o (kadın)", "it": "o", "we": "biz", "they": "onlar",
  "me": "bana/beni", "him": "ona/onu", "her": "ona/onun", "us": "bize/bizi", "them": "onlara/onları",
  "my": "benim", "your": "senin/sizin", "his": "onun", "its": "onun", "our": "bizim", "their": "onların",
  "is": "dır/dir", "are": "dır/dir", "am": "yım/yim", "was": "idi", "were": "idiler", "will": "-ecek/-acak",
  "be": "olmak", "been": "olmuş", "being": "olma", "have": "sahip olmak", "has": "sahip", "had": "sahipti",
  "do": "yapmak", "does": "yapar", "did": "yaptı", "can": "-ebilmek", "could": "-ebilirdi",
  "a": "bir", "an": "bir", "the": "(belirteç)", "and": "ve", "but": "ama", "because": "çünkü", "so": "bu yüzden/öyle",
  "in": "içinde", "on": "üzerinde", "at": "-de/-da", "to": "-e/-a", "from": "-den", "with": "ile", "by": "tarafından/ile",
  "for": "için", "about": "hakkında", "under": "altında", "above": "üzerinde", "between": "arasında", "among": "arasında",
  "through": "içinden", "into": "içine", "over": "üzerinde", "after": "sonra", "before": "önce", "until": "-e kadar",
  "without": "-sız/-siz", "within": "içinde", "against": "karşı", "towards": "-e doğru", "along": "boyunca", "behind": "arkasında",
  "of": "-in/-ın", "off": "kapalı/uzak", "out": "dışarı", "up": "yukarı", "down": "aşağı",

  // Zarflar & Sayılar & Renkler
  "what": "ne", "where": "nerede", "when": "ne zaman/-dığında", "why": "neden", "how": "nasıl", "who": "kim",
  "all": "tümü/hepsi", "some": "bazı/biraz", "any": "hiç/herhangi", "no": "hayır/yok", "not": "değil", "only": "sadece",
  "very": "çok", "too": "çok/aşırı/de", "also": "ayrıca", "just": "sadece/az önce", "first": "ilk", "next": "sonraki",
  "then": "sonra/o zaman", "now": "şimdi", "today": "bugün", "yesterday": "dün", "tomorrow": "yarın", "here": "burada",
  "there": "orada/var", "always": "her zaman", "never": "asla", "sometimes": "bazen", "often": "sık sık", "more": "daha fazla",
  "most": "en çok", "than": "-den/-dan", "every": "her", "sharp": "tam (saat)/keskin", "early": "erken", "late": "geç",
  "one": "bir", "two": "iki", "three": "üç", "four": "dört", "five": "beş", "six": "altı", "seven": "yedi", "eight": "sekiz",
  "nine": "dokuz", "ten": "on", "twelve": "on iki", "twenty": "yirmi", "thirty": "otuz", "forty": "kırk", "fifty": "elli",
  "blue": "mavi", "red": "kırmızı", "green": "yeşil", "yellow": "sarı", "brown": "kahverengi", "white": "beyaz",
  "black": "siyah/sade", "golden": "altın sarısı", "dark": "karanlık/bitter/koyu", "bright": "parlak",

  // A1-A2 Bireysel Kelimeler
  "grandfather": "büyükbaba", "small": "küçük", "farm": "çiftlik", "outside": "dışında", "city": "şehir",
  "visit": "ziyaret etmek", "summer": "yaz", "holiday": "tatil", "wake": "uyanmak", "morning": "sabah",
  "air": "hava", "fresh": "taze", "clean": "temiz", "feed": "beslemek", "hungry": "aç", "chicken": "tavuk", "chickens": "tavuklar",
  "give": "vermek", "egg": "yumurta", "eggs": "yumurtalar", "day": "gün", "collect": "toplamak", "wooden": "ahşap", "basket": "sepet",
  "cow": "inek", "cows": "inekler", "field": "tarla/alan", "eat": "yemek", "grass": "çimen", "make": "yapmak", "milk": "süt", "milks": "sağar",
  "breakfast": "kahvaltı", "friendly": "arkadaş canlısı", "dog": "köpek", "named": "adında", "max": "max", "love": "sevmek",
  "run": "koşmak", "running": "koşma", "garden": "bahçe", "noon": "öğle vakti", "lunch": "öğle yemeği", "large": "büyük/geniş",
  "oak": "meşe", "tree": "ağaç", "bread": "ekmek", "goat": "keçi", "cheese": "peynir", "tomato": "domates", "tomatoes": "domatesler",
  "afternoon": "öğleden sonra", "water": "su/sulamak", "young": "genç/taze", "vegetable": "sebze", "vegetables": "sebzeler",
  "life": "hayat", "hard": "zor/sert", "peaceful": "huzurlu", "bird": "kuş", "birds": "kuşlar", "sing": "şarkı söylemek",
  "sweet": "tatlı", "song": "şarkı", "songs": "şarkılar", "sunset": "gün batımı", "night": "gece", "sit": "oturmak", "near": "yakınında",
  "house": "ev", "drink": "içmek", "tea": "çay", "warm": "sıcak/ılık", "watch": "izlemek", "sky": "gökyüzü", "clear": "berrak/net",
  "spend": "vakit geçirmek/harcamak", "spending": "vakit geçirme", "beautiful": "güzel", "student": "öğrenci", "primary": "ilkokul",
  "school": "okul", "close": "yakın/kapatmak", "home": "ev", "walk": "yürümek", "friend": "arkadaş", "friends": "arkadaşlar",
  "lesson": "ders", "lessons": "dersler", "start": "başlamak", "classroom": "sınıf", "full": "dolu", "light": "ışık",
  "desk": "sıra", "desks": "sıralar", "comfortable": "rahat", "chair": "sandalye", "chairs": "sandalyeler",
  "teacher": "öğretmen", "write": "yazmak", "writes": "yazar", "word": "kelime", "words": "kelimeler", "board": "tahta",
  "favorite": "en sevilen", "subject": "ders/konu", "term": "dönem", "learning": "öğrenme", "new": "yeni", "vocabulary": "kelimeler",
  "reading": "okuma", "short": "kısa", "story": "hikaye", "stories": "hikayeler", "math": "matematik", "difficult": "zor",
  "patient": "sabırlı", "bell": "zil", "ring": "çalmak", "rings": "çalar", "loudly": "yüksek sesle", "apple": "elma",
  "sandwich": "sandviç", "play": "oynamak", "football": "futbol", "laugh": "gülmek", "draw": "çizmek", "picture": "resim",
  "pictures": "resimler", "art": "resim/sanat", "say": "söylemek", "goodbye": "veda", "classmate": "sınıf arkadaşı",
  "classmates": "sınıf arkadaşları", "shopping": "alışveriş", "supermarket": "süpermarket", "town": "kasaba", "list": "liste",
  "buy": "satın almak", "cart": "araba", "fruit": "meyve", "banana": "muz", "orange": "portakal", "cucumber": "salatalık",
  "cucumbers": "salatalıklar", "bakery": "fırın", "smell": "koku/kokmak", "loaves": "somunlar", "cookie": "kurabiye",
  "cookies": "kurabiyeler", "butter": "tereyağı", "dairy": "süt ürünleri", "aisle": "reyon/koridor", "check": "kontrol etmek",
  "bottle": "şişe", "chocolate": "çikolata", "cashier": "kasiyer", "credit": "kredi", "card": "kart", "bags": "çantalar",
  "carry": "taşımak", "heavy": "ağır", "zoo": "hayvanat bahçesi", "weather": "hava durumu", "sunny": "güneşli", "tickets": "biletler",
  "colorful": "renkli", "parrot": "papağan", "giraffe": "zürafa", "monkey": "maymun", "elephant": "fil", "elephants": "filler",
  "trunk": "hortum", "bench": "bank", "lemonade": "limonata", "ice": "buz/dondurma", "lion": "aslan", "lions": "aslanlar",
  "mountains": "dağlar", "river": "nehir", "fish": "balık", "stars": "yıldızlar", "smoke": "duman", "bicycles": "bisikletler",
  "camping": "kamp", "tents": "çadırlar", "campfire": "kamp ateşi", "forest": "orman", "trail": "patika", "firewood": "odun",
  "waterfall": "şelale", "apartment": "daire", "flat": "daire", "furniture": "mobilya", "boxes": "kutular", "truck": "kamyon",
  "sofa": "kanepe", "museum": "müze", "robot": "robot", "fossils": "fossiller", "space": "uzay", "party": "parti",
  "birthday": "doğum günü", "cake": "pasta", "candles": "mumlar", "balloons": "balonlar", "driving": "araba sürme",
  "license": "ehliyet", "clutch": "debriyaj", "parking": "park etme",

  // B1-B2 İleri Kelimeler
  "renewable": "yenilenebilir", "energy": "enerji", "fossil": "fosil", "fuels": "yakıtlar", "greenhouse": "sera gazı",
  "emissions": "salımlar", "climate": "iklim", "solar": "güneş", "wind": "rüzgar", "panels": "paneller", "turbines": "türbinler",
  "batteries": "piller", "storage": "depolama", "grid": "şebeke", "electric": "elektrikli", "vehicles": "araçlar", "habit": "alışkanlık",
  "routine": "rutin", "cognitive": "bilişsel", "trigger": "tetikleyici", "reward": "ödül", "willpower": "irade gücü", "tourism": "turizm",
  "sustainable": "sürdürülebilir", "overtourism": "aşırı turizm", "heritage": "miras", "wildlife": "yaban hayatı", "speech": "konuşma",
  "public": "topluluk/halk", "glossophobia": "konuşma korkusu", "audience": "dinleyici", "slides": "slaytlar", "pauses": "duraklamalar",
  "financial": "finansal", "literacy": "okuryazarlık", "budget": "bütçe", "debt": "borç", "savings": "tasarruflar", "investing": "yatırım",
  "fatigue": "yorgunluk", "decision": "karar", "exhaustion": "tükenmişlik", "shortcuts": "kestirmeler", "wardrobe": "gardırop",
  "cortex": "korteks", "glucose": "kan şekeri", "greenery": "yeşillik", "cortisol": "kortizol", "pollutants": "kirleticiler",
  "island": "adası", "ecosystems": "ekosistemler", "supply": "tedarik", "chain": "zincir", "logistics": "lojistik",
  "nearshoring": "yakına taşıma", "semiconductor": "yarı iletken", "resilience": "dayanıklılık", "artificial": "yapay",
  "intelligence": "zeka", "bias": "önyargı", "automation": "otomasyon", "bilingual": "iki dilli", "plasticity": "esneklik/plastisite",
  "longevity": "uzun ömürlülük", "dementia": "demans", "alzheimer's": "alzheimer", "reserve": "rezerv",

  // Kalıplar ve Öbekler
  "outside the city": "şehir dışında", "summer holiday": "yaz tatili", "wake up": "uyanmak", "early in the morning": "sabah erkenden",
  "in the morning": "sabahleyin", "fresh and clean": "taze ve temiz", "every day": "her gün", "green field": "yeşil tarla",
  "before breakfast": "kahvaltıdan önce", "oak tree": "meşe ağacı", "eat lunch": "öğle yemeği yemek", "goat cheese": "keçi peyniri",
  "in the afternoon": "öğleden sonra", "farm life": "çiftlik hayatı", "until sunset": "gün batımına kadar", "at night": "geceleyin",
  "wooden house": "ahşap ev", "warm tea": "sıcak çay", "clear sky": "berrak gökyüzü", "spend time": "vakit geçirmek",
  "primary school": "ilkokul", "close to": "-e yakın", "every morning": "her sabah", "with my friends": "arkadaşlarımla",
  "eight o'clock": "saat sekiz", "full of light": "ışık dolu", "comfortable chairs": "rahat sandalyeler", "on the board": "tahtada",
  "favorite subject": "en sevilen ders", "new vocabulary": "yeni kelimeler", "short stories": "kısa hikayeler", "before noon": "öğleden önce",
  "math class": "matematik dersi", "twelve o'clock": "saat on iki", "lunch bell": "öğle yemeği zili", "cheese sandwich": "peynirli sandviç",
  "after lunch": "öğle yemeğinden sonra", "play football": "futbol oynamak", "art class": "resim dersi", "draw pictures": "resim çizmek",
  "three o'clock": "saat üç", "say goodbye": "veda etmek", "walk back home": "eve geri yürümek", "go shopping": "alışverişe gitmek",
  "shopping list": "alışveriş listesi", "shopping cart": "alışveriş arabası", "vegetable section": "sebze reyonu", "bakery section": "fırın reyonu",
  "warm bread": "sıcak ekmek", "dairy aisle": "süt reyonu", "dark chocolate": "bitter çikolata", "cash register": "kasa",
  "credit card": "kredi kartı", "cloth bags": "bez çantalar", "city zoo": "şehir hayvanat bahçesi", "colorful birds": "renkli kuşlar",
  "wooden bench": "ahşap bank", "cold lemonade": "soğuk limonata", "ice cream": "dondurma", "family photos": "aile fotoğrafları",
  "return home": "eve dönmek", "peaceful town": "huzurlu kasaba", "high mountains": "yüksek dağlar", "stone houses": "taş evler",
  "clean river": "temiz nehir", "bright stars": "parlak yıldızlar", "go camping": "kampa gitmek", "sleeping bags": "uyku tulumları",
  "weather forecast": "hava tahmini", "pitch tents": "çadır kurmak", "forest trail": "orman patikası", "dry firewood": "kuru yakacak odun",
  "new apartment": "yeni daire", "cardboard boxes": "karton kutular", "heavy furniture": "ağır mobilya", "fresh cookies": "taze kurabiyeler",
  "science museum": "bilim müzesi", "friendly robot": "dost canlısı robot", "outer space": "uzay", "surprise party": "sürpriz parti",
  "chocolate cake": "çikolatalı pasta", "happy birthday": "iyi ki doğdun", "traffic signs": "trafik işaretleri", "speed limits": "hız sınırları",
  "parallel parking": "paralel park", "driving test": "direksiyon sınavı", "driving license": "sürücü belgesi/ehliyet",
  "renewable energy": "yenilenebilir enerji", "fossil fuels": "fosil yakıtlar", "climate change": "iklim değişikliği",
  "solar power": "güneş enerjisi", "wind power": "rüzgar enerjisi", "energy storage": "enerji depolama", "habit formation": "alışkanlık oluşumu",
  "cognitive energy": "bilişsel enerji", "bad habits": "kötü alışkanlıklar", "mass tourism": "kitle turizmi", "sustainable tourism": "sürdürülebilir turizm",
  "public speaking": "topluluk önünde konuşma", "body language": "beden dili", "financial literacy": "finansal okuryazarlık",
  "emergency fund": "acil durum fonu", "decision fatigue": "karar yorgunluğu", "green spaces": "yeşil alanlar",
  "supply chains": "tedarik zincirleri", "artificial intelligence": "yapay zeka", "brain plasticity": "beyin plastisitesi"
};

const dictionary: Record<string, string> = {
  ...baseDictionary,
  ...expandedDictionary
};

const wordLevelMap = {
  "morning": "A1",
  "breakfast": "A1",
  "friend": "A1",
  "football": "A1",
  "farm": "A1",
  "school": "A1",
  "shopping": "A1",
  "summer": "A1",
  "holiday": "A1",
  "blue": "A1",
  "house": "A1",
  "home": "A1",
  "water": "A1",
  "bread": "A1",
  "coffee": "A1",
  "tea": "A1",
  "milk": "A1",
  "egg": "A1",
  "butter": "A1",
  "cheese": "A1",
  "apple": "A1",
  "banana": "A1",
  "orange": "A1",
  "fruit": "A1",
  "salad": "A1",
  "soup": "A1",
  "meat": "A1",
  "chicken": "A1",
  "fish": "A1",
  "rice": "A1",
  "sun": "A1",
  "moon": "A1",
  "star": "A1",
  "sky": "A1",
  "rain": "A1",
  "cloud": "A1",
  "wind": "A1",
  "tree": "A1",
  "flower": "A1",
  "grass": "A1",
  "cat": "A1",
  "dog": "A1",
  "bird": "A1",
  "horse": "A1",
  "cow": "A1",
  "duck": "A1",
  "pet": "A1",
  "animal": "A1",
  "baby": "A1",
  "child": "A1",
  "mother": "A1",
  "father": "A1",
  "sister": "A1",
  "brother": "A1",
  "family": "A1",
  "parent": "A1",
  "doctor": "A1",
  "teacher": "A1",
  "student": "A1",
  "baker": "A1",
  "book": "A1",
  "pen": "A1",
  "pencil": "A1",
  "paper": "A1",
  "desk": "A1",
  "chair": "A1",
  "table": "A1",
  "room": "A1",
  "bed": "A1",
  "door": "A1",
  "window": "A1",
  "kitchen": "A1",
  "garden": "A1",
  "park": "A1",
  "street": "A1",
  "city": "A1",
  "town": "A1",
  "car": "A1",
  "bus": "A1",
  "bike": "A1",
  "bicycle": "A1",
  "train": "A1",
  "boat": "A1",
  "ball": "A1",
  "game": "A1",
  "toy": "A1",
  "music": "A1",
  "song": "A1",
  "radio": "A1",
  "clock": "A1",
  "watch": "A1",
  "money": "A1",
  "price": "A1",
  "shop": "A1",
  "store": "A1",
  "market": "A1",
  "shoe": "A1",
  "shirt": "A1",
  "coat": "A1",
  "hat": "A1",
  "dress": "A1",
  "red": "A1",
  "green": "A1",
  "yellow": "A1",
  "white": "A1",
  "black": "A1",
  "brown": "A1",
  "pink": "A1",
  "grey": "A1",
  "color": "A1",
  "big": "A1",
  "small": "A1",
  "hot": "A1",
  "cold": "A1",
  "warm": "A1",
  "cool": "A1",
  "clean": "A1",
  "dirty": "A1",
  "happy": "A1",
  "sad": "A1",
  "good": "A1",
  "bad": "A1",
  "new": "A1",
  "old": "A1",
  "young": "A1",
  "fast": "A1",
  "slow": "A1",
  "sweet": "A1",
  "fresh": "A1",
  "quiet": "A1",
  "loud": "A1",
  "easy": "A1",
  "hard": "A1",
  "busy": "A1",
  "open": "A1",
  "close": "A1",
  "ready": "A1",
  "hungry": "A1",
  "thirsty": "A1",
  "tired": "A1",
  "walk": "A1",
  "run": "A1",
  "jump": "A1",
  "sit": "A1",
  "stand": "A1",
  "eat": "A1",
  "drink": "A1",
  "sleep": "A1",
  "wake": "A1",
  "wash": "A1",
  "cook": "A1",
  "bake": "A1",
  "read": "A1",
  "write": "A1",
  "draw": "A1",
  "paint": "A1",
  "listen": "A1",
  "hear": "A1",
  "speak": "A1",
  "talk": "A1",
  "see": "A1",
  "look": "A1",
  "buy": "A1",
  "pay": "A1",
  "help": "A1",
  "learn": "A1",
  "teach": "A1",
  "work": "A1",
  "play": "A1",
  "love": "A1",
  "like": "A1",
  "smile": "A1",
  "laugh": "A1",
  "live": "A1",
  "start": "A1",
  "finish": "A1",
  "stop": "A1",
  "meet": "A1",
  "call": "A1",
  "camping": "A2",
  "apartment": "A2",
  "museum": "A2",
  "party": "A2",
  "driving": "A2",
  "license": "A2",
  "interview": "A2",
  "company": "A2",
  "resume": "A2",
  "career": "A2",
  "shelter": "A2",
  "puppy": "A2",
  "rescue": "A2",
  "adopt": "A2",
  "collar": "A2",
  "journey": "A2",
  "passenger": "A2",
  "express": "A2",
  "scenic": "A2",
  "station": "A2",
  "terminal": "A2",
  "platform": "A2",
  "volunteer": "A2",
  "community": "A2",
  "compost": "A2",
  "harvest": "A2",
  "irrigation": "A2",
  "restore": "A2",
  "vintage": "A2",
  "frame": "A2",
  "wrench": "A2",
  "saddle": "A2",
  "brunch": "A2",
  "spread": "A2",
  "ceramic": "A2",
  "smoothie": "A2",
  "exhibition": "A2",
  "gallery": "A2",
  "canvas": "A2",
  "sculpture": "A2",
  "atrium": "A2",
  "airport": "A2",
  "boarding": "A2",
  "kiosk": "A2",
  "luggage": "A2",
  "departure": "A2",
  "conveyor": "A2",
  "sustainable": "B1",
  "eco": "A2",
  "photovoltaic": "A2",
  "insulate": "A2",
  "refillable": "A2",
  "analog": "A2",
  "aperture": "A2",
  "shutter": "A2",
  "exposure": "A2",
  "cartridge": "A2",
  "wellness": "A2",
  "routine": "A2",
  "rehydrate": "A2",
  "spinal": "A2",
  "metabolism": "A2",
  "exchange": "A2",
  "meetup": "A2",
  "participant": "A2",
  "colloquial": "A2",
  "fortress": "A2",
  "ruins": "A2",
  "battlement": "A2",
  "courtyard": "A2",
  "armory": "A2",
  "fair": "A2",
  "block": "A2",
  "lantern": "A2",
  "craft": "A2",
  "trio": "A2",
  "blizzard": "A2",
  "snowstorm": "A2",
  "hearth": "A2",
  "snowshoe": "A2",
  "culinary": "A2",
  "masterclass": "A2",
  "artichoke": "A2",
  "polyphenol": "A2",
  "pergola": "A2",
  "ferry": "A2",
  "vessel": "A2",
  "seagull": "A2",
  "monastery": "A2",
  "mansion": "A2",
  "flea": "A2",
  "treasure": "A2",
  "postcard": "A2",
  "typewriter": "A2",
  "bargain": "A2",
  "scuba": "A2",
  "regulator": "A2",
  "buoyancy": "A2",
  "wetsuit": "A2",
  "marine": "A2",
  "turtle": "A2",
  "remote": "A2",
  "flexibility": "A2",
  "freelance": "A2",
  "terrace": "A2",
  "ergonomic": "A2",
  "herbary": "A2",
  "terracotta": "A2",
  "perennial": "A2",
  "rosemary": "A2",
  "backpacking": "A2",
  "budget": "B1",
  "dormitory": "A2",
  "adventurer": "A2",
  "festival": "A2",
  "indie": "A2",
  "timber": "A2",
  "euphoria": "A2",
  "acoustic": "A2",
  "guitar": "A2",
  "fret": "A2",
  "callus": "A2",
  "arpeggio": "A2",
  "sanctuary": "A2",
  "productivity": "A2",
  "overhaul": "A2",
  "dimmable": "A2",
  "invitation": "A2",
  "impression": "A2",
  "accomplishment": "A2",
  "renewable": "B1",
  "habit": "B1",
  "tourism": "B1",
  "speech": "B1",
  "savings": "B1",
  "overtourism": "B1",
  "heritage": "B1",
  "wildlife": "B1",
  "glossophobia": "B1",
  "audience": "B1",
  "investing": "B1",
  "debt": "B1",
  "inflation": "B1",
  "compound": "B1",
  "emergency": "B1",
  "strategy": "B1",
  "negotiate": "B1",
  "environment": "B1",
  "pollutant": "B1",
  "ecosystem": "B1",
  "emissions": "B1",
  "alternative": "B1",
  "consumption": "B1",
  "conservation": "B1",
  "persuade": "B1",
  "confidence": "B1",
  "articulate": "B1",
  "eloquent": "B1",
  "fatigue": "B2",
  "exhaustion": "B2",
  "logistics": "B2",
  "resilience": "B2",
  "ethics": "B2",
  "plasticity": "B2",
  "dementia": "B2",
  "neuroscience": "B2",
  "synaptic": "B2",
  "multilingual": "B2",
  "longevity": "B2",
  "epidemiological": "B2",
  "dilemma": "B2",
  "algorithm": "B2",
  "prejudice": "B2",
  "automation": "B2",
  "semiconductor": "B2",
  "nearshoring": "B2",
  "globalization": "B2",
  "vulnerability": "B2"
};

const LEITNER_INTERVALS = {
  1: 1 * 24 * 60 * 60 * 1000,
  2: 3 * 24 * 60 * 60 * 1000,
  3: 7 * 24 * 60 * 60 * 1000,
  4: 14 * 24 * 60 * 60 * 1000,
  5: 30 * 24 * 60 * 60 * 1000
};

const levels = ['A1', 'A2', 'B1', 'B2'];

// defaultTexts imported from ./defaultTextsData

const getTextBgImage = (text: any): string => {
  if (!text) return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';
  if (text.bgImage) return text.bgImage;

  const idMap: Record<number, string> = {
    1: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80',
    2: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    3: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    4: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
    5: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    6: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
    7: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    8: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80',
    9: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
    10: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    11: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    12: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    13: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    14: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    15: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    16: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    17: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
    18: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    19: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    20: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80'
  };

  if (typeof text.id === 'number' && idMap[text.id]) {
    return idMap[text.id];
  }

  const t = (text.title || '').toLowerCase();
  if (t.includes('farm') || t.includes('animal') || t.includes('nature') || t.includes('garden')) {
    return 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80';
  }
  if (t.includes('school') || t.includes('student') || t.includes('book') || t.includes('learn') || t.includes('class')) {
    return 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80';
  }
  if (t.includes('travel') || t.includes('trip') || t.includes('holiday') || t.includes('camp') || t.includes('forest')) {
    return 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80';
  }
  if (t.includes('tech') || t.includes('ai') || t.includes('future') || t.includes('science') || t.includes('robot')) {
    return 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80';
  }
  if (t.includes('city') || t.includes('house') || t.includes('home') || t.includes('apartment') || t.includes('room')) {
    return 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80';
  }

  if (text.level === 'A1') return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';
  if (text.level === 'A2') return 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80';
  if (text.level === 'B1') return 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80';
  return 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';
};

export { 
  idbGet, 
  idbSet, 
  dictionary, 
  wordLevelMap, 
  LEITNER_INTERVALS, 
  levels, 
  defaultTexts, 
  phrasalVerbs, 
  findPhrasalVerbsInText, 
  logStudyActivity, 
  getTodayDateKey,
  getTextBgImage
};

export { getExampleSentenceForWord } from './utils/puzzleSentenceService';
