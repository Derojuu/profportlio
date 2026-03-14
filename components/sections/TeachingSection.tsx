"use client";

import { motion } from "framer-motion";
import { teachingCourses, studentSupervision } from "@/data/research";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { fadeIn, organicReveal } from "@/components/animations/variants";
import { School01Icon, UserGroupIcon } from "hugeicons-react";

export default function TeachingSection() {
  return (
    <SectionWrapper id="teaching" className="bg-slate-50 dark:bg-black/20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <motion.div variants={organicReveal} initial="hidden" whileInView="visible" className="flex items-center gap-4">
            <div className="p-3 bg-brand-gold/10 rounded-xl">
              <School01Icon className="w-8 h-8 text-brand-gold" />
            </div>
            <h2 className="text-4xl font-black tracking-tight text-brand-navy dark:text-white">Teaching & Mentorship</h2>
          </motion.div>
          <div className="h-px flex-1 bg-slate-200 dark:bg-white/10 hidden md:block mx-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Courses Card */}
          <div className="p-10 rounded-[40px] bg-brand-navy dark:bg-brand-navy/60 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full group-hover:bg-brand-gold/10 transition-all duration-700"></div>
            <h3 className="text-brand-gold font-black text-[10px] tracking-wide mb-10 relative z-10">Undergraduate & Graduate</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h4 className="text-xs font-black tracking-wide text-slate-400 mb-6">Undergraduate</h4>
                <ul className="space-y-4">
                  {teachingCourses.undergraduate.slice(0, 5).map((course, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40"></span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wide text-slate-400 mb-6">Graduate</h4>
                <ul className="space-y-4">
                  {teachingCourses.graduate.slice(0, 5).map((course, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40"></span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-white/5 relative z-10">
              <a href="/teaching" className="text-[10px] font-black text-brand-gold tracking-wide hover:text-white transition-colors">View All Courses →</a>
            </div>
          </div>

          {/* Supervision Card */}
          <div className="p-10 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-brand-gold font-black text-[10px] tracking-wide">Postgraduate Supervision</h3>
                <UserGroupIcon className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                   <p className="text-4xl font-black text-brand-navy dark:text-white mb-2">{studentSupervision.mastersAndPhd.length}</p>
                   <p className="text-[10px] font-black text-slate-400 tracking-wide">Alumni Supervised</p>
                </div>
                <div>
                   <p className="text-4xl font-black text-brand-navy dark:text-white mb-2">{studentSupervision.currentStudents.mainSupervisor.length + studentSupervision.currentStudents.coSupervisor.length}</p>
                   <p className="text-[10px] font-black text-slate-400 tracking-wide">Current Students</p>
                </div>
              </div>
              <div className="mt-10 space-y-3">
                 {studentSupervision.summary.slice(0, 2).map((s, i) => (
                   <p key={i} className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{s}</p>
                 ))}
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/5">
              <a href="/teaching" className="text-[10px] font-black text-brand-navy dark:text-brand-gold tracking-wide hover:underline">Full Supervision Record →</a>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
