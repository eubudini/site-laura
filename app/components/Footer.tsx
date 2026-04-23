"use client";

const navLinks = [
  ["#hero", "Início"],
  ["#sobre", "Sobre"],
  ["#portfolio", "Portfólio"],
  ["#servicos", "Serviços"],
  ["#planos", "Planos"],
  ["#contato", "Contato"],
];

const socialIcons = [
  {
    href: "https://www.instagram.com/laura.camponogara/",
    label: "Instagram",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--obsidian-3)",
      color: "#FFFFFF",
      borderTop: "1px solid rgba(201,169,110,0.1)",
    }}>

      {/* Desktop layout */}
      <div className="footer-desktop">
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "48px 32px 36px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          {/* Brand */}
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 500, marginBottom: 10 }}>
              Laura Camponogara
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginBottom: 24, lineHeight: 1.7, maxWidth: 280 }}>
              Estratégia de Conteúdo · Porto Alegre, RS · Atendimento em todo o Brasil
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socialIcons.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--gold)"; el.style.borderColor = "rgba(201,169,110,0.4)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(255,255,255,0.5)"; el.style.borderColor = "rgba(255,255,255,0.12)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18 }}>
              Navegação
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map(([href, label]) => (
                <a key={href} href={href}
                  style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 300, transition: "color 0.2s ease" }}
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
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18 }}>
              Contato
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "https://wa.me/5551985309613", label: "(51) 98530-9613" },
                { href: "https://www.instagram.com/laura.camponogara/", label: "@laura.camponogara" },
              ].map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 300, transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            © 2026 Laura Camponogara. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            Porto Alegre, RS · Atendimento para todo o Brasil
          </p>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="footer-mobile" style={{ padding: "28px 20px 20px" }}>
        {/* Linha 1: nome + ícones */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, color: "#FFFFFF" }}>
            Laura Camponogara
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {socialIcons.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Linha 2: nav em grid 2 colunas */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", marginBottom: 16 }}>
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 300 }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Linha 3: contato inline */}
        <div style={{ display: "flex", gap: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 16 }}>
          <a href="https://wa.me/5551985309613" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.04em" }}
          >
            (51) 98530-9613
          </a>
          <a href="https://www.instagram.com/laura.camponogara/" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.04em" }}
          >
            @laura.camponogara
          </a>
        </div>

        {/* Copyright */}
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.04em" }}>
          © 2026 Laura Camponogara
        </p>
      </div>

      <style>{`
        .footer-desktop { display: block; }
        .footer-mobile  { display: none;  }
        @media (max-width: 768px) {
          .footer-desktop { display: none  !important; }
          .footer-mobile  { display: block !important; }
        }
      `}</style>
    </footer>
  );
}
