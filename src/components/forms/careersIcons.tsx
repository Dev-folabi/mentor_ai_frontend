import {
  FaCode,
  FaPaintBrush,
  FaBriefcase,
  FaChartLine,
  FaRobot,
  FaUserGraduate,
} from "react-icons/fa";
import React from "react";

const iconList = [
  FaCode,
  FaPaintBrush,
  FaBriefcase,
  FaChartLine,
  FaRobot,
  FaUserGraduate,
];

const CareerIcons = () => {
  const duplicatedIcons = [...iconList, ...iconList];

  return (
    <div className="relative w-full mt-8 overflow-hidden">
      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-blue-600 via-blue-600/70 to-transparent z-10 pointer-events-none" />

      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-blue-600 via-blue-600/70 to-transparent z-10 pointer-events-none" />

      {/* Auto-scroll container */}
      <div className="group">
        <div className="flex gap-6 text-2xl text-white whitespace-nowrap animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedIcons.map((IconComponent, index) => (
            <div
              key={`career-icon-${index}`}
              className="p-4 bg-white/10 rounded-xl backdrop-blur-sm shadow-md hover:scale-110 transition-transform"
            >
              <IconComponent />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerIcons;
