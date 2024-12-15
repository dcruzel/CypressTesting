//import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })

  it('renders the Quiz component with the proper content', () => {
    cy.mount(<Quiz />)
    cy.get('h4').should('have.text', 'Made with ❤️ by the Tech Thoughts team.');
  })
})
