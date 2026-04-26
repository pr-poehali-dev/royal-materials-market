import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const zones = [
  {
    zone: "Москва и МО",
    term: "1–2 рабочих дня",
    cost: "от 1 500 ₽",
    minOrder: "от 5 000 ₽",
    icon: "Building2",
  },
  {
    zone: "Санкт-Петербург и ЛО",
    term: "2–3 рабочих дня",
    cost: "от 2 500 ₽",
    minOrder: "от 10 000 ₽",
    icon: "Building",
  },
  {
    zone: "Города-миллионники",
    term: "3–5 рабочих дней",
    cost: "по запросу",
    minOrder: "от 15 000 ₽",
    icon: "MapPin",
  },
  {
    zone: "Вся Россия",
    term: "5–10 рабочих дней",
    cost: "по запросу",
    minOrder: "от 20 000 ₽",
    icon: "Globe",
  },
];

const conditions = [
  {
    icon: "Package",
    title: "Упаковка",
    text: "Все материалы тщательно упаковываются для предотвращения повреждений при транспортировке. Хрупкие материалы — в индивидуальной защитной упаковке.",
  },
  {
    icon: "AlertTriangle",
    title: "Ответственность",
    text: "Мы несём ответственность за сохранность груза до момента его передачи на объект. При обнаружении повреждений составляем акт и заменяем товар.",
  },
  {
    icon: "Calendar",
    title: "График",
    text: "Доставка осуществляется по будням с 8:00 до 20:00. По предварительному согласованию — в выходные дни и в вечернее время.",
  },
  {
    icon: "CreditCard",
    title: "Оплата",
    text: "Принимаем оплату наличными, банковской картой, безналичным расчётом. Возможна оплата после доставки для постоянных клиентов.",
  },
  {
    icon: "Repeat",
    title: "Возврат",
    text: "Принимаем возврат неиспользованных материалов в оригинальной упаковке в течение 14 дней с момента покупки.",
  },
  {
    icon: "Truck",
    title: "Специальный транспорт",
    text: "Для крупных партий предоставляем автомобили с манипулятором для разгрузки непосредственно на объекте.",
  },
];

export default function Delivery() {
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
            Доставка
          </h1>
          <p className="text-sm mt-2 tracking-wide" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Philosopher, serif" }}>
            Надёжная доставка строительных материалов по всей России
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Delivery zones */}
        <div className="baroque-divider mb-3">
          <span className="ornament">✦</span>
        </div>
        <h2 className="section-title text-3xl mb-8">Зоны доставки</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {zones.map((zone) => (
            <div key={zone.zone} className="baroque-card rounded-sm p-6 text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "linear-gradient(135deg, var(--crimson-dark), var(--crimson))", border: "1px solid var(--gold)" }}
              >
                <Icon name={zone.icon as "Truck"} size={20} style={{ color: "var(--gold-light)" } as React.CSSProperties} />
              </div>
              <h3 className="font-cormorant font-bold text-lg mb-3" style={{ color: "var(--crimson)" }}>
                {zone.zone}
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center justify-between" style={{ borderBottom: "1px solid rgba(201,168,76,0.2)", paddingBottom: "6px" }}>
                  <span style={{ color: "rgba(25,10,5,0.6)" }}>Срок:</span>
                  <span className="font-medium" style={{ color: "var(--crimson)" }}>{zone.term}</span>
                </div>
                <div className="flex items-center justify-between" style={{ borderBottom: "1px solid rgba(201,168,76,0.2)", paddingBottom: "6px" }}>
                  <span style={{ color: "rgba(25,10,5,0.6)" }}>Стоимость:</span>
                  <span className="font-medium" style={{ color: "var(--gold-dark)" }}>{zone.cost}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: "rgba(25,10,5,0.6)" }}>Мин. заказ:</span>
                  <span className="font-medium" style={{ color: "var(--gold-dark)" }}>{zone.minOrder}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conditions */}
        <div className="baroque-divider mb-3">
          <span className="ornament">✦</span>
        </div>
        <h2 className="section-title text-3xl mb-8">Условия доставки</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {conditions.map((c) => (
            <div key={c.title} className="baroque-card rounded-sm p-6 flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--parchment)", border: "1px solid var(--gold)" }}
              >
                <Icon name={c.icon as "Package"} size={16} style={{ color: "var(--gold-dark)" } as React.CSSProperties} />
              </div>
              <div>
                <h3 className="font-cormorant font-semibold text-base mb-1" style={{ color: "var(--crimson)" }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(25,10,5,0.65)" }}>{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div
          className="rounded-sm p-8 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--crimson-dark), #2d0d0d)", border: "1px solid var(--gold)" }}
        >
          <div className="absolute inset-0 baroque-pattern opacity-10" />
          <div className="relative z-10">
            <span className="ornament text-3xl block mb-3">✦</span>
            <h3 className="font-cormorant font-bold text-2xl mb-3" style={{ color: "var(--gold-light)" }}>
              Рассчитать стоимость доставки
            </h3>
            <p className="text-sm mb-6" style={{ color: "rgba(245,240,232,0.7)", fontFamily: "Philosopher, serif" }}>
              Позвоните нам или оставьте заявку — мы рассчитаем стоимость доставки на ваш объект
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+78001234567" className="gold-btn px-8 py-3 text-sm rounded-sm inline-flex items-center gap-2 justify-center">
                <Icon name="Phone" size={14} />
                8 (800) 123-45-67
              </a>
              <Link to="/contacts" className="px-8 py-3 text-sm rounded-sm inline-block" style={{ border: "1px solid rgba(201,168,76,0.5)", color: "var(--gold)", fontFamily: "Philosopher, serif" }}>
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
