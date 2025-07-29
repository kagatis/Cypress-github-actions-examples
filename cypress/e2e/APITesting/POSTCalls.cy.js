///<reference types = 'cypress'/>
describe("API POST Call Approaches",()=>{
    it.skip("Approach-1 Hard Coded json object",()=>{
        const requestBody =
        {

                tourist_name: "Kagati'ss",
                tourist_email: "INDIA50000@gmail.com",
                tourist_location: "India10005"
        } 
        cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: requestBody
        }).then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq("Kagati'ss")
                expect(response.body.tourist_email).to.eq("INDIA50000@gmail.com")
                expect(response.body.tourist_location).to.eq("India10005")
        })
    });
    it.skip("Approach-2 Dynamically Genarating json object",()=>{
        const requestBody =
        {

                tourist_name: Math.random().toString(5).substring(2),
                tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
                tourist_location: Math.random().toString(5)
        } 
        cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: requestBody
        }).then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    });
    it("Approach-3 Using Fixtures",()=>{
        cy.fixture('tourist').then((myfixturedata)=>{
                const requestBody=myfixturedata
                cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: requestBody
        }).then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
                expect(response.body).has.property("tourist_email",requestBody.tourist_email)
                expect(response.body).to.have.property("tourist_email",requestBody.tourist_email)
        })

        })
        
    });
});
