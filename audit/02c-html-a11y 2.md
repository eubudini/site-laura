# 02c — HTML semântico & Acessibilidade

## Estrutura semântica global

```html
<html lang="pt-BR">                  ✓
<body>
  <header>                            ✓ (Framer motion.header)
  <main>                              ✓
    <section id="hero">               ✓
    <section id="sobre">              ✓
    <section id="servicos">           ✓
    <section id="resultados">         ✓
    <section id="portfolio">          ✓
    <section id="planos">             ✓
    <section id="contato">            ✓
  </main>
  <footer>                            ✓
  <a class="WhatsAppFloat">          ✓ (motion.a)
</body>
```

→ **Landmarks corretos.** Bom ponto.

## Heading hierarchy

| Local | Tag | Texto |
|---|---|---|
| Hero | h1 | "Sua marca passou da hora de ser desejada." |
| Manifesto | h2 | "A diferença entre publicar e ser percebida." |
| Metodologia | h2 | "Da estratégia à execução, em três atos." |
| Metodologia (3×) | h3 | "Estratégia & Direção" / "Captação & Direção Criativa" / "Distribuição & Performance" |
| Prova | h2 | "Não são números genéricos..." |
| Prova case (2×) | h3 | "Brunnen" / "Mariana Penteado" |
| Portfolio | h2 | "Projetos, marcas e conteúdos..." |
| Planos | h2 | "Para marcas que entendem..." |
| Planos card (2×) | h3 | "Essencial" / "Premium" |
| Contato | h2 | "Pronta para transformar..." |
| Footer (3×) | **h3** | "Navegação" / "Atuação" / "Contato" |

🔴 **Footer usa `h3` direto sem `h2` precedente** dentro do `<footer>` — quebra hierarquia (vai de h2 do Contato → h3 do footer pulando). Para AT (assistive tech) é gap. **P1**.
- Fix: usar `h2` para títulos de seção do footer (pequenos visualmente, semanticamente corretos), ou wrap em `<section aria-labelledby>` com h2 visualmente oculto.

## Atributos `alt`

| `<img>` | alt | Status |
|---|---|---|
| Hero photo | "Laura Camponogara — Estrategista de Conteúdo" | ✓ excelente |
| Portfolio (6×) | label genérico ("Captação de Conteúdo", etc) | ⚠ alts pouco descritivos |
| Contato | "Laura Camponogara" | ⚠ poderia ser mais rico |

Vídeo `<video>` no Manifesto: **sem `<track>` de legendas/captions**. Para PCD auditiva, conteúdo perdido. Como é loop estético sem fala, talvez ok, mas semanticamente seria `aria-label` no `<video>` + `role="presentation"` se decorativo. **P1**.

## ARIA & estados

| Componente | Issue |
|---|---|
| Header hamburguer | `aria-label="Menu"` fixo — não muda quando aberto. **Faltam `aria-expanded`, `aria-controls`** |
| Mobile menu drawer | sem `role="dialog"`, sem focus trap, sem `aria-modal` |
| Mobile menu overlay | clicável fechar, mas sem keyboard escape (Esc) handler |
| Manifesto sound button | `aria-label` muda dinamicamente ✓ |
| Counter (Prova stats) | número anima 0→N — leitor de tela lê **todos os intermediários**. Precisa `aria-live="off"` ou `aria-label={final}` no container |
| Hero `__avatar` | `<div>` com texto "MC" — decorativo, sem `aria-hidden` |
| Hero `hero-bg-1/2` | `aria-hidden` ✓ |
| Hero `hero-kicker__rule` | `aria-hidden` ✓ |
| Decorations geral (rules, frames, romans) | maioria com `aria-hidden` ✓ |
| Prova mockup iPhone | inteiro decorativo, **sem `aria-hidden`** — leitor lê "9:41", "marianapenteado", "posts seguidores seguindo" sem contexto. **P0** |
| Quote `<figure>`/`<figcaption>` | semanticamente correto ✓ |
| Plans `<ul>`/`<li>` | ok |

## Foco e teclado

- `scroll-behavior: smooth` global — cliques em `#hero` etc fazem scroll, OK.
- Mobile menu não fecha com `Escape`. Foco não retorna ao botão hamburger ao fechar. **P1 a11y**.
- TiltCard captura `pointer events` mas não tem versão keyboard-friendly (não é botão, é card decorativo) — OK pois CTA dentro é `<a>`.
- Mobile menu links: ordem de tab ok porque é DOM order. ✓
- `:focus-visible` ❌ **inexistente em todo o site**. Tab pelos links e CTAs sem outline visível (browsers default outline pode estar removido por reset?). Reset global tem `* { margin:0; padding:0; box-sizing }` mas não toca outline — outline padrão do user-agent fica. Aceitável, mas **estilo customizado de `:focus-visible` está faltando** para casar com identidade. **P1**.

