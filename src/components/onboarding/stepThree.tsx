import { Goals } from "@/constant/careers";
import { Button } from "@/components/ui/button";
import { Goal } from "@/types/global";
import { Slider } from "@/components/ui/slider";

interface StepThreeProps {
  selectedGoal: Goal | null;
  setSelectedGoal: (goal: Goal) => void | null;
  selectedDuration: number;
  setSelectedDuration: (value: number) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepThree = ({
  selectedGoal,
  setSelectedGoal,
  selectedDuration,
  setSelectedDuration,
  onNext,
  onBack,
}: StepThreeProps) => {
  const handleSliderChange = (value: number[]) => {
    setSelectedDuration(value[0]);
  };

  return (
    <div className="flex flex-col p-20 items-center">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        What&apos;s Your Main Goal?
      </h2>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Goals.map((goal, index) => (
          <div
            key={index}
            onClick={() => setSelectedGoal(goal)}
            className={`cursor-pointer bg-white p-6 rounded-xl border-2 ${
              selectedGoal?.goal === goal.goal
                ? "border-indigo-600 bg-indigo-100"
                : "border-gray-200"
            }`}
          >
            <goal.icon
              className={`${
                selectedGoal?.icon === goal.icon
                  ? "text-indigo-500"
                  : "text-gray-800"
              } mb-3`}
              size={28}
            />
            <h3 className="text-xl font-semibold">{goal.goal}</h3>
            <p className="text-gray-600">{goal.desc}</p>
          </div>
        ))}
      </div>

      {/* Duration Slider */}
      <div className="w-full max-w-xl text-center mt-8">
        <p className="text-gray-600 mb-6">
          In how many weeks do you want to achieve this?
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 px-4">
          <Slider
            value={[selectedDuration]}
            min={1}
            max={48}
            step={1}
            onValueChange={handleSliderChange}
            className="w-full [&_[role=slider]]:bg-indigo-600 [&_[role=slider]]:border-indigo-600 [&_[data-part=track]]:bg-indigo-500"
          />

          <div className="text-indigo-600 font-bold text-lg whitespace-nowrap">
            <p className="text-sm text-gray-500">
              You&apos;ll achieve your goal in{" "}
              <strong>{selectedDuration}</strong>{" "}
              {selectedDuration === 1 ? "week" : "weeks"}.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-md mt-12">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>

        <Button
          variant={"secondary"}
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
          disabled={!selectedGoal}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
