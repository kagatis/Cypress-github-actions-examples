//Approach-1
class Login
{
    setUserName(username)
    {
        cy.get("[name='username']").type(username);
    }

    setPassword(password)
    {
        cy.get("[name='password']").type(password);
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }

    verifyLogin()
    {
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").should('have.text','Dashboard')
    }
}
export default Login;