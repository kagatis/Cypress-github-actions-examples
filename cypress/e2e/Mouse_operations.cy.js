import 'cypress-iframe'
require("@4tw/cypress-drag-drop")
describe("Mouse Operations" , () =>
{
    it.skip("Mouse Hover", () =>
    {
        cy.visit("https://demo.opencart.com/")
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should('not.be.visible')
        cy.get("#narbar-menu > ul > li:nth-child(1) > a").trigger('mouseover').click()
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should('be.visible')
    })

    it.skip("Right Click", () =>
    {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        //Appraoch-1
        /*
        cy.get("body > div > section > div > div > div > p > span").trigger('contextmenu')
        cy.get('.context-menu-icon-cut > span').should('be.visible')
        */
        //Approach-2
        cy.get("body > div > section > div > div > div > p > span").rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible')

    })

    it.skip("Double Click", () =>
    {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#iframeResult")
        cy.wait(100000)
        //Appraoch-1
        //cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
        //cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')
        //Aproach-2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')

    })

    it.skip("Drag and Drop using plug-in", () =>
    {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box6").should('be.visible')
        cy.get("#box106").should('be.visible')
        cy.wait(5000)
        cy.get("#box6").drag("#box106",{force:true})
    })

    it.only("Scrolling Page", () =>
    {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(86) > td:nth-child(1) > img").scrollIntoView({duration:5000})
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(86) > td:nth-child(1) > img").should('be.visible')

        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(1) > img").scrollIntoView({duration:5000})
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(1) > img").should('be.visible')

        cy.get("#footer").scrollIntoView({duration:10000})
    })
});