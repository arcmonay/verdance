import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({
  product,
  plate,
}: {
  product: Product;
  plate?: number;
}) {
  const plateNo = plate ?? (Number(product.sku.replace(/\D/g, "")) || 1);

  return (
    <Link href={`/shop/${product.handle}`} className="specimen group">
      <ProductVisual product={product} />
      <div className="specimen__meta">
        <span>Plate {String(plateNo).padStart(2, "0")}</span>
        <span>{product.collection.replace(/-/g, " ")}</span>
      </div>
      <p className="font-display specimen__title">{product.title}</p>
      <p className="specimen__price">{formatMoney(product.price)}</p>
    </Link>
  );
}
