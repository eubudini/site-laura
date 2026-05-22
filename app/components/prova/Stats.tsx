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
          background: linear-gradient(155deg, #E9D9B4 0%, #D8BC8C 55%, #C9A96E 100%);
          padding: clamp(48px, 7vw, 72px) 0;
        }
        .prova-stats-grid {
          max-width: var(--bp-xl);
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 64px);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(12px, 1.6vw, 20px);
        }
        .prova-stat {
          background: rgba(255,255,255,0.22);
          border: 1px solid rgba(255,255,255,0.45);
          border-radius: 6px;
          padding: clamp(26px, 3vw, 40px) clamp(14px, 2vw, 28px);
          text-align: center;
          transition: background var(--duration-base) ease,
            transform var(--duration-base) var(--ease-editorial);
        }
        .prova-stat:hover {
          background: rgba(255,255,255,0.34);
          transform: translateY(-3px);
        }
        .prova-stat__value {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(2rem, 3.2vw, 2.9rem);
          font-weight: 500;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .prova-stat__label {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.94rem;
          font-weight: 600;
          color: #3B2D19;
          margin-bottom: 5px;
        }
        .prova-stat__sub {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          color: #6E5635;
        }

        @media (max-width: 760px) {
          .prova-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .prova-stat { padding: 28px 14px; }
          .prova-stat__value { font-size: clamp(1.9rem, 8vw, 2.6rem); }
        }
        @media (max-width: 380px) {
          .prova-stat { padding: 22px 8px; }
          .prova-stat__label { font-size: 0.84rem; }
          .prova-stat__sub { font-size: 0.6rem; }
        }
      `}</style>
    </div>
  );
}
