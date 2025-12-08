// src/app/buy-renew/page.tsx
import DashboardShell from "../components/DashboardShell";
import { tools } from "../tools/tools-data";

export default function BuyRenewPage() {
  const totalTools = tools.length;

  return (
    <DashboardShell>
      <div className="space-y-5">
        {/* Intro Card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-4 text-sm">
          <div className="text-sm font-semibold">Buy / Renew Subscription</div>
          <p className="mt-1 text-xs text-slate-400">
            All plans include access to {totalTools}+ SEO, Marketing, Backlink,
            Indexing, Local & AI Tools.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          
          {/* Starter Plan */}
          <div className="flex flex-col rounded-xl border border-white/5 bg-[#0b1220]/80 p-4 text-sm">
            <div className="mb-1 text-xs font-semibold text-slate-400">Starter</div>
            <div className="mb-2 text-2xl font-bold">$150</div>
            <div className="mb-3 text-[11px] text-slate-400">
              For individual SEOs who need essential tools only.
            </div>
            <ul className="mb-4 space-y-1 text-[11px] text-slate-300">
              <li>• Access to 20 core tools</li>
              <li>• 1 user</li>
              <li>• Basic support</li>
              <li>• Monthly billing</li>
            </ul>
            <button className="mt-auto rounded-lg bg-white/10 px-3 py-2 text-[11px] font-semibold hover:bg-white/20">
              Buy Starter
            </button>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col rounded-xl border border-indigo-500/70 bg-gradient-to-b from-indigo-500/15 to-[#0b1220] p-4 text-sm shadow-lg shadow-indigo-500/20">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-indigo-300">Pro</div>
              <span className="rounded-full bg-indigo-500 px-2 py-0.5 text-[10px] font-semibold">
                Most Popular
              </span>
            </div>
            <div className="mb-2 mt-1 text-2xl font-bold">$290</div>
            <div className="mb-3 text-[11px] text-slate-200">
              Full access to all {totalTools}+ tools (crawlers, keywords,
              backlinks, indexing, AI writers and more).
            </div>
            <ul className="mb-4 space-y-1 text-[11px] text-slate-100">
              <li>• All tools included</li>
              <li>• Up to 3 sub-users</li>
              <li>• Priority support</li>
              <li>• Monthly or yearly billing</li>
            </ul>
            <button className="mt-auto rounded-lg bg-indigo-500 px-3 py-2 text-[11px] font-semibold hover:bg-indigo-600">
              Buy / Renew Pro
            </button>
          </div>

          {/* Agency Plan */}
          <div className="flex flex-col rounded-xl border border-white/5 bg-[#0b1220]/80 p-4 text-sm">
            <div className="mb-1 text-xs font-semibold text-slate-400">Agency</div>
            <div className="mb-2 text-2xl font-bold">$590</div>
            <div className="mb-3 text-[11px] text-slate-400">
              For growing agencies managing multiple teams and clients.
            </div>
            <ul className="mb-4 space-y-1 text-[11px] text-slate-300">
              <li>• All Pro tools + API</li>
              <li>• Up to 10 sub-users</li>
              <li>• Advanced analytics</li>
              <li>• Priority onboarding</li>
            </ul>
            <button className="mt-auto rounded-lg bg-white/10 px-3 py-2 text-[11px] font-semibold hover:bg-white/20">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </DashboardShell>
  );
}
