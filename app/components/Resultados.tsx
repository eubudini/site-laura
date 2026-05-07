"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Metric = { label: string; before: string; after: string; growth: string };

type Case = {
  name: string;
  handle: string;
  tag: string;
  bio: string;
  initials: string;
  postsCount: string;
  metrics: Metric[];
  highlight: string;
  feedPalette: [string, string, string, string, string, string];
};

const cases: Case[] = [
  {
    // ═══════════════════════════════════════════════════════════
    // EDITE AQUI — DADOS DO CASE BRUNNEN
    // Substitua os valores abaixo pelos dados reais.
    // O resto do componente (mockup, animações) já se adapta automaticamente.
    // ═══════════════════════════════════════════════════════════
    name: "Brunnen",
    handle: "brunnen",                                    // sem o @
    tag: "Marca · Segmento",                              // ex: "Moda · Lifestyle"
    bio: "Bio · Posicionamento · Localização",            // ex: "Slow fashion · Curitiba ✨"
    initials: "BR",                                        // 2 letras p/ avatar
    postsCount: "000",                                     // total de posts (depois)
    metrics: [
      { label: "Seguidores",   before: "0K",  after: "0K",  growth: "+000%" },
      { label: "Engajamento",  before: "0%",  after: "0%",  growth: "+000%" },
      { label: "Alcance / mês", before: "0K", after: "0K",  growth: "+000%" },
    ],
    highlight: "Adicione aqui o texto editorial que descreve o impacto do trabalho com a marca Brunnen — qual era o cenário antes, o que foi implementado e o que mudou no posicionamento.",
    feedPalette: [
      "linear-gradient(135deg, #1a1a1a 0%, #2c2520 100%)",
      "linear-gradient(135deg, #c9a96e 0%, #8a7146 100%)",
      "linear-gradient(135deg, #f5f0e8 0%, #d8cdb8 100%)",
      "linear-gradient(135deg, #2e2823 0%, #4a3f30 100%)",
      "linear-gradient(135deg, #d4b88a 0%, #a08858 100%)",
      "linear-gradient(135deg, #1f1a14 0%, #3a2f22 100%)",
    ],
  },
  {
    name: "Mariana Penteado",
    handle: "marianapenteado",
    tag: "Moda · Lifestyle",
    bio: "Moda · Lifestyle · Direção criativa ✨",
    initials: "MP",
    postsCount: "856",
    metrics: [
      { label: "Seguidores", before: "42K", after: "198K", growth: "+371%" },
      { label: "Engajamento", before: "1,1%", after: "3,8%", growth: "+245%" },
      { label: "Alcance / mês", before: "22K", after: "180K", growth: "+718%" },
    ],
    highlight: "Direção criativa consistente, captação editorial e narrativa premium transformaram um perfil de moda em referência nacional.",
    feedPalette: [
      "linear-gradient(135deg, #e8dcc8 0%, #b89d75 100%)",
      "linear-gradient(135deg, #2a2018 0%, #4a3a28 100%)",
      "linear-gradient(135deg, #c9a96e 0%, #6a5538 100%)",
      "linear-gradient(135deg, #f0e6d4 0%, #c8b594 100%)",
      "linear-gradient(135deg, #1a1410 0%, #2c2218 100%)",
      "linear-gradient(135deg, #d4ba8c 0%, #8a7048 100%)",
    ],
  },
];

/* ───────── Counter (anima de "before" para "after") ───────── */
function GrowthBar({ delay = 0 }: { delay?: number }) {
  return (
    <div style={{ position: "relative", height: 2, background: "rgba(10,10,10,0.06)", overflow: "hidden", flex: 1 }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          background: "linear-gradient(90deg, rgba(184,149,106,0.15), var(--gold-soft) 60%, var(--gold))",
        }}
      />
    </div>
  );
}

