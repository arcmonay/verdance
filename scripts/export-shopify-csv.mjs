import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(
  readFileSync(join(root, "data", "catalog.json"), "utf8"),
);

const imageBase =
  process.env.SHOPIFY_IMAGE_BASE_URL ||
  "https://raw.githubusercontent.com/arcmonay/verdance/main/public";

const esc = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;

const header = [
  "Handle",
  "Title",
  "Body (HTML)",
  "Vendor",
  "Type",
  "Tags",
  "Published",
  "Option1 Name",
  "Option1 Value",
  "Variant SKU",
  "Variant Grams",
  "Variant Inventory Tracker",
  "Variant Inventory Qty",
  "Variant Inventory Policy",
  "Variant Fulfillment Service",
  "Variant Price",
  "Variant Compare At Price",
  "Variant Requires Shipping",
  "Variant Taxable",
  "Image Src",
  "Image Alt Text",
  "Status",
].join(",");

const rows = catalog.products.map((p) => {
  const imagePath = p.image || `/products/${p.handle}.webp`;
  const imageSrc = `${imageBase}${imagePath}`;
  const grams = Math.max(50, Math.round(Number(p.weightLbs || 1) * 453.592));
  return [
    p.handle,
    p.title,
    `<p>${p.description}</p><ul><li>Material: ${p.material}</li><li>Size: ${p.size}</li><li>Finish: ${p.finish}</li><li>Highlight: ${p.highlight}</li><li>Weight: ${p.weightLbs} lb</li></ul>`,
    "Verdance",
    catalog.collections.find((c) => c.handle === p.collection)?.title ??
      "Home Electronics",
    p.tags.join(", "),
    "TRUE",
    "Finish",
    p.finish,
    p.sku,
    String(grams),
    "shopify",
    p.inStock ? "25" : "0",
    "deny",
    "manual",
    Number(p.price).toFixed(2),
    p.compareAtPrice ? Number(p.compareAtPrice).toFixed(2) : "",
    "TRUE",
    "TRUE",
    imageSrc,
    p.title,
    "active",
  ]
    .map(esc)
    .join(",");
});

writeFileSync(
  join(root, "data", "shopify-products.csv"),
  [header, ...rows].join("\n"),
);
console.log(`Wrote ${rows.length} Shopify product rows with images.`);
