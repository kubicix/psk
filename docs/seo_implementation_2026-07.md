# 🔍 SEO Altyapı Dokümantasyonu (Temmuz 2026)

Bu doküman, Temmuz 2026'da yapılan kapsamlı SEO çalışmasının teknik özetini, **gelecekte
takip edilmesi gerekenleri** ve **dikkat edilmesi gereken noktaları** içerir. Blog yazısı
eklemek için `docs/blog_documentation.md`'ye bakınız — burada tekrar edilmemiştir.

---

## 1. Ne Değişti? (Özet)

| Alan | Önce | Sonra |
|---|---|---|
| İndekslenebilir URL sayısı | 5 | 13 (+ feed.xml, manifest) |
| Hizmet sayfaları | Yok (tek sayfa `#services` bölümü) | 7 ayrı sayfa: `/hizmetler/*` |
| OG görseli | 500×500 logo (yanlış boyut beyanı) | Gerçek 1200×630 marka görseli |
| Schema.org | Tek `Psychologist` objesi | `@graph`: Psychologist + Person + WebSite + her sayfada Breadcrumb/FAQ/Service/BlogPosting |
| RSS | Yok | `/feed.xml` |
| Manifest | Yok | `/manifest.webmanifest` |
| Güvenlik header'ları | Yok | `next.config.ts` → nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| İç linkleme | Zayıf (footer sadece sosyal ikonlar) | Footer'da tüm hizmetler + site haritası; blog yazıları arası ilişkili içerik |
| SSS | Yok | Ana sayfada 6 soru + her hizmet sayfasında 3 soru (hepsi FAQPage schema) |
| Form UX | `alert()` popup | Inline başarı/hata mesajı + honeypot spam koruması |
| Apple touch icon | Yok | `src/app/apple-icon.png` (180×180) — iOS ana ekran/paylaşım önizlemelerinde artık düzgün ikon çıkıyor |

Yeni dosyaların listesi ve detaylı teknik rapor için önceki konuşma geçmişindeki
"SEO Overhaul Report" bölümüne bakılabilir; bu doküman ileriye dönük takip odaklıdır.

---

## 2. ⚠️ Acil Takip Gerektiren Eksik: Telefon Numarası

Sitede **hiçbir yerde gerçek bir telefon numarası yok**. `ContactForm.tsx`'teki telefon
alanı sadece formda isteğe bağlı bir input — placeholder `0555 000 00 00` örnek amaçlı,
gerçek numara değil.

**Neden önemli:** Google local SEO'da NAP (Name-Address-Phone) tutarlılığı en güçlü
sıralama faktörlerinden biri. Google Business Profate kayıtlı numarayla site üzerindeki
numara (varsa) birebir eşleşmeli.

**Ne zaman yapılacak:** Asya Hanım gerçek işletme telefon numarasını verdiğinde:
1. `src/lib/constants.ts` içine `CONTACT_PHONE` sabiti eklenir
2. `tel:` linki + `ContactInfo.tsx`'e görünür telefon satırı eklenir
3. `schema.org/Psychologist` objesine `telephone` alanı eklenir (`src/app/layout.tsx`)
4. WhatsApp Business linki (`wa.me/90XXXXXXXXXX`) eklenebilir — Task talebinde geçen
   "sticky WhatsApp butonu" bu numara olmadan yapılamaz
5. Google Business Profile'daki numarayla **birebir aynı format** kullanılmalı

---

## 3. Google Search Console / Bing Webmaster Tools

Repo içinde herhangi bir arama motoru doğrulama meta etiketi (`google-site-verification`)
**yok**. Bu, kod eksikliği değil — GSC hesabına eklenmemiş anlamına gelir.

