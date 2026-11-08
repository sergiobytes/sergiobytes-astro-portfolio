import type { ImageMetadata } from "astro";

// Project screenshots and logos live in src/assets/images (not public/) so
// Astro can resize them and convert them to WebP at build time; files in
// public/ are served untouched. Translations reference them by their path
// inside that folder (e.g. "projects/botbite.png") and stay plain strings
// because translations.ts is also bundled into the client-side language script.
const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/**/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

export function getAssetImage(path: string): ImageMetadata {
  const image = images[`../assets/images/${path}`];
  if (!image) {
    throw new Error(`Image not found in src/assets/images: "${path}"`);
  }
  return image.default;
}
