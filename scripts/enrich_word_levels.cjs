// scripts/enrich_word_levels.cjs
const fs = require('fs');

const richWordLevelMap = {
  // A1 core vocabulary
  "morning": "A1", "breakfast": "A1", "friend": "A1", "football": "A1", "farm": "A1", "school": "A1", "shopping": "A1", "summer": "A1", "holiday": "A1", "blue": "A1",
  "house": "A1", "home": "A1", "water": "A1", "bread": "A1", "coffee": "A1", "tea": "A1", "milk": "A1", "egg": "A1", "butter": "A1", "cheese": "A1",
  "apple": "A1", "banana": "A1", "orange": "A1", "fruit": "A1", "salad": "A1", "soup": "A1", "meat": "A1", "chicken": "A1", "fish": "A1", "rice": "A1",
  "sun": "A1", "moon": "A1", "star": "A1", "sky": "A1", "rain": "A1", "cloud": "A1", "wind": "A1", "tree": "A1", "flower": "A1", "grass": "A1",
  "cat": "A1", "dog": "A1", "bird": "A1", "horse": "A1", "cow": "A1", "duck": "A1", "pet": "A1", "animal": "A1", "baby": "A1", "child": "A1",
  "mother": "A1", "father": "A1", "sister": "A1", "brother": "A1", "family": "A1", "parent": "A1", "doctor": "A1", "teacher": "A1", "student": "A1", "baker": "A1",
  "book": "A1", "pen": "A1", "pencil": "A1", "paper": "A1", "desk": "A1", "chair": "A1", "table": "A1", "room": "A1", "bed": "A1", "door": "A1",
  "window": "A1", "kitchen": "A1", "garden": "A1", "park": "A1", "street": "A1", "city": "A1", "town": "A1", "car": "A1", "bus": "A1", "bike": "A1",
  "bicycle": "A1", "train": "A1", "boat": "A1", "ball": "A1", "game": "A1", "toy": "A1", "music": "A1", "song": "A1", "radio": "A1", "clock": "A1",
  "watch": "A1", "money": "A1", "price": "A1", "shop": "A1", "store": "A1", "market": "A1", "shoe": "A1", "shirt": "A1", "coat": "A1", "hat": "A1",
  "dress": "A1", "red": "A1", "green": "A1", "yellow": "A1", "white": "A1", "black": "A1", "brown": "A1", "pink": "A1", "grey": "A1", "color": "A1",
  "big": "A1", "small": "A1", "hot": "A1", "cold": "A1", "warm": "A1", "cool": "A1", "clean": "A1", "dirty": "A1", "happy": "A1", "sad": "A1",
  "good": "A1", "bad": "A1", "new": "A1", "old": "A1", "young": "A1", "fast": "A1", "slow": "A1", "sweet": "A1", "fresh": "A1", "quiet": "A1",
  "loud": "A1", "easy": "A1", "hard": "A1", "busy": "A1", "open": "A1", "close": "A1", "ready": "A1", "hungry": "A1", "thirsty": "A1", "tired": "A1",
  "walk": "A1", "run": "A1", "jump": "A1", "sit": "A1", "stand": "A1", "eat": "A1", "drink": "A1", "sleep": "A1", "wake": "A1", "wash": "A1",
  "cook": "A1", "bake": "A1", "read": "A1", "write": "A1", "draw": "A1", "paint": "A1", "listen": "A1", "hear": "A1", "speak": "A1", "talk": "A1",
  "see": "A1", "look": "A1", "watch": "A1", "buy": "A1", "pay": "A1", "help": "A1", "learn": "A1", "teach": "A1", "work": "A1", "play": "A1",
  "love": "A1", "like": "A1", "smile": "A1", "laugh": "A1", "live": "A1", "start": "A1", "finish": "A1", "stop": "A1", "meet": "A1", "call": "A1",

  // A2 expanding vocabulary
  "camping": "A2", "apartment": "A2", "museum": "A2", "party": "A2", "driving": "A2", "license": "A2", "interview": "A2", "company": "A2", "resume": "A2", "career": "A2",
  "shelter": "A2", "puppy": "A2", "rescue": "A2", "adopt": "A2", "collar": "A2", "journey": "A2", "passenger": "A2", "express": "A2", "scenic": "A2", "station": "A2",
  "terminal": "A2", "platform": "A2", "volunteer": "A2", "community": "A2", "compost": "A2", "harvest": "A2", "irrigation": "A2", "restore": "A2", "vintage": "A2", "frame": "A2",
  "wrench": "A2", "saddle": "A2", "brunch": "A2", "spread": "A2", "ceramic": "A2", "smoothie": "A2", "exhibition": "A2", "gallery": "A2", "canvas": "A2", "sculpture": "A2",
  "atrium": "A2", "airport": "A2", "boarding": "A2", "kiosk": "A2", "luggage": "A2", "departure": "A2", "conveyor": "A2", "sustainable": "A2", "eco": "A2", "photovoltaic": "A2",
  "insulate": "A2", "refillable": "A2", "analog": "A2", "aperture": "A2", "shutter": "A2", "exposure": "A2", "cartridge": "A2", "wellness": "A2", "routine": "A2", "rehydrate": "A2",
  "spinal": "A2", "metabolism": "A2", "exchange": "A2", "meetup": "A2", "participant": "A2", "colloquial": "A2", "fortress": "A2", "ruins": "A2", "battlement": "A2", "courtyard": "A2",
  "armory": "A2", "fair": "A2", "block": "A2", "lantern": "A2", "craft": "A2", "trio": "A2", "blizzard": "A2", "snowstorm": "A2", "hearth": "A2", "snowshoe": "A2",
  "culinary": "A2", "masterclass": "A2", "artichoke": "A2", "polyphenol": "A2", "pergola": "A2", "ferry": "A2", "vessel": "A2", "seagull": "A2", "monastery": "A2", "mansion": "A2",
  "flea": "A2", "treasure": "A2", "postcard": "A2", "typewriter": "A2", "bargain": "A2", "scuba": "A2", "regulator": "A2", "buoyancy": "A2", "wetsuit": "A2", "marine": "A2",
  "turtle": "A2", "remote": "A2", "flexibility": "A2", "freelance": "A2", "terrace": "A2", "ergonomic": "A2", "herbary": "A2", "terracotta": "A2", "perennial": "A2", "rosemary": "A2",
  "backpacking": "A2", "budget": "A2", "dormitory": "A2", "adventurer": "A2", "festival": "A2", "indie": "A2", "timber": "A2", "euphoria": "A2", "acoustic": "A2", "guitar": "A2",
  "fret": "A2", "callus": "A2", "arpeggio": "A2", "sanctuary": "A2", "productivity": "A2", "overhaul": "A2", "dimmable": "A2", "invitation": "A2", "impression": "A2", "accomplishment": "A2",

  // B1 core vocabulary
  "renewable": "B1", "habit": "B1", "tourism": "B1", "speech": "B1", "budget": "B1", "savings": "B1", "sustainable": "B1", "overtourism": "B1", "heritage": "B1", "wildlife": "B1",
  "glossophobia": "B1", "audience": "B1", "investing": "B1", "debt": "B1", "inflation": "B1", "compound": "B1", "emergency": "B1", "strategy": "B1", "negotiate": "B1", "environment": "B1",
  "pollutant": "B1", "ecosystem": "B1", "emissions": "B1", "alternative": "B1", "consumption": "B1", "conservation": "B1", "persuade": "B1", "confidence": "B1", "articulate": "B1", "eloquent": "B1",

  // B2 advanced vocabulary
  "fatigue": "B2", "exhaustion": "B2", "logistics": "B2", "resilience": "B2", "ethics": "B2", "plasticity": "B2", "dementia": "B2", "neuroscience": "B2", "synaptic": "B2", "multilingual": "B2",
  "longevity": "B2", "epidemiological": "B2", "dilemma": "B2", "algorithm": "B2", "prejudice": "B2", "automation": "B2", "semiconductor": "B2", "nearshoring": "B2", "globalization": "B2", "vulnerability": "B2"
};

let dataContent = fs.readFileSync('src/data.ts', 'utf8');
const mapStr = 'const wordLevelMap = ' + JSON.stringify(richWordLevelMap, null, 2) + ';';

dataContent = dataContent.replace(/const wordLevelMap = \{[\s\S]*?\};/, mapStr);
fs.writeFileSync('src/data.ts', dataContent, 'utf8');
console.log(`Updated wordLevelMap with ${Object.keys(richWordLevelMap).length} words!`);
