import { Link } from "react-scroll";
import { navLinksdata } from "../../data/links";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <span
        onClick={() => setShowMenu(!showMenu)}
        className={`text-xl mdl:hidden bg-bodyColor w-10 h-10 inline-flex items-center justify-center border-headers border-2 border-solid rounded-full text-headers cursor-pointer burger-menu ${!showMenu ? "open-button" : "closed-button"}`}
      >
        <FiMenu />
      </span>
      <div
        className={`mdl:hidden w-[150px] absolute top-24 right-0 bg-burgerMenu p-4 scrollbar-hide rounded-15 burger-menu ${showMenu ? "open-button" : "closed-button"}`}
      >
        <button onClick={() => setShowMenu(false)}>
          <MdClose className="absolute top-2 right-2  hover:text-title hover duration-300 text-2xl cursor-pointer text-headers" />
        </button>
        <div className="flex flex-col gap-8 ">
          <ul className="flex flex-col gap-4 py-2 relative">
            {navLinksdata.map((item) => (
              <li
                key={item._id}
                className="text-xl font-bold text-headers tracking-wide cursor-pointer hover:text-titleHover duration-300"
              >
                <Link
                  onClick={() => setShowMenu(false)}
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
