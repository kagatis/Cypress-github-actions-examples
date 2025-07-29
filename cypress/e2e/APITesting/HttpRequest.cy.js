///<reference types = 'cypress'/>
describe("HTTP Requests", ()=>{
        it("GET Call", ()=>{
            cy.request("GET",'https://jsonplaceholder.typicode.com/posts').its('status').should('equal',200);
        });
        it.skip("POST Call",()=>{
            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: {
                            userId: 115,
                            id: 115,
                            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                            body: "sunt rem eveniet architecto"
                }
            }).its('status').should('equal',201);
        });
        it.skip("PUT Call",()=>{
            cy.request({
                method: 'PUT',
                url:'https://jsonplaceholder.typicode.com/posts/1',
                body:{
                        userId: 1,
                        id: 1,
                        title: "Sun-moon rises in the East",
                        body: "Sun-moon sets in the West"
                }
            }).its('status').should('equal',200)
        });
        it.skip("DELETE Call",()=>{
            cy.request({
                method: 'DELETE',
                url: 'https://jsonplaceholder.typicode.com/posts/1'
            }).its('status').should('equal',200)
        })
});

