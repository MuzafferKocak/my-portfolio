import { NextIntlClientProvider } from "next-intl";
import en from "../../messages/en.json";
import de from "../../messages/de.json";
import tr from "../../messages/tr.json";

const messagesMap = { en, de, tr };

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const messages = messagesMap[locale] || messagesMap["en"];

  return (
    <html lang={locale in messagesMap ? locale : "en"}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
