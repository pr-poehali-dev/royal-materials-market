import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "Реставрация фасада Усадьбы Голицыных",
    category: "Реставрация ОКН",
    year: "2023",
    location: "Москва",
    description: "Полная реставрация известковой штукатурки фасада и воссоздание лепного декора усадьбы XVIII века. Применялись реставрационные растворы Mapei Antique LC и Litokol.",
    materials: ["Mapei Antique LC", "Litokol LX-11", "Ceresit CT 24"],
    area: "1 200 м²",
    duration: "8 месяцев",
    tags: ["Фасад", "Штукатурка", "ОКН", "XVIII век"],
  },
  {
    id: 2,
    title: "Строительство жилого комплекса «Имперский»",
    category: "Многоэтажное строительство",
    year: "2023",
    location: "Санкт-Петербург",
    description: "Полное снабжение строительными и отделочными материалами многоквартирного жилого комплекса премиум-класса из 5 корпусов.",
    materials: ["Knauf Финиш", "Ceresit CT 17", "Caparol Amphibolin"],
    area: "18 000 м²",
    duration: "24 месяца",
    tags: ["Многоэтажный", "Отделка", "Фасад"],
  },
  {
    id: 3,
    title: "Реставрация интерьеров Дворянского собрания",
    category: "Реставрация интерьеров",
    year: "2022",
    location: "Нижний Новгород",
    description: "Реставрация исторической декоративной штукатурки, восстановление мозаичных полов и золочёного лепного декора парадных залов.",
    materials: ["Mapei Kerapoxy Design", "Litokol Litoflex K80", "Mapei Antique LC"],
    area: "650 м²",
    duration: "12 месяцев",
    tags: ["Интерьер", "Мозаика", "Лепнина", "ОКН"],
  },
  {
    id: 4,
    title: "Частный особняк в классическом стиле",
    category: "Одноэтажное строительство",
    year: "2023",
    location: "Московская область",
    description: "Строительство и отделка одноэтажного особняка площадью 450 м² с колоннадой, декоративными фасадными элементами и натуральной плиткой в интерьерах.",
    materials: ["Ceresit CT 24", "Sika Monotop-107", "Knauf Финиш", "Litokol K80"],
    area: "450 м²",
    duration: "14 месяцев",
    tags: ["Одноэтажный", "Классика", "Отделка"],
  },
  {
    id: 5,
    title: "Реставрация церкви Воскресения Христова",
    category: "Реставрация ОКН",
    year: "2022",
    location: "Тверь",
    description: "Реставрация кирпичной кладки и белокаменной резьбы церкви XVII века. Применялись только исторически совместимые известковые составы.",
    materials: ["Mapei Antique LC", "Ceresit CT 24"],
    area: "800 м²",
    duration: "18 месяцев",
    tags: ["Церковь", "Кирпич", "Камень", "XVII век", "ОКН"],
  },
  {
    id: 6,
    title: "Офисный центр «Петровский»",
    category: "Многоэтажное строительство",
    year: "2021",
    location: "Москва",
    description: "Отделка офисного центра класса А+ в историческом центре Москвы с применением фасадных систем в едином архитектурном стиле района.",
    materials: ["Caparol Amphibolin", "Ceresit CT 17", "Knauf"],
    area: "9 500 м²",
    duration: "10 месяцев",
    tags: ["Офис", "Фасад", "Покраска"],
  },
];

const categoryColors: Record<string, string> = {
  "Реставрация ОКН": "var(--crimson)",
  "Многоэтажное строительство": "#1a4a6b",
  "Одноэтажное строительство": "#2a5a2a",
  "Реставрация интерьеров": "#6b3a1a",
};

export default function Portfolio() {
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
            Портфолио
          </h1>
          <p className="text-sm mt-2 tracking-wide" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Philosopher, serif" }}>
            Реализованные проекты строительства и реставрации
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="baroque-divider mb-10">
          <span className="ornament">✦</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="baroque-card rounded-sm overflow-hidden">
              {/* Category banner */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ background: categoryColors[project.category] || "var(--crimson)", borderBottom: "1px solid rgba(201,168,76,0.3)" }}
              >
                <span className="text-xs uppercase tracking-widest" style={{ color: "var(--gold-light)", fontFamily: "Philosopher, serif" }}>
                  {project.category}
                </span>
                <span className="text-xs" style={{ color: "rgba(245,240,232,0.7)" }}>{project.year}</span>
              </div>

              <div className="p-6">
                <h2 className="font-cormorant font-bold text-xl mb-1" style={{ color: "var(--crimson)" }}>
                  {project.title}
                </h2>
                <div className="flex items-center gap-1 mb-3 text-xs" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                  <Icon name="MapPin" size={11} />
                  {project.location}
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(25,10,5,0.65)" }}>
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="font-cormorant font-semibold" style={{ color: "var(--crimson)" }}>{project.area}</div>
                    <div className="text-xs" style={{ color: "var(--gold-dark)" }}>площадь</div>
                  </div>
                  <div
                    className="w-px"
                    style={{ background: "rgba(201,168,76,0.3)" }}
                  />
                  <div className="text-center">
                    <div className="font-cormorant font-semibold" style={{ color: "var(--crimson)" }}>{project.duration}</div>
                    <div className="text-xs" style={{ color: "var(--gold-dark)" }}>срок</div>
                  </div>
                </div>

                {/* Materials */}
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                    Применённые материалы:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-2 py-0.5 rounded-sm"
                        style={{ background: "var(--parchment)", border: "1px solid rgba(201,168,76,0.3)", color: "var(--crimson)" }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-sm"
                      style={{ background: "transparent", border: "1px solid rgba(201,168,76,0.2)", color: "var(--gold-dark)" }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
