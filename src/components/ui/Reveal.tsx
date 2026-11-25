"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

// Blendet den Inhalt einmal sanft ein, sobald er beim Scrollen ins Bild kommt.
// Bei "Bewegung reduzieren" oder ohne JavaScript ist der Inhalt sofort da:
// Das regeln globals.css und der <noscript>-Block im Layout über data-reveal.
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        data-reveal
        className={className}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
