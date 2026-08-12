import Link from "next/link";

export function Footer() {
  return (
    <footer className="soil">
      <p className="font-display soil-mark">
        VRD<span>NC</span>
      </p>
      <nav>
        <Link href="/shop">The beds</Link>
        <Link href="/collections/composters">Compost</Link>
        <Link href="/collections/waste-systems">Waste</Link>
        <Link href="/collections/dehumidifiers">Climate</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/about">Story</Link>
        <Link href="/cart">Basket</Link>
      </nav>
      <p>© 2025 Verdance. Designed for quieter kitchens and lighter households.</p>
    </footer>
  );
}
