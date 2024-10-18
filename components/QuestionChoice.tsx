import useStore from "@/lib/store";

const QuestionChoice = ({
  questions,
  answer,
}: {
  questions: Question["options"];
  answer: string;
}) => {
  const getUserAnswer = useStore((state) => state.getUserAnswer);
  const userChoice = useStore((state) => state.userAnswer);

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      {questions?.map((q, i) => (
        <div
          onClick={() => {
            if (!userChoice) getUserAnswer(q);
          }}
          key={i}
          className={`relative w-full flex items-center gap-10 bg-white ${
            userChoice
              ? answer === q
                ? "border-[3px] border-green-400"
                : "border-[3px] border-red-400"
              : "border-[3px] border-transparent"
          } px-3 py-4 shadow-[0_5px_5px_0_rgba(0,0,0,0.05)] rounded-lg hover:shadow-[0_5px_5px_0_rgba(0,0,0,0.1)] cursor-pointer duration-300`}
        >
          <span className="text-option-color bg-option-bg text-xl font-semibold px-3 py-1 rounded-md">
            {String.fromCharCode(65 + i)}
          </span>
          <p className="text-text-color font-semibold text-xl  w-full">{q}</p>
          {userChoice && (
            <img
              src={`/assets/images/icon-${
                q == answer ? "correct" : "error"
              }.svg`}
              alt="Correct answer icon"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionChoice;
