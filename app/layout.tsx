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
  title: "Sell Rolex Watch | High Price Purchase | in Malaysia",
  description:
    "Please visit us to sell your Rolex at a good price! We accept any Rolex models like Datejust, Submariner and Explorer.",
  keywords: "luxury, watch, sell, branded, high price",
  ogTitle: "Sell Rolex Watch | High Price Purchase | in Malaysia",
  ogDescription:
    "Please visit us to sell your Rolex at a good price! We accept any Rolex models like Datejust, Submariner and Explorer.",
  ogImage: "/images/jc-logo.png",
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
