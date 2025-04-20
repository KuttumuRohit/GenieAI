import React from "react";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-[#03045e] py-3 shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-6 flex justify-between items-center">
        {/* Left Side: Logo + Home */}
        <div className="flex items-center space-x-4">
          <img
            src="/CGlogo.png"
            alt="GENIE AI Logo"
            className="h-10 w-auto bg-transparent"
          />
          <Link
            to="/"
            className="text-white text-lg font-medium no-underline hover:no-underline focus:no-underline focus:outline-none"
          >
            Home
          </Link>
        </div>

        {/* Right Side: About Us + Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            to="/about"
            className="text-white text-lg font-medium no-underline hover:no-underline focus:no-underline focus:outline-none"
          >
            About Us
          </Link>
          <button className="bg-[#fff859] text-black px-3 py-1.5 rounded font-medium hover:bg-yellow-300 transition duration-200 text-sm no-underline focus:outline-none">
            Login
          </button>
          <button className="bg-[#fff859] text-black px-3 py-1.5 rounded font-medium hover:bg-yellow-300 transition duration-200 text-sm no-underline focus:outline-none">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
