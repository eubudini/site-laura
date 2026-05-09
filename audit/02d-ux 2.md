# 02d — UX patterns

## Jornada do usuário (estimada)

1. Chega no Hero → headline + foto + 2 CTAs
2. Manifesto: filosofia + filtro ("não atendo todo mundo")
3. Metodologia: processo em 3 atos
4. Prova: stats + 2 cases comparativos + quotes + brand wall
5. Portfolio: visual gallery
6. Planos: 2 ofertas (Essencial/Premium)
7. Contato: formulário (na verdade só links/CTAs)
8. Footer

**Bom storytelling editorial.** Filtro forte (Manifesto), proof denso (Prova), oferta clara (Planos).

## Heurísticas de Nielsen — score

| # | Heurística | Score | Notas |
|---|---|---|---|
| 1 | Visibilidade do estado | 7 | Header muda no scroll ✓; falta indicador de seção ativa |
| 2 | Match mundo real | 9 | Linguagem natural, narrativa ✓ |
| 3 | Controle e liberdade | 6 | Vídeo manifesto autoplay (sem play/pause manual além de mute); scroll-smooth pode incomodar |
| 4 | Consistência e padrões | **4** | 5 paradigmas de styling, 12 breakpoints, 4 tamanhos H2 |
| 5 | Prevenção de erros | 8 | Poucos forms, riscos baixos |
| 6 | Reconhecer > lembrar | 8 | Nav fixo, breadcrumb implícita por seções |
| 7 | Flexibilidade | 5 | Sem keyboard shortcuts, sem dark mode opcional |
| 8 | Estética minimalista | 9 | Editorial, aspirational, bem dosado |
| 9 | Recuperação de erros | N/A | sem fluxos com erro |
| 10 | Ajuda | 6 | WhatsApp FAB sempre visível ✓; sem FAQ |

**Média: 6.9/10** — visual forte, fundação técnica fraca.

## Problemas de affordance

| Local | Issue |
|---|---|
| Portfolio cards | `cursor: pointer` mas **não navegam pra lugar nenhum** — só hover de zoom. Frustrante. CTA é "Ver mais no Instagram" abaixo do grid. **P1** |
| Hero `hero-trust` (badge "+14 marcas que cresceram +418%") | Não é clicável. Bom, mas estilo de chip pode confundir |
| TiltCard nos Planos | Mouse 3D em desktop, em mobile não funciona — usuário toca e nada acontece (CTA dentro funciona). Affordance pobre em mobile |
| Manifesto vídeo | Autoplay muted; botão de som é 38px sem rótulo visual claro (só ícone) — funciona mas pequeno |
| Portfolio "Ver mais no Instagram" | CTA fora do contexto dos cards — usuário pode não associar |
| Counter Prova | Anima ao scroll — bom feedback; mas só em primeira visita (`once: true`) |

## Hierarquia visual de CTAs (call-to-action)

| Posição | CTA | Estilo | Efetividade |
|---|---|---|---|
| Header | "Contato" | gold sólido | sutil, OK |
| Hero #1 | "Ver resultados reais" | preto sólido | primary forte |
| Hero #2 | "Quero isso para a minha marca" | outline | secondary |
| Manifesto | — sem CTA | filtro só | OK editorial |
| Metodologia | — sem CTA | processo | OK |
| Portfolio | "Ver mais no Instagram" | preto sólido | OK |
| Planos #1 | "Quero este plano" | outline gold | OK |
| Planos #2 | "Começar agora" | preto sólido | featured ✓ |
| Planos extra | "Falar com a Laura" | gold sólido | redundante (ver abaixo) |
| Contato | WhatsApp / Instagram / E-mail | 1 sólido + 2 outline | OK |
| FAB | WhatsApp | verde 25D366 | sempre visível ✓ |

🟡 **CTA de Planos "Falar com a Laura" abaixo do grid duplica a função** dos botões dos cards e do FAB. Cognitive load. **P2**.

🟡 **2 visões de "primary" diferentes:** preto sólido (Hero, Portfolio, Planos featured, Contato) **vs** gold sólido (Header, FAB, Planos extra). Não está claro qual é o primary canônico. **P1**.

## Fricção (pontos de atrito)

| Atrito | Local | Severidade |
|---|---|---|
| Vídeo `.mov` (Apple) — pode falhar em Android Chrome | Manifesto | **P0** |
| Mockup iPhone microscópico em mobile | Prova | **P0** — case fica incompreensível na tela onde mais gente vai ver |
| Foto Contato sumindo em mobile | Contato | P1 — perde elemento âncora visual |
| Brunnen é placeholder com "0K, 0%, +000%" | Prova case 1 | **P0 conteúdo** — quebra credibilidade |
| Sem indicação de seção ativa no Header | Header | P2 |
| Smooth scroll global | globals | P3 — alguns acham distrativo |
| Sem skip-to-content link | layout | P1 a11y/UX |

## Conteúdo & promessa

- Headline forte: "Sua marca passou da hora de ser desejada." ✓
- Promessa quantificada: "+14 marcas, +418% crescimento médio" ✓
- Filtro explícito: "Não atendo todo mundo." ✓ — diferenciador
- Prova com mockups antes/depois ✓ — quando funcionam
- ⚠ **Brunnen case com dados zerados** — placeholder em produção é gravíssimo. Quebra todo argumento da seção Prova.

## Mobile-specific UX

| Issue | Severidade |
|---|---|
| Mockups iPhone lado-a-lado em mobile = ilegíveis | P0 |
| Foto Contato escondida → seção fica abrupta | P1 |
| Hamburger só 36px (touch target) | P0 a11y |
| WhatsApp FAB sobrepõe último parágrafo? Em 480px sim, ~24px do bottom | P2 — pode tampar leitura final |
| Hero h1 9.5vw em <480 — em 320px = 30px = ok mas próximo do limite | OK |

## Pontos fortes

1. **Storytelling editorial coeso** — filtro + processo + prova + oferta
2. **Tipografia bem orquestrada** — Fraunces para autoridade, Inter Tight para body, DM Mono para metadados
3. **Hierarquia narrativa por background** — light/dark intercalado bem dosado
4. **Quotes curtas e impactantes** ("Entendeu minha voz antes de eu entender") — boa curadoria
5. **Manifesto com vídeo + signature** — toque editorial premium
6. **Escala de stats animada** — bom payoff visual

## Issues priorizados

- **P0** — Brunnen case com placeholders zerados em produção
- **P0** — Mockups iPhone ilegíveis em mobile (mockups-row gridzão lado-a-lado em <480 vira 1 col, mas até 480 é problema)
- **P0** — Vídeo `.mov` em Manifesto (compatibilidade Android)
- **P1** — Cards portfolio sem destino (cursor:pointer engana)
- **P1** — Skip-to-content link ausente
- **P1** — Primary CTA inconsistente (preto vs gold)
- **P1** — TiltCard sem fallback mobile
- **P2** — Indicador de seção ativa no Header
- **P2** — CTA "Falar com a Laura" extra em Planos duplica função

## Score

| Área | Score |
|---|---|
| Storytelling | 9/10 |
| Hierarquia visual | 7/10 |
| Affordance | 5/10 |
| Mobile UX | 5/10 |
| Conteúdo | 6/10 (Brunnen quebra) |
| Conversão | 7/10 |
| **Média** | **6.5/10** |
