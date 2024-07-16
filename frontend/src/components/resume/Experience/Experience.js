import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../../../data/experienceData";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2022-present</p>
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
      </div>
      <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {experienceData.map((Experience) => (
          <ExperienceCard
            key={Experience.id}
            title={Experience.role}
            organization={`${Experience.organizationName} (${Experience.year})`}
            location={Experience.location}
            des={Experience.des}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
