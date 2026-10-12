// scripts/word_senses.cjs
// Complete dictionary of grammatical senses (i., f., s., zf., zm., e., b.) for all puzzle vocabulary

const WORD_SENSES = {
  ABILITY: [
    { pos: 'i.', posName: 'İsim', meaning: 'yetenek, kabiliyet, beceri' }
  ],
  ACTION: [
    { pos: 'i.', posName: 'İsim', meaning: 'eylem, hareket, aksiyon' },
    { pos: 'f.', posName: 'Fiil', meaning: 'harekete geçirmek, işleme koymak' }
  ],
  AHEAD: [
    { pos: 'zf.', posName: 'Zarf', meaning: 'ileride, önde, önceden' },
    { pos: 'e.', posName: 'Edat', meaning: 'önünde, karşısında' }
  ],
  APPLE: [
    { pos: 'i.', posName: 'İsim', meaning: 'elma' }
  ],
  AUDIT: [
    { pos: 'i.', posName: 'İsim', meaning: 'denetim, teftiş, hesap incelemesi' },
    { pos: 'f.', posName: 'Fiil', meaning: 'denetlemek, teftiş etmek' }
  ],
  AWARD: [
    { pos: 'i.', posName: 'İsim', meaning: 'ödül, mükafat' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ödüllendirmek, layık görmek' }
  ],
  AWARE: [
    { pos: 's.', posName: 'Sıfat', meaning: 'farkında, haberdar, bilinçli' }
  ],
  AWAY: [
    { pos: 'zf.', posName: 'Zarf', meaning: 'uzakta, uzağa, dışarıda' },
    { pos: 's.', posName: 'Sıfat', meaning: 'deplasmanda' }
  ],
  BANANA: [
    { pos: 'i.', posName: 'İsim', meaning: 'muz' }
  ],
  BELIEF: [
    { pos: 'i.', posName: 'İsim', meaning: 'inanç, inanış, güven' }
  ],
  BLUE: [
    { pos: 's.', posName: 'Sıfat', meaning: 'mavi renkli; kederli, hüzünlü' },
    { pos: 'i.', posName: 'İsim', meaning: 'mavi renk, gökyüzü mavisi' }
  ],
  BOOK: [
    { pos: 'i.', posName: 'İsim', meaning: 'kitap' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ayırtmak, rezervasyon yaptırmak' }
  ],
  BREAD: [
    { pos: 'i.', posName: 'İsim', meaning: 'ekmek; geçim, nafaka' }
  ],
  BRING: [
    { pos: 'f.', posName: 'Fiil', meaning: 'getirmek, neden olmak, kazandırmak' }
  ],
  CAPITAL: [
    { pos: 'i.', posName: 'İsim', meaning: 'başkent; sermaye, anapara; büyük harf' },
    { pos: 's.', posName: 'Sıfat', meaning: 'başlıca, temel, büyük' }
  ],
  CHECKS: [
    { pos: 'i.', posName: 'İsim', meaning: 'kontroller, denetimler; banka çekleri' },
    { pos: 'f.', posName: 'Fiil', meaning: 'kontrol etmek, denetlemek, durdurmak' }
  ],
  CHEMIST: [
    { pos: 'i.', posName: 'İsim', meaning: 'eczacı, kimyager' }
  ],
  CLEAN: [
    { pos: 's.', posName: 'Sıfat', meaning: 'temiz, pak, arı, saf' },
    { pos: 'f.', posName: 'Fiil', meaning: 'temizlemek, arındırmak' }
  ],
  CLEAR: [
    { pos: 's.', posName: 'Sıfat', meaning: 'berrak, açık, net, belirgin' },
    { pos: 'f.', posName: 'Fiil', meaning: 'temizlemek, açmak, aklamak' }
  ],
  CLEVER: [
    { pos: 's.', posName: 'Sıfat', meaning: 'akıllı, zeki, kurnaz, becerikli' }
  ],
  CLIMATE: [
    { pos: 'i.', posName: 'İsim', meaning: 'iklim, hava şartları, genel ortam' }
  ],
  COIN: [
    { pos: 'i.', posName: 'İsim', meaning: 'madeni para, bozukluk' },
    { pos: 'f.', posName: 'Fiil', meaning: 'yeni terim türetmek; para basmak' }
  ],
  CONCEPT: [
    { pos: 'i.', posName: 'İsim', meaning: 'kavram, fikir, genel anlayış' }
  ],
  COST: [
    { pos: 'i.', posName: 'İsim', meaning: 'maliyet, fiyat, masraf' },
    { pos: 'f.', posName: 'Fiil', meaning: 'mal olmak, değerinde olmak' }
  ],
  CULTURE: [
    { pos: 'i.', posName: 'İsim', meaning: 'kültür, ekin; tarım' },
    { pos: 'f.', posName: 'Fiil', meaning: 'kültüre almak, yetiştirmek' }
  ],
  DATE: [
    { pos: 'i.', posName: 'İsim', meaning: 'tarih; randevu, buluşma; hurma' },
    { pos: 'f.', posName: 'Fiil', meaning: 'flört etmek, çıkmak; tarih atmak' }
  ],
  DRIVE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'araba sürmek, kullanmak; yöneltmek' },
    { pos: 'i.', posName: 'İsim', meaning: 'sürüş, gezinti; heves, dürtü; sürücü' }
  ],
  EACH: [
    { pos: 'zm.', posName: 'Zamir', meaning: 'her biri, teker teker' },
    { pos: 's.', posName: 'Sıfat', meaning: 'her, her bir' }
  ],
  EARN: [
    { pos: 'f.', posName: 'Fiil', meaning: 'para kazanmak; hak etmek, layık olmak' }
  ],
  EARTH: [
    { pos: 'i.', posName: 'İsim', meaning: 'dünya, yeryüzü; toprak; topraklama' }
  ],
  EASY: [
    { pos: 's.', posName: 'Sıfat', meaning: 'kolay, zahmetsiz, rahat, uysal' },
    { pos: 'zf.', posName: 'Zarf', meaning: 'yavaşça, sakince' }
  ],
  EGG: [
    { pos: 'i.', posName: 'İsim', meaning: 'yumurta' },
    { pos: 'f.', posName: 'Fiil', meaning: 'kışkırtmak, teşvik etmek (egg on)' }
  ],
  ELDER: [
    { pos: 's.', posName: 'Sıfat', meaning: 'yaşça büyük, kıdemli' },
    { pos: 'i.', posName: 'İsim', meaning: 'aile büyüğü, ihtiyar' }
  ],
  ENERGY: [
    { pos: 'i.', posName: 'İsim', meaning: 'enerji, güç, derman, canlılık' }
  ],
  ENTER: [
    { pos: 'f.', posName: 'Fiil', meaning: 'içeri girmek; katılmak; veri girmek' }
  ],
  EVENT: [
    { pos: 'i.', posName: 'İsim', meaning: 'olay, etkinlik, hadise, müsabaka' }
  ],
  EYE: [
    { pos: 'i.', posName: 'İsim', meaning: 'göz; görme duyusu; bakış' },
    { pos: 'f.', posName: 'Fiil', meaning: 'göz dikmek, süzmek, dikkatle bakmak' }
  ],
  FACT: [
    { pos: 'i.', posName: 'İsim', meaning: 'gerçek, hakikat, somut olgu' }
  ],
  FARM: [
    { pos: 'i.', posName: 'İsim', meaning: 'çiftlik' },
    { pos: 'f.', posName: 'Fiil', meaning: 'çiftçilik yapmak, ekip biçmek' }
  ],
  FARMER: [
    { pos: 'i.', posName: 'İsim', meaning: 'çiftçi, tarımcı, köylü' }
  ],
  FISH: [
    { pos: 'i.', posName: 'İsim', meaning: 'balık' },
    { pos: 'f.', posName: 'Fiil', meaning: 'balık tutmak, avlamak; aramak' }
  ],
  FOCUS: [
    { pos: 'i.', posName: 'İsim', meaning: 'odak noktası, ilgi merkezi' },
    { pos: 'f.', posName: 'Fiil', meaning: 'odaklanmak, odaklamak' }
  ],
  FOREST: [
    { pos: 'i.', posName: 'İsim', meaning: 'orman' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ağaçlandırmak, orman yapmak' }
  ],
  GARDEN: [
    { pos: 'i.', posName: 'İsim', meaning: 'bahçe' },
    { pos: 'f.', posName: 'Fiil', meaning: 'bahçe işleriyle uğraşmak' }
  ],
  GRACE: [
    { pos: 'i.', posName: 'İsim', meaning: 'zarafet, incelik, lütuf, merhamet' },
    { pos: 'f.', posName: 'Fiil', meaning: 'şereflendirmek, güzelleştirmek' }
  ],
  HABIT: [
    { pos: 'i.', posName: 'İsim', meaning: 'alışkanlık, huy, itiyat' }
  ],
  HAT: [
    { pos: 'i.', posName: 'İsim', meaning: 'şapka, başlık' }
  ],
  HOME: [
    { pos: 'i.', posName: 'İsim', meaning: 'ev, yuva, konut, yurt' },
    { pos: 'zf.', posName: 'Zarf', meaning: 'eve, evde' },
    { pos: 's.', posName: 'Sıfat', meaning: 'evdeki, iç saha' }
  ],
  HOPE: [
    { pos: 'i.', posName: 'İsim', meaning: 'umut, ümit' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ummak, ümit etmek, beklemek' }
  ],
  ICE: [
    { pos: 'i.', posName: 'İsim', meaning: 'buz; dondurma' },
    { pos: 'f.', posName: 'Fiil', meaning: 'buzlanmak; buzla kaplamak' }
  ],
  IDEAS: [
    { pos: 'i.', posName: 'İsim', meaning: 'fikirler, düşünceler, tasarılar' }
  ],
  ILL: [
    { pos: 's.', posName: 'Sıfat', meaning: 'hasta, rahatsız; kötü, fena' },
    { pos: 'zf.', posName: 'Zarf', meaning: 'kötü biçimde, güçlükle' }
  ],
  IMPACT: [
    { pos: 'i.', posName: 'İsim', meaning: 'etki, tesir; çarpma, vuruş' },
    { pos: 'f.', posName: 'Fiil', meaning: 'etkilemek; çarpmak' }
  ],
  INITIAL: [
    { pos: 's.', posName: 'Sıfat', meaning: 'ilk, baştaki, başlangıçtaki' },
    { pos: 'i.', posName: 'İsim', meaning: 'adın baş harfi' },
    { pos: 'f.', posName: 'Fiil', meaning: 'paraf atmak, baş harflerini yazmak' }
  ],
  INVEST: [
    { pos: 'f.', posName: 'Fiil', meaning: 'yatırım yapmak; emek/zaman ayırmak' }
  ],
  IRON: [
    { pos: 'i.', posName: 'İsim', meaning: 'demir madeni; ütü' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ütülemek' },
    { pos: 's.', posName: 'Sıfat', meaning: 'demirden, çok sert, katı' }
  ],
  IRONIC: [
    { pos: 's.', posName: 'Sıfat', meaning: 'alaylı, kinayeli, ironik' }
  ],
  KEY: [
    { pos: 'i.', posName: 'İsim', meaning: 'anahtar; klavye tuşu; kilit unsur' },
    { pos: 's.', posName: 'Sıfat', meaning: 'kilit, can alıcı, başlıca' },
    { pos: 'f.', posName: 'Fiil', meaning: 'tuşlamak, veri girmek' }
  ],
  LAKE: [
    { pos: 'i.', posName: 'İsim', meaning: 'göl' }
  ],
  LATEST: [
    { pos: 's.', posName: 'Sıfat', meaning: 'en son, en yeni, son çıkan' },
    { pos: 'zf.', posName: 'Zarf', meaning: 'en geç' }
  ],
  LEARN: [
    { pos: 'f.', posName: 'Fiil', meaning: 'öğrenmek; bilgi edinmek, duymak' }
  ],
  LEMON: [
    { pos: 'i.', posName: 'İsim', meaning: 'limon' }
  ],
  LIGHT: [
    { pos: 'i.', posName: 'İsim', meaning: 'ışık, aydınlık; lamba, fener' },
    { pos: 's.', posName: 'Sıfat', meaning: 'hafif (ağırlık); açık renkli' },
    { pos: 'f.', posName: 'Fiil', meaning: 'aydınlatmak, yakmak, tutuşturmak' }
  ],
  LION: [
    { pos: 'i.', posName: 'İsim', meaning: 'aslan' }
  ],
  LOGIC: [
    { pos: 'i.', posName: 'İsim', meaning: 'mantık, mantıklılık, mantık bilimi' }
  ],
  MAP: [
    { pos: 'i.', posName: 'İsim', meaning: 'harita' },
    { pos: 'f.', posName: 'Fiil', meaning: 'haritasını çıkarmak, planlamak' }
  ],
  MEET: [
    { pos: 'f.', posName: 'Fiil', meaning: 'buluşmak, tanışmak; karşılamak' },
    { pos: 'i.', posName: 'İsim', meaning: 'karşılaşma, spor müsabakası' }
  ],
  METHOD: [
    { pos: 'i.', posName: 'İsim', meaning: 'yöntem, metot, usul, yol' }
  ],
  MODERN: [
    { pos: 's.', posName: 'Sıfat', meaning: 'modern, çağdaş, yeni tarz' }
  ],
  MORNING: [
    { pos: 'i.', posName: 'İsim', meaning: 'sabah, sabah vakti' }
  ],
  MOTHER: [
    { pos: 'i.', posName: 'İsim', meaning: 'anne, valide' },
    { pos: 'f.', posName: 'Fiil', meaning: 'annelik etmek, büyütmek' }
  ],
  MUSEUM: [
    { pos: 'i.', posName: 'İsim', meaning: 'müze' }
  ],
  NATIONS: [
    { pos: 'i.', posName: 'İsim', meaning: 'uluslar, milletler, devletler' }
  ],
  NEW: [
    { pos: 's.', posName: 'Sıfat', meaning: 'yeni, taze, henüz çıkmış' }
  ],
  NIGHT: [
    { pos: 'i.', posName: 'İsim', meaning: 'gece, akşam karanlığı' }
  ],
  NORTH: [
    { pos: 'i.', posName: 'İsim', meaning: 'kuzey yönü' },
    { pos: 's.', posName: 'Sıfat', meaning: 'kuzeydeki, kuzey' },
    { pos: 'zf.', posName: 'Zarf', meaning: 'kuzeye doğru' }
  ],
  OBSERVE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'gözlemlemek, incelemek; uymak (kurala)' }
  ],
  OFFICE: [
    { pos: 'i.', posName: 'İsim', meaning: 'ofis, yazıhane, büro; görev' }
  ],
  ONION: [
    { pos: 'i.', posName: 'İsim', meaning: 'soğan' }
  ],
  ONLINE: [
    { pos: 's.', posName: 'Sıfat', meaning: 'çevrim içi, internete bağlı' },
    { pos: 'zf.', posName: 'Zarf', meaning: 'internetten, çevrim içi olarak' }
  ],
  OPEN: [
    { pos: 's.', posName: 'Sıfat', meaning: 'açık, engelsiz; samimi' },
    { pos: 'f.', posName: 'Fiil', meaning: 'açmak, açılmak, başlatmak' }
  ],
  ORDER: [
    { pos: 'i.', posName: 'İsim', meaning: 'sipariş; emir, buyruk; düzen, sıra' },
    { pos: 'f.', posName: 'Fiil', meaning: 'sipariş etmek; emretmek; düzenlemek' }
  ],
  PAIN: [
    { pos: 'i.', posName: 'İsim', meaning: 'ağrı, sızı, keder, acı' },
    { pos: 'f.', posName: 'Fiil', meaning: 'acı vermek, üzmek' }
  ],
  PARK: [
    { pos: 'i.', posName: 'İsim', meaning: 'park, dinlenme alanı' },
    { pos: 'f.', posName: 'Fiil', meaning: 'park etmek, aracı bırakmak' }
  ],
  PARTNER: [
    { pos: 'i.', posName: 'İsim', meaning: 'ortak, eş, arkadaş, partner' },
    { pos: 'f.', posName: 'Fiil', meaning: 'ortaklık kurmak, eşleşmek' }
  ],
  PEOPLE: [
    { pos: 'i.', posName: 'İsim', meaning: 'insanlar, kişiler, halk' }
  ],
  PHONE: [
    { pos: 'i.', posName: 'İsim', meaning: 'telefon' },
    { pos: 'f.', posName: 'Fiil', meaning: 'telefon etmek, aramak' }
  ],
  PILOT: [
    { pos: 'i.', posName: 'İsim', meaning: 'pilot, uçak kaptanı; kılavuz kaptan' },
    { pos: 's.', posName: 'Sıfat', meaning: 'deneme niteliğinde (pilot uygulama)' },
    { pos: 'f.', posName: 'Fiil', meaning: 'pilotluk etmek, yönlendirmek' }
  ],
  PLAN: [
    { pos: 'i.', posName: 'İsim', meaning: 'plan, tasarı, çizim' },
    { pos: 'f.', posName: 'Fiil', meaning: 'planlamak, tasarlamak' }
  ],
  POINT: [
    { pos: 'i.', posName: 'İsim', meaning: 'nokta; puan; uç; konu, ana fikir' },
    { pos: 'f.', posName: 'Fiil', meaning: 'işaret etmek, göstermek, doğrultmak' }
  ],
  POLICY: [
    { pos: 'i.', posName: 'İsim', meaning: 'politika, ilke, strateji; poliçe' }
  ],
  PROFILE: [
    { pos: 'i.', posName: 'İsim', meaning: 'profil, tanıtım, yan görünüş' },
    { pos: 'f.', posName: 'Fiil', meaning: 'profilini çıkarmak, tanıtmak' }
  ],
  PROJECT: [
    { pos: 'i.', posName: 'İsim', meaning: 'proje, tasarı, girişim' },
    { pos: 'f.', posName: 'Fiil', meaning: 'yansıtmak; öngörmek; tasarlamak' }
  ],
  PUBLIC: [
    { pos: 's.', posName: 'Sıfat', meaning: 'kamusal, halka açık, genel' },
    { pos: 'i.', posName: 'İsim', meaning: 'halk, kamu, ahali' }
  ],
  RAIN: [
    { pos: 'i.', posName: 'İsim', meaning: 'yağmur' },
    { pos: 'f.', posName: 'Fiil', meaning: 'yağmur yağmak' }
  ],
  REASON: [
    { pos: 'i.', posName: 'İsim', meaning: 'sebep, neden; akıl, mantık' },
    { pos: 'f.', posName: 'Fiil', meaning: 'akıl yürütmek, mantık kurmak' }
  ],
  REDUCE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'azaltmak, indirmek, düşürmek' }
  ],
  REMIND: [
    { pos: 'f.', posName: 'Fiil', meaning: 'hatırlatmak, anımsatmak' }
  ],
  RESULT: [
    { pos: 'i.', posName: 'İsim', meaning: 'sonuç, netice, akıbet' },
    { pos: 'f.', posName: 'Fiil', meaning: 'sonuçlanmak, -den kaynaklanmak' }
  ],
  REUSE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'yeniden kullanmak' },
    { pos: 'i.', posName: 'İsim', meaning: 'yeniden kullanım' }
  ],
  RIVER: [
    { pos: 'i.', posName: 'İsim', meaning: 'nehir, ırmak, akarsu' }
  ],
  ROAD: [
    { pos: 'i.', posName: 'İsim', meaning: 'yol, kara yolu, güzergah' }
  ],
  ROOM: [
    { pos: 'i.', posName: 'İsim', meaning: 'oda; yer, mahal, alan' }
  ],
  RUNNER: [
    { pos: 'i.', posName: 'İsim', meaning: 'koşucu; masa örtüsü (runner)' }
  ],
  SALT: [
    { pos: 'i.', posName: 'İsim', meaning: 'tuz' },
    { pos: 'f.', posName: 'Fiil', meaning: 'tuzlamak' },
    { pos: 's.', posName: 'Sıfat', meaning: 'tuzlu' }
  ],
  SCALE: [
    { pos: 'i.', posName: 'İsim', meaning: 'ölçek; terazi, tartı; balık pulu' },
    { pos: 'f.', posName: 'Fiil', meaning: 'tırmanmak; ölçeklendirmek' }
  ],
  SCHOOL: [
    { pos: 'i.', posName: 'İsim', meaning: 'okul, mektep; ekol; balık sürüsü' },
    { pos: 'f.', posName: 'Fiil', meaning: 'eğitmek, yetiştirmek' }
  ],
  SCIENCE: [
    { pos: 'i.', posName: 'İsim', meaning: 'bilim, fen, ilim' }
  ],
  SCOPE: [
    { pos: 'i.', posName: 'İsim', meaning: 'kapsam, faaliyet alanı; görüş alanı' }
  ],
  SHIP: [
    { pos: 'i.', posName: 'İsim', meaning: 'gemi' },
    { pos: 'f.', posName: 'Fiil', meaning: 'sevk etmek, göndermek, nakletmek' }
  ],
  SHOP: [
    { pos: 'i.', posName: 'İsim', meaning: 'dükkan, mağaza; atölye' },
    { pos: 'f.', posName: 'Fiil', meaning: 'alışveriş yapmak' }
  ],
  SKILL: [
    { pos: 'i.', posName: 'İsim', meaning: 'beceri, ustalık, hüner, yetenek' }
  ],
  SLEEP: [
    { pos: 'f.', posName: 'Fiil', meaning: 'uyumak' },
    { pos: 'i.', posName: 'İsim', meaning: 'uyku' }
  ],
  SMART: [
    { pos: 's.', posName: 'Sıfat', meaning: 'akıllı, zeki; şık, zarif' },
    { pos: 'f.', posName: 'Fiil', meaning: 'sızlamak, acımak' }
  ],
  SMILE: [
    { pos: 'f.', posName: 'Fiil', meaning: 'gülümsemek, tebessüm etmek' },
    { pos: 'i.', posName: 'İsim', meaning: 'tebessüm, gülümseme' }
  ],
  SORRY: [
    { pos: 's.', posName: 'Sıfat', meaning: 'üzgün, pişman; affedersiniz' }
  ],
  STUDENT: [
    { pos: 'i.', posName: 'İsim', meaning: 'öğrenci, talebe' }
  ],
  SUN: [
    { pos: 'i.', posName: 'İsim', meaning: 'güneş' },
    { pos: 'f.', posName: 'Fiil', meaning: 'güneşlenmek' }
  ],
  SWIM: [
    { pos: 'f.', posName: 'Fiil', meaning: 'yüzmek' },
    { pos: 'i.', posName: 'İsim', meaning: 'yüzüş, yüzme' }
  ],
  TASKS: [
    { pos: 'i.', posName: 'İsim', meaning: 'görevler, işler, vazifeler' }
  ],
  TEA: [
    { pos: 'i.', posName: 'İsim', meaning: 'çay içeceği; ikindi çayı' }
  ],
  TEN: [
    { pos: 's.', posName: 'Sıfat', meaning: 'on' },
    { pos: 'i.', posName: 'İsim', meaning: 'on sayısı' }
  ],
  TENNIS: [
    { pos: 'i.', posName: 'İsim', meaning: 'tenis oyunu' }
  ],
  TINY: [
    { pos: 's.', posName: 'Sıfat', meaning: 'küçücük, minik, ufak tefek' }
  ],
  TOTAL: [
    { pos: 's.', posName: 'Sıfat', meaning: 'toplam, bütün, eksiksiz' },
    { pos: 'i.', posName: 'İsim', meaning: 'toplam tutar, genel yekun' },
    { pos: 'f.', posName: 'Fiil', meaning: 'toplamak, yekun tutmak' }
  ],
  TRAVEL: [
    { pos: 'f.', posName: 'Fiil', meaning: 'seyahat etmek, gezmek, yolculuk etmek' },
    { pos: 'i.', posName: 'İsim', meaning: 'seyahat, yolculuk, gezi' }
  ],
  TREND: [
    { pos: 'i.', posName: 'İsim', meaning: 'eğilim, yönelim, akım, trend' },
    { pos: 'f.', posName: 'Fiil', meaning: 'eğilim göstermek, trend olmak' }
  ],
  TRUST: [
    { pos: 'i.', posName: 'İsim', meaning: 'güven, inanç, itimat; vakıf' },
    { pos: 'f.', posName: 'Fiil', meaning: 'güvenmek, itimat etmek' }
  ],
  UNIQUE: [
    { pos: 's.', posName: 'Sıfat', meaning: 'benzersiz, eşsiz, tek, özgün' }
  ],
  USER: [
    { pos: 'i.', posName: 'İsim', meaning: 'kullanıcı' }
  ],
  USERS: [
    { pos: 'i.', posName: 'İsim', meaning: 'kullanıcılar' }
  ],
  VALUES: [
    { pos: 'i.', posName: 'İsim', meaning: 'değerler, kıymetler, ahlaki ilkeler' },
    { pos: 'f.', posName: 'Fiil', meaning: 'değer vermek, kıymet biçmek' }
  ],
  WHAT: [
    { pos: 'zm.', posName: 'Zamir', meaning: 'ne, hangi şey' },
    { pos: 's.', posName: 'Sıfat', meaning: 'hangi, ne tür' }
  ]
};

module.exports = { WORD_SENSES };
