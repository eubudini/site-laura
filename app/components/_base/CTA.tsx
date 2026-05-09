"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * <CTA>
 *
 * Botão/anchor padrão. Hover via CSS (sem onMouse*).
 *
 * Variants:
 *  - primary   : ink fill, hover gold (default no Hero/Portfolio/Contato)
 *  - secondary : outlined ink, hover gold
 *  - gold      : gold fill, hover gold-soft (Header CTA, WhatsApp Planos)
 *  - ghost     : outlined gold sobre fundo escuro
 *
 * Sizes:
 *  - sm | md (default) | lg
 *
 * Tema dark? `onDark` inverte cores quando o fundo é escuro (Planos cards).
 */
export type CTAVariant = "primary" | "secondary" | "gold" | "ghost";
export type CTASize = "sm" | "md" | "lg";

export type CTAProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: CTAVariant;
  size?: CTASize;
  onDark?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
};

export function CTA({
  variant = "primary",
  size = "md",
  onDark = false,
  fullWidth = false,
  children,
  className,
  ...rest
}: CTAProps) {
  const cls = [
    "ds-cta",
    `ds-cta--${variant}`,
    `ds-cta--${size}`,
    onDark ? "ds-cta--ondark" : "",
    fullWidth ? "ds-cta--full" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a className={cls} {...rest}>
        {children}
      </a>
      <style>{`
        .ds-cta {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          transition: background var(--duration-base) var(--ease-editorial),
                      color var(--duration-base) var(--ease-editorial),
                      border-color var(--duration-base) var(--ease-editorial);
          border: 1px solid transparent;
        }
        .ds-cta--full { width: 100%; }

        /* Sizes */
        .ds-cta--sm { font-size: 0.78rem; padding: 12px 24px; letter-spacing: 0.14em; }
        .ds-cta--md { font-size: 0.86rem; padding: 14px 28px; }
        .ds-cta--lg { font-size: 0.94rem; padding: 17px var(--space-8); }

        /* Variants */
        .ds-cta--primary {
          color: #FFFFFF;
          background: var(--ink);
        }
        .ds-cta--primary:hover { background: var(--gold-soft); }

        .ds-cta--secondary {
          color: var(--ink);
          border-color: rgba(10,10,10,0.3);
          background: transparent;
        }
        .ds-cta--secondary:hover {
          color: var(--gold-soft);
          border-color: var(--gold-soft);
        }

        .ds-cta--gold {
          color: var(--ink);
          background: var(--gold-soft);
        }
        .ds-cta--gold:hover { background: var(--gold); }

        .ds-cta--ghost {
          color: var(--gold);
          background: transparent;
          border-color: rgba(201,169,110,0.4);
        }
        .ds-cta--ghost:hover {
          color: var(--gold-soft);
          border-color: var(--gold-soft);
          background: rgba(201,169,110,0.08);
        }

        /* On dark theme overrides */
        .ds-cta--ondark.ds-cta--secondary {
          color: #FFFFFF;
          border-color: rgba(255,255,255,0.3);
        }
        .ds-cta--ondark.ds-cta--secondary:hover {
          color: var(--gold-soft);
          border-color: var(--gold-soft);
        }
      `}</style>
    </>
  );
}
