import React from "react";
import ProjectCard from "./ProjectCard";
import wanderlustImg from "../../assets/wanderlust.png";
import krishiImg from "../../assets/krishicare.png";
import portfolioImg from "../../assets/portfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "Wanderlust",
      main:
        "Travel booking platform enabling users to book and host vacation stays with secure authentication, dynamic search filters, and RESTful API backend.",
      demoLink: "https://example.com/demo-wanderlust",
      sourceLink: "https://example.com/source-wanderlust",
      image: wanderlustImg,
    },
    {
      title: "Krishi Care",
      main:
        "Web app connecting farmers directly with consumers to eliminate middlemen, featuring crop listing, user authentication, and scalable MERN stack backend.",
      demoLink: "https://example.com/demo-krishicare",
      sourceLink: "https://example.com/source-krishicare",
      image: krishiImg,
    },
    {
      title: "Portfolio",
      main:
        "Personal portfolio website showcasing skills, projects, and contact info with fast build using React and Vite and styled using Tailwind CSS.",
      demoLink: "https://example.com/demo-portfolio",
      sourceLink: "https://example.com/source-portfolio",
      image: portfolioImg,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      <h2 className="text-white text-3xl mb-6 font-bold">Projects</h2>
      <div className="flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            title={proj.title}
            main={proj.main}
            demoLink={proj.demoLink}
            sourceLink={proj.sourceLink}
            image={proj.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
