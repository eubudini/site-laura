"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Essencial",
    tag: "Captação & Edição de Conteúdo",
    desc: "Conteúdo profissional, estético e pronto para usar. Para marcas que querem qualidade de produção sem gestão de perfil.",
    items: [
      "Captação de vídeos e fotos",
      "Edição de vídeos e tratamento de imagens",
      "Conteúdos pensados para redes sociais",
      "Entrega organizada em pasta (Drive)",
      "Uso livre do material pelo cliente",
    ],
    featured: false,
  },
  {
    name: "Premium",
    tag: "Gestão de Redes Sociais",
    desc: "A solução completa para quem quer crescimento de verdade. Gestão, estratégia, produção e presença — tudo integrado e alinhado à sua identidade.",
    items: [
      "Gestão completa das redes sociais",
      "Estratégia e criação de conteúdo",
      "Captação e edição profissional",
      "Organização e curadoria do feed",
      "Planejamento mensal com calendário",
      "Apoio criativo contínuo",
    ],
    featured: true,
    badge: "Recomendado",
  },
];

export default function Planos() {
  return (
    <section
      id="planos"
      style={{
        background: "var(--obsidian)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            Planos
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 500,
              color: "#FFFFFF",
              marginBottom: 16,
            }}
          >
            Invista no que realmente transforma a percepção da sua marca
          </motion.h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 48,
          }}
          className="plans-grid"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: plan.featured ? "#FFFFFF" : "#141414",
                border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.07)",
                padding: "48px 40px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: plan.featured ? "var(--gold)" : "rgba(255,255,255,0.4)",
                    background: plan.featured ? "rgba(201,169,110,0.12)" : "rgba(255,255,255,0.05)",
                    padding: "4px 12px",
                  }}
                >
                  {plan.badge}
                </span>
              )}

              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: plan.featured ? "var(--gold)" : "rgba(201,169,110,0.6)",
                  marginBottom: 12,
                }}
              >
                {plan.tag}
              </p>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  color: plan.featured ? "var(--ink)" : "#FFFFFF",
                  marginBottom: 16,
                }}
              >
                {plan.name}
              </h3>
              <div style={{ width: 32, height: 1, background: plan.featured ? "var(--gold)" : "rgba(201,169,110,0.3)", marginBottom: 20 }} />
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  color: plan.featured ? "rgba(10,10,10,0.55)" : "rgba(255,255,255,0.45)",
                  lineHeight: 1.8,
                  marginBottom: 32,
                  fontWeight: 300,
                }}
              >
                {plan.desc}
              </p>

              <ul style={{ marginBottom: 36, flexGrow: 1 }}>
                {plan.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: plan.featured ? "rgba(10,10,10,0.65)" : "rgba(255,255,255,0.65)",
                      padding: "9px 0",
                      borderBottom: plan.featured ? "1px solid rgba(10,10,10,0.07)" : "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "0.7rem", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: plan.featured ? "#FFFFFF" : "var(--gold)",
                  background: plan.featured ? "var(--ink)" : "transparent",
                  border: plan.featured ? "none" : "1px solid rgba(201,169,110,0.4)",
                  padding: "14px 28px",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  transition: "all 0.3s ease",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.featured) el.style.background = "#C9A96E";
                  else { el.style.background = "rgba(201,169,110,0.1)"; el.style.borderColor = "#C9A96E"; }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.featured) el.style.background = "var(--ink)";
                  else { el.style.background = "transparent"; el.style.borderColor = "rgba(201,169,110,0.4)"; }
                }}
              >
                {plan.featured ? "Começar agora" : "Quero este plano"}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
            marginBottom: 32,
            fontWeight: 300,
          }}
        >
          Cada marca é única. Converse com a Laura e monte o projeto ideal para o seu momento.
        </motion.p>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://wa.me/5551985309613"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              fontWeight: 500,
              textTransform: "uppercase",
              color: "#0A0A0A",
              background: "var(--gold)",
              padding: "14px 36px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#B8966A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; }}
          >
            Falar com a Laura
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .plans-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          #planos {
            padding: 80px 0 !important;
          }
          #planos > div {
            padding: 0 20px !important;
          }
          .plans-grid > div {
            padding: 32px 24px !important;
          }
        }
        @media (max-width: 480px) {
          #planos {
            padding: 64px 0 !important;
          }
          #planos > div {
            padding: 0 16px !important;
          }
          .plans-grid > div {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
