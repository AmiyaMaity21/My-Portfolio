import React from "react";
import ConnectMe from "../layouts/ConnectMe";
import { logo } from "../../assets/index";

const Footer = () => {
  const quickLinks = ["About", "Portfolio", "Services", "Blog", "Contact"];
  const resources = [
    "Authentication",
    "System Status",
    "Terms of Service",
    "Pricing",
    "Over Right",
  ];
  const developers = [
    "Documentation",
    "Authentication",
    "API Reference",
    "Support",
    "Open Source",
  ];
  return (
    <div className="w-full py-16 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 rounded-full border-2 border-gray-500"
          />
          <p>INBIO</p>
        </div>
        <ConnectMe/>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {quickLinks.map((link, index) => {
            return (
              <li key={index}>
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  {link}
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {resources.map((resouce, index) => {
            return (
              <li key={index}>
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  {resouce}
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          {developers.map((developer) => {
            return (
              <li key={developer}>
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  {developer}
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
