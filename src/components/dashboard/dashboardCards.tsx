import { FaFire, FaMedal, FaStar } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

const cards = [
  { title: "Total XP", progress: 2450, desc: "Level 12" },
  { title: "Completed Modules", progress: "24/36", desc: "67% complete" },
  { title: "Badge Earned", progress: 15, desc: "3 this week" },
  { title: "Study Streak", progress: 12, desc: "days" },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          className="flex flex-col p-4 md:p-6 w-full bg-white rounded-lg shadow-md"
          key={index}
        >
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
          <div className="mt-3">
            <p className="text-2xl font-bold">{card.progress}</p>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
