"use client";

import { motion } from "framer-motion";
import {
  teachingCourses,
  studentSupervision,
  expertService,
} from "@/data/research";
import Container from "@/components/layout/Container";
import { fadeIn, organicReveal } from "@/components/animations/variants";
import { School01Icon, UserGroupIcon, BookOpen01Icon } from "hugeicons-react";
import Link from "next/link";

export default function TeachingPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-black/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <Container>
          {/* Header — matches TeachingSection */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-20">
            <motion.div
              variants={organicReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-brand-gold/10 rounded-xl">
                <School01Icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-brand-navy dark:text-white">
                Teaching &amp; Mentorship
              </h1>
            </motion.div>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/10 hidden md:block mx-8" />
          </div>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-16 max-w-2xl">
            Undergraduate and postgraduate courses, student supervision, external examining, and editorial/review service.
          </p>

          {/* Courses + Supervision — same 2-card layout as landing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            {/* Courses card — navy like landing */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-brand-navy dark:bg-brand-navy/60 text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none" />
              <h2 className="text-brand-gold font-black text-[10px] tracking-wide mb-10 relative z-10">Undergraduate &amp; Graduate</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h3 className="text-xs font-black tracking-wide text-slate-400 mb-6">Undergraduate</h3>
                  <ul className="space-y-4">
                    {teachingCourses.undergraduate.map((course, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-black tracking-wide text-slate-400 mb-6">Graduate</h3>
                  <ul className="space-y-4">
                    {teachingCourses.graduate.map((course, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Supervision card — white like landing */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-brand-gold font-black text-[10px] tracking-wide">Postgraduate Supervision</h2>
                <UserGroupIcon className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-4xl font-black text-brand-navy dark:text-white mb-2">{studentSupervision.mastersAndPhd.length}</p>
                  <p className="text-[10px] font-black text-slate-400 tracking-wide">Alumni Supervised</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-brand-navy dark:text-white mb-2">{studentSupervision.currentStudents.mainSupervisor.length + studentSupervision.currentStudents.coSupervisor.length}</p>
                  <p className="text-[10px] font-black text-slate-400 tracking-wide">Current Students</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400 font-medium mb-10">
                {studentSupervision.summary.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              <div className="pt-8 border-t border-slate-100 dark:border-white/5 space-y-8">
                <div>
                  <h3 className="text-[10px] font-black text-brand-gold tracking-wide mb-4">Completed (MSc/PhD)</h3>
                  <ul className="space-y-4 max-h-64 overflow-y-auto">
                    {studentSupervision.mastersAndPhd.map((s, i) => (
                      <li key={i} className="text-sm">
                        <span className="font-bold text-brand-navy dark:text-white">{s.name}</span>
                        <span className="text-slate-500 text-xs block">{s.level} — {s.year}</span>
                        <span className="text-slate-600 dark:text-slate-400 text-xs">{s.topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-brand-gold tracking-wide mb-3">Current (Main)</h3>
                  <ul className="space-y-2 text-sm text-brand-navy dark:text-slate-300">
                    {studentSupervision.currentStudents.mainSupervisor.map((s, i) => (
                      <li key={i}><span className="font-bold">{s.name}</span>{s.id && ` (${s.id})`} — {s.level}</li>
                    ))}
                  </ul>
                  <h3 className="text-[10px] font-black text-brand-gold tracking-wide mt-4 mb-3">Co-Supervisor</h3>
                  <ul className="space-y-2 text-sm text-brand-navy dark:text-slate-300">
                    {studentSupervision.currentStudents.coSupervisor.map((s, i) => (
                      <li key={i}><span className="font-bold">{s.name}</span>{s.id && ` (${s.id})`} — {s.level}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* External examiner + International PhD + External assessor — 3 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-[40px] bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen01Icon className="w-6 h-6 text-brand-gold" />
                <h2 className="text-lg font-black text-brand-navy dark:text-white tracking-tight">External Examiner</h2>
              </div>
              <ul className="space-y-2 text-sm text-brand-navy dark:text-slate-400">
                {expertService.externalExaminerUndergrad.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-[40px] bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <School01Icon className="w-6 h-6 text-brand-gold" />
                <h2 className="text-lg font-black text-brand-navy dark:text-white tracking-tight">International PhD Assessed</h2>
              </div>
              <ul className="space-y-4 text-sm text-brand-navy dark:text-slate-400">
                {expertService.internationalPhDAssessed.map((p, i) => (
                  <li key={i}>
                    <span className="font-bold text-brand-navy dark:text-white block">{p.name}</span>
                    <span className="text-xs">{p.thesis}</span>
                    <span className="text-[10px] text-slate-500 block">{p.university}, {p.year}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-[40px] bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <UserGroupIcon className="w-6 h-6 text-brand-gold" />
                <h2 className="text-lg font-black text-brand-navy dark:text-white tracking-tight">External Assessor (Staff)</h2>
              </div>
              <ul className="space-y-2 text-sm text-brand-navy dark:text-slate-400">
                {expertService.externalAssessorStaff.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Reviewer & Editorial — navy card like landing memberships */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-brand-navy dark:bg-brand-navy/40 border border-brand-gold/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex items-center gap-3 mb-8">
              <BookOpen01Icon className="w-6 h-6 text-brand-gold" />
              <h2 className="text-lg font-black text-brand-gold tracking-wide">Reviewer &amp; Editorial Board</h2>
            </div>
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-[10px] font-black text-brand-gold tracking-wide mb-4">Editor roles</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {expertService.editorRoles.map((e, i) => (
                    <li key={i}><span className="font-bold text-white">{e.role}</span>, {e.journal} ({e.period})</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] font-black text-brand-gold tracking-wide mb-4">Reviewer for (selected)</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  {expertService.reviewerJournals.map((j, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 shrink-0" /> {j}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="mt-20 pt-12 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-8">
            <Link href="/#publications" className="text-[10px] font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Publications →</Link>
            <Link href="/research" className="text-[10px] font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Research →</Link>
            <Link href="/about" className="text-[10px] font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Full CV →</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
