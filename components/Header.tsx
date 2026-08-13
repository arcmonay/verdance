"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/shop", label: "Shop all" },
  { href: "/collections/composters", label: "Composters" },
  { href: "/collections/waste-systems", label: "Waste" },
  { href: "/collections/dehumidifiers", label: "Dehumidifiers" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announce">
        Free shipping on machines · Specs on every listing ·{" "}
        <Link href="/shop">Shop the lineup</Link>
      </div>
      <header className="topbar">
        <div className="topbar__inner">
          <Link href="/" className="topbar__brand" onClick={() => setOpen(false)}>
            <BrandLogo width={28} height={42} priority />
            Verdance
          </Link>

          <nav className="topbar__nav" aria-label="Primary">
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

          <div className="topbar__actions">
            <button
              type="button"
              className="topbar__menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
            <Link
              href="/shop"
              className="btn btn-primary btn-sm"
              onClick={() => setOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/cart"
              className="btn btn-ghost btn-sm"
              onClick={() => setOpen(false)}
            >
              Cart{count > 0 ? ` (${count})` : ""}
            </Link>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`topbar__drawer${open ? " is-open" : ""}`}
        >
          <nav aria-label="Mobile">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "is-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
