# 🧠 Psikolog Asya Özcan - Portfolio Web Sitesi

Modern, responsive ve profesyonel psikolog portfolio web sitesi. Bootstrap 5, EmailJS entegrasyonu ve tamamen mobil uyumlu tasarım.

## ✨ Özellikler

- 📱 **Tam Responsive**: Tüm cihazlarda mükemmel görünüm
- 💌 **Çalışan İletişim Formu**: EmailJS entegrasyonu ile gerçek mail gönderimi
- 🎨 **Modern Tasarım**: Soft renkler ve smooth animasyonlar
- 🚀 **Hızlı Yükleme**: Optimize edilmiş kod ve görseller
- ♿ **Erişilebilir**: WCAG standartlarına uygun
- 🌐 **Çok Dil Desteği**: Türkçe, İngilizce, Almanca hizmet

## 🎯 İçerik Bölümleri

- **Hero Section**: Kişisel tanıtım ve profesyonel başlık
- **Hakkımda**: Detaylı biyografi ve uzmanlık alanları
- **Hizmetler**: 6 ana hizmet kategorisi + lokasyon bilgisi
- **Referanslar**: Müşteri yorumları
- **İletişim**: Çalışan form + iletişim bilgileri
- **Footer**: Sosyal medya linkleri

## 🛠️ Teknolojiler

- **HTML5** + **CSS3** (Custom Properties)
- **Bootstrap 5.3.0** (Grid System & Components)
- **JavaScript** (Vanilla JS - No frameworks)
- **EmailJS** (Form handling)
- **Google Fonts** (Inter family)
- **Font Awesome 6** (Icons)

## 📧 EmailJS Kurulumu

Bu web sitesi EmailJS kullanarak gerçek mail gönderimi sağlar. Kurulum için:

### 1. EmailJS Hesabı Oluşturun
[EmailJS.com](https://www.emailjs.com/) adresinde ücretsiz hesap açın.

### 2. Gerekli Key'leri Alın
- **Service ID**: Email sağlayıcınızı bağladıktan sonra
- **Template ID**: Email template'i oluşturduktan sonra  
- **Public Key**: Account ayarlarından

### 3. dev.json Dosyası Oluşturun
Proje ana dizininde `dev.json` dosyası oluşturun:

```json
{
  "emailjs": {
    "publicKey": "user_abcdefgh12345",
    "serviceId": "service_abc123",
    "templateId": "template_xyz789"
  }
}
```

**Not:** `dev.json.example` dosyasını kopyalayıp düzenleyebilirsiniz.

### 4. Template Parametreleri
EmailJS template'inizde şu parametreleri kullanın:
- `user_name`
- `user_email`
- `user_phone`
- `message`

Detaylı kurulum için `EmailJS_Kurulum_Talimatları.md` dosyasını inceleyin.

## 🚀 Kullanım

### 💻 Local Development (Bilgisayarınızda)
1. **Clone/Download** edin
2. **HTML dosyasını direkt açın** - EmailJS embedded config ile çalışır
3. İletişim formunu test edin

### 🌐 Production (Web Sunucusunda)  
1. **dev.json** dosyası oluşturun:
   ```json
   {
     "emailjs": {
       "publicKey": "YOUR_KEY",
       "serviceId": "YOUR_SERVICE",
       "templateId": "YOUR_TEMPLATE"
     }
   }
   ```
2. **index.html'den embedded config'i temizleyin** (güvenlik için)
3. **Görselleri** güncelleyin:
   - `headshot2.jpg`: Profil fotoğrafı
   - `logo.png`: Logo dosyası
   - `maps.png`: Lokasyon haritası
4. **İçerik** güncelleyin (isim, adres, telefon, vs.)
5. Web sunucusuna yükleyin

## 📁 Dosya Yapısı

```
📁 psk/
├── 📄 index.html                      # Ana web sayfası
├── 🖼️ headshot2.jpg                  # Profil fotoğrafı
├── 🖼️ logo.png                       # Logo
├── 🖼️ maps.png                       # Lokasyon haritası
├── 🔐 dev.json                       # EmailJS key'leri (gizli)
├── 📄 dev.json.example               # Key'ler için örnek dosya
├── 🚫 .gitignore                     # Git ignore kuralları
├── 📋 EmailJS_Kurulum_Talimatları.md # EmailJS rehberi
└── 📖 README.md                      # Bu dosya
```

## 📱 Responsive Breakpoints

- **iPhone SE**: ≤375px
- **Small Mobile**: 376-480px
- **Mobile**: 481-767px
- **Tablet**: 768-991px
- **Laptop**: 992-1199px
- **Desktop**: ≥1200px

## 🎨 Renk Paleti

- **Primary**: `#E6E6FA` (Lavender)
- **Secondary**: `#B6D7FF` (Pastel Blue)
- **Accent**: `#9370DB` (Medium Slate Blue)
- **Text Dark**: `#2C3E50`
- **Text Light**: `#6C757D`

## ⚙️ Özelleştirme

### Renkleri Değiştirme
CSS `:root` variables'ları düzenleyin (satır ~17-24).

### Hizmetleri Güncelleme
`#services` bölümündeki service-card'ları düzenleyin.

### Animasyonları Kapatma
`.fade-in` class'ını ve observers'ı kaldırın.

## 🔒 Güvenlik

- ✅ EmailJS key'leri `dev.json` dosyasında ayrıştırıldı
- ✅ `dev.json` dosyası `.gitignore`'da korunuyor
- ✅ Hassas bilgiler public repo'da görünmüyor
- ✅ XSS koruması mevcut
- ✅ Async config loading ile güvenli yükleme
- ⚠️ Production'da `dev.json` dosyasını oluşturmayı unutmayın

## 📄 Lisans

Bu proje açık kaynak kodludur. Kişisel ve ticari kullanım için serbesttir.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun
3. Commit yapın
4. Pull request gönderin

## 📞 Destek

Sorularınız için:
- 📧 Email: `psikologasyaozcan@gmail.com`
- 📱 Telefon: `Yakında eklenecek...`
- 💼 LinkedIn: [asya-ozcan](https://www.linkedin.com/in/asya-ozcan/)
- 📷 Instagram: [@psikologasyaozcan](https://www.instagram.com/psikologasyaozcan/)

---

**💜 Built with care for mental health professionals** 