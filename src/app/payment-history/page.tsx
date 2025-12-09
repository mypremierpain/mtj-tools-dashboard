// src/app/payment-history/page.tsx
import DashboardShell from "../components/DashboardShell";

type InvoiceRow = {
  invoice: string;
  date: string;
  products: string;
  paymentGateway: string;
  amount: string;
  discount: string;
};

// Generate invoices from Jan 2025 to current month
function generateInvoices(): InvoiceRow[] {
  const invoices: InvoiceRow[] = [];

  let year = 2025;
  let month = 0; // 0 = January
  const now = new Date();
  let index = 1;

  while (
    year < now.getFullYear() ||
    (year === now.getFullYear() && month <= now.getMonth())
  ) {
    const date = new Date(year, month, 1);

    const mm = String(month + 1).padStart(2, "0");
    const dd = "01";
    const yy = date.getFullYear().toString().slice(-2);

    const invoiceNumber = `AHCS${String(index).padStart(2, "0")}`;

    invoices.push({
      invoice: invoiceNumber,
      date: `${mm}/${dd}/${yy}`,
      products: "Guru Package",
      paymentGateway: "JasCash Direct (USD)",
      amount: "$150.00",
      discount: "$0.00",
    });

    index++;
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
  }

  // Latest invoice first (descending by date)
  return invoices.reverse();
}

export default function PaymentHistoryPage() {
  const rows = generateInvoices();

  return (
    <DashboardShell>
      <div className="space-y-4">
        {/* Header Card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-4 text-sm">
          <div className="text-sm font-semibold">Invoice & Payment History</div>
          <p className="mt-1 text-xs text-slate-400">
            This is a demo view of your monthly invoices from 2025 to the
            current month. Later you can connect this table to your live
            billing system (e.g., JasCash, Stripe, Paddle).
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#020617]/70 text-xs">
          <table className="min-w-full divide-y divide-white/5">
            <thead className="bg-white/5 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Invoice</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Products</th>
                <th className="px-4 py-3">Payment Gateway</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Discount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((row) => (
                <tr key={row.invoice} className="hover:bg-white/5">
                  <td className="px-4 py-3 whitespace-nowrap">{row.invoice}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {row.products}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {row.paymentGateway}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.amount}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {row.discount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small note */}
        <p className="text-[11px] text-slate-500">
          Invoice numbers start from AHCS01. You can swap this demo data with
          real transactions once JasCash Direct or any other gateway is
          integrated.
        </p>
      </div>
    </DashboardShell>
  );
}
