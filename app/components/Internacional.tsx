"use client";

import { motion } from "framer-motion";

const photos = [
  { src: "/internacional-2.jpg", name: "Zaira Nara", handle: "@zaira.nara" },
  { src: "/internacional-1.jpg", name: "Camila Coutinho", handle: "@camilacoutinho" },
];

export default function Internacional() {
  return (
    <section
      id="internacional"
      style={{
        background: "var(--obsidian)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Linha dourada topo */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(201,169,110,0.5), transparent)",
        }}
      />

      {/* Avião animado */}
      <motion.div
        initial={{ x: "-120px", opacity: 0 }}
        animate={{ x: "calc(100vw + 120px)", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 10, delay: 1.5, repeat: Infinity, repeatDelay: 8, ease: "linear" }}
        style={{
          position: "absolute",
          top: 52,
          left: 0,
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <div style={{ width: 120, height: 1, background: "linear-gradient(to right, transparent, rgba(201,169,110,0.5))" }} />
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#C9A96E" style={{ filter: "drop-shadow(0 0 8px rgba(201,169,110,0.4))", transform: "rotate(-5deg)" }}>
          <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
        </svg>
      </motion.div>

      <div className="internacional-grid">
        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="internacional-text"
        >
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            Experiência Internacional
          </p>

          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)",
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: 1.18,
            marginBottom: 28,
            letterSpacing: "-0.015em",
          }}>
            Repertório ampliado por experiências fora do país
          </h2>

          <p style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: "0.92rem",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.85,
            marginBottom: 14,
            fontWeight: 300,
            maxWidth: 460,
          }}>
            Laura já realizou produções de conteúdo presencial no Uruguai, em especial na região
            de José Ignácio — um dos destinos mais exclusivos da América do Sul e referência em
            moda, lifestyle e turismo de luxo.
          </p>
          <p style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: "0.92rem",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.85,
            marginBottom: 36,
            fontWeight: 300,
            maxWidth: 460,
          }}>
            Essa vivência internacional soma repertório criativo e refinamento estético ao trabalho
            que hoje atende marcas em Porto Alegre e em todo o Brasil.
          </p>

          {/* Rota */}
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
            {[
              { flag: "🇧🇷", city: "Porto Alegre", country: "Brasil" },
              null,
              { flag: "🇺🇾", city: "José Ignácio", country: "Uruguai" },
            ].map((item, i) =>
              item === null ? (
                <svg key={i} width="44" height="14" viewBox="0 0 48 14" fill="none">
                  <line x1="0" y1="7" x2="40" y2="7" stroke="#C9A96E" strokeWidth="1" strokeDasharray="4 3"/>
                  <polyline points="33,2 42,7 33,12" stroke="#C9A96E" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <div key={item.city} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>{item.flag}</span>
                  <div>
                    <p style={{ fontFamily: "'Fraunces', serif", fontSize: "0.88rem", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>
                      {item.city}
                    </p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.32)", textTransform: "uppercase", marginTop: 2 }}>
                      {item.country}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            color: "rgba(201,169,110,0.85)",
            border: "1px solid rgba(201,169,110,0.25)",
            padding: "8px 18px",
            display: "inline-block",
          }}>
            Base em Porto Alegre · Atendimento para todo o Brasil
          </span>
        </motion.div>

        {/* Fotos */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="internacional-fotos"
        >
          {photos.map((photo, idx) => (
            <figure key={photo.src} className="foto-card">
              <div className="foto-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={`${photo.name} — Conteúdo internacional Laura Camponogara`}
                  loading="lazy"
                  className="foto-img"
                />
                {/* Numeração editorial */}
                <span className="foto-num">N° {String(idx + 1).padStart(2, "0")}</span>
              </div>
              {/* Caption refinada abaixo da foto */}
              <figcaption className="foto-caption">
                <span className="foto-rule" aria-hidden />
                <span className="foto-meta">
                  <span className="foto-name">{photo.name}</span>
                  <span className="foto-handle">{photo.handle}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>

      <style>{`
        .internacional-grid {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 72px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .internacional-text {
          max-width: 520px;
        }
        .internacional-fotos {
          display: flex;
          flex-direction: column;
          gap: 28px;
          max-width: 500px;
          margin-left: auto;
          width: 100%;
        }
        .foto-card {
          margin: 0;
        }
        .foto-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #0A0A0A;
          box-shadow: 0 24px 64px rgba(0,0,0,0.45);
          border: 1px solid rgba(201,169,110,0.08);
        }
        .foto-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .foto-wrap:hover .foto-img { transform: scale(1.03); }
        .foto-num {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'DM Mono', monospace;
          font-size: 0.52rem;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.85);
          background: rgba(10,10,10,0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 5px 10px;
          text-transform: uppercase;
        }
        .foto-caption {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 14px;
          padding: 0 2px;
        }
        .foto-rule {
          flex: 0 0 32px;
          height: 1px;
          background: rgba(201,169,110,0.5);
        }
        .foto-meta {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }
        .foto-name {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.92);
          letter-spacing: 0.005em;
        }
        .foto-handle {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          text-transform: lowercase;
          color: rgba(201,169,110,0.7);
        }

        @media (max-width: 1024px) {
          .internacional-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .internacional-text { max-width: 640px; margin: 0 auto; }
          .internacional-fotos { max-width: 560px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          #internacional { padding: 80px 0 !important; }
          .internacional-grid { padding: 0 20px; gap: 48px; }
          .internacional-fotos { gap: 24px; max-width: 100%; }
          .foto-num { font-size: 0.48rem; padding: 4px 9px; }
          .foto-name { font-size: 0.88rem; }
          .foto-handle { font-size: 0.56rem; }
        }
        @media (max-width: 480px) {
          #internacional { padding: 64px 0 !important; }
          .internacional-grid { padding: 0 16px; }
          .foto-caption { gap: 10px; margin-top: 12px; }
          .foto-rule { flex-basis: 22px; }
        }
      `}</style>
    </section>
  );
}
