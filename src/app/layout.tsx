import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";

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

        {/* 🔥 Tawk.to Live Chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6938a9b3422d341985557026/1jc2ldppi';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
