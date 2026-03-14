"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { publications } from "@/data/publications";
import { ArrowRight01Icon } from "hugeicons-react";
import { organicReveal } from "@/components/animations/variants";

export function HeroSection() {
  const containerRef = useRef(null);
  const [imgError, setImgError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#020617] selection:bg-brand-gold selection:text-brand-navy"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-brand-gold/5 dark:bg-brand-gold/10 blur-[120px]"
        />
        <motion.div
          style={{ y: y2, rotate }}
          className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-navy/5 dark:bg-brand-navy/30 blur-[100px]"
        />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] rounded-full bg-brand-gold/5 blur-[150px]" />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 2, ease: "easeOut" }}
            className="absolute rounded-full border border-brand-gold/20 dark:border-white/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* DNA Helix */}
      <div className="absolute right-[8%] top-[15%] w-48 h-[70%] opacity-[0.03] dark:opacity-[0.08] pointer-events-none hidden xl:block">
        <svg viewBox="0 0 100 600" className="w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.g key={i}>
              <motion.circle
                cx="30"
                cy={i * 40 + 20}
                r="4"
                fill="#EAB308"
                animate={{ cx: [20, 80, 20], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
              <motion.circle
                cx="70"
                cy={i * 40 + 20}
                r="4"
                fill="#1E293B"
                animate={{ cx: [80, 20, 80], opacity: [1, 0.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
              <motion.line
                x1="20"
                y1={i * 40 + 20}
                x2="80"
                y2={i * 40 + 20}
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-300 dark:text-slate-700"
                animate={{ x1: [20, 80, 20], x2: [80, 20, 80] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
            </motion.g>
          ))}
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          <motion.div
            className="flex-1 max-w-3xl text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
          >
            <motion.div
              variants={organicReveal}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/10 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-navy dark:text-brand-gold">
                Academic Showcase &apos;26
              </span>
            </motion.div>

            <motion.h1
              variants={organicReveal}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-brand-navy dark:text-white leading-[0.85] mb-10 uppercase"
            >
              Prof. <br className="hidden md:block" />
              <span className="text-brand-gold italic">Kabiru</span> <br />
              Akinyemi
            </motion.h1>

            <motion.p
              variants={organicReveal}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed tracking-tight"
            >
              Director of Linkages, Partnerships & Collaborations at LASU. Pioneering research in{" "}
              <span className="text-brand-navy dark:text-white font-black">Molecular Epidemiology</span>.
            </motion.p>

            <motion.div
              variants={organicReveal}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <a
                href="#research"
                className="group px-12 py-6 rounded-2xl bg-brand-navy text-white dark:bg-brand-gold dark:text-brand-navy font-black uppercase tracking-[0.3em] text-[10px] hover:shadow-gold-glow transition-all duration-500 flex items-center gap-4 active:scale-95"
              >
                Scientific Lab
                <ArrowRight01Icon size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#publications"
                className="group px-12 py-6 rounded-2xl bg-transparent text-brand-navy dark:text-white border border-brand-navy/10 dark:border-white/10 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-navy/5 dark:hover:bg-white/5 transition-all duration-500 flex items-center gap-4 active:scale-95"
              >
                Journal Library
                <ArrowRight01Icon size={18} className="group-hover:rotate-[-45deg] transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-sm lg:max-w-2xl relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10%] border-2 border-brand-gold/10 rounded-[60px] border-dashed pointer-events-none"
              />

              <div className="relative aspect-[4/5.5] w-full rounded-[60px] overflow-hidden shadow-2xl bg-brand-navy dark:bg-slate-900 ring-1 ring-white/10 transform transition-all duration-700 hover:scale-[1.01]">
                {!imgError ? (
                  <>
                    <img
                      src="/profpic.jpeg"
                      alt={profileData.name}
                      onError={() => setImgError(true)}
                      className="object-cover w-full h-full grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                    <span className="text-6xl font-bold text-brand-gold/80 font-serif">KA</span>
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -right-4 md:-right-10 bg-white/10 backdrop-blur-3xl border border-white/20 p-8 md:p-12 rounded-[50px] shadow-2xl z-20 group hover:bg-brand-gold transition-all duration-500"
              >
                <div className="flex flex-col items-end text-right">
                  <span className="text-6xl md:text-8xl font-black text-white group-hover:text-brand-navy leading-none tracking-tighter">
                    {publications.length}+
                  </span>
                  <p className="text-[10px] font-black text-brand-gold group-hover:text-brand-navy/60 uppercase tracking-[0.4em] mt-3">
                    Scientific <br /> Publications
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
