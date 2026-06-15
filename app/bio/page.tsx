import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laura Camponogara — Links",
  description:
    "Estrategista de Conteúdo e Direção Criativa. Site, WhatsApp e redes da Laura Camponogara.",
  robots: { index: false, follow: true },
};

const profile = {
  name: "Laura Camponogara",
  role: "Estrategista de Conteúdo · Direção Criativa",
  avatar: "/avatar.jpg",
};

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/laura.camponogara/", icon: IconInstagram },
  { label: "Email", href: "mailto:laura.camponogara29@icloud.com", icon: IconMail },
];

const cards = [
  {
    title: "Site",
    description:
      "Estratégia, direção criativa e presença digital para marcas que querem ser referência.",
    href: "https://lauracamponogara.com.br",
    cta: "Visitar",
    kind: "site" as const,
  },
  {
    title: "WhatsApp",
    description:
      "Vamos conversar sobre a presença da sua marca. Atendimento direto comigo.",
    href: "https://wa.me/5551985309613?text=Oi%20Laura!%20Vim%20pelo%20seu%20link%20e%20gostaria%20de%20conversar%20sobre%20conte%C3%BAdo%20e%20presen%C3%A7a%20digital.",
    cta: "Chamar",
    kind: "whatsapp" as const,
  },
];

export default function BioPage() {
  return (
    <main className="min-h-screen bg-parchment text-ink">
      {/* BANNER — capa editorial */}
      <div className="relative w-full h-[210px] sm:h-[300px] overflow-hidden bg-parchment-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banner-cover.jpg"
          alt="Laura Camponogara"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        {/* fade para o parchment na borda inferior */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-parchment pointer-events-none" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 px-5 pb-16 flex justify-center">
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Avatar sobrepondo o banner */}
          <div className="-mt-16 sm:-mt-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-parchment shadow-lg shadow-ink/10 bg-parchment-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-[center_25%]"
            />
          </div>

          <h1 className="mt-5 font-serif text-[26px] sm:text-3xl tracking-tight text-center text-ink">
            {profile.name}
          </h1>

          {/* régua + kicker */}
          <div className="mt-3 flex items-center gap-2.5">
            <span className="h-px w-6 bg-gold/60" />
            <p className="text-[11px] tracking-[0.18em] uppercase text-gold-text">
              {profile.role}
            </p>
            <span className="h-px w-6 bg-gold/60" />
          </div>

          <p className="mt-5 max-w-[22rem] text-center font-serif text-[19px] sm:text-[21px] leading-snug text-ink/90 italic">
            Sua marca passou da hora de ser desejada.
          </p>
          <p className="mt-3 max-w-[20rem] text-center text-[13.5px] leading-relaxed text-muted">
            Ajudo marcas a construírem uma imagem mais forte, desejável e
            consistente — por meio de conteúdo, posicionamento e presença nos
            canais certos.
          </p>

          <nav className="mt-6 flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 grid place-items-center rounded-full bg-white ring-1 ring-ink/10 text-ink hover:ring-gold/50 hover:text-gold-text transition"
              >
                <s.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </nav>

          <section className="mt-9 w-full flex flex-col gap-3.5">
            {cards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                target="_blank"
                className="group relative overflow-hidden rounded-2xl ring-1 ring-ink/10 bg-white hover:ring-gold/50 hover:shadow-md hover:shadow-ink/5 transition"
              >
                <div className="flex items-center gap-4 p-4 sm:p-5">
                  <span className="shrink-0 w-12 h-12 grid place-items-center rounded-xl bg-parchment ring-1 ring-ink/5 text-gold-text">
                    {c.kind === "whatsapp" ? (
                      <IconWhatsapp className="w-6 h-6" />
                    ) : (
                      <IconGlobe className="w-6 h-6" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-[17px] text-ink">{c.title}</h3>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-muted">
                      {c.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-[13px] font-medium text-gold-text underline-offset-4 group-hover:underline">
                    {c.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </section>

          <footer className="mt-14 text-[11px] tracking-wide text-muted">
            © 2026 {profile.name}
          </footer>
        </div>
      </div>
    </main>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}
function IconWhatsapp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.93.55 3.74 1.5 5.27L2 22l5.04-1.6a9.83 9.83 0 0 0 5 1.36h.01c5.43 0 9.83-4.4 9.83-9.84 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2Zm5.7 13.93c-.24.68-1.4 1.3-1.93 1.37-.5.07-1.12.1-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.6.83 2.07.9 2.22.07.15.12.32.02.51-.1.2-.15.32-.29.49-.14.17-.3.38-.43.51-.14.14-.29.3-.13.58.17.29.74 1.22 1.59 1.98 1.1.97 2.02 1.27 2.31 1.42.29.14.46.12.63-.08.17-.2.73-.85.92-1.14.19-.29.39-.24.65-.15.27.1 1.69.8 1.98.94.29.15.49.22.56.34.07.13.07.71-.17 1.4Z" />
    </svg>
  );
}
function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  );
}
