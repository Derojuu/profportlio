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
import { fadeIn } from "@/components/animations/variants";
import { Award01Icon, School01Icon, UserGroupIcon, Building01Icon, BookOpen01Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden bg-white dark:bg-brand-navy/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <Container>
          {/* Page header — matches landing typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-xs font-black text-brand-gold tracking-wide mb-4">Curriculum Vitae</p>
            <h1 className="text-4xl md:text-6xl font-black text-brand-navy dark:text-white tracking-tight mb-4">
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
                  <h2 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight">Personal Data</h2>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">Full name</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.fullName}</dd></div>
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">D.O.B. / Place</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.dob}, {profileData.placeOfBirth}</dd></div>
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">State / LGA</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.stateOfOrigin}; {profileData.lga}</dd></div>
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">Nationality</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.nationality}</dd></div>
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">Marital status</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.maritalStatus}</dd></div>
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">Department / Faculty</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.department}, {profileData.faculty}</dd></div>
                  <div className="sm:col-span-2"><dt className="text-xs font-black text-brand-gold tracking-wide">Institution / Position</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.institution}. {profileData.title}; {profileData.secondaryTitle}</dd></div>
                  <div className="sm:col-span-2"><dt className="text-xs font-black text-brand-gold tracking-wide">Residential</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.residentialAddress}</dd></div>
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">Postal</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.contact.postalAddress}</dd></div>
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">Phones</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.contact.phones.join("; ")}</dd></div>
                  <div className="sm:col-span-2"><dt className="text-xs font-black text-brand-gold tracking-wide">E-mail</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.contact.emails.join("; ")}</dd></div>
                  <div><dt className="text-xs font-black text-brand-gold tracking-wide">Next of kin</dt><dd className="text-brand-navy dark:text-slate-300 font-medium mt-0.5">{profileData.nextOfKin.name} ({profileData.nextOfKin.relationship})</dd></div>
                </dl>
              </motion.div>

              {/* Work Experience — navy card like landing */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[40px] bg-brand-navy dark:bg-brand-navy/60 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 flex flex-wrap items-center gap-3 mb-6 sm:mb-10">
                  <Building01Icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight">Work Experience at LASU</h2>
                </div>
                <ul className="space-y-4 sm:space-y-5 relative z-10 min-w-0">
                  {profileData.positions.map((p, i) => (
                    <li key={i} className="flex gap-3 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                      <div className="min-w-0 flex-1">
                        <span className="font-bold block text-sm sm:text-base">{p.title}</span>
                        <span className="text-slate-400 text-xs sm:text-sm block mt-0.5">— {p.organization}, {p.period}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-400 text-xs mt-6 relative z-10 leading-relaxed">First appointment: Assistant Lecturer, Dept. of Botany & Microbiology, LASU (March 8, 1995).</p>
              </motion.div>

              {/* Honours — grid of cards like landing */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <Award01Icon className="w-8 h-8 text-brand-gold" />
                  <h2 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight">Honours &amp; Distinctions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {honorsAndAwards.map((award, idx) => {
                    const isLink = !!award.link;
                    const Component = isLink ? motion.a : motion.div;
                    return (
                      <Component
                        key={idx}
                        {...(isLink ? { href: award.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={idx}
                        className={cn(
                          "p-6 rounded-2xl bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all group block",
                          isLink ? "hover:border-brand-gold/30 hover:shadow-lg cursor-pointer" : ""
                        )}
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-black text-brand-gold tracking-wide">{award.year}</span>
                          {isLink && <svg className="w-3 h-3 text-brand-gold shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
                        </div>
                        <h3 className="font-bold text-sm text-brand-navy dark:text-white mt-1 group-hover:text-brand-gold transition-colors">{award.title}</h3>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-bold tracking-wide">{award.organization}</p>
                      </Component>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right column — Education timeline, Training, Memberships, Admin, Refs */}
            <div className="lg:col-span-5 space-y-16">
              {/* Education — timeline like landing */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <School01Icon className="w-8 h-8 text-brand-gold" />
                  <h2 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight">Education</h2>
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
                      <span className="text-xs font-black text-brand-gold tracking-wide">{edu.year}</span>
                      <h3 className="font-bold text-base text-brand-navy dark:text-white mt-1">{edu.degree}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{edu.institution}</p>
                      {edu.period && <p className="text-xs text-slate-400 mt-0.5">{edu.period}</p>}
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
                  <h2 className="text-lg font-black text-brand-gold tracking-wide">Professional Training</h2>
                </div>
                <ul className="space-y-4">
                  {profileData.professionalTraining.map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-5 h-5 rounded-lg bg-brand-gold/10 flex items-center justify-center text-[10px] font-black text-brand-gold shrink-0">✓</span>
                      <div>
                        <p className="font-bold text-sm text-brand-navy dark:text-white">{t.title}</p>
                        <p className="text-[10px] text-slate-400 tracking-wide font-bold">{t.organizer}, {t.year}</p>
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
                  <h2 className="text-lg font-black text-brand-gold tracking-wide">Memberships</h2>
                </div>
                <div className="space-y-4 relative z-10">
                  {profileData.memberships.map((m, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="w-5 h-5 rounded-lg bg-brand-gold/10 flex items-center justify-center text-xs font-black text-brand-gold shrink-0 mt-1">✓</span>
                      <div>
                        <h3 className="font-bold text-sm text-white">{m.role}</h3>
                        <p className="text-xs text-slate-400 tracking-wide font-bold">{m.organization}</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-xs font-black text-brand-gold tracking-wide pt-4 border-t border-white/5 mt-4">Social</p>
                  {profileData.socialMemberships.map((m, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="w-5 h-5 rounded-lg bg-brand-gold/10 flex items-center justify-center text-[10px] font-black text-brand-gold shrink-0 mt-1">✓</span>
                      <div>
                        <h3 className="font-bold text-sm text-white">{m.role}</h3>
                        <p className="text-[10px] text-slate-400 tracking-wide font-bold">{m.organization}</p>
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
                <h2 className="text-xs font-black text-brand-gold tracking-wide mb-6">Visiting &amp; Previous</h2>
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
                <h2 className="text-xs font-black text-brand-gold tracking-wide mb-6">Administrative Experience</h2>
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
                <h2 className="text-xs font-black text-brand-gold tracking-wide mb-3">Extra-Curricular</h2>
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
                <h2 className="text-2xl font-black text-brand-navy dark:text-white tracking-tight flex items-center gap-3">
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
                      <a href={ref.website} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-gold tracking-wide hover:underline mt-2 inline-block">
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
            <Link href="/#research" className="text-[10px] font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Research →</Link>
            <Link href="/#publications" className="text-[10px] font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Publications →</Link>
            <Link href="/contact" className="text-xs font-black text-brand-gold tracking-wide hover:text-brand-navy dark:hover:text-white transition-colors">Contact →</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
