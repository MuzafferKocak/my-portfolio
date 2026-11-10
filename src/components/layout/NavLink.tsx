"use client";

import Link from "next/link";

type NavLinkProps = {
  href: string;
  title: string;
  onClick?: () => void;
};

export default function NavLink({ href, title, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 pl-3 pr-4 text-muted sm:text-xl rounded md:p-0 hover:text-accent"
    >
      {title}
    </Link>
  );
}
