# 03 — Meta-análise: Claude construindo UI

> Análise dos padrões e anti-padrões observados no código que **eu mesmo** (Claude) gerei ao longo das iterações deste site.
> Objetivo: extrair lições generalizáveis para futuros projetos.

## 1. Anti-padrão: paradigmas mistos por inércia

**Sintoma:** o site tem 5 paradigmas de styling coexistindo (BEM com `<style>`, inline `style={{}}`, Tailwind, Framer style, CSS-vars utility).

**Causa-raiz (Claude):**
- Cada sessão/iteração entra em um componente novo escolhendo o caminho de menor resistência **local** sem auditar o padrão estabelecido.
- Quando o usuário pede "uma seção nova rápida", inline `style={{}}` é o caminho mais rápido para acertar visualmente.
- Sem revisitar componentes antigos para alinhar.

**Lição:** ANTES de tocar qualquer componente novo, **listar componentes existentes e adotar o paradigma majoritário**. Se não houver, **declarar um paradigma e aderir.**

## 2. Anti-padrão: hover via JavaScript em vez de CSS `:hover`

**Sintoma:** `onMouseEnter`/`onMouseLeave` em 12+ lugares, manipulando `e.currentTarget.style.background` diretamente.

**Causa-raiz (Claude):**
- Quando estilo é inline (`style={{ background: '...' }}`), CSS `:hover` não funciona — então JS é a saída "natural".
- Inline styling escolhido para velocidade gera dependência de JS hover.

**Problemas:**
- Não funciona em touch (mobile)
- Sem `@media (hover: hover)` — sempre executa
- `prefers-reduced-motion` ignorado
- Dois estados duplicados (entry e leave) com risco de inconsistência

**Lição:** se inline → usar `style={{ ['--hover-bg']: '...' }}` + classe CSS com `&:hover`. **Ou** usar Tailwind (`hover:bg-X`). **Nunca** JS hover handler.

## 3. Anti-padrão: magic numbers como linguagem padrão

**Sintoma:** ~50 valores únicos em margens (6, 9, 10, 11, 14, 16, 18, 20, 22…). Sem múltiplo comum.

**Causa-raiz (Claude):**
- Quando o usuário pede "compacta um pouco esse espaço", eu ajusto de 32 para 28. Próxima iteração, de 28 para 24.
- Cada ajuste é local; nenhum se ancora em escala.
- Visualmente acerto, sistemicamente erra.

**Lição:** ao iniciar projeto, **definir e impor escala 4-base ou 8-base** desde o primeiro componente. Usar variáveis CSS (`var(--space-3)`) ou tokens. Resistir à tentação de "só esse 1px".

## 4. Anti-padrão: tokens declarados, ignorados na hora H

**Sintoma:** `--gold-soft: #C9A96E` declarado, mas `#C9A96E` aparece literal em 15+ lugares.

**Causa-raiz (Claude):**
- Tokens declarados no início do projeto.
- Conforme o site cresce, novos componentes copiam-pastam o último visualmente parecido.
- Como o copy-paste vem de inline `style={{ background: '#C9A96E' }}` em vez de `background: var(--gold-soft)`, o literal se propaga.

**Lição:** quando inline `style={{}}`, **forçar uso de `var(--token)`** mesmo em JSX:
```js
style={{ background: 'var(--gold-soft)' }}  // não #C9A96E
```

## 5. Anti-padrão: re-implementar utilities

**Sintoma:** `.container-x` declarado e usado em 4 componentes; **outros 5 reescrevem `maxWidth: 1280, margin: '0 auto', padding: '0 32px'`** inline.

**Causa-raiz (Claude):**
- Esquecimento de utilities. Componente novo escrito do zero porque "é só um container, fácil".
- O global CSS não é parte do contexto ativo quando estou editando um componente isolado.

**Lição:** quando editar/criar componente, **abrir `globals.css` primeiro** ou ter um índice de utilities visível. Tornar `globals.css` um documento curto com CHEAT SHEET no topo.

## 6. Anti-padrão: breakpoints ad-hoc por componente

**Sintoma:** 12 valores de breakpoint únicos no site.

**Causa-raiz (Claude):**
- Cada componente define seus breakpoints baseado em "quando o layout quebra **aqui**".
- 900 vs 920 vs 1024 vs 1100 — diferenças de 20-100px que parecem certas localmente, somam caos globalmente.

**Lição:** `--bp-sm`, `--bp-md`, `--bp-lg`, `--bp-xl` declarados ANTES de qualquer componente. Em CSS, mesmo que requeira `@custom-media` (Tailwind v4 já oferece via theme).

## 7. Anti-padrão: `<style>{`...`}</style>` em Client Component

**Sintoma:** 7 componentes injetam `<style>` runtime.

**Causa-raiz (Claude):**
- Não é styled-jsx (App Router não tem por padrão).
- React vai injetar como `<style>` global no DOM. Funciona porque CSS escopa por classes BEM únicas, mas:
  - Hot reload reaplica e recria
  - Não há cache, sem optimization
  - Em SSR, React 19 ainda não hoists pra `<head>` automaticamente
  - Cada navegação renderiza style block

**Lição:** em Next.js App Router, escolher **CSS Modules** (`Hero.module.css`) ou **Tailwind**. Nunca `<style>` runtime.

## 8. Anti-padrão: componentes de seção que sabem demais

**Sintoma:** `Prova.tsx` tem 757 linhas. Define dados (stats, cases, quotes, brands), Counter component, GrowthBar, InstagramMockup, CaseCard, Prova ela mesma + estilo gigante.

**Causa-raiz (Claude):**
- Quando o usuário pede "fundi clientes + métricas + cases em uma seção", a fusão acontece ARQUITETURALMENTE no mesmo arquivo.
- "Vai ficar mais simples ter tudo junto" — vira monstro.

