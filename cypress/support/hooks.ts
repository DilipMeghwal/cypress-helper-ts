
export const getTestHooks = () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', () => {
            return false
        })
    })
}