describe("MyTestSuite", () =>
{
    //Direct Access
    it("FixturesDemoTest", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("[name='username']").type("Admin");
        cy.get("[name='password']").type("admin123");
        cy.get("[type='submit']").click();
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").should('have.text','Dashboard');


    })
    
    it("FixturesDemoTest", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('orangehrm').then( (data) =>
        {
            cy.get("[name='username']").type(data.username);
        cy.get("[name='password']").type(data.password);
        cy.get("[type='submit']").click();
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").should('have.text',data.expected);


        })

    })
    
    //Access through Hook
    it.only("FixturesDemoTest", () =>
    {

    }) 
})