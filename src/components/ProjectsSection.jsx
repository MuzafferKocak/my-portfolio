"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Milestone-Blog-App",
    description:
      "Blog-App is a modern and fully responsive blogging platform built with React, MUI, and Redux Toolkit for seamless state management. The backend is custom-developed using Node.js, Express, and MongoDB, ensuring high performance and scalability. Users can create, edit, and manage blog posts efficiently while enjoying a sleek, intuitive UI. With optimized SEO and a dynamic architecture, Blog-App delivers a fast and engaging experience across all devices.",
    image: "/images/projects/myBlog.png",
    gitUrl: "https://github.com/MuzafferKocak/milestone-blog-app",
    previewUrl: "https://blog-app-murex-two.vercel.app/",
  },
  {
    id: 2,
    title: "Movie-App",
    description:
      "Movie-App is a modern movie application built with React, Tailwind CSS, Firebase, React Router, and Context API. Users can explore popular movies, add them to favorites, and access detailed information. It offers a fast, sleek, and user-friendly interface.",
    image: "/images/projects/movie-app.png",
    gitUrl: "https://github.com/MuzafferKocak/movie-app",
    previewUrl: "https://movie-app-omega-woad.vercel.app/",
  },
  {
    id: 3,
    title: "Netflix-App",
    description:
      "Netflix-App is a modern movie and TV show platform built with Next.js and Tailwind CSS. Users can explore popular content, access details, and enjoy a seamless user experience. With its fast, dynamic, and responsive design, it delivers excellent performance on all devices.",
    image: "/images/projects/netflix-app.png",
    gitUrl: "https://github.com/MuzafferKocak/netflix-app",
    previewUrl: "https://netflix-app-u4o2.vercel.app/",
  },
  {
    id: 4,
    title: "Stock-App",
    description:
      "My Stock is an intuitive inventory management tool for users to efficiently manage their stock. With features like product, brand, and company data management, along with sales and purchasing tracking, users can easily create accounts, add and edit products, and monitor their inventory.",
    image: "/images/projects/stockApp.jpeg",
    gitUrl: "https://github.com/MuzafferKocak/my-stock",
    previewUrl: "https://my-stock-flame.vercel.app/",
  },
  {
    id: 5,
    title: "Store-App",
    description:
      "Store App is a TypeScript-powered application where users can explore products, view their prices, and add them to a favorites list. The app provides a simple yet functional interface for managing favorite items and ensuring a smooth experience.",
    image: "/images/projects/store-app.png",
    gitUrl: "https://github.com/MuzafferKocak/store-app",
    previewUrl: "https://store-app-plum.vercel.app/",
  },
  {
    id: 6,
    title: "Mek-Store",
    description:
      "Mek-Store is a basic product showcase website created with React and Tailwind CSS. It features a simple design where users can view products and their prices in a responsive layout.",
    image: "/images/projects/mek-store.png",
    gitUrl: "https://github.com/MuzafferKocak/mek-store",
    previewUrl: "https://mek-store.vercel.app/",
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
    <section className="lg:py-16" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-4 mt-4 md:mb-8">
        My Projects
      </h2>
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
