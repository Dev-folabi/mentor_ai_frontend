import { Badge } from "@/components/ui/badge";
import { BellIcon, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: string[];
  badgeText?: string;
  rightContent?: React.ReactNode;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  badgeText,
  rightContent,
}) => {
  return (
    <div className="flex justify-between items-start mb-6">
      {/* Left Side */}
      <div className="flex flex-col gap-2">
        {/* Breadcrumbs or Title + Subtitle */}
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <div className="flex items-center gap-1 text-sm text-gray-500">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <span
                  className={
                    index === breadcrumbs.length - 1
                      ? "font-semibold text-gray-800"
                      : ""
                  }
                >
                  {crumb}
                </span>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-4 mb-2">
              <p className="text-2xl font-bold">{title}</p>
              {badgeText && (
                <Badge className="hidden md:block bg-green-200 text-green-800 px-4 py-1 rounded-full">
                  {badgeText}
                </Badge>
              )}
            </div>
            {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
          </div>
        )}
      </div>

      {/* Right Side */}
      {rightContent ? (
        rightContent
      ) : (
        <div className="flex items-center gap-4">
          <div className="relative">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </div>
          <Image
            src="/Mentor-AI-Logo-Transparent.png"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
