import { CartView } from "@/components/CartView";

export const metadata = { title: "Basket" };

export default function CartPage() {
  return (
    <div className="plot-page">
      <h1 className="font-display greenhouse__title" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
        The basket
      </h1>
      <div className="mt-10">
        <CartView />
      </div>
    </div>
  );
}
