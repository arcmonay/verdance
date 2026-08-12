import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "data");
mkdirSync(dataDir, { recursive: true });

const collections = [
  {
    handle: "composters",
    title: "Composters",
    description:
      "Electric kitchen composters and outdoor tumblers. The photo is the machine.",
  },
  {
    handle: "waste-systems",
    title: "Waste Systems",
    description: "Sensor cans with a motion lid. Stainless body, the unit itself.",
  },
  {
    handle: "dehumidifiers",
    title: "Dehumidifiers",
    description: "Portable boxy dehumidifiers. The appliance in the photo is the listing.",
  },
  {
    handle: "produce-dryers",
    title: "Produce Dryers",
    description: "Tray food dehydrators for fruit, herbs, and surplus produce.",
  },
  {
    handle: "smart-home",
    title: "Smart Home",
    description: "Wall thermostats. The square controller in the photo is the listing.",
  },
  {
    handle: "home-garden",
    title: "Home & Garden",
    description: "Full-spectrum grow light fixtures for seed starting and indoor plants.",
  },
];

function slug(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const rows = [
  {
    collection: "composters",
    title: "Canopy Kitchen Composter",
    description:
      "A Lomi-style electric countertop composter: sealed lid, charcoal filter, dry-grind-cool cycle. The photo is this white boxy unit — not hands holding soil.",
    price: 349,
    compareAtPrice: 399,
    material: "Recycled ABS",
    size: '12.5" × 11" × 14"',
    finish: "Soft White",
    highlight: "Electric countertop digester",
    weightLbs: 18,
    featured: true,
    extraTags: ["kitchen", "electric", "odor-lock"],
    image: "/media/catalog/kitchen-composter.webp",
  },
  {
    collection: "composters",
    title: "Root Dual-Chamber Yard Tumbler",
    description:
      "Outdoor compost tumbler: dual-chamber plastic barrel on a powder-coated metal frame. Two sliding doors, gear-assist rotation. The photo is this barrel on a stand.",
    price: 189,
    compareAtPrice: 219,
    material: "Recycled HDPE",
    size: '42" × 26" × 38"',
    finish: "Slate",
    highlight: "Dual chamber on a frame",
    weightLbs: 34,
    featured: true,
    extraTags: ["outdoor", "tumbler", "dual"],
    image: "/media/catalog/tumbler.webp",
  },
  {
    collection: "waste-systems",
    title: "Canopy Sensor Can",
    description:
      "Motion-open kitchen can with a slow-close lid. Stainless cylinder, black sensor lid. The photo is this automatic trash can with the lid raised — not a window washer.",
    price: 129,
    compareAtPrice: 149,
    material: "Stainless steel",
    size: '16" × 12" × 28"',
    finish: "Brushed Steel",
    highlight: "Infrared sensor lid",
    weightLbs: 12,
    featured: true,
    extraTags: ["sensor", "kitchen"],
    image: "/media/catalog/sensor-can.webp",
  },
  {
    collection: "waste-systems",
    title: "Moss Touchless Can",
    description:
      "Rectangular stainless sensor can with a fingerprint-resistant shell and a quiet motor. The photo is this square automatic bin.",
    price: 149,
    compareAtPrice: 169,
    material: "Stainless steel",
    size: '16" × 13" × 30"',
    finish: "Graphite",
    highlight: "Rectangular sensor can",
    weightLbs: 14,
    featured: false,
    extraTags: ["sensor", "large"],
    image: "/media/catalog/sensor-can-rect.webp",
  },
  {
    collection: "dehumidifiers",
    title: "Canopy Energy Star Dehumidifier",
    description:
      "Portable refrigerative dehumidifier: boxy white cabinet, water tank, caster wheels. The photo is this appliance — not a person washing a window.",
    price: 229,
    compareAtPrice: 259,
    material: "Recycled ABS",
    size: '14" × 11" × 20"',
    finish: "Soft White",
    highlight: "Energy Star · portable",
    weightLbs: 32,
    featured: true,
    extraTags: ["energy-star", "portable"],
    image: "/media/catalog/dehumidifier.webp",
  },
  {
    collection: "dehumidifiers",
    title: "Grove Portable Dehumidifier",
    description:
      "A white portable dehumidifier with a top control panel and side handle channel. The listing photo is this boxy unit.",
    price: 279,
    compareAtPrice: 309,
    material: "Recycled ABS",
    size: '16" × 12" × 23"',
    finish: "White",
    highlight: "Whole-room portable",
    weightLbs: 38,
    featured: false,
    extraTags: ["portable", "whole-room"],
    image: "/media/catalog/dehumidifier-gree.webp",
  },
  {
    collection: "dehumidifiers",
    title: "Fern Compact Dehumidifier",
    description:
      "Compact portable dehumidifier with a front water-level window and a top control strip. The photo is this small boxy appliance.",
    price: 139,
    compareAtPrice: 159,
    material: "Recycled ABS",
    size: '11" × 8" × 16"',
    finish: "White",
    highlight: "Compact portable",
    weightLbs: 18,
    featured: false,
    extraTags: ["portable", "compact"],
    image: "/media/catalog/dehumidifier-mini.webp",
  },
  {
    collection: "produce-dryers",
    title: "Canopy 5-Tray Produce Dryer",
    description:
      "Countertop food dehydrator: stainless base, digital timer, five stackable trays. The photo is this tray machine.",
    price: 129,
    compareAtPrice: 149,
    material: "Recycled ABS + stainless",
    size: '13" × 13" × 10"',
    finish: "White",
    highlight: "5 trays",
    weightLbs: 9,
    featured: true,
    extraTags: ["dehydrator", "5-tray"],
    image: "/media/catalog/dehydrator.webp",
  },
  {
    collection: "smart-home",
    title: "Canopy Learning Thermostat",
    description:
      "Wall-mounted digital thermostat with a square face, temperature readout, and mode buttons. The photo is this controller — not a plant.",
    price: 199,
    compareAtPrice: 229,
    material: "Recycled ABS + glass",
    size: '4.5" × 4.5" × 1"',
    finish: "Matte Black",
    highlight: "Programmable wall thermostat",
    weightLbs: 0.6,
    featured: true,
    extraTags: ["thermostat"],
    image: "/media/catalog/thermostat.webp",
  },
  {
    collection: "home-garden",
    title: "Root Full-Spectrum Grow Light",
    description:
      "T5-style grow light fixture: rectangular housing, four parallel lamps, hang mount. The photo is this light bar — not a potted plant.",
    price: 119,
    compareAtPrice: 139,
    material: "Aluminum",
    size: '24" × 12" × 3"',
    finish: "Off-White",
    highlight: "Full-spectrum fixture",
    weightLbs: 6,
    featured: true,
    extraTags: ["grow-light"],
    image: "/media/catalog/grow-light.webp",
  },
];

let n = 1;
const products = rows.map((row) => {
  const idNum = String(n).padStart(3, "0");
  const handle = slug(row.title);
  const product = {
    id: `vd-${idNum}`,
    handle,
    title: row.title,
    description: row.description,
    collection: row.collection,
    price: row.price,
    compareAtPrice: row.compareAtPrice,
    currency: "USD",
    sku: `VD-${idNum}`,
    material: row.material,
    size: row.size,
    finish: row.finish,
    highlight: row.highlight,
    weightLbs: row.weightLbs,
    featured: row.featured,
    tags: [row.collection, ...row.extraTags],
    inStock: true,
    image: row.image,
  };
  n += 1;
  return product;
});

const handles = new Set(products.map((p) => p.handle));
if (handles.size !== products.length) {
  throw new Error("Duplicate product handles");
}

const catalog = {
  brand: "Verdance",
  generatedAt: new Date().toISOString(),
  collections,
  products,
};

writeFileSync(join(dataDir, "catalog.json"), JSON.stringify(catalog, null, 2));
console.log(`Wrote ${products.length} products across ${collections.length} collections.`);
