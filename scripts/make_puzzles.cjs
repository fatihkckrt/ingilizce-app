// scripts/make_puzzles.cjs
const fs = require('fs');
const path = require('path');

// Let's create an array of fully validated, verified puzzles.
// Each puzzle is verified cell-by-cell.

function createPuzzle(id, title, level, size, description, cluesInput) {
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const clues = [];

  for (const item of cluesInput) {
    const word = item.word.toUpperCase();
    const len = word.length;
    const r = item.row;
    const c = item.col;
    const dir = item.direction;

    if (dir === 'across') {
      if (r < 0 || r >= size || c < 0 || c + len > size) {
        throw new Error(`[OUT_OF_BOUNDS] Across word ${word} in ${id}: row=${r}, col=${c}, len=${len}, size=${size}`);
      }
      for (let i = 0; i < len; i++) {
        const char = word[i];
        if (grid[r][c + i] !== null && grid[r][c + i] !== char) {
          throw new Error(`[MISMATCH] In ${id}: Across ${word} at (${r}, ${c+i}) expects '${char}' but cell has '${grid[r][c+i]}'`);
        }
        grid[r][c + i] = char;
      }
    } else {
      if (c < 0 || c >= size || r < 0 || r + len > size) {
        throw new Error(`[OUT_OF_BOUNDS] Down word ${word} in ${id}: row=${r}, col=${c}, len=${len}, size=${size}`);
      }
      for (let i = 0; i < len; i++) {
        const char = word[i];
        if (grid[r + i][c] !== null && grid[r + i][c] !== char) {
          throw new Error(`[MISMATCH] In ${id}: Down ${word} at (${r+i}, ${c}) expects '${char}' but cell has '${grid[r+i][c]}'`);
        }
        grid[r + i][c] = char;
      }
    }

    clues.push({
      id: `${item.number}-${dir}`,
      number: item.number,
      direction: dir,
      word,
      clue: item.clue,
      row: r,
      col: c,
      length: len
    });
  }

  clues.sort((a, b) => a.number - b.number || (a.direction === 'across' ? -1 : 1));

  return {
    id,
    title,
    level,
    size,
    description,
    clues
  };
}

const allPuzzles = [];

// =========================================================================
// A1 LEVEL PUZZLES
// =========================================================================

// --- A1: 5x5 - 1: "Ev & Günlük Yaşam" ---
// Grid 5x5:
// H1: (0,0) HOME [H, O, M, E]
// V1: (0,0) HAT  [H, A, T] -> intersects HOME at (0,0)='H'
// H2: (1,1) ART  [A, R, T] -> intersects HAT at (1,0) wait: ART starts at col 1? Let's check: (1,0)='A', (1,1)='R', (1,2)='T' -> "ART" starts at col 0!
// Let's verify precisely:
// (0,0) H  (0,1) O  (0,2) M  (0,3) E
// (1,0) A  (1,1) P  (1,2) P  (1,3) L  (1,4) E  -> APPLE
// (2,0) T  (2,1) E  (2,2) N                     -> TEN
// Down:
// (0,0) HAT: (0,0)='H', (1,0)='A', (2,0)='T' -> matches HOME, APPLE, TEN!
// (0,1) OPEN: (0,1)='O', (1,1)='P', (2,1)='E', (3,1)='N' -> matches HOME, APPLE, TEN!
// (1,4) EGG: (1,4)='E', (2,4)='G', (3,4)='G' -> matches APPLE at (1,4)='E'!
allPuzzles.push(createPuzzle(
  'a1-5x5-1',
  'Ev & Günlük Yaşam',
  'A1',
  5,
  'Evde ve günlük hayatta sık kullanılan temel kelimeler.',
  [
    { number: 1, direction: 'across', word: 'HOME', clue: 'Ailenin yaşadığı yuva veya ev', row: 0, col: 0 },
    { number: 2, direction: 'across', word: 'APPLE', clue: 'Kırmızı veya yeşil lezzetli meyve', row: 1, col: 0 },
    { number: 3, direction: 'across', word: 'TEN', clue: 'Dokuzdan sonra gelen çift basamaklı sayı (10)', row: 2, col: 0 },
    { number: 1, direction: 'down', word: 'HAT', clue: 'Güneşten korunmak için başa takılan şapka', row: 0, col: 0 },
    { number: 4, direction: 'down', word: 'OPEN', clue: 'Kapalı karşıtı, açık veya açmak', row: 0, col: 1 },
    { number: 5, direction: 'down', word: 'EGG', clue: 'Kahvaltıda yenen taze yumurta', row: 1, col: 4 }
  ]
));

// --- A1: 5x5 - 2: "Hayvanlar & Doğa" ---
// (0,0) B  (0,1) I  (0,2) R  (0,3) D  -> BIRD
// (1,0) A  (1,1) C  (1,2) E           -> ACE
// (2,0) T  (2,1) E  (2,2) A           -> TEA
// Down:
// (0,0) BAT: (0,0)='B', (1,0)='A', (2,0)='T' -> matches BIRD, ACE, TEA!
// (0,1) ICE: (0,1)='I', (1,1)='C', (2,1)='E' -> matches BIRD, ACE, TEA!
// (0,2) RED: (0,2)='R', (1,2)='E', (2,2)='A'? wait, R-E-D ends with D!
// How about (0,2)='R', (1,2)='U', (2,2)='N' -> RUN?
// Then H2 is SUN? (1,1) S (1,2) U (1,3) N!
// Let's check:
// H1: (0,1) B  (0,2) I  (0,3) R  (0,4) D -> BIRD
// H2: (2,0) W  (2,1) A  (2,2) T  (2,3) E  (2,4) R -> WATER
// Down:
// V1: (0,3) R  (1,3) E  (2,3) E  (3,3) D -> REED (Kamış)
// V2: (0,4) D  (1,4) O  (2,4) O  (3,4) R -> DOOR (Kapı) -> at (2,4) is 'O', but WATER has 'R'!
// Let's use clean, tested intersections:
// (0,0) C  (0,1) A  (0,2) T   -> CAT
// (1,0) O  (1,1) U  (1,2) T   -> OUT
// (2,0) W  (2,1) P  ... cow?
// Let's build a solid 5x5:
// H1: (0,0) C A T
// H2: (2,0) D O G
// V1: (0,0) C O W  -> (0,0)='C', (1,0)='O', (2,0)='W' -> wait: (2,0) in DOG is D! COW has W.
// If (0,0) D O G -> (0,0)='D', (1,0)='A', (2,0)='Y' -> DAY!
// (0,0) D O G
// (1,0) A R T
// (2,0) Y E S
// Let's check Down:
// (0,0) D A Y: (0,0)='D', (1,0)='A', (2,0)='Y' -> MATCHES DOG, ART, YES!
// (0,1) O R E: (0,1)='O', (1,1)='R', (2,1)='E' -> Cevher / maden! Or O-N-E? (1,1) would be N.
// If H2 is (1,0) A N T (Karınca!):
// (0,0) D O G (Köpek)
// (1,0) A N T (Karınca)
// (2,0) Y E S (Evet)
// Down:
// (0,0) D A Y (Gün)
// (0,1) O N E (Bir sayısı)
// (0,2) G T S? no.
// If H3 is (2,1) E A R (Kulak):
// (0,2) G (1,2) T?
// What 3-letter word ends in T? C A T!
// (0,2) C (1,2) A (2,2) T -> Down: (0,2)='C', (1,2)='A', (2,2)='T'
// Then H1 ends in C: (0,0) B (0,1) A (0,2) C wait, B A C K! (Sırt / Geri)
// Let's trace:
// H1: (0,0) B O O K (Kitap)
// V1: (0,0) B I R D (Kuş): (0,0)='B', (1,0)='I', (2,0)='R', (3,0)='D'
// H2: (1,0) I C E (Buz): (1,0)='I', (1,1)='C', (1,2)='E'
// H3: (2,0) R E D (Kırmızı): (2,0)='R', (2,1)='E', (2,2)='D'
// H4: (3,0) D O G (Köpek): (3,0)='D', (3,1)='O', (3,2)='G'
// Down V2 at (0,1):
// (0,1) in BOOK is 'O'. (1,1) in ICE is 'C'. (2,1) in RED is 'E'. (3,1) in DOG is 'O'. O-C-E-O not a word.
// But what if V2 is at (0,3)? BOOK has 'K'.
// What if V2 is (1,2) E A G L E ? (1,2) in ICE is 'E', (2,2) in RED is 'D'! Not matching.
// Notice: In crosswords, words DON'T all have to touch every single cell!
// They can cross like a PLUS or standard crossword:
// H1 at row 0 (cols 0..3): F I S H (Balık)
// V1 at col 0 (rows 0..3): F A R M (Çiftlik) -> (0,0)='F'
// H2 at row 2 (cols 0..3): R A I N (Yağmur) -> (2,0)='R' in FARM! Matches!
// V2 at col 2 (rows 0..3): S U N (Güneş) -> (0,2)='S' in FISH! (1,2)='U', (2,2)='N'? But in RAIN (2,2) is 'I'!
// If V2 is S H I P (Gemi):
// (0,2)='S' in FISH. (1,2)='H'. (2,2)='I' in RAIN! (3,2)='P'!
// Let's verify S H I P:
// (0,2)='S', (1,2)='H', (2,2)='I', (3,2)='P'!
// Matches FISH at (0,2)='S' and RAIN at (2,2)='I'!
// And at row 3:
// (3,0) in FARM is 'M'. (3,2) in SHIP is 'P'.
// Can we have H3 at row 3: M A P (Harita)?
// (3,0)='M', (3,1)='A', (3,2)='P'!
// (3,0)='M' matches FARM! (3,2)='P' matches SHIP!
// WOW! That is a 100% PERFECT 4-WORD CROSSWORD:
// H1: (0,0) FISH
// V1: (0,0) FARM
// H2: (2,0) RAIN
// V2: (0,2) SHIP
// H3: (3,0) MAP
allPuzzles.push(createPuzzle(
  'a1-5x5-2',
  'Doğa & Çevre',
  'A1',
  5,
  'Balık, çiftlik, yağmur ve harita gibi temel çevre sözcükleri.',
  [
    { number: 1, direction: 'across', word: 'FISH', clue: 'Suda yaşayan pullu canlı (Balık)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'FARM', clue: 'Hayvanların beslendiği ekin alanı (Çiftlik)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'SHIP', clue: 'Denizde yol alan büyük deniz taşıtı (Gemi)', row: 0, col: 2 },
    { number: 3, direction: 'across', word: 'RAIN', clue: 'Bulutlardan düşen su damlaları (Yağmur)', row: 2, col: 0 },
    { number: 4, direction: 'across', word: 'MAP', clue: 'Şehir ve ülkeleri gösteren çizim (Harita)', row: 3, col: 0 }
  ]
));

