import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/privacy-policy"
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-of-service"
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
          >
            Terms of Service
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
