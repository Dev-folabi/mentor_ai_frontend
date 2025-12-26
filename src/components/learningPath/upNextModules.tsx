import { Badge } from "@/components/ui/badge";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import ROUTES from "@/constant/routes";
import { Module } from "@/types/learning";
import { GetModuleProgress } from "@/lib/progress";

interface UpNextModulesProps {
  modules: Module[];
  selectedLevel: string;
  status: {
    LOCKED: string;
    COMPLETED: string;
  };
}

const UpNextModules = ({
  modules,
  selectedLevel,
  status,
}: UpNextModulesProps) => {
  const router = useRouter();

  const filteredModules = modules
    .filter(
      (module) =>
        module.level === selectedLevel &&
        (module.status === status.LOCKED || module.status === status.COMPLETED)
    )
    .sort((a, b) => {
      // Sort by status first (LOCKED comes before COMPLETED)
      if (a.status !== b.status) {
        return a.status === status.LOCKED ? -1 : 1;
      }
      // Then sort by module number
      return a.number - b.number;
    });

  if (!selectedLevel || filteredModules.length === 0) return null;

  return (
    <>
      <h2 className="font-medium m-4">Up Next</h2>
      {filteredModules.map((module, index) => (
        <div key={module.id || index}>
          <div className="flex flex-row justify-between items-center mt-2 p-3 bg-white rounded-md">
            <div>
              <h5 className="text-xl font-semibold">{module.title}</h5>
              <p className="text-sm text-gray-500">
                {`Module ${module.number} - ${selectedLevel} Stage`}
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  if (module.id) {
                    router.push(ROUTES.paths.MODULE(module.id));
                  }
                }}
                className={"cursor-pointer"}
              >
                {module.status === status.COMPLETED ? (
                  <Badge className="px-4 py-2 rounded-full bg-green-200 text-green-500">
                    {`${GetModuleProgress(module)}% Completed`}
                  </Badge>
                ) : (
                  <IoIosArrowForward className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpNextModules;
