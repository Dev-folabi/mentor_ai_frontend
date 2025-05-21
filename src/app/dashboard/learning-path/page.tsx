"use client";

import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { careerPath } from "@/constant/learning";
import { LEVELS, Status } from "@/constant/levels";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import LevelRoadmap from "@/components/learningPath/levelRoadmap";
import ModuleCard from "@/components/learningPath/moduleCard";
import UpNextModules from "@/components/learningPath/upNextModules";

type Level = (typeof LEVELS)[keyof typeof LEVELS];

const LearningPath = () => {
  const { name, modules } = careerPath;
  const [selectedLevel, setSelectedLevel] = useState<Level | "">("");
  const [completedLevels, setCompletedLevels] = useState<Level[]>([]);

  const levels = useMemo<Level[]>(
    () => [LEVELS.BEGINNER, LEVELS.INTERMEDIATE, LEVELS.ADVANCED],
    []
  );

  const handleLevelClick = (level: Level) => {
    setSelectedLevel(level);
  };

  const hasLevel = useCallback(
    (level: Level) => modules.some((m) => m.level === level),
    [modules]
  );

  const getProgress = (level: Level) => {
    const total = modules.filter((m) => m.level === level).length;
    const completed = modules.filter(
      (m) => m.level === level && m.status === Status.COMPLETED
    ).length;
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  // Set the initial selected level
  useEffect(() => {
    if (!modules?.length) return;

    // Update completed levels
    const completed = levels.filter((level) => {
      const levelModules = modules.filter((m) => m.level === level);
      return (
        levelModules.length > 0 &&
        levelModules.every((m) => m.status === Status.COMPLETED)
      );
    });
    setCompletedLevels(completed);

    // Set initial selected level
    for (const level of levels) {
      const incomplete = modules.some(
        (m) => m.level === level && m.status !== Status.COMPLETED
      );
      if (incomplete) return setSelectedLevel(level);
    }

    // Fallback: select first available level if all are completed
    for (const level of levels) {
      if (hasLevel(level)) return setSelectedLevel(level);
    }
  }, [modules, levels, hasLevel]);

  return (
    <div className="flex flex-col">
      <DashboardHeader title="My Learning Path" subtitle={name} />

      {/* Roadmap Container */}
      <LevelRoadmap
        levels={levels}
        selectedLevel={selectedLevel}
        handleLevelClick={handleLevelClick}
        hasLevel={hasLevel}
        getProgress={getProgress}
      />

      {/* Module Card */}
      {selectedLevel &&
        !completedLevels.includes(selectedLevel) &&
        modules
          .filter(
            (module) =>
              module.level === selectedLevel &&
              (module.status === Status.IN_PROGRESS ||
                module.status === Status.NOT_STARTED)
          )
          .map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              selectedLevel={selectedLevel}
              // getModuleProgress={getModuleProgress}
              status={Status}
            />
          ))}

      {/* Next Modules */}

      <UpNextModules
        modules={modules}
        selectedLevel={selectedLevel}
        // getModuleProgress={getModuleProgress}
        status={{ LOCKED: Status.LOCKED, COMPLETED: Status.COMPLETED }}
      />
    </div>
  );
};

export default LearningPath;
