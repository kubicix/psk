# 📝 MDX Blog Sistemi Kullanım ve Yönetim Dokümantasyonu

Bu doküman, **Psikolog Asya Özcan** web sitesi için geliştirilen backend-free (veritabanı gerektirmeyen) Next.js MDX blog sisteminin yapısını, nasıl yeni yazı ekleneceğini ve SEO optimizasyon detaylarını içerir.

---

## 📂 Dosya ve Klasör Yapısı

Blog sistemi tamamen statik dosyalar ve dosya okuma (File System) mekanizması üzerine kurulmuştur. İlgili dosyaların konumları aşağıdadır:

*   **İçerik Klasörü:** `src/content/blog/`
    *   Tüm blog yazıları bu klasör altında `.mdx` formatında saklanır.
*   **Arayüz Bileşenleri:** `src/components/blog/`
    *   `BlogCard.tsx`: Blog listesindeki her bir yazının kart görünümü.
    *   `BlogPostHeader.tsx`: Yazı detay sayfasındaki başlık ve meta (tarih, okuma süresi vb.) alanı.
    *   `AuthorBio.tsx`: Yazı sonundaki yazar biyografisi (E-E-A-T uyumlu).
*   **Yardımcı Kodlar (Utilities):** `src/lib/blog.ts`
    *   MDX dosyalarını okuyan, frontmatter parse eden ve okuma süresini hesaplayan fonksiyonları içerir.
*   **Sayfa Yönlendirmeleri:**
    *   `src/app/blog/page.tsx`: `/blog` listeleme sayfası.
    *   `src/app/blog/[slug]/page.tsx`: `/blog/yazi-linki` detay sayfası (SSG ile dinamik üretilir).
*   **Site Haritası:** `src/app/sitemap.ts`
    *   Yeni eklenen blog yazılarını otomatik olarak tarayıp site haritasına ekler.

---

## ✍️ Yeni Blog Yazısı Nasıl Eklenir?

Yeni bir yazı eklemek için bir veritabanı veya yönetim paneline ihtiyacınız yoktur. Sadece aşağıdaki adımları takip etmeniz yeterlidir:

### Adım 1: MDX Dosyası Oluşturun
`src/content/blog/` klasörü altında yeni bir dosya oluşturun. Dosya isminin küçük harflerle, Türkçe karakter içermeden ve kelimeler arasında tire (`-`) olacak şekilde verilmesi önemlidir.
*Örnek dosya adı:* `cocuklarda-otizm-belirtileri.mdx`

### Adım 2: Frontmatter (Üst Bilgileri) Tanımlayın
Oluşturduğunuz dosyanın en üstüne, yazının başlığı, tarihi ve SEO meta açıklaması gibi bilgileri içeren şu yapıyı (frontmatter) ekleyin:

```markdown
---
title: "Çocuklarda Otizm Belirtileri ve Erken Tanının Önemi"
slug: "cocuklarda-otizm-belirtileri"
date: "2026-07-20"
updated: "2026-08-01"
author: "Psikolog Asya Özcan"
description: "Çocuklarda otizm spektrum bozukluğu belirtileri nelerdir? İlk belirtiler kaç yaşında başlar ve erken teşhis neden önemlidir? Uzman psikolog rehberi."
tags: ["otizm", "çocuk psikolojisi", "erken tanı"]
image: "/images/blog/otizm-belirtileri.webp"
readingTime: "6 dk"
---
```

> ⚠️ **Önemli Kurallar:**
> 1. `slug` değeri, dosya adı ile birebir aynı olmalıdır.
> 2. `date` formatı `YYYY-MM-DD` şeklinde olmalıdır.
> 3. `updated` **opsiyoneldir** — yazıyı yayınladıktan sonra güncellerseniz ekleyin. Google'a
>    "içerik güncel tutuluyor" sinyali verir (`dateModified` schema alanı ve OG `modifiedTime`
>    buradan beslenir). Eklemezseniz otomatik olarak `date` kullanılır, hata vermez.
> 4. `description` kısmı Google arama sonuçlarında görüneceği için 150-160 karakteri geçmemelidir.
> 5. `image` görseli **`.webp` formatında** olmalı (diğer tüm görseller webp — tutarlılık ve
>    dosya boyutu için). `public/images/blog/` klasörü altına yüklenip yolu buraya yazılır
>    (Örn: `/images/blog/dosya-adi.webp`). Görsel en az **1200×630 px** olmalı — hem blog
>    kartında hem paylaşım (OG) önizlemesinde bu görsel kullanılıyor, düşük çözünürlük
>    sosyal medya paylaşımlarında bulanık çıkar.
> 6. `tags` mevcut yazılardan en az birini paylaşacak şekilde seçilirse (örn. zaten kullanılan
>    "çocuk psikolojisi"), o yazı otomatik olarak "İlgili Yazılar" bölümünde eşleşir — bkz.
>    aşağıdaki "Dikkat Edilmesi Gerekenler" bölümü.

