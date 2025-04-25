"use client";

import Link from "next/link";
import { FaRobot } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-white text-center px-6">
      <div className="text-indigo-600 text-7xl mb-4 animate-pulse drop-shadow-lg">
        <FaRobot />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-2">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-lg md:text-xl mb-6">
        It seems the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
