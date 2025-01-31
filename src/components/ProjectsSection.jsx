import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
      id: 1,
      title: "Project 1",
      description: "Project 1 description",
      image: "",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Project 2 description",
      image: "",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Project 3 description",
      image: "",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
]

const ProjectsSection = () => {
  return (
    <>
    <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
    <div></div>
    </>
  )
}

export default ProjectsSection