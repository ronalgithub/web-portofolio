import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SidebarProfile } from "@/components/layout/SidebarProfile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Beranda",
  description: "Portofolio dan Arsip Laporan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} flex min-h-screen flex-col bg-zinc-950 text-zinc-50 antialiased`}>
        <Navbar />
        <div className="flex flex-col md:flex-row flex-grow w-full max-w-screen-2xl mx-auto">
          <SidebarProfile />
          <div className="flex flex-col flex-grow min-w-0 bg-zinc-950">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}