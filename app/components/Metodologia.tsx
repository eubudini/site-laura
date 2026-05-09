"use client";

import { motion } from "framer-motion";
import { Kicker } from "./_base";

type Act = {
  roman: string;
  label: string;
  title: string;
  promise: string;
  desc: string;
  deliverables: string[];
  step: { n: string; title: string; desc: string };
};

const acts: Act[] = [
  {
    roman: "I",
    label: "Posicionar",
    title: "Estratégia & Direção",
    promise: "Antes do frame, a leitura.",
    desc: "Toda captação começa muito antes da câmera. O ponto de partida é entender o que a marca representa, para quem fala e por que importa. É o momento em que o conteúdo deixa de ser entrega e passa a ser posicionamento.",
    deliverables: [
      "Diagnóstico de marca, leitura competitiva e benchmarks",
      "Pilares editoriais, tom de voz e mapa de mensagens",
      "Calendário estratégico por canal",
      "Reposicionamento de bio, capa e destaques",
    ],
    step: {
      n: "01",
      title: "Imersão",
      desc: "Compreender território, público e referências antes de qualquer decisão criativa.",
    },
  },
  {
    roman: "II",
    label: "Produzir",
    title: "Captação & Direção Criativa",
    promise: "Estética que sustenta a narrativa.",
    desc: "Produção autoral com padrão editorial. Cada peça nasce de uma decisão de direção: o que a imagem precisa dizer, em que ritmo, com qual textura. Captação no Brasil e no Uruguai.",
    deliverables: [
      "Direção criativa, moodboard e roteiros editoriais",
      "Captação fotográfica e em vídeo",
      "Edição com tratamento de cor e padronização",
      "Cobertura presencial de eventos e lançamentos",
    ],
    step: {
      n: "02",
      title: "Direção em movimento",
      desc: "Formatos, prioridades e referências definidos para que cada peça sirva a um propósito claro.",
    },
  },
  {
    roman: "III",
    label: "Crescer",
    title: "Distribuição & Performance",
    promise: "Presença com método, não com sorte.",
    desc: "O conteúdo certo, no canal certo, para o público certo. Distribuição editorial em múltiplas plataformas e mídia paga calibrada para acelerar com critério.",
    deliverables: [
      "Estratégia por canal (Instagram, TikTok, LinkedIn, YouTube)",
      "Adaptação de formatos (Reels, Shorts, carrosséis)",
      "Setup e gestão de Meta Ads e Google Ads",
      "Leitura mensal de performance e ajustes contínuos",
    ],
    step: {
      n: "03",
      title: "Refinamento",
      desc: "Monitoramento, ajuste e iteração para que a marca ganhe densidade ao longo do tempo.",
    },
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
      {/* Roman number gigante */}
      <div className="act__roman" aria-hidden>{act.roman}</div>

      <div className="act__inner">
        <div className="act__head">
          <span className="act__label">
            <span className="act__label-rule" aria-hidden />
            Ato {act.roman} · {act.label}
          </span>
          <h3 className="act__title">{act.title}</h3>
          <p className="act__promise">{act.promise}</p>
          <p className="act__desc">{act.desc}</p>
        </div>

        <div className="act__body">
          <div className="act__deliverables-wrap">
            <p className="act__small-label">Escopo</p>
            <ul className="act__list">
              {act.deliverables.map((d) => (
                <li key={d} className="act__item">
                  <span className="act__check"><Check /></span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="act__step">
            <p className="act__step-num">{act.step.n}</p>
            <p className="act__step-title">{act.step.title}</p>
            <p className="act__step-desc">{act.step.desc}</p>
          </div>
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "var(--space-5)" }}
          >
            <Kicker align="center">Método</Kicker>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="metod-h2"
          >
            Da estratégia à execução, <em>em três atos</em>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="metod-sub"
          >
            Não é cardápio de serviços. É um sistema integrado: posicionar,
            produzir, crescer.
          </motion.p>
        </div>

        <div className="acts">
          {acts.map((a, i) => (
            <ActBlock key={a.label} act={a} idx={i} />
          ))}
        </div>
      </div>

      <style>{`
        .metod-section {
          background: var(--obsidian-2);
          padding: clamp(80px, 11vw, 140px) 0 clamp(72px, 10vw, 120px);
          color: #FFFFFF;
        }

        .metod-header {
          text-align: center;
          margin: 0 auto clamp(64px, 8vw, 96px);
          max-width: 720px;
        }
        .metod-kicker {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .metod-kicker__rule {
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
        }
        .metod-h2 {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(2rem, 3.6vw, 3rem);
          font-weight: 400;
          color: #FFFFFF;
          line-height: 1.08;
          letter-spacing: -0.022em;
          margin-bottom: 22px;
        }
        .metod-h2 em {
          font-style: italic;
          color: var(--gold);
        }
        .metod-sub {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          font-weight: 300;
          max-width: 580px;
          margin: 0 auto;
        }

        .acts {
          display: flex;
          flex-direction: column;
          gap: clamp(72px, 10vw, 130px);
        }

        /* ACT */
        .act {
          position: relative;
          padding: 52px 0;
          border-top: 1px solid rgba(201,169,110,0.15);
        }
        .act:first-child { border-top: none; padding-top: 0; }

        .act__roman {
          position: absolute;
          top: 24px;
          left: -8px;
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(8rem, 16vw, 14rem);
          font-weight: 500;
          color: rgba(201,169,110,0.07);
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
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: start;
        }
        .act--flipped .act__inner {
          grid-template-columns: 1.2fr 1fr;
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
          color: var(--gold);
          margin-bottom: 18px;
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
          color: #FFFFFF;
          line-height: 1.1;
          letter-spacing: -0.018em;
          margin-bottom: 14px;
        }
        .act__promise {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-style: italic;
          font-size: clamp(1.12rem, 1.55vw, 1.32rem);
          color: var(--gold);
          line-height: 1.4;
          margin-bottom: 18px;
          letter-spacing: -0.005em;
        }
        .act__desc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1.02rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.78;
          font-weight: 300;
          max-width: 480px;
        }

        /* BODY */
        .act__body {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .act__small-label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 14px;
        }
        .act__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .act__item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.96rem;
          color: rgba(255,255,255,0.82);
          line-height: 1.55;
          font-weight: 400;
        }
        .act__check {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(201,169,110,0.12);
          color: var(--gold);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
          border: 1px solid rgba(201,169,110,0.3);
        }

        /* Step micro-card */
        .act__step {
          margin-top: 8px;
          padding: 22px 22px 20px;
          background: rgba(201,169,110,0.06);
          border: 1px solid rgba(201,169,110,0.18);
          border-left: 3px solid var(--gold);
        }
        .act__step-num {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          color: var(--gold);
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .act__step-title {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 1.12rem;
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .act__step-desc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          font-weight: 300;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .act__inner {
            grid-template-columns: 1fr !important;
            gap: 32px;
          }
          .act--flipped .act__head,
          .act--flipped .act__body {
            grid-column: 1;
            grid-row: auto;
          }
          .act__roman {
            font-size: 9rem;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0.5;
          }
          .act--flipped .act__roman {
            left: 50%;
            right: auto;
          }
          .act { padding: 56px 0; }
          .act:first-child { padding-top: 24px; }
        }
        @media (max-width: 480px) {
          .metod-section { padding: 64px 0 56px; }
          .act { padding: 40px 0; }
          .act__roman { font-size: 6rem; }
          .act__title { font-size: 1.5rem; }
          .act__promise { font-size: 1rem; }
          .act__desc { font-size: 0.88rem; }
          .act__item { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}
