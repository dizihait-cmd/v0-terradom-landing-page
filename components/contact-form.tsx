"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (843) 200-00-00",
    href: "tel:+78432000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@terradom.ru",
    href: "mailto:info@terradom.ru",
  },
  {
    icon: MapPin,
    label: "Офис",
    value: "г. Казань, ул. Баумана, 1",
    href: "#",
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн-Сб: 9:00 - 19:00",
    href: null,
  },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Контакты</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-2 text-balance">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-lg">
              Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для бесплатной консультации.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-2xl p-6 lg:p-8 border border-border">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Иван Иванов"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email (необязательно)
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ivan@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Комментарий (необязательно)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? "Отправка..." : "Отправить заявку"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#" className="underline hover:text-foreground">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
