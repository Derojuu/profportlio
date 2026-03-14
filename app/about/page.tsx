"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import {
  honorsAndAwards,
  adminExperience,
  references,
  extraCurricular,
} from "@/data/research";
import Container from "@/components/layout/Container";
import { fadeIn, organicReveal } from "@/components/animations/variants";
import { Award01Icon, School01Icon, UserGroupIcon, Building01Icon, BookOpen01Icon } from "hugeicons-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-brand-navy/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <Container>
          {/* Page header — matches landing typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-4">Curriculum Vitae</p>
            <h1 className="text-4xl md:text-6xl font-black text-brand-navy dark:text-white uppercase tracking-tighter mb-4">
              {profileData.name}
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{profileData.credentials}</p>
            <div className="h-1 w-24 bg-brand-gold rounded-full mt-8" />
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mt-10 max-w-3xl">
              {profileData.biography}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            {/* Left column */}
            <div className="lg:col-span-7 space-y-16">
              {/* Personal Data — card */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-10 rounded-[40px] bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5"
              >
                <div className="flex items-center gap-3 mb-10">
                  <UserGroupIcon className="w-8 h-8 text-brand-gold" />
                  <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight">Personal Data</h2>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Full name</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.fullName}</dd></div>
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">D.O.B. / Place</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.dob}, {profileData.placeOfBirth}</dd></div>
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">State / LGA</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.stateOfOrigin}; {profileData.lga}</dd></div>
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Nationality</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.nationality}</dd></div>
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Marital status</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.maritalStatus}</dd></div>
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Department / Faculty</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.department}, {profileData.faculty}</dd></div>
                  <div className="sm:col-span-2"><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Institution / Position</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.institution}. {profileData.title}; {profileData.secondaryTitle}</dd></div>
                  <div className="sm:col-span-2"><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Residential</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.residentialAddress}</dd></div>
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Postal</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.contact.postalAddress}</dd></div>
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Phones</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.contact.phones.join("; ")}</dd></div>
                  <div className="sm:col-span-2"><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">E-mail</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.contact.emails.join("; ")}</dd></div>
                  <div><dt className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Next of kin</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.nextOfKin.name} ({profileData.nextOfKin.relationship})</dd></div>
                </dl>
              </motion.div>

              {/* Work Experience — navy card like landing */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-10 rounded-[40px] bg-brand-navy dark:bg-brand-navy/60 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 flex items-center gap-3 mb-10">
                  <Building01Icon className="w-8 h-8 text-brand-gold" />
                  <h2 className="text-2xl font-black uppercase tracking-tight">Work Experience at LASU</h2>
                </div>
                <ul className="space-y-4 relative z-10">
                  {profileData.positions.map((p, i) => (
                    <li key={i} className="flex items-baseline gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                      <span className="font-bold">{p.title}</span>
                      <span className="text-slate-400 text-sm">— {p.organization}, {p.period}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-400 text-xs mt-6 relative z-10">First appointment: Assistant Lecturer, Dept. of Botany & Microbiology, LASU (March 8, 1995).</p>
              </motion.div>

              {/* Honours — grid of cards like landing */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <Award01Icon className="w-8 h-8 text-brand-gold" />
                  <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight">Honours &amp; Distinctions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {honorsAndAwards.map((award, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={idx}
                      className="p-6 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-brand-gold/30 transition-all group"
                    >
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{award.year}</span>
                      <h3 className="font-bold text-sm text-brand-navy dark:text-white mt-1 group-hover:text-brand-gold transition-colors">{award.title}</h3>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase font-bold tracking-wider">{award.organization}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — Education timeline, Training, Memberships, Admin, Refs */}
            <div className="lg:col-span-5 space-y-16">
              {/* Education — timeline like landing */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <School01Icon className="w-8 h-8 text-brand-gold" />
                  <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight">Education</h2>
                </div>
                <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-navy/5 dark:before:bg-white/5">
                  {profileData.education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="relative pl-12 group"
                    >
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-brand-navy border-4 border-brand-navy/5 dark:border-white/5 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500 z-10">
                        <div className="w-2 h-2 rounded-full bg-brand-gold" />
                      </div>
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{edu.year}</span>
                      <h3 className="font-bold text-base text-brand-navy dark:text-white mt-1">{edu.degree}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{edu.institution}</p>
                      {edu.period && <p className="text-[10px] text-slate-400 mt-0.5">{edu.period}</p>}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Professional Training */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen01Icon className="w-6 h-6 text-brand-gold" />
                  <h2 className="text-lg font-black text-brand-gold uppercase tracking-widest">Professional Training</h2>
                </div>
                <ul className="space-y-4">
                  {profileData.professionalTraining.map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-5 h-5 rounded-lg bg-brand-gold/10 flex items-center justify-center text-[10px] font-black text-brand-gold shrink-0">✓</span>
                      <div>
                        <p className="font-bold text-sm text-brand-navy dark:text-white">{t.title}</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">{t.organizer}, {t.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Memberships — card like landing */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-[40px] bg-brand-navy dark:bg-brand-navy/40 border border-brand-gold/10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <UserGroupIcon className="w-6 h-6 text-brand-gold" />
                  <h2 className="text-lg font-black text-brand-gold uppercase tracking-widest">Memberships</h2>
                </div>
                <div className="space-y-4 relative z-10">
                  {profileData.memberships.map((m, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="w-5 h-5 rounded-lg bg-brand-gold/10 flex items-center justify-center text-[10px] font-black text-brand-gold shrink-0 mt-1">✓</span>
                      <div>
                        <h3 className="font-bold text-sm text-white">{m.role}</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">{m.organization}</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest pt-4 border-t border-white/5 mt-4">Social</p>
                  {profileData.socialMemberships.map((m, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="w-5 h-5 rounded-lg bg-brand-gold/10 flex items-center justify-center text-[10px] font-black text-brand-gold shrink-0 mt-1">✓</span>
                      <div>
                        <h3 className="font-bold text-sm text-white">{m.role}</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">{m.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visiting & Previous */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5"
              >
                <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-6">Visiting &amp; Previous</h2>
                <ul className="space-y-3 text-sm text-brand-navy dark:text-slate-300">
                  {profileData.previousWorkExperience.map((p, i) => (
                    <li key={i}><span className="font-bold">{p.role}</span> — {p.organization}, {p.period}</li>
                  ))}
                  {profileData.visitingPositions.map((p, i) => (
                    <li key={i}><span className="font-bold">{p.title}</span> — {p.organization}, {p.period}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Admin experience — compact list */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5"
              >
                <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-6">Administrative Experience</h2>
                <ul className="space-y-2 text-xs text-brand-navy dark:text-slate-300 max-h-64 overflow-y-auto pr-2">
                  {adminExperience.map((a, i) => (
                    <li key={i}><span className="font-bold">{a.role}</span> — {a.organization}{a.year && `, ${a.year}`}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Extra-curricular */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5"
              >
                <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-3">Extra-Curricular</h2>
                <p className="text-sm text-brand-navy dark:text-slate-300">{extraCurricular.join(", ")}</p>
              </motion.div>

              {/* References */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight flex items-center gap-3">
                  <UserGroupIcon className="w-8 h-8 text-brand-gold" />
                  References
                </h2>
                {references.map((ref, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <p className="font-bold text-brand-navy dark:text-white">{ref.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{ref.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{ref.institution}</p>
                    {ref.address && <p className="text-xs text-slate-500 mt-1">{ref.address}</p>}
                    {ref.phone && <p className="text-xs text-slate-500">Tel: {ref.phone}</p>}
                    {ref.email && <p className="text-xs text-slate-500">E-mail: {ref.email}</p>}
                    {ref.website && (
                      <a href={ref.website} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-brand-gold uppercase tracking-wider hover:underline mt-2 inline-block">
                        {ref.website}
                      </a>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Footer links */}
          <div className="mt-24 pt-12 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-8">
            <Link href="/#research" className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] hover:text-brand-navy dark:hover:text-white transition-colors">Research →</Link>
            <Link href="/#publications" className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] hover:text-brand-navy dark:hover:text-white transition-colors">Publications →</Link>
            <Link href="/contact" className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] hover:text-brand-navy dark:hover:text-white transition-colors">Contact →</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
