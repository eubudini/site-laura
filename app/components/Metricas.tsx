"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 14, suffix: "+", label: "Clientes atendidos", sub: "Empresas e marcas pessoais" },
  { value: 40, prefix: "+", suffix: "%", label: "Aumento médio", sub: "Em engajamento orgânico" },
  { value: 59, prefix: "+", suffix: "M", label: "Visualizações em Reels", sub: "Nos últimos 12 meses" },
  { value: 4327, prefix: "+", label: "Leads gerados", sub: "Direto do Instagram", separator: "." },
];

function Counter({ value, prefix = "", suffix = "", separator = "" }: {
  value: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const inc = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, value]);

  const formatted = separator
    ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : count.toString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Metricas() {
  return (
    <section
      style={{
        background: "var(--obsidian)",
        padding: "72px 0",
        borderTop: "1px solid rgba(201,169,110,0.12)",
        borderBottom: "1px solid rgba(201,169,110,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          background: "rgba(201,169,110,0.08)",
        }}
        className="metrics-grid"
      >
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              background: "var(--obsidian)",
              padding: "48px 36px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1,
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              <Counter
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                separator={m.separator}
              />
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                marginBottom: 6,
              }}
            >
              {m.label}
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.08em",
                color: "var(--gold)",
                opacity: 0.7,
              }}
            >
              {m.sub}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 20px !important;
          }
          .metrics-grid > div {
            padding: 36px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 !important;
          }
          .metrics-grid > div {
            padding: 28px 16px !important;
            text-align: left !important;
          }
        }
        @media (max-width: 360px) {
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
