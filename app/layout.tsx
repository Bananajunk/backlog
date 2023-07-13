import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "~/components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Backlog Buster",
  description:
    "A web application designed to help you play the games you want, without spending the money you do not have",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="custom">
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
