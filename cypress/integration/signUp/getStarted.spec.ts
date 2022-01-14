import { getTestHooks } from "../../support/hooks"

describe('Validate sign up form', () => {
    getTestHooks()
    it('Validate error messages when no data entered', () => {
        cy.visit('/')
        cy.getStartedNow()
        cy.validateNameError("Please enter your name.")
        cy.validateEmailError("Enter your email address.")
        cy.validatePasswordError("Enter your password.")
        cy.validateTermsError("Please agree with the Terms to sign up.")
        cy.wrap(2).should("equal", 3)
    })

    it('Validate error messages when only name is entered', () => {
        cy.visit('/')
        cy.enterName("Vishnu")
        cy.getStartedNow()
        cy.validateEmailError("Enter your email address.")
        cy.validatePasswordError("Enter your password.")
        cy.validateTermsError("Please agree with the Terms to sign up.")
    })

    it('Validate error messages when only email is entered', () => {
        cy.visit('/')
        cy.enterEmail("vishnu@gmail.com")
        cy.getStartedNow()
        cy.validateNameError("Please enter your name.")
        cy.validatePasswordError("Enter your password.")
        cy.validateTermsError("Please agree with the Terms to sign up.")
    })

    it('Validate error messages when only password having length less than 7 is is entered', () => {
        cy.visit('/')
        cy.enterPassword("1234567")
        cy.getStartedNow()
        cy.validateNameError("Please enter your name.")
        cy.validateEmailError("Enter your email address.")
        cy.validatePasswordError("Please use 8+ characters for secure password.")
        cy.validateTermsError("Please agree with the Terms to sign up.")
    })

    it('Validate error messages when only terms checkbox is checked', () => {
        cy.visit('/')
        cy.acceptTerms()
        cy.getStartedNow()
        cy.validateNameError("Please enter your name.")
        cy.validateEmailError("Enter your email address.")
        cy.validatePasswordError("Enter your password.")
    })

    it('Validate error messages when only name and email is entered', () => {
        cy.visit('/')
        cy.enterName("Vishnu")
        cy.enterEmail("vishnu@gmail.com")
        cy.getStartedNow()
        cy.validatePasswordError("Enter your password.")
        cy.validateTermsError("Please agree with the Terms to sign up.")
    })

    it('Validate error messages when only email and password with length greater than 8 is entered', () => {
        cy.visit('/')
        cy.enterEmail("vishnu@gmail.com")
        cy.enterPassword("vishnu2022@28972")
        cy.getStartedNow()
        cy.validateNameError("Please enter your name.")
        cy.validateTermsError("Please agree with the Terms to sign up.")
    })

    it('Validate error messages when name, email and password with length 7 is entered', () => {
        cy.visit('/')
        cy.enterName("Vishnu")
        cy.enterEmail("vishnu@gmail.com")
        cy.enterPassword("1234567")
        cy.getStartedNow()
        cy.validatePasswordError("Please use 8+ characters for secure password.")
        cy.validateTermsError("Please agree with the Terms to sign up.")
    })

    it('Validate error messages when name, email and password with length greater than 8 is entered', () => {
        cy.visit('/')
        cy.enterName("Vishnu")
        cy.enterEmail("vishnu@gmail.com")
        cy.enterPassword("123456789")
        cy.getStartedNow()
        cy.validatePasswordError("Weak password")
        cy.validateTermsError("Please agree with the Terms to sign up.")
    })

    it('Validate success messages when valid name, email, password(weak password) is entered and accepted the terms', () => {
        const email = "vishnu" + new Date().getTime() + "@gmail.com"
        cy.visit('/')
        cy.enterName("Vishnu")
        cy.enterEmail(email)
        cy.enterPassword("123456789")
        cy.validatePasswordError("Weak password")
        cy.acceptTerms()
        cy.getStartedNow()
        cy.verifySignUpCompleted()
    })

    it('Validate error messages when valid name, existing email, password(weak password) is entered and accepted the terms', () => {
        const email = "vishnu" + new Date().getTime() + "@gmail.com"
        cy.visit('/')
        cy.enterName("Vishnu")
        cy.enterEmail(email)
        cy.enterPassword("123456789")
        cy.validatePasswordError("Weak password")
        cy.acceptTerms()
        cy.getStartedNow()
        cy.verifySignUpCompleted()

        cy.visit('/')
        cy.enterName("Vishnu")
        cy.enterEmail(email)
        cy.enterPassword("123456789")
        cy.validatePasswordError("Weak password")
        cy.acceptTerms()
        cy.getStartedNow()
        cy.validateEmailError("Sorry, this email is already registered")
    })

    it('Validate error messages when valid name, invalid email (format invalid), password(weak password) is entered and accepted the terms', () => {
        cy.visit('/')
        cy.enterName("Vishnu")
        cy.enterEmail("vishnu@gmail")
        cy.enterPassword("123456789")
        cy.validatePasswordError("Weak password")
        cy.acceptTerms()
        cy.getStartedNow()
        cy.validateEmailError("This doesn’t look like an email address. Please check it for typos and try again.")
    })
})