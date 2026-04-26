import { NavLink } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer style={{ background: "var(--crimson-dark)", borderTop: "2px solid var(--gold)" }}>
      <div style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)", height: "1px", opacity: 0.4 }} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="ornament text-3xl">❦</span>
              <h3 className="font-cormorant text-xl font-bold mt-2" style={{ color: "var(--gold-light)" }}>
                Царскій Матеріалъ
              </h3>
              <p className="text-xs mt-1 tracking-wider uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
                Съ 1887 года
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
              Строительные, отделочные и реставрационные материалы высочайшего качества для одноэтажных и многоэтажных домов, а также памятников архитектуры.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-philosopher text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Каталог", path: "/catalog" },
                { label: "Торговые марки", path: "/brands" },
                { label: "Услуги", path: "/services" },
                { label: "Портфолио", path: "/portfolio" },
                { label: "О компании", path: "/about" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: "rgba(245,240,232,0.65)" }}
                  >
                    <span className="mr-2" style={{ color: "var(--gold)", opacity: 0.5 }}>›</span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="font-philosopher text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
              Информация
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Доставка", path: "/delivery" },
                { label: "Документация", path: "/documentation" },
                { label: "Контакты", path: "/contacts" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(245,240,232,0.65)" }}
                  >
                    <span className="mr-2" style={{ color: "var(--gold)", opacity: 0.5 }}>›</span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-philosopher text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
              Связаться с нами
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>
                <Icon name="Phone" size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" } as React.CSSProperties} />
                <a href="tel:+78001234567" className="hover:opacity-100">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>
                <Icon name="Mail" size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" } as React.CSSProperties} />
                <a href="mailto:info@tsarmat.ru" className="hover:opacity-100">info@tsarmat.ru</a>
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>
                <Icon name="MapPin" size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" } as React.CSSProperties} />
                <span>Москва, ул. Кремлёвская, д. 1</span>
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>
                <Icon name="Clock" size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" } as React.CSSProperties} />
                <span>Пн–Пт: 9:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="baroque-divider my-8">
          <span className="ornament">✦</span>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
          <p>© 2024 Царскій Матеріалъ. Все права защищены.</p>
          <p className="text-center" style={{ fontFamily: "Philosopher, serif", letterSpacing: "0.1em" }}>
            ✦ Традиции качества с 1887 года ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
