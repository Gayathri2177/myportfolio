import React from "react";
import Home2 from "./components/Home2";
import Skills2 from "./components/Skills2";
import Projects2 from "./components/Projects2";
import Resume2 from "./components/Resume2";
import Contact2 from "./components/Contact2";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-[#fdf6f0] to-[#e0eafc]">
      <Home2 />
      <Skills2 />
      <Projects2 />
      <Resume2 />
      <Contact2 />
      <footer className="text-center py-6 text-gray-700">
        &copy; {new Date().getFullYear()} Gayathri Peddi
      </footer>
    </div>
  );
}

export default App;
