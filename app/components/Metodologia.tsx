"use client";

import { motion } from "framer-motion";

type Step = {
  num: string;
  label: string;
  title: string;
  promise: string;
  desc: string;
  deliverables: string[];
  detail: { n: string; title: string; desc: string };
};

const steps: Step[] = [
  {
    num: "01",
    label: "Diagnóstico",
    title: "Estratégia e direção",
    promise: "Antes de produzir, a gente entende.",
    desc: "Sua marca precisa saber o que dizer, para quem e por quê. Faço uma leitura completa do seu posicionamento, do seu público e do mercado em que você compete. É aqui que o conteúdo deixa de ser tarefa e vira posicionamento.",
    deliverables: [
      "Diagnóstico de marca, benchmarks e leitura competitiva",
      "Pilares editoriais, tom de voz e mapa de mensagens",
      "Calendário estratégico mensal por canal",
      "Reposicionamento de bio, capa e destaques",
    ],
    detail: {
      n: "01",
      title: "Imersão na sua marca",
      desc: "Sentamos juntas para entender o que você representa, o que seu público espera e onde sua comunicação pode ser mais forte.",
    },
  },
  {
    num: "02",
    label: "Produção",
    title: "Captação e direção criativa",
    promise: "Conteúdo que faz o scroll parar.",
    desc: "Produção autoral com identidade visual e padrão editorial. Cada foto, cada vídeo, cada legenda traduz a essência da marca. É o mesmo cuidado que aplico com Marina Ciconet, A.MAR José Ignácio e Brunnen.",
    deliverables: [
      "Direção criativa, moodboard e roteiros editoriais",
      "Captação fotográfica e em vídeo profissional",
      "Edição com tratamento de cor e padronização",
      "Cobertura presencial de eventos e lançamentos",
    ],
    detail: {
      n: "02",
      title: "Direção criativa em movimento",
      desc: "Caminhos visuais, formatos e prioridades definidos para que cada conteúdo sirva a um propósito claro.",
    },
  },
  {
    num: "03",
    label: "Crescimento",
    title: "Distribuição e performance",
    promise: "Crescimento com previsibilidade, não na sorte.",
    desc: "O conteúdo certo, no canal certo, para o público certo. Distribuição editorial em múltiplas plataformas e tráfego pago para acelerar com inteligência.",
    deliverables: [
      "Estratégia por canal (IG, TikTok, LinkedIn, YouTube)",
      "Adaptação de formatos (Reels, Shorts, Carrosséis)",
      "Setup e gestão de Meta Ads e Google Ads",
      "Análise mensal de performance e otimização contínua",
    ],
    detail: {
      n: "03",
      title: "Evolução contínua",
      desc: "Monitoramento, refinamento e ajuste constante para que sua marca cresça mês a mês.",
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

function StepBlock({ step, idx }: { step: Step; idx: number }) {
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
      {/* Numero gigante de fundo */}
      <div className="act__roman" aria-hidden>{step.num}</div>

      <div className="act__inner">
        <div className="act__head">
          <span className="act__label">
            <span className="act__label-rule" aria-hidden />
            {step.num} · {step.label}
          </span>
          <h3 className="act__title">{step.title}</h3>
          <p className="act__promise">{step.promise}</p>
          <p className="act__desc">{step.desc}</p>
        </div>

        <div className="act__body">
          <div className="act__deliverables-wrap">
            <p className="act__small-label">O que está incluído</p>
            <ul className="act__list">
              {step.deliverables.map((d) => (
                <li key={d} className="act__item">
                  <span className="act__check"><Check /></span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="act__step">
            <p className="act__step-num">{step.detail.n}</p>
            <p className="act__step-title">{step.detail.title}</p>
            <p className="act__step-desc">{step.detail.desc}</p>
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
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="metod-h2"
          >
            Como eu trabalho com sua marca, <em>do diagnóstico à entrega</em>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="metod-sub"
          >
            Não é cardápio de serviços. São três etapas integradas que fazem sua
            marca sair do achismo e virar referência: entender, produzir e crescer.
          </motion.p>
        </div>

        <div className="acts">
          {steps.map((s, i) => (
            <StepBlock key={s.label} step={s} idx={i} />
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
          font-size: clamp(7rem, 14vw, 12rem);
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
