import DashboardHeader from "@/components/dashboard/dashboardHeader";
import DashboardCards from "@/components/dashboard/dashboardCards";
import LearningTrack from "@/components/dashboard/learningTrack";
import RecentAchievements from "@/components/dashboard/recentAchievements";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <DashboardHeader
        title="Progress"
        badgeText="Frontend"
        subtitle="Frontend Development Track"
      />

      <DashboardCards />
      <LearningTrack />
      <RecentAchievements />
    </div>
  );
};

export default Dashboard;
