import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "MexAmericana Carpets | Weaving Two Americas",
    template: "%s | MexAmericana Carpets",
  },
  description:
    "Handcrafted rugs & carpets inspired by the vibrant fusion of Mexican and American Southwest traditions. Bold colors, geometric patterns, cultural soul.",
  keywords: [
    "mexican rugs",
    "southwestern carpets",
    "navajo inspired",
    "saltillo serape",
    "chimayo weaving",
    "handmade rugs",
    "american mexican textiles",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased flex flex-col">
        <div className="fixed inset-0 rug-pattern pointer-events-none" />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
