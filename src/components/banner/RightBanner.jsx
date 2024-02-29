import React from "react";
import "./Banner.css";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="home__img"></div>
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
