import React, { useState } from "react";

const Contact2 = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-playfair text-center mb-12">Contact Me</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-lg font-medium">Let's catch up!</p>
          <a href="mailto:example@email.com" className="hover:text-[#6c63ff]">Email</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6c63ff]">GitHub</a>
          <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6c63ff]">Netlify</a>
        </div>

        {/* Right Column: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 p-6 rounded-2xl bg-white shadow-md"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white rounded-full hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact2;
