# 📧 EmailJS Kurulum Talimatları

Bu rehber, web sitenizde gerçek mail gönderimi için EmailJS servisini nasıl kuracağınızı açıklar.

## 📋 Gerekli Adımlar

### 1️⃣ EmailJS Hesabı Oluşturma

1. [EmailJS.com](https://www.emailjs.com/) adresine gidin
2. **"Sign Up"** butonuna tıklayın
3. Email adresinizle ücretsiz hesap oluşturun
4. Email doğrulamasını tamamlayın

### 2️⃣ Email Servisi Ekleme

1. Dashboard'da **"Email Services"** sekmesine gidin
2. **"Add Service"** butonuna tıklayın
3. **Gmail** seçin
4. **psikologasyaozcan@gmail.com** ile bağlantı kurun
5. **Service ID**'yi not alın (örnek: `service_abc123`)

### 3️⃣ Email Template Oluşturma

1. **"Email Templates"** sekmesine gidin
2. **"Create New Template"** tıklayın
3. Şu template'i kullanın:

```
Konu: Yeni Mesaj - {{user_name}}

Gönderen: {{user_name}}
Email: {{user_email}}

Mesaj:
{{message}}

---
Bu mesaj web sitenizden gönderilmiştir.
```

4. **Template ID**'yi not alın (örnek: `template_xyz789`)

### 4️⃣ Public Key Alma

1. **"Account"** sekmesine gidin
2. **"API Keys"** bölümünde **Public Key**'i bulun
3. Bu key'i not alın (örnek: `user_abcdefgh12345`)

### 5️⃣ Web Sitesinde Güncelleme

`index.html` dosyasında şu satırları bulun ve kendi değerlerinizle değiştirin:

```javascript
// Bu satırı bulun:
emailjs.init("YOUR_PUBLIC_KEY");
// Değiştirin:
emailjs.init("user_abcdefgh12345");

// Bu satırı bulun:
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
// Değiştirin:
emailjs.sendForm('service_abc123', 'template_xyz789', this)
```

## ✅ Test Etme

1. Web sitenizi açın
2. İletişim formunu doldurun
3. **"Mesaj Gönder"** butonuna tıklayın
4. **psikologasyaozcan@gmail.com** adresine mail gelip gelmediğini kontrol edin

## 🔧 Sorun Giderme

### Mail Gelmiyor?
- EmailJS dashboard'da **"Logs"** bölümünü kontrol edin
- Service ve Template ID'lerin doğru olduğunu kontrol edin
- Gmail spam klasörünü kontrol edin

### Hata Alıyorum?
- Browser console'da (F12) hata mesajlarını kontrol edin
- Public Key'in doğru olduğunu kontrol edin
- İnternet bağlantınızı kontrol edin

## 💰 Limitler

**Ücretsiz Plan:**
- Ayda 200 mail gönderimi
- Temel support

Daha fazla mail gönderimi için ücretli planlara geçebilirsiniz.

## 📞 Yardım

Sorun yaşarsanız:
1. [EmailJS Documentation](https://www.emailjs.com/docs/)
2. [EmailJS Support](https://www.emailjs.com/contact/)

---
**Not:** Bu kurulum yaklaşık 5-10 dakika sürmektedir. 