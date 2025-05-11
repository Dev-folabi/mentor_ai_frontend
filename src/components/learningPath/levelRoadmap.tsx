import { LEVELS } from "@/constant/levels";
import { FaSeedling, FaMountain } from "react-icons/fa";
import { PiGitBranch } from "react-icons/pi";
import { Progress } from "@/components/ui/progress";
import React from "react";

type Level = (typeof LEVELS)[keyof typeof LEVELS];

const LevelRoadmap = ({
  levels,
  selectedLevel,
  handleLevelClick,
  hasLevel,
  getProgress,
}: {
  levels: Level[];  // Changed from string[] to Level[]
  selectedLevel: Level | "";  // Changed from string to match the parent component
  handleLevelClick: (level: Level) => void;  // Changed parameter type to Level
  hasLevel: (level: Level) => boolean;  // Changed parameter type to Level
  getProgress: (level: Level) => number;  // Changed parameter type to Level
}) => {

  return (
    <div className="relative  flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-0 gap-1 p-4">
    {levels.map((level, index) =>
      hasLevel(level) ? (
        <React.Fragment key={level}>
          <div className="flex flex-col items-center relative z-10">
            <button
              onClick={() => handleLevelClick(level)}
              className="z-10"
            >
              {(() => {
                const LEVEL_ICONS = {
                  [LEVELS.BEGINNER]: FaSeedling,
                  [LEVELS.INTERMEDIATE]: PiGitBranch,
                  [LEVELS.ADVANCED]: FaMountain,
                };

                const Icon = LEVEL_ICONS[level as keyof typeof LEVEL_ICONS];
                const iconClassName = `w-8 h-8 md:w-10 md:h-10 p-1 md:p-2 rounded-full border-2 transition-all duration-200 ${
                  selectedLevel === level
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-400 border-gray-300"
                }`;

                return <Icon className={iconClassName} />;
              })()}
            </button>
            <p
              className={`mt-2 text-sm font-medium text-center ${
                selectedLevel === level
                  ? "text-indigo-600"
                  : "text-gray-400"
              }`}
            >
              {level}
            </p>
          </div>

          {/* Render Progress Line (not after the last level) */}
          {index < levels.length - 1 && hasLevel(levels[index + 1]) && (
            <div className="flex-1 flex items-center justify-center sm:mx-4 w-full">
              <Progress
                value={getProgress(level)}
                bg="bg-gray-300"
                progressColour="bg-indigo-400"
                className="h-1 w-full"
              />
            </div>
          )}
        </React.Fragment>
      ) : null
    )}
  </div>
  );
};

export default LevelRoadmap;
