import {
  Code,
  Server,
  Palette,
  Settings2,
  LineChart,
  Plus,
  Leaf,
  BarChart3,
  BookOpenCheck,
  Presentation,
  ClipboardList,
  Rocket,
  TrendingUp,
  Zap,
} from "lucide-react";

const Careers = [
  {
    icon: Code,
    name: "Frontend",
    desc: "Master modern web development",
  },
  {
    icon: Server,
    name: "Backend",
    desc: "Build robust server applications",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    desc: "Design beautiful user experiences",
  },
  {
    icon: Settings2,
    name: "DevOps",
    desc: "Automate and streamline development processes",
  },
  {
    icon: LineChart,
    name: "Data Science",
    desc: "Analyze and interpret data to drive insights",
  },
  {
    icon: Plus,
    name: "Others",
    desc: "Specify your field",
  },
];

const Goals = [
  {
    icon: BookOpenCheck,
    goal: "Become job-ready",
    desc: "Prepare for your first career role or transition",
  },
  {
    icon: BarChart3,
    goal: "Master new skills",
    desc: "Learn trending tools and frameworks",
  },
  {
    icon: ClipboardList,
    goal: "Build a strong portfolio",
    desc: "Create impressive projects to showcase your skills",
  },
  {
    icon: Presentation,
    goal: "Prepare for interviews",
    desc: "Sharpen your technical and soft skills",
  },
  {
    icon: Rocket,
    goal: "Launch your own product",
    desc: "Turn your idea into a real-world application",
  },
  {
    icon: TrendingUp,
    goal: "Advance your current role",
    desc: "Level up and aim for higher positions",
  },
];

const Levels = [
  {
    icon: Leaf,
    level: "Beginner",
    desc: "Just starting out or learning basics",
  },
  {
    icon: Zap,
    level: "Intermediate",
    desc: "Comfortable with fundamentals, ready for advanced topics",
  },
  {
    icon: TrendingUp,
    level: "Advanced",
    desc: "Experienced, seeking mastery",
  },
];

const Mentors = [
  {
    imageUrl: "/Mentor-AI-Logo-Transparent.png",
    name: "Lisa Zhang",
    attribute: "Team Leadership",
    desc: "Guiding others to grow with clarity and empathy",
  },
  {
    imageUrl: "/Mentor-AI-Logo-Transparent.png",
    name: "Emmanuel Torres",
    attribute: "Problem Solving",
    desc: "Loves turning complex problems into simple solutions",
  },
  {
    imageUrl: "/Mentor-AI-Logo-Transparent.png",
    name: "Karen Müller",
    attribute: "Continuous Learning",
    desc: "Encourages curiosity and lifelong learning in tech",
  },
];

export { Careers, Goals, Levels, Mentors };
