import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectData } from "../../data/projectData";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            des={project.description}
            src={project.image}
            gitHub={project.gitHub}
            liveLink={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
