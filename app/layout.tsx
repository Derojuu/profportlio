import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prof. Akintola Shehu Latunji | Professor of Fisheries, LASU",
  description: "Official academic portfolio of Prof. Akintola Shehu Latunji - Professor of Fisheries Faculty of Science, Lagos State University.",
  keywords: ["Akintola Shehu Latunji", "Professor of Fisheries", "Lagos State University", "LASU", "Fisheries Research Nigeria", "Aquaculture", "Food Security"],
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MicroPreloader } from "@/components/ui/MicroPreloader";
import { MicroBackground } from "@/components/ui/MicroBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#050505] text-white`}
      >
        <MicroPreloader />
        <MicroBackground />
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
