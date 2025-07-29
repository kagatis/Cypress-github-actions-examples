/// <reference types = 'cypress'/>
describe("DropDowns", () =>
{
    it.skip("DropDown with Select Tag", () =>
    {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select("Grenada").should('have.value','Grenada')
    })

    it.skip("DropDown without Select Tag", () =>
    {
        cy.visit("https://www.dummyticket.com/")
        cy.get("body > div.ffb-id-navigation-header.wrapper.ff-boxed-wrapper.animsition.animsition-ended > div > div > section.ffb-id-1bsbiuq2.fg-section.fg-el-has-bg.fg-text-light.has-fg-bg.fg-hover > div > div > div > div > div > div > a").click()
        cy.wait(5000)
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field[type='text']").type('Iran').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Iran')
    })

    it.skip("Auto Suggest DropDown", () =>
    {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        cy.get(".suggestion-title").contains("Delhi University").click()
    })

    it("Dynamcic DropDown", () =>
    {
        cy.visit("https://www.google.com/")
        cy.get(".gLFyf[name='q']").type("cypress automation")
        cy.wait(5000)
        cy.get("div.wM6W7d>span").should('have.length',12)
        cy.get("div.wM6W7d>span").each(($el,index,$list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })
        cy.get(".gLFyf[name='q']").should('have.value','cypress automation tutorial')
        
    })
});