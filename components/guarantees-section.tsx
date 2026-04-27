import { Shield, FileText, Hammer, HeartHandshake } from "lucide-react"

const guarantees = [
  {
    icon: Shield,
    title: "Гарантия 10 лет",
    description: "На конструктив здания, кровлю и инженерные системы. Бесплатное устранение любых дефектов.",
  },
  {
    icon: FileText,
    title: "Договор с фиксированной ценой",
    description: "Все расходы прописаны в смете. Никаких дополнительных платежей без вашего согласия.",
  },
  {
    icon: Hammer,
    title: "Страхование объекта",
    description: "Страхуем объект на период строительства. Полная защита от непредвиденных ситуаций.",
  },
  {
    icon: HeartHandshake,
    title: "Постгарантийное обслуживание",
    description: "После истечения гарантии предлагаем сервисное обслуживание на выгодных условиях.",
  },
]

export function GuaranteesSection() {
  return (
    <section id="guarantees" className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary-foreground/70 font-medium text-sm uppercase tracking-wider">Надёжность</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2 text-balance">
            Гарантии качества
          </h2>
          <p className="text-primary-foreground/80 mt-4 leading-relaxed">
            Мы уверены в качестве своей работы и готовы нести за неё ответственность.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="p-6 bg-primary-foreground/10 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-5">
                <guarantee.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg mb-3">
                {guarantee.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold">150+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Домов построено</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold">12</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold">98%</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Клиентов рекомендуют</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold">0</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Судебных споров</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
