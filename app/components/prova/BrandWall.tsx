"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { brands } from "./data";

function initials(name: string) {
  return name
    .replace(/[.]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function BrandWall() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="prova-brands"
    >
      <p className="prova-brands__label">
        <span className="prova-brands__rule" aria-hidden />
        Marcas atendidas
      </p>
      <div className="prova-brands__list">
        {brands.map((b, i) => {
          const inner = (
            <>
              <span className="prova-brand__avatar">
                {b.logo ? (
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    sizes="72px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span className="prova-brand__initials">{initials(b.name)}</span>
                )}
              </span>
              <span className="prova-brand__name" style={{ fontStyle: b.style }}>
                {b.name}
              </span>
            </>
          );
          return (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="prova-brand"
            >
              {b.handle ? (
                <a
                  href={`https://www.instagram.com/${b.handle}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prova-brand__link"
                  aria-label={`Instagram de ${b.name}`}
                >
                  {inner}
                </a>
              ) : (
                <span className="prova-brand__link">{inner}</span>
              )}
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .prova-brands {
          margin-top: clamp(56px, 7vw, 80px);
          padding-top: clamp(36px, 5vw, 52px);
          border-top: 1px solid rgba(10,10,10,0.06);
          text-align: center;
        }
        .prova-brands__label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: clamp(28px, 4vw, 40px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .prova-brands__rule {
          display: block;
          width: 22px;
          height: 1px;
          background: var(--gold);
        }
        .prova-brands__list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: clamp(20px, 3vw, 40px);
        }
        .prova-brand__link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          width: 96px;
        }
        .prova-brand__avatar {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10,10,10,0.04);
          box-shadow: 0 0 0 1px rgba(10,10,10,0.08);
          filter: grayscale(1) contrast(0.95);
          transition: filter var(--duration-base) ease,
            box-shadow var(--duration-base) ease,
            transform var(--duration-base) var(--ease-editorial);
        }
        .prova-brand__initials {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 1.15rem;
          font-weight: 500;
          color: rgba(10,10,10,0.55);
          letter-spacing: 0.02em;
        }
        .prova-brand__name {
          font-family: var(--font-bodoni-moda), 'Bodoni Moda', serif;
          font-size: 0.92rem;
          font-weight: 400;
          color: rgba(10,10,10,0.6);
          letter-spacing: -0.005em;
          line-height: 1.25;
          transition: color var(--duration-base) ease;
        }
        .prova-brand__link:hover .prova-brand__avatar {
          filter: grayscale(0) contrast(1);
          box-shadow: 0 0 0 1px var(--gold), 0 8px 22px rgba(184,149,106,0.22);
          transform: translateY(-3px);
        }
        .prova-brand__link:hover .prova-brand__name { color: var(--gold); }

        @media (max-width: 560px) {
          .prova-brands__list { gap: 18px 14px; }
          .prova-brand__link { width: 84px; }
          .prova-brand__avatar { width: 60px; height: 60px; }
          .prova-brand__name { font-size: 0.82rem; }
        }
      `}</style>
    </motion.div>
  );
}
