import { BadgeCheck, Code, Rocket } from "lucide-react";

export const learning = [
  {
    id: "1",
    title: "HTML & CSS Fundamentalls",
    xp: 300,
    totalXp: 300,
    status: "completed",
    achievedBadge: Code,
    achievedTitle: "Code Master",
    updated: "2025/04/15",
  },
  {
    id: "2",
    title: "JavaScript Basics",
    xp: 150,
    totalXp: 250,
    status: "progress",
    achievedBadge: Rocket,
    achievedTitle: "Quick Learner",
    updated: "2025/04/20",
  },
  {
    id: "3",
    title: "React JS Framework",
    xp: 0,
    totalXp: 500,
    status: "locked",
    achievedBadge: BadgeCheck,
    achievedTitle: "CSS Expert",
    updated: "2025/04/10",
  },
];

export const learningPath = {
  learningTrack: "Frontend Development",
  duration: "4 weeks",
  goal: "",
  beginner: {
    icon: "",
    modules: [
      {
        id: "",
        number: 1,
        title: "",
        subtitle: "",
        duration: "",
        status: "", // locked, in progress, completed, not started
        objective: [""],
        contents: [
          {
            title: "",
            duration: "",
            status: "",
            contentType: "",
            contentLink: "", // external link to the content
            contentAssessment:[
              {
                question: "",
                options:[""],
                answer: ""
              }
            ],
          }

        ],
        challenge: {
        
        },
        acheivementBadgeIcon: "",
        xp: 0,
        mentorComment: ""
      },

    ],
  },

  intermediate: {
    icon: "",
  },

  advance: {
    icon: "",
  },
};
