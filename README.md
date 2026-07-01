# DACIO - Landing Page Corporativa Premium

Bienvenido al repositorio del proyecto **DACIO Landing Page**. Este proyecto ha sido generado según las directivas del documento maestro y se encuentra alineado a altos estándares de diseño B2B, performance y seguridad.

## Stack Tecnológico
- **Frontend**: Next.js v15+, React 19, TypeScript, Tailwind CSS v4, Framer Motion.
- **Backend / DB**: SQLite + Prisma ORM.
- **Seguridad**: Previsto para OWASP Top 10 (CSRF, XSS, Headers).
- **Package Manager**: `pnpm` (NPM bloqueado).

## Scripts Disponibles

Ejecuta el entorno de desarrollo:
```bash
pnpm run dev
```

Construye la aplicación para producción:
```bash
pnpm run build
```

## Estructura del Proyecto

- `/src/app`: Componentes principales y App Router.
- `/docs`: Documentación interna del Agente (Registro de tareas y problemas).
- `PROMPT_DACIO_MASTER.md`: Documento maestro de requerimientos.
