import { CartView } from "@/components/CartView";

export const metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <div className="page">
      <p className="eyebrow">Cart</p>
      <h1>Your cart</h1>
      <div className="mt-10">
        <CartView />
      </div>
    </div>
  );
}
