export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date | null;
  completed: boolean;
  }