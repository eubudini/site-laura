"use client";

export default function VideoSection() {
  return (
    <section style={{ background: "var(--obsidian)", width: "100%" }}>
      {/* Label */}
      <div style={{ textAlign: "center", paddingTop: 48, paddingBottom: 20 }}>
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

    </section>
  );
}
