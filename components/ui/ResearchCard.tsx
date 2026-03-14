"use client";

import { motion } from "framer-motion";
import { DiscoverCircleIcon } from "hugeicons-react";
import { fadeIn, organicReveal } from "@/components/animations/variants";

interface ResearchCardProps {
  research: {
    title: string;
    description: string;
  };
  index?: number;
}

export function ResearchCard({ research, index = 0 }: ResearchCardProps) {
  return (
    <motion.div
      variants={organicReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -12 }}
      className="p-10 h-full bg-white dark:bg-white/[0.03] rounded-4xl border border-slate-100 dark:border-white/5 hover:border-brand-gold/30 transition-all duration-500 shadow-xl group relative overflow-hidden"
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-gold/5 dark:bg-brand-gold/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
      
      <div className="w-20 h-20 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-gold/20 transition-all duration-500 relative z-10 group-hover:rotate-6">
        <DiscoverCircleIcon size={40} className="text-brand-navy dark:text-brand-gold" />
      </div>
      <h3 className="text-3xl font-black text-brand-navy dark:text-white mb-6 tracking-tight leading-none">
        {research.title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg">
        {research.description}
      </p>
    </motion.div>
  );
}

export default ResearchCard;
