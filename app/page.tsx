import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ProductGrid } from "@/components/ProductGrid";
import { getCollections, getFeaturedProducts, getProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const collections = getCollections().slice(0, 6);
  const total = getProducts().length;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-sweep absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(61,143,92,0.28),transparent_55%)]" />
          <div className="absolute inset-y-0 right-0 w-full bg-[linear-gradient(90deg,var(--bg)_18%,transparent_70%)] md:w-[70%]" />
          <div
            className="absolute right-[-6%] top-[10%] hidden h-[80%] w-[52%] md:block"
            aria-hidden
          >
            <div className="product-glow relative mx-auto h-full w-[58%] rounded-full border border-[rgba(196,165,116,0.28)] bg-[radial-gradient(circle_at_50%_42%,#2a6a43_0%,#18241e_58%,#121a16_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-[12%] rounded-full border border-[rgba(196,165,116,0.18)]" />
              <div className="absolute inset-[22%] rounded-full border border-[rgba(61,143,92,0.22)]" />
              <div className="absolute left-1/2 top-[38%] h-24 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#c4a574,#8a7048)] opacity-80 blur-[1px]" />
              <div className="absolute bottom-[18%] left-[18%] right-[18%] h-16 rounded-[40%] bg-[rgba(61,143,92,0.35)] blur-md" />
            </div>
          </div>
        </div>

        <div className="container relative grid min-h-[calc(100svh-4.25rem)] items-center py-16 md:py-20">
          <div className="max-w-xl">
            <p className="eyebrow fade-up">Sustainable home electronics</p>
            <BrandLogo size={88} priority className="fade-up mt-5" />
            <h1 className="font-display fade-up-delay mt-4 text-[clamp(3.2rem,8vw,5.6rem)] leading-[0.95] tracking-tight">
              Verdan<span className="text-[var(--ember)]">ce</span>
            </h1>
            <p className="fade-up-delay-2 mt-5 max-w-md text-lg leading-relaxed text-[var(--ink-muted)]">
              Quiet machines for a lighter household—composters, waste systems,
              and energy-minded tools that keep kitchens and gardens running
              with less waste.
            </p>
            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn btn-primary">
                Shop the catalog
              </Link>
              <Link href="/impact" className="btn btn-ghost">
                Our impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-16 md:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Collections</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight md:text-4xl">
                Built as a full household line
              </h2>
            </div>
            <Link href="/shop" className="text-sm text-[var(--copper)] hover:underline">
              View all {total} listings →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c) => (
              <Link
                key={c.handle}
                href={`/collections/${c.handle}`}
                className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.02)] p-6 transition-colors hover:border-[rgba(61,143,92,0.4)] hover:bg-[rgba(61,143,92,0.06)]"
              >
                <h3 className="font-display text-2xl tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-16 md:py-20">
        <div className="container">
          <div className="mb-10">
            <p className="eyebrow">Featured</p>
            <h2 className="font-display mt-2 text-3xl tracking-tight md:text-4xl">
              Start with these systems
            </h2>
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-16 md:py-20">
        <div className="container grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(61,143,92,0.12),rgba(18,26,22,0.2))] p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
          <div>
            <p className="eyebrow">Shopify-ready</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">
              Import the full catalog in one CSV
            </h2>
            <p className="mt-4 max-w-lg text-[var(--ink-muted)] leading-relaxed">
              {total} products across {getCollections().length} collections ship
              with this project as a Shopify Admin CSV—connect your store when
              you&apos;re ready to go live.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Link href="/shop" className="btn btn-primary w-full sm:w-auto">
              Browse the shop
            </Link>
            <p className="text-xs text-[var(--ink-faint)]">
              File: <code>data/shopify-products.csv</code>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
