import DashboardShell from "../components/DashboardShell";

export default function PurchasePage({ searchParams }: any) {
  const plan = searchParams.plan || "selected";

  return (
    <DashboardShell>
      <div className="space-y-5 text-[18px]">
        
        {/* Header */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-6">
          <div className="text-lg font-semibold">Complete Your Purchase</div>
          <p className="mt-1 text-slate-400">
            You selected the <span className="text-indigo-400 font-bold">{plan}</span> plan.
          </p>
        </div>

        {/* Payment Options */}
        <div className="grid gap-6 lg:grid-cols-2">
          
          {/* Bank Transfer */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-6">
            <div className="text-lg font-semibold mb-3">Bank Transfer</div>

            <ul className="space-y-3 text-slate-300">
              <li><strong>Bank:</strong> Meezan Bank</li>
              <li><strong>Account Name:</strong> MUHAMMAD TAHIR</li>
              <li><strong>Account Number:</strong> 02010106697320</li>
              <li><strong>Reference:</strong> Your Email Address</li>
            </ul>

            <p className="text-slate-400 mt-4">
              After payment, send your screenshot to:
              <br />
              <span className="text-indigo-400 font-semibold">
                payments@seotools.com
              </span>
            </p>
          </div>

          {/* Online Payment */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-6">
            <div className="text-lg font-semibold mb-3">Online Card Payment</div>

            <p className="text-slate-300 mb-4">
              Pay securely through supported online methods:
            </p>

            <div className="flex flex-wrap gap-3 text-[16px]">
              <span className="px-4 py-2 rounded-lg bg-white/10">Visa</span>
              <span className="px-4 py-2 rounded-lg bg-white/10">Mastercard</span>
              <span className="px-4 py-2 rounded-lg bg-white/10">PayPal</span>
              <span className="px-4 py-2 rounded-lg bg-white/10">Stripe</span>
            </div>

            <p className="text-slate-400 mt-4">
              Payments are encrypted and processed instantly.
            </p>
          </div>

        </div>

        {/* Upload Proof */}
        <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-6">
          <div className="text-lg font-semibold mb-3">Submit Payment Proof</div>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full rounded-lg bg-[#0b1220] border border-white/10 px-4 py-3"
            />

            <input
              type="number"
              placeholder="Amount Paid ($)"
              className="w-full rounded-lg bg-[#0b1220] border border-white/10 px-4 py-3"
            />

            <input
              type="file"
              className="w-full rounded-lg bg-[#0b1220] border border-dashed border-white/20 px-4 py-3"
            />

            <button
              type="button"
              className="mt-2 w-full rounded-lg bg-indigo-500 px-4 py-3 font-semibold hover:bg-indigo-600"
            >
              Submit Payment
            </button>
          </form>
        </div>

      </div>
    </DashboardShell>
  );
}
