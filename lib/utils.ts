import quiz from "@/data/data.json"
import { Question, Quiz } from "./types";

export const getQuestions = (subject: string, quesIndex : number) => { 
    const subjectData: Quiz[] = quiz.quizzes.filter(
            (sub) => sub.title.toLowerCase() === subject.toLocaleLowerCase()
    );
    
    const questionData : Question[] = subjectData[0].questions;
    const question  = questionData[quesIndex].question; // Return String
    const answer  = questionData[quesIndex].answer; // Return String
    const options  = questionData[quesIndex].options; // Return an array
    
    const data = {question : question,  answer : answer, options : options};
    return data;
}