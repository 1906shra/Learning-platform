// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="h-auto flex flex-col justify-around items-center sm:items-start sm:pl-[40px] mr-28 pt-36 ml-24 mb-16">
      <h3 className="text-[#00258B] font-[500] text-[28px] sm:text-[36px] md:text-[40px] leading-[100%] tracking-[0%] font-[Rubik] w-full sm:w-[512px] h-[47px] text-center sm:text-left sm:ml-[350px]">
        Connect With Us
      </h3>

      <div className="w-full sm:w-[512px] flex flex-col gap-4 mt-6 sm:ml-[350px]">
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-[8px] px-4 py-2 h-[50px] w-[509px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-[8px] px-4 py-2 h-[50px] w-[509px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            width: "509px",
            height: "119px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        ></textarea>
        <button
          type="submit"
          className="w-[509px] h-[61px] bg-[#612EED] text-white rounded-[8px] border border-gray-300 hover:bg-[#5019c7] transition duration-300 px-6 py-2 self-center sm:self-start"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
