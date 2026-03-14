"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications } from "@/data/publications";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { PublicationCard } from "@/components/ui/PublicationCard";
import { staggerContainer, organicReveal } from "@/components/animations/variants";
import { BookOpen01Icon, FilterIcon } from "hugeicons-react";

const CATEGORIES = ['All', 'Journal', 'Chapter', 'Proceeding', 'Accepted', 'Under Review', 'Editor'];

export default function PublicationsSection() {
  const [filter, setFilter] = useState('All');

  const filteredPubs = filter === 'All' 
    ? publications 
    : publications.filter(p => p.category === filter);

  const displayPubs = filteredPubs.slice(0, 8);

  return (
    <SectionWrapper id="publications" className="py-32 bg-white dark:bg-black/40">
      <Container>
        {/* Header with Stats */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
             <motion.div variants={organicReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-5xl md:text-7xl font-black text-brand-navy dark:text-white uppercase tracking-tighter mb-6">Scientific <br /> <span className="text-brand-gold">Journals</span></h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Over 99+ peer-reviewed publications across international journals and academic proceedings.</p>
             </motion.div>
          </div>
          <div className="flex gap-6">
            <div className="text-right">
              <p className="text-4xl font-black text-brand-navy dark:text-white">{publications.filter(p => p.category === 'Journal').length}</p>
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Journal Papers</p>
            </div>
            <div className="w-[1px] h-12 bg-slate-100 dark:bg-white/10 mt-auto mb-2"></div>
            <div className="text-right">
              <p className="text-4xl font-black text-brand-navy dark:text-white">{publications.length}</p>
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Total Works</p>
            </div>
          </div>
        </div>

        {/* Categories / Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex items-center gap-2 mr-4 text-slate-400">
            <FilterIcon className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Filter:</span>
          </div>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                filter === cat 
                ? 'bg-brand-gold border-brand-gold text-brand-navy shadow-gold-glow-sm' 
                : 'bg-transparent border-slate-100 dark:border-white/5 text-slate-500 hover:border-brand-gold/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid with Animation */}
        <motion.div 
          layout
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayPubs.map((pub, idx) => (
              <PublicationCard key={pub.title} publication={pub} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <motion.a
            href="/publications"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy font-black rounded-2xl shadow-2xl hover:shadow-gold-glow transition-all uppercase text-xs tracking-[0.2em]"
          >
            Explore Full Publication Library <BookOpen01Icon className="w-5 h-5" />
          </motion.a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
