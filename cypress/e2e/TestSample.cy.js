///<reference types = 'cypress'/>
describe("Test Suit", ()=>
{
it("Test Case", ()=>
{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
cy.title("").should('eq','OrangeHRM')
cy.wait(10000)
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin').click()
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
// cy.wait(10000)
// // cy.get("[name='username']").type('Admin')
// //cy.wait(10000)
});
});