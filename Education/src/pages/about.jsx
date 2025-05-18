import React from 'react';
import ab from '../assets/ab.jpg';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full">
      {/* Image Section */}
      <div className="relative w-full min-h-[calc(100vh-107px)]">
        <img
          src={ab}
          alt="about"
          className="w-full h-full object-cover absolute top-0 left-0 z-[-2] opacity-60"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[-1]" />

        {/* Overlay Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24 py-20 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6">
            Empowering Students Through <br className="hidden md:block" />
            Quality Education
          </h1>
          <div className="text-sm md:text-base max-w-4xl space-y-5 leading-relaxed">
            <p>
              Welcome to <strong>Rveiya Dynamics</strong>, your destination for high-quality, accessible online education.
              We are driven by a simple but powerful mission: to make learning easy, affordable, and impactful for everyone.
              In a world that’s rapidly changing, we believe learning should never stop.
            </p>
            <p>
              Our platform offers a wide variety of online courses in technology, business, design, data science, and more.
              Each course is carefully designed by experienced instructors and industry experts.
              Whether you're a beginner starting from scratch or a professional upgrading your skills, we’ve got you covered.
            </p>
            <p>
              Our content is interactive, practical, and real-world focused, helping you apply what you learn immediately.
              We provide hands-on projects, quizzes, and assignments to reinforce learning through doing.
              With flexible self-paced learning, you can study on your own schedule—anytime, anywhere.
            </p>
            <p>
              We prioritize student success with personalized support, mentorship, and career-focused resources.
              Our courses are regularly updated to match industry standards and employer expectations.
              You’ll gain not just theoretical knowledge, but also the job-ready skills needed to stand out in the real world.
            </p>
            <p>
              We believe in affordable education that doesn’t compromise on quality.
              That's why our pricing is transparent, with no hidden fees or subscriptions.
              Once enrolled, you get lifetime access to course materials and future updates.
            </p>
            <p>
              Over the years, thousands of students have trusted us to build their skills and transform their careers.
              Many of our learners have gone on to land new jobs, promotions, and freelance opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex justify-center items-center px-4 ml-[-900px]">
        <div className="bg-white  p-6  w-full max-w-md text-gray-800 mt-8  mb-2">
          <h3 className="text-center text-2xl font-semibold mb-6 ml-[-260px]">Our Location</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-gray-600 mt-1" />
              <p>1st Sector, HSR Layout, Bangalore, Karnataka 560102</p>
            </div>
            <div className="flex items-start gap-2">
              <FaClock className="text-gray-600 mt-1" />
              <p>Working Hours: 9 AM - 5 PM</p>
            </div>
            <div className="flex items-start gap-2">
              <FaPhoneAlt className="text-gray-600 mt-1" />
              <p>+91 6303251526</p>
            </div>
            <div className="flex items-start gap-2">
              <FaEnvelope className="text-gray-600 mt-1" />
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section could go here */}
    </div>
  );
};

export default About;
