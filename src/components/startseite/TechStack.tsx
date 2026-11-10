"use client";

import { useTranslations } from "next-intl";

type Skill = { name: string; icon: string };

const skills: Skill[] = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "js" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "ts" },
  { name: "Redux", icon: "redux" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Material UI", icon: "mui" },
  { name: "SASS", icon: "sass" },
  { name: "Styled Components", icon: "styledcomponents" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Python", icon: "python" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Docker", icon: "docker" },
  { name: "Firebase", icon: "firebase" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Cypress", icon: "cypress" },
  { name: "Postman", icon: "postman" },
  { name: "Vite", icon: "vite" },
];

export default function TechStack() {
  const t = useTranslations("TechStack");

  return (
    <section id="skills" className="px-4 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center text-white mb-2 mt-3 md:mb-6">
        {t("title")}
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 border border-[#33353F] rounded-lg p-2">
        {skills.map((skill) => (
          <div
            key={skill.icon}
            className="flex flex-col items-center p-2 bg-[#121212] border border-[#33353F] rounded-lg transition-transform duration-300 hover:rotate-6 hover:scale-105 hover:bg-[#2b2b2bab]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={`${skill.name} logo`}
              className="w-12 h-12"
            />
            <p className="mt-2 text-white text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
