"use client";

import Image from "next/image";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { brands } from "./prova/data";

export default function BrandMarquee() {
  const reduced = useReducedMotion();
  // Duplica a lista para o loop contínuo sem emenda visível.
  const loop = [...brands, ...brands];

  return (
    <section className="marquee" aria-label="Marcas atendidas">
      <p className="marquee__label">Marcas atendidas</p>
      <div className="marquee__viewport">
        <div className="marquee__track" data-reduced={reduced ? "true" : "false"}>
          {loop.map((b, i) => (
            <span className="marquee__item" key={`${b.name}-${i}`} aria-hidden={i >= brands.length}>
              {b.logo ? (
                <Image
                  src={b.logo}
                  alt={b.name}
                  width={160}
                  height={64}
                  className="marquee__logo"
                />
              ) : (
                <span className="marquee__word" style={{ fontStyle: b.style }}>
                  {b.name}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .marquee {
          /* Normalização por altura: TODAS as logos têm exatamente a mesma
             altura (--logo-h), largura automática preservando a proporção.
             --logo-max-w só impede que wordmarks muito largas estourem o
             layout no mobile. Resultado: mesma altura/peso em qualquer tela. */
          --logo-h: clamp(26px, 3.4vw, 38px);
          --logo-max-w: clamp(132px, 22vw, 196px);
          --logo-box-h: clamp(40px, 5vw, 56px);
          background:
            linear-gradient(180deg, var(--gold-light) 0%, transparent 60%),
            var(--paper, #F7F3EC);
          padding: clamp(28px, 3.4vw, 40px) 0;
          border-top: 1px solid var(--gold-mid);
          border-bottom: 1px solid var(--gold-mid);
          overflow: hidden;
        }
        .marquee__label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: var(--text-mono-kicker);
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold-text);
          text-align: center;
          margin-bottom: clamp(20px, 2.4vw, 30px);
        }
        .marquee__viewport {
          position: relative;
          -webkit-mask-image: linear-gradient(
            to right, transparent, #000 12%, #000 88%, transparent);
          mask-image: linear-gradient(
            to right, transparent, #000 12%, #000 88%, transparent);
        }
        .marquee__track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: clamp(48px, 7vw, 104px);
          animation: marquee-scroll 38s linear infinite;
        }
        .marquee__track:hover { animation-play-state: paused; }
        .marquee__track[data-reduced="true"] {
          animation: none;
          flex-wrap: wrap;
          width: 100%;
          justify-content: center;
          gap: clamp(28px, 5vw, 56px);
        }
        .marquee__item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          height: var(--logo-box-h);
        }
        .marquee__logo {
          height: var(--logo-h);
          width: auto;
          max-width: var(--logo-max-w);
          object-fit: contain;
          opacity: 1;
          transition: transform var(--duration-base) ease;
        }
        .marquee__item:hover .marquee__logo {
          transform: scale(1.06);
        }
        .marquee__word {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          /* calibrado para que a altura do texto iguale a das logos em imagem
             (var(--logo-h)) tanto no mobile quanto no desktop */
          font-size: clamp(1.55rem, 4.5vw, 2.3rem);
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.005em;
          color: var(--ink-80);
          white-space: nowrap;
          transition: color var(--duration-base) ease;
        }
        .marquee__item:hover .marquee__word { color: var(--gold-text); }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee__track { animation: none; }
        }
      `}</style>
    </section>
  );
}
