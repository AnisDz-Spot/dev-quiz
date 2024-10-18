"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import QuestionChoice from "@/components/QuestionChoice";
import { getQuestions } from "@/lib/utils";
import useStore from "@/lib/store";

const Subject = () => {
  const { subject }: { subject: string } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0); // Stores Current Question Index
  const userChoice = useStore((state) => state.userAnswer) || ""; // Stores Clicked Choice
  const updateScore = useStore((state) => state.updateScore); // Update User Score
  const userScore = useStore((state) => state.userScore); // Get User Score
  const updateUserAnswer = useStore((state) => state.getUserAnswer); // Update User Score
  const router = useRouter();

  const data = getQuestions(subject, questionIndex); // Retrieve Data Of The Current Subject
  const { options, question, answer } = data;

  const getNextQuestion = () => {
    for (let i = 1; i <= options.length; i++) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  useEffect(() => {
    if (userChoice === answer) updateScore();
  }, [userChoice]);

  useEffect(() => {
    updateUserAnswer("");
  }, [questionIndex]);

  return (
    <section className="flex flex-col lg:flex-row py-5 mt-5 lg:mt-5">
      <div className="relative w-full lg:w-[48%] lg:min-h-[60vh] lg:pr-12 flex flex-col justify-between">
        <div>
          <p className="text-text-color-p italic mb-8 dark:text-white">
            Question {questionIndex + 1} of 10
          </p>
          <p className="text-text-color text-[2rem] font-medium dark:text-white">
            {question}
          </p>
          {userChoice && (
            <p className="mt-5 text-xl">
              Your answer is{" "}
              {answer === userChoice ? (
                <span className="bg-green-500 px-2 text-white">correct</span>
              ) : (
                <span className="bg-red-500 px-2 text-white">Incorrect</span>
              )}
            </p>
          )}
          <div className="bg-purple w-fit px-5 py-3 rounded-xl flex flex-col justify-center items-center gap-2 text-white text-xl mt-7">
            <p>Score</p>
            <span className="text-3xl">{userScore}</span>
          </div>
        </div>
        <div className="bg-gray-200 rounded-full w-full h-5 flex items-center my-10 lg:my-0">
          <div
            className="h-full bg-purple rounded-full mr-4 flex justify-center items-center text-white"
            style={{
              width: `${(questionIndex + 1) * 10}%`,
            }}
          >
            {(questionIndex + 1) * 10}%
          </div>
        </div>
      </div>
      <div className="w-full lg:min-h-[40vh] lg:w-[52%] lg:px-8">
        <QuestionChoice questions={options} answer={answer} />
        <button
          onClick={() => {
            if (questionIndex < 9) getNextQuestion();
            else router.push("/result");
          }}
          className="w-full bg-purple text-white text-2xl py-4 rounded-lg mt-4"
          disabled={userChoice ? false : true}
        >
          {questionIndex === 9 ? "Finish" : "Next Question"}
        </button>
      </div>
    </section>
  );
};

export default Subject;
