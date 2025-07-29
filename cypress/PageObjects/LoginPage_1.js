//Approach-2
class Login
{

    txtUserName="[name='username']";
    txtPassword="[name='password']";
    btnSubmit="button[type='submit']";
    lblMsg="#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6";
    setUserName(username)
    {
        cy.get(this.setUserName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin()
    {
        cy.get(this.lblMsg).should('have.text','Dashboard')
    }
}
export default Login;