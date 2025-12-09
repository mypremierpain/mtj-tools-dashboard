// src/app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // When someone opens https://mtj-tools-dashboard.vercel.app/
  // they will be redirected to /buy-renew
  redirect("/buy-renew");
}
