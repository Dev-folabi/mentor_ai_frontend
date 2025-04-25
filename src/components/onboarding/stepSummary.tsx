import { Button } from "@/components/ui/button";
import { Career, Goal, Level, Mentor } from "@/types/global";
import { Sparkles } from "lucide-react";
import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { mentorToastPromise } from "../toast";

interface StepSummaryProps {
  career: Career;
  level: Level;
  goal: Goal;
  duration: number;
  mentor: Mentor;
  onBack: () => void;
}

const StepSummary = ({
  career,
  level,
  goal,
  duration,
  mentor,
  onBack,
}: StepSummaryProps) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    const payload = { career, level, goal, duration, mentor };
    setLoading(true);

    // setTimeout(() => setLoading(true), 0);

    try {
      await mentorToastPromise(
        new Promise((resolve) => {
          setTimeout(() => {
            console.log("Send this to backend:", payload);
            resolve("success");
          }, 3000);
        }),
        {
          loading: "Creating your learning path...",
          success: "Learning path created successfully! 🚀",
          error: "Something went wrong!",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-10 items-center">
      <h2 className="text-3xl font-bold text-black mb-10 text-center">
        Your Learning Path Summary
      </h2>

      <div className="flex flex-col md:flex-row gap-12 bg-white p-10 rounded-xl shadow max-w-5xl justify-center">
        <div className="flex flex-col gap-6">
          {/* Career */}
          <div className="flex gap-4 items-center">
            <div className="bg-indigo-50 text-indigo-500 p-4 rounded-md">
              {career?.icon && React.createElement(career.icon)}
            </div>
            <div className="text-gray-600">
              <p>Career Path</p>
              <p>
                <strong>{career?.name}</strong>
              </p>
            </div>
          </div>

          {/* Level */}
          <div className="flex gap-4 items-center">
            <div className="bg-indigo-50 text-indigo-500 p-4 rounded-md">
              {level?.icon && React.createElement(level.icon)}
            </div>
            <div className="text-gray-600">
              <p>Skill Level</p>
              <p>
                <strong>{level?.level}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Goal */}
          <div className="flex gap-4 items-center">
            <div className="bg-indigo-50 text-indigo-500 p-4 rounded-md">
              {goal?.icon && React.createElement(goal.icon)}
            </div>
            <div className="text-gray-600">
              <p>Your Goal</p>
              <p>
                <strong>{goal?.goal}</strong> in {duration}{" "}
                {duration === 1 ? "week" : "weeks"}
              </p>
            </div>
          </div>

          {/* Mentor */}
          <div className="flex gap-4 items-center">
            <div className="bg-indigo-50 text-indigo-500 p-4 rounded-md">
              <FaUserGraduate />
            </div>
            <div>
              <p>Your Mentor</p>
              <div className="flex  items-center gap-3 text-gray-600 mt-3">
                <img
                  src={mentor?.imageUrl}
                  alt="mentor"
                  className="w-10 h-10 rounded-full"
                />
                <p>
                  <strong>{mentor?.name}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-between w-full max-w-md mt-12">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>

        <Button
          variant="secondary"
          onClick={!loading ? handleSubmit : undefined}
          aria-disabled={loading}
          className={`bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2 transition-all duration-300 ease-in-out ${
            loading ? "opacity-70 pointer-events-none" : ""
          }`}
        >
          {loading ? "Creating..." : "Create My Learning Path"}
          <Sparkles
            size={18}
            className={loading ? "animate-spin text-white" : ""}
          />
        </Button>
      </div>
    </div>
  );
};

export default StepSummary;
