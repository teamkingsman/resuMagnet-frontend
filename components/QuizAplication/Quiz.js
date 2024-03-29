"use client";
import React, { useEffect, useState } from "react";
// import style from '../style.css'
import { quiz } from "/components/QuizAplication/data";
 
const Page = () => {
  useEffect(()=>{
  quiz.questions = shuffleArray(quiz.questions);
  quiz.questions  = quiz.questions.slice(0, 5);
  },[])
  
  console.log(quiz);
  // console.log(slicedQuestions);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  // const { questions } = slicedQuestions;
  const { questions } = quiz;
  console.log(questions[activeQuestion]);
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer, index) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log(true);
    } else {
      setSelectedAnswer(false);
      console.log(false);
    }
  };
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };
  return (
    <div className=" bg-slate-500 mx-auto w-full p-20 h-[800px] max-w-min[740px] font-serif">
      <div className="w-[500px] mx-auto bg-slate-50 shadow-2xl py-10 text-center">
        <div>
          <h1 className="text-xl font-bold">Quiz Page</h1>
          <h2 className="text-xl font-bold">
            Question:{activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
        </div>
        <div>
          {!showResult ? (
            <div className="bg-[#f8f8f8] p-5 mt-5 rounded-lg ">
              <h3 className=" font-bold text-xl">
                {/* {questions[activeQuestion]}. */}
                {questions[activeQuestion].question}
              </h3>
              {answers.map((answer, index) => (
                <div
                  key={index}
                  className="bg-[##000105]  cursor-pointer rounded-xl py-1 text-left m-2"
                >
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    className={
                      selectedAnswerIndex == index
                        ? "bg-[#000925] rounded-md p-2 text-[#fff]"
                        : " bg-[#d8d8d8] p-2 columns-xl"
                    }
                  >
                    <span className=" border-spacing-2"> {answer}</span>
                  </li>
                </div>
              ))}

              {checked ? (
                <button onClick={nextQuestion} className="btn bg-slate-300 w-full rounded-md p-2">
                  {activeQuestion === question.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="btn-disabled bg-slate-300 w-full rounded-md p-2"
                >
                  {" "}
                  {activeQuestion === question.length - 1 ? "Finish" : "Next"}
                </button>
              )}
            </div>
          ) : (
            <div className="bg-[##000105] cursor-pointer rounded-xl py-2 font-bold  m-2">
            <div className="text-left text-lg">
            <h3>Results</h3>
              <h3>Overall {(result.score / 25) * 100}%</h3>
              <p>
                Total Questions: <span>{questions.length}</span>
              </p>
              <p>
                Total Score: <span>{result.score}</span>
              </p>
              <p>
                Correct Answers: <span>{result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
              </p>
            </div>
              <button
                className="text-center mt-4 bg-slate-300 w-full rounded-md p-2"
                onClick={() => window.location.reload()}
              >
                Restart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}