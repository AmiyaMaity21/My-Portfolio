import React from "react";
import { contactImg } from "../../assets/index";
import ConnectMe from "../layouts/ConnectMe";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024 to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-centers">
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Amiya Maity</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer-MERN Stack
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          As a Full Stack Developer, I am passionate about building dynamic and
          responsive web applications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91-7998269618</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className="text-lightText">amiyamaity.ee@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <ConnectMe />
      </div>
    </div>
  );
};

export default ContactLeft;
