"use client";

import React, { useState, useRef, useEffect } from "react";
import AssessmentModal from "@/components/learningPath/AssessmentModal";
import { Button } from "@/components/ui/button";
import {
  Clock,
  BookOpen,
  Play,
  FileText,
  FileCode,
  Video,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { useApi } from "@/hooks/useApi";
import { getModuleContent } from "@/services/api/modules";
import { Badge } from "@/components/ui/badge";
import { Status } from "@/constant/levels";
import { Progress } from "@/components/ui/progress";
import { GetModuleProgress } from "@/lib/progress";
import { FaLock } from "react-icons/fa";

interface PageProps {
  params: {
    moduleId: string;
  };
}

export default function Module({ params }: PageProps) {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedAssessment, setSelectedAssessment] = useState<{
    questions: { question: string; options: string[]; answer: string; mentorComment?: string; }[];
    isCompleted: boolean;
    userAnswers?: string[];
    score?: number;
  } | null>(null);

  // Refs for scrolling to modules - dynamically created based on content
  const [moduleRefs, setModuleRefs] = useState<
    Record<string, React.RefObject<HTMLDivElement>>
  >({});
  const {
    data: moduleResponse,
    loading,
    error,
  } = useApi(() => getModuleContent(params.moduleId), { immediate: true });
  // Store refs in a ref object
  const refsMapRef = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {}
  );

  // Update refs when module data is loaded
  useEffect(() => {
    if (moduleResponse?.data?.content) {
      // Create a ref for each content item if it doesn't exist
      moduleResponse.data.content.forEach((content, index) => {
        const refKey = content.id || `content-${index}`;
        if (!refsMapRef.current[refKey]) {
          refsMapRef.current[refKey] = React.createRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
        }
      });

      // Update the state with the current refs
      setModuleRefs({ ...refsMapRef.current });
    }
  }, [moduleResponse]);

  // Scroll to the selected module when it changes
  useEffect(() => {
    if (selectedModule && moduleRefs[selectedModule]?.current) {
      // Add a small delay to ensure the module content is rendered
      setTimeout(() => {
        moduleRefs[selectedModule].current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [selectedModule]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading module...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500">Error loading module: {error.message}</div>
    );
  }

  if (!moduleResponse || !moduleResponse.data) {
    return <div>Module not found</div>;
  }

  const moduleData = moduleResponse.data;

  // Handle module click to expand/collapse
  const handleModuleClick = (moduleId: string) => {
    setSelectedModule(moduleId === selectedModule ? null : moduleId);
  };

  return (
    <div>
      {selectedAssessment && (
        <AssessmentModal
          isOpen={!!selectedAssessment}
          onClose={() => setSelectedAssessment(null)}
          questions={selectedAssessment.questions}
          isCompleted={selectedAssessment.isCompleted}
          userAnswers={selectedAssessment.userAnswers}
          score={selectedAssessment.score}
        />
      )}
      {/* Header Section */}
      <DashboardHeader breadcrumbs={["Learning Path", moduleData.title]} />

      {/* Module Header Section */}
      <div className="flex flex-col bg-white rounded-lg p-4 md:p-6 mb-8 shadow">
        <div className="flex  justify-between items-center ">
          <div>
            <h1 className="text-2xl font-bold">{moduleData.title}</h1>
            <p className="text-gray-600">{moduleData.description}</p>
          </div>

          <div className="flex flex-col items-end mt-4 md:mt-0">
            {moduleData.status === Status.COMPLETED ? (
              <Badge>
                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                  Completed
                </span>
              </Badge>
            ) : moduleData.status === Status.NOT_STARTED ? (
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6">
                {"Start Now"}
              </Button>
            ) : moduleData.status === Status.IN_PROGRESS ? (
              <Badge>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                  In Progress
                </span>
              </Badge>
            ) : (
              <Badge>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900">
                  Locked
                </span>
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mb-3 mt-4">
          <span className="text-sm font-medium  ">Progress</span>
          <span className="text-sm font-medium ">
            {GetModuleProgress(moduleData)}%
          </span>
        </div>

        <Progress
          value={GetModuleProgress(moduleData)}
          bg="bg-gray-300"
          progressColour="bg-indigo-600"
          className="h- w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Module Overview Section */}
          <div className="bg-white rounded-lg  p-6 mb-6 shadow">
            <h2 className="text-lg font-bold mb-4">Module Overview</h2>

            <div className="flex items-start mb-4">
              <Clock className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Duration</h3>
                {/* To be update */}
                <p className="text-sm text-gray-600">
                  {moduleData.durationWeeks} days of content
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <BookOpen className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Learning Objectives</h3>
                <ul className="text-sm text-gray-800 list-disc ml-5 mt-1 space-y-1">
                  {moduleData.objective?.map((obj, index) => (
                    <li key={index}>{obj}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Module Content Section */}
          <div className="bg-white rounded-lg  p-6 shadow">
            <h2 className="text-lg font-bold mb-4">Module Content</h2>

            <div className="space-y-4">
              {moduleData.content && moduleData.content.length > 0 ? (
                moduleData.content.map((content, index) => (
                  <div
                    key={content.id || index}
                    className={`border border-gray-300 rounded-lg overflow-hidden`}
                    ref={moduleRefs[content.id || `content-${index}`]}
                  >
                    <div
                      className={`flex items-center justify-between p-3 ${content.status !== Status.LOCKED  && 'hover:bg-gray-50 cursor-pointer'}`}
                      onClick={() => content.status !== Status.LOCKED && handleModuleClick(`content-${index}`)}
                    >
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          {content.contentType === "video" ? (
                            <Video className="h-4 w-4 text-indigo-600" />
                          ) : (
                            <FileText className="h-4 w-4 text-indigo-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{content.title}</h3>
                          {/* To be updated */}
                          <p className="text-sm text-gray-500">{"10 minutes"}</p>
                        </div>
                      </div>
                      <div className="items-center">
                        {content.status === Status.LOCKED ? (
                          <FaLock className="h-5 w-5 text-gray-600 cursor-not-allowed" />
                        ) : selectedModule === `content-${index}` ? (
                          <ChevronUp className="h-5 w-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        )}
                      </div>
                    </div>

                    {selectedModule === `content-${index}` && content.status !== Status.LOCKED && (
                      <div className="p-4 bg-gray-50 border-t">
                        {content.contentType === "video" && (
                          <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <Play className="h-12 w-12 text-gray-400" />
                          </div>
                        )}

                        <div className="prose max-w-none">
                          <p>
                            {content.description ||
                              "This section covers important concepts and practical examples."}
                          </p>

                          {content.contentAssessment &&
                            content.contentAssessment.length > 0 && (
                              <div className="mt-4 flex justify-between items-center">
                                {/* To be updated */}
<h4>{content.status === Status.COMPLETED ? 'View Score' : 'Assessment Available'}</h4>
                                <Button
                                  onClick={() => setSelectedAssessment({
                                    questions: content.contentAssessment,
                                    isCompleted: content.status === Status.COMPLETED,
                                    userAnswers: content.contentAssessment.userAnswer,
                                    score: content.contentAssessment.score,
                                  })}
                                  className={`${content.status === Status.COMPLETED ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white cursor-pointer`}
                                >
                                  {content.status === Status.COMPLETED ? 'Completed' : 'Take Assessment'}
                                </Button>
                              </div>
                            )}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-4 border rounded-lg bg-gray-50">
                  <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                    <FileText className="h-10 w-10 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Content Available Yet
                  </h3>
                  <p className="text-gray-600 text-center max-w-md mb-6">
                    We&apos;re currently developing content for this module. Check
                    back soon for updates or explore other modules.
                  </p>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Explore Other Modules
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          {/* Additional Resources Section */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 mb-6">
            <h2 className="text-lg font-bold mb-4 text-gray-900">Additional Resources</h2>

            <div className="space-y-4">
              <button className="w-full group flex items-center p-2 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-200">
                  <FileCode className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-sm font-medium text-gray-900 block">Documentation</span>
                </div>
              </button>

              <button className="w-full group flex items-center p-2 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors duration-200">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors duration-200">
                  <Video className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-sm font-medium text-gray-900 block">Video Tutorials</span>
                </div>
              </button>

              <button className="w-full group flex items-center p-2 border border-gray-200 rounded-lg hover:bg-teal-50 transition-colors duration-200">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4 group-hover:bg-teal-200 transition-colors duration-200">
                  <MessageSquare className="h-5 w-5 text-teal-600" />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-sm font-medium text-gray-900 block">Community Forum</span>
                </div>
              </button>
            </div>
          </div>

          {/* Mentor Support Section */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <h2 className="text-lg font-bold mb-4 text-gray-900">Mentor Support</h2>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-indigo-100 ring-4 ring-indigo-50 overflow-hidden mb-4 transition-transform hover:scale-105 duration-200">
                <Image
                  src="/Mentor-AI-Logo-Transparent.png"
                  alt="Mentor"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              {/* To be updated --- Mentor name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Mentor</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-3">
                {/* To be updated -- Career Name */}
                {moduleData.level} Expert
              </div>
              <p className="text-sm text-gray-600 mb-6 max-w-sm">
                {moduleData.mentorComment}
              </p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>Ask a Question</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
