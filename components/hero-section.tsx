import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Гарантия 10 лет",
  "Фиксированная цена",
  "Сроки от 3 месяцев",
]

export function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Строительство домов в Казани
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              Построим дом вашей мечты под ключ
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Более 150 реализованных проектов за 12 лет. Полный цикл строительства — от проекта до финишной отделки с гарантией качества.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" asChild className="text-base px-8">
                <Link href="#contact">Рассчитать стоимость</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link href="#projects">Смотреть проекты</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-house.jpg"
                alt="Современный дом построенный TerraDom"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-card rounded-xl p-4 lg:p-6 shadow-lg border border-border">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">150+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Домов построено</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">12</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Лет на рынке</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
