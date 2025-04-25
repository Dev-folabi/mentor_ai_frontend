import { Careers } from "@/constant/careers";
import { Button } from "@/components/ui/button";
import { Career } from "@/types/global";
import { useState } from "react";

interface StepOneProps {
  selectedCareer: Career | null;
  setSelectedCareer: (career: Career) => void | null;
  onNext: () => void;
}

const StepOne = ({
  selectedCareer,
  setSelectedCareer,
  onNext,
}: StepOneProps) => {
  const [customCareer, setCustomCareer] = useState<string>("");

  const handleContinue = () => {
    if (selectedCareer?.name === "Others" && customCareer.trim()) {
      setSelectedCareer({
        ...selectedCareer,
        name: customCareer,
        desc: "Custom career path",
      });
    }
    onNext();
  };

  return (
    <div className="flex flex-col p-20 items-center">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Choose Your Career Path
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Careers.map((career, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedCareer(career);
              if (career.name !== "Others") {
                setCustomCareer("");
              }
            }}
            className={`cursor-pointer bg-white p-6 rounded-xl border-2 ${
              selectedCareer?.name === career.name
                ? "border-indigo-600 bg-indigo-100"
                : "border-gray-200"
            }`}
          >
            <career.icon
              className={`${
                selectedCareer?.icon === career.icon
                  ? "text-indigo-500"
                  : "text-gray-800"
              } mb-3`}
              size={28}
            />
            <h3 className="text-xl font-semibold">{career.name}</h3>
            {career.name === "Others" ? (
              <input
                type="text"
                placeholder={career.desc}
                onChange={(e) => setCustomCareer(e.target.value)}
                value={customCareer}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ) : (
              <p className="text-gray-600">{career.desc}</p>
            )}
          </div>
        ))}
      </div>
      <Button
        variant={"secondary"}
        onClick={handleContinue}
        className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white"
        disabled={
          !selectedCareer ||
          (selectedCareer.name === "Others" && !customCareer.trim())
        }
      >
        Continue
      </Button>
    </div>
  );
};

export default StepOne;
