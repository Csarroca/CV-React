import React from "react";

const Title = ({ des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h2 className="text-4xl md:text-5xl text-headers font-bold capitalize">
        {des}
      </h2>
    </div>
  );
};

export default Title;
