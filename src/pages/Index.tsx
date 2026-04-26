import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Award",
    title: "Сертифицированные материалы",
    text: "Все материалы имеют необходимые сертификаты и допуски для применения на объектах культурного наследия.",
  },
  {
    icon: "Shield",
    title: "Гарантия подлинности",
    text: "Прямые поставки от производителей — никаких подделок и серых схем.",
  },
  {
    icon: "BookOpen",
    title: "Экспертная документация",
    text: "К каждому товару — техпаспорт, инструкция, технология применения и регламент реставрации.",
  },
  {
    icon: "Truck",
    title: "Доставка по России",
    text: "Доставляем на строительные объекты и реставрируемые памятники по всей стране.",
  },
];

const categories = [
  { label: "Строительные смеси", icon: "Layers", count: "120+" },
  { label: "Реставрационные материалы", icon: "Landmark", count: "85+" },
  { label: "Отделочные материалы", icon: "Paintbrush", count: "200+" },
  { label: "Гидроизоляция", icon: "Droplets", count: "45+" },
  { label: "Клеи и затирки", icon: "Wrench", count: "90+" },
  { label: "Краски и покрытия", icon: "Palette", count: "160+" },
];

const stats = [
  { value: "137", label: "лет традиций" },
  { value: "450+", label: "наименований" },
  { value: "6", label: "торговых марок" },
  { value: "2000+", label: "объектов реставрации" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col baroque-bg">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--crimson-dark) 0%, #2d0d0d 50%, var(--dark-bg) 100%)" }}
      >
        <div className="absolute inset-0 baroque-pattern opacity-20" />
        <div className="absolute top-8 left-8 text-4xl opacity-30" style={{ color: "var(--gold)" }}>❧</div>
        <div className="absolute top-8 right-8 text-4xl opacity-30 scale-x-[-1]" style={{ color: "var(--gold)" }}>❧</div>
        <div className="absolute bottom-8 left-8 text-4xl opacity-30 scale-y-[-1]" style={{ color: "var(--gold)" }}>❧</div>
        <div className="absolute bottom-8 right-8 text-4xl opacity-30 scale-[-1]" style={{ color: "var(--gold)" }}>❧</div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in"
            style={{ color: "var(--gold)", fontFamily: "Philosopher, serif" }}
          >
            ✦ Высочайшее качество съ 1887 года ✦
          </p>
          <h1
            className="font-cormorant font-bold mb-6 leading-tight animate-fade-in-up"
            style={{ color: "var(--ivory)", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Строительные и<br />
            <span className="gold-shimmer">реставрационные</span>
            <br />материалы
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 mx-auto animate-fade-in-up delay-200"
            style={{ color: "rgba(245,240,232,0.8)", maxWidth: "620px", fontFamily: "Philosopher, serif" }}
          >
            Для строительства одноэтажных и многоэтажных домов, а также реставрации памятников архитектуры и объектов культурного наследия.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link to="/catalog" className="gold-btn px-8 py-3 text-sm font-medium rounded-sm">
              Перейти в каталог
            </Link>
            <Link
              to="/contacts"
              className="px-8 py-3 text-sm font-medium rounded-sm"
              style={{ border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "Philosopher, serif", letterSpacing: "0.05em" }}
            >
              Получить консультацию
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, var(--ivory), transparent)" }} />
      </section>

      {/* Stats */}
      <section className="py-8" style={{ background: "var(--parchment)", borderTop: "2px solid var(--gold)", borderBottom: "2px solid var(--gold)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-cormorant font-bold text-3xl md:text-4xl" style={{ color: "var(--crimson)" }}>
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 baroque-bg">
        <div className="container mx-auto px-4">
          <div className="baroque-divider mb-3">
            <span className="ornament">✦</span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl mb-2">Категории материалов</h2>
          <p className="text-center text-sm mb-10" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif", letterSpacing: "0.1em" }}>
            Полный ассортимент для строительства и реставрации
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                to={`/catalog?category=${encodeURIComponent(cat.label)}`}
                className="baroque-card rounded-sm p-6 flex flex-col items-center text-center gap-3 group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--crimson-dark), var(--crimson))", border: "1px solid var(--gold)" }}
                >
                  <Icon name={cat.icon as "Award"} size={24} style={{ color: "var(--gold-light)" } as React.CSSProperties} />
                </div>
                <div>
                  <div className="font-cormorant font-semibold text-base" style={{ color: "var(--crimson)" }}>
                    {cat.label}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--gold-dark)" }}>{cat.count} позиций</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/catalog" className="gold-btn px-8 py-3 text-sm rounded-sm inline-block">
              Смотреть весь каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{ background: "var(--parchment)" }}>
        <div className="container mx-auto px-4">
          <div className="baroque-divider mb-3">
            <span className="ornament">✦</span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl mb-10">Почему выбирают нас</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="baroque-card rounded-sm p-6 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--ivory)", border: "1px solid var(--gold)" }}
                >
                  <Icon name={f.icon as "Award"} size={20} style={{ color: "var(--gold-dark)" } as React.CSSProperties} />
                </div>
                <h3 className="font-cormorant font-semibold text-lg mb-2" style={{ color: "var(--crimson)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(25,10,5,0.65)" }}>
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--crimson-dark), #2d0d0d)" }}
      >
        <div className="absolute inset-0 baroque-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="ornament text-4xl block mb-4">❦</span>
          <h2
            className="font-cormorant font-bold text-3xl md:text-4xl mb-4"
            style={{ color: "var(--gold-light)" }}
          >
            Нужна экспертная консультация?
          </h2>
          <p
            className="text-sm md:text-base mb-8 mx-auto"
            style={{ color: "rgba(245,240,232,0.75)", maxWidth: "500px", fontFamily: "Philosopher, serif" }}
          >
            Наши специалисты подберут нужные материалы для вашего объекта — будь то современная стройка или реставрация памятника.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="gold-btn px-8 py-3 text-sm rounded-sm inline-block">
              Связаться с нами
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 text-sm rounded-sm inline-block"
              style={{ border: "1px solid rgba(201,168,76,0.5)", color: "var(--gold)", fontFamily: "Philosopher, serif" }}
            >
              Наши услуги
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
