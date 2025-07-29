///<reference types='cypress'/>    
//For auto suggestions
const xml2js=require('xml2js');
const parser=new xml2js.Parser({explicitArray:false});
describe("XML Parcing",()=>{
    const xmlpayload="<Pet><id>0</id><Category><id>0</id><name>string</name></Category><name>doggie</name><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><Tag><id>0</id><name>string</name></Tag></tags><status>available</status></Pet>";
    let petid=null;
    before("Creating PET",()=>{
            cy.request({
                        method:'POST',
                        url:'https://petstore.swagger.io/v2/pet',
                        body:xmlpayload,
                        headers:{'Content-Type':'application/xml','accept':'application/xml'}
            }).then((response)=>{
                expect(response.status).to.equal(200);
                parser.parseString(response.body,(err,result)=>{
                    petid=result.Pet.id;
                })
            })
    });
    it("Fetching Pet Data - Parsing xml response",()=>{
            cy.request({
                        method:'GET',
                        url:'https://petstore.swagger.io/v2/pet/'+petid,
                        headers:{'accept':'application/xml'}
            }).then((response)=>{
                expect(response.status).to.equal(200);
                parser.parseString(response.body,(err,result)=>{
                    expect(result.Pet.name).to.equal("doggie");
                    expect(result.Pet.id).to.equal(petid);
                })
            })
    });
});
