import Image from "next/image";
import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { getCollections, getFeaturedProducts, getProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts(6);
  const collections = getCollections();
  const total = getProducts().length;

  return (
    <>
      <section className="greenhouse">
        <Image
          src="/media/hero-greenhouse.webp"
          alt="Dense foliage inside a glasshouse"
          fill
          priority
          sizes="100vw"
          className="greenhouse__photo"
        />
        <div className="greenhouse__scrim" aria-hidden />
        <div className="panes" aria-hidden />
        <p className="eyebrow">Quiet machines</p>
        <h1 className="font-display greenhouse__title">
          Keep the
          <br />
          house quiet.
        </h1>
        <p className="greenhouse__lede">
          Kitchen composters, outdoor tumblers, sensor cans, dehumidifiers, and
          a tray dryer — each listing shows the machine in the photo.
        </p>
        <Link href="/shop" className="seed">
          Walk the beds →
        </Link>
      </section>

      <section className="field">
        <div className="field__head">
          <h2 className="font-display">Field guide</h2>
          <Link href="/shop">{total} specimens</Link>
        </div>
        <div className="leaves">
          {collections.map((c) => (
            <Link key={c.handle} href={`/collections/${c.handle}`} className="leaf">
              <strong className="font-display">{c.title}</strong>
              <span>{c.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rows">
        <h2 className="font-display">Already in the ground</h2>
        <div className="rows__grid">
          {featured.map((product, i) => (
            <Link
              key={product.id}
              href={`/shop/${product.handle}`}
              className={i % 3 === 1 ? "rows__drop" : ""}
            >
              <ProductVisual product={product} />
              <p className="font-display">{product.title}</p>
              <span>${product.price}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
