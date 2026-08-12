import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo width={42} height={64} />
            <p className="font-display text-3xl font-semibold tracking-tight">
              Verdan<span className="text-[var(--ember)]">ce</span>
            </p>
          </div>
          <p className="mt-3 max-w-sm text-[var(--ink-muted)] leading-relaxed">
            Quiet machines for a lighter household—composters, waste systems,
            and energy-minded home electronics.
          </p>
        </div>
        <div>
          <p className="eyebrow">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
            <li>
              <Link href="/shop" className="hover:text-[var(--ink)]">
                All products
              </Link>
            </li>
            <li>
              <Link
                href="/collections/composters"
                className="hover:text-[var(--ink)]"
              >
                Composters
              </Link>
            </li>
            <li>
              <Link href="/collections/bundles" className="hover:text-[var(--ink)]">
                Bundles
              </Link>
            </li>
            <li>
              <Link
                href="/collections/accessories"
                className="hover:text-[var(--ink)]"
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
            <li>
              <Link href="/impact" className="hover:text-[var(--ink)]">
                Impact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--ink)]">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="container flex flex-col gap-2 py-5 text-xs text-[var(--ink-faint)] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Verdance. Built for Shopify catalog import.</p>
          <p>Designed for quieter kitchens and lighter households.</p>
        </div>
      </div>
    </footer>
  );
}
