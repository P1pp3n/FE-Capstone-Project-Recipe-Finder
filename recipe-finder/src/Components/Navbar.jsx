import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white600 text-grey p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-400">
         🍜 Recipe Finder
        </Link>
        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/search" className="hover:text-blue-400">
            Search
          </Link>
          <Link to="/favorites" className="hover:text-blue-400">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
