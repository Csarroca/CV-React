import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { jobExperience } from "../../data/data";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {jobExperience.map((experience) => (
            <ResumeCard
              key={experience.title}
              title={experience.title}
              subTitle={experience.subTitle}
              des={experience.description}
              link={experience.link}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
