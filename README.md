# El Corral de la Vaca — Landing page

Landing de El Corral de la Vaca (parrilla en San Juan del Río, Qro.), hecha con Next.js 16 + React 19 + Tailwind CSS 4. Se exporta como página estática.

## Desarrollo

```bash
npm install
npm run dev
```

## Dónde editar

- `src/lib/site.ts`: todos los datos del restaurante (teléfono, dirección, horario, platillos, ambientes, reseñas, servicios y preguntas frecuentes). Lo que cambies ahí se refleja en la página y en los datos estructurados (JSON-LD).
- `public/images/`: fotografías. Reemplázalas por fotos propias del restaurante antes de publicar (ver abajo).
- `NEXT_PUBLIC_SITE_URL`: dominio definitivo. Por defecto es `https://elcorraldelavaca.mx` y se usa en canonical, sitemap, robots y Open Graph.

## SEO incluido

- Metadata (title, description, Open Graph, Twitter, canonical) en `es-MX`.
- JSON-LD `Restaurant` (dirección, geo, horario, cocina, amenidades) y `FAQPage`.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, ícono e imagen Open Graph (1200×630).
- Un solo H1 con la palabra clave principal y jerarquía H2/H3 por sección.
- Imágenes optimizadas (AVIF/WebP) con `alt` descriptivo; el hero se precarga.

## Importante: fotografías

Las fotos de `public/images/` provienen de la ficha pública de Google Maps y las subieron usuarios. Sirven para la maqueta, pero los derechos son de sus autores: antes de publicar, reemplázalas por fotos propias del restaurante usando los mismos nombres de archivo.
