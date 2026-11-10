"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TabButton from "@/components/ui/TabButton";

type TabId = "skills" | "education" | "certifications";

type TabItem = { id: TabId; title: string; content: ReactNode };

const linkClasses = "underline-offset-4 hover:text-accent hover:underline";

export default function AboutSection() {
  const [tab, setTab] = useState<TabId>("skills");
  const t = useTranslations("About");

  const tabs: TabItem[] = [
    {
      id: "skills",
      title: t("skills.title"),
      content: (
        <ul className="list-disc space-y-1 pl-5">
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
        <ul className="list-disc space-y-1 pl-5">
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
        <ul className="list-disc space-y-1 pl-5">
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

  const activeTab = tabs.find((item) => item.id === tab) ?? tabs[0];

  return (
    <Section id="about">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Image
            src="/images/computer.webp"
            alt={t("imageAlt")}
            width={1280}
            height={903}
            sizes="(min-width: 1024px) 460px, 90vw"
            className="aspect-[4/3] w-full rounded-md object-cover"
          />
        </div>

        <div className="lg:col-span-7">
          <SectionHeading>{t("title")}</SectionHeading>

          {/* Zuerst die Geschichte vom CNC zum Code, dann Haltung, dann Werkzeuge */}
          <p className="mt-6 max-w-prose text-xl leading-relaxed text-foreground">
            {t("description3")}
          </p>
          <p className="mt-4 max-w-prose text-lg text-muted">
            {t("description2")}
          </p>
          <p className="mt-4 max-w-prose text-lg text-muted">
            {t("description1")}
          </p>

          <div role="tablist" className="mt-10 flex flex-wrap">
            {tabs.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => setTab(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          <div role="tabpanel" className="mt-6 min-h-[8.5rem] text-muted">
            {activeTab.content}
          </div>
        </div>
      </div>
    </Section>
  );
}