/* ───────── Instagram Phone Mockup ───────── */
function InstagramMockup({
  c,
  variant,
  isAfter,
}: {
  c: Case;
  variant: "before" | "after";
  isAfter: boolean;
}) {
  const followers = variant === "before" ? c.metrics[0].before : c.metrics[0].after;
  const verified = isAfter;
  const muted = !isAfter;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 152,
        margin: "0 auto",
        aspectRatio: "9/19",
        background: "#0A0A0A",
        borderRadius: 20,
        padding: 4,
        boxShadow: isAfter
          ? "0 24px 60px rgba(184,149,106,0.22), 0 6px 20px rgba(0,0,0,0.18)"
          : "0 10px 28px rgba(0,0,0,0.10)",
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: 5,
          left: "50%",
          transform: "translateX(-50%)",
          width: 44,
          height: 11,
          background: "#0A0A0A",
          borderRadius: "0 0 8px 8px",
          zIndex: 4,
        }}
      />
      {/* Screen */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          borderRadius: 18,
          overflow: "hidden",
          position: "relative",
          filter: muted ? "saturate(0.55) contrast(0.92)" : "none",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "6px 10px 3px",
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: "0.36rem",
            fontWeight: 600,
            color: "#0A0A0A",
          }}
        >
          <span>9:41</span>
          <span style={{ display: "flex", gap: 2, alignItems: "center" }}>
            <span style={{ width: 9, height: 4, background: "#0A0A0A", borderRadius: 1 }} />
          </span>
        </div>

        {/* Username header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px 10px 6px",
            borderBottom: "0.5px solid rgba(0,0,0,0.06)",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "0.42rem",
              fontWeight: 600,
              color: "#0A0A0A",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {c.handle}
            {verified && (
              <svg width="6" height="6" viewBox="0 0 24 24" fill="#3897f0">
                <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            )}
          </span>
          <span style={{ fontSize: "0.42rem", color: "#0A0A0A" }}>···</span>
        </div>

        {/* Profile area */}
        <div style={{ padding: "7px 10px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            {/* Avatar */}
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                padding: 1,
                background: isAfter
                  ? "linear-gradient(135deg, #f5e6c8, #c9a96e, #8a7146)"
                  : "rgba(0,0,0,0.12)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: isAfter
                    ? "linear-gradient(135deg, #1a1a1a, #2c2520)"
                    : "rgba(0,0,0,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Fraunces', serif",
                  fontSize: "0.5rem",
                  fontWeight: 500,
                  color: isAfter ? "#f5e6c8" : "rgba(255,255,255,0.5)",
                  border: "1px solid #FFFFFF",
                }}
              >
                {c.initials}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 6, flex: 1, justifyContent: "space-around" }}>
              {[
                { v: c.postsCount, l: "posts" },
                { v: followers, l: "seguidores" },
                { v: "—", l: "seguindo" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: "0.42rem",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.v}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: "0.32rem",
                      color: "rgba(0,0,0,0.7)",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Name + bio */}
          <div style={{ marginTop: 6 }}>
            <p
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: "0.38rem",
                fontWeight: 600,
                color: "#0A0A0A",
              }}
            >
              {c.name}
            </p>
            <p
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: "0.34rem",
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.4,
                marginTop: 1,
              }}
            >
              {isAfter ? c.bio : "—"}
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 3, marginTop: 7 }}>
            <div
              style={{
                flex: 1,
                background: isAfter ? "#0A0A0A" : "rgba(0,0,0,0.06)",
                color: isAfter ? "#FFFFFF" : "rgba(0,0,0,0.4)",
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: "0.34rem",
                fontWeight: 600,
                padding: "3px 0",
                textAlign: "center",
                borderRadius: 3,
              }}
            >
              Seguir
            </div>
            <div
              style={{
                flex: 1,
                background: "rgba(0,0,0,0.04)",
                color: "rgba(0,0,0,0.6)",
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: "0.34rem",
                fontWeight: 600,
                padding: "3px 0",
                textAlign: "center",
                borderRadius: 3,
              }}
            >
              Mensagem
            </div>
          </div>

          {/* Highlights */}
          <div style={{ display: "flex", gap: 7, marginTop: 9, padding: "0 1px" }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: "1px solid rgba(0,0,0,0.15)",
                    background: isAfter
                      ? `linear-gradient(135deg, ${["#1a1a1a", "#c9a96e", "#2c2520", "#d4ba8c"][i - 1]}, rgba(0,0,0,0.4))`
                      : "rgba(0,0,0,0.06)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: "0.28rem",
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  {isAfter ? ["Bastidores", "Eventos", "Press", "Estilo"][i - 1] : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderTop: "0.5px solid rgba(0,0,0,0.08)",
            borderBottom: "0.5px solid rgba(0,0,0,0.08)",
            marginTop: 8,
            padding: "4px 0",
          }}
        >
          <span style={{ width: 10, height: 1, background: "#0A0A0A" }} />
          <span style={{ width: 10, height: 1, background: "rgba(0,0,0,0.2)" }} />
          <span style={{ width: 10, height: 1, background: "rgba(0,0,0,0.2)" }} />
        </div>

        {/* Feed grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 1,
            padding: "1px",
          }}
        >
          {c.feedPalette.map((bg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
              style={{
                aspectRatio: "1/1",
                background: isAfter ? bg : "linear-gradient(135deg, #d4d4d4 0%, #b0b0b0 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {!isAfter && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 6px)",
                  }}
                />
              )}
              {/* Tipo de post overlay (Reel/Carrossel) — só no after */}
              {isAfter && i % 2 === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    width: 6,
                    height: 6,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="white" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))" }}>
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────── Card de caso ───────── */
function ResultadoCard({ c, idx }: { c: Case; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setRevealed(true), 500 + idx * 200);
      return () => clearTimeout(t);
    }
  }, [inView, idx]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(10,10,10,0.06)",
        padding: "36px 32px 30px",
        position: "relative",
      }}
      className="resultado-card"
    >
      {/* Index ribbon */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 22,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.52rem",
          letterSpacing: "0.18em",
          color: "rgba(184,149,106,0.5)",
        }}
      >
        CASE / {String(idx + 1).padStart(2, "0")}
      </div>

      {/* Identificação */}
      <div style={{ marginBottom: 24, paddingRight: 70 }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.54rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 6,
          }}
        >
          {c.tag}
        </p>
        <h3
          className="serif-display"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(1.3rem, 2.1vw, 1.65rem)",
            fontWeight: 400,
            color: "var(--ink)",
            lineHeight: 1.15,
            marginBottom: 3,
          }}
        >
          {c.name}
        </h3>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.58rem",
            color: "rgba(10,10,10,0.4)",
          }}
        >
          @{c.handle}
        </p>
      </div>

      {/* Mockups antes/depois */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 14,
          alignItems: "center",
          marginBottom: 26,
        }}
        className="mockups-row"
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.4)",
              padding: "4px 12px",
              border: "1px solid rgba(10,10,10,0.12)",
            }}
          >
            Antes
          </span>
          <InstagramMockup c={c} variant="before" isAfter={false} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginTop: 22 }}
          className="arrow-mid"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              padding: "4px 12px",
              border: "1px solid var(--gold-mid)",
              background: "var(--gold-light)",
            }}
          >
            Depois
          </span>
          <InstagramMockup c={c} variant="after" isAfter={true} />
        </div>
      </div>

      {/* Métricas */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 22 }}>
        {c.metrics.map((m, mIdx) => (
          <div key={m.label}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.5rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(10,10,10,0.45)",
                }}
              >
                {m.label}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.05em",
                  fontWeight: 500,
                  color: "var(--gold)",
                  background: "var(--gold-light)",
                  padding: "2px 9px",
                }}
              >
                {m.growth}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "0.92rem",
                  fontWeight: 400,
                  color: "rgba(10,10,10,0.32)",
                  minWidth: 50,
                  textAlign: "right",
                  textDecoration: "line-through",
                  textDecorationThickness: "0.5px",
                }}
              >
                {m.before}
              </span>
              <GrowthBar delay={idx * 0.1 + 0.3 + mIdx * 0.1} />
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  minWidth: 56,
                  letterSpacing: "-0.01em",
                }}
              >
                {m.after}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Highlight quote */}
      <div
        style={{
          paddingTop: 18,
          borderTop: "1px solid rgba(10,10,10,0.08)",
        }}
      >
        <p
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontSize: "0.86rem",
            lineHeight: 1.6,
            color: "rgba(10,10,10,0.65)",
            fontWeight: 300,
          }}
        >
          {c.highlight}
        </p>
      </div>
    </motion.article>
  );
}

