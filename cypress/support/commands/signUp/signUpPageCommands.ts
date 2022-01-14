import * as signUpPage from '../../pages/signUpPage'

Cypress.Commands.add("getStartedNow", () => {
    cy.log('click on get started now button')
    signUpPage.getStartButton()
        .should("be.visible")
        .click({ force: true })
})

Cypress.Commands.add("enterName", (name) => {
    cy.log('Enter name')
    signUpPage.getName()
        .should("be.visible")
        .type(name)
})

Cypress.Commands.add("validateNameError", (errorMessage) => {
    cy.log('Validate name error message')
    signUpPage.getNameError()
        .should("be.visible")
        .should("have.text", errorMessage)
})

Cypress.Commands.add("enterEmail", (email) => {
    cy.log('Enter email')
    signUpPage.getEmail()
        .should("be.visible")
        .type(email)
})

Cypress.Commands.add("validateEmailError", (errorMessage) => {
    cy.log('Validate email error message')
    signUpPage.getEmailError()
        .should("be.visible")
        .should("have.text", errorMessage)
})

Cypress.Commands.add("enterPassword", (password) => {
    cy.log('Enter password')
    signUpPage.getPassword()
        .should("be.visible")
        .type(password)
})

Cypress.Commands.add("validatePasswordError", (errorMessage) => {
    cy.log('Validate password error message')
    signUpPage.getPasswordError()
        .should("be.visible")
        .contains(errorMessage)
})

Cypress.Commands.add("acceptTerms", () => {
    cy.log('Accept terms')
    signUpPage.getTermsCheckbox()
        .should("exist")
        .click({ force: true })
})

Cypress.Commands.add("validateTermsError", (errorMessage) => {
    cy.log('Validate terms error message')
    signUpPage.getTermsError()
        .should("be.visible")
        .should("have.text", errorMessage)
})

Cypress.Commands.add("verifySignUpCompleted", () => {
    cy.log('Validate terms error message')
    signUpPage.getSignUpFormTitle()
        .should("be.visible")
        .should("have.text", "Check your email")
})