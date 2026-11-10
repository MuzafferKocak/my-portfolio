import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="footer border z-10 border-t-border border-l-transparent border-r-transparent text-foreground bg-surface bg-opacity-100">
      <div className="container p-8 flex items-center justify-end gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
          <Image
            src="/images/mek.jpeg"
            alt="Logo"
            width={48}
            height={48}
            className="object-cover"
            style={{
              objectFit: "cover",
              aspectRatio: "1/1",
            }}
          />
        </div>

        <p className="text-subtle">
          &copy; {currentYear} {t("rights")}
        </p>
      </div>
    </footer>
  );
}
