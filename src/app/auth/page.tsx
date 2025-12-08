"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupMessage, setSignupMessage] = useState("");

  const router = useRouter();

  // Hard-coded credentials you gave
  const VALID_EMAIL = "premierpaincenters@gmail.com";
  const VALID_PASSWORD = "premier@123";

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (
      loginEmail.trim().toLowerCase() === VALID_EMAIL &&
      loginPassword === VALID_PASSWORD
    ) {
      // Fake "logged in" flag (optional, for future guards)
      if (typeof window !== "undefined") {
        localStorage.setItem("authToken", "logged-in");
        localStorage.setItem("user", loginEmail.trim());
      }

      router.push("/dashboard");
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupMessage(
      "Thank you for signing up. Our customer support will contact you soon."
    );

    // Clear fields (optional)
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1724] text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1220] p-6 shadow-2xl">
        {/* Brand */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-base font-bold text-white">
            MTJ
          </div>
          <div>
            <div className="text-lg font-semibold">MTJ Tools</div>
            <div className="text-xs text-slate-400">
              SEO • Marketing • AI Dashboard
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex rounded-full bg-black/30 p-1 text-sm">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`flex-1 rounded-full px-3 py-1.5 font-medium transition ${
              mode === "login"
                ? "bg-indigo-500 text-white shadow"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-full px-3 py-1.5 font-medium transition ${
              mode === "signup"
                ? "bg-indigo-500 text-white shadow"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* LOGIN FORM */}
        {mode === "login" ? (
          <>
            <h1 className="mb-1 text-xl font-semibold text-center">
              Welcome back
            </h1>
            <p className="mb-4 text-center text-sm text-slate-400">
              Login to access your MTJ Tools dashboard.
            </p>

            <form className="space-y-3" onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Email address"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
              />

              {loginError && (
                <p className="text-xs text-red-400">{loginError}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-500 py-2 text-sm font-semibold hover:bg-indigo-600"
              >
                Login
              </button>
            </form>
          </>
        ) : (
          /* SIGNUP FORM */
          <>
            <h1 className="mb-1 text-xl font-semibold text-center">
              Create your account
            </h1>
            <p className="mb-4 text-center text-sm text-slate-400">
              Sign up once and use all SEO & AI tools from one dashboard.
            </p>

            <form className="space-y-3" onSubmit={handleSignupSubmit}>
              <input
                type="text"
                placeholder="Full name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
              />

              <input
                type="email"
                placeholder="Email address"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-[#020617] px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-500"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-500 py-2 text-sm font-semibold hover:bg-indigo-600"
              >
                Sign Up
              </button>
            </form>

            {signupMessage && (
              <p className="mt-3 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">
                {signupMessage}
              </p>
            )}
          </>
        )}

        <p className="mt-4 text-center text-xs text-slate-500">
          (Demo auth only) – no real backend yet, just front-end logic.
        </p>
      </div>
    </div>
  );
}
