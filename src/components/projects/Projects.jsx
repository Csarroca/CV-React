import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 section-border">
      <div className="flex items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects.map(
          ({ des, githubLink, src, title, websiteLink, technologies }) => (
            <ProjectsCard
              des={des}
              githubLink={githubLink}
              src={src}
              title={title}
              websiteLink={websiteLink}
              key={title}
              tehcnologies={technologies}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default Projects;
