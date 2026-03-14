"use client";

import { motion } from "framer-motion";
import { Book02Icon, ArrowUpRight01Icon } from "hugeicons-react";
import { fadeIn, organicReveal } from "@/components/animations/variants";

interface PublicationCardProps {
  publication: {
    title: string;
    authors: string;
    journal: string;
    year: string;
    link: string;
    tags?: string[];
  };
  index?: number;
}

export function PublicationCard({ publication, index = 0 }: PublicationCardProps) {
  return (
    <motion.a
      href={publication.link}
      target="_blank"
      rel="noreferrer"
      variants={organicReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -8 }}
      className="group block p-8 md:p-10 bg-white dark:bg-white/3 border border-slate-100 dark:border-white/5 rounded-4xl hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)] hover:border-bio-teal/30 transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-bio-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-500 pointer-events-none">
        <ArrowUpRight01Icon size={28} className="text-bio-teal" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="shrink-0">
          <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
            <Book02Icon size={32} className="text-brand-navy dark:text-brand-gold" />
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {publication.tags?.map((tag, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h4 className="text-2xl font-black text-brand-navy dark:text-white leading-tight group-hover:text-brand-gold transition-colors pr-10 uppercase tracking-tighter">
            {publication.title}
          </h4>
          <p className="text-base font-bold text-slate-500 dark:text-slate-400">
            {publication.authors}
          </p>
          <div className="flex items-center gap-4 pt-2">
            <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.2em] border border-brand-gold/20 px-4 py-1.5 rounded-full">
              {publication.year}
            </span>
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em] italic">{publication.journal}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default PublicationCard;
