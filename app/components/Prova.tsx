"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ═══════════════════════════════════════════════════════════
   PROVA: consolida Métricas + Resultados (cases) + Clientes (quotes) + Marcas (logo wall)
   ═══════════════════════════════════════════════════════════ */

const stats = [
  { value: 14, suffix: "+", label: "Marcas atendidas", sub: "Empresas e marcas pessoais" },
  { value: 418, prefix: "+", suffix: "%", label: "Crescimento médio", sub: "Em seguidores qualificados" },
  { value: 59, prefix: "+", suffix: "M", label: "Visualizações em Reels", sub: "Nos últimos 12 meses" },
  { value: 4327, prefix: "+", label: "Leads gerados", sub: "Direto do Instagram", separator: "." },
];

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
    // ═══════ DADOS PROVISÓRIOS: atualizar com Laura ═══════
    name: "Brunnen",
    handle: "brunnen",
    tag: "Moda feminina · Atelier",
    bio: "Moda autoral · Porto Alegre · Atelier",
    initials: "BR",
    postsCount: "412",
    metrics: [
      { label: "Seguidores",    before: "8K",  after: "47K",  growth: "+487%" },
      { label: "Engajamento",   before: "0,9%", after: "4,2%", growth: "+367%" },
      { label: "Alcance / mês", before: "12K", after: "96K",  growth: "+700%" },
    ],
    highlight: "Reposicionamento editorial completo: do feed amador ao branding de atelier autoral. Captação dirigida, narrativa de produto e tom de voz redesenharam a marca como referência regional em moda feminina.",
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
      { label: "Seguidores",   before: "42K", after: "198K", growth: "+371%" },
      { label: "Engajamento",  before: "1,1%", after: "3,8%", growth: "+245%" },
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

const quotes = [
  { name: "Marina Ciconet",      role: "Jornalismo · Conteúdo", initials: "MC", quote: "Entendeu minha voz antes de eu entender." },
  { name: "Mariana Penteado",    role: "Moda · Lifestyle",       initials: "MP", quote: "Cada post passou a comunicar marca." },
  { name: "Brunnen",              role: "Moda feminina",          initials: "BR", quote: "Estética e estratégia juntas. Virou ativo." },
  { name: "A.MAR José Ignacio",   role: "Maison · Luxo",          initials: "AM", quote: "Cobertura presencial elevou nosso patamar." },
];

const brands = [
  { name: "A.MAR", style: "italic" as const },
  { name: "H.STERN", style: "normal" as const },
  { name: "Brunnen", style: "italic" as const },
  { name: "RESI", style: "normal" as const },
  { name: "Mariana Penteado", style: "italic" as const },
  { name: "Marina Ciconet", style: "normal" as const },
  { name: "Casa das Gurias", style: "italic" as const },
];

/* ═══════ Counter (anima de 0 → value) ═══════ */
function Counter({ value, prefix = "", suffix = "", separator = "" }: {
  value: number; prefix?: string; suffix?: string; separator?: string;
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
      if (current >= value) { current = value; clearInterval(interval); }
      setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, value]);

  const formatted = separator
    ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : count.toString();

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

/* ═══════ Growth bar ═══════ */
function GrowthBar({ delay = 0 }: { delay?: number }) {
  return (
    <div style={{ position: "relative", height: 2, background: "rgba(10,10,10,0.06)", overflow: "hidden", flex: 1 }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "absolute", left: 0, top: 0, height: "100%",
          background: "linear-gradient(90deg, rgba(184,149,106,0.15), var(--gold-soft) 60%, var(--gold))" }}
      />
    </div>
  );
}

