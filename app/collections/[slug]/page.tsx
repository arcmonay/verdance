import Image from "next/image";
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
  const index = getCollections().findIndex((c) => c.handle === slug);

  return (
    <div className="page-frame">
      <p className="page-kicker">
        <Link href="/shop">Catalog</Link>
        <span className="mx-2 text-[var(--ink-faint)]">·</span>
        Gen. {String(index + 1).padStart(2, "0")}
      </p>
      <h1 className="font-display page-title">{collection.title}</h1>
      <p className="page-lede">
        {collection.description} {products.length} specimens in this genus.
      </p>
      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
