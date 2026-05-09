"use client";

import type { CSSProperties, ReactNode } from "react";

/**
 * <EditorialFrame>
 *
 * Moldura decorativa em ouro com offset (top-right ou bottom-left),
 * usada em Hero, Manifesto, Contato.
 *
 * Props:
 *  - children: conteudo emoldurado
 *  - offset?: number  (deslocamento do frame, default 16)
 *  - position?: "tr" | "bl" (top-right | bottom-left)
 */
export type EditorialFrameProps = {
  children: ReactNode;
  offset?: number;
  position?: "tr" | "bl";
  className?: string;
  style?: CSSProperties;
};

export function EditorialFrame({
  children,
  offset = 16,
  position = "tr",
  className,
  style,
}: EditorialFrameProps) {
  const frameStyle: CSSProperties =
    position === "tr"
      ? {
          top: -offset,
          right: -offset,
          width: `calc(100% - ${offset * 2}px)`,
          height: `calc(100% - ${offset * 2}px)`,
        }
      : {
          bottom: -offset,
          left: -offset,
          width: `calc(100% - ${offset * 2}px)`,
          height: `calc(100% - ${offset * 2}px)`,
        };

  return (
    <div
      className={["ds-frame", className].filter(Boolean).join(" ")}
      style={{ position: "relative", ...style }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          ...frameStyle,
          border: "1px solid rgba(201,169,110,0.25)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
