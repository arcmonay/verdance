import Image from "next/image";

export const metadata = {
  title: "Origin",
  description: "About Verdance quiet green home machines.",
};

export default function AboutPage() {
  return (
    <article className="page-frame" style={{ maxWidth: "42rem" }}>
      <p className="page-kicker">Origin note</p>
      <h1 className="font-display page-title">
        Quiet machines for a lighter household.
      </h1>
      <div className="guide-strip mt-8" style={{ minHeight: "16rem" }}>
        <Image
          src="/media/herbs.webp"
          alt="Bundles of sage and fresh herbs hanging to dry"
          fill
          sizes="(max-width: 960px) 100vw, 42rem"
          className="object-cover"
        />
        <span className="guide-strip__label">Habitat · herbs</span>
      </div>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        <p>
          Verdance is a quiet green home-machine line for kitchens, basements,
          and yards that want less waste and less noise. The storefront is a
          custom Next.js seed-packet ledger with a Shopify-importable catalog.
        </p>
        <p>
          Composters, tumblers, sensor cans, dehumidifiers, a tray dryer, a wall
          thermostat, and a grow light. Each listing uses a catalog photo of that
          unit — the machine you receive, not a mood collage.
        </p>
        <p>
          Connect Shopify when ready: import{" "}
          <code className="text-[var(--leaf-deep)]">data/shopify-products.csv</code>
          , add Storefront API credentials, and wire live checkout.
        </p>
      </div>
    </article>
  );
}
