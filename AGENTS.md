# AGENTS.md — DACIO Landing Page

> Instrucciones para agentes de IA (Claude Code, Codex, Gemini CLI, OpenCode, Cursor, etc.).
> `CLAUDE.md` y `GEMINI.md` apuntan a este archivo: **esta es la única fuente de verdad**.

## Identidad y estilo

- Responder en español (LatAm), directo, sin preámbulos. Código e identificadores en inglés.
- Memoria viva del proyecto en `/docs`. Antes de trabajar, leer `docs/_registry.md`.
- Cambios mínimos y localizados; no tocar lo que no se pidió.
- UI: mobile-first, sin alerts nativos, consistencia visual con el design system existente.

## Proyecto

- **Qué es**: landing corporativa de DACIO (insumos para carnicerías y chacinados), Resistencia, Chaco.
- **Stack**: Next.js (App Router) + React + TypeScript + Tailwind CSS 4. Prisma reservado para el futuro CMS (aún sin uso en runtime).
- **Producción**: https://dacio.com.ar — Windows Server: Cloudflare → Caddy :443 → Next.js/NSSM en 127.0.0.1:3010. Ver `deploy/README_WINDOWS.md`.
- **Ramas**: `main` = desarrollo · `test` = la que consume el deploy (`deploy/update-production.ps1`) · `prod` existe en remoto.
- **Datos del negocio** (teléfono, emails, dirección, URL del portal): centralizados en `src/lib/site.ts`. **Nunca hardcodear estos datos en componentes.**
- **Requisitos originales**: `docs/PROMPT_DACIO_MASTER.md` (roadmap: CMS, portal clientes, ERP B2B).

## Paquetes — política estricta

- Solo **pnpm**. Prohibido: npm, npx, yarn, `curl|bash`, `wget|sh`.
- `pnpm add pkg@x.y.z --ignore-scripts` (nunca `latest`, nunca scripts de lifecycle).
- `pnpm-lock.yaml` obligatorio; nunca regenerar lockfiles por cuenta propia.
- Preferir: APIs nativas > cero dependencias > librerías maduras y pineadas.
- Justificar siempre una dependencia nueva.

## Comandos

```powershell
pnpm run dev      # dev server (si el puerto 3000 falla, usar: pnpm run dev -- -p 4000)
pnpm run build    # build de producción (debe pasar sin errores antes de commitear)
pnpm run lint     # eslint
```

## Ciclo de trabajo

1. Leer `docs/_registry.md` y el `docs/{tema}.md` correspondiente (si no existe, crearlo).
2. Aplicar el workflow que corresponda de `docs/workflows/` (ver abajo).
3. Si algo falla: corregir y documentar en el mismo archivo (fecha / problema / causa / solución).
4. Actualizar `docs/_registry.md` (evitar duplicados).
5. Verificar con `pnpm run build` + `pnpm run lint` antes de commitear.

## Workflows (obligatorios según la tarea)

| Tarea | Workflow |
|---|---|
| Agregar/cambiar imágenes o assets | `docs/workflows/optimizacion.md` |
| Tocar formularios, API routes, headers, deps | `docs/workflows/seguridad.md` |
| SEO, metadata, contenido indexable | `docs/workflows/seo.md` |
| Commits, ramas, PRs, deploy | `docs/workflows/repositorio.md` |

## Reglas duras

- Secretos solo en `.env.local` / `.env.production` (nunca en Git). `.env.example` documenta las claves sin valores.
- El formulario de contacto usa Resend (`src/app/api/contact/route.ts`): validación servidor + honeypot + rate limit. No debilitar ninguna de las tres.
- Imágenes: siempre `next/image` con `sizes` correcto; assets en WebP/AVIF; nada > 200 KB en `/public` sin justificación (ver workflow de optimización).
- Los assets de `/public` se sirven con `Cache-Control: immutable`: si se cambia el contenido de una imagen, **renombrar el archivo**.
- No usar Framer Motion: las animaciones usan `useScrollReveal` nativo (hubo problemas de hidratación/perf, ver `docs/_registry.md`).
- Si el contexto de la conversación supera ~70%, frenar y sugerir compactar o abrir chat nuevo.
