const stages = [
  {
    number: "01",
    title: "Консультация и замеры",
    description: "Бесплатный выезд на участок, консультация архитектора, анализ грунта и рельефа. Обсуждаем ваши пожелания и бюджет.",
    duration: "1-2 дня",
  },
  {
    number: "02",
    title: "Проектирование",
    description: "Разрабатываем архитектурный проект с учётом всех пожеланий. 3D-визуализация, планировки, инженерные системы.",
    duration: "2-4 недели",
  },
  {
    number: "03",
    title: "Договор и смета",
    description: "Составляем детальную смету с фиксированной ценой. Подписываем договор с гарантийными обязательствами.",
    duration: "2-3 дня",
  },
  {
    number: "04",
    title: "Фундамент",
    description: "Закладка фундамента с учётом геологии участка. Применяем только проверенные технологии и материалы.",
    duration: "2-4 недели",
  },
  {
    number: "05",
    title: "Возведение стен и кровли",
    description: "Строительство коробки дома, монтаж кровельной системы. Установка окон и входных дверей.",
    duration: "4-8 недель",
  },
  {
    number: "06",
    title: "Инженерные системы",
    description: "Прокладка электрики, водоснабжения, канализации, отопления. Подключение к коммуникациям.",
    duration: "2-4 недели",
  },
  {
    number: "07",
    title: "Отделка и сдача",
    description: "Внутренняя и внешняя отделка по вашему выбору. Финальная проверка, сдача объекта и передача документов.",
    duration: "4-8 недель",
  },
]

export function StagesSection() {
  return (
    <section id="stages" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Процесс</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-2 text-balance">
            Этапы строительства
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Прозрачный процесс от первого звонка до вручения ключей. Вы контролируете каждый этап.
          </p>
        </div>

        {/* Stages Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:py-8 ${
                    index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12 lg:text-left"
                  }`}
                >
                  <div className={`bg-background p-6 rounded-xl border border-border ${index % 2 === 0 ? "lg:ml-auto" : ""} max-w-lg`}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-bold text-primary/20">{stage.number}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">
                          {stage.title}
                        </h3>
                        <span className="text-xs text-accent font-medium">{stage.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-card" />

                {/* Empty column for grid */}
                {index % 2 === 0 ? (
                  <div className="hidden lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
