/// <reference types="cypress" />

describe('Locator', () => {
    beforeEach(() => {
        cy.visit('./elements')
    })

    it('locating elements with get', () => {
        // Get all elements by tag name
        cy.get('button');

        //Gete all elements by class name
        cy.get('.btn-with-class')

        //Get all elements with specific classes 
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']") 
        
        cy.get("[class='Elements-btn btn-with-class']") 

        //Get all elements by ID
        cy.get('[id="btn-with-id"]')
        cy.get('#btn-with-id')

        //Get all elements by specific attribute
        cy.get('[type="submit"]')

        //Get al elements by tag name and class
        cy.get('button.Elements-btn')

        //Get all elements by Tag name And Class And id
        cy.get('button.Elements-btn#btn-with-id')

        //Get all elem by Tagname And Classname And type attribute
        cy.get('button.Elements-btn[type="submit"]')

        //Get all elements with specific data test id
        cy.get('[data-cy="btn-id-1"]')
        cy.getByWhatEverNameYouWEant('btn-id-1')
    })

    it('locates elem with contains', () => {
        // get element by text

        cy.contains('Unique Text')

        //Get elemnent by test  (this gets the first element that has the exact text if there are more is a bad habit)
        cy.contains('Not Unique Text')

        // Combine with selector
        cy.contains('[type="submit"]', 'Not Unique Text')
        cy.contains('form', 'Not Unique Text')

        //combine sontains with get
        cy.get('[type="submit"]').contains('Not Unique Text')

    })

    it('locates element with find', () => {
        cy.get('#form-1').find('.btn-1')
        cy.get('form').find('.btn-2')
    })
})