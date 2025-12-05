
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { config } from "../../constants/config";
import { education } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

type EducationItem = (typeof education)[number];

const EducationCard = ({ edu }: { edu: EducationItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={edu.date}
      iconStyle={{ background: edu.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={edu.icon}
            alt={edu.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <h3 className="text-[24px] font-bold text-white">{edu.title}</h3>
      <p className="text-secondary text-[16px] font-semibold">
        {edu.companyName}
      </p>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {edu.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      {/* 🔹 EXACT same header style as Experience */}
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">{config.sections.education.p}</p>
        <h2 className="sectionHeadText">{config.sections.education.h2}</h2>
      </motion.div>

      {/* 🔹 EXACT same timeline layout as Experience */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((item, index) => (
            <EducationCard key={`edu-${index}`} edu={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
