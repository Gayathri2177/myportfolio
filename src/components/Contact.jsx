import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 
                 bg-gradient-to-b from-[#e7d5ca] via-[#f3e3d3] to-[#dfe5d2] text-[#4a4f46]"
    >
      <h2 className="text-4xl font-playfair font-bold text-center mb-12">
        CONTACT ME
      </h2>

     <div className="w-full max-w-xl bg-[#d9b8ae] shadow-[0_0_25px_rgba(150,120,110,0.35)] 
                p-10 rounded-2xl border border-[#b99e95]">
        <form
          action="https://formspree.io/f/mblppzbw"
          method="POST"
          className="space-y-5"
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
            placeholder="Your Name"
            className="p-3 rounded-lg border border-[#d3c6b8] w-full bg-[#f1e8df] 
                       focus:outline-none focus:ring-2 focus:ring-[#bfaea2] placeholder:text-[#7a746e]"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-lg border border-[#d3c6b8] w-full bg-[#f1e8df] 
                       focus:outline-none focus:ring-2 focus:ring-[#bfaea2] placeholder:text-[#7a746e]"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg border border-[#d3c6b8] w-full bg-[#f1e8df] 
                       focus:outline-none focus:ring-2 focus:ring-[#bfaea2] placeholder:text-[#7a746e]"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 bg-[#f5f3ec] text-[#3f3f3f] border-2 border-[#b7c6ac]
             rounded-full hover:bg-[#e3e0d8] hover:scale-105 transition-transform w-full font-medium"
          >
          Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
