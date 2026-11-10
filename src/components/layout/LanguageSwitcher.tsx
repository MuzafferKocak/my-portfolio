"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { routing, type Locale } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (locale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="block"
        onClick={() => setOpen(!open)}
        aria-label="Language"
        aria-expanded={open}
      >
        <GlobeAltIcon className="w-6 h-6 text-muted hover:text-accent" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-primary-light border border-border rounded shadow-lg z-50 min-w-[80px] md:min-w-[90px]">
          {routing.locales.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => changeLang(locale)}
              className="flex items-center gap-2 px-3 py-2 text-foreground hover:bg-border w-full"
            >
              <Image
                src={`/flags/${locale}.png`}
                width={20}
                height={20}
                alt={locale.toUpperCase()}
                className="w-5 h-auto"
              />
              {locale.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
