import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin Dashboard | Jaya Capital",
  description:
    "Administrative dashboard for managing Jaya Capital's property portfolio, renovation projects, and rental operations in Cambodia.",
  keywords: [
    "admin",
    "dashboard",
    "property management",
    "Cambodia",
    "real estate",
  ],
  robots: "noindex, nofollow", // Prevent search engine indexing of admin pages
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={`
        min-h-screen 
        bg-gradient-to-br from-[#F5F0E6] to-[#E8DCC0] 
        font-sans 
        antialiased
        ${geistSans.variable} 
        ${geistMono.variable}
      `}
      >
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-2">
                <SidebarTrigger className="hover:bg-gray-100 transition-colors" />
              </header>
              <main className="flex-1 overflow-auto p-4">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
