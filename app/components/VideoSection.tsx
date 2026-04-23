"use client";

export default function VideoSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Vídeo full screen */}
      <video
        src="/videos/IMG_2301.mov"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Overlay escuro suave */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.25)",
          zIndex: 1,
        }}
      />

      {/* Label centralizado */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ display: "block", width: 28, height: 1, background: "rgba(201,169,110,0.8)" }} />
          Produção de Conteúdo
          <span style={{ display: "block", width: 28, height: 1, background: "rgba(201,169,110,0.8)" }} />
        </p>
      </div>

      {/* Caption rodapé */}
      <p
        style={{
          position: "absolute",
          bottom: 24,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.4)",
          zIndex: 2,
        }}
      >
        Produção realizada em José Ignácio, Uruguai
      </p>
    </section>
  );
}
