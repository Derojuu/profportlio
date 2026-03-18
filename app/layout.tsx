import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://derojuu.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prof. Kabiru Olusegun Akinyemi | Professor of Microbiology, LASU",
  description:
    "Official academic portfolio of Prof. Kabiru Olusegun Akinyemi — Professor of Microbiology, Infectious & Zoonotic Diseases; Director of Linkages, Partnerships & Collaborations, Lagos State University.",
  keywords: [
    "Kabiru Akinyemi",
    "Professor of Microbiology",
    "Lagos State University",
    "LASU",
    "Molecular Epidemiology",
    "Infectious Diseases",
    "Zoonotic Diseases",
  ],
  openGraph: {
    type: "website",
    title: "Prof. Kabiru Olusegun Akinyemi | Academic Portfolio",
    description:
      "Professor of Microbiology, LASU. Director of Linkages & Partnerships. Research in molecular epidemiology and infectious diseases.",
    images: [{ url: "/profpic.jpeg", width: 1200, height: 630, alt: "Prof. Kabiru Olusegun Akinyemi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Kabiru Olusegun Akinyemi | Academic Portfolio",
    description: "Professor of Microbiology, LASU. Director of Linkages & Partnerships.",
    images: ["/profpic.jpeg"],
  },
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'light';
                  document.documentElement.classList.add(theme);
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                  else document.documentElement.classList.remove('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-[#020617] text-brand-navy dark:text-white transition-colors duration-300`}
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
