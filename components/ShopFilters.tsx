"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Collection } from "@/lib/types";

export function ShopFilters({ collections }: { collections: Collection[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("collection") ?? "all";
  const q = params.get("q") ?? "";

  function update(next: { collection?: string; q?: string }) {
    const sp = new URLSearchParams(params.toString());
    const collection = next.collection ?? active;
    const query = next.q ?? q;
    if (!collection || collection === "all") sp.delete("collection");
    else sp.set("collection", collection);
    if (!query) sp.delete("q");
    else sp.set("q", query);
    router.push(`/shop?${sp.toString()}`);
  }

  return (
    <div className="grid gap-8 md:grid-cols-[16rem_1fr] md:items-end">
      <ol className="m-0 flex list-none flex-col gap-1 border border-[var(--rule)] bg-[var(--paper-bright)] p-4">
        <li>
          <button
            type="button"
            onClick={() => update({ collection: "all" })}
            className={`w-full text-left ${active === "all" ? "text-[var(--ink)]" : "text-[var(--ink-faint)]"}`}
          >
            <span className="mr-3 text-[0.68rem] font-bold tracking-[0.14em]">
              00
            </span>
            Full ledger
          </button>
        </li>
        {collections.map((c, i) => (
          <li key={c.handle}>
            <button
              type="button"
              onClick={() => update({ collection: c.handle })}
              className={`w-full text-left ${active === c.handle ? "text-[var(--ink)]" : "text-[var(--ink-faint)]"}`}
            >
              <span className="mr-3 text-[0.68rem] font-bold tracking-[0.14em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {c.title}
            </button>
          </li>
        ))}
      </ol>
      <label className="block w-full max-w-md">
        <span className="sr-only">Search products</span>
        <input
          type="search"
          defaultValue={q}
          placeholder="Find a specimen…"
          onChange={(e) => update({ q: e.target.value })}
          className="w-full border border-[var(--rule)] bg-[var(--paper-bright)] px-3 py-3 text-sm outline-none placeholder:text-[var(--ink-faint)] focus:border-[var(--leaf)]"
        />
      </label>
    </div>
  );
}
