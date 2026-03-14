"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MenuSquareIcon, Cancel01Icon, GlobalIcon, BookOpen01Icon } from "hugeicons-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "About", href: "/#about", description: "Biography & Expertise" },
  { name: "Research", href: "/#research", description: "Lab & Projects" },
  { name: "Service", href: "/#expert-service", description: "Leadership Roles" },
  { name: "Publications", href: "/#publications", description: "Academic Library" },
  { name: "News", href: "/#news", description: "Latest Updates" },
  { name: "Contact", href: "/#contact", description: "Get in Touch" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (mobileMenuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ease-out",
        isScrolled 
          ? "py-4 bg-white/70 backdrop-blur-3xl border-b border-slate-200/50 dark:bg-[#020617]/70 dark:border-white/5" 
          : "py-6 bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Brand - Refined Typography */}
          <Link href="/" className="relative z-[210] flex items-center group">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tight text-brand-navy dark:text-white leading-none">
                Prof. <span className="text-brand-gold">Akinyemi</span>
              </span>
              <span className="text-[8px] md:text-[9px] text-gray-500 dark:text-gray-400 font-bold tracking-wide mt-1">
                Academic Portfolio &apos;26
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Clean & Elite */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] font-black tracking-wide transition-all duration-300 hover:text-brand-gold relative group py-2",
                  pathname === link.href 
                    ? "text-brand-gold" 
                    : "text-brand-navy dark:text-slate-300"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-brand-gold transition-all duration-500 rounded-full",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-2xl text-[10px] font-black tracking-wide bg-brand-navy text-white dark:bg-brand-gold dark:text-brand-navy hover:shadow-gold-glow-sm transition-all duration-300"
            >
              Collaborate
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle - Glassmorphic */}
          <button
            className="lg:hidden p-4 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white relative z-[510] overflow-hidden touch-manipulation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {mobileMenuOpen ? <Cancel01Icon size={24} /> : <MenuSquareIcon size={24} />}
            </motion.div>
          </button>
        </div>
      </Container>

      {/* Full-screen Mobile Menu — MoniePoint Style */}
      {isMounted && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-0 z-[505] h-[100dvh] w-screen overscroll-contain bg-[#020617] text-white flex flex-col p-6 sm:p-10 md:p-20 overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="lg:hidden absolute top-6 right-6 sm:top-8 sm:right-8 p-3 rounded-2xl bg-white/5 border border-white/15 text-white z-20 touch-manipulation"
              >
                <Cancel01Icon size={22} />
              </button>

              {/* Background elements for the menu */}
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy blur-[100px] rounded-full pointer-events-none"></div>

              <div className="flex-1 flex flex-col justify-center min-h-0 max-w-4xl mx-auto w-full relative z-10 py-8">
                <nav className="space-y-4 sm:space-y-6 md:space-y-8">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + idx * 0.03, duration: 0.2, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-end gap-3 sm:gap-6 py-2 active:opacity-80"
                      >
                        <span className="text-[10px] font-black text-brand-gold/40 group-hover:text-brand-gold mb-1 sm:mb-2 md:mb-4 transition-colors shrink-0">0{idx + 1}</span>
                        <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight group-hover:text-brand-gold transition-all duration-500 block break-words">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 sm:mt-20 md:mt-32 border-t border-white/10 pt-8 sm:pt-10 flex flex-col md:flex-row gap-6 sm:gap-10 md:items-center justify-between"
                >
                  <div className="flex flex-wrap gap-4 sm:gap-8">
                    <a href={profileData.contact.links.googleScholar} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-wide hover:text-brand-gold transition-colors flex items-center gap-2">
                      <BookOpen01Icon size={14} className="text-brand-gold shrink-0" /> Google Scholar
                    </a>
                    <a href={profileData.contact.links.orcid} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-wide hover:text-brand-gold transition-colors flex items-center gap-2">
                      <GlobalIcon size={14} className="text-brand-gold shrink-0" /> ORCID
                    </a>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold tracking-wide">
                    Developed for <span className="text-white">LASU Linkages & Partnerships</span>
                  </p>
                </motion.div>
              </div>

              {/* Huge watermarked text */}
              <div className="absolute bottom-[-5%] left-[-5%] text-[20vw] sm:text-[25vw] font-black text-white/[0.02] tracking-tight leading-none pointer-events-none italic">
                Academic
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}

