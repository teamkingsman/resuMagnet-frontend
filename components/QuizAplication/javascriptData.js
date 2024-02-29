export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question:
        'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      answers: ["if(i!==5)", "if(i<>5)", "if i=!5", "if <>5"],
      correctAnswer: "if (i != 5) ",
    },
    {
      id: 2,
      question: "How do you round the number 7.25, to the nearest integer?",
      answers: [
        "round(7.25)",
        "rnd(7.25)",
        "Math.round(7.25)",
        "Math.rnd(7.25)",
      ],
      correctAnswer: "Math.round(7.25)",
    },
    {
      id: 3,
      question: "Which event occurs when the user clicks on an HTML element?",
      answers: ["onChange", "onmouseclick", "onclick", "onmouseover"],
      correctAnswer: "onclick",
    },
    {
      id: 4,
      question: "How do you find the number with the highest value of x and y?",
      answers: [
        "Math.max(x, y)  ",
        "Math.ceil(x, y)",
        "ceil(x, y)",
        "top(x, y)",
      ],
      correctAnswer: "Math.max(x, y)  ",
    },
    {
      id: 5,
      question: "How do you declare a JavaScript variable?",
      answers: ["variable carName;", "v carName;", "var carName;", "var Name; "],
      correctAnswer: "var carName; ",
    },
    {
      id: 6,
      question: "Which operator is used to assign a value to a variable?",
      answers: ["*", "x", "#", "-"],
      correctAnswer: "=",
    },
    {
      id: 7,
      question: "How does a FOR loop start?",
      answers: ["for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
      correctAnswer: "for (i = 0; i <= 5; i++) ",
    },
    {
      id: 8,
      question: "How does a WHILE loop start?",
      answers: ["while (i <= 10; i++)", "while i = 1 to 10", "while (i == 10)", "while (i <= 10)"],
      correctAnswer: "while (i <= 10)",
    },
    {
      id: 9,
      question: "Inside which HTML element do we put the JavaScript?",
      answers: ["<js>", "<scripting>", "<javascript>", "<script>"],
      correctAnswer: "<script>",
    },
    {
      id: 10,
      question: "What will the following code return: Boolean(10 > 9)",
      answers: ["NaN", "false", "true", "NULL"],
      correctAnswer: "true",
    },
  ],
};