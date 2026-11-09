import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
