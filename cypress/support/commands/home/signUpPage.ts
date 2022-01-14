import * as homePage from '../../pages/signUpPage'

Cypress.Commands.add('login', (user) => {
    cy.log('login in')
    homePage.loginInTopBar_btn()
        .should("be.visible")
        .click()
    homePage.email_input()
        .should("be.visible")
        .type(user.email)
    homePage.password_input()
        .should("be.visible")
        .type(user.password)
    homePage.loginIn_btn()
        .should("be.visible")
        .click()
})