"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "Canva",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.54 18.86c-1.64 0-2.61-.87-2.61-2.36 0-2.28 1.77-4.89 4.3-4.89.78 0 1.32.27 1.62.54l.51-2.19h1.56l-1.89 8.1h-1.5l.18-.75c-.48.45-1.14.75-2.17.75zm5.19-8.37h-1.56l.3-1.23h1.56l-.3 1.23zm-5.19 7.14c.72 0 1.32-.36 1.71-.87l.72-3.09c-.21-.24-.6-.42-1.11-.42-1.53 0-2.64 1.71-2.64 3.27 0 .78.39 1.11 1.32 1.11z"/>
      </svg>
    ),
  },
  {
    name: "CapCut",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 13.5h-3v3a1.5 1.5 0 01-3 0v-3h-3a1.5 1.5 0 010-3h3v-3a1.5 1.5 0 013 0v3h3a1.5 1.5 0 010 3z"/>
      </svg>
    ),
  },
  {
    name: "Notion",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
      </svg>
    ),
  },
  {
    name: "Google Drive",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M4.433 22.396l2.917-5.05H22.7l-2.917 5.05H4.433zM8.089 0l5.522 9.563H1.3L8.089 0zm-1.06 17.346L1.3 9.563 7.422 8.05l5.717 9.296H7.03z"/>
      </svg>
    ),
  },
  {
    name: "Meta Business",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
      </svg>
    ),
  },
  {
    name: "Lightroom",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M.054 0v24H9.32c4.665 0 8.307-1.246 10.927-3.737 2.503-2.374 3.754-5.72 3.754-10.04 0-4.201-1.269-7.466-3.807-9.795C17.617 1.21 13.893.037 9.014.037L.054 0zm4.21 3.99h4.75c3.12 0 5.54.768 7.258 2.304 1.72 1.535 2.579 3.726 2.579 6.57 0 2.98-.903 5.259-2.709 6.833-1.806 1.574-4.368 2.362-7.687 2.362H4.265V3.99z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    name: "Pinterest",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
];

export default function IntegrationsSection() {
  return (
    <section
      style={{
        background: "var(--parchment)",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            Ferramentas
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            O ecossistema por trás do{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              conteúdo.
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.88rem",
              color: "var(--ink-50)",
              maxWidth: 420,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Plataformas e ferramentas que fazem parte do dia a dia da produção.
          </motion.p>
        </div>

        {/* Grid central com hub */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>

          {/* Hub central — Laura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "var(--ink)",
              border: "2px solid var(--gold)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
              marginBottom: -1,
              boxShadow: "0 0 0 8px rgba(201,169,110,0.08)",
            }}
          >
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#FFFFFF",
              letterSpacing: "0.05em",
              lineHeight: 1.3,
              textAlign: "center",
            }}>
              Laura<br />
              <span style={{ color: "var(--gold)", fontSize: "0.6rem", fontWeight: 400 }}>Camponogara</span>
            </span>
          </motion.div>

          {/* Linha vertical conectora */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, var(--gold), rgba(201,169,110,0.2))",
              transformOrigin: "top",
            }}
          />

          {/* Grid de ferramentas */}
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(10,10,10,0.08)",
                  padding: "20px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  cursor: "default",
                  transition: "box-shadow 0.3s ease",
                  boxShadow: "0 2px 12px rgba(10,10,10,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(201,169,110,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(10,10,10,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,10,0.08)";
                }}
              >
                <div style={{ color: "var(--ink)", opacity: 0.75 }}>
                  {tool.icon}
                </div>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-50)",
                  textAlign: "center",
                }}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          gap: 12px;
          width: 100%;
          border-top: 1px solid rgba(201,169,110,0.25);
          padding-top: 24px;
        }
        @media (max-width: 1024px) {
          .tools-grid { grid-template-columns: repeat(5, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
