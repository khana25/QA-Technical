/// <reference types="Cypress" />

describe("BJSS Testing App 2", () => {

    it("Login applicaConfirm that the blue, red, and green button ids", () => {

        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains('Dynamic Loading').click();

        cy.contains('Example 2: Element rendered after the fact').click();
        cy.url().should("include", "/dynamic_loading/2");

        cy.get('button').click();
        
       
        cy.wait(5000)

        cy.get('#finish > h4').should('have.text', 'Hello World!')

    })
})   