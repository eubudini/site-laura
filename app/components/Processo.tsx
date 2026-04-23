"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Imersão na sua marca",
    desc: "Vamos juntos entender o que você representa, o que seu público espera e onde sua comunicação pode ser mais poderosa.",
  },
  {
    n: "02",
    title: "Estratégia com direção criativa",
    desc: "Caminhos criativos, formatos e prioridades definidos para que cada conteúdo sirva a um propósito claro.",
  },
  {
    n: "03",
    title: "Conteúdo que conecta e converte",
    desc: "Produção profissional com estética alinhada à sua identidade — feita para parar o scroll e criar desejo.",
  },
  {
    n: "04",
    title: "Evolução contínua",
    desc: "Monitoramento, refinamento e adaptação constante para que sua marca só cresça com o tempo.",
  },
];

export default function Processo() {
  return (
    <section
      id="processo"
      style={{
        background: "var(--obsidian-2)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            O Método
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 500,
              color: "#FFFFFF",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Da primeira conversa à presença consolidada
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.35)",
              maxWidth: 440,
              margin: "0 auto",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Um método estruturado, sem achismos — focado em transformar a percepção da sua marca em 4 etapas.
          </motion.p>
        </div>

        {/* Steps */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="processo-row"
              style={{
                display: "grid",
                gridTemplateColumns: "52px 1fr auto",
                alignItems: "start",
                gap: 32,
                padding: "28px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                position: "relative",
                cursor: "default",
                transition: "padding-left 0.3s ease",
              }}
              whileHover={{ paddingLeft: 16 }}
            >
              {/* Linha dourada animada à esquerda */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: "var(--gold)",
                  transformOrigin: "top",
                }}
              />

              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "rgba(201,169,110,0.4)",
                  paddingTop: 4,
                  transition: "color 0.3s ease",
                }}
              >
                {step.n}
              </p>
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.38)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {step.desc}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.9rem",
                  color: "transparent",
                  paddingTop: 2,
                  transition: "color 0.3s ease",
                }}
              >
                ↗
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #processo {
            padding: 80px 0 !important;
          }
          #processo > div {
            padding: 0 20px !important;
          }
          .processo-row {
            grid-template-columns: 40px 1fr !important;
            gap: 16px !important;
          }
          .processo-row > *:last-child {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          #processo {
            padding: 64px 0 !important;
          }
          #processo > div {
            padding: 0 16px !important;
          }
          .processo-row {
            padding: 20px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