// --- A1: 5x5 - 3: "Renkler & Zaman" ---
// H1 at row 0: (0,0) B L U E (Mavi)
// V1 at col 0: (0,0) B O O K (Kitap) -> (0,0)='B', (1,0)='O', (2,0)='O', (3,0)='K'
// H2 at row 3: K I T E (Uçurtma) -> (3,0)='K', (3,1)='I', (3,2)='T', (3,3)='E'
// V2 at col 3: E Y E S (Gözler) -> (0,3)='E' in BLUE, (1,3)='Y', (2,3)='E', (3,3)='S'? In KITE (3,3) is 'E'.
// If V2 is (0,3) E A T : (0,3)='E' in BLUE, (1,3)='A', (2,3)='T'
// And what about col 1: (0,1) in BLUE is 'L'.
// V3 at col 1: (0,1) L I O N (Aslan): (0,1)='L', (1,1)='I', (2,1)='O', (3,1)='N'? In KITE (3,1) is 'I'.
// If V3 is (0,1) L I M E (Misket limonu): (0,1)='L', (1,1)='I', (2,1)='M', (3,1)='E'? In KITE (3,1) is 'I'.
// What starts with L, 4th letter is I? No.
// What if H2 is at row 2?
// In BOOK (2,0) is 'O'.
// H2 at row 2: O P E N (Açık): (2,0)='O', (2,1)='P', (2,2)='E', (2,3)='N'
// In BLUE (0,2) is 'U'.
// If V2 is at col 2: U N I T (Birim): (0,2)='U', (1,2)='N', (2,2)='I'? In OPEN (2,2) is 'E'.
// What starts with U, 3rd letter is E?
// U S E R (Kullanıcı): (0,2)='U', (1,2)='S', (2,2)='E', (3,2)='R'!
// In BLUE: (0,0)='B', (0,1)='L', (0,2)='U', (0,3)='E'.
// USER at (0,2): (0,2)='U', (1,2)='S', (2,2)='E', (3,2)='R'!
// OPEN at (2,0): (2,0)='O', (2,1)='P', (2,2)='E', (2,3)='N'!
// Matches USER at (2,2)='E'!
// And BOOK at (0,0): (0,0)='B', (1,0)='O', (2,0)='O', (3,0)='K'!
// Matches BLUE at (0,0)='B' and OPEN at (2,0)='O'!
// Now at row 3:
// (3,0) is 'K' in BOOK. (3,2) is 'R' in USER.
// What 4-letter word has K at 0 and R at 2?
// K O R E? K E R N?
// What about (3,0) K I N G? Doesn't hit col 2 if length is 4: (3,0)='K', (3,1)='I', (3,2)='N'? In USER (3,2) is 'R'.
// But we don't need a word at row 3! We can add V3 at (0,3) E A S Y (Kolay):
// (0,3)='E' in BLUE, (1,3)='A', (2,3)='S'? In OPEN (2,3) is 'N'.
// What 4-letter word starts with E and has N at 3rd letter (index 2)?
// E X N ?
// Wait, at (2,3) OPEN has 'N'! So the word at (0,3) must have 'E' at 0, and 'N' at index 2!
// E I N ?
// How about (2,3) N E W S (Haberler) starting at (2,3)?
// (2,3)='N' in OPEN, (3,3)='E', (4,3)='W'?
// Or Down at (2,3): N E X T (Sonraki):
// (2,3)='N', (3,3)='E', (4,3)='X'?
// Let's check:
// H1: (0,0) BLUE
// V1: (0,0) BOOK
// H2: (2,0) OPEN
// V2: (0,2) USER
// V3: (2,3) NOON (Öğle vakti): (2,3)='N', (3,3)='O', (4,3)='O'
// Or V3: (2,3) NAME (İsim): (2,3)='N', (3,3)='A', (4,3)='M', (5,3) too long.
// V3: (2,3) NOTE (Not): (2,3)='N', (3,3)='O', (4,3)='T'!
// Let's verify:
// BLUE at (0,0): (0,0)='B', (0,1)='L', (0,2)='U', (0,3)='E'
// BOOK at (0,0): (0,0)='B', (1,0)='O', (2,0)='O', (3,0)='K'
// OPEN at (2,0): (2,0)='O', (2,1)='P', (2,2)='E', (2,3)='N'
// USER at (0,2): (0,2)='U', (1,2)='S', (2,2)='E', (3,2)='R'
// NOTE at (2,3): (2,3)='N', (3,3)='O', (4,3)='T'
// Intersections:
// - BLUE & BOOK at (0,0)='B'
// - BLUE & USER at (0,2)='U'
// - BOOK & OPEN at (2,0)='O'
// - USER & OPEN at (2,2)='E'
// - OPEN & NOTE at (2,3)='N'
// 5 words! Zero collisions!
allPuzzles.push(createPuzzle(
  'a1-5x5-3',
  'Renkler & Eşyalar',
  'A1',
  5,
  'Mavi renk, kitap, açık olmak ve not almak gibi günlük kavramlar.',
  [
    { number: 1, direction: 'across', word: 'BLUE', clue: 'Gökyüzünün ve berrak denizlerin rengi (Mavi)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'BOOK', clue: 'Okumak için sayfaları çevrilen nesne (Kitap)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'USER', clue: 'Bir sistemi veya telefonu kullanan kişi (Kullanıcı)', row: 0, col: 2 },
    { number: 3, direction: 'across', word: 'OPEN', clue: 'Kapalı olmayan, giriş yapılabilen (Açık)', row: 2, col: 0 },
    { number: 4, direction: 'down', word: 'NEW', clue: 'Eski olmayan, yepyeni ve taze', row: 2, col: 3 }
  ]
));

// --- A1: 6x6 - 1: "Sınıf & Okul Dünyası" ---
// Size: 6x6 (rows 0..5, cols 0..5)
// H1: (0,0) S C H O O L (Okul)
// V1: (0,0) S M I L E (Gülümsemek): (0,0)='S', (1,0)='M', (2,0)='I', (3,0)='L', (4,0)='E'
// H2: (2,0) I C E (Buz): (2,0)='I', (2,1)='C', (2,2)='E'
// V2: (0,3) O P E N (Açık): (0,3)='O', (1,3)='P', (2,3)='E', (3,3)='N'
// H3: (3,0) L E M O N (Limon): (3,0)='L', (3,1)='E', (3,2)='M', (3,3)='O'? Wait, in OPEN (3,3) is 'N'.
// What 5-letter word starts with L, 4th letter is N?
// L I O N ? 4 letters: L I O N -> (3,0)='L', (3,1)='I', (3,2)='O', (3,3)='N'!
// Matches SMILE at (3,0)='L' and OPEN at (3,3)='N'!
// And at (4,0) SMILE has 'E'.
// H4: (4,0) E A S Y (Kolay): (4,0)='E', (4,1)='A', (4,2)='S', (4,3)='Y'
// And in SCHOOL:
// (0,5) is 'L'.
// V3 at col 5: (0,5) L I G H T (Işık): (0,5)='L', (1,5)='I', (2,5)='G', (3,5)='H', (4,5)='T'
// Let's check intersections:
// - SCHOOL at (0,0): (0,0)='S', (0,1)='C', (0,2)='H', (0,3)='O', (0,4)='O', (0,5)='L'
// - SMILE at (0,0): (0,0)='S', (1,0)='M', (2,0)='I', (3,0)='L', (4,0)='E'
// - ICE at (2,0): (2,0)='I', (2,1)='C', (2,2)='E'
// - OPEN at (0,3): (0,3)='O', (1,3)='P', (2,3)='E', (3,3)='N'
// - LION at (3,0): (3,0)='L', (3,1)='I', (3,2)='O', (3,3)='N' -> matches SMILE at (3,0)='L' and OPEN at (3,3)='N'!
// - EASY at (4,0): (4,0)='E', (4,1)='A', (4,2)='S', (4,3)='Y' -> matches SMILE at (4,0)='E'!
// - LIGHT at (0,5): (0,5)='L', (1,5)='I', (2,5)='G', (3,5)='H', (4,5)='T' -> matches SCHOOL at (0,5)='L'!
// 7 words in 6x6! 100% clean!
allPuzzles.push(createPuzzle(
  'a1-6x6-1',
  'Sınıf & Okul Dünyası',
  'A1',
  6,
  'Okul, gülümseme, ışık ve hayvanlarla ilgili zengin bulmaca.',
  [
    { number: 1, direction: 'across', word: 'SCHOOL', clue: 'Öğrencilerin eğitim aldığı kurum (Okul)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'SMILE', clue: 'Mutluyken yüzdeki tebessüm (Gülümsemek)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'OPEN', clue: 'Kapalı olmayan, aralık veya açık', row: 0, col: 3 },
    { number: 3, direction: 'down', word: 'LIGHT', clue: 'Karanlığı aydınlatan parlaklık (Işık)', row: 0, col: 5 },
    { number: 4, direction: 'across', word: 'ICE', clue: 'Suyun donmuş soğuk katı hali (Buz)', row: 2, col: 0 },
    { number: 5, direction: 'across', word: 'LION', clue: 'Ormanların kralı yeleli yırtıcı (Aslan)', row: 3, col: 0 },
    { number: 6, direction: 'across', word: 'EASY', clue: 'Zor olmayan, rahatça yapılan (Kolay)', row: 4, col: 0 }
  ]
));

