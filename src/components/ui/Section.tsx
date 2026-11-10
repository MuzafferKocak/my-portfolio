import type { ReactNode } from "react";
import Container from "./Container";

type Tone = "primary" | "surface" | "secondary";

// Hintergrund und passende Textfarbe je Abschnitt. Der Wechsel der Flächen
// gliedert die Seite.
const toneClasses: Record<Tone, string> = {
  primary: "bg-primary text-foreground",
  surface: "bg-surface text-ink",
  secondary: "bg-secondary text-foreground",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export default function Section({
  id,
  tone = "primary",
  className = "",
  innerClassName = "",
  children,
}: SectionProps) {
  return (
    // scroll-mt: Beim Sprung über die Navigation bleibt der Abschnitt
    // direkt unter der festen Navigationsleiste (65 px hoch).
    <section
      id={id}
      className={`scroll-mt-[65px] ${toneClasses[tone]} ${className}`}
    >
      <Container className={`py-16 lg:py-24 ${innerClassName}`}>
        {children}
      </Container>
    </section>
  );
}