export default function Resultados() {
  return (
    <section
      id="resultados"
      style={{
        background: "var(--parchment)",
        padding: "100px 0 80px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
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
              color: "var(--gold)",
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            Casos reais
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="serif-display"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(1.7rem, 3.2vw, 2.7rem)",
              fontWeight: 400,
              color: "var(--ink)",
              marginBottom: 18,
              lineHeight: 1.1,
              letterSpacing: "-0.022em",
            }}
          >
            O antes e o depois <em style={{ fontStyle: "italic", color: "var(--gold)" }}>de uma marca</em>{" "}
            que decide se posicionar.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "0.94rem",
              color: "rgba(10,10,10,0.55)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Marcas que confiaram em estratégia, direção criativa e produção contínua — e colheram crescimento expressivo.
          </motion.p>
        </div>

        {/* Grid de cases */}
        <div className="results-grid">
          {cases.map((c, idx) => (
            <ResultadoCard key={c.handle} c={c} idx={idx} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.54rem",
            letterSpacing: "0.08em",
            color: "rgba(10,10,10,0.32)",
            textAlign: "center",
            marginTop: 40,
            maxWidth: 580,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          * Dados acumulados ao longo do período de acompanhamento estratégico. Mockups ilustrativos
          baseados nos dados reais de cada perfil — referência visual, não captura literal.
        </motion.p>
      </div>

      <style>{`
        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }
        @media (max-width: 760px) {
          .results-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          #resultados { padding: 64px 0 52px !important; }
          .resultado-card { padding: 28px 22px 24px !important; }
        }
        /* Mockups antes/depois — empilhar quando o card for estreito */
        @media (max-width: 480px) {
          .mockups-row {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
          .arrow-mid {
            transform: rotate(90deg) !important;
            justify-self: center;
          }
          .resultado-card { padding: 24px 18px 22px !important; }
        }
      `}</style>
    </section>
  );
}
