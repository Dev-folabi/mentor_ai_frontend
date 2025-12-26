"use client";

import React from "react";
import { FileText, Video, ChevronDown, ChevronUp, Play } from "lucide-react";
import { FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Status } from "@/constant/levels";
import { ContentItem } from "@/types/learning"; 

interface ModuleContentListProps {
  content: ContentItem[];
  selectedModule: string | null;
  handleModuleClick: (moduleId: string) => void;
  moduleRefs: Record<string, React.RefObject<HTMLDivElement>>;
  setSelectedAssessment: React.Dispatch<React.SetStateAction<{
    questions: {
      question: string;
      options: string[];
      answer: string;
      mentorComment?: string;
    }[];
    isCompleted?: boolean;
    userAnswers?: string[];
    score?: number;
  } | null>>;
  Status: typeof Status;
}

export default function ModuleContentList({
  content,
  selectedModule,
  handleModuleClick,
  moduleRefs,
  setSelectedAssessment,
  Status,
}: ModuleContentListProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h2 className="text-lg font-bold mb-4">Module Content</h2>

      <div className="space-y-4">
        {content && content.length > 0 ? (
          content.map((contentItem, index) => (
            <div
              key={contentItem.id || index}
              className={`border border-gray-300 rounded-lg overflow-hidden`}
              ref={moduleRefs[contentItem.id || `content-${index}`]}
            >
              <div
                className={`flex items-center justify-between p-3 ${
                  contentItem.status !== Status.LOCKED &&
                  "hover:bg-gray-50 cursor-pointer"
                }`}
                onClick={() =>
                  contentItem.status !== Status.LOCKED &&
                  handleModuleClick(`content-${index}`)
                }
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    {contentItem.contentType === "video" ? (
                      <Video className="h-4 w-4 text-indigo-600" />
                    ) : (
                      <FileText className="h-4 w-4 text-indigo-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{contentItem.title}</h3>
                    {/* To be updated */}
                    <p className="text-sm text-gray-500">{"10 minutes"}</p>
                  </div>
                </div>
                <div className="items-center">
                  {contentItem.status === Status.LOCKED ? (
                    <FaLock className="h-5 w-5 text-gray-600 cursor-not-allowed" />
                  ) : selectedModule === `content-${index}` ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>

              {selectedModule === `content-${index}` &&
                contentItem.status !== Status.LOCKED && (
                  <div className="p-4 bg-gray-50 border-t">
                    {contentItem.contentType === "video" && (
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <Play className="h-12 w-12 text-gray-400" />
                      </div>
                    )}

                    <div className="prose max-w-none">
                      <p>
                        {/* To be updated */}
                        {
                        // contentItem.description ||
                          "This section covers important concepts and practical examples."
                        }
                      </p>

                      {contentItem.contentAssessment &&
                        contentItem.contentAssessment.length > 0 && (
                          <div className="mt-4 flex justify-between items-center">
                            {/* To be updated */}
                            <h4>
                              {contentItem.status === Status.COMPLETED
                                ? "View Score"
                                : "Assessment Available"}
                            </h4>
                            <Button
                              onClick={() =>
                                setSelectedAssessment({
                                  questions: contentItem.contentAssessment,
                                  isCompleted:
                                    contentItem.status === Status.COMPLETED,
                                  userAnswers:
                                    contentItem.userAssessmentAnswers,
                                  score: contentItem.assessmentScore,
                                })
                              }
                              className={`${
                                contentItem.status === Status.COMPLETED
                                  ? "bg-green-600 hover:bg-green-700"
                                  : "bg-indigo-600 hover:bg-indigo-700"
                              } text-white cursor-pointer`}
                            >
                              {contentItem.status === Status.COMPLETED
                                ? "Completed"
                                : "Take Assessment"}
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
  );
}