"use client";
import React from "react";
import NavLink from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <ul className="flex flex-col py-4 items-center space-y-1">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} onClick={closeMenu} />
        </li>
      ))}
      <li className="mt-4">
        <LanguageSwitcher />
      </li>
    </ul>
  );
};

export default MenuOverlay;
