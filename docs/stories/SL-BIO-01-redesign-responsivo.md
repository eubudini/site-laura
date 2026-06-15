# SL-BIO-01 — Redesign responsivo do link da bio (/bio)

**Status:** Ready → Done
**Data:** 2026-06-15

## Objetivo
O link da bio (`/bio`) fora desenhado só para mobile (`max-w-md` centrado). Em desktop o
banner esticava full-bleed e o conteúdo ficava espremido no centro, com vazio nas laterais.
Tornar a página clean, elegante e editorial, funcionando bem em mobile e desktop.

## Decisões de design (aprovadas pelo cliente João Vitor)
- **D1 — Faixa contida:** coluna única centrada num container que respira; banner deixa de
  ser full-bleed e vira faixa arredondada contida (`max-w-md` mobile → `max-w-lg` lg+).
- **D2 — Fundo parchment liso** nas laterais.
- **D3 — Banner em proporção contida** (`aspect-3/2`, `object-position center 30%`).

## Critérios de aceite
- [x] Desktop (≥1024px): nada estica full-bleed; conjunto centrado e equilibrado.
- [x] Mobile (≤480px): composição equivalente à anterior, sem regressão.
- [x] Banner otimizado via `next/image` (blur placeholder); asset-fonte 2.0MB → 141KB.
- [x] `<img>` cru migrado para `next/image` (banner + avatar); sem `eslint-disable`.
- [x] Números mágicos substituídos por utilities/tokens do design system.
- [x] Regra global `a,button{min-height:44px}` isolada nos ícones sociais (`.bio-icon`).
- [x] `robots: { index: false }` preservado; conteúdo (nome, kicker, tagline, bio, 2 cards,
      sociais, footer) intacto.
- [x] `npm run build` passa (lint + typecheck + build).

## Escopo
**IN:** `app/bio/page.tsx`, `app/globals.css` (`.bio-icon`), `public/banner-cover.jpg` (recompressão).
**OUT:** fontes/paleta da marca, conteúdo textual, demais rotas do site, reconexão do auto-deploy Vercel.

## File List
- `app/bio/page.tsx` — refactor de layout + next/image + tokens
- `app/globals.css` — utility `.bio-icon`
- `public/banner-cover.jpg` — recomprimido (2.0MB → 141KB)
