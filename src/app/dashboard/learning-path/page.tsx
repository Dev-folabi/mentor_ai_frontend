import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { careerPath } from "@/constant/learning";
import React from "react";

const LearningPath = () => {
  const { name } = careerPath;
  return (
    <div className="flex flex-col">
      <DashboardHeader title="My Learning Path" subtitle={name} />

      {/* Learning Track */}
      <div className="flex">
        {/* Icon & Text */}
        <div className="flex flex-col">{}</div>
      </div>
    </div>
  );
};

export default LearningPath;
