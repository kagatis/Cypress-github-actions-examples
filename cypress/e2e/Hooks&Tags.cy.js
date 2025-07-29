describe("My Test Suite", () =>
{
    before(() =>
    {
        cy.log("***** Launch App *****");
    })

    beforeEach(() =>
    {
        cy.log("***** Login *****");
    })

    it("Search", () =>{
        cy.log("***** Search *****");
    })

    it("Advanced Search", () =>{
        cy.log("***** Advanced Search *****");
    })

    it("Listing Products", () =>{
        cy.log("***** Listing Products *****");
    })

    afterEach(() =>
    {
        cy.log("***** Logout *****");
    })

    after(() =>
    {
        cy.log("***** Close App *****");
    })

})