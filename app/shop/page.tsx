import { Suspense } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { ShopFilters } from "@/components/ShopFilters";
import {
  getCollections,
  getProducts,
  getProductsByCollection,
  searchProducts,
} from "@/lib/products";

export const metadata = {
  title: "Catalog",
  description:
    "Browse Verdance composters, sensor cans, dehumidifiers, and quiet green home machines.",
};

type Props = {
  searchParams: Promise<{ collection?: string; q?: string }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const { collection, q } = await searchParams;
  const collections = getCollections();

  let products = q ? searchProducts(q) : getProducts();
  if (collection && collection !== "all") {
    const inCollection = new Set(
      getProductsByCollection(collection).map((p) => p.id),
    );
    products = products.filter((p) => inCollection.has(p.id));
  }

  return (
    <div className="page-frame">
      <p className="page-kicker">Seed packet catalog</p>
      <h1 className="font-display page-title">The catalog</h1>
      <p className="page-lede">
        {products.length} specimens
        {collection
          ? ` in ${collections.find((c) => c.handle === collection)?.title ?? collection}`
          : ""}
        {q ? ` matching “${q}”` : ""}. Indexed by genus, priced as equipment.
      </p>
      <div className="mt-10 mb-12">
        <Suspense fallback={<div className="h-12" />}>
          <ShopFilters collections={collections} />
        </Suspense>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
