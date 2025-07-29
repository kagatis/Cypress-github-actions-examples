describe("Custom Commands" , () =>
{
    it.skip("Handling Links ", () =>
    {
        cy.visit("https://demo.nopcommerce.com/")
        //cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div > div.product-grid.home-page-product-grid > div.item-grid > div:nth-child(2) > div > div.details > h2 > a").click()
        cy.ClickLink('Apple MacBook Pro 13-inch')
        cy.get("#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name > h1").contains('Apple MacBook Pro 13-inch')
    })

    it.skip("Overwrite Links ", () =>
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.ClickLink('APPLE MACBOOK PRO 13-inch')
        cy.get("#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name > h1").contains('Apple MacBook Pro 13-inch')
       
    })

    it.only("Login Command ", () =>
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.ClickLink('Log in')
        cy.loginapp('kkk@gmail.com','kkk@123')
        cy.get('body > div.master-wrapper-page > div.header > div.header-upper > div.header-links-wrapper > div.header-links > ul > li:nth-child(1) > a').should('have.text','My account')
        
    })


} )
