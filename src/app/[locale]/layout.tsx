import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Figtree, Young_Serif } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Beide Schriften werden beim Bauen geladen und von der eigenen Seite ausgeliefert.
// latin-ext ist nötig für türkische Zeichen (ğ, ş, ı, İ).
const display = Young_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

// Titel (Browser-Tab, Google) und Beschreibung in der gewählten Sprache.
// openGraph sorgt für eine ordentliche Vorschau beim Teilen, z. B. auf LinkedIn.
export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  // Vorschaubild beim Teilen: Bildschirmfoto des Hero je Sprache (1200x630)
  const image = {
    url: `/images/og/og-${locale}.jpg`,
    width: 1200,
    height: 630,
    alt: t("title"),
  };

  return {
    // Damit Dienste wie LinkedIn den vollen Link zum Bild bekommen
    metadataBase: new URL("https://muzaffer-kocak.vercel.app"),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [image],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Ohne JavaScript startet ui/Reveal nie: Inhalt trotzdem zeigen */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
