import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "MessageSquare",
    title: "Технические консультации",
    description: "Наши эксперты помогут подобрать правильные материалы для вашего объекта. Работаем как с частными застройщиками, так и с крупными строительными и реставрационными организациями.",
    details: [
      "Подбор материалов под технические условия объекта",
      "Консультации по совместимости материалов",
      "Расчёт необходимого количества",
      "Рекомендации по технологии применения",
      "Консультации по работе с ОКН и памятниками архитектуры",
    ],
  },
  {
    icon: "Truck",
    title: "Доставка на объект",
    description: "Организуем доставку строительных и реставрационных материалов непосредственно на строительную площадку или реставрируемый объект по всей России.",
    details: [
      "Доставка по Москве и МО — от 1 рабочего дня",
      "Доставка по России — от 3 рабочих дней",
      "Специальный транспорт для хрупких материалов",
      "Паллетирование и упаковка для дальних перевозок",
      "Срочная доставка при необходимости",
    ],
  },
  {
    icon: "HardHat",
    title: "Технический надзор",
    description: "Обеспечиваем технический контроль за правильностью применения материалов на объекте. Особенно важно при реставрации объектов культурного наследия.",
    details: [
      "Выезд специалиста на объект",
      "Контроль подготовки основания",
      "Проверка соответствия технологии применения",
      "Составление актов скрытых работ",
      "Подготовка отчётных документов для органов охраны ОКН",
    ],
  },
  {
    icon: "FileCheck",
    title: "Подбор сертифицированных материалов для ОКН",
    description: "Специализируемся на подборе материалов, прошедших согласование для применения на объектах культурного наследия и памятниках архитектуры.",
    details: [
      "Подбор материалов, допущенных для работы с ОКН",
      "Предоставление полного пакета разрешительной документации",
      "Согласование материалов с КГИОП и Министерством культуры",
      "Подготовка документов для проектной документации",
      "Консультации по нормативной базе реставрации",
    ],
  },
  {
    icon: "Calculator",
    title: "Расчёт материалов",
    description: "Выполним профессиональный расчёт необходимого объёма материалов по вашим чертежам или техническому заданию.",
    details: [
      "Расчёт по чертежам и планам объекта",
      "Учёт всех строительных норм и допусков",
      "Составление дефектной ведомости",
      "Смета на материалы",
      "Оптимизация расходов",
    ],
  },
  {
    icon: "GraduationCap",
    title: "Обучение и семинары",
    description: "Проводим обучающие семинары для строительных бригад, прорабов и проектировщиков по применению специализированных материалов.",
    details: [
      "Семинары на объекте или в офисе",
      "Практические мастер-классы",
      "Обучение работе с реставрационными составами",
      "Выдача сертификатов участника",
      "Методические материалы",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col baroque-bg">
      <Navbar />

      <div
        className="py-12 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--crimson-dark), #2d0d0d)" }}
      >
        <div className="absolute inset-0 baroque-pattern opacity-10" />
        <div className="relative z-10">
          <span className="ornament text-2xl block mb-2">❦</span>
          <h1 className="font-cormorant font-bold text-4xl" style={{ color: "var(--gold-light)" }}>
            Услуги
          </h1>
          <p className="text-sm mt-2 tracking-wide" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Philosopher, serif" }}>
            Полный спектр услуг для строительства и реставрации
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="baroque-divider mb-10">
          <span className="ornament">✦</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="baroque-card rounded-sm p-7">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--crimson-dark), var(--crimson))", border: "1px solid var(--gold)" }}
                >
                  <Icon name={service.icon as "MessageSquare"} size={20} style={{ color: "var(--gold-light)" } as React.CSSProperties} />
                </div>
                <div>
                  <h2 className="font-cormorant font-bold text-xl" style={{ color: "var(--crimson)" }}>
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "rgba(25,10,5,0.65)" }}>
                    {service.description}
                  </p>
                </div>
              </div>

              <div
                className="h-px mb-4"
                style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
              />

              <ul className="flex flex-col gap-2">
                {service.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(25,10,5,0.7)" }}>
                    <span style={{ color: "var(--gold)", marginTop: "2px" }}>›</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-sm p-8 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--crimson-dark), #2d0d0d)", border: "1px solid var(--gold)" }}
        >
          <div className="absolute inset-0 baroque-pattern opacity-10" />
          <div className="relative z-10">
            <span className="ornament text-3xl block mb-3">✦</span>
            <h3 className="font-cormorant font-bold text-2xl mb-3" style={{ color: "var(--gold-light)" }}>
              Обсудим ваш проект
            </h3>
            <p className="text-sm mb-6" style={{ color: "rgba(245,240,232,0.7)", fontFamily: "Philosopher, serif" }}>
              Оставьте заявку — наш специалист свяжется с вами в течение рабочего дня
            </p>
            <Link to="/contacts" className="gold-btn px-8 py-3 text-sm rounded-sm inline-block">
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
