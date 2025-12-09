"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const VALID_EMAIL = "premierpaincenters@gmail.com";
const VALID_PASSWORD = "premier@123";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // mark user as logged in
      if (typeof window !== "undefined") {
        localStorage.setItem("mtj_logged_in", "true");
      }
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617] px-4">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#0b1220]/90 p-6">
        <h1 className="text-xl font-semibold text-white">Login</h1>
        <p className="mt-1 text-sm text-slate-400">
          Use your MTJ dashboard credentials to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="text-sm text-slate-200">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-slate-200">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-500/15 px-3 py-2 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-600"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-indigo-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
