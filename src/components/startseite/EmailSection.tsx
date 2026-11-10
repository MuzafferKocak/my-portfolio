"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MuzafferKocak",
    icon: "/github-icon.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muzaffer-kocak/",
    icon: "/linkedin-icon.svg",
  },
];

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [hasError, setHasError] = useState(false);

  const t = useTranslations("Email");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setIsSending(true);
    setHasError(false);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" tone="secondary">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading>{t("title")}</SectionHeading>

          <p className="mt-6 max-w-md text-lg text-muted">{t("desc")}</p>
          <p className="mt-4 max-w-md text-lg text-foreground">
            {t("remote")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={link.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 group-hover:invert"
                />
                {link.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Das Formular steht auf einer hellen Fläche */}
        <div className="lg:col-span-7">
          <div className="rounded-md bg-surface p-6 text-ink sm:p-8">
            {emailSubmitted ? (
              <p role="status" className="py-6 font-display text-3xl">
                {t("success")}
              </p>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <Input
                  tone="light"
                  label={t("form.email")}
                  name="email"
                  type="email"
                  required
                  placeholder={t("form.emailPlaceholder")}
                />

                <Input
                  tone="light"
                  label={t("form.subject")}
                  name="subject"
                  type="text"
                  required
                  placeholder={t("form.subjectPlaceholder")}
                />

                <Input
                  tone="light"
                  multiline
                  rows={5}
                  label={t("form.message")}
                  name="message"
                  required
                  placeholder={t("form.messagePlaceholder")}
                />

                {hasError && (
                  <p role="alert" className="mb-3 text-sm text-danger-dark">
                    {t("error")}
                  </p>
                )}
                <Button type="submit" disabled={isSending} className="sm:w-fit">
                  {isSending ? t("form.sending") : t("form.send")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
