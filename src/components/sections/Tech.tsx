// src/components/sections/Tech.tsx

import React from "react";
import { technologies } from "../../constants";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";

const Tech: React.FC = () => {
  return (
    <>
      {/* Title block */}
      <div className="mb-10">
        <p className="sectionSubText">Technologies I learn</p>
        <h2 className="sectionHeadText">Skills.</h2>
      </div>

      {/* Skill icons */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
