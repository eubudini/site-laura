"use client";

import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{ background: "var(--parchment)", padding: "140px 0", overflow: "hidden" }}
      className="sobre-section"
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 100,
          alignItems: "center",
        }}
        className="sobre-grid sobre-inner"
      >
        {/* Fotos editoriais */}
        <div style={{ position: "relative", height: 560 }} className="sobre-fotos">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="sobre-foto-principal"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 300,
              height: 400,
              overflow: "hidden",
              border: "8px solid #FFFFFF",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              transform: "rotate(-2deg)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/laura-principal.jpg"
              alt="Laura Camponogara"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="sobre-foto-secundaria"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 260,
              height: 340,
              overflow: "hidden",
              border: "8px solid #FFFFFF",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              transform: "rotate(2.5deg)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/laura-trabalhando.jpg"
              alt="Laura Camponogara trabalhando"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="sobre-foto-lc"
            style={{
              position: "absolute",
              bottom: 80,
              left: -20,
              fontFamily: "'Playfair Display', serif",
              fontSize: "6rem",
              fontWeight: 700,
              color: "rgba(201,169,110,0.06)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.05em",
            }}
            aria-hidden
          >
            LC
          </motion.div>
        </div>

        {/* Texto */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
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
            Sobre
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "var(--ink)",
              marginBottom: 28,
              letterSpacing: "-0.01em",
            }}
          >
            Você não precisa de mais conteúdo.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Precisa do conteúdo certo.
            </em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ width: 40, height: 1, background: "var(--gold)", opacity: 0.5, marginBottom: 28 }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(10,10,10,0.55)",
              lineHeight: 1.9,
              marginBottom: 20,
              fontWeight: 300,
            }}>
              A maioria das marcas posta. Poucas se posicionam. A diferença está
              na estratégia por trás de cada imagem, legenda e decisão criativa —
              e é exatamente isso que eu trago ao seu projeto.
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(10,10,10,0.55)",
              lineHeight: 1.9,
              fontWeight: 300,
            }}>
              Cada cliente recebe uma leitura única da sua marca, do seu público
              e dos canais onde sua voz precisa ser ouvida. Sem fórmula pronta.
              Com resultado real.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sobre-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .sobre-section { padding: 72px 0 !important; }
          .sobre-inner { padding: 0 20px !important; }
          .sobre-fotos { min-height: 350px !important; height: 350px !important; }
          .sobre-foto-principal { width: 220px !important; height: 300px !important; }
          .sobre-foto-secundaria { display: block !important; width: 180px !important; height: 240px !important; }
          .sobre-foto-lc { font-size: 4rem !important; }
        }
        @media (max-width: 480px) {
          .sobre-section { padding: 56px 0 !important; }
          .sobre-inner { padding: 0 16px !important; }
          .sobre-fotos { min-height: 280px !important; height: 280px !important; }
          .sobre-foto-principal { width: 175px !important; height: 235px !important; }
          .sobre-foto-secundaria { width: 145px !important; height: 195px !important; }
          .sobre-foto-lc { display: none !important; }
        }
      `}</style>
    </section>
  );
}
