import React from "react";

const ResumeCard = ({ title, subTitle, des, link }) => {
  const desParagraphs = des.split("\n").map((paragraph, index) => (
    <li className="my-0.5 text-sm lgl:text-base" key={index}>
      {paragraph}
    </li>
  ));

  return (
    <div className="w-full group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-gradient-to-r from-gradientStart to-gradientEnd group hover:scale-105 hover:bg-gradient-to-b hover:from-hoverGradientStart hover:hoverGradientEnd transition-colors duration-1000  rounded-lg p-4 lgl:px-10 flex flex-col justify-center shadow-shadowOne py-8">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center my-2">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover: duration-300 text-title">
              {title}
            </h3>
            <p className="text-sm mt-2 mb-6 group-hover: duration-300 text-subtitleColor">
              {subTitle}
            </p>
            <ul className="text-sm mt-2 mb-6 group-hover: duration-300 text-content">
              {desParagraphs}
            </ul>
          </div>
        </div>
        {link ? (
          <a
            className="text-content underline text-l group-hover:duration-300"
            rel="noreferrer"
            target="_blank"
            href={link}
          >
            More details
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ResumeCard;
