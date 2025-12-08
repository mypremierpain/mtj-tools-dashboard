// src/app/buy-domains/page.tsx
"use client";

import DashboardShell from "../components/DashboardShell";

export default function BuyDomainsPage() {
  const ideas = [
    "localdentalseo.com",
    "dallaspainranker.com",
    "murphydentalmaps.com",
    "fortworthseolab.com",
    "texasrankstudio.com",
  ];

  const registrars = [
    {
      name: "Namecheap",
      url: "https://www.namecheap.com",
      note: "Good pricing, easy DNS management.",
    },
    {
      name: "GoDaddy",
      url: "https://www.godaddy.com",
      note: "Popular registrar with many add-ons.",
    },
    {
      name: "Cloudflare Registrar",
      url: "https://www.cloudflare.com/products/registrar/",
      note: "Low-cost domains with powerful DNS.",
    },
  ];

  return (
    <DashboardShell>
      <div className="space-y-4">
        {/* Header card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-4 text-sm">
          <div className="text-sm font-semibold">Buy Domains</div>
          <p className="mt-1 text-xs text-slate-400">
            Use this space to plan SEO-friendly domains for new projects,
            microsites, or local lead-gen assets. Later you can connect this
            section to a registrar API if you want to automate purchases.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Suggestions card */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/70 p-4 text-xs">
            <div className="text-sm font-semibold">Domain ideas</div>
            <p className="mt-1 text-[11px] text-slate-400">
              Example names you might use for local SEO projects or niche
              websites.
            </p>

            <ul className="mt-3 space-y-1.5 text-slate-200">
              {ideas.map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                >
                  <span className="text-[11px] font-mono">{name}</span>
                  <button className="text-[10px] font-semibold text-indigo-400 hover:text-indigo-300">
                    Check availability
                  </button>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-[11px] text-slate-500">
              You can later add a &quot;Check availability&quot; API call here
              to query prices and TLD availability in real-time.
            </p>
          </div>

          {/* Registrars card */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/70 p-4 text-xs">
            <div className="text-sm font-semibold">Popular registrars</div>
            <p className="mt-1 text-[11px] text-slate-400">
              Click any registrar to search for your domain and complete the
              purchase there.
            </p>

            <div className="mt-3 space-y-2">
              {registrars.map((reg) => (
                <div
                  key={reg.name}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                >
                  <div>
                    <div className="text-[11px] font-semibold">
                      {reg.name}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {reg.note}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      window.open(reg.url, "_blank", "noopener,noreferrer")
                    }
                    className="rounded-lg bg-indigo-500 px-3 py-1.5 text-[10px] font-semibold hover:bg-indigo-600"
                  >
                    Open
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[11px] text-slate-500">
              You can store preferred registrars for each client or project, and
              track which domains you already own.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
