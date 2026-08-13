import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import {
  getCollection,
  getCollections,
  getProductsByCollection,
} from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCollections().map((c) => ({ slug: c.handle }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const products = getProductsByCollection(slug);

  return (
    <div className="page">
      <p className="eyebrow">
        <Link href="/shop">Shop</Link>
        <span className="mx-2 text-[var(--ink-faint)]">/</span>
        {collection.title}
      </p>
      <h1>{collection.title}</h1>
      <p className="page__lede">
        {collection.description} {products.length} products in this category.
      </p>
      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
