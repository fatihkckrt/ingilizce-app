import { expandedDictionary } from './generated_dictionary';
import type { PhraseInfo, ReadingText, Sentence, QuizQuestion, VocabWord, StudyStats, CEFRLevel, PhraseCategory } from './types';

// INDEXEDDB DEPOLAMA MOTORU
const DB_NAME = 'EnglishLearnAppDB';
const DB_VERSION = 1;
const STORE_NAME = 'app_store';

const initDB = () => {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) { resolve(null); return; }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
};

const idbGet = async (key) => {
  const db = await initDB();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    } catch { resolve(null); }
  });
};

const idbSet = async (key, val) => {
  const db = await initDB();
  if (!db) return;
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(val, key);
  } catch(e) {}
};

const getTodayDateKey = () => new Date().toISOString().slice(0, 10);

const logStudyActivity = async (type, details = {}) => {
  try {
    const today = getTodayDateKey();
    const stats = (await idbGet('study_stats')) || {
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

interface PhraseInfo {
  tr: string;
  level: string;
  type: string;
  ex: string;
  variants?: string[];
  canonical?: string;
  isVariant?: boolean;
}

const rawPhrasalVerbs: Record<string, PhraseInfo> = {
  // === A1 ===
  "wake up": { tr: "uyanmak", level: "A1", type: "phrasal", ex: "I wake up at 7 AM every day.", variants: ["wakes up", "waking up", "woke up", "woken up"] },
  "get up": { tr: "yataktan kalkmak", level: "A1", type: "phrasal", ex: "She gets up early on weekdays.", variants: ["gets up", "getting up", "got up"] },
  "grow up": { tr: "büyümek, yetişmek", level: "A1", type: "phrasal", ex: "I grew up in a small town.", variants: ["grows up", "growing up", "grew up", "grown up"] },
  "have fun": { tr: "eğlenmek", level: "A1", type: "collocation", ex: "Have fun tonight!", variants: ["has fun", "having fun", "had fun"] },
  "go shopping": { tr: "alışverişe gitmek", level: "A1", type: "collocation", ex: "We went shopping yesterday.", variants: ["goes shopping", "going shopping", "went shopping", "gone shopping"] },

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
  "morning": "A1", "breakfast": "A1", "friend": "A1", "football": "A1", "farm": "A1", "school": "A1", "shopping": "A1", "summer": "A1", "holiday": "A1", "blue": "A1",
  "camping": "A2", "apartment": "A2", "museum": "A2", "party": "A2", "driving": "A2", "license": "A2",
  "renewable": "B1", "habit": "B1", "tourism": "B1", "speech": "B1", "budget": "B1", "savings": "B1",
  "fatigue": "B2", "exhaustion": "B2", "logistics": "B2", "resilience": "B2", "ethics": "B2", "plasticity": "B2", "dementia": "B2"
};

const LEITNER_INTERVALS = {
  1: 1 * 24 * 60 * 60 * 1000,
  2: 3 * 24 * 60 * 60 * 1000,
  3: 7 * 24 * 60 * 60 * 1000,
  4: 14 * 24 * 60 * 60 * 1000,
  5: 30 * 24 * 60 * 60 * 1000
};

const levels = ['A1', 'A2', 'B1', 'B2'];

const defaultTexts = [
{ id: 1, level: 'A1', title: 'A Day on the Farm', bgImage: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"My grandfather has a small farm outside the city.", tr:"Büyükbabamın şehir dışında küçük bir çiftliği var."},
{id:2, eng:"I visit the farm every summer holiday.", tr:"Her yaz tatilinde çiftliği ziyaret ederim."},
{id:3, eng:"We wake up early in the morning.", tr:"Sabahları erken uyanırız."},
{id:4, eng:"The air is very fresh and clean.", tr:"Hava çok taze ve temizdir."},
{id:5, eng:"First, we feed the hungry chickens.", tr:"İlk önce aç tavukları besleriz."},
{id:6, eng:"The chickens give us fresh eggs every day.", tr:"Tavuklar bize her gün taze yumurta verir."},
{id:7, eng:"I collect the eggs in a wooden basket.", tr:"Yumurtaları ahşap bir sepette toplarım."},
{id:8, eng:"Next, we visit the cows in the green field.", tr:"Sonra yeşil tarladaki inekleri ziyaret ederiz."},
{id:9, eng:"The cows eat grass and make white milk.", tr:"İnekler çimen yer ve beyaz süt yapar."},
{id:10, eng:"My grandfather milks the cows before breakfast.", tr:"Büyükbabam kahvaltıdan önce inekleri sağar."},
{id:11, eng:"There is also a friendly brown dog named Max.", tr:"Max adında arkadaş canlısı kahverengi bir köpek de var."},
{id:12, eng:"Max loves running with me in the garden.", tr:"Max bahçede benimle koşmayı çok sever."},
{id:13, eng:"At noon, we eat lunch under a large oak tree.", tr:"Öğlen büyük bir meşe ağacının altında öğle yemeği yeriz."},
{id:14, eng:"We eat bread, goat cheese, and red tomatoes.", tr:"Ekmek, keçi peyniri ve kırmızı domates yeriz."},
{id:15, eng:"In the afternoon, we water the young vegetables.", tr:"Öğleden sonra genç sebzeleri sularız."},
{id:16, eng:"Farm life is hard, but it is very peaceful.", tr:"Çiftlik hayatı zordur ama çok huzurludur."},
{id:17, eng:"The birds sing sweet songs until sunset.", tr:"Kuşlar gün batımına kadar tatlı şarkılar söyler."},
{id:18, eng:"At night, we sit near the small wooden house.", tr:"Geceleri küçük ahşap evin yanında otururuz."},
{id:19, eng:"We drink warm tea and watch the clear sky.", tr:"Sıcak çay içer ve berrak gökyüzünü izleriz."},
{id:20, eng:"I love spending my time on this beautiful farm.", tr:"Zamanımı bu güzel çiftlikte geçirmeyi çok seviyorum."}
], questions: [
{q:"What does the author collect in a basket?", options:["Apples", "Fresh eggs", "Flowers"], answer:1},
{q:"What is the dog's name?", options:["Max", "Tom", "Leo"], answer:0},
{q:"Where do they eat lunch?", options:["In the kitchen", "Under an oak tree", "In the barn"], answer:1}
]},
{ id: 2, level: 'A1', title: 'My School Day', bgImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"I am a student at a primary school.", tr:"Ben bir ilkokulda öğrenciyim."},
{id:2, eng:"My school is close to my home.", tr:"Okulum evime yakındır."},
{id:3, eng:"I walk to school every morning with my friends.", tr:"Her sabah arkadaşlarımla okula yürürüm."},
{id:4, eng:"Lessons start at eight o'clock sharp.", tr:"Dersler tam saat sekizde başlar."},
{id:5, eng:"Our classroom is large and full of light.", tr:"Sınıfımız geniş ve ışık doludur."},
{id:6, eng:"There are twenty students in my class.", tr:"Sınıfımda yirmi öğrenci var."},
{id:7, eng:"We have blue desks and comfortable chairs.", tr:"Mavi sıralarımız ve rahat sandalyelerimiz var."},
{id:8, eng:"The teacher writes English words on the board.", tr:"Öğretmen tahtaya İngilizce kelimeler yazar."},
{id:9, eng:"English is my favorite subject this term.", tr:"İngilizce bu dönem en sevdiğim derstir."},
{id:10, eng:"I like learning new vocabulary and reading short stories.", tr:"Yeni kelimeler öğrenmeyi ve kısa hikayeler okumayı severim."},
{id:11, eng:"Before noon, we have a forty-minute math class.", tr:"Öğleden önce kırk dakikalık bir matematik dersimiz var."},
{id:12, eng:"Math is difficult, but our teacher is very patient.", tr:"Matematik zordur ama öğretmenimiz çok sabırlıdır."},
{id:13, eng:"At twelve o'clock, the lunch bell rings loudly.", tr:"Saat on ikide öğle yemeği zili yüksek sesle çalar."},
{id:14, eng:"I eat an apple and a cheese sandwich.", tr:"Bir elma ve peynirli bir sandviç yerim."},
{id:15, eng:"After lunch, we play football in the garden.", tr:"Öğle yemeğinden sonra bahçede futbol oynarız."},
{id:16, eng:"We laugh and run together until the bell rings.", tr:"Zil çalana kadar birlikte güler ve koşarız."},
{id:17, eng:"In the afternoon, we draw pictures in art class.", tr:"Öğleden sonra resim dersinde resimler çizeriz."},
{id:18, eng:"School finishes at three o'clock in the afternoon.", tr:"Okul öğleden sonra saat üçte biter."},
{id:19, eng:"I say goodbye to my teacher and classmates.", tr:"Öğretmenime ve sınıf arkadaşlarıma veda ederim."},
{id:20, eng:"Then I walk back home happily.", tr:"Sonra mutlu bir şekilde eve geri yürürüm."}
], questions: [
{q:"What time do lessons start?", options:["At seven", "At eight", "At nine"], answer:1},
{q:"What is the author's favorite subject?", options:["English", "Math", "History"], answer:0},
{q:"What do they play after lunch?", options:["Tennis", "Football", "Basketball"], answer:1}
]},
{ id: 3, level: 'A1', title: 'Shopping at the Supermarket', bgImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Every Sunday morning, my mother and I go shopping.", tr:"Her pazar sabahı annem ve ben alışverişe gideriz."},
{id:2, eng:"We visit a large supermarket in our town.", tr:"Kasabamızdaki büyük bir süpermarketi ziyaret ederiz."},
{id:3, eng:"First, my mother writes a clear shopping list.", tr:"İlk önce annem net bir alışveriş listesi yazar."},
{id:4, eng:"The list helps us buy only necessary food.", tr:"Liste sadece gerekli yiyecekleri almamıza yardımcı olur."},
{id:5, eng:"I take a metal shopping cart at the entrance.", tr:"Girişte metal bir alışveriş arabası alırım."},
{id:6, eng:"We walk to the fruit and vegetable section first.", tr:"İlk olarak meyve ve sebze reyonuna yürürüz."},
{id:7, eng:"We choose yellow bananas, fresh oranges, and red apples.", tr:"Sarı muzlar, taze portakallar ve kırmızı elmalar seçeriz."},
{id:8, eng:"The vegetables look very fresh today.", tr:"Sebzeler bugün çok taze görünüyor."},
{id:9, eng:"We put green cucumbers and big tomatoes into the cart.", tr:"Arabaya yeşil salatalıklar ve büyük domatesler koyarız."},
{id:10, eng:"Next, we visit the bakery section near the corner.", tr:"Sırada köşeye yakın fırın reyonunu ziyaret ederiz."},
{id:11, eng:"The smell of warm bread is wonderful.", tr:"Sıcak ekmeğin kokusu harikadır."},
{id:12, eng:"We take two loaves of bread and some cookies.", tr:"İki somun ekmek ve biraz kurabiye alırız."},
{id:13, eng:"Then we find milk, butter, and cheese in the dairy aisle.", tr:"Sonra süt ürünleri reyonunda süt, tereyağı ve peynir buluruz."},
{id:14, eng:"I check the dates on the milk bottles carefully.", tr:"Süt şişelerinin üzerindeki tarihleri dikkatlice kontrol ederim."},
{id:15, eng:"My mother allows me to choose one dark chocolate.", tr:"Annem bir adet bitter çikolata seçmeme izin verir."},
{id:16, eng:"We finally walk towards the cash register.", tr:"Sonunda kasaya doğru yürürüz."},
{id:17, eng:"The cashier scans our items with a smile.", tr:"Kasiyer ürünlerimizi bir gülümsemeyle tarar."},
{id:18, eng:"My mother pays with her credit card.", tr:"Annem kredi kartıyla öder."},
{id:19, eng:"We pack our groceries into reusable cloth bags.", tr:"Yiyeceklerimizi yeniden kullanılabilir bez çantalara koyarız."},
{id:20, eng:"Then we carry the heavy bags home together.", tr:"Sonra ağır çantaları eve birlikte taşırız."}
], questions: [
{q:"What day do they go shopping?", options:["Friday", "Saturday", "Sunday"], answer:2},
{q:"What sweet treat does the author choose?", options:["Ice cream", "Dark chocolate", "Cake"], answer:1},
{q:"How does the mother pay?", options:["With cash", "With credit card", "With coins"], answer:1}
]},
{ id: 4, level: 'A1', title: 'A Visit to the Zoo', bgImage: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Last Saturday, my family went to the city zoo.", tr:"Geçen cumartesi ailem şehir hayvanat bahçesine gitti."},
{id:2, eng:"The weather was warm, dry, and sunny.", tr:"Hava ılık, kuru ve güneşliydi."},
{id:3, eng:"We arrived at the zoo gates at ten o'clock.", tr:"Hayvanat bahçesi kapısına saat onda vardık."},
{id:4, eng:"My father bought tickets for all of us.", tr:"Babam hepimiz için bilet aldı."},
{id:5, eng:"First, we walked to see the colorful birds.", tr:"İlk önce renkli kuşları görmeye yürüdük."},
{id:6, eng:"The parrots had green, red, and blue feathers.", tr:"Papağanların yeşil, kırmızı ve mavi tüyleri vardı."},
{id:7, eng:"One clever parrot repeated simple words.", tr:"Akıllı bir papağan basit kelimeleri tekrarladı."},
{id:8, eng:"Next, we watched the tall giraffes eating green leaves.", tr:"Sonra yeşil yaprakları yiyen uzun boylu zürafaları izledik."},
{id:9, eng:"Their necks were extremely long and graceful.", tr:"Boyunları son derece uzun ve zarifti."},
{id:10, eng:"Then we walked to the monkey area.", tr:"Sonra maymun alanına yürüdük."},
{id:11, eng:"The little monkeys jumped between high ropes.", tr:"Küçük maymunlar yüksek ipler arasında zıpladı."},
{id:12, eng:"They were very funny and energetic.", tr:"Çok komik ve enerjiktiler."},
{id:13, eng:"After that, we visited the two African elephants.", tr:"Ondan sonra iki Afrika filini ziyaret ettik."},
{id:14, eng:"A huge elephant drank water with its long trunk.", tr:"Devasa bir fil uzun hortumuyla su içti."},
{id:15, eng:"We sat on a wooden bench and rested.", tr:"Ahşap bir bankta oturduk ve dinlendik."},
{id:16, eng:"I drank cold lemonade and ate chocolate ice cream.", tr:"Soğuk limonata içtim ve çikolatalı dondurma yedim."},
{id:17, eng:"In the afternoon, we saw the sleeping lions.", tr:"Öğleden sonra uyuyan aslanları gördük."},
{id:18, eng:"A big lion slept quietly under a shady tree.", tr:"Büyük bir aslan gölgeli bir ağacın altında sessizce uyudu."},
{id:19, eng:"We took wonderful family photos before leaving.", tr:"Ayrılmadan önce harika aile fotoğrafları çektik."},
{id:20, eng:"We returned home tired but very happy.", tr:"Eve yorgun ama çok mutlu döndük."}
], questions: [
{q:"What time did they arrive at the zoo?", options:["At eight", "At ten", "At noon"], answer:1},
{q:"What did the elephant drink water with?", options:["Its long trunk", "A bucket", "A bottle"], answer:0},
{q:"What was the big lion doing?", options:["Roaring", "Sleeping under a tree", "Eating"], answer:1}
]},
{ id: 5, level: 'A1', title: 'My Small Hometown', bgImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"I live in a peaceful town near high mountains.", tr:"Yüksek dağların yakınında huzurlu bir kasabada yaşıyorum."},
{id:2, eng:"My hometown is quiet, clean, and green.", tr:"Memleketim sessiz, temiz ve yeşildir."},
{id:3, eng:"Only four thousand people live here.", tr:"Burada sadece dört bin insan yaşar."},
{id:4, eng:"Most neighbors know each other well.", tr:"Komşuların çoğu birbirini iyi tanır."},
{id:5, eng:"The narrow streets have old stone houses.", tr:"Dar sokaklarda eski taş evler vardır."},
{id:6, eng:"There is a traditional bakery in the main square.", tr:"Ana meydanda geleneksel bir fırın var."},
{id:7, eng:"The friendly baker bakes fresh bread every morning.", tr:"Dost canlısı fırıncı her sabah taze ekmek pişirir."},
{id:8, eng:"People say good morning with warm smiles.", tr:"İnsanlar sıcak gülümsemelerle günaydın derler."},
{id:9, eng:"Children ride bicycles safely around the park.", tr:"Çocuklar parkın etrafında güvenle bisiklet sürerler."},
{id:10, eng:"There is no heavy traffic or loud city noise.", tr:"Yoğun trafik veya yüksek şehir gürültüsü yoktur."},
{id:11, eng:"A clean river flows right behind our garden.", tr:"Bahçemizin hemen arkasından temiz bir nehir akar."},
{id:12, eng:"My brother and I catch small fish on Saturdays.", tr:"Erkek kardeşim ve ben cumartesi günleri küçük balıklar tutarız."},
{id:13, eng:"The river water is cold and very clear.", tr:"Nehir suyu soğuk ve çok berraktır."},
{id:14, eng:"At night, thousands of bright stars shine above us.", tr:"Geceleri üzerimizde binlerce parlak yıldız parlar."},
{id:15, eng:"The evening air smells like pine and wood smoke.", tr:"Akşam havası çam ve odun dumanı gibi kokar."},
{id:16, eng:"Life moves slowly and peacefully in this place.", tr:"Bu yerde hayat yavaş ve huzurlu akar."},
{id:17, eng:"Sometimes I travel to big cities for shopping.", tr:"Bazen alışveriş için büyük şehirlere seyahat ederim."},
{id:18, eng:"However, I always miss my quiet town.", tr:"Ancak her zaman sessiz kasabamı özlerim."},
{id:19, eng:"It is the best place to relax and feel safe.", tr:"Dinlenmek ve güvende hissetmek için en iyi yerdir."},
{id:20, eng:"I am very proud of my little hometown.", tr:"Küçük memleketimle çok gurur duyuyorum."}
], questions: [
{q:"Where is the peaceful town located?", options:["Near high mountains", "In the desert", "By the ocean"], answer:0},
{q:"What flows behind the author's garden?", options:["A highway", "A clean river", "A railway"], answer:1},
{q:"What shines in the sky at night?", options:["Thousands of bright stars", "Towers", "Dark clouds"], answer:0}
]},
{ id: 6, level: 'A2', title: 'A Weekend Camping Trip', bgImage: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Last Saturday, my friends and I went camping in the mountains.", tr:"Geçen cumartesi arkadaşlarım ve ben dağlarda kamp yapmaya gittik."},
{id:2, eng:"We packed warm clothes, flashlights, and sleeping bags.", tr:"Sıcak giysiler, el fenerleri ve uyku tulumları hazırladık."},
{id:3, eng:"The forecast predicted sunny weather, so we were excited.", tr:"Hava durumu güneşli bir hava öngördü, bu yüzden heyecanlıydık."},
{id:4, eng:"We drove for two hours to reach the campsite.", tr:"Kamp alanına ulaşmak için iki saat araba sürdük."},
{id:5, eng:"First, we pitched our tents on dry grass.", tr:"İlk olarak çadırlarımızı kuru çimlerin üzerine kurduk."},
{id:6, eng:"Setting up the tents took thirty minutes.", tr:"Çadırları kurmak otuz dakika sürdü."},
{id:7, eng:"After resting, we hiked along a narrow forest trail.", tr:"Dinlendikten sonra dar bir orman patikası boyunca yürüdük."},
{id:8, eng:"The trail led us to a small, hidden waterfall.", tr:"Patika bizi küçük, gizli bir şelaleye götürdü."},
{id:9, eng:"The water was freezing, but we washed our faces.", tr:"Su buz gibiydi ama yüzlerimizi yıkadık."},
{id:10, eng:"We took many pictures of the rocks and trees.", tr:"Kayaların ve ağaçların birçok fotoğrafını çektik."},
{id:11, eng:"When evening arrived, we returned to our tents.", tr:"Akşam geldiğinde çadırlarımıza geri döndük."},
{id:12, eng:"Gathering dry firewood was our next task.", tr:"Kuru yakacak odun toplamak sıradaki görevimizdi."},
{id:13, eng:"My friend Alex built a warm campfire safely.", tr:"Arkadaşım Alex güvenli bir şekilde sıcak bir kamp ateşi yaktı."},
{id:14, eng:"We grilled sausages and baked potatoes over the flames.", tr:"Alevlerin üzerinde sosis ızgara yaptık ve patates pişirdik."},
{id:15, eng:"Food always tastes better when you eat outdoors.", tr:"Dışarıda yediğinizde yemeklerin tadı her zaman daha güzeldir."},
{id:16, eng:"Later, we sat around the fire and shared stories.", tr:"Daha sonra ateşin etrafında oturduk ve hikayeler paylaştık."},
{id:17, eng:"The night sky was filled with bright stars.", tr:"Gece gökyüzü parlak yıldızlarla doluydu."},
{id:18, eng:"I slept well in my thick sleeping bag.", tr:"Kalın uyku tulumumda iyi uyudum."},
{id:19, eng:"In the morning, we drank hot black coffee together.", tr:"Sabah birlikte sıcak sade kahve içtik."},
{id:20, eng:"It was an unforgettable weekend in nature.", tr:"Doğada unutulmaz bir hafta sonuydu."}
], questions: [
{q:"Where did the friends go camping?", options:["At the beach", "In the mountains", "In the desert"], answer:1},
{q:"What did they cook over the fire?", options:["Fish", "Sausages and potatoes", "Burgers"], answer:1},
{q:"What filled the night sky?", options:["Rain clouds", "Bright stars", "Heavy smoke"], answer:1}
]},
{ id: 7, level: 'A2', title: 'Moving to a New Apartment', bgImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Last month, I moved into a new apartment.", tr:"Geçen ay yeni bir daireye taşındım."},
{id:2, eng:"My old flat was too far from my workplace.", tr:"Eski dairem iş yerimden çok uzaktı."},
{id:3, eng:"I spent two weeks searching for the right place online.", tr:"İnternette doğru yeri aramak için iki hafta harcadım."},
{id:4, eng:"Finally, I found a bright flat on the third floor.", tr:"Sonunda üçüncü katta aydınlık bir daire buldum."},
{id:5, eng:"The neighborhood is very quiet with small grocery stores.", tr:"Mahalle küçük bakkallarla çok sessizdir."},
{id:6, eng:"Packing my belongings was the hardest part.", tr:"Eşyalarımı paketlemek en zor kısımdı."},
{id:7, eng:"I bought twenty cardboard boxes and heavy tape.", tr:"Yirmi karton kutu ve sağlam koli bandı aldım."},
{id:8, eng:"I wrapped my glass dishes carefully in old newspapers.", tr:"Cam tabaklarımı eski gazetelere dikkatlice sardım."},
{id:9, eng:"My brother helped me carry the heavy furniture downstairs.", tr:"Erkek kardeşim ağır mobilyaları aşağı taşımama yardım etti."},
{id:10, eng:"We rented a small white truck for the day.", tr:"O gün için küçük beyaz bir kamyonet kiraladık."},
{id:11, eng:"The blue sofa was difficult to carry down the stairs.", tr:"Mavi kanepeyi merdivenlerden aşağı taşımak zordu."},
{id:12, eng:"Fortunately, nothing was broken during the move.", tr:"Neyse ki taşınma sırasında hiçbir şey kırılmadı."},
{id:13, eng:"We arrived at the new building in the afternoon.", tr:"Öğleden sonra yeni binaya vardık."},
{id:14, eng:"My new living room gets plenty of direct sunlight.", tr:"Yeni oturma odam bol miktarda doğrudan güneş ışığı alıyor."},
{id:15, eng:"I ordered two large pizzas to thank my brother.", tr:"Kardeşime teşekkür etmek için iki büyük pizza sipariş ettim."},
{id:16, eng:"The next morning, my neighbor knocked on my door.", tr:"Ertesi sabah komşum kapımı çaldı."},
{id:17, eng:"She brought fresh cookies and welcomed me warmly.", tr:"Taze kurabiyeler getirdi ve beni sıcak bir şekilde karşıladı."},
{id:18, eng:"I spent the rest of the week unpacking boxes.", tr:"Haftanın geri kalanını kutuları açarak geçirdim."},
{id:19, eng:"Now my apartment feels cozy and truly comfortable.", tr:"Şimdi dairem samimi ve gerçekten rahat hissettiriyor."},
{id:20, eng:"Living closer to work saves me valuable time.", tr:"İşe daha yakın yaşamak bana değerli zaman kazandırıyor."}
], questions: [
{q:"Why did the author move?", options:["To live closer to work", "To live near parents", "To buy a car"], answer:0},
{q:"What floor is the new flat on?", options:["First floor", "Second floor", "Third floor"], answer:2},
{q:"What did the neighbor bring?", options:["Fresh cookies", "Hot coffee", "Flowers"], answer:0}
]},
{ id: 8, level: 'A2', title: 'Visiting a Science Museum', bgImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Yesterday, our school visited the capital science museum.", tr:"Dün okulumuz başkent bilim müzesini ziyaret etti."},
{id:2, eng:"We traveled together on a large yellow bus.", tr:"Büyük sarı bir otobüsle birlikte seyahat ettik."},
{id:3, eng:"The trip took one hour from our school.", tr:"Yolculuk okulumuzdan bir saat sürdü."},
{id:4, eng:"When we entered, a friendly robot greeted all visitors.", tr:"İçeri girdiğimizde dost canlısı bir robot tüm ziyaretçileri selamladı."},
{id:5, eng:"The robot answered simple questions in three languages.", tr:"Robot üç dilde basit soruları yanıtladı."},
{id:6, eng:"First, our guide took us to the dinosaur hall.", tr:"İlk olarak rehberimiz bizi dinozor salonuna götürdü."},
{id:7, eng:"We saw gigantic skeleton fossils of prehistoric creatures.", tr:"Tarih öncesi yaratıkların devasa iskelet fosillerini gördük."},
{id:8, eng:"They looked terrifying yet fascinating.", tr:"Korkutucu ama büyüleyici görünüyorlardı."},
{id:9, eng:"Next, we entered the dark space exploration room.", tr:"Sonra karanlık uzay keşif odasına girdik."},
{id:10, eng:"There was a real astronaut suit on display.", tr:"Sergilenen gerçek bir astronot giysisi vardı."},
{id:11, eng:"We learned how astronauts eat and sleep in zero gravity.", tr:"Astronotların sıfır yerçekiminde nasıl yemek yiyip uyuduklarını öğrendik."},
{id:12, eng:"I even touched a real meteorite from outer space.", tr:"Uzaydan gelen gerçek bir göktaşına bile dokundum."},
{id:13, eng:"It felt heavy, metallic, and surprisingly rough.", tr:"Ağır, metalik ve şaşırtıcı derecede pürüzlü hissettirdi."},
{id:14, eng:"Then we visited the interactive physics laboratory.", tr:"Sonra etkileşimli fizik laboratuvarını ziyaret ettik."},
{id:15, eng:"We pressed buttons to see electricity move through metals.", tr:"Elektriğin metaller içinden geçişini görmek için düğmelere bastık."},
{id:16, eng:"At noon, we ate lunch in the museum café.", tr:"Öğlen müze kafesinde öğle yemeği yedik."},
{id:17, eng:"After lunch, we watched a 3D movie about oceans.", tr:"Öğle yemeğinden sonra okyanuslar hakkında bir 3D film izledik."},
{id:18, eng:"We felt like we were swimming with giant whales.", tr:"Dev balinalarla yüzüyormuşuz gibi hissettik."},
{id:19, eng:"Before leaving, I bought a small toy robot.", tr:"Ayrılmadan önce küçük bir oyuncak robot aldım."},
{id:20, eng:"Science proved to be much more exciting than expected.", tr:"Bilim beklenenden çok daha heyecan verici çıktı."}
], questions: [
{q:"What greeted visitors at the entrance?", options:["A dinosaur", "A friendly robot", "An astronaut"], answer:1},
{q:"What did the author touch in the space room?", options:["A meteorite", "A rocket engine", "The Moon"], answer:0},
{q:"What was the 3D movie about?", options:["Jungle animals", "Oceans and whales", "Volcanoes"], answer:1}
]},
{ id: 9, level: 'A2', title: 'Planning a Birthday Surprise', bgImage: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Next Friday is my best friend Lisa's birthday.", tr:"Gelecek cuma en iyi arkadaşım Lisa'nın doğum günü."},
{id:2, eng:"We wanted to organize a secret surprise party.", tr:"Gizli bir sürpriz parti organize etmek istedik."},
{id:3, eng:"We created a private chat group to plan everything.", tr:"Her şeyi planlamak için özel bir sohbet grubu kurduk."},
{id:4, eng:"Everyone received a specific job for the party.", tr:"Parti için herkes belirli bir görev aldı."},
{id:5, eng:"My responsibility was baking a chocolate cake.", tr:"Benim sorumluluğum çikolatalı bir pasta pişirmekti."},
{id:6, eng:"I bought flour, organic eggs, dark cocoa, and strawberries.", tr:"Un, organik yumurta, bitter kakao ve çilek aldım."},
{id:7, eng:"The cake baked for forty minutes and smelled wonderful.", tr:"Pasta kırk dakika pişti ve harika koktu."},
{id:8, eng:"Meanwhile, David bought golden balloons and colorful banners.", tr:"Bu sırada David altın sarısı balonlar ve renkli afişler aldı."},
{id:9, eng:"Emma agreed to keep Lisa busy all afternoon.", tr:"Emma bütün öğleden sonra Lisa'yı oyalamayı kabul etti."},
{id:10, eng:"They went to the cinema to watch a comedy.", tr:"Bir komedi izlemek için sinemaya gittiler."},
{id:11, eng:"At six o'clock, twelve guests arrived at my home.", tr:"Saat altıda on iki davetli evime geldi."},
{id:12, eng:"We hung banners and prepared drinks on the table.", tr:"Afişleri astık ve masaya içecekler hazırladık."},
{id:13, eng:"At seven, we turned off the living room lights.", tr:"Yedide oturma odasının ışıklarını kapattık."},
{id:14, eng:"We hid behind the sofa and waited quietly.", tr:"Kanepenin arkasına saklandık ve sessizce bekledik."},
{id:15, eng:"Lisa opened the front door and entered the room.", tr:"Lisa ön kapıyı açtı ve odaya girdi."},
{id:16, eng:"We all jumped up and shouted happy birthday.", tr:"Hepimiz ayağa fırladık ve iyi ki doğdun diye bağırdık."},
{id:17, eng:"Lisa was completely shocked and smiled with joy.", tr:"Lisa tamamen şoke oldu ve sevinçle gülümsedi."},
{id:18, eng:"She blew out the candles and made a secret wish.", tr:"Mumları üfledi ve gizli bir dilek tuttu."},
{id:19, eng:"We danced and played party games until midnight.", tr:"Gece yarısına kadar dans ettik ve parti oyunları oynadık."},
{id:20, eng:"Keeping the secret was hard, but it was worth it.", tr:"Sırrı saklamak zordu ama buna değdi."}
], questions: [
{q:"What was the author's job for the party?", options:["Buying balloons", "Baking the cake", "Cleaning"], answer:1},
{q:"How did Emma keep Lisa busy?", options:["Going to the cinema", "Shopping", "Studying"], answer:0},
{q:"Where did the friends hide?", options:["Behind the sofa", "In the kitchen", "In the garden"], answer:0}
]},
{ id: 10, level: 'A2', title: 'Learning to Drive a Car', bgImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Learning to drive was always my biggest personal goal.", tr:"Araba kullanmayı öğrenmek her zaman en büyük kişisel hedefimdi."},
{id:2, eng:"When I turned twenty, I joined a driving academy.", tr:"Yirmi yaşıma bastığımda bir sürücü kursuna katıldım."},
{id:3, eng:"First, I attended theory classes for two weeks.", tr:"İlk olarak iki hafta boyunca teorik derslere katıldım."},
{id:4, eng:"We studied traffic signs and speed limits carefully.", tr:"Trafik işaretlerini ve hız sınırlarını dikkatle çalıştık."},
{id:5, eng:"After passing the written test, practical lessons began.", tr:"Yazılı sınavı geçtikten sonra direksiyon dersleri başladı."},
{id:6, eng:"On the first day, my hands were sweating with anxiety.", tr:"İlk gün ellerim endişeden terliyordu."},
{id:7, eng:"My instructor, Mr. Davis, was very patient and encouraging.", tr:"Eğitmenim Bay Davis çok sabırlı ve cesaret vericiydi."},
{id:8, eng:"He showed me how to adjust the driver's seat.", tr:"Bana sürücü koltuğunu nasıl ayarlayacağımı gösterdi."},
{id:9, eng:"Then I checked the rear mirrors and fastened my seatbelt.", tr:"Sonra dikiz aynalarını kontrol ettim ve emniyet kemerimi bağladım."},
{id:10, eng:"Using the clutch smoothly was very hard at first.", tr:"Debriyajı sarsmadan kullanmak ilk başta çok zordu."},
{id:11, eng:"The engine stopped twice, but I tried again calmly.", tr:"Motor iki kez stop etti ama sakince tekrar denedim."},
{id:12, eng:"Soon, we moved from an empty parking lot into real traffic.", tr:"Kısa süre sonra boş bir park yerinden gerçek trafiğe geçtik."},
{id:13, eng:"Driving among trucks and buses required fast concentration.", tr:"Kamyonlar ve otobüsler arasında araç sürmek hızlı konsantrasyon gerektiriyordu."},
{id:14, eng:"Parallel parking between two vehicles was the hardest maneuver.", tr:"İki araç arasına paralel park etmek en zor manevraydı."},
{id:15, eng:"I practiced parking every afternoon until I succeeded.", tr:"Başarana kadar her öğleden sonra park etme pratiği yaptım."},
{id:16, eng:"Yesterday was the day of my official driving test.", tr:"Dün resmi direksiyon sınavımın günüydü."},
{id:17, eng:"The examiner sat quietly next to me with a clipboard.", tr:"Sınav görevlisi elinde bir not tahtasıyla yanımda sessizce oturdu."},
{id:18, eng:"I remembered all the safety rules and stayed calm.", tr:"Tüm güvenlik kurallarını hatırladım ve sakin kaldım."},
{id:19, eng:"At the end, he smiled and said I passed.", tr:"Sonunda gülümsedi ve geçtiğimi söyledi."},
{id:20, eng:"Holding my driving license gives me wonderful freedom.", tr:"Ehliyetimi tutmak bana harika bir özgürlük veriyor."}
], questions: [
{q:"How long did theory classes take?", options:["Two days", "Two weeks", "One month"], answer:1},
{q:"What was the hardest maneuver?", options:["Parallel parking", "Turning right", "Stopping"], answer:0},
{q:"How did the author feel on the first day?", options:["Bored", "Nervous and sweating", "Angry"], answer:1}
]},
{ id: 11, level: 'B1', title: 'The Rise of Renewable Energy', bgImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Energy powers modern human society.", tr:"Enerji modern insan toplumuna güç sağlar."},
{id:2, eng:"For more than a century, countries have heavily relied on coal, oil, and natural gas.", tr:"Bir asırdan fazla bir süredir ülkeler kömür, petrol ve doğal gaza yoğun bir şekilde bağımlı olmuştur."},
{id:3, eng:"However, this reliance creates serious environmental damage.", tr:"Ancak bu bağımlılık ciddi çevresel hasar yaratmaktadır."},
{id:4, eng:"Burning fossil fuels releases massive greenhouse gas emissions that trap heat and accelerate global climate change.", tr:"Fosil yakıtların yakılması, ısıyı hapseden ve küresel iklim değişikliğini hızlandıran büyük sera gazı salımlarına yol açar."},
{id:5, eng:"Clean energy is now an urgent priority.", tr:"Temiz enerji artık acil bir önceliktir."},
{id:6, eng:"Many progressive nations are investing heavily in solar, wind, and water systems to replace polluting fuels.", tr:"Birçok ilerici ülke, kirletici yakıtların yerini almak üzere güneş, rüzgar ve su sistemlerine yoğun yatırımlar yapıyor."},
{id:7, eng:"Solar power is expanding rapidly across continents.", tr:"Güneş enerjisi kıtalar genelinde hızla yayılıyor."},
{id:8, eng:"Modern solar panels convert sunlight directly into clean electrical current without generating any toxic waste.", tr:"Modern güneş panelleri, güneş ışığını herhangi bir zehirli atık üretmeden doğrudan temiz elektrik akımına dönüştürür."},
{id:9, eng:"Manufacturing costs have fallen dramatically.", tr:"Üretim maliyetleri çarpıcı bir şekilde düştü."},
{id:10, eng:"Wind power represents another promising solution for utility companies.", tr:"Rüzgar enerjisi, kamu hizmeti şirketleri için bir diğer umut verici çözümü temsil ediyor."},
{id:11, eng:"Massive wind turbines are installed in windy mountain passes and on stormy ocean shores.", tr:"Devasa rüzgar türbinleri rüzgarlı dağ geçitlerine ve fırtınalı okyanus kıyılarına kurulur."},
{id:12, eng:"Offshore wind farms capture stronger, steadier breezes.", tr:"Açık deniz rüzgar çiftlikleri daha güçlü, daha istikrarlı rüzgarları yakalar."},
{id:13, eng:"Yet, renewable power faces technical obstacles.", tr:"Yine de yenilenebilir enerji teknik engellerle karşılaşıyor."},
{id:14, eng:"Because solar panels do not produce power at night, reliable energy storage becomes essential for communities.", tr:"Güneş panelleri geceleri enerji üretmediğinden, topluluklar için güvenilir enerji depolaması zorunlu hale gelir."},
{id:15, eng:"Engineers are building giant industrial batteries.", tr:"Mühendisler devasa endüstriyel piller üretiyorlar."},
{id:16, eng:"These lithium and sodium batteries store daytime surplus electricity and release it during peak evening hours.", tr:"Bu lityum ve sodyum piller gündüz artan elektriği depolar ve yoğun akşam saatlerinde serbest bırakır."},
{id:17, eng:"The power grid also requires modern upgrades.", tr:"Elektrik şebekesi de modern güncellemelere ihtiyaç duyuyor."},
{id:18, eng:"Smart digital grids use intelligent sensors to distribute clean electricity efficiently between cities and regions.", tr:"Akıllı dijital şebekeler, temiz elektriği şehirler ve bölgeler arasında verimli bir şekilde dağıtmak için akıllı sensörler kullanır."},
{id:19, eng:"Governments provide helpful tax credits.", tr:"Hükümetler faydalı vergi indirimleri sağlıyor."},
{id:20, eng:"Electric vehicles are also becoming popular, replacing gasoline engines on busy city streets.", tr:"Elektrikli araçlar da popüler hale geliyor ve kalabalık şehir sokaklarındaki benzinli motorların yerini alıyor."},
{id:21, eng:"This transformation creates thousands of skilled jobs.", tr:"Bu dönüşüm binlerce nitelikli iş imkanı yaratıyor."},
{id:22, eng:"Although complete transition will take decades, international commitment remains stronger than ever before.", tr:"Tam bir geçiş on yıllar alacak olsa da, uluslararası kararlılık her zamankinden daha güçlü kalmaktadır."},
{id:23, eng:"Local communities are demanding cleaner air.", tr:"Yerel topluluklar daha temiz hava talep ediyor."},
{id:24, eng:"Choosing clean renewable energy guarantees that future generations inherit a healthier, more stable planet.", tr:"Temiz yenilenebilir enerjiyi seçmek, gelecek nesillerin daha sağlıklı ve daha istikrarlı bir gezegeni miras almasını garanti eder."},
{id:25, eng:"The future of global power is bright.", tr:"Küresel enerjinin geleceği aydınlıktır."}
], questions: [
{q:"What is the main problem with burning fossil fuels?", options:["High storage costs", "Greenhouse gas emissions and climate change", "Bad smell"], answer:1},
{q:"Why are batteries needed in clean energy systems?", options:["To store surplus daytime electricity", "To clean solar panels", "To stop wind"], answer:0},
{q:"Where are offshore wind turbines built?", options:["In deep caves", "On ocean shores", "Near coal mines"], answer:1}
]},
{ id: 12, level: 'B1', title: 'The Psychology of Habit Formation', bgImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Our lives are largely built on routines.", tr:"Hayatımız büyük ölçüde rutinler üzerine kuruludur."},
{id:2, eng:"Psychologists estimate that nearly half of our daily behavior is governed by automatic habits rather than conscious thought.", tr:"Psikologlar, günlük davranışlarımızın neredeyse yarısının bilinçli düşünceden ziyade otomatik alışkanlıklar tarafından yönetildiğini tahmin ediyor."},
{id:3, eng:"Habits exist to conserve cognitive energy.", tr:"Alışkanlıklar bilişsel enerjiyi korumak için vardır."},
{id:4, eng:"According to behavioral research, every single habit follows an automatic neurological loop composed of three steps.", tr:"Davranışsal araştırmalara göre, her bir alışkanlık üç adımdan oluşan otomatik bir nörolojik döngüyü takip eder."},
{id:5, eng:"The first element is the cue.", tr:"İlk unsur ipucudur."},
{id:6, eng:"A cue acts as an environmental trigger, such as a specific time of day or an emotional state like anxiety.", tr:"Bir ipucu, günün belirli bir saati veya kaygı gibi duygusal bir durum gibi çevresel bir tetikleyici görevi görür."},
{id:7, eng:"Next comes the routine itself.", tr:"Sırada rutinin kendisi gelir."},
{id:8, eng:"This is the physical, mental, or emotional behavior that you perform automatically in response to the cue.", tr:"Bu, ipucuna yanıt olarak otomatik olarak gerçekleştirdiğiniz fiziksel, zihinsel veya duygusal davranıştır."},
{id:9, eng:"Finally, there is the reward.", tr:"Son olarak ödül vardır."},
{id:10, eng:"The reward satisfies your initial craving and convinces your brain that this pattern is worth repeating.", tr:"Ödül, ilk arzunuzu tatmin eder ve beyninizi bu kalıbın tekrarlanmaya değer olduğuna ikna eder."},
{id:11, eng:"Consider afternoon coffee drinking as an example.", tr:"Örnek olarak öğleden sonra kahve içmeyi düşünün."},
{id:12, eng:"Feeling tired at two o'clock is the cue that drives you straight to the office kitchen.", tr:"Saat ikide yorgun hissetmek, sizi doğrudan ofis mutfağına götüren ipucudur."},
{id:13, eng:"The routine is brewing coffee.", tr:"Rutin kahve demlemektir."},
{id:14, eng:"The pleasant reward is the quick boost of energy and social conversation with colleagues.", tr:"Hoş ödül, hızlı enerji artışı ve iş arkadaşlarıyla yapılan sosyal sohbettir."},
{id:15, eng:"Breaking bad habits requires smart strategy.", tr:"Kötü alışkanlıkları kırmak akıllıca bir strateji gerektirir."},
{id:16, eng:"Experts suggest that you cannot eliminate a routine simply through willpower without replacing it with something better.", tr:"Uzmanlar, bir rutini yerine daha iyi bir şey koymadan sadece irade gücüyle ortadan kaldıramayacağınızı öne sürüyor."},
{id:17, eng:"Keep the same cue and reward.", tr:"Aynı ipucunu ve ödülü koruyun."},
{id:18, eng:"If stress makes you eat junk food, substitute that unhealthy snack with a brisk ten-minute walk outside.", tr:"Stres abur cubur yemenize neden oluyorsa, o sağlıksız atıştırmalığı dışarıda on dakikalık tempolu bir yürüyüşle değiştirin."},
{id:19, eng:"Starting tiny is another proven technique.", tr:"Küçük başlamak kanıtlanmış bir başka tekniktir."},
{id:20, eng:"Committing to reading just two pages of a book every night feels easy and avoids burnout.", tr:"Her gece bir kitabın sadece iki sayfasını okumayı taahhüt etmek kolay hissettirir ve tükenmişliği önler."},
{id:21, eng:"Consistency matters more than extreme intensity.", tr:"Tutarlılık aşırı yoğunluktan daha önemlidir."},
{id:22, eng:"Your physical environment should also be arranged to make good habits effortless and visible.", tr:"Fiziksel çevreniz de iyi alışkanlıkları zahmetsiz ve görünür kılacak şekilde düzenlenmelidir."},
{id:23, eng:"Keep your workout shoes in plain sight.", tr:"Antrenman ayakkabılarınızı göz önünde tutun."},
{id:24, eng:"When healthy actions turn into automated reflexes, reaching your personal goals becomes inevitable.", tr:"Sağlıklı eylemler otomatik reflekslere dönüştüğünde, kişisel hedeflerinize ulaşmak kaçınılmaz hale gelir."},
{id:25, eng:"Small daily habits create massive transformations.", tr:"Küçük günlük alışkanlıklar muazzam dönüşümler yaratır."}
], questions: [
{q:"What are the three steps of the habit loop?", options:["Start, middle, end", "Cue, routine, reward", "Plan, action, result"], answer:1},
{q:"How should you break a bad habit?", options:["Relying only on willpower", "Keeping cue/reward and replacing routine", "Sleeping more"], answer:1},
{q:"Why is starting with tiny habits effective?", options:["It avoids burnout and feels easy", "It costs less money", "It requires tools"], answer:0}
]},
{ id: 13, level: 'B1', title: 'Sustainable Tourism and Travel', bgImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Global travel has expanded tremendously.", tr:"Küresel seyahat muazzam bir şekilde genişledi."},
{id:2, eng:"Cheap flights and online booking platforms allow millions of people to visit exotic destinations every year.", tr:"Ucuz uçuşlar ve çevrimiçi rezervasyon platformları her yıl milyonlarca insanın egzotik yerleri ziyaret etmesini sağlıyor."},
{id:3, eng:"However, mass tourism brings heavy consequences.", tr:"Ancak kitle turizmi ağır sonuçlar doğurmaktadır."},
{id:4, eng:"Historic cities like Venice and Amsterdam suffer from overtourism, where visitors overwhelm local services.", tr:"Venedik ve Amsterdam gibi tarihi şehirler, ziyaretçilerin yerel hizmetleri bunalttığı aşırı turizmden muzdariptir."},
{id:5, eng:"Rents skyrocket for long-term residents.", tr:"Uzun süreli bölge sakinleri için kiralar fırlıyor."},
{id:6, eng:"In fragile nature reserves, large crowds leave mountains of plastic litter and disturb native wildlife.", tr:"Hassas doğa koruma alanlarında büyük kalabalıklar plastik çöp dağları bırakır ve yerli yaban hayatını rahatsız eder."},
{id:7, eng:"Sustainable tourism offers a responsible alternative.", tr:"Sürdürülebilir turizm sorumlu bir alternatif sunar."},
{id:8, eng:"This travel philosophy focuses on protecting cultural heritage and preserving the natural environment for the future.", tr:"Bu seyahat felsefesi, kültürel mirası korumaya ve doğal çevreyi gelecek için muhafaza etmeye odaklanır."},
{id:9, eng:"Conscious travelers can easily make a difference.", tr:"Bilinçli gezginler kolayca bir fark yaratabilir."},
{id:10, eng:"Taking high-speed passenger trains instead of short flights dramatically lowers personal carbon footprints.", tr:"Kısa uçuşlar yerine yüksek hızlı yolcu trenlerini kullanmak kişisel karbon ayak izini çarpıcı bir şekilde azaltır."},
{id:11, eng:"Trains offer scenic, stress-free journeys.", tr:"Trenler manzaralı, stressiz yolculuklar sunar."},
{id:12, eng:"Supporting locally owned accommodations and family restaurants keeps tourism income directly within the community.", tr:"Yerel işletmelere ait konaklama yerlerini ve aile restoranlarını desteklemek, turizm gelirini doğrudan toplum içinde tutar."},
{id:13, eng:"Big resort chains often take profits abroad.", tr:"Büyük tatil köyü zincirleri karlarını genellikle yurtdışına götürür."},
{id:14, eng:"Eating seasonal cuisine introduces travelers to genuine culture and supports local farmers.", tr:"Mevsimlik yemekler yemek, gezginleri özgün kültürle tanıştırır ve yerel çiftçileri destekler."},
{id:15, eng:"Respecting local social customs is equally important.", tr:"Yerel sosyal geleneklere saygı göstermek de aynı derecede önemlidir."},
{id:16, eng:"Learning basic courtesy phrases in the native language builds mutual understanding with local people.", tr:"Yerel dilde temel nezaket ifadelerini öğrenmek, yerel halkla karşılıklı anlayış geliştirir."},
{id:17, eng:"Always follow the leave-no-trace principle.", tr:"Her zaman geride iz bırakmama ilkesine uyun."},
{id:18, eng:"When hiking in mountains or coral reefs, never collect protected stones, plants, or wild shells.", tr:"Dağlarda veya mercan resiflerinde yürüyüş yaparken asla koruma altındaki taşları, bitkileri veya vahşi deniz kabuklarını toplamayın."},
{id:19, eng:"Carry a durable refillable water bottle.", tr:"Dayanıklı ve tekrar doldurulabilir bir su şişesi taşıyın."},
{id:20, eng:"Visiting secondary destinations reduces crowd pressure on famous world capitals.", tr:"İkincil destinasyonları ziyaret etmek, ünlü dünya başkentleri üzerindeki kalabalık baskısını azaltır."},
{id:21, eng:"Off-season travel provides quieter, richer experiences.", tr:"Sezon dışı seyahat daha sakin ve daha zengin deneyimler sağlar."},
{id:22, eng:"Prices are also substantially lower outside peak summer.", tr:"Fiyatlar da yoğun yaz döneminin dışında önemli ölçüde daha düşüktür."},
{id:23, eng:"True travel is about cultural connection.", tr:"Gerçek seyahat kültürel bağ kurmakla ilgilidir."},
{id:24, eng:"When we treat delicate destinations with deep respect, we preserve their beauty for upcoming generations.", tr:"Hassas destinasyonlara derin bir saygıyla yaklaştığımızda, güzelliklerini gelecek nesiller için korumuş oluruz."},
{id:25, eng:"Travel with curiosity, kindness, and mindfulness.", tr:"Merakla, nezaketle ve özenle seyahat edin."}
], questions: [
{q:"What is a negative impact of overtourism?", options:["Empty streets", "Rents skyrocket and services are overwhelmed", "No food"], answer:1},
{q:"Why should travelers support locally owned restaurants?", options:["To keep profits in local community", "They are free", "Fast food"], answer:0},
{q:"What does 'leave-no-trace' principle mean?", options:["No photos", "Leaving nature undisturbed and packing out trash", "No luggage"], answer:1}
]},
{ id: 14, level: 'B1', title: 'The Art of Public Speaking', bgImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Public speaking terrifies millions of adults.", tr:"Topluluk önünde konuşmak milyonlarca yetişkini dehşete düşürür."},
{id:2, eng:"Surveys consistently reveal that glossophobia, or fear of public speech, ranks higher than the fear of spiders.", tr:"Anketler sürekli olarak, topluluk önünde konuşma korkusu olan glossofobinin örümcek korkusundan daha üst sırada yer aldığını ortaya koyuyor."},
{id:3, eng:"Our bodies trigger an involuntary biological reaction.", tr:"Bedenlerimiz istemsiz bir biyolojik reaksiyon tetikler."},
{id:4, eng:"When stepping onto an open stage, your heart beats rapidly and adrenaline floods your bloodstream.", tr:"Açık bir sahneye adım attığınızda kalbiniz hızla çarpar ve kanınıza adrenalin dolar."},
{id:5, eng:"Fortunately, speaking is a learnable craft.", tr:"Neyse ki konuşmak öğrenilebilir bir zanaattır."},
{id:6, eng:"Thorough preparation remains the ultimate foundation for confidence in front of any live audience.", tr:"Kapsamlı hazırlık, herhangi bir canlı dinleyici kitlesi karşısında özgüvenin nihai temeli olmaya devam eder."},
{id:7, eng:"Understand your listeners before preparing slides.", tr:"Slaytları hazırlamadan önce dinleyicilerinizi anlayın."},
{id:8, eng:"Knowing what your audience needs allows you to craft a speech that directly solves their problems.", tr:"Dinleyicilerinizin neye ihtiyacı olduğunu bilmek, doğrudan onların sorunlarını çözen bir konuşma hazırlamanızı sağlar."},
{id:9, eng:"Every strong presentation follows a clear structure.", tr:"Her güçlü sunum net bir yapıyı takip eder."},
{id:10, eng:"Begin with an intriguing question, a personal story, or a surprising statistic to capture instant attention.", tr:"Anında dikkat çekmek için merak uyandırıcı bir soruyla, kişisel bir hikayeyle veya şaşırtıcı bir istatistikle başlayın."},
{id:11, eng:"Audiences remember stories far longer than spreadsheets.", tr:"Dinleyiciler hikayeleri tablolardan çok daha uzun süre hatırlar."},
{id:12, eng:"Your physical body language speaks before your voice.", tr:"Fiziksel beden diliniz sesinizden önce konuşur."},
{id:13, eng:"Stand upright with your feet shoulder-width apart to project natural calm and authority.", tr:"Doğal bir sakinlik ve otorite yansıtmak için ayaklarınız omuz genişliğinde açık şekilde dik durun."},
{id:14, eng:"Maintain steady eye contact with different individuals across the room.", tr:"Odanın dört bir yanındaki farklı bireylerle düzenli göz teması kurun."},
{id:15, eng:"Vocal control is another vital speaking asset.", tr:"Ses kontrolü bir diğer hayati konuşma avantajıdır."},
{id:16, eng:"When speakers feel nervous, they naturally rush and speak too quickly without taking proper breaths.", tr:"Konuşmacılar gergin hissettiklerinde, doğal olarak acele ederler ve düzgün nefes almadan çok hızlı konuşurlar."},
{id:17, eng:"Deliberate pauses are extremely powerful tools.", tr:"Bilinçli duraklamalar son derece güçlü araçlardır."},
{id:18, eng:"Pausing for two seconds allows your audience to digest critical points and gives you time to think.", tr:"İki saniye duraklamak, dinleyicilerinizin kritik noktaları sindirmesini sağlar ve size düşünme zamanı verir."},
{id:19, eng:"Keep your presentation slides remarkably visual.", tr:"Sunum slaytlarınızı son derece görsel tutun."},
{id:20, eng:"Slides packed with tiny text force audiences to read instead of listening to your arguments.", tr:"Küçük metinlerle dolu slaytlar, dinleyicileri argümanlarınızı dinlemek yerine okumaya zorlar."},
{id:21, eng:"Practice aloud multiple times before speaking.", tr:"Konuşmadan önce defalarca sesli pratik yapın."},
{id:22, eng:"Recording your rehearsal on a phone reveals annoying filler words like um and uh.", tr:"Provanızı telefona kaydetmek, 'ııı' ve 'şey' gibi sinir bozucu dolgu kelimeleri ortaya çıkarır."},
{id:23, eng:"Feedback from honest friends speeds up improvement.", tr:"Dürüst arkadaşlardan gelen geri bildirim gelişimi hızlandırır."},
{id:24, eng:"With regular practice, speaking transforms into an empowering skill that elevates your professional career.", tr:"Düzenli pratikle konuşmak, profesyonel kariyerinizi yükselten güçlendirici bir beceriye dönüşür."},
{id:25, eng:"Speak with clarity, passion, and purpose.", tr:"Netlikle, tutkuyla ve bir amaçla konuşun."}
], questions: [
{q:"What is glossophobia?", options:["Fear of spiders", "Fear of public speaking", "Fear of heights"], answer:1},
{q:"Why are deliberate pauses useful?", options:["To check the time", "To let listeners digest points", "To drink water"], answer:1},
{q:"What slides should a speaker avoid?", options:["Visual slides", "Slides packed with tiny text", "Slides with photos"], answer:1}
]},
{ id: 15, level: 'B1', title: 'Financial Literacy for Young Adults', bgImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Money management is a critical life skill.", tr:"Para yönetimi kritik bir yaşam becerisidir."},
{id:2, eng:"Unfortunately, standard academic schools rarely teach students how to manage their personal income effectively.", tr:"Ne yazık ki, standart okullar nadiren öğrencilere kişisel gelirlerini nasıl etkili yöneteceklerini öğretir."},
{id:3, eng:"Many graduates quickly accumulate expensive credit debt.", tr:"Birçok mezun hızla pahalı kredi borcu biriktirir."},
{id:4, eng:"Without financial literacy, individuals make emotional purchasing decisions that compromise their future freedom.", tr:"Finansal okuryazarlık olmadan bireyler, gelecekteki özgürlüklerini tehlikeye atan duygusal satın alma kararları verirler."},
{id:5, eng:"Building personal wealth begins with a budget.", tr:"Kişisel servet inşa etmek bir bütçeyle başlar."},
{id:6, eng:"A simple budget tracks incoming earnings and categorizes every expense with precision.", tr:"Basit bir bütçe gelen kazançları takip eder ve her harcamayı hassasiyetle sınıflandırır."},
{id:7, eng:"The 50/30/20 rule is widely recommended.", tr:"50/30/20 kuralı yaygın olarak tavsiye edilir."},
{id:8, eng:"Under this model, fifty percent of monthly income covers essential living needs like housing, groceries, and utilities.", tr:"Bu modelde aylık gelirin yüzde ellisi barınma, market ve faturalar gibi temel yaşam ihtiyaçlarını karşılar."},
{id:9, eng:"Thirty percent goes toward personal discretionary wants.", tr:"Yüzde otuzu kişisel keyfi isteklere gider."},
{id:10, eng:"The final twenty percent must be saved or invested immediately.", tr:"Son yüzde yirmi ise derhal biriktirilmeli veya yatırıma dönüştürülmelidir."},
{id:11, eng:"An emergency fund is your primary shield.", tr:"Bir acil durum fonu sizin birincil kalkanınızdır."},
{id:12, eng:"Save three to six months of bare living expenses inside an accessible high-yield bank account.", tr:"Üç ila altı aylık asgari yaşam masraflarını erişilebilir, yüksek getirili bir banka hesabında biriktirin."},
{id:13, eng:"This fund protects you against sudden job loss or expensive medical emergencies without requiring loans.", tr:"Bu fon, kredi çekmeye gerek kalmadan sizi ani iş kaybına veya pahalı tıbbi acil durumlara karşı korur."},
{id:14, eng:"Avoid high-interest consumer debt like the plague.", tr:"Yüksek faizli tüketici borcundan vebadan kaçar gibi kaçının."},
{id:15, eng:"Credit cards demand extreme personal discipline.", tr:"Kredi kartları aşırı kişisel disiplin gerektirir."},
{id:16, eng:"Paying only the minimum balance triggers compound interest against you, costing thousands in unnecessary fees.", tr:"Yalnızca asgari bakiyeyi ödemek bileşik faizi aleyhinize işletir ve binlerce liralık gereksiz ücrete mal olur."},
{id:17, eng:"Always pay your statement balance completely every month.", tr:"Her ay hesap özeti bakiyenizi her zaman tamamen ödeyin."},
{id:18, eng:"Compound interest can also work in your favor.", tr:"Bileşik faiz lehinize de çalışabilir."},
{id:19, eng:"Investing early inside broad index funds allows small monthly contributions to grow into substantial wealth.", tr:"Geniş tabanlı endeks fonlarına erken yatırım yapmak, küçük aylık katkıların önemli bir servete dönüşmesini sağlar."},
{id:20, eng:"Time in the market beats trying to time the market.", tr:"Piyasada geçirilen zaman, piyasanın zamanını tahmin etmeye çalışmaktan daha üstündür."},
{id:21, eng:"Learn the difference between assets and liabilities.", tr:"Varlıklar ve yükümlülükler arasındaki farkı öğrenin."},
{id:22, eng:"Assets put money into your pockets, while liabilities steadily drain your cash reserves over time.", tr:"Varlıklar cebinize para koyarken, yükümlülükler zamanla nakit rezervlerinizi düzenli olarak tüketir."},
{id:23, eng:"Practice conscious delayed gratification with large purchases.", tr:"Büyük satın alımlarda bilinçli ertelemeli tatmin uygulayın."},
{id:24, eng:"When you master your financial choices today, you unlock immense security and personal peace tomorrow.", tr:"Bugün finansal seçimlerinizde ustalaştığınızda, yarın muazzam bir güvenlik ve kişisel huzurun kapısını aralarsınız."},
{id:25, eng:"Financial freedom is created through daily discipline.", tr:"Finansal özgürlük günlük disiplinle yaratılır."}
], questions: [
{q:"In 50/30/20, what is the 20% allocated to?", options:["Dining out", "Savings and investments", "Entertainment"], answer:1},
{q:"How many months of expenses should an emergency fund cover?", options:["1 week", "3 to 6 months", "10 years"], answer:1},
{q:"What is the danger of paying only the minimum balance?", options:["Compound interest against you", "Cards expire", "Heavy cards"], answer:0}
]},
{ id: 16, level: 'B2', title: 'The Psychology of Decision Fatigue', bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Humans make hundreds of choices daily.", tr:"İnsanlar her gün yüzlerce seçim yapar."},
{id:2, eng:"From trivial meal selections to complex business negotiations, modern life demands relentless cognitive evaluation.", tr:"Önemsiz yemek tercihlerinden karmaşık iş müzakerelerine kadar, modern hayat aralıksız bilişsel değerlendirme talep eder."},
{id:3, eng:"This mental taxation has a biological limit.", tr:"Bu zihinsel vergilendirmenin biyolojik bir sınırı vardır."},
{id:4, eng:"Psychologists define decision fatigue as the deteriorating quality of choices made after prolonged sessions of decision-making.", tr:"Psikologlar karar yorgunluğunu, uzun süren karar verme süreçlerinin ardından yapılan seçimlerin kalitesinin düşmesi olarak tanımlarlar."},
{id:5, eng:"Willpower behaves much like a physical muscle.", tr:"İrade gücü tıpkı fiziksel bir kas gibi davranır."},
{id:6, eng:"When cognitive energy is depleted, the brain desperately searches for shortcuts to conserve its remaining fuel.", tr:"Bilişsel enerji tükendiğinde, beyin kalan yakıtını korumak için çaresizce kestirmeler arar."},
{id:7, eng:"People either act impulsively or avoid choices completely.", tr:"İnsanlar ya dürtüsel davranır ya da seçimlerden tamamen kaçınırlar."},
{id:8, eng:"A famous judicial study revealed that judges granted parole far more frequently after breakfast and lunch breaks.", tr:"Ünlü bir adli araştırma, yargıçların kahvaltı ve öğle yemeği molalarından hemen sonra çok daha sık şartlı tahliye verdiğini ortaya koydu."},
{id:9, eng:"Mental exhaustion quietly eroded their judicial empathy.", tr:"Zihinsel tükenmişlik adli empatilerini sessizce yıprattı."},
{id:10, eng:"Supermarkets exploit this vulnerability aggressively.", tr:"Süpermarketler bu kırılganlığı agresif bir şekilde istismar eder."},
{id:11, eng:"After shoppers navigate crowded aisles comparing prices, checkout stands tempt their exhausted brains with candy and soda.", tr:"Müşteriler fiyatları karşılaştırarak kalabalık koridorlarda dolaştıktan sonra, kasalar tükenmiş beyinlerini şeker ve gazlı içeceklerle cezbeder."},
{id:12, eng:"Decision fatigue also sabotages workplace productivity.", tr:"Karar yorgunluğu iş yeri verimliliğini de sabote eder."},
{id:13, eng:"Executives who waste peak morning hours replying to minor emails struggle with high-stakes strategic dilemmas later.", tr:"Sabahın en verimli saatlerini önemsiz e-postaları yanıtlayarak harcayan yöneticiler, daha sonra yüksek riskli stratejik ikilemlerde zorlanırlar."},
{id:14, eng:"Steve Jobs famously adopted a uniform wardrobe.", tr:"Steve Jobs tek tip bir gardırobu benimsemesiyle ünlüydü."},
{id:15, eng:"By wearing identical outfits daily, he eliminated trivial clothing dilemmas and preserved bandwidth for technological design.", tr:"Her gün aynı kıyafetleri giyerek önemsiz giyim ikilemlerini ortadan kaldırdı ve kapasitesini teknolojik tasarım için korudu."},
{id:16, eng:"Automating recurring routines is the best countermeasure.", tr:"Tekrarlayan rutinleri otomatikleştirmek en iyi karşı önlemdir."},
{id:17, eng:"When decisions become habitual, the prefrontal cortex rests while basal ganglia handle automated actions effortlessly.", tr:"Kararlar alışkanlık haline geldiğinde, bazal ganglionlar otomatik eylemleri zahmetsizce yürütürken prefrontal korteks dinlenir."},
{id:18, eng:"Schedule demanding analytical tasks early.", tr:"Zorlu analitik görevleri erken saatlere planlayın."},
{id:19, eng:"Never negotiate salary or make major financial commitments late at night when self-regulation is lowest.", tr:"Özdenetimin en düşük olduğu gece geç saatlerde asla maaş pazarlığı yapmayın veya büyük finansal taahhütlerde bulunmayın."},
{id:20, eng:"Nutrition also directly influences executive control.", tr:"Beslenme de yürütücü kontrolü doğrudan etkiler."},
{id:21, eng:"The brain consumes significant blood glucose during intense deliberation, requiring balanced meals to maintain endurance.", tr:"Beyin yoğun müzakereler sırasında önemli miktarda kan şekeri tüketir ve dayanıklılığı sürdürmek için dengeli öğünler gerektirir."},
{id:22, eng:"Delegate minor responsibilities to team members.", tr:"Küçük sorumlulukları ekip üyelerine devredin."},
{id:23, eng:"Simplifying personal lifestyle options protects mental sharpness.", tr:"Kişisel yaşam tarzı seçeneklerini basitleştirmek zihinsel keskinliği korur."},
{id:24, eng:"By consciously managing our daily mental energy, we make superior decisions and lead far more balanced lives.", tr:"Günlük zihinsel enerjimizi bilinçli olarak yöneterek, üstün kararlar verir ve çok daha dengeli hayatlar süreriz."},
{id:25, eng:"Protect your attention like your greatest treasure.", tr:"Dikkatinizi en büyük hazineniz gibi koruyun."}
], questions: [
{q:"What is decision fatigue?", options:["Muscle pain", "Deteriorating quality of decisions after prolonged choosing", "Computer crash"], answer:1},
{q:"Why did Steve Jobs wear identical outfits?", options:["Save money", "Eliminate clothing dilemmas and save mental energy", "Disliked clothes"], answer:1},
{q:"What fuel does the brain consume during deliberation?", options:["Adrenaline", "Blood glucose", "Water"], answer:1}
]},
{ id: 17, level: 'B2', title: 'Urban Green Spaces and Mental Well-being', bgImage: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Global cities are expanding rapidly.", tr:"Küresel şehirler hızla genişliyor."},
{id:2, eng:"As concrete towers replace natural landscapes, urban residents increasingly suffer from elevated chronic stress and anxiety.", tr:"Beton kuleler doğal manzaraların yerini aldıkça, kent sakinleri giderek daha fazla kronik stres ve kaygıdan muzdarip oluyor."},
{id:3, eng:"Urban planners now recognize this crisis.", tr:"Şehir plancıları artık bu krizi kabul ediyor."},
{id:4, eng:"Public parks and botanical reserves act as essential environmental buffers against the toxic pressures of city life.", tr:"Halka açık parklar ve botanik rezervler, şehir hayatının zehirli baskılarına karşı temel çevresel tamponlar olarak işlev görür."},
{id:5, eng:"Immersion in greenery reduces cortisol levels.", tr:"Yeşilliğin içine girmek kortizol seviyelerini düşürür."},
{id:6, eng:"The Japanese practice of Shinrin-yoku, or forest bathing, proves that spending time among trees stimulates parasympathetic relaxation.", tr:"Japon Shinrin-yoku yani orman banyosu pratiği, ağaçlar arasında vakit geçirmenin parasempatik rahatlamayı uyardığını kanıtlıyor."},
{id:7, eng:"Heart rates drop within twenty minutes.", tr:"Kalp atış hızları yirmi dakika içinde düşer."},
{id:8, eng:"Moreover, mature trees capture hazardous particulate pollutants emitted by diesel engines along congested metropolitan avenues.", tr:"Ayrıca olgun ağaçlar, kalabalık metropol caddelerindeki dizel motorların yaydığı tehlikeli partikül kirleticileri yakalar."},
{id:9, eng:"Vegetation cools surrounding concrete corridors naturally.", tr:"Bitki örtüsü çevreleyen beton koridorları doğal yollarla soğutur."},
{id:10, eng:"Through natural shade and moisture transpiration, urban greenery effectively mitigates the dangerous urban heat island effect.", tr:"Doğal gölge ve nem terlemesi yoluyla kentsel yeşillik, tehlikeli kentsel ısı adası etkisini etkili bir şekilde hafifletir."},
{id:11, eng:"Neighborhood parks also foster social unity.", tr:"Mahalle parkları sosyal birliği de pekiştirir."},
{id:12, eng:"Communal gardens and green public plazas provide welcoming spaces where diverse socioeconomic groups connect and exercise.", tr:"Topluluk bahçeleri ve yeşil halk meydanları, farklı sosyoekonomik grupların iletişim kurduğu ve spor yaptığı sıcak alanlar sunar."},
{id:13, eng:"Children with green access develop better focus.", tr:"Yeşil alan erişimi olan çocuklar daha iyi odaklanma geliştirir."},
{id:14, eng:"Clinical trials show that natural schoolyards substantially diminish attention deficit symptoms and aggressive behaviors among pupils.", tr:"Klinik deneyler, doğal okul bahçelerinin öğrenciler arasındaki dikkat eksikliği semptomlarını ve agresif davranışları önemli ölçüde azalttığını gösteriyor."},
{id:15, eng:"Nature effortlessly restores depleted cognitive attention.", tr:"Doğa, tükenmiş bilişsel dikkati zahmetsizce geri kazandırır."},
{id:16, eng:"Observing organic patterns like rustling leaves allows our directed analytical focus to rest and recharge completely.", tr:"Hışırdayan yapraklar gibi organik desenleri gözlemlemek, yönlendirilmiş analitik odağımızın dinlenmesini ve tamamen yenilenmesini sağlar."},
{id:17, eng:"Modern architecture is embracing living design.", tr:"Modern mimari yaşayan tasarımı benimsiyor."},
{id:18, eng:"Vertical forests and rooftop agricultural gardens turn sterile glass skyscrapers into functional biodiverse ecosystems.", tr:"Dikey ormanlar ve çatı tarım bahçeleri, steril cam gökdelenleri işlevsel biyoçeşitli ekosistemlere dönüştürür."},
{id:19, eng:"Singapore leads this visionary movement.", tr:"Singapur bu vizyoner harekete öncülük ediyor."},
{id:20, eng:"However, environmental disparities persist across low-income districts lacking equal access to municipal parks and trees.", tr:"Ancak belediye parklarına ve ağaçlarına eşit erişimden yoksun düşük gelirli bölgelerde çevresel eşitsizlikler sürmektedir."},
{id:21, eng:"Equal access to nature is justice.", tr:"Doğaya eşit erişim bir adalettir."},
{id:22, eng:"Equitable urban investment must guarantee every citizen safe, clean green spaces within walking distance from home.", tr:"Adil kentsel yatırımlar, her vatandaşın evine yürüme mesafesinde güvenli, temiz yeşil alanları garanti etmelidir."},
{id:23, eng:"Green design is a public health necessity.", tr:"Yeşil tasarım bir halk sağlığı gerekliliğidir."},
{id:24, eng:"Prioritizing natural urban ecosystems safeguards human psychological well-being as global populations continue migrating into dense cities.", tr:"Doğal kentsel ekosistemleri önceliklendirmek, küresel nüfus yoğun şehirlere göç etmeyi sürdürürken insan psikolojik sağlığını korur."},
{id:25, eng:"Nature and urban progress must coexist.", tr:"Doğa ve kentsel ilerleme bir arada var olmalıdır."}
], questions: [
{q:"What Japanese therapeutic practice means 'forest bathing'?", options:["Ikebana", "Shinrin-yoku", "Karate"], answer:1},
{q:"How do trees reduce urban heat island effect?", options:["Shade and moisture transpiration", "Blocking sun forever", "Drinking water"], answer:0},
{q:"What happens to cortisol levels when in greenery?", options:["Increase", "Decrease", "Stay frozen"], answer:1}
]},
{ id: 18, level: 'B2', title: 'The Evolution of Global Supply Chains', bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Global commerce connects distant continents seamlessly.", tr:"Küresel ticaret uzak kıtaları kusursuz bir şekilde birbirine bağlar."},
{id:2, eng:"Over past decades, advanced telecommunications and containerized shipping created an unprecedented interconnected world economy.", tr:"Geçtiğimiz on yıllar boyunca gelişmiş telekomünikasyon ve konteynerli taşımacılık, benzeri görülmemiş bir birbirine bağlı dünya ekonomisi yarattı."},
{id:3, eng:"Corporations dismantled expensive local production facilities.", tr:"Şirketler pahalı yerel üretim tesislerini tasfiye etti."},
{id:4, eng:"In pursuit of cheap offshore labor, manufacturers fragmented their supply networks across multiple specialized nations.", tr:"Ucuz denizaşırı iş gücü arayışıyla üreticiler, tedarik ağlarını birden fazla uzmanlaşmış ülkeye böldüler."},
{id:5, eng:"Just-in-time manufacturing became standard gospel.", tr:"Tam zamanında üretim standart bir öğreti haline geldi."},
{id:6, eng:"Under this lean strategy, companies eliminated warehouse stockpiles to save millions in storage and inventory overhead.", tr:"Bu yalın strateji altında şirketler, depolama ve envanter genel giderlerinden milyonlarca tasarruf etmek için stokları ortadan kaldırdı."},
{id:7, eng:"Consumer products became remarkably affordable worldwide.", tr:"Tüketici ürünleri dünya çapında son derece uygun fiyatlı hale geldi."},
{id:8, eng:"However, this ultra-efficient operational system created immense systemic fragility against unexpected global shocks.", tr:"Ancak bu ultra verimli operasyonel sistem, beklenmedik küresel şoklara karşı muazzam bir sistemik kırılganlık yarattı."},
{id:9, eng:"Recent geopolitical conflicts exposed these vulnerabilities.", tr:"Son jeopolitik çatışmalar bu kırılganlıkları açığa çıkardı."},
{id:10, eng:"A single blocked cargo vessel at the Suez Canal immobilized tens of billions in global trade.", tr:"Süveyş Kanalı'nda mahsur kalan tek bir kargo gemisi, küresel ticarette on milyarlarca doları hareketsiz kıldı."},
{id:11, eng:"Semiconductor shortages crippled global automobile assembly.", tr:"Yarı iletken kıtlığı küresel otomobil montajını felç etti."},
{id:12, eng:"When microchip factories shuttered abroad, vehicle plants worldwide halted production, inflicting billions in losses.", tr:"Denizaşırı mikroçip fabrikaları kapandığında, dünya çapındaki araç fabrikaları üretimi durdurarak milyarlarca dolarlık zarara yol açtı."},
{id:13, eng:"Corporate executives are now shifting strategies.", tr:"Kurumsal yöneticiler artık stratejilerini değiştiriyor."},
{id:14, eng:"Resilience has rapidly replaced pure cost minimization as the primary operational priority across industries.", tr:"Dayanıklılık, endüstriler genelinde birincil operasyonel öncelik olarak saf maliyet minimizasyonunun yerini hızla aldı."},
{id:15, eng:"Nearshoring is gaining tremendous international momentum.", tr:"Nearshoring (yakın ülkeye taşıma) muazzam bir uluslararası ivme kazanıyor."},
{id:16, eng:"Enterprises are relocating critical manufacturing hubs to neighboring countries to shorten transit routes dramatically.", tr:"İşletmeler, transit rotalarını önemli ölçüde kısaltmak için kritik üretim merkezlerini komşu ülkelere taşıyor."},
{id:17, eng:"Friendshoring provides an additional political safeguard.", tr:"Friendshoring (dost ülkeye taşıma) ek bir siyasi güvence sağlar."},
{id:18, eng:"By partnering with ideologically aligned governments, businesses effectively insulate distribution networks from geopolitical sanctions.", tr:"İşletmeler, ideolojik olarak uyumlu hükümetlerle ortaklık kurarak dağıtım ağlarını jeopolitik yaptırımlardan etkili bir şekilde yalıtır."},
{id:19, eng:"Digital tracking enhances end-to-end visibility.", tr:"Dijital takip uçtan uca görünürlüğü artırır."},
{id:20, eng:"Predictive machine learning algorithms now detect maritime shipping bottlenecks before vessels depart destination ports.", tr:"Öngörücü makine öğrenimi algoritmaları artık gemiler varış limanlarından ayrılmadan önce deniz taşımacılığı darboğazlarını tespit ediyor."},
{id:21, eng:"Environmental regulations demand cleaner sea logistics.", tr:"Çevre düzenlemeleri daha temiz deniz lojistiği talep ediyor."},
{id:22, eng:"Global shipping generates heavy carbon emissions, prompting investments in green hydrogen and alternative biofuels.", tr:"Küresel taşımacılık ağır karbon salımları üreterek yeşil hidrojen ve alternatif biyoyakıtlara yatırımları teşvik ediyor."},
{id:23, eng:"Supply chains are becoming smarter and localized.", tr:"Tedarik zincirleri daha akıllı ve yerelleşmiş hale geliyor."},
{id:24, eng:"Companies that balance economic agility with geographical foresight will decisively conquer volatile future markets.", tr:"Ekonomik çevikliği coğrafi öngörüyle dengeleyen şirketler, değişken geleceğin pazarlarını kesin bir şekilde fethedecektir."},
{id:25, eng:"True strength lies in supply flexibility.", tr:"Gerçek güç tedarik esnekliğinde yatar."}
], questions: [
{q:"What was the primary goal of just-in-time manufacturing?", options:["Large warehouse stockpiles", "Minimizing storage overhead to save money", "Hiring drivers"], answer:1},
{q:"What does nearshoring mean?", options:["Moving factories closer to consumer markets", "Selling online", "Closing shops"], answer:0},
{q:"Which shortage halted car assembly lines?", options:["Rubber tires", "Semiconductor microchips", "Windshields"], answer:1}
]},
{ id: 19, level: 'B2', title: 'Ethical Dilemmas in AI and Automation', bgImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Artificial intelligence is advancing at blinding speed.", tr:"Yapay zeka baş döndürücü bir hızla ilerliyor."},
{id:2, eng:"Autonomous algorithms now evaluate loan applicants, screen job resumes, and assist judges with criminal sentencing.", tr:"Otonom algoritmalar artık kredi başvurularını değerlendiriyor, iş özgeçmişlerini eliyor ve yargıçlara ceza infazlarında yardımcı oluyor."},
{id:3, eng:"These automated systems offer superhuman speed.", tr:"Bu otomatik sistemler insanüstü bir hız sunar."},
{id:4, eng:"However, deploying automated machine learning models without strict ethical oversight creates perilous social consequences.", tr:"Ancak makine öğrenimi modellerini sıkı etik denetim olmadan devreye sokmak tehlikeli sosyal sonuçlar doğurur."},
{id:5, eng:"Algorithmic bias represents a critical danger.", tr:"Algoritmik önyargı kritik bir tehlikeyi temsil eder."},
{id:6, eng:"Because predictive algorithms are trained on historical data, they inevitably inherit and amplify human societal prejudices.", tr:"Öngörücü algoritmalar geçmiş veriler üzerinde eğitildiğinden, kaçınılmaz olarak insan toplumsal önyargılarını miras alır ve büyütür."},
{id:7, eng:"Facial recognition software produces frequent misidentifications.", tr:"Yüz tanıma yazılımı sık sık yanlış teşhisler üretir."},
{id:8, eng:"Studies confirm that these scanning tools exhibit substantially higher error rates when analyzing ethnic minority faces.", tr:"Araştırmalar, bu tarama araçlarının etnik azınlık yüzlerini analiz ederken önemli ölçüde daha yüksek hata oranları sergilediğini doğrulamaktadır."},
{id:9, eng:"Flawed algorithms can lead to wrongful arrests.", tr:"Hatalı algoritmalar haksız tutuklamalara yol açabilir."},
{id:10, eng:"The black box dilemma presents another profound challenge.", tr:"Kara kutu ikilemi bir başka derin zorluk sunar."},
{id:11, eng:"Complex deep neural networks cannot explain the precise logical steps behind their automated conclusions.", tr:"Karmaşık derin sinir ağları, otomatik sonuçlarının arkasındaki kesin mantıksal adımları açıklayamaz."},
{id:12, eng:"Due process requires understandable legal explanations.", tr:"Adil yargılanma hakkı anlaşılabilir yasal açıklamalar gerektirir."},
{id:13, eng:"If an algorithm denies bail or parole, defendants have the right to know why.", tr:"Bir algoritma kefaleti veya şartlı tahliyeyi reddederse, sanıkların nedenini bilme hakkı vardır."},
{id:14, eng:"Autonomous vehicles introduce philosophical dilemmas onto highways.", tr:"Otonom araçlar otoyollarda felsefi ikilemler ortaya çıkarır."},
{id:15, eng:"In unavoidable collision scenarios, software must choose which lives to prioritize based on programmed values.", tr:"Kaçınılmaz çarpışma senaryolarında, yazılım programlanmış değerlere göre hangi hayatlara öncelik vereceğini seçmelidir."},
{id:16, eng:"Workplace automation threatens cognitive and manual labor.", tr:"İş yeri otomasyonu bilişsel ve kol gücüne dayalı emeği tehdit eder."},
{id:17, eng:"Generative software and robotic machinery are rapidly displacing skilled professionals, writers, and assembly technicians.", tr:"Üretken yazılımlar ve robotik makineler nitelikli profesyonelleri, yazarları ve montaj teknisyenlerini hızla yerinden ediyor."},
{id:18, eng:"Wealth could concentrate among tech monopolists.", tr:"Servet teknoloji tekelcilerinin elinde toplanabilir."},
{id:19, eng:"Economists urge governments to adopt universal basic income and aggressive retraining programs.", tr:"Ekonomistler hükümetleri evrensel temel geliri ve agresif yeniden eğitim programlarını benimsemeye çağırıyor."},
{id:20, eng:"Enforceable regulatory frameworks are vital.", tr:"Yaptırımı olan düzenleyici çerçeveler hayati önem taşır."},
{id:21, eng:"The European Union has enacted landmark regulations classifying AI systems by their threat level.", tr:"Avrupa Birliği, yapay zeka sistemlerini tehdit düzeylerine göre sınıflandıran dönüm noktası niteliğinde düzenlemeleri yürürlüğe koydu."},
{id:22, eng:"High-risk systems must mandate human-in-the-loop oversight.", tr:"Yüksek riskli sistemler, süreçte insanın yer aldığı denetimi zorunlu kılmalıdır."},
{id:23, eng:"Technology must always serve humanity.", tr:"Teknoloji her zaman insanlığa hizmet etmelidir."},
{id:24, eng:"Establishing robust ethical guardrails today ensures that automation enhances human potential instead of diminishing it.", tr:"Bugün sağlam etik güvenceler oluşturmak, otomasyonun insan potansiyelini azaltmak yerine geliştirmesini sağlar."},
{id:25, eng:"Human dignity remains non-negotiable.", tr:"İnsan onuru tartışılamaz bir değerdir."}
], questions: [
{q:"What causes algorithmic bias in AI?", options:["Hardware glitches", "Training models on historical data with prejudices", "Low battery"], answer:1},
{q:"What is the 'black box' problem in AI?", options:["Painted computers", "Deep networks unable to explain their reasoning", "Broken screen"], answer:1},
{q:"How does EU regulate AI?", options:["Classifying systems according to risk level", "Banning computers", "Taxing Internet"], answer:0}
]},
{ id: 20, level: 'B2', title: 'The Impact of Bilingualism on Brain Plasticity', bgImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80', sentences: [
{id:1, eng:"Language learning transforms the human mind.", tr:"Dil öğrenimi insan zihnini dönüştürür."},
{id:2, eng:"For decades, flawed pedagogical theories erroneously claimed that raising children bilingually would confuse their grammatical development.", tr:"On yıllar boyunca kusurlu pedagojik teoriler, çocukları iki dilli yetiştirmenin dilbilgisel gelişimlerini karıştıracağını hatalı bir şekilde iddia etti."},
{id:3, eng:"Modern neuroimaging completely disproved that myth.", tr:"Modern beyin görüntüleme bu efsaneyi tamamen çürüttü."},
{id:4, eng:"Neuroscientists now prove that speaking multiple languages dramatically improves neural plasticity and cognitive longevity.", tr:"Sinirbilimciler artık birden fazla dil konuşmanın sinirsel plastisiteyi ve bilişsel uzun ömürlülüğü çarpıcı bir şekilde geliştirdiğini kanıtlıyor."},
{id:5, eng:"The brain reorganizes through synaptic connections.", tr:"Beyin sinaptik bağlantılar yoluyla kendini yeniden düzenler."},
{id:6, eng:"When a multilingual speaker converses, both languages remain perpetually active and competing inside the brain.", tr:"Çok dilli bir konuşmacı sohbet ettiğinde, her iki dil de beynin içinde sürekli olarak aktif ve rekabet halinde kalır."},
{id:7, eng:"The prefrontal cortex works constantly.", tr:"Prefrontal korteks sürekli çalışır."},
{id:8, eng:"It suppresses irrelevant words from one language while instantly selecting correct grammatical structures in another.", tr:"Bir dilden alakasız kelimeleri bastırırken diğer dildeki doğru dilbilgisel yapıları anında seçer."},
{id:9, eng:"This persistent workout strengthens executive function.", tr:"Bu sürekli antrenman yürütücü işlevi güçlendirir."},
{id:10, eng:"Bilingual individuals demonstrate superior aptitude in multitasking and ignoring distracting environmental noise.", tr:"İki dilli bireyler çoklu görevlerde ve dikkat dağıtıcı çevresel gürültüyü görmezden gelmede üstün yetenek sergilerler."},
{id:11, eng:"They switch between tasks with agility.", tr:"Görevler arasında çeviklikle geçiş yaparlar."},
{id:12, eng:"Children exposed to multiple dialects develop acute metalinguistic awareness early in life.", tr:"Birden fazla lehçeye maruz kalan çocuklar, yaşamın erken dönemlerinde keskin bir üst-dilsel farkındalık geliştirirler."},
{id:13, eng:"They realize words are arbitrary symbols representing real-world concepts rather than physical realities.", tr:"Kelimelerin fiziksel gerçekliklerden ziyade gerçek dünya kavramlarını temsil eden keyfi semboller olduğunu fark ederler."},
{id:14, eng:"This linguistic insight enhances general problem-solving.", tr:"Bu dilsel kavrayış genel problem çözmeyi geliştirir."},
{id:15, eng:"Crucially, these cognitive advantages extend into old age.", tr:"Daha da önemlisi, bu bilişsel avantajlar yaşlılığa kadar uzanır."},
{id:16, eng:"Epidemiological studies indicate that lifelong bilingualism delays symptomatic onset of Alzheimer's by five years.", tr:"Epidemiyolojik çalışmalar, yaşam boyu iki dilliliğin Alzheimer semptomlarının başlangıcını beş yıl geciktirdiğini göstermektedir."},
{id:17, eng:"Physical pathology might still develop.", tr:"Fiziksel patoloji yine de gelişebilir."},
{id:18, eng:"However, multilingual brains possess richer cognitive reserve, allowing them to route thoughts through undamaged pathways.", tr:"Ancak çok dilli beyinler daha zengin bir bilişsel rezerve sahiptir ve düşünceleri hasar görmemiş yollardan yönlendirmelerine olanak tanır."},
{id:19, eng:"Adults also benefit from language acquisition.", tr:"Yetişkinler de dil ediniminden yararlanırlar."},
{id:20, eng:"Although mastering foreign pronunciation demands disciplined effort, neuroplastic remodeling occurs regardless of your biological age.", tr:"Yabancı telaffuzda ustalaşmak disiplinli bir çaba gerektirse de, nöroplastik yeniden yapılanma biyolojik yaşınızdan bağımsız olarak gerçekleşir."},
{id:21, eng:"Studying vocabulary stimulates white matter integrity.", tr:"Kelime çalışmak beyaz cevher bütünlüğünü uyarır."},
{id:22, eng:"It functions as intensive weightlifting for your neurons.", tr:"Nöronlarınız için yoğun bir ağırlık kaldırma işlevi görür."},
{id:23, eng:"Learning new words keeps thoughts youthful.", tr:"Yeni kelimeler öğrenmek düşünceleri genç tutar."},
{id:24, eng:"Embracing foreign languages enriches your cultural world while shielding your brain against degenerative decline.", tr:"Yabancı dilleri benimsemek beyninizi dejeneratif gerilemeye karşı korurken kültürel dünyanızı zenginleştirir."},
{id:25, eng:"Every new language grants another mind.", tr:"Her yeni dil bir başka zihin bağışlar."}
], questions: [
{q:"What did outdated theories claim about bilingual children?", options:["Superpowers", "Confuses grammatical development", "Makes them tall"], answer:1},
{q:"By how many years can bilingualism delay Alzheimer's?", options:["Five years", "One month", "Twenty years"], answer:0},
{q:"What is cognitive reserve?", options:["Bank account", "Brain's ability to use alternative neural pathways", "Memory card"], answer:1}
]}
];

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
