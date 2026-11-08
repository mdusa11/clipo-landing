# Clipo · landing

Sitio estático de Clipo (teclado para iPhone con portapapeles). HTML y CSS a mano, sin frameworks ni build.
Publicado en GitHub Pages desde `main` (raíz): https://mdusa11.github.io/clipo-landing/

## Estructura

- `index.html`: la portada. Un solo archivo autocontenido (CSS y JS en línea; el teléfono interactivo se dibuja con HTML/SVG, sin imágenes).
- `privacy.html`, `terms.html`, `support.html`: páginas legales y de ayuda. Cada una lleva su propio `<style>` con las mismas variables de color que la portada (claro/oscuro automático).
- `og-image.png` (1200×630), `manifest.json`, `icons/`, `robots.txt`, `sitemap.xml`.

## Cómo editar

- Abre el archivo y edita directo; no hay que compilar nada. Prueba con `python3 -m http.server` y abre `http://localhost:8000`.
- Las rutas son relativas porque el sitio vive bajo `/clipo-landing/`.
- Las preguntas frecuentes están dos veces: visibles en `index.html` (sección `#preguntas`) y en el JSON-LD `FAQPage` del `<head>`. Si cambias una, cambia la otra.
- Si cambias la fecha de vigencia de una página legal, actualiza también `<lastmod>` en `sitemap.xml`.
- Todo texto sobre el producto debe salir del inventario verificado (no prometer precio, prueba gratis, sincronización ni otras plataformas hasta que existan).

## Pendientes

- Enlace de App Store: cuando salga, cambiar los botones «Avísame» por el enlace y ajustar el estado «En desarrollo».
- Precio: hoy se dice que se publicará aquí antes del lanzamiento (FAQ, `terms.html`, `support.html`).
- Dominio propio: crear un archivo `CNAME` con el dominio (por ejemplo `clipo.mx`) y cambiar las URLs absolutas `https://mdusa11.github.io/clipo-landing/` en `index.html`, `privacy.html`, `terms.html`, `support.html` (canonical, `og:*`, `twitter:*`, JSON-LD), `sitemap.xml` y `robots.txt`. NO existe `CNAME` todavía.
