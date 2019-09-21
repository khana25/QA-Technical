/// <reference types="Cypress" />

describe("BJSS Testing Apps 1", () => {

    it("Confirm that the blue button ids", () => {

        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains('Challenging DOM').click();
 
        
        cy.get('.large-2.columns a:first-child').then(($btn) => {

            // store the button's text
            const txt = $btn.text()
          
            // click a red button
            cy.get('.button.alert').click();
          
            // compare the previous and present button's text
            // and make sure they are different
            cy.get('.large-2.columns a:first-child').should(($btn2) => {
              expect($btn2.text()).not.to.eq(txt)
            })
        })

      })  

      it("Confirm that the red button ids", () => {

        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains('Challenging DOM').click();

        cy.get('.button.alert').then(($redBtn) => {

            // store the button's text
            const txt1 = $redBtn.text()
          
            // click a red button
            cy.get('.button.alert').click();
          
            // compare the previous and present button's text
            // and make sure they are different
            cy.get('.button.alert').should(($btn2) => {
              expect($btn2.text()).not.to.eq(txt1)
            })
        })

      })   

      it("Confirm that the green button ids", () => {

        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains('Challenging DOM').click();

        cy.get('.button.success').then(($greenBtn) => {

            // store the button's text
            const txt2 = $greenBtn.text()
          
            // click a red button
            cy.get('.button.alert').click();
          
            // compare the previous and present button's text
            // and make sure they are different
            cy.get('.button.success').should(($btn2) => {
              expect($btn2.text()).not.to.eq(txt2)
            })
        })

      })   
})   