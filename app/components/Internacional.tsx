"use client";

import { motion } from "framer-motion";

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
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#C9A96E" style={{ filter: "drop-shadow(0 0 8px rgba(201,169,110,0.4))", transform: "rotate(-5deg)" }}>
          <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
        </svg>
      </motion.div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 80,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="internacional-grid"
      >
        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            Experiência Internacional
          </p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: 28,
            letterSpacing: "-0.01em",
          }}>
            Repertório ampliado por experiências fora do país
          </h2>

          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.9,
            marginBottom: 16,
            fontWeight: 300,
            maxWidth: 460,
          }}>
            Laura já realizou produções de conteúdo presencial no Uruguai, em especial na região
            de José Ignácio — um dos destinos mais exclusivos da América do Sul e referência em
            moda, lifestyle e turismo de luxo.
          </p>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.9,
            marginBottom: 40,
            fontWeight: 300,
            maxWidth: 460,
          }}>
            Essa vivência internacional soma repertório criativo e refinamento estético ao trabalho
            que hoje atende marcas em Porto Alegre e em todo o Brasil.
          </p>

          {/* Rota */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            {[
              { flag: "🇧🇷", city: "Porto Alegre", country: "Brasil" },
              null,
              { flag: "🇺🇾", city: "José Ignácio", country: "Uruguai" },
            ].map((item, i) =>
              item === null ? (
                <svg key={i} width="48" height="14" viewBox="0 0 48 14" fill="none">
                  <line x1="0" y1="7" x2="40" y2="7" stroke="#C9A96E" strokeWidth="1" strokeDasharray="4 3"/>
                  <polyline points="33,2 42,7 33,12" stroke="#C9A96E" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <div key={item.city} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "1.4rem" }}>{item.flag}</span>
                  <div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", fontWeight: 500, color: "#FFFFFF" }}>
                      {item.city}
                    </p>
                    <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
                      {item.country}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(201,169,110,0.8)",
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
        >
          {[
            { src: "/internacional-2.jpg", tag: "Zaira Nara · @zaira.nara" },
            { src: "/internacional-1.jpg", tag: "Camila Coutinho · @camilacoutinho" },
          ].map((photo) => (
            <div
              key={photo.src}
              style={{
                aspectRatio: "1/1",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.tag}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              />
              <div style={{
                position: "absolute",
                bottom: 12,
                left: 12,
                background: "rgba(10,10,10,0.8)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(201,169,110,0.15)",
                padding: "5px 12px",
              }}>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.5rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}>
                  {photo.tag}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .internacional-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .internacional-fotos {
            max-width: 560px !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 768px) {
          #internacional { padding: 72px 0 !important; }
          .internacional-grid { padding: 0 20px !important; }
          .internacional-fotos {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
        }
        @media (max-width: 480px) {
          #internacional { padding: 56px 0 !important; }
          .internacional-grid { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
