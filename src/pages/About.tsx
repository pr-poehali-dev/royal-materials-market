import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const timeline = [
  { year: "1887", event: "Основание торгового дома по поставке строительных материалов в Санкт-Петербурге." },
  { year: "1905", event: "Открытие первого московского склада в Китай-городе. Расширение ассортимента до 200 наименований строительных материалов." },
  { year: "1918", event: "Национализация предприятия. Работа в составе государственных строительных трестов." },
  { year: "1991", event: "Восстановление частного предприятия. Возрождение традиций качественных строительных материалов." },
  { year: "2005", event: "Начало специализации на реставрационных материалах для объектов культурного наследия." },
  { year: "2015", event: "Получение статуса официального дистрибьютора ведущих российских и зарубежных производителей строительных смесей." },
  { year: "2020", event: "Открытие собственного технического центра. Запуск образовательных программ для реставраторов." },
  { year: "2024", event: "Свыше 2000 завершённых проектов, включая крупнейшие объекты культурного наследия России." },
];

const team = [
  {
    name: "Александр Строганов",
    role: "Генеральный директор",
    exp: "25 лет в строительной отрасли",
    icon: "User",
  },
  {
    name: "Елена Воронцова",
    role: "Главный технолог",
    exp: "Кандидат химических наук, эксперт по реставрационным материалам",
    icon: "FlaskConical",
  },
  {
    name: "Михаил Ростовцев",
    role: "Руководитель отдела ОКН",
    exp: "20 лет практики реставрации памятников архитектуры",
    icon: "Landmark",
  },
  {
    name: "Ирина Белова",
    role: "Менеджер по клиентам",
    exp: "Специалист по подбору и расчёту материалов",
    icon: "HeadphonesIcon",
  },
];

export default function About() {
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
            О компании
          </h1>
          <p className="text-sm mt-2 tracking-wide" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Philosopher, serif" }}>
            Традиции качества с 1887 года
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main description */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="baroque-divider mb-6">
            <span className="ornament">✦</span>
          </div>
          <div className="baroque-card rounded-sm p-8 text-center">
            <p className="text-base leading-loose font-philosopher" style={{ color: "rgba(25,10,5,0.75)" }}>
              <span className="font-cormorant text-3xl font-bold" style={{ color: "var(--crimson)", float: "left", marginRight: "8px", lineHeight: 1 }}>Т</span>
              радиция поставки качественных строительных материалов, основанная в 1887 году, продолжается и в наши дни.
              Мы специализируемся на строительных, отделочных и реставрационных материалах для строительства
              одноэтажных и многоэтажных домов, а также для реставрации памятников архитектуры и объектов культурного наследия.
            </p>
            <p className="text-base leading-loose mt-4" style={{ color: "rgba(25,10,5,0.7)", fontFamily: "Philosopher, serif" }}>
              За более чем 130 лет работы мы накопили уникальную экспертизу в области строительных технологий и
              реставрационных методик. Сегодня в нашем ассортименте — материалы ведущих мировых производителей:
              Ceresit, Knauf, Sika, Litokol, Mapei, Caparol.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-14">
          <div className="baroque-divider mb-3">
            <span className="ornament">✦</span>
          </div>
          <h2 className="section-title text-3xl mb-10">История компании</h2>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-4 mb-6">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-14 h-7 rounded-sm flex items-center justify-center text-xs font-bold"
                    style={{ background: "linear-gradient(135deg, var(--crimson-dark), var(--crimson))", color: "var(--gold-light)", fontFamily: "Philosopher, serif" }}
                  >
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: "rgba(201,168,76,0.3)" }} />
                  )}
                </div>
                <div className="baroque-card rounded-sm p-4 flex-1 mb-0">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(25,10,5,0.7)" }}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-14">
          <div className="baroque-divider mb-3">
            <span className="ornament">✦</span>
          </div>
          <h2 className="section-title text-3xl mb-10">Наша команда</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="baroque-card rounded-sm p-6 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, var(--crimson-dark), var(--crimson))", border: "2px solid var(--gold)" }}
                >
                  <Icon name={member.icon as "User"} size={24} style={{ color: "var(--gold-light)" } as React.CSSProperties} />
                </div>
                <h3 className="font-cormorant font-semibold text-lg" style={{ color: "var(--crimson)" }}>
                  {member.name}
                </h3>
                <div className="text-xs mt-1 mb-2 uppercase tracking-wider" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                  {member.role}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(25,10,5,0.6)" }}>{member.exp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contacts" className="gold-btn px-8 py-3 text-sm rounded-sm inline-block">
            Связаться с нами
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}