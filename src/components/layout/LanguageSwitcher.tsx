"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { useLocale, useTranslations } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";

// Name jeder Sprache in der Sprache selbst (für Screenreader)
const languageNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  tr: "Türkçe",
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Navbar");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Offenes Menü schließt mit Escape und beim Klick daneben
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const changeLang = (locale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        className="block rounded p-1"
        onClick={() => setOpen(!open)}
        aria-label={t("language")}
        aria-expanded={open}
      >
        <GlobeAltIcon
          className="h-6 w-6 text-muted hover:text-accent"
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul className="absolute right-0 z-50 mt-2 min-w-[80px] rounded border border-border bg-primary-light shadow-lg md:min-w-[90px]">
          {routing.locales.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                lang={locale}
                aria-current={locale === currentLocale ? "true" : undefined}
                onClick={() => changeLang(locale)}
                className="flex w-full items-center gap-2 px-3 py-2 text-foreground hover:bg-secondary aria-[current=true]:font-semibold"
              >
                <Image
                  src={`/flags/${locale}.png`}
                  width={20}
                  height={20}
                  alt=""
                  className="h-auto w-5"
                />
                <span aria-hidden="true">{locale.toUpperCase()}</span>
                <span className="sr-only">{languageNames[locale]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
