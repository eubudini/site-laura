"use client";

import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Estratégia de Conteúdo",
    desc: "Planejamento com intenção, alinhado ao posicionamento e à forma como a marca deseja ser percebida.",
  },
  {
    n: "02",
    title: "Captação de Conteúdo",
    desc: "Produção de materiais que traduzem a essência da marca com estética, autenticidade e potencial de conexão.",
  },
  {
    n: "03",
    title: "Cobertura de Eventos",
    desc: "Registro estratégico de lançamentos e momentos importantes — transformando presença física em conteúdo de valor.",
  },
  {
    n: "04",
    title: "Posicionamento Digital",
    desc: "Construção de uma comunicação mais coerente, atrativa e profissional nos canais certos.",
  },
  {
    n: "05",
    title: "Planejamento Editorial",
    desc: "Organização de temas, narrativas e formatos para trazer consistência, frequência e direção.",
  },
  {
    n: "06",
    title: "Presença Multicanal",
    desc: "Adaptação da comunicação para diferentes plataformas, respeitando o contexto e o público de cada canal.",
  },
  {
    n: "07",
    title: "Tráfego Pago",
    desc: "Criação e gestão de campanhas pagas para ampliar o alcance e atrair o público certo com mais eficiência.",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      style={{
        background: "var(--parchment)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            marginBottom: 80,
            alignItems: "end",
          }}
          className="servicos-header"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
              Serviços
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.2,
              }}
            >
              Tudo o que a sua marca precisa para parar de passar despercebida.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(10,10,10,0.5)",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            Do planejamento à produção, cada entrega é pensada para gerar
            reconhecimento, conexão e crescimento real nos canais que importam
            para você.
          </motion.p>
        </div>

        {/* Lista de serviços */}
        <div style={{ borderTop: "1px solid rgba(10,10,10,0.08)" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr 1fr",
                gap: 40,
                padding: "32px 0",
                borderBottom: "1px solid rgba(10,10,10,0.08)",
                alignItems: "start",
                cursor: "default",
                transition: "padding-left 0.3s ease",
              }}
              whileHover={{ paddingLeft: 12 }}
              className="service-row"
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "rgba(201,169,110,0.5)",
                  paddingTop: 4,
                }}
              >
                {s.n}
              </p>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  fontWeight: 500,
                  color: "var(--ink)",
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(10,10,10,0.5)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Nota */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            gap: 32,
            marginTop: 48,
            paddingTop: 24,
          }}
          className="servicos-nota"
        >
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.08em", color: "rgba(10,10,10,0.4)" }}>
            📍 Gravações presenciais em Porto Alegre e região
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.08em", color: "rgba(10,10,10,0.4)" }}>
            🌐 Atendimento remoto para todo o Brasil
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .servicos-header {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .service-row {
            grid-template-columns: 40px 1fr !important;
            gap: 16px !important;
          }
          .service-row > *:last-child {
            grid-column: 2 !important;
            grid-row: 2 !important;
          }
          .servicos-nota {
            flex-direction: column !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 768px) {
          #servicos {
            padding: 80px 0 !important;
          }
          #servicos > div {
            padding: 0 20px !important;
          }
          .servicos-header {
            margin-bottom: 48px !important;
          }
          .service-row {
            padding: 24px 0 !important;
          }
        }
        @media (max-width: 480px) {
          #servicos {
            padding: 64px 0 !important;
          }
          #servicos > div {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
