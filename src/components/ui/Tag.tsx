import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

// Kleiner Chip für einen Technik-Namen (z. B. "React"). Für dunklen Grund.
export default function Tag({ children }: TagProps) {
  return (
    <li className="rounded-full bg-foreground/5 px-3 py-1 text-sm text-foreground ring-1 ring-foreground/15">
      {children}
    </li>
  );
}
