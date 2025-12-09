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
      <div className="space-y-6 text-[14px]">
        {/* Header card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-6">
          <div className="font-semibold text-[16px]">Buy Domains</div>
          <p className="mt-2 text-slate-400 text-[16px]">
            Use this space to plan SEO-friendly domains for new projects,
            microsites, or local lead-gen assets. Later, you can integrate
            registrar APIs to automate purchases.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Suggestions card */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/70 p-6">
            <div className="font-semibold text-[16px]">Domain Ideas</div>
            <p className="mt-2 text-slate-400 text-[16px]">
              Example domain names suitable for SEO projects or niche websites.
            </p>

            <ul className="mt-4 space-y-2">
              {ideas.map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3"
                >
                  <span className="font-mono text-[16px]">{name}</span>
                  <button className="text-indigo-400 hover:text-indigo-300 font-semibold text-[16px]">
                    Check availability
                  </button>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-slate-500 text-[16px]">
              You can later connect a domain availability API to fetch live
              prices and TLD options.
            </p>
          </div>

          {/* Registrars card */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/70 p-6">
            <div className="font-semibold text-[16px]">Popular Registrars</div>
            <p className="mt-2 text-slate-400 text-[16px]">
              Click any registrar to search your domain and complete the
              purchase on their platform.
            </p>

            <div className="mt-4 space-y-3">
              {registrars.map((reg) => (
                <div
                  key={reg.name}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3"
                >
                  <div>
                    <div className="font-semibold text-[16px]">{reg.name}</div>
                    <div className="text-slate-400 text-[16px]">
                      {reg.note}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      window.open(reg.url, "_blank", "noopener,noreferrer")
                    }
                    className="rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-[16px] hover:bg-indigo-600"
                  >
                    Open
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-4 text-slate-500 text-[16px]">
              You can store preferred registrars for projects and track which
              domains you already own.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
