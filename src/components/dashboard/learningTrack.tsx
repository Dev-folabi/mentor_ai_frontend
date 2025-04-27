import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import dayjs from "dayjs";
import { FaMedal } from "react-icons/fa";
import { learning } from "@/constant/learning";

const getProgressPercentage = (xp: number, totalXp: number) => {
  return (xp / totalXp) * 100;
};

const getDate = (date: string) => {
  const newDate = dayjs(date);
  return newDate.format("MMM DD, YYYY");
};

const LearningTrack = () => {
  return (
    <div className="flex flex-col p-4 md:p-6 max-w-full bg-white rounded-lg shadow-md mt-6">
      <p className="font-bold mb-4">Frontend Development Path</p>

      <div className="flex flex-col space-y-1">
        {learning.map((learn, index) => (
          <div key={index} className="flex items-start gap-6 justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col items-center space-y-1 ">
                <div
                  className={`h-2 w-2 rounded-full ${
                    learn.status === "completed"
                      ? "bg-green-500"
                      : learn.status === "progress"
                      ? "bg-blue-500 animate-soft-pulse"
                      : "bg-gray-500"
                  }`}
                />
                <div>
                  <div className="w-[4px] h-10 flex-1 bg-gray-300" />
                </div>
              </div>

              <div>
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

            <div className="flex flex-row items-center justify-end gap-1 lg:min-w-md">
              {learn.status === "completed" ? (
                <>
                  <Badge className="bg-green-100 text-green-800 px-4 py-1 rounded-full self-end">
                    {learn.totalXp + " XP"}
                  </Badge>
                  <FaMedal className="text-yellow-400" />
                </>
              ) : learn.status === "progress" ? (
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
  );
};

export default LearningTrack;
