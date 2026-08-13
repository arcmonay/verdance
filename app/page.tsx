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
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Quiet green home machines</p>
            <h1>You deserve better than smelly, overflowing scraps.</h1>
            <p>
              Kitchen composters, outdoor tumblers, sensor cans, dehumidifiers,
              and related machines — each listing shows the unit in the photo.
            </p>
            <div className="hero__actions">
              <Link href="/shop" className="btn btn-primary">
                Shop the lineup
              </Link>
              <Link href="/collections/composters" className="btn btn-ghost">
                See composters
              </Link>
            </div>
          </div>
          <div className="hero__media">
            <Image
              src="/media/hero.webp"
              alt="Bright kitchen with plants — Verdance habitat"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 55vw"
              quality={90}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>How it fits your kitchen</h2>
          <p>Simple, quiet equipment</p>
        </div>
        <div className="steps">
          <div className="step">
            <span className="step__num">1</span>
            <h3>Pick the machine</h3>
            <p>
              Browse composters, cans, dehumidifiers, and more. Photos are the
              catalog units — not mood boards.
            </p>
          </div>
          <div className="step">
            <span className="step__num">2</span>
            <h3>Check the specs</h3>
            <p>
              Material, size, finish, weight, and a single highlight on every
              product page so you can compare equipment.
            </p>
          </div>
          <div className="step">
            <span className="step__num">3</span>
            <h3>Run it quietly</h3>
            <p>
              Install, load scraps or set humidity, and keep the rest of the
              house calmer — without theater claims.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__head">
          <h2>Shop by category</h2>
          <Link href="/shop">{total} products</Link>
        </div>
        <div className="cat-grid">
          {collections.map((c) => (
            <Link key={c.handle} href={`/collections/${c.handle}`} className="cat">
              <div>
                <strong>{c.title}</strong>
                <span>{c.description}</span>
              </div>
              <em>Shop {c.title.toLowerCase()} →</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Featured machines</h2>
          <Link href="/shop">View all</Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section section--brand">
        <div className="section__head">
          <h2>Keep the kitchen fresher</h2>
          <Link href="/impact">Read the impact notes →</Link>
        </div>
        <div className="wrap" style={{ maxWidth: "40rem" }}>
          <p style={{ margin: 0, fontSize: "1.08rem", lineHeight: 1.55 }}>
            Verdance focuses on operational jobs: reducing food scrap volume,
            drying surplus produce, and pulling moisture from damp rooms. Spec
            sheets list what the machine is — not carbon-offset slogans.
          </p>
          <div style={{ marginTop: "1.35rem" }}>
            <Link href="/shop" className="btn btn-dark">
              Start shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
