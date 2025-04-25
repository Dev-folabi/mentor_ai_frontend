import { Mentors } from "@/constant/careers";
import { Button } from "@/components/ui/button";
import { Mentor } from "@/types/global";
import Image from "next/image";

interface StepFourProps {
  selectedMentor: Mentor | null;
  setSelectedMentor: (mentor: Mentor) => void | null;
  onNext: () => void;
  onBack: () => void;
}

const StepFour = ({
  selectedMentor,
  setSelectedMentor,
  onNext,
  onBack,
}: StepFourProps) => {
  return (
    <div className="flex flex-col p-20 items-center">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Choose Your Mentor Style
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Mentors.map((mentor, index) => (
          <div
            key={index}
            onClick={() => setSelectedMentor(mentor)}
            className={`cursor-pointer bg-white p-6 rounded-xl border-2 ${
              selectedMentor?.name === mentor.name
                ? "border-indigo-600 bg-indigo-100"
                : "border-gray-200"
            }`}
          >
            <Image
              src={mentor.imageUrl}
              className={`${
                selectedMentor?.imageUrl === mentor.imageUrl
                  ? " border-2 border-indigo-500"
                  : "border-2 border-gray-800"
              } mb-3 rounded-full p-3`}
              width={28}
              height={28}
              alt={mentor.name.charAt(0).toUpperCase()}
            />
            <h3 className="text-xl font-semibold">{mentor.name}</h3>
            <p className="text-gray-600 mb-3">{mentor.attribute}</p>
            <p className="text-gray-600">{mentor.desc}</p>
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
          disabled={!selectedMentor}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepFour;
