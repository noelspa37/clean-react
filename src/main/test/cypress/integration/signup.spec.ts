import * as FormHelper from '../support/form-helper'

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    FormHelper.testInputStatus('name', 'Campo obligatorio')
    cy.getByTestId('name').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('email', 'Campo obligatorio')
    cy.getByTestId('email').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('password', 'Campo obligatorio')
    cy.getByTestId('password').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('passwordConfirmation', 'Campo obligatorio')
    cy.getByTestId('passwordConfirmation').should('have.attr', 'readOnly')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
