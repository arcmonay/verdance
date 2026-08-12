"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/shop", label: "The beds" },
  { href: "/collections/composters", label: "Compost" },
  { href: "/collections/smart-home", label: "Kitchen" },
  { href: "/collections/home-garden", label: "Garden" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "Story" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <aside className="trellis">
      <Link href="/" className="trellis-brand">
        <BrandLogo width={42} height={64} priority />
        <span className="font-display">
          Verdan<span>ce</span>
        </span>
      </Link>
      <nav className="vine">
        {links.map((link) => {
          const active =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "is-active" : ""}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Link href="/cart" className="basket">
        Basket{count > 0 ? ` · ${count}` : ""}
      </Link>
    </aside>
  );
}
