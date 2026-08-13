import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <p className="max-w-md text-[var(--ink-muted)]">
        No specimens in this row. Try another genus in the catalog.
      </p>
    );
  }

  return (
    <div className="plate-grid">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} plate={i + 1} />
      ))}
    </div>
  );
}
