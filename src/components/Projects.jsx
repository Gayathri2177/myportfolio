import React from "react";

const projects = [
  {
    name: "Portfolio-Blog",
    tech: "React, Tailwind, Vite",
    link: "https://portfoliobloggg.netlify.app/", // replace with your actual portfolio link
  },
  {
    name: "Course Registration (Bootstrap Project)",
    tech: "HTML, CSS, Bootstrap, JS",
    link: "https://your-bootstrap-project-link.netlify.app", // replace with your actual project link
  },
  { name: "Coming Soon", tech: "..." },
  { name: "Coming Soon", tech: "..." },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 
                 bg-gradient-to-b from-[#e7d5ca] via-[#f0d2c3] to-[#f6d6c1] text-[#4a4f46]"
    >
      <h2 className="text-4xl font-playfair font-bold text-center mb-12">PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f9e8de] text-[#4a4f46] rounded-2xl p-8 text-center shadow-md hover:shadow-xl 
                       hover:scale-[1.02] transition-all cursor-pointer block border border-[#e0c6bb]/60"
          >
            <h3 className="text-2xl font-semibold mb-3 font-playfair">{proj.name}</h3>
            <p className="text-sm opacity-80">{proj.tech}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
