"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Manifesto", href: "#sobre" },
  { label: "Método", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Investimento", href: "#planos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const linkBase = scrolled ? "rgba(255,255,255,0.7)" : "rgba(10,10,10,0.7)";
  const linkHover = scrolled ? "#FFFFFF" : "#0A0A0A";

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: scrolled ? "rgba(10,10,10,0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201,169,110,0.10)"
            : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div className="container-x header-inner">
          {/* Logo (esquerda) */}
          <a href="#hero" className="header-logo" style={{ color: scrolled ? "#FFFFFF" : "#0A0A0A" }}>
            <span className="header-logo-mark" style={{ background: "var(--gold)" }} />
            <span className="header-logo-text">Laura Camponogara</span>
          </a>

          {/* Nav central */}
          <nav className="header-nav">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="header-link"
                style={{ color: linkBase }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = linkHover)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = linkBase)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA direita */}
          <div className="header-cta-wrap">
            <a
              href="#contato"
              className="header-cta"
              style={{
                color: scrolled ? "#0A0A0A" : "#0A0A0A",
                background: "#C9A96E",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#B8956A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#C9A96E";
              }}
            >
              Contato
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="header-hamburger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "10px 8px", flexDirection: "column", gap: 5, minHeight: "auto" }}
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
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: scrolled ? "#FFFFFF" : "#0A0A0A",
                }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "72vw",
              maxWidth: 320,
              height: "100vh",
              background: "#0C0C0C",
              zIndex: 1001,
              padding: "96px 40px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 28,
              borderLeft: "1px solid rgba(201,169,110,0.15)",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.3rem",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  paddingBottom: 16,
                }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              onClick={handleLinkClick}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.36 }}
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
                color: "#0A0A0A",
                background: "#C9A96E",
                padding: "14px 24px",
                textAlign: "center",
                textDecoration: "none",
                textTransform: "uppercase",
                marginTop: 12,
              }}
            >
              Falar com a Laura
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
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
          font-family: 'Fraunces', serif;
          font-size: 1.05rem;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.005em;
          text-decoration: none;
          transition: color 0.3s ease;
          z-index: 2;
        }
        .header-logo-mark {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
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
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          font-weight: 400;
          line-height: 1;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
        }
        .header-cta-wrap {
          z-index: 2;
          display: inline-flex;
          align-items: center;
        }
        .header-cta {
          display: inline-flex;
          align-items: center;
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          font-weight: 500;
          line-height: 1;
          padding: 11px 22px;
          border-radius: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .header-hamburger {
          display: none;
        }
        @media (max-width: 1100px) {
          .header-nav { gap: 26px; }
          .header-link { font-size: 0.68rem; letter-spacing: 0.14em; }
        }
        @media (max-width: 920px) {
          .header-inner { height: 68px; }
          .header-nav, .header-cta-wrap { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
      `}</style>

      {/* Overlay mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 1000,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
