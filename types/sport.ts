//BACKEND
export type CyclingSession = {
  date: string;
  distance_km: number;
  duration_min: number;
  avg_speed_kmh: number;
  calories: number;
};

export type CalisthenicsExercise = {
  name: string;
  reps: number;
  sets: number;
};

export type CalisthenicsSession = {
  date: string;
  exercises: CalisthenicsExercise[];
  duration_min: number;
};

export type CyclingGoals = {
  next_distance_km: number;
  target_speed_kmh: number;
};

export type CalisthenicsGoals = {
  pullups_goal: number;
  workouts_per_week: number;
};

export type User = {
  username: string;
  avatar: string;
  sports: {
    cycling?: {
      sessions: CyclingSession[];
      goals: CyclingGoals;
      year_progress: {
        total_km: number;
        total_sessions: number;
      };
    };
    calisthenics?: {
      sessions: CalisthenicsSession[];
      goals: CalisthenicsGoals;
      year_progress: {
        total_workouts: number;
        total_minutes: number;
      };
    };
  };
};



//FRONTEND
export type UserSummary = {
  username: string;
  avatar: string;
};
