"use client";

import { TiltCard } from "./TiltCard";
import { Kicker, CTA } from "./_base";

const plans = [
  {
    name: "Essencial",
    tag: "Captação & Edição",
    desc: "Produção autoral pronta para usar. Para marcas que precisam de imagem editorial sem gestão integral de perfil.",
    items: [
      "Captação fotográfica e em vídeo",
      "Edição com tratamento de cor e padronização",
      "Material adaptado às redes",
      "Entrega organizada em Drive",
      "Uso livre do material",
    ],
    featured: false,
  },
  {
    name: "Premium",
    tag: "Direção Integral",
    desc: "Estratégia, direção, produção e gestão sob uma única assinatura criativa. Para marcas que querem presença consolidada e identidade consistente.",
    items: [
      "Gestão completa das redes",
      "Estratégia e linha editorial",
      "Captação e edição autoral",
      "Curadoria de feed e narrativa visual",
      "Planejamento mensal por canal",
      "Acompanhamento criativo contínuo",
    ],
    featured: true,
    badge: "Recomendado",
  },
];

export default function Planos() {
  return (
    <section id="planos" className="section-pad-y-lg planos-section">
      <div className="container-x container-x--narrow">
        {/* Header */}
        <div className="planos-header">
          <Kicker align="center" dual>
            Investimento
          </Kicker>
          <h2 className="planos-h2">
            Para marcas que tratam conteúdo como{" "}
            <em>ativo de posicionamento</em>.
          </h2>
          <p className="planos-sub">
            Dois caminhos. O primeiro, produção autoral pontual. O segundo,
            direção integral de presença.
          </p>
        </div>

        {/* Cards com TiltCard */}
        <div className="plans-grid">
          {plans.map((plan) => (
            <TiltCard
              key={plan.name}
              tiltLimit={10}
              scale={1.03}
              perspective={1000}
              effect="gravitate"
              spotlight={true}
              style={{
                background: plan.featured ? "#FFFFFF" : "#141414",
                border: plan.featured ? "2px solid var(--gold)" : "1px solid rgba(255,255,255,0.07)",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                cursor: "default",
              }}
            >
              {plan.badge && <span className={`plan-badge ${plan.featured ? "plan-badge--featured" : ""}`}>{plan.badge}</span>}

              <p className={`plan-tag ${plan.featured ? "plan-tag--featured" : ""}`}>{plan.tag}</p>

              <h3 className={`plan-name ${plan.featured ? "plan-name--featured" : ""}`}>{plan.name}</h3>

              <div className={`plan-rule ${plan.featured ? "plan-rule--featured" : ""}`} />

              <p className={`plan-desc ${plan.featured ? "plan-desc--featured" : ""}`}>{plan.desc}</p>

              <ul className={`plan-list ${plan.featured ? "plan-list--featured" : ""}`}>
                {plan.items.map((item) => (
                  <li key={item}>
                    <span className="plan-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <CTA
                href="#contato"
                variant={plan.featured ? "primary" : "ghost"}
                size="md"
                fullWidth
                style={{ position: "relative", zIndex: 20 }}
              >
                {plan.featured ? "Iniciar projeto" : "Conversar sobre o escopo"}
              </CTA>
            </TiltCard>
          ))}
        </div>

        <p className="planos-note">
          Cada marca pede uma leitura própria. Os escopos se ajustam ao momento do projeto.
        </p>

        <div style={{ textAlign: "center" }}>
          <CTA
            href="https://wa.me/5551985309613"
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
          >
            Falar com Laura
          </CTA>
        </div>
      </div>

      <style>{`
        .planos-section { background: var(--obsidian); }

        .planos-header {
          text-align: center;
          margin-bottom: 72px;
        }
        .planos-header > * + * { margin-top: var(--space-5); }
        .planos-h2 {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 400;
          color: #FFFFFF;
          line-height: 1.12;
          letter-spacing: -0.02em;
        }
        .planos-h2 em {
          font-style: italic;
          color: var(--gold);
          font-weight: 400;
        }
        .planos-sub {
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 0.94rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          font-weight: 300;
          max-width: 540px;
          margin-inline: auto;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 48px;
        }

        .plan-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.05);
          padding: 5px 13px;
        }
        .plan-badge--featured {
          color: var(--gold);
          background: rgba(201,169,110,0.12);
        }

        .plan-tag {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.6);
          margin-bottom: 14px;
        }
        .plan-tag--featured { color: var(--gold); }

        .plan-name {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 2rem;
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: 16px;
        }
        .plan-name--featured { color: var(--ink); }

        .plan-rule {
          width: 32px;
          height: 1px;
          background: rgba(201,169,110,0.3);
          margin-bottom: 20px;
        }
        .plan-rule--featured { background: var(--gold); }

        .plan-desc {
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.78;
          margin-bottom: 32px;
          font-weight: 300;
        }
        .plan-desc--featured { color: rgba(10,10,10,0.65); }

        .plan-list {
          margin-bottom: 36px;
          flex-grow: 1;
          list-style: none;
          padding: 0;
        }
        .plan-list li {
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 0.96rem;
          color: rgba(255,255,255,0.78);
          padding: 11px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 400;
        }
        .plan-list--featured li {
          color: rgba(10,10,10,0.75);
          border-bottom-color: rgba(10,10,10,0.07);
        }
        .plan-check {
          color: var(--gold);
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .planos-note {
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 0.96rem;
          color: rgba(255,255,255,0.45);
          text-align: center;
          margin-bottom: 32px;
          font-weight: 300;
        }

        @media (max-width: 720px) {
          .plans-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          #planos { padding: 80px 0 !important; }
          .plans-grid > div { padding: 32px 24px !important; }
        }
        @media (max-width: 480px) {
          #planos { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  );
}
