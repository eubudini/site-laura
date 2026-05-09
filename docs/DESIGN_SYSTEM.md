# Design System — Site Laura

Fundacao formal do design system declarada no Sprint 2 do audit. Toda nova
UI deve consumir os tokens abaixo. Tudo vive em `app/globals.css` no `:root`
e (quando aplicavel) tambem em `@theme inline` para virar utility do
Tailwind v4.

> **Regra de ouro:** se voce escreveu um numero magico em CSS (px, rem, ms,
> cubic-bezier, breakpoint), pare. Existe um token. Se nao existe, proponha
> antes de criar.

---

## 1. Tokens

### 1.1 Color (pre-existente)

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#0A0A0A` | Texto principal, backgrounds dark |
| `--ink-80/-50/-20` | `rgba(10,10,10, .8/.5/.2)` | Texto secundario, dividers |
| `--chalk` | `#FFFFFF` | Texto sobre dark |
| `--parchment` | `#F8F5F1` | Background do site |
| `--parchment-dark` | `#EDE8E1` | Cards, photo placeholder |
| `--gold` | `#B8956A` | Acento principal |
| `--gold-soft` | `#C9A96E` | Hover states |
| `--gold-text` | `#8E6E42` | Gold AA-safe sobre parchment p/ texto < 18px |
| `--gold-light` | `rgba(184,149,106,0.10)` | Backgrounds suaves |
| `--gold-mid` | `rgba(184,149,106,0.32)` | Borders, scrollbar |
| `--obsidian / -2 / -3` | `#0A0A0A / #131313 / #1C1C1C` | Variacoes de dark |

### 1.2 Spacing scale

Escala 4-base. **Use sempre os tokens, nunca px hardcoded.**

| Token | px | Uso tipico |
|---|---:|---|
| `--space-1` | 4 | Hairline gaps |
| `--space-2` | 8 | Pequenos gaps internos |
| `--space-3` | 12 | Gap padrao kicker→texto |
| `--space-4` | 16 | Padding de input, gap base |
| `--space-5` | 20 | Espaco entre items |
| `--space-6` | 24 | Margin-bottom de subtitulos |
| `--space-8` | 32 | Padding-x de container, gap CTAs |
| `--space-10` | 40 | Margin-bottom de paragrafos hero |
| `--space-12` | 48 | Block gap medio |
| `--space-16` | 64 | Section padding mobile |
| `--space-20` | 80 | Section padding desktop, column-gap hero |
| `--space-24` | 96 | Section padding grande |
| `--space-32` | 128 | Block hero spacing |

Tailwind v4 expoe a mesma escala como utilities: `p-1` = 4px, `p-2` = 8px, ...,
`p-32` = 128px (graças a `--spacing-*` declarado em `@theme`).

### 1.3 Breakpoints (4 canonicos, **nunca novos**)

| Token / utility | Valor | Quando usar |
|---|---:|---|
| `--bp-sm` / `sm:` | 480px | Phones grandes |
| `--bp-md` / `md:` | 768px | Tablet portrait |
| `--bp-lg` / `lg:` | 1024px | Tablet landscape / laptop pequeno |
| `--bp-xl` / `xl:` | 1280px | Desktop padrao (max-width do container) |

Anti-padrao: criar `@media (max-width: 900px)` ou similar. Se aparecer
exigencia editorial, documentar como excecao na story e nao no codigo solto.

### 1.4 Type scale

| Token | Valor | Uso |
|---|---|---|
| `--text-display` | `clamp(2.4rem, 6vw, 5rem)` | H1 hero |
| `--text-h2` | `clamp(2rem, 3.6vw, 3rem)` | Section title |
| `--text-h3` | `clamp(1.4rem, 2.4vw, 2rem)` | Card / subseccao |
| `--text-lg` | `1.125rem` | Lead paragraphs |
| `--text-body` | `1rem` | Body default |
| `--text-sm` | `0.875rem` | Captions, helpers |
| `--text-mono-kicker` | `0.74rem` | Kicker monoespacado |
| `--text-caption` | `0.65rem` | Avatares, labels micro |

### 1.5 Motion

| Token | Valor | Uso |
|---|---|---|
| `--duration-fast` | `0.2s` | Hover, micro-interacoes |
| `--duration-base` | `0.35s` | Transition padrao |
| `--duration-slow` | `0.7s` | Entradas hero, framer-motion |
| `--ease-editorial` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Entradas suaves padrao |
| `--ease-out-quart` | `cubic-bezier(0.22, 1, 0.36, 1)` | Snaps elegantes |

**Reduced motion:** sempre usar `useReducedMotion()` (`lib/use-reduced-motion.ts`)
para desligar animacoes quando o usuario tem `prefers-reduced-motion: reduce`.
A regra global em `globals.css` ja zera `animation` e `transition`, mas o
framer-motion precisa do hook explicito.

---

## 2. Cheat sheet

```css
/* ✓ Bom */
.card {
  padding: var(--space-6);
  margin-bottom: var(--space-10);
  font-size: var(--text-body);
  transition: all var(--duration-base) var(--ease-editorial);
}

@media (max-width: 768px) { /* usa --bp-md */
  .card { padding: var(--space-4); }
}
```

```tsx
// ✓ Bom — animacao com reduced motion
"use client";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Card() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.7 }}
    />
  );
}
```

```tsx
// ✓ Bom — Tailwind utilities consumindo a escala
<section className="p-8 md:p-16 xl:p-20" />
```

---

## 3. Exemplos canonicos

- **Hero** (`app/components/Hero.tsx`) — POC do Sprint 2.
  - `padding: var(--space-20) var(--space-8)` no grid
  - `column-gap: var(--space-20)`
  - `.hero-h1 font-size: var(--text-display)`
  - `.hero-cta transition: all var(--duration-base) var(--ease-editorial)`
  - `useReducedMotion()` desligando todas as entradas framer-motion.

---

## 4. Anti-padroes (FORBIDDEN)

1. **px hardcoded em spacing.** Use `--space-*`.
2. **Breakpoint custom (`max-width: 900px`).** Use `--bp-sm/md/lg/xl`.
3. **`font-size` magico.** Use `--text-*`.
4. **`transition: all 0.3s ease`.** Use `--duration-*` + `--ease-*`.
5. **`framer-motion` sem `useReducedMotion()`.** Quebra a11y.
6. **Inline `style={{ padding: 24 }}`.** Use classe + token.
7. **Cores hex/rgba ad-hoc.** Use tokens de cor.
8. **Criar token novo sem documentar aqui.** Edite primeiro este arquivo.

---

## 5. Roadmap

- Sprint 1: travessoes removidos + `.section-pad-y*` + `.container-x` baseline.
- **Sprint 2 (atual):** tokens declarados + Hero como POC. Documentado aqui.
- Sprint 3: refatorar Manifesto/Metodologia/Prova/Portfolio/Planos/Contato/Footer
  para consumir os tokens. Criar componentes base (`<Kicker>`, `<SectionHeader>`,
  `<CTA>`).
- Sprint 4: `next/image`, `next/font`, schema.org, Lighthouse 95+.

> Referencias: `audit/ROADMAP.md`, `audit/02f-design-system.md`.
