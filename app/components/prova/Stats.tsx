"use client";

import { motion } from "framer-motion";
import { stats } from "./data";
import { Counter } from "./Counter";

export function Stats() {
  return (
    <div className="prova-stats-band">
      <div className="prova-stats-grid">
        {stats.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="prova-stat"
          >
            <p className="prova-stat__value">
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} separator={m.separator} />
            </p>
            <p className="prova-stat__label">{m.label}</p>
            <p className="prova-stat__sub">{m.sub}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .prova-stats-band {
          background: transparent;
          padding: clamp(56px, 8vw, 96px) 0;
        }
        .prova-stats-grid {
          max-width: var(--bp-xl);
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 64px);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .prova-stat {
          padding: clamp(6px, 1.4vw, 18px) clamp(16px, 2.2vw, 32px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        /* Hairline vertical sutil separando os numeros (so no desktop). */
        .prova-stat + .prova-stat {
          border-left: 1px solid rgba(10,10,10,0.10);
        }
        .prova-stat__value {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(2.4rem, 3.8vw, 3.4rem);
          font-weight: 500;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        /* min-height reserva 2 linhas: rotulos de 1 e 2 linhas ficam
           alinhados e os subtitulos comecam todos na mesma altura. */
        .prova-stat__label {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.3;
          min-height: 2.6em;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prova-stat__sub {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          line-height: 1.4;
          color: var(--gold-text);
          min-height: 2.8em;
        }

        @media (max-width: 760px) {
          .prova-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: clamp(36px, 9vw, 52px);
          }
          .prova-stat { padding: 0 14px; }
          .prova-stat__value { font-size: clamp(2.1rem, 9vw, 2.8rem); }
          /* No mobile 2x2: divisoria so entre as colunas. */
          .prova-stat + .prova-stat { border-left: none; }
          .prova-stat:nth-child(even) {
            border-left: 1px solid rgba(10,10,10,0.10);
          }
        }
        @media (max-width: 380px) {
          .prova-stat__label { font-size: 0.86rem; }
          .prova-stat__sub { font-size: 0.62rem; }
        }
      `}</style>
    </div>
  );
}
