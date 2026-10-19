// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // URL de producción en Vercel (canonical y og:image)
  site: "https://norte-estudio.vercel.app",
  trailingSlash: "never",
  build: { inlineStylesheets: "never", format: "file" },
  security: {
    // Astro calcula los hashes de cada script y estilo: CSP sin 'unsafe-inline'.
    // frame-ancestors y el resto de cabeceras van en vercel.json.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },
});
