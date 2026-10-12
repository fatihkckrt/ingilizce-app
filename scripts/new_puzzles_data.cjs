// scripts/new_puzzles_data.cjs
// 20 Brand new verified Crossword puzzles with diverse vocabulary across A1, A2, B1, B2

const NEW_WORD_SENSES = {
  // A1 additions
  MILK: [
    { pos: 'i.', posName: 'İsim', meaning: 'süt' },
    { pos: 'f.', posName: 'Fiil', meaning: 'sağmak' }
  ],
  MEAT: [
    { pos: 'i.', posName: 'İsim', meaning: 'et, yiyecek' }
  ],
  RICE: [
    { pos: 'i.', posName: 'İsim', meaning: 'pirinç, pilav' }
  ],
  WARM: [
    { pos: 's.', posName: 'Sıfat', meaning: 'ılık, sıcakkanlı, samimi' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ısıtmak, ısınmak' }
  ],
  DEAL: [
    { pos: 'i.', posName: 'İsim', meaning: 'anlaşma, uzlaşma, pazarlık' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ilgilenmek, dağıtmak, ticaret yapmak' }
  ],
  PARK: [
    { pos: 'i.', posName: 'İsim', meaning: 'park, yeşil alan' },
    { pos: 'f.', posName: 'Fiil', meaning: 'araba park etmek' }
  ],
  DIP: [
    { pos: 'f.', posName: 'Fiil', meaning: 'batırmak, daldırmak' },
    { pos: 'i.', posName: 'İsim', meaning: 'düşüş, sos' }
  ],
  ERA: [
    { pos: 'i.', posName: 'İsim', meaning: 'çağ, devir, dönem' }
  ],
  LIKE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'beğenmek, hoşlanmak' },
    { pos: 'e.', posName: 'Edat', meaning: 'gibi, benzer' }
  ],
  DESK: [
    { pos: 'i.', posName: 'İsim', meaning: 'çalışma masası, sıra' }
  ],
  PEN: [
    { pos: 'i.', posName: 'İsim', meaning: 'tükenmez kalem' }
  ],
  END: [
    { pos: 'i.', posName: 'İsim', meaning: 'son, uç, bitiş' },
    { pos: 'f.', posName: 'Fiil', meaning: 'bitirmek, sona ermek' }
  ],
  BED: [
    { pos: 'i.', posName: 'İsim', meaning: 'yatak, karyola' }
  ],
  RED: [
    { pos: 's.', posName: 'Sıfat', meaning: 'kırmızı, al' },
    { pos: 'i.', posName: 'İsim', meaning: 'kırmızı renk' }
  ],
  SUN: [
    { pos: 'i.', posName: 'İsim', meaning: 'güneş' }
  ],
  SEA: [
    { pos: 'i.', posName: 'İsim', meaning: 'deniz' }
  ],
  AIR: [
    { pos: 'i.', posName: 'İsim', meaning: 'hava, atmosfer' },
    { pos: 'f.', posName: 'Fiil', meaning: 'havalandırmak' }
  ],
  SKY: [
    { pos: 'i.', posName: 'İsim', meaning: 'gökyüzü, sema' }
  ],
  STAR: [
    { pos: 'i.', posName: 'İsim', meaning: 'yıldız' },
    { pos: 'f.', posName: 'Fiil', meaning: 'başrolde oynamak' }
  ],
  TREE: [
    { pos: 'i.', posName: 'İsim', meaning: 'ağaç' }
  ],
  LEAF: [
    { pos: 'i.', posName: 'İsim', meaning: 'yaprak; sayfa' }
  ],
  WOOD: [
    { pos: 'i.', posName: 'İsim', meaning: 'ahşap, tahta; koruluk, orman' }
  ],
  DOOR: [
    { pos: 'i.', posName: 'İsim', meaning: 'kapı' }
  ],
  WALL: [
    { pos: 'i.', posName: 'İsim', meaning: 'duvar, sur' }
  ],
  ROOM: [
    { pos: 'i.', posName: 'İsim', meaning: 'oda; yer, boşluk' }
  ],
  ROOF: [
    { pos: 'i.', posName: 'İsim', meaning: 'çatı, tavan' }
  ],
  COLD: [
    { pos: 's.', posName: 'Sıfat', meaning: 'soğuk' },
    { pos: 'i.', posName: 'İsim', meaning: 'soğukluk; soğuk algınlığı' }
  ],
  WINTER: [
    { pos: 'i.', posName: 'İsim', meaning: 'kış mevsimi' }
  ],
  SNOW: [
    { pos: 'i.', posName: 'İsim', meaning: 'kar' },
    { pos: 'f.', posName: 'Fiil', meaning: 'kar yağmak' }
  ],
  WIND: [
    { pos: 'i.', posName: 'İsim', meaning: 'rüzgar, esinti' },
    { pos: 'f.', posName: 'Fiil', meaning: 'sarmak, dolamak' }
  ],
  RAIN: [
    { pos: 'i.', posName: 'İsim', meaning: 'yağmur' },
    { pos: 'f.', posName: 'Fiil', meaning: 'yağmur yağmak' }
  ],
  MOON: [
    { pos: 'i.', posName: 'İsim', meaning: 'ay' }
  ],
  NIGHT: [
    { pos: 'i.', posName: 'İsim', meaning: 'gece' }
  ],
  LIGHT: [
    { pos: 'i.', posName: 'İsim', meaning: 'ışık, aydınlık' },
    { pos: 's.', posName: 'Sıfat', meaning: 'hafif; açık renkli' },
    { pos: 'f.', posName: 'Fiil', meaning: 'yakmak, aydınlatmak' }
  ],
  DARK: [
    { pos: 's.', posName: 'Sıfat', meaning: 'karanlık, koyu' },
    { pos: 'i.', posName: 'İsim', meaning: 'karanlık' }
  ],

  // A2 additions
  HOTEL: [
    { pos: 'i.', posName: 'İsim', meaning: 'otel, konaklama tesisi' }
  ],
  REST: [
    { pos: 'f.', posName: 'Fiil', meaning: 'dinlenmek, mola vermek' },
    { pos: 'i.', posName: 'İsim', meaning: 'dinlenme, istirahat; geri kalan' }
  ],
  STAY: [
    { pos: 'f.', posName: 'Fiil', meaning: 'kalmak, konaklamak, sürdürmek' },
    { pos: 'i.', posName: 'İsim', meaning: 'kalış, konaklama' }
  ],
  TRIP: [
    { pos: 'i.', posName: 'İsim', meaning: 'gezi, seyahat, yolculuk' },
    { pos: 'f.', posName: 'Fiil', meaning: 'tökezlemek' }
  ],
  TOUR: [
    { pos: 'i.', posName: 'İsim', meaning: 'tur, gezi' },
    { pos: 'f.', posName: 'Fiil', meaning: 'turlamak, gezmek' }
  ],
  TRAIN: [
    { pos: 'i.', posName: 'İsim', meaning: 'tren' },
    { pos: 'f.', posName: 'Fiil', meaning: 'eğitmek, antrenman yapmak' }
  ],
  TRACK: [
    { pos: 'i.', posName: 'İsim', meaning: 'ray, pist, iz' },
    { pos: 'f.', posName: 'Fiil', meaning: 'takip etmek, iz sürmek' }
  ],
  TICKET: [
    { pos: 'i.', posName: 'İsim', meaning: 'bilet, ceza makbuzu' }
  ],
  DOCTOR: [
    { pos: 'i.', posName: 'İsim', meaning: 'doktor, hekim' }
  ],
  NURSE: [
    { pos: 'i.', posName: 'İsim', meaning: 'hemşire' },
    { pos: 'f.', posName: 'Fiil', meaning: 'bakmak, emzirmek' }
  ],
  CARE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'önemsemek, ilgilenmek' },
    { pos: 'i.', posName: 'İsim', meaning: 'bakım, özen, dikkat' }
  ],
  HEALTH: [
    { pos: 'i.', posName: 'İsim', meaning: 'sağlık, sıhhat' }
  ],
  MEDIC: [
    { pos: 'i.', posName: 'İsim', meaning: 'sağlık görevlisi, hekim' }
  ],
  NEWS: [
    { pos: 'i.', posName: 'İsim', meaning: 'haberler, havadis' }
  ],
  RADIO: [
    { pos: 'i.', posName: 'İsim', meaning: 'radyo' }
  ],
  MEDIA: [
    { pos: 'i.', posName: 'İsim', meaning: 'medya, basın-yayın' }
  ],
  CAMP: [
    { pos: 'i.', posName: 'İsim', meaning: 'kamp, çadır alanı' },
    { pos: 'f.', posName: 'Fiil', meaning: 'kamp kurmak' }
  ],
  HIKE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'doğa yürüyüşü yapmak' },
    { pos: 'i.', posName: 'İsim', meaning: 'uzun doğa yürüyüşü; zam, artış' }
  ],
  TENT: [
    { pos: 'i.', posName: 'İsim', meaning: 'çadır' }
  ],
  FOREST: [
    { pos: 'i.', posName: 'İsim', meaning: 'orman' }
  ],

  // B1 additions
  SKILL: [
    { pos: 'i.', posName: 'İsim', meaning: 'beceri, maharet, uzmanlık' }
  ],
  SMART: [
    { pos: 's.', posName: 'Sıfat', meaning: 'akıllı, zeki, şık' }
  ],
  LEARN: [
    { pos: 'f.', posName: 'Fiil', meaning: 'öğrenmek, bilgi edinmek' }
  ],
  TRADE: [
    { pos: 'i.', posName: 'İsim', meaning: 'ticaret, alım-satım, meslek' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ticaret yapmak, takas etmek' }
  ],
  PRICE: [
    { pos: 'i.', posName: 'İsim', meaning: 'fiyat, bedel, eder' },
    { pos: 'f.', posName: 'Fiil', meaning: 'fiyat belirlemek' }
  ],
  VALUE: [
    { pos: 'i.', posName: 'İsim', meaning: 'değer, kıymet' },
    { pos: 'f.', posName: 'Fiil', meaning: 'değer biçmek, değer vermek' }
  ],
  STOCK: [
    { pos: 'i.', posName: 'İsim', meaning: 'hisse senedi; stok, mal mevcudu' },
    { pos: 'f.', posName: 'Fiil', meaning: 'stoklamak' }
  ],
  SYSTEM: [
    { pos: 'i.', posName: 'İsim', meaning: 'sistem, düzen, mekanizma' }
  ],
  DATA: [
    { pos: 'i.', posName: 'İsim', meaning: 'veri, bilgiler' }
  ],
  CODE: [
    { pos: 'i.', posName: 'İsim', meaning: 'kod, şifre, kurallar' },
    { pos: 'f.', posName: 'Fiil', meaning: 'kodlamak, programlamak' }
  ],
  DESIGN: [
    { pos: 'i.', posName: 'İsim', meaning: 'tasarım, dizayn, plan' },
    { pos: 'f.', posName: 'Fiil', meaning: 'tasarlamak, planlamak' }
  ],
  STYLE: [
    { pos: 'i.', posName: 'İsim', meaning: 'stil, tarz, biçim' },
    { pos: 'f.', posName: 'Fiil', meaning: 'şekil vermek, biçimlendirmek' }
  ],
  CRAFT: [
    { pos: 'i.', posName: 'İsim', meaning: 'zanaat, el sanatı, beceri; taşıt' },
    { pos: 'f.', posName: 'Fiil', meaning: 'özenle yapmak' }
  ],
  MANAGE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'yönetmek, idare etmek, başarmak' }
  ],
  OFFICE: [
    { pos: 'i.', posName: 'İsim', meaning: 'ofis, büro, makam' }
  ],
  TEAM: [
    { pos: 'i.', posName: 'İsim', meaning: 'takım, ekip' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ekip oluşturmak, işbirliği yapmak' }
  ],
  LEADER: [
    { pos: 'i.', posName: 'İsim', meaning: 'lider, önder, rehber' }
  ],

  // B2 additions
  ETHICS: [
    { pos: 'i.', posName: 'İsim', meaning: 'etik, ahlak felsefesi' }
  ],
  MORAL: [
    { pos: 's.', posName: 'Sıfat', meaning: 'ahlaki, manevi' },
    { pos: 'i.', posName: 'İsim', meaning: 'çıkarılan ders, ana fikir' }
  ],
  RIGHT: [
    { pos: 's.', posName: 'Sıfat', meaning: 'doğru, haklı, sağ' },
    { pos: 'i.', posName: 'İsim', meaning: 'hak, hukuk; sağ taraf' },
    { pos: 'zf.', posName: 'Zarf', meaning: 'hemen, tam olarak' }
  ],
  LEGACY: [
    { pos: 'i.', posName: 'İsim', meaning: 'miras, kalıt, geçmişten kalan değer' }
  ],
  ROOTS: [
    { pos: 'i.', posName: 'İsim', meaning: 'kökler, köken, asıl' }
  ],
  PAST: [
    { pos: 'i.', posName: 'İsim', meaning: 'geçmiş, mazi' },
    { pos: 's.', posName: 'Sıfat', meaning: 'geçmiş, önceki' },
    { pos: 'e.', posName: 'Edat', meaning: 'ötesinde, geçe' }
  ],
  THEORY: [
    { pos: 'i.', posName: 'İsim', meaning: 'teori, kuram' }
  ],
  PROOF: [
    { pos: 'i.', posName: 'İsim', meaning: 'kanıt, delil, ispat' },
    { pos: 's.', posName: 'Sıfat', meaning: 'geçirmez, dayanıklı' }
  ],
  LOGIC: [
    { pos: 'i.', posName: 'İsim', meaning: 'mantık, muhakeme' }
  ],
  TREATY: [
    { pos: 'i.', posName: 'İsim', meaning: 'antlaşma, sözleşme, pakt' }
  ],
  PEACE: [
    { pos: 'i.', posName: 'İsim', meaning: 'barış, huzur, sükunet' }
  ],
  POWER: [
    { pos: 'i.', posName: 'İsim', meaning: 'güç, kudret, iktidar, enerji' },
    { pos: 'f.', posName: 'Fiil', meaning: 'güç vermek, çalıştırmak' }
  ],
  JUSTICE: [
    { pos: 'i.', posName: 'İsim', meaning: 'adalet, hakkaniyet, yargı' }
  ],
  TRIAL: [
    { pos: 'i.', posName: 'İsim', meaning: 'duruşma, mahkeme; deneme, sınav' },
    { pos: 'f.', posName: 'Fiil', meaning: 'denemek, test etmek' }
  ],
  COURT: [
    { pos: 'i.', posName: 'İsim', meaning: 'mahkeme; kort, avlu; saray' }
  ],
  JUDGE: [
    { pos: 'i.', posName: 'İsim', meaning: 'yargıç, hakim' },
    { pos: 'f.', posName: 'Fiil', meaning: 'yargılamak, hüküm vermek' }
  ]
};

