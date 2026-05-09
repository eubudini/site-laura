"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../_base";
import { Stats } from "./Stats";
import { CaseCard } from "./CaseCard";
import { QuoteWall } from "./QuoteWall";
import { BrandWall } from "./BrandWall";
import { cases } from "./data";

export default function Prova() {
  return (
    <section id="resultados" className="prova-section">
      {/* STATS BAND */}
      <Stats />

      {/* HEADER + CASES */}
      <div className="prova-cases-wrap">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              kicker="Prova"
              kickerDual
              align="center"
              title={
                <>
                  Não são números genéricos. <em>São transformações reais.</em>
                </>
              }
              sub="Marcas que confiaram em estratégia, direção criativa e produção contínua, e colheram crescimento expressivo."
              maxWidth={700}
            />
          </motion.div>

          <div className="prova-cases-grid">
            {cases.map((c, idx) => (
              <CaseCard key={c.handle} c={c} idx={idx} />
            ))}
          </div>

          <QuoteWall />

          <BrandWall />

          <p className="prova-disclaimer">
            * Dados acumulados ao longo do período de acompanhamento estratégico. Mockups
            ilustrativos baseados em dados reais.
          </p>
        </div>
      </div>

      <style>{`
        .prova-section { background: var(--parchment); padding: 0; }
        .prova-cases-wrap { padding: clamp(80px, 10vw, 120px) 0 clamp(72px, 9vw, 100px); }
        .prova-cases-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .prova-disclaimer {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.08em;
          color: rgba(10,10,10,0.5);
          text-align: center;
          margin-top: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }
        @media (max-width: 760px) {
          .prova-cases-grid { grid-template-columns: 1fr; gap: 20px; }
          .prova-cases-wrap { padding: 64px 0 56px; }
        }
      `}</style>
    </section>
  );
}
