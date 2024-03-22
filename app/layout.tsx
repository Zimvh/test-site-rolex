import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

interface ExtendedMetadata extends Metadata {
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const metadata: ExtendedMetadata = {
  title: "Sell Luxury Watch",
  description:
    "Sell Your Branded Watch | High Price Purchase | JEWEL CAFE Malaysia",
  keywords: "luxury, watch, sell, branded, high price",
  ogTitle: "Sell Luxury Watch",
  ogDescription:
    "Sell Your Branded Watch | High Price Purchase | JEWEL CAFE Malaysia",
  ogImage: "/images/jc-logo.png", // Path to your Open Graph image
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
