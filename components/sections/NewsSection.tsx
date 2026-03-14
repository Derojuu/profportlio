"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { fadeIn, organicReveal } from "@/components/animations/variants";
import { News01Icon } from "hugeicons-react";

export default function NewsSection() {
  return (
    <SectionWrapper id="news" className="bg-brand-navy/5 dark:bg-brand-navy/20 border-y border-brand-navy/5 dark:border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <motion.div variants={organicReveal} initial="hidden" whileInView="visible" className="flex items-center gap-3">
            <News01Icon className="w-8 h-8 text-brand-gold" />
            <h2 className="text-3xl font-black text-brand-navy dark:text-brand-gold uppercase tracking-tight">Latest News & Updates</h2>
          </motion.div>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-white/5 hidden md:block mx-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.news.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 rounded-[32px] border border-brand-navy/10 dark:border-white/5 bg-white dark:bg-brand-navy/40 hover:border-brand-gold/50 transition-all group shadow-sm hover:shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-brand-gold/10 text-[9px] font-black text-brand-gold uppercase tracking-widest rounded-lg">{item.source}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy dark:text-white group-hover:text-brand-gold transition-colors leading-tight mb-4">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-brand-gold text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Read More <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
