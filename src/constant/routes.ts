const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  ONBOARDING: "/onboarding",
  Dashboard: "/dashboard",
  LEARNINGPATH: "/dashboard/learning-path",
  CHAT: "/dashboard/chat",
  INTERVIEW: "/dashboard/interview",
  SETTING: "/dashboard/setting",
  PROFILE: "/dashboard/setting/profile",
  // Dynamic routes
  paths: {
    MODULE: (moduleId: string) => `/dashboard/learning-path/${moduleId}`,
    CHALLENGE: (id: string) => `/dashboard/challenge/${id}`,
    CHALLENGES: "/dashboard/challenge",
  }
} as const;

export default ROUTES;
