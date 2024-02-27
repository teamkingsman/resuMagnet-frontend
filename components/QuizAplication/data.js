export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: 'What command is used to start the React local development server?',
        answers: ['npm run dev', 'npm serve', 'npm start', 'npm build'],
        correctAnswer: 'npm start',
      },
      {
        id: 2,
        question: 'What is the default local host port that a React development server uses?',
        answers: ['5000', '3000', '8080', '3500'],
        correctAnswer: '3000',
      },
      {
        id: 3,
        question: 'Which keyword creates a constant in JavaScript?',
        answers: ['let', 'const', 'constant', 'var'],
        correctAnswer: 'const',
      },
      {
        id: 4,
        question: 'A copy of the real DOM that is kept in memory is called what?',
        answers: ['virtual DOM', 'shadow DOM', 'React DOM', 'DOM'],
        correctAnswer: 'virtual DOM',
      },
      {
        id: 5,
        question: 'What tool does React use to compile JSX?',
        answers: ['ReactDOM', 'ReactRouter', 'Babel', 'JSX Compiler'],
        correctAnswer: 'Babel',
      },
    ],
  };