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
                  width={120}
                  height={40}
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
          background: var(--paper, #F7F3EC);
          padding: clamp(28px, 4vw, 44px) 0;
          border-top: 1px solid rgba(10,10,10,0.06);
          border-bottom: 1px solid rgba(10,10,10,0.06);
          overflow: hidden;
        }
        .marquee__label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.66rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          text-align: center;
          margin-bottom: clamp(18px, 2.6vw, 28px);
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
          flex-shrink: 0;
        }
        .marquee__logo {
          height: clamp(26px, 3.4vw, 36px);
          width: auto;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.6;
          transition: opacity var(--duration-base) ease,
            filter var(--duration-base) ease;
        }
        .marquee__item:hover .marquee__logo {
          filter: grayscale(0);
          opacity: 1;
        }
        .marquee__word {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: clamp(1.05rem, 1.7vw, 1.5rem);
          font-weight: 400;
          letter-spacing: -0.005em;
          color: rgba(10,10,10,0.42);
          white-space: nowrap;
          transition: color var(--duration-base) ease;
        }
        .marquee__item:hover .marquee__word { color: var(--gold); }

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
