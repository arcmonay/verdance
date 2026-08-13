import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="packet-foot">
      <div className="packet-foot__perf" aria-hidden />
      <div className="packet-foot__inner">
        <div className="packet-foot__mark">
          <BrandLogo width={40} height={62} />
          <p className="font-display">
            VRD<span>NC</span>
          </p>
        </div>
        <nav>
          <Link href="/shop">Catalog</Link>
          <Link href="/collections/composters">Compost</Link>
          <Link href="/collections/waste-systems">Waste</Link>
          <Link href="/collections/dehumidifiers">Climate</Link>
          <Link href="/impact">Ledger</Link>
          <Link href="/about">Origin</Link>
          <Link href="/cart">Packet</Link>
        </nav>
        <p className="packet-foot__legal">
          © 2025 Verdance. Quiet green home machines — composters, sensor cans,
          dehumidifiers, and related equipment. Specs over slogans.
        </p>
      </div>
    </footer>
  );
}
