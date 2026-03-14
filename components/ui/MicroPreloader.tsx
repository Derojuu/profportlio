"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function MicroPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#020617] overflow-hidden"
        >
          {/* DNA Synthesis Animation Container */}
          <div className="relative w-full h-80 flex items-center justify-center">
             <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-90">
                {/* Background Grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#eaaf08" strokeWidth="0.5" opacity="0.1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* DNA Strands */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.g key={i}>
                    {/* Helix 1 Nucleotide */}
                    <motion.circle
                      r="4"
                      fill="#eaaf08"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        cx: [200 + Math.sin(i * 0.5) * 80, 200 + Math.sin(i * 0.5 + Math.PI) * 80],
                        cy: 100 + i * 20
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                    {/* Helix 2 Nucleotide */}
                    <motion.circle
                      r="4"
                      fill="#10b981"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        cx: [200 + Math.sin(i * 0.5 + Math.PI) * 80, 200 + Math.sin(i * 0.5) * 80],
                        cy: 100 + i * 20
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                    {/* Hydrogen Bond Line */}
                    <motion.line
                      stroke="#475569"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 0.3, 0.3, 0],
                        x1: [200 + Math.sin(i * 0.5) * 80, 200 + Math.sin(i * 0.5 + Math.PI) * 80],
                        x2: [200 + Math.sin(i * 0.5 + Math.PI) * 80, 200 + Math.sin(i * 0.5) * 80],
                        y1: 100 + i * 20,
                        y2: 100 + i * 20
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.g>
                ))}
             </svg>
          </div>

          {/* Typography */}
          <div className="mt-8 text-center px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white text-sm font-black tracking-wide mb-4"
            >
              Synthesizing Bio-Data
            </motion.h2>
            <div className="w-64 h-[1px] bg-slate-800 relative mx-auto overflow-hidden">
               <motion.div 
                 animate={{ x: ["-100%", "100%"] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                 className="absolute inset-0 bg-brand-gold w-1/3"
               />
            </div>
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-brand-gold text-[9px] font-bold tracking-wide mt-6"
            >
              Sequence Calibration in Progress...
            </motion.p>
          </div>

          {/* Corner accents */}
          <div className="absolute top-10 left-10 border-l border-t border-brand-gold/30 w-12 h-12" />
          <div className="absolute bottom-10 right-10 border-r border-b border-brand-gold/30 w-12 h-12" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
