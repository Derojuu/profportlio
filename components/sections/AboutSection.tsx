"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { honorsAndAwards } from "@/data/research";
import Container from "@/components/layout/Container";
import { fadeIn, organicReveal } from "@/components/animations/variants";
import { Award01Icon, School01Icon, UserGroupIcon } from "hugeicons-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-brand-navy/20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Column: Biography & Large Type */}
          <div className="lg:col-span-7">
            <motion.div variants={organicReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[11px] md:text-xs font-black text-brand-gold tracking-wide mb-8 uppercase">Professional Biography</h2>
              <div className="space-y-8">
                <p className="text-3xl md:text-4xl font-black text-brand-navy dark:text-white leading-[1.1] tracking-tight">
                  Professor of Microbiology with 30+ years of excellence in <span className="text-brand-gold">Infectious Diseases</span> and <span className="text-brand-gold">Molecular Epidemiology</span>.
                </p>
                <div className="h-1 w-24 bg-brand-gold rounded-full"></div>
                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {profileData.biography}
                </p>
              </div>
            </motion.div>

            {/* Honors & Awards Bento-ish */}
            <div className="mt-20">
              <div className="flex items-center gap-3 mb-10">
                <Award01Icon className="w-8 h-8 text-brand-gold" />
                <h3 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight">Honors & Recognition</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {honorsAndAwards.slice(0, 6).map((award, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx}
                    className="p-6 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-brand-gold/30 transition-all group"
                  >
                    <span className="text-[11px] md:text-xs font-black text-brand-gold tracking-wide">{award.year}</span>
                    <h4 className="font-bold text-sm md:text-base text-brand-navy dark:text-white mt-1 group-hover:text-brand-gold transition-colors">{award.title}</h4>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 font-bold tracking-wide">{award.organization}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-6 text-right"
              >
                <a href="/about" className="text-xs font-black text-brand-gold tracking-wide hover:underline">View all 33 awards →</a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Education & Memberships */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <School01Icon className="w-8 h-8 text-brand-gold" />
                <h3 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight">Education</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-navy/5 dark:before:bg-white/5">
                {profileData.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-12 group"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-brand-navy border-4 border-brand-navy/5 dark:border-white/5 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500 z-10">
                      <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    </div>
                    <span className="text-[11px] md:text-xs font-black text-brand-gold tracking-wide">{edu.year}</span>
                    <h4 className="font-bold text-base md:text-lg text-brand-navy dark:text-white mt-1">{edu.degree}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{edu.institution}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="p-8 rounded-[40px] bg-brand-navy dark:bg-brand-navy/40 border border-brand-gold/10 shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-8">
                <UserGroupIcon className="w-6 h-6 text-brand-gold" />
                <h3 className="text-lg font-black text-brand-gold tracking-wide">Key Memberships</h3>
              </div>
              <div className="space-y-4">
                {profileData.memberships.slice(0, 5).map((m, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="w-5 h-5 rounded-lg bg-brand-gold/10 flex items-center justify-center text-[10px] font-black text-brand-gold shrink-0 mt-1">✓</span>
                    <div>
                      <h5 className="font-bold text-sm md:text-base text-white">{m.role}</h5>
                      <p className="text-[11px] text-slate-400 tracking-wide font-bold">{m.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <a href="/about" className="text-[10px] font-black text-brand-gold tracking-wide hover:text-white transition-colors">Complete List →</a>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
