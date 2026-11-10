import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-secondary text-foreground">
      <div className="container mx-auto flex items-center justify-end gap-4 px-4 py-8">
        <Image
          src="/images/mek.jpeg"
          alt="MEK"
          width={40}
          height={44}
          className="h-11 w-auto rounded-sm"
        />

        <p className="text-muted">
          &copy; {currentYear} Muzaffer Kocak. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
