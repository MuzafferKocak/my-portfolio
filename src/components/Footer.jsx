import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex items-center justify-end gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#dde775]">
          <Image
            src="/images/mek.png"
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

        <p className="text-slate-600">
          &copy; {currentYear} {t("rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
