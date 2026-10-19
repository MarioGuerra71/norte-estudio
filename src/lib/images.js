// Todas las fotos de proyectos, indexadas por nombre ("patio-1" → ImageMetadata)
const files = import.meta.glob("../assets/p/*.jpg", { eager: true, import: "default" });

export const images = Object.fromEntries(
  Object.entries(files).map(([path, img]) => [path.split("/").pop().replace(".jpg", ""), img]),
);
