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
author: "Psikolog Asya Özcan"
description: "Çocuklarda otizm spektrum bozukluğu belirtileri nelerdir? İlk belirtiler kaç yaşında başlar ve erken teşhis neden önemlidir? Uzman psikolog rehberi."
tags: ["otizm", "çocuk psikolojisi", "erken tanı"]
image: "/images/blog/otizm-belirtileri.jpg"
readingTime: "6 dk"
---
```

> ⚠️ **Önemli Kurallar:**
> 1. `slug` değeri, dosya adı ile birebir aynı olmalıdır.
> 2. `date` formatı `YYYY-MM-DD` şeklinde olmalıdır.
> 3. `description` kısmı Google arama sonuçlarında görüneceği için 150-160 karakteri geçmemelidir.
> 4. `image` görseli `public/images/blog/` klasörü altına yüklenmeli ve yolu buraya yazılmalıdır (Örn: `/images/blog/dosya-adi.jpg`).

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
3.  **JSON-LD (Structured Data):** Her yazı için Google'ın makaleleri daha iyi anlamasını sağlayan `Article` şema verisi dinamik olarak üretilir ve sayfaya gömülür.
4.  **Otomatik Sitemap:** `sitemap.ts` dosyası, `src/content/blog` altındaki tüm yazıları tarayarak site haritasını günceller. Arama motorları yeni yazılardan anında haberdar olur.
5.  **Hız ve SSG:** Yazılar Next.js'in statik sayfa üretimi (Static Site Generation - SSG) teknolojisiyle derlenir. Sunucuda anlık render edilmediği için milisaniyeler içinde açılır ve bu durum Google Lighthouse skorlarını zirveye taşır.

---

## 📈 İçerik Yayınlama Rutini ve Tavsiyeler

*   **Frekans:** İlk 2 ay boyunca haftada **2 yazı**, sonraki aylarda ise haftada **1 yazı** olacak şekilde düzenli paylaşım yapılmalıdır.
*   **İç Bağlantılar:** Yazıların içinden kliniğin sunduğu hizmetlere (Örn: `[otizm seansları için](/hizmetler#ozel-egitim-ve-otizm)`) yönlendirmeler yaparak ziyaretçiyi sitede tutun.
*   **Yazı Uzunluğu:** Sağlık ve psikoloji aramalarında derinlikli içerikler tercih edilir. Yazıların en az **800-1500 kelime** arasında olmasına özen gösterin.
