"use client";

import { motion } from "framer-motion";

export default function Contato() {
  return (
    <section
      id="contato"
      style={{
        background: "var(--parchment)",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 100,
          alignItems: "start",
        }}
        className="contato-grid"
      >
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="contato-foto"
          style={{ position: "relative" }}
        >
          {/* Moldura decorativa */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              right: -20,
              bottom: -20,
              border: "1px solid rgba(201,169,110,0.2)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              width: "100%",
              maxWidth: 420,
              aspectRatio: "3/4",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio/Fotos/IMG_8883.jpg"
              alt="Laura Camponogara"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            Contato
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 500,
            color: "var(--ink)",
            lineHeight: 1.2,
            marginBottom: 28,
          }}>
            Pronta para transformar a sua marca em{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>referência?</em>
          </h2>

          <div style={{ width: 40, height: 1, background: "var(--gold)", opacity: 0.5, marginBottom: 28 }} />

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "rgba(10,10,10,0.55)",
            lineHeight: 1.9,
            marginBottom: 16,
            fontWeight: 300,
          }}>
            Se você sente que sua marca merece mais reconhecimento, mais desejo e mais
            resultados — você está no lugar certo.
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "rgba(10,10,10,0.55)",
            lineHeight: 1.9,
            marginBottom: 48,
            fontWeight: 300,
          }}>
            Me conta sobre o seu negócio, onde você está hoje e onde quer chegar. A próxima
            sessão pode mudar o jogo para sempre.
          </p>

          {/* Info de contato */}
          <div style={{ marginBottom: 40 }}>
            {[
              { label: "WhatsApp", value: "+55 (51) 98530-9613", href: "https://wa.me/5551985309613" },
              { label: "E-mail", value: "laura.camponogara29@icloud.com", href: "mailto:laura.camponogara29@icloud.com" },
              { label: "Instagram", value: "@laura.camponogara", href: "https://www.instagram.com/laura.camponogara/" },
              { label: "Localização", value: "Porto Alegre, RS · Brasil & Internacional", href: undefined },
            ].map((item) => (
              <div key={item.label} style={{
                display: "flex",
                gap: 20,
                padding: "14px 0",
                borderBottom: "1px solid rgba(10,10,10,0.07)",
                alignItems: "baseline",
              }}>
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(10,10,10,0.35)",
                  minWidth: 90,
                  flexShrink: 0,
                }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "var(--ink)",
                      textDecoration: "none",
                      fontWeight: 400,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "var(--ink)", fontWeight: 400 }}>
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Botões */}
          <div className="contato-buttons" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/5551985309613"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#FFFFFF",
                background: "var(--ink)",
                padding: "14px 28px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C9A96E"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; }}
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/laura.camponogara/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "var(--ink)",
                border: "1px solid rgba(10,10,10,0.25)",
                padding: "14px 28px",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#C9A96E";
                el.style.color = "#C9A96E";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(10,10,10,0.25)";
                el.style.color = "var(--ink)";
              }}
            >
              Instagram
            </a>
            <a
              href="mailto:laura.camponogara29@icloud.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "var(--ink)",
                border: "1px solid rgba(10,10,10,0.25)",
                padding: "14px 28px",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#C9A96E";
                el.style.color = "#C9A96E";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(10,10,10,0.25)";
                el.style.color = "var(--ink)";
              }}
            >
              E-mail
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contato-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          #contato {
            padding: 80px 0 !important;
          }
          #contato > div {
            padding: 0 20px !important;
          }
          .contato-foto {
            display: none !important;
          }
          .contato-grid {
            gap: 0 !important;
          }
        }
        @media (max-width: 480px) {
          #contato {
            padding: 64px 0 !important;
          }
          #contato > div {
            padding: 0 16px !important;
          }
          #contato .contato-buttons {
            flex-direction: column !important;
          }
          #contato .contato-buttons a {
            text-align: center !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
