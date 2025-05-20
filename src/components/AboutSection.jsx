"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>JavaScript</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Frontend Development</li>
        <li>Backend Development</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link
            href="https://www.udemy.com/certificate/UC-c5f6c583-1033-4670-8a3f-f0d58bb9bed1/"
            target="_blank"
            className="hover:text-green-400 hover:underline"
          >
            JavaScript
          </Link>
        </li>
        <li>
          <Link
            href="https://verified.sertifier.com/en/verify/90012100016317/"
            target="_blank"
            className="hover:text-green-400 hover:underline"
          >
            Web Development Essential
          </Link>
        </li>
        <li>
          <Link
            href="https://verified.sertifier.com/en/verify/45370841524901/"
            target="_blank"
            className="hover:text-green-400 hover:underline"
          >
            Web Development with React
          </Link>
        </li>
        <li>
          <Link
            href="https://verified.sertifier.com/en/verify/97928880125438/"
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

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:py-14" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-10 sm:py-12 xl:px-6">
        <Image
          src="/images/computer.webp"
          alt="Image"
          width={550}
          height={550}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-[#adb7be] text-base lg:text-lg mb-1">
            I am a passionate Full Stack Web Developer with a focus on creating
            interactive and responsive web applications. My expertise includes
            JavaScript, React, Next.js, Redux, Node.js, Express, MongoDB,
            Sequelize, HTML, CSS, Tailwind, MUI, Bootstrap and Git.
          </p>
          <p className="text-[#adb7be] text-base lg:text-lg mb-2">
            I thrive on challenges and am always eager to expand my knowledge.
            Collaboration is key to building great applications, and I'm excited
            to contribute to innovative projects and grow in a dynamic
            environment.
          </p>
          <p className="text-[#adb7be] text-base lg:text-lg mb-4">
            Having transitioned from a background in CNC machining and
            engineering, I now channel my passion for problem-solving into full
            stack development. This diverse experience gives me a unique
            perspective on tackling challenges in tech.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 min-h-[130px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
