import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-red-500">FlickVault</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#movies" className="hover:text-red-500 transition">
              Movies
            </a>
            <a href="#favorites" className="hover:text-red-500 transition">
              Favorites
            </a>
            <a href="#about" className="hover:text-red-500 transition">
              About Us
            </a>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-6">
          &copy; {new Date().getFullYear()} FlickVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
