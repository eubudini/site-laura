"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTA } from "./_base";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Investimento", href: "#planos" },
];

const MENU_ID = "primary-mobile-menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc fecha + focus trap simples + retorna foco ao toggle
  useEffect(() => {
    if (!menuOpen) return;
    const previouslyFocused = toggleRef.current;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    // foca primeiro link ao abrir
    const first = dialogRef.current?.querySelector<HTMLElement>("a[href]");
    first?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      // ao fechar, devolve foco ao toggle (snapshot do ref capturado no efeito)
      previouslyFocused?.focus();
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="container-x header-inner">
          {/* Logo (esquerda) */}
          <a href="#hero" className="header-logo">
            <span className="header-logo-mark" aria-hidden />
            <span className="header-logo-text">Laura Camponogara</span>
          </a>

          {/* Nav central */}
          <nav className="header-nav" aria-label="Principal">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="header-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA direita */}
          <div className="header-cta-wrap">
            <CTA href="#contato" variant="gold" size="sm">
              Contato
            </CTA>
          </div>

          {/* Mobile Toggle */}
          <button
            ref={toggleRef}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            className="header-hamburger"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 7 }
                      : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
                className="header-hamburger__bar"
                aria-hidden
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu (dialog) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={dialogRef}
            id={MENU_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="header-mobile-dialog"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="header-mobile-link"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="#contato"
              onClick={handleLinkClick}
              className="header-mobile-cta"
            >
              Falar com a Laura
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="header-overlay"
            aria-hidden
          />
        )}
      </AnimatePresence>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background var(--duration-base) ease, border-color var(--duration-base) ease, backdrop-filter var(--duration-base) ease;
        }
        .site-header--scrolled {
          background: rgba(10,10,10,0.78);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border-bottom-color: rgba(201,169,110,0.10);
        }

        .header-inner {
          position: relative;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 1.18rem;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.005em;
          text-decoration: none;
          color: var(--ink);
          transition: color var(--duration-base) ease;
          z-index: 2;
        }
        .site-header--scrolled .header-logo { color: #FFFFFF; }
        .header-logo-mark {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.85;
          transform: translateY(1px);
        }
        .header-logo-text {
          font-style: italic;
          display: inline-block;
          line-height: 1;
          transform: translateY(-2px);
        }

        .header-nav {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 36px;
          line-height: 1;
          z-index: 1;
        }
        .header-link {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.16em;
          font-weight: 400;
          line-height: 1;
          text-decoration: none;
          text-transform: uppercase;
          color: rgba(10,10,10,0.7);
          transition: color var(--duration-base) ease;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
        }
        .header-link:hover { color: var(--ink); }
        .site-header--scrolled .header-link { color: rgba(255,255,255,0.7); }
        .site-header--scrolled .header-link:hover { color: #FFFFFF; }

        .header-cta-wrap {
          z-index: 2;
          display: inline-flex;
          align-items: center;
        }

        .header-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px 8px;
          flex-direction: column;
          gap: 5px;
          min-height: 44px;
          min-width: 44px;
          align-items: center;
          justify-content: center;
        }
        .header-hamburger__bar {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--ink);
        }
        .site-header--scrolled .header-hamburger__bar { background: #FFFFFF; }

        @media (max-width: 1100px) {
          .header-nav { gap: 26px; }
          .header-link { font-size: 0.68rem; letter-spacing: 0.14em; }
        }
        @media (max-width: 920px) {
          .header-inner { height: 68px; }
          .header-nav, .header-cta-wrap { display: none !important; }
          .header-hamburger { display: flex !important; }
        }

        /* Mobile dialog */
        .header-mobile-dialog {
          position: fixed;
          top: 0;
          right: 0;
          width: 72vw;
          max-width: 320px;
          height: 100vh;
          background: #0C0C0C;
          z-index: 1001;
          padding: 96px 40px 40px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          border-left: 1px solid rgba(201,169,110,0.15);
        }
        .header-mobile-link {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 1.3rem;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 16px;
        }
        .header-mobile-cta {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          font-weight: 500;
          color: var(--ink);
          background: var(--gold-soft);
          padding: 14px 24px;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          margin-top: 12px;
          transition: background var(--duration-base) var(--ease-editorial);
        }
        .header-mobile-cta:hover { background: var(--gold); }

        .header-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1000;
        }
      `}</style>
    </>
  );
}
