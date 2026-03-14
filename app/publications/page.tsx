"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { publications } from "@/data/publications";
import { profileData } from "@/data/profile";
import Container from "@/components/layout/Container";
import { PublicationCard } from "@/components/ui/PublicationCard";
import { organicReveal } from "@/components/animations/variants";
import { BookOpen01Icon, FilterIcon } from "hugeicons-react";

const CATEGORIES = ["All", "Journal", "Dissertation", "Proceeding", "Chapter", "Editor", "Technical Report", "Accepted", "Under Review"];

export default function PublicationsPage() {
  const [filter, setFilter] = useState<string>("All");

  const filteredPubs =
    filter === "All" ? publications : publications.filter((p) => p.category === filter);

  return (
    <div className="pt-20 min-h-screen">
      <section id="publications" className="py-24 md:py-32 bg-white dark:bg-black/40">
        <Container>
          {/* Header with Stats — matches PublicationsSection */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <motion.div
                variants={organicReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h1 className="text-5xl md:text-7xl font-black text-brand-navy dark:text-white uppercase tracking-tighter mb-6">
                  Scientific <br /> <span className="text-brand-gold">Journals</span>
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                  Full publication library — peer-reviewed articles, books, chapters, proceedings, dissertations, technical reports, and works in progress.
                </p>
              </motion.div>
            </div>
            <div className="flex gap-6 shrink-0">
              <div className="text-right">
                <p className="text-4xl font-black text-brand-navy dark:text-white">
                  {publications.filter((p) => p.category === "Journal").length}
                </p>
                <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Journal Papers</p>
              </div>
              <div className="w-[1px] h-12 bg-slate-100 dark:bg-white/10 mt-auto mb-2" />
              <div className="text-right">
                <p className="text-4xl font-black text-brand-navy dark:text-white">{publications.length}</p>
                <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Total Works</p>
              </div>
            </div>
          </div>

          {/* Google Scholar CTA */}
          <motion.a
            href={profileData.contact.links.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy font-black rounded-2xl shadow-xl hover:shadow-gold-glow transition-all uppercase text-xs tracking-[0.2em] mb-12"
          >
            Google Scholar <BookOpen01Icon className="w-5 h-5" />
          </motion.a>

          {/* Filter Bar — same as landing */}
          <div className="flex flex-wrap items-center gap-3 mb-12 overflow-x-auto pb-4">
            <div className="flex items-center gap-2 mr-4 text-slate-400">
              <FilterIcon className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Filter:</span>
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                  filter === cat
                    ? "bg-brand-gold border-brand-gold text-brand-navy shadow-gold-glow-sm"
                    : "bg-transparent border-slate-100 dark:border-white/5 text-slate-500 hover:border-brand-gold/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
            Showing {filteredPubs.length} of {publications.length} publications
          </p>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredPubs.map((pub, idx) => (
              <PublicationCard key={`${pub.title}-${idx}`} publication={pub} index={idx} />
            ))}
          </motion.div>

          {filteredPubs.length === 0 && (
            <p className="text-slate-500 dark:text-slate-400 text-center py-16">No publications in this category.</p>
          )}
        </Container>
      </section>
    </div>
  );
}
