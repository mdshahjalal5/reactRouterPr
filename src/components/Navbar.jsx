import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Brand</div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/users"
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
          >
            Users
          </NavLink>

          <NavLink
            to="/posts"
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
          >
            Posts
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
          >
            Contact
          </NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLink
            to="/"
            className="block text-gray-300 hover:text-white px-4 py-2"
            activeClassName="text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className="block text-gray-300 hover:text-white px-4 py-2"
            activeClassName="text-white"
          >
            Users
          </NavLink>
          <NavLink
            to="/posts"
            className="block text-gray-300 hover:text-white px-4 py-2"
            activeClassName="text-white"
          >
            Posts
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-300 hover:text-white px-4 py-2"
            activeClassName="text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-300 hover:text-white px-4 py-2"
            activeClassName="text-white"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
