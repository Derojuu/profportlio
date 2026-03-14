"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { references, extraCurricular } from "@/data/research";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { organicReveal } from "@/components/animations/variants";
import { HelpCircleIcon, Building01Icon, BookOpen01Icon } from "hugeicons-react";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden bg-slate-50 dark:bg-transparent">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[200px] rounded-full pointer-events-none"></div>
      
      <Container>
        {/* Section Header */}
        <motion.div variants={organicReveal} initial="hidden" whileInView="visible" className="text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-brand-gold/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Open for Collaboration</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-brand-navy dark:text-white mb-6 uppercase tracking-tighter">
            Get In <span className="text-brand-gold">Touch</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            For academic collaborations, research partnerships, or speaking engagements.
          </p>
        </motion.div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
          {/* Email Card */}
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lg group">
            <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
              <HelpCircleIcon className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-4">Email</h3>
            <div className="space-y-2">
              {profileData.contact.emails.map((e, i) => (
                <a key={i} href={`mailto:${e}`} className="block text-sm font-bold text-brand-navy dark:text-white hover:text-brand-gold transition-colors truncate">{e}</a>
              ))}
            </div>
          </motion.div>

          {/* Links Card */}
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-brand-navy dark:bg-brand-navy/60 text-white shadow-xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-[40px] rounded-full"></div>
             <h3 className="text-brand-gold font-black text-[10px] uppercase tracking-[0.3em] mb-6 relative z-10">Research Profiles</h3>
             <div className="grid grid-cols-3 gap-4 relative z-10">
                <a href={profileData.contact.links.googleScholar} target="_blank" className="p-3 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">🎓</a>
                <a href={profileData.contact.links.orcid} target="_blank" className="p-3 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">🆔</a>
                <a href={profileData.contact.links.researchGate} target="_blank" className="p-3 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">🔬</a>
                <a href={profileData.contact.links.linkedin} target="_blank" className="p-3 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">💼</a>
                <a href={profileData.contact.links.scopus} target="_blank" className="p-3 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">📊</a>
                <a href={`https://publons.com/researcher/${profileData.contact.links.webOfScience}`} target="_blank" className="p-3 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">🌐</a>
             </div>
          </motion.div>

          {/* Location Card */}
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lg group">
            <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
              <Building01Icon className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-4">Location</h3>
            <p className="text-sm font-bold text-brand-navy dark:text-white leading-relaxed">{profileData.contact.office}</p>
          </motion.div>
        </div>

        {/* Secondary Grid: Form + References */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          <div className="lg:col-span-12">
            <motion.div 
               whileHover={{ scale: 1.002 }}
               className="p-10 md:p-14 rounded-[50px] bg-brand-navy dark:bg-brand-navy/80 border border-brand-gold/10 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                 <div>
                    <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Drop a Message</h3>
                    <p className="text-slate-400 text-sm mb-10">I&apos;ll get back to you across my academic network.</p>
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <input type="text" placeholder="Name" className="h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:border-brand-gold outline-none transition-all" />
                        <input type="email" placeholder="Email" className="h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:border-brand-gold outline-none transition-all" />
                      </div>
                      <textarea placeholder="Message" className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-6 text-white focus:border-brand-gold outline-none transition-all resize-none"></textarea>
                      <button className="w-full h-14 bg-brand-gold text-brand-navy font-black uppercase tracking-widest text-xs rounded-2xl shadow-gold-glow-sm hover:scale-[1.02] transition-all">Send Message</button>
                    </form>
                 </div>
                 <div className="space-y-8">
                    <h3 className="text-lg font-black text-brand-gold uppercase tracking-[0.3em]">Institutional References</h3>
                    <div className="space-y-6">
                       {references.map((ref, i) => (
                         <div key={i} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                            <h4 className="text-white font-bold text-sm mb-1">{ref.name}</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">{ref.title}</p>
                            <p className="text-[10px] text-slate-500">{ref.institution}</p>
                            <p className="text-[10px] text-brand-gold font-black mt-2">{ref.email}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Extra Footer Bits */}
        <div className="mt-20 pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Extra-Curricular: {extraCurricular.join(" • ")}</p>
           <motion.a 
              href={profileData.contact.links.cv}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 bg-brand-gold/10 text-brand-gold rounded-xl font-black text-[10px] uppercase tracking-widest border border-brand-gold/20"
           >
              Download Full Curriculum Vitae <BookOpen01Icon className="w-4 h-4" />
           </motion.a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
