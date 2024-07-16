import React, { useState } from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import ConnectMe from "../layouts/ConnectMe";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="h-14 w-14 rounded-full border-2 border-gray-500"
        />
        <p>INBIO</p>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map((navlink, index) => (
            <li
              key={index}
              className="text-base text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <div className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-14 w-14 rounded-full border-2 border-gray-500"
                  />
                  <p>INBIO</p>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Aspiring Full Stack Developer currently undergoing
                  comprehensive training with hands-on projects, seeking an
                  opportunity to apply my skills and contribute to a dynamic
                  development team.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((navlink, index) => (
                  <li
                    key={index}
                    className="text-base text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={navlink.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {navlink.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <ConnectMe />
              </div>
              <span>
                <MdClose
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
