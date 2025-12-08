// src/app/buy-renew/page.tsx
import DashboardShell from "../components/DashboardShell";
import { tools } from "../tools/tools-data";
import Link from "next/link";

export default function BuyRenewPage() {
  const totalTools = tools.length;

  return (
    <DashboardShell>
      <div className="space-y-5 text-[18px]">
        
        {/* Intro Card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-6">
          <div className="text-lg font-semibold">Buy / Renew Subscription</div>
          <p className="mt-2 text-slate-400">
            All plans include access to {totalTools}+ SEO, Marketing, Backlink,
            Indexing, Local & AI Tools.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Starter Plan */}
          <div className="flex flex-col rounded-xl border border-white/5 bg-[#0b1220]/80 p-6">
            <div className="text-slate-400 font-semibold">Starter</div>
            <div className="text-4xl font-bold mt-2">$150</div>
            <p className="mt-3 text-slate-300">
              For individuals who need essential SEO tools.
            </p>

            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• Access to 20 core tools</li>
              <li>• 1 user</li>
              <li>• Basic support</li>
              <li>• Monthly billing</li>
            </ul>

            <Link
              href="/purchase?plan=starter"
              className="mt-auto rounded-lg bg-white/10 px-4 py-3 text-center font-semibold hover:bg-white/20 mt-6"
            >
              Buy Starter
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col rounded-xl border border-indigo-500/70 bg-gradient-to-b from-indigo-500/15 to-[#0b1220] p-6 shadow-lg shadow-indigo-500/20">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-indigo-300">Pro</div>
              <span className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold">
                Most Popular
              </span>
            </div>

            <div className="text-4xl font-bold mt-2">$290</div>
            <p className="mt-3 text-slate-200">
              Full access to {totalTools}+ tools including AI writers, keyword
              research, crawlers, backlinks & indexing tools.
            </p>

            <ul className="mt-4 space-y-2 text-slate-100">
              <li>• All tools included</li>
              <li>• Up to 3 sub-users</li>
              <li>• Priority support</li>
              <li>• Monthly or yearly billing</li>
            </ul>

            <Link
              href="/purchase?plan=pro"
              className="mt-auto rounded-lg bg-indigo-500 px-4 py-3 text-center font-semibold hover:bg-indigo-600 mt-6"
            >
              Buy / Renew Pro
            </Link>
          </div>

          {/* Agency Plan */}
          <div className="flex flex-col rounded-xl border border-white/5 bg-[#0b1220]/80 p-6">
            <div className="text-slate-400 font-semibold">Agency</div>
            <div className="text-4xl font-bold mt-2">$590</div>
            <p className="mt-3 text-slate-300">
              For growing agencies managing multiple teams and clients.
            </p>

            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• All Pro features + API access</li>
              <li>• Up to 10 sub-users</li>
              <li>• Advanced analytics</li>
              <li>• Priority onboarding</li>
            </ul>

            <Link
              href="/purchase?plan=agency"
              className="mt-auto rounded-lg bg-white/10 px-4 py-3 text-center font-semibold hover:bg-white/20 mt-6"
            >
              Contact Sales
            </Link>
          </div>

        </div>
      </div>
    </DashboardShell>
  );
}
