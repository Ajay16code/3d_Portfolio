// src/components/sections/Achievements.tsx
import React from "react";
import { SectionWrapper } from "../../hoc";

type Achievement = {
  title: string;
  place?: string;
  date?: string;
  description?: string;
};

const achievements: Achievement[] = [
  {
    title: "Top 20 – DevDay 2025",
    description: "Won ₹2000 cash prize for debugging and open-source contributions.",
  },
  {
    title: "3rd Prize – Project Expo in Krishna College 2025",
    description: "Built AI-based Traffic Management System showcased at the event.",
  },
  {
    title: "Paper Presentation – Krishna College 2024",
    description: "Presented IoT-based Drug Analysis & Driver Monitoring system.",
  },
  {
    title: "Best Performance – InPyExpo 2024",
    description: "Recognized for File Authenticity & Document Validation project.",
  },
];

const Achievements: React.FC = () => {
  return (
    <div className="w-full">
      {/* Outer padded / purple container like Blogs */}
      <div className="bg-tertiary min-h-[220px] rounded-2xl p-8 md:p-12">
        <p className="sectionSubText">Milestones</p>
        <h2 className="sectionHeadText">Achievements.</h2>

        {/* Cards row */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl bg-black-200 p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {a.title}
              </h3>
              {a.place || a.date ? (
                <p className="mt-1 text-sm text-secondary">
                  {a.place} {a.place && a.date ? "•" : ""} {a.date}
                </p>
              ) : null}
              {a.description && (
                <p className="mt-4 text-sm text-white-100 leading-relaxed">
                  {a.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
