import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface StepDurationProps {
  duration: number;
  setDuration: (value: number) => void;
}

const StepDuration: React.FC<StepDurationProps> = ({ duration, setDuration }) => {
  const [localDuration, setLocalDuration] = useState<number>(duration);

  const handleSliderChange = (value: number[]) => {
    setLocalDuration(value[0]);
    setDuration(value[0]);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Select Your Learning Duration
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Choose the number of weeks you plan to dedicate to your learning path.
      </p>
      <div className="w-full max-w-md">
        <Slider
          defaultValue={[localDuration]}
          min={1}
          max={52}
          step={1}
          onValueChange={handleSliderChange}
        />
        <div className="text-center mt-4 text-indigo-600 font-semibold">
          {localDuration} {localDuration === 1 ? "week" : "weeks"}
        </div>
      </div>
      {/* <div className="flex justify-between w-full max-w-md mt-8">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default StepDuration;
