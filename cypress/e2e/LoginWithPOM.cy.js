import Login from "../PageObjects/LoginPage_1.js";

describe("POM", () =>
{
    it("General Appraoch", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").should('have.text','Dashboard')
    })

    it.skip("POM Appraoch", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln = new Login();
        ln.setUserName('Admin');
        ln.setPassword('admin123');
        ln.clickSubmit();
        ln.verifyLogin();     
    })

    it.skip("POM Appraoch with Fixtures", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then((data) => 
        {
            const ln = new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        })  
    })
})