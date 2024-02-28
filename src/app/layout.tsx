import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { twMerge } from "tailwind-merge";
import Script from "next/script";

const rubik = Rubik({ subsets: ["latin"] });

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Teste Evaluarea Națională ${year} | Zece la EN`,
  description:
    "Subiecte oficiale de la Evaluarea Națională matematică cu grile interactive și rezolvări video.",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://zecelaen.ro",
    siteName: `Teste Evaluarea Națională ${year} | Zece la EN`,
    title: `Teste Evaluarea Națională ${year} | Zece la EN`,
    description:
      "Subiecte oficiale de la Evaluarea Națională matematică cu grile interactive și rezolvări video.",
  },
};

const NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-JKH4HGB1JT";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(rubik.className, "overflow-x-hidden")}>
        {children}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
