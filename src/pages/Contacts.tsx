import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
            Контакты
          </h1>
          <p className="text-sm mt-2 tracking-wide" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Philosopher, serif" }}>
            Мы рады ответить на все ваши вопросы
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="baroque-divider mb-6">
              <span className="ornament">✦</span>
            </div>
            <h2 className="section-title text-2xl mb-8">Реквизиты и адреса</h2>

            <div className="flex flex-col gap-5">
              {[
                { icon: "Phone", label: "Телефон", value: "8 (800) 123-45-67", hint: "бесплатно по России", href: "tel:+78001234567" },
                { icon: "Phone", label: "Москва", value: "+7 (495) 123-45-67", href: "tel:+74951234567" },
                { icon: "Mail", label: "Электронная почта", value: "info@tsarmat.ru", href: "mailto:info@tsarmat.ru" },
                { icon: "MapPin", label: "Главный офис", value: "Москва, ул. Кремлёвская, д. 1, офис 15" },
                { icon: "MapPin", label: "Склад и самовывоз", value: "Москва, ш. Энтузиастов, д. 55, стр. 3" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00, Сб: 10:00–15:00" },
              ].map((item) => (
                <div key={item.label} className="baroque-card rounded-sm p-4 flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, var(--crimson-dark), var(--crimson))", border: "1px solid var(--gold)" }}
                  >
                    <Icon name={item.icon as "Phone"} size={14} style={{ color: "var(--gold-light)" } as React.CSSProperties} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:opacity-80" style={{ color: "var(--crimson)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm" style={{ color: "var(--crimson)" }}>{item.value}</div>
                    )}
                    {item.hint && <div className="text-xs mt-0.5" style={{ color: "var(--gold-dark)" }}>{item.hint}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Rekvizity */}
            <div className="baroque-card rounded-sm p-5 mt-6">
              <h3 className="font-cormorant font-semibold text-base mb-3" style={{ color: "var(--crimson)" }}>
                Реквизиты компании
              </h3>
              <div className="flex flex-col gap-1.5 text-sm">
                {[
                  ["Полное наименование", "ООО «Центр Архитектурных Решений»"],
                  ["ИНН / КПП", "7700123456 / 770001001"],
                  ["ОГРН", "1027700123456"],
                  ["Р/с", "40702810100000000001"],
                  ["Банк", "ПАО Сбербанк, г. Москва"],
                  ["БИК", "044525225"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <span className="shrink-0" style={{ color: "rgba(25,10,5,0.5)", minWidth: "160px" }}>{k}:</span>
                    <span style={{ color: "rgba(25,10,5,0.8)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="baroque-divider mb-6">
              <span className="ornament">✦</span>
            </div>
            <h2 className="section-title text-2xl mb-8">Написать нам</h2>

            {sent ? (
              <div
                className="baroque-card rounded-sm p-10 text-center"
                style={{ border: "2px solid var(--gold)" }}
              >
                <span className="ornament text-4xl block mb-4">✦</span>
                <h3 className="font-cormorant font-bold text-2xl mb-3" style={{ color: "var(--crimson)" }}>
                  Ваше сообщение отправлено!
                </h3>
                <p className="text-sm" style={{ color: "rgba(25,10,5,0.65)", fontFamily: "Philosopher, serif" }}>
                  Мы свяжемся с вами в течение рабочего дня.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="product-btn mt-6 px-6 py-2"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="baroque-card rounded-sm p-6 flex flex-col gap-4">
                {[
                  { name: "name", label: "Ваше имя", type: "text", placeholder: "Иван Иванович", required: true },
                  { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__", required: true },
                  { name: "email", label: "Электронная почта", type: "email", placeholder: "ivan@example.ru", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                      {field.label} {field.required && <span style={{ color: "var(--crimson)" }}>*</span>}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-sm outline-none"
                      style={{
                        background: "var(--parchment)",
                        border: "1px solid rgba(201,168,76,0.4)",
                        color: "var(--crimson-dark)",
                        fontFamily: "Philosopher, serif",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--gold-dark)", fontFamily: "Philosopher, serif" }}>
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Опишите ваш запрос..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-sm outline-none resize-none"
                    style={{
                      background: "var(--parchment)",
                      border: "1px solid rgba(201,168,76,0.4)",
                      color: "var(--crimson-dark)",
                      fontFamily: "Philosopher, serif",
                    }}
                  />
                </div>
                <button type="submit" className="gold-btn py-3 text-sm rounded-sm font-medium mt-2">
                  <Icon name="Send" size={14} className="inline mr-2" />
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}