import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";

const ProjectsCard = ({
  title,
  des,
  src,
  githubLink,
  websiteLink,
  tehcnologies,
}) => {
  return (
    <div className="relative flex flex-col gap-6 w-full p-3 sm:pb-[80px]  h-auto rounded-lg shadow-shadowOne  bg-gradient-to-r from-gradientStart to-gradientEnd  group hover:bg-gradient-to-b hover:from-hoverGradientStart hover:hoverGradientEnd transition-colors duration-1000">
      <h3 className="text-center text-lg uppercase text-title font-bold tracking-wider">
        {title}
      </h3>

      <div className="w-full self-center h-60 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-contain group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={src}
        />
      </div>

      <div className="flex gap-5 self-center">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <BsGithub className="link-button" />
        </a>

        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          <FaPlayCircle className="link-button" />
        </a>
      </div>

      <p className="text-l tracking-wide  text-content">{des}</p>

      <ul className="sm:absolute bottom-5 flex flex-wrap gap-8  ">
        {tehcnologies?.map((skill) => (
          <li key={skill}>
            <img
              src={`/skills/${skill}.svg`}
              alt={skill}
              title={skill}
              width={40}
              height={40}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsCard;
