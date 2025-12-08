// src/app/components/DashboardShell.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

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

export default function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#020617]">
      {/* LEFT SIDEBAR */}
      <aside className="flex w-64 flex-col border-r border-white/5 bg-[#0b1220] p-5">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-base font-bold text-white">
            MTJ
          </div>
          <div>
            <div className="text-base font-semibold text-white">MTJ Tools</div>
            <div className="text-[12px] text-slate-400">
              SEO • Marketing • AI
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5">
          {menu.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
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
      </aside>

      {/* RIGHT CONTENT AREA */}
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-[1400px]">{children}</div>
      </main>
    </div>
  );
}
