import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="site-foot__grid">
        <div>
          <div className="site-foot__brand">
            <BrandLogo width={30} height={46} />
            Verdance
          </div>
          <p>
            Quiet green home machines for kitchens, basements, and yards —
            composters, sensor cans, dehumidifiers, and more.
          </p>
        </div>
        <nav>
          <strong>Shop</strong>
          <Link href="/shop">Shop all</Link>
          <Link href="/collections/composters">Composters</Link>
          <Link href="/collections/waste-systems">Waste systems</Link>
          <Link href="/collections/dehumidifiers">Dehumidifiers</Link>
        </nav>
        <nav>
          <strong>Company</strong>
          <Link href="/about">About</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/cart">Cart</Link>
        </nav>
        <nav>
          <strong>Support</strong>
          <Link href="/shop">Browse machines</Link>
          <Link href="/collections/produce-dryers">Produce dryers</Link>
          <Link href="/collections/smart-home">Smart home</Link>
        </nav>
      </div>
      <p className="site-foot__legal">
        © 2025 Verdance. Equipment photos show the machines sold. Specs over
        slogans.
      </p>
    </footer>
  );
}
