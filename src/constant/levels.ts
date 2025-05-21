const LEVELS = {
    BEGINNER: "BEGINNER",
    INTERMEDIATE: "INTERMEDIATE",
    ADVANCED: "ADVANCED",
  } as const;

const Status = {
    LOCKED: "LOCKED",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED",
    NOT_STARTED: "NOT_STARTED",
  } as const;

export type LevelType = typeof LEVELS[keyof typeof LEVELS];
export type StatusType = typeof Status[keyof typeof Status];

export { LEVELS, Status };
