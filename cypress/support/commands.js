// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types = 'cypress' />

Cypress.Commands.add("getIframe",(iframe)=>
{
    return cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);
})


//Custom commands for clicking on link using label
Cypress.Commands.add('ClickLink',(label) =>
{
    cy.get('a').contains(label).click();
})

//Over Write Command
/*Cypress.Commands.overwriteQuery('contains',(originalFn,subject,filter,text,options = {})=>
{
    if(typeof text === 'object' )
    {
        options = text
        text = filter
        filter = undefined
    }

    options.matchCase = false

    return originalFn(subject,text,filter,options)
})*/

//Custom Command for Login
Cypress.Commands.add("loginapp",(email,password) =>
{
    cy.get('#Email').type(email);
    cy.get('#Password').type(password)
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.buttons > button').click()
})