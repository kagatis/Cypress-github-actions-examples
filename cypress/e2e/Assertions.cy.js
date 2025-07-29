describe("Assertions Demo", () =>
{
    it("Implicit Assertions", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        .and('include','Orange')
        .and('contain','HRM')

        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','opensource-demo.orangehrmlive.com')
        cy.url().should('not.contain','opensource-demo.Greenhrmlive.com')

        cy.get('.orangehrm-login-branding > img').should('be.visible') // Logo Image Visible or Not
        .and('exist') //Logo Image Exists or Not

        cy.get("[name='username']").type("Admin")
        cy.get("[name='username']").should('have.value','Admin') //Entered text is correct or not 'Admin'
        cy.get("[name='username']").should('have.length','1') //Entered text is one single word or not 'Admin'
    })

    it("Explicit Assertions", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()

        let expName="Smith Brenna";
        cy.get(".oxd-userdropdown-name").then((x) =>{
                let actName=x.text()
                expect(actName).to.equal(expName)
                expect(actName).to.not.equal(expName)
        })
    })
})