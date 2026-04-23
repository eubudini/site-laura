"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--obsidian-3)",
        color: "#FFFFFF",
        padding: "60px 0 0",
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        className="footer-top"
      >
        {/* Brand */}
        <div>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 500,
            marginBottom: 10,
          }}>
            Laura Camponogara
          </p>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 24,
            lineHeight: 1.7,
            maxWidth: 280,
          }}>
            Estratégia de Conteúdo · Porto Alegre, RS · Atuação Internacional
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              {
                href: "https://www.instagram.com/laura.camponogara/",
                label: "Instagram",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                ),
              },
              {
                href: "https://wa.me/5551985309613",
                label: "WhatsApp",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--gold)";
                  el.style.borderColor = "rgba(201,169,110,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "rgba(255,255,255,0.5)";
                  el.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <div>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: 20,
          }}>
            Navegação
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              ["#hero", "Início"],
              ["#sobre", "Sobre"],
              ["#portfolio", "Portfólio"],
              ["#servicos", "Serviços"],
              ["#planos", "Planos"],
              ["#contato", "Contato"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontWeight: 300,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contato */}
        <div>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: 20,
          }}>
            Contato
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="https://wa.me/5551985309613" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s ease", fontWeight: 300 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
            >
              (51) 98530-9613
            </a>
            <a href="https://www.instagram.com/laura.camponogara/" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s ease", fontWeight: 300 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
            >
              @laura.camponogara
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="footer-bottom"
      >
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.62rem",
          color: "rgba(255,255,255,0.22)",
          letterSpacing: "0.05em",
        }}>
          © 2026 Laura Camponogara. Todos os direitos reservados.
        </p>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.62rem",
          color: "rgba(255,255,255,0.22)",
          letterSpacing: "0.05em",
        }}>
          Porto Alegre, RS · Atuação Internacional
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
            padding: 0 20px 40px !important;
          }
          .footer-top > *:first-child {
            grid-column: 1 / -1 !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 8px !important;
            text-align: center !important;
            padding: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-top {
            grid-template-columns: 1fr !important;
            padding: 0 16px 36px !important;
          }
          .footer-bottom {
            padding: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
}
