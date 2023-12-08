import type { Metadata } from "next";
import { Inter, Quicksand, Rubik } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { twMerge } from "tailwind-merge";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zece la EN",
  description: "Teste Evaluarea Națională Matematică",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(rubik.className, "overflow-x-hidden")}>
        {children}
      </body>
    </html>
  );
}
