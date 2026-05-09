# Story: audit-sprint1-p0 — Remoção de travessões + ajustes de spacing

**ID:** SL-AUDIT-01
**Status:** Ready (validated by @product-lead)
**Branch:** `caio/refactor/audit-sprint1-p0`
**Sprint:** Sprint 1 P0 (audit)

## Briefing
Aplicar dois fixes de baixo risco, alto impacto, baseados em `/audit/`:
1. Remover/substituir os 21 travessões (`—`) presentes em copy e código.
2. Aplicar spacing system mínimo: utilities `.section-pad-y*` em todas as seções e `.container-x` onde foi reimplementado inline.

## Scope IN
- Substituir 21 ocorrências do caractere U+2014 (em-dash `—`) em `app/`:
  - Em copy de usuário: substituir por vírgula, ponto, ou contexto adequado (preservando ritmo editorial).
  - Em comentários de código: substituir por `-` (hyphen) ou `:` para manter clareza.
  - Em placeholders de UI (`Prova.tsx`): substituir por `–` (en-dash) — não é travessão.
- Ajustes de spacing baseados em `audit/02b-spacing.md`:
  - Adicionar `.container-x` onde re-implementado inline (Hero, Portfolio, Planos, Contato, Prova partial)
  - Padronizar padding vertical de seções: usar `.section-pad-y` ou `.section-pad-y-lg` consistentemente
  - Não introduzir nova spacing scale (deixar Sprint 2)

## Scope OUT
- Refactor completo de tokens (Sprint 2).
- Spacing scale (--space-N) — Sprint 2.
- Type scale tokens — Sprint 2.
- Hover JS → CSS — outra story.

## Acceptance Criteria
- **AC1:** `grep -c "—" app/ -r` retorna `0`.
- **AC2:** Build (`npm run build`) passa sem erros.
- **AC3:** Lint passa.
- **AC4:** Todas as 7 seções principais usam `.container-x` (Hero, Manifesto, Metodologia, Prova, Portfolio, Planos, Contato).
- **AC5:** Padding-y de seções usa `.section-pad-y*` em vez de magic numbers `120px 0` ou `80px 0`.
- **AC6:** Nenhuma quebra visual perceptível em desktop/mobile (validação manual em build).

## Spec de Spacing (@design-orqx)
| Seção | section-pad-y atual | Aplicar |
|---|---|---|
| Hero | `80px 32px` fixo | `.section-pad-y-lg` + `.container-x` |
| Manifesto | clamp custom | manter (já editorial) ou `.section-pad-y-lg` |
| Metodologia | clamp custom | manter ou `.section-pad-y-lg` |
| Prova | composto | manter (multi-block) |
| Portfolio | `80px 0 64px` fixo | `.section-pad-y` |
| Planos | `120px 0` fixo | `.section-pad-y-lg` |
| Contato | `120px 0` fixo | `.section-pad-y-lg` |

## File List (esperado)
- `app/globals.css`
- `app/components/Hero.tsx`
- `app/components/Manifesto.tsx`
- `app/components/Metodologia.tsx`
- `app/components/Portfolio.tsx`
- `app/components/Planos.tsx`
- `app/components/Prova.tsx`
- `app/components/Contato.tsx`

## Tasks
- [x] Inventariar 21 travessões
- [x] Substituir travessões em copy
- [x] Substituir travessões em comentários
- [x] Aplicar `.container-x` em componentes que reimplementam container
- [x] Aplicar `.section-pad-y*` onde apropriado
- [x] Build + lint
- [x] Commit + push em `caio/refactor/audit-sprint1-p0`
