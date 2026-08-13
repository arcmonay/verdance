import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getCollections, getFeaturedProducts, getProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts(6);
  const collections = getCollections();
  const total = getProducts().length;

  return (
    <>
      <section className="packet-open" aria-label="Open seed packet">
        <div className="packet-face">
          <div>
            <div className="packet-face__lot">
              <span>Packet No. 01</span>
              <span>Quiet machines</span>
            </div>
            <h1 className="font-display packet-face__brand">
              Verdan<span>ce</span>
            </h1>
            <p className="font-display packet-face__headline">
              Sow quieter rooms. Keep the kitchen green.
            </p>
            <p className="packet-face__lede">
              Composters, tumblers, sensor cans, dehumidifiers, dehydrators,
              thermostats, and grow lights — cataloged like specimens, sold as
              the machines in the photos.
            </p>
          </div>
          <div className="packet-face__actions">
            <Link href="/shop" className="sow">
              Open the catalog
            </Link>
            <Link href="/collections/composters" className="sow-ghost">
              Start with compost
            </Link>
          </div>
        </div>

        <div className="packet-plate">
          <Image
            src="/media/hero.webp"
            alt="Bright white botanical kitchen with trailing plants"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 55vw"
            quality={90}
          />
          <div className="packet-plate__frame" aria-hidden />
          <div className="packet-plate__caption">
            <span>Plate A · Kitchen field</span>
            <span>White / living green</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2 className="font-display">Genus index</h2>
          <Link href="/shop">{total} specimens in stock</Link>
        </div>
        <div className="guide-strip">
          <Image
            src="/media/kitchen-island.webp"
            alt="Marble kitchen island with fern and fruit bowl"
            fill
            sizes="(max-width: 960px) 100vw, 1120px"
            className="object-cover"
          />
          <span className="guide-strip__label">Habitat plate</span>
        </div>
        <div className="genus-grid">
          {collections.map((c, i) => (
            <Link
              key={c.handle}
              href={`/collections/${c.handle}`}
              className="genus"
            >
              <span className="genus__code">
                Gen. {String(i + 1).padStart(2, "0")}
              </span>
              <strong className="font-display">{c.title}</strong>
              <span>{c.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2 className="font-display">Featured plates</h2>
          <p>Machines already in the ledger</p>
        </div>
        <div className="plate-grid">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} plate={i + 1} />
          ))}
        </div>
      </section>
    </>
  );
}
