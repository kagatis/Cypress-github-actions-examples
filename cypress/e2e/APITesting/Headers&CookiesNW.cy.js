///<reference types = 'cypress'/>
describe("API Testing", ()=>{
    let authToken=null;
    before("Creating Access Token",()=>{
        cy.request({
            method:'POST',
            url:'url',
            headers:{'content-Type':'application/json'},
            body:{
                     clientName: "ABCDE",
                     clientEmail: Math.random().toString(5).substring(2)+"@gamil.com"
            }
        }).then((response)=>{
                authToken=response.body.accessToken;
        })
    });
    before("Creating New Order",()=>{
        cy.request({
            method:'POST',
            url:'url',
            headers:{'content-Type':'application/json','Authorization':'Bearer'+authToken},
            body:{
                         bookId: 1,
                         customerName: "abcde"
            }
        }).then((response)=>{
               expect(response.status).to.eq(201);
               expect(response.body.created).to.eq(true);
        })
    });
    it("GET : Fetching The Orders Details",()=>{
        cy.request({
                    method:'GET',
                    url:'url',
                    headers:{'content-Type':'application/json','Authorization':'Bearer'+authToken},
                    cookies:{'cookieName':'myCookie'}
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        })
    });
    
});
