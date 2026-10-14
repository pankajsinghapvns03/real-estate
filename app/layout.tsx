import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MendSec | Security, Technology & Innovation",
  description:
    "MendSec builds secure, high-performance web, mobile, and AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#030914] text-white antialiased">
        {children}
      </body>
    </html>
  );
}