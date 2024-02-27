// import Quiz from '@/components/QuizAplication/Quiz';
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <Quiz/> */}

      <h1 className="text-center">Quiz App</h1>
      <div className=" justify-center flex gap-10 mt-4 mb-4">
        <Link href="quizApp/react">
          <button className="btn bg-orange-700 p-2 rounded-lg">
            React Quiz
          </button>
        </Link>
        <Link href="quizApp/javascriptApp">
          <button className="btn bg-cyan-600 p-2 rounded-lg">
            JavaScript Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
