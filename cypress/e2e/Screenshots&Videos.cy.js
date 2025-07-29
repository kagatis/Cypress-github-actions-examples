describe("Screenshots and Videos", () => 
{
    it("Screenshot", () =>
    {
        //Intentional Screenshot
        /*cy.visit("https://demo.opencart.com/")
        cy.screenshot('homepage')
        cy.get("#logo > a > img").screenshot('logo')*/

        //Failure Screenshot and Video Automatically - Only through CLI

        cy.visit("https://demo.opencart.com/")
        cy.get("#narbar-menu > ul > li:nth-child(7) > a").click()
        cy.get("#content > h2").should('have.text','Tablets')


    })
})