"use client";

export default function VideoSection() {
  return (
    <section style={{ background: "#000", width: "100%" }}>
      {/* Label */}
      <div style={{ textAlign: "center", paddingTop: 48, paddingBottom: 24 }}>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--gold)",
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
        }}>
          <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          Produção de Conteúdo
          <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
        </p>
      </div>

      {/* Vídeo na proporção original, largura total */}
      <video
        src="/videos/IMG_2301.mov"
        autoPlay
        muted
        loop
        playsInline
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />

      {/* Caption */}
      <p style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.58rem",
        letterSpacing: "0.12em",
        color: "rgba(255,255,255,0.3)",
        textAlign: "center",
        padding: "16px 0 40px",
      }}>
        Produção realizada em José Ignácio, Uruguai
      </p>
    </section>
  );
}
