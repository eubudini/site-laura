import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Laura Camponogara | Presença Digital com Estratégia e Estética",
    description:
      "Ajudo marcas a construírem uma imagem mais forte, desejável e consistente.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
