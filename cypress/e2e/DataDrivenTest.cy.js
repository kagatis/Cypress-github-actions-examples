describe("MyTestSuite", () =>
{
    it("DataDrivenTest", () =>
    {
        cy.fixture("orangehrm2").then((data) =>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            data.forEach((userdata) =>{
                cy.get("[name='username']").type(userdata.username);
                cy.get("[name='password']").type(userdata.password);
                cy.get("[type='submit']").click();

                if(userdata.username == 'Admin' && userdata.password=='admin123')
                {
                    cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").should('have.text',userdata.expected);
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

                }
                else
                {
                    cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p").should('have.text',userdata.expected);
                }
            })
        })
    })
})