export const metadata = {
  title: "About",
  description: "About Verdance sustainable home electronics and garden systems.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <p className="eyebrow">About</p>
      <h1 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
        Quiet machines for a lighter household
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        <p>
          Verdance is a sustainable home electronics and home &amp; garden line
          designed for kitchens, basements, and yards that want less waste and
          less noise. The storefront is a custom Next.js experience with a full
          Shopify-importable catalog.
        </p>
        <p>
          This project ships with 110+ SKUs across composters, waste systems,
          dehumidifiers, produce dryers, smart-home sensors, garden tools,
          accessories, and bundles—so the shop section feels complete from day
          one.
        </p>
        <p>
          Connect your Shopify store when you&apos;re ready: import{" "}
          <code className="text-[var(--copper)]">data/shopify-products.csv</code>,
          add Storefront API credentials, and wire live checkout.
        </p>
      </div>
    </div>
  );
}
