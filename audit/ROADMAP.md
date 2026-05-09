# 🗺️ ROADMAP — Plano de Correção Site Laura

> Sequenciamento priorizado das correções identificadas na auditoria.
> Total estimado: 12-16h (caminho B recomendado).

---

## Sprint 1 — Correções P0 (urgência) · 4-6h

### 1.1 — Brunnen case (15min)
- **Arquivo:** `app/components/Prova.tsx` linhas 30-53
- **Ação:** Decidir com Laura: preencher dados reais ou remover o case.
- **Se remover:** ajustar grid `prova-cases-grid` para single col centralizada com `Mariana Penteado`.
- **Owner:** Laura (dados) + agente (implementação)

### 1.2 — Mockups iPhone em mobile (45min)
- **Arquivo:** `app/components/Prova.tsx`
- **Ação:**
  - Mudar breakpoint `mockups-row` de 480px para **760px** (1-col bem antes)
  - Em 760+ manter 2-col com max-width 200px cada
  - Em <760 forçar 1-col com seta rotacionada (já tem essa lógica em <480, expandir)
- **Validação:** Chrome DevTools 375/390/430/768

### 1.3 — Hover JS → CSS (1.5h)
- **Arquivos:** Header, Portfolio, Planos, Contato, Footer (12+ ocorrências)
- **Ação:**
  - Para cada componente com inline `style`, extrair botões/links em classes CSS no `<style>` block do mesmo componente
  - Usar `:hover` real
  - Remover `onMouseEnter`/`onMouseLeave`
- **Validação:** testar em iPhone real (Safari Touch)

### 1.4 — Contraste WCAG AA (1h)
- **Arquivos:** globals.css + Footer + Contato + todos os kickers
- **Ações:**
  - Aumentar `rgba(255,255,255,0.30)` → `0.55`, `0.35` → `0.55` (Footer)
  - Aumentar `rgba(10,10,10,0.35)` → `0.55` (Contato labels)
  - Para gold sobre parchment em texto pequeno: criar token `--gold-text` `#9A7848` (4.5:1)
  - Aplicar `--gold-text` em kickers (ou aumentar font-size para >=18px e usar `--gold` original)
- **Validação:** WAVE / axe DevTools

### 1.5 — Touch targets (45min)
- **Arquivo:** Header (hamburger), Footer (social, links), Manifesto (sound button)
- **Ação:** Remover `minHeight: 'auto'` overrides; ajustar visual interno (não derrubar a regra).
- **Validação:** axe DevTools "Target size" rule

### 1.6 — A11y mocks/decoração (30min)
- **Arquivo:** Prova.tsx
- **Ações:**
  - Wrap `<InstagramMockup>` em `<div aria-hidden="true">`
  - Counter: adicionar `aria-label` no container com valor final
- **Validação:** VoiceOver / NVDA

### 1.7 — Vídeo Manifesto compatibility (30min)
- **Arquivo:** Manifesto.tsx + `public/videos/`
- **Ação:**
  - Converter `IMG_2301.mov` para `.mp4` (H.264) e `.webm` (VP9)
  - Múltiplos `<source>` no `<video>`
  - Adicionar `aria-label="Vídeo decorativo"` + `role="presentation"` se for puramente estético
- **Comando sugerido:** `ffmpeg -i IMG_2301.mov -c:v libx264 -movflags +faststart manifesto.mp4`

**Fim Sprint 1: site presentável, sem violações críticas.**

---

## Sprint 2 — Fundação de Design System · 4-6h

### 2.1 — Spacing scale (1.5h)
- **Arquivo:** `globals.css`
- **Ação:**
```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```
- Refatorar 1 componente (Hero) como prova de conceito
- Demais componentes ficam para Sprint 3

### 2.2 — Breakpoint tokens (1h)
- **Ação:** decidir 4 BPs canônicos
```css
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
}
```
- Em Tailwind v4 (`@theme` block) declarar screens
- Documentar regra: **só usar esses 4 BPs**, nunca novos.

