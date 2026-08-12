export const metadata = {
  title: "Impact",
  description:
    "How Verdance thinks about materials, energy, and household waste.",
};

export default function ImpactPage() {
  return (
    <article className="plot-page" style={{ maxWidth: "42rem" }}>
      <p className="eyebrow">Impact</p>
      <h1 className="font-display greenhouse__title" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
        Materials, energy, and less waste.
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        <p>
          Household waste and standby power add up quietly. Verdance machines
          are specified for the jobs that actually move the needle: keeping
          food scraps out of landfill, drying surplus produce, and running
          climate and leak systems on a modest energy budget.
        </p>
        <p>
          We favor recycled and recyclable housings, replaceable filters and
          trays, and Energy Star–class motors where the category exists. Spec
          sheets list material, size, finish, and a single highlight so you can
          compare equipment instead of slogans.
        </p>
        <p>
          Impact claims on product pages are operational, not carbon-offset
          theater. Composters reduce organic waste volume. Dehumidifiers are
          chosen for pint capacity and watt class. Smart-home sensors exist to
          catch leaks and idle loads before they become a repair.
        </p>
      </div>
      <div className="leaves mt-10">
        {[
          ["Materials", "Recycled ABS, stainless, and replaceable filter packs."],
          ["Energy", "Energy Star dehumidifiers and low-draw smart plugs."],
          ["Waste", "Kitchen composters and dual-stream recycling stations."],
          ["Repair", "Trays, liners, and filters sold as standalone SKUs."],
        ].map(([k, v]) => (
          <div key={k} className="leaf">
            <strong className="font-display">{k}</strong>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
