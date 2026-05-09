"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const IconMuted = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <line x1="23" y1="9" x2="17" y2="15"/>
    <line x1="17" y1="9" x2="23" y2="15"/>
  </svg>
);
const IconUnmuted = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
);

const credentials = [
  { l: "Direção", v: "Criativa & Editorial" },
  { l: "Base", v: "Porto Alegre · RS" },
  { l: "Captação", v: "Brasil + Uruguai" },
];

export default function Manifesto() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  return (
    <section id="sobre" className="manifesto-section">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="manifesto-h2"
        >
          A diferença entre publicar{" "}
          <em>e ser percebida.</em>
        </motion.h2>

        <div className="manifesto-grid">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="manifesto-text"
          >
            <blockquote className="manifesto-pull">
              Não trabalho com conteúdo de volume.
              <br />
              Trabalho com conteúdo que <em>posiciona</em>.
            </blockquote>

            <p className="manifesto-p">
              A maioria das marcas posta. Poucas se posicionam. A diferença está
              na estratégia por trás de cada imagem, legenda e decisão criativa
              e é exatamente isso que entrego em cada projeto.
            </p>

            <p className="manifesto-p">
              Cada cliente recebe uma leitura única da sua marca, do seu público
              e dos canais onde a voz precisa ser ouvida. Sem fórmula pronta.
              Com produção autoral em <strong>Porto Alegre, no Brasil e em
              José Ignácio (Uruguai)</strong>, onde dirijo conteúdo para
              maisons de luxo e referências de moda.
            </p>

            <div className="manifesto-credentials">
              {credentials.map((c) => (
                <div key={c.l} className="manifesto-cred">
                  <p className="manifesto-cred__label">{c.l}</p>
                  <p className="manifesto-cred__value">{c.v}</p>
                </div>
              ))}
            </div>

            <p className="manifesto-filter">
              Não atendo todo mundo. Atendo marcas que entendem que conteúdo é
              ativo de posicionamento, não obrigação de calendário.
            </p>
          </motion.div>

          {/* Visual: vídeo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="manifesto-visual"
          >
            <div className="manifesto-visual__frame" aria-hidden />
            <div className="manifesto-visual__inner">
              <video
                ref={videoRef}
                src="/videos/IMG_2301.mov"
                autoPlay
                muted
                loop
                playsInline
                className="manifesto-visual__video"
              />
              <button
                onClick={toggleMute}
                aria-label={muted ? "Ativar som" : "Desativar som"}
                className="manifesto-visual__sound"
              >
                {muted ? <IconMuted /> : <IconUnmuted />}
              </button>
              <div className="manifesto-visual__caption">
                <span className="manifesto-visual__sig-name">Laura Camponogara</span>
                <span className="manifesto-visual__sig-role">Direção · Estratégia · Captação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .manifesto-section {
          background: var(--parchment);
          padding: clamp(80px, 11vw, 140px) 0 clamp(72px, 10vw, 120px);
          position: relative;
          overflow: hidden;
        }
        .manifesto-kicker {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .manifesto-kicker__rule {
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
        }
        .manifesto-h2 {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.04;
          letter-spacing: -0.025em;
          margin-bottom: clamp(48px, 6vw, 80px);
          max-width: 880px;
        }
        .manifesto-h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .manifesto-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* TEXT */
        .manifesto-text { max-width: 580px; }
        .manifesto-pull {
          margin: 0 0 32px;
          padding-left: 24px;
          border-left: 2px solid var(--gold);
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-style: italic;
          font-size: clamp(1.32rem, 2vw, 1.65rem);
          font-weight: 400;
          line-height: 1.4;
          color: var(--ink);
          letter-spacing: -0.015em;
        }
        .manifesto-pull em {
          font-style: italic;
          color: var(--gold);
        }
        .manifesto-p {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1.08rem;
          color: rgba(10,10,10,0.65);
          line-height: 1.8;
          margin-bottom: 22px;
          font-weight: 300;
          letter-spacing: -0.005em;
        }
        .manifesto-p strong {
          color: var(--ink);
          font-weight: 500;
        }

        /* CREDENTIALS */
        .manifesto-credentials {
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid rgba(10,10,10,0.08);
          display: flex;
          gap: 36px;
          flex-wrap: wrap;
        }
        .manifesto-cred__label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.45);
          margin-bottom: 5px;
        }
        .manifesto-cred__value {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 1.02rem;
          color: var(--ink);
          font-weight: 500;
          letter-spacing: -0.005em;
        }

        /* FILTER (não-cliente) */
        .manifesto-filter {
          margin-top: 32px;
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(10,10,10,0.6);
          letter-spacing: -0.005em;
          padding-top: 24px;
          border-top: 1px dashed rgba(184,149,106,0.4);
        }

        /* VISUAL: vídeo framed editorial */
        .manifesto-visual {
          position: relative;
          width: 100%;
          align-self: stretch;
          min-height: 560px;
        }
        .manifesto-visual__frame {
          position: absolute;
          top: -16px;
          right: -16px;
          width: calc(100% - 32px);
          height: calc(100% - 32px);
          border: 1px solid rgba(201,169,110,0.28);
          pointer-events: none;
          z-index: 0;
        }
        .manifesto-visual__inner {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          aspect-ratio: 4 / 5;
          background: var(--ink);
          overflow: hidden;
          box-shadow: 0 30px 80px -20px rgba(10,10,10,0.4);
        }
        .manifesto-visual__video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .manifesto-visual__sound {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 50%;
          color: rgba(255,255,255,0.85);
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 2;
        }
        .manifesto-visual__sound:hover {
          background: rgba(201,169,110,0.3);
          border-color: rgba(201,169,110,0.6);
          color: #FFFFFF;
        }
        .manifesto-visual__caption {
          position: absolute;
          left: 16px;
          bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          z-index: 2;
        }
        .manifesto-visual__sig-name {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-style: italic;
          font-size: 1.05rem;
          color: #FFFFFF;
          letter-spacing: 0;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }
        .manifesto-visual__sig-role {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.82);
          text-shadow: 0 1px 6px rgba(0,0,0,0.4);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .manifesto-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .manifesto-visual {
            max-width: 480px;
            margin: 0 auto;
            min-height: 0;
          }
        }
        @media (max-width: 768px) {
          .manifesto-section { padding: 72px 0 64px; }
          .manifesto-h2 { margin-bottom: 40px; }
          .manifesto-credentials { gap: 24px; }
          .manifesto-visual { max-width: 100%; }
          .manifesto-visual__frame { top: -10px; right: -10px; width: calc(100% - 20px); height: calc(100% - 20px); }
        }
        @media (max-width: 480px) {
          .manifesto-pull { font-size: 1.15rem; padding-left: 18px; }
          .manifesto-p { font-size: 0.96rem; }
          .manifesto-filter { font-size: 0.92rem; }
        }
      `}</style>
    </section>
  );
}
