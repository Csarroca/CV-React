import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 pb-[260px]">
      <p className="text-center text-headers font-bold">
        © {new Date().getFullYear()}. All rights reserved by Cristian Sarroca
      </p>
    </div>
  );
};

export default Footer;
