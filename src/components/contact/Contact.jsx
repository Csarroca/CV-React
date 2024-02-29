import React from "react";
import Title from "../layouts/Title";
import Media from "../banner/Media";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 section-border">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Lets Connect " />
      </div>
      <div className="w-full h-full flex gap-8 lg:items-center justify-center">
        <div className="flex gap-4">
          <Media></Media>
        </div>
      </div>
    </section>
  );
};

export default Contact;
