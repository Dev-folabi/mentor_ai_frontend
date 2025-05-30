"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Status } from "@/constant/levels";
import { GetModuleProgress } from "@/lib/progress";
import { Module } from "@/types/learning";

interface ModuleHeaderProps {
  Module: Module;
}

export default function ModuleHeader({ Module }: ModuleHeaderProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 md:p-6 mb-8 shadow">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{Module.title}</h1>
          <p className="text-gray-600">{Module.description}</p>
        </div>

        <div className="flex flex-col items-end mt-4 md:mt-0">
          {Module.status === Status.COMPLETED ? (
            <Badge>
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                Completed
              </span>
            </Badge>
          ) : Module.status === Status.NOT_STARTED ? (
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6">
              {"Start Now"}
            </Button>
          ) : Module.status === Status.IN_PROGRESS ? (
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
        <span className="text-sm font-medium">Progress</span>
        <span className="text-sm font-medium">
          {GetModuleProgress(Module)}%
        </span>
      </div>

      <Progress
        value={GetModuleProgress(Module)}
        bg="bg-gray-300"
        progressColour="bg-indigo-600"
        className="h- w-full"
      />
    </div>
  );
}