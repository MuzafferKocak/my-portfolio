"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Container from "@/components/ui/Container";
import NavLink from "./NavLink";
import MenuOverlay, { type NavItem } from "./MenuOverlay";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const t = useTranslations("Navbar");

  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";

  const navLinks: NavItem[] = [
    { title: t("about"), path: "#about" },
    { title: t("skills"), path: "#skills" },
    { title: t("projects"), path: "#projects" },
    { title: t("contact"), path: "#contact" },
  ];

  const handleLinkClick = () => setNavbarOpen(false);

  // Offenes Handy-Menü schließt mit Escape, der Fokus geht zurück zum Knopf
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!navbarOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNavbarOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [navbarOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-10 border-b border-border bg-secondary">
      <Container className="flex items-center justify-between py-2">
        {/* Logo-Platte und Name */}
        <Link
          href={`/${locale}`}
          onClick={handleLinkClick}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/mek.jpeg"
            alt=""
            priority
            width={1199}
            height={1312}
            className="h-12 w-auto rounded-sm"
          />
          {/* Auf dem Handy unsichtbar, aber für Screenreader der Name des Links */}
          <span className="sr-only font-display text-xl text-foreground sm:not-sr-only">
            Muzaffer Kocak
          </span>
        </Link>

        {/* Mobile hamburger */}
        <div className="block md:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label={navbarOpen ? t("menuClose") : t("menuOpen")}
            aria-expanded={navbarOpen}
            aria-controls="mobile-menu"
            className="flex items-center rounded border border-border px-3 py-2 text-muted hover:border-accent hover:text-accent"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={handleLinkClick}
                />
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </Container>

      {/* Mobile overlay menu */}
      {navbarOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-secondary md:hidden"
        >
          <MenuOverlay links={navLinks} closeMenu={handleLinkClick} />
        </div>
      )}
    </nav>
  );
}
