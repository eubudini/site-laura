import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  instaLink: 'https://www.instagram.com/laura.camponogara/',
  whatsappLink: 'https://wa.me/5551985309613',
  nav: {
    inicio: '#hero',
    sobre: '#sobre',
    portfolio: '#portfolio',
    servicos: '#servicos',
    planos: '#planos',
    contato: '#contato',
  },
  services: {
    captacao: '#servicos',
    gestao: '#servicos',
    estrategia: '#servicos',
    planejamento: '#servicos',
  },
  contact: {
    phone: '(51) 98530-9613',
    instagram: '@laura.camponogara',
    address: 'Porto Alegre, RS · Todo o Brasil',
  },
  company: {
    name: 'Laura Camponogara',
    description:
      'Estratégia de conteúdo, captação e gestão de redes sociais para marcas que querem crescer com identidade e presença digital de verdade.',
  },
};

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: data.instaLink },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: data.whatsappLink },
];

const navLinks = [
  { text: 'Início', href: data.nav.inicio },
  { text: 'Sobre', href: data.nav.sobre },
  { text: 'Portfólio', href: data.nav.portfolio },
  { text: 'Serviços', href: data.nav.servicos },
  { text: 'Planos', href: data.nav.planos },
  { text: 'Contato', href: data.nav.contato },
];

const serviceLinks = [
  { text: 'Captação & Edição', href: data.services.captacao },
  { text: 'Gestão de Redes Sociais', href: data.services.gestao },
  { text: 'Estratégia de Conteúdo', href: data.services.estrategia },
  { text: 'Planejamento Mensal', href: data.services.planejamento },
];

const contactInfo = [
  { icon: Phone, text: data.contact.phone, href: data.whatsappLink },
  { icon: InstagramIcon, text: data.contact.instagram, href: data.instaLink },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  return (
    <footer className="mt-0 w-full place-self-end" style={{ background: 'var(--obsidian-3)', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-2 sm:justify-start">
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 500, color: '#FFFFFF' }}>
                {data.company.name}
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left" style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                    style={{ color: 'rgba(255,255,255,0.4)', display: 'block' }}
                    aria-label={label}
                  >
                    <span className="sr-only">{label}</span>
                    <Icon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Navegação</p>
              <ul className="mt-8 space-y-4 text-sm">
                {navLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'; }}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Serviços</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'; }}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Contato</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-2 sm:justify-start"
                      href={href || '#'}
                      target={href ? '_blank' : undefined}
                      rel={href ? 'noopener noreferrer' : undefined}
                      style={{ textDecoration: 'none' }}
                    >
                      <Icon style={{ color: 'var(--gold)', flexShrink: 0 }} size={16} />
                      {isAddress ? (
                        <address style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, fontStyle: 'normal', flex: 1 }}>
                          {text}
                        </address>
                      ) : (
                        <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, flex: 1 }}>
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>
              Todos os direitos reservados.
            </p>
            <p className="mt-4 sm:order-first sm:mt-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>
              © 2026 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
