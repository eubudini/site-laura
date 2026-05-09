# SL-AUDIT-03-04 — Componentização (S3) + Polimento & Performance (S4)

**Status:** Ready
**Owner:** @developer
**Validated by:** @product-lead (fast-track, escopo derivado de audit/ROADMAP.md)

---

## Contexto

Sprints 1 e 2 da auditoria já estão entregues (travessões removidos, tokens
declarados, Hero refatorado como POC). Esta story cobre Sprints 3 e 4
combinados:

- **S3** — Componentização (Kicker, SectionHeader, CTA, EditorialFrame),
  refactor das 7 seções, decomposição de `Prova.tsx`.
- **S4** — Polimento técnico (`next/image`, `next/font`, a11y, Schema.org).

Decisão estratégica: **NÃO migrar para Tailwind nem CSS Modules** agora.
Mantemos `<style>` blocks consumindo tokens.

---

## Acceptance Criteria

### S3.1 — Componentes base
- **GIVEN** `app/components/_base/` existe
- **WHEN** o developer cria `Kicker`, `SectionHeader`, `CTA`, `EditorialFrame`
- **THEN** cada um aceita props tipadas, usa só tokens (`var(--*)`) e tem
  variants documentadas no próprio arquivo.

### S3.2 — Refactor das seções
- **GIVEN** os componentes base existem
- **WHEN** as 7 seções (Hero, Manifesto, Metodologia, Prova, Portfolio,
  Planos, Contato) são refatoradas
- **THEN** kickers, headers e CTAs usam os componentes base — não mais
  blocos inline duplicados — e o visual se mantém idêntico.

### S3.3 — Quebrar Prova
- **GIVEN** `Prova.tsx` tem 757 linhas
- **WHEN** for decomposto em `app/components/prova/{index,Stats,CaseCard,
  InstagramMockup,QuoteWall,BrandWall,data}.tsx`
- **THEN** nenhum arquivo passa de 250 linhas e o re-export `Prova.tsx`
  segue funcional para `app/page.tsx`.

### S4.1 — next/image
- **GIVEN** Hero, Portfolio (6×), Contato usam `<img>` hoje
- **WHEN** migrarem para `next/image`
- **THEN** lighthouse LCP melhora; fallback para vídeos `.mov` permanece.

### S4.2 — next/font
- **GIVEN** `globals.css` faz `@import url(...)` Google Fonts
- **WHEN** for substituído por `next/font/google`
- **THEN** `<html>` recebe `className` com vars de fonte e o `@import`
  some.

### S4.3 — Skip-to-content + focus-visible
- **GIVEN** já existem em globals.css
- **THEN** validar e manter; nada regride.

### S4.4 — Header a11y
- **GIVEN** Header tem hamburger sem `aria-expanded` e mobile menu sem `dialog`
- **WHEN** atualizado
- **THEN** botão tem `aria-expanded`, `aria-controls`, `aria-label` dinâmico;
  menu é `role="dialog"` + `aria-modal="true"`; Esc fecha; focus volta ao
  toggle.

### S4.5 — Schema.org
- **GIVEN** layout sem JSON-LD
- **WHEN** adicionado
- **THEN** `<script type="application/ld+json">` com `Person` +
  `ProfessionalService`; `app/sitemap.ts` e `app/robots.ts` existem.

---

## Scope

### IN
- Componentes base + refactor.
- Decomposição Prova.
- next/image, next/font, JSON-LD, sitemap, robots, header dialog.
- Preservar Sprints 1 e 2 (travessões zero; tokens em uso).

### OUT
- Migração para Tailwind/CSS Modules.
- Mudança de copy/conteúdo.
- Conversão `.mov` → `.mp4/.webm`.
- Lighthouse rodando em CI.

---

## File List (a ser preenchido pelo developer)

A preencher conforme entrega.
