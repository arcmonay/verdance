import Image from "next/image";

export const metadata = {
  title: "Story",
  description: "About Verdance sustainable home electronics and garden systems.",
};

export default function AboutPage() {
  return (
    <article className="plot-page" style={{ maxWidth: "42rem" }}>
      <p className="eyebrow">Story</p>
      <h1 className="font-display greenhouse__title" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
        Quiet machines for a lighter household.
      </h1>
      <div className="field-visual mt-8" style={{ minHeight: "16rem" }}>
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
          Verdance is a sustainable home electronics and home &amp; garden line
          designed for kitchens, basements, and yards that want less waste and
          less noise. The storefront is a custom Next.js experience with a full
          Shopify-importable catalog.
        </p>
        <p>
          Ten machines: kitchen composters, a yard tumbler, sensor cans,
          portable dehumidifiers, a tray dryer, a wall thermostat, and a grow
          light. Each listing uses a catalog photo of that unit.
        </p>
        <p>
          Connect your Shopify store when you&apos;re ready: import{" "}
          <code className="text-[var(--ember-deep)]">data/shopify-products.csv</code>,
          add Storefront API credentials, and wire live checkout.
        </p>
      </div>
    </article>
  );
}
