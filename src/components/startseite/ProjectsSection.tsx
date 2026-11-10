"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ui/ProjectCard";

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

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  const t = useTranslations("Projects");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="scroll-mt-20" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-4 mt-4 md:mb-8">
        {t("title")}
      </h2>

      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              title={t(`items.${project.id}.title`)}
              description={t(`items.${project.id}.description`)}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
