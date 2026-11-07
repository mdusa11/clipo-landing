# Clipo · landing

Sitio estático de Clipo (teclado para iPhone con portapapeles). HTML + Tailwind compilado, sin frameworks.
Publicado en GitHub Pages: https://mdusa11.github.io/clipo-landing/

## Estructura

- `index.html`, `privacy.html`, `terms.html`, `support.html`: páginas (rutas relativas: el sitio vive bajo `/clipo-landing/`).
- `tailwind.config.js` + `tailwind.input.css` → `styles.css` (compilado, se commitea).
- `img/`: capturas reales del simulador (WebP 420/640 + JPEG de respaldo) e íconos de los 6 temas.
- `icons/`, `manifest.json`, `og-image.png` (1200×630), `robots.txt`, `sitemap.xml`.

## Recompilar CSS

```
npx tailwindcss@3.4.17 -i tailwind.input.css -o styles.css --minify
```

## Pendientes

- Enlace de App Store: en `index.html` buscar `data-app-store` (reemplazar `href="#"`, quitar `aria-disabled`, cambiar "Próximamente en la" por "Descargar en la"). Hay un botón de TestFlight comentado junto a él.
- Precio: hoy dice "precio de lanzamiento por anunciar" (sección `#precio`).
- Dominio propio: crear un archivo `CNAME` con el dominio (por ejemplo `clipo.mx`) y cambiar las URLs absolutas (`canonical`, `og:*`, `sitemap.xml`, `robots.txt`, JSON-LD). NO existe `CNAME` todavía.
