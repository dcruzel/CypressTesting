## CypressTesting

## Description

This project is to take the starter codebase of a fully functioning Tech Quiz application and enhance it by adding Cypress for both component and end-to-end tests. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It allows users to take a quiz of ten random questions and view their final score.

![A GIF demonstrates a functioning quiz.](./Assets/19-testing-homework-demo.gif)

## User Story
```md
- AS AN aspiring developer
- I WANT to take a tech quiz
- SO THAT I can test my knowledge and improve my skills
```


## Table of Contents

- [Introduction](#introduction)
- [Technology](#technology)
- [Usage](#usage)
- [Contact](#credits)
- [License](#license)

## Introduction
```md
GIVEN I am taking a tech quiz
WHEN I click the start button
THEN the quiz starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN all questions are answered
THEN the quiz is over
WHEN the quiz is over
THEN I can view my score
WHEN the quiz is over
THEN I can start a new quiz
```

## Technology
[![React](https://img.shields.io/badge/Framework-React-00ff00?style=plastic&logo=React&logoWidth=10)](https://reactjs.org/)
[![Cypress](https://img.shields.io/badge/Language-Cypress-00ff00?style=plastic&logo=Cypress&logoWidth=10)](https://www.cypress.io/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-00ff00?style=plastic&logo=TypeScript&logoWidth=10)](https://www.typescriptlang.org/)
[![npm](https://img.shields.io/badge/Tools-npm-ff0000?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/)
[![VS Code](https://img.shields.io/badge/IDE-VSCode-ff0000?style=plastic&logo=VisualStudioCode&logoWidth=10)](https://code.visualstudio.com/docs)

## Usage
- [Github Repo](https://github.com/dcruzel/CypressTesting)
- [Video](https://drive.google.com/file/d/12HSww98tslbxCv1S3pyiwoqrffTTLbIi/view?usp=sharing)

## Getting Started
- To install: npm i
- To build app: npm build
- To run app: npm run start:dev
- To test for cypress component: npm run test
- To test for cypress e2e: npm run cypress

- Directory structure looks like the following example:

```md
.
├── client/                 // the client application
├── cypress/                // Folder for Cypress
    ├── component/          // Folder for component tests
        └── Quiz.cy.jsx     // Component tests for the Quiz component
    ├── e2e/                // Folder for end-to-end tests
        └── quiz.cy.js      // End-to-end tests for the Tech Quiz
    ├── fixtures/           // Folder for test fixtures
        └── questions.json  // Mock data for testing
    └── tsconfig.json
├── server/                 // the server application
├── .gitignore
├── cypress.config.ts       // Runs the application using imports from lib/
├── package.json
├── tsconfig.json
└── README.md              // App description, link to video, setup and usage instructions           
```


## Resources

- Module 19

## Contact

Elizabeth D'Cruz
- [Github Profile](https://github.com/dcruzel)
- [Email](Liz.c.dcruz@gmail.com)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

