"use client";

import { motion } from "framer-motion";
import { brands } from "./data";

export function BrandWall() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="prova-brands"
    >
      <p className="prova-brands__label">
        <span className="prova-brands__rule" aria-hidden />
        Marcas conduzidas
      </p>
      <div className="prova-brands__list">
        {brands.map((b) => (
          <span key={b.name} className="prova-brand" style={{ fontStyle: b.style }}>
            {b.name}
          </span>
        ))}
      </div>

      <style>{`
        .prova-brands {
          margin-top: clamp(56px, 7vw, 80px);
          padding-top: clamp(36px, 5vw, 52px);
          border-top: 1px solid rgba(10,10,10,0.06);
          text-align: center;
        }
        .prova-brands__label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .prova-brands__rule {
          display: block;
          width: 22px;
          height: 1px;
          background: var(--gold);
        }
        .prova-brands__list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 28px 44px;
        }
        .prova-brand {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: clamp(1rem, 1.6vw, 1.35rem);
          font-weight: 400;
          color: rgba(10,10,10,0.6);
          letter-spacing: -0.005em;
          transition: color var(--duration-base) ease;
        }
        .prova-brand:hover { color: var(--gold); }

        @media (max-width: 560px) {
          .prova-brands__list { gap: 20px 28px; }
        }
      `}</style>
    </motion.div>
  );
}
