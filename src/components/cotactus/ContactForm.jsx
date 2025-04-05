"use client";

import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  return (
    <div className="relative z-10 mt-10 lg:-mt-36 flex items-center justify-center px-4 pb-16">
      <form className="bg-[#0a0615] p-16 rounded-[2rem] shadow-xl w-full max-w-6xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Let&apos;s Bring Your Vision <br className="hidden sm:block" />
            Into Reality
          </h2>
          <p className="text-gray-400 text-sm">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 text-white p-2 outline-none"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 text-white p-2 outline-none"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-300 mb-1">Website</label>
            <input
              type="url"
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 text-white p-2 outline-none"
              placeholder="Your website (optional)"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-300 mb-1">
              Your Comment
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 text-white p-2 outline-none resize-none"
              placeholder="Type your message..."
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href={`mailto:dev.sumitraj1@gmail.com?subject=Help&body=${encodeURIComponent(
              formData.message
            )}`}
            className="bg-[#211C53] hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get In Touch
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
