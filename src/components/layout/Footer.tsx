import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-secondary text-foreground">
      <Container className="flex items-center gap-4 py-8">
        <Image
          src="/images/mek.jpeg"
          alt="MEK"
          width={1199}
          height={1312}
          className="h-11 w-auto rounded-sm"
        />

        <p className="text-muted">
          &copy; {currentYear} Muzaffer Kocak. {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
