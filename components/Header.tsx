"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/shop", label: "Catalog" },
  { href: "/collections/composters", label: "Compost" },
  { href: "/collections/waste-systems", label: "Waste" },
  { href: "/collections/dehumidifiers", label: "Climate" },
  { href: "/impact", label: "Ledger" },
  { href: "/about", label: "Origin" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="packet-banner">
      <div className="packet-banner__inner">
        <Link href="/" className="packet-brand" onClick={() => setOpen(false)}>
          <BrandLogo width={34} height={52} priority className="packet-seal" />
          <span className="packet-wordmark">
            <strong>
              Verdan<em>ce</em>
            </strong>
            <small>Seed packet ledger · Lot 2025</small>
          </span>
        </Link>

        <nav className="packet-nav" aria-label="Primary">
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

        <div className="packet-lot">
          <div className="packet-lot__meta">
            Quiet machines
            <br />
            Field guide
          </div>
          <button
            type="button"
            className="packet-menu-btn"
            aria-expanded={open}
            aria-controls="packet-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <Link href="/cart" className="packet-basket" onClick={() => setOpen(false)}>
            Packet{count > 0 ? ` · ${count}` : ""}
          </Link>
        </div>
      </div>

      <div
        id="packet-drawer"
        className={`packet-drawer${open ? " is-open" : ""}`}
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
      <div className="packet-perf" aria-hidden />
    </header>
  );
}