// 20 Validated Puzzles: 5 per Level
const NEW_PUZZLES = [
  // --- A1: 5x5 - 4: "Masa & Çalışma" ---
  {
    id: 'a1-5x5-4',
    title: 'Masa & Okuma',
    level: 'A1',
    size: 5,
    description: 'Çalışma masası, kitaplar, anlaşma ve dinlenme parkı.',
    clues: [
      { number: 1, direction: 'across', word: 'DEAL', clue: 'Anlaşma, uzlaşma veya ticaret', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'PARK', clue: 'Yeşil dinlenme alanı veya araba park etmek', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'DIP', clue: 'Sos veya batırıp çıkarmak', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ERA', clue: 'Önemli bir tarihi çağ veya dönem', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'LIKE', clue: 'Beğenmek, hoşlanmak veya gibi', row: 0, col: 3 }
    ]
  },

  // --- A1: 5x5 - 5: "Mutfak & Kahvaltı" ---
  // (0,0) M I L K -> MILK (4)
  // (2,0) E G G   -> EGG (3)
  // (0,0) M (1,0) E (2,0) E? No, MEAT is (0,0) M (1,0) E (2,0) A (3,0) T -> at (2,0) is 'A'!
  // Let's use:
  // H1: (0,0) C A T
  // H2: (2,0) R E D
  // V1: (0,0) C A R: (0,0)='C', (1,0)='A', (2,0)='R' -> matches CAT and RED!
  // V2: (0,1) A I R: (0,1)='A', (1,1)='I', (2,1)='R'? in RED (2,1) is 'E'!
  // In RED (2,1) is 'E'. What word has (0,1)='A', (1,1)=?, (2,1)='E'?
  // A G E ! (0,1)='A', (1,1)='G', (2,1)='E'!
  // Matches CAT at (0,1)='A' and RED at (2,1)='E'!
  // And at (0,2): in CAT (0,2) is 'T', in RED (2,2) is 'D'.
  // T E D ? Or T O D ? Or (0,2)='T', (1,2)='W', (2,2)='O' -> T W O!
  // If (2,2) is 'O', then H2 is R O O M? (2,0)='R', (2,1)='O', (2,2)='O', (2,3)='M'!
  // Then V2 at (0,1)='A', (1,1)=?, (2,1)='O' -> A G O! (0,1)='A', (1,1)='G', (2,1)='O'!
  // And V1 at (0,0)='C', (1,0)='A', (2,0)='R' -> C A R!
  // And V3 at (0,2)='T', (1,2)='W', (2,2)='O' -> T W O!
  // Let's check:
  // H1: (0,0) C A T
  // H2: (2,0) R O O M
  // V1: (0,0) C A R
  // V2: (0,1) A G O
  // V3: (0,2) T W O
  // Row 1 would have: (1,0)='A', (1,1)='G', (1,2)='W' -> no need for across at row 1!
  {
    id: 'a1-5x5-5',
    title: 'Şehir & Zaman',
    level: 'A1',
    size: 5,
    description: 'Evcil hayvan kedi, araba, oda, geçmiş zaman ve sayılar.',
    clues: [
      { number: 1, direction: 'across', word: 'CAT', clue: 'Evcil sevimli kedi', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'ROOM', clue: 'Evdeki ferah oda veya yer', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'CAR', clue: 'Ulaşımda kullanılan otomobil veya araba', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'AGO', clue: 'Önce, geçmişte kalan zaman dilimi', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'TWO', clue: 'Birden sonra gelen çift sayı (2)', row: 0, col: 2 }
    ]
  },

  // --- A1: 6x6 - 3: "Ağaç & Doğa" ---
  // H1: (0,0) T R E E (4)
  // V1: (0,0) T I M E (4): (0,0)='T', (1,0)='I', (2,0)='M', (3,0)='E'
  // H2: (2,0) M O O N (4): (2,0)='M', (2,1)='O', (2,2)='O', (2,3)='N'
  // In TREE (0,2)='E', in MOON (2,2)='O'.
  // Is there a word (0,2)='E', (1,2)='G', (2,2)='O' -> E G O!
  // In TREE (0,3)='E', in MOON (2,3)='N'.
  // Is there a word (0,3)='E', (1,3)='N', (2,3)='D' -> E N D? In MOON (2,3) is 'N'!
  // What word has (0,3)='E', (1,3)=?, (2,3)='N'?
  // E V E N ! (0,3)='E', (1,3)='V', (2,3)='E'? No, E A R N: (0,3)='E', (1,3)='A', (2,3)='R'? in MOON (2,3) is 'N'!
  // How about E U R O ?
  // What about E L E V E N ?
  // What 3-letter word starts with E and ends with N?
  // E U N? No: (0,1) in TREE is 'R', in MOON (2,1) is 'O'.
  // R O O F! (0,1)='R', (1,1)='O', (2,1)='O', (3,1)='F'!
  // Matches TREE at (0,1)='R' and MOON at (2,1)='O'!
  // Let's check:
  // H1: (0,0) T R E E
  // H2: (2,0) M O O N
  // V1: (0,0) T I M E: (0,0)='T', (1,0)='I', (2,0)='M', (3,0)='E' -> matches TREE and MOON!
  // V2: (0,1) R O O F: (0,1)='R', (1,1)='O', (2,1)='O', (3,1)='F' -> matches TREE and MOON!
  // V3: (0,2) E G O: (0,2)='E', (1,2)='G', (2,2)='O' -> matches TREE and MOON!
  {
    id: 'a1-6x6-3',
    title: 'Gökyüzü & Ağaçlar',
    level: 'A1',
    size: 6,
    description: 'Ağaç, gece parlayan ay, ev çatısı ve zaman kavramı.',
    clues: [
      { number: 1, direction: 'across', word: 'TREE', clue: 'Doğada gölge veren yeşil ağaç', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'MOON', clue: 'Geceleri gökyüzünde parlayan ay', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'TIME', clue: 'Geçen saatler, vakit veya zaman', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ROOF', clue: 'Evin en üst kısmındaki koruyucu çatı', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'EGO', clue: 'Benlik, gurur veya kişinin kendi bilinci', row: 0, col: 2 }
    ]
  },

  // --- A1: 6x6 - 4: "Mevsimler & Soğuk" ---
  // H1: (0,0) C O L D (4)
  // V1: (0,0) C A L L (4): (0,0)='C', (1,0)='A', (2,0)='L', (3,0)='L'
  // H2: (2,0) L I F E (4): (2,0)='L', (2,1)='I', (2,2)='F', (2,3)='E'
  // In COLD (0,1) is 'O', in LIFE (2,1) is 'I'.
  // O I L (0,1)='O', (1,1)='I', (2,1)='L'? In LIFE (2,1) is 'I'!
  // What word has (0,1)='O', (1,1)=?, (2,1)='I'?
  // If H2 is (2,0) L U C K: (2,0)='L', (2,1)='U', (2,2)='C', (2,3)='K'
  // In COLD (0,1)='O', (2,1)='U': O U T ! (0,1)='O', (1,1)='U', (2,1)='T'? in LUCK (2,1) is 'U'!
  // What word has (0,1)='O', (1,1)=?, (2,1)='U'?
  // How about H1: (0,0) S N O W
  // V1: (0,0) S T A R: (0,0)='S', (1,0)='T', (2,0)='A', (3,0)='R'
  // H2: (2,0) A R T: (2,0)='A', (2,1)='R', (2,2)='T'
  // In SNOW (0,1)='N', in ART (2,1)='R'.
  // N O R T H : (0,1)='N', (1,1)='O', (2,1)='R', (3,1)='T', (4,1)='H'!
  // Matches SNOW at (0,1)='N' and ART at (2,1)='R'!
  // In SNOW (0,2)='O', in ART (2,2)='T'.
  // O U T: (0,2)='O', (1,2)='U', (2,2)='T'!
  // Matches SNOW at (0,2)='O' and ART at (2,2)='T'!
  // Check:
  // H1: (0,0) S N O W (4)
  // H2: (2,0) A R T (3)
  // V1: (0,0) S T A R (4) -> (0,0)='S', (1,0)='T', (2,0)='A', (3,0)='R'
  // V2: (0,1) N O R T H (5) -> (0,1)='N', (1,1)='O', (2,1)='R', (3,1)='T', (4,1)='H'
  // V3: (0,2) O U T (3) -> (0,2)='O', (1,2)='U', (2,2)='T'
  // All 5 words match 100%!
  {
    id: 'a1-6x6-4',
    title: 'Kış & Sanat',
    level: 'A1',
    size: 6,
    description: 'Kışın yağan kar, parlayan yıldız, kuzey yönü ve sanat.',
    clues: [
      { number: 1, direction: 'across', word: 'SNOW', clue: 'Kış mevsiminde gökten süzülen beyaz kar', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'ART', clue: 'Resim, heykel ve yaratıcı güzel sanatlar', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'STAR', clue: 'Gece gökyüzünde ışıldayan parlak yıldız', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'NORTH', clue: 'Pusulada yukarıyı gösteren kuzey yönü', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'OUT', clue: 'Dışarı, hariç veya dışarıda', row: 0, col: 2 }
    ]
  },

  // --- A1: 7x7 - 3: "Gündüz & Gece" ---
  // H1: (0,0) L I G H T (5)
  // V1: (0,0) L E A R N (5): (0,0)='L', (1,0)='E', (2,0)='A', (3,0)='R', (4,0)='N'
  // H2: (2,0) A C T I O N (6): (2,0)='A', (2,1)='C', (2,2)='T', (2,3)='I', (2,4)='O', (2,5)='N'
  // In LIGHT (0,2) is 'G', in ACTION (2,2) is 'T'.
  // G E T: (0,2)='G', (1,2)='E', (2,2)='T'!
  // Matches LIGHT at (0,2)='G' and ACTION at (2,2)='T'!
  // In LIGHT (0,4) is 'T', in ACTION (2,4) is 'O'.
  // T W O: (0,4)='T', (1,4)='W', (2,4)='O'!
  // Matches LIGHT at (0,4)='T' and ACTION at (2,4)='O'!
  // At (4,0) in LEARN is 'N'.
  // H3: (4,0) N I G H T (5): (4,0)='N', (4,1)='I', (4,2)='G', (4,3)='H', (4,4)='T'!
  // Matches LEARN at (4,0)='N'!
  // Let's check:
  // H1: (0,0) LIGHT (row 0, col 0..4)
  // H2: (2,0) ACTION (row 2, col 0..5)
  // H3: (4,0) NIGHT (row 4, col 0..4)
  // V1: (0,0) LEARN (col 0, row 0..4): (0,0)='L', (1,0)='E', (2,0)='A', (3,0)='R', (4,0)='N'
  // V2: (0,2) GET (col 2, row 0..2): (0,2)='G', (1,2)='E', (2,2)='T'
  // V3: (0,4) TWO (col 4, row 0..2): (0,4)='T', (1,4)='W', (2,4)='O'
  // All 6 words match 100%!
  {
    id: 'a1-7x7-3',
    title: 'Gündüz & Gece Işığı',
    level: 'A1',
    size: 7,
    description: 'Güneş ışığı, gece karanlığı, eylem, öğrenme ve sayılar.',
    clues: [
      { number: 1, direction: 'across', word: 'LIGHT', clue: 'Karanlığı aydınlatan parlak ışık', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'ACTION', clue: 'Harekete geçme, eylem veya aksiyon', row: 2, col: 0 },
      { number: 3, direction: 'across', word: 'NIGHT', clue: 'Güneşin batmasıyla başlayan karanlık gece', row: 4, col: 0 },
      { number: 1, direction: 'down', word: 'LEARN', clue: 'Yeni bilgiler edinmek, öğrenmek', row: 0, col: 0 },
      { number: 4, direction: 'down', word: 'GET', clue: 'Elde etmek, almak veya varmak', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'TWO', clue: 'Birden sonraki çift sayı (2)', row: 0, col: 4 }
    ]
  },

  // --- A2: 5x5 - 4: "Otel & Dinlenme" ---
  // H1: (0,0) H O T E L (5)
  // V1: (0,0) H E L P (4): (0,0)='H', (1,0)='E', (2,0)='L', (3,0)='P'
  // H2: (2,0) L I F E (4): (2,0)='L', (2,1)='I', (2,2)='F', (2,3)='E'
  // In HOTEL (0,3) is 'E', in LIFE (2,3) is 'E'.
  // E Y E: (0,3)='E', (1,3)='Y', (2,3)='E'!
  // Matches HOTEL at (0,3)='E' and LIFE at (2,3)='E'!
  // In HOTEL (0,1) is 'O', in LIFE (2,1) is 'I'.
  // O I L: (0,1)='O', (1,1)='I', (2,1)='L'? in LIFE (2,1) is 'I'!
  // What word has (0,1)='O', (1,1)=?, (2,1)='I'?
  // How about H2: (2,0) L O O K (4): (2,0)='L', (2,1)='O', (2,2)='O', (2,3)='K'
  // Then (0,1) in HOTEL is 'O', in LOOK is 'O'.
  // O W L: (0,1)='O', (1,1)='W', (2,1)='L'? in LOOK (2,1) is 'O'!
  // O N E: in LOOK (2,1) is 'O'!
  // What 3-letter word has (0,1)='O', (1,1)=?, (2,1)='O'?
  // T O O ? (starts with T)
  // How about H1: (0,0) T O U R (4)
  // V1: (0,0) T R I P (4): (0,0)='T', (1,0)='R', (2,0)='I', (3,0)='P'
  // H2: (2,0) I C E (3): (2,0)='I', (2,1)='C', (2,2)='E'
  // In TOUR (0,1)='O', in ICE (2,1)='C'.
  // O N C E: (0,1)='O', (1,1)='N', (2,1)='C', (3,1)='E'!
  // Matches TOUR at (0,1)='O' and ICE at (2,1)='C'!
  // In TOUR (0,2)='U', in ICE (2,2)='E'.
  // U S E: (0,2)='U', (1,2)='S', (2,2)='E'!
  // Matches TOUR at (0,2)='U' and ICE at (2,2)='E'!
  // Let's check:
  // H1: (0,0) TOUR (4)
  // H2: (2,0) ICE (3)
  // V1: (0,0) TRIP (4) -> (0,0)='T', (1,0)='R', (2,0)='I', (3,0)='P'
  // V2: (0,1) ONCE (4) -> (0,1)='O', (1,1)='N', (2,1)='C', (3,1)='E'
  // V3: (0,2) USE (3) -> (0,2)='U', (1,2)='S', (2,2)='E'
  // All 5 words match 100%!
  {
    id: 'a2-5x5-4',
    title: 'Gezi & Seyahat Turu',
    level: 'A2',
    size: 5,
    description: 'Tur, seyahat, bir kere deneyimleme ve buz.',
    clues: [
      { number: 1, direction: 'across', word: 'TOUR', clue: 'Rehber eşliğinde yapılan şehir turu', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'ICE', clue: 'Donmuş soğuk su, buz', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'TRIP', clue: 'Kısa veya uzun keyifli yolculuk', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ONCE', clue: 'Bir zamanlar veya bir kere', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'USE', clue: 'Kullanmak, faydalanmak veya yararlanmak', row: 0, col: 2 }
    ]
  },

  // --- A2: 5x5 - 5: "Dinlenme & Sağlık" ---
  // H1: (0,0) R E S T (4)
  // V1: (0,0) R O O M (4): (0,0)='R', (1,0)='O', (2,0)='O', (3,0)='M'
  // H2: (2,0) O P E N (4): (2,0)='O', (2,1)='P', (2,2)='E', (2,3)='N'
  // In REST (0,2) is 'S', in OPEN (2,2) is 'E'.
  // S E E: (0,2)='S', (1,2)='E', (2,2)='E'!
  // Matches REST at (0,2)='S' and OPEN at (2,2)='E'!
  // In REST (0,3) is 'T', in OPEN (2,3) is 'N'.
  // T E N: (0,3)='T', (1,3)='E', (2,3)='N'!
  // Matches REST at (0,3)='T' and OPEN at (2,3)='N'!
  // In REST (0,1) is 'E', in OPEN (2,1) is 'P'.
  // What 3-letter word has (0,1)='E', (1,1)=?, (2,1)='P'?
  // E M P? No: E X P? No:
  // If (0,1)='E', (1,1)='A', (2,1)='R' -> E A R!
  // Then H2 has (2,1)='R'!
  // H2 could be O R D E R (5): (2,0)='O', (2,1)='R', (2,2)='D', (2,3)='E', (2,4)='R'!
  // In REST (0,2) is 'S', in ORDER (2,2) is 'D'.
  // S A D: (0,2)='S', (1,2)='A', (2,2)='D'!
  // In REST (0,3) is 'T', in ORDER (2,3) is 'E'.
  // T I E: (0,3)='T', (1,3)='I', (2,3)='E'!
  // Let's check:
  // H1: (0,0) R E S T (4)
  // H2: (2,0) O R D E R (5)
  // V1: (0,0) R O O M (4) -> (0,0)='R', (1,0)='O', (2,0)='O', (3,0)='M'
  // V2: (0,1) E A R (3) -> (0,1)='E', (1,1)='A', (2,1)='R'
  // V3: (0,2) S A D (3) -> (0,2)='S', (1,2)='A', (2,2)='D'
  // V4: (0,3) T I E (3) -> (0,3)='T', (1,3)='I', (2,3)='E'
  // All 6 words match 100%!
  {
    id: 'a2-5x5-5',
    title: 'Otel Odası & Dinlenme',
    level: 'A2',
    size: 5,
    description: 'Dinlenme, otel odası, sipariş vermek ve kulak.',
    clues: [
      { number: 1, direction: 'across', word: 'REST', clue: 'Yorgunluğu atmak, dinlenmek veya mola', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'ORDER', clue: 'Sipariş vermek, düzen veya emir', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'ROOM', clue: 'Konaklanan otel odası veya alan', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'EAR', clue: 'Sesleri duymaya yarayan kulak', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'SAD', clue: 'Hüzünlü, üzgün veya kederli', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'TIE', clue: 'Kravat veya bağlamak', row: 0, col: 3 }
    ]
  },

  // --- A2: 6x6 - 3: "Hekim & Bakım" ---
  // H1: (0,0) C A R E (4)
  // V1: (0,0) C U R E (4): (0,0)='C', (1,0)='U', (2,0)='R', (3,0)='E'
  // H2: (2,0) R I C E (4): (2,0)='R', (2,1)='I', (2,2)='C', (2,3)='E'
  // In CARE (0,1)='A', in RICE (2,1)='I'.
  // A I D: (0,1)='A', (1,1)='I', (2,1)='D'? in RICE (2,1) is 'I'!
  // What about A I R? (2,1) is 'R'!
  // If H2 is (2,0) R O O T (4): in (2,1) is 'O'.
  // A G O : (0,1)='A', (1,1)='G', (2,1)='O'!
  // In CARE (0,2)='R', in ROOT (2,2)='O'.
  // R O O M at (0,2): (0,2)='R', (1,2)='O', (2,2)='O', (3,2)='M'!
  // Matches CARE at (0,2)='R' and ROOT at (2,2)='O'!
  // In CARE (0,3)='E', in ROOT (2,3)='T'.
  // E A T: (0,3)='E', (1,3)='A', (2,3)='T'!
  // Matches CARE at (0,3)='E' and ROOT at (2,3)='T'!
  // Let's check:
  // H1: (0,0) C A R E (4)
  // H2: (2,0) R O O T (4)
  // V1: (0,0) C U R E (4) -> (0,0)='C', (1,0)='U', (2,0)='R', (3,0)='E'
  // V2: (0,1) A G O (3) -> (0,1)='A', (1,1)='G', (2,1)='O'
  // V3: (0,2) R O O M (4) -> (0,2)='R', (1,2)='O', (2,2)='O', (3,2)='M'
  // V4: (0,3) E A T (3) -> (0,3)='E', (1,3)='A', (2,3)='T'
  // All 6 words match 100%!
  {
    id: 'a2-6x6-3',
    title: 'Şifa & Bakım',
    level: 'A2',
    size: 6,
    description: 'Özenle bakım gösterme, tedavi, oda ve beslenme.',
    clues: [
      { number: 1, direction: 'across', word: 'CARE', clue: 'İlgi, özen göstermek ve bakım', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'ROOT', clue: 'Bitkinin topraktaki kökü veya köken', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'CURE', clue: 'Hastalığı iyileştirmek, şifa veya tedavi', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'AGO', clue: 'Geçmişte veya önce', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'ROOM', clue: 'Tedavi odası veya ferah mekan', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'EAT', clue: 'Yemek yemek veya beslenmek', row: 0, col: 3 }
    ]
  },

  // --- A2: 6x6 - 4: "Medya & Radyo" ---
  // H1: (0,0) N E W S (4)
  // V1: (0,0) N A M E (4): (0,0)='N', (1,0)='A', (2,0)='M', (3,0)='E'
  // H2: (2,0) M E D I A (5): (2,0)='M', (2,1)='E', (2,2)='D', (2,3)='I', (2,4)='A'
  // In NEWS (0,1)='E', in MEDIA (2,1)='E'.
  // E Y E : (0,1)='E', (1,1)='Y', (2,1)='E'!
  // Matches NEWS at (0,1)='E' and MEDIA at (2,1)='E'!
  // In NEWS (0,2)='W', in MEDIA (2,2)='D'.
  // W O R D: (0,2)='W', (1,2)='O', (2,2)='R'? in MEDIA (2,2) is 'D'!
  // W I D E: (0,2)='W', (1,2)='I', (2,2)='D', (3,2)='E'!
  // Matches NEWS at (0,2)='W' and MEDIA at (2,2)='D'!
  // In NEWS (0,3)='S', in MEDIA (2,3)='I'.
  // S I X : (0,3)='S', (1,3)='I', (2,3)='X'? in MEDIA (2,3) is 'I'!
  // S K I : (0,3)='S', (1,3)='K', (2,3)='I'!
  // Matches NEWS at (0,3)='S' and MEDIA at (2,3)='I'!
  // Let's check:
  // H1: (0,0) NEWS (4)
  // H2: (2,0) MEDIA (5)
  // V1: (0,0) NAME (4) -> (0,0)='N', (1,0)='A', (2,0)='M', (3,0)='E'
  // V2: (0,1) EYE (3) -> (0,1)='E', (1,1)='Y', (2,1)='E'
  // V3: (0,2) WIDE (4) -> (0,2)='W', (1,2)='I', (2,2)='D', (3,2)='E'
  // V4: (0,3) SKI (3) -> (0,3)='S', (1,3)='K', (2,3)='I'
  // All 6 words match 100%!
  {
    id: 'a2-6x6-4',
    title: 'Haber & Basın Medyası',
    level: 'A2',
    size: 6,
    description: 'Güncel haberler, geniş medya organları, isim ve bakış.',
    clues: [
      { number: 1, direction: 'across', word: 'NEWS', clue: 'Gündeme dair son dakika haberleri', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'MEDIA', clue: 'Televizyon, gazete ve dijital medya', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'NAME', clue: 'Kişi veya kuruma verilen isim, ad', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'EYE', clue: 'Görmeyi sağlayan göz veya bakış', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'WIDE', clue: 'Geniş, kapsamlı veya ferah', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'SKI', clue: 'Karda yapılan kış sporu kayağı', row: 0, col: 3 }
    ]
  },

  // --- A2: 7x7 - 3: "Kamp & Macera" ---
  // H1: (0,0) F O R E S T (6)
  // V1: (0,0) F I R E (4): (0,0)='F', (1,0)='I', (2,0)='R', (3,0)='E'
  // H2: (2,0) R O A D (4): (2,0)='R', (2,1)='O', (2,2)='A', (2,3)='D'
  // In FOREST (0,1)='O', in ROAD (2,1)='O'.
  // O W L: (0,1)='O', (1,1)='W', (2,1)='L'? in ROAD (2,1) is 'O'!
  // What about O N E?
  // If (0,1) in FOREST is 'O', in ROAD is 'O'.
  // How about H2: (2,0) R E S T (4): in (2,1) is 'E'.
  // O N E: (0,1)='O', (1,1)='N', (2,1)='E'!
  // Matches FOREST at (0,1)='O' and REST at (2,1)='E'!
  // In FOREST (0,2) is 'R', in REST (2,2) is 'S'.
  // R I S E: (0,2)='R', (1,2)='I', (2,2)='S', (3,2)='E'!
  // Matches FOREST at (0,2)='R' and REST at (2,2)='S'!
  // In FOREST (0,3) is 'E', in REST (2,3) is 'T'.
  // E A T: (0,3)='E', (1,3)='A', (2,3)='T'!
  // Matches FOREST at (0,3)='E' and REST at (2,3)='T'!
  // In FOREST (0,4) is 'S'.
  // S T A R: (0,4)='S', (1,4)='T', (2,4)='A', (3,4)='R'!
  // In FOREST (0,5) is 'T'.
  // T E N T: (0,5)='T', (1,5)='E', (2,5)='N', (3,5)='T'!
  // Let's check:
  // H1: (0,0) FOREST (6) -> F O R E S T
  // H2: (2,0) REST (4)   -> R E S T
  // V1: (0,0) FIRE (4)   -> (0,0)='F', (1,0)='I', (2,0)='R', (3,0)='E'
  // V2: (0,1) ONE (3)    -> (0,1)='O', (1,1)='N', (2,1)='E'
  // V3: (0,2) RISE (4)   -> (0,2)='R', (1,2)='I', (2,2)='S', (3,2)='E'
  // V4: (0,3) EAT (3)    -> (0,3)='E', (1,3)='A', (2,3)='T'
  // V5: (0,4) STAR (4)   -> (0,4)='S', (1,4)='T', (2,4)='A', (3,4)='R'
  // V6: (0,5) TENT (4)   -> (0,5)='T', (1,5)='E', (2,5)='N', (3,5)='T'
  // All 8 words match 100%!
  {
    id: 'a2-7x7-3',
    title: 'Orman Kampı & Doğa',
    level: 'A2',
    size: 7,
    description: 'Büyük orman, kamp çadırı, kamp ateşi, gökte yıldızlar ve dinlenme.',
    clues: [
      { number: 1, direction: 'across', word: 'FOREST', clue: 'Ağaçlarla kaplı geniş orman', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'REST', clue: 'Doğada mola vermek, dinlenmek', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'FIRE', clue: 'Isınmak için yakılan kamp ateşi', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ONE', clue: 'Tek veya bir sayısı (1)', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'RISE', clue: 'Güneşin doğması veya yükselmek', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'EAT', clue: 'Kampta lezzetli yemek yemek', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'STAR', clue: 'Gece ormanda parlayan yıldız', row: 0, col: 4 },
      { number: 7, direction: 'down', word: 'TENT', clue: 'Doğada konaklanan su geçirmez çadır', row: 0, col: 5 }
    ]
  },

  // --- B1: 5x5 - 4: "Yetenek & Zihin" ---
  // H1: (0,0) S M A R T (5)
  // V1: (0,0) S K I L L (5): (0,0)='S', (1,0)='K', (2,0)='I', (3,0)='L', (4,0)='L'
  // H2: (2,0) I D E A (4): (2,0)='I', (2,1)='D', (2,2)='E', (2,3)='A'
  // In SMART (0,2) is 'A', in IDEA (2,2) is 'E'.
  // A G E: (0,2)='A', (1,2)='G', (2,2)='E'!
  // Matches SMART at (0,2)='A' and IDEA at (2,2)='E'!
  // In SMART (0,1) is 'M', in IDEA (2,1) is 'D'.
  // M E D? M O D?
  // M O D E: (0,1)='M', (1,1)='O', (2,1)='D', (3,1)='E'!
  // Matches SMART at (0,1)='M' and IDEA at (2,1)='D'!
  // In SMART (0,3) is 'R', in IDEA (2,3) is 'A'.
  // What 3-letter word starts with R and ends with A?
  // R E A? R U N (ends with N).
  // If H2 is (2,0) I R O N: in (2,3) is 'N'.
  // R U N: (0,3)='R', (1,3)='U', (2,3)='N'!
  // Matches SMART at (0,3)='R' and IRON at (2,3)='N'!
  // In IRON (2,2) is 'O'. In SMART (0,2) is 'A'.
  // A G O : (0,2)='A', (1,2)='G', (2,2)='O'!
  // In IRON (2,1) is 'R'. In SMART (0,1) is 'M'.
  // M O R E: (0,1)='M', (1,1)='O', (2,1)='R', (3,1)='E'!
  // Matches SMART at (0,1)='M' and IRON at (2,1)='R'!
  // Let's check:
  // H1: (0,0) S M A R T (5)
  // H2: (2,0) I R O N (4)
  // V1: (0,0) S K I L L (5) -> (0,0)='S', (1,0)='K', (2,0)='I', (3,0)='L', (4,0)='L'
  // V2: (0,1) M O R E (4) -> (0,1)='M', (1,1)='O', (2,1)='R', (3,1)='E'
  // V3: (0,2) A G O (3) -> (0,2)='A', (1,2)='G', (2,2)='O'
  // V4: (0,3) R U N (3) -> (0,3)='R', (1,3)='U', (2,3)='N'
  // All 6 words match 100%!
  {
    id: 'b1-5x5-4',
    title: 'Zeka & Yetenek Gelişimi',
    level: 'B1',
    size: 5,
    description: 'Zeka, kişisel beceri, demir irade ve daha fazlası.',
    clues: [
      { number: 1, direction: 'across', word: 'SMART', clue: 'Zeki, kıvrak akıllı ve donanımlı', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'IRON', clue: 'Güçlü metal demir veya sert irade', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'SKILL', clue: 'Ustalıkla kazanılan hüner ve beceri', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'MORE', clue: 'Daha çok, daha fazla veya ziyade', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'AGO', clue: 'Geçmişte kalan zaman veya önce', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'RUN', clue: 'Koşmak, yönetmek veya işletmek', row: 0, col: 3 }
    ]
  },

  // --- B1: 5x5 - 5: "Piyasa & Değer" ---
  // H1: (0,0) P R I C E (5)
  // V1: (0,0) P A I D (4): (0,0)='P', (1,0)='A', (2,0)='I', (3,0)='D'
  // H2: (2,0) I D E A (4): (2,0)='I', (2,1)='D', (2,2)='E', (2,3)='A'
  // In PRICE (0,1) is 'R', in IDEA (2,1) is 'D'.
  // R E D: (0,1)='R', (1,1)='E', (2,1)='D'!
  // Matches PRICE at (0,1)='R' and IDEA at (2,1)='D'!
  // In PRICE (0,2) is 'I', in IDEA (2,2) is 'E'.
  // I C E: (0,2)='I', (1,2)='C', (2,2)='E'!
  // Matches PRICE at (0,2)='I' and IDEA at (2,2)='E'!
  // In PRICE (0,3) is 'C', in IDEA (2,3) is 'A'.
  // C A T: (0,3)='C', (1,3)='A', (2,3)='T'? in IDEA (2,3) is 'A'!
  // What 3-letter word starts with C and ends with A?
  // C D A? No:
  // If (0,4) is 'E': E A R?
  // What if H2 is (2,0) I T E M (4): (2,0)='I', (2,1)='T', (2,2)='E', (2,3)='M'?
  // In PRICE (0,3)='C', in ITEM (2,3)='M'.
  // C A M: (0,3)='C', (1,3)='A', (2,3)='M'!
  // In PRICE (0,2)='I', in ITEM (2,2)='E': I C E!
  // In PRICE (0,1)='R', in ITEM (2,1)='T': R A T (0,1)='R', (1,1)='A', (2,1)='T'!
  // Matches PRICE at (0,1)='R' and ITEM at (2,1)='T'!
  // Let's check:
  // H1: (0,0) PRICE (5)
  // H2: (2,0) ITEM (4)
  // V1: (0,0) PAID (4) -> (0,0)='P', (1,0)='A', (2,0)='I', (3,0)='D'
  // V2: (0,1) RAT (3) -> (0,1)='R', (1,1)='A', (2,1)='T'
  // V3: (0,2) ICE (3) -> (0,2)='I', (1,2)='C', (2,2)='E'
  // V4: (0,3) CAM (3) -> (0,3)='C', (1,3)='A', (2,3)='M'
  // All 6 words match 100%!
  {
    id: 'b1-5x5-5',
    title: 'Fiyat & Mal Varlığı',
    level: 'B1',
    size: 5,
    description: 'Ürün fiyatı, ödenmiş bedel, madde ve piyasa kalemi.',
    clues: [
      { number: 1, direction: 'across', word: 'PRICE', clue: 'Piyasadaki satış bedeli, fiyat veya kıymet', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'ITEM', clue: 'Listelenen madde, mal kalemi veya eşya', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'PAID', clue: 'Ödemesi yapılmış, tahsil edilmiş borç', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'RAT', clue: 'Kemirgen fare veya deneme hayvanı', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'ICE', clue: 'Soğuk su kütlesi veya donmuş buz', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'CAM', clue: 'Kamera veya mekanik mil parçası', row: 0, col: 3 }
    ]
  },

  // --- B1: 6x6 - 3: "Sistem & Yazılım" ---
  // H1: (0,0) S Y S T E M (6)
  // V1: (0,0) S C A L E (5): (0,0)='S', (1,0)='C', (2,0)='A', (3,0)='L', (4,0)='E'
  // H2: (2,0) A U D I T (5): (2,0)='A', (2,1)='U', (2,2)='D', (2,3)='I', (2,4)='T'
  // In SYSTEM (0,3) is 'T', in AUDIT (2,3) is 'I'.
  // T R I P: (0,3)='T', (1,3)='R', (2,3)='I', (3,3)='P'!
  // Matches SYSTEM at (0,3)='T' and AUDIT at (2,3)='I'!
  // In SYSTEM (0,4) is 'E', in AUDIT (2,4) is 'T'.
  // E A T: (0,4)='E', (1,4)='A', (2,4)='T'!
  // Matches SYSTEM at (0,4)='E' and AUDIT at (2,4)='T'!
  // In SYSTEM (0,2) is 'S', in AUDIT (2,2) is 'D'.
  // S A D: (0,2)='S', (1,2)='A', (2,2)='D'!
  // Matches SYSTEM at (0,2)='S' and AUDIT at (2,2)='D'!
  // Let's check:
  // H1: (0,0) SYSTEM (6)
  // H2: (2,0) AUDIT (5)
  // V1: (0,0) SCALE (5) -> (0,0)='S', (1,0)='C', (2,0)='A', (3,0)='L', (4,0)='E'
  // V2: (0,2) SAD (3) -> (0,2)='S', (1,2)='A', (2,2)='D'
  // V3: (0,3) TRIP (4) -> (0,3)='T', (1,3)='R', (2,3)='I', (3,3)='P'
  // V4: (0,4) EAT (3) -> (0,4)='E', (1,4)='A', (2,4)='T'
  // All 6 words match 100%!
  {
    id: 'b1-6x6-3',
    title: 'Sistem & Denetim',
    level: 'B1',
    size: 6,
    description: 'Bilişim sistemi, ölçekleme, hesap denetimi ve süreçler.',
    clues: [
      { number: 1, direction: 'across', word: 'SYSTEM', clue: 'Kurallı çalışan mekanizma veya bilişim sistemi', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'AUDIT', clue: 'Resmi hesap incelemesi, teftiş veya denetim', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'SCALE', clue: 'Ölçek, büyüklük veya tartı', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'SAD', clue: 'Üzüntülü veya kederli durum', row: 0, col: 2 },
      { number: 4, direction: 'down', word: 'TRIP', clue: 'İnceleme gezisi veya yolculuk', row: 0, col: 3 },
      { number: 5, direction: 'down', word: 'EAT', clue: 'Tüketmek veya beslenmek', row: 0, col: 4 }
    ]
  },

  // --- B1: 6x6 - 4: "Tasarım & Sanat" ---
  // H1: (0,0) D E S I G N (6)
  // V1: (0,0) D R I V E (5): (0,0)='D', (1,0)='R', (2,0)='I', (3,0)='V', (4,0)='E'
  // H2: (2,0) I M A G E (5): (2,0)='I', (2,1)='M', (2,2)='A', (2,3)='G', (2,4)='E'
  // In DESIGN (0,3) is 'I', in IMAGE (2,3) is 'G'.
  // What word has (0,3)='I', (1,3)=?, (2,3)='G'?
  // I C E? Ends with E.
  // How about H2: (2,0) I N P U T (5): (2,0)='I', (2,1)='N', (2,2)='P', (2,3)='U', (2,4)='T'
  // In DESIGN (0,3)='I', in INPUT (2,3)='U'.
  // What about H2: (2,0) I R O N Y (5): (2,0)='I', (2,1)='R', (2,2)='O', (2,3)='N', (2,4)='Y'?
  // In DESIGN (0,3) is 'I'.
  // I N K: (0,3)='I', (1,3)='N', (2,3)='K'?
  // If (2,3) is 'K', H2 could be I N K: (2,1)='I', (2,2)='N', (2,3)='K'!
  // What if H1: (0,0) C R A F T (5)
  // V1: (0,0) C L E A R (5): (0,0)='C', (1,0)='L', (2,0)='E', (3,0)='A', (4,0)='R'
  // H2: (2,0) E A R T H (5): (2,0)='E', (2,1)='A', (2,2)='R', (2,3)='T', (2,4)='H'
  // In CRAFT (0,2) is 'A', in EARTH (2,2) is 'R'.
  // A I R : (0,2)='A', (1,2)='I', (2,2)='R'!
  // Matches CRAFT at (0,2)='A' and EARTH at (2,2)='R'!
  // In CRAFT (0,3) is 'F', in EARTH (2,3) is 'T'.
  // F A T: (0,3)='F', (1,3)='A', (2,3)='T'!
  // Matches CRAFT at (0,3)='F' and EARTH at (2,3)='T'!
  // In CRAFT (0,1) is 'R', in EARTH (2,1) is 'A'.
  // R E A D: (0,1)='R', (1,1)='E', (2,1)='A', (3,1)='D'!
  // Matches CRAFT at (0,1)='R' and EARTH at (2,1)='A'!
  // Let's check:
  // H1: (0,0) CRAFT (5)
  // H2: (2,0) EARTH (5)
  // V1: (0,0) CLEAR (5) -> (0,0)='C', (1,0)='L', (2,0)='E', (3,0)='A', (4,0)='R'
  // V2: (0,1) READ (4) -> (0,1)='R', (1,1)='E', (2,1)='A', (3,1)='D'
  // V3: (0,2) AIR (3) -> (0,2)='A', (1,2)='I', (2,2)='R'
  // V4: (0,3) FAT (3) -> (0,3)='F', (1,3)='A', (2,3)='T'
  // All 6 words match 100%!
  {
    id: 'b1-6x6-4',
    title: 'Zanaat & Dünya Mirası',
    level: 'B1',
    size: 6,
    description: 'El sanatı, zanaat, yerküre ve berrak zihin.',
    clues: [
      { number: 1, direction: 'across', word: 'CRAFT', clue: 'Ustalıkla yapılan zanaat, el becerisi veya araç', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'EARTH', clue: 'Yaşadığımız yerküre, dünya ve toprak', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'CLEAR', clue: 'Berrak, net, anlaşılır ve engelsiz', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'READ', clue: 'Kitap veya metin okuyarak anlamak', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'AIR', clue: 'Nefes aldığımız temiz atmosfer ve hava', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'FAT', clue: 'Şişman, dolgun veya vücut yağı', row: 0, col: 3 }
    ]
  },

  // --- B1: 7x7 - 3: "Liderlik & Ofis" ---
  // H1: (0,0) L E A D E R (6)
  // V1: (0,0) L A B O R (5): (0,0)='L', (1,0)='A', (2,0)='B', (3,0)='O', (4,0)='R'
  // H2: (2,0) B R I E F (5): (2,0)='B', (2,1)='R', (2,2)='I', (2,3)='E', (2,4)='F'
  // In LEADER (0,1)='E', in BRIEF (2,1)='R'.
  // E A R : (0,1)='E', (1,1)='A', (2,1)='R'!
  // In LEADER (0,3)='D', in BRIEF (2,3)='E'.
  // D I E : (0,3)='D', (1,3)='I', (2,3)='E'!
  // In LEADER (0,2)='A', in BRIEF (2,2)='I'.
  // A I D : (0,2)='A', (1,2)='I', (2,2)='D'? in BRIEF (2,2) is 'I'!
  // What about A I M: (0,2)='A', (1,2)='I', (2,2)='M'? in BRIEF (2,2) is 'I'!
  // A X I S : (0,2)='A', (1,2)='X', (2,2)='I', (3,2)='S'!
  // Matches LEADER at (0,2)='A' and BRIEF at (2,2)='I'!
  // In LEADER (0,4)='E', in BRIEF (2,4)='F'.
  // E L F : (0,4)='E', (1,4)='L', (2,4)='F'!
  // Matches LEADER at (0,4)='E' and BRIEF at (2,4)='F'!
  // Let's check:
  // H1: (0,0) LEADER (6)
  // H2: (2,0) BRIEF (5)
  // V1: (0,0) LABOR (5) -> (0,0)='L', (1,0)='A', (2,0)='B', (3,0)='O', (4,0)='R'
  // V2: (0,1) EAR (3) -> (0,1)='E', (1,1)='A', (2,1)='R'
  // V3: (0,2) AXIS (4) -> (0,2)='A', (1,2)='X', (2,2)='I', (3,2)='S'
  // V4: (0,3) DIE (3) -> (0,3)='D', (1,3)='I', (2,3)='E'
  // V5: (0,4) ELF (3) -> (0,4)='E', (1,4)='L', (2,4)='F'
  // All 7 words match 100%!
  {
    id: 'b1-7x7-3',
    title: 'Liderlik & Çalışma',
    level: 'B1',
    size: 7,
    description: 'Vizyoner lider, emek, kısa brifing ve dönüm ekseni.',
    clues: [
      { number: 1, direction: 'across', word: 'LEADER', clue: 'Ekibe yön veren ilham verici lider', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'BRIEF', clue: 'Kısa, öz ve net bilgilendirme toplantısı', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'LABOR', clue: 'Zihinsel veya bedensel emek, iş gücü', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'EAR', clue: 'Dinleme ve algı organı kulak', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'AXIS', clue: 'Dönme ekseni, mihver veya ana hat', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'DIE', clue: 'Zar veya sona ermek', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'ELF', clue: 'Mitolojik peri veya minik varlık', row: 0, col: 4 }
    ]
  },

  // --- B2: 5x5 - 4: "Etik & Erdem" ---
  // H1: (0,0) M O R A L (5)
  // V1: (0,0) M E R I T (5): (0,0)='M', (1,0)='E', (2,0)='R', (3,0)='I', (4,0)='T'
  // H2: (2,0) R I G H T (5): (2,0)='R', (2,1)='I', (2,2)='G', (2,3)='H', (2,4)='T'
  // In MORAL (0,1)='O', in RIGHT (2,1)='I'.
  // O I L : (0,1)='O', (1,1)='I', (2,1)='L'? in RIGHT (2,1) is 'I'!
  // What about O P I N E? (0,1)='O', (1,1)='P', (2,1)='I', (3,1)='N', (4,1)='E'!
  // Matches MORAL at (0,1)='O' and RIGHT at (2,1)='I'!
  // In MORAL (0,2)='R', in RIGHT (2,2)='G'.
  // R U G : (0,2)='R', (1,2)='U', (2,2)='G'!
  // Matches MORAL at (0,2)='R' and RIGHT at (2,2)='G'!
  // In MORAL (0,4)='L', in RIGHT (2,4)='T'.
  // L O T : (0,4)='L', (1,4)='O', (2,4)='T'!
  // Matches MORAL at (0,4)='L' and RIGHT at (2,4)='T'!
  // Let's check:
  // H1: (0,0) MORAL (5)
  // H2: (2,0) RIGHT (5)
  // V1: (0,0) MERIT (5) -> (0,0)='M', (1,0)='E', (2,0)='R', (3,0)='I', (4,0)='T'
  // V2: (0,1) OPINE (5) -> (0,1)='O', (1,1)='P', (2,1)='I', (3,1)='N', (4,1)='E'
  // V3: (0,2) RUG (3) -> (0,2)='R', (1,2)='U', (2,2)='G'
  // V4: (0,4) LOT (3) -> (0,4)='L', (1,4)='O', (2,4)='T'
  // All 6 words match 100%!
  {
    id: 'b2-5x5-4',
    title: 'Ahlak & Hakkaniyet',
    level: 'B2',
    size: 5,
    description: 'Ahlaki erdem, liyakat, adil haklar ve fikir beyanı.',
    clues: [
      { number: 1, direction: 'across', word: 'MORAL', clue: 'Ahlaki değerler bütünü veya manevi ders', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'RIGHT', clue: 'Hakkaniyet, temel insan hakkı veya doğru', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'MERIT', clue: 'Liyakat, hak edilen değer ve üstün başarı', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'OPINE', clue: 'Fikir beyan etmek, görüş bildirmek', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'RUG', clue: 'Küçük halı, kilim veya örtü', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'LOT', clue: 'Pay, hisse, nasip veya çokluk', row: 0, col: 4 }
    ]
  },

  // --- B2: 5x5 - 5: "Kültür & Kökler" ---
  // H1: (0,0) R O O T S (5)
  // V1: (0,0) R A N G E (5): (0,0)='R', (1,0)='A', (2,0)='N', (3,0)='G', (4,0)='E'
  // H2: (2,0) N O B L E (5): (2,0)='N', (2,1)='O', (2,2)='B', (2,3)='L', (2,4)='E'
  // In ROOTS (0,1)='O', in NOBLE (2,1)='O'.
  // O U L ? O W L ? O N E ? in NOBLE (2,1) is 'O'.
  // What 3-letter word has (0,1)='O', (1,1)=?, (2,1)='O'?
  // How about H1: (0,0) L E G A C Y? (size 5, LEGACY is 6).
  // In ROOTS (0,1) is 'O'.
  // If H2 is (2,0) N E E D Y (5): (2,0)='N', (2,1)='E', (2,2)='E', (2,3)='D', (2,4)='Y'
  // O N E : (0,1)='O', (1,1)='N', (2,1)='E'!
  // Matches ROOTS at (0,1)='O' and NEEDY at (2,1)='E'!
  // In ROOTS (0,2) is 'O', in NEEDY (2,2) is 'E'.
  // O R E : (0,2)='O', (1,2)='R', (2,2)='E'!
  // Matches ROOTS at (0,2)='O' and NEEDY at (2,2)='E'!
  // In ROOTS (0,3) is 'T', in NEEDY (2,3) is 'D'.
  // T O D ? T A D : (0,3)='T', (1,3)='A', (2,3)='D'!
  // Matches ROOTS at (0,3)='T' and NEEDY at (2,3)='D'!
  // In ROOTS (0,4) is 'S', in NEEDY (2,4) is 'Y'.
  // S A Y : (0,4)='S', (1,4)='A', (2,4)='Y'!
  // Matches ROOTS at (0,4)='S' and NEEDY at (2,4)='Y'!
  // Let's check:
  // H1: (0,0) ROOTS (5)
  // H2: (2,0) NEEDY (5)
  // V1: (0,0) RANGE (5) -> (0,0)='R', (1,0)='A', (2,0)='N', (3,0)='G', (4,0)='E'
  // V2: (0,1) ONE (3) -> (0,1)='O', (1,1)='N', (2,1)='E'
  // V3: (0,2) ORE (3) -> (0,2)='O', (1,2)='R', (2,2)='E'
  // V4: (0,3) TAD (3) -> (0,3)='T', (1,3)='A', (2,3)='D'
  // V5: (0,4) SAY (3) -> (0,4)='S', (1,4)='A', (2,4)='Y'
  // All 7 words match 100%!
  {
    id: 'b2-5x5-5',
    title: 'Kökenler & Menzil',
    level: 'B2',
    size: 5,
    description: 'Kültürel kökler, menzil, maden cevheri ve ifade gücü.',
    clues: [
      { number: 1, direction: 'across', word: 'ROOTS', clue: 'Kültürel köken, soy veya ana kaynak', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'NEEDY', clue: 'Muhtaç, yoksul veya desteğe ihtiyaç duyan', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'RANGE', clue: 'Menzil, etki alanı veya çeşitlilik', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'ONE', clue: 'Birlik veya tek olan', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'ORE', clue: 'Maden cevheri veya saf mineral', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'TAD', clue: 'Bir parça, azıcık veya hafifçe', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'SAY', clue: 'Söylemek, fikir beyan etmek', row: 0, col: 4 }
    ]
  },

  // --- B2: 6x6 - 3: "Teori & Kanıt" ---
  // H1: (0,0) T H E O R Y (6)
  // V1: (0,0) T R I A L (5): (0,0)='T', (1,0)='R', (2,0)='I', (3,0)='A', (4,0)='L'
  // H2: (2,0) I N D E X (5): (2,0)='I', (2,1)='N', (2,2)='D', (2,3)='E', (2,4)='X'
  // In THEORY (0,2)='E', in INDEX (2,2)='D'.
  // E N D : (0,2)='E', (1,2)='N', (2,2)='D'!
  // Matches THEORY at (0,2)='E' and INDEX at (2,2)='D'!
  // In THEORY (0,3)='O', in INDEX (2,3)='E'.
  // O N E : (0,3)='O', (1,3)='N', (2,3)='E'!
  // Matches THEORY at (0,3)='O' and INDEX at (2,3)='E'!
  // In THEORY (0,1)='H', in INDEX (2,1)='N'.
  // H E N : (0,1)='H', (1,1)='E', (2,1)='N'!
  // Matches THEORY at (0,1)='H' and INDEX at (2,1)='N'!
  // Let's check:
  // H1: (0,0) THEORY (6)
  // H2: (2,0) INDEX (5)
  // V1: (0,0) TRIAL (5) -> (0,0)='T', (1,0)='R', (2,0)='I', (3,0)='A', (4,0)='L'
  // V2: (0,1) HEN (3) -> (0,1)='H', (1,1)='E', (2,1)='N'
  // V3: (0,2) END (3) -> (0,2)='E', (1,2)='N', (2,2)='D'
  // V4: (0,3) ONE (3) -> (0,3)='O', (1,3)='N', (2,3)='E'
  // All 6 words match 100%!
  {
    id: 'b2-6x6-3',
    title: 'Kuram & Bilimsel Dizin',
    level: 'B2',
    size: 6,
    description: 'Bilimsel teori, deneysel yargılama, dizin ve sonuç.',
    clues: [
      { number: 1, direction: 'across', word: 'THEORY', clue: 'Kanıtlanabilir bilimsel kuram veya teori', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'INDEX', clue: 'Dizin, gösterge veya referans endeksi', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'TRIAL', clue: 'Deneme, test süreci veya mahkeme duruşması', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'HEN', clue: 'Dişi kümes kuşu, tavuk', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'END', clue: 'Araştırmanın nihai sonu veya hedefi', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'ONE', clue: 'Teklik, birlik veya bütünlük', row: 0, col: 3 }
    ]
  },

  // --- B2: 6x6 - 4: "Barış & Güç" ---
  // H1: (0,0) P E A C E (5)
  // V1: (0,0) P O W E R (5): (0,0)='P', (1,0)='O', (2,0)='W', (3,0)='E', (4,0)='R'
  // H2: (2,0) W O R T H (5): (2,0)='W', (2,1)='O', (2,2)='R', (2,3)='T', (2,4)='H'
  // In PEACE (0,1)='E', in WORTH (2,1)='O'.
  // E C H O : (0,1)='E', (1,1)='C', (2,1)='H'? in WORTH (2,1) is 'O'!
  // E G O : (0,1)='E', (1,1)='G', (2,1)='O'!
  // Matches PEACE at (0,1)='E' and WORTH at (2,1)='O'!
  // In PEACE (0,2)='A', in WORTH (2,2)='R'.
  // A I R : (0,2)='A', (1,2)='I', (2,2)='R'!
  // Matches PEACE at (0,2)='A' and WORTH at (2,2)='R'!
  // In PEACE (0,3)='C', in WORTH (2,3)='T'.
  // C A T : (0,3)='C', (1,3)='A', (2,3)='T'!
  // Matches PEACE at (0,3)='C' and WORTH at (2,3)='T'!
  // Let's check:
  // H1: (0,0) PEACE (5)
  // H2: (2,0) WORTH (5)
  // V1: (0,0) POWER (5) -> (0,0)='P', (1,0)='O', (2,0)='W', (3,0)='E', (4,0)='R'
  // V2: (0,1) EGO (3) -> (0,1)='E', (1,1)='G', (2,1)='O'
  // V3: (0,2) AIR (3) -> (0,2)='A', (1,2)='I', (2,2)='R'
  // V4: (0,3) CAT (3) -> (0,3)='C', (1,3)='A', (2,3)='T'
  // All 6 words match 100%!
  {
    id: 'b2-6x6-4',
    title: 'Barış & İktidar Gücü',
    level: 'B2',
    size: 6,
    description: 'Küresel barış, kudretli güç, değer ve denge.',
    clues: [
      { number: 1, direction: 'across', word: 'PEACE', clue: 'Toplumsal huzur, sükunet veya barış', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'WORTH', clue: 'Kıymet, paha veya manevi değer', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'POWER', clue: 'Kudret, iktidar veya dönüştürücü güç', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'EGO', clue: 'Bireysel benlik veya gurur', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'AIR', clue: 'Özgürlük havası veya atmosfer', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'CAT', clue: 'Uysal evcil kedi', row: 0, col: 3 }
    ]
  },

  // --- B2: 7x7 - 3: "Adalet & Yargı" ---
  // H1: (0,0) J U S T I C E (7)
  // V1: (0,0) J U D G E (5): (0,0)='J', (1,0)='U', (2,0)='D', (3,0)='G', (4,0)='E'
  // H2: (2,0) D E C R E E (6): (2,0)='D', (2,1)='E', (2,2)='C', (2,3)='R', (2,4)='E', (2,5)='E'
  // In JUSTICE (0,2)='S', in DECREE (2,2)='C'.
  // S O C ? S I C : (0,2)='S', (1,2)='I', (2,2)='C'!
  // In JUSTICE (0,4)='I', in DECREE (2,4)='E'.
  // I C E : (0,4)='I', (1,4)='C', (2,4)='E'!
  // Matches JUSTICE at (0,4)='I' and DECREE at (2,4)='E'!
  // In JUSTICE (0,3)='T', in DECREE (2,3)='R'.
  // T R I P : in DECREE (2,3) is 'R'!
  // What 3-letter word has (0,3)='T', (1,3)=?, (2,3)='R'?
  // T A R : (0,3)='T', (1,3)='A', (2,3)='R'!
  // Matches JUSTICE at (0,3)='T' and DECREE at (2,3)='R'!
  // In JUSTICE (0,1)='U', in DECREE (2,1)='E'.
  // U S E : (0,1)='U', (1,1)='S', (2,1)='E'!
  // Matches JUSTICE at (0,1)='U' and DECREE at (2,1)='E'!
  // Let's check:
  // H1: (0,0) JUSTICE (7)
  // H2: (2,0) DECREE (6)
  // V1: (0,0) JUDGE (5) -> (0,0)='J', (1,0)='U', (2,0)='D', (3,0)='G', (4,0)='E'
  // V2: (0,1) USE (3) -> (0,1)='U', (1,1)='S', (2,1)='E'
  // V3: (0,2) SIC (3) -> (0,2)='S', (1,2)='I', (2,2)='C'
  // V4: (0,3) TAR (3) -> (0,3)='T', (1,3)='A', (2,3)='R'
  // V5: (0,4) ICE (3) -> (0,4)='I', (1,4)='C', (2,4)='E'
  // All 7 words match 100%!
  {
    id: 'b2-7x7-3',
    title: 'Hukuk & Adli Karar',
    level: 'B2',
    size: 7,
    description: 'Yüksek adalet, hakim yargısı, resmi kararname ve hakkaniyet.',
    clues: [
      { number: 1, direction: 'across', word: 'JUSTICE', clue: 'Evrensel adalet, hak ve hakkaniyet ilkesi', row: 0, col: 0 },
      { number: 2, direction: 'across', word: 'DECREE', clue: 'Resmi mahkeme kararı, ferman veya emir', row: 2, col: 0 },
      { number: 1, direction: 'down', word: 'JUDGE', clue: 'Duruşmayı yöneten hakim veya yargıç', row: 0, col: 0 },
      { number: 3, direction: 'down', word: 'USE', clue: 'Yasal yetkiyi yerinde kullanmak', row: 0, col: 1 },
      { number: 4, direction: 'down', word: 'SIC', clue: 'Metindeki aynen alıntı ibaresi', row: 0, col: 2 },
      { number: 5, direction: 'down', word: 'TAR', clue: 'Katran veya asfalt kaplama maddesi', row: 0, col: 3 },
      { number: 6, direction: 'down', word: 'ICE', clue: 'Sert buz veya soğukkanlılık', row: 0, col: 4 }
    ]
  }
];

module.exports = { NEW_WORD_SENSES, NEW_PUZZLES };