/* ═══════ Mockup iPhone ═══════ */
function InstagramMockup({ c, variant, isAfter }: {
  c: Case; variant: "before" | "after"; isAfter: boolean;
}) {
  const followers = variant === "before" ? c.metrics[0].before : c.metrics[0].after;
  const verified = isAfter;
  const muted = !isAfter;

  return (
    <div style={{
      position: "relative", width: "100%", maxWidth: 152, margin: "0 auto",
      aspectRatio: "9/19", background: "#0A0A0A", borderRadius: 20, padding: 4,
      boxShadow: isAfter
        ? "0 24px 60px rgba(184,149,106,0.22), 0 6px 20px rgba(0,0,0,0.18)"
        : "0 10px 28px rgba(0,0,0,0.10)",
    }}>
      <div style={{ position: "absolute", top: 5, left: "50%", transform: "translateX(-50%)",
        width: 44, height: 11, background: "#0A0A0A", borderRadius: "0 0 8px 8px", zIndex: 4 }} />
      <div style={{ width: "100%", height: "100%", background: "#FFFFFF", borderRadius: 18,
        overflow: "hidden", position: "relative", filter: muted ? "saturate(0.55) contrast(0.92)" : "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "6px 10px 3px", fontFamily: "'Inter Tight', sans-serif", fontSize: "0.36rem",
          fontWeight: 600, color: "#0A0A0A" }}>
          <span>9:41</span>
          <span style={{ display: "flex", gap: 2, alignItems: "center" }}>
            <span style={{ width: 9, height: 4, background: "#0A0A0A", borderRadius: 1 }} />
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "3px 10px 6px", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
          <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "0.42rem",
            fontWeight: 600, color: "#0A0A0A", display: "flex", alignItems: "center", gap: 2 }}>
            {c.handle}
            {verified && (
              <svg width="6" height="6" viewBox="0 0 24 24" fill="#3897f0">
                <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            )}
          </span>
          <span style={{ fontSize: "0.42rem", color: "#0A0A0A" }}>···</span>
        </div>
        <div style={{ padding: "7px 10px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", padding: 1,
              background: isAfter ? "linear-gradient(135deg, #f5e6c8, #c9a96e, #8a7146)" : "rgba(0,0,0,0.12)",
              flexShrink: 0 }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%",
                background: isAfter ? "linear-gradient(135deg, #1a1a1a, #2c2520)" : "rgba(0,0,0,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Fraunces', serif", fontSize: "0.5rem", fontWeight: 500,
                color: isAfter ? "#f5e6c8" : "rgba(255,255,255,0.5)", border: "1px solid #FFFFFF" }}>
                {c.initials}
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, flex: 1, justifyContent: "space-around" }}>
              {[
                { v: c.postsCount, l: "posts" },
                { v: followers, l: "seguidores" },
                { v: "–", l: "seguindo" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "0.42rem",
                    fontWeight: 700, color: "#0A0A0A", lineHeight: 1.1 }}>{s.v}</p>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "0.32rem",
                    color: "rgba(0,0,0,0.7)", lineHeight: 1.2 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 6 }}>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "0.38rem",
              fontWeight: 600, color: "#0A0A0A" }}>{c.name}</p>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "0.34rem",
              color: "rgba(0,0,0,0.7)", lineHeight: 1.4, marginTop: 1 }}>{isAfter ? c.bio : "–"}</p>
          </div>
          <div style={{ display: "flex", gap: 3, marginTop: 7 }}>
            <div style={{ flex: 1, background: isAfter ? "#0A0A0A" : "rgba(0,0,0,0.06)",
              color: isAfter ? "#FFFFFF" : "rgba(0,0,0,0.4)", fontFamily: "'Inter Tight', sans-serif",
              fontSize: "0.34rem", fontWeight: 600, padding: "3px 0", textAlign: "center", borderRadius: 3 }}>Seguir</div>
            <div style={{ flex: 1, background: "rgba(0,0,0,0.04)", color: "rgba(0,0,0,0.6)",
              fontFamily: "'Inter Tight', sans-serif", fontSize: "0.34rem", fontWeight: 600,
              padding: "3px 0", textAlign: "center", borderRadius: 3 }}>Mensagem</div>
          </div>
          <div style={{ display: "flex", gap: 7, marginTop: 9, padding: "0 1px" }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%",
                  border: "1px solid rgba(0,0,0,0.15)",
                  background: isAfter
                    ? `linear-gradient(135deg, ${["#1a1a1a", "#c9a96e", "#2c2520", "#d4ba8c"][i - 1]}, rgba(0,0,0,0.4))`
                    : "rgba(0,0,0,0.06)" }} />
                <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "0.28rem",
                  color: "rgba(0,0,0,0.5)" }}>
                  {isAfter ? ["Bastidores", "Eventos", "Press", "Estilo"][i - 1] : "–"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center",
          borderTop: "0.5px solid rgba(0,0,0,0.08)", borderBottom: "0.5px solid rgba(0,0,0,0.08)",
          marginTop: 8, padding: "4px 0" }}>
          <span style={{ width: 10, height: 1, background: "#0A0A0A" }} />
          <span style={{ width: 10, height: 1, background: "rgba(0,0,0,0.2)" }} />
          <span style={{ width: 10, height: 1, background: "rgba(0,0,0,0.2)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, padding: "1px" }}>
          {c.feedPalette.map((bg, i) => (
            <motion.div key={i}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
              style={{ aspectRatio: "1/1",
                background: isAfter ? bg : "linear-gradient(135deg, #d4d4d4 0%, #b0b0b0 100%)",
                position: "relative", overflow: "hidden" }}>
              {!isAfter && (
                <div style={{ position: "absolute", inset: 0,
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 6px)" }} />
              )}
              {isAfter && i % 2 === 0 && (
                <div style={{ position: "absolute", top: 2, right: 2, width: 6, height: 6 }}>
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

/* ═══════ Case card ═══════ */
function CaseCard({ c, idx }: { c: Case; idx: number }) {
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
    <motion.article ref={ref}
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: "#FFFFFF", border: "1px solid rgba(10,10,10,0.06)",
        padding: "36px 32px 30px", position: "relative" }}
      className="case-card">
      <div style={{ position: "absolute", top: 20, right: 22,
        fontFamily: "'DM Mono', monospace", fontSize: "0.52rem",
        letterSpacing: "0.18em", color: "rgba(184,149,106,0.5)" }}>
        CASE / {String(idx + 1).padStart(2, "0")}
      </div>
      <div style={{ marginBottom: 24, paddingRight: 70 }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.54rem",
          letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)",
          marginBottom: 6 }}>{c.tag}</p>
        <h3 style={{ fontFamily: "'Fraunces', serif",
          fontSize: "clamp(1.3rem, 2.1vw, 1.65rem)", fontWeight: 400,
          color: "var(--ink)", lineHeight: 1.15, marginBottom: 3 }}>{c.name}</h3>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem",
          color: "rgba(10,10,10,0.4)" }}>@{c.handle}</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr",
        gap: 14, alignItems: "center", marginBottom: 26 }} className="mockups-row">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem",
            letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(10,10,10,0.4)",
            padding: "4px 12px", border: "1px solid rgba(10,10,10,0.12)" }}>Antes</span>
          <InstagramMockup c={c} variant="before" isAfter={false} />
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginTop: 22 }}
          className="arrow-mid">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem",
            letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)",
            padding: "4px 12px", border: "1px solid var(--gold-mid)", background: "var(--gold-light)" }}>Depois</span>
          <InstagramMockup c={c} variant="after" isAfter={true} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 22 }}>
        {c.metrics.map((m, mIdx) => (
          <div key={m.label}>
            <div style={{ display: "flex", justifyContent: "space-between",
              alignItems: "baseline", marginBottom: 6 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem",
                letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(10,10,10,0.45)" }}>{m.label}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem",
                letterSpacing: "0.05em", fontWeight: 500, color: "var(--gold)",
                background: "var(--gold-light)", padding: "2px 9px" }}>{m.growth}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: "0.92rem",
                fontWeight: 400, color: "rgba(10,10,10,0.32)", minWidth: 50, textAlign: "right",
                textDecoration: "line-through", textDecorationThickness: "0.5px" }}>{m.before}</span>
              <GrowthBar delay={idx * 0.1 + 0.3 + mIdx * 0.1} />
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.25rem",
                fontWeight: 500, color: "var(--ink)", minWidth: 56, letterSpacing: "-0.01em" }}>{m.after}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ paddingTop: 18, borderTop: "1px solid rgba(10,10,10,0.08)" }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic",
          fontSize: "0.86rem", lineHeight: 1.6, color: "rgba(10,10,10,0.65)",
          fontWeight: 300 }}>{c.highlight}</p>
      </div>
    </motion.article>
  );
}

