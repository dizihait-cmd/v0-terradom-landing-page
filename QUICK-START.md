# Быстрый старт

## 1. Настройка EmailJS (5 минут)

1. Зарегистрируйтесь на [emailjs.com](https://www.emailjs.com/)
2. Создайте Email Service (Gmail, Yandex или другой)
3. Создайте шаблон письма со следующими переменными:
   - `{{user_name}}` — имя клиента
   - `{{user_phone}}` — телефон
   - `{{user_email}}` — email
   - `{{message}}` — сообщение
4. Откройте файл `components/contact-form.tsx`
5. Замените значения в строках 11-13:
   ```ts
   const EMAILJS_SERVICE_ID = "ваш_service_id"
   const EMAILJS_TEMPLATE_ID = "ваш_template_id"  
   const EMAILJS_PUBLIC_KEY = "ваш_public_key"
   ```

## 2. Измените контакты

### В файле `components/contact-form.tsx` (строки 18-41):
- Телефон
- Email  
- Адрес
- Режим работы

### В файле `components/header.tsx` (строки 11-17):
- Название компании
- Телефон

### В файле `components/footer.tsx` (строки 6-18):
- Название компании
- Описание
- Контакты
- ИНН и ОГРН

## 3. Измените город

Найдите и замените во всех файлах:
- "Казани" → ваш город (предложный падеж)
- "Казань" → ваш город

## 4. Замените фото

Положите ваши фото в папку `public/images/`:
- `hero-house.jpg` — главное фото (1920x1080)
- `house-1.jpg`, `house-2.jpg`, `house-3.jpg` — проекты (800x600)
- `case-1.jpg`, `case-2.jpg` — кейсы (800x600)

## 5. Деплой на Vercel

1. Загрузите проект на GitHub
2. Зайдите на [vercel.com](https://vercel.com)
3. Нажмите "Add New Project"
4. Выберите репозиторий
5. Нажмите "Deploy"

---

Подробная инструкция: [SETUP-GUIDE.md](./SETUP-GUIDE.md)
