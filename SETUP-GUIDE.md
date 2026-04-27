# Руководство по настройке сайта TerraDom

Данное руководство поможет вам быстро настроить и запустить сайт строительной компании.

---

## Содержание

1. [Деплой на Vercel](#1-деплой-на-vercel)
2. [Настройка EmailJS](#2-настройка-emailjs)
3. [Редактирование контента](#3-редактирование-контента)
4. [Структура файлов](#4-структура-файлов)
5. [Замена изображений](#5-замена-изображений)

---

## 1. Деплой на Vercel

### Способ 1: Через GitHub (рекомендуется)

1. **Создайте репозиторий на GitHub**
   - Зайдите на [github.com](https://github.com) и создайте новый репозиторий
   - Загрузите файлы проекта в репозиторий

2. **Подключите к Vercel**
   - Зайдите на [vercel.com](https://vercel.com) и войдите через GitHub
   - Нажмите "Add New Project"
   - Выберите ваш репозиторий из списка
   - Нажмите "Deploy"

3. **Готово!** Сайт будет доступен по адресу `your-project.vercel.app`

### Способ 2: Через Vercel CLI

```bash
# Установите Vercel CLI
npm install -g vercel

# Перейдите в папку проекта
cd terradom-landing

# Запустите деплой
vercel
```

### Настройка домена

1. В панели Vercel откройте ваш проект
2. Перейдите в Settings → Domains
3. Добавьте ваш домен (например, `terradom.ru`)
4. Настройте DNS записи у регистратора домена:
   - Тип: `A`, Значение: `76.76.21.21`
   - Или тип: `CNAME`, Значение: `cname.vercel-dns.com`

---

## 2. Настройка EmailJS

EmailJS позволяет отправлять заявки с формы на вашу почту без бэкенда.

### Шаг 1: Регистрация

1. Перейдите на [emailjs.com](https://www.emailjs.com/)
2. Нажмите "Sign Up Free" и создайте аккаунт
3. Бесплатный план: 200 писем в месяц (достаточно для большинства сайтов)

### Шаг 2: Создание Email Service

1. В панели EmailJS перейдите в "Email Services"
2. Нажмите "Add New Service"
3. Выберите вашего почтового провайдера:
   - **Gmail** — для личной почты
   - **Outlook** — для корпоративной почты Microsoft
   - **Yandex** — для Яндекс.Почты
   - **Custom SMTP** — для любого почтового сервера
4. Следуйте инструкциям для подключения
5. **Запишите Service ID** (например: `service_abc123`)

### Шаг 3: Создание шаблона письма

1. Перейдите в "Email Templates"
2. Нажмите "Create New Template"
3. Настройте шаблон:

**Subject (тема письма):**
```
Новая заявка с сайта от {{user_name}}
```

**Content (содержимое):**
```
Новая заявка с сайта!

Имя: {{user_name}}
Телефон: {{user_phone}}
Email: {{user_email}}
Сообщение: {{message}}

---
Отправлено с сайта TerraDom
```

4. В поле "To Email" укажите вашу почту для получения заявок
5. Сохраните шаблон
6. **Запишите Template ID** (например: `template_xyz789`)

### Шаг 4: Получение Public Key

1. Перейдите в "Account" → "General"
2. Найдите раздел "API Keys"
3. **Скопируйте Public Key** (например: `user_AbCdEfGhIjKlMnOpQr`)

### Шаг 5: Добавление ключей в код

Откройте файл `components/contact-form.tsx` и замените значения:

```typescript
// Строки 11-13
const EMAILJS_SERVICE_ID = "service_abc123"    // Ваш Service ID
const EMAILJS_TEMPLATE_ID = "template_xyz789"  // Ваш Template ID  
const EMAILJS_PUBLIC_KEY = "user_AbCdEfGhIjKlMnOpQr"  // Ваш Public Key
```

### Проверка работы

1. Откройте сайт
2. Заполните форму тестовыми данными
3. Отправьте заявку
4. Проверьте вашу почту — должно прийти письмо

---

## 3. Редактирование контента

### Основные файлы для редактирования:

| Что изменить | Файл |
|-------------|------|
| Контактная информация | `components/contact-form.tsx` (строки 18-41) |
| Название компании, город | `components/header.tsx`, `components/footer.tsx` |
| Статистика (лет, проектов) | `components/hero-section.tsx` |
| Проекты домов | `components/projects-section.tsx` |
| Преимущества | `components/advantages-section.tsx` |
| Этапы строительства | `components/stages-section.tsx` |
| Кейсы и отзывы | `components/cases-section.tsx` |
| Гарантии | `components/guarantees-section.tsx` |
| SEO (title, description) | `app/layout.tsx` |

### Пример: Изменение контактов

В файле `components/contact-form.tsx`:

```typescript
const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (495) 123-45-67",      // ← Ваш телефон
    href: "tel:+74951234567",          // ← Ваш телефон (без пробелов)
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@vashakompaniya.ru",   // ← Ваш email
    href: "mailto:info@vashakompaniya.ru",
  },
  // ...
]
```

### Пример: Изменение города

Найдите и замените во всех файлах:
- "Казани" → "Москве" (или ваш город в предложном падеже)
- "Казань" → "Москва"
- "+7 (843)" → "+7 (495)" (код вашего города)

---

## 4. Структура файлов

```
terradom-landing/
├── app/
│   ├── layout.tsx          # Основной layout, SEO, шрифты
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили, цвета
├── components/
│   ├── header.tsx          # Шапка сайта
│   ├── hero-section.tsx    # Первый экран
│   ├── projects-section.tsx # Проекты домов
│   ├── advantages-section.tsx # Преимущества
│   ├── stages-section.tsx  # Этапы строительства
│   ├── cases-section.tsx   # Кейсы и отзывы
│   ├── guarantees-section.tsx # Гарантии
│   ├── contact-form.tsx    # Форма заявки + контакты
│   └── footer.tsx          # Подвал сайта
├── public/
│   └── images/             # Изображения
│       ├── hero-house.jpg  # Главное фото
│       ├── house-1.jpg     # Проект 1
│       ├── house-2.jpg     # Проект 2
│       ├── house-3.jpg     # Проект 3
│       ├── case-1.jpg      # Кейс 1
│       └── case-2.jpg      # Кейс 2
└── config/
    └── site-config.ts      # Централизованная конфигурация
```

---

## 5. Замена изображений

### Требования к изображениям:

| Изображение | Размер | Назначение |
|------------|--------|------------|
| hero-house.jpg | 1920x1080 px | Главный баннер |
| house-1.jpg | 800x600 px | Проект дома 1 |
| house-2.jpg | 800x600 px | Проект дома 2 |
| house-3.jpg | 800x600 px | Проект дома 3 |
| case-1.jpg | 800x600 px | Кейс 1 |
| case-2.jpg | 800x600 px | Кейс 2 |

### Как заменить:

1. Подготовьте фотографии ваших домов
2. Сожмите их на [tinypng.com](https://tinypng.com) для быстрой загрузки
3. Переименуйте файлы согласно таблице выше
4. Замените файлы в папке `public/images/`

### Добавление новых проектов

В файле `components/projects-section.tsx` добавьте новый объект в массив `projects`:

```typescript
const projects = [
  // ... существующие проекты
  {
    id: 4,
    name: "Проект «Название»",
    image: "/images/house-4.jpg",  // Добавьте изображение
    area: "200 м²",
    floors: 2,
    bedrooms: 5,
    price: "от 8 500 000 ₽",
    features: ["Гараж на 2 машины", "Сауна", "Бассейн"],
  },
]
```

---

## Поддержка

Если у вас возникли вопросы по настройке, обратитесь к разработчику шаблона.

---

*Шаблон создан с использованием Next.js, Tailwind CSS и shadcn/ui*
