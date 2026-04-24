import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
