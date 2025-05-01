"use client";

import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { careerPath } from "@/constant/learning";
import React, { useState, useEffect } from "react";
import { FaMountain, FaSeedling } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi2";
import { PiGitBranch } from "react-icons/pi";

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

  const levels: Level[] = [
    LEVELS.BEGINNER,
    LEVELS.INTERMEDIATE,
    LEVELS.ADVANCED,
  ];

  const handleLevelClick = (level: Level) => {
    setSelectedLevel(level);
  };

  const hasLevel = (level: Level) => modules.some((m) => m.level === level);

  const getProgress = (level: Level) => {
    const total = modules.filter((m) => m.level === level).length;
    const completed = modules.filter(
      (m) => m.level === level && m.status === Status.COMPLETED
    ).length;
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  const getModuleProgress = (module: { content: { status: string }[] }) => {
    const total = module.content.length;
    const completed = module.content.filter(
      (c: { status: string }) => c.status === Status.COMPLETED
    ).length;
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  const handleModuleStart = async (moduleId: string) => {
    try {
      // Find the module to update
      const moduleToUpdate = modules.find((module) => module.id === moduleId);

      if (moduleToUpdate) {
        // Update the module status to in progress
        moduleToUpdate.status = Status.IN_PROGRESS;

        // Initialize the first content item if it exists
        if (moduleToUpdate.content && moduleToUpdate.content.length > 0) {
          moduleToUpdate.content[0].status = Status.IN_PROGRESS;
        }

        // Force a re-render
        setSelectedLevel(moduleToUpdate.level as Level);
      }
    } catch (error) {
      console.error("Error starting module:", error);
    }
  };

  useEffect(() => {
    if (!modules?.length) return;

    for (const level of levels) {
      const incomplete = modules.some(
        (m) => m.level === level && m.status !== Status.COMPLETED
      );
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
                  {(() => {
                    const LEVEL_ICONS = {
                      [LEVELS.BEGINNER]: FaSeedling,
                      [LEVELS.INTERMEDIATE]: PiGitBranch,
                      [LEVELS.ADVANCED]: FaMountain,
                    };

                    const Icon = LEVEL_ICONS[level];
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

      {/* Modules Container */}
      <div className="container flex flex-col bg-white rounded-md mt-2 p-4">
        {modules.map(
          (module, index) =>
            module.level === selectedLevel && (
              <div className="flex flex-row justify-between mt-2" key={index}>
                <div>
                  <h5 className="text-xl font-semibold">{module.title}</h5>
                  <p className="text-sm text-gray-500">
                    {`${module.number} of ${
                      modules.filter((m) => m.level === selectedLevel).length
                    } - ${selectedLevel} Stage`}
                  </p>
                </div>
                <div>
                  <button
                    disabled={module.status !== Status.NOT_STARTED}
                    onClick={() =>
                      module.status === Status.NOT_STARTED &&
                      handleModuleStart(module.id)
                    }
                    className={`cursor-${
                      module.status === Status.NOT_STARTED
                        ? "pointer"
                        : "not-allowed"
                    }`}
                  >
                    <Badge
                      className={`px-4 py-2 rounded-full ${
                        module.status === Status.COMPLETED
                          ? "bg-green-200 text-green-600"
                          : module.status === Status.LOCKED
                          ? "bg-gray-200 text-gray-500"
                          : "bg-indigo-200 text-indigo-600"
                      }`}
                    >
                      {module.status === Status.NOT_STARTED ? (
                        "Start"
                      ) : module.status === Status.IN_PROGRESS ? (
                        `${getModuleProgress(module)}% Complete`
                      ) : module.status === Status.COMPLETED ? (
                        `${getModuleProgress(module)}% Completed`
                      ) : (
                        <HiLockClosed className="w-6 h-6" />
                      )}
                    </Badge>
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default LearningPath;