// --- A1: 6x6 - 2: "Yiyecek & Kahvaltı" ---
// H1: (0,0) B R E A D (Ekmek - 5 letters)
// V1: (0,0) B A N A N A (Muz - 6 letters): (0,0)='B', (1,0)='A', (2,0)='N', (3,0)='A', (4,0)='N', (5,0)='A'
// H2: (2,0) N I G H T (Gece): (2,0)='N', (2,1)='I', (2,2)='G', (2,3)='H', (2,4)='T'
// V2: (0,4) D R I N K (İçmek): (0,4)='D', (1,4)='R', (2,4)='I'? In NIGHT (2,4) is 'T'.
// What starts with D, 3rd letter is T?
// D A T E (Tarih / Hurma): (0,4)='D', (1,4)='A', (2,4)='T', (3,4)='E'!
// In BREAD (0,4) is 'D'. In NIGHT (2,4) is 'T'. DATE fits perfectly!
// And at row 4: (4,0) in BANANA is 'N'.
// H3: (4,0) N E W (Yeni): (4,0)='N', (4,1)='E', (4,2)='W'
// In NIGHT (2,2) is 'G'.
// V3 at col 2: (1,2) E G G (Yumurta): (1,2)='E', (2,2)='G', (3,2)='G'!
// And at (4,2) in NEW is 'W'. V3 ends at row 3 so it doesn't touch row 4!
// In BREAD (0,2) is 'E'. V3 starts at row 1 so it doesn't touch row 0!
// Wait, can V3 start at (0,2)?
// (0,2) in BREAD is 'E'.
// (0,2)='E', (1,2)='G', (2,2)='G' -> EGG!
// But in NIGHT (2,2) is 'G'!
// EGG at (0,2):
// (0,2)='E' in BREAD, (1,2)='G', (2,2)='G' in NIGHT!
// WOW, EGG fits (0,2) to (2,2) and intersects BOTH BREAD and NIGHT!
allPuzzles.push(createPuzzle(
  'a1-6x6-2',
  'Yiyecek & Kahvaltı',
  'A1',
  6,
  'Ekmek, muz, yumurta ve gece gibi lezzetli ve temel sözcükler.',
  [
    { number: 1, direction: 'across', word: 'BREAD', clue: 'Un ve sudan yapılan temel gıda (Ekmek)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'BANANA', clue: 'Sarı kabuklu tatlı tropikal meyve (Muz)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'EGG', clue: 'Kahvaltıda haşlanan veya kızartılan yumurta', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'DATE', clue: 'Günün takvim bilgisi veya tatlı hurma', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'NIGHT', clue: 'Güneş battıktan sonraki karanlık zaman (Gece)', row: 2, col: 0 },
    { number: 5, direction: 'across', word: 'NEW', clue: 'Eski olmayan, taze ve gıcır gıcır (Yeni)', row: 4, col: 0 }
  ]
));

// --- A1: 7x7 - 1: "Büyük Doğa Gezisi" ---
// Size: 7x7
// H1: (0,0) W A T E R (Su - 5)
// V1: (0,0) W I N D O W (Pencere - 6): (0,0)='W', (1,0)='I', (2,0)='N', (3,0)='D', (4,0)='O', (5,0)='W'
// H2: (2,0) N A T U R E (Doğa - 6): (2,0)='N', (2,1)='A', (2,2)='T', (2,3)='U', (2,4)='R', (2,5)='E'
// V2: (0,2) T R E E (Ağaç - 4): (0,2)='T', (1,2)='R', (2,2)='E'? In NATURE (2,2) is 'T'.
// What starts with T, 3rd letter is T?
// T E T ? T O T ?
// What about (0,4) in WATER is 'R'?
// V2 at col 4: R I V E R (Nehir - 5): (0,4)='R', (1,4)='I', (2,4)='V'? In NATURE (2,4) is 'R'.
// What starts with R, 3rd letter is R?
// R E R ?
// What if H2 is at row 2: N E W S (Haberler): (2,0)='N', (2,1)='E', (2,2)='W', (2,3)='S'?
// What if H1 is (0,0) F A R M E R (Çiftçi - 6):
// (0,0)='F', (0,1)='A', (0,2)='R', (0,3)='M', (0,4)='E', (0,5)='R'
// V1: (0,0) F O R E S T (Orman - 6):
// (0,0)='F', (1,0)='O', (2,0)='R', (3,0)='E', (4,0)='S', (5,0)='T'
// H2: (2,0) R I V E R (Nehir - 5):
// (2,0)='R', (2,1)='I', (2,2)='V', (2,3)='E', (2,4)='R'
// Matches FOREST at (2,0)='R'!
// In FARMER (0,4) is 'E'. In RIVER (2,4) is 'R'.
// What starts with E, 3rd letter is R?
// E A R T H (Dünya / Toprak - 5 letters)!
// Let's check EARTH at (0,4):
// (0,4)='E' in FARMER! (1,4)='A', (2,4)='R' in RIVER! (3,4)='T', (4,4)='H'!
// WOW! EARTH connects FARMER and RIVER perfectly!
// And in FOREST at (4,0) is 'S'.
// H3 at row 4: (4,0) S U N (Güneş - 3):
// (4,0)='S', (4,1)='U', (4,2)='N'
// And in FOREST at (5,0) is 'T'.
// H4 at row 5: (5,0) T E A (Çay - 3):
// (5,0)='T', (5,1)='E', (5,2)='A'
allPuzzles.push(createPuzzle(
  'a1-7x7-1',
  'Büyük Doğa Gezisi',
  'A1',
  7,
  'Çiftçi, orman, nehir ve dünya gibi doğanın büyüleyici unsurları.',
  [
    { number: 1, direction: 'across', word: 'FARMER', clue: 'Tarlada ekin ekip hayvan besleyen çiftçi', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'FOREST', clue: 'Ağaçlarla ve canlılarla kaplı ulu orman', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'EARTH', clue: 'Üzerinde yaşadığımız mavi gezegen (Dünya)', row: 0, col: 4 },
    { number: 3, direction: 'across', word: 'RIVER', clue: 'Denize veya göle akan tatlı su akarsuyu (Nehir)', row: 2, col: 0 },
    { number: 4, direction: 'across', word: 'SUN', clue: 'Gökyüzündeki parlak yaşam kaynağı (Güneş)', row: 4, col: 0 },
    { number: 5, direction: 'across', word: 'TEA', clue: 'Sıcak demlenen keyifli içecek (Çay)', row: 5, col: 0 }
  ]
));

