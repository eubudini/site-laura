"use client";

import { motion } from "framer-motion";
import type { Case } from "./data";

type Props = {
  c: Case;
  variant: "before" | "after";
  isAfter: boolean;
};

export function InstagramMockup({ c, variant, isAfter }: Props) {
  const followers = variant === "before" ? c.metrics[0].before : c.metrics[0].after;
  const verified = isAfter;
  const muted = !isAfter;

  return (
    <div
      className="ig-mockup"
      style={{
        boxShadow: isAfter
          ? "0 24px 60px rgba(184,149,106,0.22), 0 6px 20px rgba(0,0,0,0.18)"
          : "0 10px 28px rgba(0,0,0,0.10)",
      }}
    >
      <div className="ig-mockup__notch" aria-hidden />
      <div className="ig-mockup__screen" style={{ filter: muted ? "saturate(0.55) contrast(0.92)" : "none" }}>
        <div className="ig-mockup__statusbar">
          <span>9:41</span>
          <span style={{ display: "flex", gap: 2, alignItems: "center" }}>
            <span style={{ width: 9, height: 4, background: "#0A0A0A", borderRadius: 1 }} />
          </span>
        </div>
        <div className="ig-mockup__topbar">
          <span className="ig-mockup__handle">
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
                  fontFamily: "var(--font-fraunces), 'Fraunces', serif",
                  fontSize: "0.5rem",
                  fontWeight: 500,
                  color: isAfter ? "#f5e6c8" : "rgba(255,255,255,0.5)",
                  border: "1px solid #FFFFFF",
                }}
              >
                {c.initials}
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, flex: 1, justifyContent: "space-around" }}>
              {[
                { v: c.postsCount, l: "posts" },
                { v: followers, l: "seguidores" },
                { v: "...", l: "seguindo" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif",
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
                      fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif",
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
          <div style={{ marginTop: 6 }}>
            <p style={{ fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif", fontSize: "0.38rem", fontWeight: 600, color: "#0A0A0A" }}>
              {c.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif",
                fontSize: "0.34rem",
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.4,
                marginTop: 1,
              }}
            >
              {isAfter ? c.bio : "..."}
            </p>
          </div>
          <div style={{ display: "flex", gap: 3, marginTop: 7 }}>
            <div
              style={{
                flex: 1,
                background: isAfter ? "#0A0A0A" : "rgba(0,0,0,0.06)",
                color: isAfter ? "#FFFFFF" : "rgba(0,0,0,0.4)",
                fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif",
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
                fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif",
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
                <span style={{ fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif", fontSize: "0.28rem", color: "rgba(0,0,0,0.5)" }}>
                  {isAfter ? ["Bastidores", "Eventos", "Press", "Estilo"][i - 1] : "..."}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="ig-mockup__tabs">
          <span style={{ width: 10, height: 1, background: "#0A0A0A" }} />
          <span style={{ width: 10, height: 1, background: "rgba(0,0,0,0.2)" }} />
          <span style={{ width: 10, height: 1, background: "rgba(0,0,0,0.2)" }} />
        </div>
        <div className="ig-mockup__feed">
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

      <style>{`
        .ig-mockup {
          position: relative;
          width: 100%;
          max-width: 152px;
          margin: 0 auto;
          aspect-ratio: 9 / 19;
          background: #0A0A0A;
          border-radius: 20px;
          padding: 4px;
        }
        .ig-mockup__notch {
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 44px;
          height: 11px;
          background: #0A0A0A;
          border-radius: 0 0 8px 8px;
          z-index: 4;
        }
        .ig-mockup__screen {
          width: 100%;
          height: 100%;
          background: #FFFFFF;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
        }
        .ig-mockup__statusbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 10px 3px;
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 0.36rem;
          font-weight: 600;
          color: #0A0A0A;
        }
        .ig-mockup__topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3px 10px 6px;
          border-bottom: 0.5px solid rgba(0,0,0,0.06);
        }
        .ig-mockup__handle {
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 0.42rem;
          font-weight: 600;
          color: #0A0A0A;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .ig-mockup__tabs {
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-top: 0.5px solid rgba(0,0,0,0.08);
          border-bottom: 0.5px solid rgba(0,0,0,0.08);
          margin-top: 8px;
          padding: 4px 0;
        }
        .ig-mockup__feed {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          padding: 1px;
        }
      `}</style>
    </div>
  );
}
