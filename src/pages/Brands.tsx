import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { brands, products } from "@/data/products";

export default function Brands() {
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
            Торговые марки
          </h1>
          <p className="text-sm mt-2 tracking-wide" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Philosopher, serif" }}>
            Проверенные производители с мировым именем
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="baroque-divider mb-10">
          <span className="ornament">✦</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => {
            const count = products.filter((p) => p.brand === brand.id).length;
            return (
              <div key={brand.id} className="baroque-card rounded-sm p-7 flex flex-col gap-4">
                {/* Brand header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-cormorant font-bold text-2xl" style={{ color: "var(--crimson)" }}>
                      {brand.name}
                    </h2>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                        <Icon name="Flag" size={10} className="inline mr-1" />
                        {brand.country}
                      </span>
                      <span className="text-xs" style={{ color: "var(--gold-dark)" }}>
                        <Icon name="Calendar" size={10} className="inline mr-1" />
                        с {brand.founded}
                      </span>
                    </div>
                  </div>
                  <div
                    className="text-xs px-3 py-1 rounded-sm"
                    style={{ background: "var(--parchment)", border: "1px solid var(--gold)", color: "var(--crimson)" }}
                  >
                    {count} позиций
                  </div>
                </div>

                {/* Specialty badge */}
                <div
                  className="text-xs px-3 py-1.5 rounded-sm inline-flex items-center gap-1.5 self-start"
                  style={{ background: "linear-gradient(135deg, var(--crimson-dark), var(--crimson))", color: "var(--gold-light)", fontFamily: "Philosopher, serif" }}
                >
                  <Icon name="Star" size={10} />
                  {brand.specialty}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "rgba(25,10,5,0.65)" }}>
                  {brand.description}
                </p>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
                />

                <Link
                  to={`/catalog?brand=${brand.id}`}
                  className="product-btn flex items-center gap-2 justify-center text-sm py-2"
                >
                  <Icon name="Package" size={13} />
                  Смотреть товары {brand.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
