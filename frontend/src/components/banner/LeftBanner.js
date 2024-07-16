import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact } from "react-icons/fa";
import { FiSend, FiDownload } from "react-icons/fi";
import { SiTailwindcss, SiMongodb, SiNodedotjs } from "react-icons/si";
import ConnectMe from "../layouts/ConnectMe";
import { Link } from "react-scroll";

const LeftBanner = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Amiya Maity Resume - Full Stack Developer.pdf";
    link.download = "Amiya Maity Resume - Full Stack Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Backend Developer.",
      "Full Stack Developer.",
      "Mern Stack Developer.",
    ],
    loop: 0,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-16">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <div className="flex flex-col xl:flex-row xl:gap-4 text-5xl md:text-6xl font-bold">
          <h1 className="text-white">Hi, I'm</h1>
          <h1 className="text-designColor capitalize">Amiya Maity</h1>
        </div>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Aspiring Full Stack Developer currently undergoing comprehensive
          training with hands-on projects. Proficient in designing responsive
          web applications, integrating front-end and back-end services using
          RESTful APIs. Seeking an opportunity to apply my skills and contribute
          to a dynamic development team.
        </p>
        <div className="flex flex-col gap-5 md:flex-row">
          <Link to="contact" className="bg-black button">
            Contact me
            <span>
              <FiSend />
            </span>
          </Link>
          <button
            onClick={downloadResume}
            className="bg-designColor button"
          >
            Download CV
            <span>
              <FiDownload />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <ConnectMe />
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
