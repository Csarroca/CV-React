import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <div className="flex gap-4">
          <a
            href="https://github.com/Csarroca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon text-githubColor">
              <SiGithub />
            </span>
          </a>
          <a href="mailto:sarroca93@gmail.com">
            <span className="bannerIcon text-mailColor">
              <SiGmail />
            </span>
          </a>
          <a
            href="linkedin.com/in/csarroca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon text-linkedinColor">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
