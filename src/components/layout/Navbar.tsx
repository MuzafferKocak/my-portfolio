"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const t = useTranslations("Navbar");

  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";

  const navLinks = [
    { title: t("about"), path: "#about" },
    { title: t("skills"), path: "#skills" },
    { title: t("projects"), path: "#projects" },
    { title: t("contact"), path: "#contact" },
  ];

  const handleLinkClick = () => setNavbarOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border border-[#33353F] bg-[#121212] bg-opacity-100">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <Link href={`/${locale}`} onClick={handleLinkClick}>
          <Image
            src="/images/mek.png"
            alt="Logo"
            priority
            width={48}
            height={48}
            className="object-cover rounded-full border-2 border-[#dde775]"
            style={{ objectFit: "cover", aspectRatio: "1/1" }}
          />
        </Link>

        {/* Mobile hamburger */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:w-auto items-center gap-6">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
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
        <div className="md:hidden bg-[#121212] border-t border-[#33353F]">
          <MenuOverlay links={navLinks} closeMenu={handleLinkClick} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
