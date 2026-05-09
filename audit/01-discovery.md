# 01 — Discovery & Mapeamento

## Stack
- Next.js **16.2.4** (App Router) + React **19.2.4**
- Tailwind CSS **v4** (PostCSS plugin) — instalado, **subutilizado**
- Framer Motion **12.38.0**
- TypeScript 5, ESLint 9
- ⚠️ `AGENTS.md`: "This is NOT the Next.js you know" — Next 16 traz APIs novas; consultar `node_modules/next/dist/docs/` antes de mexer.

## Árvore de componentes (composição)

```
app/layout.tsx                       (RootLayout — só lang/metadata)
└── app/page.tsx                     (Home — composição linear)
    ├── Header           "use client"   fixed, scroll-aware, mobile menu
    ├── <main>
    │   ├── Hero        "use client"   grid 2-col / mobile reorder
    │   ├── Manifesto   "use client"   2-col + vídeo
    │   ├── Metodologia "use client"   3 acts alternados (flipped)
    │   ├── Prova       "use client"   stats + 2 cases (Brunnen, MP) + quotes + brands
    │   ├── Portfolio   "use client"   grid 3 col / 2 mobile + hover
    │   ├── Planos      "use client"   2 TiltCards
    │   └── Contato     "use client"   foto + contatos + 3 CTAs
    ├── Footer          (sem "use client", mas usa onMouseEnter — inconsistente)
    └── WhatsAppFloat   "use client"   FAB
```

## Tokens declarados (`globals.css`)

| Token | Valor | Status |
|---|---|---|
| `--ink` `#0A0A0A` | preto base | usado |
| `--ink-80/50/20` | rgba do ink | **subutilizado** — código usa `rgba(10,10,10,0.X)` literal |
| `--chalk` | `#FFFFFF` | usado raramente, código usa `#FFFFFF` literal |
| `--parchment` `#F8F5F1` | bg base | usado |
| `--parchment-dark` | `#EDE8E1` | 1 uso |
| `--gold` `#B8956A` | dourado canônico | usado |
| `--gold-soft` `#C9A96E` | dourado claro | **conflito** — código usa `#C9A96E` literal em ~30 lugares (drift) |
| `--gold-light` rgba 0.10 | tint | usado |
| `--gold-mid` rgba 0.32 | tint | 2 usos |
| `--obsidian/2/3` | escala de pretos | usado |

## Tokens **ausentes** (deveriam existir)
- Espaçamento (4/8/12/16/24/32/48/64/80/120…) — atualmente 100% magic numbers
- Type scale (h1, h2, h3, body, small, caption, mono) — atualmente clamps soltos por componente
- Breakpoints — atualmente 12 valores diferentes (360/420/480/560/640/720/760/768/900/920/1024/1100)
- Radius scale — atualmente `borderRadius: 1, 2, 3, 18, 20, 50%`
- Shadow scale — sombras únicas inline
- Z-index scale — `z-index: 0, 1, 2, 4, 10, 20, 999, 1000, 1001`
- Motion tokens (duration, ease) — `duration: 0.25/0.3/0.35/0.4/0.45/0.5/0.6/0.7/0.8/0.9/1.1/1.8`; ease cubic `[0.25,0.46,0.45,0.94]` repetido em ~8 lugares
- Font weight scale — usados 300/400/500/600/700 misturados sem padrão semântico

## Paradigmas de styling em uso (caótico)

| Componente | Paradigma | Problema |
|---|---|---|
| Hero | `<style>{`...`}</style>` + classes BEM | inject global, mas funciona |
| Header | `<style>` + inline `style={}` + `style` Framer | 3 paradigmas no mesmo arquivo |
| Manifesto | `<style>` + classes BEM | OK isolado |
| Metodologia | `<style>` + classes BEM | OK isolado |
| Portfolio | 100% inline `style={}` | sem hover real (`onMouseEnter` JS), sem token |
| Prova | `<style>` + classes + alguns inline | misto |
| Planos | 100% inline + 1 `<style>` para grid | alto acoplamento |
| Contato | 100% inline + 1 `<style>` para responsive | drift de cores hex literais |
| Footer | 100% inline + 1 `<style>` para grid | mesmo problema |
| TiltCard | Tailwind via `cn()` | **único** lugar usando Tailwind |
| WhatsAppFloat | inline | OK pequeno |

→ **5 paradigmas distintos coexistindo**. Tailwind instalado mas só `TiltCard` usa.

## Mapa de jornada (hierarquia de leitura)

| # | Seção | Background | Função narrativa |
|---|---|---|---|
| 1 | Hero | parchment (claro) | Apresentação + autoridade |
| 2 | Manifesto | parchment (claro) | Filosofia + filtro |
| 3 | Metodologia | obsidian-2 (escuro) | Processo (3 atos) |
| 4 | Prova | parchment (claro) + stats em obsidian | Métricas + cases + social proof |
| 5 | Portfolio | white | Visual gallery |
| 6 | Planos | obsidian (escuro) | Oferta |
| 7 | Contato | parchment | Conversão |
| 8 | Footer | obsidian-3 (escuro) | Encerramento |

Ritmo: light → light → **dark** → light → light → **dark** → light → **dark**. Bom contraste narrativo.

## Inputs para Fase 2
Auditorias seguintes operam sobre este inventário. Áreas críticas a investigar:
1. Drift de tokens (cores hex hardcoded)
2. Paradigmas de styling mistos
3. Breakpoints inconsistentes
4. Magic numbers em espaçamento
5. Inline event handlers para hover
6. A11y (header, counter, contraste)
