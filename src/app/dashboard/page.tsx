// src/app/dashboard/page.tsx
import Link from "next/link";
import DashboardShell from "../components/DashboardShell";
import { tools } from "../tools/tools-data";

export default function DashboardPage() {
  const totalTools = tools.length;

  return (
    <DashboardShell>
      {/* Soft main canvas similar color style */}
      <div className="rounded-3xl bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#e0f2fe] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.65)]">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Dashboard</h1>
            <p className="mt-1 text-xs text-slate-500">
              Quick overview of your MTJ Tools plan, credits and SEO / AI
              activity.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-indigo-600 shadow-sm">
              Pro Subscription
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 text-slate-600 shadow-sm">
              {totalTools}+ tools active
            </span>
          </div>
        </div>

        {/* Top grid: plan + snapshot */}
        <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
          {/* Current Plan card */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Your Current Plan
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-900">
                  Pro{" "}
                  <span className="text-[11px] font-normal text-slate-400">
                    (Monthly)
                  </span>
                </p>
              </div>
              <Link
                href="/buy-renew"
                className="rounded-full bg-indigo-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow hover:bg-indigo-600"
              >
                Manage Plan
              </Link>
            </div>

            <p className="mt-3 text-[11px] text-slate-500">
              Full access to all SEO, backlink, indexing, local and AI tools in
              your MTJ dashboard. Changes can be made anytime from the{" "}
              <Link
                href="/buy-renew"
                className="font-medium text-indigo-500 underline"
              >
                Buy / Renew Subscription
              </Link>{" "}
              page.
            </p>

            {/* Stats row */}
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl bg-indigo-50 px-4 py-3 text-xs">
                <p className="text-[11px] text-slate-500">Monthly Price</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">$29</p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Renews every month until cancelled.
                </p>
              </div>

              <div className="rounded-xl bg-sky-50 px-4 py-3 text-xs">
                <p className="text-[11px] text-slate-500">Included Tools</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">
                  {totalTools}
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Crawlers, keywords, backlinks, indexing & AI.
                </p>
              </div>

              <div className="rounded-xl bg-orange-50 px-4 py-3 text-xs">
                <p className="text-[11px] text-slate-500">Sub-Users Allowed</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">3</p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Invite your team from Sub-Users page.
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-500">
              Tip: use the{" "}
              <span className="font-semibold text-slate-700">All Tools</span>{" "}
              menu to open any SEO / AI tool in a new tab while you work.
            </p>
          </div>

          {/* Account Snapshot card */}
          <div className="flex flex-col rounded-2xl bg-white p-5 text-xs shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">
                Account Snapshot
              </p>
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-medium text-indigo-600">
                MTJ Member
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Store Credits</span>
                <span className="text-[11px] font-semibold text-emerald-500">
                  120
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Active Sub-Users
                </span>
                <span className="text-[11px] font-semibold text-slate-800">
                  2 / 3
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Tools used this week
                </span>
                <span className="text-[11px] font-semibold text-orange-500">
                  18
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Next Renewal</span>
                <span className="text-[11px] font-semibold text-slate-800">
                  01 Feb 2026
                </span>
              </div>
            </div>

            <Link
              href="/store-credits"
              className="mt-4 w-full rounded-lg bg-indigo-500 px-3 py-2 text-center text-[11px] font-semibold text-white shadow hover:bg-indigo-600"
            >
              Manage Subscription &amp; Credits
            </Link>

            <p className="mt-3 text-[10px] text-slate-500">
              Need help? Visit{" "}
              <Link
                href="/contact-us"
                className="font-medium text-indigo-500 underline"
              >
                Contact &amp; Billing Support
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Middle stats row */}
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 text-xs shadow-sm">
            <p className="text-[11px] text-slate-500">Projects this month</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">7</p>
            <p className="mt-1 text-[10px] text-emerald-500">+2 vs last month</p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-xs shadow-sm">
            <p className="text-[11px] text-slate-500">Site audits run</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">24</p>
            <p className="mt-1 text-[10px] text-slate-400">
              Screaming Frog, Sitebulb, Ahrefs etc.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-xs shadow-sm">
            <p className="text-[11px] text-slate-500">Content briefs created</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">15</p>
            <p className="mt-1 text-[10px] text-slate-400">
              Surfer, NeuronWriter, Frase &amp; AI.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-xs shadow-sm">
            <p className="text-[11px] text-slate-500">Priority focus areas</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">3</p>
            <p className="mt-1 text-[10px] text-orange-500">
              Local SEO, backlinks, indexing.
            </p>
          </div>
        </div>

        {/* Bottom row: activity + quick actions */}
        <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)]">
          {/* Recent Activity */}
          <div className="rounded-2xl bg-white p-5 text-xs shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Recent Activity
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Latest actions inside your MTJ account.
            </p>

            <div className="mt-3 space-y-2">
              {[
                "Ran full crawl with Screaming Frog for dental site.",
                "Generated keyword clusters with Ahrefs & SEMrush.",
                "Created local SEO content brief for Dallas pain clinic.",
                "Checked GBP visibility with BrightLocal & Local Falcon.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-xl bg-indigo-50/70 px-3 py-2"
                >
                  <span className="mt-[2px] h-2 w-2 rounded-full bg-indigo-500" />
                  <div className="flex-1 text-[11px] text-slate-700">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl bg-white p-5 text-xs shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Quick Actions
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Jump directly into the workflows you use most.
            </p>

            <div className="mt-3 space-y-2">
              <Link
                href="/tools"
                className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[11px] hover:bg-indigo-50/70"
              >
                <span className="text-slate-700">Open All Tools directory</span>
                <span className="text-[10px] text-slate-500">
                  Browse {totalTools}+ tools
                </span>
              </Link>
              <Link
                href="/buy-renew"
                className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[11px] hover:bg-indigo-50/70"
              >
                <span className="text-slate-700">
                  Upgrade / manage subscription
                </span>
                <span className="text-[10px] text-slate-500">
                  Billing &amp; plans
                </span>
              </Link>
              <Link
                href="/store-credits"
                className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[11px] hover:bg-indigo-50/70"
              >
                <span className="text-slate-700">Buy or use store credits</span>
                <span className="text-[10px] text-slate-500">
                  Indexing &amp; add-ons
                </span>
              </Link>
              <Link
                href="/contact-us"
                className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[11px] hover:bg-indigo-50/70"
              >
                <span className="text-slate-700">
                  Contact support / send payment proof
                </span>
                <span className="text-[10px] text-slate-500">
                  Help &amp; billing
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