**Yapılması gerekenler (manuel, tek seferlik):**
1. [Google Search Console](https://search.google.com/search-console) → mülk ekle → `https://www.psikologasyaozcan.com.tr`
2. Doğrulama: DNS TXT kaydı (Vercel domain ayarlarından) **veya** HTML meta tag yöntemi.
   Meta tag yöntemi seçilirse `src/app/layout.tsx` → `metadata.verification.google` alanına eklenir.
3. Sitemap gönder: `https://www.psikologasyaozcan.com.tr/sitemap.xml`
4. Aynısını [Bing Webmaster Tools](https://www.bing.com/webmasters) için de yapın (GSC ile içe aktarma seçeneği var, dakikalar sürer)
5. **Yeni `/hizmetler/*` sayfalarının indekslenmesini** GSC → URL Denetimi → "Dizine Eklenmesini İste" ile hızlandırabilirsiniz

**Takip sıklığı:** Ayda bir GSC'de "Coverage" ve "Performance" raporlarına bakın. Yeni
hizmet sayfalarının indekslenmesi genelde 1-3 hafta sürer.

---

## 4. Yapı Gereği Bilinçli Eklenmeyenler

Aşağıdakiler unutulmadı — Google kurallarına aykırı olduğu veya veri eksikliği nedeniyle
bilinçli olarak eklenmedi:

- **`aggregateRating` schema (yıldız puanı):** Google, üçüncü taraf platformlardan (Google
  Business dahil) alınan yorumların site üzerinde `aggregateRating` olarak işaretlenmesine
  izin vermiyor — kendi platformunuzda topladığınız yorumlar için geçerli. Google
  Business Profile üzerindeki 5 yıldız zaten arama sonuçlarında ayrıca gösteriliyor.
- **`HowTo` schema:** Google Eylül 2023'te bu zengin sonucu kaldırdı, kullanılmadı.
- **Yeni `FAQPage` zengin sonucu beklentisi:** Google, Mayıs 2026'da FAQ zengin sonucunu
  TÜM siteler için kaldırdı (önceden sadece devlet/sağlık siteleri istisnaydı). FAQPage
  şeması yine de eklendi çünkü AI arama motorları (ChatGPT, Perplexity, Google AI
  Overviews) bu tür yapılandırılmış veriyi alıntılama için kullanmaya devam ediyor —
  ama klasik Google SERP'de artık "accordion" görünümü **beklenmemeli**.
- **Etiket/kategori sayfaları (`/blog/tag/depresyon` gibi):** Sadece 3 blog yazısı varken
  bu sayfalar "thin content" (ince içerik) sayılır. 10+ yazıya ulaşınca değerlendirilmeli.
- **Çoklu dil (hreflang):** Site tek dilli (Türkçe). İngilizce/Almanca hizmet verildiği
  belirtiliyor ama ayrı dil sayfaları yok — talep gelirse ayrı proje.

---

## 5. Yeni İçerik Ekleme Rehberi

### 5.1 Yeni Hizmet Sayfası Eklemek

Tüm hizmet sayfaları tek dosyadan besleniyor: **`src/lib/services.ts`**

Yeni hizmet eklemek için `SERVICE_PAGES` dizisine yeni bir obje eklemek yeterli — otomatik
olarak şurada belirir:
- `/hizmetler` liste sayfası
- `sitemap.xml`
- Footer (tüm sayfalarda)
- İlgili diğer hizmetlerin "İlgili Hizmetler" bölümü (eğer `relatedSlugs` içinde referans verilirse)

Her hizmet objesi şu alanları içermeli: `slug`, `title`, `metaTitle`, `metaDescription`,
`shortDescription`, `intro[]`, `sections[]` (heading + paragraphs + opsiyonel list),
`faqs[]` (min. 2-3 soru önerilir — FAQPage schema'ya besleniyor), `relatedSlugs[]`,
`relatedPostSlugs[]` (blog yazılarıyla ilişkilendirme).

**SEO önerisi:** Her yeni hizmet sayfası en az 500 kelime özgün içerik içermeli (Google
"thin content" cezasından kaçınmak için) ve mevcut hizmetlerden en az birine `relatedSlugs`
ile bağlanmalı.

### 5.2 Yeni Blog Yazısı Eklemek

Değişmedi — bkz. `docs/blog_documentation.md`. Tek ek: frontmatter'a artık opsiyonel
**`updated: "YYYY-MM-DD"`** alanı eklenebilir (yazıyı güncellediğinizde). Eklenirse
`dateModified` schema alanında ve OG `modifiedTime`'da kullanılır — Google'a içeriğin
güncel tutulduğu sinyalini verir. Eklenmezse otomatik olarak `date` kullanılır.

---

## 6. Düzenli Bakım Kontrol Listesi

| Sıklık | Görev |
|---|---|
| Her blog yazısında | Frontmatter'da `description` 150-160 karakter aralığında mı? `tags` 2-3 adet mi? Görsel `public/images/blog/` altında webp mi? |
| Ayda 1 | GSC "Coverage" ve "Performance" raporlarını kontrol et |
| Ayda 1 | Google Business Profile'a yeni yorum/görsel eklendi mi kontrol et — schema'daki yorum sayısıyla site arasında fark oluşmasın |
| 3 ayda 1 | `npm outdated` ile bağımlılık güncellemesi (özellikle `next`, `sharp`) |
| Yılda 1 | Tüm hizmet sayfası içeriklerini gözden geçir — güncel mi, yeni hizmet eklenecek mi |
| Blog 10+ yazıya ulaşınca | Etiket/kategori sayfası eklemeyi değerlendir (bkz. §4) |
| Telefon numarası netleşince | §2'deki adımları uygula |

---

## 7. Dikkat Edilmesi Gereken Teknik Noktalar

- **OG görseli yeniden üretimi:** `public/images/og-default.jpg`, bir Node script ile
  (`next/og` + `sharp`) üretildi; WSL ortamında `sharp`'ın SVG metin render'ı **Pango
  eksikliği nedeniyle çalışmıyor** — bu yüzden `next/og`'un Satori motoru ve Windows'taki
  Arial fontu (`/mnt/c/Windows/Fonts/arial.ttf`) kullanıldı. Görseli güncellemek
  isterseniz bu yöntemi tekrar kullanmanız gerekir; düz `sharp` + SVG `<text>` metodu
  WSL'de metinsiz/boş çıkar.
- **`SERVICE_PAGES` sırası önemli değil** ama `relatedSlugs` içinde referans verilen
  slug'ın gerçekten var olduğundan emin olun — TypeScript derleme zamanında yakalamaz
  (runtime'da sessizce filtrelenir, `getServiceBySlug` null dönerse `.filter(Boolean)` ile
  elenir).
- **`next.config.ts` içindeki security header'lar** tüm route'lara (`/:path*`) uygulanıyor.
  Yeni bir API route eklenirse (örn. webhook) CORS ihtiyacı varsa bu header'ların
  çakışmadığından emin olun.
- **Sitemap `lastModified`** artık `new Date()` (build anı) değil, en son blog yazısının
  tarihi kullanılıyor — statik sayfalar için gereksiz "her build'de değişti" sinyalini
  önler. Yeni statik sayfa eklerseniz aynı mantığı koruyun.

---

## 8. Gelecek İçin Öneriler (Öncelik Sırasına Göre)

1. **Telefon numarası** (bkz. §2) — en yüksek etkili eksik
2. **GSC/Bing kurulumu** (bkz. §3) — indexleme hızını doğrudan etkiler
3. Google Business Profile'da yorum sayısını artırmak (şu an 3) — en güçlü local ranking sinyali
4. Blog yazı sayısı arttıkça (10+) kategori sayfaları
5. Hizmet sayfalarına özel OG görselleri (şu an hepsi aynı varsayılan görseli kullanıyor)
6. Hero fotoğrafı daha küçük/optimize crop ile LCP'yi iyileştirme (şu an 4.15s alan verisi var)
