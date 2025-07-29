/// <reference types = 'cypress'/>

describe("Check UI Elements", () =>
{
    it.skip("Checking Radio Buttons", () =>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        //Should be visible
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')
        //Should be checked and not checked
        cy.get("#male").check().should("be.checked")
        cy.get("#female").should("not.be.checked")
        cy.get("#female").check().should("be.checked")
        cy.get("#male").should("not.be.checked")
    })

    it("Checking Checkboxes", () =>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        //Checking and un-checking the checkboxes
        cy.get("#sunday").should('be.visible')
        cy.get("#sunday").check().should('be.checked')
        cy.get("#sunday").uncheck().should('not.be.checked')
        //Checking and un-checking all the checkboxes
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.log("*****All Checkboxes Checked")
        cy.wait(5000)
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        cy.log("*****All Checkboxes Un-Checked")
        cy.wait(5000)
        //Selecting first and last checkboxes
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
        cy.wait(5000)
        cy.get(".form-check-input[type='checkbox']").first().uncheck().should('not.be.checked')
        cy.get(".form-check-input[type='checkbox']").last().uncheck().should('not.be.checked')


    })
});