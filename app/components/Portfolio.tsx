"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Kicker, CTA } from "./_base";

const items = [
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2293.jpg", label: "Captação de Conteúdo" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2297.jpg", label: "Editorial" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2298.jpg", label: "Marcas" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2299.jpg", label: "Posicionamento Digital" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2302.jpg", label: "Direção Criativa" },
  { src: "/portfolio/Fotos/Marcas/NOVOS/IMG_2292.jpg", label: "Direção Criativa" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad-y portfolio-section">
      <div className="container-x">
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "var(--space-5)" }}
          >
            <Kicker>Portfólio</Kicker>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="portfolio-h2"
          >
            Projetos, marcas e conteúdos que ganharam forma com direção criativa.
          </motion.h2>
        </div>

        {/* Grid 2 colunas mobile / 3 desktop */}
        <div className="portfolio-grid">
          {items.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="portfolio-item"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 426px"
                className="portfolio-img"
              />
              <figcaption className="portfolio-caption">
                <span>{item.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="portfolio-cta-wrap">
          <CTA
            href="https://www.instagram.com/laura.camponogara/"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
          >
            Ver mais no Instagram
          </CTA>
        </div>
      </div>

      <style>{`
        .portfolio-section {
          background: #FFFFFF;
        }
        .portfolio-h2 {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 500;
          color: var(--ink);
          max-width: 600px;
          line-height: 1.2;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 40px;
        }
        .portfolio-item {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          margin: 0;
          cursor: pointer;
        }
        .portfolio-img {
          object-fit: cover;
          transition: transform var(--duration-slow) var(--ease-editorial);
        }
        .portfolio-item:hover .portfolio-img { transform: scale(1.05); }
        .portfolio-caption {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%);
          display: flex;
          align-items: flex-end;
          padding: 14px;
          opacity: 0.7;
          transition: opacity var(--duration-base) ease;
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .portfolio-item:hover .portfolio-caption { opacity: 1; }
        .portfolio-cta-wrap { text-align: center; }

        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          #portfolio { padding: 72px 0 56px !important; }
        }
        @media (max-width: 480px) {
          #portfolio { padding: 60px 0 48px !important; }
        }
      `}</style>
    </section>
  );
}
