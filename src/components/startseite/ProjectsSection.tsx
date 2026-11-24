import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectItem from "./ProjectItem";
import ProjectCard from "./ProjectCard";

type Project = {
  id: string;
  image: string;
  gitUrl: string;
  previewUrl: string;
  // Nur wenn das Backend in einem eigenen Repository liegt
  backendUrl?: string;
  // Technik laut package.json des jeweiligen Projekts
  tags: string[];
};

// Hauptprojekte: groß als Zeile. Reihenfolge = Wichtigkeit.
const featured: Project[] = [
  {
    id: "blog",
    image: "/images/projects/myBlog.png",
    gitUrl: "https://github.com/MuzafferKocak/milestone-blog-app",
    previewUrl: "https://blog-app-murex-two.vercel.app/",
    backendUrl: "https://github.com/MuzafferKocak/MyBlogApi",
    tags: ["React", "Redux Toolkit", "Material UI", "Formik", "Yup", "Node.js", "Express", "MongoDB", "JWT", "Swagger"],
  },
  {
    id: "stock",
    image: "/images/projects/stockApp.jpeg",
    gitUrl: "https://github.com/MuzafferKocak/my-stock",
    previewUrl: "https://my-stock-flame.vercel.app/",
    tags: ["React", "Redux Toolkit", "Material UI", "MUI Charts", "Formik", "Yup"],
  },
  {
    id: "dashboard",
    image: "/images/projects/dashboard.png",
    gitUrl: "https://github.com/MuzafferKocak/dashboard",
    previewUrl: "https://dashboard-blue-three.vercel.app/",
    tags: ["Next.js", "Material UI", "Nivo", "FullCalendar", "jsPDF"],
  },
];

// Weitere Projekte: kleine Karten
const more: Project[] = [
  {
    id: "disney",
    image: "/images/projects/disney.png",
    gitUrl: "https://github.com/MuzafferKocak/disney-clone",
    previewUrl: "https://disney-clone-livid-seven.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "TMDB API"],
  },
  {
    id: "movie",
    image: "/images/projects/movie-app.png",
    gitUrl: "https://github.com/MuzafferKocak/movie-app",
    previewUrl: "https://movie-app-omega-woad.vercel.app/",
    tags: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: "netflix",
    image: "/images/projects/netflix-app.png",
    gitUrl: "https://github.com/MuzafferKocak/netflix-app",
    previewUrl: "https://netflix-app-u4o2.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  // Gemeinsame Angaben für Zeile und Karte
  const propsFor = (project: Project) => {
    const title = t(`items.${project.id}.title`);
    return {
      title,
      description: t(`items.${project.id}.description`),
      tags: project.tags,
      imgUrl: project.image,
      imgAlt: t("screenshotAlt", { title }),
      gitUrl: project.gitUrl,
      previewUrl: project.previewUrl,
      liveLabel: t("live"),
      codeLabel: t("code"),
    };
  };

  return (
    <Section id="projects">
      <SectionHeading>{t("title")}</SectionHeading>

      <ul className="mt-10 divide-y divide-border">
        {featured.map((project) => (
          <ProjectItem
            key={project.id}
            {...propsFor(project)}
            backendUrl={project.backendUrl}
            backendLabel={t("backend")}
          />
        ))}
      </ul>

      <h3 className="mt-20 text-3xl">{t("more")}</h3>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {more.map((project, index) => (
          <li key={project.id}>
            <Reveal className="h-full" delay={index * 0.1}>
              <ProjectCard {...propsFor(project)} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
