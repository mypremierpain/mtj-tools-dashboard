// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MTJ — SEO & Marketing Tools Dashboard",
  description:
    "MTJ Tools — SEO, content, backlink, indexing, local SEO and AI tools dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} min-h-screen bg-[#0f1724] text-slate-100 text-[18px]`}
      >
        {children}
      </body>
    </html>
  );
}
