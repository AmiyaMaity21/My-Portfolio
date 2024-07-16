import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  const devSkills = [
    { skillName: "html", percent: "100" },
    { skillName: "css", percent: "100" },
    { skillName: "javascript", percent: "80" },
    { skillName: "react", percent: "80" },
    { skillName: "redux", percent: "80" },
    { skillName: "node js", percent: "70" },
    { skillName: "express js", percent: "70" },
    { skillName: "mongodb", percent: "70" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
      </div>
      <div className="flex flex-col gap-2">
        {devSkills.map((skill, index) => {
          return (
            <div className="overflow-x-hidden" key={index}>
              <p className="text-sm uppercase font-medium">{skill.skillName}</p>
              <span className="w-full lgl:w-1/2 h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ width: `${skill.percent}%` }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">
                    {skill.percent}%
                  </span>
                </motion.span>
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
