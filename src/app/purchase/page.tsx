// src/app/purchase/page.tsx
import DashboardShell from "../components/DashboardShell";

export default function PurchasePage() {
  const plan = "Selected";

  return (
    <DashboardShell>
      <div className="space-y-5 text-[18px]">
        {/* Header */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-6">
          <div className="text-lg font-semibold">Complete Your Purchase</div>
          <p className="mt-2 text-slate-400">
            You selected the{" "}
            <span className="font-semibold text-indigo-400">{plan} Plan</span>.
            Follow the steps below to pay and activate your account.
          </p>
        </div>

        {/* Payment Options */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bank Transfer */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-6">
            <div className="mb-3 text-lg font-semibold">Bank Transfer</div>
            <p className="mb-3 text-slate-300">
              Make a direct bank transfer to our secure account:
            </p>

            <ul className="space-y-2 text-slate-200">
              <li>
                <strong>Bank Name:</strong> Meezan Bank
              </li>
              <li>
                <strong>Account Name:</strong> MUHAMMAD TAHIR
              </li>
              <li>
                <strong>Account Number:</strong> 02010106697320
              </li>
              <li>
                <strong>Reference:</strong> Your Email Address
              </li>
            </ul>

            <p className="mt-4 text-slate-400">
              After payment, email proof to{" "}
              <span className="font-semibold text-indigo-300">
                payments@seotools.com
              </span>{" "}
              with your email and selected plan.
            </p>
          </div>

          {/* Online Payment */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-6">
            <div className="mb-3 text-lg font-semibold">
              Online Card Payment
            </div>
            <p className="mb-3 text-slate-300">
              Pay securely online using credit card or supported platforms:
            </p>

            <div className="flex flex-wrap gap-3 text-[16px]">
              <span className="rounded-lg bg-white/10 px-4 py-2">Visa</span>
              <span className="rounded-lg bg-white/10 px-4 py-2">
                Mastercard
              </span>
              <span className="rounded-lg bg-white/10 px-4 py-2">PayPal</span>
              <span className="rounded-lg bg-white/10 px-4 py-2">Stripe</span>
            </div>

            <p className="mt-4 text-slate-400">
              All online payments are processed securely with end-to-end
              encryption. Access is usually granted very quickly after
              successful payment.
            </p>
          </div>
        </div>

        {/* Upload Proof */}
        <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-6">
          <div className="mb-3 text-lg font-semibold">
            Submit Payment Proof
          </div>
          <p className="mb-4 text-slate-300">
            After paying by bank transfer or online, send us your payment
            details so we can manually verify and activate your account.
          </p>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full rounded-lg border border-white/10 bg-[#0b1220] px-4 py-3 outline-none placeholder:text-slate-500 focus:border-indigo-500"
            />

            <input
              type="text"
              placeholder="Plan (Starter / Pro / Agency)"
              className="w-full rounded-lg border border-white/10 bg-[#0b1220] px-4 py-3 outline-none placeholder:text-slate-500 focus:border-indigo-500"
            />

            <input
              type="number"
              placeholder="Amount Paid ($)"
              className="w-full rounded-lg border border-white/10 bg-[#0b1220] px-4 py-3 outline-none placeholder:text-slate-500 focus:border-indigo-500"
            />

            <input
              type="file"
              className="w-full rounded-lg border border-dashed border-white/20 bg-[#0b1220] px-4 py-3 text-[16px] file:mr-3 file:cursor-pointer file:rounded-md file:border-none file:bg-indigo-500 file:px-4 file:py-2 file:text-[14px] file:font-semibold file:text-white hover:file:bg-indigo-600"
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
