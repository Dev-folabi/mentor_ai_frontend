import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { learningPath } from "@/constant/learning";
import React from "react";



const LearningPath = () => {
  const {learningTrack, beginner, intermediate, advance} = learningPath;
  return (
    <div className="flex flex-col">
      <DashboardHeader
        title="My Learning Path"
        subtitle={learningTrack}
      />

{/* Learning Track */}
<div className="flex">
  {/* Icon & Text */}
<div className="flex flex-col">
{beginner.icon }
</div>
</div>

    </div>
  );
};

export default LearningPath;
