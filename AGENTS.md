<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Design System

Antes de escrever CSS ou classes novas, leia `docs/DESIGN_SYSTEM.md`.
Tokens (spacing, breakpoints, type, motion) ficam em `app/globals.css` e
devem ser consumidos via `var(--*)` ou utilities Tailwind.
Numeros magicos em px / rem / ms / cubic-bezier sao anti-padrao.
