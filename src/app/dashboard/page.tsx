import DashboardHeader from "@/components/dashboard/dashboardHeader";
import React from "react";
import { FaFire, FaMedal, FaStar } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Code, Rocket } from "lucide-react";
import { HiLockClosed } from "react-icons/hi2";

const cards = [
  {
    title: "Total XP",
    progress: 2450,
    desc: "Level 12",
  },
  {
    title: "Completed Modules",
    progress: "24/36",
    desc: "67% complete",
  },
  {
    title: "Badge Earned",
    progress: 15,
    desc: "3 this week",
  },
  {
    title: "Study Streak",
    progress: 12,
    desc: "days",
  },
];

const learning = [
  {
    id: "1",
    title: "HTML & CSS Fundamentalls",
    xp: 300,
    totalXp: 300,
    status: "completed",
    achievedBadge: Code,
    achievedTitle: "Code Master",
    updated: "2025/04/15",
  },
  {
    id: "2",
    title: "JavaScript Basics",
    xp: 150,
    totalXp: 250,
    status: "progress",
    achievedBadge: Rocket,
    achievedTitle: "Quick Learner",
    updated: "2025/04/20",
  },
  {
    id: "3",
    title: "React JS Framework",
    xp: 0,
    totalXp: 500,
    status: "locked",
    achievedBadge: BadgeCheck,
    achievedTitle: "CSS Expert",
    updated: "2025/04/10",
  },
];

const Dashboard = () => {
  const getProgressPercentage = (xp: number, totalXp: number) => {
    return (xp / totalXp) * 100;
  };

  const getDate = (date: string) => {
    const newDate = dayjs(date);
    return newDate.format("MMM DD, YYYY");
  };

  return (
    <div className="flex flex-col ">
      {/* Header */}
      <DashboardHeader
        title="Progress"
        badgeText="Frontend"
        subtitle="Frontend Develoment Track"
      />

      {/* Cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            className="flex flex-col p-4 md:p-6 w-full bg-white rounded-lg shadow-md"
            key={index}
          >
            {/* Title */}
            <div className="flex items-center justify-between font-semibold">
              <p>{card.title}</p>
              {card.title === "Total XP" ? (
                <FaStar className="h-6 w-6 text-yellow-400" />
              ) : card.title === "Completed Modules" ? (
                <HiBadgeCheck className="h-6 w-6 text-green-500" />
              ) : card.title === "Badge Earned" ? (
                <FaMedal className="h-6 w-6 text-blue-500" />
              ) : (
                <FaFire className="h-6 w-6 text-orange-400" />
              )}
            </div>

            {/* Progress & Desc */}
            <div className="mt-3">
              <p className="text-2xl font-bold">{card.progress}</p>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Track */}
      <div className="flex flex-col p-4 md:p-6 max-w-full bg-white rounded-lg shadow-md mt-6">
        {/* Title */}
        <p className="font-bold mb-4">Frontend Development Path</p>

        {/* Tracks */}
        <div className="flex flex-col space-y-1">
          {learning.map((learn, index) => (
            <div
              key={index}
              className="flex items-start gap-6 justify-between"
            >
              {/* Left Content */}
              <div className="flex gap-4">
                {/* Dot and line */}
                <div className="flex flex-col items-center space-y-1 ">
                  {/* Dot */}
                  <div
                    className={`h-2 w-2 rounded-full ${
                      learn.status === "completed"
                        ? "bg-green-500"
                        : learn.status === "progress"
                        ? "bg-blue-500 animate-soft-pulse"
                        : "bg-gray-500"
                    }`}
                  />
                  {/* Line */}
                  <div>
                    <div className="w-[4px] h-10 flex-1 bg-gray-300" />
                  </div>
                </div>

                {/* Track: Contents */}
                <div className="">
                  <p
                    className={`font-normal md:font-medium ${
                      learn.status === "locked" ? "text-gray-500" : "text-black"
                    }`}
                  >
                    {learn.title}
                  </p>
                  <p
                    className={`font-light md:font-normal ${
                      learn.status === "locked"
                        ? "text-gray-400"
                        : "text-gray-500"
                    } `}
                  >
                    {learn.status === "completed"
                      ? `Completed on ${getDate(learn.updated)}`
                      : learn.status === "progress"
                      ? `In Progress - ${getProgressPercentage(
                          learn.xp,
                          learn.totalXp
                        )}% completed`
                      : `Locked - ${
                          index > 0
                            ? `Complete ${learning[index - 1].title} first`
                            : "Start Learning"
                        } `}
                  </p>
                </div>
              </div>

              {/* Right Badge and Progress */}
              <div className="flex flex-row items-center justify-end gap-1 lg:min-w-md">
                {learn.status === "completed" ? (
                  <>
                    <Badge className="bg-green-100 text-green-800 px-4 py-1 rounded-full self-end">
                      {learn.totalXp + " XP"}
                    </Badge>
                    <FaMedal className="text-yellow-400" />
                  </>
                ) : learn.status === "progress" ? (
                  <>
                    <div className="flex flex-col-reverse lg:flex-row flex-1 gap-4 md:gap-1 items-center">
                      <Progress
                        value={getProgressPercentage(learn.xp, learn.totalXp)}
                        bg="bg-gray-200"
                        progressColour="bg-blue-400"
                        className=""
                      />
                      <Badge className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full self-end">
                        {`${learn.xp}/${learn.totalXp} XP`}
                      </Badge>
                    </div>
                  </>
                ) : (
                  <Badge className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full self-end">
                    {learn.totalXp + " XP"}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col p-4 sm:p-6 md:p-8 w-full bg-white mt-6 rounded-lg shadow-md gap-6">
        <p className="font-bold">Recent Achievements</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {learning.map((learn, index) => (
            <div key={index} className="flex flex-col items-center">
              {learn.status === "completed" ? (
                <learn.achievedBadge className="bg-amber-100 rounded-full text-amber-400 p-2 w-12 h-12" />
              ) : (
                <HiLockClosed className="bg-gray-100 rounded-full text-gray-400 p-2 w-12 h-12" />
              )}
              <p className="font-normal mt-2 text-sm text-center">
                {learn.achievedTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
