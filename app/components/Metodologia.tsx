"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Act = {
  marker: string;
  num: string;
  title: string;
  phrase: string;
  deliverables: string[];
};

const acts: Act[] = [
  {
    marker: "01 · Posicionar",
    num: "01",
    title: "Encontrar a sua voz",
    phrase:
      "Começo encontrando o que só a sua marca pode dizer: o posicionamento e o tom que vão te diferenciar de verdade.",
    deliverables: [
      "Diagnóstico da marca",
      "Tom de voz",
      "Pilares de conteúdo",
      "Calendário",
    ],
  },
  {
    marker: "02 · Produzir",
    num: "02",
    title: "Dar imagem a ela",
    phrase:
      "Depois dou forma a isso: fotografo, dirijo e edito conteúdo autoral, feito pra sua marca, nunca tirado de um modelo.",
    deliverables: [
      "Direção criativa",
      "Foto & vídeo",
      "Edição",
      "Captação presencial",
    ],
  },
  {
    marker: "03 · Crescer",
    num: "03",
    title: "Levar mais longe",
    phrase:
      "Por fim, coloco esse conteúdo pra trabalhar: nos canais certos, acompanhado de perto, crescendo com consistência.",
    deliverables: [
      "Estratégia por canal",
      "Reels & Shorts",
      "Tráfego pago",
      "Relatório mensal",
    ],
  },
];

function Chevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ActBlock({
  act,
  idx,
  open,
  onToggle,
}: {
  act: Act;
  idx: number;
  open: boolean;
  onToggle: () => void;
}) {
  const flipped = idx % 2 === 1;
  const panelId = `act-panel-${idx}`;
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`act ${flipped ? "act--flipped" : ""}`}
      data-idx={idx}
      data-open={open ? "true" : "false"}
    >
      <span className="act__num" aria-hidden>{act.num}</span>

      <button
        type="button"
        className="act__head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="act__head-text">
          <span className="act__label">
            <span className="act__label-rule" aria-hidden />
            {act.marker}
          </span>
          <h3 className="act__title">{act.title}</h3>
        </span>
        <span className="act__chev" aria-hidden><Chevron /></span>
      </button>

      <div className="act__panel" id={panelId}>
        <div className="act__panel-inner">
          <p className="act__phrase">{act.phrase}</p>
          <div className="act__body">
            <p className="act__small-label">Entregas</p>
            <ul className="act__chips">
              {act.deliverables.map((d) => (
                <li key={d} className="act__chip">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Metodologia() {
  // Accordion (mobile): etapa 0 aberta por padrão. No desktop o CSS força tudo aberto.
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="servicos" className="metod-section">
      <div className="container-x">
        <div className="metod-header">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="metod-h2"
          >
            Da sua marca ao <em>crescimento</em>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="metod-sub"
          >
            A sua marca provavelmente é maior do que parece nas redes. Meu
            trabalho é fechar essa distância em três etapas.
          </motion.p>
        </div>

        <div className="acts">
          {acts.map((a, i) => (
            <ActBlock
              key={a.marker}
              act={a}
              idx={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx((prev) => (prev === i ? -1 : i))}
            />
          ))}
        </div>
      </div>

      <style>{`
        .metod-section {
          background: var(--parchment);
          padding: clamp(56px, 8vw, 88px) 0;
          color: var(--ink);
        }

        .metod-header {
          text-align: center;
          margin: 0 auto clamp(40px, 5vw, 60px);
          max-width: 720px;
        }
        .metod-h2 {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(2rem, 3.6vw, 3rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.08;
          letter-spacing: -0.022em;
          margin-bottom: 16px;
        }
        .metod-h2 em {
          font-style: italic;
          color: var(--gold);
        }
        .metod-sub {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1.02rem;
          color: rgba(10,10,10,0.6);
          line-height: 1.65;
          font-weight: 300;
          max-width: 540px;
          margin: 0 auto;
        }

        .acts {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 2vw, 56px);
        }

        /* ETAPA */
        .act {
          position: relative;
          padding: 36px 0;
          border-top: 1px solid rgba(10,10,10,0.10);
        }
        .act:first-child { border-top: none; }

        /* Número grande translúcido — acento editorial */
        .act__num {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(5rem, 11vw, 9rem);
          line-height: 1;
          color: rgba(201,169,110,0.08);
          pointer-events: none;
          z-index: 0;
          user-select: none;
        }
        .act--flipped .act__num { right: auto; left: 0; }

        /* HEAD (botão) */
        .act__head {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          text-align: left;
          font: inherit;
          color: inherit;
          cursor: pointer;
        }
        .act__head-text { display: block; }
        .act__label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold-text);
          margin-bottom: 12px;
        }
        .act__label-rule {
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--gold);
        }
        .act__title {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.12;
          letter-spacing: -0.018em;
          margin: 0;
        }
        .act__chev {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(201,169,110,0.3);
          background: rgba(201,169,110,0.08);
          color: var(--gold);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--duration-base) ease,
            background var(--duration-base) ease;
        }
        .act[data-open="true"] .act__chev {
          transform: rotate(180deg);
          background: rgba(201,169,110,0.18);
        }

        /* PANEL — área colapsável (mobile) / participa do grid (desktop) */
        .act__panel-inner { display: block; }
        .act__phrase {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1.02rem;
          color: rgba(10,10,10,0.62);
          line-height: 1.6;
          font-weight: 300;
          margin: 14px 0 0;
        }

        /* BODY — entregas como chips */
        .act__small-label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.45);
          margin: 18px 0 12px;
        }
        .act__chips {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .act__chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--ink-80, rgba(10,10,10,0.8));
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(201,169,110,0.10);
          border: 1px solid rgba(201,169,110,0.28);
          line-height: 1;
          transition: background var(--duration-fast) ease,
            border-color var(--duration-fast) ease;
        }
        .act__chip::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .act__chip:hover {
          background: rgba(201,169,110,0.18);
          border-color: rgba(201,169,110,0.5);
        }

        /* ─────────── MOBILE: accordion ─────────── */
        @media (max-width: 900px) {
          .act { padding: 0; border-top: 1px solid rgba(10,10,10,0.10); }
          .act__head { padding: 22px 0; }
          .act__panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows var(--duration-base) ease;
          }
          .act[data-open="true"] .act__panel { grid-template-rows: 1fr; }
          .act__panel-inner {
            overflow: hidden;
            min-height: 0;
          }
          .act[data-open="true"] .act__panel-inner { padding-bottom: 26px; }
          .act__phrase { margin-top: 0; max-width: 100%; }
          .act__title { font-size: 1.5rem; }
        }

        /* ─────────── DESKTOP: 2 colunas, tudo aberto ─────────── */
        @media (min-width: 901px) {
          .act { padding: 36px 0; }
          .act__chev { display: none; }
          .act__head { cursor: default; }

          /* o grid de 2 colunas vive na própria etapa */
          .act {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 48px;
            align-items: center;
          }
          .act--flipped { grid-template-columns: 1fr 1.1fr; }

          /* panel e inner desaparecem do layout: filhos sobem pro grid */
          .act__panel, .act__panel-inner { display: contents; }

          .act__num {
            top: 0;
            transform: none;
            font-size: clamp(6rem, 8vw, 9rem);
          }

          .act__head { grid-column: 1; grid-row: 1; align-self: end; }
          .act__phrase {
            grid-column: 1;
            grid-row: 2;
            max-width: 440px;
            align-self: start;
          }
          .act__body {
            grid-column: 2;
            grid-row: 1 / span 2;
            align-self: center;
          }

          .act--flipped .act__head { grid-column: 2; }
          .act--flipped .act__phrase { grid-column: 2; }
          .act--flipped .act__body { grid-column: 1; grid-row: 1 / span 2; }
        }

        @media (prefers-reduced-motion: reduce) {
          .act__panel { transition: none; }
          .act__chev { transition: none; }
        }
      `}</style>
    </section>
  );
}
