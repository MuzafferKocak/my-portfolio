import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

type Skill = { name: string; icon: string };

type Group = {
  id: "frontend" | "backend" | "tools";
  skills: Skill[];
};

const groups: Group[] = [
  {
    id: "frontend",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Redux", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Material UI", icon: "mui" },
      { name: "SASS", icon: "sass" },
      { name: "Styled Components", icon: "styledcomponents" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Cypress", icon: "cypress" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

export default function TechStack() {
  const t = useTranslations("TechStack");

  return (
    <Section id="skills" tone="surface">
      <SectionHeading>{t("title")}</SectionHeading>

      <div className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
        {groups.map((group) => (
          <div
            key={group.id}
            className="grid gap-5 py-8 md:grid-cols-12 md:gap-8"
          >
            <h3 className="text-2xl md:col-span-3">{t(`groups.${group.id}`)}</h3>

            <ul className="flex flex-wrap gap-x-4 gap-y-6 md:col-span-9">
              {group.skills.map((skill) => (
                <li
                  key={skill.icon}
                  className="flex w-[4.5rem] flex-col items-center gap-2 text-center sm:w-24"
                >
                  <Image
                    src={`/skills/${skill.icon}.svg`}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                  <span className="text-sm font-medium leading-tight">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
