import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logo from "../assets/portfolio_logo-.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mb-10 flex items-center justify-between py-6 relative">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center z-10">
        <img className="mx-4 md:mx-20 w-16 md:w-20" src={logo} alt="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="mx-4 md:hidden z-10" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="text-2xl cursor-pointer text-white" />
        ) : (
          <FaBars className="text-2xl cursor-pointer text-white" />
        )}
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-screen bg-[#060d22d6] md:static md:flex md:w-auto md:bg-transparent md:h-auto gap-8 z-0 transition-all duration-300 ease-in-out`}
      >
        {/* Centering the menu items */}
        <div className="mx-0 flex flex-col items-center w-full md:flex-row md:items-center md:w-auto mt-20 md:mt-0">
          <a href="#hero" className="block p-4 text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" className="block p-4 text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#projects" className="block p-4 text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#technologies" className="block p-4 text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Technologies
          </a>
          <a href="#experience" className="block p-4 text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Experience
          </a>
          <a href="#contacts" className="block p-4 text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;