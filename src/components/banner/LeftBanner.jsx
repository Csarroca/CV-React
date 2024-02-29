import React from "react";
import Media from "./Media";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Sales Representative."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-headers capitalize">Cristian Sarroca</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#58B907"
          />
        </h2>
        <p className="text-content font-bodyFont leading-6 tracking-wide">
          I'm a passionate software developer with a focus on frontend
          development and expertise in web technologies. My professional journey
          spans from building SPA and CRUD API applications with ReactJS and
          NodeJS to crafting efficient solutions using technologies such as
          HTML5, CSS3, ReactJs, Redux-toolkit with RTK query, TypeScript.{" "}
          <br></br> <br></br>
          My 5 years of experience in sales have sharpened my skills in
          problem-solving,resilience and bilingual communication, empowering me
          to excel in diverse international settings with fluency in English.
        </p>
        <div>
          <h2 className="uppercase font-titleFont mb-4 text-title font-bold">
            Find me on
          </h2>
          <Media></Media>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