### Adım 3: İçeriği Yazın
Üst bilgilerden sonra (üçüncü tire işaretinin altından başlayarak) yazınızı standart Markdown formatında yazabilirsiniz. Örnek:

```markdown
# Başlık 1 (H1 - Sadece bir kez en üstte kullanılmalıdır)

Giriş paragrafınız buraya gelecektir.

## Alt Başlık (H2)

Buraya alt başlık içerikleri gelir. Maddeli listeler için:
*   Madde 1
*   Madde 2

### Alt Başlık (H3)

Daha detaylı alt başlıklar için üç diyez (`###`) kullanabilirsiniz.
```

---

## 🔍 SEO ve Performans Özellikleri

Geliştirilen bu blog sistemi, arama motorlarında maksimum görünürlük elde etmek için aşağıdaki SEO standartlarını otomatik olarak uygular:

1.  **Dinamik Metadata:** Her blog yazısının `title`, `description` ve `openGraph` etiketleri kendi frontmatter verilerinden dinamik olarak oluşturulur.
2.  **Canonical URL:** Yinelenen içerik (duplicate content) sorununu önlemek için her yazıya kendi orijinal linkini gösteren `canonical` etiketi otomatik eklenir.
3.  **JSON-LD (Structured Data):** Her yazı için `BlogPosting` + `BreadcrumbList` şema verisi dinamik olarak üretilir ve sayfaya gömülür (yazar, yayın tarihi, güncelleme tarihi, görsel dahil).
4.  **Otomatik Sitemap:** `sitemap.ts` dosyası, `src/content/blog` altındaki tüm yazıları tarayarak site haritasını günceller. Arama motorları yeni yazılardan anında haberdar olur.
5.  **Otomatik RSS:** `/feed.xml` de aynı şekilde tüm yazıları otomatik listeler — ayrı bir işlem gerekmez.
6.  **İlgili Yazılar & Önceki/Sonraki Navigasyon:** Her yazının altında ortak etiketlere göre eşleşen 2 ilgili yazı ve tarih sırasına göre önceki/sonraki yazı linkleri otomatik oluşur.
7.  **Hız ve SSG:** Yazılar Next.js'in statik sayfa üretimi (Static Site Generation - SSG) teknolojisiyle derlenir. Sunucuda anlık render edilmediği için milisaniyeler içinde açılır ve bu durum Google Lighthouse skorlarını zirveye taşır.

---

## 📈 İçerik Yayınlama Rutini ve Tavsiyeler

*   **Frekans:** İlk 2 ay boyunca haftada **2 yazı**, sonraki aylarda ise haftada **1 yazı** olacak şekilde düzenli paylaşım yapılmalıdır.
*   **İç Bağlantılar:** Yazıların içinden kliniğin sunduğu hizmet sayfalarına (artık her hizmetin
    kendi sayfası var — Örn: `[otizm ve özel eğitim desteği](/hizmetler/otizm-ozel-egitim)`,
    `[depresyon terapisi](/hizmetler/depresyon-terapisi)`) yönlendirmeler yaparak ziyaretçiyi
    sitede tutun ve o hizmet sayfasına SEO değeri aktarın. Tüm hizmet slug'ları için
    `src/lib/services.ts` dosyasına bakın.
*   **Yazı Uzunluğu:** Sağlık ve psikoloji aramalarında derinlikli içerikler tercih edilir. Yazıların en az **800-1500 kelime** arasında olmasına özen gösterin.

---

## ⚠️ Dikkat Edilmesi Gerekenler / Sık Yapılan Hatalar

Aşağıdakiler blog yazısı eklerken/düzenlerken en sık karşılaşılan ya da SEO'yu sessizce
zayıflatan noktalardır. Yeni yazı eklemeden önce bu listeyi gözden geçirin.

*   **`slug` ile dosya adı uyuşmazlığı:** `getAllPostSlugs()` dosya adından slug üretir,
    ama frontmatter'daki `slug` alanı varsa o kullanılır. İkisi farklıysa link ile
    sayfa içeriği arasında tutarsızlık oluşabilir (örn. sitemap'te bir URL, sayfa
    içinde canonical başka URL). **İkisini her zaman birebir aynı tutun.**
*   **Aynı `description` metnini iki yazıda kullanmayın:** Google, birbirine çok benzeyen
    meta açıklamaları "duplicate" olarak görüp kendi otomatik açıklamasını gösterebilir —
    yazdığınız özenli açıklama SERP'te hiç görünmez.
*   **Başlıkta anahtar kelimeyi tekrar tekrar sıkıştırmayın (keyword stuffing):**
    "Depresyon Depresyon Belirtileri Depresyon Tedavisi" gibi başlıklar cezalandırılır.
    Doğal, okunabilir başlıklar tercih edin.
    Örnek: *"Depresyon Belirtileri: Üzgün Olmak ile Depresyon Arasındaki Fark"* — doğru.
*   **Görsel formatı `.jpg`/`.png` yüklemeyin:** Site genelinde tutarlılık ve performans
    için tüm görseller `.webp`. `sharp` ile kolayca dönüştürülür:
    `npx sharp -i giris.jpg -o public/images/blog/yazi-adi.webp`
*   **Yazı içinde H1 kullanmayın:** MDX içeriğinde `# Başlık` yazarsanız sayfada **iki
    tane H1** oluşur (biri `BlogPostHeader`'dan otomatik geliyor, `post.title`'dan
    üretiliyor). Bu, arama motorları için başlık hiyerarşisini bozar. MDX içeriği
    **`## Alt Başlık` (H2) ile başlamalı**, ayrı bir H1 yazmayın — frontmatter'daki
    `title` zaten sayfanın H1'i.
