///<reference types = 'cypress'/>

//Pre-Requisite : TO Generate Code in Step_1:
//GET Request : URL followed by the Client_ID : 'url/client_ID'

/* 
Step-1: 
Get the OAuth 2 Access Token . For that we require
POST : 'URL'
Query Params:
1)Client ID
2)Client Secret
3)Code

Step-2:
Send GET Request by using access token.
GET : 'URL'
Auth : Access Token
*/

describe("OAuth2 Authentication",()=>{
    let accessToken="";
    it("OAuth2.0",()=>{
            cy.request({
                        method:'POST',
                        url:'URL',
                        qs:{client_id:'adfwr534sg',cilent_secret:'fddw3545rt',code:'54rhtyerfg4'}
            }).then((response)=>{
                    //access_token=frwt45dgw4tw454fg&srtstoken_type=bearer
                    const params = response.body.split("&");
                    accessToken = params[0].split("=")[1];
            })
    });
    it("OAuth2 Request",()=>{
            cy.request({
                        method:'GET',
                        url:'URL',
                        headers:{Authorization:'Bearer'+accessToken}
            }).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.client_id).to.eq(1);
            })
    });
});