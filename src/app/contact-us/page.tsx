"use client";

import DashboardShell from "../components/DashboardShell";

export default function ContactUsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6 text-[14px]">
        
        {/* Top heading card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-5">
          <div className="text-base font-semibold">Contact & Billing Support</div>
          <p className="mt-1 text-slate-300">
            Secure Payment Options & After Payment submit screenshot and talk on live chat.
            Use the details below to pay and send proof so we can activate your account.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1.2fr]">
          
          {/* LEFT AREA */}
          <div className="space-y-6">

            {/* Secure Payment Options */}
            <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-5">
              <div className="text-base font-semibold">Secure Payment Options</div>
              <p className="mt-2 text-slate-300">
                All payments are handled through secure channels. After payment, submit screenshot
                and talk with us on live chat for fastest activation.
              </p>
            </div>

            {/* Bank Transfer */}
            <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-5">
              <div className="text-base font-semibold">Bank Transfer</div>

              <p className="mt-2 text-slate-300">
                Make a direct bank transfer to our secure account:
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-[14px]">
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="uppercase text-slate-400 text-[12px]">Bank Name</div>
                  <div className="mt-1 font-semibold">Meezan Bank</div>
                </div>

                <div className="rounded-lg bg-white/5 p-3">
                  <div className="uppercase text-slate-400 text-[12px]">Account Name</div>
                  <div className="mt-1 font-semibold">MUHAMMAD TAHIR</div>
                </div>

                <div className="rounded-lg bg-white/5 p-3">
                  <div className="uppercase text-slate-400 text-[12px]">Account Number</div>
                  <div className="mt-1 font-mono">02010106697320</div>
                </div>

                <div className="rounded-lg bg-white/5 p-3">
                  <div className="uppercase text-slate-400 text-[12px]">Reference</div>
                  <div className="mt-1">Use <span className="font-semibold">your email address</span></div>
                </div>
              </div>

              <p className="mt-4 text-slate-300">
                After payment, email proof to{" "}
                <span className="font-semibold text-indigo-300">payments@seotools.com</span>
              </p>
            </div>

            {/* Online Payment */}
            <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-5">
              <div className="text-base font-semibold">Online Payment</div>

              <p className="mt-2 text-slate-300">
                Pay securely online using credit card or supported platforms:
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-[14px]">
                <span className="rounded-full bg-white/10 px-4 py-2">Visa</span>
                <span className="rounded-full bg-white/10 px-4 py-2">Mastercard</span>
                <span className="rounded-full bg-white/10 px-4 py-2">PayPal</span>
                <span className="rounded-full bg-white/10 px-4 py-2">Stripe</span>
              </div>

              <p className="mt-4 text-slate-300">
                All online payments are secure with end-to-end encryption.
              </p>

              {/* Working Payment Button */}
              <button
                onClick={() => window.open("https://your-payment-link.com", "_blank")}
                className="mt-5 rounded-lg bg-indigo-500 px-4 py-2 text-white font-semibold hover:bg-indigo-600"
              >
                Pay Online Now
              </button>
            </div>

            {/* Verification */}
            <div className="rounded-xl border border-emerald-500/40 bg-[#022c22]/70 p-5 shadow-inner">
              <div className="text-base font-semibold">Payment Verification Process</div>

              <ol className="mt-2 space-y-1 text-[14px]">
                <li>1. Complete the payment.</li>
                <li>
                  2. Email proof + your email/plan to{" "}
                  <span className="font-semibold text-emerald-300">payments@seotools.com</span>.
                </li>
                <li>3. Verification within 1–2 hours.</li>
                <li>4. Account activation after confirmation.</li>
              </ol>

              <div className="mt-4 rounded-lg bg-emerald-500/20 px-3 py-2 text-emerald-200 text-[14px]">
                <span className="font-semibold">100% Satisfaction Guarantee:</span> Full refund within 7 days.
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Payment Proof Form */}
          <div className="rounded-xl border border-white/5 bg-[#020617]/80 p-6 text-[14px]">
            <div className="text-base font-semibold">Send Payment Proof</div>

            <form className="mt-5 space-y-4">
              <div>
                <label className="font-medium text-slate-200">Your Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="font-medium text-slate-200">Enter Amount ($)</label>
                <input
                  type="number"
                  placeholder="Amount paid"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="font-medium text-slate-200">Plan / Notes</label>
                <textarea
                  rows={3}
                  placeholder="Example: Pro Monthly plan, Meezan Bank / Stripe payment..."
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="font-medium text-slate-200">Upload Payment Proof</label>
                <input
                  type="file"
                  className="mt-1 w-full rounded-lg border border-dashed border-white/20 bg-[#020617] px-3 py-2 file:bg-indigo-500 file:text-white file:px-4 file:py-1.5 file:rounded-md"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-600"
              >
                Submit Payment Proof
              </button>
            </form>

            <p className="mt-4 text-slate-400">
              After submitting, open live chat and share your email for fastest activation.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
