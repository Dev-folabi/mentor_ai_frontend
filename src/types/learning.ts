// Define the Module type
export type Module = {
  id: string;
  number: number;
  title: string;
  description: string;
  level: string;
  durationWeeks: number;
  status: string;
  objective: string[];
  acheivementBadgeIcon: string;
  mentorComment: string;
  xp: number;
  content: ContentItem[];
  challenges: ChallengeItem[];
};

// Define the ContentItem type
export type ContentItem = {
  id: string;
  title: string;
  number: number;
  status: string;
  contentType: string;
  contentLink: string;
  contentAssessment: {
    question: string;
    options: string[];
    answer: string;
    userAnswer: string;
    score: number;
    mentorComment: string;
  }[];
};

export type ChallengeItem = {
  id: string;
  title: string;
  description: string;
  contentUrl: string;
  hasSubmit: boolean;
  submissionType: string;
  createdAt: string;
  updatedAt: string;
};

// Define the CareerPath type
export type CareerPath = {
  id: string;
  name: string;
  description: string;
  duration: string;
  modules: Module[];
};