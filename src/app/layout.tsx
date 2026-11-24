import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  // Nur Ersatz, falls keine Sprache greift. Die echten Texte setzt [locale]/layout.tsx.
  title: "Muzaffer Kocak",
  description: "Full stack developer portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
