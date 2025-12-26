"use client";

import { useState } from "react";
import StepOne from "@/components/onboarding/stepOne";
import { Career, Goal, Level, Mentor } from "@/types/global";
import StepTwo from "@/components/onboarding/stepTwo";
import StepThree from "@/components/onboarding/stepThree";
import StepFour from "@/components/onboarding/stepFour";
import StepSummary from "@/components/onboarding/stepSummary";
import OnboardingNavbar from "@/components/onboarding/onboardingNavbar";

const steps = ["step1", "step2", "step3", "step4", "summary"];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number>(4);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const handleNext = (): void => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => setCurrentStep((prev) => prev - 1);
  return (
    <>
      <OnboardingNavbar
        currentStep={currentStep}
        totalSteps={steps.length}
        stepLabels={steps.map(
          (step) => step.charAt(0).toUpperCase() + step.slice(1)
        )}
      />
      <div className="bg-indigo-50 min-h-screen p-2 md:p-6">
        {steps[currentStep] === "step1" && (
          <StepOne
            selectedCareer={selectedCareer}
            setSelectedCareer={setSelectedCareer}
            onNext={handleNext}
          />
        )}
        {steps[currentStep] === "step2" && (
          <StepTwo
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {steps[currentStep] === "step3" && (
          <StepThree
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {steps[currentStep] === "step4" && (
          <StepFour
            selectedMentor={selectedMentor}
            setSelectedMentor={setSelectedMentor}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {steps[currentStep] === "summary" && (
          <StepSummary
            career={selectedCareer!}
            level={selectedLevel!}
            goal={selectedGoal!}
            duration={selectedDuration!}
            mentor={selectedMentor!}
            onBack={handleBack}
          />
        )}
      </div>
    </>
  );
};

export default Onboarding;
