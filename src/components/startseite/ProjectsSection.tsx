import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectItem from "./ProjectItem";

type Project = {
  id: string;
  image: string;
  gitUrl: string;
  previewUrl: string;
};

const projects: Project[] = [
  {
    id: "blog",
    image: "/images/projects/myBlog.png",
    gitUrl: "https://github.com/MuzafferKocak/milestone-blog-app",
    previewUrl: "https://blog-app-murex-two.vercel.app/",
  },
  {
    id: "disney",
    image: "/images/projects/disney.png",
    gitUrl: "https://github.com/MuzafferKocak/disney-clone",
    previewUrl: "https://disney-clone-livid-seven.vercel.app/",
  },
  {
    id: "dashboard",
    image: "/images/projects/dashboard.png",
    gitUrl: "https://github.com/MuzafferKocak/dashboard",
    previewUrl: "https://dashboard-blue-three.vercel.app/",
  },
  {
    id: "movie",
    image: "/images/projects/movie-app.png",
    gitUrl: "https://github.com/MuzafferKocak/movie-app",
    previewUrl: "https://movie-app-omega-woad.vercel.app/",
  },
  {
    id: "netflix",
    image: "/images/projects/netflix-app.png",
    gitUrl: "https://github.com/MuzafferKocak/netflix-app",
    previewUrl: "https://netflix-app-u4o2.vercel.app/",
  },
  {
    id: "stock",
    image: "/images/projects/stockApp.jpeg",
    gitUrl: "https://github.com/MuzafferKocak/my-stock",
    previewUrl: "https://my-stock-flame.vercel.app/",
  },
];

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <Section id="projects">
      <SectionHeading>{t("title")}</SectionHeading>

      <ul className="mt-10 divide-y divide-border">
        {projects.map((project) => {
          const title = t(`items.${project.id}.title`);
          return (
            <ProjectItem
              key={project.id}
              title={title}
              description={t(`items.${project.id}.description`)}
              imgUrl={project.image}
              imgAlt={t("screenshotAlt", { title })}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              liveLabel={t("live")}
              codeLabel={t("code")}
            />
          );
        })}
      </ul>
    </Section>
  );
}
