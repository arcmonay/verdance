import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <p className="max-w-md text-[var(--ink-muted)]">
        Nothing in this bed. Try another row of the plot.
      </p>
    );
  }

  return (
    <div className="rows__grid">
      {products.map((product, i) => (
        <div key={product.id} className={i % 3 === 1 ? "rows__drop" : ""}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
