# 02e — UI craft

## Tipografia — uso

3 famílias declaradas, uso bem orquestrado:

| Fonte | Uso | Comentário |
|---|---|---|
| Fraunces (serif, opsz var) | H1, H2, H3, pulls, blockquotes | ✓ excelente, traz personalidade editorial |
| Inter Tight (sans) | Body, paragraphs, CTAs | ✓ sem-serif neutro, complementa |
| DM Mono | Kickers, metadados, IDs ("CASE / 01") | ✓ traz textura técnica |

**Tracking:**
- Kickers `letter-spacing: 0.22-0.32em` — varia entre componentes
- Headings `letter-spacing: -0.018 a -0.035em` — varia
- CTAs `letter-spacing: 0.12em` (Hero) vs `0.16em` (Header)

→ Sem token. Cada componente decide. **P1.**

**Optical sizing Fraunces:**
- `serif-display` utility usa `font-variation-settings: "opsz" 144, "SOFT" 30` — ✓ **bom**
- Mas só Hero h1 usa `.serif-display`. H2/H3 usam `font-family: 'Fraunces', serif` direto — perdem o opsz. **P2**.

## Cores — drift catalogado

Cores definidas como tokens (`globals.css`):
```
--ink, --ink-80/50/20, --chalk, --parchment, --parchment-dark,
--gold, --gold-soft, --gold-light, --gold-mid,
--obsidian, --obsidian-2, --obsidian-3
```

**Drift em código (literais):**

| Literal | Ocorrências | Token equivalente |
|---|---|---|
| `#C9A96E` | ~15× | `var(--gold-soft)` |
| `#B8956A` | ~5× | `var(--gold)` |
| `#B8966A` | 2× | typo de `#B8956A` (gold)? |
| `#FFFFFF` | ~30× | `var(--chalk)` |
| `#0A0A0A` | ~25× | `var(--ink)` ou `var(--obsidian)` |
| `#0C0C0C` | 1× | obsidian variant ad-hoc |
| `#141414` | 1× | obsidian variant ad-hoc |
| `rgba(10,10,10,0.06)` ~ `0.85` | ~40× variações | `var(--ink-80/50/20)` cobre só 3 |
| `rgba(255,255,255,0.06)` ~ `0.85` | ~25× variações | sem token |
| `rgba(201,169,110,0.05)` ~ `0.6` | ~25× variações | `--gold-light/mid` cobre só 2 |
| `#3897f0` | 1× (verified Instagram) | OK literal contextual |
| `#25D366` | 2× (WhatsApp green) | OK literal contextual |
| `#f5e6c8` (mockup avatar) | 2× | drift |
| `#1a1a1a, #2c2520, #3a3024, etc` | mockups | OK isolado em palette |

**Matemática:** ~150 ocorrências de cor literal vs ~50 ocorrências de tokens. **3:1 a favor do drift.**

→ Para paridade com os tokens, ~70% do código de cor precisa ser refatorado. **P0**.

## Cores — escala de opacidade caótica

`rgba(10,10,10, X)` aparece com **X em**: 0.04, 0.06, 0.07, 0.08, 0.10, 0.12, 0.14, 0.15, 0.18, 0.20, 0.25, 0.30, 0.32, 0.35, 0.38, 0.40, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.72, 0.78, 0.82, 0.85.

**26 valores únicos.** Alguns diferem em 0.01 sem motivo (0.06 vs 0.07 vs 0.08). Sugere copy-paste sem padronização.

Recomendação: 9 níveis fixos (4/8/12/20/35/50/65/80/100) ou 12 níveis tokens (`--ink-04`, `--ink-08`, etc).

## Sombras

Sombras únicas inline:
```
0 30px 80px -20px rgba(10,10,10,0.4)         (Manifesto vídeo)
0 24px 60px rgba(184,149,106,0.22), 0 6px 20px rgba(0,0,0,0.18)   (mockup AFTER)
0 10px 28px rgba(0,0,0,0.10)                  (mockup BEFORE)
0 4px 24px rgba(37,211,102,0.35)              (WhatsApp FAB)
0 1px 8px rgba(0,0,0,0.4)                     (sig name)
0 1px 6px rgba(0,0,0,0.4)                     (sig role)
```

→ 6 sombras únicas, sem escala. Cada sombra tem decisão própria. **P1.**

## Border-radius

```
borderRadius: 0    (90% das cards e CTAs — bom, identidade editorial)
borderRadius: 1    (Header CTA — quase 0, simbólico)
borderRadius: 2    (scrollbar)
borderRadius: 3    (mockup botão Seguir)
borderRadius: 18   (mockup outer body)
borderRadius: 20   (mockup outer iPhone)
borderRadius: 50%  (avatares, FAB, mockup notch)
border-radius: 0 0 8px 8px  (notch iPhone)
```

