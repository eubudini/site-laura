# Story: audit-sprint2-design-system — Fundação do Design System

**ID:** SL-AUDIT-02
**Status:** Ready (validated by @product-lead)
**Branch:** `caio/refactor/audit-sprint1-p0` (continua na mesma branch — Sprint 2 segue logo apos Sprint 1)
**Sprint:** Sprint 2 (audit) — Fundacao de Design System

## Briefing
Declarar a fundacao formal de tokens do site Laura: spacing, breakpoints, type
scale, motion. Refatorar Hero como POC para validar que os tokens funcionam.
Documentar tudo em `docs/DESIGN_SYSTEM.md` para servir de referencia para
Sprints 3 e 4.

Base: `audit/ROADMAP.md` Sprint 2 + `audit/02f-design-system.md`.

## Scope IN
- 2.1 Spacing scale: tokens `--space-1..--space-32` em `app/globals.css`.
- 2.2 Breakpoint tokens: `--bp-sm/md/lg/xl` em `:root` + declarados em `@theme`
  do Tailwind v4 (`--breakpoint-*`).
- 2.3 Type scale: `--text-display`, `--text-h2`, `--text-h3`, `--text-lg`,
  `--text-body`, `--text-sm`, `--text-mono-kicker`, `--text-caption`.
- 2.4 Motion tokens: `--duration-fast/base/slow`, `--ease-editorial`,
  `--ease-out-quart`. Hook `useReducedMotion()` em `lib/`.
- POC Hero: refatorar `Hero.tsx` para consumir os tokens novos em spacing,
  type, motion (em pelo menos um trecho de cada categoria) sem regressao
  visual.
- 2.5 `docs/DESIGN_SYSTEM.md`: inventario, cheat sheet, anti-padroes. Linkar
  de `AGENTS.md`.

## Scope OUT
- Refatorar Manifesto/Metodologia/Prova/Portfolio/Planos/Contato/Footer (Sprint 3).
- Componentes base `<Kicker>`/`<SectionHeader>`/`<CTA>` (Sprint 3).
- Migrar para CSS Modules ou Tailwind utilities cross-component (Sprint 3).
- `next/image`, `next/font`, schema.org, sitemap (Sprint 4).

## Acceptance Criteria
- **AC1:** `app/globals.css` declara 13 spacing tokens (`--space-1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32`).
- **AC2:** `app/globals.css` declara 4 breakpoint tokens em `:root`
  (`--bp-sm/md/lg/xl`) e registra os 4 no bloco `@theme` como
  `--breakpoint-sm/md/lg/xl`.
- **AC3:** `app/globals.css` declara 8 type-scale tokens.
- **AC4:** `app/globals.css` declara 5 motion tokens.
- **AC5:** `lib/use-reduced-motion.ts` exporta `useReducedMotion(): boolean`
  baseado em `matchMedia('(prefers-reduced-motion: reduce)')`, SSR-safe.
- **AC6:** `Hero.tsx` consome:
  - pelo menos 1 spacing token (`var(--space-*)`)
  - o type token `--text-display` no `.hero-h1`
  - 1 motion token (`var(--duration-*)` e/ou `var(--ease-*)`) ou usa
    `useReducedMotion()` para desligar animacao.
- **AC7:** `npm run build` passa.
- **AC8:** `npm run lint` passa sem novos warnings.
- **AC9:** `docs/DESIGN_SYSTEM.md` existe com 4 secoes (Tokens, Cheat Sheet,
  Exemplos, Anti-padroes) e e referenciado por `AGENTS.md`.
- **AC10:** Sprint 1 nao regride: nenhum em-dash `—` reintroduzido em `app/`.

## Validation
- `grep -c "—" app/ -r` segue `0`.
- `grep -E "var\(--space-|var\(--text-|var\(--duration-|var\(--ease-" app/components/Hero.tsx` retorna >= 3 matches.
- Build + lint verdes.
- Visual smoke test do Hero em viewport desktop e 375px (Hero nao quebrou).

## Notes
- Tailwind v4: tokens declarados no `@theme inline` viram utilities
  automaticamente (`bg-`, `text-`, `p-`, `m-`, etc). Para spacing, declarar
  tambem `--spacing-*` para ativar `p-1`, `m-2` etc com a escala custom.
- POC e POC: nao tentar refatorar todos os hardcodes do Hero. Substituir
  apenas o suficiente para provar o sistema (mantendo paridade visual).