## Contraste WCAG AA (4.5:1 texto normal, 3:1 large)

Verificação aproximada:

| Combinação | Contraste estimado | AA? |
|---|---|---|
| `--ink` `#0A0A0A` em parchment `#F8F5F1` | ~17:1 | ✓ |
| `--gold` `#B8956A` em parchment `#F8F5F1` | **~3.4:1** | ❌ texto normal / ✓ texto grande |
| `--gold` `#B8956A` em obsidian `#0A0A0A` | ~5.4:1 | ✓ |
| `rgba(10,10,10,0.65)` em parchment | ~9:1 | ✓ |
| `rgba(10,10,10,0.45)` em parchment | ~5:1 | ✓ borderline |
| `rgba(10,10,10,0.35)` em parchment (footer label do contato) | **~3.5:1** | ❌ |
| `rgba(255,255,255,0.5)` em obsidian-3 `#1C1C1C` | ~5:1 | ✓ |
| `rgba(255,255,255,0.35)` em obsidian-3 (footer h3) | **~3.4:1** | ❌ |
| `rgba(255,255,255,0.3)` em obsidian-3 (copyright) | **~2.9:1** | ❌ |
| `rgba(255,255,255,0.55)` em obsidian-2 (Metodologia desc) | ~4.6:1 | ✓ borderline |

🔴 **Violações de contraste:**
- Hero kicker em gold sobre parchment (texto pequeno 0.78rem) — **falha AA**
- Manifesto kicker, Metodologia kicker, Prova kicker (gold sobre parchment) — todos **falham**
- Footer h3 (`rgba(255,255,255,0.35)`) — **falha**
- Footer copyright (`rgba(255,255,255,0.3)`) — **falha**
- Contato labels (`rgba(10,10,10,0.35)`) — **falha**

**P0** — múltiplas violações de WCAG AA por escolha de cor + opacidade.

## HTML — qualidade do markup

| Issue | Componente | Severidade |
|---|---|---|
| `<img>` nativo (não `next/image`) com `eslint-disable` | Hero, Portfolio, Contato | **P1 perf** |
| `<style>{`...`}</style>` injetado em runtime client | 7 componentes | **P1** — não é styled-jsx; React injeta como `<style>` global. Funciona mas anti-padrão; deveria ser CSS module ou Tailwind |
| `onMouseEnter`/`onMouseLeave` para hover | 12+ ocorrências | **P1** — não funciona em touch; deveria ser `:hover` em CSS |
| `<a href="...">` com `rel` faltando em alguns externos | poucos casos isolados | P2 |
| `target="_blank"` com `rel="noopener noreferrer"` | maioria correta ✓ | OK |
| `<button style={{ background: "none", border: "none" }}>` | Header hamburger inline | P2 |
| `<a href="#contato">` sem `aria-label` quando texto pouco descritivo | "Contato" simples — ok | OK |

## Outros

- **`lang="pt-BR"`** ✓ correto.
- **Metadata** ✓ definida em layout (title, description, keywords, openGraph).
- **`<meta viewport>`** ❌ não declarado (Next 16 pode injetar default — verificar).
- **`<link rel="canonical">`** ❌ ausente.
- **Favicon** ❌ não declarado em metadata (Next pode pegar `/app/icon.png` mas não detectado em `public/`).
- **Sitemap/robots** ❌ ausentes.
- **Schema.org JSON-LD** (Person/ProfessionalService) ❌ ausente — perde SEO local Porto Alegre.

## Issues priorizados

- **P0** — Contraste: kickers gold sobre parchment, footer texts em opacidade baixa
- **P0** — Mockups iPhone (Prova) sem `aria-hidden` — VoiceOver lê lixo
- **P0** — Counter sem `aria-label` final — números intermediários poluem leitor
- **P1** — Footer headings (h3 sem h2) — quebra hierarquia
- **P1** — Mobile menu sem dialog/modal/Esc/focus-trap
- **P1** — Header hamburger sem `aria-expanded`/`aria-controls`
- **P1** — `:focus-visible` ausente em todo o site
- **P1** — `<img>` nativo (perde otimização Next/Image: AVIF/WebP, lazy correto, blur placeholder)
- **P1** — Inline `onMouseEnter` para hover (não funciona touch)
- **P2** — Schema JSON-LD Person ausente
- **P2** — Sitemap/robots ausentes

## Score

| Área | Score |
|---|---|
| Landmarks/semântica | 9/10 |
| Heading hierarchy | 6/10 (footer quebra) |
| Contraste WCAG AA | **4/10** |
| ARIA states | 4/10 |
| Foco/teclado | 4/10 |
| SEO básico | 6/10 |
| **Média** | **5.5/10** |
