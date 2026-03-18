"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { YoutubeIcon, ArrowUpRight01Icon, PlayIcon } from "hugeicons-react";

export default function InauguralLectureSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 }); // Reset when almost out of view

  const videoId = "dPyVUmyQLXo";
  const youtubeUrl = `https://www.youtube.com/live/${videoId}?feature=shared`;

  // Auto-reset video when scrolled away
  useEffect(() => {
    if (!isInView) {
      const timeout = setTimeout(() => setIsPlaying(false), 0);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-white dark:bg-[#020617]">
      {/* Background Decoration - Concentric Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
        <div className="relative w-full h-full flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-brand-navy dark:border-brand-gold rounded-full"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{ 
                width: `${(i + 1) * 20}%`, 
                height: `${(i + 1) * 20}%`,
                aspectRatio: "1/1",
                opacity: 1 
              }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
            />
          ))}
          {/* Radial lines */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-brand-navy dark:bg-brand-gold"
              style={{ transform: `rotate(${i * 30}deg)` }}
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-black text-brand-navy dark:text-white mb-6 tracking-tight"
          >
            LASU 112th <span className="text-brand-gold italic">Inaugural</span> Lecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 font-medium"
          >
            A landmark academic presentation by Prof. Kabiru Olusegun Akinyemi at Lagos State University.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto group"
        >
          {/* Video Container */}
          <div className="relative aspect-video rounded-[32px] overflow-hidden bg-brand-navy shadow-2xl ring-1 ring-white/10">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Thumbnail Image */}
                  <Image
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="Inaugural Lecture Thumbnail"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />

                  {/* Top Left Branding */}
                  <div className="absolute top-8 left-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center">
                      <span className="text-brand-navy font-black text-xs">LASU</span>
                    </div>
                    <span className="text-white font-bold tracking-tight">Prof. Kabiru</span>
                  </div>

                  {/* Bottom Left Title */}
                  <div className="absolute bottom-8 left-8 max-w-md">
                    <p className="text-brand-gold font-black text-xs tracking-widest uppercase mb-2">Faculty of Science</p>
                    <h3 className="text-white text-2xl md:text-2xl font-black leading-tight tracking-tight">
                      112th Inaugural Lecture <br />
                      by Prof. Kabiru Akinyemi
                    </h3>
                  </div>

                  {/* Play Button */}
                  <div className="absolute bottom-8 right-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl group/btn transition-colors hover:bg-brand-gold"
                    >
                      <PlayIcon size={32} className="text-brand-navy fill-current ml-1" />
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="112th Inaugural Lecture"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-view"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Open in YouTube Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-bold hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300"
            >
              <YoutubeIcon size={20} className="group-hover:scale-110 transition-transform" />
              <span>Watch on YouTube</span>
              <ArrowUpRight01Icon size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
