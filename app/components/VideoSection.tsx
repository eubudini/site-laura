"use client";

import { useRef, useState } from "react";

const IconMuted = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <line x1="23" y1="9" x2="17" y2="15"/>
    <line x1="17" y1="9" x2="23" y2="15"/>
  </svg>
);

const IconUnmuted = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
);

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  return (
    <section style={{ width: "100%", lineHeight: 0, position: "relative" }}>
      <video
        ref={videoRef}
        src="/videos/IMG_2301.mov"
        autoPlay
        muted
        loop
        playsInline
        style={{ display: "block", width: "100%", height: "auto" }}
      />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Ativar som" : "Desativar som"}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%",
          color: "rgba(255,255,255,0.8)",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "rgba(201,169,110,0.25)";
          el.style.borderColor = "rgba(201,169,110,0.5)";
          el.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "rgba(0,0,0,0.45)";
          el.style.borderColor = "rgba(255,255,255,0.15)";
          el.style.color = "rgba(255,255,255,0.8)";
        }}
      >
        {muted ? <IconMuted /> : <IconUnmuted />}
      </button>
    </section>
  );
}
