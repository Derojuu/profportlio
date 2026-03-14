"use client";

import { motion } from "framer-motion";
import { CheckmarkBadge01Icon } from "hugeicons-react";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-slate-100 dark:border-white/5 ml-4 md:ml-6 space-y-12 pb-8">
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          className="relative pl-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[18px] top-1 bg-white dark:bg-slate-900 border-4 border-brand-gold w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10">
             <CheckmarkBadge01Icon size={14} className="text-brand-navy dark:text-brand-gold" />
          </div>
          
          {/* Content */}
          <div className="group bg-white dark:bg-white/[0.03] p-8 rounded-3xl border border-slate-100 dark:border-white/5 hover:border-brand-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold/10 text-brand-navy dark:text-brand-gold text-[10px] font-black uppercase tracking-widest mb-4">
              {item.period}
            </span>
            <h4 className="text-2xl font-black text-brand-navy dark:text-white mb-2 uppercase tracking-tighter">
              {item.title}
            </h4>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-wide">
              {item.organization}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
