"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
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

  return (
    <nav className="fixed inset-x-0 top-0 z-10 border-b border-border bg-secondary">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo-Platte und Name */}
        <Link
          href={`/${locale}`}
          onClick={handleLinkClick}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/mek.jpeg"
            alt="MEK"
            priority
            width={44}
            height={48}
            className="h-12 w-auto rounded-sm"
          />
          <span className="hidden font-display text-xl text-foreground sm:block">
            Muzaffer Kocak
          </span>
        </Link>

        {/* Mobile hamburger */}
        <div className="block md:hidden">
          <button
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Menu"
            aria-expanded={navbarOpen}
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
      </div>

      {/* Mobile overlay menu */}
      {navbarOpen && (
        <div className="border-t border-border bg-secondary md:hidden">
          <MenuOverlay links={navLinks} closeMenu={handleLinkClick} />
        </div>
      )}
    </nav>
  );
}
