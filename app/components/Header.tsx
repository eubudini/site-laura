"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
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

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: scrolled
            ? "rgba(10,10,10,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201,169,110,0.12)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 20px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="header-inner"
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem",
              fontWeight: 500,
              color: scrolled ? "#FFFFFF" : "#0A0A0A",
              letterSpacing: "0.02em",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            Laura Camponogara
          </a>

          {/* Desktop Nav */}
          <nav
            className="header-nav"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  fontWeight: 400,
                  color: scrolled
                    ? "rgba(255,255,255,0.65)"
                    : "rgba(10,10,10,0.65)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = scrolled
                    ? "#C9A96E"
                    : "#0A0A0A")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = scrolled
                    ? "rgba(255,255,255,0.65)"
                    : "rgba(10,10,10,0.65)")
                }
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                fontWeight: 500,
                color: "#0A0A0A",
                background: "#C9A96E",
                padding: "10px 24px",
                borderRadius: "2px",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#B8966A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#C9A96E";
              }}
            >
              Contato
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px 8px",
              flexDirection: "column",
              gap: 5,
              minHeight: "auto",
            }}
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
                  fontFamily: "'Playfair Display', serif",
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
                fontFamily: "'DM Sans', sans-serif",
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
        .header-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .header-hamburger {
          display: none;
        }
        @media (max-width: 767px) {
          .header-nav { display: none !important; }
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
