import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import ComputersCanvas from "../canvas/ComputersCanvas";
import { config } from "../../constants/config";
import { links } from "../../constants/config";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      {/* HERO TOP CONTENT (ensure higher z so it's above the canvas) */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-30`}
      >
        {/* Purple line + dot */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          {/* Heading */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>

          {/* Subtitle */}
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>

          {/* Social + Resume Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {/* Resume Button */}
            <a
              href={links.resume}
              download
              className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-purple-500 z-40 pointer-events-auto"
            >
              <FaDownload size={18} />
              <span>Download Resume</span>
            </a>

            {/* GitHub */}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-gray-500 px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 z-40 pointer-events-auto"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-blue-500 px-4 py-2 text-sm text-blue-300 hover:bg-blue-900/40 z-40 pointer-events-auto"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3D Computer Canvas (visible under hero content) */}
      <ComputersCanvas />

      {/* Scroll-down indicator: moved to bottom-right so it doesn't cover model */}
      <div className="absolute right-8 bottom-8 z-40">
        <a href="#about" className="pointer-events-auto">
          <div className="border-secondary flex h-[48px] w-[48px] items-center justify-center rounded-full border-4 p-2 bg-transparent">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