### 2.3 — Type scale (1.5h)
- **Ação:** definir escala canônica
```css
:root {
  --text-display: clamp(2.4rem, 6vw, 5rem);     /* H1 hero */
  --text-h2:      clamp(2rem, 3.6vw, 3rem);
  --text-h3:      clamp(1.4rem, 2.4vw, 2rem);
  --text-lg:      1.125rem;
  --text-body:    1rem;
  --text-sm:      0.875rem;
  --text-mono-kicker: 0.74rem;
  --text-caption: 0.65rem;
}
```
- Refatorar headings em 1 componente como POC

### 2.4 — Motion tokens (45min)
```css
:root {
  --duration-fast: 0.2s;
  --duration-base: 0.35s;
  --duration-slow: 0.7s;
  --ease-editorial: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-quart: cubic-bezier(0.22, 1, 0.36, 1);
}
```
- Criar `useReducedMotion()` wrapper utility
- Aplicar em 1 componente como POC

### 2.5 — DESIGN_SYSTEM.md (1h)
- **Ação:** criar `docs/DESIGN_SYSTEM.md` com:
  - Inventário de tokens
  - Cheat sheet de utilities
  - Exemplos de uso
  - Anti-padrões a evitar
- Linkar do `AGENTS.md`

**Fim Sprint 2: design system declarado, primeiro componente refatorado como referência.**

---

## Sprint 3 — Componentização & Refactor · 4-6h

### 3.1 — Componentes base (2h)
Criar pasta `app/components/_base/`:
- `<Kicker>` — substitui 6 implementações (Manifesto, Metodologia, Prova, Portfolio, Planos, Contato)
- `<SectionHeader>` — kicker + h2 + sub
- `<CTA>` — com variants `primary | secondary | gold | ghost` e tamanhos
- `<EditorialFrame>` — moldura decorativa com offset

### 3.2 — Refactor seções para componentes base (2h)
Aplicar `<Kicker>`, `<SectionHeader>`, `<CTA>` em todas as 7 seções.

### 3.3 — Quebrar Prova.tsx (1.5h)
Atualmente 757 linhas. Quebrar em:
```
app/components/prova/
├── index.tsx           (composição, ~80 linhas)
├── Stats.tsx           (~60 linhas)
├── CaseCard.tsx        (~150 linhas)
├── InstagramMockup.tsx (~120 linhas)
├── QuoteWall.tsx       (~80 linhas)
├── BrandWall.tsx       (~50 linhas)
└── data.ts             (cases, quotes, brands, stats)
```

### 3.4 — Migrar para CSS Modules ou Tailwind (decisão estratégica)
**Caminho A (Tailwind):**
- Já está instalado e tokens em `@theme inline`
- Refatorar 1 componente como POC (sugestão: Footer)
- Validar produtividade

**Caminho B (CSS Modules):**
- Cada componente vira `Component/styles.module.css`
- Mais controle, menos churn

→ **Recomendação:** Tailwind se a equipe vai escalar; CSS Modules se vai ficar 1-2 devs.

**Fim Sprint 3: arquitetura escalável, Prova decomposto, componentes base em uso.**

---

## Sprint 4 — Polimento & Performance · 2-3h

### 4.1 — `next/image` (1h)
- Hero, Portfolio (6×), Contato → `next/image`
- Adicionar `placeholder="blur"` quando possível
- Ajustar `sizes` por viewport

### 4.2 — `next/font` (45min)
- Substituir Google Fonts via `@import url(...)` por `next/font/google`
- Ganho: zero render-blocking, font-display swap automático

### 4.3 — Skip-to-content + focus-visible (30min)
- Adicionar link "Pular para conteúdo" em layout
- CSS `:focus-visible` global com outline gold

### 4.4 — Header a11y (30min)
- `aria-expanded`, `aria-controls`, `aria-label` dinâmico no hamburger
- Mobile menu como `role="dialog"` + `aria-modal` + Esc handler + focus trap

