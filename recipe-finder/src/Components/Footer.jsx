import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black -300 py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center animate-fade-in">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-black">
            Ocallaghan's Recipe Nook
          </h2>
          <p className="text-sm">Discover, cook, and share amazing recipes!</p>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/P1pp3n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-60 hover:text-blue"
          >
            GitHub
          </a>
          <a href="#" className="text-gray-60 hover:text-blue">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-60 hover:text-blue">
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-sm">
          © {new Date().getFullYear()} Ocallaghan's Recipe Nook. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
