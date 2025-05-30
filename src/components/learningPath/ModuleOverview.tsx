"use client";

import React from "react";
import { Clock, BookOpen } from "lucide-react";
import { Module } from "@/types/learning"

interface ModuleOverviewProps {
  Module: Module;
}

export default function ModuleOverview({ Module }: ModuleOverviewProps) {
  return (
    <div className="bg-white rounded-lg p-6 mb-6 shadow">
      <h2 className="text-lg font-bold mb-4">Module Overview</h2>

      <div className="flex items-start mb-4">
        <Clock className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
        <div>
          <h3 className="font-medium">Duration</h3>
          {/* To be update */}
          <p className="text-sm text-gray-600">
            {Module.durationWeeks} days of content
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <BookOpen className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
        <div>
          <h3 className="font-medium">Learning Objectives</h3>
          <ul className="text-sm text-gray-800 list-disc ml-5 mt-1 space-y-1">
            {Module.objective?.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}