"use client";

import { useState, useTransition, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import TabButton from "@/components/ui/TabButton";

type TabId = "skills" | "education" | "certifications";

type TabItem = { id: TabId; title: string; content: ReactNode };

const linkClasses = "hover:text-accent hover:underline";

export default function AboutSection() {
  const [tab, setTab] = useState<TabId>("skills");
  const [, startTransition] = useTransition();
  const t = useTranslations("About");

  const tabs: TabItem[] = [
    {
      id: "skills",
      title: t("skills.title"),
      content: (
        <ul className="list-disc pl-2">
          <li>{t("skills.react")}</li>
          <li>{t("skills.js")}</li>
          <li>{t("skills.express")}</li>
          <li>{t("skills.mongodb")}</li>
          <li>{t("skills.node")}</li>
        </ul>
      ),
    },
    {
      id: "education",
      title: t("education.title"),
      content: (
        <ul className="list-disc pl-2">
          <li>{t("education.js")}</li>
          <li>{t("education.frontend")}</li>
          <li>{t("education.backend")}</li>
        </ul>
      ),
    },
    {
      id: "certifications",
      title: t("certifications.title"),
      content: (
        <ul className="list-disc pl-2">
          <li>
            <Link
              href={t("certifications.udemyJs")}
              target="_blank"
              className={linkClasses}
            >
              JavaScript
            </Link>
          </li>
          <li>
            <Link
              href={t("certifications.webDev")}
              target="_blank"
              className={linkClasses}
            >
              Web Development Essential
            </Link>
          </li>
          <li>
            <Link
              href={t("certifications.react")}
              target="_blank"
              className={linkClasses}
            >
              Web Development with React
            </Link>
          </li>
          <li>
            <Link
              href={t("certifications.backend")}
              target="_blank"
              className={linkClasses}
            >
              Backend Development
            </Link>
          </li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id: TabId) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = tabs.find((item) => item.id === tab) ?? tabs[0];

  return (
    <section className="text-foreground scroll-mt-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-10 sm:py-12 xl:px-6">
        <Image
          src="/images/computer.webp"
          alt="Image"
          width={550}
          height={550}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("title")}</h2>
          <p className="text-muted text-base lg:text-lg mb-1">
            {t("description1")}
          </p>
          <p className="text-muted text-base lg:text-lg mb-2">
            {t("description2")}
          </p>
          <p className="text-muted text-base lg:text-lg mb-4">
            {t("description3")}
          </p>

          <div className="flex flex-row justify-start mt-8">
            {tabs.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-8 min-h-[130px]">{activeTab.content}</div>
        </div>
      </div>
    </section>
  );
}
