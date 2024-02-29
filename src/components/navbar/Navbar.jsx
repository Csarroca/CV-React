import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../data/links";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  useEffect(() => {
    scrollToComponent();
  }, []);

  const scrollToComponent = () => {
    const element = document.getElementById("1001");
    element?.click();
  };
  return (
    <section className="w-full h-24  sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont section-border">
      <div>
        <img src={logo} alt="logo" width="120px" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 pr-20">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-xl font-bold text-headers tracking-wide cursor-pointer hover:text-titleHover duration-300"
              key={_id}
            >
              <Link
                id={_id}
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BurgerMenu></BurgerMenu>
    </section>
  );
};

export default Navbar;
