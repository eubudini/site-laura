"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cases = [
  {
    name: "Marina Ciconet",
    handle: "@marinaciconet",
    initials: "MC",
    tag: "Jornalismo · Conteúdo",
    before: { seguidores: "11K", engajamento: "0.8%", alcance: "6K/mês" },
    after: { seguidores: "59.1K", engajamento: "4.2%", alcance: "48K/mês" },
    beforeImage: "/resultados/marina-antes.jpg",
    afterImage: "/resultados/marina-depois.jpg",
  },
  {
    name: "Mariana Penteado",
    handle: "@marianapenteado",
    initials: "MP",
    tag: "Moda · Lifestyle",
    before: { seguidores: "42K", engajamento: "1.1%", alcance: "22K/mês" },
    after: { seguidores: "198K", engajamento: "3.8%", alcance: "180K/mês" },
    beforeImage: "/resultados/mariana-antes.jpg",
    afterImage: "/resultados/mariana-depois.jpg",
  },
  {
    name: "A.MAR José Ignacio",
    handle: "@a.mar.joseignacio",
    initials: "AM",
    tag: "Moda · Luxo",
    before: { seguidores: "8K", engajamento: "0.6%", alcance: "4K/mês" },
    after: { seguidores: "43.7K", engajamento: "5.1%", alcance: "62K/mês" },
    beforeImage: "/resultados/amar-antes.jpg",
    afterImage: "/resultados/amar-depois.jpg",
  },
];

function BeforeAfterCard({ c }: { c: typeof cases[0] }) {
  const [showAfter, setShowAfter] = useState(false);
  const hasImages = c.beforeImage && c.afterImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      style={{
        background: "#141414",
        border: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Imagem antes/depois */}
      {hasImages && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={() => setShowAfter(!showAfter)}
          title={showAfter ? "Ver antes" : "Ver depois"}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={showAfter ? c.afterImage : c.beforeImage}
            alt={showAfter ? `${c.name} depois` : `${c.name} antes`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          />

          {/* Label flutuante */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              display: "flex",
              gap: 6,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.52rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: showAfter ? "rgba(255,255,255,0.4)" : "#FFFFFF",
                background: showAfter ? "rgba(10,10,10,0.5)" : "rgba(10,10,10,0.85)",
                padding: "4px 10px",
                backdropFilter: "blur(4px)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={(e) => { e.stopPropagation(); setShowAfter(false); }}
            >
              Antes
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.52rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: showAfter ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                background: showAfter ? "rgba(201,169,110,0.85)" : "rgba(10,10,10,0.5)",
                padding: "4px 10px",
                backdropFilter: "blur(4px)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={(e) => { e.stopPropagation(); setShowAfter(true); }}
            >
              Depois
            </span>
          </div>

          {/* Hint de clique */}
          <div
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.48rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              background: "rgba(10,10,10,0.6)",
              padding: "3px 8px",
              backdropFilter: "blur(4px)",
            }}
          >
            Toque para comparar
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div style={{ padding: "28px 28px 24px" }}>
        {/* Cliente */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(201,169,110,0.08)",
              border: "1px solid rgba(201,169,110,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.05em",
              color: "var(--gold)",
              fontWeight: 400,
              flexShrink: 0,
            }}
          >
            {c.initials}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 500, color: "#FFFFFF", marginBottom: 2 }}>
              {c.name}
            </p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)" }}>
              {c.handle}
            </p>
          </div>
        </div>

        {/* Comparação numérica */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, marginBottom: 18 }}>
          {/* Antes */}
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              marginBottom: 12,
            }}>
              Antes
            </p>
            {Object.entries(c.before).map(([key, val]) => (
              <div key={key} style={{ marginBottom: 10 }}>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.25)",
                  lineHeight: 1.1,
                  fontWeight: 500,
                }}>{val}</p>
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.52rem",
                  color: "rgba(255,255,255,0.15)",
                  letterSpacing: "0.06em",
                  marginTop: 2,
                }}>{key}</p>
              </div>
            ))}
          </div>

          {/* Seta */}
          <div style={{ display: "flex", alignItems: "center", paddingTop: 28 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>

          {/* Depois */}
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 12,
              textAlign: "right",
            }}>
              Depois
            </p>
            {Object.entries(c.after).map(([key, val]) => (
              <div key={key} style={{ marginBottom: 10, textAlign: "right" }}>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  fontWeight: 500,
                }}>{val}</p>
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.52rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.06em",
                  marginTop: 2,
                }}>{key}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tag */}
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.55rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--gold)",
          background: "rgba(201,169,110,0.07)",
          border: "1px solid rgba(201,169,110,0.18)",
          padding: "4px 12px",
          display: "inline-block",
        }}>
          {c.tag}
        </span>
      </div>
    </motion.div>
  );
}

export default function Resultados() {
  return (
    <section
      id="resultados"
      style={{
        background: "var(--obsidian-2)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Texto decorativo */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -60,
          right: -60,
          fontFamily: "'Playfair Display', serif",
          fontSize: "18rem",
          fontWeight: 700,
          color: "rgba(255,255,255,0.015)",
          userSelect: "none",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
      >
        results
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
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
            Resultados
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 500,
              color: "#FFFFFF",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Números reais.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Transformações reais.
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.35)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Marcas que apostaram em estratégia e colheram resultados que falam por si.
          </motion.p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="results-grid"
        >
          {cases.map((c) => (
            <BeforeAfterCard key={c.handle} c={c} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            color: "rgba(255,255,255,0.18)",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          * Números baseados nos resultados acumulados durante o período de acompanhamento.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .results-grid {
            grid-template-columns: 1fr !important;
            max-width: 520px !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 768px) {
          #resultados {
            padding: 72px 0 !important;
          }
          #resultados > div {
            padding: 0 20px !important;
          }
          .results-grid {
            max-width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          #resultados {
            padding: 64px 0 !important;
          }
          #resultados > div {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
