// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
  className="fixed top-0 left-0 w-full z-50"
  style={{
    background: "#d7b6b6ff",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    height: "80px", // increased height to close the gap
  }}
>
  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-full">
    <div className="text-lg font-bold tracking-wider text-[#264547]">
      PEDDI GAYATHRI
    </div>

    <nav>
      <ul className="hidden md:flex gap-8 items-center">
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" },
        ].map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[#264547] hover:text-[#0f4f5f] transition-colors font-medium"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <select
          onChange={(e) => e.target.value && (location.href = e.target.value)}
          className="p-2 rounded-md border"
          defaultValue=""
        >
          <option value="">Menu</option>
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <option key={l.href} value={l.href}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
    </nav>
  </div>
</header>

  );
}
