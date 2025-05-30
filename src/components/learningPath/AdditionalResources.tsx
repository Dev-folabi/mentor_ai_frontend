"use client";

import React from "react";
import { FileCode, Video, MessageSquare } from "lucide-react";

export default function AdditionalResources() {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 mb-6">
      <h2 className="text-lg font-bold mb-4 text-gray-900">
        Additional Resources
      </h2>

      <div className="space-y-4">
        <button className="w-full group flex items-center p-2 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors duration-200">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-200">
            <FileCode className="h-5 w-5 text-purple-600" />
          </div>
          <div className="flex-1 text-left">
            <span className="text-sm font-medium text-gray-900 block">
              Documentation
            </span>
          </div>
        </button>

        <button className="w-full group flex items-center p-2 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors duration-200">
          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors duration-200">
            <Video className="h-5 w-5 text-red-600" />
          </div>
          <div className="flex-1 text-left">
            <span className="text-sm font-medium text-gray-900 block">
              Video Tutorials
            </span>
          </div>
        </button>

        <button className="w-full group flex items-center p-2 border border-gray-200 rounded-lg hover:bg-teal-50 transition-colors duration-200">
          <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4 group-hover:bg-teal-200 transition-colors duration-200">
            <MessageSquare className="h-5 w-5 text-teal-600" />
          </div>
          <div className="flex-1 text-left">
            <span className="text-sm font-medium text-gray-900 block">
              Community Forum
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}