describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:3001/');
    //To pull dummy data from questions.json
    cy.intercept(
      {
        method: "get",
        url: "/api/questions/random"
      },
      {
        fixture: "questions.json",
        statusCode: 200
      }
    ).as("TestQuestion")
  });
  
  it("A user can arrive at the homepage", () => {
    cy.visit('http://127.0.0.1:3001/');
  }
  );

  it("A user can start the quiz", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
  })
  it("A user can got to the 1st question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should("not.be.empty").and('contain', 'Test Question 1');
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

  it("A user can go to 2nd question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
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
  it("A user can got to the 3rd question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the third question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 3');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 3-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 3-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 3-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 3-4');  
  })
  it("A user can got to the 4th question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the third question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 3');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the fourth question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 4');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 4-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 4-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 4-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 4-4');
  })
  it("A user can got to the 5th question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the third question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 3');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fourth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 4');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the fifth question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 5');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 5-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 5-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 5-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 5-4');
  })
  it("A user can got to the 6th question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the third question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 3');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fourth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 4');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fifth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 5');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the sixth question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 6');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 6-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 6-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 6-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 6-4');
  })
  it("A user can got to the 7th question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the third question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 3');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fourth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 4');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fifth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 5');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the sixth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 6');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the seventh question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 7');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 7-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 7-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 7-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 7-4');
  })
  it("A user can got to the 8th question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the third question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 3');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fourth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 4');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fifth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 5');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the sixth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 6');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the seventh question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 7');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the eight question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 8');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 8-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 8-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 8-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 8-4');
  })
  it("A user can got to the 9th question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the third question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 3');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fourth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 4');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fifth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 5');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the sixth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 6');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the seventh question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 7');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the eighth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 8');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the ninth question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 9');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 9-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 9-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 9-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 9-4');
  })
  it("A user can got to the 10th question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 1');
     //Click on the first option 
     cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the second question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 2');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the third question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 3');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fourth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 4');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the fifth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 5');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the sixth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 6');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the seventh question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 7');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the eighth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 8');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check if the user can see the ninth question 
    cy.get('.card').children().eq(0).should('contain', 'Test Question 9');
    //Click on the first option 
    cy.get('.card').children().eq(1).find('button').eq(0).click();
     //Check if the user can see the tenth question 
     cy.get('.card').children().eq(0).should('contain', 'Test Question 10');
     //Check if there are 4 options
     cy.get('.alert.alert-secondary')
       .eq(0)
       .should('contain', 'Option 10-1');
     cy.get('.alert.alert-secondary')
       .eq(1)
       .should('contain', 'Option 10-2');
     cy.get('.alert.alert-secondary')
       .eq(2)
       .should('contain', 'Option 10-3');
     cy.get('.alert.alert-secondary')
       .eq(3)
       .should('contain', 'Option 10-4');
  })

  it("A user can reach the result page", () => {

    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Select the first button for question 1
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 2
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 3
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 4
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 5
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 6
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 7
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 8
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 9
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 10
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check of the quiz has the completed message
    cy.get('h2').should("contain", "Quiz Completed");
  })
  it("A user can start a new quiz", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Select the first button for question 1
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 2
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 3
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 4
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 5
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 6
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 7
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 8
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 9
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Select the first button for question 10
    cy.get('.card').children().eq(1).find('button').eq(0).click();
    //Check of the quiz has the completed message
    cy.get('h2').should("contain", "Quiz Completed");
    //Check for the expected score of the quiz
    cy.get('.alert-success').should("contain", "Your score: 10/10");
    //Check if the Take New Quiz button works
    cy.get('button').contains("Take New Quiz").click();
  })
});