import React from "react";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Resume />
        <Skills />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
