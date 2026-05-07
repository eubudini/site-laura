"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "Marina Ciconet",
    role: "Jornalismo · Conteúdo",
    handle: "@marinaciconet",
    initials: "MC",
    quote: "A Laura entendeu minha voz antes de eu entender.",
  },
  {
    name: "Mariana Penteado",
    role: "Moda · Lifestyle",
    handle: "@marianapenteado",
    initials: "MP",
    quote: "Cada post passou a comunicar marca, não conteúdo solto.",
  },
  {
    name: "Brunnen",
    role: "Moda feminina",
    handle: "@brunnenmodafeminina",
    initials: "BR",
    quote: "Estética e estratégia juntas. Virou ativo da marca.",
  },
  {
    name: "A.MAR José Ignacio",
    role: "Maison · Luxo",
    handle: "@a.mar.joseignacio",
    initials: "AM",
    quote: "Cobertura presencial elevou nosso patamar premium.",
  },
];

export default function Clientes() {
  return (
    <section id="clientes" className="clientes-section">
      <div className="container-x">
        {/* Header */}
        <div className="clientes-header">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="clientes-kicker"
            >
              <span className="clientes-kicker__rule" aria-hidden />
              Quem confia
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="clientes-h2"
            >
              Marcas que apostaram em <em>direção autoral</em>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="clientes-sub"
          >
            Profissionais e maisons que escolheram estratégia consistente — e
            transformaram presença em posicionamento.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="clientes-grid">
          {clients.map((c, i) => (
            <motion.article
              key={c.handle}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="client-card"
            >
              {/* Quote (protagonista) */}
              <blockquote className="client-card__quote">
                <span className="client-card__quote-mark" aria-hidden>“</span>
                {c.quote}
              </blockquote>

              {/* Identidade */}
              <footer className="client-card__id">
                <div className="client-card__avatar">{c.initials}</div>
                <div className="client-card__meta">
                  <p className="client-card__name">{c.name}</p>
                  <p className="client-card__role">{c.role}</p>
                </div>
                <span className="client-card__handle">{c.handle}</span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .clientes-section {
          background: var(--parchment-dark);
          padding: clamp(72px, 10vw, 120px) 0 clamp(64px, 8vw, 100px);
        }

        /* Header */
        .clientes-header {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 64px;
          margin-bottom: clamp(48px, 6vw, 72px);
          align-items: end;
        }
        .clientes-kicker {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .clientes-kicker__rule {
          display: block;
          width: 28px;
          height: 1px;
          background: var(--gold);
        }
        .clientes-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.12;
          letter-spacing: -0.02em;
          max-width: 600px;
        }
        .clientes-h2 em {
          font-style: italic;
          color: var(--gold);
        }
        .clientes-sub {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.94rem;
          color: rgba(10,10,10,0.55);
          line-height: 1.75;
          font-weight: 300;
          max-width: 420px;
        }

        /* Grid */
        .clientes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        /* Card */
        .client-card {
          background: #FFFFFF;
          border: 1px solid rgba(10,10,10,0.06);
          padding: 32px 26px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 28px;
          min-height: 240px;
          transition: border-color 0.4s ease, transform 0.5s ease, box-shadow 0.5s ease;
        }
        .client-card:hover {
          border-color: rgba(184,149,106,0.4);
          transform: translateY(-2px);
          box-shadow: 0 24px 52px -28px rgba(184,149,106,0.25);
        }

        /* Quote */
        .client-card__quote {
          margin: 0;
          padding: 0;
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 0.98rem;
          line-height: 1.5;
          color: var(--ink);
          font-weight: 400;
          letter-spacing: -0.005em;
          position: relative;
          padding-left: 0;
        }
        .client-card__quote-mark {
          font-family: 'Fraunces', serif;
          font-size: 1.8rem;
          color: var(--gold);
          line-height: 1;
          margin-right: 4px;
          font-style: normal;
          vertical-align: -8px;
          opacity: 0.6;
        }

        /* Identidade */
        .client-card__id {
          display: grid;
          grid-template-columns: auto 1fr;
          column-gap: 12px;
          row-gap: 8px;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(10,10,10,0.07);
        }
        .client-card__avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(201,169,110,0.10);
          border: 1px solid rgba(201,169,110,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.04em;
          color: var(--gold);
          font-weight: 500;
        }
        .client-card__meta {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .client-card__name {
          font-family: 'Fraunces', serif;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.2;
          letter-spacing: -0.005em;
        }
        .client-card__role {
          font-family: 'DM Mono', monospace;
          font-size: 0.52rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.42);
        }
        .client-card__handle {
          grid-column: 1 / -1;
          font-family: 'DM Mono', monospace;
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          color: rgba(10,10,10,0.32);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .clientes-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .clientes-header {
            grid-template-columns: 1fr;
            gap: 18px;
            align-items: start;
          }
          .clientes-sub { max-width: 560px; }
        }
        @media (max-width: 560px) {
          .clientes-grid { grid-template-columns: 1fr; gap: 14px; }
          .client-card {
            padding: 26px 22px 22px;
            min-height: 0;
            gap: 22px;
          }
          .client-card__quote { font-size: 0.96rem; }
        }
      `}</style>
    </section>
  );
}
