// src/App.jsx
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        {/* Next steps: About, Skills, Projects, Contact will go below */}
      </main>
    </div>
  );
}
