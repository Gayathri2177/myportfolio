import React, { useEffect, useState } from "react";

const Home2 = () => {
  const tagline = "Turning ideas into beautiful web applications";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < tagline.length) {
      const timeout = setTimeout(() => {
        setText(text + tagline[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text, tagline]);

  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute w-24 h-24 bg-[#6c63ff] rounded-full opacity-30 animate-bounce top-10 left-10"></div>
      <div className="absolute w-16 h-16 bg-[#ff6584] rounded-full opacity-20 animate-pulse bottom-20 right-20"></div>

      <div className="z-10 text-center px-6">
        <h1 className="text-5xl font-playfair mb-4">Peddi Gayathri</h1>
        <h2 className="text-2xl font-medium mb-6">Java Full Stack Developer</h2>
        <p className="text-lg italic">{text}</p>
        <div className="mt-6">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-[#6c63ff] hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default Home2;
