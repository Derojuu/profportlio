"use client";

import { motion } from "framer-motion";
import { contributionToKnowledge, researchInterests, researchInProgress, researchCompleted, collaborations } from "@/data/research";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { ResearchCard } from "@/components/ui/ResearchCard";
import { organicReveal, fadeIn } from "@/components/animations/variants";
import { Target02Icon, GlobalIcon, FlashIcon } from "hugeicons-react";

export default function ResearchSection() {
  return (
    <SectionWrapper id="research" className="bg-slate-50 dark:bg-black/20">
      <Container>
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            variants={organicReveal}
            initial="hidden"
            whileInView="visible"
            className="text-5xl md:text-7xl font-black text-brand-navy dark:text-white tracking-tight mb-8"
          >
            Research <br className="hidden md:block" /> <span className="text-brand-gold">Excellence</span>
          </motion.h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Advancing global health through molecular epidemiology and innovative microbiological surveillance.
          </p>
        </div>

        {/* Interests Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {researchInterests.map((interest, idx) => (
            <ResearchCard key={idx} research={interest} index={idx} />
          ))}
        </div>

        {/* Contribution to Knowledge — Large Bento Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-8 p-12 rounded-[50px] bg-brand-navy dark:bg-brand-navy/60 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/15 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <FlashIcon className="w-8 h-8 text-brand-gold" />
                <h3 className="text-3xl font-black tracking-tight">Key Contributions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {contributionToKnowledge.highlights.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-brand-gold font-black text-lg">0{idx + 1}.</span>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                <p className="text-slate-400 text-xs font-bold tracking-wide">{contributionToKnowledge.highlights.length} documented contributions</p>
                <a href="/research" className="text-xs font-black text-brand-gold tracking-wide hover:underline">Explore all →</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Status Cards */}
            <div className="p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 flex-1 shadow-xl">
               <div className="flex justify-between items-center mb-6">
                 <h4 className="text-[10px] font-black text-brand-gold tracking-wide">In Progress</h4>
                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
               </div>
               <div className="space-y-4">
                 {researchInProgress.slice(0, 3).map((p, i) => (
                   <p key={i} className="text-xs font-bold text-brand-navy dark:text-slate-300 line-clamp-2 leading-snug">{p}</p>
                 ))}
               </div>
            </div>
            <div className="p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 flex-1 shadow-xl">
               <div className="flex justify-between items-center mb-6">
                 <h4 className="text-[10px] font-black text-brand-gold tracking-wide">Collaborations</h4>
                 <GlobalIcon className="w-5 h-5 text-brand-gold" />
               </div>
               <div className="flex items-end gap-2">
                 <span className="text-4xl font-black text-brand-navy dark:text-white">{collaborations.international.length + collaborations.local.length}</span>
                 <span className="text-[10px] font-bold text-slate-400 tracking-wide mb-1.5">Global Partners</span>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
