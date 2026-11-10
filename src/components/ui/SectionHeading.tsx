import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

// Die Farbe wird vom Abschnitt (Section) vererbt, deshalb keine eigene hier.
export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2 className={`text-4xl sm:text-5xl ${className}`}>{children}</h2>
  );
}
