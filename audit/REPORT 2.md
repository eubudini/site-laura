# 📊 EXECUTIVE SUMMARY — Auditoria Site Laura

> Auditoria completa de 11 componentes + layout + design system global.
> Stack: Next.js 16 + React 19 + Tailwind v4 + Framer Motion 12.
> Data: 2026-05-07.

---

## Veredicto geral

| Dimensão | Score | Status |
|---|---|---|
| Storytelling editorial | 9/10 | 🟢 forte |
| Tipografia (uso) | 8/10 | 🟢 |
| Detalhes únicos | 9/10 | 🟢 |
| Conversão (estrutura) | 7/10 | 🟢 |
| Storytelling visual | 7/10 | 🟢 |
| **HTML semântico** | 7/10 | 🟡 |
| **UX patterns** | 6.5/10 | 🟡 |
| **Hierarquia visual** | 7/10 | 🟡 |
| **UI craft (cores/transitions)** | 5.8/10 | 🟡 |
| **Acessibilidade** | 5.5/10 | 🟡 |
| **Responsividade** | 5.0/10 | 🔴 |
| **Espaçamento sistêmico** | 4/10 | 🔴 |
| **Design System** | 2.3/10 | 🔴 |

**Score global: 6.0/10**

→ Site **bonito e narrativamente forte** com **fundação técnica frágil**. Visual segura a impressão; estrutura não escala.

---

## Top 5 problemas críticos (P0)

### 1. Brunnen case com placeholders zerados em produção
**Local:** `Prova.tsx` linhas 30-53
**Problema:** Dados do primeiro case mostram `0K, 0%, +000%` e copy "Adicione aqui o texto editorial..."
**Impacto:** Quebra credibilidade da seção Prova (que é o coração da conversão).
**Fix:** Preencher dados reais de Brunnen OU remover o case (deixar só Mariana Penteado).

### 2. Drift massivo de tokens de cor (3:1)
**Onde:** todos os componentes
**Problema:** ~150 ocorrências de `#C9A96E`, `#B8956A`, `#FFFFFF`, `#0A0A0A`, `rgba(10,10,10,X)` literais vs ~50 usos de `var(--token)`. 26 valores únicos de opacidade `rgba(10,10,10,X)`.
**Impacto:** Manutenção impossível. Mudar paleta = refatorar 150 lugares.
**Fix:** Refatoração + lint rule (`stylelint-declaration-strict-value`).

### 3. Mockups iPhone ilegíveis em mobile
**Local:** `Prova.tsx` `InstagramMockup`
**Problema:** Em <480px o grid quebra para 1-col mas até lá, dois mockups lado-a-lado em viewport 480px ficam ~150px cada — ilegíveis.
**Impacto:** Cases (prova social) inviáveis em mobile, onde >60% do tráfego está.
**Fix:** Forçar 1-col até 760px OU implementar comparator slider antes/depois.

### 4. Hover via JavaScript em 12+ lugares
**Onde:** Header, Portfolio, Planos, Contato, Footer
**Problema:** `onMouseEnter`/`onMouseLeave` manipulando `style.background`.
**Impacto:**
- Não funciona em touch (mobile)
- `prefers-reduced-motion` ignorado
- Estados duplicados com risco de divergência
**Fix:** Migrar para CSS `:hover` (require classes) ou Tailwind `hover:` utilities.

### 5. Contraste WCAG AA falhando em 5+ lugares
**Locais:** kickers gold sobre parchment, footer texts em rgba(255,255,255,0.30-0.35), labels Contato em rgba(10,10,10,0.35)
**Impacto:** Acessibilidade legal (LGPD/WCAG) + leitura difícil em sol direto / monitores ruins.
**Fix:** Aumentar opacidades para mínimo 0.5 (light) / 0.6 (sobre escuro), gold para `#A07840` em texto pequeno.

---

## Diagnóstico estrutural

### Causa-raiz #1: paradigmas de styling mistos
5 paradigmas coexistindo (BEM `<style>`, inline `style={{}}`, Tailwind, CSS vars utility, Framer style). Tailwind v4 instalado mas usado por **1 componente apenas** (`TiltCard`).

**Decisão pendente:** abraçar Tailwind ou remover do stack.

### Causa-raiz #2: design system 30% completo
Tokens cobrem **cor (parcial)**, **font families** e **3 utilities**.
**Faltam:** spacing scale, type scale, breakpoint scale, motion scale, radius scale, shadow scale, z-index scale, opacity scale.

→ 13 categorias de tokens ausentes. Cada componente improvisa.

### Causa-raiz #3: zero abstração de componentes
Padrões repetidos (Kicker, SectionHeader, CTA, EditorialFrame, Stat) re-implementados em cada seção. Nenhum componente compartilhado acima do nível de seção.

### Causa-raiz #4: Next.js 16 conventions parcialmente seguidas
- ✓ App Router
- ✓ `metadata` em layout
- ✓ `lang="pt-BR"`
- ❌ `next/image` ignorado (3 `<img>` com `eslint-disable`)
- ❌ `next/font` ignorado (Google Fonts via `@import url()` — bloqueia render)
- ❌ `viewport` não declarado explicitamente
- ❌ CSS injection via `<style>` runtime em 7 componentes

---

## Pontos fortes (manter)

1. **Storytelling editorial** — filtro/processo/prova/oferta bem orquestrados
2. **Tipografia** — Fraunces + Inter Tight + DM Mono é combinação acertada
3. **Hierarquia narrativa por background** — light/dark intercalado bem dosado
4. **Detalhes únicos** — frames decorativos, romans gigantes atrás dos atos, gap dourado entre stats, mockups com palette por cliente, signature no vídeo
5. **Animações** — Counter scroll-triggered, GrowthBar, fade-up sutil — bem dosado
6. **HTML landmarks** — `header`/`main`/`section`/`footer` corretos
7. **Padrão data-driven** — arrays/objetos para acts, cases, plans, sections — escalável
8. **Decorações com `aria-hidden`** — consistente

---

## Métricas finais por componente

| Componente | Linhas | Score técnico | Drift |
|---|---|---|---|
| layout.tsx | 35 | 9/10 | nenhum |
| globals.css | 113 | 7/10 | tokens ok, scales faltam |
| page.tsx | 30 | 10/10 | composição limpa |
| Hero | 472 | 7/10 | médio |
| Header | 307 | 6/10 | alto (inline + JS hover) |
| Manifesto | 367 | 7/10 | médio |
| Metodologia | 438 | 7.5/10 | baixo |
| Prova | 757 | 5/10 | tudo num arquivo |
| Portfolio | 173 | 4/10 | 100% inline |
| Planos | 277 | 4/10 | 100% inline + JS hover |
| Contato | 302 | 4/10 | 100% inline + JS hover |
| Footer | 247 | 5/10 | h3 hierarchy + 100% inline |
| TiltCard | 100 | 8/10 | único usando Tailwind |
| WhatsAppFloat | 49 | 8/10 | OK |

---

## Decisão estratégica recomendada

| Caminho | Esforço | Resultado |
|---|---|---|
| **A. Refatoração total** | 30-40h | Site moderno, escalável, mantível, lint-strict |
| **B. Refatoração de fundação + correções P0** | 12-16h | P0/P1 resolvidos, design system parcial |
| **C. Apenas correções P0** | 4-6h | Site presentável, fundação ainda frágil |

→ **Recomendação:** Caminho **B**. Risco-recompensa equilibrado.

Detalhes do roadmap em `ROADMAP.md`.
