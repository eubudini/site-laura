"use client";

import { motion } from "framer-motion";

type Service = {
  n: string;
  title: string;
  tagline: string;
  desc: string;
  deliverables: string[];
};

type Pillar = {
  label: string;
  name: string;
  intro: string;
  cols: 2 | 3;
  services: Service[];
};

const pillars: Pillar[] = [
  {
    label: "Pilar I",
    name: "Estratégia & Direção",
    intro: "A fundação. Antes de qualquer captação, a marca precisa saber o que dizer, para quem e por quê.",
    cols: 3,
    services: [
      {
        n: "01",
        title: "Estratégia de Conteúdo",
        tagline: "O blueprint do seu posicionamento digital.",
        desc: "Planejamento com intenção, alinhado ao posicionamento e à forma como a marca deseja ser percebida.",
        deliverables: [
          "Diagnóstico de marca e benchmarks",
          "Pilares editoriais e tom de voz",
          "Mapa de mensagens e proof points",
          "Calendário estratégico mensal",
        ],
      },
      {
        n: "02",
        title: "Posicionamento Digital",
        tagline: "Coerência narrativa em cada ponto de contato.",
        desc: "Construção de uma comunicação mais coerente, atrativa e profissional nos canais certos.",
        deliverables: [
          "Auditoria das redes atuais",
          "Reposicionamento de bio, capa e destaques",
          "Diretrizes de identidade visual digital",
          "Templates editoriais customizados",
        ],
      },
      {
        n: "03",
        title: "Planejamento Editorial",
        tagline: "Frequência, ritmo e narrativa que fidelizam.",
        desc: "Organização de temas, narrativas e formatos para trazer consistência, frequência e direção.",
        deliverables: [
          "Calendário mensal de publicações",
          "Linha editorial por canal",
          "Pautas e roteiros revisados",
          "Análise mensal de performance",
        ],
      },
    ],
  },
  {
    label: "Pilar II",
    name: "Produção",
    intro: "A captação. Conteúdo visual com identidade autoral e padrão editorial — feito para ser desejado.",
    cols: 2,
    services: [
      {
        n: "04",
        title: "Captação de Conteúdo",
        tagline: "Produção visual com identidade autoral.",
        desc: "Produção de materiais que traduzem a essência da marca com estética, autenticidade e potencial de conexão.",
        deliverables: [
          "Direção criativa e moodboard",
          "Captação fotográfica e em vídeo",
          "Edição com tratamento de cor",
          "Pacote completo em alta resolução",
        ],
      },
      {
        n: "05",
        title: "Cobertura de Eventos",
        tagline: "Lançamentos transformados em conteúdo de alto valor.",
        desc: "Registro estratégico de lançamentos e momentos importantes — transformando presença física em conteúdo de valor.",
        deliverables: [
          "Briefing prévio e roteiro de momentos-chave",
          "Cobertura presencial multi-formato",
          "Reels, stories e fotografias editoriais",
          "Pacote pronto para publicação imediata",
        ],
      },
    ],
  },
  {
    label: "Pilar III",
    name: "Distribuição & Crescimento",
    intro: "A entrega ao mercado. O conteúdo certo, no canal certo, para o público certo — com previsibilidade.",
    cols: 2,
    services: [
      {
        n: "06",
        title: "Presença Multicanal",
        tagline: "Adaptação inteligente para cada plataforma.",
        desc: "Adaptação da comunicação para diferentes plataformas, respeitando o contexto e o público de cada canal.",
        deliverables: [
          "Estratégia por canal (IG, TikTok, LinkedIn)",
          "Adaptação de formatos (Reels, Shorts, Carrosséis)",
          "Gestão de comunidade e engajamento",
          "Cross-posting otimizado",
        ],
      },
      {
        n: "07",
        title: "Tráfego Pago",
        tagline: "Crescimento acelerado com previsibilidade.",
        desc: "Criação e gestão de campanhas pagas para ampliar o alcance e atrair o público certo com mais eficiência.",
        deliverables: [
          "Setup completo Meta Ads e Google Ads",
          "Públicos personalizados e lookalikes",
          "Otimização contínua e relatórios mensais",
          "A/B test de criativos",
        ],
      },
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

function ServiceCard({ s, idx }: { s: Service; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="service-card"
    >
      <header className="service-card__head">
        <span className="service-card__num">{s.n}</span>
        <span className="service-card__line" aria-hidden />
      </header>

      <h3 className="service-card__title">{s.title}</h3>
      <p className="service-card__tagline">{s.tagline}</p>
      <p className="service-card__desc">{s.desc}</p>

      <ul className="service-card__list">
        {s.deliverables.map((d) => (
          <li key={d} className="service-card__item">
            <span className="service-card__check"><Check /></span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Servicos() {
  return (
    <section id="servicos" className="servicos-section">
      <div className="container-x">
        {/* Header */}
        <div className="servicos-header">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="servicos-kicker"
            >
              <span className="servicos-kicker__rule" aria-hidden />
              Serviços
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="servicos-h2"
            >
              Tudo o que a sua marca precisa para parar de{" "}
              <em>passar despercebida</em>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="servicos-sub"
          >
            Do planejamento à produção, cada entrega é pensada para gerar
            reconhecimento, conexão e crescimento real nos canais que importam
            para você. Trabalho em três pilares integrados.
          </motion.p>
        </div>

        {/* Pillars */}
        {pillars.map((p, pIdx) => (
          <div key={p.label} className="pillar" data-cols={p.cols}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="pillar__head"
            >
              <div className="pillar__label">
                <span className="pillar__rule" aria-hidden />
                {p.label}
              </div>
              <h3 className="pillar__name">{p.name}</h3>
              <p className="pillar__intro">{p.intro}</p>
            </motion.div>

            <div className="pillar__grid">
              {p.services.map((s, sIdx) => (
                <ServiceCard key={s.n} s={s} idx={sIdx + pIdx * 3} />
              ))}
            </div>
          </div>
        ))}

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="servicos-foot"
        >
          <span className="servicos-foot__rule" aria-hidden />
          <div className="servicos-foot__items">
            <span><strong>Base</strong> · Porto Alegre, RS</span>
            <span className="servicos-foot__sep" aria-hidden />
            <span><strong>Captação presencial</strong> · todo o Brasil + Uruguai</span>
            <span className="servicos-foot__sep" aria-hidden />
            <span><strong>Direção remota</strong> · qualquer lugar do mundo</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .servicos-section {
          background: var(--parchment);
          padding: clamp(72px, 11vw, 140px) 0 clamp(72px, 10vw, 120px);
          position: relative;
        }

        /* Header */
        .servicos-header {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          margin-bottom: clamp(72px, 9vw, 120px);
          align-items: end;
        }
        .servicos-kicker {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .servicos-kicker__rule {
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
        }
        .servicos-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.9rem, 3.4vw, 3rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.1;
          letter-spacing: -0.02em;
          max-width: 640px;
        }
        .servicos-h2 em {
          font-style: italic;
          color: var(--gold);
        }
        .servicos-sub {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.96rem;
          color: rgba(10,10,10,0.55);
          line-height: 1.85;
          font-weight: 300;
          max-width: 460px;
        }

        /* Pillar */
        .pillar { margin-bottom: clamp(64px, 8vw, 104px); }
        .pillar:last-of-type { margin-bottom: 0; }
        .pillar__head {
          max-width: 720px;
          margin-bottom: 48px;
        }
        .pillar__label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .pillar__rule {
          display: block;
          width: 24px;
          height: 1px;
          background: var(--gold);
        }
        .pillar__name {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 500;
          color: var(--ink);
          line-height: 1.18;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }
        .pillar__intro {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.92rem;
          color: rgba(10,10,10,0.5);
          line-height: 1.75;
          font-weight: 300;
          max-width: 560px;
        }

        /* Grid */
        .pillar__grid {
          display: grid;
          gap: 20px;
        }
        .pillar[data-cols="3"] .pillar__grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .pillar[data-cols="2"] .pillar__grid {
          grid-template-columns: repeat(2, 1fr);
        }

        /* Service Card */
        .service-card {
          background: #FFFFFF;
          border: 1px solid rgba(10,10,10,0.07);
          padding: 36px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          transition: border-color 0.4s ease, transform 0.5s ease, box-shadow 0.5s ease;
        }
        .service-card:hover {
          border-color: rgba(184,149,106,0.45);
          transform: translateY(-3px);
          box-shadow: 0 28px 60px -28px rgba(184,149,106,0.28);
        }
        .service-card__head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .service-card__num {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          color: var(--gold);
          font-weight: 500;
        }
        .service-card__line {
          flex: 1;
          height: 1px;
          background: rgba(10,10,10,0.08);
        }
        .service-card__title {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.1rem, 1.55vw, 1.35rem);
          font-weight: 500;
          color: var(--ink);
          line-height: 1.22;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .service-card__tagline {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 0.92rem;
          color: var(--gold);
          line-height: 1.4;
          margin-bottom: 18px;
          font-weight: 400;
        }
        .service-card__desc {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.85rem;
          color: rgba(10,10,10,0.62);
          line-height: 1.72;
          font-weight: 300;
          margin-bottom: 22px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(10,10,10,0.06);
        }
        .service-card__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .service-card__item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.83rem;
          color: rgba(10,10,10,0.78);
          line-height: 1.5;
          font-weight: 400;
        }
        .service-card__check {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--gold-light);
          color: var(--gold);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }

        /* Footer */
        .servicos-foot {
          margin-top: clamp(48px, 6vw, 80px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
        }
        .servicos-foot__rule {
          width: 56px;
          height: 1px;
          background: var(--gold);
        }
        .servicos-foot__items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 14px 18px;
          font-family: 'DM Mono', monospace;
          font-size: 0.66rem;
          letter-spacing: 0.1em;
          color: rgba(10,10,10,0.55);
          text-transform: uppercase;
          text-align: center;
        }
        .servicos-foot__items strong {
          color: var(--ink);
          font-weight: 600;
          letter-spacing: 0.14em;
        }
        .servicos-foot__sep {
          display: inline-block;
          width: 4px;
          height: 4px;
          background: var(--gold);
          border-radius: 50%;
          opacity: 0.6;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .pillar[data-cols="3"] .pillar__grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .servicos-header {
            grid-template-columns: 1fr;
            gap: 24px;
            align-items: start;
          }
          .servicos-sub { max-width: 560px; }
        }
        @media (max-width: 720px) {
          .pillar__grid,
          .pillar[data-cols="3"] .pillar__grid,
          .pillar[data-cols="2"] .pillar__grid {
            grid-template-columns: 1fr !important;
          }
          .pillar__head { margin-bottom: 32px; }
          .service-card { padding: 28px 24px 26px; }
          .servicos-foot__sep { display: none; }
          .servicos-foot__items { flex-direction: column; gap: 8px; }
        }
        @media (max-width: 480px) {
          .service-card { padding: 26px 22px 24px; }
          .service-card__title { font-size: 1.1rem; }
          .service-card__tagline { font-size: 0.88rem; }
        }
      `}</style>
    </section>
  );
}
