import type { Metadata } from "next";
import { Fraunces, Inter_Tight, DM_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter-tight",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const SITE_URL = "https://lauracamponogara.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Laura Camponogara | Estratégia de Conteúdo & Presença Digital",
  description:
    "Ajudo marcas a construírem uma imagem mais forte, desejável e consistente por meio de conteúdo, posicionamento e presença nos canais certos.",
  keywords: [
    "estratégia de conteúdo",
    "social media",
    "posicionamento digital",
    "presença digital",
    "Porto Alegre",
    "direção criativa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Laura Camponogara | Presença Digital com Estratégia e Estética",
    description:
      "Ajudo marcas a construírem uma imagem mais forte, desejável e consistente.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Laura Camponogara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Camponogara | Estratégia de Conteúdo",
    description:
      "Estratégia, direção criativa e presença digital para marcas que querem ser referência.",
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Laura Camponogara",
  jobTitle: "Estrategista de Conteúdo & Direção Criativa",
  url: SITE_URL,
  image: `${SITE_URL}/laura-hero.jpg`,
  sameAs: ["https://www.instagram.com/laura.camponogara/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    addressCountry: "BR",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Laura Camponogara | Estratégia de Conteúdo",
  description:
    "Estratégia de conteúdo, direção criativa, captação editorial e gestão de redes sociais para marcas com identidade.",
  url: SITE_URL,
  image: `${SITE_URL}/laura-hero.jpg`,
  telephone: "+55-51-98530-9613",
  priceRange: "$$$",
  areaServed: ["BR", "UY"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  provider: {
    "@type": "Person",
    name: "Laura Camponogara",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${interTight.variable} ${dmMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
        {children}
      </body>
    </html>
  );
}
