describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:3001/');
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
  it("A user can got to the first question with 4 options", () => {
    //Click on the Start Quiz button
    cy.get('button').contains("Start Quiz").click();
    //Check if the user can see the first question 
    cy.get('.card').children().eq(0).should("not.be.empty").and('contain', 'Test Question 1');
    //Check if there are 4 options
    cy.get('.alert.alert-secondary')
      .eq(0)
      .should("not.be.empty")
      .and('contain', 'Option 1-1');
    cy.get('.alert.alert-secondary')
      .eq(1)
      .should("not.be.empty")
      .and('contain', 'Option 1-2');
    cy.get('.alert.alert-secondary')
      .eq(2)
      .should("not.be.empty")
      .and('contain', 'Option 1-3');
    cy.get('.alert.alert-secondary')
      .eq(3)
      .should("not.be.empty")
      .and('contain', 'Option 1-4');
  })

  it("A user can go to next question with 4 options", () => {
    cy.get('button').click();
    cy.get('.card').children().eq(0).should("not.be.empty").and('contain', 'Test Question 1');

    cy.get('.card').children().eq(1).find('button').eq(0).click();

    cy.get('.card').children().eq(0).should("not.be.empty").and('contain', 'Test Question 2');
    //Check if there are 4 options
    cy.get('.alert.alert-secondary')
      .eq(0)
      .should("not.be.empty")
      .and('contain', 'Option 2-1');
    cy.get('.alert.alert-secondary')
      .eq(1)
      .should("not.be.empty")
      .and('contain', 'Option 2-2');
    cy.get('.alert.alert-secondary')
      .eq(2)
      .should("not.be.empty")
      .and('contain', 'Option 2-3');
    cy.get('.alert.alert-secondary')
      .eq(3)
      .should("not.be.empty")
      .and('contain', 'Option 2-4');
  })


  it("A user can reach the result page", () => {
    cy.get('button').click();

    cy.get('.card').children().eq(1).find('button').eq(0).click();

    cy.get('.card').children().eq(1).find('button').eq(0).click();
   
    cy.get('h2').should("contain", "Quiz Completed")

  })

  it("A user can start a new quiz", () => {
    cy.get('button').click();
    //Go through the two questions
    cy.get('.card').children().eq(1).find('button').eq(0).click();

    cy.get('.card').children().eq(1).find('button').eq(0).click();
   
    cy.get('h2').should("contain", "Quiz Completed");
    //Check if the Take New Quiz button works
    cy.get('button').contains("Take New Quiz").click();

  })



});