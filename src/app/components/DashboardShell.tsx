// src/app/components/DashboardShell.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";

type DashboardShellProps = {
  children: ReactNode;
};

const menu = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Buy / Renew Subscription", href: "/buy-renew" },
  { label: "Payment History", href: "/payment-history" },
  { label: "Sub-Users", href: "/sub-users" },
  { label: "Store Credits", href: "/store-credits" },
  { label: "Download Extensions", href: "/download-extensions" },
  { label: "All Tools", href: "/tools" },
  { label: "Buy Domains", href: "/buy-domains" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Logout", href: "/logout" },
];

function MenuLinks({ pathname, onClick }: { pathname: string; onClick?: () => void }) {
  return (
    <nav className="flex flex-col gap-1.5">
      {menu.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`rounded-lg px-3 py-2.5 text-[15px] font-medium transition ${
              active
                ? "border border-indigo-500/40 bg-indigo-500/25 text-white"
                : "text-slate-200 hover:bg-white/5"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#020617]">
      {/* 🟣 Mobile top bar with hamburger */}
      <header className="fixed left-0 top-0 z-30 flex w-full items-center justify-between border-b border-white/5 bg-[#020617]/95 px-4 py-3 md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-100"
        >
          ☰ Menu
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-sm font-bold text-white">
            MTJ
          </div>
          <div>
            <div className="text-sm font-semibold text-white">MTJ Tools</div>
            <div className="text-[11px] text-slate-400">SEO • Marketing • AI</div>
          </div>
        </div>
      </header>

      {/* 🟣 Desktop sidebar */}
      <aside className="hidden w-64 flex-col border-r border-white/5 bg-[#0b1220] p-5 md:flex">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-base font-bold text-white">
            MTJ
          </div>
          <div>
            <div className="text-base font-semibold text-white">MTJ Tools</div>
            <div className="text-[12px] text-slate-400">SEO • Marketing • AI</div>
          </div>
        </div>

        <MenuLinks pathname={pathname} />
      </aside>

      {/* 🟣 Mobile slide-in sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* backdrop */}
          <div
            className="flex-1 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          {/* panel */}
          <aside className="flex w-64 flex-col border-l border-white/10 bg-[#0b1220] p-5">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-sm font-bold text-white">
                  MTJ
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">MTJ Tools</div>
                  <div className="text-[11px] text-slate-400">
                    SEO • Marketing • AI
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-100"
              >
                ✕
              </button>
            </div>

            <MenuLinks
              pathname={pathname}
              onClick={() => setMobileOpen(false)}
            />
          </aside>
        </div>
      )}

      {/* 🟣 Right content area */}
      <main className="flex-1 px-3 pb-6 pt-16 md:px-8 md:py-8 md:pt-8">
        <div className="mx-auto max-w-[1400px]">{children}</div>
      </main>
    </div>
  );
}
