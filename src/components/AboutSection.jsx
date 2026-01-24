"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("About");

  const TAB_DATA = [
    {
      title: t("skills.title"),
      id: "skills",
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
      title: t("education.title"),
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>{t("education.js")}</li>
          <li>{t("education.frontend")}</li>
          <li>{t("education.backend")}</li>
        </ul>
      ),
    },
    {
      title: t("certifications.title"),
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>
            <Link
              href={t("certifications.udemyJs")}
              target="_blank"
              className="hover:text-green-400 hover:underline"
            >
              JavaScript
            </Link>
          </li>
          <li>
            <Link
              href={t("certifications.webDev")}
              target="_blank"
              className="hover:text-green-400 hover:underline"
            >
              Web Development Essential
            </Link>
          </li>
          <li>
            <Link
              href={t("certifications.react")}
              target="_blank"
              className="hover:text-green-400 hover:underline"
            >
              Web Development with React
            </Link>
          </li>
          <li>
            <Link
              href={t("certifications.backend")}
              target="_blank"
              className="hover:text-green-400 hover:underline"
            >
              Backend Development
            </Link>
          </li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-10 sm:py-12 xl:px-6">
        <Image
          src="/images/computer.webp"
          alt="Image"
          width={550}
          height={550}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-[#adb7be] text-base lg:text-lg mb-1">
            {t("description1")}
          </p>
          <p className="text-[#adb7be] text-base lg:text-lg mb-2">
            {t("description2")}
          </p>
          <p className="text-[#adb7be] text-base lg:text-lg mb-4">
            {t("description3")}
          </p>

          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-8 min-h-[130px]">
            {TAB_DATA.find((tItem) => tItem.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
