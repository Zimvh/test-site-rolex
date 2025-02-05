import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure correct path
import Footer from "@/components/Footer"; // Ensure correct path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sell Rolex Watch | High Price Purchase | in Malaysia",
  description:
    "Please visit us to sell your Rolex at a good price! We accept any Rolex models like Datejust, Submariner and Explorer.",
  keywords: ["luxury", "watch", "sell", "branded", "high price"],
  metadataBase: new URL("https://sellluxurywatch.my/"), // Base URL for canonical URLs
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sell Rolex Watch | High Price Purchase | in Malaysia",
    description:
      "Please visit us to sell your Rolex at a good price! We accept any Rolex models like Datejust, Submariner and Explorer.",
    images: "/images/jc-logo.png",
    url: "https://sellluxurywatch.my/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
