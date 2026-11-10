import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// Gemeinsame Breite und Seitenränder: Navigation, Abschnitte und Footer
// schließen dadurch am gleichen linken Rand ab.
export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`container mx-auto px-6 sm:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
