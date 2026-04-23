"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "Marina Ciconet",
    role: "Jornalista e criadora de conteúdo",
    stats: "59,1K",
    statLabel: "seguidores",
    growth: "+437%",
    handle: "@marinaciconet",
    initials: "MC",
    quote: "",
  },
  {
    name: "Mariana Penteado",
    role: "Influenciadora de moda e lifestyle",
    stats: "198K",
    statLabel: "seguidores",
    growth: "+371%",
    handle: "@marianapenteado",
    initials: "MP",
    quote: "",
  },
  {
    name: "Brunnen",
    role: "Moda feminina",
    stats: "8,7K",
    statLabel: "seguidores",
    growth: "↑",
    handle: "@brunnenmodafeminina",
    initials: "BR",
    quote: "",
  },
  {
    name: "A.MAR José Ignacio",
    role: "Moda e lifestyle de luxo",
    stats: "43,7K",
    statLabel: "seguidores",
    growth: "+446%",
    handle: "@a.mar.joseignacio",
    initials: "AM",
    quote: "",
  },
];

export default function Clientes() {
  return (
    <section
      id="clientes"
      style={{
        background: "var(--parchment-dark)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            marginBottom: 72,
            alignItems: "end",
          }}
          className="clientes-header"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
              Clientes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.2,
              }}
            >
              Marcas e profissionais que confiaram no meu olhar
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(10,10,10,0.5)",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            Cada cliente é uma história de transformação. Aqui estão alguns que apostaram
            em estratégia e colheram resultados expressivos.
          </motion.p>
        </div>

        {/* Grid de clientes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(10,10,10,0.08)",
            marginBottom: 72,
          }}
          className="clients-grid"
        >
          {clients.map((c, i) => (
            <motion.div
              key={c.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "var(--parchment-dark)",
                padding: "40px 32px",
                transition: "background 0.3s ease",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
              whileHover={{ background: "#FFFFFF" }}
            >
              {/* Stat highlight */}
              <div style={{ marginBottom: 20 }}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)",
                    fontWeight: 500,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {c.stats}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(10,10,10,0.35)",
                    }}
                  >
                    {c.statLabel}
                  </p>
                  {c.growth !== "↑" && (
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.08em",
                        color: "#4CAF50",
                        background: "rgba(76,175,80,0.1)",
                        padding: "2px 6px",
                      }}
                    >
                      {c.growth}
                    </span>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: "100%", height: 1, background: "rgba(10,10,10,0.07)", marginBottom: 20 }} />

              {/* Cliente info */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: c.quote ? 16 : 0 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(201,169,110,0.12)",
                    border: "1px solid rgba(201,169,110,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.05em",
                    color: "var(--gold)",
                    flexShrink: 0,
                  }}
                >
                  {c.initials}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                      marginBottom: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    {c.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.72rem",
                      color: "rgba(10,10,10,0.45)",
                      fontWeight: 300,
                    }}
                  >
                    {c.role}
                  </p>
                </div>
              </div>

              {/* Quote — quando disponível */}
              {c.quote && (
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(10,10,10,0.5)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    fontStyle: "italic",
                    borderLeft: "2px solid var(--gold)",
                    paddingLeft: 12,
                    marginTop: 4,
                  }}
                >
                  &ldquo;{c.quote}&rdquo;
                </p>
              )}

              {/* Handle */}
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.08em",
                  color: "rgba(10,10,10,0.3)",
                  marginTop: "auto",
                  paddingTop: 16,
                }}
              >
                {c.handle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              color: "var(--ink)",
              marginBottom: 24,
              fontStyle: "italic",
            }}
          >
            Quer fazer parte desta lista?
          </p>
          <a
            href="#contato"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              fontWeight: 500,
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "var(--ink)",
              padding: "14px 36px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.3s ease",
              minHeight: "auto",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C9A96E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; }}
          >
            Fale comigo
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .clientes-header {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 768px) {
          #clientes {
            padding: 80px 0 !important;
          }
          #clientes > div {
            padding: 0 20px !important;
          }
          .clients-grid > div {
            padding: 28px 20px !important;
          }
          .clientes-header {
            margin-bottom: 48px !important;
          }
        }
        @media (max-width: 480px) {
          .clients-grid {
            grid-template-columns: 1fr !important;
          }
          #clientes {
            padding: 64px 0 !important;
          }
          #clientes > div {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
