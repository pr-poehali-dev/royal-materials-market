import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Каталог", path: "/catalog" },
  { label: "Торговые марки", path: "/brands" },
  { label: "Услуги", path: "/services" },
  { label: "Портфолио", path: "/portfolio" },
  { label: "О компании", path: "/about" },
  { label: "Доставка", path: "/delivery" },
  { label: "Документация", path: "/documentation" },
  { label: "Контакты", path: "/contacts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header style={{ background: "var(--crimson-dark)" }} className="sticky top-0 z-50 shadow-lg">
      {/* Top accent line */}
      <div style={{ background: "linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent)", height: "2px" }} />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center">
              <span className="ornament text-2xl leading-none">❦</span>
            </div>
            <div>
              <div
                className="font-cormorant font-bold text-xl leading-tight"
                style={{ color: "var(--gold-light)" }}
              >
                Царскій Матеріалъ
              </div>
              <div
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Philosopher, serif" }}
              >
                строительные и реставрационные материалы
              </div>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded-sm text-xs ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone + burger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+78001234567"
              className="hidden md:flex items-center gap-2 text-sm"
              style={{ color: "var(--gold-light)", fontFamily: "Philosopher, serif" }}
            >
              <Icon name="Phone" size={14} />
              <span>8 (800) 123-45-67</span>
            </a>
            <button
              className="xl:hidden p-2"
              style={{ color: "var(--gold)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{ background: "linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent)", height: "1px", opacity: 0.5 }} />

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "var(--crimson-dark)", borderTop: "1px solid rgba(201,168,76,0.3)" }}>
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `nav-link py-2 px-3 block text-sm ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="tel:+78001234567"
              className="flex items-center gap-2 py-2 px-3 text-sm mt-1"
              style={{ color: "var(--gold-light)" }}
            >
              <Icon name="Phone" size={14} />
              8 (800) 123-45-67
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
