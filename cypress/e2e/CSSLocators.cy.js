describe("CSS Locators", () =>
{
    it("css locators", () =>
    {
        cy.visit("http://www.automationpractice.pl/")
        cy.get('#search_query_top').type('T-Shirts')
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains('T-Shirts') //Assertion
    })
    it("css locators", () =>
    {
        cy.visit("http://www.automationpractice.pl/")
        cy.title().should('eq','My Shop')
    })
})