"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TabButton from "@/components/ui/TabButton";
import Reveal from "@/components/ui/Reveal";

type TabId = "education" | "certifications";

type TabItem = { id: TabId; title: string; content: ReactNode };

const linkClasses = "underline-offset-4 hover:text-accent hover:underline";

const tabId = (id: TabId) => `about-tab-${id}`;
const panelId = "about-tabpanel";

export default function AboutSection() {
  const [tab, setTab] = useState<TabId>("education");
  const t = useTranslations("About");

  const tabs: TabItem[] = [
    {
      id: "education",
      title: t("education.title"),
      content: (
        <ul className="list-disc space-y-1 pl-5">
          <li>{t("education.bootcamp")}</li>
          <li>{t("education.cnc")}</li>
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

  // Pfeiltasten wechseln den Tab, Pos1/Ende springen zum ersten/letzten
  const handleTabKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const current = tabs.findIndex((item) => item.id === tab);
    const last = tabs.length - 1;
    let next: number;

    if (e.key === "ArrowRight") next = current === last ? 0 : current + 1;
    else if (e.key === "ArrowLeft") next = current === 0 ? last : current - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;

    e.preventDefault();
    const nextId = tabs[next].id;
    setTab(nextId);
    document.getElementById(tabId(nextId))?.focus();
  };

  return (
    <Section id="about">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <Image
            src="/images/computer.webp"
            alt={t("imageAlt")}
            width={1280}
            height={903}
            sizes="(min-width: 1024px) 460px, 90vw"
            className="aspect-[4/3] w-full rounded-md object-cover"
          />
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.15}>
          <SectionHeading>{t("title")}</SectionHeading>

          {/* Kurz: was aus der Werkstatt mitkommt, dann die Haltung.
              Die Werkzeuge stehen im Abschnitt "Technologien". */}
          <p className="mt-6 max-w-prose text-xl leading-relaxed text-foreground">
            {t("intro")}
          </p>
          <p className="mt-4 max-w-prose text-lg text-muted">{t("text")}</p>

          <div
            role="tablist"
            className="mt-10 flex flex-wrap"
            onKeyDown={handleTabKeyDown}
          >
            {tabs.map((item) => (
              <TabButton
                key={item.id}
                id={tabId(item.id)}
                controls={panelId}
                selectTab={() => setTab(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          <div
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId(activeTab.id)}
            className="mt-6 min-h-[8.5rem] text-muted"
          >
            {activeTab.content}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
