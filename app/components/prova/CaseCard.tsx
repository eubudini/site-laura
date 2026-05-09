"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Case } from "./data";
import { InstagramMockup } from "./InstagramMockup";

function GrowthBar({ delay = 0 }: { delay?: number }) {
  return (
    <div style={{ position: "relative", height: 2, background: "rgba(10,10,10,0.06)", overflow: "hidden", flex: 1 }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          background: "linear-gradient(90deg, rgba(184,149,106,0.15), var(--gold-soft) 60%, var(--gold))",
        }}
      />
    </div>
  );
}

type Props = { c: Case; idx: number };

export function CaseCard({ c, idx }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setRevealed(true), 500 + idx * 200);
      return () => clearTimeout(t);
    }
  }, [inView, idx]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="case-card"
    >
      <div className="case-card__index">CLIENTE / {String(idx + 1).padStart(2, "0")}</div>
      <div className="case-card__head">
        <p className="case-card__tag">{c.tag}</p>
        <h3 className="case-card__name">{c.name}</h3>
        <p className="case-card__handle">@{c.handle}</p>
      </div>

      <div className="mockups-row" aria-hidden>
        <div className="case-card__col">
          <span className="case-card__chip case-card__chip--before">Antes</span>
          <InstagramMockup c={c} variant="before" isAfter={false} />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="arrow-mid"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <div className="case-card__col">
          <span className="case-card__chip case-card__chip--after">Depois</span>
          <InstagramMockup c={c} variant="after" isAfter={true} />
        </div>
      </div>

      <div className="case-card__metrics">
        {c.metrics.map((m, mIdx) => (
          <div key={m.label}>
            <div className="case-card__metric-head">
              <span className="case-card__metric-label">{m.label}</span>
              <span className="case-card__metric-growth">{m.growth}</span>
            </div>
            <div className="case-card__metric-row">
              <span className="case-card__metric-before">{m.before}</span>
              <GrowthBar delay={idx * 0.1 + 0.3 + mIdx * 0.1} />
              <span className="case-card__metric-after">{m.after}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="case-card__highlight">
        <p>{c.highlight}</p>
      </div>

      <style>{`
        .case-card {
          background: #FFFFFF;
          border: 1px solid rgba(10,10,10,0.06);
          padding: 36px 32px 30px;
          position: relative;
        }
        .case-card__index {
          position: absolute;
          top: 20px;
          right: 22px;
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.52rem;
          letter-spacing: 0.18em;
          color: rgba(184,149,106,0.5);
        }
        .case-card__head { margin-bottom: 24px; padding-right: 70px; }
        .case-card__tag {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.54rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .case-card__name {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(1.3rem, 2.1vw, 1.65rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.15;
          margin-bottom: 3px;
        }
        .case-card__handle {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.58rem;
          color: rgba(10,10,10,0.45);
        }
        .mockups-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 14px;
          align-items: center;
          margin-bottom: 26px;
        }
        .case-card__col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .case-card__chip {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 4px 12px;
        }
        .case-card__chip--before {
          color: rgba(10,10,10,0.45);
          border: 1px solid rgba(10,10,10,0.12);
        }
        .case-card__chip--after {
          color: var(--gold);
          border: 1px solid var(--gold-mid);
          background: var(--gold-light);
        }
        .arrow-mid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
        }
        .case-card__metrics {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 22px;
        }
        .case-card__metric-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 6px;
        }
        .case-card__metric-label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.5);
        }
        .case-card__metric-growth {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.05em;
          font-weight: 500;
          color: var(--gold);
          background: var(--gold-light);
          padding: 2px 9px;
        }
        .case-card__metric-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .case-card__metric-before {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 0.92rem;
          font-weight: 400;
          color: rgba(10,10,10,0.32);
          min-width: 50px;
          text-align: right;
          text-decoration: line-through;
          text-decoration-thickness: 0.5px;
        }
        .case-card__metric-after {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--ink);
          min-width: 56px;
          letter-spacing: -0.01em;
        }
        .case-card__highlight {
          padding-top: 18px;
          border-top: 1px solid rgba(10,10,10,0.08);
        }
        .case-card__highlight p {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-style: italic;
          font-size: 0.86rem;
          line-height: 1.6;
          color: rgba(10,10,10,0.65);
          font-weight: 300;
        }

        @media (max-width: 760px) {
          .case-card { padding: 28px 22px 24px; }
        }
        @media (max-width: 480px) {
          .mockups-row { grid-template-columns: 1fr; gap: 22px; }
          .arrow-mid { transform: rotate(90deg); justify-self: center; }
          .case-card { padding: 24px 18px 22px; }
        }
      `}</style>
    </motion.article>
  );
}
