"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface OnboardingNavbarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const OnboardingNavbar = ({
  currentStep,
  totalSteps,
  stepLabels,
}: OnboardingNavbarProps) => {
  return (
    <header className="w-full bg-indigo-50 px-6 py-4 shadow-md border-b border-gray-200 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        {/* Logo & Step Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/Mentor-AI-Logo-Transparent.png"
              alt="Mentor AI Logo"
              width={80}
              height={80}
            />
          </div>

          <span className="text-sm text-gray-700">
            Step{" "}
            <span className="font-semibold text-indigo-600">
              {currentStep + 1}
            </span>{" "}
            of {totalSteps}
          </span>
        </div>

        {/* Step Labels with Badges */}
        <div className="hidden sm:flex justify-between items-center gap-4">
          {stepLabels.map((label, index) => (
            <div key={index} className="flex-1 text-center">
              <Badge
                variant={index === currentStep ? "default" : "outline"}
                className={`
                  px-4 py-1 rounded-full
                  transition-all
                  ${
                    index < currentStep
                      ? "bg-indigo-100 text-indigo-600 border-indigo-300"
                      : ""
                  }
                  ${index === currentStep ? "bg-indigo-600 text-white" : ""}
                `}
              >
                {label}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default OnboardingNavbar;
