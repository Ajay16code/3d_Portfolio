// src/components/sections/Certifications.tsx
import React from "react";
import { SectionWrapper } from "../../hoc";

type Certification = {
  title: string;
  provider?: string;
  date?: string;
  link?: string;
};

const certifications: Certification[] = [
  { title: "OCI AI Foundations", provider: "Oracle", date: "" },
  { title: "Machine Learning with Python", provider: "Coursera", date: "" },
  { title: "Deep Learning / Neural Networks", provider: "Coursera", date: "" },
  { title: "Ethical Hacking Essentials", provider: "Coursera", date: "" },
  { title: "OCI Generative AI", provider: "Oracle", date: "Ongoing" },
];

const Certifications: React.FC = () => {
  return (
    <div className="w-full">
      {/* Outer padded / purple container */}
      <div className="bg-tertiary min-h-[180px] rounded-2xl p-8 md:p-12 mt-8">
        <p className="sectionSubText">Learning Path</p>
        <h2 className="sectionHeadText">Certifications.</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-black-200 p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {c.title}
              </h3>
              {c.provider && (
                <p className="mt-1 text-sm text-secondary">{c.provider}</p>
              )}
              {c.date && (
                <p className="mt-2 text-xs text-white-100">{c.date}</p>
              )}
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-[#9AE6B4] underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
