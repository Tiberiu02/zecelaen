import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { twMerge } from "tailwind-merge";
import Script from "next/script";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zece la EN",
  description: "Platformă digitală pentru Evaluarea Națională Matematică",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
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
