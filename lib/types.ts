export type Quiz = {
    title: string;
    icon: string;
    questions: Question[];
  }
  
export type Question = {
    question: string;
    options: string[];
    answer: string;
  }
  
export type State = {
  userScore: number;
  userAnswer: string;
  subject: string;
}

export type Action = {
  getUserAnswer: (choice : string) => void;
  updateScore: (reset?: number) => void;
  updateSubject: (subject: string) => void;
}

