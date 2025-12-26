"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, Quote } from "lucide-react";
import { Module } from "@/types/learning";

interface MentorSupportProps {
  Module: Module;
}

export default function MentorSupport({ Module }: MentorSupportProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <h2 className="text-lg font-bold mb-4 text-gray-900">Mentor Support</h2>

      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-indigo-100 ring-4 ring-indigo-50 overflow-hidden mb-4 transition-transform hover:scale-105 duration-200">
          <Image
            src="/Mentor-AI-Logo-Transparent.png"
            alt="Mentor"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        {/* To be updated --- Mentor name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Mentor</h3>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-3">
          {/* To be updated -- Career Name */}
          {Module.level} Expert
        </div>
        {/* To be updated -- Career Name */}
        <div className="relative mb-6 max-w-sm p-4 bg-blue-50 rounded-md border border-blue-200 shadow-sm text-gray-700 text-sm">
          <Quote className="absolute top-0 left-0 h-6 w-6 text-blue-400 opacity-50 transform -translate-x-2 -translate-y-2" />
          {Module.mentorComment}
        </div>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
          <MessageSquare className="h-4 w-4" />
          <span>Ask a Question</span>
        </button>
      </div>
    </div>
  );
}
