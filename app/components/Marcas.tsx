"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "A.MAR", style: "italic" as const },
  { name: "H.STERN", style: "normal" as const },
  { name: "Brunnen", style: "italic" as const },
  { name: "RESI", style: "normal" as const },
  { name: "Mariana Penteado", style: "italic" as const },
  { name: "Marina Ciconet", style: "normal" as const },
  { name: "Casa das Gurias", style: "italic" as const },
];

export default function Marcas() {
  return (
    <section
      style={{
        background: "var(--parchment)",
        padding: "60px 0 50px",
        borderTop: "1px solid rgba(10,10,10,0.06)",
        borderBottom: "1px solid rgba(10,10,10,0.06)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(10,10,10,0.4)",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Marcas que confiam no meu olhar
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="brands-row"
        >
          {brands.map((b, i) => (
            <span key={b.name} style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <span
                className="brand-name"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: b.style,
                  fontSize: "clamp(1.15rem, 1.8vw, 1.55rem)",
                  fontWeight: 400,
                  color: "rgba(10,10,10,0.55)",
                  letterSpacing: b.name === "H.STERN" || b.name === "RESI" ? "0.08em" : "-0.01em",
                  textTransform: b.name === "H.STERN" || b.name === "RESI" ? "uppercase" : "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.3s ease",
                }}
              >
                {b.name}
              </span>
              {i < brands.length - 1 && (
                <span
                  aria-hidden
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--gold)",
                    opacity: 0.4,
                    flexShrink: 0,
                  }}
                />
              )}
            </span>
          ))}
        </motion.div>
      </div>

      <style>{`
        .brands-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }
        .brands-row .brand-name:hover {
          color: var(--ink) !important;
        }
        @media (max-width: 768px) {
          .brands-row { gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
