"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 1.25rem)" },
};

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
};

export default function TabButton({
  active,
  selectTab,
  children,
}: TabButtonProps) {
  const buttonClasses = active ? "text-foreground" : "text-muted";

  return (
    <button type="button" role="tab" aria-selected={active} onClick={selectTab}>
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