// --- A1: 7x7 - 2: "Aile & Şehir Yaşamı" ---
// H1: (0,0) M O T H E R (Anne - 6)
// V1: (0,0) M O R N I N G (Sabah - 7):
// (0,0)='M', (1,0)='O', (2,0)='R', (3,0)='N', (4,0)='I', (5,0)='N', (6,0)='G'
// H2: (2,0) R O O M (Oda - 4): (2,0)='R', (2,1)='O', (2,2)='O', (2,3)='M'
// V2: (0,3) H O M E (Ev - 4): (0,3)='H' in MOTHER, (1,3)='O', (2,3)='M' in ROOM, (3,3)='E'!
// H3: (4,0) I C E (Buz - 3): (4,0)='I' in MORNING, (4,1)='C', (4,2)='E'
// H4: (6,0) G A R D E N (Bahçe - 6):
// (6,0)='G' in MORNING, (6,1)='A', (6,2)='R', (6,3)='D', (6,4)='E', (6,5)='N'
allPuzzles.push(createPuzzle(
  'a1-7x7-2',
  'Aile & Şehir Yaşamı',
  'A1',
  7,
  'Anne, sabah, oda, ev ve bahçe gibi sıcacık aile kavramları.',
  [
    { number: 1, direction: 'across', word: 'MOTHER', clue: 'Bizi sevgiyle büyüten anne', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'MORNING', clue: 'Günün erken başlangıç vakti (Sabah)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'HOME', clue: 'Sıcak aile yuvası (Ev)', row: 0, col: 3 },
    { number: 3, direction: 'across', word: 'ROOM', clue: 'Evin bölümlerinden her biri (Oda)', row: 2, col: 0 },
    { number: 4, direction: 'across', word: 'ICE', clue: 'Donmuş soğuk su kalıbı (Buz)', row: 4, col: 0 },
    { number: 5, direction: 'across', word: 'GARDEN', clue: 'Çiçek ve ağaçların olduğu yeşil bahçe', row: 6, col: 0 }
  ]
));

// =========================================================================
// A2 LEVEL PUZZLES
// =========================================================================

// --- A2: 5x5 - 1: "Seyahat & Kamp" ---
// H1: (0,0) T R I P (Gezi)
// V1: (0,0) T E N T (Çadır): (0,0)='T', (1,0)='E', (2,0)='N', (3,0)='T'
// H2: (2,0) N I C E (Hoş): (2,0)='N', (2,1)='I', (2,2)='C', (2,3)='E'
// In TRIP (0,2) is 'I'. In NICE (2,2) is 'C'.
// V2: (0,2) I C E (Buz): (0,2)='I', (1,2)='C', (2,2)='E'? In NICE (2,2) is 'C'.
// What starts with I, 3rd letter is C?
// I T C H?
// What if H2 is (2,0) N E A R (Yakın): (2,0)='N', (2,1)='E', (2,2)='A', (2,3)='R'?
// In TRIP (0,2) is 'I'.
// What starts with I, 3rd letter is A?
// I D E A (Fikir): (0,2)='I', (1,2)='D', (2,2)='E'? In NEAR (2,2) is 'A'.
// What if H1 is (0,0) P L A N (Plan):
// (0,0)='P', (0,1)='L', (0,2)='A', (0,3)='N'
// V1: (0,0) P A R K (Park): (0,0)='P', (1,0)='A', (2,0)='R', (3,0)='K'
// H2: (2,0) R O A D (Yol): (2,0)='R', (2,1)='O', (2,2)='A', (2,3)='D'
// In PLAN (0,2) is 'A'. In ROAD (2,2) is 'A'.
// V2: (0,2) A U T O (Oto / Araba): (0,2)='A', (1,2)='U', (2,2)='T'? In ROAD (2,2) is 'A'.
// What starts with A, 3rd letter is A?
// A W A Y (Uzakta): (0,2)='A', (1,2)='W', (2,2)='A', (3,2)='Y'!
// Matches PLAN at (0,2)='A' and ROAD at (2,2)='A'!
// And at (3,0) PARK has 'K'.
// H3: (3,0) K E Y (Anahtar): (3,0)='K', (3,1)='E', (3,2)='Y'!
// Matches AWAY at (3,2)='Y'!
// WOW! PLAN, PARK, ROAD, AWAY, KEY! All 100% interconnected!
allPuzzles.push(createPuzzle(
  'a2-5x5-1',
  'Seyahat & Ulaşım',
  'A2',
  5,
  'Planlama, yol, park, uzaklaşma ve anahtar gibi seyahat terimleri.',
  [
    { number: 1, direction: 'across', word: 'PLAN', clue: 'Geziden önce yapılan hazırlık tasarımı (Plan)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'PARK', clue: 'Araç bırakılan alan veya dinlenme bahçesi', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'AWAY', clue: 'Burada olmayan, uzakta ve mesafeli', row: 0, col: 2 },
    { number: 3, direction: 'across', word: 'ROAD', clue: 'Araçların seyahat ettiği kara yolu', row: 2, col: 0 },
    { number: 4, direction: 'across', word: 'KEY', clue: 'Otel odasını veya kapıyı açan anahtar', row: 3, col: 0 }
  ]
));

// --- A2: 5x5 - 2: "Hava Durumu & Deniz" ---
// H1: (0,0) S W I M (Yüzmek)
// V1: (0,0) S A L T (Tuz): (0,0)='S', (1,0)='A', (2,0)='L', (3,0)='T'
// H2: (2,0) L A K E (Göl): (2,0)='L', (2,1)='A', (2,2)='K', (2,3)='E'
// In SWIM (0,1) is 'W'. In LAKE (2,1) is 'A'.
// V2: (0,1) W A R M (Ilık): (0,1)='W', (1,1)='A', (2,1)='R'? In LAKE (2,1) is 'A'.
// What starts with W, 2nd is ?, 3rd is A?
// W H A T? (0,1)='W', (1,1)='H', (2,1)='A', (3,1)='T'!
// In SWIM (0,3) is 'M'. In LAKE (2,3) is 'E'.
// V3: (0,3) M O R E (Daha çok): (0,3)='M', (1,3)='O', (2,3)='R'? In LAKE (2,3) is 'E'.
// What starts with M, 3rd letter is E?
// M E E T (Buluşmak): (0,3)='M', (1,3)='E', (2,3)='E', (3,3)='T'!
// And at row 3:
// (3,0) in SALT is 'T'. (3,1) in WHAT is 'T'. (3,3) in MEET is 'T'.
// Can we have H3: (3,0) T O O T H (Diş)? (3,0)='T', (3,1)='O'? But WHAT has 'T' at (3,1).
// We don't need a word at row 3!
// We have:
// SWIM at (0,0)
// SALT at (0,0)
// WHAT at (0,1)
// LAKE at (2,0)
// MEET at (0,3)
// Intersections:
// - SWIM & SALT at (0,0)='S'
// - SWIM & WHAT at (0,1)='W'
// - SWIM & MEET at (0,3)='M'
// - SALT & LAKE at (2,0)='L'
// - WHAT & LAKE at (2,1)='A'
// - MEET & LAKE at (2,3)='E'
// Beautiful 5-word interlocking grid!
allPuzzles.push(createPuzzle(
  'a2-5x5-2',
  'Hava Durumu & Deniz',
  'A2',
  5,
  'Yüzmek, göl, tuzlu su ve buluşma gibi tatil kelimeleri.',
  [
    { number: 1, direction: 'across', word: 'SWIM', clue: 'Denizde veya havuzda kulaç atmak (Yüzmek)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'SALT', clue: 'Deniz suyuna tadını veren beyaz mineral (Tuz)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'WHAT', clue: 'Soru sormaya yarayan kelime (Ne / Hangisi)', row: 0, col: 1 },
    { number: 3, direction: 'down', word: 'MEET', clue: 'Sahilde arkadaşlarla buluşmak / tanışmak', row: 0, col: 3 },
    { number: 4, direction: 'across', word: 'LAKE', clue: 'Karalarla çevrili durgun tatlı su kütlesi (Göl)', row: 2, col: 0 }
  ]
));

// --- A2: 5x5 - 3: "Alışveriş & Giyim" ---
// H1: (0,0) C O S T (Maliyet)
// V1: (0,0) C O I N (Madeni para): (0,0)='C', (1,0)='O', (2,0)='I', (3,0)='N'
// H2: (2,0) I R O N (Ütü / Demir): (2,0)='I', (2,1)='R', (2,2)='O', (2,3)='N'
// In COST (0,2) is 'S'. In IRON (2,2) is 'O'.
// V2: (0,2) S H O P (Dükkan): (0,2)='S', (1,2)='H', (2,2)='O', (3,2)='P'!
// Matches COST at (0,2)='S' and IRON at (2,2)='O'!
// And at (0,3) COST has 'T'. In IRON (2,3) is 'N'.
// V3: (0,3) T O W N (Kasaba): (0,3)='T', (1,3)='O', (2,3)='W'? In IRON (2,3) is 'N'.
// What starts with T, 3rd letter is N?
// T I N Y (Minik / Küçük): (0,3)='T', (1,3)='I', (2,3)='N', (3,3)='Y'!
// Matches COST at (0,3)='T' and IRON at (2,3)='N'!
allPuzzles.push(createPuzzle(
  'a2-5x5-3',
  'Alışveriş & Giyim',
  'A2',
  5,
  'Fiyat, madeni para, mağaza ve ütü gibi alışveriş kelimeleri.',
  [
    { number: 1, direction: 'across', word: 'COST', clue: 'Bir ürünün bedeli veya maliyeti', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'COIN', clue: 'Cüzdandaki metal bozuk para', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'SHOP', clue: 'Kıyafet ve eşya satılan mağaza / dükkân', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'TINY', clue: 'Oldukça küçük, minik ve ufak', row: 0, col: 3 },
    { number: 4, direction: 'across', word: 'IRON', clue: 'Kıyafetlerin kırışıklığını açan alet (Ütü)', row: 2, col: 0 }
  ]
));

// --- A2: 6x6 - 1: "Meslekler & Kariyer" ---
// H1: (0,0) P I L O T (Pilot - 5)
// V1: (0,0) P H O N E (Telefon - 5): (0,0)='P', (1,0)='H', (2,0)='O', (3,0)='N', (4,0)='E'
// H2: (2,0) O F F I C E (Ofis - 6): (2,0)='O', (2,1)='F', (2,2)='F', (2,3)='I', (2,4)='C', (2,5)='E'
// In PILOT (0,3) is 'O'. In OFFICE (2,3) is 'I'.
// V2: (0,3) O I L (Yağ - 3): (0,3)='O', (1,3)='I', (2,3)='L'? In OFFICE (2,3) is 'I'.
// What starts with O, 3rd letter is I?
// O N I O N ? (0,3)='O', (1,3)='N', (2,3)='I', (3,3)='O', (4,3)='N'!
// ONION (Soğan):
// Matches PILOT at (0,3)='O' and OFFICE at (2,3)='I'!
// And at (4,0) PHONE has 'E'.
// H3: (4,0) E A R N (Para kazanmak - 4): (4,0)='E', (4,1)='A', (4,2)='R', (4,3)='N'!
// Matches ONION at (4,3)='N'!
allPuzzles.push(createPuzzle(
  'a2-6x6-1',
  'Meslekler & Kariyer',
  'A2',
  6,
  'Pilot, telefon, ofis ve emek karşılığı kazanç elde etme.',
  [
    { number: 1, direction: 'across', word: 'PILOT', clue: 'Uçağı gökyüzünde yöneten kaptan', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'PHONE', clue: 'İletişim kurduğumuz akıllı telefon', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'ONION', clue: 'Yemeklere lezzet katan kat kat sebze (Soğan)', row: 0, col: 3 },
    { number: 3, direction: 'across', word: 'OFFICE', clue: 'Masa başı işlerin yürütüldüğü çalışma yeri (Ofis)', row: 2, col: 0 },
    { number: 4, direction: 'across', word: 'EARN', clue: 'Emek vererek para ve hak kazanmak', row: 4, col: 0 }
  ]
));

// --- A2: 6x6 - 2: "Sağlık & Dinlenme" ---
// H1: (0,0) S L E E P (Uyumak - 5)
// V1: (0,0) S M I L E (Gülümsemek - 5): (0,0)='S', (1,0)='M', (2,0)='I', (3,0)='L', (4,0)='E'
// H2: (2,0) I L L (Hasta - 3): (2,0)='I', (2,1)='L', (2,2)='L'
// In SLEEP (0,4) is 'P'.
// V2: (0,4) P A I N (Ağrı / Acı - 4): (0,4)='P', (1,4)='A', (2,4)='I', (3,4)='N'
// H3: (3,0) L E M O N (Limon - 5): (3,0)='L', (3,1)='E', (3,2)='M', (3,3)='O', (3,4)='N'!
// Matches SMILE at (3,0)='L' and PAIN at (3,4)='N'!
// And at (4,0) SMILE has 'E'.
// H4: (4,0) E Y E (Göz - 3): (4,0)='E', (4,1)='Y', (4,2)='E'
allPuzzles.push(createPuzzle(
  'a2-6x6-2',
  'Sağlık & Dinlenme',
  'A2',
  6,
  'Uyku, gülümseme, ağrı ve şifalı limon gibi sağlık sözcükleri.',
  [
    { number: 1, direction: 'across', word: 'SLEEP', clue: 'Yorgunluğu atmak için yatağa yatıp uyumak', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'SMILE', clue: 'Neşeli olunduğunda yüzün aydınlanması', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'PAIN', clue: 'Hastalık anında hissedilen bedensel sızı (Ağrı)', row: 0, col: 4 },
    { number: 3, direction: 'across', word: 'ILL', clue: 'Sağlığı bozulmuş, yatağa düşmüş (Hasta)', row: 2, col: 0 },
    { number: 4, direction: 'across', word: 'LEMON', clue: 'C vitamini deposu sarı ekşi narenciye (Limon)', row: 3, col: 0 },
    { number: 5, direction: 'across', word: 'EYE', clue: 'Çevreyi görmemizi sağlayan duyu organımız (Göz)', row: 4, col: 0 }
  ]
));

// --- A2: 7x7 - 1: "Kültür & Şehirler" ---
// H1: (0,0) M U S E U M (Müze - 6)
// V1: (0,0) M O D E R N (Modern - 6): (0,0)='M', (1,0)='O', (2,0)='D', (3,0)='E', (4,0)='R', (5,0)='N'
// H2: (2,0) D R I V E (Sürmek - 5): (2,0)='D', (2,1)='R', (2,2)='I', (2,3)='V', (2,4)='E'
// In MUSEUM (0,2) is 'S'. In DRIVE (2,2) is 'I'.
// V2: (0,2) S H I P (Gemi - 4): (0,2)='S', (1,2)='H', (2,2)='I', (3,2)='P'
// Matches MUSEUM at (0,2)='S' and DRIVE at (2,2)='I'!
// In DRIVE (2,4) is 'E'.
// V3: (2,4) E N E R G Y (Enerji - 6): (2,4)='E', (3,4)='N', (4,4)='E', (5,4)='R', (6,4)='G', (7,4) out of bounds? size is 7, row 2+6 = 8!
// Let's use 5-letter word starting at (2,4):
// E A R T H (Dünya - 5 letters): (2,4)='E', (3,4)='A', (4,4)='R', (5,4)='T', (6,4)='H'! Fits row 2..6!
// And in MODERN at (4,0) is 'R'.
// H3: (4,0) R O A D (Yol - 4): (4,0)='R', (4,1)='O', (4,2)='A', (4,3)='D'
// (4,2) is 'A', V2 ends at (3,2) so no collision!
allPuzzles.push(createPuzzle(
  'a2-7x7-1',
  'Kültür & Şehirler',
  'A2',
  7,
  'Müze, modern mimari, araba sürme ve dünya gezisi.',
  [
    { number: 1, direction: 'across', word: 'MUSEUM', clue: 'Eski eserlerin korunduğu tarihi sergi mekânı (Müze)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'MODERN', clue: 'Çağdaş, yenilikçi ve günümüze uygun', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'SHIP', clue: 'Kıtalar arası seyahat eden büyük deniz gemisi', row: 0, col: 2 },
    { number: 3, direction: 'across', word: 'DRIVE', clue: 'Direksiyon başına geçip araç kullanmak', row: 2, col: 0 },
    { number: 4, direction: 'down', word: 'EARTH', clue: 'Gezegenimiz, yerküre ve tabiat', row: 2, col: 4 },
    { number: 5, direction: 'across', word: 'ROAD', clue: 'Şehirleri birbirine bağlayan geniş asfalt yol', row: 4, col: 0 }
  ]
));

// --- A2: 7x7 - 2: "Spor & Eğlence" ---
// H1: (0,0) T E N N I S (Tenis - 6)
// V1: (0,0) T R A V E L (Seyahat - 6): (0,0)='T', (1,0)='R', (2,0)='A', (3,0)='V', (4,0)='E', (5,0)='L'
// H2: (2,0) A W A R D (Ödül - 5): (2,0)='A', (2,1)='W', (2,2)='A', (2,3)='R', (2,4)='D'
// In TENNIS (0,3) is 'N'. In AWARD (2,3) is 'R'.
// What starts with N, 3rd letter is R?
// N O R T H (Kuzey - 5 letters): (0,3)='N', (1,3)='O', (2,3)='R', (3,3)='T', (4,3)='H'!
// Matches TENNIS at (0,3)='N' and AWARD at (2,3)='R'!
// In TRAVEL at (4,0) is 'E'.
// H3: (4,0) E A R T H (Dünya - 5)? But at (4,3) NORTH has 'H'.
// Can we have a 4-letter word at (4,0) E A S Y (Kolay)?
// (4,0)='E', (4,1)='A', (4,2)='S', (4,3)='Y'? But NORTH has 'H' at (4,3).
// What 4-letter word starts with E and ends with H?
// E A C H (Her biri - 4 letters): (4,0)='E', (4,1)='A', (4,2)='C', (4,3)='H'!
// Matches TRAVEL at (4,0)='E' and NORTH at (4,3)='H'!
// Perfect!
allPuzzles.push(createPuzzle(
  'a2-7x7-2',
  'Spor & Başarı',
  'A2',
  7,
  'Tenis, seyahat, ödül kazanma ve pusulada kuzey yönü.',
  [
    { number: 1, direction: 'across', word: 'TENNIS', clue: 'Raket ve topla oynanan kort sporu (Tenis)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'TRAVEL', clue: 'Yeni ülkeler keşfetmek için yolculuğa çıkmak', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'NORTH', clue: 'Pusulanın gösterdiği ana yön (Kuzey)', row: 0, col: 3 },
    { number: 3, direction: 'across', word: 'AWARD', clue: 'Yarışmayı kazanan şampiyona verilen kupa / ödül', row: 2, col: 0 },
    { number: 4, direction: 'across', word: 'EACH', clue: 'Gruptaki bireylerin her biri / tek tek', row: 4, col: 0 }
  ]
));

// =========================================================================
// B1 LEVEL PUZZLES
// =========================================================================

// --- B1: 5x5 - 1: "Zihin & Odaklanma" ---
// H1: (0,0) F O C U S (Odaklanmak - 5)
// V1: (0,0) F A C T (Gerçek - 4): (0,0)='F', (1,0)='A', (2,0)='C', (3,0)='T'
// H2: (2,0) C H O I C E (6 too long for 5x5) -> C H A N G E (6 too long)
// 5-letter word: C L E A R (Net / Açık): (2,0)='C', (2,1)='L', (2,2)='E', (2,3)='A', (2,4)='R'
// In FOCUS (0,2) is 'C'. In CLEAR (2,2) is 'E'.
// V2: (0,2) C L E A N (Temiz - 5): (0,2)='C', (1,2)='L', (2,2)='E', (3,2)='A', (4,2)='N'!
// Matches FOCUS at (0,2)='C' and CLEAR at (2,2)='E'!
// In FOCUS (0,4) is 'S'. In CLEAR (2,4) is 'R'.
// V3: (0,4) S T A R T (Başlamak - 5): (0,4)='S', (1,4)='T', (2,4)='A'? In CLEAR (2,4) is 'R'.
// What starts with S, 3rd letter is R?
// S M R ? S P R E A D ?
// What if H2 is C H E C K (Kontrol etmek - 5)?
// (2,0)='C', (2,1)='H', (2,2)='E', (2,3)='C', (2,4)='K'
// In FOCUS (0,4) is 'S'. In CHECK (2,4) is 'K'.
// What starts with S, 3rd letter is K?
// S K I L L (Beceri - 5 letters): (0,4)='S', (1,4)='K', (2,4)='I'? 2nd is K.
// What has S at 0, ? at 1, K at 2?
// S M K ? S N A C K (Atıştırmalık)? S is 0, N is 1, A is 2.
// What about (2,4) S H O C K?
// What if V3 starts with S and has 3rd letter K?
// S P O K E?
// How about (2,4) in CLEAR is 'R'.
// What starts with S, 3rd letter is R?
// S O R R Y (Üzgün - 5 letters): (0,4)='S', (1,4)='O', (2,4)='R', (3,4)='R', (4,4)='Y'!
// Matches FOCUS at (0,4)='S' and CLEAR at (2,4)='R'!
// And at (3,0) FACT has 'T'.
// Can we have H3: (3,0) T R A I N (Tren / Eğitmek - 5 letters)?
// (3,0)='T', (3,1)='R', (3,2)='A', (3,3)='I', (3,4)='N'? But SORRY has 'R' at (3,4).
// What 5-letter word starts with T and ends with R?
// T O W E R (Kule - 5 letters): (3,0)='T', (3,1)='O', (3,2)='W', (3,3)='E', (3,4)='R'!
// But in CLEAN (3,2) is 'A'!
// What 5-letter word starts with T, 3rd is A, 5th is R?
// T O A S T?
// What about T R A K E ?
// We don't even need a 4th horizontal word!
// We have:
// FOCUS at (0,0)
// FACT at (0,0)
// CLEAN at (0,2)
// SORRY at (0,4)
// CLEAR at (2,0)
// 5 words, beautiful symmetry!
allPuzzles.push(createPuzzle(
  'b1-5x5-1',
  'Zihin & Odaklanma',
  'B1',
  5,
  'Odaklanma, somut gerçekler, net düşünce ve temiz zihin.',
  [
    { number: 1, direction: 'across', word: 'FOCUS', clue: 'Tüm dikkati tek bir noktaya toplamak (Odaklanmak)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'FACT', clue: 'Doğruluğu kanıtlanmış somut bilgi (Gerçek)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'CLEAN', clue: 'Kirden ve karmaşadan arınmış (Temiz)', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'SORRY', clue: 'Hata yapıldığında duyulan pişmanlık (Üzgün)', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'CLEAR', clue: 'Şüpheden uzak, anlaşılır ve net', row: 2, col: 0 }
  ]
));

// --- B1: 5x5 - 2: "Girişim & Hedefler" ---
// H1: (0,0) H A B I T (Alışkanlık - 5)
// V1: (0,0) H O P E (Umut - 4): (0,0)='H', (1,0)='O', (2,0)='P', (3,0)='E'
// H2: (2,0) P O I N T (Nokta / Amaç - 5): (2,0)='P', (2,1)='O', (2,2)='I', (2,3)='N', (2,4)='T'
// In HABIT (0,2) is 'B'. In POINT (2,2) is 'I'.
// What starts with B, 3rd letter is I?
// B R I N G (Getirmek - 5 letters): (0,2)='B', (1,2)='R', (2,2)='I', (3,2)='N', (4,2)='G'!
// Matches HABIT at (0,2)='B' and POINT at (2,2)='I'!
// In HABIT (0,4) is 'T'. In POINT (2,4) is 'T'.
// What starts with T, 3rd letter is T?
// T O T A L (Toplam - 5 letters): (0,4)='T', (1,4)='O', (2,4)='T', (3,4)='A', (4,4)='L'!
// Matches HABIT at (0,4)='T' and POINT at (2,4)='T'!
// All 5 words intersect cleanly: HABIT, HOPE, BRING, TOTAL, POINT!
allPuzzles.push(createPuzzle(
  'b1-5x5-2',
  'Girişim & Hedefler',
  'A1',
  5,
  'Alışkanlık edinme, umut, ana hedef ve toplam başarı.',
  [
    { number: 1, direction: 'across', word: 'HABIT', clue: 'Tekrar edilerek kazanılan davranış biçimi (Alışkanlık)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'HOPE', clue: 'Geleceğe dair beslenen iyimser duygu (Umut)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'BRING', clue: 'Bir şeyi yanına alıp ulaştırmak (Getirmek)', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'TOTAL', clue: 'Tüm parçaların toplamı veya eksiksiz yekûn', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'POINT', clue: 'Ulaşılmak istenen ana fikir veya amaç (Nokta)', row: 2, col: 0 }
  ]
));

// --- B1: 5x5 - 3: "Yaratıcılık & Akıl" ---
// H1: (0,0) S M A R T (Zeki - 5)
// V1: (0,0) S K I L L (Beceri - 5): (0,0)='S', (1,0)='K', (2,0)='I', (3,0)='L', (4,0)='L'
// H2: (2,0) I D E A S (Fikirler - 5): (2,0)='I', (2,1)='D', (2,2)='E', (2,3)='A', (2,4)='S'
// In SMART (0,2) is 'A'. In IDEAS (2,2) is 'E'.
// What starts with A, 3rd letter is E?
// A H E A D (İleride - 5 letters): (0,2)='A', (1,2)='H', (2,2)='E', (3,2)='A', (4,2)='D'!
// Matches SMART at (0,2)='A' and IDEAS at (2,2)='E'!
// In SMART (0,4) is 'T'. In IDEAS (2,4) is 'S'.
// What starts with T, 3rd letter is S?
// T A S K S (Görevler - 5 letters): (0,4)='T', (1,4)='A', (2,4)='S', (3,4)='K', (4,4)='S'!
// Matches SMART at (0,4)='T' and IDEAS at (2,4)='S'!
// SMART, SKILL, AHEAD, TASKS, IDEAS! All 5 intersect in a 5x5!
allPuzzles.push(createPuzzle(
  'b1-5x5-3',
  'Yaratıcılık & Akıl',
  'B1',
  5,
  'Zeka, beceri, yaratıcı fikirler ve ileriye dönük görevler.',
  [
    { number: 1, direction: 'across', word: 'SMART', clue: 'Hızlı kavrayan, açıkgöz ve zeki', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'SKILL', clue: 'Ustalıkla yapılan hüner ve el becerisi', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'AHEAD', clue: 'Gelecekte veya önde olan (İleride)', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'TASKS', clue: 'Tamamlanması gereken işler ve vazifeler', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'IDEAS', clue: 'Zihinde parlayan yenilikçi düşünceler (Fikirler)', row: 2, col: 0 }
  ]
));

// --- B1: 6x6 - 1: "Toplum & İletişim" ---
// H1: (0,0) P U B L I C (Halk / Kamusal - 6)
// V1: (0,0) P E O P L E (İnsanlar - 6): (0,0)='P', (1,0)='E', (2,0)='O', (3,0)='P', (4,0)='L', (5,0)='E'
// H2: (2,0) O P I N I O N (7 too long for 6x6)
// 6-letter word: O N L I N E (Çevrim içi - 6): (2,0)='O', (2,1)='N', (2,2)='L', (2,3)='I', (2,4)='N', (2,5)='E'
// In PUBLIC (0,2) is 'B'. In ONLINE (2,2) is 'L'.
// What starts with B, 3rd letter is L?
// B E L I E F (İnanç - 6 letters): (0,2)='B', (1,2)='E', (2,2)='L', (3,2)='I', (4,2)='E', (5,2)='F'!
// Matches PUBLIC at (0,2)='B' and ONLINE at (2,2)='L'!
// In PUBLIC (0,5) is 'C'. In ONLINE (2,5) is 'E'.
// What starts with C, 3rd letter is E?
// C H E C K S (Kontroller - 6 letters): (0,5)='C', (1,5)='H', (2,5)='E', (3,5)='C', (4,5)='K', (5,5)='S'!
// Matches PUBLIC at (0,5)='C' and ONLINE at (2,5)='E'!
// In PEOPLE at (4,0) is 'L'.
// H3: (4,0) L E A D E R (Lider - 6 letters):
// (4,0)='L', (4,1)='E', (4,2)='A'? But in BELIEF (4,2) is 'E'!
// What 6-letter word starts with L and has E at index 2?
// L I E D E R ? L E E C H ?
// What about (4,0) L E E W A Y?
// How about a 5-letter word at (4,0): L E V E L (Seviye)?
// (4,0)='L', (4,1)='E', (4,2)='V'? But in BELIEF (4,2) is 'E'.
// What starts with L and 3rd is E?
// L E E R ?
// We don't need H3! We already have 4 huge 6-letter words:
// PUBLIC, PEOPLE, BELIEF, ONLINE, CHECKS!
allPuzzles.push(createPuzzle(
  'b1-6x6-1',
  'Toplum & İletişim',
  'B1',
  6,
  'Kamuoyu, insanlar, ortak inançlar ve dijital ağlar.',
  [
    { number: 1, direction: 'across', word: 'PUBLIC', clue: 'Toplumu oluşturan halk veya kamusal alan', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'PEOPLE', clue: 'Bir arada yaşayan fertler (İnsanlar)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'BELIEF', clue: 'Kalpten duyulan güven ve inanç', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'CHECKS', clue: 'Düzenli yapılan incelemeler ve denetimler', row: 0, col: 5 },
    { number: 4, direction: 'across', word: 'ONLINE', clue: 'İnternet ağına bağlı ve çevrim içi', row: 2, col: 0 }
  ]
));

// --- B1: 6x6 - 2: "Çevre & Sürdürülebilirlik" ---
// H1: (0,0) E N E R G Y (Enerji - 6)
// V1: (0,0) E A R T H (Dünya - 5): (0,0)='E', (1,0)='A', (2,0)='R', (3,0)='T', (4,0)='H'
// H2: (2,0) R E D U C E (Azaltmak - 6): (2,0)='R', (2,1)='E', (2,2)='D', (2,3)='U', (2,4)='C', (2,5)='E'
// In ENERGY (0,2) is 'E'. In REDUCE (2,2) is 'D'.
// What starts with E, 3rd letter is D?
// E L D E R (Büyük / Yaşlı - 5): (0,2)='E', (1,2)='L', (2,2)='D', (3,2)='E', (4,2)='R'!
// Matches ENERGY at (0,2)='E' and REDUCE at (2,2)='D'!
// In ENERGY (0,4) is 'G'. In REDUCE (2,4) is 'C'.
// What starts with G, 3rd letter is C?
// Wait, can we use col 3?
// In ENERGY (0,3) is 'R'. In REDUCE (2,3) is 'U'.
// What starts with R, 3rd letter is U?
// R E U S E (Tekrar kullanmak - 5): (0,3)='R', (1,3)='E', (2,3)='U', (3,3)='S', (4,3)='E'!
// Matches ENERGY at (0,3)='R' and REDUCE at (2,3)='U'!
// WOW! REUSE is a classic environmental term (Reduce, Reuse, Recycle)!
allPuzzles.push(createPuzzle(
  'b1-6x6-2',
  'Çevre & Doğa Koruma',
  'B1',
  6,
  'Temiz enerji, yerküre, tüketimi azaltma ve yeniden kullanma.',
  [
    { number: 1, direction: 'across', word: 'ENERGY', clue: 'Güneş ve rüzgardan elde edilen temiz güç', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'EARTH', clue: 'Korumamız gereken evimiz olan yerküre', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'ELDER', clue: 'Toplumda tecrübe sahibi saygıdeğer büyükler', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'REUSE', clue: 'Atık üretmemek için bir eşyayı tekrar kullanmak', row: 0, col: 3 },
    { number: 4, direction: 'across', word: 'REDUCE', clue: 'Gereksiz israfı ve tüketimi kısmak / azaltmak', row: 2, col: 0 }
  ]
));

// --- B1: 7x7 - 1: "Bilim & Keşifler" ---
// H1: (0,0) S C I E N C E (Bilim - 7)
// V1: (0,0) S T U D E N T (Öğrenci - 7): (0,0)='S', (1,0)='T', (2,0)='U', (3,0)='D', (4,0)='E', (5,0)='N', (6,0)='T'
// H2: (2,0) U N I V E R S E (8 too long) -> U N I Q U E (Benzersiz - 6): (2,0)='U', (2,1)='N', (2,2)='I', (2,3)='Q', (2,4)='U', (2,5)='E'
// In SCIENCE (0,2) is 'I'. In UNIQUE (2,2) is 'I'.
// What starts with I, 3rd letter is I?
// I N I T I A L (İlk / Başlangıç - 7 letters):
// (0,2)='I', (1,2)='N', (2,2)='I', (3,2)='T', (4,2)='I', (5,2)='A', (6,2)='L'!
// Matches SCIENCE at (0,2)='I' and UNIQUE at (2,2)='I'!
// In SCIENCE (0,5) is 'C'. In UNIQUE (2,5) is 'E'.
// What starts with C, 3rd letter is E?
// C H E M I S T (Kimyager - 7 letters):
// (0,5)='C', (1,5)='H', (2,5)='E', (3,5)='M', (4,5)='I', (5,5)='S', (6,5)='T'!
// Matches SCIENCE at (0,5)='C' and UNIQUE at (2,5)='E'!
// In STUDENT at (4,0) is 'E'.
// H3: (4,0) E X P E R T (Uzman - 6): (4,0)='E', (4,1)='X', (4,2)='P'? But INITIAL has 'I' at (4,2).
// We don't need H3! We have:
// SCIENCE (7), STUDENT (7), INITIAL (7), CHEMIST (7), UNIQUE (6)!
// 5 massive science-themed words with 100% intersection!
allPuzzles.push(createPuzzle(
  'b1-7x7-1',
  'Bilim & Keşifler',
  'B1',
  7,
  'Bilim, öğrenci, başlangıç adımları, kimyager ve benzersiz buluşlar.',
  [
    { number: 1, direction: 'across', word: 'SCIENCE', clue: 'Gözlem ve deneylere dayanan sistematik bilgi (Bilim)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'STUDENT', clue: 'Bilgi peşinde koşan üniversite öğrencisi', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'INITIAL', clue: 'Bir sürecin en başındaki ilk safha', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'CHEMIST', clue: 'Maddelerin yapısını laboratuvarda inceleyen kimyager', row: 0, col: 5 },
    { number: 4, direction: 'across', word: 'UNIQUE', clue: 'Eşi benzeri olmayan, tek ve nev-i şahsına münhasır', row: 2, col: 0 }
  ]
));

// --- B1: 7x7 - 2: "Ekonomi & Proje" ---
// H1: (0,0) P R O J E C T (Proje - 7)
// V1: (0,0) P A R T N E R (Ortak - 7): (0,0)='P', (1,0)='A', (2,0)='R', (3,0)='T', (4,0)='N', (5,0)='E', (6,0)='R'
// H2: (2,0) R E S U L T (Sonuç - 6): (2,0)='R', (2,1)='E', (2,2)='S', (2,3)='U', (2,4)='L', (2,5)='T'
// In PROJECT (0,2) is 'O'. In RESULT (2,2) is 'S'.
// What starts with O, 3rd letter is S?
// O B S E R V E (Gözlemlemek - 7 letters):
// (0,2)='O', (1,2)='B', (2,2)='S', (3,2)='E', (4,2)='R', (5,2)='V', (6,2)='E'!
// Matches PROJECT at (0,2)='O' and RESULT at (2,2)='S'!
// In PROJECT (0,5) is 'C'. In RESULT (2,5) is 'T'.
// What starts with C, 3rd letter is T?
// C A T C H ? C I T Y ? C U T ?
// What if V3 is at col 4?
// In PROJECT (0,4) is 'E'. In RESULT (2,4) is 'L'.
// What starts with E, 3rd letter is L?
// E N L I S T ? E L L ?
// What if col 3?
// In PROJECT (0,3) is 'J'. In RESULT (2,3) is 'U'.
// J U I C E (5)? 2nd is U.
// How about col 1?
// In PROJECT (0,1) is 'R'. In RESULT (2,1) is 'E'.
// R O E ?
// We don't need a 4th vertical word! We have:
// PROJECT (7)
// PARTNER (7)
// OBSERVE (7)
// RESULT (6)
allPuzzles.push(createPuzzle(
  'b1-7x7-2',
  'Girişim & Projeler',
  'B1',
  7,
  'Kapsamlı proje, iş ortağı, gözlem yapma ve nihai sonuç.',
  [
    { number: 1, direction: 'across', word: 'PROJECT', clue: 'Planlı hedeflere ulaşmak için yürütülen çalışma (Proje)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'PARTNER', clue: 'İş veya girişim yolculuğundaki ortak', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'OBSERVE', clue: 'Gelişmeleri dikkatle takip edip gözlemlemek', row: 0, col: 2 },
    { number: 3, direction: 'across', word: 'RESULT', clue: 'Bir çabanın sonucunda elde edilen nihai netice', row: 2, col: 0 }
  ]
));

// =========================================================================
// B2 LEVEL PUZZLES
// =========================================================================

// --- B2: 5x5 - 1: "Psikoloji & Mantık" ---
// H1: (0,0) L O G I C (Mantık - 5)
// V1: (0,0) L E A R N (Öğrenmek - 5): (0,0)='L', (1,0)='E', (2,0)='A', (3,0)='R', (4,0)='N'
// H2: (2,0) A W A R E (Farkında - 5): (2,0)='A', (2,1)='W', (2,2)='A', (2,3)='R', (2,4)='E'
// In LOGIC (0,2) is 'G'. In AWARE (2,2) is 'A'.
// What starts with G, 3rd letter is A?
// G R A C E (Zarafet - 5 letters): (0,2)='G', (1,2)='R', (2,2)='A', (3,2)='C', (4,2)='E'!
// Matches LOGIC at (0,2)='G' and AWARE at (2,2)='A'!
// In LOGIC (0,4) is 'C'. In AWARE (2,4) is 'E'.
// What starts with C, 3rd letter is E?
// C L E A R (Net / Berrak - 5 letters): (0,4)='C', (1,4)='L', (2,4)='E', (3,4)='A', (4,4)='R'!
// Matches LOGIC at (0,4)='C' and AWARE at (2,4)='E'!
allPuzzles.push(createPuzzle(
  'b2-5x5-1',
  'Psikoloji & Mantık',
  'B2',
  5,
  'Mantık, derin öğrenme, farkındalık, zarafet ve netlik.',
  [
    { number: 1, direction: 'across', word: 'LOGIC', clue: 'Doğru düşünme ve tutarlı muhakeme (Mantık)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'LEARN', clue: 'Deneyim ve sorgulamayla yeni kabiliyet kazanmak', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'GRACE', clue: 'Davranışlardaki incelik, asalet ve zarafet', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'CLEAR', clue: 'Kuşkudan uzak, apaçık ve duru', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'AWARE', clue: 'İçinde bulunduğu halin bilincinde ve farkında olan', row: 2, col: 0 }
  ]
));

// --- B2: 5x5 - 2: "Strateji & Analiz" ---
// H1: (0,0) S C O P E (Kapsam - 5)
// V1: (0,0) S C A L E (Ölçek - 5): (0,0)='S', (1,0)='C', (2,0)='A', (3,0)='L', (4,0)='E'
// H2: (2,0) A D A P T (Uyum sağlamak - 5): (2,0)='A', (2,1)='D', (2,2)='A', (2,3)='P', (2,4)='T'
// In SCOPE (0,2) is 'O'. In ADAPT (2,2) is 'A'.
// What starts with O, 3rd letter is A?
// Wait, O _ A _ _ ?
// What if H2 is A U D I T (Denetim - 5)? (2,0)='A', (2,1)='U', (2,2)='D', (2,3)='I', (2,4)='T'
// In SCOPE (0,2) is 'O'. In AUDIT (2,2) is 'D'.
// O R D E R (Düzen / Sipariş - 5): (0,2)='O', (1,2)='R', (2,2)='D', (3,2)='E', (4,2)='R'!
// Matches SCOPE at (0,2)='O' and AUDIT at (2,2)='D'!
// In SCOPE (0,4) is 'E'. In AUDIT (2,4) is 'T'.
// What starts with E, 3rd letter is T?
// E N T E R (Girmek - 5 letters): (0,4)='E', (1,4)='N', (2,4)='T', (3,4)='E', (4,4)='R'!
// Matches SCOPE at (0,4)='E' and AUDIT at (2,4)='T'!
// SCOPE, SCALE, ORDER, ENTER, AUDIT! 100% interconnected!
allPuzzles.push(createPuzzle(
  'b2-5x5-2',
  'Strateji & Analiz',
  'B2',
  5,
  'Kapsam, büyüme ölçeği, iç düzen, denetim ve pazara giriş.',
  [
    { number: 1, direction: 'across', word: 'SCOPE', clue: 'Bir projenin sınırları ve etki alanı (Kapsam)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'SCALE', clue: 'Girişimin büyüme ve genişleme kapasitesi (Ölçek)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'ORDER', clue: 'Sistemli işleyiş, nizam ve intizam', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'ENTER', clue: 'Yeni bir sektöre veya pazara adım atmak', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'AUDIT', clue: 'Finansal kayıtların bağımsız uzmanlarca denetimi', row: 2, col: 0 }
  ]
));

// --- B2: 5x5 - 3: "Karar Alma & İrade" ---
// H1: (0,0) T R U S T (Güven - 5)
// V1: (0,0) T R E N D (Eğilim - 5): (0,0)='T', (1,0)='R', (2,0)='E', (3,0)='N', (4,0)='D'
// H2: (2,0) E X A C T (Tam / Kesin - 5): (2,0)='E', (2,1)='X', (2,2)='A', (2,3)='C', (2,4)='T'
// In TRUST (0,2) is 'U'. In EXACT (2,2) is 'A'.
// What starts with U, 3rd letter is A?
// U N A B L E (6 too long)
// What if H2 is E V E N T (Olay - 5)?
// In TRUST (0,2) is 'U'. In EVENT (2,2) is 'E'.
// What starts with U, 3rd letter is E?
// U S E R S (Kullanıcılar - 5): (0,2)='U', (1,2)='S', (2,2)='E', (3,2)='R', (4,2)='S'!
// Matches TRUST at (0,2)='U' and EVENT at (2,2)='E'!
// In TRUST (0,4) is 'T'. In EVENT (2,4) is 'T'.
// T O T A L (Toplam - 5): (0,4)='T', (1,4)='O', (2,4)='T', (3,4)='A', (4,4)='L'!
// Matches TRUST at (0,4)='T' and EVENT at (2,4)='T'!
allPuzzles.push(createPuzzle(
  'b2-5x5-3',
  'Karar Alma & İrade',
  'B2',
  5,
  'Kalıcı güven, küresel akımlar, kullanıcılar ve somut olaylar.',
  [
    { number: 1, direction: 'across', word: 'TRUST', clue: 'Bir kimseye veya ilkeye sarsılmaz bağlılık (Güven)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'TREND', clue: 'Piyasadaki ve toplumdaki genel yönelim / akım', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'USERS', clue: 'Platformu aktif deneyimleyen kitle (Kullanıcılar)', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'TOTAL', clue: 'Bütün bileşenlerin eksiksiz yekûnu', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'EVENT', clue: 'Önemli dönüm noktası teşkil eden vaka / olay', row: 2, col: 0 }
  ]
));

// --- B2: 6x6 - 1: "Liderlik & Vizyon" ---
// H1: (0,0) I M P A C T (Etki - 6)
// V1: (0,0) I N V E S T (Yatırım yapmak - 6): (0,0)='I', (1,0)='N', (2,0)='V', (3,0)='E', (4,0)='S', (5,0)='T'
// H2: (2,0) V I S I O N (Vizyon - 6): (2,0)='V', (2,1)='I', (2,2)='S', (2,3)='I', (2,4)='O', (2,5)='N'
// In IMPACT (0,2) is 'P'. In VISION (2,2) is 'S'.
// What starts with P, 3rd letter is S?
// P O S T E R ? P A S S E D ?
// What if H2 is V A L U E S (Değerler - 6)? (2,0)='V', (2,1)='A', (2,2)='L', (2,3)='U', (2,4)='E', (2,5)='S'
// In IMPACT (0,2) is 'P'. In VALUES (2,2) is 'L'.
// P O L I C Y (Politika - 6 letters): (0,2)='P', (1,2)='O', (2,2)='L', (3,2)='I', (4,2)='C', (5,2)='Y'!
// Matches IMPACT at (0,2)='P' and VALUES at (2,2)='L'!
// In IMPACT (0,4) is 'C'. In VALUES (2,4) is 'E'.
// What starts with C, 3rd letter is E?
// C L E V E R (Akıllı - 6): (0,4)='C', (1,4)='L', (2,4)='E', (3,4)='V', (4,4)='E', (5,4)='R'!
// Matches IMPACT at (0,4)='C' and VALUES at (2,4)='E'!
// IMPACT, INVEST, POLICY, CLEVER, VALUES! 100% interconnected!
allPuzzles.push(createPuzzle(
  'b2-6x6-1',
  'Liderlik & Vizyon',
  'B2',
  6,
  'Kalıcı etki bırakma, stratejik yatırım, ilkeler ve kurumsal değerler.',
  [
    { number: 1, direction: 'across', word: 'IMPACT', clue: 'Derin iz bırakan dönüştürücü tesir (Etki)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'INVEST', clue: 'Geleceğe kaynak ve sermaye aktarmak (Yatırım)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'POLICY', clue: 'Karar alma süreçlerini belirleyen resmi ilke (Politika)', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'CLEVER', clue: 'Karmaşık engelleri ustalıkla aşan (Akıllı)', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'VALUES', clue: 'Kurumun ve bireyin pusulası olan ahlaki değerler', row: 2, col: 0 }
  ]
));

// --- B2: 6x6 - 2: "Bilişsel Esneklik" ---
// H1: (0,0) R E A S O N (Akıl / Neden - 6)
// V1: (0,0) R E M I N D (Hatırlatmak - 6): (0,0)='R', (1,0)='E', (2,0)='M', (3,0)='I', (4,0)='N', (5,0)='D'
// H2: (2,0) M E T H O D (Yöntem - 6): (2,0)='M', (2,1)='E', (2,2)='T', (2,3)='H', (2,4)='O', (2,5)='D'
// In REASON (0,2) is 'A'. In METHOD (2,2) is 'T'.
// What starts with A, 3rd letter is T?
// A C T I O N (Eylem - 6 letters): (0,2)='A', (1,2)='C', (2,2)='T', (3,2)='I', (4,2)='O', (5,2)='N'!
// Matches REASON at (0,2)='A' and METHOD at (2,2)='T'!
// In REASON (0,4) is 'O'. In METHOD (2,4) is 'O'.
// What starts with O, 3rd letter is O?
// No common word.
// What if col 3?
// In REASON (0,3) is 'S'. In METHOD (2,3) is 'H'.
// S C H O O L (6): (0,3)='S', (1,3)='C', (2,3)='H', (3,3)='O', (4,3)='O', (5,3)='L'!
// Matches REASON at (0,3)='S' and METHOD at (2,3)='H'!
// REASON, REMIND, ACTION, SCHOOL, METHOD!
allPuzzles.push(createPuzzle(
  'b2-6x6-2',
  'Bilişsel Esneklik',
  'B2',
  6,
  'Mantık yürütme, hafızayı tazeleme, eyleme geçme ve sistematik metot.',
  [
    { number: 1, direction: 'across', word: 'REASON', clue: 'Mantıklı düşünme gücü veya bir olayın gerekçesi (Akıl)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'REMIND', clue: 'Unutulan bir hakikati akla getirmek (Hatırlatmak)', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'ACTION', clue: 'Kararları fiiliyata dökme hamlesi (Eylem)', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'SCHOOL', clue: 'Düşünce ekolü veya kurumsal akademi', row: 0, col: 3 },
    { number: 4, direction: 'across', word: 'METHOD', clue: 'Bir amaca ulaşmak için izlenen bilimsel yol (Metot)', row: 2, col: 0 }
  ]
));

// --- B2: 7x7 - 1: "Küresel Ekonomi & İklim" ---
// H1: (0,0) C L I M A T E (İklim - 7)
// V1: (0,0) C A P I T A L (Sermaye / Başkent - 7): (0,0)='C', (1,0)='A', (2,0)='P', (3,0)='I', (4,0)='T', (5,0)='A', (6,0)='L'
// H2: (2,0) P R O F I L E (Profil - 7): (2,0)='P', (2,1)='R', (2,2)='O', (2,3)='F', (2,4)='I', (2,5)='L', (2,6)='E'
// In CLIMATE (0,2) is 'I'. In PROFILE (2,2) is 'O'.
// What starts with I, 3rd letter is O?
// I R O N I C (İronik - 6): (0,2)='I', (1,2)='R', (2,2)='O', (3,2)='N', (4,2)='I', (5,2)='C'!
// Matches CLIMATE at (0,2)='I' and PROFILE at (2,2)='O'!
// In CLIMATE (0,4) is 'A'. In PROFILE (2,4) is 'I'.
// What starts with A, 3rd letter is I?
// A B I L I T Y (Yetenek - 7 letters):
// (0,4)='A', (1,4)='B', (2,4)='I', (3,4)='L', (4,4)='I', (5,4)='T', (6,4)='Y'!
// Matches CLIMATE at (0,4)='A' and PROFILE at (2,4)='I'!
// CLIMATE, CAPITAL, IRONIC, ABILITY, PROFILE!
allPuzzles.push(createPuzzle(
  'b2-7x7-1',
  'Küresel Ekonomi & İklim',
  'B2',
  7,
  'İklim dinamikleri, küresel sermaye, yetenek yönetimi ve kurumsal profil.',
  [
    { number: 1, direction: 'across', word: 'CLIMATE', clue: 'Gezegenin uzun vadeli atmosferik dengesi (İklim)', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'CAPITAL', clue: 'Girişimleri büyüten finansal ana sermaye', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'IRONIC', clue: 'Beklenenin tersi bir tezat barındıran durum (İronik)', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'ABILITY', clue: 'Bir işi yüksek başarıyla tamamlama kabiliyeti (Yetenek)', row: 0, col: 4 },
    { number: 4, direction: 'across', word: 'PROFILE', clue: 'Bir kurumun veya bireyin uzmanlık özeti (Profil)', row: 2, col: 0 }
  ]
));

// --- B2: 7x7 - 2: "Felsefe & Adalet" ---
// H1: (0,0) C U L T U R E (Kültür - 7)
// V1: (0,0) C O N C E P T (Kavram - 7): (0,0)='C', (1,0)='O', (2,0)='N', (3,0)='C', (4,0)='E', (5,0)='P', (6,0)='T'
// H2: (2,0) N A T I O N S (Uluslar - 7): (2,0)='N', (2,1)='A', (2,2)='T', (2,3)='I', (2,4)='O', (2,5)='N', (2,6)='S'
// In CULTURE (0,2) is 'L'. In NATIONS (2,2) is 'T'.
// What starts with L, 3rd letter is T?
// L A T E S T (En son / Güncel - 6): (0,2)='L', (1,2)='A', (2,2)='T', (3,2)='E', (4,2)='S', (5,2)='T'!
// Matches CULTURE at (0,2)='L' and NATIONS at (2,2)='T'!
// In CULTURE (0,5) is 'R'. In NATIONS (2,5) is 'N'.
// What starts with R, 3rd letter is N?
// R U N N E R (Koşucu - 6): (0,5)='R', (1,5)='U', (2,5)='N', (3,5)='N', (4,5)='E', (5,5)='R'!
// Matches CULTURE at (0,5)='R' and NATIONS at (2,5)='N'!
allPuzzles.push(createPuzzle(
  'b2-7x7-2',
  'Felsefe & Adalet',
  'B2',
  7,
  'Kültür mirası, soyut kavramlar, uluslar ve en güncel ilkeler.',
  [
    { number: 1, direction: 'across', word: 'CULTURE', clue: 'Toplumun asırlar boyu biriktirdiği sanat ve ahlak mirası', row: 0, col: 0 },
    { number: 1, direction: 'down', word: 'CONCEPT', clue: 'Zihinde şekillenen soyut fikir veya temel kavram', row: 0, col: 0 },
    { number: 2, direction: 'down', word: 'LATEST', clue: 'Zaman olarak en yeni ve güncel olan', row: 0, col: 2 },
    { number: 3, direction: 'down', word: 'RUNNER', clue: 'Hedeften sapmadan koşan atlet / öncü', row: 0, col: 5 },
    { number: 4, direction: 'across', word: 'NATIONS', clue: 'Dünya sahnesindeki egemen toplumlar (Uluslar)', row: 2, col: 0 }
  ]
));

console.log(`Generated ${allPuzzles.length} verified puzzles!`);

const tsContent = `// src/puzzleData.ts
// Comprehensive verified Crossword / Kare Bulmaca Dataset for English Learning App

export interface PuzzleClue {
  id: string; // e.g., '1-across', '2-down'
  number: number;
  direction: 'across' | 'down';
  word: string; // UPPERCASE
  clue: string; // Turkish clue
  row: number; // 0-based
  col: number; // 0-based
  length: number;
}

export interface PuzzleDefinition {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  size: 5 | 6 | 7;
  description: string;
  clues: PuzzleClue[];
}

export const PUZZLES: PuzzleDefinition[] = ${JSON.stringify(allPuzzles, null, 2)};

export const PUZZLE_LEVELS: ('A1' | 'A2' | 'B1' | 'B2')[] = ['A1', 'A2', 'B1', 'B2'];
export const PUZZLE_SIZES: (5 | 6 | 7)[] = [5, 6, 7];

export interface CompletedPuzzleRecord {
  puzzleId: string;
  completedAt: number;
  secondsTaken: number;
  score: number;
  hintsUsed: number;
}

export function getPuzzlesByLevelAndSize(level: 'A1' | 'A2' | 'B1' | 'B2', size?: 5 | 6 | 7): PuzzleDefinition[] {
  return PUZZLES.filter(p => p.level === level && (size ? p.size === size : true));
}

export function getPuzzleById(id: string): PuzzleDefinition | undefined {
  return PUZZLES.find(p => p.id === id);
}
`;

fs.writeFileSync(path.join(__dirname, '../src/puzzleData.ts'), tsContent, 'utf8');
console.log('Successfully wrote src/puzzleData.ts with zero errors!');
