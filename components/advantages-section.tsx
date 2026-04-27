import { Shield, Clock, Wallet, Users, Wrench, FileCheck } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Гарантия 10 лет",
    description: "Несём полную ответственность за качество работ и материалов. Бесплатное гарантийное обслуживание.",
  },
  {
    icon: Wallet,
    title: "Фиксированная цена",
    description: "Стоимость прописывается в договоре и не меняется в процессе строительства. Никаких скрытых платежей.",
  },
  {
    icon: Clock,
    title: "Сроки в договоре",
    description: "Средний срок строительства — 3-6 месяцев. За нарушение сроков предусмотрены штрафные санкции.",
  },
  {
    icon: Users,
    title: "Собственные бригады",
    description: "Работаем только с проверенными мастерами. Средний стаж специалистов — более 10 лет.",
  },
  {
    icon: Wrench,
    title: "Полный цикл работ",
    description: "От проектирования до финишной отделки. Все коммуникации, благоустройство и ландшафт.",
  },
  {
    icon: FileCheck,
    title: "Прозрачная отчётность",
    description: "Фотоотчёты на каждом этапе. Доступ к камерам на объекте. Полный контроль процесса.",
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Почему мы</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-2 text-balance">
            Преимущества работы с TerraDom
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            За 12 лет мы выработали прозрачную систему работы, которая защищает интересы клиента на каждом этапе.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
