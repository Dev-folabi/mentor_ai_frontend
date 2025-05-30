"use client";

import React, { useState, useRef, useEffect } from "react";
import AssessmentModal from "@/components/learningPath/AssessmentModal";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { useApi } from "@/hooks/useApi";
import { getModuleContent } from "@/services/api/modules";
import { Status } from "@/constant/levels";
import ModuleHeader from "@/components/learningPath/ModuleHeader";
import ModuleOverview from "@/components/learningPath/ModuleOverview";
import ModuleContentList from "@/components/learningPath/ModuleContentList";
import AdditionalResources from "@/components/learningPath/AdditionalResources";
import MentorSupport from "@/components/learningPath/MentorSupport";
import LoadingSpinner from "@/components/loading-spinner";

interface PageProps {
  params: {
    moduleId: string;
  };
}

export default function Module({ params }: PageProps) {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedAssessment, setSelectedAssessment] = useState<{
    questions: {
      question: string;
      options: string[];
      answer: string;
      mentorComment?: string;
    }[];
    isCompleted?: boolean;
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
          refsMapRef.current[refKey] =
            React.createRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
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
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500">Error loading module: {error.message}</div>
    );
  }

  if (!moduleResponse || !moduleResponse.data) {
    return  <LoadingSpinner />;
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
      <ModuleHeader Module={moduleData} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Module Overview Section */}
          <ModuleOverview Module={moduleData} />

          {/* Module Content Section */}
          <ModuleContentList
            content={moduleData.content}
            selectedModule={selectedModule}
            handleModuleClick={handleModuleClick}
            moduleRefs={moduleRefs}
            setSelectedAssessment={setSelectedAssessment}
            Status={Status}
          />
        </div>

        <div className="md:col-span-1">
          {/* Additional Resources Section */}
          <AdditionalResources />

          {/* Mentor Support Section */}
          <MentorSupport Module={moduleData} />
        </div>
      </div>
    </div>
  );
}
