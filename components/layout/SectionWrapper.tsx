"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, organicReveal } from "@/components/animations/variants";

interface SectionWrapperProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
}

export function SectionWrapper({ children, className, id, ...props }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className={cn("py-16 md:py-24", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
