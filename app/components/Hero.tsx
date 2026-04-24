"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "var(--parchment)",
        display: "flex",
        alignItems: "center",
        paddingTop: 68,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(201,169,110,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid hero-inner"
      >
        {/* Conteúdo */}
        <div className="hero-content">
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                display: "block",
                width: 32,
                height: 1,
                background: "var(--gold)",
                opacity: 0.7,
              }}
            />
            Estratégia de Conteúdo · Posicionamento Digital
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--ink)",
              marginBottom: 28,
              letterSpacing: "-0.01em",
            }}
          >
            Sua marca passou da hora{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              de ser desejada.
            </em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 4vw, 1.15rem)",
              color: "rgba(10,10,10,0.58)",
              lineHeight: 1.85,
              maxWidth: 500,
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            Crio estratégias de conteúdo que transformam perfis comuns em
            referências do segmento — com direção criativa, posicionamento e
            produção que para o scroll.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            className="hero-ctas"
          >
            <a
              href="#resultados"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#FFFFFF",
                background: "var(--ink)",
                padding: "15px 36px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C9A96E"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; }}
            >
              Ver resultados reais
            </a>
            <a
              href="#contato"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "var(--ink)",
                border: "1px solid rgba(10,10,10,0.3)",
                padding: "15px 36px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C9A96E";
                (e.currentTarget as HTMLElement).style.color = "#C9A96E";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,10,0.3)";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
            >
              Quero isso para a minha marca
            </a>
          </motion.div>

          <motion.p
            {...fadeUp(0.5)}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "rgba(10,10,10,0.35)",
              marginTop: 36,
            }}
          >
            Porto Alegre, RS · Presencial na região · Atendimento remoto para todo o Brasil
          </motion.p>
        </div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="hero-photo"
          style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: -20,
              right: -20,
              width: "calc(100% - 40px)",
              height: "calc(100% - 40px)",
              border: "1px solid rgba(201,169,110,0.25)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div
            style={{
              width: "100%",
              maxWidth: 460,
              aspectRatio: "3/4",
              background: "var(--parchment-dark)",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/laura-hero.jpg"
              alt="Laura Camponogara"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hero-scroll"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "rgba(10,10,10,0.3)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(10,10,10,0.3), transparent)" }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-photo { order: -1 !important; }
          .hero-content > p:first-child { justify-content: center !important; }
        }
        @media (max-width: 768px) {
          .hero-inner { padding: 52px 20px 48px !important; }
          .hero-ctas { flex-direction: column !important; }
          .hero-ctas a { text-align: center !important; justify-content: center !important; }
          .hero-photo > div:first-child { max-width: min(300px, 82vw) !important; margin: 0 auto !important; }
        }
        @media (max-width: 480px) {
          .hero-inner { padding: 40px 16px 40px !important; }
          .hero-scroll { display: none !important; }
          .hero-photo > div:first-child { max-width: min(260px, 84vw) !important; }
          .hero-ctas a { width: 100% !important; display: block !important; }
        }
      `}</style>
    </section>
  );
}
