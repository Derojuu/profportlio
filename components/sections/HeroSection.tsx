"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { publications } from "@/data/publications";
import { ArrowRight01Icon } from "hugeicons-react";
import { organicReveal } from "@/components/animations/variants";

export function HeroSection() {
  const containerRef = useRef(null);
  const [imgError, setImgError] = useState(false);


  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] lg:min-h-0 lg:py-24 flex items-stretch lg:items-center justify-center pt-32 sm:pt-24 overflow-hidden bg-white dark:bg-[#020617] selection:bg-brand-gold selection:text-brand-navy"
    >
      {/* DNA Helix */}
      <div className="absolute right-[8%] top-[15%] w-48 h-[70%] opacity-[0.03] dark:opacity-[0.08] pointer-events-none hidden xl:block">
        <svg viewBox="0 0 100 600" className="w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.g key={i}>
              <motion.circle
                r="4"
                fill="#EAB308"
                initial={{ cx: 20, cy: i * 40 + 20, opacity: 0.3 }}
                animate={{ cx: [20, 80, 20], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
              <motion.circle
                r="4"
                fill="#1E293B"
                initial={{ cx: 80, cy: i * 40 + 20, opacity: 1 }}
                animate={{ cx: [80, 20, 80], opacity: [1, 0.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
              <motion.line
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-300 dark:text-slate-700"
                initial={{
                  x1: 20,
                  y1: i * 40 + 20,
                  x2: 80,
                  y2: i * 40 + 20,
                }}
                animate={{ x1: [20, 80, 20], x2: [80, 20, 80] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
            </motion.g>
          ))}
        </svg>
      </div>

      <Container className="relative z-10 px-5 sm:px-6 lg:px-8 h-full lg:h-auto">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-12 min-h-[calc(100dvh-5rem)] lg:min-h-0">
          {/* Mobile: full viewport column from nav to bottom. Desktop: normal row */}
          <motion.div
            className="flex-1 w-full max-w-none lg:max-w-2xl text-left flex flex-col justify-between min-h-[calc(100dvh-5rem)] lg:min-h-0 pt-2 pb-12 lg:py-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
          >
            {/* Top: Badge */}
            <motion.div
              variants={organicReveal}
              className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 rounded-full bg-brand-navy/5 dark:bg-white/5 border border-slate-100 dark:border-white/10 w-max mb-6 lg:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[11px] md:text-xs font-black tracking-wide text-brand-navy dark:text-brand-gold">
                Academic Showcase &apos;26
              </span>
            </motion.div>

            {/* Middle: Title & Subtitle */}
            <div className="flex flex-col gap-4 lg:gap-6 my-auto lg:my-0 py-8 lg:py-0">
              <motion.h1
                variants={organicReveal}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight text-brand-navy dark:text-white leading-tight"
              >
                Prof.{" "}
                <span className="text-brand-gold italic">Kabiru</span>{" "}
                <span className="inline">Olusegun</span>{" "}
                <span className="block">Akinyemi</span>
              </motion.h1>

              <motion.p
                variants={organicReveal}
                className="text-base sm:text-lg lg:text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed tracking-tight"
              >
                Director of Linkages, Partnerships & Collaborations at LASU. Pioneering research in{" "}
                <span className="text-brand-navy dark:text-white font-black">Molecular Epidemiology</span>.
              </motion.p>
            </div>

            {/* Bottom: Buttons */}
            <motion.div
              variants={organicReveal}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 mt-auto lg:mt-8"
            >
              <a
                href="#research"
                className="group px-6 sm:px-8 lg:px-8 py-4 rounded-xl bg-brand-navy text-white dark:bg-brand-gold dark:text-brand-navy font-black tracking-wide text-xs sm:text-[13px] hover:shadow-gold-glow transition-all duration-500 flex items-center justify-center sm:justify-start gap-3 active:scale-95"
              >
                Scientific Lab
                <ArrowRight01Icon size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#publications"
                className="group px-6 sm:px-8 lg:px-8 py-4 rounded-xl bg-transparent text-brand-navy dark:text-white border border-brand-navy/10 dark:border-white/10 font-black tracking-wide text-xs sm:text-[13px] hover:bg-brand-navy/5 dark:hover:bg-white/5 transition-all duration-500 flex items-center justify-center sm:justify-start gap-3 active:scale-95"
              >
                Journal Library
                <ArrowRight01Icon size={16} className="group-hover:rotate-[-45deg] transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-[280px] sm:max-w-sm lg:max-w-xs xl:max-w-sm relative shrink-0 lg:shrink"
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
                    <Image
                      src="/profpic.jpeg"
                      alt={profileData.name}
                      fill
                      loading="eager"
                      onError={() => setImgError(true)}
                      className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 opacity-80"
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
                className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-4 md:-right-10 bg-white/10 backdrop-blur-3xl border border-white/20 p-6 sm:p-8 md:p-12 rounded-[40px] sm:rounded-[50px] shadow-2xl z-20 group hover:bg-brand-gold transition-all duration-500"
              >
                <div className="flex flex-col items-end text-right">
                  <span className="text-6xl md:text-8xl font-black text-white group-hover:text-brand-navy leading-none tracking-tight">
                    {publications.length}+
                  </span>
                  <p className="text-[10px] font-black text-brand-gold group-hover:text-brand-navy/60 tracking-wide mt-3 leading-tight">
                    Scientific<span className="hidden sm:inline"><br /></span> Publications
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[8px] font-black tracking-wide rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
