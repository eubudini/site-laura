"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2293.jpg", label: "Captação de Conteúdo" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2297.jpg", label: "Editorial" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2298.jpg", label: "Marcas" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2299.jpg", label: "Posicionamento Digital" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2302.jpg", label: "Direção Criativa" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2292.jpg", label: "Direção Criativa" },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      style={{
        background: "#FFFFFF",
        padding: "80px 0 64px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
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
              gap: 12,
            }}
          >
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            Portfólio
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
              color: "var(--ink)",
              maxWidth: 600,
              lineHeight: 1.2,
            }}
          >
            Projetos, marcas e conteúdos que ganharam forma com direção criativa.
          </motion.h2>
        </div>

        {/* Grid 2 colunas mobile / 3 desktop */}
        <div className="portfolio-grid" style={{ marginBottom: 40 }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "4/5",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  transform: hovered === i ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "14px",
                  opacity: hovered === i ? 1 : 0.7,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}>
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.instagram.com/laura.camponogara/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
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
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#C9A96E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--ink)";
            }}
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>

      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          #portfolio { padding: 72px 0 56px !important; }
          #portfolio > div { padding: 0 16px !important; }
        }
        @media (max-width: 480px) {
          #portfolio { padding: 60px 0 48px !important; }
        }
      `}</style>
    </section>
  );
}
