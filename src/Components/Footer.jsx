import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Brand Info */}
        <div>
          <h2 className="text-3xl font-bold">AGency by KrushnaWebDev</h2>
          <p className="text-gray-400 mt-2">
            Creating stunning websites that help businesses grow.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-500"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-500"><FaTwitter /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} KrushnaWebDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
