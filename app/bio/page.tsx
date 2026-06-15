import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import bannerCover from "@/public/banner-cover.jpg";
import avatarImg from "@/public/avatar.jpg";

export const metadata: Metadata = {
  title: "Laura Camponogara — Links",
  description:
    "Estrategista de Conteúdo e Direção Criativa. Site, WhatsApp e redes da Laura Camponogara.",
  robots: { index: false, follow: true },
};

const profile = {
  name: "Laura Camponogara",
  role: "Estrategista de Conteúdo · Direção Criativa",
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
      {/* Faixa contida: coluna única centrada que respira (D1).
          Mobile-first; o respiro lateral/vertical do lg+ é aditivo. */}
      <div className="mx-auto w-full max-w-md px-5 pb-16 lg:max-w-lg lg:px-8 lg:py-12">
        <div className="flex flex-col items-center">
          {/* BANNER — capa editorial contida (D1+D2+D3).
              Mobile: faixa colada no topo do container.
              lg+: faixa arredondada contida, com respiro. */}
          <div className="relative w-full aspect-3/2 overflow-hidden rounded-b-2xl bg-parchment-dark lg:rounded-2xl">
            <Image
              src={bannerCover}
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 32rem, 28rem"
              placeholder="blur"
              className="object-cover object-[center_30%]"
            />
            {/* fade para o parchment na borda inferior */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-parchment" />
          </div>

          {/* Avatar sobrepondo o banner */}
          <div className="-mt-16 size-28 overflow-hidden rounded-full bg-parchment-dark shadow-lg shadow-ink/10 ring-4 ring-parchment sm:size-32">
            <Image
              src={avatarImg}
              alt={profile.name}
              width={144}
              height={144}
              placeholder="blur"
              className="size-full object-cover object-[center_25%]"
            />
          </div>

          <h1 className="mt-5 text-center font-serif text-3xl tracking-tight text-ink">
            {profile.name}
          </h1>

          {/* régua + kicker */}
          <div className="mt-3 flex items-center gap-2">
            <span className="h-px w-6 bg-gold/60" />
            <p className="text-xs uppercase tracking-[0.18em] text-gold-text">
              {profile.role}
            </p>
            <span className="h-px w-6 bg-gold/60" />
          </div>

          <p className="mt-5 max-w-sm text-center font-serif text-xl italic leading-snug text-ink/90">
            Sua marca passou da hora de ser desejada.
          </p>
          <p className="mt-3 max-w-xs text-center text-sm leading-relaxed text-muted">
            Ajudo marcas a construírem uma imagem mais forte, desejável e
            consistente — por meio de conteúdo, posicionamento e presença nos
            canais certos.
          </p>

          <nav className="mt-6 flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="bio-icon grid size-10 place-items-center rounded-full bg-white text-ink ring-1 ring-ink/10 transition hover:text-gold-text hover:ring-gold/50"
              >
                <s.icon className="size-[18px]" />
              </a>
            ))}
          </nav>

          <section className="mt-8 flex w-full flex-col gap-3">
            {cards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                target="_blank"
                className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10 transition hover:shadow-md hover:shadow-ink/5 hover:ring-gold/50"
              >
                <div className="flex items-center gap-4 p-4 sm:p-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-parchment text-gold-text ring-1 ring-ink/5">
                    {c.kind === "whatsapp" ? (
                      <IconWhatsapp className="size-6" />
                    ) : (
                      <IconGlobe className="size-6" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg text-ink">{c.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-muted">
                      {c.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-gold-text underline-offset-4 group-hover:underline">
                    {c.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </section>

          <footer className="mt-12 text-xs tracking-wide text-muted">
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
