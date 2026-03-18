"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Mail01Icon, ArrowRight01Icon } from "hugeicons-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#030508] border-t border-slate-100 dark:border-white/10 overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-gold/5 dark:bg-bio-teal/5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 py-16">
          {/* Brand & bio */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-black text-brand-navy dark:text-white mb-4">
              {profileData.name}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6 font-medium leading-relaxed">
              {profileData.title} at {profileData.institution}. Advancing global health through molecular epidemiology and research.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={profileData.contact.links.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black tracking-wide text-brand-navy/60 dark:text-slate-400 hover:text-brand-gold transition-colors"
              >
                Google Scholar
              </a>
              <a
                href={profileData.contact.links.orcid}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black tracking-wide text-brand-navy/60 dark:text-slate-400 hover:text-brand-gold transition-colors"
              >
                ORCID
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black tracking-widest text-brand-gold uppercase mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["About", "Research", "Publications", "News", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/#${link.toLowerCase()}`}
                    className="text-brand-navy/60 dark:text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2 group text-sm font-bold"
                  >
                    <span>{link}</span>
                    <ArrowRight01Icon size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black tracking-widest text-brand-gold uppercase mb-8">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-brand-navy/60 dark:text-slate-400">
                <Mail01Icon size={20} className="text-brand-gold shrink-0" />
                <a href={`mailto:${profileData.contact.emails[0]}`} className="hover:text-brand-gold transition-colors text-sm font-bold break-all">
                  {profileData.contact.emails[0]}
                </a>
              </li>
              <li className="text-brand-navy/60 dark:text-slate-400 text-sm font-medium">
                <span className="text-brand-navy dark:text-white/80 font-black">Office:</span> {profileData.contact.office}
              </li>
              {profileData.contact.visitingHours && profileData.contact.visitingHours.length > 0 && (
                <li className="text-brand-navy/60 dark:text-slate-400 text-sm font-medium">
                  <span className="text-brand-navy dark:text-white/80 font-black">Visiting Hours:</span>
                  <ul className="mt-2 space-y-1">
                    {profileData.contact.visitingHours.map((h, i) => (
                      <li key={i}>{h.day}: {h.time}</li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-bold">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 font-bold">
            Built by{" "}
            <a
              href="https://derojuu-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-gold hover:text-brand-navy dark:hover:text-white transition-colors font-black"
            >
              © derojuu
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