*   **Tıbbi/psikolojik iddialarda kaynak belirtin:** YMYL (Your Money or Your Life)
    kategorisindeki bu site için Google E-E-A-T'yi ciddiye alıyor. "Araştırmalar
    gösteriyor ki..." derken mümkünse hangi araştırma/kurum olduğunu belirtin (örn.
    "Amerikan Psikoloji Derneği (APA)..."). Belirsiz atıflardan kaçının.
*   **Kesin tanı/teşhis ifadesi kullanmayın:** "Bu belirtiler varsa kesinlikle X
    hastalığınız var" gibi ifadeler yerine "profesyonel değerlendirme gerektirebilir",
    "bir uzmana danışmanız önerilir" gibi ihtiyatlı dil kullanın — hem etik hem SEO
    açısından (Google sağlık içeriğinde aşırı kesin iddiaları düşük kaliteli sinyal
    olarak değerlendirebilir).
*   **`tags` alanını tamamen yeni/tek kullanımlık etiketlerle doldurmayın:** Her yazıda
    farklı etiket seti kullanırsanız "İlgili Yazılar" algoritması (ortak etiket sayısına
    göre eşleştirme) hiç eşleşme bulamaz. Mevcut etiket havuzunu (`çocuk psikolojisi`,
    `depresyon`, `anksiyete`, `online terapi` vb.) mümkün olduğunca yeniden kullanın,
    yeni bir konu açıyorsanız 1 yeni + 1-2 mevcut etiket şeklinde karışık kullanın.
*   **Yazıyı yayınladıktan sonra `date`'i değiştirmeyin:** Tarihi geriye/ileriye
    oynatmak sitemap'te ve schema'da tutarsızlık yaratır, ayrıca sıralamayı bozar
    (ana sayfa "en son 3 yazı" `date`'e göre sıralanıyor). Güncelleme yaptıysanız
    `updated` alanını kullanın, `date`'e dokunmayın.
*   **Build/deploy sonrası kontrol:** Yeni yazı yayınladıktan sonra `/sitemap.xml` ve
    `/feed.xml`'de göründüğünü tarayıcıdan hızlıca kontrol edin — MDX'te syntax hatası
    varsa (örn. kapanmamış frontmatter `---`) build sessizce o yazıyı atlayabilir.
