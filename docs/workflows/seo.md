# Workflow: SEO

Aplicar al cambiar metadata, contenido indexable, rutas o imágenes visibles.

## Estado implementado (2026-07-16)

- Metadata central en `src/app/layout.tsx`: title template, description, keywords, canonical, OpenGraph (`/og-image.jpg` 1200×630), Twitter Cards, robots.
- JSON-LD `LocalBusiness` (dirección, horarios, teléfono, CUIT) en el layout, alimentado por `src/lib/site.ts`.
- `src/app/robots.ts` → `/robots.txt` (bloquea `/api/`) y `src/app/sitemap.ts` → `/sitemap.xml`.
- Íconos por convención: `src/app/favicon.ico`, `icon.png`, `apple-icon.png`.

## Reglas

- Un solo `<h1>` por página (hoy: el headline del hero). Jerarquía h2→h3 sin saltos.
- Toda imagen de contenido con `alt` descriptivo en español (decorativas: `alt=""`).
- Datos del negocio SIEMPRE desde `src/lib/site.ts` para que el JSON-LD y la UI no diverjan.
- Si se agrega una ruta pública nueva: sumarla a `src/app/sitemap.ts` y darle `metadata` propia (usa el template `%s | DACIO`).
- No indexar rutas privadas/futuras (`/admin`, portal): agregar `disallow` en `robots.ts` y `robots: { index: false }` en su metadata.

## Checklist de verificación

1. `pnpm run build` y revisar que `/robots.txt` y `/sitemap.xml` respondan en dev.
2. Ver el HTML servido (view-source): og:*, twitter:*, canonical y JSON-LD presentes.
3. Validar JSON-LD en https://search.google.com/test/rich-results con la URL de producción.
4. Tras deploy: Google Search Console → enviar sitemap, verificar cobertura.
5. OpenGraph preview: https://www.opengraph.xyz con https://dacio.com.ar.
