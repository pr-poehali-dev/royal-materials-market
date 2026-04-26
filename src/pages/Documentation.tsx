import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

type DocCategory = "Все" | "Сертификаты" | "Технические паспорта" | "Регламенты" | "Нормативные документы";

interface DocItem {
  id: number;
  title: string;
  category: DocCategory;
  brand?: string;
  description: string;
  fileSize: string;
  url: string;
}

const documents: DocItem[] = [
  { id: 1, title: "Сертификат соответствия Ceresit CT 24", category: "Сертификаты", brand: "Ceresit", description: "Сертификат соответствия реставрационной штукатурки требованиям ГОСТ и допуска для работ на ОКН.", fileSize: "1.2 МБ", url: "#" },
  { id: 2, title: "Технический паспорт Mapei Antique LC", category: "Технические паспорта", brand: "Mapei", description: "Полная техническая документация на реставрационный известковый раствор, включая химический состав.", fileSize: "0.8 МБ", url: "#" },
  { id: 3, title: "Регламент применения материалов на ОКН", category: "Регламенты", description: "Внутренний регламент компании по подбору и применению материалов на объектах культурного наследия.", fileSize: "2.1 МБ", url: "#" },
  { id: 4, title: "ГОСТ Р 56497-2015 Реставрация памятников", category: "Нормативные документы", description: "Национальный стандарт по сохранению объектов культурного наследия — реставрация штукатурных покрытий.", fileSize: "3.5 МБ", url: "#" },
  { id: 5, title: "Технический паспорт Sika Monotop-107 Seal", category: "Технические паспорта", brand: "Sika", description: "Технический лист на гидроизоляционный состав с указанием всех характеристик и методов применения.", fileSize: "0.6 МБ", url: "#" },
  { id: 6, title: "Сертификат пожарной безопасности Knauf", category: "Сертификаты", brand: "Knauf", description: "Сертификат пожарной безопасности на шпатлёвочные составы для внутренней отделки.", fileSize: "0.4 МБ", url: "#" },
  { id: 7, title: "СП 82-101-98 Известковые штукатурки", category: "Нормативные документы", description: "Свод правил по приготовлению и применению известковых строительных растворов.", fileSize: "2.8 МБ", url: "#" },
  { id: 8, title: "Технический паспорт Litokol Litoflex K80", category: "Технические паспорта", brand: "Litokol", description: "Технический лист на высокоэластичный плиточный клей для природного камня и крупного формата.", fileSize: "0.7 МБ", url: "#" },
  { id: 9, title: "Регламент реставрации лепнины", category: "Регламенты", description: "Пошаговый регламент реставрации исторической лепной декорации с перечнем применяемых материалов.", fileSize: "1.9 МБ", url: "#" },
  { id: 10, title: "Декларация о соответствии Caparol Amphibolin", category: "Сертификаты", brand: "Caparol", description: "Декларация о соответствии фасадной краски техническому регламенту о безопасности продукции.", fileSize: "0.3 МБ", url: "#" },
  { id: 11, title: "Руководство по реставрации кирпичной кладки", category: "Регламенты", description: "Методическое руководство по диагностике и реставрации исторической кирпичной кладки.", fileSize: "4.2 МБ", url: "#" },
  { id: 12, title: "ГОСТ 28013-98 Строительные растворы", category: "Нормативные документы", description: "Технические условия на строительные растворы — классификация, показатели качества, методы испытаний.", fileSize: "2.1 МБ", url: "#" },
];

const catIcons: Record<DocCategory, string> = {
  "Все": "Files",
  "Сертификаты": "BadgeCheck",
  "Технические паспорта": "FileText",
  "Регламенты": "BookOpen",
  "Нормативные документы": "Scale",
};

const docCategories: DocCategory[] = ["Все", "Сертификаты", "Технические паспорта", "Регламенты", "Нормативные документы"];

export default function Documentation() {
  const [activeCategory, setActiveCategory] = useState<DocCategory>("Все");
  const [search, setSearch] = useState("");

  const filtered = documents.filter((doc) => {
    const matchCat = activeCategory === "Все" || doc.category === activeCategory;
    const matchSearch = !search || doc.title.toLowerCase().includes(search.toLowerCase()) || doc.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
            Документация
          </h1>
          <p className="text-sm mt-2 tracking-wide" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Philosopher, serif" }}>
            Сертификаты, технические паспорта, регламенты и нормативные документы
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Search */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gold-dark)" } as React.CSSProperties} />
          <input
            type="text"
            placeholder="Поиск по документам..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-sm outline-none"
            style={{
              background: "var(--ivory)",
              border: "1px solid rgba(201,168,76,0.5)",
              color: "var(--crimson-dark)",
              fontFamily: "Philosopher, serif",
            }}
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {docCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`product-btn flex items-center gap-1.5 ${activeCategory === cat ? "tab-active" : ""}`}
            >
              <Icon name={catIcons[cat] as "Files"} size={12} />
              {cat}
            </button>
          ))}
        </div>

        <div className="baroque-divider mb-6">
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
            Найдено {filtered.length} документов
          </span>
        </div>

        {/* Documents list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((doc) => (
            <div key={doc.id} className="baroque-card rounded-sm p-5 flex items-start gap-4">
              <div
                className="w-10 h-12 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, var(--crimson-dark), var(--crimson))", border: "1px solid var(--gold)" }}
              >
                <Icon name="FileText" size={18} style={{ color: "var(--gold-light)" } as React.CSSProperties} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-cormorant font-semibold text-base leading-tight" style={{ color: "var(--crimson)" }}>
                    {doc.title}
                  </h3>
                  <span className="text-xs shrink-0 mt-0.5" style={{ color: "var(--gold-dark)" }}>{doc.fileSize}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-sm"
                    style={{ background: "var(--parchment)", border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold-dark)" }}
                  >
                    {doc.category}
                  </span>
                  {doc.brand && (
                    <span className="text-xs" style={{ color: "rgba(25,10,5,0.5)" }}>{doc.brand}</span>
                  )}
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(25,10,5,0.6)" }}>
                  {doc.description}
                </p>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-btn inline-flex items-center gap-1.5 text-xs"
                >
                  <Icon name="Download" size={11} />
                  Скачать PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <span className="ornament text-4xl block mb-4">✦</span>
            <p className="font-cormorant text-lg" style={{ color: "var(--crimson)" }}>Документы не найдены</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