**Lição:** ao fundir seções logicamente, **manter componentes separados** (`prova/Stats.tsx`, `prova/CaseCard.tsx`, `prova/QuoteWall.tsx`, `prova/BrandWall.tsx`) e compor em `Prova.tsx`. Pasta `app/components/prova/`.

## 9. Anti-padrão: `min-height: 44px` global → override em cada caso especial

**Sintoma:** globals tem `a, button { min-height: 44px }`. Header hamburger override `minHeight: 'auto'`. Footer social `minHeight: 'auto'`. Footer links `minHeight: 'auto'`.

**Causa-raiz (Claude):**
- Quando o button visual tem que ser pequeno (icon 38px), o conflito com global aparece.
- Solução fácil: override `auto` — perde o intent original.

**Lição:** definir global como **fallback** em wrapper utility, não em selector básico. Ex.: `.touch-target { min-height: 44px }` aplicada onde precisa. **Ou** aceitar 44px e ajustar visualmente o conteúdo (ícone 22px dentro de botão 44px).

## 10. Anti-padrão: usar `!important` para override

**Sintoma:** ~10 ocorrências de `!important` em media queries (`.contato-foto { display: none !important }`, `.plans-grid { grid-template-columns: 1fr !important }`).

**Causa-raiz (Claude):**
- Inline styles têm specificity altíssima. Para override em CSS de `<style>`, precisa `!important`.
- Sintoma de **mistura** de paradigmas (anti-padrão #1).

**Lição:** se forçando `!important`, é sinal de que o componente deve ser refatorado para **um único paradigma**.

## 11. Anti-padrão: motion sem `prefers-reduced-motion`

**Sintoma:** Framer Motion usado em todo o site. Zero respeito a `prefers-reduced-motion`.

**Causa-raiz (Claude):**
- Framer Motion tem util `useReducedMotion()` — não usado.
- Decisão de motion é "vou fazer parecer premium" — esqueço acessibilidade.

**Lição:** ao adicionar motion, **wrap em hook**:
```tsx
const reduceMotion = useReducedMotion();
const variants = reduceMotion ? { ... static ... } : { ... animated ... };
```

## 12. Anti-padrão: `<img>` em vez de `next/image`

**Sintoma:** 3 imagens com `<img>` + `eslint-disable @next/next/no-img-element`.

**Causa-raiz (Claude):**
- `next/image` em Next 16 mudou (App Router). Pra evitar lidar com `width/height` ou `sizes` propriamente, escolho `<img>` e desabilito o lint.
- Atalho que custa Lighthouse score.

**Lição:** usar `next/image` mesmo que requeira ajustar 3 props. Performance > comodidade.

## 13. Padrão BOM: `aria-hidden` em decorações

**Sintoma:** Hero `hero-bg-1`, `hero-bg-2`, `hero-kicker__rule`, todos os roman numbers, frames decorativos têm `aria-hidden`.

**Lição:** **isso eu acertei consistentemente**. Manter como prática.

## 14. Padrão BOM: `lang="pt-BR"` + metadata + openGraph

**Lição:** acertei o básico de SEO/i18n no `layout.tsx`. Manter.

## 15. Padrão BOM: extração de dados em arrays/objetos

**Sintoma:** `Metodologia` define `acts: Act[]`. `Prova` define `cases: Case[]`. `Footer` define `sections`. `Planos` define `plans`.

**Lição:** padrão de "data-driven render" foi consistente. Bom.

## 16. Anti-padrão sutil: optical-size do Fraunces aplicado uma vez

**Sintoma:** `.serif-display` utility com `font-variation-settings: "opsz" 144` — usado **só** no Hero h1. Outros h2/h3 perdem o ajuste óptico.

**Causa-raiz (Claude):**
- Esqueci da utility ao escrever h2 dos outros componentes.
- Ou: cada componente tem seu próprio `<style>` que redeclara `font-family: 'Fraunces', serif` sem incluir variation.

**Lição:** quando houver utility de tipo, **aplicar consistentemente** em todos os elementos da hierarquia. Ou herdar via classe pai.

## Lições generalizáveis (TL;DR)

1. **Auditar paradigma existente antes de criar componente novo.**
2. **Usar `var(--token)` mesmo dentro de inline `style={{}}`.**
3. **Escala 4/8-base obrigatória desde o primeiro componente.**
4. **Tokens de spacing/type/breakpoint/motion declarados antes de scaling.**
5. **CSS Modules ou Tailwind para Next App Router — nunca `<style>` runtime.**
6. **Hover SEMPRE em CSS `:hover`, nunca JS handler.**
7. **`prefers-reduced-motion` é mandatory em qualquer projeto com Framer Motion.**
8. **Componentes < 200 linhas. Pasta `Component/index.tsx + Component/parts.tsx`.**
9. **`next/image` sempre, custo de aprender < custo de Lighthouse.**
10. **Tailwind v4 já configurado → comprometer-se ou remover do package.json.**

## Aplicação à knowledge base

Salvar lições em:
```
~/.sinapse/sinapse/squads/claude-code-mastery/knowledge-base/ui-construction-patterns.md
```

Próxima vez que o usuário pedir "site editorial Next.js", começar por declarar:
- Paradigma único (Tailwind preferencial)
- Tokens completos (cor + espaço + tipo + bp + motion)
- Componentes base (`<Kicker>`, `<SectionHeader>`, `<CTA>`, `<EditorialFrame>`)
- `prefers-reduced-motion` hook desde o setup
- Folder structure por componente (`/Hero/index.tsx`, `/Hero/parts.tsx`)
