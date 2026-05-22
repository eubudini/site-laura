"use client";

import { motion } from "framer-motion";

type Act = {
  roman: string;
  marker: string;
  title: string;
  phrase: string;
  deliverables: string[];
};

const acts: Act[] = [
  {
    roman: "I",
    marker: "01 · Posicionar",
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
    roman: "II",
    marker: "02 · Produzir",
    title: "Dar imagem a ela",
    phrase:
      "Depois dou forma a isso: fotografo, dirijo e edito conteúdo autoral, feito pra sua marca — nunca tirado de um modelo.",
    deliverables: [
      "Direção criativa",
      "Foto & vídeo",
      "Edição",
      "Captação presencial",
    ],
  },
  {
    roman: "III",
    marker: "03 · Crescer",
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

function Check() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ActBlock({ act, idx }: { act: Act; idx: number }) {
  const flipped = idx % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`act ${flipped ? "act--flipped" : ""}`}
      data-idx={idx}
    >
      <div className="act__roman" aria-hidden>{act.roman}</div>

      <div className="act__inner">
        <div className="act__head">
          <span className="act__label">
            <span className="act__label-rule" aria-hidden />
            {act.marker}
          </span>
          <h3 className="act__title">{act.title}</h3>
          <p className="act__phrase">{act.phrase}</p>
        </div>

        <div className="act__body">
          <p className="act__small-label">Entregas</p>
          <ul className="act__list">
            {act.deliverables.map((d) => (
              <li key={d} className="act__item">
                <span className="act__check"><Check /></span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default function Metodologia() {
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
            trabalho é fechar essa distância — em três etapas.
          </motion.p>
        </div>

        <div className="acts">
          {acts.map((a, i) => (
            <ActBlock key={a.marker} act={a} idx={i} />
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
          gap: clamp(36px, 5vw, 56px);
        }

        /* ETAPA */
        .act {
          position: relative;
          padding: 36px 0;
          border-top: 1px solid rgba(10,10,10,0.10);
        }
        .act:first-child { border-top: none; padding-top: 0; }

        .act__roman {
          position: absolute;
          top: 16px;
          left: -8px;
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(7rem, 14vw, 12rem);
          font-weight: 500;
          color: rgba(184,149,106,0.16);
          line-height: 0.85;
          letter-spacing: -0.05em;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        .act--flipped .act__roman {
          left: auto;
          right: -8px;
        }

        .act__inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .act--flipped .act__inner {
          grid-template-columns: 1fr 1.1fr;
        }
        .act--flipped .act__head {
          grid-column: 2;
          grid-row: 1;
        }
        .act--flipped .act__body {
          grid-column: 1;
          grid-row: 1;
        }

        /* HEAD */
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
          margin-bottom: 12px;
        }
        .act__phrase {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1.02rem;
          color: rgba(10,10,10,0.62);
          line-height: 1.6;
          font-weight: 300;
          max-width: 440px;
        }

        /* BODY — entregas */
        .act__body {
          display: flex;
          flex-direction: column;
        }
        .act__small-label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.45);
          margin-bottom: 14px;
        }
        .act__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .act__item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1rem;
          color: rgba(10,10,10,0.82);
          line-height: 1.4;
          font-weight: 400;
        }
        .act__check {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(201,169,110,0.12);
          color: var(--gold);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(201,169,110,0.3);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .act__inner {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
          .act--flipped .act__head,
          .act--flipped .act__body {
            grid-column: 1;
            grid-row: auto;
          }
          .act__roman {
            font-size: 7rem;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }
          .act--flipped .act__roman {
            left: 50%;
            right: auto;
          }
          .act { padding: 32px 0; }
          .act:first-child { padding-top: 8px; }
          .act__phrase { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .metod-section { padding: 48px 0; }
          .act { padding: 26px 0; }
          .act__roman { font-size: 5.5rem; }
          .act__title { font-size: 1.5rem; }
          .act__phrase { font-size: 0.95rem; }
          .act__item { font-size: 0.92rem; }
        }
      `}</style>
    </section>
  );
}
