"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 1.25rem)" },
};

type TabButtonProps = {
  id: string;
  controls: string;
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
};

// Nur der aktive Tab ist mit der Tab-Taste erreichbar, zwischen den Tabs
// wechselt man mit den Pfeiltasten (das steuert die Tab-Leiste).
export default function TabButton({
  id,
  controls,
  active,
  selectTab,
  children,
}: TabButtonProps) {
  const buttonClasses = active ? "text-foreground" : "text-muted";

  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={active}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      onClick={selectTab}
      // py-0.5: die Tippfläche wird 44px hoch (Empfehlung fürs Handy)
      className="py-0.5"
    >
      <span
        className={`mr-5 block text-lg font-semibold hover:text-foreground ${buttonClasses}`}
      >
        {children}
      </span>
      <motion.span
        aria-hidden="true"
        animate={active ? "active" : "default"}
        variants={variants}
        className="mr-5 mt-2 block h-[4px] bg-accent"
      />
    </button>
  );
}
