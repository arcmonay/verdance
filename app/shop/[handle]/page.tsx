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
  const angles = gallery.slice(1);

  return (
    <>
      <article className="pdp">
        <div className="pdp__gallery">
          <div className="pdp__hero">
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
            <div className="pdp__thumbs">
              {angles.map((src, i) => (
                <div
                  key={src}
                  className={`pdp__thumb${src.includes("/catalog/") ? " pdp__thumb--machine" : ""}`}
                >
                  <Image
                    src={src}
                    alt={`${product.title} — view ${i + 2}`}
                    fill
                    sizes="160px"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="pdp__buy">
          {collection ? (
            <p className="eyebrow">
              <Link href={`/collections/${collection.handle}`}>
                {collection.title}
              </Link>
            </p>
          ) : null}
          <h1>{product.title}</h1>
          <p className="pdp__price">
            {formatMoney(product.price)}
            {product.compareAtPrice ? (
              <s>{formatMoney(product.compareAtPrice)}</s>
            ) : null}
          </p>
          <p className="pdp__desc">{product.description}</p>
          <ul className="pdp__specs">
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
        <section className="section section--soft">
          <div className="section__head">
            <h2>You may also like</h2>
            <p>Same category</p>
          </div>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </>
  );
}
