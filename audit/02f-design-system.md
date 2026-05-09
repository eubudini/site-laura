# 02f — Design System & Consistência

## Estado atual: tokens declarados vs tokens reais

Tokens **formais** (em `:root`):
```
Cor:         --ink, --ink-80/50/20, --chalk, --parchment(-dark),
             --gold, --gold-soft, --gold-light, --gold-mid,
             --obsidian, --obsidian-2, --obsidian-3
Theme:       --color-background, --color-foreground,
             --font-sans, --font-serif, --font-mono
Utilities:   .container-x, .container-x--narrow, .container-x--prose,
             .section-pad-y, .section-pad-y-lg, .section-pad-y-sm,
             .serif-display
```

→ **Cobertura:** ~30% do que um design system completo deveria ter.

## Tokens AUSENTES (categorias)

| Categoria | Status | Quantidade ad-hoc no código |
|---|---|---|
| Spacing scale | ❌ | ~50 valores únicos em margens/paddings |
| Type scale (h1-h6, body, small, caption, mono) | ❌ | clamps únicos por componente |
| Letter-spacing scale | ❌ | 0.005 a 0.32em (~12 valores) |
| Line-height scale | ❌ | 1.02, 1.04, 1.08, 1.1, 1.12, 1.15, 1.2, 1.3, 1.4, 1.5, 1.55, 1.6, 1.7, 1.72, 1.75, 1.78, 1.8, 1.9 |
| Font-weight scale (semantic) | ❌ | 300/400/500/600/700 misturados |
| Breakpoints | ❌ | 12 valores diferentes |
| Border width | ❌ | 0.5px, 1px, 1.5px, 2px, 3px |
| Border radius | ❌ | 0, 1, 2, 3, 18, 20, 50% |
| Shadow scale | ❌ | 6 sombras únicas |
| Z-index scale | ❌ | 0/1/2/4/10/20/999/1000/1001 |
| Motion duration | ❌ | 12 valores |
| Motion easing | ⚠ | 2 cubic-beziers repetidos sem nome |
| Opacity scale | ❌ | 26 valores em rgba(10,10,10,X) |

→ **13 categorias ausentes.** Tokens formais cobrem ~3 (cor parcial, families, alguns containers).

## Naming conventions

### Cores
- ✓ Bom: `--ink`, `--chalk`, `--gold`, `--parchment`, `--obsidian` — semânticos com personalidade editorial
- ❌ Inconsistente: `--gold-soft` (variant), `--gold-light` (rgba 0.10), `--gold-mid` (rgba 0.32) — `light` deveria ser cor; aqui é opacidade. Confunde.
- ❌ Faltam: `--ink-04`, `--ink-08`, `--chalk-04`, `--chalk-08` para opacidades canônicas.

### Utilities
- ✓ Bom: `.container-x`, `.section-pad-y` — semântico
- ❌ Não usadas: `.container-x--narrow`, `.container-x--prose`, `.section-pad-y-lg`, `.section-pad-y-sm` — declaradas, ignoradas.

### Componentes (BEM nas seções com `<style>`)
- ✓ Hero, Manifesto, Metodologia, Prova: `bloco__elemento--modificador` ✓
- ❌ Portfolio, Planos, Contato, Footer: sem classes, tudo inline → impossível extrair padrão

## Drift por componente

