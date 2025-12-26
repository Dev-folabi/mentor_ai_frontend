"use client";
import CareerIcons from "@/components/forms/careersIcons";
import React from "react";
import Link from "next/link";
import AuthForm from "@/components/forms/authForm";
import GoogleAuth from "@/components/forms/googleAuth";
import { useParams } from "next/navigation";

const Auth = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-auto">
      {/* Auth Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg">
        <div className="card">
          <h2 className="text-3xl font-extrabold mb-6 text-indigo-700 text-center">
            {id === "login" ? "Welcome Back" : "Create Your Account"}
          </h2>

          {/* Google Auth Button */}
          <GoogleAuth />

          <div className="relative text-center my-4">
            <span className="text-gray-400 text-sm px-2 bg-white z-10 relative">
              OR
            </span>
            <hr className="absolute left-0 top-3 w-full border-gray-300 z-0" />
          </div>

          {/* Auth Form */}
          <AuthForm mode={id === "login" ? "login" : "register"} />

          <p className="text-sm text-center mt-4 text-gray-600">
            {id === "login" ? (
              <>
                Don’t have an account?{" "}
                <Link
                  href="/auth/register"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Sign In
                </Link>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Banner Section */}
      <div className="hidden lg:flex w-1/2 min-h-screen items-center justify-center relative bg-gradient-to-br from-indigo-700 via-blue-600 to-indigo-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm"></div>

        <div className="z-10 p-8 text-center max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Unlock Your Career Potential
          </h2>
          <p className="text-base md:text-lg text-indigo-100 mb-12">
            Personalized AI mentorship to help you grow, learn, and land your
            dream job.
          </p>

          <CareerIcons />

          <p className="mt-8 text-sm text-indigo-200">
            🚀 Learn faster • 📈 Grow smarter • 🤖 Powered by AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
