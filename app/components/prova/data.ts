export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
  separator?: string;
};

export type Metric = { label: string; before: string; after: string; growth: string };

export type Case = {
  name: string;
  handle: string;
  tag: string;
  bio: string;
  initials: string;
  postsCount: string;
  metrics: Metric[];
  highlight: string;
  feedPalette: [string, string, string, string, string, string];
};

export type Brand = {
  name: string;
  style: "italic" | "normal";
};

export const stats: Stat[] = [
  { value: 14, suffix: "+", label: "Marcas atendidas", sub: "Empresas e marcas pessoais" },
  { value: 418, prefix: "+", suffix: "%", label: "Crescimento médio", sub: "Em seguidores qualificados" },
  { value: 59, prefix: "+", suffix: "M", label: "Visualizações em Reels", sub: "Nos últimos 12 meses" },
  { value: 4327, prefix: "+", label: "Leads gerados", sub: "Direto do Instagram", separator: "." },
];

export const cases: Case[] = [
  {
    // ═══════ DADOS PROVISÓRIOS: atualizar com Laura ═══════
    name: "Brunnen",
    handle: "brunnen",
    tag: "Moda feminina · Atelier",
    bio: "Moda autoral · Porto Alegre · Atelier",
    initials: "BR",
    postsCount: "412",
    metrics: [
      { label: "Seguidores", before: "8K", after: "47K", growth: "+487%" },
      { label: "Engajamento", before: "0,9%", after: "4,2%", growth: "+367%" },
      { label: "Alcance / mês", before: "12K", after: "96K", growth: "+700%" },
    ],
    highlight:
      "Reposicionamento editorial completo: do feed amador ao branding de atelier autoral. Captação dirigida, narrativa de produto e tom de voz redesenharam a marca como referência regional em moda feminina.",
    feedPalette: [
      "linear-gradient(135deg, #1a1a1a 0%, #2c2520 100%)",
      "linear-gradient(135deg, #c9a96e 0%, #8a7146 100%)",
      "linear-gradient(135deg, #f5f0e8 0%, #d8cdb8 100%)",
      "linear-gradient(135deg, #2e2823 0%, #4a3f30 100%)",
      "linear-gradient(135deg, #d4b88a 0%, #a08858 100%)",
      "linear-gradient(135deg, #1f1a14 0%, #3a2f22 100%)",
    ],
  },
  {
    name: "Mariana Penteado",
    handle: "marianapenteado",
    tag: "Moda · Lifestyle",
    bio: "Moda · Lifestyle · Direção criativa ✨",
    initials: "MP",
    postsCount: "856",
    metrics: [
      { label: "Seguidores", before: "42K", after: "198K", growth: "+371%" },
      { label: "Engajamento", before: "1,1%", after: "3,8%", growth: "+245%" },
      { label: "Alcance / mês", before: "22K", after: "180K", growth: "+718%" },
    ],
    highlight:
      "Direção criativa consistente, captação editorial e narrativa premium transformaram um perfil de moda em referência nacional.",
    feedPalette: [
      "linear-gradient(135deg, #e8dcc8 0%, #b89d75 100%)",
      "linear-gradient(135deg, #2a2018 0%, #4a3a28 100%)",
      "linear-gradient(135deg, #c9a96e 0%, #6a5538 100%)",
      "linear-gradient(135deg, #f0e6d4 0%, #c8b594 100%)",
      "linear-gradient(135deg, #1a1410 0%, #2c2218 100%)",
      "linear-gradient(135deg, #d4ba8c 0%, #8a7048 100%)",
    ],
  },
];

export const brands: Brand[] = [
  { name: "A.MAR", style: "italic" },
  { name: "H.STERN", style: "normal" },
  { name: "Brunnen", style: "italic" },
  { name: "RESI", style: "normal" },
  { name: "Mariana Penteado", style: "italic" },
  { name: "Marina Ciconet", style: "normal" },
  { name: "Casa das Gurias", style: "italic" },
];
