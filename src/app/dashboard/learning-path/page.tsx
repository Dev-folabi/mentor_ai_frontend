"use client";

import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { Progress } from "@/components/ui/progress";
import { careerPath } from "@/constant/learning";
import { GitBranchIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { FaLeaf, FaRocket, FaSeedling } from "react-icons/fa";

const LEVELS = {
  BEGINNER: "BEGINNER",
  INTERMEDIATE: "INTERMEDIATE",
  ADVANCED: "ADVANCED",
} as const;

const Status = {
  LOCKED: "LOCKED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  NOT_STARTED: "NOT_STARTED",
} as const;

type Level = (typeof LEVELS)[keyof typeof LEVELS];

const LearningPath = () => {
  const { name, modules } = careerPath;
  const [selectedLevel, setSelectedLevel] = useState<Level | "">("");

  const levels: Level[] = [LEVELS.BEGINNER, LEVELS.INTERMEDIATE, LEVELS.ADVANCED];

  const handleLevelClick = (level: Level) => {
    setSelectedLevel(level);
  };

  const hasLevel = (level: Level) =>
    modules.some((m) => m.level === level);

  const getProgress = (level: Level) => {
    const total = modules.filter((m) => m.level === level).length;
    const completed = modules.filter((m) => m.level === level && m.status === Status.COMPLETED).length;
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  useEffect(() => {
    if (!modules?.length) return;

    for (const level of levels) {
      const incomplete = modules.some((m) => m.level === level && m.status !== Status.COMPLETED);
      if (incomplete) return setSelectedLevel(level);
    }

    for (const level of levels) {
      if (hasLevel(level)) return setSelectedLevel(level);
    }
  }, [modules]);

  return (
    <div className="flex flex-col">
      <DashboardHeader title="My Learning Path" subtitle={name} />

      {/* Roadmap Container */}
      <div className="relative  flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-0 gap-1 p-4">
        {levels.map((level, index) =>
          hasLevel(level) ? (
            <React.Fragment key={level}>
              <div className="flex flex-col items-center relative z-10">
                <button
                  onClick={() => handleLevelClick(level)}
                  className="z-10"
                >
                  <FaSeedling
                    className={`w-8 h-8 md:w-10 md:h-10 p-1 md:p-2 rounded-full border-2 transition-all duration-200 ${
                      selectedLevel === level
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-gray-400 border-gray-300"
                    }`}
                  />
                </button>
                <p className={`mt-2 text-sm font-medium text-center ${selectedLevel === level ? "text-indigo-600" : "text-gray-400"}`}>{level}</p>
              </div>

              {/* Render Progress Line (not after the last level) */}
              {index < levels.length - 1 && hasLevel(levels[index + 1]) && (
                <div className="w-full sm:w-[80px] flex items-center justify-center sm:mx-4">
                  <Progress
                    value={getProgress(level)}
                    bg="bg-gray-300"
                    progressColour="bg-indigo-400"
                    className="h-1 w-[100px] md:w-[120] sm:mt-0"
                  />
                </div>
              )}
            </React.Fragment>
          ) : null
        )}
      </div>
    </div>
  );
};

export default LearningPath;
