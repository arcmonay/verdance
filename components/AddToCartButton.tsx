"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export function AddToCartButton({
  handle,
  className = "",
}: {
  handle: string;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      className={`seed ${className}`.trim()}
      onClick={() => {
        addItem(handle);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1400);
      }}
    >
      {added ? "In the basket" : "Drop in the basket →"}
    </button>
  );
}
