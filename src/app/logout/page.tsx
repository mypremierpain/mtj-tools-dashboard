"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear dummy auth tokens (if you add real login later, replace this)
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    }

    // Redirect user to /auth after logout
    router.replace("/auth");
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center text-white text-xl">
      Logging out...
    </div>
  );
}
