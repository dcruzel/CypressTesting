import { mount } from '@cypress/react18';
import Quiz from '../../client/src/components/Quiz';
import questions from "../fixtures/questions.json";
import * as questionApi from '../../client/src/services/questionApi';

describe('<Quiz />', () => {
  beforeEach(() => {
    cy.stub(questionApi, 'getQuestions').resolves(questions);
  });

  it("A user can arrive at the homepage", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
  }
  );


});
