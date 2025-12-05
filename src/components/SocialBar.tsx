import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { links } from "../constants/config"; // FIXED PATH

const SocialBar: React.FC = () => {
  return (
    <div className="fixed left-4 bottom-6 z-40 flex flex-col gap-3">

      {/* GitHub */}
      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white shadow-md hover:bg-gray-700 transition"
      >
        <FaGithub size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white shadow-md hover:bg-blue-600 transition"
      >
        <FaLinkedin size={20} />
      </a>

    </div>
  );
};

export default SocialBar;
