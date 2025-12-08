// src/app/download-extensions/page.tsx
"use client";

import DashboardShell from "../components/DashboardShell";

export default function DownloadExtensionsPage() {
  const extensions = [
    {
      name: "Chrome Extension",
      version: "v1.4.2",
      downloadUrl: "#",
      description: "Use SEO tools directly from your Chrome browser.",
    },
    {
      name: "Firefox Extension",
      version: "v1.2.9",
      downloadUrl: "#",
      description: "A lightweight SEO extension built for Firefox users.",
    },
    {
      name: "Microsoft Edge Extension",
      version: "v1.1.1",
      downloadUrl: "#",
      description: "Optimized for Edge with fast performance.",
    },
    {
      name: "Brave Extension",
      version: "v1.3.0",
      downloadUrl: "#",
      description: "Secure SEO toolkit integrated into Brave Browser.",
    },
  ];

  return (
    <DashboardShell>
      <div className="space-y-4">
        {/* Header Card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-4 text-sm">
          <div className="text-sm font-semibold">Download Extensions</div>
          <p className="mt-1 text-xs text-slate-400">
            Download browser extensions for instant access to your SEO toolkit.
          </p>
        </div>

        {/* Extensions List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {extensions.map((ext, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-[#020617]/70 p-5 text-xs shadow transition hover:shadow-[0_18px_45px_rgba(3,6,23,0.6)]"
            >
              <div className="text-sm font-semibold">{ext.name}</div>
              <div className="mt-1 text-[11px] text-slate-400">
                Version: {ext.version}
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                {ext.description}
              </p>

              <button
                className="mt-4 w-full rounded-lg bg-indigo-500 px-3 py-2 text-[11px] font-semibold hover:bg-indigo-600"
                onClick={() =>
                  window.open(ext.downloadUrl, "_blank", "noopener,noreferrer")
                }
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
