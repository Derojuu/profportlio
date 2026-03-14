"use client";

import { motion } from "framer-motion";

interface ElementProps {
  delay: number;
  duration: number;
  size: number;
  initialX: string;
  initialY: string;
  color: string;
}

const FloatingCell = ({ delay, duration, size, initialX, initialY, color }: ElementProps) => (
  <motion.div
    initial={{ x: initialX, y: initialY, opacity: 0 }}
    animate={{ 
      x: ["-10%", "10%", "-5%", "5%", "-10%"],
      y: ["-10%", "5%", "15%", "-5%", "-10%"],
      opacity: [0.1, 0.2, 0.15, 0.2, 0.1],
      rotate: [0, 90, 180, 270, 360],
      scale: [1, 1.1, 0.9, 1.05, 1]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute rounded-full pointer-events-none blur-sm"
    style={{ 
      width: size, 
      height: size, 
      backgroundColor: color,
      filter: "blur(4px)"
    }}
  />
);

const MolecularLink = ({ delay, duration, size, initialX, initialY }: ElementProps) => (
  <motion.div
    initial={{ x: initialX, y: initialY, opacity: 0, rotate: 0 }}
    animate={{ 
      x: ["0%", "5%", "-5%", "0%"],
      y: ["0%", "-5%", "5%", "0%"],
      opacity: [0.05, 0.1, 0.08, 0.1, 0.05],
      rotate: [0, 45, -45, 0]
    }}
    transition={{ 
      duration: duration * 1.5, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear"
    }}
    className="absolute pointer-events-none"
    style={{ width: size, height: size / 4 }}
  >
    <div className="flex items-center justify-between w-full h-full">
      <div className="w-2 h-2 rounded-full border border-brand-gold/30" />
      <div className="flex-1 h-[1px] bg-brand-gold/10 mx-1" />
      <div className="w-1 h-1 rounded-full border border-brand-gold/20" />
    </div>
  </motion.div>
);

export function MicroBackground() {
  const seeded = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const cells = Array.from({ length: 15 }).map((_, i) => (
    <FloatingCell
      key={`cell-${i}`}
      delay={i * 2}
      duration={20 + i * 5}
      size={20 + seeded(i + 1) * 60}
      initialX={`${seeded(i + 11) * 100}%`}
      initialY={`${seeded(i + 21) * 100}%`}
      color={i % 2 === 0 ? "#eaaf0822" : "#0ea5e911"}
    />
  ));

  const links = Array.from({ length: 8 }).map((_, i) => (
    <MolecularLink
      key={`link-${i}`}
      delay={i * 3}
      duration={30 + i * 10}
      size={100 + seeded(i + 31) * 100}
      initialX={`${seeded(i + 41) * 100}%`}
      initialY={`${seeded(i + 51) * 100}%`}
      color=""
    />
  ));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Subtle organic gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.02)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.03)_0%,transparent_40%)]" />
      
      {cells}
      {links}

      {/* Persistent floating DNA-like curves */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M -100 100 Q 200 300 500 100 T 1100 100"
          stroke="#eaaf08"
          strokeWidth="2"
          fill="none"
          animate={{ d: ["M -100 100 Q 200 300 500 100 T 1100 100", "M -100 150 Q 200 350 500 150 T 1100 150", "M -100 100 Q 200 300 500 100 T 1100 100"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -100 200 Q 300 0 700 200 T 1200 200"
          stroke="#0ea5e9"
          strokeWidth="1"
          fill="none"
          animate={{ d: ["M -100 200 Q 300 0 700 200 T 1200 200", "M -100 150 Q 300 -50 700 150 T 1200 150", "M -100 200 Q 300 0 700 200 T 1200 200"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
