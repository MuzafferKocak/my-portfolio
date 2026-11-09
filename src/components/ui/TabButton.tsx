"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
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
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button type="button" onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-[4px] bg-green-400 mt-2 mr-3"
      />
    </button>
  );
}
