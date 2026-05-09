# 02b — Espaçamento & Alinhamento

## Diagnóstico geral

Site usa **3 sistemas de espaçamento simultaneamente**:
1. CSS utility classes (`section-pad-y`, `container-x`) — declaradas em globals
2. `clamp()` inline por componente (Manifesto, Metodologia, Prova)
3. Magic numbers fixos (Portfolio, Planos, Contato, Footer)

**Resultado:** rhythm vertical inconsistente entre seções.

## Padding vertical de seções (deveria ser tokenizado)

| Seção | Declaração | Em px (1280w) | Em px (375w) |
|---|---|---|---|
| Hero | `padding: 80px 32px` | 80 | 56→44 |
| Manifesto | `clamp(80px, 11vw, 140px) 0 clamp(72px, 10vw, 120px)` | ~140/120 | 80/72→72/64 |
| Metodologia | `clamp(80px, 11vw, 140px) 0 clamp(72px, 10vw, 120px)` | mesma do Manifesto | mesma |
| Prova | composto: stats `64px 0`, cases `clamp(80, 10vw, 120) 0 clamp(72, 9vw, 100)` | ~120/100 | 64+80/72→64+64/56 |
| Portfolio | `80px 0 64px` | 80/64 | 72/56 → 60/48 |
| Planos | `120px 0` | 120 | 80→64 |
| Contato | `120px 0` | 120 | 80→64 |
| Footer | `clamp(56px, 7vw, 88px)` paddingBlock | ~88 | 56 |

**Inconsistências:**
- Manifesto/Metodologia: `80→140` topo, `72→120` base — assimetria intencional (ok)
- Hero: 80px fixo (não cresce em wide screens) — quebra harmonia
- Planos/Contato: `120 0` fixo (não escala) — quebra harmonia
- Portfolio: `80 0 64` fixo — quebra harmonia

`globals.css` já tem `.section-pad-y { padding-block: clamp(64px, 9vw, 120px) }` — **ninguém usa**.

## Padding horizontal (container)

`globals.css` define:
```css
.container-x { padding-left: clamp(16px, 4vw, 32px); padding-right: ...; max-width: 1280px; }
```

Quem **usa** `.container-x`: Header, Manifesto, Metodologia, Prova (parte), Footer.
Quem **re-implementa**:
```js
maxWidth: 1280, margin: "0 auto", padding: "0 32px"
```
→ Hero (32px sem clamp), Portfolio, Planos (1000px), Contato, Prova (parcial).

→ **5 componentes ignoram o utility**, com paddings horizontais que **não escalam** com viewport.

## Magic numbers em margins/gaps (amostra)

```
Hero:        24, 28, 32, 36, 32, 32 (mb sequenciais)
Manifesto:   22, 32, 22, 24, 32, 36, 56, 80
Metodologia: 14, 18, 22, 32, 52, 72, 96, 130
Portfolio:   20, 28, 40, 36
Prova:       6, 9, 10, 14, 18, 22, 24, 26, 28, 32, 36, 40, 44, 48, 52, 56, 64, 72, 80, 100
Planos:      11, 14, 16, 18, 20, 24, 32, 36, 40, 48, 56, 72
Contato:     12, 14, 16, 20, 24, 28, 40, 48, 100
Footer:      10, 18, 24, 28, 38, 40, 56, 64
```

**Sem escala.** Não há múltiplo comum. `Prova` tem **20 valores únicos** em margens.

Recomendação: escala 4-base (4/8/12/16/20/24/32/40/48/64/80/120) ou 8-base.

## Gaps em grids

| Componente | gap declarado | Comentário |
|---|---|---|
| Hero grid | `column-gap: 80px` | OK desktop |
| Manifesto grid | `gap: 80px` (1024+) → `56px` (1024-) | OK |
| Metodologia acts | `gap: clamp(72px, 10vw, 130px)` | OK |
| Portfolio grid | `gap: 10px` desktop / `8px` mobile | apertado, mas intencional editorial |
| Prova stats | `gap: 1px` (com bg gold como divisor) | técnica boa, intencional |
| Prova quotes | `gap: 18px` desktop, 14 mobile | OK |
| Prova cases | `gap: 24px` desktop, 20 mobile | OK |
| Planos grid | `gap: 24px` | OK |
| Footer | `gap: 64px` desktop, 40 mobile | grande |
| Footer sections | `gap: 40px` → 28 → coluna | OK |

→ Gaps em si OK. **Margens internas dos componentes** que estão drift.

## Alinhamento vertical (rhythm)

Heading scale é **inconsistente entre seções** — clamps diferentes pra "mesma hierarquia":

| Seção | H2 clamp | Equivalente em px (1280w) |
|---|---|---|
| Manifesto | `clamp(2rem, 4vw, 3.4rem)` | 51px (3.4rem×16, ou 61px se base 18) |
| Metodologia | `clamp(2rem, 3.6vw, 3rem)` | 54px |
| Portfolio | `clamp(1.8rem, 3vw, 2.6rem)` | 47px |
| Prova | `clamp(1.8rem, 3.2vw, 2.8rem)` | 50px |
| Planos | `clamp(1.8rem, 3vw, 2.6rem)` | 47px |
| Contato | `clamp(1.8rem, 3vw, 2.6rem)` | 47px |

→ 4 valores diferentes para H2. Manifesto/Metodologia maiores (acertadamente — abertura), Prova segue, mas Portfolio/Planos/Contato abaixo. Sem intenção declarada.

Kicker (label sup):
- Manifesto/Metodologia/Prova: `font-size: 0.74rem`, `letter-spacing: 0.32em`
- Portfolio/Planos/Contato: `font-size: 0.62rem`, `letter-spacing: 0.28em`

→ **Dois tamanhos** de kicker — mesma função semântica, padrão visual diferente. **P1**.

## Alinhamento óptico

| Issue | Componente | Detalhe |
|---|---|---|
| Logo dot deslocado | Header | `transform: translateY(1px)` — hack pra alinhar com texto que tem `translateY(-2px)` | 
| Roman number Met. | Metodologia | `top: 24px; left: -8px` — sangra fora do container, OK editorial |
| Hero photo frame | Hero | `top: -20px; right: -20px` — sangra fora do `.hero-photo__inner` |
| Contato moldura | Contato | `top: 20; left: 20; right: -20; bottom: -20` — assimétrico (offset 20 em 2 cantos) — intencional? |
| Stat cards Prova | Prova | gap: 1px com bg dourado entre cards — divisor genial |

Cada componente decide seu próprio sistema de "frame com offset". Sem token de offset.

## Container `.container-x--narrow`/`--prose` declarados, **não usados**

```css
.container-x--narrow { max-width: 1000px; }
.container-x--prose  { max-width: 800px; }
```

Planos usa `maxWidth: 1000` inline em vez de `.container-x--narrow`. Drift.

## Issues priorizados

- **P0** — `section-pad-y` declarado mas ignorado por 8 componentes. Inconsistência grosseira.
- **P0** — Re-implementação de container em 5 componentes em vez de `.container-x`.
- **P1** — Kicker tem 2 escalas (0.74 vs 0.62rem) sem distinção semântica.
- **P1** — H2 tem 4 escalas para mesma hierarquia.
- **P1** — Magic numbers em margins (sem 4/8 base).
- **P2** — Hero padding fixo em 80px (não escala).

## Score
- Sistema de espaçamento: 2/10
- Coerência entre seções: 4/10
- Alinhamento óptico: 7/10
