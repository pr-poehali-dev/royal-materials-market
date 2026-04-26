import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { products, categories, brands, type Product } from "@/data/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

type ModalTab = "instructions" | "specs" | "technology" | "documents";

function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab | null>(null);

  const tabs: { key: ModalTab; label: string; icon: string; available: boolean }[] = [
    { key: "instructions", label: "Инструкция по применению", icon: "BookOpen", available: !!product.instructions },
    { key: "specs", label: "Технические характеристики", icon: "Settings", available: !!product.specs },
    { key: "technology", label: "Технология применения", icon: "Wrench", available: !!product.technology },
    { key: "documents", label: "Документы", icon: "FileText", available: !!(product.documents && product.documents.length > 0) },
  ];

  const brandObj = brands.find((b) => b.id === product.brand);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="baroque-card rounded-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: "var(--ivory)", border: "2px solid var(--gold)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          className="flex items-start justify-between p-5 border-b"
          style={{ borderColor: "rgba(201,168,76,0.3)" }}
        >
          <div>
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
              {brandObj?.name} · {product.category}
            </div>
            <h2 className="font-cormorant font-bold text-xl" style={{ color: "var(--crimson)" }}>
              {product.name}
            </h2>
            {product.price && (
              <div className="text-sm mt-1" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                {product.price} / {product.unit}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 ml-4 shrink-0"
            style={{ color: "var(--gold-dark)" }}
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Description */}
        <div className="p-5">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(25,10,5,0.7)" }}>
            {product.description}
          </p>
        </div>

        {/* Tab buttons */}
        <div className="px-5 flex flex-wrap gap-2 pb-4">
          {tabs.filter((t) => t.available).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(activeTab === tab.key ? null : tab.key)}
              className={`product-btn flex items-center gap-1.5 ${activeTab === tab.key ? "tab-active" : ""}`}
            >
              <Icon name={tab.icon as "BookOpen"} size={12} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab && (
          <div
            className="mx-5 mb-5 p-4 rounded-sm"
            style={{ background: "var(--parchment)", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            {activeTab === "instructions" && (
              <>
                <h4 className="font-cormorant font-semibold text-base mb-3" style={{ color: "var(--crimson)" }}>
                  Инструкция по применению
                </h4>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "rgba(25,10,5,0.75)" }}>
                  {product.instructions}
                </p>
              </>
            )}
            {activeTab === "specs" && (
              <>
                <h4 className="font-cormorant font-semibold text-base mb-3" style={{ color: "var(--crimson)" }}>
                  Технические характеристики
                </h4>
                <div className="flex flex-col gap-1.5">
                  {product.specs?.split(" | ").map((spec, i) => {
                    const [key, val] = spec.split(": ");
                    return (
                      <div key={i} className="flex gap-2 text-sm">
                        <span className="font-medium shrink-0" style={{ color: "var(--crimson)" }}>{key}:</span>
                        <span style={{ color: "rgba(25,10,5,0.75)" }}>{val}</span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {activeTab === "technology" && (
              <>
                <h4 className="font-cormorant font-semibold text-base mb-3" style={{ color: "var(--crimson)" }}>
                  Технология применения
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(25,10,5,0.75)" }}>
                  {product.technology}
                </p>
              </>
            )}
            {activeTab === "documents" && (
              <>
                <h4 className="font-cormorant font-semibold text-base mb-3" style={{ color: "var(--crimson)" }}>
                  Документация
                </h4>
                <div className="flex flex-col gap-2">
                  {product.documents?.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm p-2 rounded-sm transition-colors"
                      style={{ color: "var(--crimson)", border: "1px solid rgba(201,168,76,0.3)", background: "var(--ivory)" }}
                    >
                      <Icon name="FileText" size={14} style={{ color: "var(--gold-dark)" } as React.CSSProperties} />
                      <span>{doc.title}</span>
                      <Icon name="Download" size={12} className="ml-auto" style={{ color: "var(--gold-dark)" } as React.CSSProperties} />
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Footer actions */}
        <div
          className="flex gap-3 p-5 border-t"
          style={{ borderColor: "rgba(201,168,76,0.3)" }}
        >
          <Link to="/contacts" className="gold-btn px-5 py-2 text-sm rounded-sm flex-1 text-center">
            Запросить цену
          </Link>
          <button onClick={onClose} className="product-btn px-5 py-2 text-sm">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedBrand, setSelectedBrand] = useState("Все");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filtered = products.filter((p) => {
    const matchCat = selectedCategory === "Все" || p.category === selectedCategory;
    const matchBrand = selectedBrand === "Все" || p.brand === selectedBrand;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchBrand && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col baroque-bg">
      <Navbar />

      {/* Page header */}
      <div
        className="py-12 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--crimson-dark), #2d0d0d)" }}
      >
        <div className="absolute inset-0 baroque-pattern opacity-10" />
        <div className="relative z-10">
          <span className="ornament text-2xl block mb-2">❦</span>
          <h1 className="font-cormorant font-bold text-4xl" style={{ color: "var(--gold-light)" }}>
            Каталог материалов
          </h1>
          <p className="text-sm mt-2 tracking-wide" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Philosopher, serif" }}>
            Строительные, отделочные и реставрационные материалы
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div
          className="baroque-card rounded-sm p-5 mb-8 flex flex-col md:flex-row gap-4"
        >
          {/* Search */}
          <div className="flex-1 relative">
            <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gold-dark)" } as React.CSSProperties} />
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-sm outline-none"
              style={{
                background: "var(--ivory)",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "var(--crimson-dark)",
                fontFamily: "Philosopher, serif",
              }}
            />
          </div>

          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="py-2 px-3 text-sm rounded-sm outline-none"
            style={{
              background: "var(--ivory)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "var(--crimson-dark)",
              fontFamily: "Philosopher, serif",
            }}
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Brand filter */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="py-2 px-3 text-sm rounded-sm outline-none"
            style={{
              background: "var(--ivory)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "var(--crimson-dark)",
              fontFamily: "Philosopher, serif",
            }}
          >
            <option value="Все">Все марки</option>
            {brands.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <div className="baroque-divider mb-6">
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
            Найдено {filtered.length} позиций
          </span>
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="ornament text-4xl block mb-4">✦</span>
            <p className="text-lg font-cormorant" style={{ color: "var(--crimson)" }}>Ничего не найдено</p>
            <p className="text-sm mt-2" style={{ color: "var(--gold-dark)" }}>Попробуйте изменить фильтры</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const brandObj = brands.find((b) => b.id === product.brand);
              const hasExtra = product.instructions || product.specs || product.technology || (product.documents && product.documents.length > 0);
              return (
                <div key={product.id} className="baroque-card rounded-sm overflow-hidden flex flex-col">
                  {/* Card header */}
                  <div
                    className="px-5 pt-4 pb-2"
                    style={{ borderBottom: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-sm"
                        style={{ background: "var(--parchment)", color: "var(--gold-dark)", border: "1px solid rgba(201,168,76,0.3)", fontFamily: "Philosopher, serif" }}
                      >
                        {brandObj?.name}
                      </span>
                      <span className="text-xs" style={{ color: "var(--gold-dark)" }}>
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-cormorant font-semibold text-lg leading-tight" style={{ color: "var(--crimson)" }}>
                      {product.name}
                    </h3>
                  </div>

                  {/* Card body */}
                  <div className="px-5 py-4 flex-1">
                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "rgba(25,10,5,0.65)" }}>
                      {product.description}
                    </p>
                    {product.price && (
                      <div className="mt-3 text-sm font-medium" style={{ color: "var(--crimson)", fontFamily: "Philosopher, serif" }}>
                        {product.price}
                        {product.unit && <span className="text-xs ml-1 opacity-70">/ {product.unit}</span>}
                      </div>
                    )}
                  </div>

                  {/* Card footer */}
                  <div
                    className="px-5 pb-5 pt-3 flex flex-wrap gap-2"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
                  >
                    {hasExtra && (
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="product-btn flex items-center gap-1.5"
                      >
                        <Icon name="Info" size={12} />
                        Подробнее
                      </button>
                    )}
                    {product.instructions && (
                      <button
                        onClick={() => { setSelectedProduct(product); }}
                        className="product-btn flex items-center gap-1.5"
                        title="Инструкция по применению"
                      >
                        <Icon name="BookOpen" size={12} />
                        Инструкция
                      </button>
                    )}
                    {product.documents && product.documents.length > 0 && (
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="product-btn flex items-center gap-1.5"
                      >
                        <Icon name="FileText" size={12} />
                        Документы
                      </button>
                    )}
                    <Link
                      to="/contacts"
                      className="product-btn flex items-center gap-1.5 ml-auto"
                      style={{ background: "var(--crimson)", color: "var(--ivory)", borderColor: "var(--crimson)" }}
                    >
                      <Icon name="Phone" size={12} />
                      Заказать
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <Footer />
    </div>
  );
}
