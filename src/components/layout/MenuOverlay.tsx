"use client";

import NavLink from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";

export type NavItem = { title: string; path: string };

type MenuOverlayProps = {
  links: NavItem[];
  closeMenu: () => void;
};

export default function MenuOverlay({ links, closeMenu }: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center space-y-1">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink href={link.path} title={link.title} onClick={closeMenu} />
        </li>
      ))}
      <li className="mt-4">
        <LanguageSwitcher />
      </li>
    </ul>
  );
}
