import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Ruler, Home, Layers } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Проект «Комфорт»",
    image: "/images/house-1.jpg",
    area: "120 м²",
    floors: "2 этажа",
    rooms: "4 комнаты",
    price: "от 4.8 млн ₽",
  },
  {
    id: 2,
    name: "Проект «Модерн»",
    image: "/images/house-2.jpg",
    area: "95 м²",
    floors: "1 этаж",
    rooms: "3 комнаты",
    price: "от 3.2 млн ₽",
  },
  {
    id: 3,
    name: "Проект «Премиум»",
    image: "/images/house-3.jpg",
    area: "180 м²",
    floors: "2 этажа",
    rooms: "5 комнат",
    price: "от 7.5 млн ₽",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Каталог</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-2 text-balance">
              Готовые проекты домов
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
              Выберите проект или закажите индивидуальное проектирование. Все проекты адаптируем под ваш участок и пожелания.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link href="#contact" className="flex items-center gap-2">
              Все проекты
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {project.name}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Ruler className="w-4 h-4 text-primary" />
                    <span className="text-sm">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Layers className="w-4 h-4 text-primary" />
                    <span className="text-sm">{project.floors}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Home className="w-4 h-4 text-primary" />
                    <span className="text-sm">{project.rooms}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">Стоимость</span>
                    <div className="text-lg font-bold text-foreground">{project.price}</div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#contact">Подробнее</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
