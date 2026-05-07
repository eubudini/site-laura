"use client";

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const sections = [
  {
    title: "Navegação",
    links: [
      { name: "Início", href: "#hero" },
      { name: "Manifesto", href: "#sobre" },
      { name: "Método", href: "#servicos" },
      { name: "Resultados", href: "#resultados" },
      { name: "Portfólio", href: "#portfolio" },
      { name: "Investimento", href: "#planos" },
    ],
  },
  {
    title: "Atuação",
    links: [
      { name: "Estratégia & Direção", href: "#servicos" },
      { name: "Captação & Produção", href: "#servicos" },
      { name: "Distribuição & Tráfego", href: "#servicos" },
      { name: "Cobertura presencial", href: "#servicos" },
    ],
  },
  {
    title: "Contato",
    links: [
      { name: "(51) 98530-9613", href: "https://wa.me/5551985309613" },
      { name: "@laura.camponogara", href: "https://www.instagram.com/laura.camponogara/" },
      { name: "Porto Alegre, RS", href: "#contato" },
    ],
  },
];

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/laura.camponogara/", label: "Instagram" },
  { icon: <WhatsAppIcon />, href: "https://wa.me/5551985309613", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--obsidian-3)",
        borderTop: "1px solid rgba(184,149,106,0.12)",
        paddingBlock: "clamp(56px, 7vw, 88px)",
      }}
    >
      <div className="container-x footer-grid">
        {/* Brand side */}
        <div className="footer-brand">
          <p
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "1.4rem",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              marginBottom: 18,
            }}
          >
            Laura Camponogara
          </p>
          <p
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "0.86rem",
              color: "rgba(255,255,255,0.45)",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: 280,
              marginBottom: 24,
            }}
          >
            Estratégia de conteúdo e gestão de redes sociais para marcas com identidade.
          </p>
          <div className="footer-social">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: 38,
                  height: 38,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  minHeight: "auto",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--gold-soft)";
                  el.style.borderColor = "rgba(184,149,106,0.45)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "rgba(255,255,255,0.5)";
                  el.style.borderColor = "rgba(255,255,255,0.14)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="footer-sections">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 18,
                }}
              >
                {section.title}
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0 }}>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: "0.86rem",
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 300,
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        minHeight: "auto",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-x" style={{ marginTop: 56 }}>
        <div className="footer-bottom">
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.06em",
            }}
          >
            © 2026 Laura Camponogara. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.06em",
            }}
          >
            Porto Alegre, RS · Atendimento Brasil
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 64px;
          align-items: start;
        }
        .footer-brand { display: flex; flex-direction: column; }
        .footer-social { display: flex; gap: 10px; }
        .footer-sections {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-sections {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 10px !important;
          }
          .footer-brand { align-items: flex-start; }
        }
        @media (max-width: 420px) {
          .footer-sections { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
