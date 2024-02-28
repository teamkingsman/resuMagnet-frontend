export const quiz = {
  totalQuestions: 5,
  questions:
   [
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
    {
      id: 6,
      question: 'Which operator can be used to conditionally render a React component?',
      answers: ['&&', '||', '::', '??'],
      correctAnswer: '&&',
    },
    {
      id: 7,
      question: 'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
      answers: ['id', 'data', 'index', 'key'],
      correctAnswer: 'key',
    },
    {
      id: 8,
      question: '<Car {...props} />',
      answers: ['only static ones', 'children', 'only updated ones', 'all of them  '],
      correctAnswer: 'all of them  ',
    },
    {
      id: 9,
      question: 'React separates the user interface into components. How are components combinded to create a user interface?',
      answers: ['With code splitting', 'With webpack', 'By nesting components  ', 'By putting them in a folder structure'],
      correctAnswer: 'By nesting components  ',
    },
    {
      id: 10,
      question: 'What is a common use case for ref?',
      answers: ['To refer to a function', 'To directly access a DOM node', 'To bind the function', 'To refer to another JavaScript file'],
      correctAnswer: 'To directly access a DOM node',
    },
  ],

};