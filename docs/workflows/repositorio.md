# Workflow: Repositorio y deploy

## Ramas

- `main`: desarrollo (rama de trabajo por defecto de los agentes).
- `test`: rama que consume el servidor de producción (`deploy/update-production.ps1` hace pull de `origin/test`).
- `prod`: existe en remoto (histórico).
- Flujo: trabajar en `main` → merge a `test` → ejecutar el script de deploy en el servidor.

## Commits

- Mensajes en inglés, imperativos, específicos (`Fix contact form rate limit`, no `Update project`).
- Nunca commitear: `.env*` con valores (solo `.env.example`), `node_modules`, `.next`, logs (`*.log`).
- Antes de commitear: `pnpm run build` + `pnpm run lint` en verde y `git diff --staged` revisado (sin secretos).

## Nota Windows/Git

- Si `git pull/push` falla con `SSL certificate: unable to get local issuer certificate`, el repo ya tiene configurado `http.sslBackend=schannel` (usa el almacén de certificados de Windows). Si reaparece: `git config http.sslBackend schannel`.

## Deploy a producción (dacio.com.ar)

Arquitectura: `Cloudflare → Caddy :443 → Next.js/NSSM 127.0.0.1:3010` en Windows Server.
Guía completa: `deploy/README_WINDOWS.md`.

Resumen de actualización:
1. Merge de `main` a `test` y push.
2. En el servidor: `.\deploy\update-production.ps1` (pull ff-only + install + build + restart NSSM).
3. Verificar `https://dacio.com.ar` y logs (`C:\www\dacio\LandingPage\logs\stderr.log`).

Variables de producción (`.env.production` en el servidor, NO en Git):
`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` — ver `.env.example`.

## Checklist post-deploy

1. Home carga y las imágenes se sirven en WebP/AVIF (Network tab).
2. Formulario de contacto: envío de prueba real llega a `CONTACT_TO_EMAIL`.
3. Links Portal Clientes (header y footer) → https://gestionzen.ctsoft.com.ar/cliente/login.
4. Botones WhatsApp (flotante y cards de categorías) abren chat con mensaje predefinido.
5. `/robots.txt` y `/sitemap.xml` responden 200.
