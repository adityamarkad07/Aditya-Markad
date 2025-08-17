import { useState } from "react";
// import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-900  shadow-inner shadow-gray-500 text-white px-6 mt-5 py-5 flex items-center justify-between rounded-full w-full max-w-5xl mx-auto">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
          🌟
        </div>
        <span className="text-lg font-semibold">Mozilla Campus Club</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <a href="#" className="text-blue-400 ">
          Demo
        </a>
        <a href="#" className="hover:text-gray-400">
          Open Source
        </a>
        <a href="#" className="hover:text-gray-400">
          Platform
        </a>
        <a href="#" className="hover:text-gray-400">
          Docs
        </a>
        <a href="#" className="hover:text-gray-400">
          Blog
        </a>
        <a href="#" className="hover:text-gray-400">
          About
        </a>
      </nav>

      {/* GitHub Star Button */}
      <button className="bg-gray-700 text-white px-3 py-1 flex items-center rounded-full hover:bg-gray-600">
        {/* <FaGithub className="mr-2" /> */}
        Star <span className="ml-2 text-blue-400">1,612</span>
      </button>
    </header>
  );
};

export default Header;
