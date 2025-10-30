import React from "react";

const Resume2 = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-playfair mb-8">Resume</h2>
      <a
        href="/GayathriPeddi_Resume.pdf"
        download
        className="px-6 py-3 bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white rounded-full hover:scale-105 transition-transform"
      >
        Download My Resume
      </a>
    </section>
  );
};

export default Resume2;
