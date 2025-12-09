"use client";

import { useState, FormEvent } from "react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617] px-4">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#0b1220]/90 p-6">
        <h1 className="text-xl font-semibold text-white">Sign Up</h1>
        <p className="mt-1 text-sm text-slate-400">
          Create a request and our customer support team will contact you soon.
        </p>

        {submitted ? (
          <div className="mt-4 rounded-lg bg-emerald-500/15 px-3 py-3 text-sm text-emerald-200">
            Thank you! Our customer support will contact you soon to activate
            your account.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="text-sm text-slate-200">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="text-sm text-slate-200">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-slate-200">Password</label>
              <input
                type="password"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
                placeholder="Create a password"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-600"
            >
              Sign Up
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
