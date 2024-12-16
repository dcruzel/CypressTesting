//import mount form cypress/react and the Quiz component

import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
  beforeEach(() => {
    cy.intercept(
      {
        //if the api is called, go to fixture
        method: "get",
        url: "/api/questions/random"
      },
      {
        //To pull dummy data from questions.json
        fixture: "questions.json",
        statusCode: 200
      }
    ).as("TestQuestion")
  });

  it("A user can arrive at the homepage", () => {
    //mount is used since it is cypress component testing
    mount(<Quiz />);
    //Click on the Start Quiz button
    cy.contains("Start Quiz").click();
  }
  );
  it("A user can got to the first question with 4 options", () => {
    mount(<Quiz />);
    //Click on the Start Quiz button
    cy.contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
    //Check if there are 4 options
    cy.get('.alert.alert-secondary')
      .eq(0)
      .should('contain', 'Option 1-1');
    cy.get('.alert.alert-secondary')
      .eq(1)
      .should('contain', 'Option 1-2');
    cy.get('.alert.alert-secondary')
      .eq(2)
      .should('contain', 'Option 1-3');
    cy.get('.alert.alert-secondary')
      .eq(3)
      .should('contain', 'Option 1-4');
  })
  it("A user can got to the second question with 4 options", () => {
    mount(<Quiz />);
    //Click on the Start Quiz button
    cy.contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 2-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 2-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 2-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 2-4');
  })
  it("A user can reach the result page", () => {
    mount(<Quiz />);
    //Click on the Start Quiz button
    cy.contains("Start Quiz").click();
    //Select the first button for question 1
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 2
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check of the quiz has the completed message
    cy.get('h2').should("contain", "Quiz Completed");
  })
  it("A user can start a new quiz", () => {
    mount(<Quiz />);
    //Click on the Start Quiz button
    cy.contains("Start Quiz").click();
    //Select the first button for question 1
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 2
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check of the quiz has the completed message
    cy.get('h2').should("contain", "Quiz Completed");
    //Check for the expected score of the quiz
    cy.get('.alert-success').should("contain", "Your score: 2/2");
    //Check if the Take New Quiz button works
    cy.get('button').contains("Take New Quiz").click();
  })
});
