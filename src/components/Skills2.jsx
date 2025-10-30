import React from "react";

const skills = [
  { name: "HTML", color: "bg-[#6c63ff]" },
  { name: "CSS", color: "bg-[#ff6584]" },
  { name: "JavaScript", color: "bg-[#00bfa6]" },
  { name: "Bootstrap", color: "bg-[#6c63ff]" },
  { name: "React", color: "bg-[#00bfa6]" },
  { name: "Core Java", color: "bg-[#ff6584]" },
  { name: "Spring Boot", color: "bg-[#6c63ff]" },
  { name: "MySQL", color: "bg-[#00bfa6]" },
  { name: "Git", color: "bg-[#ff6584]" },
  { name: "VS Code", color: "bg-[#6c63ff]" },
];

const Skills2 = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-playfair text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`${skill.color} text-white rounded-2xl p-4 text-center hover:scale-105 transition-transform cursor-pointer shadow-md`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills2;
