# Tareas y Registro de Problemas

| Fecha | Tarea | Problema | Solución / Nota |
|---|---|---|---|
| 2026-07-01 | Inicialización del proyecto | Configuración TTY fallida con pnpm en background | Usar `$env:CI="true"` y `Remove-Item node_modules` manual antes de `pnpm install` |
| 2026-07-01 | Generación de UI Base | - | Utilizado Stitch MCP para extraer directrices de diseño y colores |
| 2026-07-01 | Sincronización Remota Git | Error de historias no relacionadas al pushear `main` | Usar `git push -u origin main --force` para inicializar el repositorio |
| 2026-07-01 | Optimización Rendimiento | Error Hydration y carga lenta (Framer Motion) | Agregar `suppressHydrationWarning`, reemplazar FM con `useScrollReveal` nativo |
| 2026-07-01 | Rediseño y UX | Darle una estética más cálida / rústica similar a ref | Agregar `hero-bg`, actualizar `--color-surface` y variables globales, favicon, Wpp float |
| 2026-07-01 | Integración UI y Git | - | Ajustes en `ProductsSection`, `TopAppBar`, `WhatsAppButton`, se agregan imágenes y push a main |
| 2026-07-01 | Entorno Local | Error `EACCES: permission denied` en puerto 3000/3001 al iniciar `next dev` | Se usó el puerto 4000 pasándolo como argumento (`pnpm run dev -- -p 4000`) |
| 2026-07-01 | Integración Google Maps | El bloque de contacto mostraba un placeholder | Se agregó el mapa real de Juan Ramón Lestani 276 mediante embed público, carga diferida y enlace externo |
| 2026-07-01 | Formulario de contacto | El formulario era únicamente visual y no enviaba mensajes | Se agregó endpoint de servidor con Resend, validación, honeypot y estados de envío; credenciales en variables de entorno |
| 2026-07-01 | Identidad visual del header | El logo perdía presencia por su tamaño reducido | Se amplió el emblema, se elevó su contraste visual y se agregó el lema de marca sin sobrecargar la navegación móvil |
| 2026-07-01 | Favicon de marca | El favicon genérico no representaba a DACIO | Se convirtió el logo oficial a un favicon cuadrado de 256 px conservando la identidad visual |
| 2026-07-01 | Ajuste responsive móvil | En 360 px aparecía desborde horizontal, contenido recortado y jerarquías sobredimensionadas | Se contuvo el overflow, se eliminaron desplazamientos laterales en móvil y se ajustaron header, hero, catálogo y formulario |
