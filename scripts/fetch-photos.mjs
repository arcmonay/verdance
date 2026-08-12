import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "assets", "photo-library");
mkdirSync(outDir, { recursive: true });

const collections = {
  composters: {
    prefix: "photo-compost",
    ids: [
      "1542601906990-b4d3fb778b09",
      "1471193945509-9ad0617afab1",
      "1550989460-0adf9ea622e2",
      "1542838132-92c53300491e",
      "1464226141880-b34d4dff0fc2",
      "1556911220-e15b29be8c8f",
      "1556912172-45b7abe8b7e1",
      "1571171637578-41bc2dd41cd2",
      "1488459716781-31db52582fe9",
      "1518843875459-b74132f05b60",
    ],
  },
  "waste-systems": {
    prefix: "photo-waste",
    ids: [
      "1532996122724-e3c354a0b15b",
      "1611273426858-450d8e3c9fce",
      "1556911220-e15b29be8c8f",
      "1556912172-45b7abe8b7e1",
      "1571171637578-41bc2dd41cd2",
      "1600585154340-0efd71627c4f",
      "1484101403633-562f891dc89a",
      "1600210492491-304ce0b3bb26",
      "1581578731548-c64695cc6952",
      "1558618666-fcd25c85cd64",
    ],
  },
  dehumidifiers: {
    prefix: "photo-dehumid",
    ids: [
      "1581578731548-c64695cc6952",
      "1571171637578-41bc2dd41cd2",
      "1600585154340-0efd71627c4f",
      "1600210492491-304ce0b3bb26",
      "1484101403633-562f891dc89a",
      "1600585154526-990dced4db0d",
      "1558002038-1055907df827",
      "1581091226825-a6a2a5aee158",
      "1581092160562-40aa08e78861",
      "1550751827-4bd374c3f58b",
    ],
  },
  "produce-dryers": {
    prefix: "photo-dryer",
    ids: [
      "1601004890684-d8cbf643f384",
      "1542838132-92c53300491e",
      "1464226184884-fa280b87c399",
      "1464226141880-b34d4dff0fc2",
      "1550989460-0adf9ea622e2",
      "1471193945509-9ad0617afab1",
      "1488459716781-31db52582fe9",
      "1518843875459-b74132f05b60",
      "1490818387583-1baba5e83037",
      "1592921870789-04563c8fcfde",
    ],
  },
  "smart-home": {
    prefix: "photo-smart",
    ids: [
      "1558002038-1055907df827",
      "1550751827-4bd374c3f58b",
      "1518770660439-4636190af475",
      "1581091226825-a6a2a5aee158",
      "1581092160562-40aa08e78861",
      "1600585154340-0efd71627c4f",
      "1600210492491-304ce0b3bb26",
      "1484101403633-562f891dc89a",
      "1558618666-fcd25c85cd64",
      "1571171637578-41bc2dd41cd2",
    ],
  },
  "home-garden": {
    prefix: "photo-garden",
    ids: [
      "1416879595882-3373a0480b5b",
      "1466692476866-a0dcfbfbffb0",
      "1485955900006-10f4d324d411",
      "1501004318641-b39e6451bec6",
      "1492496913202-285947630803",
      "1560493676-04071c5f2858",
      "1574944985070-8f3ebc6b79d2",
      "1441974231531-c6227db76b6e",
      "1472214103451-9374bd1ed2ba",
      "1542601906990-b4d3fb778b09",
      "1471193945509-9ad0617afab1",
    ],
  },
  accessories: {
    prefix: "photo-access",
    ids: [
      "1558618666-fcd25c85cd64",
      "1556911220-e15b29be8c8f",
      "1556912172-45b7abe8b7e1",
      "1571171637578-41bc2dd41cd2",
      "1581091226825-a6a2a5aee158",
      "1485955900006-10f4d324d411",
      "1558002038-1055907df827",
      "1601004890684-d8cbf643f384",
      "1542838132-92c53300491e",
      "1532996122724-e3c354a0b15b",
    ],
  },
  bundles: {
    prefix: "photo-bundle",
    ids: [
      "1556911220-e15b29be8c8f",
      "1556912172-45b7abe8b7e1",
      "1542601906990-b4d3fb778b09",
      "1471193945509-9ad0617afab1",
      "1416879595882-3373a0480b5b",
      "1466692476866-a0dcfbfbffb0",
      "1532996122724-e3c354a0b15b",
      "1600585154340-0efd71627c4f",
      "1484101403633-562f891dc89a",
      "1571171637578-41bc2dd41cd2",
    ],
  },
};

const fallbackIds = [
  "1416879595882-3373a0480b5b",
  "1466692476866-a0dcfbfbffb0",
  "1485955900006-10f4d324d411",
  "1501004318641-b39e6451bec6",
  "1556911220-e15b29be8c8f",
  "1571171637578-41bc2dd41cd2",
  "1441974231531-c6227db76b6e",
  "1472214103451-9374bd1ed2ba",
  "1600585154340-0efd71627c4f",
  "1542601906990-b4d3fb778b09",
];

function urlFor(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;
}

async function download(id, dest) {
  const url = urlFor(id);
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "User-Agent": "VerdanceStorefront/1.0" },
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  const type = res.headers.get("content-type") || "";
  if (!type.includes("image")) {
    throw new Error(`not-image:${type}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) {
    throw new Error("too-small");
  }
  writeFileSync(dest, buf);
  return buf.length;
}

async function fillCollection(handle, spec) {
  const saved = [];
  const tried = new Set();
  const queue = [...spec.ids, ...fallbackIds];

  for (const id of queue) {
    if (saved.length >= 10) break;
    if (tried.has(id)) continue;
    tried.add(id);
    const dest = join(outDir, `${spec.prefix}-${saved.length + 1}.jpg`);
    try {
      const bytes = await download(id, dest);
      saved.push({ file: `${spec.prefix}-${saved.length + 1}.jpg`, id, bytes });
      console.log(`  ${handle}: ${spec.prefix}-${saved.length}.jpg (${id})`);
    } catch (err) {
      console.log(`  skip ${id} (${err.message})`);
    }
  }

  if (saved.length < 5) {
    throw new Error(`${handle} only saved ${saved.length} photos (need 5)`);
  }
  return saved;
}

async function main() {
  const index = { generatedAt: new Date().toISOString(), collections: {} };
  let total = 0;

  for (const [handle, spec] of Object.entries(collections)) {
    console.log(`Fetching ${handle}…`);
    const files = await fillCollection(handle, spec);
    index.collections[handle] = files;
    total += files.length;
  }

  index.count = total;
  writeFileSync(join(outDir, "INDEX.json"), JSON.stringify(index, null, 2));
  console.log(`Done. ${total} photos in ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
