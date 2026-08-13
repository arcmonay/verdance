import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductGrid";
import {
  formatMoney,
  getCollection,
  getProduct,
  getProducts,
  getProductsByCollection,
} from "@/lib/products";
import { getProductGallery } from "@/lib/gallery";

type Params = Promise<{ handle: string }>;

export function generateStaticParams() {
  return getProducts().map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return { title: "Product" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const collection = getCollection(product.collection);
  const related = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);
  const gallery = getProductGallery(product.handle, product.image);
  const plateNo = product.sku.replace(/\D/g, "").padStart(2, "0") || "01";
  const angles = gallery.slice(1);

  return (
    <>
      <article className="specimen-sheet">
        <div className="specimen-gallery">
          <div className="specimen-hero-shot">
            <Image
              src={gallery[0]}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
          {angles.length ? (
            <div className="specimen-angles">
              {angles.map((src, i) => (
                <div
                  key={src}
                  className={`specimen-angle${src.includes("/catalog/") ? " specimen-angle--machine" : ""}`}
                >
                  <Image
                    src={src}
                    alt={`${product.title} — angle ${i + 2}`}
                    fill
                    sizes="160px"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="specimen-copy">
          <div className="specimen-copy__plate">
            <span>Plate {plateNo}</span>
            {collection ? (
              <Link href={`/collections/${collection.handle}`}>
                {collection.title}
              </Link>
            ) : (
              <span>{product.collection}</span>
            )}
          </div>
          <h1 className="font-display">{product.title}</h1>
          <p className="specimen-price">
            {formatMoney(product.price)}
            {product.compareAtPrice ? (
              <s>{formatMoney(product.compareAtPrice)}</s>
            ) : null}
          </p>
          <p className="specimen-blurb">{product.description}</p>
          <ul className="ledger-rows">
            {[
              ["Material", product.material],
              ["Size", product.size],
              ["Finish", product.finish],
              ["Highlight", product.highlight],
              ["Weight", `${product.weightLbs} lb`],
              ["SKU", product.sku],
            ].map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <AddToCartButton handle={product.handle} />
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="section">
          <div className="section__head">
            <h2 className="font-display">Same genus</h2>
            <p>Related machines</p>
          </div>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </>
  );
}
