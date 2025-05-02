import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import AccountMenu from "./Account";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 w-full h-[103px]">
      {/* Logo Section */}
      <div className="flex items-center">
  <img
    src={logo}
    alt="Logo"
    className="w-[65.63px] h-[61px] md:w-[85px] md:h-[78px] lg:w-[100px] lg:h-[90px]"
  />
</div>


      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        <Link to="/" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200 text-lg">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200 text-lg">
          About
        </Link>
        <Link to="/courses" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200 text-lg">
          Courses
        </Link>
        <Link to="/internship" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200 text-lg">
          Internship
        </Link>
        <Link to="/contact" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200 text-lg">
          Contact
        </Link>
        {/* Desktop Account Menu */}
        <div className="ml-2">
          <AccountMenu />
        </div>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[#612EED] hover:text-[#612EED] focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-[103px] left-0 w-full bg-white shadow-md px-6 py-4 md:hidden flex flex-col gap-3 z-40">
          <Link to="/" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200">
            About
          </Link>
          <Link to="/courses" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200">
            Courses
          </Link>
          <Link to="/internship" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200">
            Internship
          </Link>
          <Link to="/contact" className="text-gray-700 font-medium hover:text-[#612EED] transition-colors duration-200">
            Contact
          </Link>
          {/* Mobile Account Menu */}
          <div className="mt-2">
            <AccountMenu />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
