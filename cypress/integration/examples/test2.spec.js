/// <reference types="Cypress" />

describe("BJSS Testing App 2", () => {

    it("Confirm that the 'Hello World' text appears after loading", () => {

        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains('Dynamic Loading').click();

        //Click the 'Element rendered after the fact'

        cy.contains('Example 2: Element rendered after the fact').click();
        cy.url().should("include", "/dynamic_loading/2");

        cy.get('button').click();
        
       // Wait for the loading bar fisappears and the final text appears after loading
        cy.wait(5000)

        //verify that the expected text appears after loading and 
        //clicking  the 'Element rendered after the fact'

        cy.get('#finish > h4').should('have.text', 'Hello World!')

    })
})   