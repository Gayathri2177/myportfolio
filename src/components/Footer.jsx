import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-b from-[#f9f9f9] via-[#f5f3f3] to-[#f1efee] text-[#5a4e4e] text-center py-6 border-t border-[#e6e3e3]"
    >
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://github.com/Gayathri2177"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#e7bfa5] transition-colors duration-300"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://linkedin.com/in/peddi-gayathri-53406922a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#b4c8a7] transition-colors duration-300"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="mailto:peddigayathri89@email.com"
          className="text-2xl hover:text-[#cfa9a9] transition-colors duration-300"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <p className="text-sm text-[#8a7f7f] font-poppins">
        © {new Date().getFullYear()} Peddi Gayathri | Built with Creativity & Passion
      </p>
    </footer>
  );
};

export default Footer;
