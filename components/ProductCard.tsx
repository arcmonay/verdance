import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.handle}`} className="card group">
      <ProductVisual product={product} />
      <div className="card__body">
        <p className="card__meta">{product.collection.replace(/-/g, " ")}</p>
        <p className="card__title">{product.title}</p>
        <p className="card__price">
          {formatMoney(product.price)}
          {product.compareAtPrice ? (
            <s>{formatMoney(product.compareAtPrice)}</s>
          ) : null}
        </p>
      </div>
    </Link>
  );
}
