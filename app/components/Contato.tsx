"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Kicker, CTA, EditorialFrame } from "./_base";

export default function Contato() {
  return (
    <section id="contato" className="section-pad-y-lg contato-section">
      <div className="contato-grid container-x">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="contato-foto"
        >
          <EditorialFrame offset={20} position="bl">
            <div className="contato-foto__inner">
              <Image
                src="/portfolio/Fotos/IMG_8883.jpg"
                alt="Laura Camponogara"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                className="contato-foto__img"
              />
            </div>
          </EditorialFrame>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Kicker>Contato</Kicker>

          <h2 className="contato-h2">
            Pronta para transformar a sua marca em <em>referência?</em>
          </h2>

          <div className="contato-rule" aria-hidden />

          <p className="contato-p">
            Se você sente que sua marca merece mais reconhecimento, mais desejo e mais
            resultados, você está no lugar certo.
          </p>
          <p className="contato-p contato-p--last">
            Me conta sobre o seu negócio, onde você está hoje e onde quer chegar. A próxima
            sessão pode mudar o jogo para sempre.
          </p>

          {/* Info de contato */}
          <div className="contato-info">
            {[
              { label: "WhatsApp", value: "+55 (51) 98530-9613", href: "https://wa.me/5551985309613" },
              { label: "E-mail", value: "laura.camponogara29@icloud.com", href: "mailto:laura.camponogara29@icloud.com" },
              { label: "Instagram", value: "@laura.camponogara", href: "https://www.instagram.com/laura.camponogara/" },
              { label: "Localização", value: "Porto Alegre, RS · Presencial na região e remoto para todo o Brasil", href: undefined as string | undefined },
            ].map((item) => (
              <div key={item.label} className="contato-row">
                <p className="contato-row__label">{item.label}</p>
                {item.href ? (
                  <a
                    className="contato-row__link"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="contato-row__text">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Botões */}
          <div className="contato-buttons">
            <CTA href="https://wa.me/5551985309613" target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
              WhatsApp
            </CTA>
            <CTA href="https://www.instagram.com/laura.camponogara/" target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
              Instagram
            </CTA>
            <CTA href="mailto:laura.camponogara29@icloud.com" variant="secondary" size="sm">
              E-mail
            </CTA>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contato-section { background: var(--parchment); }
        .contato-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 100px;
          align-items: start;
        }
        .contato-foto { position: relative; }
        .contato-foto__inner {
          width: 100%;
          max-width: 420px;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          position: relative;
          background: var(--parchment-dark);
        }
        .contato-foto__img {
          object-fit: cover;
          object-position: center top;
        }

        .contato-h2 {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 500;
          color: var(--ink);
          line-height: 1.2;
          margin-top: var(--space-5);
          margin-bottom: 28px;
        }
        .contato-h2 em {
          font-style: italic;
          color: var(--gold);
        }
        .contato-rule {
          width: 40px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
          margin-bottom: 28px;
        }
        .contato-p {
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 1rem;
          color: rgba(10,10,10,0.62);
          line-height: 1.9;
          margin-bottom: 16px;
          font-weight: 300;
        }
        .contato-p--last { margin-bottom: 48px; }

        .contato-info { margin-bottom: 40px; }
        .contato-row {
          display: flex;
          gap: 20px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(10,10,10,0.07);
          align-items: baseline;
        }
        .contato-row__label {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.55);
          min-width: 90px;
          flex-shrink: 0;
        }
        .contato-row__link {
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 0.88rem;
          color: var(--ink);
          text-decoration: none;
          font-weight: 400;
          transition: color var(--duration-fast) ease;
        }
        .contato-row__link:hover { color: var(--gold); }
        .contato-row__text {
          font-family: var(--font-inter-tight), 'Inter Tight', sans-serif;
          font-size: 0.88rem;
          color: var(--ink);
          font-weight: 400;
        }

        .contato-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .contato-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          #contato { padding: 80px 0 !important; }
          .contato-foto { display: none !important; }
          .contato-grid { gap: 0 !important; }
        }
        @media (max-width: 480px) {
          #contato { padding: 64px 0 !important; }
          .contato-buttons { flex-direction: column; }
          .contato-buttons > * { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
