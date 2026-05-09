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
          background: var(--obsidian);
          border-top: 1px solid rgba(201,169,110,0.12);
          border-bottom: 1px solid rgba(201,169,110,0.12);
          padding: 64px 0;
        }
        .prova-stats-grid {
          max-width: var(--bp-xl);
          margin: 0 auto;
          padding: 0 var(--space-8);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(201,169,110,0.08);
        }
        .prova-stat {
          background: var(--obsidian);
          padding: 36px 28px;
          text-align: center;
        }
        .prova-stat__value {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(2.2rem, 3.4vw, 3rem);
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .prova-stat__label {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.94rem;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          margin-bottom: 5px;
        }
        .prova-stat__sub {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--gold);
          opacity: 0.85;
        }

        @media (max-width: 900px) {
          .prova-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .prova-stats-band { padding: 48px 0; }
          .prova-stat { padding: 28px 18px; }
        }
        @media (max-width: 360px) {
          .prova-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
