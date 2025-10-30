import React from "react";

const projects = [
  { name: "Coming Soon", tech: "..." },
  { name: "Coming Soon", tech: "..." },
  { name: "Coming Soon", tech: "..." },
];

const Projects2 = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-playfair text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p className="text-gray-500">{proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects2;
