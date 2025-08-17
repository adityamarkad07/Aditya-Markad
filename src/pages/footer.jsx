import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-blue-200">
          © {currentYear} Aditya Markad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
