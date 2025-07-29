describe("Handling different types of alerts", () =>
{
    it.skip("Simple Alert", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("#content > div > ul > li:nth-child(1) > button").click();
        cy.on('window:alert', (t)=>
        {
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    it.skip("Confirmation Alert with OK", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("#content > div > ul > li:nth-child(2) > button").click();
        cy.on('window:confirm', (t)=>
        {
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.get("#result").should("have.text",'You clicked: Ok')
    })

    it.skip("Confirmation Alert with Cancel", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("#content > div > ul > li:nth-child(2) > button").click();
        cy.on('window:confirm', (t)=>
        {
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm',() => false);
        cy.get("#result").should("have.text",'You clicked: Cancel')
       
    })

    it.skip("Confirmation Alert with Cancel", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) =>
        {
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get("#content > div > ul > li:nth-child(3) > button").click()
        //cy.on('window:prompt',() => false);
        cy.get("#result").should('have.text','You entered: welcome');
    })

    it("Authenticated Alert", () =>
    {
        //Approach-1
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username:"admin",password:"admin"}})
        cy.get("#content > div > p").should('have.contain','Congratulations')*/
        //Approach-2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("#content > div > p").should('have.contain','Congratulations')

    })
})