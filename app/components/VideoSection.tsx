"use client";

export default function VideoSection() {
  return (
    <section style={{ width: "100%", lineHeight: 0 }}>
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
