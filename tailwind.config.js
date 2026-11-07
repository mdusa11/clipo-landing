/** @type {import('tailwindcss').Config} */
//
// Paleta "Uva" — la misma que la app. SOLO colores sólidos: nada de degradados.
//
// Los colores semánticos leen variables CSS (canales RGB) definidas en
// tailwind.input.css, así que claro/oscuro es cambiar variables, no clases.
// Re-teñir la web = cambiar este archivo / las variables y recompilar:
//
//   npx tailwindcss@3.4.17 -i tailwind.input.css -o styles.css --minify
//
const v = (n) => `rgb(var(--${n}) / <alpha-value>)`;

module.exports = {
  content: ['./*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: v('bg'),
        surf: v('surf'),
        surf2: v('surf2'),
        ink: v('ink'),
        muted: v('muted'),
        faint: v('faint'),
        line: v('line'),
        // Acento principal. `uva` es el texto/enlace (pasa AA en ambos modos);
        // `btn` es el relleno de botones (siempre con texto blanco, 6:1).
        uva: v('uva'),
        btn: v('btn'),
        soft: v('soft'),
        deep: '#4A1FC9',
        // Temas de la app, usados como acentos puntuales.
        mar: '#1463FF',
        lima: '#00B36B',
        mango: '#FFB000',
        chicle: '#FF2E7E',
        tinta: '#121214',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
};
