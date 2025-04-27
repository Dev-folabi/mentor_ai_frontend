import { learning } from "@/constant/learning";
import { HiLockClosed } from "react-icons/hi2";

// const learning = [
//   {
//     id: "1",
//     title: "HTML & CSS Fundamentalls",
//     status: "completed",
//     achievedBadge: () => null,
//     achievedTitle: "Code Master",
//   },
//   {
//     id: "2",
//     title: "JavaScript Basics",
//     status: "progress",
//     achievedBadge: () => null,
//     achievedTitle: "Quick Learner",
//   },
//   {
//     id: "3",
//     title: "React JS Framework",
//     status: "locked",
//     achievedBadge: () => null,
//     achievedTitle: "CSS Expert",
//   },
// ];

const RecentAchievements = () => {
  return (
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
  );
};

export default RecentAchievements;
