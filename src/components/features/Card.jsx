import React from "react";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-8 h-fit py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-gradientStart to-gradientEnd group lgl:hover:bg-gradient-to-b lgl:hover:from-black lgl:hover:to-[#1e2024] lgl:transition-colors lgl:duration-100 group">
      <div className="h-72 xl:h-96">
        <div className="flex h-full flex-col gap-10 lgl:translate-y-16 lgl:group-hover:translate-y-0 lgl:transition-transform lgl:duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base text-gray-300">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
