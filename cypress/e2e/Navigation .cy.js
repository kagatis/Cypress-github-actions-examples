describe("Navigation", () => 
{
    it("GO", () =>
    {
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store')
        cy.wait(3000)

        cy.get("#narbar-menu > ul > li:nth-child(7) > a").click()
        cy.get("#content > h2").should('have.text','Cameras')
        cy.wait(3000)

        cy.go('back')
        cy.title().should('eq','Your Store')
        cy.wait(3000)

        cy.go('forward')
        cy.get("#content > h2").should('have.text','Cameras')
        cy.wait(3000)

        cy.go(-1)
        cy.title().should('eq','Your Store')
        cy.wait(3000)

        cy.go(1)
        cy.get("#content > h2").should('have.text','Cameras')
        cy.wait(3000)

        cy.reload();



    })
})