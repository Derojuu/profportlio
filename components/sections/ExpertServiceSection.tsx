"use client";

import { motion } from "framer-motion";
import { expertService, adminExperience } from "@/data/research";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Building01Icon, UserGroupIcon, Award01Icon } from "hugeicons-react";

export default function ExpertServiceSection() {
  return (
    <SectionWrapper id="expert-service" className="bg-slate-50 dark:bg-brand-navy/80 text-brand-navy dark:text-white overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Admin Experience Counter Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <h2 className="text-5xl font-black tracking-tight mb-10 leading-tight">
              Expert <br /> <span className="text-brand-gold">Leadership</span>
            </h2>
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-sm">
                 <Building01Icon className="w-8 h-8 text-brand-gold mb-4" />
                 <p className="text-4xl font-black mb-1">{adminExperience.length}</p>
                 <p className="text-xs font-black tracking-wide text-slate-500 dark:text-slate-400">Administrative Roles</p>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-sm">
                 <UserGroupIcon className="w-8 h-8 text-brand-gold mb-4" />
                 <p className="text-4xl font-black mb-1">{expertService.reviewerJournals.length}</p>
                 <p className="text-xs font-black tracking-wide text-slate-500 dark:text-slate-400">Top-tier Journals Reviewed</p>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* National & International Service */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center">
                  <Award01Icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="text-2xl font-black tracking-tight">Editorial & Assessor Roles</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertService.editorRoles.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-gold/40 transition-all group shadow-sm"
                  >
                    <h4 className="font-bold text-sm text-brand-navy dark:text-white group-hover:text-brand-gold transition-colors">{item.role}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">{item.journal}</p>
                  </motion.div>
                ))}
                {expertService.externalAssessorStaff.slice(0, 4).map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-gold/40 transition-all group shadow-sm"
                    >
                      <p className="font-bold text-sm text-brand-navy dark:text-white group-hover:text-brand-gold transition-colors">{item}</p>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* External Examiner Roles List */}
            <div className="p-10 rounded-[50px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-lg shadow-sm">
              <h3 className="text-brand-gold font-black text-xs tracking-wide mb-10">External Examiner Appointments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {expertService.externalExaminerRoles.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                    <div>
                      <p className="font-bold text-sm text-brand-navy/80 dark:text-slate-200">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
