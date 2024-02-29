import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center section-border"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
