import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
