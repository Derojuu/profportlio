"use client";

import { motion } from "framer-motion";
import {
  researchInterests,
  contributionToKnowledge,
  laboratoryResearch,
  researchInProgress,
  researchCompleted,
  collaborations,
  convenerWorkshops,
  papersPresentedAtConferences,
  conferencesAttended,
} from "@/data/research";
import Container from "@/components/layout/Container";
import { ResearchCard } from "@/components/ui/ResearchCard";
import { cn } from "@/lib/utils";
import { fadeIn, organicReveal } from "@/components/animations/variants";
import { FlashIcon, GlobalIcon, BookOpen01Icon, UserGroupIcon } from "hugeicons-react";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden bg-slate-50 dark:bg-black/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <Container>
          {/* Page header — matches ResearchSection */}
          <div className="text-center mb-24">
            <motion.h1
              variants={organicReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-brand-navy dark:text-white tracking-tight mb-8"
            >
              Research <br className="hidden md:block" /> <span className="text-brand-gold">Excellence</span>
            </motion.h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              Advancing global health through molecular epidemiology, antimicrobial resistance surveillance, and One Health.
            </p>
          </div>

          {/* Research interests — same card grid as landing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {researchInterests.map((interest, idx) => (
              <ResearchCard key={idx} research={interest} index={idx} />
            ))}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center mb-20">
            Team Leader: <span className="font-bold text-brand-gold">{laboratoryResearch.teamLeaderRole}</span>
          </p>

          {/* Contribution to knowledge — large navy bento (all points) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-8 p-12 rounded-[50px] bg-brand-navy dark:bg-brand-navy/60 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-3 mb-10">
                <FlashIcon className="w-8 h-8 text-brand-gold" />
                <h2 className="text-3xl font-black tracking-tight">Contribution to Knowledge</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 relative z-10">
                {contributionToKnowledge.highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-brand-gold font-black text-lg shrink-0">0{idx + 1}.</span>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="lg:col-span-4 flex flex-col gap-8">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs font-black text-brand-gold tracking-wide">In Progress</h3>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                <ul className="space-y-4">
                  {researchInProgress.map((p, i) => (
                    <li key={i} className="text-xs font-bold text-brand-navy dark:text-slate-300 leading-snug flex gap-2">
                      <span className="text-brand-gold">•</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs font-black text-brand-gold tracking-wide">Collaborations</h3>
                  <GlobalIcon className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-brand-navy dark:text-white">{collaborations.international.length + collaborations.local.length}</span>
                  <span className="text-xs font-bold text-slate-400 tracking-wide mb-1.5">Partners</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Laboratory research */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 mb-16 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <FlashIcon className="w-8 h-8 text-brand-gold" />
              <h2 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight">Laboratory Research</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {laboratoryResearch.groups.map((g, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <h3 className="font-bold text-brand-navy dark:text-white">{g.name}</h3>
                  <p className="text-xs font-black text-brand-gold tracking-wide mt-1">{g.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{g.focus}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research completed + International & Local collaborations — 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5"
            >
              <h2 className="text-xs font-black text-brand-gold tracking-wide mb-6">Research Completed</h2>
              <ul className="space-y-3 text-sm text-brand-navy dark:text-slate-300">
                {researchCompleted.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0 mt-1.5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="space-y-8">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <GlobalIcon className="w-6 h-6 text-brand-gold" />
                  <h2 className="text-lg font-black text-brand-navy dark:text-white tracking-tight">International Collaborations</h2>
                </div>
                <ul className="space-y-3 text-sm text-brand-navy dark:text-slate-400">
                  {collaborations.international.map((c, i) => (
                    <li key={i}><span className="font-bold text-brand-navy dark:text-white">{c.project}</span>{c.partner && ` — ${c.partner}`}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <UserGroupIcon className="w-6 h-6 text-brand-gold" />
                  <h2 className="text-lg font-black text-brand-navy dark:text-white tracking-tight">Local Collaborations</h2>
                </div>
                <ul className="space-y-3 text-sm text-brand-navy dark:text-slate-400">
                  {collaborations.local.map((c, i) => (
                    <li key={i}><span className="font-bold text-brand-navy dark:text-white">{c.project}</span>{c.partner && ` — ${c.partner}`}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Convener workshops — cards */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-10">
              <BookOpen01Icon className="w-8 h-8 text-brand-gold" />
              <h2 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight">Convener of Training / Workshops</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {convenerWorkshops.map((w, i) => {
                const isLink = !!w.link;
                const Component = isLink ? motion.a : motion.div;
                
                return (
                  <Component
                    key={i}
                    {...(isLink ? { href: w.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className={cn(
                      "p-8 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all block",
                      isLink ? "hover:border-brand-gold/30 hover:shadow-lg cursor-pointer" : ""
                    )}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-brand-navy dark:text-white text-sm">{w.title}</h3>
                      {isLink && <svg className="w-4 h-4 text-brand-gold shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
                    </div>
                    <p className="text-xs font-black text-brand-gold tracking-wide mt-3">{w.sponsor}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{w.date}</p>
                    {isLink && (
                      <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-brand-gold tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-all">
                        Visit Official Site <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                    )}
                  </Component>
                );
              })}
            </div>
          </div>

          {/* Papers presented — scrollable card */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 mb-16 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen01Icon className="w-8 h-8 text-brand-gold" />
              <h2 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight">Papers Presented at Conferences</h2>
            </div>
            <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {papersPresentedAtConferences.map((p, i) => (
                <li key={i} className="pb-4 border-b border-slate-100 dark:border-white/5 last:border-0">
                  <p className="font-bold text-brand-navy dark:text-white text-sm">{p.title}</p>
                  <p className="text-xs text-slate-500 tracking-wide mt-1">{p.venue}, {p.year}. {p.role}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Conferences attended — scrollable */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-brand-navy dark:bg-brand-navy/60 text-white relative overflow-hidden mb-20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex items-center gap-3 mb-8">
              <GlobalIcon className="w-8 h-8 text-brand-gold" />
              <h2 className="text-2xl font-black tracking-tight">Conferences / Seminars / Workshops Attended</h2>
            </div>
            <ul className="space-y-2 max-h-96 overflow-y-auto pr-2 relative z-10 text-sm text-slate-300">
              {conferencesAttended.map((c, i) => (
                <li key={i}>
                  {c.link ? (
                    <a 
                      href={c.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-brand-gold transition-colors underline decoration-brand-gold/30 underline-offset-4"
                    >
                      <span className="text-white font-medium">{c.title}</span>
                    </a>
                  ) : (
                    <span className="text-white font-medium">{c.title}</span>
                  )}
                  {" "}— {c.location}, {c.date}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="pt-12 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-8">
            <Link href="/#publications" className="text-[10px] font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Publications →</Link>
            <Link href="/teaching" className="text-xs font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Teaching →</Link>
            <Link href="/about" className="text-xs font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Full CV →</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
