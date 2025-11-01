import React, { useState } from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";

const Contact2 = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-playfair text-center mb-12">Contact Me</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left Column */}
        <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-10">
            Let's Catch Up!
          </h3>

          {/* Icon List */}
          <div className="flex flex-col items-start gap-6 w-full max-w-[230px]">
            {/* Email */}
            <a
              href="mailto:peddigayathri89@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-[#6c63ff] transition transform hover:-translate-y-1"
            >
              <span className="p-3 rounded-full bg-purple-100 text-[#6c63ff] flex items-center justify-center shadow-sm">
                <Mail size={20} />
              </span>
              <span className="font-medium text-lg">Email</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Gayathri2177"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-[#6c63ff] transition transform hover:-translate-y-1"
            >
              <span className="p-3 rounded-full bg-pink-100 text-[#ff6584] flex items-center justify-center shadow-sm">
                <Github size={20} />
              </span>
              <span className="font-medium text-lg">GitHub</span>
            </a>

            {/* Netlify */}
            <a
              href="https://app.netlify.com/teams/peddigayathri89"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-[#6c63ff] transition transform hover:-translate-y-1"
            >
              <span className="p-3 rounded-full bg-blue-100 text-[#03a9f4] flex items-center justify-center shadow-sm">
                <Globe size={20} />
              </span>
              <span className="font-medium text-lg">Netlify</span>
            </a>
        </div>

        </div>

        {/* Right Column - Form */}
        <div className="bg-white shadow-md p-6 rounded-2xl h-full flex flex-col justify-between">
          <form
            action="https://formspree.io/f/mkgwazny"
            method="POST"
            className="space-y-4 flex-grow"
            onSubmit={(e) => {
              setTimeout(() => {
                e.target.reset();
                alert("Message sent successfully!");
              }, 100);
            }}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 rounded-lg border w-full focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 rounded-lg border w-full focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="p-3 rounded-lg border w-full focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
              required
            />

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white rounded-full hover:scale-105 transition-transform w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
