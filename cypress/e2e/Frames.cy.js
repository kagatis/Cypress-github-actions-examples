import 'cypress-iframe'
describe("Iframes", () =>
{
    it.skip("Approach-1", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe=cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);
        iframe.clear().type("Welcome {cmd+a}")
        cy.get("#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)").click();
    })

    it.skip("Approach-2 using custom command", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}")
        cy.get("[aria-label='Bold']").click();
        
    })

    it("Approach-3 using Plug-In", () =>
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr");
        cy.iframe("#mce_0_ifr").clear().type("Cypress {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
        
    })
})