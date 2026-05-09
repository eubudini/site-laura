"use client";

import type { CSSProperties, ReactNode } from "react";

/**
 * <Kicker>
 *
 * Pequeno rótulo monoespaçado em ouro, com filete decorativo.
 * Substitui implementações inline em Manifesto/Metodologia/Prova/Portfolio/
 * Planos/Contato/Hero.
 *
 * Props:
 *  - children: rótulo (ex: "Manifesto", "Método")
 *  - align?: "start" | "center" — alinhamento do bloco
 *  - dual?: boolean — adiciona um segundo filete à direita (estilo Prova/Planos)
 *  - tone?: "gold" | "muted" — paleta (default gold)
 *  - className?: string — composição opcional
 */
export type KickerProps = {
  children: ReactNode;
  align?: "start" | "center";
  dual?: boolean;
  tone?: "gold" | "muted";
  className?: string;
  style?: CSSProperties;
};

export function Kicker({
  children,
  align = "start",
  dual = false,
  tone = "gold",
  className,
  style,
}: KickerProps) {
  const justify = align === "center" ? "center" : "flex-start";
  const color = tone === "muted" ? "rgba(255,255,255,0.5)" : "var(--gold)";
  return (
    <p
      className={["ds-kicker", className].filter(Boolean).join(" ")}
      style={{
        fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
        fontSize: "var(--text-mono-kicker)",
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: justify,
        gap: "var(--space-3)",
        margin: 0,
        ...style,
      }}
    >
      <span
        aria-hidden
        style={{
          display: "block",
          width: "var(--space-8)",
          height: 1,
          background: color,
          opacity: 0.85,
        }}
      />
      {children}
      {dual && (
        <span
          aria-hidden
          style={{
            display: "block",
            width: "var(--space-8)",
            height: 1,
            background: color,
            opacity: 0.85,
          }}
        />
      )}
    </p>
  );
}
