"use client";

import type { ReactNode } from "react";
import { Kicker } from "./Kicker";

/**
 * <SectionHeader>
 *
 * Bloco padrão de cabeçalho de seção: kicker + h2 + sub.
 *
 * Props:
 *  - kicker: string  (rótulo monoespaçado)
 *  - kickerDual?: boolean (filete duplo, ex: Prova/Planos)
 *  - title: ReactNode (h2 — pode conter <em> para destaque ouro)
 *  - sub?: ReactNode (parágrafo de subtítulo)
 *  - align?: "start" | "center"
 *  - theme?: "light" | "dark" (cor do h2 e sub)
 */
export type SectionHeaderProps = {
  kicker: string;
  kickerDual?: boolean;
  title: ReactNode;
  sub?: ReactNode;
  align?: "start" | "center";
  theme?: "light" | "dark";
  maxWidth?: number | string;
  className?: string;
};

export function SectionHeader({
  kicker,
  kickerDual = false,
  title,
  sub,
  align = "start",
  theme = "light",
  maxWidth = 720,
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";
  const titleColor = isDark ? "#FFFFFF" : "var(--ink)";
  const subColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(10,10,10,0.6)";

  return (
    <div
      className={["ds-section-header", className].filter(Boolean).join(" ")}
      style={{
        textAlign: isCenter ? "center" : "left",
        maxWidth,
        marginInline: isCenter ? "auto" : 0,
        marginBottom: "clamp(48px, 6vw, 80px)",
      }}
    >
      <Kicker align={isCenter ? "center" : "start"} dual={kickerDual} style={{ marginBottom: "var(--space-5)" }}>
        {kicker}
      </Kicker>
      <h2
        style={{
          fontFamily: "var(--font-fraunces), 'Fraunces', serif",
          fontSize: "var(--text-h2)",
          fontWeight: 400,
          color: titleColor,
          lineHeight: 1.08,
          letterSpacing: "-0.022em",
          marginBottom: sub ? "var(--space-5)" : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif",
            fontSize: "var(--text-lg)",
            color: subColor,
            lineHeight: 1.72,
            fontWeight: 300,
            maxWidth: 580,
            marginInline: isCenter ? "auto" : 0,
          }}
        >
          {sub}
        </p>
      )}
      <style>{`
        .ds-section-header h2 em {
          font-style: italic;
          color: var(--gold);
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
