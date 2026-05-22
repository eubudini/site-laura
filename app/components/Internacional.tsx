"use client";

import Image from "next/image";

export default function Internacional() {
  return (
    <section id="internacional" className="intl">
      <div className="intl__bg-text" aria-hidden="true">
        JOSÉ IGNÁCIO
      </div>

      {/* Avião animado cruzando a seção */}
      <div className="intl__flight" aria-hidden="true">
        <div className="intl__flight-trail" />
        <svg
          className="intl__plane"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="var(--gold-soft)"
        >
          <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
        </svg>
      </div>

      <div className="container-x intl__container">
        <div className="intl__content">
          <p className="intl__eyebrow">
            <span className="intl__eyebrow-rule" aria-hidden />
            Atuação Internacional
          </p>
          <h2 className="intl__title">Presença além das fronteiras</h2>
          <p className="intl__desc">
            Realizei produções de conteúdo presencial no Uruguai, em especial
            na região de José Ignácio, um dos destinos mais exclusivos da
            América do Sul e referência mundial de moda, lifestyle e turismo
            de luxo.
          </p>
          <p className="intl__desc">
            Uma experiência que amplia meu olhar criativo e conecta marcas a um
            universo de sofisticação, autenticidade e alcance internacional.
          </p>

          <div className="intl__locations">
            <div className="intl__location">
              <span className="intl__flag">🇧🇷</span>
              <div>
                <strong>Porto Alegre</strong>
                <span>Brasil</span>
              </div>
            </div>
            <div className="intl__arrow" aria-hidden>
              <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
                <line x1="0" y1="8" x2="42" y2="8" stroke="var(--gold-soft)" strokeWidth="1.2" strokeDasharray="4 3" />
                <polyline points="36,3 45,8 36,13" stroke="var(--gold-soft)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="intl__location">
              <span className="intl__flag">🇺🇾</span>
              <div>
                <strong>José Ignácio</strong>
                <span>Uruguai</span>
              </div>
            </div>
          </div>

          <div className="intl__badge">
            Destino de luxo &nbsp;·&nbsp; América do Sul &nbsp;·&nbsp; Referência global
          </div>
        </div>

        <div className="intl__photos">
          <figure className="intl__photo intl__photo--main">
            <Image
              src="/internacional-2.jpg"
              alt="Produção de conteúdo no Uruguai"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="intl__photo-img"
            />
            <figcaption className="intl__photo-tag">Zaira Nara · @zaira.nara</figcaption>
          </figure>
          <figure className="intl__photo intl__photo--top">
            <Image
              src="/internacional-1.jpg"
              alt="Camila Coutinho"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="intl__photo-img"
            />
            <figcaption className="intl__photo-tag">Camila Coutinho · @camilacoutinho</figcaption>
          </figure>
        </div>
      </div>

      <style>{`
        .intl {
          background: #111010;
          padding: clamp(80px, 11vw, 120px) 0;
          position: relative;
          overflow: hidden;
          color: #FFFFFF;
        }
        .intl::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent 0%, var(--gold-soft) 30%, var(--gold-soft) 70%, transparent 100%);
          opacity: 0.5;
        }
        .intl__bg-text {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(5rem, 14vw, 13rem);
          font-weight: 700;
          color: rgba(255,255,255,0.025);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.25em;
          user-select: none;
          line-height: 1;
        }

        /* Avião animado */
        .intl__flight {
          position: absolute;
          top: 52px;
          left: -140px;
          display: flex;
          align-items: center;
          animation: intl-planefly 11s linear infinite;
          animation-delay: 1.5s;
          opacity: 0;
          z-index: 2;
        }
        @keyframes intl-planefly {
          0%   { left: -140px; opacity: 0; }
          4%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { left: calc(100vw + 140px); opacity: 0; }
        }
        .intl__plane {
          filter: drop-shadow(0 0 10px rgba(201,169,110,0.5));
          transform: rotate(-5deg);
          flex-shrink: 0;
        }
        .intl__flight-trail {
          width: 160px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,169,110,0.5));
          margin-right: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
          .intl__flight { animation: none; opacity: 0; }
        }

        .intl__container {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .intl__eyebrow {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          font-weight: 600;
          color: var(--gold-soft);
          margin-bottom: 20px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .intl__eyebrow-rule {
          display: block;
          width: 28px;
          height: 1px;
          background: var(--gold-soft);
        }
        .intl__title {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 24px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .intl__desc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.9;
          margin-bottom: 16px;
          max-width: 460px;
          font-weight: 300;
        }

        .intl__locations {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 36px 0 28px;
          flex-wrap: wrap;
        }
        .intl__location {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .intl__flag { font-size: 1.5rem; line-height: 1; }
        .intl__location strong {
          display: block;
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 0.98rem;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.3;
        }
        .intl__location span {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .intl__arrow { flex-shrink: 0; opacity: 0.85; }

        .intl__badge {
          display: inline-block;
          padding: 8px 18px;
          border: 1px solid rgba(201,169,110,0.35);
          border-radius: 40px;
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.72rem;
          color: rgba(201,169,110,0.9);
          letter-spacing: 0.06em;
          background: rgba(201,169,110,0.05);
        }

        .intl__photos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: start;
          width: 100%;
          min-width: 0;
        }
        .intl__photo {
          position: relative;
          margin: 0;
          height: 480px;
          border-radius: 14px;
          overflow: hidden;
          background: #1e1e1e;
        }
        .intl__photo--main { box-shadow: 0 24px 64px rgba(0,0,0,0.55); }
        .intl__photo--top { box-shadow: 0 16px 48px rgba(0,0,0,0.45); }
        .intl__photo-img {
          object-fit: cover;
          transition: transform 0.7s var(--ease-editorial);
        }
        .intl__photo:hover .intl__photo-img { transform: scale(1.05); }
        .intl__photo-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(17,16,16,0.82);
          color: var(--gold-soft);
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.55rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          white-space: nowrap;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 20px;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(201,169,110,0.2);
        }

        @media (max-width: 1024px) {
          .intl__container { grid-template-columns: 1fr; gap: 52px; }
          .intl__photos { max-width: 560px; margin: 0 auto; }
          .intl__desc { max-width: 100%; }
        }
        @media (max-width: 768px) {
          .intl__photos { grid-template-columns: 1fr; }
          .intl__photo { height: 340px; }
          .intl__bg-text { font-size: 3.5rem; }
        }
      `}</style>
    </section>
  );
}
