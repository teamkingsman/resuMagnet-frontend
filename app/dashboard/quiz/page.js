// import Quiz from '@/components/QuizAplication/Quiz';
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* <Quiz/> */}

      <h1 className="text-3xl md:text-4xl mt-4 font-extrabold text-center">Quiz App</h1>
      <div className=" justify-center flex gap-10 mt-4 mb-4">
        <Link href="quizApp/react">
          <button className="btn border-4 mt-5 border-main bg-orange-700 p-2 rounded-lg text-xl md:text-2xl uppercase mx-3">
            React Quiz
          </button>
        </Link>
        <Link href="quizApp/javascriptApp">
          <button className="btn border-4 mt-5 border-main bg-orange-700 p-2 rounded-lg text-xl md:text-2xl uppercase mx-3">
            JavaScript Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
