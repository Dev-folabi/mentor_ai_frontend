"use client";

import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { careerPath } from "@/constant/learning";
import { Circle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaCheckCircle,
  FaFlagCheckered,
  FaMountain,
  FaSeedling,
  FaTrophy,
} from "react-icons/fa";
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

  const router = useRouter();

  // Set the initial selected level
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

      {/* Modules Container */}
      <div className="container flex flex-col bg-white rounded-md mt-4 p-4">
        {modules.map(
          (module, index) =>
            module.level === selectedLevel &&
            (module.status === Status.IN_PROGRESS ||
              module.status === Status.NOT_STARTED) && (
              <div key={index}>
                {/* Title and badge */}
                <div className="flex flex-row justify-between mt-2">
                  {/* Title / Subtitle */}
                  <div>
                    <h5 className="text-xl font-semibold">{module.title}</h5>
                    <p className="text-sm text-gray-500">
                      {`${module.number} of ${
                        modules.filter((m) => m.level === selectedLevel).length
                      } - ${selectedLevel} Stage`}
                    </p>
                  </div>
                  {/* Badge */}
                  <div>
                    <button
                      disabled={module.status !== Status.NOT_STARTED}
                      onClick={() => router.push(`/learning-path/${module.id}`)}
                      className={`cursor-${
                        module.status === Status.NOT_STARTED
                          ? "pointer"
                          : "not-allowed"
                      }`}
                    >
                      <Badge
                        className={`px-4 py-2 rounded-full ${
                          module.status === Status.COMPLETED
                            ? "bg-green-200 text-green-500"
                            : module.status === Status.LOCKED
                            ? "bg-gray-200 text-gray-500"
                            : module.status === Status.IN_PROGRESS
                            ? "bg-indigo-200 text-indigo-500"
                            : module.status === Status.NOT_STARTED
                            ? "bg-blue-200 text-blue-500"
                            : "bg-gray-200 text-gray-500"
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
                {/* Cards */}
                <div className="grid grid-rows md:grid-cols-3 p-3 gap-4">
                  {/* Learn */}
                  <div className="flex flex-col p-3 border border-gray-400 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <FaBook className="text-indigo-500 w-3 h3" />
                      <p className="font-semibold"> Learn </p>
                    </div>
                    {module.content.map((content, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center gap-2"
                      >
                        {content.status === Status.COMPLETED ? (
                          <FaCheckCircle className="text-green-500  w-4 h-4" />
                        ) : (
                          <Circle className="text-gray-500 w-4 h-4" />
                        )}
                        <p className="text-sm font-sm mt-2">{content.title}</p>
                      </div>
                    ))}
                  </div>
                  {/* Checkpoint */}
                  <div className="flex flex-col p-3 border border-gray-400 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <FaFlagCheckered className="text-indigo-500 w-3 h3" />
                      <p className="font-semibold"> Checkpoint </p>
                    </div>
                    {module.content.map((content, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center gap-2"
                      >
                        {content.status === Status.COMPLETED ? (
                          <FaCheckCircle className="text-green-500  w-4 h-4" />
                        ) : (
                          <Circle className="text-gray-500 w-4 h-4" />
                        )}
                        <p className="text-sm font-sm mt-2">{content.title}</p>
                      </div>
                    ))}
                  </div>
                  {/* Challenge */}
                  <div className="flex flex-col p-3 border border-gray-400 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <FaTrophy className="text-indigo-500 w-3 h3" />
                      <p className="font-semibold"> Challenge </p>
                    </div>
                    {module.challenges.map((challenge, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2">
                          {challenge.hasSubmit ? (
                            <FaCheckCircle className="text-green-500  w-4 h-4 mt-2" />
                          ) : (
                            <Circle className="text-gray-500 w-4 h-4 mt-2" />
                          )}
                          <p className="text-sm font-sm mt-2">
                            {challenge.title}
                          </p>
                        </div>

                        <div>
                          <button
                            disabled={
                              challenge.hasSubmit ||
                              module.status !== Status.COMPLETED
                            }
                            onClick={() => {
                              // Handle challenge submission
                              router.push(`/challenge/${challenge.id}`);

                              console.log(
                                `Starting challenge: ${challenge.title}`
                              );
                            }}
                            className={`${
                              challenge.hasSubmit ||
                              module.status !== Status.COMPLETED
                                ? "cursor-not-allowed"
                                : "cursor-pointer"
                            } bg-gradient hover:bg-indigo-700 px-3 py-1 text-xs text-white rounded-md w-full transition-colors duration-200 mt-2`}
                          >
                            Start Assessment
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default LearningPath;
