# 02a — Responsividade

## Matriz de breakpoints (caos identificado)

| Componente | BPs declarados | Problema |
|---|---|---|
| Hero | 900, 768, 480 | OK |
| Header | 1100, 920 | usa **920** (não 900) |
| Manifesto | 1024, 768, 480 | usa **1024** (não 900) |
| Metodologia | 900, 480 | falta 768 (gap grande) |
| Portfolio | 768, 480 | falta tablet |
| Prova | 900, 760, 560, 480, 360 | usa **760** (não 768), pula 1024 |
| Planos | 720, 768, 480 | **720 antes de 768** — ordem invertida! |
| Contato | 900, 768, 480 | OK |
| Footer | 900, 640, 420 | usa **640, 420** (não 768, 480) |

**12 valores diferentes** num único projeto. Sem token. **P0**.

## Issues por viewport

### iPhone SE (375px)
| Componente | Issue | Severidade |
|---|---|---|
| Hero | Photo 280px max + signature em `bottom: -42px` + `margin-bottom: 80px !important` — hack frágil | P1 |
| Hero | `.hero-h1` `clamp(1.95rem, 9.5vw, 2.6rem)` — em 375px = ~2.2rem, com `font-size: 16px` html base | OK |
| Header | Hamburger touch target ~36px (`min-height: auto` derruba o global 44px) | **P0 a11y** |
| Prova | Mockups 152px max — em mobile lado-a-lado dentro do case ficam **microscópicos** (~120px reais) | **P0** |
| Prova | Stats `repeat(2,1fr)` em 560px e `1fr` só em 360px — em 375px ainda 2-col, números cortam | P1 |
| Portfolio | Grid 2-col em 768- → cards quadrados grandes ok, mas `gap: 8px` muito apertado | P2 |
| Planos | Cards full-width OK, mas `padding: 32px 24px` só em 768- — em 480 ainda 24px, ok | OK |
| Contato | Foto **escondida com `display: none`** em < 768 — perde âncora visual da seção | P1 |

### iPhone 14/15 (390-393px)
- Mesmo cenário do SE, ligeiramente folgado.

### Tablet portrait (768px)
| Componente | Issue | Severidade |
|---|---|---|
| Manifesto | grid colapsa em 1024 — em tablet portrait fica single-column. Vídeo `max-width: 480px` centralizado. OK | OK |
| Metodologia | `act__roman` muda para `top: 0; left: 50%` mas mantém `font-size: 9rem` — conflita com título embaixo (overlap visual) | P1 |
| Hero | Foto centralizada `max-width: 320px` — boa | OK |
| Header | Em 920- vira hamburger; entre 768-920 bug raro: nav some mas CTA também (`display: none !important` em ambos via `.header-nav, .header-cta-wrap`) — quem chama é só o hamburger | OK |
| Prova quotes | `repeat(2,1fr)` em 900-, OK | OK |

### Desktop intermediário (1024-1280px)
| Componente | Issue | Severidade |
|---|---|---|
| Manifesto | grid colapsa em **1024** — perde layout 2-col em laptops menores (MacBook Air 1280 OK; MBP 13" old 1280 OK; mas 13" notebooks de 1024 viram mobile) | P1 |
| Header nav | em 1100- reduz `font-size: 0.68rem` — fica minúsculo entre 920-1100 | P2 |
| Metodologia | `act--flipped` mantém grid 2-col até 900px — pode apertar texto em 1024 | P2 |

### Desktop largo (1440+, 1920+)
- `max-width: 1280px` no container limita bem. OK.
- Hero hero-bg-2 (radial 480px) fixo em px — em 4K parece pequeno. P3.

## Touch targets (WCAG 2.5.5 — mín 44×44)

| Elemento | Tamanho real | Status |
|---|---|---|
| Header CTA "Contato" | padding 12×24, ~40px altura + texto | borderline |
| Header hamburger | `min-height: auto` + padding 10×8 + 22px = ~38px | ❌ FAIL |
| Hero CTAs | padding 17×36 (desktop), 14×24 (mobile) | ✓ |
| Hero CTAs (480-) | padding 14×24, font 0.82rem | ✓ |
| Mobile menu links | padding-bottom 16 + font 1.3rem | ✓ |
| Plans CTA | padding 14×28 | ✓ |
| Portfolio grid item | aspect-ratio 4/5, sem href real (só hover) | N/A |
| Quote `<a>` | padding 14×28 | ✓ |
| Manifesto sound button | 38×38 | ❌ FAIL (38 < 44) |
| WhatsApp FAB | 56×56 | ✓ |
| Footer social icons | 38×38 | ❌ FAIL |
| Footer links | inline texto sem padding extra; min-height: auto override | ❌ FAIL |

→ **4 violações de touch target**. Regra global `a, button { min-height: 44px }` está sendo **explicitamente quebrada** com `minHeight: "auto"` em Header hamburger, Footer social, Footer links.

## Overflow

`html, body, section { overflow-x: hidden }` aplicado **3 vezes**. Mascara bugs reais. Em mobile, se algum filho tiver `transform: translateX` ou width > 100vw, vai sumir silenciosamente. **P2**.

## Viewport meta

❌ **AUSENTE** no `layout.tsx`. Next 16 deve gerar default, mas é boa prática declarar:
```tsx
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };
```

## Scoreboard

| Área | Score (0-10) |
|---|---|
| Breakpoints consistentes | 2/10 |
| Adaptação mobile | 6/10 |
| Touch targets | 4/10 |
| Tablet (768-1024) | 5/10 |
| Desktop wide | 8/10 |
| Overflow control | 5/10 (mascarado) |

**Média: 5.0/10**

## Issues priorizados
- **P0** — Header hamburger touch target, mockups Prova em mobile (ilegíveis)
- **P1** — Breakpoint tokens ausentes, foto Contato sumindo em 768-, ato roman conflito visual em tablet
- **P2** — Header em 1024, gap portfolio mobile, overflow-x triple
