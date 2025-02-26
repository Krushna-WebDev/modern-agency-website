import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b flex justify-between items-center h-20 px-6 bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-3xl font-bold">AGency</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 font-roboto tracking-wide text-lg font-semibold">
        <li className="hover:text-blue-500 cursor-pointer transition-all">
          Home
        </li>
        <li className="hover:text-blue-500 cursor-pointer transition-all">
          Services
        </li>
        <li className="hover:text-blue-500 cursor-pointer transition-all">
          Portfolio
        </li>
        <li className="hover:text-blue-500 cursor-pointer transition-all">
          Contact
        </li>
      </ul>

      {/* Hire Me Button */}
      <button
        className="bg-blue-500 font-mono cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() =>
          (window.location.href =
            "mailto:krushna.webdev26@gmail.com?subject=Hiring%20Enquiry&body=Hello%20Krushna,")
        }
      >
        HIRE ME
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-semibold">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Portfolio</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
