const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  ONBOARDING: "/onboarding",
  Dashboard: "/dashboard",
  LEARNINGPATH: "/dashboard/learning-path",
  MODULE: (moduleId: string) => `/dashboard/learning-path/${moduleId}`,
  CHALLENGE: "/dashboard/challenge",
  CHAT: "/dashboard/chat",
  INTERVIEW: "/dashboard/interview",
  SETTING: "/dashboard/setting",
  PROFILE: "/dashboard/setting/profile",
};

export default ROUTES;
