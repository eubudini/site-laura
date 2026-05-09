import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
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
  title: "Laura Camponogara | Direção Criativa & Estratégia Editorial",
  description:
    "Direção criativa, posicionamento e produção autoral para marcas de moda e lifestyle. Captação no Brasil e no Uruguai.",
  keywords: [
    "direção criativa",
    "estratégia de conteúdo",
    "posicionamento de marca",
    "produção editorial",
    "moda",
    "Porto Alegre",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Laura Camponogara | Direção Criativa para marcas de moda e lifestyle",
    description:
      "Estratégia editorial, direção criativa e produção autoral. Para marcas que tratam presença como ativo.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Laura Camponogara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Camponogara | Direção Criativa",
    description:
      "Direção criativa, estratégia editorial e produção autoral para marcas de identidade.",
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
      className={`${bodoniModa.variable} ${dmSans.variable} ${dmMono.variable}`}
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
