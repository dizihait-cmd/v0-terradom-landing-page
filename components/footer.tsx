import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

// ============================================
// НАСТРОЙКИ КОМПАНИИ - ЗАМЕНИТЕ НА СВОИ
// ============================================
const COMPANY_NAME = "TerraDom"
const COMPANY_LOGO_LETTER = "T"
const COMPANY_DESCRIPTION = "Строим надёжные дома под ключ в Казани и Республике Татарстан с 2013 года."

// Контакты
const PHONE_DISPLAY = "+7 (843) 200-00-00"
const PHONE_LINK = "+78432000000"
const EMAIL = "info@terradom.ru"
const ADDRESS = "г. Казань, ул. Баумана, 1"

// Реквизиты (отображаются внизу страницы)
const INN = "1234567890"
const OGRN = "1234567890123"

const navLinks = [
  { href: "#projects", label: "Проекты" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#stages", label: "Этапы" },
  { href: "#cases", label: "Наши работы" },
  { href: "#guarantees", label: "Гарантии" },
  { href: "#contact", label: "Контакты" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">{COMPANY_LOGO_LETTER}</span>
              </div>
              <span className="font-serif text-xl font-semibold">{COMPANY_NAME}</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              {COMPANY_DESCRIPTION}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_LINK}`}
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="#"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Пользовательское соглашение
              </Link>
              <Link
                href="#"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Реквизиты компании
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} {COMPANY_NAME}. Все права защищены.
          </p>
          <p className="text-background/50 text-sm">
            ИНН {INN} / ОГРН {OGRN}
          </p>
        </div>
      </div>
    </footer>
  )
}
