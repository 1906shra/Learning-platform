import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-[325px] bg-[#1E0A53] text-white px-6 py-12 md:px-20 md:py-16 pt-36">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between h-full">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Start Your Career With Us</h2>
          <p className="text-sm md:text-lg">
            Courses and Internships for aspiring tech <br /> Students
          </p>

          {/* Social Media Icons - Single Row */}
          <div className="mt-6 flex space-x-6 justify-center md:justify-start">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-red-600 hover:text-red-800" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-8 md:mt-0 md:ml-24 space-y-2 text-sm md:text-lg text-right">
          <h3 className="text-base md:text-xl font-semibold mb-2">Contact Details</h3>
          <p>+91 6303251526</p>
          <p className="flex items-center justify-end gap-2">
            <HiOutlineMail className="text-lg" /> example@gmail.com
          </p>
        </div>
      </div>

      <p className="text-xs md:text-sm text-gray-400 mt-10 text-center">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
