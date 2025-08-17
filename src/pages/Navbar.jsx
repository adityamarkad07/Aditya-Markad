import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const navigate = useNavigate();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-white backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-blue-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-700 font-bold text-xl tracking-wide">Aditya</span>
            <span className="text-blue-500 text-xs font-medium -mt-1">Markad</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-blue-700 font-bold text-lg">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="relative group transition duration-300 bg-transparent border-none cursor-pointer"
            >
              {item}
              {/* underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-blue-700 text-2xl focus:outline-none hover:text-blue-800 transition-colors duration-300"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-blue-100/90 backdrop-blur-md px-6 py-8 flex flex-col space-y-6 text-center text-lg font-bold md:hidden">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-blue-700 transition duration-200 hover:text-blue-500 bg-transparent border-none cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
