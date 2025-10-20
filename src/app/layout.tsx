import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { PremiumProvider } from "@/contexts/PremiumContext";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FURNUSA - Furniture Nusantara | Marketplace Furniture On Demand",
  description: "FURNUSA (Furniture Nusantara) - Marketplace furniture berkualitas dengan desain custom on demand. Temukan furniture impian Anda dengan kualitas terbaik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${playfairDisplay.variable} ${sourceSans.variable} font-sans antialiased wood-gradient-light min-h-screen`}
      >
        <PremiumProvider>
          <Header />
          <main>{children}</main>
        </PremiumProvider>
      </body>
    </html>
  );
}
