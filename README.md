# Düzce Boya Badana

Düzce ve ilçeleri için hazırlanmış mobil uyumlu, yerel SEO odaklı statik tanıtım sitesi.

## Yerelde çalıştırma

```powershell
python -m http.server 8000
```

Ardından `http://localhost:8000` adresini açın.

## Yayına almadan önce

- `index.html`, `robots.txt` ve `sitemap.xml` içindeki örnek alan adını gerçek alan adıyla değiştirin.
- Google Ads / GA4 etiketi alındığında `index.html` dosyasının `head` bölümüne ekleyin.
- `script.js` içindeki `phone_call_click` ve `whatsapp_click` olaylarını Google Ads dönüşümlerine bağlayın.
- İşletmenin doğrulanmış açık adresi varsa yapılandırılmış veriye ekleyin.
