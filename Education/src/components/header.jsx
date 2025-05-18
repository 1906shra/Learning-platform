import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image.png";
import AccountMenu from "./Account";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to handle dynamic styling for NavLinks
  const linkClasses = ({ isActive }) =>
    `font-medium transition-colors duration-200 text-lg ${
      isActive ? "text-[#612EED]" : "text-gray-700 hover:text-[#612EED]"
    }`;

  return (
    <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50 w-full h-[103px]">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[65.63px] h-[61px] md:w-[85px] md:h-[78px] lg:w-[100px] lg:h-[90px]"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center px-8">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>
        <NavLink to="/courses" className={linkClasses}>
          Courses
        </NavLink>
        <NavLink to="/internship" className={linkClasses}>
          Internship
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
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
        <nav className="absolute top-[103px] left-0 w-full bg-white shadow-md px-8 py-4 md:hidden flex flex-col gap-6 z-40">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/courses" className={linkClasses}>
            Courses
          </NavLink>
          <NavLink to="/internship" className={linkClasses}>
            Internship
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
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
