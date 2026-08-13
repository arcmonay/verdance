import Image from "next/image";

export const metadata = {
  title: "About",
  description: "About Verdance quiet green home machines.",
};

export default function AboutPage() {
  return (
    <article className="page" style={{ maxWidth: "42rem" }}>
      <p className="eyebrow">About</p>
      <h1>Quiet machines for a lighter household.</h1>
      <div
        className="relative mt-8 overflow-hidden rounded-[1.5rem]"
        style={{ minHeight: "16rem" }}
      >
        <Image
          src="/media/herbs.webp"
          alt="Bundles of sage and fresh herbs hanging to dry"
          fill
          sizes="(max-width: 960px) 100vw, 42rem"
          className="object-cover"
        />
      </div>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        <p>
          Verdance is a quiet green home-machine line for kitchens, basements,
          and yards. The storefront is a custom Next.js experience with a
          Shopify-importable catalog.
        </p>
        <p>
          Composters, tumblers, sensor cans, dehumidifiers, a tray dryer, a wall
          thermostat, and a grow light. Each listing uses a catalog photo of that
          unit.
        </p>
        <p>
          Connect Shopify when ready: import{" "}
          <code className="text-[var(--brand)]">data/shopify-products.csv</code>
          , add Storefront API credentials, and wire live checkout.
        </p>
      </div>
    </article>
  );
}
