// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
      style={{ background: "linear-gradient(180deg,#D7EAE1 0%, #FADFCB 60%)", color: "#264547" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wider">
          HI, I AM <span className="inline-block text-[#264547]">PEDDI GAYATHRI</span>
        </h1>

        <p className="text-lg max-w-3xl leading-relaxed mb-8 text-[#264547]/90">
          I’m a passionate developer who blends clean UI and thoughtful UX to build
          accessible, beautiful web experiences. Welcome to my portfolio.
        </p>

        <a
          href="/assets/My_Resume_tobeforwarded.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-[#BFD8E5] hover:bg-[#66c8f2] text-[#264547] font-semibold shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
}
