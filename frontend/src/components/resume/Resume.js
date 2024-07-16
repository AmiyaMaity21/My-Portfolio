import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education/Education";
import Skills from "./Skills";
import Experience from "./Experience/Experience";
const Resume = () => {
  const tabs = ["education", "skills", "experience"];
  const [activeTab, setActiveTab] = useState("education");
  return (
    <section id="resume" className="w-full py-16 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {tabs.map((tab, index) => {
            return (
              <li
                key={index}
                className={`${
                  activeTab === tab
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </li>
            );
          })}
        </ul>
      </div>
      {activeTab === "education" && <Education />}
      {activeTab === "skills" && <Skills />}
      {activeTab === "experience" && <Experience />}
    </section>
  );
};

export default Resume;
