"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Section from "@/components/ui/Section";

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
      <div className="relative grid gap-8 md:grid-cols-2">
      <div
        className="
  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
  from-secondary to-transparent
  rounded-full
  blur-2xl
  absolute
  left-2 transform -translate-x-1/2 h-48 w-48 top-[88%] sm:h-64 sm:w-64 sm:top-[82%] md:h-80 md:w-80 md:top-[78%] lg:h-96 lg:w-96 lg:top-[72%]
"
      ></div>

      <div>
        <h5 className="text-xl font-bold text-foreground my-2">{t("title")}</h5>

        <p className="text-muted mb-4 max-w-md">{t("desc")}</p>

        <div className="flex flex-row gap-2">
          <Link href="https://github.com/MuzafferKocak" target="_blank">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent-dark transition-all duration-300">
              <Image
                src="/github-icon.svg"
                alt="GitHub Icon"
                width={48}
                height={48}
              />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/muzaffer-kocak/"
            target="_blank"
          >
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent-dark transition-all duration-300">
              <Image
                src="/linkedin-icon.svg"
                alt="Linkedin Icon"
                width={48}
                height={48}
              />
            </div>
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-accent-dark text-sm mt-2">{t("success")}</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <Input
              label={t("form.email")}
              name="email"
              type="email"
              required
              placeholder={t("form.emailPlaceholder")}
            />

            <Input
              label={t("form.subject")}
              name="subject"
              type="text"
              required
              placeholder={t("form.subjectPlaceholder")}
            />

            <Input
              multiline
              label={t("form.message")}
              name="message"
              required
              placeholder={t("form.messagePlaceholder")}
            />

            {hasError && (
              <p role="alert" className="text-danger text-sm mb-3">
                {t("error")}
              </p>
            )}
            <Button type="submit" disabled={isSending}>
              {isSending ? t("form.sending") : t("form.send")}
            </Button>
          </form>
        )}
      </div>
      </div>
    </Section>
  );
}
