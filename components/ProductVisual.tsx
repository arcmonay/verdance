import Image from "next/image";
import type { Product } from "@/lib/types";

type Props = {
  product: Product;
  className?: string;
  priority?: boolean;
};

export function ProductVisual({ product, className = "", priority = false }: Props) {
  const src = product.image || `/media/catalog/kitchen-composter.webp`;

  return (
    <div
      className={`product-shot relative aspect-[4/5] overflow-hidden border border-[var(--line)] ${className}`}
    >
      <Image
        src={src}
        alt={product.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain p-4"
        priority={priority}
      />
    </div>
  );
}
