import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/components/animations/variants";

interface SectionWrapperProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
}

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, className, id, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
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
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