### 4.5 — Schema.org (30min)
- JSON-LD `Person` + `ProfessionalService` em layout
- Sitemap.xml + robots.txt em `app/`

**Fim Sprint 4: Lighthouse 95+ em todos os pilares.**

---

## Resumo executivo

| Sprint | Foco | Tempo | Output |
|---|---|---|---|
| 1 | P0 — correções urgentes | 4-6h | Site presentável e acessível |
| 2 | Design System fundação | 4-6h | Tokens completos + 1 componente POC |
| 3 | Componentização | 4-6h | Componentes base + refactor + Prova decomposto |
| 4 | Polimento | 2-3h | Lighthouse 95+ |
| **Total** | — | **14-21h** | Site escalável, mantível, performático |

→ Para o **caminho B recomendado** (12-16h): executar Sprint 1 + Sprint 2 + parte do Sprint 4.

---

## Issues priorizados (master tracker)

### P0 (Sprint 1 obrigatório)
- [ ] Brunnen case com placeholders zerados
- [ ] Mockups iPhone ilegíveis em mobile
- [ ] Hover via JavaScript (12+ lugares)
- [ ] Contraste WCAG AA falhando (5+ lugares)
- [ ] Touch targets <44px (Header hamburger, Footer social)
- [ ] Mockups Prova sem `aria-hidden` (VoiceOver lê lixo)
- [ ] Counter sem `aria-label` final
- [ ] Vídeo `.mov` (incompat Android Chrome)

### P1 (Sprint 2-3)
- [ ] Spacing scale ausente
- [ ] Type scale ausente
- [ ] Breakpoint tokens ausentes (12 valores → 4)
- [ ] Motion tokens ausentes + reduced-motion
- [ ] Drift de cores (150 literais → tokens)
- [ ] Re-implementação de `.container-x` em 5 componentes
- [ ] `section-pad-y*` declarados e ignorados
- [ ] Componentes base ausentes (Kicker, SectionHeader, CTA)
- [ ] `<style>{}` runtime em 7 componentes
- [ ] Prova.tsx 757 linhas
- [ ] Footer h3 sem h2 (hierarquia)
- [ ] Mobile menu sem dialog/modal/Esc
- [ ] Header hamburger sem `aria-expanded`
- [ ] `:focus-visible` ausente
- [ ] `<img>` em vez de `next/image` (3×)
- [ ] Foto Contato sumindo em 768- (display:none)
- [ ] Cards portfolio sem destino (`cursor:pointer` engana)
- [ ] Skip-to-content ausente
- [ ] Primary CTA inconsistente (preto vs gold)
- [ ] TiltCard sem fallback mobile
- [ ] Tailwind instalado mas ignorado (decisão)

### P2 (Sprint 4 ou backlog)
- [ ] Indicador de seção ativa no Header
- [ ] CTA "Falar com a Laura" extra em Planos duplica função
- [ ] Schema.org JSON-LD ausente
- [ ] Sitemap/robots ausentes
- [ ] Border-radius ad-hoc
- [ ] Z-index scale ausente
- [ ] Counter setInterval em StrictMode dev
- [ ] Avatares Hero __trust ilegíveis (0.62rem)
- [ ] Hero padding-y fixo 80px (não escala)
- [ ] Header em 1024px ainda bem
- [ ] WhatsApp FAB pode tampar conteúdo final em <480px
- [ ] DESIGN_SYSTEM.md ausente
- [ ] `.serif-display` utility só em Hero h1

### P3 (nice-to-have)
- [ ] Hero hero-bg-2 em px (não escala em 4K)
- [ ] Smooth scroll global pode incomodar
- [ ] FAQ section
- [ ] Dark mode toggle (já tem identidade dark forte)

---

## Próxima ação

**Recomendado:** começar Sprint 1, item 1.1 (Brunnen — pedir dados pra Laura) em paralelo com 1.3 (hover JS → CSS, agente executa autonomamente).
