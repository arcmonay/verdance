import { CartView } from "@/components/CartView";

export const metadata = { title: "Packet" };

export default function CartPage() {
  return (
    <div className="page-frame">
      <p className="page-kicker">Carry pouch</p>
      <h1 className="font-display page-title">Your packet</h1>
      <div className="mt-10">
        <CartView />
      </div>
    </div>
  );
}
