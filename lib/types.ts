type Quiz = {
    title: string;
    icon: string;
    questions: Question[];
  }
  
  type Question = {
    question: string;
    options: string[];
    answer: string;
  }
  
type State = {
  userScore: number;
  userAnswer: string;
  subject: string;
}

type Action = {
  getUserAnswer: (choice : string) => void;
  updateScore: (reset?: number) => void;
  updateSubject: (subject: string) => void;
}

