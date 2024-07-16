import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { eductionData } from "../../../data/educationData";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2006-2022</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Qualification</h2>
      </div>
      <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {eductionData.map((education) => (
          <EducationCard
            key={education.id}
            degree={education.degree}
            institution={`${education.institution} (${education.year})`}
            result={education.marks}
            des={education.about}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
