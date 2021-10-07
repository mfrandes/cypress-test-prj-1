/// <reference types="cypress" />

describe('Accomplishments dashboard', () => {
    beforeEach(() => {
        cy.visit('/accomplishments')
    })

    it('should showcase error if information is missing', () => {
        cy.get('[data-cy="accomplishment-title-input"]').type('Basket ball accomplishement')
        cy.get('[data-cy="accomplishment-input"]').type('Basket ball accomplishement Input')
        cy.get('.Accomplishment-btn').click()
        cy.get('.Accomplishment-error-container').should('be.visible')
    })

    it('should display validation component if all information is input', () => {
        cy.get('[data-cy="accomplishment-title-input"]').type('Basket ball accomplishement')
        cy.get('[data-cy="accomplishment-input"]').type('Basket ball accomplishement Input')
        cy.get('[data-cy="accomplishment-checkbox"]').click()
        cy.get('.Accomplishment-btn').click()
        cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')
    })

    it('should return back to accomplishment with empty inputs when go back click', () => {
        cy.get('[data-cy="accomplishment-title-input"]').type('Basket ball accomplishement')
        cy.get('[data-cy="accomplishment-input"]').type('Basket ball accomplishement Input')
        cy.get('[data-cy="accomplishment-checkbox"]').click()
        cy.get('.Accomplishment-btn').click()
        cy.contains('Go Back').click()
        cy.contains('h2', 'Accomplishment').should('be.visible')
        cy.get('[data-cy="accomplishment-title-input"]').should('have.value', '')
        cy.get('[data-cy="accomplishment-input"]').should('have.value', '')
        cy.get('[data-cy="accomplishment-checkbox"]').should('not.be.checked')

    })
})