# Norte Estudio · web de un estudio de arquitectura

**Demo:** https://norte-estudio-gamma.vercel.app
**Código:** https://github.com/MarioGuerra71/norte-estudio

Web de un estudio de arquitectura **ficticio** de Sevilla, hecha como pieza de portfolio. Los proyectos, las personas, los datos y la dirección son inventados. Las fotos son de Unsplash y muestran edificios que no tienen relación con estos proyectos.

## La idea

Se plantea como una **monografía de arquitectura**: fondo de cal, texto grafito, filetes de piedra y un único acento color ladrillo para los estados (página actual, hover, foco). Los edificios mandan y la interfaz se aparta.

## Qué tiene

- **Varias páginas estáticas** generadas con Astro: portada, índice de proyectos, una página por proyecto (con `getStaticPaths`), estudio, contacto y 404.
- **Transiciones entre páginas nativas del navegador** (View Transitions entre documentos, con `@view-transition`). La foto de un proyecto en el índice se transforma en la portada de su página, sin JavaScript y sin librerías. Cada proyecto tiene su propio `view-transition-name`.
- **Índice tipográfico con vista previa:** en escritorio, al pasar el ratón o el foco por una fila se ve la foto, solo con CSS. En móvil cada fila lleva su miniatura.
- **Ficha técnica** de cada obra (ubicación, año, superficie, programa y estado), galería y enlaces al proyecto anterior y siguiente.
- **Animaciones de scroll nativas** (`animation-timeline: view()`). Con «reducir movimiento» se desactivan, igual que las transiciones.
- **Formulario de contacto** con validación y foco en el primer error. Es simulado: no se envía nada.

## Stack y calidad

- Astro 7 con salida estática.
- Imágenes AVIF y WebP en varios tamaños.
- Fuente Schibsted Grotesk autoalojada.
- CSP con hashes, sin `unsafe-inline`, y cabeceras de seguridad en [vercel.json](vercel.json).
- Lighthouse móvil: 100 en accesibilidad, buenas prácticas y SEO en portada, proyecto y contacto.
- Tests con `node --test`: datos de proyectos (créditos, textos alternativos, anterior y siguiente) y validación del formulario.

```powershell
npm install
npm run dev
npm test
npm run build
```

Diseño y desarrollo: [Mario Guerra](https://github.com/MarioGuerra71).
