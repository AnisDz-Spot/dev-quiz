"use client";

import useStore from "@/lib/store";
import { useRouter } from "next/navigation";

const Result = () => {
  const router = useRouter();
  const userScore = useStore((state) => state.userScore); // Get User Score
  const updateScore = useStore((state) => state.updateScore);
  const userAnswer = useStore((state) => state.getUserAnswer);

  const resetUserStats = () => {
    updateScore(0);
    userAnswer("");
  };

  return (
    <section className="flex flex-col lg:flex-row gap-16 lg:gap-0 py-4 lg:py-8">
      <div className="w-full lg:w-1/2">
        <p className="text-text-color text-[3rem] lg:text-[4rem] dark:text-white">
          Quiz completed
        </p>
        <p className="text-text-color text-[3rem] lg:text-[4rem] dark:text-white font-semibold">
          You scored...
        </p>
      </div>
      <div className="w-full lg:w-1/2 px-10 flex flex-col justify-center items-center">
        <div className="w-full py-10 bg-white rounded-2xl">
          <div className="flex justify-center items-center">
            <div className="bg-css-bg rounded-lg p-1">
              <img
                src="/assets/images/icon-css.svg"
                alt="Css icon"
                width="32px"
                height="32px"
              />
            </div>
            <p className="text-text-color text-2xl ml-4 font-medium">CSS</p>
          </div>
          <h3 className="text-text-color text-[8rem] text-center font-semibold">
            {userScore}
          </h3>
          <p className="text-center text-text-color-p">out of 10</p>
        </div>
        <button
          onClick={() => {
            resetUserStats();
            router.push("/");
          }}
          className="w-full rounded-2xl text-white py-4 text-2xl font-semibold mt-5 bg-purple hover:bg-black duration-300"
        >
          Play Again
        </button>
      </div>
    </section>
  );
};

export default Result;
