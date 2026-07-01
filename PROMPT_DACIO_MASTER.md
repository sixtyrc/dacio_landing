# PROMPT MAESTRO - PROYECTO DACIO

> Documento maestro para un agente de IA (Claude Code, Codex, Cursor, Gemini CLI, etc.).

## Objetivo

Construir una **Landing Page Corporativa Premium** para **DACIO**, empresa dedicada a la venta de insumos para carnicerías y elaboración de chacinados, preparada para evolucionar hacia una plataforma B2B con Portal de Clientes y ERP.

---

# 1. Requisitos generales

- Diseño exclusivo, moderno y corporativo.
- Inspiración: https://hojasverdes.com.ar (principal) y https://www.sabroson.com.ar (secundaria).
- No copiar diseños.
- Mobile First.
- Responsive total (320px hasta 4K).
- SEO Ready.
- Accesibilidad WCAG AA.
- Lighthouse objetivo >95.
- Google Stitch MCP para generar la UI base.
- Next.js + React + TypeScript + TailwindCSS + Framer Motion.
- Arquitectura escalable.

---

# 2. Empresa

Nombre: DACIO

Actividad:
- Aditivos alimenticios
- Condimentos
- Especias
- Conservantes
- Tripas
- Mezclas
- Insumos para carnicerías
- Insumos para chacinados

Datos:

CUIT: 20-18440800-8

IVA: Responsable Inscripto

Dirección:
Juan Ramón Lestani 276

Resistencia

Chaco

CP 3500

Horario:
08:00 a 20:00

Email:
gonzalopablos1@gmail.com

WhatsApp:
+54 9 362 408-3708

---

# 3. Landing

## Hero

Imagen principal.

Headline.

CTA:

- Contactar
- Ver Productos
- Portal Clientes

Scroll indicator.

Animaciones suaves.

---

## Sobre Nosotros

Historia.

Misión.

Valores.

Compromiso.

---

## Productos

Categorías.

Cards.

Imagen.

Descripción.

Botón "Consultar".

Sin carrito.

Sin precios.

---

## Clientes

Preparado para logos.

---

## Contacto

Formulario.

Mapa.

Datos.

WhatsApp flotante.

Mensaje predefinido:

"Hola. Me comunico desde dacio.com.ar y quisiera realizar una consulta."

---

## Footer

Datos legales.

Powered by:
CTSoft

Link:
https://ctsoft.com.ar

Abrir en nueva pestaña.

---

# 4. Portal Clientes

Agregar menú:

Portal Clientes

Ruta pública:

/clientes

Mientras no exista ERP:

redirigir a

https://gestionze.ctsoft.com.ar

Preparar arquitectura para:

- Pedidos
- Cuenta corriente
- Facturas
- Remitos
- Historial
- Descargas
- Lista de precios
- Promociones

---

# 5. CMS

Implementar CMS propio.

Ruta:

/admin

Autenticación.

Roles:

Administrador

Editor

Gestor Comercial

Características:

Editar:

- Hero
- Productos
- Categorías
- Textos
- Logos
- Imágenes
- SEO
- Contacto
- WhatsApp
- Redes
- Footer
- Colores
- Clientes
- FAQ

Sin editar código.

---

# 6. Gestor Multimedia

Subir imágenes.

Eliminar.

Renombrar.

WebP.

AVIF.

Miniaturas.

Drag & Drop.

---

# 7. Base de Datos

SQLite.

No depender de servicios externos.

ORM recomendado:

Prisma.

---

# 8. Seguridad

Cumplir OWASP Top 10.

Implementar:

- CSP
- XSS Protection
- CSRF
- Sanitización
- Validación servidor
- Prepared Statements
- Rate Limit
- Protección Fuerza Bruta
- Cookies HttpOnly
- Secure
- SameSite
- Headers:
  - HSTS
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy

Subida de archivos:

- Validar MIME
- Limitar tamaño
- Renombrar archivos
- Escaneo preparado

Login:

- Hash Argon2 o bcrypt
- Bloqueo temporal
- Auditoría

---

# 9. Antifraude

Cloudflare Ready.

Turnstile preparado.

Logs.

Registro de IP.

Registro de accesos.

Registro de cambios.

Backups automáticos.

Restauración.

---

# 10. SEO

Schema LocalBusiness.

OpenGraph.

Twitter Cards.

robots.txt

sitemap.xml

manifest.

JSON-LD.

Meta dinámicos.

---

# 11. Performance

Lazy Loading.

Code Splitting.

Tree Shaking.

Optimización imágenes.

next/image.

Fuentes optimizadas.

---

# 12. Animaciones

Framer Motion.

Fade.

Slide.

Hover.

Scroll Reveal.

Microinteracciones.

---

# 13. Responsive

320

360

390

414

768

1024

1280

1440

1600

1920

4K

---

# 14. Estructura

/app

/components

/features

/lib

/content

/public

/public/uploads

/prisma

/admin

/clientes

---

# 15. Roadmap

V1

Landing institucional.

CMS.

Portal demo.

V2

ERP.

Pedidos.

Cuenta corriente.

V3

Catálogo privado.

Listas de precios.

V4

Tienda B2B.

Mercado Pago.

WhatsApp API.

---

# 16. Criterios de aceptación

- Código limpio.
- TypeScript estricto.
- ESLint.
- Arquitectura modular.
- Componentes reutilizables.
- README.
- Variables de entorno.
- npm install
- npm run dev
- npm run build
- Sin errores.
- Preparado para producción.

---

# 17. Instrucciones al agente

1. Pensar como arquitecto de software.
2. Priorizar mantenibilidad.
3. No generar código duplicado.
4. No usar librerías innecesarias.
5. Crear componentes reutilizables.
6. Mantener separación de responsabilidades.
7. Documentar decisiones complejas.
8. Generar una experiencia visual premium.
9. Optimizar para SEO, rendimiento y accesibilidad.
10. Dejar preparada la plataforma para el crecimiento futuro hacia un ERP B2B completo sin rehacer la arquitectura.
