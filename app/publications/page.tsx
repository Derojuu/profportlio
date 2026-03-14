"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { publications } from "@/data/publications";
import { profileData } from "@/data/profile";
import Container from "@/components/layout/Container";
import { PublicationCard } from "@/components/ui/PublicationCard";
import { organicReveal } from "@/components/animations/variants";
import { BookOpen01Icon, FilterIcon, Search01Icon } from "hugeicons-react";

const CATEGORIES = ["All", "Journal", "Dissertation", "Proceeding", "Chapter", "Editor", "Technical Report", "Accepted", "Under Review"];

export default function PublicationsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filteredPubs =
    filter === "All" ? publications : publications.filter((p) => p.category === filter);

  const q = query.trim().toLowerCase();
  const searchedPubs = q.length === 0
    ? filteredPubs
    : filteredPubs.filter((p) => {
        const haystack = [
          p.title,
          p.authors,
          p.journal,
          p.year,
          ...(p.tags ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });

  return (
    <div className="pt-24 sm:pt-28 md:pt-20 min-h-screen">
      <section id="publications" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-black/40">
        <Container className="overflow-visible">
          {/* Header with Stats — matches PublicationsSection */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-12 sm:mb-20">
            <div className="min-w-0 max-w-2xl w-full">
              <motion.div
                variants={organicReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-navy dark:text-white tracking-tight mb-4 sm:mb-6">
                  Scientific <span className="text-brand-gold">Journals</span>
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
                <p className="text-[10px] font-black text-brand-gold tracking-wide">Journal Papers</p>
              </div>
              <div className="w-[1px] h-12 bg-slate-100 dark:bg-white/10 mt-auto mb-2" />
              <div className="text-right">
                <p className="text-4xl font-black text-brand-navy dark:text-white">{publications.length}</p>
                <p className="text-[10px] font-black text-brand-gold tracking-wide">Total Works</p>
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
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy font-black rounded-2xl shadow-xl hover:shadow-gold-glow transition-all tracking-wide text-xs mb-12"
          >
            Google Scholar <BookOpen01Icon className="w-5 h-5" />
          </motion.a>

          {/* Quick Search */}
          <div className="mb-8 sm:mb-10">
            <div className="relative max-w-2xl">
              <Search01Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, author, journal, year, or keyword…"
                className="w-full h-12 rounded-2xl pl-12 pr-4 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 text-brand-navy dark:text-white placeholder:text-slate-400 outline-none focus:border-brand-gold transition-colors"
              />
            </div>
          </div>

          {/* Filter Bar — same as landing */}
          <div className="flex flex-wrap items-center gap-3 mb-12 overflow-x-auto pb-4">
            <div className="flex items-center gap-2 mr-4 text-slate-400">
              <FilterIcon className="w-4 h-4" />
              <span className="text-[10px] font-black tracking-wide">Filter:</span>
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black tracking-wide border transition-all ${
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
            Showing {searchedPubs.length} of {publications.length} publications
          </p>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {searchedPubs.map((pub, idx) => (
              <PublicationCard key={`${pub.title}-${idx}`} publication={pub} index={idx} />
            ))}
          </motion.div>

          {searchedPubs.length === 0 && (
            <p className="text-slate-500 dark:text-slate-400 text-center py-16">No publications in this category.</p>
          )}
        </Container>
      </section>
    </div>
  );
}