export default function Prova() {
  return (
    <section id="resultados" className="prova-section">
      {/* ════ STATS BAND (era Métricas) ════ */}
      <div className="prova-stats-band">
        <div className="prova-stats-grid">
          {stats.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="prova-stat">
              <p className="prova-stat__value">
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} separator={m.separator} />
              </p>
              <p className="prova-stat__label">{m.label}</p>
              <p className="prova-stat__sub">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ════ HEADER + CASES ════ */}
      <div className="prova-cases-wrap">
        <div className="container-x">
          <div className="prova-header">
            <motion.p
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="prova-kicker">
              <span className="prova-kicker__rule" aria-hidden />
              Prova
              <span className="prova-kicker__rule" aria-hidden />
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="prova-h2">
              Não são números genéricos. <em>São transformações reais.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="prova-sub">
              Marcas que confiaram em estratégia, direção criativa e produção contínua,
              e colheram crescimento expressivo.
            </motion.p>
          </div>

          <div className="prova-cases-grid">
            {cases.map((c, idx) => (
              <CaseCard key={c.handle} c={c} idx={idx} />
            ))}
          </div>

          {/* ════ QUOTES ROW (era Clientes) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="prova-quotes-band">
            <div className="prova-quotes-rule" aria-hidden />
            <div className="prova-quotes-grid">
              {quotes.map((q, i) => (
                <motion.figure key={q.name}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="prova-quote">
                  <blockquote className="prova-quote__text">
                    <span className="prova-quote__mark" aria-hidden>“</span>
                    {q.quote}
                  </blockquote>
                  <figcaption className="prova-quote__id">
                    <span className="prova-quote__avatar">{q.initials}</span>
                    <span>
                      <span className="prova-quote__name">{q.name}</span>
                      <span className="prova-quote__role">{q.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>

          {/* ════ LOGO WALL (era Marcas) ════ */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="prova-brands">
            <p className="prova-brands__label">
              <span className="prova-brands__rule" aria-hidden />
              Marcas atendidas
            </p>
            <div className="prova-brands__list">
              {brands.map((b) => (
                <span key={b.name} className="prova-brand"
                  style={{ fontStyle: b.style }}>
                  {b.name}
                </span>
              ))}
            </div>
          </motion.div>

          <p className="prova-disclaimer">
            * Dados acumulados ao longo do período de acompanhamento estratégico. Mockups
            ilustrativos baseados em dados reais.
          </p>
        </div>
      </div>

      <style>{`
        .prova-section {
          background: var(--parchment);
          padding: 0;
        }

        /* STATS BAND */
        .prova-stats-band {
          background: var(--obsidian);
          border-top: 1px solid rgba(201,169,110,0.12);
          border-bottom: 1px solid rgba(201,169,110,0.12);
          padding: 64px 0;
        }
        .prova-stats-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(201,169,110,0.08);
        }
        .prova-stat {
          background: var(--obsidian);
          padding: 36px 28px;
          text-align: center;
        }
        .prova-stat__value {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.2rem, 3.4vw, 3rem);
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .prova-stat__label {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.94rem;
          font-weight: 500;
          color: rgba(255,255,255,0.82);
          margin-bottom: 5px;
        }
        .prova-stat__sub {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--gold);
          opacity: 0.78;
        }

        /* CASES WRAP */
        .prova-cases-wrap { padding: clamp(80px, 10vw, 120px) 0 clamp(72px, 9vw, 100px); }

        .prova-header {
          text-align: center;
          margin: 0 auto clamp(48px, 6vw, 72px);
          max-width: 700px;
        }
        .prova-kicker {
          font-family: 'DM Mono', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .prova-kicker__rule {
          display: block;
          width: 28px;
          height: 1px;
          background: var(--gold);
        }
        .prova-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.8rem, 3.2vw, 2.8rem);
          font-weight: 400;
          color: var(--ink);
          margin-bottom: 18px;
          line-height: 1.1;
          letter-spacing: -0.022em;
        }
        .prova-h2 em {
          font-style: italic;
          color: var(--gold);
        }
        .prova-sub {
          font-family: 'Inter Tight', sans-serif;
          font-size: 1.05rem;
          color: rgba(10,10,10,0.6);
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.72;
          font-weight: 300;
        }

        .prova-cases-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* QUOTES BAND */
        .prova-quotes-band {
          margin-top: clamp(72px, 9vw, 100px);
          padding-top: clamp(48px, 6vw, 64px);
          position: relative;
        }
        .prova-quotes-rule {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }
        .prova-quotes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .prova-quote {
          margin: 0;
          padding: 22px 22px 20px;
          background: #FFFFFF;
          border: 1px solid rgba(10,10,10,0.06);
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-height: 180px;
        }
        .prova-quote__text {
          margin: 0;
          padding: 0;
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 1.02rem;
          line-height: 1.5;
          color: var(--ink);
          font-weight: 400;
          letter-spacing: -0.005em;
        }
        .prova-quote__mark {
          font-style: normal;
          font-size: 1.5rem;
          color: var(--gold);
          line-height: 1;
          margin-right: 3px;
          opacity: 0.65;
          vertical-align: -6px;
        }
        .prova-quote__id {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid rgba(10,10,10,0.07);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .prova-quote__avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(201,169,110,0.10);
          border: 1px solid rgba(201,169,110,0.28);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          color: var(--gold);
          flex-shrink: 0;
        }
        .prova-quote__name {
          display: block;
          font-family: 'Fraunces', serif;
          font-size: 0.94rem;
          color: var(--ink);
          font-weight: 500;
          line-height: 1.2;
        }
        .prova-quote__role {
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.45);
          margin-top: 3px;
        }

        /* BRANDS WALL */
        .prova-brands {
          margin-top: clamp(56px, 7vw, 80px);
          padding-top: clamp(36px, 5vw, 52px);
          border-top: 1px solid rgba(10,10,10,0.06);
          text-align: center;
        }
        .prova-brands__label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .prova-brands__rule {
          display: block;
          width: 22px;
          height: 1px;
          background: var(--gold);
        }
        .prova-brands__list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 28px 44px;
        }
        .prova-brand {
          font-family: 'Fraunces', serif;
          font-size: clamp(1rem, 1.6vw, 1.35rem);
          font-weight: 400;
          color: rgba(10,10,10,0.55);
          letter-spacing: -0.005em;
          transition: color 0.3s ease;
        }
        .prova-brand:hover { color: var(--gold); }

        .prova-disclaimer {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.08em;
          color: rgba(10,10,10,0.38);
          text-align: center;
          margin-top: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .prova-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .prova-quotes-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 760px) {
          .prova-cases-grid { grid-template-columns: 1fr; gap: 20px; }
          .prova-cases-wrap { padding: 64px 0 56px; }
          .case-card { padding: 28px 22px 24px !important; }
        }
        @media (max-width: 560px) {
          .prova-stats-band { padding: 48px 0; }
          .prova-stat { padding: 28px 18px; }
          .prova-quotes-grid { grid-template-columns: 1fr; gap: 14px; }
          .prova-quote { min-height: 0; }
          .prova-brands__list { gap: 20px 28px; }
        }
        @media (max-width: 480px) {
          .mockups-row { grid-template-columns: 1fr !important; gap: 22px !important; }
          .arrow-mid { transform: rotate(90deg) !important; justify-self: center; }
          .case-card { padding: 24px 18px 22px !important; }
        }
        @media (max-width: 360px) {
          .prova-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
