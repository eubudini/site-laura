"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background ornamentos */}
      <div className="hero-bg-1" aria-hidden />
      <div className="hero-bg-2" aria-hidden />

      <div className="hero-grid">
        {/* KICKER */}
        <motion.p {...fadeUp(0.1)} className="hero-kicker">
          <span className="hero-kicker__rule" aria-hidden />
          Estratégia de Conteúdo · Posicionamento Digital
        </motion.p>

        {/* H1 */}
        <motion.h1 {...fadeUp(0.2)} className="hero-h1 serif-display">
          Sua marca passou da hora{" "}
          <em>de ser desejada.</em>
        </motion.h1>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="hero-photo"
        >
          <div className="hero-photo__frame" aria-hidden />
          <div className="hero-photo__inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/laura-hero.jpg"
              alt="Laura Camponogara, Estrategista de Conteúdo"
              className="hero-photo__img"
            />
            {/* Signature overlay (mobile) */}
            <div className="hero-photo__signature" aria-hidden>
              <span className="hero-photo__sig-name">Laura Camponogara</span>
              <span className="hero-photo__sig-role">Estrategista de Conteúdo</span>
            </div>
          </div>
        </motion.div>

        {/* DESCRIÇÃO */}
        <motion.p {...fadeUp(0.3)} className="hero-desc">
          Crio estratégias de conteúdo que transformam perfis comuns em
          referências do segmento, com direção criativa, posicionamento e
          produção que para o scroll.
        </motion.p>

        {/* TRUST BADGE */}
        <motion.div {...fadeUp(0.35)} className="hero-trust">
          <div className="hero-trust__avatars">
            {["MC", "MP", "AM"].map((i, idx) => (
              <div
                key={i}
                className="hero-trust__avatar"
                style={{
                  background: ["linear-gradient(135deg,#1a1a1a,#3a3024)", "linear-gradient(135deg,#c9a96e,#8a7146)", "linear-gradient(135deg,#2c2520,#5a4830)"][idx],
                  marginLeft: idx === 0 ? 0 : -8,
                }}
              >
                {i}
              </div>
            ))}
          </div>
          <span className="hero-trust__label">
            <strong>+14 marcas</strong> que cresceram em média{" "}
            <strong className="hero-trust__pct">+418%</strong>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="hero-ctas">
          <a href="#resultados" className="hero-cta hero-cta--primary">
            Ver resultados reais
          </a>
          <a href="#contato" className="hero-cta hero-cta--secondary">
            Quero isso para a minha marca
          </a>
        </motion.div>

        {/* LOCATION */}
        <motion.p {...fadeUp(0.5)} className="hero-location">
          Porto Alegre, RS · Presencial na região · Atendimento remoto para todo o Brasil
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hero-scroll"
      >
        <span className="hero-scroll__label">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="hero-scroll__line"
        />
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          background: var(--parchment);
          display: flex;
          align-items: center;
          padding-top: 68px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-1 {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          background: linear-gradient(135deg, rgba(201,169,110,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-bg-2 {
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Desktop: grid 2-col com áreas */
        .hero-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 80px;
          row-gap: 0;
          align-items: start;
          align-content: center;
          width: 100%;
          grid-template-areas:
            "kicker   photo"
            "h1       photo"
            "desc     photo"
            "trust    photo"
            "ctas     photo"
            "location photo";
        }
        .hero-kicker   { grid-area: kicker; }
        .hero-h1       { grid-area: h1; }
        .hero-photo    { grid-area: photo; align-self: center; }
        .hero-desc     { grid-area: desc; }
        .hero-trust    { grid-area: trust; }
        .hero-ctas     { grid-area: ctas; }
        .hero-location { grid-area: location; }

        /* KICKER */
        .hero-kicker {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-kicker__rule {
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
          opacity: 0.7;
        }

        /* H1 */
        .hero-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.4rem, 6vw, 5rem);
          font-weight: 400;
          line-height: 1.02;
          color: var(--ink);
          margin-bottom: 28px;
          letter-spacing: -0.035em;
        }
        .hero-h1 em {
          font-style: italic;
          font-weight: 400;
          color: var(--gold);
        }

        /* DESC */
        .hero-desc {
          font-family: 'Inter Tight', sans-serif;
          font-size: clamp(1.08rem, 1.7vw, 1.28rem);
          color: rgba(10,10,10,0.65);
          line-height: 1.72;
          max-width: 540px;
          margin-bottom: 36px;
          font-weight: 300;
          letter-spacing: -0.005em;
        }

        /* TRUST */
        .hero-trust {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 8px 18px 8px 8px;
          border: 1px solid rgba(10,10,10,0.10);
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          margin-bottom: 32px;
          align-self: flex-start;
          width: fit-content;
        }
        .hero-trust__avatars {
          display: flex;
          margin-left: -2px;
        }
        .hero-trust__avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid var(--parchment);
          font-family: 'Fraunces', serif;
          font-size: 0.62rem;
          color: #f5e6c8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
        }
        .hero-trust__label {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.82rem;
          color: rgba(10,10,10,0.72);
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        .hero-trust__label strong {
          color: var(--ink);
          font-weight: 600;
        }
        .hero-trust__pct {
          color: var(--gold) !important;
        }

        /* CTAs */
        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .hero-cta {
          font-family: 'Inter Tight', sans-serif;
          font-size: 0.94rem;
          letter-spacing: 0.12em;
          font-weight: 500;
          text-transform: uppercase;
          padding: 17px 36px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .hero-cta--primary {
          color: #FFFFFF;
          background: var(--ink);
        }
        .hero-cta--primary:hover { background: var(--gold-soft); }
        .hero-cta--secondary {
          color: var(--ink);
          border: 1px solid rgba(10,10,10,0.3);
        }
        .hero-cta--secondary:hover {
          border-color: var(--gold-soft);
          color: var(--gold-soft);
        }

        /* LOCATION */
        .hero-location {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          color: rgba(10,10,10,0.45);
          line-height: 1.6;
        }

        /* PHOTO */
        .hero-photo {
          position: relative;
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .hero-photo__frame {
          position: absolute;
          top: -20px;
          right: -20px;
          width: calc(100% - 40px);
          height: calc(100% - 40px);
          border: 1px solid rgba(201,169,110,0.25);
          pointer-events: none;
          z-index: 0;
        }
        .hero-photo__inner {
          width: 100%;
          max-width: 460px;
          aspect-ratio: 3 / 4;
          background: var(--parchment-dark);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .hero-photo__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .hero-photo__signature {
          display: none;
        }

        /* SCROLL INDICATOR */
        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .hero-scroll__label {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(10,10,10,0.3);
          text-transform: uppercase;
        }
        .hero-scroll__line {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, rgba(10,10,10,0.3), transparent);
        }

        /* ═══════════════════════════════════════════════
           MOBILE: Reordering editorial vertical
           1. KICKER
           2. H1
           3. PHOTO (com signature embaixo)
           4. DESC
           5. TRUST
           6. CTAs
           7. LOCATION
           ═══════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            grid-template-areas: none;
            row-gap: 0;
            column-gap: 0;
            text-align: left;
            align-items: stretch;
          }
          .hero-kicker, .hero-h1, .hero-photo, .hero-desc,
          .hero-trust, .hero-ctas, .hero-location {
            grid-area: unset;
            grid-column: 1;
          }
          .hero-kicker   { order: 1; margin-bottom: 18px; justify-content: flex-start; }
          .hero-h1       { order: 2; margin-bottom: 28px; font-size: clamp(2.1rem, 9vw, 3.2rem); }
          .hero-photo    { order: 3; margin-bottom: 32px; align-self: center; }
          .hero-desc     { order: 4; margin-bottom: 28px; max-width: 100%; }
          .hero-trust    { order: 5; margin-bottom: 28px; align-self: flex-start; }
          .hero-ctas     { order: 6; margin-bottom: 24px; }
          .hero-location { order: 7; }

          /* Foto editorial: menor + signature embaixo */
          .hero-photo {
            justify-content: center;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-photo__frame {
            top: -12px;
            right: -12px;
            width: calc(100% - 24px);
            height: calc(100% - 24px);
          }
          .hero-photo__inner {
            max-width: 100%;
            aspect-ratio: 4 / 5;
          }
          .hero-photo__signature {
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: -42px;
            left: 0;
            right: 0;
            text-align: center;
            gap: 3px;
            z-index: 2;
          }
          .hero-photo__sig-name {
            font-family: 'Fraunces', serif;
            font-style: italic;
            font-size: 0.95rem;
            color: var(--ink);
            letter-spacing: 0.005em;
          }
          .hero-photo__sig-role {
            font-family: 'DM Mono', monospace;
            font-size: 0.55rem;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--gold);
          }
          .hero-photo {
            margin-bottom: 80px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-grid { padding: 56px 22px 48px; }
          .hero-cta {
            width: 100%;
            font-size: 0.82rem;
            padding: 14px 24px;
          }
          .hero-ctas { flex-direction: column; gap: 10px; }
          .hero-trust { padding: 7px 14px 7px 7px; }
          .hero-trust__label { font-size: 0.68rem; }
          .hero-scroll { display: none; }
        }

        @media (max-width: 480px) {
          .hero-grid { padding: 44px 18px 40px; }
          .hero-photo { max-width: 280px; }
          .hero-h1 { font-size: clamp(1.95rem, 9.5vw, 2.6rem); margin-bottom: 22px; }
          .hero-desc { font-size: 0.96rem; margin-bottom: 24px; }
          .hero-kicker { font-size: 0.65rem; letter-spacing: 0.28em; }
          .hero-location { font-size: 0.66rem; line-height: 1.7; }
        }
      `}</style>
    </section>
  );
}
