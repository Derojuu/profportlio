"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Mail01Icon, ArrowRight01Icon } from "hugeicons-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030508] border-t border-white/10 overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-bio-teal/5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 py-16">
          {/* Brand & bio */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-serif text-white mb-4">
              {profileData.name}
            </h3>
            <p className="text-slate-400 max-w-sm mb-6 font-light leading-relaxed">
              {profileData.title} at {profileData.institution}. Advancing global health through molecular epidemiology and research.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={profileData.contact.links.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-bio-teal transition-colors"
              >
                Google Scholar
              </a>
              <a
                href={profileData.contact.links.orcid}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-bio-teal transition-colors"
              >
                ORCID
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["About", "Research", "Publications", "News", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-bio-teal transition-colors flex items-center gap-2 group text-sm font-medium"
                  >
                    <span>{link}</span>
                    <ArrowRight01Icon size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail01Icon size={20} className="text-bio-teal shrink-0" />
                <a href={`mailto:${profileData.contact.emails[0]}`} className="hover:text-bio-teal transition-colors text-sm font-medium break-all">
                  {profileData.contact.emails[0]}
                </a>
              </li>
              <li className="text-slate-400 text-sm font-light">
                <span className="text-white/80 font-medium">Office:</span> {profileData.contact.office}
              </li>
              {profileData.contact.visitingHours && profileData.contact.visitingHours.length > 0 && (
                <li className="text-slate-400 text-sm font-light">
                  <span className="text-white/80 font-medium">Visiting Hours:</span>
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
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 font-medium">
            Built by{" "}
            <a
              href="https://derojuu.com"
              target="_blank"
              rel="noreferrer"
              className="text-bio-teal hover:text-white transition-colors font-bold"
            >
              © derojuu
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
