declare namespace Cypress {
    interface Chainable {
        validateNameError(value: string): void
        validateEmailError(value: string): void
        validatePasswordError(value: string): void
        validateTermsError(value: string): void
        getStartedNow(): void
        enterName(value: string): void
        enterEmail(value: string): void
        enterPassword(value: string): void
        acceptTerms(): void
        verifySignUpCompleted(): void
    }
}
