import React from "react";

const SkillsCard = ({ title, des }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-4 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-gradientStart to-gradientEnd group hover:bg-gradient-to-b hover:from-hoverGradientStart hover:hoverGradientEnd transition-colors duration-1000">
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg uppercase text-title font-bold tracking-wider ">
              {title}
            </h3>
          </div>
          <div className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 py-8">
            {des}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
