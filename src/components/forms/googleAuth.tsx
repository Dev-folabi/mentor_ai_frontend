"use client";

import React from "react";
import { FaGoogle } from "react-icons/fa";
//import { signIn } from "next-auth/react";

const GoogleAuth = () => {
  return (
    <button
      onClick={
        () => (window.location.href = "/api/auth/google")
        // signIn("google")
      }
      className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-50 transition mb-4"
    >
      <FaGoogle className="text-lg" />
      Continue with Google
    </button>
  );
};

export default GoogleAuth;
