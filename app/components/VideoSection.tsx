"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section
      style={{
        background: "var(--obsidian)",
        padding: "0 0 80px",
      }}
    >
      {/* Label acima do vídeo */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          paddingTop: 80,
          paddingBottom: 40,
        }}
      >
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--gold)",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          Produção de Conteúdo
          <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
        </p>
      </motion.div>

      {/* Vídeo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            background: "#000",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* Linha dourada topo */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: "linear-gradient(to right, transparent, rgba(201,169,110,0.5), transparent)",
              zIndex: 2,
            }}
          />
          <video
            src="/videos/IMG_2301.mov"
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Produção realizada em José Ignácio, Uruguai
        </motion.p>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #video-section > div:last-child {
            padding: 0 20px !important;
          }
        }
        @media (max-width: 480px) {
          #video-section > div:last-child {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
