# 🌤️ Weather Forecast App

Ushbu loyiha OpenWeatherMap API asosida qurilgan va foydalanuvchiga real vaqtda ob-havo prognozlarini taqdim etadi. Ilova `dark` va `light` rejimlarni qo‘llab-quvvatlaydi.

## 🔧 Texnologiyalar

- **React** – foydalanuvchi interfeysi uchun
- **@tanstack/react-query** – ma’lumotlarni kechiktirilgan holatda boshqarish
- **Axios** – API so‘rovlarini yuborish uchun
- **Tailwind CSS** – tez va moslashuvchan dizayn uchun
- **Redux Toolkit** – holatni boshqarish (tema boshqaruvi uchun)
- **Framer Motion** – interfeysga animatsiyalar qo‘shish
- **Vitest** – test yozish va ishga tushirish uchun

## 🎨 Tema boshqaruvi

Ilovada **light** va **dark** rejimlarni Redux Toolkit yordamida boshqarish yo‘lga qo‘yilgan. Tanlangan tema `localStorage` orqali saqlanadi va keyingi foydalanishda avtomatik qo‘llaniladi.

## 📁 Loyihaviy tuzilma

```
src/
├── components/        # UI komponentlari
├── hooks/             # Maxsus hooklar
├── pages/             # Sahifalar
├── providers/         # Kontekst va Providerlar
├── redux/             # Redux slice va store
│   └── theme/         # Tema slice
├── router/            # Routing
├── services/          # API chaqiruvlar
├── utils/             # Yordamchi funksiyalar
├── __tests__/         # Vitest test fayllari
├── App.tsx
├── main.tsx
```

## 🚀 Ishga tushirish

1. Loyihani klonlang:

   ```bash
   git clone <repository-url>
   cd weather_app
   ```

2. Paketlarni o‘rnating:

   ```bash
   npm install
   ```

3. Ilovani lokal serverda ishga tushuring:
   ```bash
   npm run dev
   ```

## 🧪 Testlash (Vitest)

Testlarni ishga tushirish uchun quyidagilarni bajarish kifoya:

```bash
npm run test
```

Test fayllari `__tests__/` papkasida joylashgan va `*.test.tsx` shaklida yozilgan.
