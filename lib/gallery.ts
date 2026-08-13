/**
 * Extra angles / habitat plates for featured machines.
 * Always keeps the primary catalog machine shot first.
 */
const GALLERY: Record<string, string[]> = {
  "canopy-kitchen-composter": [
    "/media/catalog/kitchen-composter.webp",
    "/media/herbs.webp",
    "/media/kitchen-island.webp",
  ],
  "root-dual-chamber-yard-tumbler": [
    "/media/catalog/tumbler.webp",
    "/media/succulent.webp",
    "/media/herbs.webp",
  ],
  "canopy-sensor-can": [
    "/media/catalog/sensor-can.webp",
    "/media/catalog/sensor-can-rect.webp",
    "/media/kitchen-island.webp",
  ],
  "canopy-energy-star-dehumidifier": [
    "/media/catalog/dehumidifier.webp",
    "/media/catalog/dehumidifier-gree.webp",
    "/media/catalog/dehumidifier-mini.webp",
  ],
  "canopy-5-tray-produce-dryer": [
    "/media/catalog/dehydrator.webp",
    "/media/herbs.webp",
    "/media/succulent.webp",
  ],
  "canopy-learning-thermostat": [
    "/media/catalog/thermostat.webp",
    "/media/kitchen-island.webp",
    "/media/succulent.webp",
  ],
  "root-full-spectrum-grow-light": [
    "/media/catalog/grow-light.webp",
    "/media/herbs.webp",
    "/media/succulent.webp",
  ],
};

export function getProductGallery(handle: string, primary: string): string[] {
  const extras = GALLERY[handle];
  if (!extras?.length) return [primary];
  const unique = [primary, ...extras.filter((src) => src !== primary)];
  return unique.slice(0, 4);
}
