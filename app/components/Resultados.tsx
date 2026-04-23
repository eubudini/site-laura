"use client";

import { motion } from "framer-motion";

const cases = [
  {
    name: "Marina Ciconet",
    handle: "@marinaciconet",
    tag: "Jornalismo · Conteúdo",
    beforeImage: "/resultados/marina-antes.jpg",
    afterImage: "/resultados/marina-depois.jpg",
    metrics: [
      { label: "Seguidores", before: "11K", after: "59.1K", growth: "+437%" },
      { label: "Engajamento", before: "0.8%", after: "4.2%", growth: "+425%" },
      { label: "Alcance/mês", before: "6K", after: "48K", growth: "+700%" },
    ],
  },
  {
    name: "Mariana Penteado",
    handle: "@marianapenteado",
    tag: "Moda · Lifestyle",
    beforeImage: "/resultados/mariana-antes.jpg",
    afterImage: "/resultados/mariana-depois.jpg",
    metrics: [
      { label: "Seguidores", before: "42K", after: "198K", growth: "+371%" },
      { label: "Engajamento", before: "1.1%", after: "3.8%", growth: "+245%" },
      { label: "Alcance/mês", before: "22K", after: "180K", growth: "+718%" },
    ],
  },
  {
    name: "A.MAR José Ignacio",
    handle: "@a.mar.joseignacio",
    tag: "Moda · Luxo",
    beforeImage: "/resultados/amar-antes.jpg",
    afterImage: "/resultados/amar-depois.jpg",
    metrics: [
      { label: "Seguidores", before: "8K", after: "43.7K", growth: "+446%" },
      { label: "Engajamento", before: "0.6%", after: "5.1%", growth: "+750%" },
      { label: "Alcance/mês", before: "4K", after: "62K", growth: "+1450%" },
    ],
  },
];

function ResultadoCard({ c, idx }: { c: typeof cases[0]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: idx * 0.1 }}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(10,10,10,0.07)",
        overflow: "hidden",
      }}
    >
      {/* Prints antes/depois */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Antes */}
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "9/16",
            background: "rgba(10,10,10,0.04)",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.beforeImage}
              alt={`${c.name} antes`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            {/* Placeholder enquanto sem imagem */}
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(10,10,10,0.03)",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.15)" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </div>
          <div style={{
            position: "absolute",
            top: 8,
            left: 8,
            background: "rgba(10,10,10,0.75)",
            backdropFilter: "blur(4px)",
            padding: "3px 10px",
          }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}>Antes</span>
          </div>
        </div>

        {/* Depois */}
        <div style={{ position: "relative", borderLeft: "2px solid var(--gold)" }}>
          <div style={{
            aspectRatio: "9/16",
            background: "rgba(10,10,10,0.04)",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.afterImage}
              alt={`${c.name} depois`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(10,10,10,0.03)",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.15)" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </div>
          <div style={{
            position: "absolute",
            top: 8,
            left: 8,
            background: "rgba(201,169,110,0.9)",
            backdropFilter: "blur(4px)",
            padding: "3px 10px",
          }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0A0A0A",
            }}>Depois</span>
          </div>
        </div>
      </div>

      {/* Dados */}
      <div style={{ padding: "24px 24px 20px" }}>
        <div style={{ marginBottom: 20 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "var(--ink)",
            marginBottom: 2,
          }}>
            {c.name}
          </p>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            color: "var(--ink-50)",
          }}>
            {c.handle}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {c.metrics.map((m) => (
            <div key={m.label}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.52rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink-50)",
                }}>
                  {m.label}
                </span>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.56rem",
                  color: "#2D7A3A",
                  fontWeight: 500,
                }}>
                  {m.growth}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9rem",
                  color: "rgba(10,10,10,0.28)",
                  fontWeight: 500,
                  minWidth: 40,
                  textAlign: "right",
                }}>
                  {m.before}
                </span>
                <div style={{ flex: 1, height: 2, background: "rgba(10,10,10,0.06)", position: "relative", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      background: "linear-gradient(90deg, rgba(201,169,110,0.3), var(--gold))",
                    }}
                  />
                </div>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  color: "var(--ink)",
                  fontWeight: 600,
                  minWidth: 40,
                }}>
                  {m.after}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid rgba(10,10,10,0.06)" }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.52rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}>
            {c.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Resultados() {
  return (
    <section
      id="resultados"
      style={{
        background: "var(--parchment)",
        padding: "100px 0 80px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            Resultados
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            Números reais.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Transformações reais.
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.88rem",
              color: "var(--ink-50)",
              maxWidth: 440,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Marcas que apostaram em estratégia e colheram resultados concretos.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="results-grid">
          {cases.map((c, idx) => (
            <ResultadoCard key={c.handle} c={c} idx={idx} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.58rem",
            color: "var(--ink-20)",
            textAlign: "center",
            marginTop: 36,
          }}
        >
          * Números baseados nos resultados acumulados durante o período de acompanhamento.
        </motion.p>
      </div>

      <style>{`
        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .results-grid { grid-template-columns: 1fr !important; }
          #resultados { padding: 72px 0 60px !important; }
          #resultados > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
