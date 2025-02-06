"use client"
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Milestone-Blog-App",
    description: "Blog-App is a modern and fully responsive blogging platform built with React, MUI, and Redux Toolkit for seamless state management. The backend is custom-developed using Node.js, Express, and MongoDB, ensuring high performance and scalability. Users can create, edit, and manage blog posts efficiently while enjoying a sleek, intuitive UI. With optimized SEO and a dynamic architecture, Blog-App delivers a fast and engaging experience across all devices.",
    image: "/images/projects/myBlog.png",
    gitUrl: "https://github.com/MuzafferKocak/milestone-blog-app",
    previewUrl: "https://blog-app-murex-two.vercel.app/",
  },
  {
    id: 2,
    title: "Movie-App",
    description: "Movie-App is a modern movie application built with React, Tailwind CSS, Firebase, React Router, and Context API. Users can explore popular movies, add them to favorites, and access detailed information. It offers a fast, sleek, and user-friendly interface.",
    image: "/images/projects/movie-app.png",
    gitUrl: "https://github.com/MuzafferKocak/movie-app",
    previewUrl: "https://movie-app-omega-woad.vercel.app/",
  },
  {
    id: 3,
    title: "Netflix-App",
    description: "Netflix-App is a modern movie and TV show platform built with Next.js and Tailwind CSS. Users can explore popular content, access details, and enjoy a seamless user experience. With its fast, dynamic, and responsive design, it delivers excellent performance on all devices.",
    image: "/images/projects/netflix-app.png",
    gitUrl: "https://github.com/MuzafferKocak/netflix-app",
    previewUrl: "https://netflix-app-u4o2.vercel.app/",
  },
  {
    id:4,
    title: "",
    description: "",
    image: "",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id:5,
    title: "",
    description: "",
    image: "",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id:6,
    title: "",
    description: "",
    image: "",
    gitUrl: "",
    previewUrl: "",
  },
];



const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="lg:py-16" id="projects" >
      <h2 className="text-center text-4xl font-bold text-white mb-4 mt-4 md:mb-8">My Projects</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
           key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
