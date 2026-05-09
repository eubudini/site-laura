"use client";

import { motion } from "framer-motion";
import { quotes } from "./data";

export function QuoteWall() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="prova-quotes-band"
    >
      <div className="prova-quotes-rule" aria-hidden />
      <div className="prova-quotes-grid">
        {quotes.map((q, i) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="prova-quote"
          >
            <blockquote className="prova-quote__text">
              <span className="prova-quote__mark" aria-hidden>“</span>
              {q.quote}
            </blockquote>
            <figcaption className="prova-quote__id">
              <span className="prova-quote__avatar">{q.initials}</span>
              <span>
                <span className="prova-quote__name">{q.name}</span>
                <span className="prova-quote__role">{q.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <style>{`
        .prova-quotes-band {
          margin-top: clamp(72px, 9vw, 100px);
          padding-top: clamp(48px, 6vw, 64px);
          position: relative;
        }
        .prova-quotes-rule {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }
        .prova-quotes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .prova-quote {
          margin: 0;
          padding: 22px 22px 20px;
          background: #FFFFFF;
          border: 1px solid rgba(10,10,10,0.06);
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-height: 180px;
        }
        .prova-quote__text {
          margin: 0;
          padding: 0;
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-style: italic;
          font-size: 1.02rem;
          line-height: 1.5;
          color: var(--ink);
          font-weight: 400;
          letter-spacing: -0.005em;
        }
        .prova-quote__mark {
          font-style: normal;
          font-size: 1.5rem;
          color: var(--gold);
          line-height: 1;
          margin-right: 3px;
          opacity: 0.65;
          vertical-align: -6px;
        }
        .prova-quote__id {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid rgba(10,10,10,0.07);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .prova-quote__avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(201,169,110,0.10);
          border: 1px solid rgba(201,169,110,0.28);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.6rem;
          color: var(--gold);
          flex-shrink: 0;
        }
        .prova-quote__name {
          display: block;
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 0.94rem;
          color: var(--ink);
          font-weight: 500;
          line-height: 1.2;
        }
        .prova-quote__role {
          display: block;
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.5);
          margin-top: 3px;
        }

        @media (max-width: 900px) {
          .prova-quotes-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .prova-quotes-grid { grid-template-columns: 1fr; gap: 14px; }
          .prova-quote { min-height: 0; }
        }
      `}</style>
    </motion.div>
  );
}
