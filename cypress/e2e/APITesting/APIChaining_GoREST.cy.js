//f105ac4ed072d23e512fe21f8ab2e33a616746d49226759c7397b08ff5c1cd83

//https://gorest.co.in/public/v2/users
/*
GET : https://gorest.co.in/public/v2/users/7440050
POST : https://gorest.co.in/public/v2/users
DELETE : https://gorest.co.in/public/v2/users
*/

///<reference types = 'cypress'/>
describe("API Chaining",()=>{
    const auth_token="Bearer f105ac4ed072d23e512fe21f8ab2e33a616746d49226759c7397b08ff5c1cd83"
    it("Create,Update & Delete user is Go REST API",()=>{
        cy.request({
                    method:'POST',
                    url:'https://gorest.co.in/public/v2/users',
                    body:{
                         "name": "RRR",
                         "email": Math.random().toString(5).substring(2)+"@gmail.com",
                         "gender": "male",
                         "status": "active"
                    },
                    headers:{
                                authorization: auth_token
                    }
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq("RRR")
            const userID=response.body.id;
            //Update User Name
            cy.request({
                        method:'PUT',
                        url:`https://gorest.co.in/public/v2/users/${userID}`,
                        body:{
                            name:"AAA"
                        },
                        headers:{
                                    authorization: auth_token
                        }
            }).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq("AAA")
                //Delete Resource
                cy.request({
                            method:'DELETE',
                            url:`https://gorest.co.in/public/v2/users/${userID}`,
                            headers:{authorization: auth_token}
                }).then((response)=>{
                    expect(response.status).to.be.eq(204);
                })
            })
        })
    });
});
