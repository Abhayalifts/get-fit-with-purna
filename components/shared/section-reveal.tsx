"use client";

import {motion} from "framer-motion";
import {ReactNode} from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  y = 32,
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{opacity: 0, y}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.7, ease: "easeOut", delay}}
      className={className}
    >
      {children}
    </motion.div>
  );
}