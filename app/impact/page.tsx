import Image from "next/image";

export const metadata = {
  title: "Ledger",
  description:
    "How Verdance thinks about materials, energy, and household waste.",
};

export default function ImpactPage() {
  return (
    <article className="page-frame" style={{ maxWidth: "42rem" }}>
      <p className="page-kicker">Impact ledger</p>
      <h1 className="font-display page-title">
        Materials, energy, and less waste.
      </h1>
      <div className="guide-strip mt-8" style={{ minHeight: "14rem" }}>
        <Image
          src="/media/succulent.webp"
          alt="Succulent in a mint pot on a white surface"
          fill
          sizes="(max-width: 960px) 100vw, 42rem"
          className="object-cover"
        />
        <span className="guide-strip__label">Habitat · desk</span>
      </div>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        <p>
          Household waste and standby power add up quietly. Verdance machines
          are specified for jobs that move the needle: keeping food scraps out
          of landfill, drying surplus produce, and pulling moisture from a damp
          room.
        </p>
        <p>
          We favor recycled and recyclable housings, replaceable filters and
          trays, and Energy Star–class motors where the category exists. Spec
          sheets list material, size, finish, and a single highlight so you can
          compare equipment — not slogans.
        </p>
        <p>
          Claims stay operational. Composters reduce organic waste volume.
          Dehumidifiers are chosen for pint capacity and watt class. The
          thermostat trims HVAC runtime. The grow light is a fixture, not a
          plant. No carbon-offset theater.
        </p>
      </div>
      <div className="genus-grid mt-10">
        {[
          ["Materials", "Recycled ABS, stainless, and replaceable filter packs."],
          ["Energy", "Energy Star–class dehumidifiers and a wall thermostat."],
          ["Waste", "Kitchen composters, a yard tumbler, and sensor cans."],
          ["Proof", "The photo on each listing is the machine you receive."],
        ].map(([k, v], i) => (
          <div key={k} className="genus">
            <span className="genus__code">
              Note {String(i + 1).padStart(2, "0")}
            </span>
            <strong className="font-display">{k}</strong>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
