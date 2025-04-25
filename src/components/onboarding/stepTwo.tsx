import { Levels } from "@/constant/careers";
import { Button } from "@/components/ui/button";
import { Level } from "@/types/global";

interface StepTwoProps {
  selectedLevel: Level | null;
  setSelectedLevel: (level: Level) => void | null;
  onNext: () => void;
  onBack: () => void;
}

const StepTwo = ({
  selectedLevel,
  setSelectedLevel,
  onNext,
  onBack,
}: StepTwoProps) => {
  return (
    <div className="flex flex-col p-20 items-center">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        What&apos;s Your Current Skill Level?{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Levels.map((level, index) => (
          <div
            key={index}
            onClick={() => setSelectedLevel(level)}
            className={`cursor-pointer bg-white p-6 rounded-xl border-2 ${
              selectedLevel?.level === level.level
                ? "border-indigo-600 bg-indigo-100"
                : "border-gray-200"
            }`}
          >
            <level.icon
              className={`${
                selectedLevel?.icon === level.icon
                  ? "text-indigo-500"
                  : "text-gray-800"
              } mb-3`}
              size={28}
            />
            <h3 className="text-xl font-semibold">{level.level}</h3>
            <p className="text-gray-600">{level.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full max-w-md mt-12">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>

        <Button
          variant={"secondary"}
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
          disabled={!selectedLevel}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
