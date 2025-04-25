// components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Mentor AI</h2>
          <p className="text-gray-400">Your AI-powered career companion.</p>
        </div>

        {/* Product Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Product</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#features" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#demo" className="hover:text-white transition">
                Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div id="contact">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/yusuf-afolabi-ba3461145"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/yusufafolabii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://wa.me/2347080226169"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp size={20} />
            </a>
            <a href="https://github.com/Dev-folabi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Mentor AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
