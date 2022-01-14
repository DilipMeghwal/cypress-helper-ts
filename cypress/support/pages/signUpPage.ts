export const getName = () => cy.get('input[id="name"]')
export const getNameError = () => cy.get('label[id="nameError"]')
export const getEmail = () => cy.get('input[id="email"]')
export const getEmailError = () => cy.get('label[id="emailError"]')
export const getPassword = () => cy.get('input[id="password"]')
export const getPasswordError = () => cy.get('div[id="signup-form-password"')
export const getTermsCheckbox = () => cy.get('input[id="signup-terms"]')
export const getTermsError = () => cy.get('label[id="termsError"]')
export const getStartButton = () => cy.get('button[type="submit"]')
export const getSignUpFormTitle = () => cy.get('h1[class="signup__title-form"]')