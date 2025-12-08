// src/app/payment-history/page.tsx
import DashboardShell from "../components/DashboardShell";

export default function PaymentHistoryPage() {
  const rows = [
    {
      date: "2025-02-01",
      plan: "Pro Monthly",
      amount: "$29",
      method: "Visa **** 4242",
      status: "Paid",
    },
    {
      date: "2025-01-01",
      plan: "Pro Monthly",
      amount: "$29",
      method: "Visa **** 4242",
      status: "Paid",
    },
    {
      date: "2024-12-01",
      plan: "Pro Monthly",
      amount: "$29",
      method: "Mastercard **** 8811",
      status: "Paid",
    },
    {
      date: "2024-11-01",
      plan: "Starter Monthly",
      amount: "$15",
      method: "Mastercard **** 8811",
      status: "Paid",
    },
  ];

  return (
    <DashboardShell>
      <div className="space-y-4">
        {/* Header Card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-4 text-sm">
          <div className="text-sm font-semibold">Payment History</div>
          <p className="mt-1 text-xs text-slate-400">
            This is a demo view of your recent subscription payments. Later you
            can connect this table to Stripe, Paddle, or your own billing
            system.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#020617]/70 text-xs">
          <table className="min-w-full divide-y divide-white/5">
            <thead className="bg-white/5 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/5">
                  <td className="px-4 py-3 whitespace-nowrap">{row.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.plan}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.amount}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.method}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small note */}
        <p className="text-[11px] text-slate-500">
          You can replace this static data with live transactions once billing
          is connected.
        </p>
      </div>
    </DashboardShell>
  );
}
