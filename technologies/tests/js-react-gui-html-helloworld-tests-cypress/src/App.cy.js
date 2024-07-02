import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />);
    cy.get("div").should('contain', 'Hello World!');
  })
})