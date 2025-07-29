///<reference types = 'cypress'/>
describe("Authentication",()=>{
    it.skip("Basic Authentication",()=>{
            cy.request({
                        method:'GET',
                        url:'https://httpbin.org/basic-auth/example_username/example_password',
                        auth:{user:'example_username',pass:'example_password'}
            }).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.authenticated).to.eq(true);
            })      
    });
    it.skip("Digest Authentication",()=>{
            cy.request({
                        method:'GET',
                        url:'https://httpbin.org/basic-auth/example_username/example_password',
                        auth:{username:'example_username',password:'example_password',method:'digest'}
            }).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.authenticated).to.eq(true);
            })      
    });
    const Token='fdf54gfe46';
    it.skip("Bearer Token",()=>{
        cy.request({
                    method:'GET',
                    url:'url',
                    headers:{Authorization:"Bearer "+Token}
        }).then((response)=>{
            expect(response.status).to.equal(200);
        })
    });
    it.skip("API Key Auth",()=>{
            cy.request({
                        method:'GET',
                        url:'url',
                        qs:{Key:'Value'}
            }).then((response)=>{
                expect(response.body).to.eq(200);
            })
    });
});
