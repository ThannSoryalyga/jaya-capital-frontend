import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/client/Header";

export const metadata: Metadata = {
  title: "Jaya Capital – Renovation & Real Estate Investment",
  description:
    "Jaya Capital specializes in renovating and modernizing properties in Cambodia, offering high-quality rental homes tailored for expats relocating to the region.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F0E6]">{children}</body>
    </html>
  );
}