| Componente | Tokens? | Inline? | Drift hex/rgba? |
|---|---|---|---|
| Hero | parcial (`--gold`, `--ink`, `--parchment`) | médio | médio |
| Header | parcial | alto | alto (`#C9A96E` literal, `#FFFFFF`, `#0A0A0A`) |
| Manifesto | parcial | baixo | médio |
| Metodologia | parcial | baixo | médio |
| Prova | parcial | médio | médio |
| Portfolio | mínimo | **total** | **alto** |
| Planos | mínimo | **total** | **alto** (#C9A96E, #B8966A typo) |
| Contato | parcial | **total** | alto (#C9A96E, rgba literais) |
| Footer | parcial | **total** | alto |
| TiltCard | nenhum | inline + Tailwind | médio |
| WhatsAppFloat | nenhum | inline | low (cores específicas WA OK) |

## Componentes reutilizáveis: AUSENTES

Padrões repetidos que **deveriam** ser componentes:

### `<Kicker>` (label sup do tipo "MANIFESTO · X")
Aparece em **6 seções** (Hero, Manifesto, Metodologia, Portfolio, Prova, Planos, Contato). 6 implementações diferentes. Variações:
- `font-size: 0.74rem` ou `0.62rem`
- letter-spacing 0.28 ou 0.32em
- com 1 rule, com 2 rules, sem rule
- alinhamento esquerda ou centro

→ Componente único `<Kicker variant="left|center" rules={1|2} />` resolveria.

### `<SectionHeader>` (kicker + h2 + sub)
Aparece em Manifesto, Metodologia, Portfolio, Prova, Planos, Contato. 6 versões diferentes.

### `<CTA>` (botão primary/secondary/ghost)
Aparece em ~12 lugares. Cada um redefine padding, font-size, letter-spacing, text-transform, transition, hover handler.

### `<EditorialFrame>` (a moldura `border` decorativa offset)
Hero photo, Manifesto visual, Contato photo — 3 implementações distintas do mesmo padrão.

### `<MetricCard>` ou `<Stat>` (Counter + label + sub)
Prova stats — só lá. OK não duplicado, mas se houver outra seção, vai duplicar.

### `<Card>`
Plans card, Quote card, Case card, Step card — 4 implementações.

→ **Zero abstrações de componentes** acima do nível de seção. Tudo é re-implementação.

## Tailwind v4 — instalado, ignorado

`@import "tailwindcss"` em globals. `postcss.config.mjs` configurado. Tailwind v4 com `@theme inline` declarando `--color-background`, `--font-sans`, etc — pronto pra usar `bg-background`, `font-sans`...

**Quem usa:** apenas `TiltCard` via `cn()` (utility merge).
**Quem ignora:** todos os outros 10 componentes.

→ Tailwind como dead code para 90% do site. Ou abraça (refatora tudo) ou remove (limpa stack).

## Documentação ausente

- ❌ Sem `DESIGN_SYSTEM.md`
- ❌ Sem Storybook ou playground
- ❌ Sem comentários explicando decisões
- ❌ Sem `tokens.json` exportado
- `AGENTS.md` só avisa "this is not the Next.js you know"
- `CLAUDE.md` só faz `@AGENTS.md`

## Risco de escalabilidade

Se o site crescer (ex.: nova seção FAQ, blog, página /case-study/[slug]):
- Novos componentes vão duplicar kicker/h2/sub
- Cores vão divergir mais (#C9A96E hardcoded em mais lugares)
- Breakpoints novos vão entrar (já temos 12, virariam 15+)
- Hover handlers em JS vão multiplicar bugs touch
- Sem documentação, qualquer dev novo (incluindo Claude futuro) vai re-criar paradigmas

## Score

| Área | Score |
|---|---|
| Cobertura de tokens | 3/10 |
| Naming consistency | 5/10 |
| Drift de cores | 3/10 |
| Componentes abstraídos | 1/10 |
| Tailwind utilization | 1/10 |
| Documentação | 1/10 |
| **Média** | **2.3/10** |

## Issues priorizados

- **P0** — Spacing scale ausente (50+ magic numbers)
- **P0** — Type scale ausente (clamps por componente)
- **P0** — 6+ padrões repetidos sem componente abstrato (Kicker, SectionHeader, CTA, etc)
- **P0** — Drift massivo `#C9A96E` literal vs `--gold-soft`
- **P1** — Breakpoint scale ausente (12 valores)
- **P1** — Tailwind instalado mas ignorado — decidir abraçar ou remover
- **P1** — Naming `--gold-light/mid` confuso (são opacidades, não cores)
- **P1** — Utilities `.section-pad-y*` declaradas e ignoradas
- **P2** — DESIGN_SYSTEM.md ausente
- **P2** — Z-index scale ausente
