// ============================================
// ГЛАВНЫЙ ФАЙЛ КОНФИГУРАЦИИ САЙТА
// Отредактируйте значения ниже под вашу компанию
// ============================================

export const siteConfig = {
  // Название компании
  companyName: "TerraDom",
  
  // Контактная информация
  phone: "+7 (843) 200-00-00",
  phoneClean: "+78432000000", // Без пробелов и скобок для ссылки tel:
  email: "info@terradom.ru",
  address: "г. Казань, ул. Баумана, 1",
  workingHours: "Пн-Сб: 9:00 - 19:00",
  
  // Город для заголовков и текстов
  city: "Казани",
  cityFull: "Казань",
  region: "Татарстан",
  
  // Статистика компании (для блока доверия)
  stats: {
    projectsCompleted: "150+",   // Количество построенных домов
    yearsExperience: "12",       // Лет на рынке
    guaranteeYears: "10",        // Лет гарантии
    avgBuildTime: "3",           // Месяцев средняя постройка
  },
  
  // Социальные сети
  social: {
    vk: "https://vk.com/terradom",
    telegram: "https://t.me/terradom",
    whatsapp: "https://wa.me/78432000000",
    youtube: "https://youtube.com/@terradom",
  },
  
  // EmailJS конфигурация
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
  
  // SEO
  seo: {
    title: "TerraDom — Строительство домов под ключ в Казани",
    description: "Строим надёжные дома под ключ в Казани. Гарантия 10 лет, фиксированная цена, сроки от 3 месяцев. Более 150 реализованных проектов.",
    keywords: "строительство домов, дома под ключ, Казань, строительная компания, загородные дома",
  },
}

// Цены на проекты (в рублях)
export const projectPrices = {
  small: "от 3 500 000",    // Маленький дом
  medium: "от 5 200 000",   // Средний дом
  large: "от 7 800 000",    // Большой дом
}

// Этапы строительства (можно изменить сроки)
export const buildStages = {
  consultation: "1-2 дня",
  design: "2-3 недели",
  foundation: "2-4 недели",
  walls: "4-6 недель",
  roof: "2-3 недели",
  engineering: "3-4 недели",
  finishing: "4-8 недель",
}
