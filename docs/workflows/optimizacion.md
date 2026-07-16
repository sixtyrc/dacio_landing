# Workflow: Optimización de rendimiento

Aplicar siempre que se agreguen/cambien imágenes, fuentes, componentes pesados o dependencias.

## Imágenes (regla de oro del proyecto)

1. **Formato**: WebP (fotografías) o SVG (iconos/logos). Nunca commitear PNG/JPEG fotográficos crudos.
2. **Dimensiones**: redimensionar al doble del tamaño máximo de render (retina). Referencias actuales:
   - Hero full-width: 1024–1600px de ancho, calidad WebP ~72 → objetivo < 150 KB.
   - Cards de categoría (~400px render): 640px de ancho, calidad ~75 → objetivo < 50 KB.
   - Logo header (70px render): 160px.
3. **Conversión** con sharp (ya disponible vía pnpm, sin instalar nada):
   ```powershell
   node -e "const s=require('./node_modules/.pnpm/sharp@0.34.5/node_modules/sharp'); s('./public/IN.png').resize({width:640}).webp({quality:75}).toFile('./public/out.webp').then(i=>console.log((i.size/1024).toFixed(1)+' KB'))"
   ```
   (Ajustar la versión de sharp si cambió: `Get-ChildItem node_modules\.pnpm -Filter 'sharp*'`.)
4. **En código**: siempre `next/image` con `alt` descriptivo y `sizes` correcto. `priority` + `fetchPriority="high"` SOLO para la imagen LCP (hero); el resto lazy (default). Nunca `background-image` CSS para contenido.
5. **Cache**: `/public` se sirve con `Cache-Control: immutable` (ver `next.config.ts`). Si cambia el contenido de un asset, **renombrar el archivo** (ej. `hero-bg-v2.webp`).
6. Borrar el asset original pesado del repo una vez convertido.

## Fuentes

- Solo `next/font` con `display: "swap"`. No agregar `<link>` a Google Fonts ni CDNs.

## JavaScript

- Componentes `'use client'` solo cuando hay interactividad real; el resto server components.
- No agregar librerías de animación (Framer Motion dio problemas de hidratación — usar `useScrollReveal`).
- Iframes de terceros (mapas, videos): `loading="lazy"` obligatorio.

## Verificación (checklist antes de commitear)

1. `pnpm run build` sin errores; revisar tamaños de First Load JS en la salida.
2. Ningún archivo nuevo en `/public` > 200 KB (`Get-ChildItem public | Sort-Object Length -Descending`).
3. Con el dev server corriendo: DevTools → Network → verificar que las imágenes bajo el fold no cargan hasta scrollear.
4. Ideal: Lighthouse (Chrome DevTools o `npx` prohibido — usar la UI) con Performance > 95 en mobile.
