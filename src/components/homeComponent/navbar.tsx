// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-6 md:px-8 fixed w-full top-0 left-0 z-50 shadow-lg backdrop-blur-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <div className="flex items-center">
  <Link href="/" className="block">
    <Image
      src="/Mentor-AI-Logo-Transparent.png"
      alt="Mentor AI Logo"
      width={150}
      height={80}  
      className="w-auto max-h-25 object-contain"
      priority
    />
  </Link>
</div>


        {/* Hamburger Icon */}
        <div
          className="md:hidden text-indigo-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-6 text-indigo-700">
          <Link href="#features" className="hover:text-gray-500">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-gray-500">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-gray-500">
            FAQ
          </Link>
          <Link href="#contact" className="hover:text-gray-500">
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex md:items-center gap-4">
          <Link href="/auth/login" className="text-indigo-700">
            Login
          </Link>
          <Link href="/auth/auth/register">
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Dev-folabi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-gray-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yusuf-afolabi-ba3461145"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-gray-500"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4 bg-indigo-50">
          <Link
            href="#features"
            className="block text-indigo-700 hover:text-gray-500"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="block text-indigo-700 hover:text-gray-500"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="block text-indigo-700 hover:text-gray-500"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            className="block text-indigo-700 hover:text-gray-500"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="block text-indigo-700 hover:text-gray-500"
          >
            Sign In
          </Link>
          <Link href="/auth/register">
            <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2 rounded-full shadow-md">
              Get Started
            </Button>
          </Link>
          <div className="flex justify-center space-x-4 pt-2">
            <a
              href="https://github.com/Dev-folabi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-gray-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-afolabi-ba3461145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-gray-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
