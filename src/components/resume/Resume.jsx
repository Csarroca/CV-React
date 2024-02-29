import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import { downloads } from "../../assets/downloads/downloads";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [experienceData, setExperienceData] = useState(true);

  return (
    <section id="resume" className="w-full py-20 section-border">
      <div className="flex items-center text-center">
        <Title des="My Resume" />
      </div>
      <div className="flex flex-col-reverse lg:place-content-between lg:flex-row ">
        <div className="md:w-1/2">
          <ul className="w-full md:w-auto grid grid-cols-1 md:grid-cols-2">
            <li
              onClick={() => setEducationData(false) & setExperienceData(true)}
              className={`${
                experienceData
                  ? "border-headers rounded-lg"
                  : "border-transparent"
              } resumeLi text-title`}
            >
              Experience
            </li>
            <li
              onClick={() => setEducationData(true) & setExperienceData(false)}
              className={`${
                educationData
                  ? "border-headers rounded-lg"
                  : "border-transparent"
              } resumeLi text-title`}
            >
              Education
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <a href={downloads.cv} target="_blank" rel="noopener noreferrer">
            <span className="resumeIcon text-title">Download CV </span>
          </a>
        </div>
      </div>
      {experienceData && <WorkExperience />}
      {educationData && <Education />}
    </section>
  );
};

export default Resume;
