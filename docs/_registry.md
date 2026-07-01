# Tareas y Registro de Problemas

| Fecha | Tarea | Problema | Solución / Nota |
|---|---|---|---|
| 2026-07-01 | Inicialización del proyecto | Configuración TTY fallida con pnpm en background | Usar `$env:CI="true"` y `Remove-Item node_modules` manual antes de `pnpm install` |
| 2026-07-01 | Generación de UI Base | - | Utilizado Stitch MCP para extraer directrices de diseño y colores |
| 2026-07-01 | Sincronización Remota Git | Error de historias no relacionadas al pushear `main` | Usar `git push -u origin main --force` para inicializar el repositorio |
| 2026-07-01 | Optimización Rendimiento | Error Hydration y carga lenta (Framer Motion) | Agregar `suppressHydrationWarning`, reemplazar FM con `useScrollReveal` nativo |
| 2026-07-01 | Rediseño y UX | Darle una estética más cálida / rústica similar a ref | Agregar `hero-bg`, actualizar `--color-surface` y variables globales, favicon, Wpp float |