→ Sem escala consistente. Maioria 0 (intencional editorial), mas pequenos detalhes ad-hoc. **P2.**

## Hover/transition

| Padrão | Onde | Avaliação |
|---|---|---|
| `transition: all 0.3s ease` | Hero CTAs, Contato | OK |
| `transition: all 0.25s ease` | Manifesto sound | OK |
| `transition: background 0.3s ease` | Header CTA, Portfolio CTA | OK |
| `transition: color 0.3s ease` | Header logo, links | OK |
| `transition: transform 0.5s ease` | Portfolio img zoom | OK |
| `transition: transform 0.2s ease-out` | TiltCard | OK |
| onMouseEnter inline | 12+ lugares | **anti-padrão** |

→ Não usa CSS `:hover` nesses 12 casos — usa JS para mudar `style.background` em runtime. Razões:
- Hover não funciona em touch
- Não respeita `@media (hover: hover)` nem `prefers-reduced-motion`
- Re-renders e cleanup precários
- Lê estado do DOM (`e.currentTarget.style`) para resetar — frágil

**P0 craft.**

## Motion

Framer Motion bem usado, **mas:**
- Durations: 0.25/0.3/0.35/0.4/0.45/0.5/0.6/0.7/0.8/0.9/1.1/1.8 — 12 valores diferentes
- Eases: `[0.25, 0.46, 0.45, 0.94]` repetido em ~8 lugares; `[0.22, 1, 0.36, 1]` em ~4
- Delays: variam (0.05 a 1.2)
- `prefers-reduced-motion`: ❌ **não respeitado em lugar nenhum**

**P1.** Usuários com sensibilidade vestibular não têm escape.

## Detalhes visuais excelentes

✓ Hero photo `frame` decorativo (`top: -20; right: -20`) — sangrar fora cria moldura editorial
✓ Hero `hero-bg-1/2` (gradients sutis dourados) — atmosfera sem distrair
✓ Metodologia `act__roman` gigante atrás do texto — tipografia escultural
✓ Prova `prova-stats-grid gap: 1px` com bg dourado entre cards — divisor invisível
✓ Mockup iPhone com gradient feed (palette por case) — identidade visual de cada cliente
✓ Manifesto vídeo com `signature` overlay e botão de som — toque editorial
✓ Footer divider `borderTop: 1px solid rgba(255,255,255,0.08)` na bottom bar — hairline elegante
✓ Brand wall com font-style alternado (italic/normal) — vibração visual editorial
✓ Counter scroll-triggered + GrowthBar animação — payoff de prova social
✓ TiltCard com spotlight radial — diferencial premium nos Planos

## Detalhes que erram o tom

✗ Avatares "MC, MP, AM" no Hero `__trust` com gradients hardcoded — destoam da paleta gold (cores não gold-aligned)
✗ Hero `__trust__avatar` font Fraunces 0.62rem — letras diminutas dentro de círculo 30px, ilegível
✗ Verified blue `#3897f0` no mockup — autenticidade, mas é cor totalmente fora da paleta (Instagram), aparece pequeno
✗ TiltCard em mobile não funciona mas mantém visual idêntico — perde-se o "wow" sem fallback
✗ `act__roman` em mobile (centralizado, opacity 0.5) compete com título — em desktop é sutil background, em mobile é distração
✗ Counter usa `setInterval` 30ms — em StrictMode dev roda 2x

## Issues priorizados

- **P0** — Drift de cores: 150 literais vs 50 tokens (3:1). Refatorar.
- **P0** — Hover via `onMouseEnter` JS em 12+ lugares (não funciona touch).
- **P1** — Tracking sem token (0.05 a 0.32em sem escala).
- **P1** — Sombras únicas sem escala (6 valores).
- **P1** — Motion sem `prefers-reduced-motion` e durations sem escala.
- **P1** — `serif-display` utility só usado em Hero h1.
- **P2** — Border-radius ad-hoc.
- **P2** — Counter setInterval em StrictMode dev.
- **P2** — Avatares Hero `__trust` ilegíveis (0.62rem).

## Score

| Área | Score |
|---|---|
| Tipografia (uso) | 8/10 |
| Cores (drift) | 3/10 |
| Sombras/radius | 5/10 |
| Hover/transitions | 4/10 |
| Motion | 6/10 |
| Detalhes únicos | 9/10 |
| **Média** | **5.8/10** |
