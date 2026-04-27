import Image from "next/image"
import { Quote } from "lucide-react"

const cases = [
  {
    id: 1,
    image: "/images/case-1.jpg",
    title: "Дом в посёлке Высокая Гора",
    area: "145 м²",
    duration: "4 месяца",
    year: "2025",
    review: "Выбрали TerraDom по рекомендации друзей и не пожалели. Дом сдали точно в срок, качество отличное. Особенно порадовал профессионализм бригады и постоянная связь с менеджером.",
    author: "Семья Петровых",
  },
  {
    id: 2,
    image: "/images/case-2.jpg",
    title: "Коттедж в Лаишевском районе",
    area: "210 м²",
    duration: "5 месяцев",
    year: "2024",
    review: "Строили с нуля на сложном участке с перепадом высот. Инженеры TerraDom нашли оптимальное решение по фундаменту. Результатом очень довольны, живём уже год.",
    author: "Андрей К.",
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Портфолио</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-2 text-balance">
            Реализованные проекты
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Каждый дом — это история доверия. Посмотрите, что говорят наши клиенты.
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-12 lg:space-y-16">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-xs text-muted-foreground">Площадь</div>
                      <div className="font-semibold text-foreground">{caseItem.area}</div>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div>
                      <div className="text-xs text-muted-foreground">Срок</div>
                      <div className="font-semibold text-foreground">{caseItem.duration}</div>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div>
                      <div className="text-xs text-muted-foreground">Год</div>
                      <div className="font-semibold text-foreground">{caseItem.year}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                  {caseItem.title}
                </h3>

                {/* Review */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <blockquote className="pl-8 text-muted-foreground leading-relaxed italic">
                    {caseItem.review}
                  </blockquote>
                  <div className="mt-4 pl-8">
                    <span className="font-medium text-foreground">{caseItem.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
