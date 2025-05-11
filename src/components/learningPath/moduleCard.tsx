import {
  FaBook,
  FaCheckCircle,
  FaFlagCheckered,
  FaTrophy,
} from "react-icons/fa";
import { Circle } from "lucide-react";
import ROUTES from "@/constant/routes";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { HiLockClosed } from "react-icons/hi2";

interface Module {
  id: string;
  title: string;
  number: number;
  status: string;
  content: Array<{
    title: string;
    status: string;
  }>;
  challenges: Array<{
    id: string;
    title: string;
    hasSubmit: boolean;
  }>;
  level: string;
}

interface ModuleCardProps {
  module: Module;
  selectedLevel: string;
  getModuleProgress: (module: Module) => number;
  status: {
    IN_PROGRESS: string;
    NOT_STARTED: string;
    COMPLETED: string;
  };
}

const ModuleCard = ({
  module,
  selectedLevel,
  getModuleProgress,
  status,
}: ModuleCardProps) => {
  const router = useRouter();

  // Only render if module is in progress or not started and matches selectedLevel
  if (
    module.level !== selectedLevel ||
    (module.status !== status.IN_PROGRESS && module.status !== status.NOT_STARTED)
  ) {
    return null;
  }

  return (
    <div className="container flex flex-col bg-white rounded-md mt-4 p-4">
      <div className="flex flex-row justify-between mt-2">
        <div>
          <h5 className="text-xl font-semibold">{module.title}</h5>
          <p className="text-sm text-gray-500">
            {`Module ${module.number} - ${selectedLevel} Stage`}
          </p>
        </div>
        <button
          onClick={() => {
            if (module.id) {
              router.push(ROUTES.paths.MODULE(module.id));
            }
          }}
          className={"cursor-pointer"}
        >
          <Badge
            className={`px-4 py-2 rounded-full ${
              module.status === status.IN_PROGRESS
                ? "bg-indigo-200 text-indigo-500"
                : module.status === status.NOT_STARTED
                ? "bg-blue-200 text-blue-500"
                : "bg-green-200 text-green-500"
            }`}
          >
            {module.status === status.NOT_STARTED ? (
              "Start"
            ) : module.status === status.IN_PROGRESS ? (
              `${getModuleProgress(module)}% Complete`
            ) : module.status === status.COMPLETED ? (
              `${getModuleProgress(module)}% Completed`
            ) : (
              <HiLockClosed className="w-6 h-6" />
            )}
          </Badge>
        </button>
      </div>
      <div className="grid grid-rows md:grid-cols-3 p-3 gap-4">
        {/* Learn */}
        <div className="flex flex-col p-3 border border-gray-400 rounded-sm">
          <div className="flex items-center gap-2 mb-1">
            <FaBook className="text-indigo-500 w-3 h3" />
            <p className="font-semibold"> Learn </p>
          </div>
          {module.content.map((content, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              {content.status === status.COMPLETED ? (
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
            <div key={index} className="flex flex-row items-center gap-2">
              {content.status === status.COMPLETED ? (
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
                <p className="text-sm font-sm mt-2">{challenge.title}</p>
              </div>
              <div>
                <button
                  disabled={
                    challenge.hasSubmit ||
                    module.status !== status.COMPLETED
                  }
                  onClick={() => {
                    if (challenge.id) {
                      router.push(ROUTES.paths.CHALLENGE(challenge.id));
                    }
                  }}
                  className={`${
                    challenge.hasSubmit ||
                    module.status !== status.COMPLETED
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  } bg-gradient hover:bg-indigo-700 px-3 py-2 text-xs text-white rounded-md w-full transition-colors duration-200 mt-2`}
                >
                  Start Assessment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;