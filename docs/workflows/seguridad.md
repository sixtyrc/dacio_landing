# Workflow: Seguridad

Aplicar al tocar formularios, API routes, headers, dependencias o configuración.

## Principios (OWASP Top 10 como referencia)

- Validar y sanitizar **siempre en el servidor** (el cliente es solo UX). Ver patrón en `src/app/api/contact/route.ts`: recorte de longitud, validación de formato, honeypot (`website`), rate limit por IP.
- Nunca interpolar entrada del usuario en HTML sin escape; en emails usar texto plano.
- Secretos SOLO en `.env.local` (dev) / `.env.production` (server). Jamás en código, logs ni Git. `.env.example` documenta las claves sin valores.
- No loggear datos personales completos ni claves; los `console.error` del servidor no deben incluir el body del request.

## Headers (ya configurados en `next.config.ts`)

`X-Content-Type-Options: nosniff` · `X-Frame-Options: DENY` · `Referrer-Policy: strict-origin-when-cross-origin` · `Permissions-Policy` · `HSTS`.
No quitarlos. Si se agrega un recurso externo nuevo (script/iframe), evaluar CSP antes de mergear.

## Dependencias

- Política pnpm estricta (ver `AGENTS.md`): versiones pineadas, `--ignore-scripts`, justificar cada dependencia nueva.
- Ante una dependencia nueva: revisar mantenimiento, descargas, y correr `pnpm audit`.

## API routes

- Todo endpoint público debe tener: validación de entrada, rate limit, respuestas de error genéricas (sin filtrar detalles internos) y códigos HTTP correctos.
- Métodos no soportados no deben existir (exportar solo los handlers necesarios).

## Checklist antes de commitear

1. `git diff` — ¿hay secretos, tokens o emails/keys hardcodeados? → moverlos a env.
2. `pnpm audit` sin vulnerabilidades high/critical nuevas.
3. Endpoints tocados probados con entrada inválida (campos vacíos, email malformado, payload gigante, JSON roto).
4. Headers verificados: `Invoke-WebRequest http://localhost:3000 | Select-Object -ExpandProperty Headers`.
