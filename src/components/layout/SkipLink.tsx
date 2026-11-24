import { useTranslations } from "next-intl";

// Erster Link der Seite: nur sichtbar, wenn man mit der Tab-Taste
// hineinkommt. Springt an der Navigation vorbei zum Hauptinhalt.
export default function SkipLink() {
  const t = useTranslations("Navbar");

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:font-medium focus:text-ink"
    >
      {t("skip")}
    </a>
  );
}
