import React from "react";
import myPhoto from "/assets/My pic at TechM.jpg"; // update the path if needed

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start gap-12 px-8 py-28 
                 bg-gradient-to-r from-[#f1e1d0] to-[#c7d3c0] text-[#3f4a3c] transition-all duration-700"
    >
      {/* Centered section title */}
      <h2 className="text-4xl font-bold mt-8 mb-8 text-center w-full">ABOUT ME</h2>

      {/* Content container (image left, text right on md+) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl w-full">
        {/* Left - Image */}
        <div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0_0_20px_rgba(193,183,164,0.6)] opacity-0 animate-fadeInLeft"
        >
          <img
            src={myPhoto}
            alt="Gayathri"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Text */}
        <div
          className="max-w-md text-center md:text-left opacity-0 animate-fadeInRight"
        >
          <h3 className="text-2xl font-semibold mb-4">Hi — I’m Peddi Gayathri</h3>
          <p className="text-lg leading-relaxed mb-4">
            A developer who loves blending logic with creativity.
            My work reflects curiosity, balance, and an eye for beautiful,
            functional designs.
          </p>
          <p className="italic text-[#4b564a]">
            “Art in logic, logic in art.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
