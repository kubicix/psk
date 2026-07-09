export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  intro: string[];
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  relatedPostSlugs: string[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'bireysel-terapi',
    title: 'Bireysel Terapi',
    metaTitle: 'Bireysel Terapi | İzmit ve Online | Psikolog Asya Özcan',
    metaDescription:
      'İzmit\'te ve online platformda yetişkinler için bireysel terapi. Depresyon, anksiyete, stres, ilişki sorunları ve yaşam geçişlerinde profesyonel psikolojik destek.',
    shortDescription:
      'Depresyon, anksiyete, stres ve yaşam zorluklarında yetişkinlere yönelik birebir psikolojik destek.',
    intro: [
      'Bireysel terapi, yaşadığınız duygusal zorlukları güvenli ve yargılanmayan bir ortamda ele almanızı sağlayan birebir psikolojik destek sürecidir. İzmit merkezindeki kliniğimizde yüz yüze veya dilerseniz online olarak görüşmelerinizi planlayabilirsiniz.',
      'Terapi süreci; sizi tanımak, ihtiyaçlarınızı birlikte belirlemek ve size özgü bir yol haritası oluşturmakla başlar. Her danışanın hikâyesi farklıdır; bu nedenle standart bir program yerine, bilimsel temelli ve kişiye özel bir yaklaşım uyguluyorum.',
    ],
    sections: [
      {
        heading: 'Bireysel Terapi Hangi Konularda Destek Sağlar?',
        paragraphs: [
          'Bireysel terapi, tek bir sorun alanıyla sınırlı değildir. Danışanlarımla en sık çalıştığım konular şunlardır:',
        ],
        list: [
          'Depresyon ve duygudurum sorunları',
          'Kaygı (anksiyete) bozuklukları, panik atak ve sosyal fobi',
          'İş stresi ve tükenmişlik',
          'İlişki ve iletişim sorunları',
          'Özgüven ve benlik saygısı çalışmaları',
          'Yaşam geçişleri: taşınma, iş değişikliği, kayıp ve yas',
          'Duygu düzenleme güçlükleri',
        ],
      },
      {
        heading: 'Terapi Süreci Nasıl İlerler?',
        paragraphs: [
          'İlk görüşmede amacım sizi ve başvuru nedeninizi anlamaktır. Bu görüşmede terapi hedeflerinizi birlikte netleştirir, görüşme sıklığını ve sürecin genel çerçevesini planlarız. İhtiyaç duyulan durumlarda MMPI gibi objektif değerlendirme araçlarından da yararlanarak süreci daha sağlam bir zemine oturturum.',
          'Seanslar genellikle haftada bir gerçekleşir. Sürecin uzunluğu; başvuru konusuna, hedeflerinize ve ilerleme hızınıza göre birlikte şekillenir. Terapide öncelik her zaman sizin güvenliğiniz, gizliliğiniz ve iyilik hâlinizdir.',
        ],
      },
      {
        heading: 'İzmit\'te ve Online Bireysel Terapi',
        paragraphs: [
          'Görüşmeler İzmit merkezdeki kliniğimizde yüz yüze yapılabildiği gibi, Kocaeli dışından ulaşan danışanlarım için güvenli video görüşme altyapısıyla online olarak da yürütülebilir. Araştırmalar, online terapinin birçok alanda yüz yüze terapiyle benzer etkinlikte olduğunu göstermektedir.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Bireysel terapiye ihtiyacım olup olmadığını nasıl anlarım?',
        answer:
          'Duygusal zorluklarınız günlük yaşamınızı, işinizi, ilişkilerinizi veya uykunuzu etkilemeye başladıysa ve birkaç haftadır devam ediyorsa, bir uzmanla görüşmek faydalı olacaktır. Terapiye başlamak için "çok kötü hissetmeyi" beklemeniz gerekmez; erken destek çoğu zaman süreci kolaylaştırır.',
      },
      {
        question: 'Seanslar ne kadar sürer ve hangi sıklıkta yapılır?',
        answer:
          'Görüşmeler genellikle haftada bir planlanır. Sürecin toplam uzunluğu kişiden kişiye değişir; hedeflerinize ve ilerlemenize göre birlikte değerlendirilir.',
      },
      {
        question: 'Görüşmelerde anlattıklarım gizli kalır mı?',
        answer:
          'Evet. Görüşme içeriği, psikologların bağlı olduğu etik ilkeler çerçevesinde gizlidir. Bilgileriniz sizin onayınız olmadan üçüncü kişilerle paylaşılmaz; yalnızca yasal zorunluluk gerektiren istisnai durumlar bunun dışındadır.',
      },
    ],
    relatedSlugs: ['depresyon-terapisi', 'anksiyete-terapisi', 'online-terapi'],
    relatedPostSlugs: ['depresyon-belirtileri', 'online-terapi-etkili-mi'],
  },
  {
    slug: 'cocuk-ergen-psikolojisi',
    title: 'Çocuk ve Ergen Psikolojisi',
    metaTitle: 'Çocuk ve Ergen Psikoloğu | İzmit | Psikolog Asya Özcan',
    metaDescription:
      'İzmit\'te çocuk ve ergen psikoloğu. Okul fobisi, davranış sorunları, ayrılık kaygısı, ergenlik dönemi zorlukları ve sosyal kaygıda uzman psikolojik destek.',
    shortDescription:
      'Okul fobisi, davranış sorunları, kaygı ve ergenlik dönemi zorluklarında çocuklara ve gençlere özel destek.',
    intro: [
      'Çocuklar ve ergenler, duygularını her zaman sözcüklerle ifade edemez; zorlandıklarını çoğu zaman davranışlarıyla gösterirler. Okula gitmek istememe, içe kapanma, öfke patlamaları veya uyku sorunları, çocuğunuzun desteğe ihtiyaç duyduğunun işareti olabilir.',
      'İzmit merkezli kliniğimizde çocukların yaş dönemine ve gelişim düzeyine uygun, oyun temelli ve aile katılımını önemseyen bir yaklaşımla çalışıyorum. Objektif çocuk testleri uygulayıcısı olarak, gerektiğinde değerlendirme araçlarıyla süreci destekliyorum.',
    ],
    sections: [
      {
        heading: 'Hangi Konularda Çalışıyorum?',
        paragraphs: ['Çocuk ve ergenlerle en sık çalıştığım başvuru konuları şunlardır:'],
        list: [
          'Okul fobisi ve okula uyum sorunları',
          'Ayrılık kaygısı',
          'Davranış sorunları ve öfke kontrolü',
          'Sınav kaygısı',
          'Ergenlik dönemi zorlukları ve kimlik arayışı',
          'Sosyal kaygı ve arkadaşlık ilişkilerinde güçlükler',
          'Kardeş kıskançlığı ve aile içi iletişim sorunları',
        ],
      },
      {
        heading: 'Aile Katılımı Neden Önemli?',
        paragraphs: [
          'Çocuklarla yürütülen psikolojik destek süreçlerinde ailenin rolü belirleyicidir. Bu nedenle süreç boyunca ebeveynlerle düzenli görüşmeler yapar, evde uygulanabilecek somut öneriler paylaşırım. Amaç yalnızca seans odasında değil, çocuğun tüm yaşam alanlarında kalıcı bir iyileşme sağlamaktır.',
          'Gerekli durumlarda okul ve öğretmenlerle iş birliği yaparak, multidisipliner bir bakışla çocuğun gelişimini bütüncül olarak desteklerim.',
        ],
      },
      {
        heading: 'Değerlendirme ve Objektif Testler',
        paragraphs: [
          'Sertifikalı Objektif Çocuk Testleri Uygulayıcısı olarak, çocuğun gelişimini ve ihtiyaçlarını daha net görmek için bilimsel değerlendirme araçlarından yararlanıyorum. Test sonuçları tek başına bir "etiket" değildir; çocuğunuzu daha iyi anlamak ve doğru destek planını oluşturmak için kullanılan yol göstericilerdir.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Çocuğumu psikoloğa götürmem gerektiğini nasıl anlarım?',
        answer:
          'Davranış değişiklikleri 3-4 haftadan uzun sürüyorsa, okul başarısını, arkadaşlık ilişkilerini, uykusunu veya iştahını etkiliyorsa bir uzman görüşü almak faydalıdır. Erken dönemde alınan destek, sorunların yerleşmesini önler.',
      },
      {
        question: 'Seanslara ebeveyn olarak ben de katılacak mıyım?',
        answer:
          'Evet, süreç boyunca ebeveyn görüşmeleri planlı olarak yapılır. İlk değerlendirme genellikle ebeveynlerle başlar; sonrasında çocukla bireysel çalışılırken belirli aralıklarla aile görüşmeleri devam eder.',
      },
      {
        question: 'Ergen çocuğum görüşmeye gelmek istemiyor, ne yapabilirim?',
        answer:
          'Bu oldukça yaygın bir durumdur. İlk adım olarak ebeveyn danışmanlığı ile başlayabiliriz; ergenin sürece güven duyması zamanla mümkün olur. Zorlamak yerine, ihtiyacı fark etmesine alan tanıyan bir yaklaşım izlenir.',
      },
    ],
    relatedSlugs: ['otizm-ozel-egitim', 'mmpi-testi', 'bireysel-terapi'],
    relatedPostSlugs: ['cocuklarda-ayrilik-kaygisi'],
  },
  {
    slug: 'depresyon-terapisi',
    title: 'Depresyon Terapisi',
    metaTitle: 'Depresyon Terapisi | İzmit ve Online | Psikolog Asya Özcan',
    metaDescription:
      'Depresyon belirtileri yaşıyorsanız yalnız değilsiniz. İzmit\'te yüz yüze veya online depresyon terapisi ile bilimsel temelli psikolojik destek alın.',
    shortDescription:
      'Sürekli mutsuzluk, isteksizlik ve enerji düşüklüğü yaşayanlar için bilimsel temelli terapi desteği.',
    intro: [
      'Depresyon; sürekli mutsuzluk, ilgi kaybı, enerji düşüklüğü, uyku ve iştah değişiklikleri ile kendini gösteren, dünyada en yaygın ruh sağlığı sorunlarından biridir. Depresyon bir zayıflık ya da irade eksikliği değildir — ve doğru destekle tedavi edilebilir.',
      'İzmit merkezli kliniğimde ve online platformda, depresyonla mücadele eden yetişkinlere bilimsel temelli terapi desteği sunuyorum.',
    ],
    sections: [
      {
        heading: 'Depresyonun Yaygın Belirtileri',
        paragraphs: [
          'Aşağıdaki belirtilerin birkaçını iki haftadan uzun süredir yaşıyorsanız, profesyonel destek almayı düşünebilirsiniz:',
        ],
        list: [
          'Gün boyu süren çökkün duygudurum, mutsuzluk',
          'Daha önce keyif alınan aktivitelere ilgi kaybı',
          'Enerji düşüklüğü ve sürekli yorgunluk',
          'Uyku sorunları: aşırı uyuma veya uyuyamama',
          'İştah ve kilo değişiklikleri',
          'Değersizlik ve suçluluk duyguları',
          'Odaklanma ve karar verme güçlüğü',
        ],
      },
      {
        heading: 'Terapi Depresyonda Nasıl Yardımcı Olur?',
        paragraphs: [
          'Depresyon terapisinde amaç yalnızca belirtileri azaltmak değil; depresyonu besleyen düşünce kalıplarını, davranış döngülerini ve yaşam koşullarını birlikte fark edip dönüştürmektir. Bilimsel araştırmalar, psikoterapinin depresyon tedavisinde etkili olduğunu tutarlı biçimde göstermektedir.',
          'Sürece kapsamlı bir değerlendirmeyle başlarız; ihtiyaç hâlinde MMPI gibi objektif testlerle tabloyu netleştiririz. Orta ve ağır düzey depresyonda, gerekli görüldüğünde bir psikiyatri hekimiyle iş birliği içinde ilerlemek en sağlıklı yoldur — bu yönlendirmeyi de birlikte planlarız.',
        ],
      },
      {
        heading: 'Ne Zaman Acil Destek Almalısınız?',
        paragraphs: [
          'Kendinize zarar verme veya yaşamınıza son verme düşünceleri yaşıyorsanız, lütfen beklemeyin. 112 Acil Çağrı Merkezi\'ni arayabilir ya da en yakın hastanenin acil servisine başvurabilirsiniz. Bu düşünceler geçicidir ve doğru destekle azalır.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Depresyon terapisi ne kadar sürer?',
        answer:
          'Süre; depresyonun şiddetine, ne kadar süredir devam ettiğine ve kişisel koşullara göre değişir. Düzenli katılım, sürecin en önemli belirleyicisidir. İlerleme birlikte ve düzenli olarak değerlendirilir.',
      },
      {
        question: 'İlaç kullanmadan depresyon geçer mi?',
        answer:
          'Hafif ve orta düzey depresyonda psikoterapi tek başına etkili olabilmektedir. Bazı durumlarda ise ilaç tedavisi ile terapinin birlikte yürütülmesi en iyi sonucu verir. İlaç değerlendirmesi psikiyatri hekiminin alanıdır; ihtiyaç hâlinde yönlendirme yapılır.',
      },
      {
        question: 'Online depresyon terapisi etkili mi?',
        answer:
          'Evet. Araştırmalar, online yürütülen terapinin depresyon tedavisinde yüz yüze terapiyle benzer sonuçlar verdiğini göstermektedir. İzmit dışında yaşıyorsanız online seçenek güvenle tercih edilebilir.',
      },
    ],
    relatedSlugs: ['bireysel-terapi', 'anksiyete-terapisi', 'online-terapi'],
    relatedPostSlugs: ['depresyon-belirtileri', 'online-terapi-etkili-mi'],
  },
  {
    slug: 'anksiyete-terapisi',
    title: 'Anksiyete (Kaygı) Terapisi',
    metaTitle: 'Anksiyete ve Kaygı Bozukluğu Terapisi | İzmit | Psikolog Asya Özcan',
    metaDescription:
      'Yaygın anksiyete, panik atak ve sosyal fobi için İzmit\'te ve online kaygı terapisi. Kaygınızı yönetmeyi öğrenin, yaşam kalitenizi geri kazanın.',
    shortDescription:
      'Yaygın kaygı, panik atak ve sosyal fobi ile baş etmek için kanıta dayalı terapi yaklaşımları.',
    intro: [
      'Kaygı, tehlike karşısında hepimizi koruyan doğal bir duygudur. Ancak kaygı; nedensiz biçimde sürekli hâle geldiğinde, bedensel belirtilerle günlük yaşamı zorlaştırdığında ve kaçınma davranışlarına yol açtığında bir kaygı bozukluğundan söz edilebilir.',
      'İzmit merkezli kliniğimde ve online platformda; yaygın anksiyete bozukluğu, panik atak ve sosyal fobi başta olmak üzere kaygı sorunları yaşayan danışanlarımla çalışıyorum.',
    ],
    sections: [
      {
        heading: 'Kaygı Bozukluğu Türleri',
        paragraphs: ['En sık karşılaşılan kaygı sorunları şunlardır:'],
        list: [
          'Yaygın anksiyete bozukluğu: gün boyu süren, kontrol edilemeyen endişe',
          'Panik bozukluk: ani başlayan çarpıntı, nefes darlığı ve yoğun korku atakları',
          'Sosyal fobi: değerlendirilme ve yargılanma korkusuyla sosyal ortamlardan kaçınma',
          'Sağlık kaygısı: hastalıklara dair sürekli endişe',
          'Belirli fobiler',
        ],
      },
      {
        heading: 'Kaygı Terapisinde Neler Yapılır?',
        paragraphs: [
          'Kaygı terapisinde ilk adım, kaygının hangi durumlarda ortaya çıktığını ve hangi düşüncelerle beslendiğini birlikte anlamaktır. Ardından kaygı döngüsünü kıran, kanıta dayalı yöntemlerle çalışırız: düşünce çalışmaları, kademeli olarak kaçınılan durumların üzerine gitme ve bedensel düzenleme becerileri bu sürecin parçalarıdır.',
          'Panik atak yaşayan danışanlarımla, atakların "tehlikeli olmadığını" deneyimsel olarak öğrenmek ve atak anında kullanılabilecek somut beceriler geliştirmek üzerine çalışırım.',
        ],
      },
      {
        heading: 'Kaygı ile Yaşamak Zorunda Değilsiniz',
        paragraphs: [
          'Kaygı bozuklukları, psikoterapiye en iyi yanıt veren ruh sağlığı sorunları arasındadır. Sosyal fobi gibi durumlarda online terapi, kendi güvenli alanınızdan katılabilmeniz sayesinde süreci kolaylaştırabilir. Önemli olan ilk adımı atmaktır.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Panik atak geçiriyorum, kalp krizi olabilir mi?',
        answer:
          'Panik atak belirtileri (çarpıntı, nefes darlığı, göğüste baskı) kalp krizini andırabilir ve bu nedenle önce tıbbi değerlendirme yapılması önemlidir. Tıbbi bir neden bulunmadığında, bu belirtiler panik bozukluğun tipik ve tedavi edilebilir belirtileridir.',
      },
      {
        question: 'Kaygı terapisi ne kadar sürede etki gösterir?',
        answer:
          'Kişiden kişiye değişmekle birlikte, kaygı bozuklukları terapiye görece hızlı yanıt veren alanlardandır. Düzenli katılım ve seans dışı uygulamalar süreci hızlandırır.',
      },
      {
        question: 'Sosyal fobim var, yüz yüze gelmekte zorlanıyorum. Ne yapabilirim?',
        answer:
          'Online terapi ile başlayabilirsiniz. Kendi ortamınızdan katılmak ilk adımı kolaylaştırır; ilerleyen süreçte hazır hissettiğinizde yüz yüze görüşmelere geçilebilir.',
      },
    ],
    relatedSlugs: ['bireysel-terapi', 'depresyon-terapisi', 'online-terapi'],
    relatedPostSlugs: ['online-terapi-etkili-mi', 'depresyon-belirtileri'],
  },
  {
    slug: 'online-terapi',
    title: 'Online Terapi',
    metaTitle: 'Online Terapi | Türkiye\'nin Her Yerinden | Psikolog Asya Özcan',
    metaDescription:
      'Güvenli video görüşme ile online terapi. Türkiye\'nin ve dünyanın her yerinden psikolojik destek alın. Bilimsel olarak etkinliği kanıtlanmış uzaktan terapi.',
    shortDescription:
      'Nerede olursanız olun, güvenli video görüşmeyle profesyonel psikolojik destek.',
    intro: [
      'Online terapi, psikolojik desteğe erişimin önündeki mesafe, zaman ve ulaşım engellerini ortadan kaldıran, bilimsel etkinliği araştırmalarla desteklenen bir görüşme biçimidir. İzmit\'te olmasanız bile — Türkiye\'nin herhangi bir şehrinden veya yurt dışından — terapi sürecinizi online yürütebilirsiniz.',
      'Görüşmeler, gizliliğinizi koruyan güvenli video bağlantısı üzerinden, yüz yüze seanslarla aynı ilkeler ve aynı özenle gerçekleştirilir.',
    ],
    sections: [
      {
        heading: 'Online Terapinin Avantajları',
        paragraphs: [],
        list: [
          'Konum bağımsızlık: şehir veya ülke fark etmeksizin erişim',
          'Zaman tasarrufu: yol ve trafik derdi olmadan görüşme',
          'Konfor: kendi güvenli alanınızdan katılım',
          'Süreklilik: seyahat, taşınma veya yoğun dönemlerde sürecin kesintiye uğramaması',
          'Sosyal kaygısı olanlar için daha kolay bir başlangıç',
        ],
      },
      {
        heading: 'Online Terapi Etkili mi?',
        paragraphs: [
          'Evet. Amerikan Psikoloji Derneği (APA) dahil birçok bilimsel otoritenin paylaştığı araştırmalar, online yürütülen terapinin — özellikle depresyon ve kaygı bozukluklarında — yüz yüze terapiyle karşılaştırılabilir sonuçlar verdiğini göstermektedir. Önemli olan görüşmenin yöntemi değil; terapötik ilişkinin kalitesi ve sürecin düzenliliğidir.',
          'Bu konuyu blog yazımda ayrıntılı olarak ele aldım: online terapi ile yüz yüze terapinin karşılaştırması, avantajları ve sınırlılıkları.',
        ],
      },
      {
        heading: 'Online Seans Nasıl Yapılır?',
        paragraphs: [
          'Randevunuzu oluşturduktan sonra size güvenli görüşme bağlantısı iletilir. Seans için ihtiyacınız olanlar: stabil bir internet bağlantısı, kamera ve mikrofonu olan bir cihaz ile görüşme boyunca yalnız kalabileceğiniz sessiz bir alan. İlk görüşmede süreç, gizlilik ve işleyişle ilgili tüm sorularınız yanıtlanır.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Online terapi görüşmeleri kayıt altına alınıyor mu?',
        answer:
          'Hayır. Görüşmeler kaydedilmez; gizlilik yüz yüze seanslardaki aynı etik ilkelerle korunur.',
      },
      {
        question: 'Online terapi hangi durumlarda uygun değildir?',
        answer:
          'Aktif intihar riski taşıyan durumlar, ağır psikiyatrik tablolar ve acil müdahale gerektiren krizlerde yüz yüze ve tıbbi destek önceliklidir. Bu tür durumlarda uygun yönlendirme yapılır.',
      },
      {
        question: 'Yurt dışından online terapi alabilir miyim?',
        answer:
          'Evet. Yurt dışında yaşayan Türkçe konuşan danışanlarımla düzenli olarak çalışıyorum. Saat farkına uygun randevu planlaması yapılabilir; ayrıca İngilizce ve Almanca dillerinde de hizmet verebiliyorum.',
      },
    ],
    relatedSlugs: ['bireysel-terapi', 'depresyon-terapisi', 'anksiyete-terapisi'],
    relatedPostSlugs: ['online-terapi-etkili-mi'],
  },
  {
    slug: 'otizm-ozel-egitim',
    title: 'Otizm ve Özel Eğitim Desteği',
    metaTitle: 'Otizm ve Özel Eğitim Desteği | İzmit | Psikolog Asya Özcan',
    metaDescription:
      'İzmit\'te otizm spektrum bozukluğu, gelişimsel gecikme ve öğrenme güçlüğü olan çocuklar için bireyselleştirilmiş eğitim ve terapi programları. Aile katılımlı yaklaşım.',
    shortDescription:
      'Otizm spektrum bozukluğu ve gelişimsel gecikmelerde bireyselleştirilmiş eğitim ve aile katılımlı destek.',
    intro: [
      'Otizm spektrum bozukluğu (OSB), her çocukta farklı biçimde kendini gösteren nörogelişimsel bir farklılıktır. Erken dönemde başlayan, bireyselleştirilmiş ve düzenli destek; çocuğun iletişim, sosyal etkileşim ve öz bakım becerilerinde anlamlı ilerleme sağlar.',
      'Özel eğitim alanındaki deneyimimle; otizm spektrum bozukluğu, gelişimsel gecikmeler ve öğrenme güçlüğü olan çocuklarla İzmit merkezli kliniğimizde çalışıyorum.',
    ],
    sections: [
      {
        heading: 'Nasıl Bir Destek Sunuyorum?',
        paragraphs: [
          'Her çocuk için önce kapsamlı bir gelişimsel değerlendirme yapılır; güçlü yönleri ve desteklenmesi gereken alanları birlikte belirleriz. Ardından çocuğa özgü hedeflerle bireyselleştirilmiş bir program oluşturulur.',
        ],
        list: [
          'Gelişimsel değerlendirme ve objektif çocuk testleri',
          'Sosyal beceri ve iletişim çalışmaları',
          'Davranış düzenleme ve öz bakım becerileri desteği',
          'Okula uyum ve kaynaştırma sürecinde rehberlik',
          'Ebeveyn eğitimi ve ev programı desteği',
        ],
      },
      {
        heading: 'Aile Katılımı ve Multidisipliner Çalışma',
        paragraphs: [
          'Otizmde en kalıcı ilerleme, seans odasında öğrenilenlerin evde ve okulda da sürdürülmesiyle sağlanır. Bu nedenle ebeveynler sürecin aktif ortağıdır: düzenli aile görüşmeleri yapılır ve evde uygulanabilir stratejiler paylaşılır.',
          'Gerektiğinde çocuk psikiyatristi, konuşma terapisti, ergoterapist ve okul öğretmenleriyle iş birliği içinde, multidisipliner bir yaklaşımla ilerlenir. Tanı koyma yetkisi hekimlere aittir; tanı süreci devam eden aileler için değerlendirme ve yönlendirme desteği sağlanır.',
        ],
      },
      {
        heading: 'Erken Fark Etmenin Önemi',
        paragraphs: [
          'Göz teması kurmama, adına tepki vermeme, yaşıtlarına ilgi göstermeme, dil gelişiminde gecikme ve tekrarlayan davranışlar; değerlendirme gerektiren erken işaretler olabilir. Bu işaretleri fark ediyorsanız, "bekleyip görmek" yerine bir uzman değerlendirmesi almak her zaman daha güvenli bir yoldur.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Çocuğuma otizm tanısını psikolog koyabilir mi?',
        answer:
          'Hayır; otizm spektrum bozukluğu tanısı çocuk psikiyatristi tarafından konulur. Psikolog olarak ben; gelişimsel değerlendirme, tanı sonrası eğitim-terapi programı ve aile desteği alanlarında çalışırım. Tanı şüphesi olan ailelere uygun yönlendirme yapılır.',
      },
      {
        question: 'Kaç yaşından itibaren destek alınabilir?',
        answer:
          'Gelişimsel destek için erken yaş her zaman avantajdır. Erken çocukluk döneminden itibaren değerlendirme yapılabilir; program çocuğun yaşına ve gelişim düzeyine göre uyarlanır.',
      },
      {
        question: 'Devlet destekli özel eğitim alıyoruz; bu programla çakışır mı?',
        answer:
          'Hayır, çakışmaz. Sunduğum destek, mevcut özel eğitim programlarını tamamlayıcı niteliktedir; hedeflerin uyumlu olması için diğer eğitimcilerle iş birliği yapılabilir.',
      },
    ],
    relatedSlugs: ['cocuk-ergen-psikolojisi', 'mmpi-testi', 'bireysel-terapi'],
    relatedPostSlugs: ['cocuklarda-ayrilik-kaygisi'],
  },
  {
    slug: 'mmpi-testi',
    title: 'MMPI ve Objektif Psikolojik Testler',
    metaTitle: 'MMPI Testi ve Objektif Psikolojik Testler | İzmit | Psikolog Asya Özcan',
    metaDescription:
      'Sertifikalı uygulayıcı ile MMPI kişilik testi ve objektif çocuk testleri. İzmit\'te profesyonel psikolojik değerlendirme, raporlama ve geri bildirim görüşmesi.',
    shortDescription:
      'Sertifikalı uygulayıcıyla MMPI kişilik değerlendirmesi ve objektif çocuk testleri.',
    intro: [
      'MMPI (Minnesota Çok Yönlü Kişilik Envanteri), dünyada en yaygın kullanılan ve en kapsamlı bilimsel geçerliliğe sahip kişilik değerlendirme araçlarından biridir. Kişilik özellikleri, duygusal durum ve psikolojik belirtiler hakkında ayrıntılı ve nesnel bir profil sunar.',
      'Sertifikalı MMPI ve Objektif Çocuk Testleri Uygulayıcısı olarak; değerlendirme, puanlama, raporlama ve geri bildirim görüşmesini kapsayan eksiksiz bir test süreci yürütüyorum.',
    ],
    sections: [
      {
        heading: 'MMPI Testi Hangi Durumlarda Uygulanır?',
        paragraphs: [],
        list: [
          'Terapi öncesi kapsamlı değerlendirme ve terapi planına yön verme',
          'Kişilik yapısını ve duygusal işleyişi anlama',
          'Belirtilerin (depresyon, kaygı vb.) nesnel biçimde değerlendirilmesi',
          'Kurumların veya hekimlerin talep ettiği psikolojik değerlendirmeler',
        ],
      },
      {
        heading: 'Test Süreci Nasıl İşler?',
        paragraphs: [
          'MMPI, yüzlerce maddeden oluşan yazılı bir envanterdir ve uygulama genellikle 60-90 dakika sürer. Uygulama öncesinde kısa bir ön görüşme yapılır; test tamamlandıktan sonra sonuçlar bilimsel ölçütlerle puanlanır ve raporlanır.',
          'Sürecin en önemli parçası geri bildirim görüşmesidir: sonuçlar size anlaşılır bir dille aktarılır, sorularınız yanıtlanır ve sonuçların terapi süreciyle nasıl ilişkilendirileceği birlikte planlanır. Test sonuçları gizlidir ve yalnızca sizinle paylaşılır.',
        ],
      },
      {
        heading: 'Objektif Çocuk Testleri',
        paragraphs: [
          'Çocuklarda gelişim düzeyini, dikkat becerilerini ve duygusal durumu değerlendirmek için yaşa uygun objektif testler uygulanır. Bu değerlendirmeler; okula hazırlık, öğrenme güçlüğü şüphesi ve gelişimsel takip gibi konularda ailelere somut bir yol haritası sunar.',
        ],
      },
    ],
    faqs: [
      {
        question: 'MMPI testine nasıl hazırlanmalıyım?',
        answer:
          'Özel bir hazırlık gerekmez. Dinlenmiş olmanız ve soruları içtenlikle yanıtlamanız yeterlidir. Testin güvenilirlik ölçekleri, yanıtlama tutumunu da değerlendirir; bu nedenle "doğru görünmeye çalışmak" yerine dürüst yanıtlar en sağlıklı sonucu verir.',
      },
      {
        question: 'Test sonucunu ne zaman öğrenirim?',
        answer:
          'Puanlama ve raporlama tamamlandıktan sonra geri bildirim görüşmesi planlanır. Bu görüşmede sonuçlar ayrıntılı olarak paylaşılır ve sorularınız yanıtlanır.',
      },
      {
        question: 'MMPI testi online yapılabilir mi?',
        answer:
          'Testin standardizasyonu açısından uygulama koşulları önemlidir; uygulama biçimi ön görüşmede ihtiyacınıza göre birlikte planlanır.',
      },
    ],
    relatedSlugs: ['bireysel-terapi', 'cocuk-ergen-psikolojisi', 'depresyon-terapisi'],
    relatedPostSlugs: ['depresyon-belirtileri'],
  },
];

export function getServiceBySlug(slug: string): ServicePage | null {
  return SERVICE_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_PAGES.map((s) => s.slug);
}
