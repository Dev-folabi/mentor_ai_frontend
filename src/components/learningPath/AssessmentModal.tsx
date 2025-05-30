'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Modal } from '@/components/ui/modal';

type AssessmentQuestion = {
  question: string;
  options: string[];
  answer: string;
  mentorComment?: string;
};

type AssessmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  questions: AssessmentQuestion[];
  isCompleted?: boolean;
  userAnswers?: string[];
  score?: number;
};

export default function AssessmentModal({ isOpen, onClose, questions, isCompleted = false, userAnswers = [], score = 0 }: AssessmentModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(isCompleted ? userAnswers : new Array(questions.length).fill(''));
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
//   const isCorrect = isCompleted && userAnswers[currentQuestionIndex] === currentQuestion.answer;

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    // Here you can implement the submission logic
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Assessment">
      <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{currentQuestionIndex + 1} of {questions.length}</span>
          </div>
          <Progress value={progress}  bg="bg-gray-300"
          progressColour="bg-indigo-600" className="h-2" />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !isCompleted && handleOptionSelect(option)}
                disabled={isCompleted}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  isCompleted
                    ? option === currentQuestion.answer
                      ? 'bg-green-50 border-green-600 ring-2 ring-green-600 ring-opacity-50'
                      : option === userAnswers[currentQuestionIndex]
                      ? 'bg-red-50 border-red-600 ring-2 ring-red-600 ring-opacity-50'
                      : 'bg-gray-50 border-gray-200'
                    : selectedAnswers[currentQuestionIndex] === option
                    ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600 ring-opacity-50'
                    : 'hover:bg-gray-50 border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{option}</span>
                  {isCompleted && (
                    <span>
                      {option === currentQuestion.answer && (
                        <span className="text-green-600">✓</span>
                      )}
                      {option === userAnswers[currentQuestionIndex] && option !== currentQuestion.answer && (
                        <span className="text-red-600">✗</span>
                      )}
                    </span>
                  )}
                </div>
              </button>
            ))}
            {isCompleted && currentQuestion.mentorComment && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Mentor&apos;s Feedback:</span> {currentQuestion.mentorComment}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4 border-t">
          {isCompleted && (
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <span className="font-medium">Your Score:</span>
              <span className="text-lg font-bold text-indigo-600">{score}%</span>
            </div>
          )}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-4"
            >
              Previous
            </Button>
            
            {currentQuestionIndex === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={isCompleted || !selectedAnswers[currentQuestionIndex]}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4"
              >
                {isCompleted ? 'Close' : 'Submit'}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!isCompleted && !selectedAnswers[currentQuestionIndex]}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}