"use client";

import React, { useState } from "react";

const Info = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-500">{children}</p>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 p-4 lg:grid-cols-2 gap-4 md:p-8 lg:p-24 pt-16 lg:pt-32 relative z-10">
      <div className="flex flex-col gap-4 items-center justify-center text-center md:text-left lg:col-span-1 lg:row-span-1">
        <p className="text-4xl max-w-[400px] text-center md:col-span-1 lg:col-span-1 lg:row-span-2 font-[900] leading-[1.4] text-white">
          Let's Start Work Together. Get in Touch!
        </p>
        <button className="bg-[#261534] rounded-full text-white px-4 py-2 border border-white mt-4 hover:bg-white hover:text-[#261534] transition duration-300 ease-in-out">
          Get in Touch
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-gray-500 text-center md:text-left">
          Get in touch to discuss your work needs today. Please call us or drop
          an email and we will get back to you as soon as possible.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Info title="Address">
            1234 Street Name, City, State, 12345
            <br />
            Country
          </Info>
          <Info title="Phone">
            <a href="tel:+1234567890" className="text-gray-500">
              +1 (234) 567-890
            </a>
          </Info>
          <Info title="Working Hours">
            Mon - Fri: 9 AM - 5 PM
            <br />
            Sat - Sun: Closed
          </Info>
          <Info title="Email">abc@example.com</Info>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
