import type { ReactNode } from "react";

type PlateFrameProps = {
  children: ReactNode;
  className?: string;
};

// Vier Schrauben in den Ecken, wie auf der Logo-Platte
const screwPositions = [
  "left-2.5 top-2.5",
  "right-2.5 top-2.5",
  "bottom-2.5 left-2.5",
  "bottom-2.5 right-2.5",
];

export default function PlateFrame({
  children,
  className = "",
}: PlateFrameProps) {
  return (
    <div
      className={`relative rounded-md border border-border bg-secondary p-6 ${className}`}
    >
      {screwPositions.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`absolute size-2.5 rounded-full bg-accent ${position}`}
        >
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 rotate-45 bg-secondary" />
        </span>
      ))}
      {children}
    </div>
  );
}
