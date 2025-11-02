import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Java",
  "Spring Boot",
  "SQL",
  "Git & GitHub",
];

const cardColors = [
  "#F6C9A3", // Muted Apricot
  "#D8A7A7", // Dusty Rose
  "#BFD8E5", // Powder Blue
  "#E5D9B6", // Soft Olive Cream
  "#C7D3C0", // Sage Mist
  "#F2E7DA", // Warm Cream
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 
           bg-gradient-to-b from-[#dfe5d2] via-[#f3e3d3] to-[#e7d5ca] text-[#4a4f46]"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-center">SKILLS</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full">
        {skills.map((skill, index) => {
          const bgColor = cardColors[index % cardColors.length];
          return (
            <div
              key={index}
              className="rounded-xl shadow-md hover:shadow-lg border border-[#d0c7bf] p-6 text-center 
                         transform hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fadeInUp"
              style={{ backgroundColor: bgColor }}
            >
              <h3 className="text-lg font-semibold text-[#3f3f3f]">{skill}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
