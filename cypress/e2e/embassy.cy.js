describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://bookingembuausa.setmore.com/')
        cy.get('[data-testid="booking-policy-okay-btn"]').click()
        cy.get('[data-testid="953df832-7e12-4796-ae9c-add2ad0621d9"]').click()
        cy.get('[data-testid="d8222c7b-7b82-4bcd-a33e-ae5364aaa831"]').click()
        cy.contains('February is fully booked').should('be.visible')
        cy.get('[data-testid="nextMonth"]').click()
        cy.contains('No slots available').should('be.visible')
        cy.get('[data-testid="nextMonth"]').click()
        cy.contains('No slots available').should('be.visible')
    })
})